const createError = require('http-errors');
const mongoose = require('mongoose');

const Price = require('../Models/Price.model');
var moment = require('moment');



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

    const date = req.body.date;   

    var result = new Date(date);
    var result1 = new Date(date);
    result.setDate(result.getDate() + 1);
    result1.setDate(result1.getDate() - 1);

    var nextDate = result.getFullYear()+'-'+`${(result.getMonth()+1)}`.padStart(2, "0")+'-'+`${(result.getDate())}`.padStart(2, "0");
    var prevDate = result1.getFullYear()+'-'+`${(result1.getMonth()+1)}`.padStart(2, "0")+'-'+`${(result1.getDate())}`.padStart(2, "0");

    try {
      var checkCount = await isWeekend(req.body.date);
      var date_to =  req.body.date ;

      const festivalData =  await Price.findOne({type: 'festival', person_type: req.body.person_type, vehicle_type: req.body.vehicle_type,  date_from: { '$gte': prevDate }, date_to: { '$lte': nextDate }});

      if (festivalData) {
        return res.status(200)
        .send({
          success: true,
          message: 'data fetched!',
          data: festivalData
        });
      }else if (checkCount) {

        const weekendData =  await Price.findOne({ type: 'weekend', person_type: req.body.person_type, vehicle_type: req.body.vehicle_type });
        if (!weekendData) {

          const defaultData =  await Price.findOne({ type: 'default', person_type: req.body.person_type, vehicle_type: req.body.vehicle_type });
          return res.status(200)
          .send({
            success: true,
            message: 'data fetched!',
            data: defaultData
          });

        }else{
          return res.status(200)
          .send({
            success: true,
            message: 'data fetched!',
            data: weekendData
          });
        }
      }else{

        const weekendData =  await Price.findOne({ type: 'default', person_type: req.body.person_type, vehicle_type: req.body.vehicle_type });
        return res.status(200)
        .send({
          success: true,
          message: 'data fetched!',
          data: weekendData
        });
      }

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

        /*const festivalData =  await Price.find(
        {
    '$or': [
        {
            '$and': [
                {"date_from": { '$gte': '2022-09-29' } },
                {"date_to": { '$lt': '2022-09-29' } }
            ]
        },
        {
            "date_to": { '$eq': '2022-09-29' }
        },
        {
            "date_from": { '$eq': '2022-09-29' }
        }
    ]
}
        );*/