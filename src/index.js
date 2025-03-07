import React from 'react';
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import './style/style.css'
import App from "./components/app"
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<BrowserRouter>
    <App/>
</BrowserRouter>)



























// import ReactDOM from "react-dom/client";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import App from "./components/app"
// import { BrowserRouter } from "react-router-dom";



// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<BrowserRouter>
//     <App/>
// </BrowserRouter>);