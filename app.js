'use strict';

jQuery( document ).ready( function(){
	var bodyEl = jQuery('body').get(0);
	var app = angular.bootstrap( bodyEl, [
		'ctrl.sampleController',
		'directives',
		'services',
		'exception'
	]);
});
