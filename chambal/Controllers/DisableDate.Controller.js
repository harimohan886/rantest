const createError = require('http-errors');
const mongoose = require('mongoose');
const csv=require('csvtojson');

const DisableDate = require('../Models/DisableDate.model');

module.exports = {
  getAllDisableDates: async (req, res, next) => {
  	console.log(req.body);
    try {
      const results = await DisableDate.find({}, { __v: 0 });
      // const results = await DisableDate.find({}, { name: 1, price: 1, _id: 0 });
      // const results = await DisableDate.find({ price: 699 }, {});
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewDisableDate: async (req, res, next) => {
    try {
      const product = new DisableDate(req.body);
      const result = await product.save();
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error.name === 'ValidationError') {
        next(createError(422, error.message));
        return;
      }
      next(error);
    }

    /*Or:
  If you want to use the Promise based approach*/
    /*
  const product = new DisableDate({
    name: req.body.name,
    price: req.body.price
  });
  product
    .save()
    .then(result => {
      console.log(result);
      res.send(result);
    })
    .catch(err => {
      console.log(err.message);
    }); 
    */
  },

  findDisableDateById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const product = await DisableDate.findById(id);
      // const product = await DisableDate.findOne({ _id: id });
      if (!product) {
        throw createError(404, 'DisableDate does not exist.');
      }
      res.send(product);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid DisableDate id'));
        return;
      }
      next(error);
    }
  },

  updateADisableDate: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await DisableDate.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'DisableDate does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid DisableDate Id'));
      }

      next(error);
    }
  },

  deleteADisableDate: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await DisableDate.findByIdAndDelete(id);
      // console.log(result);
      if (!result) {
        throw createError(404, 'DisableDate does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid DisableDate id'));
        return;
      }
      next(error);
    }
  },

  uploadCsv: async (req, res, next) => {
    var file_path = req.file.path;
    csv()
    .fromFile(file_path)
    .then( async(jsonObj) =>{
      await  DisableDate.deleteMany({});
      const result = await  DisableDate.insertMany(jsonObj);
      res.send('csv uploadCsv');      
    });

  }

};