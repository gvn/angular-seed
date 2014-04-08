angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.when('/view1', {
      templateUrl: 'partials/partial1.html',
      controller: 'MyCtrl1'
    });

    $routeProvider.when('/view2', {
      templateUrl: 'partials/partial2.html',
      controller: 'MyCtrl2'
    });

    $routeProvider.otherwise({
      redirectTo: '/view1'
    });
  }
]);
