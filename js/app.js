'use strict';


// Declare app level module which depends on filters, and services
angular.module('catsApp', ['catsApp.filters', 'catsApp.services', 'catsApp.directives', 'catsApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/main', {templateUrl: 'partials/main.html', controller: 'MainController'});
    $routeProvider.otherwise({redirectTo: '/main'});
  }]);
