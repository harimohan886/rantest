const express = require('express');
const router = express.Router();

const PackageCategoryController = require('../Controllers/PackageCategory.Controller');

//Get a list of all products
router.get('/', PackageCategoryController.getAllPackageCategorys);

//Create a new product
router.post('/', PackageCategoryController.createNewPackageCategory);

//Get a product by id
router.get('/:id', PackageCategoryController.findPackageCategoryById);

//Update a product by id
router.patch('/:id', PackageCategoryController.updateAPackageCategory);

//Update a product by id
router.put('/avilability/:id', PackageCategoryController.updateAvilability);

//Delete a product by id
router.delete('/:id', PackageCategoryController.deleteAPackageCategory);

module.exports = router;