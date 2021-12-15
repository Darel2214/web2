const express = require("express");
const mongoose = require("mongoose");
const app =express();

////Importaciones para poder trabajar con modelos de mongoose
const {MONGO_URI}= require('./config');
const {Noticia } = require('./models');

app.use(express.json());
mongoose.connect(MONGO_URI, {useNewUrlParser:true, useUnifiedTopology: true});
//////get
// ///   /individual/:nombre

app.get('/' ,(req,res)=>{
    Noticia.find({}, (err, noticia)=> {
        res.status(200).send({
            noticia
        })
    })
} )

app.listen(4000, ()=>{
    console.log(`El servidor esta escuchando por el puerto 4000`)
})
