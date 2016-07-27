import React, {Component} from 'react';
import Navbar from './nav_bar';
import Search from './search';

export default class UpperDiv extends Component {
  render() {
    return (
      <div id='upperDiv'>
        <Navbar changeToRes = {this.props.changeToRes} changeToGuide = {this.props.changeToGuide}/>
        <Search />
      </div>
    )
  }
}
