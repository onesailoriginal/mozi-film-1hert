const winston = require('winston');

const logger = winston.createLogger({
    level: 'info', // (info, error, warn, debug)
    format: winston.format.combine(
        winston.format.timestamp(), 
        winston.format.json() 
    ),
    transports: [
        // Konzol
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(), 
                winston.format.simple() 
            )
        }),
        // Fájl
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }), 
        new winston.transports.File({ filename: 'logs/combined.log' }) 
    ]
});

module.exports = logger;