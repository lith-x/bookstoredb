// Constants (that will be) needed in more than one file.
export const mccBaseUrl = 'https://catalog.mccneb.edu';
export const mccDefaultPath = '/Lists/Sections/Credit.aspx';

export enum MccSeason {
    Winter = 'WI',
    Spring = 'SP',
    Summer = 'SS',
    Fall = 'FA'
}

export interface MccCatalogPageInfo {
    groupStrings: string[];
    nextPageUrl: string;
    listGuid: string;
    courseTables: Table[];
}

export interface MccCourse {
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

export interface Html {
    text: string;
}
export interface Page extends Html {
    url: string;
}
export interface Table extends Html { }
