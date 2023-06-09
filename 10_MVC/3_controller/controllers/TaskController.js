import Task from '../models/Task.js';

module.exports = class TaskController {

    static createTask(req, res) {
        res.render('tasks/create');
    }
}