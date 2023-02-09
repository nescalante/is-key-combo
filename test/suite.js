const assert = require("assert");
const isKeyCombo = require("../index");

describe("is-combo-key", function () {
  it("shift", function () {
    const result = isKeyCombo(
      {
        shiftKey: true,
        keyCode: 27,
      },
      "shift+esc"
    );
    assert(result);
  });

  it("ctrl", function () {
    const result = isKeyCombo(
      {
        ctrlKey: true,
        keyCode: 13,
      },
      "cmd+enter"
    );
    assert(result);
  });

  it("meta", function () {
    const result = isKeyCombo(
      {
        metaKey: true,
        keyCode: 97,
      },
      "cmd+a"
    );
    assert(result);
  });

  it("alt", function () {
    const result = isKeyCombo(
      {
        altKey: true,
        keyCode: 32,
      },
      "alt+space"
    );
    assert(result);
  });

  it("ctrl", function () {
    const result = isKeyCombo(
      {
        ctrlKey: true,
        keyCode: 32,
      },
      "ctrl+space",
      true
    );
    assert(result);
  });

  it("combination", function () {
    const result = isKeyCombo(
      {
        ctrlKey: true,
        shiftKey: true,
        keyCode: 98,
      },
      "cmd+shift+b"
    );
    assert(result);
  });

  it("mayus string", function () {
    const result = isKeyCombo(
      {
        metaKey: true,
        keyCode: 98,
      },
      "CMD+B"
    );
    assert(result);
  });

  it("mayus code", function () {
    const result = isKeyCombo(
      {
        metaKey: true,
        keyCode: 90,
      },
      "cmd+z"
    );
    assert(result);
  });

  it("invalid", function () {
    const result = isKeyCombo(
      {
        ctrlKey: true,
        keyCode: 98,
      },
      "alt+b"
    );
    assert(!result);
  });
});
