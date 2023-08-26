import React, { useEffect, useState } from "react";
import ramsvg from "./assets/phonesvgs/ram.svg";
import procsvg from "./assets/phonesvgs/comp_proc.svg";

import battsvg from "./assets/phonesvgs/battery.svg";
import hddsvg from "./assets/phonesvgs/hdd.svg";

import weightsvg from "./assets/phonesvgs/weight.svg";
import sizesvg from "./assets/phonesvgs/size.svg";
import backsvg from "./assets/back.svg"
import axios from "axios";

export function Product_description({ setview, item }) {

    const [data, setdata] = useState([])
    const [fetched, setfetched] = useState(false)
    useEffect(() => {
        axios.get(`http://localhost:3000/data/desc`)
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
                    <h2>{data[item].name}</h2>
                    <br />
                    <p>800000</p>
                    <p style={{ width: "500px" }}>{data[item].desc}</p>
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

                </div>
            )}
        </div>
    )











}