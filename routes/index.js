const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (filename) => {
  return filename.split(".").shift();
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
  // eliminar la extensión del archivo
  const name = removeExtension(file);
  // omitir archivo index
  if (name !== "index") {
    console.log(`cargando ruta ${name}`);
    router.use(`/${name}`, require(`./${file}`));
  }
});

module.exports = router;
