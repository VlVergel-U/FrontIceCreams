# GoodIceCreams App 🍦

Bienvenido a **GoodIceCreams**, una aplicación web desarrollada con **Angular** para gestionar helados. Este proyecto incluye funcionalidades como registro, inicio de sesión, y una interfaz amigable para explorar diferentes sabores. Está conectada a un backend para manejar la lógica y los datos.

## 🛠️ Funcionalidades

- **Registro**: Crea una cuenta para acceder a la aplicación.
- **Inicio de sesión**: Autenticación segura para los usuarios.
- **Página principal**: Una vista que muestra la información de los helados.
- **Protección de rutas**: Solo usuarios autenticados pueden acceder a ciertas secciones.
- **Páginas de error**: Una vista `404` para rutas no encontradas.

## 🌐 Enlace a la App

Accede a la aplicación desplegada aquí: [GoodIceCream App](https://goodicecreams.web.app/)

---

## 📂 Estructura del Proyecto

El proyecto está organizado en las siguientes carpetas principales:

### `components`
- **home**: Página principal de la aplicación
- **login**: Componente para el inicio de sesión
- **notfound**: Página de error para rutas no encontradas (404)
- **register**: Componente para el registro de usuarios

### `environments`
Archivo de configuración de entorno

### `guard`
- **protection.guard**: Implementa la lógica para proteger rutas, asegurando que solo usuarios autenticados puedan acceder

### `interceptors`
- Implementa interceptores para manejar peticiones HTTP

### `models`
- Contiene las interfaces y clases que definen los modelos de datos utilizados

### `services`
- Servicios para la comunicación con el backend

---

## 🔧 Configuración del Proyecto

### Requisitos Previos
1. [Node.js](https://nodejs.org/)
2. [Angular CLI](https://angular.io/cli)

### Instalación
1. Clona el repositorio:
   git clone https://github.com/VlVergel-U/FrontIceCreams.git