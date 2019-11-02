const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.get('/getStories', getStories);
router.post('/addArticle', addArticle);
module.exports = router;



function getStories(req, res, next) {
    userService.getStories(req.body)
        .then(user => {console.log(res); return res.json(user); })
        .catch(err => next(err));
}

function addArticle(req, res, next) {
    userService.addArticle(req.body)
        .then(user => {console.log(res); return res.json(user); })
        .catch(err => next(err));
}