var app = angular.module("app.q3",["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/q3", {
    templateUrl: "/views/templates/q3.tpl.html",
    controller: "q3Controller"
  })
}]);

app.controller("q3Controller", ["$scope", function($scope) {
  $scope.fail = false;
  $scope.toggleFail = function() {
    $scope.fail = ! $scope.fail;
  };
  $scope.suc = function() {
    window.location.href = "/#/message";
  };
  $scope.updateMDL = function() {
    componentHandler.upgradeAllRegistered();
  };
  setTimeout(function() {
    $scope.updateMDL();
  }, 1000);
}]);
