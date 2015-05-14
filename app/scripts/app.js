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

  		$urlRouterProvider.otherwise("/");

  		$stateProvider
	    .state('map', {
	      url: "/",
	      views: {
	      	'main' : {
	      		templateUrl: "views/map.html",
	      		controller : function($scope,$rootScope,$state){

	      			var mySwiper,vid,playerPopup,setVideo,newPlayer,videoNotPresent,poster;

	      			if($rootScope.count === 0){
	      				$scope.showVideo = true;
	      			}
	      			

	      			$scope.selectSlide = function(slide,event){
	      				$rootScope.currentSlide = slide;
	      				$state.go('path');
	      				event.target.classList.add('active');
	      			};

		      		setVideo = function(){
				    	// find the active slide and get the video from the vid attribute
			    		vid = document.getElementsByClassName('video-btn')[0];
			    		playerPopup = document.getElementsByClassName('video')[0];
				      	poster = vid.getAttribute('poster');
				      	vid = vid.getAttribute('vid');
				      	console.log('poster:',poster);
				      	console.log(vid);
				      	// create a video element and set attributes
				    	newPlayer = document.createElement('video');
				      	newPlayer.setAttribute('poster',poster);
				    	newPlayer.width = 746;
				    	newPlayer.height = 420;
				      	newPlayer.setAttribute('src',vid);
				      	// append the newly created video element to the popup
				      	playerPopup.appendChild(newPlayer);
				      	// enable html5 video controls
				      	newPlayer.setAttribute('controls',true);
				      	newPlayer.setAttribute('autoplay',true);

				      	newPlayer.onended = function(){	
				      		$scope.showVideo = false;
				      		$scope.$apply();
				      	};
				    };
		      			
		      		// watch showVideo on scope
				    $scope.$watch('showVideo',function(){
				    	
				    	// if true
				    	if ($scope.showVideo) {
				    		//create video element and set attributes
				    		setVideo();
				    		$rootScope.count++;
				    	}else{
				    		// if the newPlayer exists 
				    		if (newPlayer !== undefined) {
				    			playerPopup.removeChild(newPlayer);
				    		}
				    	}

				    });

	      		}
	      	}
	      }
	    })

	    .state('path', {
	      url: "/",
	      views : {
	      	'main' : {
	      		templateUrl: "views/path/index.html",
	      		controller : function ($scope,$state){

	      			$scope.swipe = function(){
	      				$state.go('map')
	      			};

	      		}
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
	      		templateUrl: "views/path/slide16.html"
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

angular
  .module('xolairAsthmaJourneyApp')
  .run(function($rootScope,$state,$timeout){
  	$rootScope.count = 0;


  	 // idleTimer() takes an optional object argument that defines any/all setting
    $( document ).idleTimer( {
        timeout:1000 * 60 * 5, 
        idle:true
    });


     $( document ).on( "idle.idleTimer", function(event, elem, obj){
        $state.go('map');
    });

     $rootScope.$watch('currentSlide',function(newVal,oldVal){

		console.log('new val: ',newVal);
		console.log('old val: ',oldVal);

		if (newVal === 8) {
			$timeout(function(){
				$rootScope.num1 = 6500;
	  			$rootScope.num2 = 771;
	  			$rootScope.num3 = 31;
	  			$rootScope.num4 = 3200;
			},1000);
			
		} else{
			$rootScope.num1 = 0;
			$rootScope.num2 = 0;
			$rootScope.num3 = 0;
			$rootScope.num4 = 0;
		}
		

	});


  })