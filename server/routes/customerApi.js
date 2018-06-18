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
  newCustomer = req.body.customer
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
  customerModle.updateCustomer(customerId, customerToUpdate).then((data) => {
    res.send(JSON.stringify(data))
  })
  err => {
    console.error(err)
  }
})

router.delete('/:customerId', (req, res) => {
  customerId = req.params.customerId
  customerModle.deleteCustomer(customerId).then(data => {
    res.send(JSON.stringify(data))
  })
  err => {
    console.error(err)
  }
})



module.exports = router
