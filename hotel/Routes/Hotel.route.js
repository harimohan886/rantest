const express = require('express');
const router = express.Router();
const path = require('path');

var multer = require('multer');

var storage = multer.diskStorage({  
  destination:(req,file,cb)=>{  
    cb(null,__dirname.split('hotel')[0]+'client/frontend/public/uploads/hotels/');  
  },  
  filename:(req,file,cb)=>{  
    cb(null,file.originalname);  
  }  
});  
var uploads = multer({storage:storage});


const HotelController = require('../Controllers/Hotel.Controller');

//Get a list of all products
router.get('/', HotelController.getAllHotels);

//Create a new product
router.post('/', uploads.any(), HotelController.createNewHotel);

//Get a product by id
router.get('/:id', HotelController.findHotelById);

router.get('/:id/amenities', HotelController.findHotelAmenitiesById);

//Update a product by id
router.patch('/:id', HotelController.updateAHotel);

router.patch('/:id/amenities', HotelController.updateHotelAmenities);

//Delete a product by id
router.delete('/:id', HotelController.deleteAHotel);

module.exports = router;