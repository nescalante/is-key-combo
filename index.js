var keymap = {
  13: "enter",
  27: "esc",
  32: "space",
};

module.exports = isKeyCombo;

let isMacPlatform;

try {
  isMacPlatform = /(Mac|iPhone|iPod|iPad)/i.test(global.navigator.platform);
} catch (error) {
  isMacPlatform = false;
}

function isKeyCombo(e, combo, isMac = isMacPlatform) {
  const keys = [];
  const key = getKey(e.which || e.keyCode || e.charCode);
  const comboArr = combo.split("+");

  if (e.shiftKey) {
    keys.push("shift");
  }

  if (e.altKey) {
    keys.push("alt");
  }

  if (e.metaKey) {
    keys.push("cmd");
  }

  if (!isMac && e.ctrlKey) {
    keys.push("cmd");
  } else if (e.ctrlKey) {
    keys.push("ctrl");
  }

  keys.push(key);

  return isEqual(keys, comboArr);
}

function getKey(code) {
  return keymap[code] || String.fromCharCode(code);
}

function isEqual(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every(function (obj1) {
      return arr2.some(function (obj2) {
        return obj1.toLowerCase() === obj2.toLowerCase();
      });
    })
  );
}
