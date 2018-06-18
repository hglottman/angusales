const express = require('express')
const companyModle = require('../models/company')
const sequelize = require('sequelize')
var mysql = require('mysql');
const router = express.Router()


router.get('/', (req,res) => {
  companyModle.getAllCompanys().then(data => {
    res.send(JSON.stringify(data))
  })
})


router.post('/', (req, res) => {
  newCompany = req.body
  companyModle.createCompany(newCompany).then(() => {
    res.send(JSON.stringify(newCompany))
  })
  err => {
    console.error(err)
}
})


module.exports = router;
  