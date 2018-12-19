
export function createExpandable(parent: HTMLElement, children: HTMLDivElement[], wrapperAttrs?: Attr[]) {
    const childWrapper = document.createElement('div');
    wrapperAttrs.forEach(attr => childWrapper.setAttribute(attr.name, attr.value));
    const sortedChildren = children.sort();
    sortedChildren.forEach((child) => {
        childWrapper.appendChild(child);
    });
    parent.insertAdjacentElement('afterend', childWrapper);
}
