
/* const myLog = function(req,res,next){
  console.log('start server now')
  next();
}

app.use(myLog);
app.get('/',function(req,res){
  res.send('kmara')

}) */

/* const cookies =require("cookie-parser");
app.use(express.urlencoded({
  extended:true
}))
const data = {
  id:1,
  name:"sudan"
}
app.get('/bab',(req,res)=>{
  res.render('bab');
})
app.post('/form_submit',(req,res)=>{
  const username = req.body.email
  const password = req.body.password
  res.end(`your email is:${username}and yor passwrd is:${password}`);
})
let user = {
  name: 'lamona',
  secretKey:'were3eq4r4ref##$erefw$^*^&*444783423214',
  bsbx:'lsmxsmclsmlcsm'
}

app.use(cookies());
app.get('/',(req,res)=> {
  res.send('cookeies totorial');
})
app.get('/sec',(req,res)=>{
  res.cookie('userdata',user);
  res.send('user data is set');
})
app.get('/sec2',(req,res)=>{
  res.send(req.cookies);
})
app.get('/sec4',(req,res)=>{
  res.clearCookie(user)
  res.send('cookei clear')
}) */