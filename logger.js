// Importa os módulos necessários
const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

// Cria uma instância de EventEmitter para lidar com eventos personalizados
const emitter = new EventEmitter();

// Define um ouvinte de eventos para o evento 'log', que recebe uma mensagem e a anexa a um arquivo de log
emitter.on('log', (message) => {
    // Usa o módulo 'fs' para adicionar a mensagem ao arquivo de log 'log.txt'
    fs.appendFile(path.join(__dirname, 'log.txt'), message, err => {
        if (err) throw err;
    });
});

// Função 'log' que emite o evento 'log' com a mensagem a ser registrada no arquivo de log
function log(message) {
    // Emite o evento 'log' com a mensagem especificada
    emitter.emit('log', message);
}

// Exporta a função 'log' para que ela possa ser usada em outros módulos
module.exports = log;
