require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Пример маршрута
app.get('/', (req, res) => {
  res.send('Actions History Service is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
