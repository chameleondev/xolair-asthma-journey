angular.module('xolairAsthmaJourneyApp')
	.directive('swiper',function(){
		return {
			restrict : 'A',
			link : function($scope, iElm, iAttrs){

				var mySwiper,vid,playerPopup,setVideo,newPlayer,videoNotPresent;

				// find the video popup
				playerPopup = document.getElementsByClassName('video')[0];

				// check to see if the slide has a video attached
				videoNotPresent = function(){

	    				var ele = document.querySelector('.swiper-slide-active');
	    				
	    				if (angular.element(ele).attr('vid')) {
	    					$scope.noVid = false;
	    					$scope.$apply();
	    				}else{
	    					$scope.noVid = true;
	    					$scope.$apply();
	    				}
	    				
	    		};

	    		// set the vid attribute to the video element, timeout used to wait for active slide to be set
			    setVideo = function(){
			    	// find the active slide and get the video from the vid attribute
		    		vid = document.getElementsByClassName('swiper-slide-active')[0];
			      	vid = vid.getAttribute('vid');
			      	console.log(vid);
			      	// create a video element and set attributes
			    	newPlayer = document.createElement('video');
			    	newPlayer.width = 854;
			    	newPlayer.height = 480;
			      	newPlayer.setAttribute('src',vid);
			      	// append the newly created video element to the popup
			      	playerPopup.appendChild(newPlayer);
			      	// enable html5 video controls
			      	newPlayer.setAttribute('controls',true);
			    };



				
			    
			    // initialize the swiper / currentSlide is set in rootScope from selectSlide()
				mySwiper = new Swiper (iElm, {
			      direction: 'horizontal',
			      initialSlide : $scope.currentSlide,
			      onSlideChangeEnd : videoNotPresent
			    });



				// watch showVideo on scope
			    $scope.$watch('showVideo',function(){
			    	
			    	// if true
			    	if ($scope.showVideo) {
			    		// stop swiper
			    		mySwiper.detachEvents();
			    		//create video element and set attributes
			    		setVideo();
			    	}else{
			    		// start swiper
			    		mySwiper.attachEvents();
			    		// if the newPlayer exists 
			    		if (newPlayer !== undefined) {
			    			playerPopup.removeChild(newPlayer);
			    		}
			    	}

			    });
	  
			}
		}
	});
