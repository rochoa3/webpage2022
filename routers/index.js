const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/index', (req, res) => {
    res.render('index')
})

module.exports = router
