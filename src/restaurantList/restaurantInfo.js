import React, {Component} from 'react';
import Table from './table';
import ResName from './resName';
import ResImg from './resImg';

export default class ResInfo extends Component {
  render() {
    'use strict'
    const tableNum = Object.keys(this.props.resData).length;
    let tables = [];
    for (let i = 0; i < tableNum; i++) {
      tables.push(<div key={i} class="resInfo">
                    <ResName resName = {this.props.resData[i].res_name} />
                    <ResImg resImg = {this.props.resData[i].img}/>
                    <table class="tbl">
                        <Table resInfo = {this.props.resData[i]} key = {i}/>
                    </table>
                  </div>);
    }

    return (
      <div>
        {tables}
      </div>
    )
  }
}
