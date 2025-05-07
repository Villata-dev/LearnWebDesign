# 🧩 Modelado de Clases y POO

Este documento describe el proceso de modelado de clases del sistema **Sistema de Aprendizaje Interactivo**, basado en los casos de uso definidos previamente. Aquí se incluye el diagrama de clases generado, su implementación en Go y una reflexión sobre el uso de herramientas de IA.

---

## 📋 Descripción del Proceso

Para construir el diagrama de clases, se siguieron estos pasos:

1. Se analizaron los casos de uso presentes en el archivo `usecases.md` y sus respectivos diagramas.
2. Se utilizó una herramienta de IA (ChatGPT) para generar un modelo inicial en formato PlantUML.
3. Se refinaron las clases, atributos y relaciones para representar correctamente la lógica del sistema.
4. Se usó Visual Studio Code con la extensión PlantUML para visualizar, ajustar y exportar el diagrama.
5. Finalmente, se implementaron las `structs` equivalentes en Go, organizadas por módulos.

---

## 📊 Diagrama de Clases

![Diagrama de Clases del Sistema](./diagrams/class/ClassDiagram-SistemaAprendizaje.svg)

---

## 💻 Implementación de Structs en Go

### `modules/user/user.go`

```go
package user

type User struct {
    ID       int
    Nombre   string
    Correo   string
    Activo   bool
    Progreso int
}



