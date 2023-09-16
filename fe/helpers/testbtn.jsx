import React from "react";
import axios from "axios";
import { json } from "react-router";
export function Testbtn(){
    function click(){
        fetch('http://localhost:3000/test',{
          method:"post",
          mode:"cors",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body:JSON.stringify({name:"arjith"})

        })

    }
    return <button onClick={click} style={{position:"fixed",top:"100px"}}>testing</button>
}