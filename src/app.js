var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.use(cors({
    origin: '*'
}));

app.use(express.urlencoded({
  extended: true
}));

app.post("/*", jsonParser, function(req, res) {
  res.status(404).send("404 Error not found");
});

var experiencia = {
  "experiencia-laboral": [
    {
      "company": "Inzol",
      "position": "Full Stack Developer",
      "description": "Mi rol consistio en ser desarrollador junior haciendo frontend con angular, backend con ASP.net y con dos bases de datos en sql server. El proyecto fue un sistema de gestion de viajes entre cosechas de madera, acopios intermedios y Montevideo. \n Desarrolle funcionalidades a lo largo de sprints de dos semanas durante cuatro meses. Entre estas funcionalidades estan un sistema de notificaciones, la integracion este este sistema con otro mediante requests http y un modulo de gestion documentacion que verifica la correctitud de la misma para los viajes a realizarse.\n tambien participé en el desarrollo de la página web de la empresa utilizando bootstrap, javascript y css para implementar el diseño hecho por una diseñadora.",
      "initialDate": new Date("2021/06/21"),
      "finishedDate": null
    },
    {
      "company": "Inzol",
      "position": "Full Stack Developer",
      "description": "Mi rol consistio en ser desarrollador junior haciendo frontend con angular, backend con ASP.net y con dos bases de datos en sql server. El proyecto fue un sistema de gestion de viajes entre cosechas de madera, acopios intermedios y Montevideo. \n Desarrolle funcionalidades a lo largo de sprints de dos semanas durante cuatro meses. Entre estas funcionalidades estan un sistema de notificaciones, la integracion este este sistema con otro mediante requests http y un modulo de gestion documentacion que verifica la correctitud de la misma para los viajes a realizarse.",
      "initialDate": new Date("2021/06/21"),
      "finishedDate": null
    }
  ]
};

var jsonParser = bodyParser.json();

app.get('/experiencia', function(req, res) {
  res.send(experiencia);
});

app.listen(process.env.PORT || 3000, (a) => {
  console.log("Servidor disponible en http://localhost:3000")
});
 
module.exports = app;