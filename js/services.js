'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('catsApp.services', []).
service("backendService",['$window',function($window) {
	console.log("Do magic in backendService")
	var Animal =function(name, url, images) {
		this.name = name;
		this.url = url;
		this.images = images;
		return this;
	}
	this.animals = [
		new Animal("Мурзик","http://vk.com",[
		{photo:"http://cs425220.vk.me/v425220115/50b0/t-FH6JY79u8.jpg"},
		{photo:"http://cs425220.vk.me/v425220115/50b8/8ejxrSiVNo8.jpg"},
		{photo:"http://cs424429.vk.me/v424429115/1f42/o1bR_uFO36w.jpg"},
	]),
		new Animal("Барсик","http://vk.com",[
		{photo:"http://cs425220.vk.me/v425220115/50b0/t-FH6JY79u8.jpg"},
		{photo:"http://cs425220.vk.me/v425220115/50b8/8ejxrSiVNo8.jpg"},
		{photo:"http://cs424429.vk.me/v424429115/1f42/o1bR_uFO36w.jpg"},
	])
	];
}
	])
;
