const createError = require('http-errors');
const mongoose = require('mongoose');

const asyncHandler = require('../Middleware/asyncHandler')

const Customer = require('../Models/Customer.model');
const SafariBooking = require('../Models/SafariBooking.model');
const PackageBooking = require('../Models/PackageBooking.model');
const ChambalBooking = require('../Models/ChambalBooking.model');


module.exports = {
  getAllSafariBookings: asyncHandler(async (req, res, next) => {

    const filter_date = req.query.filter_date
        ? {
          date: {
            $regex: req.query.filter_date
          },
        }
        : {};

    const filter_created_at = req.query.filter_created_at
      ? {
        addedAt: {
          $regex: req.query.filter_created_at
        }
      }
      : {};

    const filter_zone = req.query.filter_zone
      ? {
          zone : req.query.filter_zone
      }
      : {};

    const filter_status = req.query.filter_status
      ? {
        status: req.query.filter_status
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

    var page = parseInt(req.query.page)||1;
    var size = parseInt(req.query.size)||15;

    var query = {}
    if(page < 0 || page === 0) {
      response = {"error" : true,"message" : "invalid page number, should start with 1"};
      return res.json(response);
    }
    query.skip = size * (page - 1);
    query.limit = size;

    var  totalPosts = await SafariBooking.find({...filter_date, ...filter_created_at, ...filter_zone, ...filter_status, ...filter_vehicle, ...filter_timing}).countDocuments().exec();

    SafariBooking.find({...filter_date, ...filter_created_at, ...filter_zone, ...filter_status, ...filter_vehicle, ...filter_timing},{booking_customers: 0, customer: 0, __v: 0},
      query,function(err,data) {
        if(err) {
          response = {"error": true, "message": "Error fetching data"+err};
        } else {
          response = {"success": true, "message": 'data fetched', 'data': data, 'page': page, 'total': totalPosts, perPage:size };
        }
        res.json(response);
      }).sort({ $natural: -1 });
  }),


  getAllPackageBookings: asyncHandler(async (req, res, next) => {

    const filter_date = req.query.filter_date
        ? {
          date: {
            $regex: req.query.filter_date
          },
        }
        : {};

    const filter_created_at = req.query.filter_created_at
      ? {
        addedAt: {
          $regex: req.query.filter_created_at
        }
      }
      : {};

    const filter_zone = req.query.filter_zone
      ? {
          zone : req.query.filter_zone
      }
      : {};

    const filter_status = req.query.filter_status
      ? {
        status: req.query.filter_status
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

    var page = parseInt(req.query.page)||1;
    var size = parseInt(req.query.size)||15;

    var query = {}
    if(page < 0 || page === 0) {
      response = {"error" : true,"message" : "invalid page number, should start with 1"};
      return res.json(response);
    }
    query.skip = size * (page - 1);
    query.limit = size;

    var  totalPosts = await PackageBooking.find({...filter_date, ...filter_created_at, ...filter_zone, ...filter_status, ...filter_vehicle, ...filter_timing}).countDocuments().exec();

    PackageBooking.find({...filter_date, ...filter_created_at, ...filter_zone, ...filter_status, ...filter_vehicle, ...filter_timing},{ booking_customers: 0, customer: 0, __v: 0, updatedAt: 0},
      query,function(err,data) {
        if(err) {
          response = {"error": true, "message": "Error fetching data"+err};
        } else {
          response = {"success": true, "message": 'data fetched', 'data': data, 'page': page, 'total': totalPosts, perPage:size };
        }
        res.json(response);
      }).sort({ $natural: -1 });
  }),

  getAllChambalBookings: asyncHandler(async (req, res, next) => {

    const filter_date = req.query.filter_date
        ? {
          date: {
            $regex: req.query.filter_date
          },
        }
        : {};

    const filter_created_at = req.query.filter_created_at
      ? {
        addedAt: {
          $regex: req.query.filter_created_at
        }
      }
      : {};

    const filter_zone = req.query.filter_zone
      ? {
          zone : req.query.filter_zone
      }
      : {};

    const filter_status = req.query.filter_status
      ? {
        status: req.query.filter_status
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

    var page = parseInt(req.query.page)||1;
    var size = parseInt(req.query.size)||15;

    var query = {}
    if(page < 0 || page === 0) {
      response = {"error" : true,"message" : "invalid page number, should start with 1"};
      return res.json(response);
    }
    query.skip = size * (page - 1);
    query.limit = size;

    var  totalPosts = await ChambalBooking.find({...filter_date, ...filter_created_at, ...filter_zone, ...filter_status, ...filter_vehicle, ...filter_timing}).countDocuments().exec();

    ChambalBooking.find({...filter_date, ...filter_created_at, ...filter_zone, ...filter_status, ...filter_vehicle, ...filter_timing},{booking_customers: 0, customer: 0, __v: 0, updatedAt: 0},
      query,function(err,data) {
        if(err) {
          response = {"error": true, "message": "Error fetching data"+err};
        } else {
          response = {"success": true, "message": 'data fetched', 'data': data, 'page': page, 'total': totalPosts, perPage:size };
        }
        res.json(response);
      }).sort({ $natural: -1 }).populate(['customer']);
  }),

  findChambalBookingById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await ChambalBooking.findById(id,'_id date zone customer booking_name booking_option vehicle time amount id_proof_no no_of_persons_indian no_of_persons_foreigner transaction_id createdAt').populate(['customer']);
      if (!result) {
        throw createError(404, 'Customer does not exist.');
      }
      res.send({
          success: true,
          message: "data fetched",
          data: result
        });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Customer id'));
        return;
      }
      next(error);
    }
  },


  findSafariBookingById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await SafariBooking.findById(id, '_id date customer_id customer zone booking_customers vehicle timing amount transaction_id status addedAt createdAt').populate(['booking_customers','customer']);
      if (!result) {
        throw createError(404, 'Customer does not exist.');
      }
      res.send({
          success: true,
          message: "data fetched",
          data: result
        });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Customer id'));
        return;
      }
      next(error);
    }
  },


  findPackageBookingById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await PackageBooking.findById(id, '_id date package_id customer timing package_option_nationality package_option_id no_of_kids amount createdAt transaction_id').populate(['customer']);;
      if (!result) {
        throw createError(404, 'Customer does not exist!.');
      }
      res.send({
          success: true,
          message: "data fetched",
          data: result
        });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Customer id'));
        return;
      }
      next(error);
    }
  },

};