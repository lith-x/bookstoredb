import { DomUtils } from './scripts/domutils';
import { reacttest } from './components/test';

if (process.env.NODE_ENV === 'development') {
    require('../index.html');
    require('./style.scss');
}

window.onload = () => {
    console.log('hi');

    DomUtils.clickOnSearch('searchbar');

    reacttest();
};

const isbnToBarcodeBin = (isbn: string | number) => {
    const isbnNum: number = (typeof(isbn) === 'number'
        ? isbn : parseInt(isbn.trim().replace(/\D/, ''), 10));
    // let isbnBin = 5; // binary: 101
    // TODO: Number system code.
    // TODO: Manufacturer code.
    // TODO: 01010
    // TODO: Product code.
    // TODO: Check digit (i.e. 13th digit)
    // TODO: 101
};
