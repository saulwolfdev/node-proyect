const express = require('express')
const morgan = require('morgan')
const server = express()
//intanciar
const routes = require("./routes")
const routesApi = require("./routes-api")
//settings
server.set('appName', 'Mi primer Servidor con node y express')
server.set('views', __dirname + '/views')
server.set('view engine', 'ejs')
//middlewares
server.use(morgan('combined'))
//calls
server.use(routes)
server.use("/api", routesApi)

server.get('*', (req, res) => {
    res.end('Pagina no encontrada')
})


server.listen(3000, () => {
    console.log('Server con express')
    console.log('Nombre de la App: ', server.get('appName'))
})