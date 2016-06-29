var appName = 'mean';
var app = angular.module(appName, []); 

angular.element(document).ready(function() {
    angular.bootstrap(document, [appName]);
});

//Recipe Tab Control
app.controller('TabsCtrl', ['$scope', '$rootScope', "tabCtrl", "curTab", function ($scope, $rootScope, tabCtrl, curTab) {
    $scope.tabs = tabCtrl.getTab(); //calls tab control factory
    $rootScope.currentTab = '/add-recipe';
    $scope.onClickTab = function (tab) {
      $rootScope.currentTab = curTab.onClickTabFactory(tab);
    };
}]);

//Recipe Tab Service
app.factory("curTab", function(){
   currentTab = '/add-recipe';
//  var currentTab = '/add-recipe';
  var service = {};
  service.onClickTabFactory = function(tab){
    currentTab = tab.url;
    return currentTab;
  };
  return service;
});

//tab control factory
app.factory("tabCtrl", function(){
  var tabs = [
            {
            title: ' Add',
            url: '/add-recipe',
            glyphicon: 'glyphicon glyphicon-grain'
            }, 
            {
            title: ' Find',
            url: '/find-recipe',
            glyphicon: 'glyphicon glyphicon-search'
            }, 
            ];
  var service = {};
  service.getTab = function(){
    return tabs;
  }
  return service;
});

//View Recipe Controller
app.controller("RecipeViewController", ["$scope", "$rootScope", "tabCtrl", "curTab", "$http",
  function ($scope, $rootScope, tabCtrl, curTab, $http) {
    $scope.selected = $rootScope.recipe;

    $scope.editRecipe = function(tab){ 
      $rootScope.currentTab = '/edit-recipe';
    };

    // update recipe

    $scope.deleteClient = function(){
      //var url = 'http://localhost:8081/recipedb/' + $scope.selected._id;
      var url = 'http://www.janvanrooyen.com/recipedb/' + $scope.selected._id;
      $http.delete(url);
      $rootScope.currentTab = "/find-recipe";
    };

    $scope.saveClient = function() {
      var url = 'http://www.janvanrooyen.com/recipedb/' + $scope.selected._id;
     //var url = 'http://localhost:8081/recipedb/' + $scope.selected._id;
      $scope.message = {
        title: $scope.selected.title,
        ingredients: $scope.selected.ingredients, 
        steps: $scope.selected.steps,
        keywords: $scope.selected.keywords,
        notes: $scope.selected.notes
      } 

      $http.put(url, $scope.message)
      .success(function(data, status, headers, config) {
          console.log("Succesfully written to the database");
          })
      .error(function(data, status, headers, config) {
          alert(data.message);
          });
      $rootScope.currentTab = "/view-recipe";
    };

    //everything below this should be moved into a service or a factory and shared between the two controller. But I am feeling lazy. 

    //used to count the number of input rows for steps and ingredients
    $scope.ingredients = [{id: 'choice1'}];
    $scope.steps = [{id: 'step1'}];
    $scope.keywords = [{id: 'keyword1'}];

    //adds new ingredient input row
    $scope.addNewIngredient = function() {
        var newItemNo = $scope.selected.ingredients.length+1;
        $scope.selected.ingredients.push({'id': 'choice' + newItemNo});
        $scope.focusIndex = $scope.selected.ingredients.length-1;
    };


    //remove ingredient input row
    $scope.removeIngredient = function() {
      var itemNo = $scope.selected.ingredients.length-1;
      if (itemNo === 0){
        alert("Don't be stupid");
      }
      else if (itemNo === 1){
        console.log(itemNo);
        $scope.ingredients.splice(itemNo,1);
        $scope.focusIndex = 1;
      }
      else {
        $scope.selected.ingredients.splice(itemNo,1);
        $scope.focusIndex = $scope.selected.ingredients.length-1;
      }
    };

//steps inputs

    //adds new step input row
    $scope.addNewStep = function() {
      var newItemNo = $scope.selected.steps.length+1;
      $scope.selected.steps.push({'id':'step'+newItemNo});
      $scope.focusIndex = $scope.selected.steps.length-1;
      $scope.showButton = false;
    };

    //remove step input row
    $scope.removeStep = function() {
      var itemNo = $scope.selected.steps.length-1;
      if (itemNo === 0){
        $scope.focusIndex = $scope.selected.steps.length-1;
        alert("Don't be stupid");
      }
      else {
        $scope.selected.steps.splice(itemNo,1);
        $scope.focusIndex = $scope.selected.steps.length-1;
      }
    };

//keyword inputs

    $scope.addNewKeyWord = function() {
      var newItemNo = $scope.selected.keywords.length+1;
      $scope.selected.keywords.push({'id':'keyword'+newItemNo});
      $scope.focusIndex = $scope.selected.keywords.length-1;
    };

    $scope.removeKeyWord = function() {
      var itemNo = $scope.selected.keywords.length-1;
      if (itemNo === 0){
        $scope.focusIndex = $scope.selected.keywords.length-1;
        alert("Don't be stupid");
      }
      else {
        $scope.selected.keywords.splice(itemNo, 1);
        $scope.focusIndex = $scope.selected.keywords.length-1;
      }
    };

}]);

