"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scraping_1 = require("./scraping");
const parsing_1 = require("./parsing");
function main() {
    scraping_1.ScrapeHtml.page('https://catalog.mccneb.edu/Lists/Sections/Credit.aspx?FilterField1=TermCode&FilterValue1=18/WI')
        .then((res) => {
        parsing_1.mccCatalogParser.parseComplete(res);
    })
        .catch(err => console.error('didn\'t get page oops'));
}
main();
/*
*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQXdDO0FBQ3hDLHVDQUE2QztBQUU3QyxTQUFTLElBQUk7SUFDVCxxQkFBVSxDQUFDLElBQUksQ0FBQyxnR0FBZ0csQ0FBQztTQUM1RyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUNWLDBCQUFnQixDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztBQUM5RCxDQUFDO0FBQ0QsSUFBSSxFQUFFLENBQUM7QUFDUDtFQUNFIn0=