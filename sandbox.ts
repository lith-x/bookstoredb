import fs from 'fs';
const tableInfoMatcher = /<td class="ms-vb2">\s*?(?:<(?:a.*?|nobr)>)?\s*?([\w\d\-:/()., ]*?)\s*?(?:<\/(?:a|nobr)>)?\s*?<\/td>/g;
const tableLinkMatcher = /<DIV>\s*?<a href='(.+?)' ?target='_blank' ?>(?:Bookstore Link|Important Dates)<\/a>\s*?<\/DIV>/g;
const courseEntryMatcher = /<tr class="(?:ms-alternating)?">/g;

interface Table {
    text: string;
}

// interface RawMccCourse {
//     subject: string;

//     building: string;
//     instructmethods: string;

//     name: string;
//     synonym: string;
//     title: string;
//     teacher: string;

//     time: string;
//     startdate: string;
//     enddate: string;

//     credits: string;
//     bookstorelink: string;
//     importantdates: string;
// }

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

interface RawCatalogCourse {
    info: RawCatalogCourseInfo;
    links: RawCatalogCourseLinks;
}

const courseReference: RawCatalogCourse = {
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

function getCoursesFromTable(table: Table): RawCatalogCourse[] {
    const courses: RawCatalogCourse[] = [];
    const courseInfoKeys = Object.keys(courseReference.info);
    const infoKeyCount = courseInfoKeys.length;
    const courseLinkKeys = Object.keys(courseReference.links);
    const linkKeyCount = courseLinkKeys.length;
    let ci = 0;
    while (courseEntryMatcher.exec(table.text) !== null) {
        courses.push(<RawCatalogCourse>{});
        const courseInfo = <RawCatalogCourseInfo>{};
        for (let i = 0; i < infoKeyCount; i += 1) {
            const courseInfoVal = tableInfoMatcher.exec(table.text) ?? [];
            Object.assign(courseInfo, { [courseInfoKeys[i]]: courseInfoVal[1] });
        }
        courses[ci].info = courseInfo;

        const courseLinks = <RawCatalogCourseLinks>{};
        for (let i = 0; i < linkKeyCount; i += 1) {
            const courseLinkVal = tableLinkMatcher.exec(table.text) ?? [];
            Object.assign(courseLinks, { [courseLinkKeys[i]]: courseLinkVal[1] });
        }
        courses[ci].links = courseLinks;
        ci += 1;
    }
    return courses;
}

const exampleTable = fs.readFileSync('./html/table4.html', { encoding: "utf-8" });
const courses = getCoursesFromTable({ text: exampleTable });
courses.forEach(course => console.log(course));
