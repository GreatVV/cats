'use strict';

/* Controllers */

var controllers = angular.module('catsApp.controllers', []).controller('MainController', ['$scope',function($scope) {
	$scope.animal = "котиков";
	
	$scope.animals = ["котика","щенка"];
	
	var body = angular.element(document.querySelector('body'));
	
	$scope.change = function() {
		if ($scope.animal == "котиков") {
			$scope.animal = "щенков";
			body.css("backgroundImage",'url(http://zoo-farm.ru/wp-content/uploads/2011/09/kak-pravilno-vybrat-shhenka-samoedskoj-lajki.jpg)');
		} else {
			$scope.animal = "котиков";
			body.css("backgroundImage",'url(http://i99.beon.ru/grandwallpapers.net/wallpapers/belosnejnii-kotik/belosnejnii-kotik_1600x1200.jpg)');
		}
	
	}
  }]);