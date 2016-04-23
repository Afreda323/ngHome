angular	
		.module('ngHomes')
		.controller('homesController', function($scope, homeFactory) {
		
				$scope.homes;
				
				$scope.priceInfo= {
					min: 0,
					max: 1000000
				}
				
				$scope.newListing = {};
				
				$scope.addHome = function(newListing) {
						newListing.image = 'default-crib';
						$scope.homes.push(newListing);
						$scope.newListing = {};
				
				}
				
				homeFactory.getHomes().success(function(data) {
					$scope.homes = data;
				}).error(function(error) {
				  alert("hello")
				});		
		
		});
	