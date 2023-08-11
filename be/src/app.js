let {phonesdata,shoesdata,tshirtsdata}=require('./data')
const exp =require('express')
const app=exp()
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const cors = require('cors');
console.log(phonesdata)
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

app.use(connectLivereload());
app.use(exp.static('../../dist_prod'))
app.listen(3000,()=>{
    console.log('server started')
})