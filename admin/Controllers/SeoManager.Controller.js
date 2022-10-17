const createError = require('http-errors');
const mongoose = require('mongoose');

const SeoManager = require('../Models/SeoManager.model');

module.exports = {
  getAllSeoManagers: async (req, res, next) => {
    try {

      SeoManager.find({},{updatedAt: 0, __v: 0},
        function(err,data) {
          if(err) {
            response = {"error": true, "message": "Error fetching data"+err};
          } else {
            response = {"success": true, "message": 'data fetched', 'data': data};
          }
          res.json(response);
        }).sort({ $natural: -1 });
    } catch (error) {
      console.log(error.message);
    }
  },

  updateASeoManager: async (req, res, next) => {
    try {
      const id = req.params.id;

      const options = { new: true };

      const result = await SeoManager.findByIdAndUpdate(id, req.body, options);
      if (!result) {
        throw createError(404, 'Seo Manager does not exist');
      }
      res.send({
        success: true,
        message: 'Data updated',
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid SeoManager Id'));
      }

      next(error);
    }
  },

  createNewSeoManager: async (req, res, next) => {
    try {
      const date = new SeoManager(req.body);
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

  findSeoManagerById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const date = await SeoManager.findById(id);
      if (!date) {
        throw createError(404, 'Seo Manager does not exist.');
      }
      res.send({
        success: true,
        message: 'Data fetched',
        data: date
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid SeoManager id'));
        return;
      }
      next(error);
    }
  },

  deleteASeoManager: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await SeoManager.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, 'Seo Manager does not exist.');
      }
      res.send({
        success: true,
        message: 'Data deleted',
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid SeoManager id'));
        return;
      }
      next(error);
    }
  },
};