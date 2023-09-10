import React from "react";
import axios from "axios";
export function Testbtn(){
    function click(){
        axios.get('http://localhost:3000/test',{
            withCredentials: true,
        
        })

    }
    return <button onClick={click} style={{position:"fixed",top:"100px"}}>testing</button>
}