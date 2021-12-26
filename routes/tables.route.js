const { Router } = require('express');

const { tablesController } = require('../controllers/tables.controller');
const { authMiddleware } = require('../middleware/auth.middleware');

const router = Router();

router.get('/', tablesController.getTables);
router.post('/', tablesController.createTable);
router.delete('/:id', tablesController.removeTable);
router.patch('/:id', tablesController.editTable);
router.patch('/addUser/:id', authMiddleware, tablesController.addUserInTable);

module.exports = router;
