const express = require('express');
const router = express.Router();
const controller = require('../controllers/expense');
const { check } = require('express-validator');

router.post(
	'/',
	check('expenses').exists().notEmpty().isArray(),
	check('expenses.*.name').exists().notEmpty().isString(),
	check('expenses.*.amount').exists().notEmpty().isNumeric(),
	controller.create
);

module.exports = router;
