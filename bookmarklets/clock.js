javascript:(()=>{
    /* like when you still want to see the clock while watching YouTube videos full screen */
    const clock = createClock();
    clock.innerText = time();
    let clockInterval = setInterval(()=>{
        clock.innerText = time();
    },1000);
    function createClock() {
        const btn = document.createElement('button');
        btn.id = 'bookmarklet_clock';
        btn.style.position = 'fixed';
        btn.style.right = '10px';
        btn.style.top = '5px';
        btn.style.zIndex = '9999';
        btn.style.border = 'transparent';
        btn.style.borderRadius = '3px';
        btn.style.outline = 'transparent';
        btn.style.background = 'transparent';
        btn.style['-webkit-text-fill-color'] = 'black';
        btn.style['-webkit-text-stroke'] = '2px #ffffff80';
        btn.style['paint-order'] = 'stroke fill';
        btn.style.fontFamily = 'monospace';

        btn.addEventListener('hover', ()=>{
            btn.style.background = 'red';
        });
        btn.addEventListener('mouseover', ()=>{
            btn.style.background = 'red';
        });
        btn.addEventListener('focus', ()=>{
            btn.style.background = 'red';
        });
        
        btn.addEventListener('click', ()=>{
            stopClock();
            btn.remove();
        });
        
        document.body.appendChild(btn);
        return btn;
    }
    function time() {
        const t = new Date();
        const h = t.getHours();
        const m = t.getMinutes();
        const s = t.getSeconds();
        return `${fmt(h)}:${fmt(m)}:${fmt(s)}`;
    }
    function fmt(t) {
        return String(t).padStart(2,0);
    }
    function stopClock() {
        clearInterval(clockInterval);
    }
})();
