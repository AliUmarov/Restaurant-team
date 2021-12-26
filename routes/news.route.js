const { Router } = require('express');

const { newsController } = require('../controllers/news.controller.js');

const router = Router();

router.post('/', newsController.createNews);
router.get('/', newsController.getAllNews);
router.get('/:id', newsController.getNewsById);
router.delete('/:id', newsController.removeNews)

module.exports = router;