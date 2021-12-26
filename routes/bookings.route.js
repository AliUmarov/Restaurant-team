const { Router } = require('express');

const { bookingsController } = require('../controllers/bookings.controller.js');

const router = Router();

router.post('/', bookingsController.createBooking);
router.get('/', bookingsController.getAllBookings);
router.get('/user/:id', bookingsController.getBookingByUserId);
router.patch('/:id', bookingsController.editBooking);
router.delete('/:id', bookingsController.deleteBookingById);

module.exports = router;
