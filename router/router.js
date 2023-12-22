// routes.js
const express = require('express');
const router = express.Router();
const taskController = require('../task/taskcontroller');

router.post('/tasks', taskController.createTask);
router.get('/tasks', taskController.getTasks);
router.delete('/tasks/:id', taskController.deleteTask);
router.put('/tasks/:id', taskController.updateTask);

module.exports = router;
