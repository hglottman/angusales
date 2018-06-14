

const express = require('express')
const sequelize = require('sequelize')
const router = express.Router()


router.get('/simpleRoute', (req, res) => {
  res.send(JSON.stringify("Here I am. Rock you like a hurricane."))
})

router.get('/requiredParamRoute/:field', (req, res) => {
  // example request: http://localhost:3000/optionalParamsRoute/jona
  params = req.params
  res.send(JSON.stringify(`You sent ${params['field']}`))
})

router.get('/optionalParamsRoute', (req, res) => {
  // example request: http://localhost:3000/optionalParamsRoute/?name=jona&age=27
  params = req.query
  res.send(JSON.stringify(`You sent ${params}`))
})

router.post('/add/:word', (req, res) => {
  params = req.params
  word = params['word'];
    if (word in wordsCounts) {
      wordsCounts[word] ++; 
    } else (wordsCounts[word] = 1);
    res.send(JSON.stringify(`You sent the word ${params['word']} + and the count is ${wordsCounts[word]} `))
})

router.get('/recieve/:word', (req, res) => {
  params = req.params
  word = params['word'];
    if (word in wordsCounts) {
  res.send(JSON.stringify(`You search the word ${params['word']}, it's count is ${wordsCounts[word]} `))
} else {
  res.send (JSON.stringify("Sorry friend, not working"))
}
})

module.exports = router
