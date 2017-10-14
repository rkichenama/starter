import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/app.scss';

import magic from '../assets/magic.gif';

class Hello extends Component {
  render() {
    return (
      <div>
        Hello from React
        <br/>
        <img src={ magic } alt="Webpack is Magic"/>
      </div>
    )
  }
}

render(<Hello/>, document.querySelector('#app'));