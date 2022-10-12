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


async function checkNameIsUnique(name) {

  totalPosts = await Hotel.find({name:name}).countDocuments().exec();
  if (totalPosts > 0) {
    return true;
  }else{
    return false;
  }
};

module.exports = {
  getAllHotels: async (req, res, next) => {
    try {

      var page = parseInt(req.query.page) || 1;
      var size = parseInt(req.query.size) || 15;
      var query = {}
      if (page < 0 || page === 0) {
        response = { "error": true, "message": "invalid page number, should start with 1" };
        return res.json(response);
      }
      query.skip = size * (page - 1);
      query.limit = size;

      if (req.query.filter_name && !req.query.filter_rating && !req.query.filter_availability) {
        var search = {
          name: new RegExp(req.query.filter_name, 'i')
        }
      }else if (!req.query.filter_name && req.query.filter_rating && !req.query.filter_availability) {
        var search = {
          rating: req.query.filter_rating
        }
      }else if (!req.query.filter_name && !req.query.filter_rating && req.query.filter_availability) {
        var search = {
          availability: req.query.filter_availability
        }
      } else if (req.query.filter_availability && req.query.filter_rating && req.query.filter_name) {
        var search = {
          availability: req.query.filter_availability,
          rating: req.query.filter_rating,
          name: new RegExp(req.query.filter_name, 'i')
        }
      }else if (req.query.filter_availability && req.query.filter_rating && !req.query.filter_name) {
        var search = {
          availability: req.query.filter_availability,
          rating: req.query.filter_rating,
        }
      }else if (req.query.filter_rating && req.query.filter_name && !req.query.filter_availability) {
        var search = {
          rating: req.query.filter_rating,
          name: new RegExp(req.query.filter_name, 'i')
        }
      }else if (req.query.filter_availability && req.query.filter_name && !req.query.filter_rating) {
        var search = {
          availability: req.query.filter_availability,
          name: new RegExp(req.query.filter_name, 'i')
        }
      }else {
        var search = {};
      }

      var totalPosts = await Hotel.find(search).countDocuments().exec();

      Hotel.find(search, {},
        query, function (err, data) {
          if (err) {
            response = { "error": true, "message": "Error fetching data" + err };
          } else {
            response = { "error": false, "message": 'data fetched', 'data': data, 'page': page, 'total': totalPosts, perPage: size };
          }
          res.json(response);
        }).sort({ $natural: -1 }).populate('images');
    } catch (error) {
      console.log(error.message);
    }
  },


  getAllHotelsFront: async (req, res, next) => {
    try {

      var page = parseInt(req.query.page) || 1;
      var size = parseInt(req.query.size) || 15;
      var query = {}
      if (page < 0 || page === 0) {
        response = { "error": true, "message": "invalid page number, should start with 1" };
        return res.json(response);
      }
      query.skip = size * (page - 1);
      query.limit = size;

      if (req.query.filter_name && !req.query.filter_rating && !req.query.filter_availability) {
        var search = {
          name: new RegExp(req.query.filter_name, 'i')
        }
      }else if (!req.query.filter_name && req.query.filter_rating && !req.query.filter_availability) {
        var search = {
          rating: req.query.filter_rating
        }
      }else if (!req.query.filter_name && !req.query.filter_rating && req.query.filter_availability) {
        var search = {
          availability: req.query.filter_availability
        }
      } else if (req.query.filter_availability && req.query.filter_rating && req.query.filter_name) {
        var search = {
          availability: req.query.filter_availability,
          rating: req.query.filter_rating,
          name: new RegExp(req.query.filter_name, 'i')
        }
      }else if (req.query.filter_availability && req.query.filter_rating && !req.query.filter_name) {
        var search = {
          availability: req.query.filter_availability,
          rating: req.query.filter_rating,
        }
      }else if (req.query.filter_rating && req.query.filter_name && !req.query.filter_availability) {
        var search = {
          rating: req.query.filter_rating,
          name: new RegExp(req.query.filter_name, 'i')
        }
      }else if (req.query.filter_availability && req.query.filter_name && !req.query.filter_rating) {
        var search = {
          availability: req.query.filter_availability,
          name: new RegExp(req.query.filter_name, 'i')
        }
      }else {
        var search = {};
      }

      var totalPosts = await Hotel.find(search).countDocuments().exec();

      const data = await Hotel.find(search, {}, query).sort({ $natural: -1 }).populate('images');

      let CategoryList = [];

      for (let hotel of data) {
        CategoryList.push({
          _id: hotel._id,
          name: hotel.name,
          slug: hotel.slug,
          images: hotel.images,
          address: hotel.address,
          city: hotel.city,
          state: hotel.state,
          rating: hotel.rating,
          price: hotel.price,
          description: hotel.description,
          meta_title: hotel.meta_title,
          meta_description: hotel.meta_description,
          availability: hotel.availability,
          amenities : await HotelAmenity.find({hotel_id:hotel._id}).populate('amenity'),
          rooms : await HotelRoom.find({hotel_id:hotel._id}).populate('facilities')
        })
      }

      if (!data) {
        response = { "error": true, "message": "Error fetching data" + err };
      } else {
        response = { "error": false, "message": 'data fetched', 'data': CategoryList, 'page': page, 'total': totalPosts, perPage: size };
      }
      res.json(response);

    } catch (error) {
      console.log(error.message);
    }
  },

  getAllHotelsCount: async (req, res, next) => {
    try {

      var totalPosts = await Hotel.find({}).countDocuments().exec();

      return res.status(412)
      .send({
        success: true,
        message: 'Data fetched!',
        hotel_count: totalPosts
      });

    } catch (error) {
      console.log(error.message);
    }
  },

  findHotelRoomsById: async (req, res, next) => {
    try {
      var id = req.params.id;

      var page = parseInt(req.query.page) || 1;
      var size = parseInt(req.query.size) || 15;
      var query = {}
      if (page < 0 || page === 0) {
        response = { "error": true, "message": "invalid page number, should start with 1" };
        return res.json(response);
      }
      query.skip = size * (page - 1);
      query.limit = size;

      var totalPosts = await HotelRoom.find({ 'hotel_id': id }).countDocuments().exec();


      HotelRoom.find({ 'hotel_id': id }, {__v:0},
        query, function (err, data) {
          if (err) {
            response = { "error": true, "message": "Error fetching data" + err };
          } else {
            response = { "success": true, "message": 'data fetched', 'data': data, 'page': page, 'total': totalPosts, perPage: size };
          }
          res.json(response);
        }).sort({ $natural: -1 }).populate('facilities');

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
        return res.status(412)
          .send({
            success: false,
            message: 'Validation failed',
            data: err
          });
      }
    }).catch(err => console.log(err))

    var checkCount = await checkNameIsUnique(req.body.name);

    if (checkCount) {
      return res.status(412)
          .send({
            success: false,
            message: 'Validation failed',
            data: 'duplicate name'
          });
    }

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
      const hotel = await Hotel.findById(id).populate('images');;
      if (!hotel) {
        throw createError(404, 'Hotel does not exist.');
      }

      const HotelAmenities = await HotelAmenity.find({hotel_id:hotel._id}).populate('amenity');
      const HotelRooms = await HotelRoom.find({hotel_id:hotel._id}).populate('facilities');
      
      const data = {};

      data.hotel= hotel;
      data.hotel_amenities= HotelAmenities;
      data.hotel_rooms= HotelRooms;
      
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

  findHotelBySlug: async (req, res, next) => {
    const slug = req.params.slug;
    try {
      const hotel = await Hotel.findOne({slug:slug}).populate('images');
      if (!hotel) {
        throw createError(404, 'Hotel does not exist.');
      }

      const HotelAmenities = await HotelAmenity.find({hotel_id:hotel._id}).populate('amenity');
      const HotelRooms = await HotelRoom.find({hotel_id:hotel._id}).populate('facilities');
      
      const data = {};

      data.hotel= hotel;
      data.hotel_amenities= HotelAmenities;
      data.hotel_rooms= HotelRooms;

      res.send({
        success: true,
        message: 'Data fetched',
        data: data,
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

      const hotel = await Hotel.findById(id);

      const image_arr = hotel.images;

      if (req.files && req.files.length) {
        req.body.image = req.files[0].path;
      }

      if (req.files && req.files.length) {

        const arr = req.files.filter(function (item) {
          return item !== req.files[0]
        })

        for (const image of arr) {
          const hotel_images = new HotelImage({
            image: image.path,
            hotel_id: id
          });

          const result1 = await hotel_images.save();
          image_arr.push(result1);
        }
      }

      req.body.images = image_arr;

      const options = { new: true };

      const result = await Hotel.findByIdAndUpdate(id, req.body, options);
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