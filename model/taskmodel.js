const mongoose = require('../config/database');

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  deadline: Date,
  priority: String,
});

const Task = mongoose.model('Task', taskSchema, 'Tasks');

module.exports = Task;
