import React, {Component} from 'react';

export default class ResName extends Component {
  render() {
    return (
        <h2>{this.props.resName.name}</h2>
    )
  }
}
