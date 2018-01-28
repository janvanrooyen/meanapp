var appName = 'familytree';
var appFamilyTree = angular.module(appName, ['ui.bootstrap']); 

//angular.element(document).ready(function() {
 //   angular.bootstrap(document, [appName]);
//});

appFamilyTree.controller('Modal', ['$scope', '$http', 'thumbnailGallery', function($scope, $http, thumbnailGallery) {
    $scope.openPhotoSwipe = function(x) {
    	var gallery = x;
    	console.log(gallery);
	    var pswpElement = document.querySelectorAll('.pswp')[0];
	    // build items array
	    var items = thumbnailGallery.getImage(gallery);
	    console.log(items); //not working 	
	    // define options (if needed)
	   // console.log(items);
	    var options = {
	       // history & focus options are disabled on CodePen        
	        history: false,
	        focus: false,
	        showAnimationDuration: 0,
	        hideAnimationDuration: 0
	    };
    	var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    	gallery.init();
	};

 }]); 

appFamilyTree.factory('thumbnailGallery', function(){

	var familytree = [
		{
			src: 'img/familytree/title/cilliers_niehaus_family_scrap_book-1.jpg',
			h:3426,
			w:3276
		},
		{
			src: 'img/familytree/title/cilliers_niehaus_family_scrap_book-2.jpg',
			h:4122,
			w:3287
		},		
		{
			src: 'img/familytree/title/cilliers_niehaus_family_scrap_book-3.jpg',
			h:4122,
			w:3287
		}
	]; 


	var service = {};
  	service.getImage = function(x){	
    	switch (x){
			case 'familytree': var gallery = familytree; return gallery;
				break;	
		}	
 
  	}
  	return service;
	});
