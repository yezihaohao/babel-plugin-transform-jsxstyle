# Welcome to babel-plugin-transform-jsxstyle 👋

![Version](https://img.shields.io/npm/v/babel-plugin-transform-jsxstyle.svg)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/yezihaohao/babel-plugin-transform-jsxstyle#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/yezihaohao/babel-plugin-transform-jsxstyle/graphs/commit-activity)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/yezihaohao/babel-plugin-transform-jsxstyle/blob/master/LICENSE)

> babel plugin transform jsxstyle htmltag

### 🏠 [Homepage](https://github.com/yezihaohao/babel-plugin-transform-jsxstyle#readme)

## Install

```js
yarn add babel-plugin-transform-jsxstyle --dev
// or
npm i babel-plugin-transform-jsxstyle --dev
```

## Usage

```js
// 1st config
// add plugin into babel plugins property
// eg:
"plugins": [
    "babel-plugin-transform-jsxstyle"
]
// 2nd use
<style-less>{`
    @primary: #f25e5e;
    @primary-hover: #f7a250;
    a {
        color: @primary;
        &:hover {
            color: @primary-hover;
        }
    }
`}</style-less>
// it will be transformed into below
<style>{`
    a {
        color: #f25e5e
    }
    a:hover {
        color: #f7a250;
    }
`}</style>
```
## Demo

[example](https://github.com/yezihaohao/babel-plugin-transform-jsxstyle/tree/master/example)

## Author

👤 **yezihaohao**

-   Github: [@yezihaohao](https://github.com/yezihaohao)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/yezihaohao/babel-plugin-transform-jsxstyle/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [yezihaohao](https://github.com/yezihaohao).

This project is [MIT](https://github.com/yezihaohao/babel-plugin-transform-jsxstyle/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
