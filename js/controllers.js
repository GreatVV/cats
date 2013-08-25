'use strict';

/* Controllers */

var controllers = angular.module('catsApp.controllers', []).controller('MainController', ['$scope',function($scope) {
	$scope.animals = [
	{value:"котика"},
	{value:"щенка"}];
	
	var body = angular.element(document.querySelector('body'));
	
	 $scope.change = function() {
		if ($scope.animal == "котиков") {
			$scope.animal = "щенков";
			body.css("backgroundImage",'url(http://zoo-farm.ru/wp-content/uploads/2011/09/kak-pravilno-vybrat-shhenka-samoedskoj-lajki.jpg)');
		} else {
			$scope.animal = "котиков";
			body.css("backgroundImage",'url(http://img7.joyreactor.cc/pics/post/full/anon-%D0%BA%D0%BE%D1%82%D0%B8%D0%BA%D0%B8-%D0%BD%D0%B0%D1%80%D0%BA%D0%BE%D1%82%D0%B8%D0%BA%D0%B8-648977.jpeg)');
		}
	} 
  }]);