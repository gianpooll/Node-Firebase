"use strict"
const app = require("./servidor")

function servidor () {
	app.listen(app.get("port"))
	console.log(`Servidor ejecutandose en el puerto: ${app.get("port")}`)
}

servidor()