var app = angular.module("main.home",["ngRoute","main.char"]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/home", {
    templateUrl: "/views/templates/home.tpl.html",
    controller: "homeController"
  })
}]);

app.controller("homeController", ["$scope", "$timeout", function($scope,$timeout) {
  jQuery(document).ready(function() {
      jQuery("#ellipse div.pupil").jqEye({shape: "ellipse", width:26, height:6});
  })
  $scope.$on('$viewContentLoaded', () => {
    $timeout(() => {
      componentHandler.upgradeAllRegistered();
    })
  });
}]);
