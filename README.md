# Prueba Técnica Backend - Sebastián Olivar

Este repositorio contiene el código fuente del backend de la prueba técnica para el puesto de Desarrollador Fullstack.

## Descripción

El backend es una API REST desarrollada con Node.js y Express que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una lista de elementos. Los datos se almacenan en un archivo JSON.  Se ha priorizado una arquitectura simple pero robusta, con un diseño en capas que facilita la escalabilidad y el mantenimiento.

## Tecnologías utilizadas

* Node.js
* Express
* Docker
* CORS

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/SebastianOlivarCorredor/backend-prueba-tecnica.git
```

2. Instala las dependencias:

```bash
cd backend
npm install
```

## Ejecución

### Modo desarrollo

1. Inicia la aplicación:

```bash
npm start
```

Esto iniciará el servidor en `http://localhost:3001`.

### Con Docker

Para ejecutar la aplicación con Docker, sigue estos pasos:

1. Asegúrate de tener Docker Desktop instalado.
2. En la raíz del proyecto (que contiene tanto el frontend como el backend), ejecuta:

```bash
docker-compose up -d
```

Esto construirá e iniciará los contenedores del frontend y el backend.


## API REST

La API REST expone las siguientes rutas:

* `GET /elementos`: Listar todos los elementos.
* `GET /elementos/:nombre`: Obtener un elemento por su nombre.
* `POST /elementos`: Crear un nuevo elemento.
* `PUT /elementos/:nombre`: Actualizar un elemento existente.
* `DELETE /elementos/:nombre`: Eliminar un elemento.

## Estructura del proyecto

```
prueba-tecnica-juan/
├── my-app/  (frontend)
│   └── ...
└── backend/  (backend)
    └── index.js  
```

## Notas

* Este proyecto utiliza CORS para permitir peticiones desde el frontend.
* El frontend se encuentra en otro repositorio: `https://github.com/SebastianOlivarCorredor/frontend-prueba-tecnica.git`
```
