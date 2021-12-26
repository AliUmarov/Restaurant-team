const { Router } = require('express');

const {
  productsController,
} = require('../controllers/products.controller.');

const router = Router();

router.post('/', productsController.createProduct);
router.get('/', productsController.getAllProducts);
router.delete('/:id', productsController.removeProduct);
router.patch('/:id', productsController.editProduct);

module.exports = router;
