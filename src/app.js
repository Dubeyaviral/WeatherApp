const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8000;

//public static path
const staticPath = path.join(__dirname,'../public');
const templatePath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

app.set('view engine','hbs');
app.set('views', templatePath);
//regisetring partials
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

//routing
app.get('/',(req,res)=>{
    res.render('index')
});

app.get('/about',(req,res)=>{
    res.render('about')
});

app.get('/weather',(req,res)=>{
    res.render('weather')
});

app.get('*',(req,res)=>{
    res.render('404error',{
        errorMsg: "Oops Page not found"
    })
});
app.listen(port, ()=>{
    console.log(`Listening to the port ${port}`);
})