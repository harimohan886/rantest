const express = require('express');
const router = express.Router();

const FeatureController = require('../Controllers/Feature.Controller');

//Get a list of all products
router.get('/', FeatureController.getAllFeatures);

//Create a new product
router.post('/', FeatureController.createNewFeature);

//Get a product by id
router.get('/:id', FeatureController.findFeatureById);

//Update a product by id
router.patch('/:id', FeatureController.updateAFeature);

//Update a product by id
router.put('/avilability/:id', FeatureController.updateAvilability);

//Delete a product by id
router.delete('/:id', FeatureController.deleteAFeature);

module.exports = router;