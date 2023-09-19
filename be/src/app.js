let { phonesdata, shoesdata, tshirtsdata, proddata , searchdata} = require('./data')
const exp = require('express')
const app = exp()
require('dotenv').config();
const cors = require('cors');
const path = require('path')
const compress = require('compression');
const compression = require('compression');
const { SHA256 } = require('crypto-js')
const cookieParser = require('cookie-parser');
app.use(cookieParser());

console.log(process.env.NGINX_PASS)
function nginxcheck(req,res,next){
  console.log("ngin")
  console.log(req.headers['x-my-auth-token'])
  if(req.headers['x-my-auth-token']===process.env.NGINX_PASS) next();
  else{

    res.status(401)
    res.end()
  }
}
app.use(nginxcheck)
userdata = [
  {
    fname: 'dio',
    lname: 'brando',
    uname: 'dio',
    pass: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3',
    id: "u1"
  }


]
let sessiondata = [
  {
    "sessionid": {
      userid: "u1",
      logintime: 31231,
      cart: ["product 1", "product 2"]
    }
  }

]
let orderdetails=[
  {"uid":{}},
]
let cookiearr = []
const date = new Date()
console.log(date)

app.use(compression({
  level: 9,
  threshold: 100,
  filter: (req, res) => {
    if (req.header['x-no-compression']) return false
    return compress.filter(req, res)
  }
}))
app.use(exp.json())
app.get('/api/data/:category', (req, res) => {
  res.header('Cache-Control', 'public, max-age=3600');
  if (req.params.category == "phones") res.send(phonesdata)
  else if (req.params.category == "shoes") res.send(shoesdata)
  else if (req.params.category == "desc") res.send(proddata)
  else res.send(tshirtsdata)
})
app.post('/api/test', (req, res) => {
  req.headers['x-my-auth-token']
  res.send("gg bois")
})

app.post("/api/order",(req,res)=>{
  //$$$$$$$placeholder to add a check to verify cookies not doing this cos no db is set up
  let orederdata={
    [req.cookies.id]:req.body
  }
  orderdetails.push(orederdata)
  console.log(orderdetails)
  console.log(orderdetails[1])
  res.send("ok")
  
})
app.post('/api/signout',(req,res)=>{
  console.log(req.body)
  res.clearCookie("id")
  res.send()
  

})
app.post('/api/authenticate', (req, res) => {
  console.log(req.body.type)
  if (req.body.type == "signin") {

    console.log("asd")
    userdata.forEach(element => {
      if (element.uname == req.body.uname) {
        console.log(req.body.pass)
        if (element.pass == req.body.pass) {
          res.cookie("id",SHA256(req.body.uname).toString().slice(0, 8))
          sessiondata.push({
            [SHA256(req.body.uname).toString().slice(0, 8)]: {
              userid: element.id,
              logintime: Date.now().toString(),
              cart: []
            }
          })
          // {
          //   "sessionid":{
          //     userid:"u1",
          //     logintime:31231,
          //     cart:["product 1","product 2"]
          //   }
          // }
          res.send({
            status: "success",
          }); //Sets name = express
        }
        else {
          console.log("nope")
          res.send({
            status: "wrong pass",
          })

        }
      }
      else {
        console.log("no user found")
        res.send({
          status: "No username",
        })
      }


    });
  }

})
console.log()
console.log(SHA256('123').toString())
// app.get('*',(req,res)=>{
//   res.sendFile('/home/arjith/web_dev/proj/ecom/fe/dist_prod/index.html')
// })
app.get("/api/rt",(req,res)=>{
  console.log(req)
  res.send("heddssDASDADASssllo")
})
app.get("/api/search",(req,res)=>{

  res.header('Cache-Control', 'public, max-age=3600');
  res.send(searchdata)
})

app.use(exp.static(path.join(__dirname, '../../fe/dist_dev')));
app.listen(3000, () => {
  console.log('server started')
})
