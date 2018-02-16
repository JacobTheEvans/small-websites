var app = angular.module("app",["ngRoute","app.starter","app.q1","app.q2","app.q3","app.message"]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/", {
    redirectTo: "/starter"
  })
  .otherwise({
    redirectTo: "/starter"
  });
}]);
