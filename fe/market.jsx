import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Nav_bar } from "./home.jsx";
import "./assets/CSS/market.css"
import Pagination from 'react-bootstrap/Pagination';
import axios from "axios";
import {Product_description} from './product_desc.jsx'
function Category({ setcat, setsort }) {
    let cat = useParams()
    const [value, setValue] = useState(() => {
        if (cat.category == 'phones') return 1
        else if (cat.category == 'shoes') return 2
        else return 3
    });
    const [category, setcategory] = useState(cat.category);

    const handleChange = (val, e) => {
        if (e.target.value == 1) setcat('phones')
        else if (e.target.value == 2) setcat('shoes')
        else setcat('tshirts')
        setValue(val)
    };
    function sort(e) {
        setsort(e.target.value)
    }
    return (
        <div>

            <div style={{ borderRadius: "20px 20px 0 0", backgroundColor: "#D9D9D9", width: "300px", height: "310px", display: "flex", flexDirection: "column", alignItems: "center" }}>

                <div style={{ margin: "20px", height: "200px", width: "200px", backgroundColor: "#305469", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

                    <p>{category}</p>
                </div>




                <ToggleButtonGroup type="radio" value={value} onChange={handleChange} name="cat">
                    <ToggleButton className="toggle_btn" id="tbg-btn-1" value={1} onClick={() => setcategory('Phones')}>
                        Phone
                    </ToggleButton>
                    <ToggleButton className="toggle_btn" id="tbg-btn-2" value={2} onClick={() => setcategory('Shoes')}>
                        Shoes
                    </ToggleButton>
                    <ToggleButton className="toggle_btn" id="tbg-btn-3" value={3} onClick={() => setcategory('Tshirts')}>
                        Tshirts
                    </ToggleButton>
                </ToggleButtonGroup>


            </div>
            <div className="filter">
                <label htmlFor="sort">Sort by&nbsp;&nbsp;</label>
                <select name="sort" id="" onChange={(e) => { sort(e) }}>
                    <option value="ph" selected disabled >Select</option>

                    <option value="ph"> price high to low</option>
                    <option value="pl"> price low to high</option>
                    <option value="rh"> rating high to low</option>
                    <option value="rl"> rating low to high</option>
                    <option value="aa"> Alphbetically A-z </option>
                    <option value="az"> Alphbetically Z-a </option>
                </select>
             
            </div>
        </div>
    )
}
function Pagin({ page, maxcount, setpage }) {
    let [active, setactive] = useState(1);
    let items = [];
    useEffect(() => setactive(page), [page])
    function changepage(number) {
        setpage(number)

    }    // const [ini_fetch,set_set]
    // console.log(cat)
    // console.log(maxcount)
    // console.log(page)
    // console.log(bin_data)
    for (let number = 1; number <= maxcount; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => { changepage(number) }}>
                {number}
            </Pagination.Item>,
        );
    }
    return (

        <Pagination className="pagin">{items}</Pagination>

    );
}

function Product_card({ name, price, rating,setview }) {
    return <div className="product_card" onClick={()=>{setview(true)}}>
        <div style={{ margin: "10px 28px", width: "200px", height: "230px", backgroundColor: "#D9D9D9" }}></div>
        <div className="card_details">
            <p>{name}</p>
            <p>{price}</p>
            <p style={{ position: "relative", left: "190px", top: "-15px" }}>{rating}</p>
        </div>
    </div>
}
function Product({setview}) {
    const params = useParams()
    const [data, setdata] = useState([])
    const [rawdata, setrawdata] = useState([])
    const [page, setpage] = useState(1)
    const [bin_data, setbin] = useState({})
    const [fetched, setfetched] = useState(false)
    const [maxcount, setmaxcount] = useState(0)
    const [cat, setcat] = useState(params.category)
    const [prev_cat, setprev_cat] = useState('')
    const [sort, setsort] = useState('unsorted')
    function bin(data_array) {
        let binnned_data = {}
        let temp = []
        let k = 0
        let j = 1
        const le = data_array.slice(-1)

        for (let i = 0; i < data_array.length; i++) {

            temp.push(data_array[i]);
            k++;
            if (k == 8 || i == data_array.length - 1) {

                binnned_data[j] = temp
                setmaxcount(j)
                j++;
                temp = []
                k = 0
            }
        }

        return binnned_data;


    }
    function sort_data(data){
        let arr =[...data]

        if (sort[0]=='p') {
            arr.sort((a, b) => {
                const priceA = parseInt(a.price.slice(1)); // Convert ₹1200 to 1200
                const priceB = parseInt(b.price.slice(1));
                return (sort=='ph'?priceB - priceA:priceA - priceB);
            })
        }
        else if(sort[0]=='a'){
                        arr.sort((a, b) => {

                            
                   if(sort=='aa')return a.name[0].localeCompare(b.name[0])
                      else return b.name[0].localeCompare(a.name[0]) 
            })
        }
        else{
            arr.sort((a, b) => {
              
                return (sort=='rh'?b.rating - a.rating:a.rating - b.rating);
            })
            
        }
        return arr;

    }
    function fetch_data() {
        if(!fetched || prev_cat!=cat){
            axios.get(`http://localhost:3000/data/${cat}`)
            .then((r) => {
                setrawdata(r.data)
                let sorted_data=sort_data(r.data)
                let binnned_data = bin(sorted_data)
                setbin(binnned_data)
                setdata(binnned_data[page])
                setfetched(!fetched)
                setprev_cat(cat)
            })
        }
        else{
            let sorted_data=sort_data(rawdata)
            let binnned_data = bin(sorted_data)
            setbin(binnned_data)
            setdata(binnned_data[page])

        }

    }
    useEffect(fetch_data,[page, cat, sort])

    function changepage(e) {
        if (e.target.className == 'left_triangle') {
            if (page == 1) return

            else setpage(page - 1)
        }
        else {
            if (page == maxcount) return
            else setpage(page + 1)
        }


    }

    return (
        <div className="product_cont">
            <Category setcat={setcat} setsort={setsort} />
            <div className="right_triangle" onClick={changepage} ></div>
            <div className="left_triangle" onClick={changepage}></div>

            <div className="card_cont">

                {data.map(e => {
                    return (

                        <Product_card name={e.name} price={e.price} rating={e.rating} key={e.id} setview={setview}/>
                    )

                })}
            </div>
            <div className="pag_cont">

                <Pagin maxcount={maxcount} page={page} setpage={setpage} />
            </div>
        </div>

    )
}
export function Market() {
    const [view,setview]=useState(false)
    console.log(view)
    return (
        <div>
            <Nav_bar phone={false} shoe={false} tshirt={false} home={true} widths={"1900px"} />
            {view?<Product_description setview={setview}/>:<Product setview={setview}/>}
        </div>



    )



}
