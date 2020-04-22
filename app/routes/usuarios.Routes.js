"use strict"
const rutas = require("express").Router()

const UsuariosController = require("../controllers/usuarios.Controller")

rutas.get("/usuarios/agregar-usuario", UsuariosController.formAgregaUsuario)

rutas.post("/usuarios/nuevo-usuario", UsuariosController.nuevoUsuario)

module.exports = rutas