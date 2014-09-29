'use strict';

/* Directives */
angular.module('directive.sample2Directive', []).
directive('sample2Directive', function() {
	return {
		restrict: 'C',
		compile: function compile( tElement, tAttrs, transclude ){
			return {
				pre: function preLink( scope, element, attr, controller ){},
				post: function postLink( scope, element, attr, controller ){
					//TODO
				}
			}
		}
	}
});