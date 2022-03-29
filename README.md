# Eat2gether

## Creación del proyecto

### Iniciar proyecto
  
Se genera el fichero package.json de nuestro proyecto.

`npm init --y`

### Instalar Express
  
Se instala la dependencia de Express, framework web para la parte back-end.

`npm i express`

### Instalar varios paquetes
  
Se instalan las siguientes dependencias:

- Cors, para evitar problemas de seguridad
- Dotenv, manejar variables de entorno
- Multer, manejar carga de ficheros

`npm i cors dotenv multer`

### Crear fichero app.js

Se crea el fichero app.js en la raiz del proyecto, aplicando las configuraciones necesarias. Por ejemplo:

Este fichero contiene la configuración de nuestra aplicación.

```javascript
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor preparado. http://localhost:${port}`);
});
```

### Crear fichero .env

Se crea el fichero .env y .env.example en la raiz del proyecto, aplicando las configuraciones necesarias.

Este fichero contiene las variables de entorno.

```javascript
PORT=3000
```

### Arrancar aplicación

Se puede probar la aplicación ejecutando el siguiente comando:

`node app.js`

---

## Estructura de carpetas (Scaffold)

### Creación de carpetas y ficheros
  
Se crea la estructura de carpetas

#### models

Aquí se incluirán los modelos (plantillas para la base de datos).

`mkdir models`

#### controllers

Aquí se incluirán los controladores (métodos y funcionamiento).

`mkdir controllers`

#### routes

Aquí se incluirán las rutas (enlaces a las vistas de la app).

`mkdir routes`

#### config

Aquí se incluirán las configuraciones (por ejemplo, la conexión a base de datos).

`mkdir config`

#### utils

Aquí se incluirán las utilidades (funciones helpers / tareas repetitivas).

`mkdir utils`

#### storage

Aquí se incluirán los ficheros de almacenamiento (por ejemplo, ficheros de música .mp3).

`mkdir storage`