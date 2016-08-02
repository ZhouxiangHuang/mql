import React, {Component} from 'react';
import Row from './row';

export default class Table extends Component {
  //rowObj was passed down as the information of one row
  render() {
    'use strict'
    let rows = [];
    for (var key in this.props.resInfo) {
      var rowObj = {};
      rowObj[key] = this.props.resInfo[key];
      console.log("row object:", rowObj);
      rows.push(<Row row = {rowObj} />)
      rowObj = {};
    }
    return (
      <tbody>
        {rows}
      </tbody>
    )
  }
}
