angular.module('site.home').controller('homeCtrl', [
	'$scope',
	'$location',
	function(
		scope,
		location

	){
		scope.goToAboutPage = function(){
			location.path('/about');
		}
	}
])