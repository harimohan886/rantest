const createError = require('http-errors');
const mongoose = require('mongoose');

const Price = require('../Models/Price.model');

module.exports = {
  getAllPrices: async (req, res, next) => {
    console.log(req.body);
    try {
      const results = await Price.find({}, { __v: 0 });
      res.send({
        success: true,
        message: 'Data fetched',
        data: results
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewPrice: async (req, res, next) => {
    try {
      const price = new Price(req.body);
      const result = await price.save();
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

  findPriceById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const price = await Price.findById(id);
      if (!price) {
        throw createError(404, 'Price does not exist.');
      }
      res.send({
        success: true,
        message: 'Data fetched',
        data: price
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Price id'));
        return;
      }
      next(error);
    }
  },

  updateAPrice: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Price.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Price does not exist');
      }
      res.send({
        success: true,
        message: 'Data updated',
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Price Id'));
      }

      next(error);
    }
  },

  deleteAPrice: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Price.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, 'Price does not exist.');
      }
      res.send({
        success: true,
        message: 'Data deleted',
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Price id'));
        return;
      }
      next(error);
    }
  }
};