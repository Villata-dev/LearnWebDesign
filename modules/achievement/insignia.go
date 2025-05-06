package achievement

type Insignia struct {
	ID          int
	Nombre      string
	Descripcion string
}

func (i *Insignia) Desbloquear() {
	// Lógica para marcar como desbloqueada
}
