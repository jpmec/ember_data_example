App.Router.map(function() {
  this.resource('contacts', function() {
    this.route('new');
    this.resource('contact', {path: ':contact_id'});
  });

  this.resource('todos', function() {
    this.route('new');
    this.resource('todo', {path: ':todo_id'});
  });

});

