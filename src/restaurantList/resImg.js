import React, {Component} from 'react';

export default class ResImg extends Component {
  render() {
    var divStyle = {
      backgroundImage: 'url('+this.props.resImg+')'
    };

    return (
      <div class="resImage"></div>
    )
  }
}
