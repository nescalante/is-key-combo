# is-key-combo

[![Greenkeeper badge](https://badges.greenkeeper.io/nescalante/is-key-combo.svg)](https://greenkeeper.io/)

Do assertions on given key combos and events and returns true if match

## Install

```
npm install is-key-combo
```

## Usage

```js
const isKeyCombo = require('is-key-combo');
const isValid = isKeyCombo(event, 'cmd+a');
```

## Some sample combinations

- `cmd+a`
- `cmd+shift+esc`
- `alt+enter`

Note that `cmd` applies both for <key>Ctrl</key> and <key>⌘</key> so it will be easier to handle combinations cross platform.

## License

MIT
