angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope',
    function ($scope) {
      $scope.viewID = 1;
    }
  ])
  .controller('MyCtrl2', ['$scope',
    function ($scope) {
      $scope.viewID = 2;
    }
  ]);
