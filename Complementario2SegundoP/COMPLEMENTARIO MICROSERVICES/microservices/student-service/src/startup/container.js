const { createContainer, asClass, asValue, asFunction } = require("awilix");

//configuracion

const config = require("../config");
const app = require(".");

//servicios
const { StudentService } = require("../services");

//controladores
const { StudentService } = require("../controllers");

//rutas
const { StudentService } = require("../routes/index.routes");

const Routes = require("../routes");

// modelos
const { Student } = require("../models");

// repositorios
const { StudentService } = require("../repositories");

const container = createContainer();

container
  .register({
    //configuracion
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    //servicios
    StudentService: asClass(StudentService).singleton(),
  })
  .register({
    //controladores
    StudentService: asClass( StudentService.bind(StudentService)).singleton(),
  })
  .register({
    //rutas
    StudentService: asFunction(StudentService).singleton(),
  })
  .register({
    //modelos
    StudentService: asValue(StudentService),
  })
  .register({
    // repositorios
    StudentRepository: asClass(StudentRepository).singleton(),
  });

module.exports = container;
