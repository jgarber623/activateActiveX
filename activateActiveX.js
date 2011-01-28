/* ----- License and Acknowledgements ----------------------------------- */
/*
	This software is licensed under the CC-LGPL <http://creativecommons.org/licenses/LGPL/2.1/>
	
	activateActiveX v1.0 (published 7 May 2006)
	onDomReady v1.0 (published 7 May 2006) is based on the following works:
		- brothercake's domFunction <http://www.brothercake.com/site/resources/scripts/domready/>
		- Dave Rolsky's DOM.Ready <http://www.openjsan.org/doc/a/au/autarch/DOM/Ready/0.14/lib/DOM/Ready.html>
*/


/* ----- Run function when DOM is loaded -------------------------------- */
function onDomReady( f ) {
	var t = setInterval( function() {
		if ( typeof document.getElementsByTagName != "undefined" && typeof document.getElementById != "undefined" && ( document.getElementsByTagName( "body" )[0] != null || document.body != null ) ) {
			f(); clearInterval( t );
		}
	}, 250 );
}


/* ----- Flash activation for IE ---------------------------------------- */
function activateActiveX() {
	if ( !document.getElementsByTagName || !document.body.outerHTML || !document.compatMode ) return false;
	var elems = new Array( "object", "embed", "applet" );
	for ( h = 0; h < elems.length; h++ ) {
		var objects = document.getElementsByTagName( elems[h] );
		for( var i = 0; i < objects.length; i++ ) {
			var params = "";
			for ( var j = 0; j < objects[i].childNodes.length; j++ ) {
				params += objects[i].childNodes[j].outerHTML;
			}
			objects[i].outerHTML = objects[i].outerHTML.replace( "</" + elems[h].toUpperCase() + ">", params + "</" + elems[h].toUpperCase() + ">" );
		}
	}
}
onDomReady( activateActiveX );