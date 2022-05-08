// Modulos

const router = require("express").Router()
const filmsRoutes = require("./filmsRoutes")

router.use("/films", filmsRoutes)

module.exports = router
