const express = require('express')
const customerModle = require('../models/customer')
const sequelize = require('sequelize')
const router = express.Router()


router.get('/', (req, res) => {
  customerModle.getAllCustomers().then(data => {
    res.send(JSON.stringify(data))
  })
  err => {
    console.error(err)
  }
})

router.get('/:customerId', (req, res) => {
  customerId = req.params.customerId
  customerModle.getCustomer(customerId).then(data => {
    res.send(JSON.stringify(data))
  })
  err => {
    console.error(err)
  }
})

router.post('/', (req, res) => {
  newCustomer = req.body
  console.log(newCustomer)
  customerModle.createCustomer(newCustomer).then((data) => {
    res.send(JSON.stringify(data))
  })
  err => {
    console.error(err)
  }
})

router.put('/:customerId', (req, res) => {
  customerToUpdate = req.body
  customerId = req.params.customerId
  console.log(customerToUpdate)
  customerModle.updateCustomer(customerId, customerToUpdate).then((data) => {
    console.log(data) //data = [0] || [1]
    res.send(JSON.stringify(data))
  })
  err => {
    console.error(err)
  }
})



module.exports = router
