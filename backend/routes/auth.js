const express = require('express')
const router = express.Router()
const events = require('../controller/auth')

router.post('/create', events.createEvent)
router.get('/all', events.getAllEvents)
router.get('/:id', events.getEvents)
router.put('/:id', events.updateEvents)
router.delete('/:id', events.deleteEvents)

module.exports = router