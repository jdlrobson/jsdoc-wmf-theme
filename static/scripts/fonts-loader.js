/* eslint-disable vars-on-top, one-var */
/* global FontFaceObserver, Promise */
( function () {
	if ( document.head && 'Promise' in window ) {
		var html = document.documentElement;

		if ( sessionStorage.getItem( 'fontsLoaded' ) ) {
			html.classList.add( 'fonts-loaded' );
		} else {
			var script = document.createElement( 'script' );
			script.src = './wmf/js/vendor/fontfaceobserver/fontfaceobserver.standalone.js';

			script.onload = function () {
				var sansSerif = new FontFaceObserver( 'Lato' ),
					serif = new FontFaceObserver( 'Charter' );

				Promise.all( [
					sansSerif.load(),
					serif.load()
				] ).then( function () {
					html.classList.add( 'fonts-loaded' );
					sessionStorage.setItem( 'fontsLoaded', 1 );
				} );
			};
			document.head.appendChild( script );
		}
	}
}() );
