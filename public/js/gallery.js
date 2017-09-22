var appName = 'gallery';
var appGallery = angular.module(appName, ['ui.bootstrap']); 

//angular.element(document).ready(function() {
 //   angular.bootstrap(document, [appName]);
//});


appGallery.controller('Modal', ['$scope', '$http', 'thumbnailGallery', function($scope, $http, thumbnailGallery) {
    console.log('test');
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

appGallery.factory('thumbnailGallery', function(){

	var BW = [
		{
			src: 'img/portfolio/BW/janvanrooyen_web-6.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/BW/janvanrooyen_web-7.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/BW/janvanrooyen_web-8.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/BW/janvanrooyen_web-10.jpg',
			w:3200,
			h:1000
		},
		{
			src: 'img/portfolio/BW/janvanrooyen_web-11.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/BW/janvanrooyen_web-17.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/BW/janvanrooyen_web-18.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/BW/janvanrooyen_web-21.jpg',
			w:1880,
			h:2700
		},
		{
			src: 'img/portfolio/BW/janvanrooyen_web-24.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/BW/janvanrooyen_web-27.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/BW/janvanrooyen_web-30.jpg',
			w:1880,
			h:2700
		},
		{
			src: 'img/portfolio/BW/janvanrooyen_web-31.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/BW/janvanrooyen_web-33.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/BW/janvanrooyen_web-40.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/BW/janvanrooyen_web-47.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/BW/janvanrooyen_web-58.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/BW/DSC_2984.jpg',
			w:2100,
			h:1500
		},
	]; 

	var randoms = [
		{
			src: 'img/portfolio/randoms/janvanrooyen_web-1.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/janvanrooyen_web-2.jpg',
			w:2100,
			h:1500
		},	
		{
			src: 'img/portfolio/randoms/janvanrooyen_web-9.jpg',
			w:2100,
			h:1500
		},	
		{
			src: 'img/portfolio/randoms/janvanrooyen_web-12.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/janvanrooyen_web-16.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/janvanrooyen_web-28.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/janvanrooyen_web-29.jpg',
			w:1880,
			h:2700
		},
		{
			src: 'img/portfolio/randoms/janvanrooyen_web-34.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/janvanrooyen_web-39.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/janvanrooyen_web-42.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/janvanrooyen_web-43.jpg',
			w:2100,
			h:1500
		},	
		{
			src: 'img/portfolio/randoms/janvanrooyen_web-44.jpg',
			w:2100,
			h:1500
		},			
		{
			src: 'img/portfolio/randoms/janvanrooyen_web-48.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/janvanrooyen_web-49.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/janvanrooyen_web-59.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/DSC_2197.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/DSC_2208.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/DSC_2223.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/DSC_2438.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/DSC_2932.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/DSC_3017.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/DSC_3088.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/DSC_3095.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/DSC_3113.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/DSC_3148.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/DSC_3351.jpg',
			w:2100,
			h:1500
		},
	];

	var nature = [
		{
			src: 'img/portfolio/nature/janvanrooyen_web-3.jpg',
			w:2100,
			h:1700
		},
		{
			src: 'img/portfolio/nature/janvanrooyen_web-4.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/janvanrooyen_web-5.jpg',
			w:1880,
			h:2700
		},
		{
			src: 'img/portfolio/nature/janvanrooyen_web-13.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/janvanrooyen_web-19.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/janvanrooyen_web-20.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/janvanrooyen_web-22.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/janvanrooyen_web-23.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/janvanrooyen_web-25.jpg',
			w:3200,
			h:700
		},
		{
			src: 'img/portfolio/nature/janvanrooyen_web-26.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/janvanrooyen_web-32.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/janvanrooyen_web-35.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/janvanrooyen_web-37.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/janvanrooyen_web-38.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/janvanrooyen_web-45.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/janvanrooyen_web-46.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/janvanrooyen_web-50.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/janvanrooyen_web-51.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/janvanrooyen_web-52.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/janvanrooyen_web-53.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/janvanrooyen_web-54.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/janvanrooyen_web-55.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/janvanrooyen_web-56.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/janvanrooyen_web-57.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/DSC_2568.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/DSC_2588.jpg',
			w:2100,
			h:1500
		},
	];


	var service = {};
  	service.getImage = function(x){	
    	switch (x){
			case 'BW': var gallery = BW; return gallery;
				break;
			case 'nature': var gallery = nature; return gallery;
				break; 
			case 'randoms': var gallery = randoms; return gallery;
				break; 
		}	
 
  	}
  	return service;
	});
