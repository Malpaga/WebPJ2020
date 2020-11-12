const { request, text } = require('express')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const { Client } = require('pg')
const { route } = require('../app.js')

class Panier {
  constructor () {
    this.createdAt = new Date()
    this.updatedAt = new Date()
    this.articles = []
  }
}

var userId = undefined

const client = new Client({
 user: 'postgres',
 host: 'localhost',
 password: 'azertyuiop',
 database: 'WebProject'
})

client.connect()

router.use((req, res, next) => {
  
  next()
})

router.post('/register', async (req, res) => {
  const email = req.body.email
  const password = req.body.password

  var sql = "SELECT * FROM users WHERE email=$1"
  var result = await client.query({
    text: sql,
    values: [email]
  })

  if(result.rowCount !== 0 || typeof email !== 'string' || email === '' || typeof password !== 'string' || password === ''){
    res.status(401).json({ message: 'User already exists or fields are incorrect'})
    return
  }

  const hash = await bcrypt.hash(password, 10)

  sql = 'INSERT INTO users (email, password) VALUES ($1, $2)'
  result = await client.query({
    text: sql,
    values: [email, hash]
  })
  res.status(200).json({message: 'You are now registered.'})
})

router.post('/login', async (req, res) => {
  const email = req.body.email
  const password = req.body.password
  console.log(req.session.userId)
  var sql = "SELECT * FROM users WHERE email=$1 "
  var result = await client.query({
    text: sql,
    values: [email]
  })
  const user = result.rows[0]
  if(result.rowCount === 0 || req.session.userId === user.id){
    res.status(401).json({message : "Already logged in."})
    return
  }
  const hashed = user.password

  if (await bcrypt.compare(password, hashed)){
    req.session.userId = user.id
    res.status(200).json({message : "logged in !"})
    console.log(req.session.userId)
    return
  }
  res.status(400).json({message : "Email doesn't exist or password is incorrect."})

})

router.get('/me', async (req, res) => {
  if (typeof req.session.userId === 'number') {
    const result = await client.query({
      text : "SELECT * FROM users WHERE id=$1",
      values : [req.session.userId]
    })
    if (result.rowCount === 0) {
      res.status(401).send({message: "error"})
      return
    }
    res.status(200).send({id : result.rows[0].id, email : result.rows[0].email})
    return
  }
  res.status(401).send({message: "No user connected"})
})

router.get('/reviews', async (req, res) => {
  
  var sql = "SELECT * FROM reviews"
  var result = await client.query({
    text: sql
  })
  res.json(result.rows)
})

router.post('/reviews', async (req, res) => {

  var review = req.body
  sql = 'INSERT INTO reviews (artist, album, content, image, rating, date) VALUES ($1, $2, $3, $4, $5, $6)'
  result = await client.query({
    text: sql,
    values: [review.artist, review.album, review.content, review.image, review.rating, review.date]
  })

  res.status(200)

})

router.get('/artists/:artistId', async (req, res) => {
  const result = await client.query({
    text : "SELECT * FROM artists WHERE id=$1",
    values : [req.params.artistId]
  })
})

router.get('/artists', async (req, res) => {
    const result = await client.query({
      text : "SELECT * FROM artists"
    })
    res.status(200).json(result.rows)
})


module.exports = router
