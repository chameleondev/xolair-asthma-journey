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
    'ui.odometer',
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
	      				$rootScope.currentSlide = slide;
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
	      		templateUrl: "views/path/index.html"
	      	},
	      	'slide11@path' : {
	      		templateUrl: "views/path/slide11.html"
	      	},
	      	'slide12@path' : {
	      		templateUrl: "views/path/slide12.html"
	      	},
	      	'slide13@path' : {
	      		templateUrl: "views/path/slide13.html"
	      	},
	      	'slide14@path' : {
	      		templateUrl: "views/path/slide14.html"
	      	},
	      	'slide141@path' : {
	      		templateUrl: "views/path/slide141.html"
	      	},
	      	'slide142@path' : {
	      		templateUrl: "views/path/slide142.html"
	      	},
	      	'slide15@path' : {
	      		templateUrl: "views/path/slide15.html"
	      	},
	      	'slide151@path' : {
	      		templateUrl: "views/path/slide151.html"
	      	},
	      	'slide16@path' : {
	      		templateUrl: "views/path/slide16.html",
	      		controller : function($scope,$timeout,$rootScope){

	      			$rootScope.$watch('currentSlide',function(newVal,oldVal){

	      				console.log('new val: ',newVal);
	      				console.log('old val: ',oldVal);

	      				if (newVal === 8) {
	      					$timeout(function(){
	      						$scope.num1 = 6500;
				      			$scope.num2 = 771;
				      			$scope.num3 = 31;
				      			$scope.num4 = 3200;
	      					},1000);
		      				
	      				} else{
	      					$scope.num1 = 0;
			      			$scope.num2 = 0;
			      			$scope.num3 = 0;
			      			$scope.num4 = 0;
	      				}
	      				

	      			});
	      			

	      		}
	      	},
	      	'slide161@path' : {
	      		templateUrl: "views/path/slide161.html"
	      	},
	      	'slide162@path' : {
	      		templateUrl: "views/path/slide162.html"
	      	},
	      	'slide163@path' : {
	      		templateUrl: "views/path/slide163.html"
	      	},
	      	'slide17@path' : {
	      		templateUrl: "views/path/slide17.html"
	      	},
	      	'slide18@path' : {
	      		templateUrl: "views/path/slide18.html"
	      	}
	      }
	    })

  	});
