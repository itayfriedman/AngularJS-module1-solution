(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function($scope) {
	$scope.lunchMenu = "";
	$scope.message = "";
	$scope.check =function () {
		if ($scope.lunchMenu === "") {
			$scope.message	= "Please enter data first";
		} else {
			$scope.message = $scope.lunchMenu;
			numberDishes($scope.lunchMenu);
		}
	};

	function numberDishes (string) {
		
		var dishes = string.split(",");
		var numberDishes = 0;
		for (var i = 0; i < dishes.length; i++) {
			if (dishes[i].trim() != "") {
				numberDishes ++;
			}
		}
		if (numberDishes <= 3) {
			$scope.message = "Enjoy!";
		}else {
			$scope.message = "Too much!";
		}
	};

});


})();