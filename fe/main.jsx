import React from "react";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import {Home} from "./home.jsx"
import { Market } from "./market.jsx";

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
    <Route path="market/:category" element={<Market/>}/>
</Routes>

</BrowserRouter>
)
