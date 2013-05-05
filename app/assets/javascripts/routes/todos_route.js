App.TodosRoute = Ember.Route.extend({
  model: function() {
    return App.Todo.find();
  }
});
