const express = require('express');
const router = express.Router();
var multer      = require('multer');

var storage = multer.diskStorage({  
  destination:(req,file,cb)=>{  
    cb(null,'./uploads');  
  },  
  filename:(req,file,cb)=>{  
    cb(null,file.originalname);  
  }  
});  
var uploads = multer({storage:storage});

const DateController = require('../Controllers/Date.Controller');

//Get a list of all products
router.get('/', DateController.getAllDates);

//Create a new product
router.post('/', DateController.createNewDate);

//Get a product by id
router.get('/:id', DateController.findDateById);

//Update a product by id
router.patch('/:id', DateController.updateADate);

//Update a product by id
router.put('/avilability/:id', DateController.updateAvilability);

router.post('/import-csv', uploads.single('csv'), DateController.uploadCsv);


//Delete a product by id
router.delete('/:id', DateController.deleteADate);

module.exports = router;