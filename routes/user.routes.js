const express = require('express');
const router = express.Router();
const {getUsers, getById, insert, update, remove} = require('../controllers/UserController');

router.get('/', getUsers);
router.get('/:id', getById);
router.post('/', insert);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;