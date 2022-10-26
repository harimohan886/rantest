const createError = require('http-errors');
const mongoose = require('mongoose');

const SafariBooking = require('../Models/SafariBooking.model');

const PackageBooking = require('../Models/PackageBooking.model');

const ChambalBooking = require('../Models/ChambalBooking.model');

module.exports = {

  updateSafariPayment: async (req, res, next) => {
    try {
      const id = req.params.id;
      const customer_id = req.body.customer_id;

      const updates = req.body;
      const options = { new: true };

      const result = await SafariBooking.findOneAndUpdate({_id: id, customer_id: customer_id} , updates, options);

      if (!result) {
        throw createError(404, 'Payment does not exist');
      }
      res.send({
        success: true,
        message: 'Safari Data updated',
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Payment Id'));
      }

      next(error);
    }
  },

  updatePackagePayment: async (req, res, next) => {
    try {
      const id = req.params.id;
      const customer_id = req.body.customer_id;

      const updates = req.body;
      const options = { new: true };

      const result = await PackageBooking.findOneAndUpdate({_id: id, customer_id: customer_id} , updates, options);

      if (!result) {
        throw createError(404, 'Payment does not exist');
      }
      res.send({
        success: true,
        message: 'Data updated',
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Payment Id'));
      }

      next(error);
    }
  },

  updateChambalPayment: async (req, res, next) => {
    try {
      const id = req.params.id;
      const customer_id = req.body.customer_id;

      const updates = req.body;
      const options = { new: true };

      const result = await ChambalBooking.findOneAndUpdate({_id: id, customer_id: customer_id} , updates, options);

      if (!result) {
        throw createError(404, 'Payment does not exist');
      }
      res.send({
        success: true,
        message: 'Data updated',
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Payment Id'));
      }

      next(error);
    }
  },

};