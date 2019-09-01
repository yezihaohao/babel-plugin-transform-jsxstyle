import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React(styled by style-less tag)
        </a>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="a_sass"
        >
          Learn React(styled by style-sass tag)
        </a>
        <style-less>{`
            @primary: #f25e5e;
            @primary-hover: #f7a250;
            a {
                color: @primary;
                &:hover {
                    color: @primary-hover;
                }
            }
        `}</style-less>

        <style-sass>{`
          $primary: #eb2f96;
          $primary-hover: #722ed1;
          .a_sass {
            color: $primary;
            &:hover {
              color: $primary-hover;
            }
          }
        `}</style-sass>
      </header>
    </div>
  );
}

export default App;
