const createError = require('http-errors');
const mongoose = require('mongoose');

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => 
 fetch(...args));

const SafariBooking = require('../Models/SafariBooking.model');

const PackageBooking = require('../Models/PackageBooking.model');

const ChambalBooking = require('../Models/ChambalBooking.model');

module.exports = {

  updateSafariPayment: async (req, res, next) => {
    try {
      const id = req.params.id;
      const customer_id = req.body.customer_id;

      req.body.status = 'paid';
      const updates = req.body;
      const options = { new: true };

      const result = await SafariBooking.findOneAndUpdate({_id: id, customer_id: customer_id} , updates, options);

      if (!result) {
        throw createError(404, 'Payment does not exist');
      }

      /*save data to crm*/

      
      const booking = await SafariBooking.findOne({_id: id, customer_id: customer_id}).populate(['customer','booking_customers']);
      const params = new URLSearchParams();

      params.append('name', booking.customer.name);
      params.append('email', booking.customer.email);
      params.append('mobile', booking.customer.mobile);
      params.append('website', 'ranthamboretigerreserve.in');
      params.append('payment_status', 'paid');
      params.append('lead_status', 4);
      params.append('date', booking.date);
      params.append('time', booking.timing);
      params.append('mode', booking.vehicle);
      params.append('zone', booking.zone);
      params.append('sanctuary', 'ranthambore');
      params.append('amount', req.body.amount);
      params.append('transaction_id', req.body.transaction_id);
      params.append('booked_customers', JSON.stringify(booking.booking_customers));

      const response = await fetch(`${process.env.CRM_LEAD_URL}/update-lead-status`, {method: 'POST', body: params});
      const data = await response.json();        

      /*save data to crm*/

      res.send({
        success: true,
        message: 'Safari Data updated',
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Payment Id'));
      }

      next(error);
    }
  },

  updatePackagePayment: async (req, res, next) => {
    try {
      const id = req.params.id;
      const customer_id = req.body.customer_id;

      req.body.status = 'paid';

      const updates = req.body;
      const options = { new: true };

      const result = await PackageBooking.findOneAndUpdate({_id: id, customer_id: customer_id} , updates, options);

      if (!result) {
        throw createError(404, 'Payment does not exist');
      }

      /*save data to crm*/      
      
      const booking = await PackageBooking.findOne({_id: id, customer_id: customer_id}).populate('customer');

      const params = new URLSearchParams();

      params.append('name', booking.customer.name);
      params.append('email', booking.customer.email);
      params.append('mobile', booking.customer.mobile);
      params.append('address', booking.customer.address);
      params.append('state', booking.customer.state);
      params.append('website', 'ranthamboretigerreserve.in');
      params.append('custom_data', '');
      params.append('payment_status', 'paid');
      params.append('lead_status', 4);
      params.append('date', booking.date);
      params.append('time', booking.timing);
      params.append('adult', 0);
      params.append('child', 0);
      params.append('mode', booking.vehicle);
      params.append('zone', booking.zone);
      params.append('sanctuary', 'ranthambore');
      params.append('amount', req.body.amount);
      params.append('transaction_id', req.body.transaction_id);

      const response = await fetch(`${process.env.CRM_LEAD_URL}/update-lead-status`, {method: 'POST', body: params});
      const data = await response.json();       

      /*save data to crm*/

      res.send({
        success: true,
        message: 'Data updated',
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Payment Id'));
      }

      next(error);
    }
  },

  updateChambalPayment: async (req, res, next) => {
    try {
      const id = req.params.id;
      const customer_id = req.body.customer_id;

      req.body.status = 'paid';

      const updates = req.body;
      const options = { new: true };

      const result = await ChambalBooking.findOneAndUpdate({_id: id, customer_id: customer_id} , updates, options);

      if (!result) {
        throw createError(404, 'Payment does not exist');
      }

      /*save data to crm*/      
      
      const booking = await ChambalBooking.findOne({_id: id, customer_id: customer_id}).populate('customer');

      const params = new URLSearchParams();      

      params.append('name', booking.customer.name);
      params.append('email', booking.customer.email);
      params.append('mobile', booking.customer.mobile);
      params.append('address', booking.customer.address);
      params.append('state', booking.customer.state);
      params.append('website', 'ranthamboretigerreserve.in');
      params.append('custom_data', '');
      params.append('payment_status', 'paid');
      params.append('lead_status', 4);
      params.append('date', booking.date);
      params.append('time', booking.time);
      params.append('adult', booking.no_of_persons_indian);
      params.append('child', booking.no_of_persons_foreigner);
      params.append('mode', 'Boat');
      params.append('zone', 'All Zone');
      params.append('sanctuary', 'ranthambore');
      params.append('amount', req.body.amount);
      params.append('transaction_id', req.body.transaction_id);

      const response = await fetch(`${process.env.CRM_LEAD_URL}/ranthambore-booking`, {method: 'POST', body: params});
      const data = await response.json(); 


      const response1 = await fetch(`${process.env.CRM_LEAD_URL}/update-lead-status`, {method: 'POST', body: params});
      const data1 = await response1.json(); 

      /*save data to crm*/

      res.send({
        success: true,
        message: 'Data updated',
      });
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Payment Id'));
      }

      next(error);
    }
  },

};
