import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

/*
    - npm start: eseguo il codice in localhost
    - npm run deploy: pubblico il sito in github --> impostare in package.json "homepage": https://ClaudioFilippo.github.io/kestrel-website
*/

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App/>
);

reportWebVitals();