import React, {Component} from 'react';
import Table from './table';
import ResName from './resName';
import ResImg from './resImg';

export default class ResInfo extends Component {
  render() {
    'use strict'
    const tableNum = Object.keys(this.props.resList).length;
    const resNames = Object.keys(this.props.resList);
    let tables = [];
    for (let i = 0; i < tableNum; i++) {
      let tableInfo = this.props.resList[resNames[i]];
      tables.push(<div key={i} class="resInfo">
                    <ResName resName = {tableInfo[0]} />
                    <ResImg resImg = {tableInfo[tableInfo.length - 1]}/>
                    <table class="tbl">
                        <Table resInfo = {tableInfo} key = {i}/>
                    </table>
                  </div>)
    }

    return (
      <div>
        {tables}
      </div>
    )
  }
}
