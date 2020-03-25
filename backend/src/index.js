const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())

app.use(express.json()) //antes de todas as requisições o express vai transformar todo o json em javascript

app.use(routes)

app.listen(3333)
    /*
        Métodos HTTP

        GET: buscar/listar alguma informação do back-end

        POST: criar uma nova informação no back-end

        PUT: alterar uma informação no back-end

        DELETE: apagar uma informação no back-end
    */

/**
 * Tipos de parâmetros

Query params: parâmetros nomeados enviados na rota após '?' geralmente servem para filtros, paginação. Pode concatenar os parâmetros

Route params: parâmetros utilizados para identificar recursos

Request Body: corpo da requisição utilizado para criar ou alterar recursos

 */

/**
 * Instalação do SQLite
 * 
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*')
 * 
 */