# Modelado de Clases y POO

## Descripción del Proceso

En esta sección, se explica el proceso de modelado de clases para el **Sistema Interactivo**. El modelado de clases se ha realizado en base a los casos de uso definidos en el archivo `usecase.md`, utilizando las herramientas de IA para generar un diagrama de clases en formato PlantUML y traduciéndolo a estructuras de datos en Go.

### Herramientas Utilizadas:
- **IA**: Para la generación inicial del diagrama de clases.
- **PlantUML**: Para crear el diagrama visual.
- **Go**: Para la implementación de las estructuras (structs).

### Diagrama de Clases

A continuación, se muestra el diagrama de clases final del sistema:

![Diagrama de Clases del Sistema X](./diagrams/class/ClassDiagram-SistemaX.svg) 

<!-- Ruta Corecta-->

## Implementación de Structs en Go

A continuación se presentan las estructuras de datos (structs) creadas en Go a partir del diagrama de clases.

**`modules/user/user.go`**

```go
package user

// User representa un usuario del sistema
type User struct {
    ID     int    
    Nombre string 
    Activo bool   
}

// Login verifica las credenciales del usuario
func (u *User) Login(password string) bool {
    // Lógica de autenticación (simplificada)
    return true 
}

// UpdateProfile actualiza la información del perfil de usuario
func (u *User) UpdateProfile(name string, email string) error {
    u.Nombre = name
    // Lógica de actualización
    return nil
}