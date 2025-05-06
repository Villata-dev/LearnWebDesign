package portfolio

type Proyecto struct {
	ID          int
	Titulo      string
	Descripcion string
	URL         string
}

type Portafolio struct {
	ID        int
	Proyectos []Proyecto
}

func (p *Portafolio) AgregarProyecto(proyecto Proyecto) {
	p.Proyectos = append(p.Proyectos, proyecto)
}
