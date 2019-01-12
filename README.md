# profitwell-component

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Simple react component to track by profitwell.

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo


## Usage

You can add tracking code by following.

```
import Profitwell from 'profitwell-component';

const App = ({email}) => {
  return (
    <div>
      <h1>Hello World</h1>
      <Profitwell authToken="YOUR_PROFITWELL_TOKEN" email={email} />
    </div>
  )
}
```

And use `shouldNotLoad` prop, you can run only specific environment.

```
import Profitwell from 'profitwell-component';

const App = ({email}) => {
  const isDevelopment = process.env.NODE_ENV !== 'production'
  return (
    <div>
      <h1>Hello World</h1>
      <Profitwell
        authToken="YOUR_PROFITWELL_TOKEN"
        email={email}
        shouldNotLoad={isDevelopment}
      />
    </div>
  )
}
```
