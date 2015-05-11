angular.module('xolairAsthmaJourneyApp')
	.directive('pop',function(){
		return {
			link: function($scope, iElm, iAttrs){

				var milliSeconds;

				// add wait class to the element
				iElm[0].classList.add('wait');

				// calculate the number of milliseconds to use
				milliSeconds = Number(iAttrs.pop) * 1000;

				console.log(milliSeconds);

				// after time set in attribute, remove wait class
				setTimeout(function(){
					iElm[0].classList.remove('wait')
				},milliSeconds);


			}
		}
	});

