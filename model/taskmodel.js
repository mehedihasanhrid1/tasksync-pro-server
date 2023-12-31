const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  deadline: String,
  priority: { type: String, enum: ['Low', 'Moderate', 'High'], default: 'Low' },
  name: String,
  email: { type: String, required: true },
  type:{ type: String, default: 'todo' },
} , { versionKey: false });

const Task = mongoose.model('Task', taskSchema , 'Tasks');

module.exports = Task;

