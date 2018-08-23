import React, { Component } from 'react';
import './App.css';
import Footer from "./Components/Footer.js";
import Header from "./Components/Header.js";
import Main from "/Users/Roger/skills-app/src/Components/Main.js";
import LocalProvider from '/Users/Roger/skills-app/src/Context.js';
import { LocalContext } from '/Users/Roger/skills-app/src/Context.js';

export default class App extends Component {
  render() {
    return (
      <LocalProvider>
        <div className="App">
          <LocalContext.Consumer>
          {( localData ) => localData.state }
          </LocalContext.Consumer>
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </LocalProvider>
    );
  }
}
