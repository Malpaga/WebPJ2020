const { request, text } = require('express')
const express = require('express')
const router = express.Router()
const articles = require('../data/articles.js')
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

/**
 * Dans ce fichier, vous trouverez des exemples de requêtes GET, POST, PUT et DELETE
 * Ces requêtes concernent l'ajout ou la suppression d'articles sur le site
 * Votre objectif est, en apprenant des exemples de ce fichier, de créer l'API pour le panier de l'utilisateur
 *
 * Notre site ne contient pas d'authentification, ce qui n'est pas DU TOUT recommandé.
 * De même, les informations sont réinitialisées à chaque redémarrage du serveur, car nous n'avons pas de système de base de données pour faire persister les données
 */

/**
 * Notre mécanisme de sauvegarde des paniers des utilisateurs sera de simplement leur attribuer un panier grâce à req.session, sans authentification particulière
 */
router.use((req, res, next) => {
  // l'utilisateur n'est pas reconnu, lui attribuer un panier dans req.session
  if (typeof req.session.panier === 'undefined') {
    req.session.panier = new Panier()
  }
  next()
})

/*
 * Cette route doit retourner le panier de l'utilisateur, grâce à req.session
 */
router.get('/panier', (req, res) => {
  if (typeof req.session.panier === 'undefined') {
    res.status(400).json({ message: "No cart detected"})
  }else{
    res.status(200).json(req.session.panier)
  }
  
})

/*
 * Cette route doit ajouter un article au panier, puis retourner le panier modifié à l'utilisateur
 * Le body doit contenir l'id de l'article, ainsi que la quantité voulue
 */
