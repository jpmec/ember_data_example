App.TodoController = Em.ObjectController.extend({
  isEditing: false,
  needs: ['todoEdit'],

  startEditing: function() {
    var todoEditController = this.get('controllers.todoEdit');
    todoEditController.set('content', this.get('content'));
    todoEditController.startEditing();
    this.set('isEditing', true);
  },

  stopEditing: function() {
    var todoEditController = this.get('controllers.todoEdit');
    todoEditController.stopEditing();
    this.set('isEditing', false);
  },

  destroyRecord: function() {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      this.get('content').deleteRecord();
      this.get('store').commit();

      // return to the main todos listing page
      this.get('target.router').transitionTo('todos.index');
    }
  }
});
