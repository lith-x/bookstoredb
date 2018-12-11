import { httpsReqBody, getCourseTable } from './scraping';
import { mccBaseUrl, MccCatalogPageInfo, Html, Page, Table } from './constants';

// Matchers, i.e. magic regex sourced from the page's HTML.
const courseMatcher = /id="titl\d+-\d+_\d+_" groupString="(.+?)"/g;
const nextPageUrlMatcher = /"ms-paging"(?:[\s\S\n]+?)&quot;(.+?)&quot;/g;
const listGuidMatcher = /pageListId:\s*"\{([\w\d-]+?)\}"/g;
// tslint:disable-next-line:max-line-length
const tableInfoMatcher = /<td class="ms-vb2">\s*?(?:<(?:a.*?|nobr)>)?\s*?\b([\w\s!"#$%&'()*+,\-./:;<=>?@\[\\\]\^`]*?)\s*?(?:<\/(?:a|nobr)>)?\s*?<\/td>/g;
const tableLinkMatcher = /<DIV>\s*?<a href='(.+?)' ?target='_blank' ?>(?:Bookstore Link|Important Dates)<\/a>\s*?<\/DIV>/g;
const courseEntryMatcher = /<tr class="(?:ms-alternating)?">/g;

export class MccPageParser {
    public static async parsePage(pageUrl: string, first: boolean):
        Promise<MccCatalogPageInfo> {
        try {
            let method: string;
            if (first) method = 'GET';
            else method = 'POST';

            // Wrap in object to pass by reference
            const page = { url: pageUrl, text: await httpsReqBody(pageUrl, method) };

            const groupStrings = MccPageParser.getGroupStrings(page);
            const nextPageUrl = MccPageParser.getNextPageUrl(page);
            const listGuid = MccPageParser.getListGuid(page);
            const courseTables: Table[] = [];
            for (let i = 0; i < groupStrings.length; i += 1) {
                courseTables.push(await getCourseTable(listGuid, groupStrings[i]));
            }

            return { groupStrings, nextPageUrl, listGuid, courseTables };
        } catch (e) {
            console.error(e);
        }
    }

    private static getGroupStrings(htmlBody: Html): string[] {
        try {
            const courses: string[] = [];
            let courseGroupMatch: RegExpExecArray;
            while ((courseGroupMatch = courseMatcher.exec(htmlBody.text)) !== null) { // TODO: see if I even need 2 parenthases around this.
                courses.push(courseGroupMatch[1]);
            }
            return courses;
        } catch (e) {
        }
    }

    private static getNextPageUrl(page: Page): string {
        const nextPagePath = nextPageUrlMatcher.exec(page.text)[1].split('&amp;').join('&');
        return mccBaseUrl + nextPagePath;
    }

    private static getListGuid(htmlBody: Html): string {
        return listGuidMatcher.exec(htmlBody.text)[1].toUpperCase();
    }
}

interface RawCatalogCourseInfo {
    subject: string;

    building: string;
    instructmethods: string;

    name: string;
    synonym: string;
    title: string;
    teacher: string;

    time: string;
    startdate: string;
    enddate: string;

    credits: string;
}

interface RawCatalogCourseLinks {
    bookstore: string;
    importantdates: string;
}

export interface RawCatalogCourse {
    info: RawCatalogCourseInfo;
    links: RawCatalogCourseLinks;
}

const emptyCourse: RawCatalogCourse = {
    info: {
        subject: '',
        building: '',
        instructmethods: '',
        name: '',
        synonym: '',
        title: '',
        teacher: '',
        time: '',
        startdate: '',
        enddate: '',
        credits: ''
    },
    links: {
        bookstore: '',
        importantdates: ''
    }
};

export function getCoursesFromTable(table: Table): RawCatalogCourse[] {
    const courses: RawCatalogCourse[] = [];
    const courseInfoKeys = Object.keys(emptyCourse.info);
    const infoKeyCount = courseInfoKeys.length;
    const courseLinkKeys = Object.keys(emptyCourse.links);
    const linkKeyCount = courseLinkKeys.length;
    let ci = 0;
    try {
        while (courseEntryMatcher.exec(table.text) !== null) {
            courses.push(<RawCatalogCourse>{});
            const courseInfo = <RawCatalogCourseInfo>{};
            for (let i = 0; i < infoKeyCount; i += 1) {
                const infoVal = tableInfoMatcher.exec(table.text)[1];
                (<any>Object).assign(courseInfo, { [courseInfoKeys[i]]: infoVal });
            }
            courses[ci].info = courseInfo;

            const courseLinks = <RawCatalogCourseLinks>{};
            for (let i = 0; i < linkKeyCount; i += 1) {
                const linkVal = tableLinkMatcher.exec(table.text)[1];
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
