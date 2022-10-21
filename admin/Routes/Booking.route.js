const express = require('express');
const router = express.Router();

const BookingController = require('../Controllers/Booking.Controller');

router.get('/safari', BookingController.getAllSafariBookings);

router.get('/safari/:id', BookingController.findSafariBookingById);

router.get('/package', BookingController.getAllPackageBookings);

router.get('/package/:id', BookingController.findPackageBookingById);

router.get('/chambal', BookingController.getAllChambalBookings);

router.get('/chambal/:id', BookingController.findChambalBookingById);

module.exports = router;