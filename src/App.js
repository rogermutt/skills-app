import React, { Component } from 'react';
import './App.css';
import Footer from "./Components/Footer.js";
import Header from "./Components/Header.js";
import Main from "/Users/Roger/skills-app/src/Components/Main.js";
import LocaleProvider from '/Users/Roger/skills-app/src/Context.js';
import { LocalContext } from '/Users/Roger/skills-app/src/Context.js';

class App extends Component {
  render() {
    return (
      <LocaleProvider>
        <div className="App">
          <LocalContext.Consumer>
          {( localData ) => localData.state }
          </LocalContext.Consumer>
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </LocaleProvider>
    );
  }
}

export default App;
