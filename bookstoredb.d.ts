// Place where back-end and front-end share typings

export interface BookDB {
    lastupdated: string;
    terms: Term[];
}

export interface Term {
    termid: string;
    year: string;
    season: string;
    dates: {
        start: string;
        end: string;
        rentaldue: string;
        finaidend: string;
    };
    subjects: Subject[];
}

interface Subject {
    name: string;
    courses?: Course[];
}

interface Course {
    name: string;
    sections: Section[];
}

interface Section {
    name: string;
    teacher?: string;
    campus: MccCampus | string;
    building?: string;
    room?: string;
    startdate?: string;
    enddate?: string;
    books: Book[];
}

interface Book {
    name: string;
    author?: string;
    edition?: string;
    publisher?: string;
    isbn?: string;
    prices: {
        condition: BookCondition | string;
        purchase: BookPurchase | string;
        amount: number;
    }[];
}

export enum BookCondition {
    New = 'new',
    Used = 'used',
    Digital = 'digital'
}

export enum BookPurchase {
    Rent = 'rent',
    Buy = 'buy'
}

export enum MccCampus {
    Elkhorn = 'Elkhorn Valley',
    South = 'South',
    Fort = 'Fort',
    Sarpy = 'Sarpy',
    Fremont = 'Fremont'
}

export enum MccSeason {
    Winter = 'WI',
    Spring = 'SP',
    Summer = 'SS',
    Fall = 'FA'
}