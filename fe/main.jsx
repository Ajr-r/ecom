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
import { createContext } from "react";
import axios from "axios";
export let searchdata={}
axios.get("http://localhost:80/api/search").then((r)=>{
        
        searchdata=createContext(r.data)
})

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
