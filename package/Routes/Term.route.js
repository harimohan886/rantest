const express = require('express');
const router = express.Router();

const TermController = require('../Controllers/Term.Controller');

//Get a list of all products
router.get('/', TermController.getAllTerms);

//Create a new product
router.post('/', TermController.createNewTerm);

//Get a product by id
router.get('/:id', TermController.findTermById);

//Update a product by id
router.patch('/:id', TermController.updateATerm);

//Update a product by id
router.put('/avilability/:id', TermController.updateAvilability);

//Delete a product by id
router.delete('/:id', TermController.deleteATerm);

module.exports = router;