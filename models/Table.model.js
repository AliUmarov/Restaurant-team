const mongoose = require('mongoose');

const tableSchema = mongoose.Schema(
  {
    tableNumber: {
      type: Number,
      required: true,
    },
    tableCapacity: {
      type: Number,
      required: true,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
    },
    product: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Product',
      },
    ],
  },
  { timestamps: true }
);

const Table = mongoose.model('Table', tableSchema);

module.exports = Table;
