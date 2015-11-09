let Clicker = function ($scope) {

$scope.count = 0;
$scope.message = 'Likes';
$scope.increaseByOne = function () {
  $scope.count++;

  $scope.message = ($scope.count === 1) ? 'Like' : 'Likes';

  };


};

Clicker.$inject = ['$scope'];

export default Clicker;