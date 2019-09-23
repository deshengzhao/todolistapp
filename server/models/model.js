var db = require("../db/db.js");

//Object Contructor
var Todo = function(todo) {
	this.title = todo.title;
	this.completed = todo.completed;
};

//Models methods
Todo.createTodo = function(todo, result) {
	db.query("INSERT INTO todolist (title,completed) VALUES ($1, $2) RETURNING *", [todo.title, todo.completed], (error, response) => {
		if(error) {
			console.log("Error: ", error);
			result(error,null);
		}else {
			result(null, response.rows[0]);
		}
	});
};

Todo.getTodos = function (result) {
	db.query("SELECT * FROM todolist", function(error, response) {
		if(error) {
			console.log("Error: ", error);
			result(error,null);
		}else {
			result(null, response.rows);
		}
	});
};

Todo.deleteTodoByID = function(id, result) {
	db.query("DELETE FROM todolist WHERE id = $1", [id], (error, response) => {
		if(error) {
			console.log("Error: ", error);
			result(error,null);
		}else {
			result(null, response);
		}
	});
};

Todo.updateTodoByID = function(id, todo, result) {
	db.query("UPDATE todolist SET title=$1, completed=$2 WHERE id=$3", [todo.title, todo.completed, id], (error, response) => {
		if(error) {
			console.log("Error: ", error);
			result(error,null);
		}else {
			result(null, response.rows[0]);
		}
	});
};

Todo.deleteAllCompletedTodo = function(result) {
	db.query("DELETE FROM todolist WHERE completed='true'", function(error, response) {
		if(error) {
			console.log("Error: ", error);
			result(error,null);
		}else {
			result(null, response);
		}
	});
};

module.exports = Todo;
