const Task = require('../model/taskmodel');

async function createTask(req, res) {
  try {
    const data = req.body;
    const newTask = new Task(data);
    const result = await newTask.save();
    res.send(result);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  createTask,
};
