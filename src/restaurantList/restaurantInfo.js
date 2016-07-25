import React, {Component} from 'react';

export default class ResInfo extends Component {
  render() {
    return (
      <div class="resInfo">
        <div id="resImage"></div>
        <h2>Buffalo Stakehouse</h2>
        <table id="tbl">
          <tr>
            <td>地址：</td>
            <td>1201 Budapest, Török Flóris utca 217</td>
          </tr>
          <tr>
            <td>周一 至 周五</td>
            <td>13:00 – 23:00</td>
          </tr>
          <tr>
            <td>周六</td>
            <td>12:00 – 23:00</td>
          </tr>
          <tr>
            <td>周日</td>
            <td>12:00 – 22:00</td>
          </tr>
          <tr>
            <td>电话：</td>
            <td>+36 1 2850009/+3670 9410691</td>
          </tr>
        </table>
      </div>
    )
  }
}
