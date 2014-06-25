var elmenus = angular.module('elmenus');
  
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
