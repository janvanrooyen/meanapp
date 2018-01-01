var app = angular.module('familytree', ['ui.bootstrap'])

//angular.element(document).ready(function() {
 //   angular.bootstrap(document, [appName]);
//});

app.controller('FamilyTreeCtrl', ['$scope', '$http', 'thumbnailGallery', function($scope, $http, thumbnailGallery) {
    $scope.displayLevel1 = false;
    $scope.displayLevel2 = false;
    $scope.displayLevel3 = false;
    $scope.extendTree1 = function() {
    	$scope.displayLevel1 = !$scope.displayLevel1;
    	$scope.displayLevel2 = false; 
    	$scope.displayLevel3 = false;
    };
    $scope.extendTree2 = function() {
    	$scope.displayLevel2 = !$scope.displayLevel2;
    	$scope.displayLevel1 = !$scope.displayLevel1;
    };
    $scope.extendTree3 = function() {
    	$scope.displayLevel3 = !$scope.displayLevel3;
    	$scope.displayLevel2 = !$scope.displayLevel2;
    };	

    $scope.openPhotoSwipe = function(x) {
    	console.log(x);
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

app.factory('thumbnailGallery', function(){

	var AndriesCilliers = [
		{
			src: 'img/familytree/andries-anna-cilliers.jpg',
			w:2100,
			h:1500,
			title: 'Great GrandFather and Mother Andries Cilliers and Anna Cilliers'
		},
		{
			src: 'img/familytree/sixcilliersbrothers.jpg',
			w:2400,
			h:2700,
			title: 'The Six Cilliers Brothers: Jacob, Andries, Johannes, Piet, Charl, Fanie'
		},
	]; 

	var service = {};
 	service.getImage = function(x){	
    	switch (x){
			case 'AndriesCilliers': var gallery = AndriesCilliers; return gallery;
				break;
			case 'nature': var gallery = nature; return gallery;
				break; 
			case 'randoms': var gallery = randoms; return gallery;
				break; 
		}	
 
  	}
  	return service;
	});
