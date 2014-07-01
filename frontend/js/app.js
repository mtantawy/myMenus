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
      when('/Menus', {
        templateUrl: 'templates/ListMenus.html',
        controller: 'menusCtrl'
      }).
      when('/Categories', {
        templateUrl: 'templates/ListCategories.html',
        controller: 'categoriesCtrl'
      }).
      when('/editCategory/:id', {
        templateUrl: 'templates/EditCategory.html',
        controller: 'EditCategoryCtrl'
      }).
      when('/addCategory', {
        templateUrl: 'templates/AddCategory.html',
        controller: 'AddCategoryCtrl'
      }).
      when('/deleteCategory/:id', {
        templateUrl: 'templates/DeleteCategory.html',
        controller: 'DeleteCategoryCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
