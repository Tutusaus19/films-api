// Módulos 
const router = require("express").Router()

//Rutas


//Ruta que trae todas las pelis

router.get ("/", (req, res, next) =>{
    res.status(200).json({
        success: true, 
        message: "ALL FILMS"
    })
}); 

//Ruta que tre peli por ID

router.get ("/:id", (req, res) => {
    res.status(200).json({
        success: true, 
        message: "FILM BY ID"
    });
});

// Ruta para añadir una nueva pelicula a mi bbdd

router.post('/', (req, res)=>{
    res.status(201).json({
        success: true, 
        message: "NEW FILM"
    });
}); 


// Ruta para borrar una película 

router.delete('/:id', (req, res) =>{
    res.status(204).json({
        success: true, 
        message: "FILM DELETED"
    });
});


// Exportar Router
module.exports = router