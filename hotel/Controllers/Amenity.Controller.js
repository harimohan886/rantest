const createError = require('http-errors');
const mongoose = require('mongoose');
const validator = require('../helpers/validate');

const Amenity = require('../Models/Amenity.model');

module.exports = {
  getAllAmenities: async (req, res, next) => {
    try {
      const results = await Amenity.find({});
      res.send({
        success: true,
        message: 'Data fetched',
        data: results
      });
    } catch (error) {
      console.log(" test all amenities", error.message);
    }
  },

  getAllAmenityHotel: async (req, res, next) => {
    try {
      const results = await Amenity.find({ status: 1 }, { __v: 0 });
      res.send({
        success: true,
        message: 'Data fetched',
        data: results
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewAmenity: async (req, res, next) => {
    req.body.image = req.file.path;

    let rules = {
      amenity: 'required'
    };

    await validator(req.body, rules, {}, (err, status) => {
      if (!status) {
        res.status(412)
          .send({
            success: false,
            message: 'Validation failed',
            data: err
          });
      }
    }).catch(err => console.log(err))

    try {
      const amenity = new Amenity(req.body);
      const result = await amenity.save();
      res.send({
        success: true,
        message: 'Data inserted',
        data: result
      });
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
      res.send({
        success: true,
        message: 'Data fetched',
        data: amenity
      });
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
      res.send({
        success: true,
        message: 'Data updated',
        data: result
      });
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
      if (!result) {
        throw createError(404, 'Amenity does not exist.');
      }
      res.send({
        success: true,
        message: 'Data deleted',
      });
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