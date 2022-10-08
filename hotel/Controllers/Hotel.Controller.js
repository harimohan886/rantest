const createError = require('http-errors');
const mongoose = require('mongoose');
const validator = require('../helpers/validate');

const Hotel = require('../Models/Hotel.model');
const HotelImage = require('../Models/HotelImage.model');
const HotelAmenity = require('../Models/HotelAmenity.model');
const HotelRoom = require('../Models/HotelRoom.model');

const titleToSlug = title => {
  let slug;

  // convert to lower case
  slug = title.toLowerCase();

  // remove special characters
  slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
  // The /gi modifier is used to do a case insensitive search of all occurrences of a regular expression in a string

  // replace spaces with dash symbols
  slug = slug.replace(/ /gi, "-");

  // remove consecutive dash symbols 
  slug = slug.replace(/\-\-\-\-\-/gi, '-');
  slug = slug.replace(/\-\-\-\-/gi, '-');
  slug = slug.replace(/\-\-\-/gi, '-');
  slug = slug.replace(/\-\-/gi, '-');

  // remove the unwanted dash symbols at the beginning and the end of the slug
  slug = '@' + slug + '@';
  slug = slug.replace(/\@\-|\-\@|\@/gi, '');
  return slug;
};

module.exports = {
  getAllHotels: async (req, res, next) => {
    try {
      const results = await Hotel.find({}, { __v: 0 }).populate('images');
      res.send({
        success: true,
        message: 'Data fetched',
        data: results
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  findHotelRoomsById: async (req, res, next) => {
    try {
      var id = req.params.id;
      const results = await HotelRoom.find({ 'hotel_id': id }, { __v: 0 }).populate('facilities');
      res.send({
        success: true,
        message: 'Data fetched',
        data: results
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewHotel: async (req, res, next) => {

    let rules = {
      name: 'required'
    };

    await validator(req.body, rules, {}, (err, status) => {
      if (!status) {
        res.status(412)
          .send({
            success: false,
            message: 'Validation failed',
            data: err
          });
      }
    }).catch(err => console.log(err))

    try {
      const slug = await titleToSlug(req.body.name);
      req.body.slug = slug;

      if (req.files && req.files.length) {
        req.body.image = req.files[0].path;
      }

      const hotel = new Hotel(req.body);
      const result = await hotel.save();

      const image_arr = [];

      if (req.files && req.files.length) {

        arr = req.files.filter(function (item) {
          return item !== req.files[0]
        })

        for (const image of arr) {
          const hotel_images = new HotelImage({
            image: image.path,
            hotel_id: result._id
          });

          const result1 = await hotel_images.save();
          image_arr.push(result1);
        }
      }

      const id = result._id;
      const updates = { images: image_arr };
      const options = { new: true };

      const result2 = await Hotel.findByIdAndUpdate(id, updates, options);


      res.send({
        success: true,
        message: 'Data inserted',
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

  findHotelById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const hotel = await Hotel.findById(id);
      if (!hotel) {
        throw createError(404, 'Hotel does not exist.');
      }
      res.send({
        success: true,
        message: 'Data fetched',
        data: hotel
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Hotel id'));
        return;
      }
      next(error);
    }
  },

  findHotelAmenitiesById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const hotel = await HotelAmenity.find({ hotel_id: id }).populate('amenity');
      if (!hotel) {
        throw createError(404, 'Hotel does not exist.');
      }
      res.send({
        success: true,
        message: 'Data fetched',
        data: hotel
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Hotel id'));
        return;
      }
      next(error);
    }
  },

  updateAHotel: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Hotel.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Hotel does not exist');
      }
      res.send({
        success: true,
        message: 'Data updated',
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Hotel Id'));
      }

      next(error);
    }
  },

  updateHotelAmenities: async (req, res, next) => {
    try {
      const id = req.params.id;

      await HotelAmenity.find({ hotel_id: id }).remove();

      for (const amenity of req.body.amenities) {
        const hotel_amenity = new HotelAmenity({
          hotel_id: id,
          amenity: amenity
        });

        const result = await hotel_amenity.save();
      }

      res.send({
        success: true,
        message: 'Hotel Amenity Data updated',
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Hotel Id'));
      }

      next(error);
    }
  },

  deleteAHotel: async (req, res, next) => {
    const id = req.params.id;
    try {
      await HotelAmenity.deleteMany({ hotel_id: id });
      await HotelImage.deleteMany({ hotel_id: id });
      await HotelRoom.deleteMany({ hotel_id: id });
      const result = await Hotel.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, 'Hotel does not exist.');
      }
      res.send({
        success: true,
        message: 'Data deleted',
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Hotel id'));
        return;
      }
      next(error);
    }
  }
};