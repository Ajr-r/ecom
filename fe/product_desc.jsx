import React, { useEffect, useState } from "react";
import ramsvg from "./assets/phonesvgs/ram.svg";
import procsvg from "./assets/phonesvgs/comp_proc.svg";
import battsvg from "./assets/phonesvgs/battery.svg";
import hddsvg from "./assets/phonesvgs/hdd.svg";
import weightsvg from "./assets/phonesvgs/weight.svg";
import sizesvg from "./assets/phonesvgs/size.svg";
import backsvg from "./assets/back.svg"
import axios from "axios";
import addsvg from "./assets/add.svg"
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';
import { useNavigate } from "react-router";

function DismissibleExample({toast,settoast,name}) {
    const [showA, setShowA] = useState();
    const toggleShowA = () =>{ 
        setShowA(!showA);
        settoast(false)
    }
    useEffect(()=>setShowA(toast),[toast])
 

    return (
    
        <Col md={4} className="mb-1" style={{height:"100px",position:"absolute",left:"1150px",top:"650px"}}>
        
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">New Message</strong>
              
            </Toast.Header>
            <Toast.Body>{name} has been added to cart</Toast.Body>
          </Toast>
        </Col>
        
   
    );
  }

export function Product_description({ setview, item }) {
    const nav=useNavigate()
    
    const [data, setdata] = useState([])
    const [s,sets]=useState(false)
    const [p,setp]=useState(false)
    const [t,sett]=useState(false)
    const [toast,settoast]=useState(false)
    useEffect(()=>{
        if(item[0]=='p')setp(true)
        else if (item[0]=='s')sets(true)
        else sett(true)
    },[])
    
    const [fetched, setfetched] = useState(false)
    useEffect(() => {
        axios.get(`http://localhost:80/api/data/desc`)
            .then((r) => {
                // let y=r.data
                // console.log(y[item].name)
                setdata(r.data)
                setfetched(true)
            })
    }, [])
    function back() {
        setview(false)

    }
    function addtocart(){
        if(!document.cookie.toString().includes("id")){
            nav("../signin")
            return
        }
        settoast(true)
        
        if(!sessionStorage.getItem("items")){
            alert("dsds")
           let items={
                [item]:{
                    qty:1,
                    price:data[item].price
                }         
            }
            sessionStorage.setItem("items",JSON.stringify(items))
            sessionStorage.setItem("cartitems",Number(sessionStorage.getItem("cartitems"))+1)
        
        }else{
            
            let i=JSON.parse(sessionStorage.getItem("items"))
            if(!i[item]){
              
                    let items={
                        qty:1,
                        price:data[item].price
                    }         
                
                i[item]=items
                sessionStorage.setItem("items",JSON.stringify(i)) 
                sessionStorage.setItem("cartitems",Number(sessionStorage.getItem("cartitems"))+1) 

            }
            else{

                i[item].qty=i[item].qty+1
                sessionStorage.setItem("items",JSON.stringify(i)) 
                sessionStorage.setItem("cartitems",Number(sessionStorage.getItem("cartitems"))+1)
            }

        }
            
    
    }

    return (
        <div className="descp">
            

    
            <img className="backbtn" src={backsvg} alt="" onClick={back} />
            <div className="pic_cont" style={{ display: "flex", flexDirection: "row" }}>
                <div>
                    <div style={{ background: "grey", height: "150px", width: "150px", margin: "20px" }}>poster view</div>
                    <div style={{ background: "grey", height: "150px", width: "150px", margin: "20px" }}>front view</div>
                    <div style={{ background: "grey", height: "150px", width: "150px", margin: "20px" }}>side view</div>
                    <div style={{ background: "grey", height: "150px", width: "150px", margin: "20px" }}>back view</div>
                </div>
                <div style={{ background: "#d9d9", height: "660px", width: "500px", marginTop: "20px" }}></div>
            </div>
            {fetched && (
                <div style={{ marginLeft: "40px", marginTop: "20px" }}>
                    <DismissibleExample toast={toast} settoast={settoast} name={data[item].name}/>
                    <h2>{data[item].name} &nbsp; &nbsp;<img className="add_btn"onClick={()=>{
                        
                        addtocart()
                    }
                    }  src={addsvg} alt="" /></h2>
                    <br />
                    <p>{data[item].price}</p>
                    <p style={{ width: "500px" }}>{data[item].desc}</p>
                    {p&&(<>

                        <h4>Technical specification</h4>
                    <table className="phone_table">
                        <tbody>

                            <tr>
                                <td> Processor</td>
                                <td style={{ textAlign: "left" }}><img src={procsvg} alt="" />&nbsp;&nbsp;{data[item].techspec.proc}</td>
                            </tr>
                            <tr>
                                <td> Ram</td>
                                <td style={{ textAlign: "left" }}><img src={ramsvg} alt="" />&nbsp;&nbsp;{data[item].techspec.ram}</td>
                            </tr>
                            <tr>
                                <td> Storage</td>
                                <td style={{ textAlign: "left" }}><img src={hddsvg} alt="" />&nbsp;&nbsp;{data[item].techspec.storage}</td>
                            </tr>
                            <tr>
                                <td>Battery</td>
                                <td style={{ textAlign: "left" }}><img src={battsvg} alt="" />&nbsp;&nbsp;{data[item].techspec.bat}</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td style={{ textAlign: "left" }}><img src={weightsvg} alt="" />&nbsp;&nbsp;{data[item].techspec.weight}</td>
                            </tr>
                            <tr>
                                <td>Size</td>
                                <td style={{ textAlign: "left" }}><img style={{ transform: "rotateZ(30deg)" }} src={sizesvg} alt="" />&nbsp;&nbsp;{data[item].techspec.size}</td>
                            </tr>
                        </tbody>
                    </table>
                    </>
                    )}
                    {s&&(
                                   <table className="shoe_table">
                                   <tbody>
           
                                       <tr>
                                           <td> Color</td>
                                           <td style={{ textAlign: "left" }}>{data[item].color}</td>
                                       </tr>
                                       <tr>
                                           <td>Avialbale sizes</td>
                                           <td style={{ textAlign: "left" }}>{data[item].sizes.map((i)=>' '+i).toString()}</td>
                                       </tr>
                                     
                                       <tr>
                                           <td>Weight</td>
                                           <td style={{ textAlign: "left" }}>{data[item].weight}</td>
                                       </tr>
                                   </tbody>
                               </table>

                    )}
                                        {t&&(
                                   <table className="shoe_table">
                                   <tbody>
           
                                      
                                       <tr>
                                           <td>Avialbale sizes</td>
                                           <td style={{ textAlign: "left" }}>{data[item].sizes.map((i)=>' '+i).toString()}</td>
                                       </tr>
                                 
                                   </tbody>
                               </table>

                    )}

                </div>
            )}
        </div>
    )











}