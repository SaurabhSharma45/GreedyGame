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

myApp.controller('gameScreenController', function($scope,$routeParams,$http,$sce) {
	
	$scope.gameName = $routeParams.gameName;
	$http.get('jsondata/'+$scope.gameName+'.json').success(function(data) 
				{
      $scope.game = data;
      $scope.method = function(){
    			return $sce.trustAsResourceUrl('http://www.w3schools.com/html/movie.mp4');
    
  						};
				});
	
	
});

myApp.controller('gameSelectionController', function($scope,$http) {
	
	
	 $scope.orderProp = "name";
	
	
	
	$http.get('jsondata/games.json').success(function(data) {
    $scope.games = data;
   //JSONObject obj = new JSONObject(data);
  });
  
  $scope.sortGames = function  (sortingValue) {
    $scope.orderProp = sortingValue;
  };
});

myApp.controller('landingPageController', function($scope) {
	
	
	$scope.accordionData = [{
		open:true,
		imgSrc: '/images/greedyGame1.jpg'
	},
	{
		open:false,
		imgSrc: '/images/greedyGame2.jpg'
	},
	{
		open:false,
		imgSrc: '/images/greedyGame3.png'
	}
	];
  
});
