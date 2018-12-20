import * as https from 'https';
import * as request from 'request';
import { tableLink } from './utils';
import { TableInfo } from './constants';

let lastReqTime = 0;

export namespace Scraper {
    export function getHtml(pageUrl: string, method: string, description: string): Promise<string> {
        // Wait between requests. No ip blox pls thx
        const reqWait = 1000 + Math.random() * 1000;
        while (Date.now() - lastReqTime <= reqWait) { }
        lastReqTime = Date.now();

        return new Promise<string>((resolve, reject) => {
            const req = https.request(pageUrl, { method }, (res) => {
                let body = '';
                res.on('data', chunk => body += chunk)
                    .on('end', () => {
                        return body;
                    }).on('error', (err) => {
                        console.error(`Error: unable to retrieve ${description} at: ${pageUrl}`);
                        reject(err);
                    });
            });
            req.end();
            req.on('error', err => reject(err));
        });
    }

    export function page(url: string): Promise<string> {
        return getHtml(url, 'POST', '');
    }

    export function courseTable(tableInfo: TableInfo): Promise<string> {
        return getHtml(tableLink('18%2FWI', tableInfo.groupString, tableInfo.listGuid), 'POST', 'course details');
    }
}
