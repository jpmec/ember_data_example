App.TodoEditController = Em.ObjectController.extend({
  needs: ['todo'],

  startEditing: function() {
    // add the todo to a local transaction
    var todo = this.get('content');
    var transaction = todo.get('store').transaction();
    transaction.add(todo);
    this.transaction = transaction;
  },

  stopEditing: function() {
    // rollback the local transaction if it hasn't already been cleared
    var transaction = this.transaction;
    if (transaction) {
      transaction.rollback();
      this.transaction = undefined;
    }
  },

  save: function() {
    this.transaction.commit();
    this.transaction = undefined;
    this.get('controllers.todo').stopEditing();
  },

  cancel: function() {
    this.get('controllers.todo').stopEditing();
  }
});
