'use strict'

// Configures the Accounts UI
Accounts.ui.config({
	passwordSignupFields: "USERNAME_ONLY"
});


// Creates the manV1App app and passes in the packages
angular.module('manV1App', ['angular-meteor', 'ui.router', 'ngAnimate']);

// Creates the todoCtrl controller and passes in the $scope and $meteor providers
angular.module('manV1App')
.controller('todoCtrl', function($scope, $meteor) {

	// Subscribes the application to the Meteor collection
	$scope.$meteorSubscribe('tasks');

	// Sets the tasks variable to the meteor collection Tasks inside /model
	$scope.tasks = $meteor.collection( function() {
		return Tasks.find($scope.getReactively('query'), { sort: { createdAt: -1 } })
	});

	// Sets the task toggle to oon
	$scope.toggle = true;

	// Allowed Meteor Methods for the app
	$scope.addTask = function (newTask) {
    	$meteor.call('addTask', newTask);
    };
 
    $scope.deleteTask = function (task) {
    	$meteor.call('deleteTask', task._id);
	};
 
    $scope.setChecked = function (task) {
    	$meteor.call('setChecked', task._id, !task.checked);
    };

	$scope.setPrivate = function (task) {
		$meteor.call('setPrivate', task._id, ! task.private);
	};

	// Changes the queried scope when active
	$scope.$watch('hideCompleted', function() {
		if ($scope.hideCompleted)
			$scope.query = {checked: {$ne: true}};
		else
			$scope.query = {};
	});

	// Counts incomplete tasks
	$scope.incompleteCount = function () {
		return Tasks.find({ checked: {$ne: true} }).count();
	};



});
