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

	// Sets the tasks variable to the meteor collection Tasks inside /model
	$scope.tasks = $meteor.collection( function() {
		return Tasks.find($scope.getReactively('query'), { sort: { createdAt: -1 } })
	});

	// Sets the task toggle to oon
	$scope.toggle = true;

	// Submit button runs these tasks
	$scope.addTask = function (newTask) {
    	$scope.tasks.push( {
      		text: newTask,
      		createdAt: new Date(),					// current time
      		owner: Meteor.userId(),					// _id of the logged in user
      		username: Meteor.user().username }		// username of logged in user
    	); 
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
