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


async function getTasks(req, res) {
  try {
    const { userEmail, type } = req.query;
    const tasks = await Task.find({ email: userEmail, type });
    res.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deleteTask(req, res) {
  try {
    const taskId = req.params.id;

    if (!taskId) {
      return res.status(400).json({ message: "Task ID is required for deletion." });
    }

    const result = await Task.findByIdAndDelete(taskId);

    if (!result) {
      return res.status(404).json({ message: "Task not found." });
    }

    res.json({ message: "Task deleted successfully." });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateTask(req, res) {
  try {
    const taskId = req.params.id; 
    const task = req.body;

    const result = await Task.findByIdAndUpdate(taskId, task, { new: true });

    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  createTask,
  getTasks,
  deleteTask,
  updateTask,
};
