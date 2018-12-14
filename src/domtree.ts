import { Term } from './types';

export function buildCourseList(rootElt: HTMLElement, data: Term) {
    data.subjects.forEach((subjectdata) => {
        const subject = document.createElement('div');
        subject.classList.add('subjectheader');
        subject.innerText = subjectdata.name;
        const subjectChildren = document.createElement('div');
        if (subjectdata.courses) subject.classList.add('expandable');
    });
}
