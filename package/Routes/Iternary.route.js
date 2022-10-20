const express = require('express');
const router = express.Router();

const IternaryController = require('../Controllers/Iternary.Controller');

//Get a list of all products
router.get('/', IternaryController.getAllIternarys);

//Create a new product
router.post('/', IternaryController.createNewIternary);

//Get a product by id
router.get('/:id', IternaryController.findIternaryById);

//Update a product by id
router.patch('/:id', IternaryController.updateAIternary);

//Update a product by id
router.put('/avilability/:id', IternaryController.updateAvilability);

//Delete a product by id
router.delete('/:id', IternaryController.deleteAIternary);

module.exports = router;