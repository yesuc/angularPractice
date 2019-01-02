var app = angular.module('myApp',["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl : "./home.html"
    })
    .when("/resume", {
        templateUrl : "./resume.html"
    })
    .when("/contact", {
        templateUrl : "./contact.html"
    });
});
