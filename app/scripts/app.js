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
	      		templateUrl: "views/map.html",
	      		controller : function($scope,$rootScope,$state){

	      			$scope.selectSlide = function(slide){
	      				$rootScope.currentSlide = slide-1;
	      				$state.go('path');
	      				console.log('switching to slide:',slide);
	      			}

	      		}
	      	}
	      }
	    })

	    .state('path', {
	      url: "/path",
	      views : {
	      	'main' : {
	      		templateUrl: "views/path/index.html",
	      		controller : function($scope){
	      			
	      			// $scope.$on('$viewContentLoaded',function(event){
	      			// 	alert('loaded')
	      			// });
	      		}
	      	},
	      	'slide11@path' : {
	      		templateUrl: "views/path/slide11.html",
	      		controller : function($scope){

	      		}
	      	},
	      	'slide12@path' : {
	      		templateUrl: "views/path/slide12.html",
	      		controller : function($scope){

	      		}
	      	}
	      }
	    })

  	});
