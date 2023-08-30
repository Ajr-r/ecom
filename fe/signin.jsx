import React, { useState } from "react";
import { Nav_bar } from "./home.jsx";
export function Signin() {
    const [b1,setb1]=useState("1px solid")
    const [b2,setb2]=useState("none")
    function change(){

    }

    return (
        <>
            <div style={{ overflow: "hidden" }}>

                <Nav_bar phone={false} shoe={false} tshirt={false} home={true} widths={"1900px"} />
                <div className="sign_cont">
                    <div className="form">
                        <div className="tabs">
                            <table>
                                <tbody>
                                    <tr>
                                        <td style={{borderRight:b1}} onClick={change}>Sign in</td>
                                        <td style={{borderBottom:b2}} onClick={change}>Register</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="inputs">
                      
                                <label htmlFor="email" style={{margin:"20px"}}>Username
                                <input type="text" style={{margin:"10px",width:"300px",borderRadius:"10px",border:"1px solid grey",padding:"5px"}} name="email" placeholder="john@gmail.com" />
                                </label>

                                <label htmlFor="pass" style={{margin:"20px"}}>Password
                                <input type="password" name="pass" id="" style={{margin:"10px",width:"300px",borderRadius:"10px",border:"1px solid grey",padding:"5px"}} />
                                </label>
                                <button style={{width:"120px",border:"1px solid black"}}>Sign in</button>


                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}