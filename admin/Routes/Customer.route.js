const express = require('express');
const router = express.Router();

const CustomerController = require('../Controllers/Customer.Controller');

router.get('/', CustomerController.getAllCustomers);

router.delete('/:slug/:id', CustomerController.DeleteCustomers);

router.get('/dashboard', CustomerController.countAllCustomers);

router.post('/', CustomerController.createNewCustomer);

router.post('/safari', CustomerController.createNewCustomerSafari);

router.post('/chambal', CustomerController.createNewCustomerChambal);

router.post('/package', CustomerController.createNewCustomerPackage);

module.exports = router;