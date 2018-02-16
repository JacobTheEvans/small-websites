var app = angular.module("app.q2",["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/q2", {
    templateUrl: "/views/templates/q2.tpl.html",
    controller: "q2Controller"
  })
}]);

app.controller("q2Controller", ["$scope", function($scope) {
  $scope.fail = false;
  $scope.toggleFail = function() {
    $scope.fail = ! $scope.fail;
  };
  $scope.suc = function() {
    window.location.href = "/#/q3";
  };
  $scope.updateMDL = function() {
    componentHandler.upgradeAllRegistered();
  };
  setTimeout(function() {
    $scope.updateMDL();
  }, 1000);
}]);
