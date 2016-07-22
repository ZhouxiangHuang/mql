import React from "react";
import ReactDOM from "react-dom";
import UpperDiv from "./upperDiv"

class Layout extends React.Component {
  render() {
    return (
      <div id='app'>
        <UpperDiv />
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
