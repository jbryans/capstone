const { application } = require('express');
const express = require('express');
const router = express.Router();
const { list, show, create, remove, update, showBenifitsByCustomer } = require('../controllers/customerController')

router.get('/customers', list);
router.get('/customers/:id', show);
router.get('/customers/:id/benifits', showBenifitsByCustomer);
router.post('/customers', create);
router.put('/customers/:id', update);
router.delete('/customers/:id', remove);

module.exports = router;