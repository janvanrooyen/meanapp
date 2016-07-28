var appName = 'gallery';
var appGallery = angular.module(appName, ['ngAnimate', 'ui.bootstrap']); 

angular.element(document).ready(function() {
    angular.bootstrap(document, [appName]);
});

appGallery.controller('Modal', ['$scope', '$location', '$anchorScroll', '$animate', 'thumbnailGallery', '$rootScope', function ($scope, $location, $anchorScroll, $animate, thumbnailGallery, $rootScope) { //not working
	$rootScope.childsplay = thumbnailGallery.getImage('childsplay');
	var childsplay = $rootScope.childsplay.length;
	$rootScope.flowers = thumbnailGallery.getImage('flowers');
	var flowers = $rootScope.flowers.length;
	$rootScope.lines = thumbnailGallery.getImage('lines');
	var lines = $rootScope.lines.length;
	$rootScope.nature = thumbnailGallery.getImage('nature');
	var nature = $rootScope.nature.length;
	$rootScope.zoo = thumbnailGallery.getImage('zoo');
	var zoo = $rootScope.zoo.length;
	$rootScope.randoms = thumbnailGallery.getImage('randoms');
	var randoms = $rootScope.randoms.length;
	
	$scope.myInterval = 5000;
  	$scope.noWrapSlides = false;
  	$animate.enabled(true);
  	$scope.currentIndex = 0;
   	$scope.setIndex = function(currentIndex, gallery) {
	//	var gallery = gallery
		switch (gallery){
			case 'childsplay': var length = $rootScope.childsplay.length;
				console.log(gallery + length);
				break;
			case 'flowers': var length = $rootScope.flowers.length;
				console.log(gallery + length);
				break;
			case 'lines': var length = $rootScope.lines.length;
				console.log(gallery + length);
				break;
			case 'nature': var length = $rootScope.nature.length;
				console.log(gallery + length);
				break;
			case 'zoo': var length = $rootScope.zoo.length;
				console.log(gallery + length);
				break;
			case 'randoms': var length = $rootScope.randoms.length;
				console.log(gallery + length);
				break;		
		}

  		if (currentIndex > length -1){
  			$scope.currentIndex = 0;
  		}
  		else if (currentIndex < 0){
  			if (length > 1) {
  				$scope.currentIndex = length - 1; 
  				console.log(currentIndex);
  			}
  			else {
  				currentIndex = 0;
  			} 
  		}
  		else {
  			$scope.currentIndex = currentIndex; 
  		}
  	};

}]);

appGallery.controller('Scroll', ['$scope', '$location', '$anchorScroll', '$rootScope', function ($scope, $location, $anchorScroll, $rootScope) { 

}]);

appGallery.controller('Gallery' ['$scope', '$rootScope', function ($scope, $rootScope) {
  	
}]);

appGallery.factory('thumbnailGallery', function(){
	var childsplay = [ 
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

	var randoms = [ 
			{
				url: '/img/portfolio/randoms/ussmidway.jpg',
			},
			{
				url: '/img/portfolio/randoms/ussmidway2.jpg',
			} 
		];

	var lines = [ 
			{
				title: 	'bridge',
				url: '/img/portfolio/lines/bridge_invertcolors.jpg',
				alt: 'bridge',
			},
			{
				title: 	'bridge silhouete',
				url: '/img/portfolio/lines/bridge_silhouete.jpg',
				alt: 'bridge silhouete',
			},
			{
				title: 	'building',
				url: '/img/portfolio/lines/building.jpg',
				alt: 'building',
			},
			{
				title: 	'departure',
				url: '/img/portfolio/lines/departure.jpg',
				alt: 'departure',
			},
			{
				title: 	'walkway',
				url: '/img/portfolio/lines/img_9568.jpg',
				alt: 'walkway',
			},
			{
				title: 	'pillars',
				url: '/img/portfolio/lines/img_9589.jpg',
				alt: 'pillars',
			},
			{
				title: 	'rails',
				url: '/img/portfolio/lines/rails.jpg',
				alt: 'building',
			}            
		];

		var nature = [ 
			{
				url: '/img/portfolio/nature/14erbw.jpg',
			},
			{
				url: '/img/portfolio/nature/afterthestorm3.jpg',
			}, 
			{
				url: '/img/portfolio/nature/afterthestorm.jpg',
			},
			{
				url: '/img/portfolio/nature/afterthestorm2.jpg',
			},
			{
				url: '/img/portfolio/nature/cactustrail.jpg',
			},
			{
				url: '/img/portfolio/nature/cactusman.jpg',
			},
			{
				url: '/img/portfolio/nature/houseoftherisingsun.jpg',
			},
			{
				url: '/img/portfolio/nature/img_9676.jpg',
			},
			{
				url: '/img/portfolio/nature/lostintheredwoods.jpg',
			},
			{
				url: '/img/portfolio/nature/lovetheview.jpg',
			},
			{
				url: '/img/portfolio/nature/mojavelove.jpg',
			},
			{
				url: '/img/portfolio/nature/mojavesaturate.jpg',
			},
			{
				url: '/img/portfolio/nature/mountainlove.jpg',
			},
			{
				url: '/img/portfolio/nature/pricklyview.jpg',
			},
			{
				url: '/img/portfolio/nature/softlight.jpg',
			},
			{
				url: '/img/portfolio/nature/sunset.jpg',
			},
			{
				url: '/img/portfolio/nature/sunset2.jpg',
			},
			{
				url: '/img/portfolio/nature/topofworld.jpg',
			},
			{
				url: '/img/portfolio/nature/treeandcloudsbw.jpg',
			},
			{
				url: '/img/portfolio/nature/treeandsky.jpg',
			}
		];

		var zoo = [ 
			{
				url: '/img/portfolio/zoo/bluefish.jpg',
			},
			{
				url: '/img/portfolio/zoo/imaparrot.jpg',
			}, 
			{
				url: '/img/portfolio/zoo/jellies.jpg',
			},
			{
				url: '/img/portfolio/zoo/monkeysee.jpg',
			},
			{
				url: '/img/portfolio/zoo/monkeysee2.jpg',
			},
			{
				url: '/img/portfolio/zoo/ohmonkey.jpg',
			},
			{
				url: '/img/portfolio/zoo/oldmanworld.jpg',
			},
			{
				url: '/img/portfolio/zoo/orangestingers.jpg',
			},
			{
				url: '/img/portfolio/zoo/peace.jpg',
			},
			{
				url: '/img/portfolio/zoo/peacock.jpg',
			},
			{
				url: '/img/portfolio/zoo/peacockglory.jpg',
			},
			{
				url: '/img/portfolio/zoo/somebird.jpg',
			},
			{
				url: '/img/portfolio/zoo/swarm.jpg',
			},
		];

	var service = {};
  	service.getImage = function(x){	
    	switch (x){
			case 'childsplay': var gallery = childsplay; return gallery;
				break;
			case 'flowers': var gallery = flowers; return gallery;
				break;
			case 'lines': var gallery = lines; return gallery;
				break;
			case 'nature': var gallery = nature; return gallery;
				break; 
			case 'zoo': var gallery = zoo; return gallery;
				break;
			case 'randoms': var gallery = randoms; return gallery;
				break; 
		}	
 
  	}
  	return service;
});	