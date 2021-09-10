# Prueba Backend Ingenieria Resuelve

_Api desarrollada con node y express para resolver la prueba de backend de ingenieria resuelve_

### Pre-requisitos 📋

* Docker version 20.10.8
* docker-compose version 1.29.2
* node v12.22.3
* npm 6.14.13

## Comenzando 🚀

_Clona el repositorio del proyecto_
```
  git clone git@github.com:vickpalomo/prueba_backend_resuelve.git
```
### Configuración 🔧

_Renombrar el archivo example.env a .env_

_Para ejecutar el proyecto con nodejs_

* Instalar dependencias del proyecto

```
  npm install
```

* Levantar el proyecto usando nodemon, este paquete le permitira reiniciar el servidor cada vez que detecte un cambio en los archivos
```
  npm run dev
```

### Configuración con Docker 🔧

* Dentro de la carpeta del proyecto ejecute
```
  docker-compose up -d
```

* El servidor se levanta en el puerto 3000
```
  http://localhost:3000
```

## Ejecutando las pruebas ⚙️

* Para realizar las pruebas automatizadas, ejecute
```
  npm run test
```

## Consultando los endpoints ⚙️

_El proyecto tiene un endpoint que recibe el json con los datos para calcular el sueldo completo de los jugadores_

* Realice un post a la siguiente url

```
  POST http://localhost:3000/salary
```

* El proyecto esta hosteado en un vps de aws, puede hacer peticiones a la siguiente url:
```
  POST http://http://3.134.243.162/api/v1/salary
```

* La documentación del codigo del proyecto la encuentra en:
```
  GET http://3.134.243.162/documentation/
```

* La documentación de la API la encuentra en:
```
  http://localhost:3000/api-docs/
```

## Construccion CD/CI 🛠️

_El proyecto construye una imagen docker, siguiendo un pipeline hecho con drone.io y por ultimo sube la imagen al docker hub para que sea visible para cualquier persona._

* [Drone](https://docs.drone.io/) - Servidor CI/CD.
* [Docker Hub](https://hub.docker.com/) - Usado como repositorio de Imagenes

## Autores ✒️

* **Victor Manuel Palomo Yama** - *Backend Developer* - [vickpalomo](http://github.com/vickpalomo)