'use strict'

// Creates the manV1App app and passes in the packages
angular.module('manV1App', ['angular-meteor', 'ui.router', 'ngAnimate']);

// Creates the todoCtrl controller and passes in the $scope and $meteor providers
angular.module('manV1App')
.controller('todoCtrl', function($scope, $meteor) {

	// Sets the tasks variable to the meteor collection Tasks inside /model
	$scope.tasks = $meteor.collection( function() {
		return Tasks.find({}, { sort: { createdAt: -1 } })
	});

	// Sets the task toggle to oon
	$scope.toggle = true;

	// Submit button runs these tasks
	$scope.addTask = function (newTask, checked) {
    	$scope.tasks.push( {
      		task: newTask,
      		isChecked: checked,
      		createdAt: new Date() }


    	); 
	};
});
