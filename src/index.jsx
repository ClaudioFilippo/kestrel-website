import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

// index.html contains a fallback <title> and description for crawlers that don't run JS.
// Each page renders its own (React 19 hoists them into <head>), so drop the fallbacks to avoid duplicates.
document
  .querySelectorAll('head > title, head > meta[name="description"]')
  .forEach((el) => el.remove());

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App/>
);

