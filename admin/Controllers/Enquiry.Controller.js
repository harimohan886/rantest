const createError = require('http-errors');
const mongoose = require('mongoose');

const Enquiry = require('../Models/Enquiry.model');

module.exports = {
  getAllEnquirys: async (req, res, next) => {
    try {

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

      var  totalPosts = await Enquiry.find({type:type}).countDocuments().exec();

      Enquiry.find({type:type},{},
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

  createNewEnquiry: async (req, res, next) => {
    try {
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