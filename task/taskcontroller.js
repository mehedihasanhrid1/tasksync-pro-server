const Task = require('../model/taskmodel');


async function createTask(req, res) {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    deadline: req.body.deadline,
    priority: req.body.priority,
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}


module.exports = {
  createTask,
};
