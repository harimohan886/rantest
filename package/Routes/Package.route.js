const express = require('express');
const router = express.Router();
var multer      = require('multer');

var storage = multer.diskStorage({  
  destination:(req,file,cb)=>{  
    cb(null, 'uploads/packages/');  
  },  
  filename:(req,file,cb)=>{  
    cb(null,file.originalname);  
  }  
});  
var uploads = multer({storage:storage});

const PackageController = require('../Controllers/Package.Controller');

//Get a list of all packages
router.get('/', PackageController.getAllPackages);

router.get('/dashboard', PackageController.countAllPackages);

//Create a new package
router.post('/', uploads.single('image'), PackageController.createNewPackage);

//Get a package by id
router.get('/:id', PackageController.findPackageById);

router.get('/slug/:slug', PackageController.findPackageBySlug);

//Update a package by id
router.patch('/:id', uploads.single('image'), PackageController.updateAPackage);

//Update a package by id
router.put('/avilability/:id', PackageController.updateAvilability);

//Delete a package by id
router.delete('/:id', PackageController.deleteAPackage);

module.exports = router;