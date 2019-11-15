var express = require('express');
var router = express.Router();
var skillCtrl = require('../controllers/skills')

/* GET users listing. */
router.get('/', skillCtrl.index); 
router.get('/new', skillCtrl.new);
router.get('/:id', skillCtrl.show);
router.post('/', skillCtrl.create);
router.delete('/:id', skillCtrl.delete);


module.exports = router;
