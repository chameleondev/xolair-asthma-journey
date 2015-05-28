angular.module('xolairAsthmaJourneyApp')
	.directive('animateNumber',function(){
		return {
			link: function($scope, iElm, iAttrs){
				
				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');

				$scope.$on('slideChanged',function(event,slide){
					console.log('event',event);
					console.log('slide',slide);

					if (slide === 8) {

						iElm.find('.num1 span').animateNumber({ 
							number: 6500,
							numberStep: comma_separator_number_step
						});
						iElm.find('.num2').animateNumber({ 
							number: 771,
							numberStep: comma_separator_number_step
						});
						iElm.find('.num3').animateNumber({ 
							number: 31,
							numberStep: comma_separator_number_step
						});
						iElm.find('.num4 span').animateNumber({ 
							number: 3200,
							numberStep: comma_separator_number_step
						});

					} else{
						iElm.find('.num1 span').animateNumber({ 
							number: 0,
							numberStep: comma_separator_number_step
						});
						iElm.find('.num2').animateNumber({ 
							number: 0,
							numberStep: comma_separator_number_step
						});
						iElm.find('.num3').animateNumber({ 
							number: 0,
							numberStep: comma_separator_number_step
						});
						iElm.find('.num4 span').animateNumber({ 
							number: 0,
							numberStep: comma_separator_number_step
						});
					}
					
				})
			}
		}
	});

