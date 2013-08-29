'use strict';

/* Controllers */

var controllers = angular.module('catsApp.controllers', []).controller('MainController',  ['$scope', 'backendService', function($scope, backendService) {
	$scope.animals = [
	{"value":"котика", "id" : "animal1"},
	{"value":"щенка", "id" : "animal2"}];
	
	$scope.actions = [
	{"value":"взять", "id" : "action1"},
	{"value":"помочь", "id" : "action2"}];

	$scope.animal = "animal1";
	$scope.action = "action1";

	var body = angular.element(document.querySelector('body'));
	
	 $scope.changeAnimal = function() {
		if ($scope.animal != "animal1") {
			console.log("animal: "+$scope.animal)
			body.css("backgroundImage",'url(http://zoo-farm.ru/wp-content/uploads/2011/09/kak-pravilno-vybrat-shhenka-samoedskoj-lajki.jpg)');
		} else {
			console.log("!!!animal: "+$scope.animal)
			body.css("backgroundImage",'url(http://img7.joyreactor.cc/pics/post/full/anon-%D0%BA%D0%BE%D1%82%D0%B8%D0%BA%D0%B8-%D0%BD%D0%B0%D1%80%D0%BA%D0%BE%D1%82%D0%B8%D0%BA%D0%B8-648977.jpeg)');
		}
	} 

	$scope.changeWordForm = function() {
		if ($scope.action == "action2") {
			$scope.animals[0].value = "котикам";
			$scope.animals[1].value = "щенкам";
		} else {
			$scope.animals[0].value = "котика";
			$scope.animals[1].value = "щенка";
		}

	}
  }])
.controller('DescController',['$scope', 'backendService', function($scope,backendService) {
	$scope.images = backendService.animals[0].images;

	var body = angular.element(document.querySelector('body'));

	$scope.onImageClick = function(image) {
		body.css("backgroundImage",'url('+image.photo+')');
	}
}])
.controller('SearchController',['$scope','backendService',function ($scope, backendService) {
	$scope.animals = backendService.animals;
}])
;