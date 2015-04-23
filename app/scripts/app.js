'use strict';

/**
 * @ngdoc overview
 * @name xolairAsthmaJourneyApp
 * @description
 * # xolairAsthmaJourneyApp
 *
 * Main module of the application.
 */
angular
  .module('xolairAsthmaJourneyApp', [
    'ngAnimate',
    'ngTouch',
    'ui.router'
  ]);


angular
  .module('xolairAsthmaJourneyApp')
  	.config(function($stateProvider, $urlRouterProvider){

  		$urlRouterProvider.otherwise("/map");

  		$stateProvider
	    .state('map', {
	      url: "/map",
	      views: {
	      	'main' : {
	      		templateUrl: "views/map.html"
	      	}
	      }
	    })

	    .state('path', {
	      url: "/path",
	      views : {
	      	'main' : {
	      		templateUrl: "views/path/index.html",
	      		controller : function($scope){
	      			$scope.name = "Dillon";
	      			$scope.$on('$viewContentLoaded',function(event){
	      				alert('loaded')
	      			});
	      		}
	      	},
	      	'slide1@path' : {
	      		templateUrl: "views/path/slide1.html",
	      		controller : function($scope){

	      		}
	      	},
	      	'slide2@path' : {
	      		templateUrl: "views/path/slide2.html",
	      		controller : function($scope){

	      		}
	      	}
	      }
	    })

  	})