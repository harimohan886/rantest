const createError = require('http-errors');
const mongoose = require('mongoose');

const CancellationPolicy = require('../Models/CancellationPolicy.model');

module.exports = {
  getAllCancellationPolicys: async (req, res, next) => {
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

      var  totalPosts = await CancellationPolicy.find({}).countDocuments().exec();

      CancellationPolicy.find({},{},
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

  createNewCancellationPolicy: async (req, res, next) => {
    try {
      const cpolicy = new CancellationPolicy(req.body);
      const result = await cpolicy.save();
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

  findCancellationPolicyById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const cpolicy = await CancellationPolicy.findById(id);
      if (!cpolicy) {
        throw createError(404, 'CancellationPolicy does not exist.');
      }
      res.send({
        success: true,
        message: 'Data fetched',
        data: cpolicy
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid CancellationPolicy id'));
        return;
      }
      next(error);
    }
  },

  updateACancellationPolicy: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await CancellationPolicy.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'CancellationPolicy does not exist');
      }
      res.send({
        success: true,
        message: 'Data updated',
        data: result
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid CancellationPolicy Id'));
      }

      next(error);
    }
  },

  updateAvilability: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await CancellationPolicy.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'CancellationPolicy does not exist');
      }
      res.send({
        success: true,
        message: 'Data updated',
        data: result
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid CancellationPolicy Id'));
      }

      next(error);
    }
  },

  deleteACancellationPolicy: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await CancellationPolicy.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, 'CancellationPolicy does not exist.');
      }
      res.send({
        success: true,
        message: 'Data deleted',
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid CancellationPolicy id'));
        return;
      }
      next(error);
    }
  },
};