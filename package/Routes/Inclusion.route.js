const express = require('express');
const router = express.Router();

const InclusionController = require('../Controllers/Inclusion.Controller');

//Get a list of all products
router.get('/', InclusionController.getAllInclusions);

//Create a new product
router.post('/', InclusionController.createNewInclusion);

//Get a product by id
router.get('/:id', InclusionController.findInclusionById);

//Update a product by id
router.patch('/:id', InclusionController.updateAInclusion);

//Update a product by id
router.put('/avilability/:id', InclusionController.updateAvilability);

//Delete a product by id
router.delete('/:id', InclusionController.deleteAInclusion);

module.exports = router;