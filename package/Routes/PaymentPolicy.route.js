const express = require('express');
const router = express.Router();

const PaymentPolicyController = require('../Controllers/PaymentPolicy.Controller');

//Get a list of all products
router.get('/', PaymentPolicyController.getAllPaymentPolicys);

//Create a new product
router.post('/', PaymentPolicyController.createNewPaymentPolicy);

//Get a product by id
router.get('/:id', PaymentPolicyController.findPaymentPolicyById);

//Update a product by id
router.patch('/:id', PaymentPolicyController.updateAPaymentPolicy);

//Update a product by id
router.put('/avilability/:id', PaymentPolicyController.updateAvilability);

//Delete a product by id
router.delete('/:id', PaymentPolicyController.deleteAPaymentPolicy);

module.exports = router;