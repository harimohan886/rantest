const createError = require('http-errors');
const mongoose = require('mongoose');

const Price = require('../Models/Price.model');



async function isWeekend(dateObj) {

   var dt = new Date(dateObj);

  if(dt.getDay() == 6 || dt.getDay() == 0)
  {
    return true;
  } else{
    return false;
  }
};

module.exports = {
  getAllPrices: async (req, res, next) => {
    var type = req.query.type || 'default';
    try {
      const results = await Price.find({type: type}, { __v: 0 }).sort({$natural:-1});
      res.send({
        success: true,
        message: 'Data fetched',
        data: results
      });
    } catch (error) {
      console.log(error.message);
    }
  },


  getBookingPrices: async (req, res, next) => {
    var type = req.query.type || 'default';
    try {
      const results = await Price.find({type: type}, { __v: 0 });
      res.send({
        success: true,
        message: 'Data fetched',
        data: results
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  getBookingPricesByDate: async (req, res, next) => {

    var type = req.body.date;    

    try {
      var checkCount = await isWeekend(req.body.date);
      var date_to =  req.body.date ;

      const festivalData =  await Price.find({type: 'festival', date_from: { '$gte': date_to }, date_to: { '$lte': date_to }});

      if (festivalData && festivalData.length > 0) {
        return res.status(412)
        .send({
          success: false,
          message: 'Validation failed',
          data: festivalData
        });
      }else if (checkCount) {

        const weekendData =  await Price.findOne({ type: 'weekend', person_type: req.body.person_type, vehicle_type: req.body.vehicle_type });
        return res.status(412)
        .send({
          success: false,
          message: 'Validation failed',
          data: weekendData
        });
      }else{

        const weekendData =  await Price.findOne({ type: 'default', person_type: req.body.person_type, vehicle_type: req.body.vehicle_type });
        return res.status(412)
        .send({
          success: false,
          message: 'Validation failed',
          data: weekendData
        });
      }

    } catch (error) {
      console.log(error.message);
    }
  },

  createNewPrice: async (req, res, next) => {
    try {

      console.log(req.body);
      const price = new Price(req.body);
      const result = await price.save();
      res.send({
        success: true,
        message: 'Data inserted',
        data: result
      });
    } catch (error) {
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
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Price id'));
        return;
      }
      next(error);
    }
  }
};

/*var date_to =  req.body.date ;
          
           const ddd =  await Price.find({  $or: [
              {
                  $and: [
                      {date_from: { '$gte': date_to }}, {date_to: { '$lte': date_to }}
                  ]
              },
              {
                  date_to: {$regex: date_to}
              }
          ]
      });*/