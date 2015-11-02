'use strict'

angular.module('manV1App')
.config(function($stateProvider) {
  $stateProvider
  .state('test', {
    url: '/test',
    templateUrl: 'client/test/test.view.ng.html',
    controller: 'TestCtrl'
  });
});