//Find Recipe Controllerf
app.controller("FindRecipeController", ["$scope", "$rootScope", "$http", "tabCtrl", "curTab",
  function ($scope, $rootScope, $http, tabCtrl, curTab) {

    $http.get('http://www.janvanrooyen.com/recipedb')
    //$http.get('http://localhost:8081/recipedb')
          .success(function(data, status, headers, config) {
              $scope.messages = data;
              })  
          .error(function(data, status, headers, config) {
               alert(status);
              });
       //Find Recipe Search Drop Down 
    $scope.recipeSearch = [  //array that sets the drop down list
    {
      id: 'id-1',
      name: 'Title'
    },
    {
      id: 'id-2',
      name: 'Keyword'
    }];
    $scope.selection = $scope.recipeSearch[0]; //sets the first item in the drop down list

    $scope.Title = true;  

    //if Title is selected then display titles if keyword selected then displays keywords in the dive
    $scope.recipeSearchFilter = function(){
      if ($scope.selection.name === "Title"){
        $scope.Title = true;
      }
      else {
        $scope.Title = !$scope.Title;
      }
    };


    $scope.setRecipe = function(message) { 
      $rootScope.recipe = message;
      $rootScope.currentTab = '/view-recipe';
    };  
  }]);


//should be deleted
  app.controller("NavController", ["$scope", 
    function ($scope) {

    }]);

//Add Recipe Controller
app.controller("AddRecipeController", ["$scope", "$http", "tabCtrl", "curTab",
  function ($scope, $http, tabCtrl, curTab ) {

    $scope.addRecipe = function() {
      
      $scope.message = {
        title: $scope.recipeTitle,
        ingredients: $scope.ingredients, 
        steps: $scope.steps,
        keywords: $scope.keywords,
        notes: $scope.notes
      } 

        $http.post('http://www.janvanrooyen.com/recipedb', $scope.message)
       // $http.post('http://localhost:8081/recipedb', $scope.message)  
          .success(function(data, status, headers, config) {
              console.log("Succesfully written to the database" + " " + $scope.message);
              console.log($scope.message);
              alert($scope.message.title + " has been saved!");
              })
          .error(function(data, status, headers, config) {
              alert(data.message);
              });
      //resets the form
      $scope.recipeTitle = "";
      $scope.ingredients=[{id: 'choice1'}];
      $scope.steps=[{id: 'step1'}];
      $scope.keywords=[{id: 'keyword1'}]; 
      $scope.notes=""   
    }; 

    //used to count the number of input rows for steps and ingredients
    $scope.ingredients = [{id: 'choice1'}];
    $scope.steps = [{id: 'step1'}];
    $scope.keywords = [{id: 'keyword1'}];

    //adds new ingredient input row
    $scope.addNewIngredient = function() {
        var newItemNo = $scope.ingredients.length+1;
        $scope.ingredients.push({id: 'choice' + newItemNo});
        $scope.focusIndex = $scope.ingredients.length-1;
    };


    //remove ingredient input row
    $scope.removeIngredient = function() {
      var itemNo = $scope.ingredients.length-1;
      if (itemNo === 0){
        alert("Don't be stupid");
      }
      else if (itemNo === 1){
        console.log(itemNo);
        $scope.ingredients.splice(itemNo,1);
        $scope.focusIndex = 1;
      }

      else  {
        $scope.ingredients.splice(itemNo,1);
        $scope.focusIndex = $scope.ingredients.length-1;
      }
    };

//steps inputs

    //adds new step input row
    $scope.addNewStep = function() {
      var newItemNo = $scope.steps.length+1;
      $scope.steps.push({id:'step'+newItemNo});
      $scope.focusIndex = $scope.steps.length-1;
      $scope.showButton = false;
    };

    //remove step input row
    $scope.removeStep = function() {
      var itemNo = $scope.steps.length-1;
      if (itemNo === 0){
        $scope.focusIndex = $scope.steps.length-1;
        alert("Don't be stupid");
      }
      else {
        $scope.steps.splice(itemNo,1);
        $scope.focusIndex = $scope.steps.length-1;
      }
    };

//keyword inputs

    $scope.addNewKeyWord = function() {
      var newItemNo = $scope.keywords.length+1;
      $scope.keywords.push({id:'keyword'+newItemNo});
      $scope.focusIndex = $scope.keywords.length-1;
    };

    $scope.removeKeyWord = function() {
      var itemNo = $scope.keywords.length-1;
      if (itemNo === 0){
        $scope.focusIndex = $scope.keywords.length-1;
        alert("Don't be stupid");
      }
      else {
        $scope.keywords.splice(itemNo, 1);
        $scope.focusIndex = $scope.keywords.length-1;
      }
    };
  }
]);

//set focus on element
app.directive('setFocus', function(){
  return{
         restrict: 'A',

         link: function(scope, element, attrs){
           scope.$watch(function(){
             return scope.$eval(attrs.setFocus);
             },function (newValue){
               if (newValue == true){
                   element[0].focus();
               }
           });
         }
     };
});

