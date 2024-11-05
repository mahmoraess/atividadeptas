const express = require('express');
const logger = require('./middlewares/logger');
const itemsRouter = require('./routes/items');

const app = express();
app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
    res.send('Bem-vindo!');
});

app.use('/items', itemsRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
