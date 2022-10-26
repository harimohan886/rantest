const createError = require('http-errors');
const mongoose = require('mongoose');
const asyncHandler = require('../Middleware/asyncHandler')
const ResponseHandler = require('../Middleware/responseHandler')

let responseHandler = new ResponseHandler();

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) =>
  fetch(...args));

fs = require('fs')

const validator = require('../helpers/validate');
const Validator = require('validatorjs');

const Package = require('../Models/Package.model');
const PackageCategory = require('../Models/PackageCategory.model');
const PackageFeature = require('../Models/PackageFeature.model');
const PackageInclusion = require('../Models/PackageInclusion.model');
const PackageExclusion = require('../Models/PackageExclusion.model');
const PackageIternary = require('../Models/PackageIternary.model');

const PaymentPolicy = require('../Models/PaymentPolicy.model');
const Term = require('../Models/Term.model');
const CancellationPolicy = require('../Models/CancellationPolicy.model');

const PackageCategoryHotel = require('../Models/PackageCategoryHotel.model');
const PackageIndianOption = require('../Models/PackageIndianOption.model');
const PackageForeignerOption = require('../Models/PackageForeignerOption.model');

async function checkNameIsUnique(name) {

  totalPosts = await Package.find({ name: name }).countDocuments().exec();
  if (totalPosts > 0) {
    return true;
  } else {
    return false;
  }
};


