const createError = require('http-errors');
const mongoose = require('mongoose');
const validator = require('../helpers/validate');

const HotelRoom = require('../Models/HotelRoom.model');
const hotelImage = require('../Models/hotelImage.model');
const HotelAmenity = require('../Models/HotelAmenity.model');

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
  getAllHotelRooms: async (req, res, next) => {
    try {
      const results = await HotelRoom.find({}, { __v: 0 }).populate('images');
      res.send({
        success: true,
        message: 'Data fetched',
        data: results
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewHotelRoom: async (req, res, next) => {

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
    }).catch( err => console.log(err))

    try {
      const slug = await titleToSlug(req.body.name);
      req.body.slug = slug;
      req.body.image = req.files[0].path;
      const hotel = new HotelRoom(req.body);
      const result = await hotel.save();

      const image_arr = [];

      arr = req.files.filter(function(item) {
        return item !== req.files[0]
      })

      for (const image of arr) 
      { 
        const hotel_images = new hotelImage({
          image:image.path,
          hotel_id:result._id
        });

        const result1 = await hotel_images.save();
        image_arr.push(result1);
      }

      const id = result._id;
      const updates = {images:image_arr};
      const options = { new: true };

      const result2 = await HotelRoom.findByIdAndUpdate(id, updates, options);


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

  findHotelRoomById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const hotel = await HotelRoom.findById(id);
      if (!hotel) {
        throw createError(404, 'HotelRoom does not exist.');
      }
      res.send({
        success: true,
        message: 'Data fetched',
        data: hotel
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid HotelRoom id'));
        return;
      }
      next(error);
    }
  },

  findHotelRoomAmenitiesById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const hotel = await HotelRoom.findById(id);
      if (!hotel) {
        throw createError(404, 'HotelRoom does not exist.');
      }
      res.send({
        success: true,
        message: 'Data fetched',
        data: hotel
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid HotelRoom id'));
        return;
      }
      next(error);
    }
  },

  updateAHotelRoom: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await HotelRoom.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'HotelRoom does not exist');
      }
      res.send({
        success: true,
        message: 'Data updated',
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid HotelRoom Id'));
      }

      next(error);
    }
  },

  updateHotelRoomAmenities: async (req, res, next) => {
    try {
      const id = req.params.id;

      await HotelAmenity.find({hotel_id:id}).remove();

      for (const amenity of req.body.amenities) 
      { 
      const hotel_amenity = new HotelAmenity({
          hotel_id:id,
          amenity_id:amenity
        });

        const result = await hotel_amenity.save();
      }

      res.send({
        success: true,
        message: 'HotelRoom Amenity Data updated',
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid HotelRoom Id'));
      }

      next(error);
    }
  },

  deleteAHotelRoom: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await HotelRoom.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, 'HotelRoom does not exist.');
      }
      res.send({
        success: true,
        message: 'Data deleted',
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid HotelRoom id'));
        return;
      }
      next(error);
    }
  }
};