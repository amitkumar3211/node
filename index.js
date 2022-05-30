const express =  require('express');
const path = require('path'); 
const app = express();
const reqFilter = (req,res,next)=>{

next();
} 
app.use(reqFilter);

app.set('view engine', 'ejs');

//app.use(express.static(pubpath));
// home page route

app.get('',(req,res)=>{

res.render('index');


});

app.get('/about',(req,res)=>{
const aboutData={

pagename : 'about page here',
Title : 'page title'

}
    res.render('about',{aboutData}); 
    });


    app.get('*',(req,res)=>{
        res.render('404');
        });

// app.get('/about.html',(req,res)=>{
//    res.send('about page here ');
//     });

app.listen(4000);     