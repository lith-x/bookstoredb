import { MccPageParser } from './parsing';
import { mccBaseUrl, mccDefaultPath } from './constants';
import { writeFileSync, appendFileSync } from 'fs';

function main() {
    writeFileSync('./courses.txt', '');
    // MccPageParser.parsePage(`${mccBaseUrl}${mccDefaultPath}?FilterField1=TermCode&FilterValue1=18/WI`, true)
    //     .then((pageInfo) => {
    //         pageInfo.courseTables.forEach((table) => {
    //             const tableCourses = getCoursesFromTable(table);
    //             if (tableCourses) tableCourses.forEach(course => appendFileSync('./courses.txt', `\n${JSON.stringify(course)}`));
    //         });
    //     });

    // const firstPageCourses = await getCoursesFromUrl(currentUrl);
}

main();

/*
*/
