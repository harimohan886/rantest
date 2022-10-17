const express = require('express');
const router = express.Router();

const SeoManagerController = require('../Controllers/SeoManager.Controller');

router.get('/', SeoManagerController.getAllSeoManagers);

router.post('/', SeoManagerController.createNewSeoManager);

//Get a enquery by id
router.get('/:id', SeoManagerController.findSeoManagerById);

router.patch('/:id', SeoManagerController.updateASeoManager);

//Delete a enquery by id
router.delete('/:id', SeoManagerController.deleteASeoManager);

module.exports = router;