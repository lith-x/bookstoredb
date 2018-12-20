"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const htmlparser2_1 = require("htmlparser2");
const courseEntryMatch = /titl1-(\d+)_(\d+)?_?/g;
let found = 0;
exports.mccCatalogParser = new htmlparser2_1.Parser({
    onopentag: (name, attribs) => {
        if (name === 'tbody' && attribs['id'].match(/titl5-(\d+)_(\d+)?_?/g)) {
            console.log(`found ${++found}`);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJzaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXFDO0FBR3JDLE1BQU0sZ0JBQWdCLEdBQUcsdUJBQXVCLENBQUM7QUFDakQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ0QsUUFBQSxnQkFBZ0IsR0FBRyxJQUFJLG9CQUFNLENBQUM7SUFDdkMsU0FBUyxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFO1FBQ3pCLElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLEVBQUU7WUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUNuQztJQUNMLENBQUM7Q0FDSixDQUFDLENBQUMifQ==