require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnectNoSql = require("./config/mongo");
// const { dbConnectMySql } = require("./config/mysql");
// const morganBody = require("morgan-body");
// const loggerStream = require("./utils/handleLogger");
const app = express();

// const ENGINE_DB = process.env.ENGINE_DB;

app.use(cors());
// app.use(express.json());
// app.use(express.static("storage"));

// morganBody(app, {
//   noColors: true,
//   stream: loggerStream,
//   skip: function (req, res) {
//     return res.statusCode < 400;
//   },
// });

const port = process.env.PORT || 3000;

// Invocar las rutas de la app
app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`Servidor preparado. http://localhost:${port}`);
});

// Conexión a la base de datos NoSQL (MongoDB)
dbConnectNoSql();
