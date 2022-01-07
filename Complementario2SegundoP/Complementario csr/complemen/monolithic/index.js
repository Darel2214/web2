const container = require("./src/startup/container");
const mongoose = require("mongoose");
const path = require('path')
const server = container.resolve("app");
const { MONGO_URI } = container.resolve("config");
const express = require('express');
const  app = express();


mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => server.start())
  .catch(console.log);

  app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

  