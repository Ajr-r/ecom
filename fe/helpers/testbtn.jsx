import React from "react";
import axios from "axios";
import { json } from "react-router";
export function Testbtn(){
    function click(){
     axios.post("http://localhost:80/api/test").then((r)=>alert(r.data)) 

    }
    return <button onClick={click} style={{position:"fixed",top:"100px"}}>testing</button>
}