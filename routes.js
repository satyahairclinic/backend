const formController = require('./controller/form-controller');

const router = require('express').Router()

router.post('/api/entry', formController.entry)

module.exports = router;