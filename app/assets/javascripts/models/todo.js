App.Todo  = DS.Model.extend({
  who: DS.attr('string'),
  what: DS.attr('string'),
  when: DS.attr('string'),
  where: DS.attr('string'),
  how: DS.attr('string'),
  notes:  DS.attr('string'),
  status: DS.attr('string')
});
