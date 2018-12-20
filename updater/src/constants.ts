// Constants (that will be) needed in more than one file.
export const mccBaseUrl = 'https://catalog.mccneb.edu';
export const mccDefaultPath = '/Lists/Sections/Credit.aspx';

export interface MccCatalogPage {
    courses: MccCourse[];
    nextPageUrl: string;
}

export interface MccCourse extends RawCatalogCourse {
    campus: string;
    subject: string;

    building?: string;
    room: string;
    instructmethods: string;

    name: string;
    synonym: string;
    title: string;
    teacher: string;

    time: string;
    startdate: string;
    enddate: string;

    credits: string;
    bookstorelink: string;
    importantdates: string;
}

export interface RawCatalogCourseInfo {
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

export interface RawCatalogCourseLinks {
    bookstore: string;
    importantdates: string;
}

export interface RawCatalogCourse {
    info: RawCatalogCourseInfo;
    links: RawCatalogCourseLinks;
}

const emptyRawCourse: RawCatalogCourse = {
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

export const courseInfoKeys = Object.keys(emptyRawCourse.info);
export const infoKeyCount = courseInfoKeys.length;
export const courseLinkKeys = Object.keys(emptyRawCourse.links);
export const linkKeyCount = courseLinkKeys.length;

export interface Html {
    text: string;
}
export interface Page extends Html {
    url: string;
}
export interface Table extends Html { }

export interface TableInfo {
    groupString: string;
    listGuid: string;
}

export const matchers = {
    course: /id="titl\d+-\d+_\d+_" groupString="(.+?)"/g,
    nextPageUrl: /"ms-paging"(?:[\s\S\n]+?)&quot;(.+?)&quot;/g,
    listGuid: /pageListId:\s*"\{([\w\d-]+?)\}"/g,
    tableInfo: /<td class="ms-vb2">\s*?(?:<(?:a.*?|nobr)>)?\s*?\b([\w\s!"#$%&'()*+,\-./:;<=>?@\[\\\]\^`]*?)\s*?(?:<\/(?:a|nobr)>)?\s*?<\/td>/g,
    tableLink: /<DIV>\s*?<a href='(.+?)' ?target='_blank' ?>(?:Bookstore Link|Important Dates)<\/a>\s*?<\/DIV>/g,
    courseEntry: /<tr class="(?:ms-alternating)?">/g
};
