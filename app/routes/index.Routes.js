"use strict"

const rutas = require("express").Router()
const IndexController = require("../controllers/index.Controller")

rutas.get("/", IndexController.index)

module.exports = rutas