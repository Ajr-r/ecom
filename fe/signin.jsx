import React, { useRef, useState } from "react";
import { Nav_bar } from "./home.jsx";
import axios from "axios";
import {SHA256} from 'crypto-js'
import { Testbtn } from "./helpers/testbtn.jsx";
import { useNavigate } from "react-router";

export function Signin() {
    const [type, setype] = useState("signin")
    const [si, setsi] = useState(true)
    const [reg, setreg] = useState(false)
    const [cls, setcls] = useState("sign_cont")
    const ur=useRef('')
    const pa=useRef('')
    const fr=useRef('')
    const lr=useRef('')
    const nav=useNavigate()

    function changtyp(e) {
        setype(e.target.value)
        if (e.target.value == "signin") {
            setsi(true)
            setreg(false)
            setcls("close")
            setype("signin")
        }
        else {
            setsi(false)
            setreg(true)
            setcls("open")
            setype("reg")

        }


    }
    function submit(e) {
        let hashpass=SHA256((pa.current.value).toString()).toString()
        console.log(ur.current.value)
        e.preventDefault()
        let data={}
        if(type=="sigin"){
             data={
                uname:ur.current.value,
                pass:hashpass,
                type:type

            }
        }
        else {
             data={
                uname:ur.current.value,
                pass:hashpass,
                fname:fr.current.value,
                lname:lr.current.value,
                type:type

            }
        }
         axios.post("http://localhost:80/api/authenticate",data).then((r)=>{
            if(r.data.status=='success'){
                console.log(r.data.cookie)
                   alert("signed in")
                    sessionStorage.setItem("cartitems",0)   
                    nav("/")   
            }
            else{
                alert(r.data.status)
            }
         })
        
    }

    return (
        <>
        <Testbtn/>
            <div style={{ overflow: "hidden" }} >

                <Nav_bar phone={false} shoe={false} tshirt={false} home={true} widths={"1900px"} signin={false} />
                <div className={`sign_cont`}>
                    <form action="">


                        <div className={`form ${cls}`}>
                            <div className="tabs">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td ><input type="radio" name="logintype" defaultChecked={si} value={"signin"} onClick={changtyp} /> Sign in</td>
                                            <td><input type="radio" name="logintype" defaultChecked={reg} value={"reg"} onClick={changtyp} /> Register</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {reg && (
                                <>
                                    <label htmlFor="email" style={{ margin: "20px" }} className="opa">First name
                                        <input ref={fr} type="text" required style={{ margin: "10px", width: "300px", borderRadius: "10px", border: "1px solid grey", padding: "5px" }} name="email" placeholder="John" />
                                    </label>
                                    <label htmlFor="email" style={{ margin: "20px" }} className="opa">Last name
                                        <input ref={lr} type="text" required style={{ margin: "10px", width: "300px", borderRadius: "10px", border: "1px solid grey", padding: "5px" }} name="email" placeholder="Doe" />
                                    </label>
                                </>

                            )
                            }
                            <div className="inputs">

                                <label htmlFor="email" style={{ margin: "20px" }}>Username
                                    <input type="text" ref={ur} required style={{ margin: "10px", width: "300px", borderRadius: "10px", border: "1px solid grey", padding: "5px" }} name="email" placeholder="john@gmail.com" />
                                </label>

                                <label htmlFor="pass" style={{ margin: "20px" }}>Password
                                    <input  ref={pa} type="password" required name="pass" id="" style={{ margin: "10px", width: "300px", borderRadius: "10px", border: "1px solid grey", padding: "5px" }} />
                                </label>

                                <button onClick={submit} style={{ width: "120px", border: "1px solid black" }}>{reg ? "Register" : "Sign in"}</button>


                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}