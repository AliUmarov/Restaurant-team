const Product = require('../models/Product.model');

module.exports.productsController = {
  createProduct: async (req, res) => {
    try {
      await Product.create({
        name: req.body.name,
        price: req.body.price,
        img: req.body.img,
      });
      res.json('Продукт добавлен');
    } catch (e) {
      res.json(e.message);
    }
  },
  getAllProducts: async (req, res) => {
    try {
      const getAll = await Product.find();
      res.json(getAll);
    } catch (e) {
      res.json(e.message);
    }
  },
  removeProduct: async (req, res) => {
    try {
      const productRemove = await Product.findByIdAndRemove(req.params.id);
      res.json(productRemove);
    } catch (e) {
      res.json(e.message);
    }
  },
  editProduct: async (req, res) => {
    try {
      const editProd = await Product.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.json(editProd);
    } catch (e) {
      res.json(e.message);
    }
  },
};
