var appName = 'familytree';
var app = angular.module(appName, []); 


//angular.element(document).ready(function() {
 //   angular.bootstrap(document, [appName]);
//});

app.controller('PageCtrl', function PageCtrl($scope) {
	$scope.page = [
		{
			title: 'Page 1', 
			url: 'img/familytree/title/cilliers_niehaus_family_scrap_book-1.jpg'
		},
		{
			title: 'Page 2', 
			url: 'img/familytree/title/cilliers_niehaus_family_scrap_book-2.jpg'
		}
	]; 
}); 
