App.TodoEditView = Ember.View.extend({
  didInsertElement: function() {
    this.$('input:first').focus();
  }
});
