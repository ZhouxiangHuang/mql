import React, {Component} from 'react';

var keys = 0;

export default class Row extends Component {

  //only one row's information will be received each time, thus only one if
  //condition will be fulfilled to generate one row
  render() {
    'use strict'
    let rowdata = [];
    function generateRow(data) {
      keys++;
      if (data.address) rowdata.push(<td key = {keys}>地址: {data.address}</td>);
      if (data.hours) rowdata.push(<td key = {keys}>营业时间: {data.hours}</td>);
      if (data.sp && data.sp !== "0") rowdata.push(<td key = {keys}>{data.sp}</td>);
      if (data.phone) rowdata.push(<td key = {keys}>电话：{data.phone}</td>)
    }
    generateRow(this.props.row);
    return (
      <tr>
        {rowdata}
      </tr>
    )
  }
}
