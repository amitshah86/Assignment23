let MindController = function ($scope) {

$scope.count = 0;
$scope.message = 'Likes';
$scope.increaseByOne = function () {
  $scope.count++;

  $scope.message = ($scope.count === 1) ? 'Like' : 'Likes';

  };


};

MindController.$inject = ['$scope'];

export default MindController;