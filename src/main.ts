
window.onload = () => {
    const accordians = <HTMLCollectionOf<HTMLButtonElement>>document.getElementsByClassName('btn');
    for (let i = 0; i < accordians.length; i += 1) {
        accordians[i].onclick = (ev) => {
            accordians[i].classList.toggle('active');
            const panel = <HTMLElement>accordians[i].nextSibling;
            console.log(panel);
            if (panel.style.maxHeight) panel.style.maxHeight = `${panel.scrollHeight}px`;
            else panel.style.maxHeight = null;
        };
    }
};
