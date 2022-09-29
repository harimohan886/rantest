const express = require('express');
const router = express.Router();

const DateController = require('../Controllers/Date.Controller');

//Get a list of all products
router.get('/', DateController.getAllDates);

//Create a new product
router.post('/', DateController.createNewDate);

//Get a product by id
router.get('/:id', DateController.findDateById);

//Update a product by id
router.patch('/:id', DateController.updateADate);

//Delete a product by id
router.delete('/:id', DateController.deleteADate);

module.exports = router;