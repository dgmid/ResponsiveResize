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

var devices = {};
	
	// categories...
	devices['Apple'] 			= {};
	devices['Alcatel'] 			= {};
	devices['Amazon'] 			= {};
	devices['Asus'] 			= {};
	devices['Blackberry'] 		= {};
	devices['HP'] 				= {};
	devices['HTC'] 				= {};
	devices['Lenovo'] 			= {};
	devices['Motorola'] 		= {};
	devices['Nokia'] 			= {};
	devices['Samsung'] 			= {};
	devices['Sharp'] 			= {};
	devices['Sony Ericsson'] 	= {};
	devices['Sony'] 			= {};
	devices['Desktop Monitor'] 	= {};
	
	// Apple
	
	devices['Apple']['iPhone Portrait'] = '320:480';
	devices['Apple']['iPhone Landscape'] = '480:320';
	
	devices['Apple']['iPod Touch Portrait'] = '320:480';
	devices['Apple']['iPod Touch Portrait'] = '480:320';
	
	devices['Apple']['iPhone5 Portrait'] = '320:568';
	devices['Apple']['iPhone5 Landscape'] = '568:320';
	
	devices['Apple']['iPad Portrait'] = '768:1024';
	devices['Apple']['iPad Landscape'] = '1024:768';
	
	// Alcatel
	
	devices['Alcatel']['One Touch T20'] = '600:1024';
	
	// Amazon
	
	devices['Amazon']['Kindle Fire'] = '600:1024';
	devices['Amazon']['Kindle Fire HD'] = '800:1280';
	
	// Asus
	
	devices['Asus']['Asus Eee 1000'] = '600:1024';
	devices['Asus']['Asus Google Nexus 7'] = '800:1280';
	
	// BlackBerry
	
	devices['Blackberry']['Torch'] = '480:800';
	devices['Blackberry']['Bold Touch 9900'] = '480:640';
	devices['Blackberry']['Curve'] = '480:360';
	
	// HP
	
	devices['HP']['TouchPad'] = '768:1024';
	
	// HTC
	
	devices['HTC']['Desire'] = '320:533';
	devices['HTC']['One X'] = '360:640';
	devices['HTC']['Touch Diamond'] = '480:640';
	devices['HTC']['Touch HD'] = '480:800';
	devices['HTC']['Sensation'] = '540:960';
	
	// Lenovo
	
	devices['Lenovo']['IdeaTab A2109'] = '800:1280';

	// Motorola
	
	devices['Motorola']['Milestone'] = '320:570';
	devices['Motorola']['RAZR i'] = '360:640';
	
	// Nokia
	
	devices['Nokia']['E6'] = '480:640';
	devices['Nokia']['Lumina'] = '480:800';
	devices['Nokia']['Lumina 920'] = '768:1280';
		
	// Samsung
	
	devices['Samsung']['Galaxy Tab'] = '400:683';
	
	// Sharp
	
	devices['Sharp']['SX862'] = '480:854';
	devices['Sharp']['941SH'] = '480:1024';
	devices['Sharp']['IS03'] = '640:960';
	
	// Sony Ericsson
	
	devices['Sony Ericsson']['Satio'] = '360:640';
	devices['Sony Ericsson']['U'] = '480:854';
	devices['Sony Ericsson']['P'] = '540:960';
	
	// Sony
	
	devices['Sony']['Experia Tablet S'] = '800:1280';
	
	// Desktop Monitor
	
	devices['Desktop Monitor']['1024x768'] = '1024:768';
	devices['Desktop Monitor']['1280x800'] = '1280:800';
	devices['Desktop Monitor']['1366x768'] = '1366:768';
	devices['Desktop Monitor']['1440x900'] = '1440:900';
	devices['Desktop Monitor']['1680x1050'] = '1680:1050';
	devices['Desktop Monitor']['1920x1080'] = '1920:1080';
	devices['Desktop Monitor']['2560x1440'] = '2560:1440';
