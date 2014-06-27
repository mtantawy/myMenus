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
