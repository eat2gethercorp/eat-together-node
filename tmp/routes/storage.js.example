const express = require("express");
const {
  getItems,
  getItem,
  createItem,
  deleteItem,
} = require("../controllers/storage");
const { authMiddleware } = require("../middleware/session");
const uploadMiddleware = require("../utils/handleStorage");
const router = express.Router();
const { validatorGetItem } = require("../validators/storage");

/**
 * Lista todos los items
 */
router.get("/", authMiddleware, getItems);

/**
 * Obtener detalle de un item
 */
router.get("/:id", authMiddleware, validatorGetItem, getItem);

/**
 * Eliminar un item
 */
router.delete("/:id", authMiddleware, validatorGetItem, deleteItem);

/**
 * Crea un item
 */
router.post("/", authMiddleware, uploadMiddleware.single("myfile"), createItem);

module.exports = router;
