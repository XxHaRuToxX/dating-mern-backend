const { Router } = require('express');
const { addCard, getCards } = require('../controllers/cards');
const router = Router();

router.post('/dating/cards', addCard);

router.get('/dating/cards', getCards)

module.exports = router;
