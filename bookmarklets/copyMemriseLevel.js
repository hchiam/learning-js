javascript:(()=>{
  const $ = x => document.querySelector(x);
  const $$ = x => [...document.querySelectorAll(x)];
  const colA = $$('.col_a').map(x=>x.innerText);
  const colB = $$('.col_b').map(x=>x.innerText);
  const output = [];
	for (let i = 0; i < colA.length; i++) {
		output.push(`${colA[i]}\t${colB[i]}`);
	}
	copy(output.join('\n'));
  function copy(text) {
    const textarea = document.createElement("textarea");
    selection = document.getSelection();
    textarea.textContent = text;
    document.body.appendChild(textarea);
    selection.removeAllRanges();
    textarea.select();
    document.execCommand("copy");
    selection.removeAllRanges();
    document.body.removeChild(textarea);
    console.log(`Copied to clipboard:\n\n${text}`);
    alert(`Copied to clipboard:\n\n${text}`);
  }
})();
