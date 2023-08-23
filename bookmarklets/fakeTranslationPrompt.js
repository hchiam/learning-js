javascript:(()=>{
alert(translate(prompt()));
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
    const other = {
        '0':'◯',
        '1':'●',
        '2':'◗',
        '3':'△',
        '4':'□',
        '5':'⬠',
        '6':'◪',
        '7':'▽',
        '8':'▤',
        '9':'◰',
        '/':'⋌',
    };
    [...text].forEach((t,i) => {
        if (t in consonants) {
            if (t === 'g' && text[i+1] in {e:'e',i:'i'}) {
                output += 'ch';
            } else if (t === 'G' && text[i+1] in {e:'e',i:'i'}) {
                output += 'Ch';
            } else if (t === 'c' && text[i+1] in {a:'a',o:'o',u:'u'}) {
                output += 'g';
            } else if (t === 'C' && text[i+1] in {a:'a',o:'o',u:'u'}) {
                output += 'G';
            } else if (t === 'c' && text[i+1] in {e:'e',i:'i'}) {
                output += 'z';
            } else if (t === 'C' && text[i+1] in {e:'e',i:'i'}) {
                output += 'Z';
            } else if (t === 'c' && text[i+1] === 'h') {
                output += 'j';
            } else if (t === 'C' && text[i+1] === 'h') {
                output += 'J';
            } else if (t === 'j') {
                output += 'ch';
            } else if (t === 'J') {
                output += 'Ch';
            } else {
                output += consonants[t];
            }
        } else if (t in vowels) {
            const vowel = vowels[t] || t;
            const shouldChange = Math.random() < 0.2;
            output += vowel in fancyVowels && shouldChange ? fancyVowels[vowel] : vowel;
        } else if (t in other) {
            output += other[t];
        } else {
            output += t;
        }
        if (/[A-z]/.test(t) && (i+1 >= text.length || /[\s.,\/#!?$%\^&\*;:{}=\-_—`~()\[\]]/.test(text[i+1]))) {
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
})();
