// Módulos
const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes");


//Conexión con bbd

require('./config/db');


// Routes

app.use("/", routes);

// Conexión con servidor 

app.listen (port, () =>{
    console.log(`Iniciando el puerto ${port}`)
}); 
