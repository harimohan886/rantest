const createError = require('http-errors');
const mongoose = require('mongoose');

const Feature = require('../Models/Feature.model');

module.exports = {
  getAllFeatures: async (req, res, next) => {
    try {

      var page = parseInt(req.query.page)||1;
      var size = parseInt(req.query.size)||15;
      var query = {}
      if(page < 0 || page === 0) {
        response = {"error" : true,"message" : "invalid page number, should start with 1"};
        return res.json(response);
      }
      query.skip = size * (page - 1);
      query.limit = size;

      var  totalPosts = await Feature.find({}).countDocuments().exec();

      Feature.find({},{},
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

  createNewFeature: async (req, res, next) => {
    try {
      const feature = new Feature(req.body);
      const result = await feature.save();
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

  findFeatureById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const feature = await Feature.findById(id);
      if (!feature) {
        throw createError(404, 'Feature does not exist.');
      }
      res.send({
        success: true,
        message: 'Data fetched',
        data: feature
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Feature id'));
        return;
      }
      next(error);
    }
  },

  updateAFeature: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Feature.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Feature does not exist');
      }
      res.send({
        success: true,
        message: 'Data updated',
        data: result
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Feature Id'));
      }

      next(error);
    }
  },

  updateAvilability: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Feature.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Feature does not exist');
      }
      res.send({
        success: true,
        message: 'Data updated',
        data: result
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Feature Id'));
      }

      next(error);
    }
  },

  deleteAFeature: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Feature.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, 'Feature does not exist.');
      }
      res.send({
        success: true,
        message: 'Data deleted',
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Feature id'));
        return;
      }
      next(error);
    }
  },
};