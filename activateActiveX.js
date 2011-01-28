/*  activateActiveX 1.1
	Copyright 2006 Jason Garber and Tavis Tucker
	This software is licensed under the CC-LGPL <http://creativecommons.org/licenses/LGPL/2.1/>
*/

/*
onDomReady : Runs a specified function when DOM is loaded

@param {String} func : The name of the function to be called
	You may also include parameters to be passed to the function e.g. onDomReady(myFunction(param1,param2));
	This can also be a function literal as in onDomReady(function() { more code to run on page load });

Source : brothercake's domFunction <http://www.brothercake.com/site/resources/scripts/domready/>
	and Dave Rolsky's DOM.Ready <http://www.openjsan.org/doc/a/au/autarch/DOM/Ready/0.14/lib/DOM/Ready.html>
*/

function onDomReady(func) {
	var t = setInterval( function() {
		if ( typeof document.getElementsByTagName != "undefined" && typeof document.getElementById != "undefined" && ( document.getElementsByTagName( "body" )[0] != null || document.body != null ) ) {
			if ( typeof func == "function" ) {
				func();
				clearInterval(t);
			}
		}
	}, 250 );
}


/*
activateActiveX : Activates ActiveX content for Internet Explorer 6.0+ to avoid requiring a user to click before using an object

Source : <http://sixtwothree.org/blog/archives/2006/05/20/activateactivex-11/>
*/

function activateActiveX() {
	if ( !document.getElementsByTagName || !document.body.outerHTML || !document.compatMode ) return false;
	var elems = new Array( "object", "applet" );
	for ( i = 0, j = elems.length; i < j; i++ ) {
		var objects = document.getElementsByTagName(elems[i]);
		for ( k = 0, l = objects.length; k < l; k++ ) {
			var params = "";
			for ( m = 0, n = objects[k].childNodes.length; m < n; m++ ) {
				params += objects[k].childNodes[m].outerHTML;
			}
			objects[k].outerHTML = objects[k].outerHTML.replace( "</" + elems[i].toUpperCase() + ">", params + "</" + elems[i].toUpperCase() + ">" );
		}
	}
}

onDomReady(activateActiveX);