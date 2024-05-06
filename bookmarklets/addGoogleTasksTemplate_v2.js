javascript:(() => {
  if (location.host !== 'tasks.google.com') {
    alert('opening Google tasks - rerun the bookmarklet there');
    window.open('https://tasks.google.com/embed/?origin=https://mail.google.com&fullWidth=1&amp;lfhs=2');
    return;
  }
  const template = '3-4:30 Break\n4:30-6 Study\n6-7 Eat\n7-8:30 Study\n8:30-10 Break'; /* each new line will create a new task (non-nested) when pasted */
  copy(template);
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
    alert(`Each new line will create a new task (non-nested) when pasted:\n\nCopied to clipboard:\n\n${text}`);
  }
})();
