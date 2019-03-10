// const math = require("./math.js")

// const fs = require("fs")
// const http = require("http")
// console.log(math)
// console.log("------------")
// fs.writeFile("./texto.txt", "creando un texto con NODE", function (err) {
//     if (err) {
//         console.log(err)
//     } else {
//         fs.readFile("./texto.txt", function (err, data) {
//             if (err) {
//                 console.log(err)
//             } else {
//                 console.log("texto leido " + data.toString())
//             }
//         })
//     }
// })
// console.log("------------")

// const handleServer = function (req, res) {
//     res.writeHead(200, {
//         "Content-type": "text/html"
//     })
//     res.write("<h1>HOLA SAUL TE SALUDO DESDE NODE</h1>")
//     res.end()
// }
// const server = http.createServer(handleServer)
// server.listen(3000, function () {
//     console.log("Server on port 3000")
// })

const express = require('express')
const morgan = require('morgan')
const server = express()

server.use(morgan('combined'))
server.set('appName', 'Mi primer Servidor con node y express')

server.set('views', __dirname + './views')
server.set('view engine', 'ejs')

// server.use((req, res, next) => {
//     console.log("request url :" + req.url)
//     next()
// })
// server.use((req, res, next) => {
//     console.log("pasaste por esta funcion")
//     next()
// })
// rutas
server.get('/', (req, res) => {
  //   res.send('<h1>hola mundo con node y express</h1>')
  //   res.end()
  res.render('index.ejs')
})
server.get('/login', (req, res) => {
  res.send('<h1>Login</h1>')
  res.end('login')
})
server.get('*', (req, res) => {
  res.end('Pagina no encontrada')
})

server.listen(3000, () => {
  console.log('Server con express')
  console.log('Nombre de la App: ', server.get('appName'))
})
