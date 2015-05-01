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
	      	},
	      	'slide13@path' : {
	      		templateUrl: "views/path/slide13.html",
	      		controller : function($scope){

	      		}
	      	},
	      	'slide14@path' : {
	      		templateUrl: "views/path/slide14.html",
	      		controller : function($scope){

	      		}
	      	},
	      	'slide141@path' : {
	      		templateUrl: "views/path/slide141.html",
	      		controller : function($scope){

	      		}
	      	},
	      	'slide142@path' : {
	      		templateUrl: "views/path/slide142.html",
	      		controller : function($scope){

	      		}
	      	},
	      	'slide15@path' : {
	      		templateUrl: "views/path/slide15.html",
	      		controller : function($scope){

	      		}
	      	},
	      	'slide151@path' : {
	      		templateUrl: "views/path/slide151.html",
	      		controller : function($scope){

	      		}
	      	},
	      	'slide16@path' : {
	      		templateUrl: "views/path/slide16.html",
	      		controller : function($scope){

	      		}
	      	},
	      	'slide161@path' : {
	      		templateUrl: "views/path/slide161.html",
	      		controller : function($scope){

	      		}
	      	},
	      	'slide162@path' : {
	      		templateUrl: "views/path/slide162.html",
	      		controller : function($scope){

	      		}
	      	},
	      	'slide163@path' : {
	      		templateUrl: "views/path/slide163.html",
	      		controller : function($scope){

	      		}
	      	},
	      	'slide17@path' : {
	      		templateUrl: "views/path/slide17.html",
	      		controller : function($scope){

	      		}
	      	},
	      	'slide18@path' : {
	      		templateUrl: "views/path/slide18.html",
	      		controller : function($scope){

	      		}
	      	}
	      }
	    })

  	});
