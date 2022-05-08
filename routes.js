const formController = require('./controller/form-controller');

const router = require('express').Router()

router.post('/api/entry', formController.entry)
router.post('/api/skin-entry', formController.skinEntry)
router.post('/api/get-leads', formController.getAllLeads)

module.exports = router;