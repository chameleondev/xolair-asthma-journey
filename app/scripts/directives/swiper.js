angular.module('xolairAsthmaJourneyApp')
	.directive('swiper',function($timeout){
		return {
			restrict : 'A',
			link : function($scope, iElm, iAttrs){

				var mySwiper,vid,playerPopup,setVideo,newPlayer,videoNotPresent,poster;

				// find the video popup
				playerPopup = document.getElementsByClassName('video')[0];


				// check to see if the slide has a video attached
				videoNotPresent = function(){

						if (mySwiper) {
							$scope.$parent.currentSlide = mySwiper.activeIndex;

							$scope.$broadcast('slideChanged',mySwiper.activeIndex);
						}

						

	    				var ele = document.querySelector('.swiper-slide-active');

	    				$timeout(function(){

	    					if (angular.element(ele).attr('vid')) {
		    					$scope.noVid = false;
		    				}else{
		    					$scope.noVid = true;
		    				}

	    				});				
	    				
	    		};

	    		$scope.$on('$stateChangeSuccess', 
				function(event, toState, toParams, fromState, fromParams){
					videoNotPresent();
				});

	    		// set the vid attribute to the video element, timeout used to wait for active slide to be set
			    setVideo = function(){
			    	// find the active slide and get the video from the vid attribute
		    		vid = document.getElementsByClassName('swiper-slide-active')[0];
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



				
			    
			    // initialize the swiper / currentSlide is set in rootScope from selectSlide()
				mySwiper = new Swiper (iElm, {
			      direction: 'horizontal',
			      initialSlide : $scope.currentSlide,
			      onSlideChangeEnd : videoNotPresent,
			      resistanceRatio : 0
			    });

			 //    mySwiper.on('slideChangeStart', function () {
				//     console.log('slide change start');
				// });
				 

				$scope.nextSlide = function(){
					mySwiper.slideNext();
				};

				// watch showVideo on scope
			    $scope.$watchGroup(['showVideo','graph1','graph2'],function(){
			    	
			    	// if true
			    	if ($scope.showVideo) {
			    		// stop swiper
			    		mySwiper.detachEvents();
			    		//create video element and set attributes
			    		setVideo();
			    	} else if($scope.graph1 || $scope.graph2){
			   			mySwiper.detachEvents();
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
