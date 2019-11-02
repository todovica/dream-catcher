const express = require('express');
const router = express.Router();
const emailService = require('./email.service');

// routes
router.post('/collectEmail', collectEmail);
router.get('/confirmEmail', confirmEmail);
module.exports = router;



function collectEmail(req, res, next) {
    emailService.collectEmail(req.body)
        .then(user => {console.log(res); return res.json(user); })
        .catch(err => next(err));
}

function confirmEmail(req, res, next) {
    emailService.confirmEmail(req.body)
        .then(user => {console.log(res); return res.json(user); })
        .catch(err => next(err));
}