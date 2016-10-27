(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.list = "list comma separated dishes you usually have for lunch";
  $scope.style = "";
  $scope.border = "";
  $scope.showMessage = function() {
  var messages = ["Please enter data first!", "Enjoy !", "Too much !"];
  var styles = ["empty", "full"];
  var borders = ["emptyBorder", "fullBorder"];
console.log($scope.list);
  var trimmedList=$scope.list.replace(/,[\s]*,/g, ", "); // Remove "empty" items
console.log(trimmedList);
  if(trimmedList == "") {
  $scope.message=messages[0];
  $scope.style = styles[0];
  $scope.border = borders[0];
  return;
  }
  $scope.style = styles[1];
  $scope.border = borders[1];
  trimmedList.split(', ').length<4?$scope.message=messages[1]:$scope.message=messages[2];
}
}

})();
