angular
	.module('ngHomes')
	.factory('homeFactory', function($http) {
				
				
				function getHomes() {
					return $http.get('../data.json');
				};
				
				return {
					getHomes: getHomes
				}
	
	});