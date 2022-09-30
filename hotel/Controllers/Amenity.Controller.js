const createError = require('http-errors');
const mongoose = require('mongoose');

const Amenity = require('../Models/Amenity.model');

module.exports = {
  getAllAmenitys: async (req, res, next) => {
    try {
      const results = await Amenity.find({}, { __v: 0 });
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  getAllAmenityHotel: async (req, res, next) => {
    try {
      const results = await Amenity.find({status:1}, { __v: 0 });
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewAmenity: async (req, res, next) => {
    req.body.image = req.file.path;
    try {
      const amenity = new Amenity(req.body);
      const result = await amenity.save();
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error.name === 'ValidationError') {
        next(createError(422, error.message));
        return;
      }
      next(error);
    }
  },

  findAmenityById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const amenity = await Amenity.findById(id);
      if (!amenity) {
        throw createError(404, 'Amenity does not exist.');
      }
      res.send(amenity);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Amenity id'));
        return;
      }
      next(error);
    }
  },

  updateAAmenity: async (req, res, next) => {
    try {
      req.body.image = req.file.path;
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Amenity.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Amenity does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Amenity Id'));
      }

      next(error);
    }
  },

  deleteAAmenity: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Amenity.findByIdAndDelete(id);
      // console.log(result);
      if (!result) {
        throw createError(404, 'Amenity does not exist.');
      }
      res.send('Deleted');
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Amenity id'));
        return;
      }
      next(error);
    }
  }
};