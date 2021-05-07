var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.listen(3000, function(){
    console.log('start express server on port 3000')
})
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    // res.send("<h1>hi friend!</h1>");
    res.sendFile(__dirname + "/public/main.html")
})

app.get('/main', function(req, res){
    // res.send("<h1>hi friend!</h1>");
    res.sendFile(__dirname + "/public/main.html")
})

app.get('/form', function(req, res){
    // res.send("<h1>hi friend!</h1>");
    res.sendFile(__dirname + "/public/form.html")
})

app.post('/email_post', function(req, res){
    // console.log(req.body.email)
    //res.send(`<h1>welcome ${req.body.email}!</h1>`);
    res.render('email.ejs', {'email':req.body.email})
});