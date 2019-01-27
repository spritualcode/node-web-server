const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use(express.static(__dirname+'/public'));

hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});


app.get('/',(req,res)=>{
    //res.send('<h1>I am express</h1>');
    res.send({"name":"Aadvik", "Age":"5.6"});
});

app.get('/home',(req,res)=>{
    //res.send('<h1>I am express</h1>');
    res.render('home.hbs',{
        welcomeTItle:"welcome to home"
        });
});


app.get('/about' , (req,res)=>{
    res.render('about.hbs');
})

app.get('/bad', (req,res)=>{
    res.send({
        "error":"some error"
    })
});
app.listen(port, () =>{
    console.log(`server is started at ${port} port`);
});