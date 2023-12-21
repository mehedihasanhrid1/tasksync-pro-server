// routes.js
const express = require('express');
const router = express.Router();
const taskController = require('../task/taskcontroller');

router.post('/tasks', taskController.createTask);


module.exports = router;
