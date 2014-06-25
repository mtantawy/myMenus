var elmenus = angular.module('elmenus');
  
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


