let { phonesdata, shoesdata, tshirtsdata, proddata } = require('./data')
const exp = require('express')
const app = exp()
const cors = require('cors');
const path = require('path')
const compress = require('compression');
const compression = require('compression');
const { SHA256 } = require('crypto-js')
const cookieParser = require('cookie-parser');
// app.use(cookieParser());
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
  // {
  //   "u1":{
  //     sestkn:"adsasdad",
  //     logintime:31231

  //   }
  // }

]
app.use(cors({
  credentials: true,
  origin: '*',
  optionsSuccessStatus: 200,
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
app.get('/test', (req, res) => {
  console.log('dd')
  res.setHeader('set-cookie','foo=ff')
  res.send('recieved')
})
app.post('/authenticate', (req, res) => {
  console.log(req.body.type)
  if (req.body.type == "signin") {

    console.log("asd")
    userdata.forEach(element => {
      if (element.uname == req.body.uname) {
        console.log(req.body.pass)
        if (element.pass == req.body.pass) {
          res.setHeader('set-cookie', 'foo=bar');
          
          res.send('cookie set'); //Sets name = express
        }
        else {
          console.log("nope")
          res.send("fail")

        }
      }
      else {
        console.log("no user found")
        res.send("no user")
      }


    });
  }

})

console.log(SHA256('123').toString())
// app.get('*',(req,res)=>{
//   res.sendFile('/home/arjith/web_dev/proj/ecom/fe/dist_prod/index.html')
// })

app.use(exp.static(path.join(__dirname, '../../fe/dist_prod')));
app.listen(3000, () => {
  console.log('server started')
})