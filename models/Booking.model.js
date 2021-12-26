const mongoose = require ('mongoose');

const bookingSchema = mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
  },
  bookingTables: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Table',
    },
  ],
  bookingProducts: [{
    id: { type: Number },
    productId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Product',
    },
    amount: { type: Number }
  }],
  phone: {
    type: String,
    default: ''
  },
  isConfirmed: {
    type: Boolean,
    default: false
  }
})

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
