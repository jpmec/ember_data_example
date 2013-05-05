App.TodoInListView = Em.View.extend({
  templateName: 'todo_in_list',
  tagName: 'li',
  classNameBindings: 'isActive:active',

  isActive: function() {
    return this.get('content.id') === this.get('controller.activeTodoId');
  }.property('controller.activeTodoId')
});
