"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Constants (that will be) needed in more than one file.
exports.mccBaseUrl = 'https://catalog.mccneb.edu';
exports.mccDefaultPath = '/Lists/Sections/Credit.aspx';
const emptyRawCourse = {
    info: {
        subject: '',
        building: '',
        instructmethods: '',
        name: '',
        synonym: '',
        title: '',
        teacher: '',
        time: '',
        startdate: '',
        enddate: '',
        credits: ''
    },
    links: {
        bookstore: '',
        importantdates: ''
    }
};
exports.courseInfoKeys = Object.keys(emptyRawCourse.info);
exports.infoKeyCount = exports.courseInfoKeys.length;
exports.courseLinkKeys = Object.keys(emptyRawCourse.links);
exports.linkKeyCount = exports.courseLinkKeys.length;
exports.matchers = {
    course: /id="titl\d+-\d+_\d+_" groupString="(.+?)"/g,
    nextPageUrl: /"ms-paging"(?:[\s\S\n]+?)&quot;(.+?)&quot;/g,
    listGuid: /pageListId:\s*"\{([\w\d-]+?)\}"/g,
    tableInfo: /<td class="ms-vb2">\s*?(?:<(?:a.*?|nobr)>)?\s*?\b([\w\s!"#$%&'()*+,\-./:;<=>?@\[\\\]\^`]*?)\s*?(?:<\/(?:a|nobr)>)?\s*?<\/td>/g,
    tableLink: /<DIV>\s*?<a href='(.+?)' ?target='_blank' ?>(?:Bookstore Link|Important Dates)<\/a>\s*?<\/DIV>/g,
    courseEntry: /<tr class="(?:ms-alternating)?">/g
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlEQUF5RDtBQUM1QyxRQUFBLFVBQVUsR0FBRyw0QkFBNEIsQ0FBQztBQUMxQyxRQUFBLGNBQWMsR0FBRyw2QkFBNkIsQ0FBQztBQXlENUQsTUFBTSxjQUFjLEdBQXFCO0lBQ3JDLElBQUksRUFBRTtRQUNGLE9BQU8sRUFBRSxFQUFFO1FBQ1gsUUFBUSxFQUFFLEVBQUU7UUFDWixlQUFlLEVBQUUsRUFBRTtRQUNuQixJQUFJLEVBQUUsRUFBRTtRQUNSLE9BQU8sRUFBRSxFQUFFO1FBQ1gsS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEVBQUUsRUFBRTtRQUNYLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLEVBQUU7UUFDYixPQUFPLEVBQUUsRUFBRTtRQUNYLE9BQU8sRUFBRSxFQUFFO0tBQ2Q7SUFDRCxLQUFLLEVBQUU7UUFDSCxTQUFTLEVBQUUsRUFBRTtRQUNiLGNBQWMsRUFBRSxFQUFFO0tBQ3JCO0NBQ0osQ0FBQztBQUVXLFFBQUEsY0FBYyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xELFFBQUEsWUFBWSxHQUFHLHNCQUFjLENBQUMsTUFBTSxDQUFDO0FBQ3JDLFFBQUEsY0FBYyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25ELFFBQUEsWUFBWSxHQUFHLHNCQUFjLENBQUMsTUFBTSxDQUFDO0FBZXJDLFFBQUEsUUFBUSxHQUFHO0lBQ3BCLE1BQU0sRUFBRSw0Q0FBNEM7SUFDcEQsV0FBVyxFQUFFLDZDQUE2QztJQUMxRCxRQUFRLEVBQUUsa0NBQWtDO0lBQzVDLFNBQVMsRUFBRSwrSEFBK0g7SUFDMUksU0FBUyxFQUFFLGlHQUFpRztJQUM1RyxXQUFXLEVBQUUsbUNBQW1DO0NBQ25ELENBQUMifQ==