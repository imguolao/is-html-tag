# is-html-tag

Check if the string is an HTML tag name.

[![gitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/imguolao/is-html-tag/blob/main/LICENSE) 

## Installation

```sh
# npm
npm i is-html-tag

# yarn
yarn add is-html-tag

# pnpm
pnpm add is-html-tag
```

## Usage

```ts
import isHTMLTag from 'is-html-tag'

isHTMLTag('a')   // true
isHTMLTag('div') // true

isHTMLTag('dog') // false
isHTMLTag('foo') // false

// custom element
customElementRegistry.define('my-custom-element', MyCustomElement)
isHTMLTag('my-custom-element') // true
```

## License

[MIT](LICENSE)
