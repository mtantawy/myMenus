var elmenus = angular.module('elmenus', ['ngRoute']);
  
elmenus.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/editMenu/:id', {
        templateUrl: 'templates/EditMenu.html',
        controller: 'EditMenuCtrl'
      }).
      when('/addMenu', {
        templateUrl: 'templates/AddMenu.html',
        controller: 'AddMenuCtrl'
      }).
      when('/deleteMenu/:id', {
        templateUrl: 'templates/DeleteMenu.html',
        controller: 'DeleteMenuCtrl'
      }).
      when('/', {
        templateUrl: 'templates/ListMenus.html',
        controller: 'menusCtrl'
      }).
      when('/Categories', {
        templateUrl: 'templates/ListCategories.html',
        controller: 'categoriesCtrl'
      }).
      otherwise({
        redirectTo: '/menusCtrl'
      });
  }]);
