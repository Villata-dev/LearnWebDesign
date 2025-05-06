package user

type Usuario struct {
	ID        int
	Nombre    string
	Email     string
	Progreso  int
	Insignias []string // Puede usarse []insignia.Insignia si se importa el paquete
}

// Simula inicio de sesión
func (u *Usuario) IniciarSesion() bool {
	return true // lógica simplificada
}

// Actualiza progreso del usuario
func (u *Usuario) ActualizarProgreso(n int) {
	u.Progreso += n
}
