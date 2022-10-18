const createError = require('http-errors');
const mongoose = require('mongoose');

const Enquiry = require('../Models/Enquiry.model');

module.exports = {
  getAllEnquirys: async (req, res, next) => {
    try {

      const filter_date = req.query.filter_date
      ? {
        booking_date: {
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

      const filter_name = req.query.filter_name
      ? {
        traveller_name: {
          $regex: req.query.filter_name,
          $options: "i",
        },
      }
      : {};

      const filter_type = req.query.filter_type
      ? {
        type: req.query.filter_type
      }
      : {};

      const filter_phone = req.query.filter_phone
      ? {
        phone: {
          $regex: req.query.filter_phone,
          $options: "i",
        }
      }
      : {};

      var page = parseInt(req.query.page)||1;
      var size = parseInt(req.query.size)||15;
      var type = req.query.type||'general';
      var query = {}
      if(page < 0 || page === 0) {
        response = {"error" : true,"message" : "invalid page number, should start with 1"};
        return res.json(response);
      }
      query.skip = size * (page - 1);
      query.limit = size;

      var  totalPosts = await Enquiry.find({...filter_date, ...filter_name, ...filter_phone, ...filter_created_at, ...filter_type}).countDocuments().exec();

      Enquiry.find({...filter_date, ...filter_name, ...filter_phone, ...filter_created_at, ...filter_type},{},
        query,function(err,data) {
          if(err) {
            response = {"error": true, "message": "Error fetching data"+err};
          } else {
            response = {"success": true, "message": 'data fetched', 'data': data, 'page': page, 'total': totalPosts, perPage:size };
          }
          res.json(response);
        }).sort({ $natural: -1 });
    } catch (error) {
      console.log(error.message);
    }
  },

  getAllEnquiesDashboard: async (req, res, next) => {
    try {

      var  totalEnq = await Enquiry.find({}).countDocuments().exec();

      const general_enqs = await Enquiry.find({type : 'general'}).sort({ $natural: -1 }).limit(5);

      const hotel_enqs = await Enquiry.find({type : 'hotel'}).sort({ $natural: -1 }).limit(5);

      res.send({
        success: true,
        message: 'Data fetched',
        total_enquiries: totalEnq,
        hotel_enquiries: hotel_enqs,
        general_enquiries: general_enqs,
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewEnquiry: async (req, res, next) => {
    try {

      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); 
      var yyyy = today.getFullYear();
      today = yyyy+'-'+mm+'-'+dd;

      req.body.addedAt = today;

      const date = new Enquiry(req.body);

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

  findEnquiryById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const date = await Enquiry.findById(id);
      if (!date) {
        throw createError(404, 'Enquiry does not exist.');
      }
      res.send({
        success: true,
        message: 'Data fetched',
        data: date
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Enquiry id'));
        return;
      }
      next(error);
    }
  },

  deleteAEnquiry: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Enquiry.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, 'Enquiry does not exist.');
      }
      res.send({
        success: true,
        message: 'Data deleted',
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Enquiry id'));
        return;
      }
      next(error);
    }
  },
};