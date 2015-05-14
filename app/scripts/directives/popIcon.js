angular.module('xolairAsthmaJourneyApp')
	.directive('pop',function(){
		return {
			link: function($scope, iElm, iAttrs){

				var milliSeconds,animate;

				// add wait class to the element
				iElm[0].classList.add('wait');

				// calculate the number of milliseconds to use
				milliSeconds = Number(iAttrs.pop) * 1000;

				// after time set in attribute, remove wait class
				// self running function that is assigned to a variable
				(animate = function(){
					setTimeout(function(){
						iElm[0].classList.remove('wait')
					},milliSeconds);
				})();
				
				// every 30 seconds re-animate
				setInterval(function(){

					iElm[0].classList.add('wait');
					animate();

				},30 * 1000);

			}
		}
	});

