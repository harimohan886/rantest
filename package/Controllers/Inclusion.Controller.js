const createError = require('http-errors');
const mongoose = require('mongoose');

const Inclusion = require('../Models/Inclusion.model');

module.exports = {
  getAllInclusions: async (req, res, next) => {
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

      var  totalPosts = await Inclusion.find({}).countDocuments().exec();

      Inclusion.find({},{},
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

  createNewInclusion: async (req, res, next) => {
    try {
      const package = new Inclusion(req.body);
      const result = await package.save();
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

  findInclusionById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const package = await Inclusion.findById(id);
      if (!package) {
        throw createError(404, 'Inclusion does not exist.');
      }
      res.send({
        success: true,
        message: 'Data fetched',
        data: package
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Inclusion id'));
        return;
      }
      next(error);
    }
  },

  updateAInclusion: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Inclusion.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Inclusion does not exist');
      }
      res.send({
        success: true,
        message: 'Data updated',
        data: result
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Inclusion Id'));
      }

      next(error);
    }
  },

  updateAvilability: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Inclusion.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Inclusion does not exist');
      }
      res.send({
        success: true,
        message: 'Data updated',
        data: result
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Inclusion Id'));
      }

      next(error);
    }
  },

  deleteAInclusion: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Inclusion.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, 'Inclusion does not exist.');
      }
      res.send({
        success: true,
        message: 'Data deleted',
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Inclusion id'));
        return;
      }
      next(error);
    }
  },
};