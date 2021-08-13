const express = require('express')
const router = express.Router();

/* const accounts = require('./dataBase') */


/* router.get('/accounts',(req,res)=>{
    res.json({userData:accounts})
}) */
const accounts = require('./dataBase') 


const cradentials = [
    {
        email:'van@gmail.com',
        password:'22'
    },
    {
        email:'van2@gmail.com',
        password:'222'
    }

]

router.post('/login',(req,res)=> {
    for(let cradential of cradentials){
        if(req.body.email == cradential.email && req.body.password == cradential.password){
            req.session.user = req.body.email;
            res.redirect('/route/dashbord');
            //res.end('sucses login');
        } else {
            res.end('invalid user');
        }
    }

})
router.get('/dashbord',(req,res)=> {
    if(req.session.user){
        res.render('dashbord',{user:req.session.user});
    }else{
        res.send('un Athouraiez user')
    }
})
router.get('/logout',(req,res) => {
    req.session.destroy(function(err){
        if(err){
            console.log(err)
            res.send('errr rororr')
        }else{
            res.render('bab');
        }
    })
}) 
router.get('/accounts',(req,res)=> {
    res.json({UserData : accounts})
})
///////////////POST REQUEST
router.post('/accounts',(req,res)=>{
    const incomingAccounts = req.body
    accounts.push(incomingAccounts);
    res.json(accounts);
});

router.get('/accounts/:id/',(req,res)=>{
    const accountid = Number(req.params.id);
    const getAccount = accounts.find((account)=> account.id === accountid)
    if(!getAccount){
        res.status(500).send('your Data Is not Found');
    }else{
        res.json({userData: [getAccount]});
    }
}); 





router.post('/login',(req,res)=> {
    if(req.body.email == cradential.email && req.body.password == cradential.password){
        req.session.user = req.body.email;
        res.redirect('/route/dashbord');
        //res.end('sucses login');
    } else {
        res.end('invalid user');
    }

})
router.get('/dashbord',(req,res)=> {
    if(req.session.user){
        res.render('dashbord',{user:req.session.user});
    }else{
        res.send('un Athouraiez user')
    }
})
router.get('/logout',(req,res) => {
    req.session.destroy(function(err){
        if(err){
            console.log(err)
            res.send('errr rororr')
        }else{
            res.render('bab');
        }
    })
}) 

module.exports = router;