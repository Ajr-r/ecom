import React from "react";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import {Home} from "./home.jsx"
import { Market } from "./market.jsx";
import { Signin } from "./signin.jsx";
import { Checkout } from "./checkout.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/CSS/home.css'
import "./assets/CSS/market.css"

function App(){
    return(
        <>
            <h1>Hello world</h1>
        </>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
<BrowserRouter>
<Routes>
    <Route path="/*" element={<Home/>}/>
    <Route path="signin" element={<Signin/>}/>
    <Route path="market/:category" element={<Market/>}/>
    <Route path="checkout" element={<Checkout/>}/>

</Routes>

</BrowserRouter>
)
