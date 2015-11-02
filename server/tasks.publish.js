'use strict'

Meteor.publish('tasks', function(options, searchString) {
  var where = {
    'name': {
      '$regex': '.*' + (searchString || '') + '.*',
      '$options': 'i'
    }
  };
  
  return Tasks.find(where, options);
});
