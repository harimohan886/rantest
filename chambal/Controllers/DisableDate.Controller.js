const createError = require('http-errors');
const mongoose = require('mongoose');
const csv=require('csvtojson');

const DisableDate = require('../Models/DisableDate.model');

module.exports = {
  getAllDisableDates: async (req, res, next) => {
    try {
      const results = await DisableDate.find({}, { __v: 0 });
      res.send({
        success: true,
        message: 'Data fetched',
        data: results
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewDisableDate: async (req, res, next) => {
    try {
      const date = new DisableDate(req.body);
      const result = await date.save();
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

  findDisableDateById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const date = await DisableDate.findById(id);
      if (!date) {
        throw createError(404, 'DisableDate does not exist.');
      }
      res.send({
        success: true,
        message: 'Data fetched',
        data: date
      });
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
      res.send({
        success: true,
        message: 'Data updated',
      });
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
      res.send({
        success: true,
        message: 'Data deleted',
      });
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
      res.send({
        success: true,
        message: 'Csv Data uploaded',
      });      
    });
  }
};