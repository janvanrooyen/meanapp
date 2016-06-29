var appName = 'gallery';
var appGallery = angular.module(appName, ['ngAnimate', 'ui.bootstrap']); 

angular.element(document).ready(function() {
    angular.bootstrap(document, [appName]);
});

appGallery.controller('Modal', ['$scope', '$location', '$anchorScroll', '$animate', 'thumbnailGallery', '$rootScope', function ($scope, $location, $anchorScroll, $animate, thumbnailGallery, $rootScope) { //not working
	$rootScope.thumbnail = thumbnailGallery.getImage();
	$rootScope.flowers = thumbnailGallery.getImage('flowers');
	$scope.myInterval = 5000;
  	$scope.noWrapSlides = false;
  	$animate.enabled(true);
  	$scope.currentIndex = 0;
   	$scope.setIndex = function(currentIndex) {
  		if (currentIndex > $scope.thumbnail.length -1){
  			$scope.currentIndex = 0;
  		}
  		else if (currentIndex < 0){
  			$scope.currentIndex = $scope.thumbnail.length-1
  		}
  		else {
  			$scope.currentIndex = currentIndex; 
  		}
  	};
//  	$scope.include = ""; not working --> unable to get the view to populate with the selected gallery when clicked...
//	$scope.scrollTo = function(id) {
//    	console.log('scrollTo Test');
//    	$scope.include = "/gallery/" + id; //not working
//    	$rootScope.galleryselect = id;
//    	console.log($scope.include); 
//    	$location.hash('anchor');
//    	$anchorScroll();
//   	};
}]);

appGallery.controller('Scroll', ['$scope', '$location', '$anchorScroll', '$rootScope', function ($scope, $location, $anchorScroll, $rootScope) { 

}]);

appGallery.controller('Gallery' ['$scope', '$rootScope', function ($scope, $rootScope) {
  	
}]);

appGallery.factory('thumbnailGallery', function(){
	var thumbnail = [ 
			{
				title: 	'determination',
				url: '/img/portfolio/childsplay/determination.jpg',
				alt: 'determination',
			}, 
			{
				title: 	'frog',
				url: '/img/portfolio/childsplay/frog.jpg',
				alttag: 'frog',
			}, 
			{
				title: 	'another frog',
				url: '/img/portfolio/childsplay/frog2.jpg',
				alttag: 'another frog',
			},
			{
				title: 	'twohands',
				url: '/img/portfolio/childsplay/hands.jpg',
				alttag: 'two hands',
			},
			{
				title: 	'intrigue',
				url: '/img/portfolio/childsplay/intrigue.jpg',
				alttag: 'intrigue',
			},
			{
				title: 	'love of child',
				url: '/img/portfolio/childsplay/loveofchild.jpg',
				alttag: 'love of child',
			},
			{
				title: 	'peace',
				url: '/img/portfolio/childsplay/peace.jpg',
				alttag: 'peace',
			},
			{
				title: 	'umbrella',
				url: '/img/portfolio/childsplay/umbrella.jpg',
				alttag: 'umbrella',
			}   
		];

	var flowers = [ 
			{
				title: 	'golden harvest',
				url: '/img/portfolio/flowers/goldenharvest.jpg',
				alt: 'golden harvest',
			} 
		];

	var service = {};
  	service.getImage = function(){
    	var gallery = thumbnail;
    	return gallery;
  	}
  	return service;
});
	