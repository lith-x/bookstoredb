import * as https from 'https';
import { tableLink } from './utils';
import { TableInfo } from './constants';

let lastTime = 0;
let requestNum = 1;
const requestWaitTime = 500;

export namespace ScrapeHtml {
    function getHtml(pageUrl: string, method: string): Promise<string> {
        if (requestNum > 20) return null;
        while (Date.now() - lastTime <= requestWaitTime) { }
        lastTime = Date.now();
        return new Promise<string>((resolve, reject) => {
            const requestId = requestNum;
            console.log(`Request ${requestId} (${method}) initiated.`);
            const req = https.request(pageUrl, { method }, (res) => {
                let body = '';
                res.on('data', chunk => body += chunk)
                    .on('end', () => {
                        // console.log(`Request ${requestId} successful. Status: ${res.statusCode} ${res.statusMessage}`);
                        resolve(body);
                    }).on('error', (err) => {
                        // console.warn(`Request ${requestId} error.\nUrl: ${pageUrl}\nStatus: ${res.statusCode} ${res.statusMessage}`);
                        reject(err);
                    });
            });
            req.end();
            requestNum += 1;
        });
    }

    export function page(url: string): Promise<string> {
        let method = 'GET';
        if (url.includes('PageFirstRow=')) method = 'POST';
        try { return getHtml(url, method); }
        catch (e) { console.error(`Was not able to fetch page.\n${e}`); }
    }

    export async function courseTable(tableInfo: TableInfo): Promise<string> {
        // TODO: get customizable term
        try { return getHtml(tableLink('18%2FWI', tableInfo.groupString, tableInfo.listGuid), 'POST'); }
        catch (e) { console.error(`Was not able to fetch table.\n${e}`); }
    }
}
