'use strict'

angular.module('manV1App', ['angular-meteor', 'ui.router', 'ngAnimate']);

angular.module('manV1App')
.controller('todoCtrl', function($scope, $meteor) {

	$scope.toggle = true;

	$scope.list = [
		{task:'Task 1', isChecked: true},
		{task:'Task 2', isChecked: false},
		{task:'Task 3', isChecked: true},
		{task:'Task 4', isChecked: false},
		{task:'Task 5', isChecked: true}
	];

	$scope.addTask = function() {
		console.log($scope.checked);
		$scope.list.push({
			task:$scope.task,
			isChecked: $scope.checked,
			createdAt: new Date()
		});
		$scope.task = '';
		$scope.checked = '';
		console.log($scope.list);
	};
});
