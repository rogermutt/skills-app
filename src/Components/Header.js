import React from 'react';

export default props => {
  return (
        <nav className="navbar is-white topNav">
            <div className="container">
                <a className="navbar-item" href="/landing">
                  <img src= {require("/Users/Roger/skills-app/src/logo.png")} alt="logo" />
                </a>
            </div>
        </nav>
  );
};
