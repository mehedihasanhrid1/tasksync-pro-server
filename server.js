const express = require('express');
const cors = require('cors'); 
require('dotenv').config();
const app = express();
const mongoose = require('./config/database');
const routes = require('./router/router');

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('The server is running.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
