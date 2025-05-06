package editor

type EditorCodigo struct {
	ID            int
	ContenidoHTML string
	ContenidoCSS  string
}

func (e *EditorCodigo) RenderizarEnVivo() {
	// Simulación de renderizado
}

func (e *EditorCodigo) ActualizarContenido(html string, css string) {
	e.ContenidoHTML = html
	e.ContenidoCSS = css
}
