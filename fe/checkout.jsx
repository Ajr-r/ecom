import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Testbtn } from "./helpers/testbtn.jsx";
export function Checkout() {
    const [data, setdata] = useState({})
    const [loaded, setloaded] = useState(false)
    const [tp,settp]=useState(0)
    const [chng,setchng]=useState(true)
    const nav=useNavigate()
    useEffect(() => {
        let d = JSON.parse(sessionStorage.getItem("items"))
        setdata(d)
        setloaded(true)
        settp(()=>{
            return (Object.keys(d).reduce((accum,key)=>{
                return accum+Number(d[key].price.slice(1,))*Number(d[key].qty)
            },0))
        })
        
    }, [chng])
    function changeqty(e){
        console.log(e.target.getAttribute('data'))
        let i=e.target.getAttribute('data')
        setchng(!chng)
        if(e.target.value=="+"){
            data[i].qty=data[i].qty+1
            sessionStorage.setItem("items",JSON.stringify(data)) 
            sessionStorage.setItem("cartitems",Number(sessionStorage.getItem("cartitems"))+1)

        }
        else{
            if(data[i].qty==1){
                delete data[i]   
            }
            else{

                data[i].qty=data[i].qty-1
            }
            sessionStorage.setItem("items",JSON.stringify(data)) 
            sessionStorage.setItem("cartitems",Number(sessionStorage.getItem("cartitems"))-1)


        }

    }
    function sendorder(){       
        axios.post("http://localhost:3000/order",data,{
            withCredentials:true
        }).then(()=>{
            alert("order placed")
        })
    }
    console.log(tp)
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <button style={{position:"fixed"}} onClick={()=>nav("/")}>home</button>
            <div className="check_cont">

                <h3 style={{margin:"20px`"}}>ORDER SUMMARY</h3>
                {loaded ?
                    <table>
                        <tbody>
                            
                        { Object.keys(data).map((key) => {
                            if(data[key].qty<1)return
                            return <tr key={key}>
                                <td>{key}</td>
                                <td>X</td>
                                <td>
                                    <button onClick={changeqty} value={"-"} data={key}>-</button>
                                    </td>
                                <td>{data[key].qty}</td>
                                <td>

                                <button onClick={changeqty} value={"+"} data={key}>+</button>
                                </td>
                                <td>{data[key].price}</td>
                            </tr>
                        })}
                        <tr>
                            <td>Total</td>
                            <td></td>
                            <td></td>
                            <td>{tp}</td>
                        </tr>
                        </tbody>
                        <button onClick={sendorder}>Place order</button>
                    </table>
                    : <h1>Cart is empty</h1>}
            </div>
            <Testbtn/>
        </div>
    )
}