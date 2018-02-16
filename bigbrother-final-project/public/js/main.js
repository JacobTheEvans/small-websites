var app = angular.module("main",["ngRoute","main.home","main.char","main.sum","main.extra"]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/", {
    redirectTo: "/home"
  })
  .otherwise({
    redirectTo: "/home"
  });
}]);
