const createError = require('http-errors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const accessTokenSecret = 'youraccesstokensecret';
var bcrypt = require("bcrypt");

const Auth = require('../Models/Auth.model');

module.exports = {
  getAllAuths: async (req, res, next) => {
    try {
      const results = await Auth.find({}, { __v: 0 });
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  getAllAdmins: async (req, res, next) => {
    try {
      const results = await Auth.find({}, { __v: 0 });
      // const results = await Auth.find({}, { name: 1, price: 1, _id: 0 });
      // const results = await Auth.find({ price: 699 }, {});
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

  adminRegister: async (req, res, next) => {
    try {

      const user = {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 8)
      };

      const user1 = new Auth({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 8)
      });

      user1.save((err, user) => {
        if (err) {
          res.status(500)
          .send({
            message: err
          });
          return;
        } else {
          res.status(200)
          .send({
            message: "User Registered successfully"
          })
        }
      });
      /*const auth = new Auth(user);
      const result = await auth.save();
      res.send(result);*/

    } catch (error) {
      console.log(error);
      if (error.name === 'ValidationError') {
        next(createError(422, error.message));
        return;
      }
      next(error);
    }
  },

  adminLogin: async (req, res, next) => {

    const { email, password } = req.body;

    const user = await Auth.find({email:email}).count();

    if (user) {

      const user = await Auth.findOne({email:email});

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

  findAuthById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const auth = await Auth.findById(id);
      // const auth = await Auth.findOne({ _id: id });
      if (!auth) {
        throw createError(404, 'Auth does not exist.');
      }
      res.send(auth);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Auth id'));
        return;
      }
      next(error);
    }
  },

  updateAAuth: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Auth.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Auth does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Auth Id'));
      }

      next(error);
    }
  },

  deleteAAuth: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Auth.findByIdAndDelete(id);
      // console.log(result);
      if (!result) {
        throw createError(404, 'Auth does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Auth id'));
        return;
      }
      next(error);
    }
  }
};