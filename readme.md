# rc-pure

[![npm version][npm-version-image]][npm-url]
[![npm downloads][npm-downloads-image]][npm-url]
[![github issues][github-issues-image]][github-issues-url]

a react package that improves render performance by reducing re-render component, fast and easy use!

### require

```json
{
  "react": "^15.0.0",
  "react-dom": "^15.0.0"
}
```

### reference

#### rc-pure-component

a wrapper use pure component wrap stateless functional components to class use pure component to reduce re-render. [read more](https://www.npmjs.com/package/rc-pure-component)

# install

```bash
# use npm
$ npm install rc-pure

# or yarn
$ yarn add rc-pure
```

# usage

```javascript
import pure from 'rc-pure'

const config = {
  updateByKeys: ['name'],
}

const Component = ({ name = 'Hieu' }) => (<div>hello, {name}</div>)

// with config
const Pure = pure(config)(Component)

// simple
const Pure = pure()(Component)
```

# documents

## config

| name      	| type   	| description                                                                                                            |
|-----------	|--------	|------------------------------------------------------------------------------------------------------------------------|
| compare    	| Func   	| (optional) the function used to calculate the change value. default: `lodash.isEuqal`                                  |
| updateByKeys| Array	  | (optional) Only update when these values change. default: `undefined`                                                  |

[npm-url]: https://npmjs.org/package/rc-pure
[npm-version-image]: https://badge.fury.io/js/rc-pure.svg
[npm-downloads-image]: https://img.shields.io/npm/dm/rc-pure.svg
[github-issues-image]: https://img.shields.io/github/issues/lamhieu-vk/rc-pure.svg
[github-issues-url]: https://github.com/lamhieu-vk/rc-pure/issues
