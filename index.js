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

const express = require("express")
const server = express()

server.get("/", (req, res) => {
    res.send("<h1>hola mundo con node y express</h1>")
    res.end()
})
server.listen(5000, () => {
    console.log("Server con express")
})