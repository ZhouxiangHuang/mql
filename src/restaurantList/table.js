import React, {Component} from 'react';
import Row from './row';

export default class Table extends Component {
  render() {
    'use strict'
    let rows = [];
    for (let i = 0; i < this.props.resInfo.length; i++) {
      let rowInfo = this.props.resInfo[i];
      rows.push(<Row row = {rowInfo}/>)
    }
    return (
      <tbody>
        {rows}
      </tbody>
    )
  }
}
