let {phonesdata,shoesdata,tshirtsdata}=require('./data')
const exp =require('express')
const app=exp()
const cors = require('cors');
const path =require('path')
app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200,
}));
app.get('/data/:category',(req,res)=>{
  res.header('Cache-Control', 'public, max-age=3600'); 
  if(req.params.category=="phones")res.send(phonesdata)
  else if(req.params.category=="shoes")res.send(shoesdata)
  else res.send(tshirtsdata)
})
app.get('*',(req,res)=>{
  res.sendFile('/home/arjith/web_dev/proj/ecom/fe/dist_prod/index.html')
})

app.use(exp.static(path.join(__dirname, '../../fe/dist_prod')));
console.log(path.join(__dirname, '../../fe/dist_prod'))
app.listen(3000,()=>{
    console.log('server started')
})