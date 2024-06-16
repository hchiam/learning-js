javascript:(()=>{
  copy([...document.querySelectorAll('#segments-container ytd-transcript-segment-renderer yt-formatted-string')].map(x=>x.innerText).join('\n'));
  function copy(text) {
    var textarea = document.createElement("textarea");
    selection = document.getSelection();
    textarea.textContent = text;
    document.body.appendChild(textarea);
    selection.removeAllRanges();
    textarea.select();
    document.execCommand("copy");
    selection.removeAllRanges();
    document.body.removeChild(textarea);
    alert(`Copied to clipboard:\n\n${text}`);
  }
})();
