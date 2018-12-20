
export function createExpandable(parent: HTMLElement, children: HTMLDivElement[], wrapperAttrs?: Attr[]) {
    const childWrapper = document.createElement('div');
    wrapperAttrs.forEach(attr => childWrapper.setAttribute(attr.name, attr.value));
    const sortedChildren = children.sort();
    sortedChildren.forEach((child) => {
        childWrapper.appendChild(child);
    });
    parent.insertAdjacentElement('afterend', childWrapper);
}

export namespace DomUtils {
    export function clickOnSearch(inputEltSelector: string) {
        const inputs = document.getElementsByClassName(inputEltSelector);
        for (const inputElt of inputs) {
            if (!(inputElt instanceof HTMLInputElement)) return;
            if (inputElt.placeholder === null) return;

            const defaultPlaceholder = inputElt.placeholder;
            inputElt.onfocus = (ev) => {
                inputElt.placeholder = '';
            };

            inputElt.onblur = (ev) => {
                if (inputElt.value === '') {
                    inputElt.placeholder = defaultPlaceholder;
                }
            };
        }
    }
}
