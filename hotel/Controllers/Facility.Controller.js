const createError = require('http-errors');
const mongoose = require('mongoose');
const validator = require('../helpers/validate');

const Facility = require('../Models/Facility.model');

module.exports = {
  getAllFacilitys: async (req, res, next) => {
    try {
      const results = await Facility.find({}, { __v: 0 });
      res.send({
        success: true,
        message: 'Data fetched',
        data: results
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewFacility: async (req, res, next) => {

    let rules = {
      facility: 'required'
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
    }).catch( err => console.log(err))

    try {
      const facility = new Facility(req.body);
      const result = await facility.save();
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

  findFacilityById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const facility = await Facility.findById(id);
      if (!facility) {
        throw createError(404, 'Facility does not exist.');
      }
      res.send({
        success: true,
        message: 'Data fetched',
        data: facility
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Facility id'));
        return;
      }
      next(error);
    }
  },

  updateAFacility: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Facility.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Facility does not exist');
      }
      res.send({
        success: true,
        message: 'Data updated',
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Facility Id'));
      }

      next(error);
    }
  },

  deleteAFacility: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Facility.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, 'Facility does not exist.');
      }
      res.send({
        success: true,
        message: 'Data deleted',
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Facility id'));
        return;
      }
      next(error);
    }
  }
};