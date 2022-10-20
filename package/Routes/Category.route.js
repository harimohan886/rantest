const express = require('express');
const router = express.Router();

const CategoryController = require('../Controllers/Category.Controller');

//Get a list of all products
router.get('/', CategoryController.getAllCategorys);

//Create a new product
router.post('/', CategoryController.createNewCategory);

//Get a product by id
router.get('/:id', CategoryController.findCategoryById);

//Update a product by id
router.patch('/:id', CategoryController.updateACategory);

//Update a product by id
router.put('/avilability/:id', CategoryController.updateAvilability);

//Delete a product by id
router.delete('/:id', CategoryController.deleteACategory);

module.exports = router;