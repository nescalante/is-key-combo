const assert = require('assert');
const isKeyCombo = require('../index');

describe('is-combo-key', function () {
  it('shift', function () {
    const result = isKeyCombo({
      shiftKey: true,
      keyCode: 27
    }, 'shift+esc');
    assert(result);
  });

  it('ctrl', function () {
    const result = isKeyCombo({
      ctrlKey: true,
      keyCode: 13
    }, 'cmd+enter');
    assert(result);
  });

  it('meta', function () {
    const result = isKeyCombo({
      metaKey: true,
      keyCode: 65
    }, 'cmd+a');
    assert(result);
  });

  it('alt', function () {
    const result = isKeyCombo({
      altKey: true,
      keyCode: 9
    }, 'alt+tab');
    assert(result);
  });

  it('combination', function () {
    const result = isKeyCombo({
      ctrlKey: true,
      shiftKey: true,
      keyCode: 66
    }, 'cmd+shift+b');
    assert(result);
  });

  it('invalid', function () {
    const result = isKeyCombo({
      ctrlKey: true,
      keyCode: 66
    }, 'alt+b');
    assert(!result);
  });
});
