const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorRegister = [
  check("password").exists().notEmpty().isLength({ min: 8, max: 20 }),
  check("email").exists().notEmpty().isEmail(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorLogin = [
  check("password").exists().notEmpty().isLength({ min: 8, max: 20 }),
  check("email").exists().notEmpty().isEmail(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorRegister, validatorLogin };
