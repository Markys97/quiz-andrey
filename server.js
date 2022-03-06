'use strict'
const express = require('express');
const mysql= require('mysql');
const Port= 3100;

const app= express();
app.use(express.static(__dirname+'/public'));

const connection= mysql.createConnection({
    user:'root',
    password:'',
    database:'andrey'
})
connection.connect(()=> console.log('database connecting '))


app.get('/',(req,res)=>{
    
    connection.query('SELECT * FROM quiz ',(err,data)=>{
        if(err){
            throw err
        }else{
            
            let answers;
            data.forEach(element => {
                answers= JSON.parse(element.answers)
            });
            res.render('home',{data,answers})
        }
    })



})

app.set('view engine','ejs');










app.listen(Port,()=> console.log('server run on port '+ Port))

