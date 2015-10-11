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
