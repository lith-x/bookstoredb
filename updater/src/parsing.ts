import { Parser as HtmlParser } from 'htmlparser2';
import { Scraper } from './scraping';
import { Page } from './constants';

const courseEntryMatch = /titl1-(\d+)_(\d+)?_?/g;

const mccCatalogParser = new HtmlParser({
    onopentag: (name, attribs) => {
        if (name === 'tbody' && attribs['id'].match(/titl5-(\d+)_(\d+)?_?/g)) {

        }
    }
}, {
    decodeEntities: true
});

export namespace Parser {
    export function mainCatalogPage(page: Page) {
         
    }
}