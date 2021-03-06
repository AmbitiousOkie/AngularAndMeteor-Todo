'use strict';

angular.module('manV1App')

.config(function($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/todo');
}).run(['$rootScope', '$state', function($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    switch(error) {
      case 'AUTH_REQUIRED':
      case 'FORBIDDEN':
      case 'UNAUTHORIZED':
        $state.go('main');
        break;
    }
  });
}]);