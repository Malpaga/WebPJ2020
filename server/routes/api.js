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
 password: 'reglisse02',
 database: 'WebProject'
})

client.connect()

router.use((req, res, next) => {
  
  next()
})

router.post('/register', async (req, res) => {
  const username = req.body.username
  const email = req.body.email
  const password = req.body.password

  var sql = "SELECT * FROM users WHERE mail=$1 OR username=$2"
  var result = await client.query({
    text: sql,
    values: [email, username]
  })

  if(result.rowCount !== 0 || typeof username !== 'string' || username === '' || typeof email !== 'string' || email === '' || typeof password !== 'string' || password === ''){
    res.status(401).json({ message: 'User already exists or fields are incorrect'})
    return
  }

  const hash = await bcrypt.hash(password, 10)

  sql = 'INSERT INTO users (username, mail, pw) VALUES ($1, $2, $3)'
  result = await client.query({
    text: sql,
    values: [username, email, hash]
  })
  res.status(200).json({message: 'You are now registered.'})
})

router.post('/login', async (req, res) => {
  const username = req.body.username
  const password = req.body.password
  var sql = "SELECT * FROM users WHERE username=$1"
  var result = await client.query({
    text: sql,
    values: [username]
  })
  const user = result.rows[0]
  if(result.rowCount === 0 || req.session.userId === user.id){
    res.status(401).json({message : "Already logged in."})
    return
  }
  const hashed = user.pw

  if (await bcrypt.compare(password, hashed)){
    req.session.userId = user.id
    res.status(200).json({id : user.id, username : user.username})
    return
  }
  res.status(400).json({message : "Username doesn't exist or password is incorrect."})

})

router.get('/me', async (req, res) => {
  if (typeof req.session.userId === 'number') {
    const result = await client.query({
      text : "SELECT * FROM users WHERE id=$1",
      values : [req.session.userId]
    })
    if (result.rowCount === 0) {
      res.status(401).send({id : -1, username : ''})
      return
    }
    res.status(200).send({id : result.rows[0].id, username : result.rows[0].username})
    return
  }
  res.status(401).send({id : -1, username : ''})
})

router.get('/reviews', async (req, res) => {
  
  var sql = "SELECT * FROM reviews"
  var result = await client.query({
    text: sql
  })
  console.log(result.rows)
  res.json(result.rows)
})

router.delete('/logout', (req, res) => {
  if(typeof req.session.userId != undefined){
    req.session.userId = undefined
    res.status(200).send({message: "Logged out"})
    return
  }
  res.status(400).send({message: "No user connected"})


})

router.post('/reviews', async (req, res) => {

  var review = req.body
  sql = 'INSERT INTO reviews (artist, album, content, image, rating, date, posterid, postername) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)'
  result = await client.query({
    text: sql,
    values: [review.artist, review.album, review.content, review.image, review.rating, review.date, review.posterid, review.postername]
  })

  res.status(200).send({message:"review posted"})
  return
})

router.delete('/reviews', async (req, res) => {
  var reviewId = req.body
  sql = "DELETE FROM reviews WHERE id=$1"
  await client.query({
    text: sql,
    values: [reviewId.id]
  })

  res.status(200).send({message:"review deleted"})
  return
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
