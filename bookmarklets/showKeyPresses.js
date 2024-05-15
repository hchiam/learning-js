javascript:(function() {
  const overlay = document.createElement('div');
  overlay.id = 'keypressBookmarkletOverlay';
  overlay.style.position = 'fixed';
  overlay.style.bottom = '10px';
  overlay.style.left = '-100%';
  overlay.style.padding = '10px';
  overlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
  overlay.style.color = 'white';
  overlay.style.zIndex = '10000';
  overlay.style.borderRadius = '5px';
  overlay.style.fontFamily = 'Arial, sans-serif';
  overlay.style.fontSize = '16px';
  overlay.style.userSelect = 'none';
  overlay.style.opacity = '0';
  overlay.style.transition = 'left 0.2s, opacity 0.5s';

  document.body.appendChild(overlay);

  let timeoutId = null;

  overlay.addEventListener('mouseenter', function() {
    overlay.style.left = '-100%';
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function() {
      overlay.style.left = '10px';
    }, 3000);
  });

  document.addEventListener('keydown', function(event) {
    const ctrl = event.ctrlKey ? '<kbd>Ctrl</kbd> + ' : '';
    const alt = event.altKey ? '<kbd>Alt</kbd> + ' : '';
    const shift = event.shiftKey ? '<kbd>Shift</kbd> + ' : '';
    const meta = event.metaKey ? '<kbd>Cmd/Window</kbd> + ' : '';
    let keyName = event.key === ' ' ? 'Spacebar' : event.key;

    let modifiers = `${ctrl}${alt}${shift}${meta}`;
    modifiers = modifiers.substring(0, modifiers.length - (modifiers.endsWith(' + ') ? 3 : 0));
    let isFunctionKey = /^F[1-9][0-2]?$/.test(keyName);
    let isNonModifierKey = !['Alt', 'Shift', 'Control', 'Meta'].includes(keyName);
    let displayKeyName = '';

    if (isFunctionKey || isNonModifierKey) {
      displayKeyName = `<kbd>${keyName}</kbd>`;
    }

    if (document.activeElement.type === 'password') {
      modifiers = '';
      displayKeyName = '•';
    }

    overlay.innerHTML = `Hit: ${modifiers}${modifiers && displayKeyName ? ' + ' : ''}${displayKeyName}`;
    overlay.style.opacity = '1';
    overlay.style.left = '10px';

    clearTimeout(timeoutId);
    timeoutId = setTimeout(function() {
      overlay.style.opacity = '0';
      overlay.innerHTML = '';
    }, 1000);
  });

  const style = document.createElement('style');
  document.head.appendChild(style);
  style.sheet.insertRule(`#keypressBookmarkletOverlay kbd {
    padding: 5px 10px !important;
    font-family: Arial, sans-serif !important;
    background-color: #333 !important;
    color: #fff !important;
    border: 1px solid #b4b4b4 !important;
    box-shadow: 1px 1px 0 #fff, 2px 2px 0 rgba(0, 0, 0, 0.2) !important;
    border-radius: 3px !important;
    margin: 2px !important;
    vertical-align: middle !important;
  }`);
})();
