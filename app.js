// src/app.js
const express = require('express');
const productRoutes = require('./routes/productRoutes');
const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);

// запускаем сервер
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
