import { ScrapeHtml } from './scraping';
import {
    mccBaseUrl, MccCatalogPage, Html, Page, Table, RawCatalogCourse, RawCatalogCourseInfo, RawCatalogCourseLinks,
    courseInfoKeys, courseLinkKeys, infoKeyCount, linkKeyCount, matchers
} from './constants';

export namespace Parser {
    export async function getCoursesFromCatalogPage(page: Page) { }

    export function getCoursesFromTable(table: Table): RawCatalogCourse[] {
        let ci = 0;
        const courses: RawCatalogCourse[] = [];
        try {
            while (matchers.courseEntry.exec(table.text) !== null) {
                courses.push(<RawCatalogCourse>{});
                const courseInfo = <RawCatalogCourseInfo>{};
                for (let i = 0; i < infoKeyCount; i += 1) {
                    const infoVal = matchers.tableInfo.exec(table.text)[1];
                    (<any>Object).assign(courseInfo, { [courseInfoKeys[i]]: infoVal });
                }
                courses[ci].info = courseInfo;

                const courseLinks = <RawCatalogCourseLinks>{};
                for (let i = 0; i < linkKeyCount; i += 1) {
                    const linkVal = matchers.tableLink.exec(table.text)[1];
                    (<any>Object).assign(courseLinks, { [courseLinkKeys[i]]: linkVal });
                }
                courses[ci].links = courseLinks;
                ci += 1;
            }
            return courses;
        } catch (e) {
            console.error('Was not able to parse table. Will get more useful debug info later.');
        }
    }
}

export class MccPageParser {
    public static async parsePage(pageUrl: string):
        Promise<MccCatalogPage> {
        try {
            // Wrap in object to pass by reference
            const page: Page = { url: pageUrl, text: await ScrapeHtml.page(pageUrl) };

            const groupStrings = MccPageParser.getGroupStrings(page);
            const nextPageUrl = MccPageParser.getNextPageUrl(page);
            const listGuid = MccPageParser.getListGuid(page);
            const courseTables: Table[] = [];
            for (let i = 0; i < groupStrings.length; i += 1) {
                const tableText = await ScrapeHtml.courseTable({ listGuid, groupString: groupStrings[i] });
                courseTables.push({ text: tableText });
            }

            return; // { groupStrings, nextPageUrl, listGuid, courseTables };
        } catch (e) {
            console.error(e);
        }
    }

    private static getGroupStrings(htmlBody: Html): string[] {
        try {
            const courses: string[] = [];
            let courseGroupMatch: RegExpExecArray;
            while ((courseGroupMatch = matchers.course.exec(htmlBody.text)) !== null) {
                courses.push(courseGroupMatch[1]);
            }
            return courses;
        } catch (e) {
            console.error(e);
        }
    }

    private static getNextPageUrl(page: Page): string {
        try {
            const nextPagePath = matchers.nextPageUrl.exec(page.text)[1].split('&amp;').join('&');
            return mccBaseUrl + nextPagePath;
        } catch (e) {
            console.warn('Could not find next catalog page\'s url. Returning null.');
            return null;
        }
    }

    private static getListGuid(htmlBody: Html): string {
        return matchers.listGuid.exec(htmlBody.text)[1].toUpperCase();
    }
}

/*
Current table format:
 0  Subject (should have from groupstring)
 1  Building/Room (should have building from groupstring)
 2  Instruction Method(s)
 3  Course Name
 4  Synonym                 ???
 5  Title (Link)
 6  Faculty
 7  Meeting Info
 8  Start Date
 9  End Date
 10 Credits
 11 Bookstore Url
 12 Important Dates

GroupString=%3B%23Accounting%3B%23Elkhorn%20Valley%20Campus%3B%23
GroupString = %3B%23 Accounting %3B%23 Elkhorn Valley Campus %3B%23
%3B%23Biology%3B%23South%20Omaha%20Campus%3B%23
Biology - South Omaha Campus

What do I want to display from the table?

Have already, but still need in object: Subject, Campus
+ (book option dropdown) | Course Number | Course Title | Teacher | Campus | Meeting Info | Start Date | End Date
*/
