const createError = require('http-errors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const validator = require('../helpers/validate');

const accessTokenSecret = 'youraccesstokensecret';
var bcrypt = require("bcrypt");

const Customer = require('../Models/Customer.model');
const SafariBooking = require('../Models/SafariBooking.model');
const PackageBooking = require('../Models/PackageBooking.model');
const ChambalBooking = require('../Models/ChambalBooking.model');
const BookingCustomer = require('../Models/BookingCustomer.model');

async function checkNameIsUnique(email) {

  totalPosts = await Customer.find({email:email}).countDocuments().exec();
  if (totalPosts > 0) {
    return true;
  }else{
    return false;
  }
};

module.exports = {
  getAllCustomers: async (req, res, next) => {
    try {

      var page = parseInt(req.query.page)||1;
      var size = parseInt(req.query.size)||15;

      if (req.query.type) {
        var condition = {
          type: req.query.type
        }
      }else{
        var condition = {

        }
      }

      var query = {}
      if(page < 0 || page === 0) {
        response = {"error" : true,"message" : "invalid page number, should start with 1"};
        return res.json(response);
      }
      query.skip = size * (page - 1);
      query.limit = size;

      var  totalPosts = await Customer.find(condition).countDocuments().exec();

      Customer.find(condition,{},
        query,function(err,data) {
          if(err) {
            response = {"error": true, "message": "Error fetching data"+err};
          } else {
            response = {"success": true, "message": 'data fetched', 'data': data, 'page': page, 'total': totalPosts, perPage:size };
          }
          res.json(response);
        }).sort({ $natural: -1 }).populate(['booking_customers','safari_booking','chambal_booking']);
    } catch (error) {
      console.log(error.message);
    }
  },

  countAllCustomers: async (req, res, next) => {
    try {
      const results = await Customer.estimatedDocumentCount();
      res.send({
          success: true,
          message: "data fetched",
          data: results
        });
    } catch (error) {
      console.log(error.message);
    }
  },

  getAllAdmins: async (req, res, next) => {
    try {
      const results = await Customer.find({}, { __v: 0 });
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  adminLogout: async (req, res, next) => {
    try {
      req.user.tokens = req.user.tokens.filter((token) =>{
        return token.token !== req.token 
      })
      await req.user.save()
      res.send('user Logout')
    } catch (error) {
      res.status(500).send(error)
    }
  },

  createNewCustomerSafari: async (req, res, next) => {

    var checkCount = await checkNameIsUnique(req.body.email);

    if (checkCount) {
      return res.status(412)
          .send({
            success: false,
            message: 'Validation failed',
            data: 'duplicate email'
          });
    }

    try {

      const booking_customer_array = [];

      const safari_booking_data = new SafariBooking({
        date : req.body.date,
        zone : req.body.zone,
        vehicle : req.body.vehicle,
        timing : req.body.timing,
        transaction_id : req.body.transaction_id,
        amount : req.body.amount
      });

      const safari_booking_result = await safari_booking_data.save();

      for (const persons of req.body.booked_persons) 
      { 

        const booking_customer_data = new BookingCustomer({
          name : persons.name,
          gender : persons.gender,
          nationality : persons.nationality,
          id_proof : persons.id_proof,
          idnumber : persons.idnumber
        });

        const booking_customer_result = await booking_customer_data.save();

        booking_customer_array.push(booking_customer_result._id);
      }

      const customer_data = new Customer({
        name : req.body.name,
        booking_customers : booking_customer_array,
        safari_booking : safari_booking_result._id,
        mobile : req.body.mobile,
        email : req.body.email,
        type : 'safari',
        address : req.body.address,
        state : req.body.state,
      });

      const customer_data_result = await customer_data.save();

      res.send({
        success: true,
        message: 'Data inserted',
        data: customer_data_result
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

  createNewCustomerChambal: async (req, res, next) => {

    var checkCount = await checkNameIsUnique(req.body.email);

    if (checkCount) {
      return res.status(412)
          .send({
            success: false,
            message: 'Validation failed',
            data: 'duplicate email'
          });
    }

    try {

      const safari_booking_data = new ChambalBooking({
        date : req.body.date,
        zone : req.body.zone,
        vehicle : req.body.vehicle,
        time : req.body.time,
        transaction_id : req.body.transaction_id,
        amount : req.body.amount,
        id_proof_no : req.body.id_proof_no,
        no_of_persons_indian : req.body.no_of_persons_indian,
        no_of_persons_foreigner : req.body.no_of_persons_foreigner,
      });

      const safari_booking_result = await safari_booking_data.save();

      const customer_data = new Customer({
        name : req.body.name,
        chambal_booking : safari_booking_result._id,
        mobile : req.body.mobile,
        type : 'chambal',
        email : req.body.email,
        address : req.body.address,
        state : req.body.state
      });

      const customer_data_result = await customer_data.save();

      res.send({
        success: true,
        message: 'Data inserted',
        data: customer_data_result
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


createNewCustomerPackage: async (req, res, next) => {

  var checkCount = await checkNameIsUnique(req.body.email);

    if (checkCount) {
      return res.status(412)
          .send({
            success: false,
            message: 'Validation failed',
            data: 'duplicate email'
          });
    }

    try {

      const booking_customer_array = [];

      const safari_booking_data = new PackageBooking({
        date : req.body.date,
        timing : req.body.timing,
        transaction_id : req.body.transaction_id,
        amount : req.body.amount,
        package_option_nationality : req.body.nationality_type,
        package_option_id : req.body.package_option_id,
        package_id : req.body.package_id,
        no_of_kids : req.body.no_of_kids,
      });

      const safari_booking_result = await safari_booking_data.save();

      const customer_data = new Customer({
        name : req.body.name,
        package_booking : safari_booking_result._id,
        mobile : req.body.mobile,
        type : 'package',
        email : req.body.email,
        address : req.body.address,
        state : req.body.state,
      });

      const customer_data_result = await customer_data.save();

      res.send({
        success: true,
        message: 'Data inserted',
        data: customer_data_result
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


  adminLogin: async (req, res, next) => {

    const { email, password } = req.body;

    const user = await Customer.find({email:email}).count();

    if (user) {

      const user = await Customer.findOne({email:email});

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
        );
      if (!passwordIsValid) {
        return res.status(401)
        .send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({
        id: user.id
      }, process.env.JWT_SEC, {
        expiresIn: 86400
      });

      user.tokens = user.tokens.concat({ token })
      await user.save();

      res.status(200)
        .send({
          user: {
            id: user._id,
            email: user.email,
            username: user.username,
            name: user.name,
          },
          message: "Login successfull",
          accessToken: token,
        });

    } else {
      next(createError(422, 'Username or password incorrect'));
    }

  },

  findCustomerById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const auth = await Customer.findById(id);
      // const auth = await Customer.findOne({ _id: id });
      if (!auth) {
        throw createError(404, 'Customer does not exist.');
      }
      res.send(auth);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Customer id'));
        return;
      }
      next(error);
    }
  },


  resetPassword : async (req, res, next) => {

    if (req.body.password !== req.body.password_confirmation) {

      next(createError(400, "Pass and Confirm Password does not match!"));
        return;
    }

    var passwordIsValid = bcrypt.compareSync(
        req.body.current_password,
        req.user.password
        );

    if (!passwordIsValid) {

      next(createError(400, "Invalid or expired current password"));
        return;
    }
    await Customer.updateOne(
      { _id: req.user._id.toString() },
      { $set: { password: bcrypt.hashSync(req.body.password, 8) } },
      { new: true }
      );
    const user = await Customer.findById({ _id: req.user._id.toString() });

    res.send({
        success: true,
        message: 'user fetched!',
        data: user
      });

  },

  profile: async (req, res, next) => {
    try {
      const auth = await Customer.findOne({ _id: req.user._id },{__v:0});
      if (!auth) {
        throw createError(404, 'Customer does not exist.');
      }
      res.send({
        success: true,
        message: 'user fetched!',
        data: auth
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

  updateACustomer: async (req, res, next) => {
    try {
      const id = req.user._id;
      const updates = req.body;
      const options = { new: true };

      const result = await Customer.findByIdAndUpdate(id.toString(), updates, options);
      if (!result) {
        throw createError(404, 'Customer does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Customer Id'));
      }
      next(error);
    }
  },

  deleteACustomer: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Customer.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, 'Customer does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Customer id'));
        return;
      }
      next(error);
    }
  }
};