var app = angular.module("app.starter",["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/starter", {
    templateUrl: "/views/templates/starter.tpl.html",
    controller: "starterController"
  })
}]);

app.controller("starterController", ["$scope", function($scope) {
  $scope.start = function() {
    window.location.href = "/#/q1";
  };
  $scope.updateMDL = function() {
    componentHandler.upgradeAllRegistered();
  };
  setTimeout(function() {
    $scope.updateMDL();
  }, 1000);
}]);
