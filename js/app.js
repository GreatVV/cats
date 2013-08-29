'use strict';


// Declare app level module which depends on filters, and services
angular.module('catsApp', ['catsApp.filters', 'catsApp.services', 'catsApp.directives', 'catsApp.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/main', {templateUrl: 'partials/main.html', controller: 'MainController'});
    $routeProvider.when('/description', {templateUrl: 'partials/description.html', controller: 'DescController'});
    $routeProvider.when('/search', {templateUrl: 'partials/search.html', controller: 'SearchController'});
    $routeProvider.otherwise({redirectTo: '/main'});
  }]);
