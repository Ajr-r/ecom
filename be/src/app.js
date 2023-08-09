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
// open livereload high port and start to watch public directory for changes
const liveReloadServer = livereload.createServer();
liveReloadServer.watch('/home/arjith/web_dev/proj/ecom/fe/dist_prod');

// ping browser on Express boot, once browser has reconnected and handshaken
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
app.get('/data/:category',(req,res)=>{
  res.header('Cache-Control', 'public, max-age=3600'); 
  if(req.params.category=="phones")res.send(phonesdata)
  else if(req.params.category=="shoes")res.send(shoesdata)
  else res.send(tshirtsdata)
})

app.use(connectLivereload());
app.use(exp.static('../fe/dist_prod'))
app.listen(3000,()=>{
    console.log('server started')
})