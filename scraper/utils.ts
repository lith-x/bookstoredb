/**
 * Give a list of parameters and it will return a link that will lead to a site with basic book info.
 * @param storeId Follet store ID. Example: `139`
 * @param termId Year and season of term. Example: `18/WI`
 * @param dept Four-letter code for the department. Example: `ACCT`
 * @param number Course number. Example: `1100`
 * @param section Section number. Example: `1A` or `WA`
 */
export function bookstoreLink(storeId: string, termId: string, dept: string, number: string, section: string) {
    return `\
https://www.bkstr.com/webapp/wcs/stores/servlet/booklookServlet\
?bookstore_id-1=${storeId}\
&term_id-1=${termId}\
&div-1=\
&dept-1=${dept}\
&course-1=${number}\
&section-1=${section}`;
}

/**
 * Get a link to the 'table' to a subject at a campus.
 * @param termId Year and season of term. Example: `18/WI`
 * @param subject The full subject name. Example: `Accounting` or `Culinary, Hosp., Rsrch., Mgmt.`
 * @param campus The name of the campus. Example: `Fort Omaha Campus` or `Online Classes`
 * @param listGuid Guid of the list. Example: `6DDABEF0-BAAA-4A1D-A745-6B0C689F1916`
 */
export function tableLink(termId: string, groupString: string, listGuid: string) {
    return `\
https://catalog.mccneb.edu/_layouts/15/inplview.aspx\
?IsXslView=TRUE\
&IsGroupRender=TRUE\
&FilterField1=TermCode\
&FilterValue1=${termId}\
&GroupString=${groupString}\
&List={${listGuid}}`;
}

export function tableNextPageLink() {}

// https://stackoverflow.com/a/44195856 - Updated
export function decodeEntities(encoded: string) {
    const translateRe = /&(nbsp|amp|quot|lt|gt);/g;
    const translate = {
        nbsp:' ',
        amp : '&',
        quot: '\'',
        lt  : '<',
        gt  : '>'
    };
    return encoded.replace(translateRe, (match, entity) => {
        return translate[entity];
    }).replace(/&#(\d+);/gi, (match, numStr) => {
        const num = parseInt(numStr, 10);
        return String.fromCharCode(num);
    });
}

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
