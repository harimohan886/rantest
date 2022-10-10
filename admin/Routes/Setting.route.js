const express = require('express');
const router = express.Router();

const SettingController = require('../Controllers/Setting.Controller');


router.get('/:slug', SettingController.getAllSettings);

router.post('/:slug', SettingController.createNewSetting);

//Get a enquery by id
router.get('/:id', SettingController.findSettingById);

//Delete a enquery by id
router.delete('/:id', SettingController.deleteASetting);

module.exports = router;