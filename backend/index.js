const express = require('express')

const app = express()

app.get('/', (request, response) => {
    return response.json({
        evento: "Semana Omnistack",
        aluno: "Gabriel Moura"
    })
})

app.listen(3333)