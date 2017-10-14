import React, { Component } from 'react';

import '../css/app.scss';

import magic from '../assets/magic.gif';

export default class Hello extends Component {
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
