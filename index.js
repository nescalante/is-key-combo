const keymap = {
  13: 'enter',
  27: 'esc',
  32: 'space'
};

module.exports = isKeyCombo;

function isKeyCombo(e, combo) {
  const keys = [];
  const key = getKey(e.which || e.keyCode || e.charCode);
  const comboArr = combo.split('+');

  if (e.shiftKey) {
    keys.push('shift');
  }

  if (e.altKey) {
    keys.push('alt');
  }

  if (e.ctrlKey || e.metaKey) {
    keys.push('cmd');
  }

  keys.push(key);

  return isEqual(keys, comboArr);
}

function getKey(code) {
  return keymap[code] || String.fromCharCode(code);
}

function isEqual(arr1, arr2) {
  return arr1.length === arr2.length &&
    arr1.every(function (obj1) {
      return arr2.some(function (obj2) {
        return obj1 === obj2;
      });
    });
}
