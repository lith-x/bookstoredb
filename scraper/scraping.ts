import * as https from 'https';
import { Table } from './constants';
import { tableLink } from './utils';

let lastTime = 0;
let requestNum = 1;

// Constants

export function httpsReqBody(pageUrl: string, method: string): Promise<string> {
    if (requestNum > 20) return null;
    while (Date.now() - lastTime <= 500) { }
    lastTime = Date.now();
    return new Promise<string>((resolve, reject) => {
        const requestId = requestNum;
        console.log(`Request ${requestId} (${method}) initiated.`);
        const req = https.request(pageUrl, { method }, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk)
                .on('end', () => {
                    console.log(`Request ${requestId} successful. Status: ${res.statusCode} ${res.statusMessage}`);
                    resolve(body);
                }).on('error', (err) => {
                    console.warn(`Request ${requestId} error.\nUrl: ${pageUrl}\nStatus: ${res.statusCode} ${res.statusMessage}`);
                    reject(err);
                });
        });
        requestNum += 1;
        req.end();
    });
}

export async function getCourseTable(listGuid: string, groupString: string): Promise<Table> {
    try {
            // TODO: get customizable term
        const tableUrl = tableLink('18%2FWI', groupString, listGuid);
        const tableBody = await httpsReqBody(tableUrl, 'POST');
        return { text: tableBody };
    } catch (e) {
        console.error(`Was not able to fetch table.\n${e}`);
        throw e;
    }
}

// https://catalog.mccneb.edu/Lists/Sections/Credit.aspx?FilterField1=TermCode&FilterValue1=18/WI
