"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Give a list of parameters and it will return a link that will lead to a site with basic book info.
 * @param storeId Follet store ID. Example: `139`
 * @param termId Year and season of term. Example: `18/WI`
 * @param dept Four-letter code for the department. Example: `ACCT`
 * @param number Course number. Example: `1100`
 * @param section Section number. Example: `1A` or `WA`
 */
function bookstoreLink(storeId, termId, dept, number, section) {
    return `\
https://www.bkstr.com/webapp/wcs/stores/servlet/booklookServlet\
?bookstore_id-1=${storeId}\
&term_id-1=${termId}\
&div-1=\
&dept-1=${dept}\
&course-1=${number}\
&section-1=${section}`;
}
exports.bookstoreLink = bookstoreLink;
/**
 * Get a link to the 'table' to a subject at a campus.
 * @param termId Year and season of term. Example: `18/WI`
 * @param subject The full subject name. Example: `Accounting` or `Culinary, Hosp., Rsrch., Mgmt.`
 * @param campus The name of the campus. Example: `Fort Omaha Campus` or `Online Classes`
 * @param listGuid Guid of the list. Example: `6DDABEF0-BAAA-4A1D-A745-6B0C689F1916`
 */
function tableLink(termId, groupString, listGuid) {
    return `\
https://catalog.mccneb.edu/_layouts/15/inplview.aspx\
?IsXslView=TRUE\
&IsGroupRender=TRUE\
&FilterField1=TermCode\
&FilterValue1=${termId}\
&GroupString=${groupString}\
&List={${listGuid}}`;
}
exports.tableLink = tableLink;
function tableNextPageLink() { }
exports.tableNextPageLink = tableNextPageLink;
// https://stackoverflow.com/a/44195856 - Updated
function decodeEntities(encoded) {
    const translateRe = /&(nbsp|amp|quot|lt|gt);/g;
    const translate = {
        nbsp: ' ',
        amp: '&',
        quot: '\'',
        lt: '<',
        gt: '>'
    };
    return encoded.replace(translateRe, (match, entity) => {
        return translate[entity];
    }).replace(/&#(\d+);/gi, (match, numStr) => {
        const num = parseInt(numStr, 10);
        return String.fromCharCode(num);
    });
}
exports.decodeEntities = decodeEntities;
/*

Page 1
https://catalog.mccneb.edu/_layouts/15/inplview.aspx
?List={BB6F5CBE-1D7D-4BFD-AD83-267B6789FD7F}
&View={6DDABEF0-BAAA-4A1D-A745-6B0C689F1916}
&ViewCount=9
&IsXslView=TRUE
&FolderCTID=0x012001
&GroupString=%3b%23Mathematics%3b%23South%20Omaha%20Campus%3b%23
&IsGroupRender=TRUE
&WebPartID={6DDABEF0-BAAA-4A1D-A745-6B0C689F1916}
&FilterField1=TermCode
&FilterValue1=18%2FWI

Page 2
https://catalog.mccneb.edu/_layouts/15/inplview.aspx
?List={BB6F5CBE-1D7D-4BFD-AD83-267B6789FD7F}
&View={6DDABEF0-BAAA-4A1D-A745-6B0C689F1916}
&ViewCount=9
&IsXslView=TRUE
&Paged=TRUE
&p_SectionSubject=Mathematics
&p_SectionLocation=South%20Omaha%20Campus
&p_SectionName=MATH%5f0930%5fM8Y
&p_ID=35539
&FolderCTID=0x012001
&GroupString=%3b%23Mathematics%3b%23South%20Omaha%20Campus%3b%23
&PageFirstRow=31
&IsGroupRender=TRUE
&WebPartID={6DDABEF0-BAAA-4A1D-A745-6B0C689F1916}
&FilterField1=TermCode
&FilterValue1=18%2FWI

Page 3
https://catalog.mccneb.edu/_layouts/15/inplview.aspx
?List={BB6F5CBE-1D7D-4BFD-AD83-267B6789FD7F}
&View={6DDABEF0-BAAA-4A1D-A745-6B0C689F1916}
&ViewCount=9
&IsXslView=TRUE
&Paged=TRUE
&p_SectionSubject=Mathematics
&p_SectionLocation=South%20Omaha%20Campus
&p_SectionName=MATH%5f1310%5fM7S
&p_ID=35649
&FolderCTID=0x012001
&GroupString=%3b%23Mathematics%3b%23South%20Omaha%20Campus%3b%23
&PageFirstRow=61
&IsGroupRender=TRUE
&WebPartID={6DDABEF0-BAAA-4A1D-A745-6B0C689F1916}
&FilterField1=TermCode
&FilterValue1=18%2FWI

?Paged=TRUE
&PagedPrev=TRUE
&p_SectionSubject=Mathematics
&p_SectionLocation=South%20Omaha%20Campus
&p_SectionName=MATH%5f1310%5fM7T
&p_ID=35650
&FolderCTID=0x012001
&FilterField1=TermCode
&FilterValue1=18%2fWI
&GroupString=%3b%23Mathematics%3b%23South%20Omaha%20Campus%3b%23
&PageFirstRow=31
&FilterField1=TermCode
&FilterValue1=18%2FWI
&
&
&View={6DDABEF0-BAAA-4A1D-A745-6B0C689F1916}'
*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7OztHQU9HO0FBQ0gsU0FBZ0IsYUFBYSxDQUFDLE9BQWUsRUFBRSxNQUFjLEVBQUUsSUFBWSxFQUFFLE1BQWMsRUFBRSxPQUFlO0lBQ3hHLE9BQU87O2tCQUVPLE9BQU87YUFDWixNQUFNOztVQUVULElBQUk7WUFDRixNQUFNO2FBQ0wsT0FBTyxFQUFFLENBQUM7QUFDdkIsQ0FBQztBQVRELHNDQVNDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsU0FBUyxDQUFDLE1BQWMsRUFBRSxXQUFtQixFQUFFLFFBQWdCO0lBQzNFLE9BQU87Ozs7O2dCQUtLLE1BQU07ZUFDUCxXQUFXO1NBQ2pCLFFBQVEsR0FBRyxDQUFDO0FBQ3JCLENBQUM7QUFURCw4QkFTQztBQUVELFNBQWdCLGlCQUFpQixLQUFJLENBQUM7QUFBdEMsOENBQXNDO0FBRXRDLGlEQUFpRDtBQUNqRCxTQUFnQixjQUFjLENBQUMsT0FBZTtJQUMxQyxNQUFNLFdBQVcsR0FBRywwQkFBMEIsQ0FBQztJQUMvQyxNQUFNLFNBQVMsR0FBRztRQUNkLElBQUksRUFBQyxHQUFHO1FBQ1IsR0FBRyxFQUFHLEdBQUc7UUFDVCxJQUFJLEVBQUUsSUFBSTtRQUNWLEVBQUUsRUFBSSxHQUFHO1FBQ1QsRUFBRSxFQUFJLEdBQUc7S0FDWixDQUFDO0lBQ0YsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUNsRCxPQUFPLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ3ZDLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakMsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQWZELHdDQWVDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXFFRSJ9