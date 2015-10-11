myApp.controller('landingPageController', function($scope) {
	
	
	$scope.accordionData = [{
		open:true,
		imgSrc: '/images/dollarsign.png'
	},
	{
		open:false,
		imgSrc: '/images/logo.png'
	},
	{
		open:false,
		imgSrc: '/images/spinner.gif'
	}
	];
  
});
