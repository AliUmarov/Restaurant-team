const Booking = require('../models/Booking.model');

module.exports.bookingsController = {
  createBooking: async (req,res ) => {
    try {
      const booking = await Booking.create({
        userId: req.body.userId,
        bookingTables: req.body.bookingTables,
        bookingProducts: req.body.bookingProducts,
      })
      res.json(booking)
    } catch (e) {
      res.status(401).json("error" + e.toString())
    }
  },
  getAllBookings: async (req, res) => {
    try {
      const getBooking = await Booking.find();
      res.json(getBooking);
    } catch (e) {
      res.json("error")
    }
  },
  editBooking: async (req, res) => {
    try {
      const getBooking = await Booking.findByIdAndUpdate(req.params.id, {
        userId: req.body.userId,
        bookingTables: req.body.bookingTables,
        bookingProducts: req.body.bookingProducts,
        phone: req.body.phone,
        isConfirmed: req.body.isConfirmed
      }, {new: true});
      res.json(getBooking);
    } catch (e) {
      res.json("error")
    }
  },
  getBookingByUserId: async (req, res) => {
    try {
      const getBookingByUserId = await Booking.findOne({userId: req.params.id})
      res.json(getBookingByUserId)
    } catch (e) {
      res.json(null)
    }
  },
  deleteBookingById: async (req, res) => {
    try {
      await Booking.findByIdAndDelete(req.params.id)
      res.status(200).json('Удалено')
    } catch (e) {
      res.status(400).json("error" + e.toString())
    }
  },
}
