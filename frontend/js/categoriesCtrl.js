var elmenus = angular.module('elmenus');
  
elmenus.controller('categoriesCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.data = {};
    $http.get('http://localhost:4000/categories').
        success(function(data, status, headers, config) {
            $scope.data.categories = data;
            $scope.status = status;
            $scope.headers = headers;
            $scope.config = config;
        }).error(function (data, status, headers, config) {
        	$scope.categories = data;
            $scope.status = status;
            $scope.headers = headers;
            $scope.config = config;
            });
}]);


elmenus.controller('AddCategoryCtrl', ['$scope', '$http', function($scope, $http) {
    // getting menus for the dropdown list containing menus
    $scope.data = {};
    $scope.menuSelected;
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
	        
    $scope.addCategory = function() {
        $http.post('http://localhost:4000/categories', [{"id":"", "name":$scope.category.name}]).
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

elmenus.controller('DeleteCategoryCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $scope.category = {};
    $scope.category.id = $routeParams.id;
    $http.get('http://localhost:4000/categories/'+$scope.category.id).
        success(function(data, status, headers, config) {
            $scope.categories = data[0];
            $scope.status = status;
            $scope.headers = headers;
            $scope.config = config;
        }).error(function (data, status, headers, config) {
            $scope.categories = data;
            $scope.status = status;
            $scope.headers = headers;
            $scope.config = config;
            });
    $scope.deleteCategory = function() {
        $http.delete('http://localhost:4000/categories/'+$scope.category.id).
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


elmenus.controller('EditCategoryCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $scope.category = {};
    $scope.category.id = $routeParams.id;
    $http.get('http://localhost:4000/categories/'+$scope.category.id).
        success(function(data, status, headers, config) {
            $scope.categories = data[0];
            $scope.status = status;
            $scope.headers = headers;
            $scope.config = config;
        }).error(function (data, status, headers, config) {
            $scope.categories = data;
            $scope.status = status;
            $scope.headers = headers;
            $scope.config = config;
            });
    // getting menus for the dropdown list containing menus
    $scope.data = {};
    $scope.menuSelected;
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
    $scope.editCategory = function() {
        $http.put('http://localhost:4000/categories/'+$scope.category.id, [{"id":"", "name":$scope.category.name}]).
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
