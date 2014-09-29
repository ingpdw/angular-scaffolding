'use strict';

/* Services */
angular.module('services', []).
	value( '$version', '0.0.1' ).
	constant( 'CONFIG', { 
		'VERSION': '0.0.1'
	}).
	provider( '$projectName', function(){
		this.$get = function(){
			return 'sample';
		}
	}).
	service( '$description', function(){
		this.getVersion = function() {
	    	return 'sample';
	    };
	});
