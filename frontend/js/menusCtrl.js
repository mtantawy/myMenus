var elmenus = angular.module('elmenus');
  
elmenus.controller('menusCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.data = {};
    $http.get('http://localhost:4000/menus').
        success(function(data, status, headers, config) {
            $scope.data.menus = data;
            $scope.status = status;
            $scope.headers = headers;
            $scope.config = config;
        }).error(function (data, status, headers, config) {
        	$scope.menus = data;
            $scope.status = status;
            $scope.headers = headers;
            $scope.config = config;
            });
}]);

elmenus.controller('AddMenuCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.addMenu = function() {
        $http.post('http://localhost:4000/menus', [{"id":"", "name":$scope.menu.name}]).
        success(function(data, status, headers, config) {
            $scope.AddResult = 'Success!';
            $scope.data = data;
            $scope.status = status;
            $scope.headers = headers;
            $scope.config = config;
        }).error(function (data, status, headers, config) {
            $scope.AddResult = 'An Error Occured!';
            $scope.data = data;
            $scope.status = status;
            $scope.headers = headers;
            $scope.config = config;
            });

    }
    
}]);

elmenus.controller('DeleteMenuCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $scope.menu = {};
    $scope.menu.id = $routeParams.id;
    $http.get('http://localhost:4000/menus/'+$scope.menu.id).
        success(function(data, status, headers, config) {
            $scope.menus = data[0];
            $scope.status = status;
            $scope.headers = headers;
            $scope.config = config;
        }).error(function (data, status, headers, config) {
            $scope.menus = data;
            $scope.status = status;
            $scope.headers = headers;
            $scope.config = config;
            });
    $scope.deleteMenu = function() {
        $http.delete('http://localhost:4000/menus/'+$scope.menu.id).
        success(function(data, status, headers, config) {
            $scope.DeleteResult = 'Success!';
            $scope.data = data;
            $scope.status = status;
            $scope.headers = headers;
            $scope.config = config;
        }).error(function (data, status, headers, config) {
            $scope.DeleteResult = 'An Error Occured!';
            $scope.data = data;
            $scope.status = status;
            $scope.headers = headers;
            $scope.config = config;
            });

    }
}]);


elmenus.controller('EditMenuCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $scope.menu = {};
    $scope.menu.id = $routeParams.id;
    $http.get('http://localhost:4000/menus/'+$scope.menu.id).
        success(function(data, status, headers, config) {
            $scope.menus = data[0];
            $scope.status = status;
            $scope.headers = headers;
            $scope.config = config;
        }).error(function (data, status, headers, config) {
            $scope.menus = data;
            $scope.status = status;
            $scope.headers = headers;
            $scope.config = config;
            });
    $scope.editMenu = function() {
        $http.put('http://localhost:4000/menus/'+$scope.menu.id, [{"id":"", "name":$scope.menu.name}]).
        success(function(data, status, headers, config) {
            $scope.EditResult = 'Success!';
            $scope.data = data;
            $scope.status = status;
            $scope.headers = headers;
            $scope.config = config;
        }).error(function (data, status, headers, config) {
            $scope.EditResult = 'An Error Occured!';
            $scope.data = data;
            $scope.status = status;
            $scope.headers = headers;
            $scope.config = config;
            });

    }
}]);