(function() {
	'use strict';
	
	
	
	angular.module('app', []).controller('AppController', ['$scope', function($scope){
		$scope.username = 'Leonard';
		
		$scope.userArray = [
			['BB', 'King'],
			['Ray', 'Charles'],
			['Bobi', 'Bobility']
		]
		
		$scope.userObject = [
		{firstName: 'BB', lastName: 'King'},
		{firstName: 'Json', lastName: 'Valin'},
		{firstName: 'SIFI', lastName: 'LLLLLLL'},
		]
		
		$scope.changeUsername = function(username) {
			$scope.username = username;
		}
		
		$scope.randomUserModel = 'random user';
		
		$scope.randomUserModelAlert = function() {
			alert($scope.randomUserModel);
		};
		
		$scope.textClass = '';
		
		$scope.changeTextClass = function(name) {
			$scope.textClass = name;
		}
		
		$scope.bool = true;
		
		$scope.changeBool = function() {
			$scope.bool = !$scope.bool ;
		}		

		
		
		
	}]);
})();