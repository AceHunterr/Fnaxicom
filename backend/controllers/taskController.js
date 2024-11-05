const Task = require('../models/Task');

exports.createTask = async (req, res) => {
    try {
        const { title, description, dueDate } = req.body;
        const task = new Task({ title, description, dueDate, user: req.user.userId });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.userId });
        res.status(200).json(tasks);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Server error' });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const { title, description, dueDate } = req.body;
        const task = await Task.findByIdAndUpdate(req.params.id, { title, description, dueDate }, { new: true });
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
