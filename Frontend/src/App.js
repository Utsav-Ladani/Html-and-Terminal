import React, { createRef } from 'react'

import Navbar from './Components/navbar.jsx'
import Page from './Components/page.jsx'

class App extends React.Component {
  state = {
    index: "Home",
  };

  mainref = createRef();

  render() {
    return (
      <React.Fragment>
        <button className="darkmode" onClick={(e) => {
          e.target.classList.toggle("dark-switch");
          this.mainref.current.classList.toggle("dark");
          this.mainref.current.classList.toggle("light");
          e.target.innerText = e.target.innerText === "Dark" ? "Light" : "Dark";
        }} >Dark</button>

        <div className="main light" ref={this.mainref}>
          <Navbar index={this.state.index} changePage={(index) => { this.setState({ index: index }) }} />
          <Page name={this.state.index} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;