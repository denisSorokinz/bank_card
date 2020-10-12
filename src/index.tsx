import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import "Assets/styles/reset.css";
import "Assets/styles/styles.sass";

// ! - we are sure that the element exists
const root = document.querySelector("#root")!;

ReactDOM.render(<App />, root);