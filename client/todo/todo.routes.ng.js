'use strict'

angular.module('manV1App')
.config(function($stateProvider) {
  $stateProvider
  .state('todo', {
    url: '/todo',
    templateUrl: 'client/todo/todo.view.ng.html',
    controller: 'todoCtrl'
  });
});