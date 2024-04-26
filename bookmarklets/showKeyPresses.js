javascript:(function() {
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.bottom = '10px';
  overlay.style.left = '10px';
  overlay.style.padding = '5px 10px';
  overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  overlay.style.color = 'white';
  overlay.style.zIndex = '10000';
  overlay.style.borderRadius = '5px';
  overlay.style.fontFamily = 'Arial, sans-serif';
  overlay.style.fontSize = '16px';
  overlay.style.userSelect = 'none';
  overlay.style.transition = 'left 0.5s';

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
    const ctrl = event.ctrlKey ? 'Ctrl+' : '';
    const alt = event.altKey ? 'Alt+' : '';
    const shift = event.shiftKey ? 'Shift+' : '';
    const meta = event.metaKey ? 'Cmd/Window+' : '';
    let keyName = event.key === ' ' ? 'Spacebar' : event.key;

    let modifiersWithoutPlus = `${ctrl}${alt}${shift}${meta}`.slice(0, -1);
    let isFunctionKey = /^F[1-9][0-2]?$/.test(keyName);
    let isNonModifierKey = !['Alt', 'Shift', 'Control', 'Meta'].includes(keyName);
    let displayKeyName = '';

    if (isFunctionKey || isNonModifierKey) {
      displayKeyName = keyName;
    }

    overlay.textContent = `Key pressed: ${modifiersWithoutPlus}${modifiersWithoutPlus && displayKeyName ? '+' : ''}${displayKeyName}`;
  });
})();
