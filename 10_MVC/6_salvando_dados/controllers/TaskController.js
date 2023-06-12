import Task from '../models/Task.js';

export default class TaskController {

    static createTask(req, res) {
        res.render('tasks/create');
    }

    static async createTaskSave(req, res) {
        const task = { title: req.body.title, description: req.body.description, done: false }

        //validações
        //processar dados

        await Task.create(task);
        res.redirect('/tasks');
    }



    static showTask(req, res) {
        res.render('tasks/all');
    }
}