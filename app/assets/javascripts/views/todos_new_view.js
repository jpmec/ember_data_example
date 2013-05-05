App.TodosNewView = Ember.View.extend({
  didInsertElement: function() {
    this.$('input:first').focus();
  }
});
