App.TodoRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    // reset editing state
    // note: this is necessary here because `deactivate` won't be called when transitioning
    //       from one ContactRoute directly into another
    if (controller.get('isEditing')) {
      controller.stopEditing();
    }

    // highlight this contact as active
    this.controllerFor('todos').set('activeTodoId', model.get('id'));
  },

  deactivate: function() {
    var controller = this.controllerFor('todo');

    // reset editing state
    if (controller.get('isEditing')) {
      controller.stopEditing();
    }

    // un-highlight the active contact (perhaps temporarily)
    this.controllerFor('todos').set('activeTodoId', null);
  }
});
