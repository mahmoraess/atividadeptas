const logger = (req, res, next) => {
    console.log(`URL: ${req.url} | Método: ${req.method} | Data/Hora: ${new Date().toISOString()}`);
    next();
};

module.exports = logger;
