package achievement

type Logro struct {
	ID          int
	Descripcion string
	Cumplido    bool
}

func (l *Logro) VerificarCumplimiento() bool {
	return l.Cumplido
}
