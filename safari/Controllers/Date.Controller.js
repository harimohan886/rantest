const createError = require('http-errors');
const mongoose = require('mongoose');
const csv=require('csvtojson');

const Date = require('../Models/Date.model');

module.exports = {
  getAllDates: async (req, res, next) => {
    try {
      const results = await Date.find({}, { __v: 0 });
      // const results = await Date.find({}, { name: 1, price: 1, _id: 0 });
      // const results = await Date.find({ price: 699 }, {});
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewDate: async (req, res, next) => {
    try {
      const product = new Date(req.body);
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
  const product = new Date({
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

  findDateById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const product = await Date.findById(id);
      // const product = await Date.findOne({ _id: id });
      if (!product) {
        throw createError(404, 'Date does not exist.');
      }
      res.send(product);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Date id'));
        return;
      }
      next(error);
    }
  },

  updateADate: async (req, res, next) => {
    console.log(req.params.id);
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Date.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Date does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Date Id'));
      }

      next(error);
    }
  },

  updateAvilability: async (req, res, next) => {
    console.log(req.params.id);
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Date.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Date does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Date Id'));
      }

      next(error);
    }
  },

  deleteADate: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Date.findByIdAndDelete(id);
      // console.log(result);
      if (!result) {
        throw createError(404, 'Date does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Date id'));
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
      await Date.deleteMany({});
      const result = await  Date.insertMany(jsonObj);
      res.send('csv uploadCsv');      
    });

  }

};