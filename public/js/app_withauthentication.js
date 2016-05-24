var appName = 'mean';
var app = angular.module(appName, ['firebase', 'xeditable']);

angular.element(document).ready(function() {
    angular.bootstrap(document, [appName]);
});

//Recipe Tab Control
app.controller('TabsCtrl', ['$scope', '$rootScope', "FirebaseObject", "tabCtrl", "curTab", function ($scope, $rootScope, test, tabCtrl, curTab) {
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
    console.log(tab);
    console.log(currentTab);
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
//            {
//            title:  ' View',
//            url: '/view-recipe',
//            glyphicon: 'glyphicon glyphicon-heart'
//            },
//            {
//            title:  ' Edit',
//            url: '/edit-recipe',
//            glyphicon: 'glyphicon glyphicon-heart'
//            }
            ];
  var service = {};
  service.getTab = function(){
    return tabs;
  }
  return service;
});

//firebase factory
app.factory("FirebaseObject", ["$firebaseArray",
  function($firebaseArray) {
    // create a reference to the database where we will store our data
    var ref = new Firebase("https://intense-torch-2081.firebaseio.com/data/recipes")
    return $firebaseArray(ref);
  }
]);

//firebase google authentication
app.factory("FirebaseOAuth", ["$firebaseArray", 
  function($firebaseArray){
    var ref = new Firebase("https://intense-torch-2081.firebaseio.com/data/recipes");
    ref.authWithOAuthPopup("google", function(error, authData) 
      {
      if (error) {
        console.log("Login Failed!", error);
      } 
      else {
        console.log("Authenticated successfully with payload:", authData);
      }
      }, 
      {
      remember: "sessionOnly",
      scope: "email"
      });
}]);

//View Recipe Controller
app.controller("RecipeViewController", ["$scope", "$rootScope", "FirebaseObject", "SelectedRecipeService", "tabCtrl", "curTab", "CachedSelectedRecipeService",
  
  function ($scope, $rootScope, FirebaseObject, SelectedRecipeService, tabCtrl, curTab, CachedSelectedRecipeService) {
    $scope.selected = CachedSelectedRecipeService.get();
    
    $scope.editRecipe = function(tab){ 
      $rootScope.currentTab = '/edit-recipe';
    };

    // update recipe
    $scope.messages = FirebaseObject;
    $scope.saveClient = function(client) {
      $scope.messages.$save(client);
      $rootScope.currentTab = "/view-recipe";
    };

    //everything below this should be moved into a service or a factory and shared between the two controller. But I am feeling lazy. 

    //used to count the number of input rows for steps and ingredients
    $scope.ingredients = [{id: 'choice1'}];
    $scope.steps = [{id: 'step1'}];
    $scope.keywords = [{id: 'keyword1'}];

    //adds new ingredient input row
    $scope.addNewIngredient = function() {
        var newItemNo = $scope.ingredients.length+1;
        $scope.ingredients.push({'id': 'choice' + newItemNo});
        $scope.focusIndex = $scope.ingredients.length-1;
    };


    //remove ingredient input row
    $scope.removeIngredient = function() {
      var itemNo = $scope.ingredients.length-1;
      if (itemNo === 0){
        alert("Don't be stupid");
      }
      else {
        $scope.ingredients.splice(itemNo,1);
        $scope.focusIndex = $scope.ingredients.length-1;
      }
    };

//steps inputs

    //adds new step input row
    $scope.addNewStep = function() {
      var newItemNo = $scope.steps.length+1;
      $scope.steps.push({'id':'step'+newItemNo});
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
      $scope.keywords.push({'id':'keyword'+newItemNo});
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

}]);

//Find Recipe Controller
app.controller("FindRecipeController", ["$scope", "$rootScope", "FirebaseObject", "SelectedRecipeService", "tabCtrl", "curTab", "CachedSelectedRecipeService",
  function ($scope, $rootScope, FirebaseObject, SelectedRecipeService, tabCtrl, curTab, CachedSelectedRecipeService) {

    $scope.messages = FirebaseObject;
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


    $scope.setRecipe = function(message) {  //not working
      $scope.selected = SelectedRecipeService.selected(message);
      CachedSelectedRecipeService.put(message); 
      $rootScope.currentTab = '/view-recipe';
    };  
  }]);

//Navigation Controller - contains login
app.controller("NavController", ["$scope", "FirebaseObject", "FirebaseOAuth", 
  function ($scope, FirebaseObject, FirebaseOAuth) {
    $scope.login = function() {
      FirebaseOAuth.ref();
    };
  }]);

//Add Recipe Controller
app.controller("AddRecipeController", ["$scope", "$rootScope", "FirebaseObject", "SelectedRecipeService", "tabCtrl", "curTab", "CachedSelectedRecipeService",
  function ($scope, $rootScope, FirebaseObject, SelectedRecipeService, tabCtrl, curTab, CachedSelectedRecipeService, Test) {

    $scope.messages = FirebaseObject;

    $scope.addRecipe = function() {

      //adds to the firebase database
      $scope.messages.$add({
        title: $scope.recipeTitle,
        ingredients: $scope.ingredients, 
        steps: $scope.steps,
        keywords: $scope.keywords,
        notes: $scope.notes
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
        $scope.ingredients.push({'id': 'choice' + newItemNo});
        $scope.focusIndex = $scope.ingredients.length-1;
    };


    //remove ingredient input row
    $scope.removeIngredient = function() {
      var itemNo = $scope.ingredients.length-1;
      if (itemNo === 0){
        alert("Don't be stupid");
      }
      else {
        $scope.ingredients.splice(itemNo,1);
        $scope.focusIndex = $scope.ingredients.length-1;
      }
    };

//steps inputs

    //adds new step input row
    $scope.addNewStep = function() {
      var newItemNo = $scope.steps.length+1;
      $scope.steps.push({'id':'step'+newItemNo});
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
      $scope.keywords.push({'id':'keyword'+newItemNo});
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

//used to pass data between views
app.service("CachedSelectedRecipeService", ["$rootScope", function($rootScope){
    var cache = {};

    this.put = function(message){
        var oldValue = this.get(message);
        cache[message] = message;
        $rootScope.$broadcast(
        "cache.item.updated",
            { key: message, oldValue: oldValue });
    };

    this.get = function(){
      return cache || null;
    }
}]);

// factory for the scope of the recipe that is clicked on 
app.factory("SelectedRecipeService", function(){
  var service = {};
  service.selected = function(message){
     var service = message; 
      return service;
      };  
  return service;
});

//xeditable
app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
})