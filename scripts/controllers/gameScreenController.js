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
