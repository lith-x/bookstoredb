import {buildCourseListElt} from './domtree';
import {Term} from './types';

window.onload = async () => {
    initializeSearchBar('searchbar');
    const courseListRoot = document.getElementById('courselistroot');
    fetch('/data/sampledb.json').then((res) => {
        return res.json();
    }).then((data: Term) => {
        buildCourseListElt(courseListRoot, data);
    });
};

function initializeSearchBar(className: string) {
    const searchBar = document.getElementsByClassName('searchbar')[0];
    if (!(searchBar instanceof HTMLInputElement)) return;
    if (searchBar.placeholder == null) return;

    const defaultPlaceholder = searchBar.placeholder;
    searchBar.onfocus = (ev) => {
        searchBar.placeholder = '';
    };

    searchBar.onblur = (ev) => {
        if (searchBar.value === '')  {
            searchBar.placeholder = defaultPlaceholder;
        }
    };
}
/*
        <h1 class="subject clickable expandable">Accounting</h1>
        <div class="subject contents">
            <h2 class="course clickable expandable">1100</h2>
            <div class="course contents">
                <h3 class="campus clickable expandable">Elkhorn Valley</h3>
                <div class="campus contents">
                    <h3 class="section clickable expandable">1A</h3>
                    <div class="section contents">
                        <p class="book clickable">Example Book Title: The Example</p>
                        <div class="book contents">
                        </div>
                    </div>
                    <div class="section">
                        <div class="book"></div>
                        <div class="book"></div>
                    </div>
                </div>
                <div class="campus">
                    <div class="section"></div>
                    <div class="section">
                        <div class="book"></div>
                    </div>
                </div>
            </div>
        </div>
*/