router.post('/panier', (req, res) => {
  if (typeof req.session.panier === 'undefined') {
    res.status(400).json({message : 'bad request, cart not created'})
    return
  }
  const newId = req.body.id
  const newQuantity = req.body.quantity
  if (isNaN(newId) || newId < 1 || newId > articles.length || 
  isNaN(newQuantity) || newQuantity < 1) {
    res.status(400).json({message : 'bad request, invalid values'})
    return
  }
  for (let i = 0; i < req.session.panier.articles.length; i++) {  
    if (req.session.panier.articles[i].id == newId) {
      res.status(400).json({message : 'Article already in cart'})
      return
    }
  }
  req.session.panier.articles.push({id : newId, quantity : newQuantity})
  req.session.panier.updatedAt = new Date()
  res.status(200).json({id: newId, quantity: newQuantity})
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

/*
 * Cette route doit permettre de confirmer un panier, en recevant le nom et prénom de l'utilisateur
 * Le panier est ensuite supprimé grâce à req.session.destroy()
 */
router.post('/panier/pay', (req, res) => {
  if (typeof req.session.userId !== 'number') {
    res.status(400).send({message: 'You cannot proceed to checkout if you are not logged in.'})
    return
  }
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  req.session.destroy()
  res.status(200).json({message : "Thank you for your purchase, " + firstName + " " + lastName})
})

/*
 * Cette route doit permettre de changer la quantité d'un article dans le panier
 * Le body doit contenir la quantité voulue
 */
router.put('/panier/:articleId', (req, res) => {
  if (typeof req.session.panier === 'undefined') {
    res.status(400).json({message : 'bad request'})
  }
  const editQuantity = req.body.quantity
  const editId = parseInt(req.params.articleId, 10)
  if (isNaN(editId) || editId < 1 || 
  editId > articles.length || isNaN(editQuantity) || editQuantity < 1) {
    res.status(400).json({message : 'bad request, invalid values'})
    return
  }
  for (let i = 0; i < req.session.panier.articles.length; i++) {
    if (req.session.panier.articles[i].id == editId) {
      req.session.panier.articles[i].quantity = editQuantity
      res.status(200).json({message: 'Successfully updated article quantity'})
      return
    }
  }
  res.status(400).json({message : 'bad request, article not in cart'})
})

/*
 * Cette route doit supprimer un article dans le panier
 */
router.delete('/panier/:articleId', (req, res) => {
  if (typeof req.session.panier === 'undefined') {
    res.status(400).json({message : 'bad request, no cart'})
    return
  }
  const index = req.session.panier.articles.findIndex(a => a.id === parseInt(req.params.articleId, 10))
  
  if (index === -1 ) {
    res.status(400).json({message : 'bad request, article not in cart'})
    return
  }
  req.session.panier.articles.splice(index, 1)
  res.status(200).json({message : 'successful'})
})


/**
 * Cette route envoie l'intégralité des articles du site
 */
router.get('/reviews', async (req, res) => {
  
  var sql = "SELECT * FROM reviews"
  var result = await client.query({
    text: sql
  })
  console.log(result)
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

/**
 * Cette route crée un article.
 * WARNING: dans un vrai site, elle devrait être authentifiée et valider que l'utilisateur est bien autorisé
 * NOTE: lorsqu'on redémarre le serveur, l'article ajouté disparait
 *   Si on voulait persister l'information, on utiliserait une BDD (mysql, etc.)
 */
router.post('/article', (req, res) => {
  const name = req.body.name
  const description = req.body.description
  const image = req.body.image
  const price = parseInt(req.body.price)

  // vérification de la validité des données d'entrée
  if (typeof name !== 'string' || name === '' ||
      typeof description !== 'string' || description === '' ||
      typeof image !== 'string' || image === '' ||
      isNaN(price) || price <= 0) {
    res.status(400).json({ message: 'bad request' })
    return
  }

  const article = {
    id: articles.length + 1,
    name: name,
    description: description,
    image: image,
    price: price
  }
  articles.push(article)
  // on envoie l'article ajouté à l'utilisateur
  res.json(article)
})

/**
 * Cette fonction fait en sorte de valider que l'article demandé par l'utilisateur
 * est valide. Elle est appliquée aux routes:
 * - GET /article/:articleId
 * - PUT /article/:articleId
 * - DELETE /article/:articleId
 * Comme ces trois routes ont un comportement similaire, on regroupe leurs fonctionnalités communes dans un middleware
 */
function parseArticle (req, res, next) {
  const articleId = parseInt(req.params.articleId)

  // si articleId n'est pas un nombre (NaN = Not A Number), alors on s'arrête
  if (isNaN(articleId)) {
    res.status(400).json({ message: 'articleId should be a number' })
    return
  }
  // on affecte req.articleId pour l'exploiter dans toutes les routes qui en ont besoin
  req.articleId = articleId

  const article = articles.find(a => a.id === req.articleId)
  if (!article) {
    res.status(404).json({ message: 'article ' + articleId + ' does not exist' })
    return
  }
  // on affecte req.article pour l'exploiter dans toutes les routes qui en ont besoin
  req.article = article
  next()
}

router.route('/article/:articleId')
  /**
   * Cette route envoie un article particulier
   */
  .get(parseArticle, (req, res) => {
    // req.article existe grâce au middleware parseArticle
    res.json(req.article)
  })

  /**
   * Cette route modifie un article.
   * WARNING: dans un vrai site, elle devrait être authentifiée et valider que l'utilisateur est bien autorisé
   * NOTE: lorsqu'on redémarre le serveur, la modification de l'article disparait
   *   Si on voulait persister l'information, on utiliserait une BDD (mysql, etc.)
   */
  .put(parseArticle, (req, res) => {
    const name = req.body.name
    const description = req.body.description
    const image = req.body.image
    const price = parseInt(req.body.price)

    req.article.name = name
    req.article.description = description
    req.article.image = image
    req.article.price = price
    res.send()
  })

  .delete(parseArticle, (req, res) => {
    const index = articles.findIndex(a => a.id === req.articleId)

    articles.splice(index, 1) // remove the article from the array
    res.send()
  })

module.exports = router
