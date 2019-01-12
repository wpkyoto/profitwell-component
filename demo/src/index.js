import React, {Component} from 'react'
import {render} from 'react-dom'

import Example from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>profitwell Demo</h1>
      <Example authToken="YOUR_TOKEN" />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
