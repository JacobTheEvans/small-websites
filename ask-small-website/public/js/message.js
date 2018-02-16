var app = angular.module("app.message",["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/message", {
    templateUrl: "/views/templates/message.tpl.html",
    controller: "q2Controller"
  })
}]);

app.controller("messageController", ["$scope", function($scope) {
  $scope.updateMDL = function() {
    componentHandler.upgradeAllRegistered();
  };
  setTimeout(function() {
    $scope.updateMDL();
  }, 1000);
}]);
