(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.list = "list comma separated dishes you usually have for lunch";

  $scope.stateOfBeing = "hungry";

  $scope.calculateItems = function () {
    var message;
    var listLength = $scope.list.split(', ').length;
    console.log(listLength);
if (listLength == 0) {
  message="Please enter data first";
}
    else if (listLength < 4) {

    } else {

    }

    $scope.message = message;
  };


  $scope.sayMessage = function () {
    return "Yaakov likes to eat healthy snacks at night!";
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

})();
