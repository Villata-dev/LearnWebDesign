package database

import "github.com/tuusuario/tuProyecto/modules/user"

type BaseDeDatos struct{}

func (db *BaseDeDatos) GuardarProgreso(usuario user.Usuario) {
	// Lógica para guardar progreso
}

func (db *BaseDeDatos) CargarProgreso(idUsuario int) user.Usuario {
	// Lógica simulada
	return user.Usuario{ID: idUsuario, Nombre: "Ejemplo"}
}
