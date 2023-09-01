const os = require('os') //importa o módulo os, que é imbutido
const log = require('./logger')
const { stat } = require('fs')

setInterval(() => {
    const{ freemem, totalmem } = os //extrai de dentro do os freemem e totalmem

    const total = parseInt(totalmem() / 1024 / 1024) //atribui à variavel total o valor calculado para MB de totalmem
    const mem = parseInt(freemem() / 1024 / 1024) //atribui à variavel mem o valor calculado para MB de freemem
    const percents = parseInt((mem/total) * 100) // calcula as variáveis anteriores e tira um percentual da memória utilizada
    
    const stats = {
        free: `${mem} MB`,
        total: `${total} MB`,
        usege: `${percents} %`
    } // cria uma variavel stats contendo o valor das variaveis anteriores atribuídas a outras e formatadas

    console.clear()
    console.log("===== PC STATS =====")
    console.table(stats) // imprime a variável

    log(`${JSON.stringify(stats)}\n`)

}, 1000)