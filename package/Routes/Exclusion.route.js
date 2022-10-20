const express = require('express');
const router = express.Router();

const ExclusionController = require('../Controllers/Exclusion.Controller');

//Get a list of all products
router.get('/', ExclusionController.getAllExclusions);

//Create a new product
router.post('/', ExclusionController.createNewExclusion);

//Get a product by id
router.get('/:id', ExclusionController.findExclusionById);

//Update a product by id
router.patch('/:id', ExclusionController.updateAExclusion);

//Update a product by id
router.put('/avilability/:id', ExclusionController.updateAvilability);

//Delete a product by id
router.delete('/:id', ExclusionController.deleteAExclusion);

module.exports = router;