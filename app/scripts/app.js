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
	      		controller : function($scope,Videos){
	      			$scope.video = Videos.name;
	      			// $scope.$on('$viewContentLoaded',function(event){
	      			// 	alert('loaded')
	      			// });

	    			// $scope.videoNotPresent = function(){

	    			// 	var ele = document.querySelector('.swiper-slide-active');
	    			// 	console.log('hello');
	    				
	    			// 	if (angular.element(ele).attr('vid')) {
	    			// 		return false;
	    			// 	}else{
	    			// 		return true;
	    			// 	}
	    				
	    			// }
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

angular
  .module('xolairAsthmaJourneyApp').factory('Videos',function(){

  	return{
  		name : 'Video of the year!'
  	};

  });