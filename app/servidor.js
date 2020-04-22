"use strict"
const express = require("express")
const morgan = require("morgan")
const path = require("path")
const MethodOverride = require("method-override")

const IndexRutas = require("./routes/index.Routes")
const UsuariosRutas = require("./routes/usuarios.Routes")

const app = express()

//Configuraciones
app.set("port", process.env.PORT || 3000)
app.set("views", path.join(__dirname, "views"))

// Configuración del motor de vistas
app.set("view engine", "pug")

// Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan("dev"))
app.use(MethodOverride("_method"))

// Rutas de la aplicación
app.use(IndexRutas)
app.use(UsuariosRutas)

// Archivos estaticos
app.use(express.static(path.join(__dirname, "public")))

module.exports = app