module.exports = {
  getAllPackages: async (req, res, next) => {
    try {

      var page = parseInt(req.query.page) || 1;
      var size = parseInt(req.query.size) || 10;

      if (req.query.filter_name && !req.query.filter_rating && !req.query.filter_availability) {
        var search = {
          name: new RegExp(req.query.filter_name, 'i')
        }
      } else if (!req.query.filter_name && req.query.filter_rating && !req.query.filter_availability) {
        var search = {
          rating: req.query.filter_rating
        }
      } else if (!req.query.filter_name && !req.query.filter_rating && req.query.filter_availability) {
        var search = {
          availability: req.query.filter_availability
        }
      } else if (req.query.filter_availability && req.query.filter_rating && req.query.filter_name) {
        var search = {
          availability: req.query.filter_availability,
          rating: req.query.filter_rating,
          name: new RegExp(req.query.filter_name, 'i')
        }
      } else if (req.query.filter_availability && req.query.filter_rating && !req.query.filter_name) {
        var search = {
          availability: req.query.filter_availability,
          rating: req.query.filter_rating,
        }
      } else if (req.query.filter_rating && req.query.filter_name && !req.query.filter_availability) {
        var search = {
          rating: req.query.filter_rating,
          name: new RegExp(req.query.filter_name, 'i')
        }
      } else if (req.query.filter_availability && req.query.filter_name && !req.query.filter_rating) {
        var search = {
          availability: req.query.filter_availability,
          name: new RegExp(req.query.filter_name, 'i')
        }
      } else {
        var search = {};
      }

      if (page < 0 || page === 0) {
        response = { "error": true, "message": "invalid page number, should start with 1" };
        return res.json(response);
      }

      const offset = size * (page - 1);
      const limit = size;
      const sort = ({ $natural: -1 });

      Package.paginate(search,
        {
          select: '_id name slug rating price description meta_title meta_description availability image createdAt',
          offset,
          limit,
          sort
        }).then((data) => {

          const response = {
            totalItems: data.totalDocs,
            data: data.docs,
            totalPages: data.totalPages,
            currentPage: data.page
          }

          return responseHandler.successWithProperty(res, 'data fetched', response);
        }).catch((err) => {
          next(createError(400, 'Error in inserting data.'));
          return;
        });
    } catch (error) {
      console.log(error.message);
    }
  },

  getAllPackagesFront: async (req, res, next) => {
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

      var totalPosts = await Package.find({ availability: 1 }).countDocuments().exec();

      Package.find({ availability: 1 }, {},
        query, function (err, data) {
          if (err) {
            response = { "error": true, "message": "Error fetching data" + err };
          } else {
            response = { "error": false, "message": 'data fetched', 'data': data, 'page': page, 'total': totalPosts, perPage: size };
          }
          res.json(response);
        }).sort({ $natural: -1 }).populate(['inclusions', 'exclusions', 'features', 'iternaries']);
    } catch (error) {
      console.log(error.message);
    }
  },

  countAllPackages: async (req, res, next) => {
    try {

      var totalPackage = await Package.estimatedDocumentCount();

      res.send({
        success: true,
        message: 'Data fetched',
        package_count: totalPackage
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  getAllPackageCategories: async (req, res, next) => {
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

      var totalPosts = await PackageCategory.find({ package_id: req.params.id }).countDocuments().exec();

      PackageCategory.find({ package_id: req.params.id }, { __v: 0 },
        query, function (err, data) {
          if (err) {
            response = { "error": true, "message": "Error fetching data" + err };
          } else {
            response = { "error": false, "message": 'data fetched', 'data': data, 'page': page, 'total': totalPosts, perPage: size };
          }
          res.json(response);
        }).sort({ $natural: -1 }).populate(['hotels', 'foreignerOptions', 'indianOptions']);
    } catch (error) {
      console.log(error.message);
    }
  },

  getAllPackageFeatures: async (req, res, next) => {
    try {

      var package = await Package.findById(req.params.id).populate('features');

      res.send({
        success: true,
        message: 'Data fetched',
        data: package
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  getAllPackageIternaries: async (req, res, next) => {
    try {

      var package = await Package.findById(req.params.id).populate('iternaries');

      res.send({
        success: true,
        message: 'Data fetched',
        data: package
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  getAllPackageInclusions: async (req, res, next) => {
    try {

      var package = await Package.findById(req.params.id).populate('inclusions');

      res.send({
        success: true,
        message: 'Data fetched',
        data: package
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  getAllPackageExclusions: async (req, res, next) => {
    try {

      var package = await Package.findById(req.params.id).populate('exclusions');

      res.send({
        success: true,
        message: 'Data fateched',
        data: package
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewPackage: asyncHandler(async (req, res, next) => {
    let rules = {
      name: 'required',
      rating: 'required',
    };

    const validation = new Validator(req.body, rules);

    if (validation.fails()) {
      return res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: validation.errors
      });
    }

    var checkCount = await checkNameIsUnique(req.body.name);

    if (checkCount) {
      return res.status(412)
        .send({
          success: false,
          message: 'Validation failed',
          data: 'duplicate name'
        });
    }

    if (req.file) {
      req.body.image = req.file.path;
    }

    const package = new Package(req.body);
    const result = await package.save();
    res.send({
      success: true,
      message: 'Data inserted',
      data: result
    });
  }),

  findPackageById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const package = await Package.findById(id).select({ __v: 0 }).populate(['inclusions', 'exclusions', 'features', 'iternaries']);;
      if (!package) {
        throw createError(404, 'Package does not exist.');
      }
      res.send({
        success: true,
        message: 'Data fetched',
        data: package
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Package id'));
        return;
      }
      next(error);
    }
  },

  findPackageBySlug: async (req, res, next) => {
    const slug = req.params.slug;
    try {
      const package = await Package.findOne({ slug: slug }).populate(['inclusions', 'exclusions', 'features', 'iternaries']);
      if (!package) {
        throw createError(404, 'Package does not exist.');
      }
      const package_category = await PackageCategory.find({ package_id: package._id.toString() }).populate(['hotels', 'indianOptions', 'foreignerOptions']);


      let CategoryList = [];

      for (let category of package_category) {

        const hotel_ids = [];

        for (let hotel of category.hotels) {
          hotel_ids.push(hotel.hotel_id);
        }

        const apiResponse = await fetch('http://localhost:5000/hotels/by-ids?ids=' + hotel_ids.toString());

        const apiResponseJson = await apiResponse.json();

        CategoryList.push({
          _id: category._id,
          category: category.category,
          package_id: category.package_id,
          foreignerOptions: category.foreignerOptions,
          indianOptions: category.indianOptions,
          status: category.status,
          hotels: apiResponseJson.data
        })
      }

      const paymentpolicy = await PaymentPolicy.find({});
      const term = await Term.find({});
      const cancellationpolicy = await CancellationPolicy.find({});

      const data = {};
      data.package = package;
      data.categories = CategoryList;
      data.payment_policies = paymentpolicy;
      data.terms = term;
      data.cancellation_policies = cancellationpolicy;

      res.send({
        success: true,
        message: 'Data fetched',
        data: data
      });

    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Package id'));
        return;
      }
      next(error);
    }
  },

  updateAPackage: async (req, res, next) => {

    let rules = {
      name: 'required',
      rating: 'required',
    };

    const validation = new Validator(req.body, rules);
    if (validation.fails()) {
      return res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: validation.errors
      });
    }

    try {
      const id = req.params.id;

      const package = await Package.findById(id);

      if (req.file) {

        if (fs.existsSync(package.image)) {
          fs.unlinkSync(package.image);
        }

        req.body.image = req.file.path;
      }

      const updates = req.body;
      const options = { new: true };

      const result = await Package.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Package does not exist');
      }

      res.send({
        success: true,
        message: 'Data updated',
        data: result
      });

    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Package Id'));
      }
      next(error);
    }
  },

  updateAPackageFeaturesOld: async (req, res, next) => {
    try {
      const id = req.params.id;
      const features = [];

      await PackageFeature.deleteMany({ package_id: req.params.id });

      for (const feature of req.body.features) {
        const package = new PackageFeature({
          package_id: req.params.id,
          feature: feature.feature
        });

        const result = await package.save();

        features.push(result._id);
      }

      req.body.features = features;
      const updates = req.body;
      const options = { new: true };

      const result = await Package.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Package does not exist');
      }
      res.send({
        success: true,
        message: 'Data updated',
        data: result
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Package Id'));
      }

      next(error);
    }
  },

  updateAPackageFeatures: async (req, res, next) => {
    try {
      const id = req.params.id;

      const package = await Package.findById(id);

      await PackageFeature.deleteMany({ package_id: req.params.id });

      package.features = [];
      await package.save();

      for (const feature of req.body.features) {
        const package_fet = new PackageFeature({
          package_id: req.params.id,
          feature: feature.feature
        });

        const result = await package_fet.save();
        package.features.push(result._id);
      }

      await package.save();

      return responseHandler.successWithProperty(res, 'data updated', { data: package });

    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Package Id'));
      }

      next(error);
    }
  },

  updateAPackageExclusions: async (req, res, next) => {
    try {
      const id = req.params.id;
      const exclusions = [];

      await PackageExclusion.deleteMany({ package_id: req.params.id });

      for (const exclusion of req.body.exclusions) {
        const package = new PackageExclusion({
          package_id: req.params.id,
          exclusion: exclusion.exclusion
        });

        const result = await package.save();

        exclusions.push(result._id);
      }

      req.body.exclusions = exclusions;
      const updates = req.body;
      const options = { new: true };

      const result = await Package.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Package does not exist');
      }

      res.send({
        success: true,
        message: 'Data updated',
        data: result
      });

    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Package Id'));
      }

      next(error);
    }
  },

  updateAPackageInclusions: async (req, res, next) => {
    try {
      const id = req.params.id;
      const inclusions = [];

      await PackageInclusion.deleteMany({ package_id: req.params.id });

      for (const inclusion of req.body.inclusions) {
        const package = new PackageInclusion({
          package_id: req.params.id,
          inclusion: inclusion.inclusion
        });

        const result = await package.save();

        inclusions.push(result._id);
      }

      req.body.inclusions = inclusions;
      const updates = req.body;
      const options = { new: true };

      const result = await Package.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Package does not exist');
      }

      res.send({
        success: true,
        message: 'Data updated',
        data: result
      });

    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Package Id'));
      }

      next(error);
    }
  },

  updateAPackageIternaries: async (req, res, next) => {
    try {
      const id = req.params.id;
      const iternariesArr = [];

      await PackageIternary.deleteMany({ package_id: req.params.id });

      for (const iternary of req.body.iternaries) {
        const package = new PackageIternary({
          package_id: req.params.id,
          title: iternary.title,
          description: iternary.description,
          status: iternary.status,
        });

        const result = await package.save();

        iternariesArr.push(result._id);
      }

      req.body.iternaries = iternariesArr;
      const updates = req.body;
      const options = { new: true };

      const result = await Package.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Package does not exist');
      }
      res.send({
        success: true,
        message: 'Data updated',
        data: result
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Package Id'));
      }

      next(error);
    }
  },

  updateAvilability: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Package.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Package does not exist');
      }

      res.send({
        success: true,
        message: 'Data updated',
        data: result
      });

    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Package Id'));
      }

      next(error);
    }
  },

  deleteAPackage: async (req, res, next) => {

    try {

      const id = req.params.id;

      const package = await Package.findByIdAndDelete(id);

      if (fs.existsSync(package.image)) {
        fs.unlinkSync(package.image);
      }

      await PackageInclusion.deleteMany({ package_id: id });
      await PackageExclusion.deleteMany({ package_id: id });
      await PackageFeature.deleteMany({ package_id: id });
      await PackageCategory.deleteMany({ package_id: id });
      await PackageCategoryHotel.deleteMany({ package_id: id });
      await PackageIndianOption.deleteMany({ package_id: id });
      await PackageForeignerOption.deleteMany({ package_id: id });

      const result = await Package.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, 'Package does not exist.');
      }

      res.send({
        success: true,
        message: 'Data deleted',
      });

    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Package id'));
        return;
      }

      next(error);
    }
  },
};