var appName = 'jensite';
var app = angular.module(appName, []);

//angular.element(document).ready(function() {
//    angular.bootstrap(document, [appName]);
//});

 app.controller('ShowHide', function ($scope) {
            //This will hide the DIV by default.
            $scope.IsVisible = false;
            $scope.ShowHide = function () {
                //If DIV is visible it will be hidden and vice versa.
                $scope.IsVisible = $scope.IsVisible ? false : true;
            }
        });
