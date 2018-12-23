var appName = 'gallery';
var appGallery = angular.module(appName, ['ui.bootstrap']); 

//angular.element(document).ready(function() {
 //   angular.bootstrap(document, [appName]);
//});

appGallery.controller('Modal', ['$scope', '$http', 'thumbnailGallery', function($scope, $http, thumbnailGallery) {
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
			src: 'img/portfolio/bw/bw_1.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/bw/bw_2.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/bw/bw_3.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/bw/bw_4.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/bw/bw_5.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/bw/bw_6.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/bw/bw_7.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/bw/bw_8.jpg',
			w:1880,
			h:2700
		},
		{
			src: 'img/portfolio/bw/bw_9.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/bw/bw_10.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/bw/bw_11.jpg',
			w:1880,
			h:2700
		},
		{
			src: 'img/portfolio/bw/bw_12.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/bw/bw_13.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/bw/bw_14.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/bw/bw_15.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/bw/bw_16.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/bw/bw_17.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/bw/bw_18.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/bw/bw_19.jpg',
			w:2500,
			h:600
		},
		{
			src: 'img/portfolio/bw/bw_20.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/bw/bw_21.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/bw/bw_22.jpg',
			w:1880,
			h:2700
		},
				{
			src: 'img/portfolio/bw/bw_23.jpg',
			w:2100,
			h:1500
		}
	]; 

	var randoms = [
		{
			src: 'img/portfolio/randoms/randoms_1.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/randoms_2.jpg',
			w:2100,
			h:1500
		},	
		{
			src: 'img/portfolio/randoms/randoms_3.jpg',
			w:2100,
			h:1500
		},	
		{
			src: 'img/portfolio/randoms/randoms_4.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/randoms_5.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/randoms_6.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/randoms_7.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/randoms_8.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/randoms_9.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/randoms_10.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/randoms_11.jpg',
			w:2100,
			h:1500
		},	
		{
			src: 'img/portfolio/randoms/randoms_12.jpg',
			w:2100,
			h:1500
		},			
		{
			src: 'img/portfolio/randoms/randoms_13.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/randoms_14.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/randoms_15.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/randoms_16.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/randoms_17.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/randoms_18.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/randoms_19.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/randoms/randoms_20.jpg',
			w:2100,
			h:1500
		}
	];

	var nature = [
		{
			src: 'img/portfolio/nature/nature_1.jpg',
			w:2100,
			h:1700
		},
		{
			src: 'img/portfolio/nature/nature_2.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/nature_3.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/nature_4.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/nature_5.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/nature_6.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/nature_7.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/nature_8.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/nature_9.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/nature_10.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/nature_11.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/nature/nature_12.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/nature/nature_13.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/nature/nature_14.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/nature/nature_15.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/nature/nature_16.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/nature/nature_17.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/nature/nature_18.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/nature/nature_19.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/nature/nature_20.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/nature/nature_21.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/nature/nature_22.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/nature/nature_23.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/nature/nature_24.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/nature/nature_25.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/nature/nature_26.jpg',
			w:2100,
			h:1500
		}
	];

	var butterflies = [
		{
			src: 'img/portfolio/butterflies/butterflies_1.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/butterflies/butterflies_2.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/butterflies/butterflies_3.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/butterflies/butterflies_4.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/butterflies/butterflies_5.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/butterflies/butterflies_6.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/butterflies/butterflies_7.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/butterflies/butterflies_8.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/butterflies/butterflies_9.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/butterflies/butterflies_10.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/butterflies/butterflies_11.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/butterflies/butterflies_12.jpg',
			w:2100,
			h:1500
		}
	];
	
	var eveningglow = [
		{
			src: 'img/portfolio/eveningglow/eveningglow_1.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/eveningglow/eveningglow_2.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/eveningglow/eveningglow_3.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/eveningglow/eveningglow_4.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/eveningglow/eveningglow_5.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/eveningglow/eveningglow_6.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/eveningglow/eveningglow_7.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/eveningglow/eveningglow_8.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/eveningglow/eveningglow_9.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/eveningglow/eveningglow_10.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/eveningglow/eveningglow_11.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/eveningglow/eveningglow_12.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/eveningglow/eveningglow_13.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/eveningglow/eveningglow_14.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/eveningglow/eveningglow_15.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/eveningglow/eveningglow_16.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/eveningglow/eveningglow_17.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/eveningglow/eveningglow_18.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/eveningglow/eveningglow_19.jpg',
			w:2100,
			h:1500
		},
	];

	var hotair = [
		{
			src: 'img/portfolio/hotair/hotair_1.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/hotair/hotair_2.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/hotair/hotair_3.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/hotair/hotair_4.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/hotair/hotair_5.jpg',
			w:2100,
			h:1500
		}
	];

	var zooshots = [
		{
			src: 'img/portfolio/zooshots/zooshots_1.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/zooshots/zooshots_2.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/zooshots/zooshots_3.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/zooshots/zooshots_4.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/zooshots/zooshots_5.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/zooshots/zooshots_6.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/zooshots/zooshots_7.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/zooshots/zooshots_8.jpg',
			w:2100,
			h:1500
		},		
		{
			src: 'img/portfolio/zooshots/zooshots_9.jpg',
			w:2100,
			h:1500
		},
		{
			src: 'img/portfolio/zooshots/zooshots_10.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/zooshots/zooshots_11.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/zooshots/zooshots_12.jpg',
			w:2100,
			h:1500
		},
				{
			src: 'img/portfolio/zooshots/zooshots_13.jpg',
			w:2100,
			h:1500
		}
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
			case 'butterflies': var gallery = butterflies; return gallery;
				break; 
			case 'eveningglow': var gallery = eveningglow; return gallery;
				break;
			case 'hotair': var gallery = hotair; return gallery;
				break;
			case 'zooshots': var gallery = zooshots; return gallery;
				break;
		}	
 
  	}
  	return service;
	});
