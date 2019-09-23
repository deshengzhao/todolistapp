var Todo = require('../models/model.js');

exports.testAPIBackend = function(req, res) {
	res.json({ message: "API Backend available" });
}

exports.createTodo = function(req, res) {
	var new_todo = new Todo(req.body);

	Todo.createTodo(new_todo, function(error, result) {
		if(error)
			res.send(error);
		res.json(result);
	})
};

exports.getTodos = function(req, res) {
	Todo.getTodos(function(error, result) {
		if(error)
			res.send(error);
		res.json(result);
	})
};

exports.deleteTodoByID = function(req, res) {
	var todoID = req.params.id
	Todo.deleteTodoByID(todoID, function(error, result) {
		if(error)
			res.send(error);
		res.json(result);
	})
};

exports.updateTodoByID = function(req, res) {
	var todoID = req.params.id
	var new_todo = new Todo(req.body);

	Todo.updateTodoByID(todoID, new_todo, function(error, result) {
		if(error)
			res.send(error);
		res.json(result);
	})
};

exports.deleteAllCompletedTodo = function(req, res) {
	Todo.deleteAllCompletedTodo(function(error, result) {
		if(error)
			res.send(error);
		res.json(result);
	})
};
