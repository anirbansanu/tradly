import React, { Component } from 'react';

export default class Callout extends Component {
  render() {
    return (
        <div class={`callout callout-${this.props.color} ${this.props.className?this.props.className:""}`}>
            {this.props.children}
        </div>
    );
  }
}
