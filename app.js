require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnectNoSql = require("./config/mongo");
const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.static("storage"));

const port = process.env.PORT || 3000;

// Invocar las rutas de la app
app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`Servidor preparado. http://localhost:${port}`);
});

// Conexión a la base de datos NoSQL (MongoDB)
dbConnectNoSql();
