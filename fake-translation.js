;(()=>{
function translate(text) {
    let output = '';
    const consonants = {
        b:'p',c:'c',d:'t',f:'v',g:'k',h:'h',j:'j',k:'g',l:'r',m:'n',n:'m',p:'b',q:'ĝ',r:'l',s:'z',t:'d',v:'f',w:'y',x:'x',y:'w',z:'s',
        B:'P',C:'C',D:'T',F:'V',G:'K',H:'H',J:'J',K:'G',L:'R',M:'N',N:'M',P:'B',Q:'Ĝ',R:'L',S:'Z',T:'D',V:'F',W:'Y',X:'X',Y:'W',Z:'S',
        ĝ:'q',
        Ĝ:'Q',
    };
    const vowels = {
        a:'a',e:'e',i:'i',o:'o',u:'u',
        A:'A',E:'E',I:'I',O:'O',U:'U',
        ä:'a',é:'e',î:'i',ö:'o',ü:'u',
        Ä:'A',É:'E',Î:'I',Ö:'O',Ü:'U',
    };
    const fancyVowels = {
        a:'ä',e:'é',i:'î',o:'ö',u:'ü',
        A:'Ä',E:'É',I:'Î',O:'Ö',U:'Ü',
    };
    [...text].forEach((t,i) => {
        if (t in consonants) {
            if (t === 'g' && text[i+1] in {e:'e',i:'i'}) {
                output += 'ch';
            } else if (t === 'c' && text[i+1] in {e:'e',i:'i'}) {
                output += 'z';
            } else if (t === 'c' && text[i+1] === 'h') {
                output += 'j';
            } else if (t === 'j') {
                output += 'ch';
            } else {
                output += consonants[t];
            }
        } else if (t in vowels) {
            const vowel = vowels[t] || t;
            const shouldChange = Math.random() < 0.2;
            output += vowel in fancyVowels && shouldChange ? fancyVowels[vowel] : vowel;
        } else {
            output += t;
        }
        if (/\w/.test(t) && (i+1 >= text.length || /[\s.,\/#!$%\^&\*;:{}=\-_—`~()\[\]]/.test(text[i+1]))) {
            const c = getRandom(consonants).toLowerCase();
            const v = getRandom(vowels).toLowerCase();
            output += t in vowels ? c : v;
            output += t in vowels ? v : c;
        }
    });
    return output;
}
function getRandom(ht) {
    const values = Object.values(ht);
    const i = Math.round(Math.random()*(values.length-1));
    return values[i];
}
// const elements = [...document.querySelectorAll('body *:not(iframe)')]
//     .filter(x=>getComputedStyle(x).visibility === 'visible');
function getTextNodesIn(node) {
    let all = [];
    for (node = node.firstChild; node; node = node.nextSibling) {
        if (node.nodeType === Node.TEXT_NODE) {
            all.push(node);
        } else {
            all = all.concat(getTextNodesIn(node));
        }
    }
    return all;
}
function translateElements() {
    if (document.body.dataset?.fakeTranslated) return;
    document.body.dataset.fakeTranslated = true;
    const elements = [...getTextNodesIn(document.body)];
    elements.forEach(e => {
        // if (getComputedStyle(e).visibility === 'visible' && e.innerText && (!e.hasChildNodes() || (e.childNodes.length === 1 && e.childNodes[0].nodeType === Node.TEXT_NODE))) {
        //     e.innerText = translate(e.innerText);
        // }
        if (!e.dataset?.fakeTranslated && e.parentElement.tagName !== 'STYLE' && e.textContent && (!e.hasChildNodes() || (e.childNodes.length === 1 && e.childNodes[0].nodeType === Node.TEXT_NODE))) {
            e.textContent = translate(e.textContent);
            e.dataset = {'fakeTranslated':true};
        }
    });
}
translateElements();
})();
