import React, {Component} from 'react';

export default class Row extends Component {

  render() {
    'use strict'
    let rowdata = [];
    function generateRow(data) {
      if (data.address) rowdata.push(<td>地址: {data.address}</td>);
      if (data.hours) rowdata.push(<td>营业时间: {data.hours}</td>);
      if (data.sp && data.sp !== "0") rowdata.push(<td>{data.sp}</td>);
      if (data.phone) rowdata.push(<td>电话：{data.phone}</td>)
    }
    generateRow(this.props.row);
    return (
      <tr>
        {rowdata}
      </tr>
    )
  }
}
