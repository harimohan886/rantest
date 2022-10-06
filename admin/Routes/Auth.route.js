const express = require('express');
const router = express.Router();

const AuthController = require('../Controllers/Auth.Controller');

const {verifyUserToken} = require("../Middleware/auth");

router.get('/users', [verifyUserToken], AuthController.getAllAdmins);

//Create a new product
router.post('/login', AuthController.adminLogin);

router.post('/logout', [verifyUserToken], AuthController.adminLogout);

router.post('/register', AuthController.adminRegister);

//Get a product by id
router.get('/:id', AuthController.findAuthById);

//Update a product by id
router.patch('/:id', AuthController.updateAAuth);

//Delete a product by id
router.delete('/:id', AuthController.deleteAAuth);

module.exports = router;