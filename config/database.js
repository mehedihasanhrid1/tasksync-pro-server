// config/database.js
const mongoose = require('mongoose');
const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.lbqsrfq.mongodb.net`;

mongoose.connect(`${URI}/TaskSync`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('TaskSync Server Is Running');
});

module.exports = mongoose;
