// Módulos
const express = require("express");
const app = express();
const port = 3000;

// Routes

app.get("/", (req, res)=>{
    res.send("Hello World")
})

// Conexión con servidor 

app.listen (port, () =>{
    console.log(`Iniciando el puerto ${port}`)
}); 
