/*
		Copyright (C) 2013 Midwinter Duncan Grant http://www.midwinter-dg.com/
		Copyright (C) 2013 Duncan Midwinter
		
		Responsive Resize makes use of the following resources:
		jQuery					http://jquery.com
		jQueryUI				http://jqueryui.com
		jQuery AlphaNumeric		http://www.shiguenori.com/material/alphanumeric/index.html
		spin.js  				http://fgnass.github.com/spin.js/
		jquery.spin.js 			https://gist.github.com/its-florida/1290439
		IFrame Loader			http://project.ajaxpatterns.org/jquery-iframe
		UAParser.js				https://github.com/faisalman/ua-parser-js
*/

//////////////////////// PRESETS ///////////////////////////////////

//////////////////////// CURRENT DIMENSIONS ////////////////////////

if(localStorage.getItem("width") === null) { localStorage.setItem("width" , "568"); } // current width...
if(localStorage.getItem("height") === null) { localStorage.setItem("height" , "320"); } // current height...

//////////////////////// BUTTONS ///////////////////////////////////

if(localStorage.getItem('buttons') === null) {	
	
	var buttons = {};
	
	buttons['1360883779251|Apple'] = 'iPhone5 Portrait|320:568';
	buttons['1360883779252|Apple'] = 'iPhone5 Landscape|568:320';
	buttons['1360883779253|Apple'] = 'iPad Portrait|768:1024';
	buttons['1360883779254|Apple'] = 'iPad Landscape|1024:768';
	
	localStorage.setItem('buttons', JSON.stringify(buttons));

}
	
//////////////////////// HISTORY ///////////////////////////////////

if(localStorage.getItem('history') === null) {

	var history = new Array();
	localStorage.setItem('history', JSON.stringify(history));

}

if(localStorage.getItem('last') === null) { localStorage.setItem("last", "responsive-resize.midwinter-dg.com"); }

//////////////////////// THEME /////////////////////////////////////

if(localStorage.getItem("theme") === null) { localStorage.setItem("theme" , "Dark"); } // css theme...

//////////////////////// PREFERENCES ///////////////////////////////

if(localStorage.getItem("list") === null) { localStorage.setItem("list" , "20"); } // items in history...
if(localStorage.getItem("inc") === null) { localStorage.setItem("inc" , "1"); } // +/- increment amount...
if(localStorage.getItem("man") === null) { localStorage.setItem("man" , "1"); } // show manufacturer name on buttons...
if(localStorage.getItem("getLast") === null) { localStorage.setItem("getLast" , "1"); } // open last site on launch...
if(localStorage.getItem("userAgent") === null) { localStorage.setItem("userAgent" , "1"); } // display User Agent string...

