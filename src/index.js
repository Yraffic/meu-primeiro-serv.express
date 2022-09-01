const express = require('express')


const app = express();

app.get('/', (requisicao, resposta) => {
    resposta.send("Olá, esse é meu primeiro servidor com o express... segundo modulo de progamação na cubos academy")
});

app.listen(3000)