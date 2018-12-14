import { writeFileSync } from 'fs';
import { resolve as resolvePath } from 'path';

function main() {
    writeFileSync(resolvePath(__dirname, 'data/courses.json'), '');
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
