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

### Instalar Nodemon
  
Se instala la dependencia de Nodemon, para recargar la aplicación cada vez que se realicen cambios.

`npm i nodemon -g`

Se edita el archivo `package.json` para modificar la sección `scripts`, añadiendo las opciones `start` y `dev`:

```json
"scripts": {
    "start": "node ./app.js",
    "dev": "nodemon ./app.js",
  },
```

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

También se puede utilizar Nodemon, para recargar la aplicación cada vez que se realice un cambio:

`npm run dev`

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

---

## Base de datos

### Instalar Mongoose
  
Se instala la dependencia de Mongoose, para gestionar la base de datos.

`npm i mongoose`

### Crear conexión a la base de datos

Se crea el fichero config/mongo.js, aplicando las configuraciones necesarias.

```javascript
const mongoose = require("mongoose");

const dbConnect = () => {
  const DB_URI = process.env.DB_URI;
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
        if (!err) {
            console.log("**** Conexión MongoDB OK ****");
        } else {
            console.log("**** Conexión MongoDB ERROR ****");
        }
    }
  );
};

module.exports = dbConnect;
```

### Editar fichero .env

Se edita el fichero de variables de entorno .env para indicar la variable DB_URI.
Aquí se indica la ruta de conexión al servidor de base de datos MongoDB.

```javascript
DB_URI=mongodb://<user>:<pass>@<host>:<port>/<dbname>?authSource=admin
```

### Aplicar conexión en app.js

Se edita el fichero de app.js para agregar la conexión a base de datos, creada en config/mongo.js

```javascript
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnectNoSql = require("./config/mongo");
const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor preparado. http://localhost:${port}`);
});

dbConnectNoSql();
```

### Crear modelos (MongoDB)

Se crea la carpeta nosql, dentro de la carpeta models.

`mkdir models/nosql`

Esta carpeta contiene los modelos correspondientes a MongoDB.

Por ejemplo, un modelo podría ser `users.js`:

`touch models/nosql/users.js`

---

## Rutas (router)

Las rutas son los puntos de acceso de nuestra aplicación node, a la que se accederá desde la aplicación front para obtener la información.

### Crear rutas
  
Cada fichero de rutas se debe crear dentro de la carpeta `routes`, por ejemplo:

`touch routes/auth.js`

### Modificar fichero app.js

Se modifica el fichero app.js para que obtenga las rutas de la carpeta `routes`:

pegar aqui

```javascript
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnectNoSql = require("./config/mongo");
const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

// Invocar las rutas de la app
app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`Servidor preparado. http://localhost:${port}`);
});

dbConnectNoSql();
```

### Crear índice para las rutas

Se crea el fichero `index.js` para gestionar todas las rutas de la app:

`touch routes/index.js`

Se edita el fichero para agregar el siguiente contenido:

```javascript
const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (filename) => {
  return filename.split(".").shift();
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file);
  if (name !== "index") {
    console.log(`cargando ruta ${name}`);
    router.use(`/${name}`, require(`./${file}`));
  }
});

module.exports = router;
```