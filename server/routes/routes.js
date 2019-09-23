module.exports = function(app) {
  var todoController = require('../controllers/controller');

  //api routes
  app.route('/api/todos').post(todoController.createTodo).get(todoController.getTodos).delete(todoController.deleteAllCompletedTodo);
  app.route('/api/todos/:id').put(todoController.updateTodoByID).delete(todoController.deleteTodoByID);
  app.route('/api').get(todoController.testAPIBackend);
};