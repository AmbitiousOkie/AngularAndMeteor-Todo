// Creates a Mongo collection on the server and client called Tasks
Tasks = new Mongo.Collection('tasks');

// Things.allow({
//   insert: function(userId, task) {
//     task.createdAt = new Date();
//     task.name_sort = task.name.toLowerCase();
//     return true;
//   },
//   update: function(userId, task, fields, modifier) {
//     task.createdAt = new Date();
//     task.name_sort = task.name.toLowerCase();
//     return true;
//   },
//   remove: function(userId, task) {
//     return true;
//   }
// });