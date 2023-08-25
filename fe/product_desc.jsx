import React from "react";
import ramsvg from"./assets/phonesvgs/ram.svg";
import procsvg from"./assets/phonesvgs/comp_proc.svg";

import battsvg from"./assets/phonesvgs/battery.svg";
import hddsvg from"./assets/phonesvgs/hdd.svg";

import weightsvg from"./assets/phonesvgs/weight.svg";
import sizesvg from"./assets/phonesvgs/size.svg";
import backsvg from "./assets/back.svg" 

export function Product_description({setview}) {
    function back(){
        setview(false)
        
    }
    return (
        <div className="descp">
            <img className="backbtn" src={backsvg} alt="" onClick={back}/>
            <div className="pic_cont" style={{ display: "flex", flexDirection: "row" }}>
                <div>
                    <div style={{ background: "grey", height: "150px", width: "150px", margin: "20px" }}>poster view</div>
                    <div style={{ background: "grey", height: "150px", width: "150px", margin: "20px" }}>front view</div>
                    <div style={{ background: "grey", height: "150px", width: "150px", margin: "20px" }}>side view</div>
                    <div style={{ background: "grey", height: "150px", width: "150px", margin: "20px" }}>back view</div>
                </div>
                <div style={{ background: "#d9d9", height: "660px", width: "500px", marginTop: "20px" }}></div>
            </div>
            <div style={{ marginLeft: "40px", marginTop: "20px" }}>
                <h2>Iphone 13</h2>
                <br />
                <p>800000</p>
                <p style={{ width: "500px" }}>The iPhone 13 features a stunning Super Retina XDR display, powerful A15 Bionic chip, and an advanced dual-camera system. With its sleek design and impressive performance, it's the perfect companion for your everyday tasks and entertainment.</p>
                <h4>Technical specification</h4>
                <table className="phone_table">
                    <tbody>
             
                        <tr>
                            <td> Processor</td>
                            <td style={{textAlign:"left"}}><img src={procsvg} alt="" />&nbsp;&nbsp;A15 Bionic</td>
                        </tr>
                        <tr>
                            <td> Ram</td>
                            <td style={{textAlign:"left"}}><img src={ramsvg} alt="" />&nbsp;&nbsp;6 GB</td>
                        </tr>
                        <tr>
                            <td> Storage</td>
                            <td style={{textAlign:"left"}}><img src={hddsvg} alt="" />&nbsp;&nbsp;128 GB</td>
                        </tr>
                        <tr>
                            <td>Battery</td>
                            <td style={{textAlign:"left"}}><img src={battsvg} alt="" />&nbsp;&nbsp;3000 mAh</td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td style={{textAlign:"left"}}><img src={weightsvg} alt="" />&nbsp;&nbsp;170 grams</td>
                        </tr>
                        <tr>
                            <td>Size</td>
                            <td style={{textAlign:"left"}}><img style={{transform:"rotateZ(30deg)"}}src={sizesvg} alt="" />&nbsp;&nbsp;6.1 inches</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}