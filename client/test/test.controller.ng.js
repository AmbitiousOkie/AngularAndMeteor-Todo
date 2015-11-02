'use strict'

angular.module('manV1App', ['angular-meteor', 'ui.router', 'ngAnimate']);

angular.module('manV1App')
.controller('TestCtrl', function($scope, $meteor) {

	$scope.toggle = false;

	$scope.list = [
		{name:'Scott', age: 29, img:'https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg'},
		{name:'Ross', age: 31, img:'https://s3.amazonaws.com/uifaces/faces/twitter/mantia/128.jpg'},
		{name:'Ben', age: 32, img:'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'},
		{name:'Courtney', age: 29, img:'https://s3.amazonaws.com/uifaces/faces/twitter/sauro/128.jpg'},
		{name: 'Iris', age: 28, img:"https://s3.amazonaws.com/uifaces/faces/twitter/pixeliris/128.jpg"}
	];

	$scope.addPerson = function() {
		$scope.list.push({name:$scope.name, age: $scope.age, img: $scope.img});
		$scope.name = '';
		$scope.age = '';
		$scope.img = '';
	};
});
