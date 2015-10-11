//Define an angular module for our app
var myApp = angular.module('myApp', ['ngRoute','ngAnimate', 'ui.bootstrap']);

//Define Routing for app
//Uri /AddNewOrder -> template AddOrder.html and Controller AddOrderController
//Uri /ShowOrders -> template ShowOrders.html and Controller AddOrderController
myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/LandingPage', {
	templateUrl: 'views/landingPage.html',
	controller: 'landingPageController'
      }).
      when('/GameSelection', {
	templateUrl: 'views/gameSelection.html',
	controller: 'gameSelectionController'
      }).
      when('/gameScreen/:gameName', {
	templateUrl: 'views/gameScreen.html',
	controller: 'gameScreenController'
      }).
      otherwise({
	redirectTo: '/LandingPage'
      });
}]);
