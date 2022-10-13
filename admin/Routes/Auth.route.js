const express = require('express');
const router = express.Router();

const AuthController = require('../Controllers/Auth.Controller');

const {verifyUserToken} = require("../Middleware/auth");

router.get('/users', [verifyUserToken], AuthController.getAllAdmins);

router.get('/profile', [verifyUserToken], AuthController.profile);

//Create a new product
router.post('/login', AuthController.adminLogin);

router.get('/logout', [verifyUserToken], AuthController.adminLogout);

router.post('/register', AuthController.adminRegister);
router.post('/update-password', [verifyUserToken], AuthController.resetPassword);

//Get a product by id
router.get('/:id', AuthController.findAuthById);

//Update a product by id
router.patch('/profile', [verifyUserToken], AuthController.updateAAuth);

//Delete a product by id
router.delete('/:id', AuthController.deleteAAuth);

module.exports = router;