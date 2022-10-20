const createError = require('http-errors');
const mongoose = require('mongoose');
const csv=require('csvtojson');

const Date = require('../Models/Date.model');

module.exports = {
  getAllDates: async (req, res, next) => {
    try {

      const filter_date = req.query.filter_date
      ? {
        date: {
          $regex: req.query.filter_date
        },
      }
      : {};

      const filter_zone = req.query.filter_zone
      ? {
        zone: req.query.filter_zone
      }
      : {};

      const filter_vehicle = req.query.filter_vehicle
      ? {
        vehicle: req.query.filter_vehicle
      }
      : {};

      const filter_timing = req.query.filter_timing
      ? {
        timing: req.query.filter_timing
      }
      : {};

      const filter_availability = req.query.filter_availability
      ? {
        availability: req.query.filter_availability
      }
      : {};


      var page = parseInt(req.query.page)||1;
      var size = parseInt(req.query.size)||15;
      var query = {}
      if(page < 0 || page === 0) {
        response = {"error" : true,"message" : "invalid page number, should start with 1"};
        return res.json(response);
      }
      query.skip = size * (page - 1);
      query.limit = size;

      var  totalPosts = await Date.find({...filter_date, ...filter_zone, ...filter_vehicle, ...filter_timing, ...filter_availability}).countDocuments().exec();

      Date.find({...filter_date, ...filter_zone, ...filter_vehicle, ...filter_timing, ...filter_availability},{},
        query,function(err,data) {
          if(err) {
            response = {"error": true, "message": "Error fetching data"+err};
          } else {
            response = {"error": false, "message": 'data fetched', 'data': data, 'page': page, 'total': totalPosts, perPage:size };
          }
          res.json(response);
        }).sort({ $natural: -1 });
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewDate: async (req, res, next) => {
    try {
      const date = new Date(req.body);
      const result = await date.save();
      res.send({
        success: true,
        message: 'Data inserted',
        data: result
      });
    } catch (error) {
      console.log(error.message);
      if (error.name === 'ValidationError') {
        next(createError(201, error.message));
        return;
      }
      next(error);
    }
  },

  checkAvilabilityByDate: async (req, res, next) => {
    try {
      const date = await Date.find({date:req.body.date});
      if (!date.length) {
        throw createError(404, 'Date does not exist.');
      }
      res.send({
        success: true,
        message: 'Data fateched',
        data: date
      });
    } catch (error) {
      if (error.name === 'ValidationError') {
        next(createError(422, error.message));
        return;
      }
      next(error);
    }
  },

  checkAvilability: async (req, res, next) => {
    try {
      const date = await Date.find({date: req.body.date ,timing: req.body.timing  , vehicle: req.body.vehicle , zone: req.body.zone});
      if (!date.length) {
        throw createError(404, 'Date does not exist.');
      }
      res.send({
        success: true,
        message: 'Data fateched',
        data: date
      });
    } catch (error) {
      if (error.name === 'ValidationError') {
        next(createError(422, error.message));
        return;
      }
      next(error);
    }
  },

  findDateById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const date = await Date.findById(id);
      if (!date) {
        throw createError(404, 'Date does not exist.');
      }
      res.send({
        success: true,
        message: 'Data fetched',
        data: date
      });
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
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Date.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Date does not exist');
      }
      res.send({
        success: true,
        message: 'Data updated',
        data: result
      });
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
      res.send({
        success: true,
        message: 'Data updated',
        data: result
      });
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
      if (!result) {
        throw createError(404, 'Date does not exist.');
      }
      res.send({
        success: true,
        message: 'Data deleted',
      });
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

    if (req.file && (req.file.size > 0)) {
      var file_path = req.file.path;
    }
    csv()
    .fromFile(file_path)
    .then( async(jsonObj) =>{
      await Date.deleteMany({});
      const result = await  Date.insertMany(jsonObj);
      console.log(result);
      res.send({
        success: true,
        message: 'Csv data uploaded',
      });      
    });

  }

};