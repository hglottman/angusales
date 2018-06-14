const express = require('express')
const commentModle = require('../models/comment')
const sequelize = require('sequelize')
const router = express.Router()


router.get('/', (req, res) => {
  commentModle.getAllComments().then(data => {
    res.send(JSON.stringify(data))
  })
})




module.exports = router
