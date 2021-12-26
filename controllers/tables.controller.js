const Table = require('../models/Table.model');

module.exports.tablesController = {
  getTables: async (req, res) => {
    try {
      const tables = await Table.find();

      return res.json(tables);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  createTable: async (req, res) => {
    const { tableNumber, tableCapacity, user, product } = req.body;

    try {
      const tables = await Table.create({
        tableNumber,
        tableCapacity,
        user,
        product,
      });
      res.json(tables);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  removeTable: async (req, res) => {
    const { id } = req.params;
    try {
      await Table.findByIdAndDelete(id);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  editTable: async (req, res) => {
    const { tableNumber, tableCapacity, user, product } = req.body;
    const { id } = req.params;

    try {
      const edited = await Table.findByIdAndUpdate(
        id,
        {
          tableNumber,
          tableCapacity,
          user,
          product,
        },
        { new: true }
      );
      return res.json(edited);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
  addUserInTable: async (req, res) => {
    const { id } = req.params;
    try {
      const tableId = await Table.findByIdAndUpdate(id, { user: req.user.id });
      res.status(200).json(tableId);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
};
