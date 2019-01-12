# profitwell-component

[![npm package][npm-badge]][npm]

Simple react component to track by profitwell.

[npm-badge]: https://img.shields.io/npm/v/profitwell-component.png?style=flat-square
[npm]: https://www.npmjs.org/package/profitwell-component

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
