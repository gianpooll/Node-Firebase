"use strict"

function formAgregaUsuario (req, res) {
	res.render("./usuarios/formAgregarUsuarios")
}

function nuevoUsuario (req, res) {
	console.log(req.body)
	let {nombreusuario ,telefono} = req.body
	console.log(nombreusuario)
	console.log(telefono)
	let error = ""
	if(nombreusuario == "")
	error = "Debes Ingresar un Usuario"
	res.render("./usuarios/formAgregarUsuarios", { error })
}

module.exports = {
	formAgregaUsuario,
	nuevoUsuario,
}