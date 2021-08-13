if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}
const router = require('./router')
//const route = require('./router')
const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

const express = require('express')
const app = express()
const fs = require('fs')
const stripe = require('stripe')(stripeSecretKey)
const session = require('express-session')
const {v4: uuidv4} = require('uuid') 
const path = require('path')


app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.static('public'))

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended:false
}));
app.use(session({
  secret:uuidv4(),
  resave:false,
  saveUninitialized:true
}))
app.use('/api',router);

app.get('/',(req,res)=> {
  res.render('bab',{title:'blalalallalala'})
}) 
///////////////////////////////
/* app.use(function(req,res,next){
  console.log('ldfdlmfdmf');
  next()
})
app.use(function(req,res){
  var filePath = path.join(__dirname, "static",req.url)
  fs.stat(filePath,function(err,fileInfo){
    if(err){
      next();
      return
    }
    if(fileInfo.isFile()){
      res.sendFile(filePath)
      
    }else{
      next();

    }
  })
}) */


app.listen(3000)