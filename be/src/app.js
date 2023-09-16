let { phonesdata, shoesdata, tshirtsdata, proddata } = require('./data')
const exp = require('express')
const app = exp()
const cors = require('cors');
const path = require('path')
const compress = require('compression');
const compression = require('compression');
const { SHA256 } = require('crypto-js')
const cookieParser = require('cookie-parser');
const { timeStamp } = require('console');
app.use(cookieParser());
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
  {"uid":[]},
]
let cookiearr = []
const date = new Date()
console.log(date)
app.use(cors({
  origin: ['http://localhost:8080',]
}));
app.use(compression({
  level: 9,
  threshold: 100,
  filter: (req, res) => {
    if (req.header['x-no-compression']) return false
    return compress.filter(req, res)
  }
}))
app.use(exp.json())
app.get('/data/:category', (req, res) => {
  res.header('Cache-Control', 'public, max-age=3600');
  if (req.params.category == "phones") res.send(phonesdata)
  else if (req.params.category == "shoes") res.send(shoesdata)
  else if (req.params.category == "desc") res.send(proddata)
  else res.send(tshirtsdata)
})
app.get('/setcookie/signin', (req, res) => {
  // res.cookie("id")
  // res.header('Access-Control-Allow-Credentials',true)
  // res.send()
  res.cookie("id", cookiearr.pop())
  res.header('Access-Control-Allow-Credentials', true)
  res.send()
})
app.options('test',cors())
app.post('/test', (req, res) => {
  console.log(req.body)
  console.log(req.cookies)
  res.header('Access-Control-Allow-Credentials', true)
  
  res.send()
})

app.post("/order",(req,res)=>{
  console.log(req.cookies)
  console.log(req.body)
  console.log(sessiondata)
  // orderdetails[req.cookies]
  res.send()
  
})

app.post('/authenticate', (req, res) => {
  console.log(req.body.type)
  if (req.body.type == "signin") {

    console.log("asd")
    userdata.forEach(element => {
      if (element.uname == req.body.uname) {
        console.log(req.body.pass)
        if (element.pass == req.body.pass) {
          cookiearr.push(SHA256(req.body.uname).toString().slice(0, 8))
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

app.use(exp.static(path.join(__dirname, '../../fe/dist_dev')));
app.listen(3000, () => {
  console.log('server started')
})