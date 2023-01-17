const createError = require('http-errors');
const mongoose = require('mongoose');

const PackageCategory = require('../Models/PackageCategory.model');
const PackageCategoryHotel = require('../Models/PackageCategoryHotel.model');
const PackageIndianOption = require('../Models/PackageIndianOption.model');
const PackageForeignerOption = require('../Models/PackageForeignerOption.model');

module.exports = {
  getAllPackageCategorys: async (req, res, next) => {
    try {

      var page = parseInt(req.query.page)||1;
      var size = parseInt(req.query.size)||15;
      var query = {}
      if(page < 0 || page === 0) {
        response = {"error" : true,"message" : "invalid page number, should start with 1"};
        return res.json(response);
      }
      query.skip = size * (page - 1);
      query.limit = size;

      var  totalPosts = await PackageCategory.find({}).countDocuments().exec();

      PackageCategory.find({},{},
        query,function(err,data) {
          if(err) {
            response = {"error": true, "message": "Error fetching data"+err};
          } else {
            response = {"error": false, "message": 'data fetched', 'data': data, 'page': page, 'total': totalPosts, perPage:size };
          }
          res.json(response);
        }).sort({ $natural: -1 }).populate(['hotels', 'indianOptions', 'foreignerOptions']);
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewPackageCategory: async (req, res, next) => {
    try {
      
      const hotels = [];
      const for_options = [];
      const ind_options = [];
  
      const package = new PackageCategory({
        category : req.body.category,
        package_id : req.body.package_id,
        status : req.body.status
      });

      const result = await package.save();

      for (const hotel of req.body.hotels) 
      { 
        const package1 = new PackageCategoryHotel({
          package_id : req.body.package_id,
          category_id : result._id,
          hotel_id : hotel
        });

        const result1 = await package1.save();

        hotels.push(result1._id);
      }

      for (const indian of req.body.indian) 
      { 
        const package2 = new PackageIndianOption({
          package_id : req.body.package_id,
          category_id : result._id,
          price : indian.price,
          extra_adult_price : indian.extra_adult_price,
          extra_child_price : indian.extra_child_price,
          extra_bed_price : indian.extra_bed_price,
          festival_kid : indian.festival_kid,
          festival_price : indian.festival_price,
          safari_price:indian.safari_price
        });

        const result2 = await package2.save();

        ind_options.push(result2._id);
      }


      for (const foreigner of req.body.foreigner) 
      { 
        const package3 = new PackageForeignerOption({
          package_id : req.body.package_id,
          category_id : result._id,
          price : foreigner.price,
          extra_adult_price : foreigner.extra_adult_price,
          extra_child_price : foreigner.extra_child_price,
          extra_bed_price : foreigner.extra_bed_price,
          festival_kid : foreigner.festival_kid,
          festival_price : foreigner.festival_price,
          safari_price:foreigner.safari_price
        });

        const result3 = await package3.save();

        for_options.push(result3._id);
      }


      const packageArr = {
        foreignerOptions:for_options,
        indianOptions:ind_options,
        hotels:hotels,
        package:req.body.package_id
      };

      const id = result._id;
      const options = { new: true };

      const result_p = await PackageCategory.findByIdAndUpdate(id, packageArr, options);

      res.send({
        success: true,
        message: 'Data inserted',
        data: result_p
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

  findPackageCategoryById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const package = await PackageCategory.findById(id).populate('package',{_id: 0, name:1}).populate(['hotels', 'indianOptions', 'foreignerOptions']);
      if (!package) {
        throw createError(404, 'PackageCategory does not exist.');
      }
      res.send({
        success: true,
        message: 'Data fetched',
        data: package
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid PackageCategory id'));
        return;
      }
      next(error);
    }
  },

  updateAPackageCategory: async (req, res, next) => {
    try {

      await PackageForeignerOption.deleteMany({package_id:req.body.package_id, category_id:req.params.id});
      await PackageCategoryHotel.deleteMany({package_id:req.body.package_id, category_id:req.params.id});
      await PackageIndianOption.deleteMany({package_id:req.body.package_id, category_id:req.params.id});

      const hotels = [];
      const for_options = [];
      const ind_options = [];

      for (const hotel of req.body.hotels) 
      { 
        const package1 = new PackageCategoryHotel({
          package_id : req.body.package_id,
          category_id : req.params.id,
          hotel_id : hotel
        });

        const result1 = await package1.save();

        hotels.push(result1._id);
      }

      for (const indian of req.body.indian) 
      { 
        const package2 = new PackageIndianOption({
          package_id : req.body.package_id,
          category_id : req.params.id,
          price : indian.price,
          extra_adult_price : indian.extra_adult_price,
          extra_child_price : indian.extra_child_price,
          extra_bed_price : indian.extra_bed_price,
          festival_kid : indian.festival_kid,
          festival_price : indian.festival_price,
          safari_price:indian.safari_price
        });

        const result2 = await package2.save();

        ind_options.push(result2._id);
      }


      for (const foreigner of req.body.foreigner) 
      { 
        const package3 = new PackageForeignerOption({
          package_id : req.body.package_id,
          category_id : req.params.id,
          price : foreigner.price,
          extra_adult_price : foreigner.extra_adult_price,
          extra_child_price : foreigner.extra_child_price,
          extra_bed_price : foreigner.extra_bed_price,
          festival_kid : foreigner.festival_kid,
          festival_price : foreigner.festival_price,
          safari_price:foreigner.safari_price
        });

        const result3 = await package3.save();

        for_options.push(result3._id);
      }

      const package = {
        category : req.body.category,
        package_id : req.body.package_id,
        status : req.body.status,
        foreignerOptions:for_options,
        indianOptions:ind_options,
        hotels:hotels,
        package:req.body.package_id
      };

      const id = req.params.id;
      const options = { new: true };

      const result = await PackageCategory.findByIdAndUpdate(id, package, options);
      if (!result) {
        throw createError(404, 'PackageCategory does not exist');
      }
      res.send({
        success: true,
        message: 'Data updated',
        data: result
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid PackageCategory Id'));
      }
      next(error);
    }
  },

  updateAvilability: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await PackageCategory.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Package Category does not exist');
      }

      res.send({
        success: true,
        message: 'Data updated',
        data: result
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Package Category Id'));
      }

      next(error);
    }
  },

  deleteAPackageCategory: async (req, res, next) => {
    const id = req.params.id;
    try {

      const package = await PackageCategory.findById(id);

      await PackageForeignerOption.deleteMany({package_id:package.package_id, category_id:id});
      await PackageCategoryHotel.deleteMany({package_id:package.package_id, category_id:id});
      await PackageIndianOption.deleteMany({package_id:package.package_id, category_id:id});

      const result = await PackageCategory.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, 'PackageCategory does not exist.');
      }
      
      res.send({
        success: true,
        message: 'Data deleted',
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid PackageCategory id'));
        return;
      }
      next(error);
    }
  },
};