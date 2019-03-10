//routes
const express = require('express')
const router = express.Router()

// server.get('/', (req, res) => {
//     res.render('index.ejs')
// })
// server.get('/login', (req, res) => {
//     res.render("login.ejs")
// })
// server.get('*', (req, res) => {
//     res.end('Pagina no encontrada')
// })
router.get('/', (req, res) => {
    res.render('index.ejs')
})
router.get('/login', (req, res) => {
    res.render("login.ejs")
})

module.exports = router