import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import cartsvg from "./assets/cart.svg";



export function Nav_bar({phone,shoe,tshirt,home,widths,search,signin}) {
    let [ph, setph] = useState("Search")
    let [idx, setidx] = useState(0)
    const nav=useNavigate()


    useEffect(() => {
        const interval = setInterval(() => {
            setidx((prevIdx) => (prevIdx === 3 ? 0 : prevIdx + 1));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let s = ['Search', 'Shoes', 'Phones', 'Find'];
        setph(s[idx]);

    }, [idx]);
    return (

        <Navbar expand="lg" bg="dark" sticky="top" style={{ height: "52px", borderRadius: "7px", marginTop: "10px", width: widths, marginLeft: "auto", marginRight: "auto", backgroundColor: "green" }} className="bg-body-tertiary nav" data-bs-theme="dark">
            <Container style={{ marginLeft: "0px", width: "1000px" }}>
                <Navbar.Brand href="#home" style={{ fontSize: "1.5rem" }}>ecom</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{ minWidth: "70px" }}>
                    <Nav className="me-auto">


                        {phone&&<Link to="market/phones" className="links">Phones</Link>}
                        {home&&<Link to="/" className="links">Home</Link>}

                            {shoe&&<Link to="market/shoes" className="links">Shoes</Link>}
                        {tshirt&&<Link to="market/tshirts" className="links">T-shirts</Link>}
                    </Nav>
                </Navbar.Collapse>
                
               {search&& <input type="text" className="search" placeholder={ph} />}
                        {!document.cookie&&signin&&<Link to="signin" className="links signin" >Sign-in</Link>}
            


                <img className="cartsvg" onClick={()=>nav("checkout")} src={cartsvg} alt="" />
                <div className="badger" >{sessionStorage.getItem("cartitems")}</div>
                  
            </Container>
        </Navbar>
    );
}
Nav_bar.defaultProps={
    phone:true,
    shoe:true,
    tshirt:true,
    home:false,
    widths:"1885px",
    search:true,
    signin:true



}
function Offers() {
    return (
        <Carousel style={{ backgroundColor: "white", width: "1400px", marginTop: "60px", borderRadius: "20px" }}  >
            <Carousel.Item style={{ borderRadius: "20px" }}>
                {/* <ExampleCarouselImage text="First slide" /> */}
                <div style={{ height: "667px", width: "1400px", backgroundColor: "#2a508c" }}></div>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/* <ExampleCarouselImage text="Second slide" /> */}
                <div style={{ height: "667px", width: "1400px", backgroundColor: "#306945" }}></div>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{ height: "667px", width: "1400px", backgroundColor: "#693051" }}></div>
                {/* <ExampleCarouselImage text="Third slide" /> */}
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
function Del_cards({ s, cont }) {
    return (
        <div className="outer_card">
   
            
            

        </div>
    )
}
function Delivers() {
 
    return (
        <>
            <div style={{ marginTop: "130px",display:"flex",width:"500px",flexWrap:"wrap" }}>

                <Del_cards/>
                <Del_cards />
                <Del_cards />
                <Del_cards />
            </div>
            <div className="shadows"style={{display:"flex",width:"500px",flexWrap:"wrap" }}>

<Del_cards />
<Del_cards />
<Del_cards />
<Del_cards />
</div>
        </>
    )
}
function Footer_home() {
    return (
        <div className="footer_home" >
            <p style={{ margin: "40px", fontSize: "0.8rem", width: "1300px" }}>
                *Instant savings, otherwise referred to as instant cashback on the Apple Store Online, is available with the purchase of an eligible product for qualifying HDFC Bank Credit Cards and EasyEMI Credit Cards only. Minimum transaction value of ₹10001.00 applies. Click here to see instant savings amounts and eligible devices. Instant savings is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuing bank. Total transaction value is calculated after any trade-in credit or eligible discount applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant savings being recalculated, and any refund may be adjusted to account for instant savings clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice
                
            </p>
        </div>
    )
}
export function Home() {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", overflow: "hidden" }}>
                <Nav_bar />

                <br />
                <Offers />
                <Delivers />
                <br />
                <Footer_home />
            </div>
        </>
    )
}
