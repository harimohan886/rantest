const express = require('express');
const router = express.Router();

const CancellationPolicyController = require('../Controllers/CancellationPolicy.Controller');

//Get a list of all products
router.get('/', CancellationPolicyController.getAllCancellationPolicys);

//Create a new product
router.post('/', CancellationPolicyController.createNewCancellationPolicy);

//Get a product by id
router.get('/:id', CancellationPolicyController.findCancellationPolicyById);

//Update a product by id
router.patch('/:id', CancellationPolicyController.updateACancellationPolicy);

//Update a product by id
router.put('/avilability/:id', CancellationPolicyController.updateAvilability);

//Delete a product by id
router.delete('/:id', CancellationPolicyController.deleteACancellationPolicy);

module.exports = router;