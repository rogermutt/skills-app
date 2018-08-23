import React from 'react';

export default props => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
              The content in this site is subject to creativecommons terms
              <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer"> CC BY NC SA 4.0</a>
          </p>
            <img src= {require("/Users/Roger/skills-app/src/logo.png")} alt="logo" />
        </div>
        <span className="spanFooter">Color <a href="http://www.color-hex.com/color-palette/64825" target="_blank" rel="noopener noreferrer">Palette</a></span>
        <br/>
        <span className="spanFooter">2018 - All rights erm forget it</span>
      </div>
    </footer>
  )
}
