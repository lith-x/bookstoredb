import { Parser } from 'htmlparser2';
import { ScrapeHtml } from './scraping';
import { Page } from './constants';

const courseEntryMatch = /titl1-(\d+)_(\d+)?_?/g;

const mccCatalogParser = new Parser({
    onopentag: (name, attribs) => {
        if (name === 'tbody' && attribs['id'].match(/titl5-(\d+)_(\d+)?_?/g)) {

        }
    }
}, {
    decodeEntities: true
});

export namespace Parsing {
    export function mainCatalogPage(page: Page) {
         
    }
}