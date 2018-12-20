import { DomUtils } from './domutils';

if (process.env.NODE_ENV === 'development') {
    require('../../index.html');
    require('../style.scss');
}

window.onload = () => {
    console.log('hi');

    DomUtils.clickOnSearch('searchbar');
};
