"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
const utils_1 = require("./utils");
let lastTime = 0;
let requestNum = 1;
const requestWaitTime = 500;
var ScrapeHtml;
(function (ScrapeHtml) {
    function getHtml(pageUrl, method) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestNum > 20)
                return null;
            while (Date.now() - lastTime <= requestWaitTime) { }
            lastTime = Date.now();
            return new Promise((resolve, reject) => {
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
        });
    }
    function page(url) {
        return __awaiter(this, void 0, void 0, function* () {
            let method = 'GET';
            if (url.includes('PageFirstRow='))
                method = 'POST';
            return yield getHtml(url, method);
        });
    }
    ScrapeHtml.page = page;
    function courseTable(tableInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: get customizable term
            try {
                return getHtml(utils_1.tableLink('18%2FWI', tableInfo.groupString, tableInfo.listGuid), 'POST');
            }
            catch (e) {
                console.error(`Was not able to fetch table.\n${e}`);
            }
        });
    }
    ScrapeHtml.courseTable = courseTable;
})(ScrapeHtml = exports.ScrapeHtml || (exports.ScrapeHtml = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyYXBpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc2NyYXBpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtCQUErQjtBQUMvQixtQ0FBb0M7QUFHcEMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztBQUNuQixNQUFNLGVBQWUsR0FBRyxHQUFHLENBQUM7QUFFNUIsSUFBaUIsVUFBVSxDQW1DMUI7QUFuQ0QsV0FBaUIsVUFBVTtJQUN2QixTQUFlLE9BQU8sQ0FBQyxPQUFlLEVBQUUsTUFBYzs7WUFDbEQsSUFBSSxVQUFVLEdBQUcsRUFBRTtnQkFBRSxPQUFPLElBQUksQ0FBQztZQUNqQyxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxRQUFRLElBQUksZUFBZSxFQUFFLEdBQUc7WUFDcEQsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN0QixPQUFPLElBQUksT0FBTyxDQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUMzQyxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUM7Z0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxTQUFTLEtBQUssTUFBTSxjQUFjLENBQUMsQ0FBQztnQkFDM0QsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO29CQUNuRCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7b0JBQ2QsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDO3lCQUNqQyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTt3QkFDWixrR0FBa0c7d0JBQ2xHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO3dCQUNuQixnSEFBZ0g7d0JBQ2hILE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDaEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNWLFVBQVUsSUFBSSxDQUFDLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7SUFFRCxTQUFzQixJQUFJLENBQUMsR0FBVzs7WUFDbEMsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7Z0JBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNuRCxPQUFPLE1BQU0sT0FBTyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN0QyxDQUFDO0tBQUE7SUFKcUIsZUFBSSxPQUl6QixDQUFBO0lBRUQsU0FBc0IsV0FBVyxDQUFDLFNBQW9COztZQUNsRCw4QkFBOEI7WUFDOUIsSUFBSTtnQkFBRSxPQUFPLE9BQU8sQ0FBQyxpQkFBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUFFO1lBQ2hHLE9BQU8sQ0FBQyxFQUFFO2dCQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFBRTtRQUN0RSxDQUFDO0tBQUE7SUFKcUIsc0JBQVcsY0FJaEMsQ0FBQTtBQUNMLENBQUMsRUFuQ2dCLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBbUMxQiJ9