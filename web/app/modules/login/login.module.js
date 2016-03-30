'use strict';

var login = angular.module('login', []);

login.config(['$stateProvider', function($stateProvider) {
	$stateProvider.state('login',
	{
		url: '/login',
    	templateUrl: 'app/modules/login/partials/login.html'
	})
	.state('login.list',
	{
		url: '/login',
    	templateUrl: 'app/modules/login/partials/login.html',
    	controller: 'ListController'
	});
}]);

login.controller('ListController', ['$scope', 'Restangular', function($scope, Restangular) {


	$scope.delete = function(amap) {
		amap.remove().then(function(){
			var idAmap = $scope.amaps.indexOf(amap);
			$scope.amaps.splice(idAmap,1);
		});
	};


}]);