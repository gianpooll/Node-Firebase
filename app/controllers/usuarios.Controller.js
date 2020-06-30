"use strict"

function formAgregaUsuario (req, res) {
	res.render("./usuarios/formAgregarUsuarios")
}

function nuevoUsuario (req, res) {
	let {nombreusuario ,telefono, email, contra} = req.body
	let error = ""
	if(nombreusuario == "") {
		error = "Debes Ingresar un Usuario"
		res.render("./usuarios/formAgregarUsuarios", { error })
	}
	else if (email == "") {
		error = "Debes Ingresar un Correo Electronico"
		res.render("./usuarios/formAgregarUsuarios", { error })
	}
	else if (contra == "") {
		error = "Debes ingresar una contraseña valida"
		res.render("./usuarios/formAgregarUsuarios", { error })
	}
	console.log(req.body)
	
}

module.exports = {
	formAgregaUsuario,
	nuevoUsuario,
}