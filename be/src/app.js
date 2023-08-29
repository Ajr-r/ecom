let {phonesdata,shoesdata,tshirtsdata,proddata}=require('./data')
const exp =require('express')
const app=exp()
const cors = require('cors');
const path =require('path')
const compress=require('compression');
const compression = require('compression');
app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200,
}));
app.use(compression({
  level:9,
  threshold:100,
  filter:(req,res)=>{
    if(req.header['x-no-compression'])return false
    return compress.filter(req,res)
  }
}))
app.get('/data/:category',(req,res)=>{
  res.header('Cache-Control', 'public, max-age=3600'); 
  if(req.params.category=="phones")res.send(phonesdata)
  else if(req.params.category=="shoes")res.send(shoesdata)
  else if(req.params.category=="desc")res.send(proddata)
  else res.send(tshirtsdata)
})


// app.get('*',(req,res)=>{
//   res.sendFile('/home/arjith/web_dev/proj/ecom/fe/dist_prod/index.html')
// })

app.use(exp.static(path.join(__dirname, '../../fe/dist_prod')));
console.log(path.join(__dirname, '../../fe/dist_prod'))
app.listen(3000,()=>{
    console.log('server started')
})