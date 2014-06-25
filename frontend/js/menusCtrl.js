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
