import 'jest';

import { Parser } from '../src/parsing';
import { Scraper } from '../src/scraping';

test('Should throw a connection error', async () => {
    try {
        await Scraper.page('https://127.0.0.1:3001')
    } catch (e) {
        expect(e.message).toMatch('ECONNREFUSED');
    }
});