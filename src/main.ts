
window.onload = () => {
    const expandables = document.getElementsByClassName('expandable');
    for (const expandable of expandables) {
        console.log('found expandable');
        if (!(expandable instanceof HTMLElement)) return;
        console.log('expandable is div');
        const contents = expandable.nextElementSibling;
        if (!(contents instanceof HTMLElement)) return;
        console.log('contents are div');
        expandable.onclick = () => {
            expandable.classList.toggle('active');
            if (!Number.parseInt(contents.style.maxHeight, 10)) {
                contents.style.maxHeight = `${contents.scrollHeight}px`;
            } else {
                contents.style.maxHeight = '0';
            }
        };
    }
};

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