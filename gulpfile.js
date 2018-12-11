var gulp 	= require('gulp'),
	wrench  = require('wrench');

wrench.readdirSyncRecursive( './gulp' ).filter( function( file ) {

	return (/\.(js)$/i);

}).map( function( file ) {

	require('./gulp/' + file);

});