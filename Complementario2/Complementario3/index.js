
const mongoose = require("mongoose");
const axios = require("axios").default;
const cheerio = require ("cheerio");
const cron =require("node-cron");


////Importaciones para poder trabajar con modelos de mongoose
const {MONGO_URI}= require('./config');
const {Noticia } = require('./models');


mongoose.connect(MONGO_URI, {useNewUrlParser:true, useUnifiedTopology: true});
cron.schedule("58 10 * * * ", 

async ()=> {
    const html = await axios.get("https://www.salud.gob.ec/");
    const $ = cheerio.load(html.data);
    const titulos = $(".titulo");
    let arregloNotificacion = []

    titulos.each((index, element)=>{
        const arregloNotificacion=
        {
            titulo:  $(element).text() ,
            enlace:  $(element).children().attr("href") 
        }
        arregloNotificacion = [ ...arregloNotificacion, arregloNotificacion ];

    })
    Noticia.create(arregloNoticias);
})