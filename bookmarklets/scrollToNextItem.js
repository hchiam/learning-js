javascript:(()=>{
    const defaultSelector = '.row';
    const selector = prompt('selector? default is ' + defaultSelector) || defaultSelector;
    alert('hit s to scroll to next item');
    const colours = ['red','blue'];
    [...$$(selector)].map((x,i)=>{
        x.style.outline=`solid ${colours[i%colours.length]} 3px`;
        x.style.outlineOffset = '-4px';
    });
    const s = getNextScrollItem();
    $('body').addEventListener('keyup',e=>{
        if (e.key === 's') {
            s.next().value.scrollIntoView();
        }
    });
    function* getNextScrollItem() {
        const x = [...$$(selector)];
        for (let instance of x) {
            yield instance;
        }
    }
    function $(selector) { return document.querySelector(selector); }
    function $$(selector) { return document.querySelectorAll(selector); }
})();
