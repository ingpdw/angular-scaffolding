'use strict';

/* Directives */
angular.module('directive.sampleDirective', []).
directive('sampleDirective', function() {
	return {
		restrict: 'C',
		template: '<div>{{msg}}</div>',
		compile: function compile( tElement, tAttrs, transclude ){
			return {
				pre: function preLink( scope, element, attr, controller ){},
				post: function postLink( scope, element, attr, controller ){
					//TODO

					element.on( 'click', function(){
						scope.msg = 'hihi';
						scope.$apply();

						// scope.$apply( function(){
						// 	scope.msg = hihi;
						// })
					});
				}
			}
		}
	}
});