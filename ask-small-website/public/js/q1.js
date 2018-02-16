var app = angular.module("app.q1",["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/q1", {
    templateUrl: "/views/templates/q1.tpl.html",
    controller: "q1Controller"
  })
}]);

app.controller("q1Controller", ["$scope", function($scope) {
  $scope.fail = false;
  $scope.toggleFail = function() {
    $scope.fail = ! $scope.fail;
  };
  $scope.suc = function() {
    window.location.href = "/#/q2";
  };
  $scope.updateMDL = function() {
    componentHandler.upgradeAllRegistered();
  };
  setTimeout(function() {
    $scope.updateMDL();
  }, 1000);
}]);
