import './index.css'
import ReactDOM from 'react-dom'
import React from "react";
import Calculator from "./main/Calculator";

const el = document.getElementById("root");

ReactDOM.render(
    <div>
        <h1>Calculadora</h1>
        <Calculator/>
    </div>
    , el);