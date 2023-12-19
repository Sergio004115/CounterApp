import React from "react";
import ReactDOM from "react-dom/client";

// import { App } from '../src/HelloWorldApp'
// import { FirstApp } from '../src/FirstApp'
import { CounterApp } from '../src/CounterApp'
import '../src/styles.css'



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={ 98 }/>
    </React.StrictMode>
)