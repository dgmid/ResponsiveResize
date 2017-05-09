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

// jQuery AlphaNumeric	http://www.shiguenori.com/material/alphanumeric/index.html

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(2($){$.c.f=2(p){p=$.d({g:"!@#$%^&*()+=[]\\\\\\\';,/{}|\\":<>?~`.- ",4:"",9:""},p);7 3.b(2(){5(p.G)p.4+="Q";5(p.w)p.4+="n";s=p.9.z(\'\');x(i=0;i<s.y;i++)5(p.g.h(s[i])!=-1)s[i]="\\\\"+s[i];p.9=s.O(\'|\');6 l=N M(p.9,\'E\');6 a=p.g+p.4;a=a.H(l,\'\');$(3).J(2(e){5(!e.r)k=o.q(e.K);L k=o.q(e.r);5(a.h(k)!=-1)e.j();5(e.u&&k==\'v\')e.j()});$(3).B(\'D\',2(){7 F})})};$.c.I=2(p){6 8="n";8+=8.P();p=$.d({4:8},p);7 3.b(2(){$(3).f(p)})};$.c.t=2(p){6 m="A";p=$.d({4:m},p);7 3.b(2(){$(3).f(p)})}})(C);',53,53,'||function|this|nchars|if|var|return|az|allow|ch|each|fn|extend||alphanumeric|ichars|indexOf||preventDefault||reg|nm|abcdefghijklmnopqrstuvwxyz|String||fromCharCode|charCode||alpha|ctrlKey||allcaps|for|length|split|1234567890|bind|jQuery|contextmenu|gi|false|nocaps|replace|numeric|keypress|which|else|RegExp|new|join|toUpperCase|ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('|'),0,{}));

//spin.js  http://fgnass.github.com/spin.js/

!function(t,e,i){var o=["webkit","Moz","ms","O"],r={},n;function a(t,i){var o=e.createElement(t||"div"),r;for(r in i)o[r]=i[r];return o}function s(t){for(var e=1,i=arguments.length;e<i;e++)t.appendChild(arguments[e]);return t}var f=function(){var t=a("style",{type:"text/css"});s(e.getElementsByTagName("head")[0],t);return t.sheet||t.styleSheet}();function l(t,e,i,o){var a=["opacity",e,~~(t*100),i,o].join("-"),s=.01+i/o*100,l=Math.max(1-(1-t)/e*(100-s),t),p=n.substring(0,n.indexOf("Animation")).toLowerCase(),u=p&&"-"+p+"-"||"";if(!r[a]){f.insertRule("@"+u+"keyframes "+a+"{"+"0%{opacity:"+l+"}"+s+"%{opacity:"+t+"}"+(s+.01)+"%{opacity:1}"+(s+e)%100+"%{opacity:"+t+"}"+"100%{opacity:"+l+"}"+"}",f.cssRules.length);r[a]=1}return a}function p(t,e){var r=t.style,n,a;if(r[e]!==i)return e;e=e.charAt(0).toUpperCase()+e.slice(1);for(a=0;a<o.length;a++){n=o[a]+e;if(r[n]!==i)return n}}function u(t,e){for(var i in e)t.style[p(t,i)||i]=e[i];return t}function c(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)if(t[r]===i)t[r]=o[r]}return t}function d(t){var e={x:t.offsetLeft,y:t.offsetTop};while(t=t.offsetParent)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}var h={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",speed:1,trail:100,opacity:1/4,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};function m(t){if(!this.spin)return new m(t);this.opts=c(t||{},m.defaults,h)}m.defaults={};c(m.prototype,{spin:function(t){this.stop();var e=this,i=e.opts,o=e.el=u(a(0,{className:i.className}),{position:i.position,width:0,zIndex:i.zIndex}),r=i.radius+i.length+i.width,s,f;if(t){t.insertBefore(o,t.firstChild||null);f=d(t);s=d(o);u(o,{left:(i.left=="auto"?f.x-s.x+(t.offsetWidth>>1):parseInt(i.left,10)+r)+"px",top:(i.top=="auto"?f.y-s.y+(t.offsetHeight>>1):parseInt(i.top,10)+r)+"px"})}o.setAttribute("aria-role","progressbar");e.lines(o,e.opts);if(!n){var l=0,p=i.fps,c=p/i.speed,h=(1-i.opacity)/(c*i.trail/100),m=c/i.lines;(function y(){l++;for(var t=i.lines;t;t--){var r=Math.max(1-(l+t*m)%c*h,i.opacity);e.opacity(o,i.lines-t,r,i)}e.timeout=e.el&&setTimeout(y,~~(1e3/p))})()}return e},stop:function(){var t=this.el;if(t){clearTimeout(this.timeout);if(t.parentNode)t.parentNode.removeChild(t);this.el=i}return this},lines:function(t,e){var i=0,o;function r(t,o){return u(a(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:t,boxShadow:o,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*i+e.rotate)+"deg) translate("+e.radius+"px"+",0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(;i<e.lines;i++){o=u(a(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:n&&l(e.opacity,e.trail,i,e.lines)+" "+1/e.speed+"s linear infinite"});if(e.shadow)s(o,u(r("#000","0 0 4px "+"#000"),{top:2+"px"}));s(t,s(o,r(e.color,"0 0 1px rgba(0,0,0,.1)")))}return t},opacity:function(t,e,i){if(e<t.childNodes.length)t.childNodes[e].style.opacity=i}});(function(){function t(t,e){return a("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',e)}var e=u(a("group"),{behavior:"url(#default#VML)"});if(!p(e,"transform")&&e.adj){f.addRule(".spin-vml","behavior:url(#default#VML)");m.prototype.lines=function(e,i){var o=i.length+i.width,r=2*o;function n(){return u(t("group",{coordsize:r+" "+r,coordorigin:-o+" "+-o}),{width:r,height:r})}var a=-(i.width+i.length)*2+"px",f=u(n(),{position:"absolute",top:a,left:a}),l;function p(e,r,a){s(f,s(u(n(),{rotation:360/i.lines*e+"deg",left:~~r}),s(u(t("roundrect",{arcsize:i.corners}),{width:o,height:i.width,left:i.radius,top:-i.width>>1,filter:a}),t("fill",{color:i.color,opacity:i.opacity}),t("stroke",{opacity:0}))))}if(i.shadow)for(l=1;l<=i.lines;l++)p(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;l<=i.lines;l++)p(l);return s(e,f)};m.prototype.opacity=function(t,e,i,o){var r=t.firstChild;o=o.shadow&&o.lines||0;if(r&&e+o<r.childNodes.length){r=r.childNodes[e+o];r=r&&r.firstChild;r=r&&r.firstChild;if(r)r.opacity=i}}}else n=p(e,"animation")})();if(typeof define=="function"&&define.amd)define(function(){return m});else t.Spinner=m}(window,document);

//spinner settings...
var opts = {
  lines: 13, // The number of lines to draw
  length: 24, // The length of each line
  width: 6, // The line thickness
  radius: 22, // The radius of the inner circle
  corners: 1, // Corner roundness (0..1)
  rotate: 0, // The rotation offset
  color: '#fff', // #rgb or #rrggbb
  speed: 1, // Rounds per second
  trail: 60, // Afterglow percentage
  shadow: true, // Whether to render a shadow
  hwaccel: false, // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: 'auto', // Top position relative to parent in px
  left: 'auto' // Left position relative to parent in px
};

//jquery.spin.js by Bradley Smith: https://gist.github.com/its-florida/1290439

(function($) {
	$.fn.spin = function(opts, color) {
		var presets = {
			"tiny": { lines: 8, length: 2, width: 2, radius: 3 },
			"small": { lines: 8, length: 4, width: 3, radius: 5 },
			"large": { lines: 10, length: 8, width: 4, radius: 8 }
		};
		if (Spinner) {
			return this.each(function() {
				var $this = $(this),
					data = $this.data();
				
				if (data.spinner) {
					data.spinner.stop();
					delete data.spinner;
				}
				if (opts !== false) {
					if (typeof opts === "string") {
						if (opts in presets) {
							opts = presets[opts];
						} else {
							opts = {};
						}
						if (color) {
							opts.color = color;
						}
					}
					data.spinner = new Spinner($.extend({color: $this.css('color')}, opts)).spin(this);
				}
			});
		} else {
			throw "Spinner class not available.";
		}
	};
})(jQuery);



/*
 * IFrame Loader Plugin for JQuery
 * - Notifies your event handler when iframe has finished loading
 * - Your event handler receives loading duration (as well as iframe)
 * - Optionally calls your timeout handler
 *
 * http://project.ajaxpatterns.org/jquery-iframe
 *
 * The MIT License
 *
 * Copyright (c) 2009, Michael Mahemoff
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

(function($) {

  var timer;

  $.fn.src = function(url, onLoad, options) {
    setIFrames($(this), onLoad, options, function() {
      this.src = url;
    });
    return $(this);
  }

  $.fn.squirt = function(content, onLoad, options) {

    setIFrames($(this), onLoad, options, function() {
      var doc = this.contentDocument || this.contentWindow.document;
      doc.open();
      doc.writeln(content);
      doc.close();
    });
    return this;

  }

  function setIFrames(iframes, onLoad, options, iFrameSetter) {
    iframes.each(function() {
      if (this.tagName=="IFRAME") setIFrame(this, onLoad, options, iFrameSetter);
    });
  }

  function setIFrame(iframe, onLoad, options, iFrameSetter) {

    var iframe;
    iframe.onload = null;
    if (timer) clearTimeout(timer);

    var defaults = {
      timeoutDuration: 0,
      timeout: null
    }
    var opts = $.extend(defaults, options);
    if (opts.timeout && !opts.timeoutDuration) opts.timeoutDuration = 60000;

    opts.frameactive = true;
    var startTime = (new Date()).getTime();
    if (opts.timeout) {
      var timer = setTimeout(function() {
        opts.frameactive=false; 
        iframe.onload=null;
        if (opts.timeout) opts.timeout(iframe, opts.timeout);
      }, opts.timeoutDuration);
    };

    var onloadHandler = function() {
      var duration=(new Date()).getTime()-startTime;
      if (timer) clearTimeout(timer);
      if (onLoad && opts.frameactive) onLoad.apply(iframe,[duration]);
      opts.frameactive=false;
    }
    iFrameSetter.apply(iframe);
    iframe.onload = onloadHandler;
    opts.completeReadyStateChanges=0;
    iframe.onreadystatechange = function() { // IE ftw
	    if (++(opts.completeReadyStateChanges)==3) onloadHandler();
    }

    return iframe;

  };

})(jQuery);


// UAParser.js v0.6.0
// Lightweight JavaScript-based User-Agent string parser
// https://github.com/faisalman/ua-parser-js
//
// Copyright © 2012-2013 Faisalman <fyzlman@gmail.com>
// Dual licensed under GPLv2 & MIT
(function(e,t){"use strict";var n="",r="?",i="function",s="undefined",o="object",u="major",a="model",f="name",l="type",c="vendor",h="version",p="architecture",d="console",v="mobile",m="tablet",g={has:function(e,t){return t.toLowerCase().indexOf(e.toLowerCase())!==-1},lowerize:function(e){return e.toLowerCase()}},y={rgx:function(){for(var e,n=0,r,u,a,f,l,c,h=arguments;n<h.length;n+=2){var p=h[n],d=h[n+1];if(typeof e===s){e={};for(a in d)f=d[a],typeof f===o?e[f[0]]=t:e[f]=t}for(r=u=0;r<p.length;r++){l=p[r].exec(this.getUA());if(!!l){for(a in d)c=l[++u],f=d[a],typeof f===o&&f.length>0?f.length==2?typeof f[1]==i?e[f[0]]=f[1].call(this,c):e[f[0]]=f[1]:f.length==3?typeof f[1]===i&&(!f[1].exec||!f[1].test)?e[f[0]]=c?f[1].call(this,c,f[2]):t:e[f[0]]=c?c.replace(f[1],f[2]):t:f.length==4&&(e[f[0]]=c?f[3].call(this,c.replace(f[1],f[2])):t):e[f]=c?c:t;break}}if(!!l)break}return e},str:function(e,n){for(var i in n)if(typeof n[i]===o&&n[i].length>0){for(var s in n[i])if(g.has(n[i][s],e))return i===r?t:i}else if(g.has(n[i],e))return i===r?t:i;return e}},b={browser:{oldsafari:{major:{1:["/8","/1","/3"],2:"/4","?":"/"},version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",RT:"ARM"}}}},w={browser:[[/(opera\smini)\/((\d+)?[\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i,/(opera).+version\/((\d+)?[\w\.]+)/i,/(opera)[\/\s]+((\d+)?[\w\.]+)/i],[f,h,u],[/\s(opr)\/((\d+)?[\w\.]+)/i],[[f,"Opera"],h,u],[/(kindle)\/((\d+)?[\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i,/(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i,/(rekonq)((?:\/)[\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt)\/((\d+)?[\w\.-]+)/i],[f,h,u],[/(yabrowser)\/((\d+)?[\w\.]+)/i],[[f,"Yandex"],h,u],[/(comodo_dragon)\/((\d+)?[\w\.]+)/i],[[f,/_/g," "],h,u],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i],[f,h,u],[/(dolfin)\/((\d+)?[\w\.]+)/i],[[f,"Dolphin"],h,u],[/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i],[[f,"Chrome"],h,u],[/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i],[h,u,[f,"Mobile Safari"]],[/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i],[h,u,f],[/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i],[f,[u,y.str,b.browser.oldsafari.major],[h,y.str,b.browser.oldsafari.version]],[/(konqueror)\/((\d+)?[\w\.]+)/i,/(webkit|khtml)\/((\d+)?[\w\.]+)/i],[f,h,u],[/(navigator|netscape)\/((\d+)?[\w\.-]+)/i],[[f,"Netscape"],h,u],[/(swiftfox)/i,/(iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i,/(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i,/(uc\s?browser|polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?((\d+)?[\w\.]+)/i,/(links)\s\(((\d+)?[\w\.]+)/i,/(gobrowser)\/?((\d+)?[\w\.]+)*/i,/(ice\s?browser)\/v?((\d+)?[\w\._]+)/i,/(mosaic)[\/\s]((\d+)?[\w\.]+)/i],[f,h,u]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[p,"amd64"]],[/((?:i[346]|x)86)[;\)]/i],[[p,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[p,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[p,/ower/,"",g.lowerize]],[/(sun4\w)[;\)]/i],[[p,"sparc"]],[/(ia64(?=;)|68k(?=\))|arm(?=v\d+;)|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[p,g.lowerize]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[a,c,[l,m]],[/(hp).+(touchpad)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[c,a,[l,m]],[/\((ip[honed]+);.+(apple)/i],[a,c,[l,v]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[c,a,[l,v]],[/\((bb10);\s(\w+)/i],[[c,"BlackBerry"],a,[l,v]],[/android.+((transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+))/i],[[c,"Asus"],a,[l,m]],[/(sony)\s(tablet\s[ps])/i],[c,a,[l,m]],[/(nintendo)\s([wids3u]+)/i],[c,a,[l,d]],[/((playstation)\s[3portablevi]+)/i],[[c,"Sony"],a,[l,d]],[/(sprint\s(\w+))/i],[[c,y.str,b.device.sprint.vendor],[a,y.str,b.device.sprint.model],[l,v]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[c,[a,/_/g," "],[l,v]],[/\s((milestone|droid[2x]?))[globa\s]*\sbuild\//i,/(mot)[\s-]?(\w+)*/i],[[c,"Motorola"],a,[l,v]],[/android.+\s((mz60\d|xoom[\s2]{0,2}))\sbuild\//i],[[c,"Motorola"],a,[l,m]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9))/i],[[c,"Samsung"],a,[l,m]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[c,"Samsung"],a,[l,v]],[/(sie)-(\w+)*/i],[[c,"Siemens"],a,[l,v]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[c,"Nokia"],a,[l,v]],[/android\s3\.[\s\w-;]{10}((a\d{3}))/i],[[c,"Acer"],a,[l,m]],[/android\s3\.[\s\w-;]{10}(lg?)-([06cv9]{3,4})/i],[[c,"LG"],a,[l,m]],[/((nexus\s4))/i,/(lg)[e;\s-\/]+(\w+)*/i],[[c,"LG"],a,[l,v]],[/(mobile|tablet);.+rv\:.+gecko\//i],[l,c,a]],engine:[[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[f,h],[/rv\:([\w\.]+).*(gecko)/i],[h,f]],os:[[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[f,[h,y.str,b.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[f,"Windows"],[h,y.str,b.os.windows.version]],[/\((bb)(10);/i],[[f,"BlackBerry"],h],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)\/([\w\.]+)/i,/(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego)[\/\s-]?([\w\.]+)*/i],[f,h],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[f,"Symbian"],h],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[f,"Firefox OS"],h],[/(nintendo|playstation)\s([wids3portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[f,h],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[f,"Chromium OS"],h],[/(sunos)\s?([\w\.]+\d)*/i],[[f,"Solaris"],h],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[f,h],[/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],[[f,"iOS"],[h,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i],[f,[h,/_/g,"."]],[/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(macintosh|mac(?=_powerpc)|plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos)/i,/(unix)\s?([\w\.]+)*/i],[f,h]]},E=function(t){var r=t||(e&&e.navigator&&e.navigator.userAgent?e.navigator.userAgent:n);if(!(this instanceof E))return(new E(t)).getResult();this.getBrowser=function(){return y.rgx.apply(this,w.browser)},this.getCPU=function(){return y.rgx.apply(this,w.cpu)},this.getDevice=function(){return y.rgx.apply(this,w.device)},this.getEngine=function(){return y.rgx.apply(this,w.engine)},this.getOS=function(){return y.rgx.apply(this,w.os)},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=e,this},this.setUA(r)};if(typeof exports!==s)typeof module!==s&&module.exports&&(exports=module.exports=E),exports.UAParser=E;else{e.UAParser=E,typeof define===i&&define.amd&&define(function(){return E});if(typeof e.jQuery!==s){var S=e.jQuery,x=new E;S.ua=x.getResult(),S.ua.get=function(){return x.getUA()},S.ua.set=function(e){x.setUA(e);var t=x.getResult();for(var n in t)S.ua[n]=t[n]}}}})(this);


// !Docready...
$(document).ready(function() {


	//limit numeric input only...
	$('.numeric').numeric();

	//limit alphanumeric only...
	$('.alphanumeric').alphanumeric({allow: ".,+- "});



	// !set theme dark / light...
	function setStyle(theme) {
		
		if(theme === 'Dark') {
			
			$('body, #border, #frame, #view, #buttons').addClass('dark').removeClass('light');
			
		} else if(theme === 'Light') {
		 	
		 	$('body, #border, #frame, #view, #buttons').addClass('light').removeClass('dark');
		 	
		} else {
			
			var toggle = localStorage.getItem('theme');
			
			if(toggle === 'Dark') {
				
				$('body, #border, #frame, #view, #buttons').addClass('light').removeClass('dark');
				localStorage.setItem('theme', 'Light');
				
			} else {
				
				$('body, #border, #frame, #view, #buttons').addClass('dark').removeClass('light');
				localStorage.setItem('theme', 'Dark');
								
			}			
		}			
	}
	
	
	//attatch to window for access from Objective-C...
	window.setStyle = setStyle;
	

	// !Display dimensions in status bar...
	function displayWidth(width, height) {
		
		$('#size').html('<span id="display-width">' + width + '</span>' + ' x ' + '<span id="display-height">' + height + '</span>');
		
	}



	// !Create buttons...
	function displayButtons() {
		
		var buttons = JSON.parse(localStorage.getItem('buttons'));
		
		$.each(buttons, function(index, value) {
			
			var indexVal = index.split('|');
			var buttonVal = value.split('|');
			var buttonDimensions = buttonVal[1].split(':');
			
			//add manufacturer name if selected in prefs...
			
			if(parseInt(localStorage.getItem('man')) > 0 ) {
				var man = indexVal[1] + ' ';
			} else {
				var man = '';
			}
			
			$('#buttons').append('<button type="button" class="resize" data-width="' + buttonDimensions[0] + '" data-height="' + buttonDimensions[1] + '" title="' + buttonDimensions[0] + ' x ' + buttonDimensions[1] + '" tabindex="-1">' + man + buttonVal[0] + '</button>\n');

		});
	}



	// !Resize device function...
	function resizeDevice(width, height) {
		
		$('#view').css({	'width': width + 'px',
							'height': height + 'px'
		});
		$('#frame').css({	'width': (width + 6) + 'px',
							'height': (height + 6) + 'px'
		});
		$('.spinner').css({	'-webkit-transition': 'all .6s',
							'left': (width + 6)/2 + 'px',
							'top': (height + 6)/2 + 'px'
		});
		$('#border').css({	'width': (width + 86) + 'px',
							'height': (height + 86) + 'px'
		});
		
		localStorage.setItem('width', width);
		localStorage.setItem('height', height);
		
	}



	// !Resize from width / height dialogs...
	$('body').on('click', '#update-width, #update-height', function() {
	
		if($(this).attr('id') === 'update-width') {	

			var frameWidth = parseInt($('#new-width').val());
			
			if(frameWidth > 3000) {
				frameWidth = 3000;
			}
			
			if(frameWidth < 100) {
				frameWidth = 100;
			}
			
			var frameHeight = $('#view').height();
			
			resizeDevice(frameWidth, frameHeight);
			displayWidth(frameWidth, frameHeight);
			
			$('#set-width').fadeOut('fast');
		
		} else {
			
			var frameHeight = parseInt($('#new-height').val());
			
			if(frameHeight > 3000) {
				frameHeight = 3000;
			}
			
			if(frameHeight < 100) {
				frameHeight = 100;
			}
			
			var frameWidth = $('#view').width();
			
			resizeDevice(frameWidth, frameHeight);
			displayWidth(frameWidth, frameHeight);
			
			$('#set-height').fadeOut('fast');

		}	
	});

	// !onclick preset device...
	$('body').on('click', '.resize', function() {
		
		var frameWidth = parseInt($(this).attr('data-width'));
		var frameHeight = parseInt($(this).attr('data-height'));
		
		resizeDevice(frameWidth, frameHeight);
		displayWidth(frameWidth, frameHeight);

	});



	// !Increase viewport by x pixels...
	$('#plus').click(function() {
		
		var increment = parseInt(localStorage.getItem('inc'));
		
		var frameWidth = parseInt($('#view').width())+increment;
		var frameHeight = $('#view').height();
		
		resizeDevice(frameWidth, frameHeight);
		displayWidth(frameWidth, frameHeight);
		
	});
	
	
	//increase width function for Objective-C...
	function callIncrease() {
		var increment = parseInt(localStorage.getItem('inc'));
		
		var frameWidth = parseInt($('#view').width())+increment;
		var frameHeight = $('#view').height();
		
		resizeDevice(frameWidth, frameHeight);
		displayWidth(frameWidth, frameHeight);
	}
	
	//attatch to window for access from Objective-C...
	window.callIncrease = callIncrease;
	

	// !Decrease viewport by x pixels...
	$('#minus').click(function() {
		
		var increment = parseInt(localStorage.getItem('inc'));
		
		var frameWidth = parseInt($('#view').width())-increment;
		var frameHeight = $('#view').height();
		
		resizeDevice(frameWidth, frameHeight);		
		displayWidth(frameWidth, frameHeight);
		
	});
	
	
	//decrease width function for Objective-C...
	function callDecrease() {
		var increment = parseInt(localStorage.getItem('inc'));
		
		var frameWidth = parseInt($('#view').width())-increment;
		var frameHeight = $('#view').height();
		
		resizeDevice(frameWidth, frameHeight);		
		displayWidth(frameWidth, frameHeight);
	}
	
	//attatch to window for access from Objective-C...
	window.callDecrease = callDecrease;
	

	// !Rotate device...
	$('#rotate').click(function() {
		
		var frameWidth = $('#view').height();
		var frameHeight = $('#view').width();
		
		resizeDevice(frameWidth, frameHeight);		
		displayWidth(frameWidth, frameHeight);
		
	});
	
	//rotate device function for Objective-C...
	function callRotateDevice() {
		var frameWidth = $('#view').height();
		var frameHeight = $('#view').width();
		
		resizeDevice(frameWidth, frameHeight);		
		displayWidth(frameWidth, frameHeight);
	}
	
	//attatch to window for access from Objective-C...
	window.callRotateDevice = callRotateDevice;

	// !Load URL in virtual Device...
	//$(function() {		
		function loadUrl(getUrl) {
			
			if(getUrl==null) {
				
				//get entered text...
				var theUrl = $('#url').val();	
				
			} else {
				
				var theUrl = getUrl;
				
			}
			
			//show status container...
			$('#status-container').show();
			
			//if not empty...
			if(theUrl !== '') {
				
				//remove http:// or https://...
				var removeHttp = /^(https?):\/\//;
				
				var cleanUrl = b = theUrl.replace(removeHttp, '');
				
				//re populate the input...
				$('#url').val(cleanUrl);
				
				//validate the url...
				
				var urlPattern = /^[a-zA-Z0-9\-\.\/\?\[\]\$\(\)\*\+_~:#@!&',;=% ]*$/
				
				if(urlPattern.test(cleanUrl)) {
					
					// add spinner...
					$("#frame").spin(opts);
					
					//status loading...
					$("#status").show().html("loading…");
					
					//default white background...
					$('#view').css('background-color', '#fff');
					
					$("iframe").src("http://" + cleanUrl, function(duration) {
						
						// status update and remove spinner...
						$("#status").blink("loaded in " + (duration/1000) + " seconds");
						$("#frame").spin(false);
						
						//add loaded url to history if it's not already there...
						var historyArray = JSON.parse(localStorage.getItem('history'));
					
							if($.inArray(cleanUrl, historyArray) === -1) {
						
								historyArray.push(cleanUrl);
								
								var historySize = localStorage.getItem('list');
								
								//limit the length of the history array...
								while (historyArray.length > historySize) {
									
									historyArray.shift();
									
								}
								
								//set history and populate list...
								localStorage.setItem('history', JSON.stringify(historyArray));
								populateHistory();

							}
						
						//set last url...
						localStorage.setItem('last', cleanUrl);
						
					},
					{
						timeout: 10000,
						onTimeout: function() { $("#status").blink("timed out"); $("#frame").spin(false); }

					});
				
				} else {
					
					//if url is invalid...
				$('#status').blink("Please enter a valid URL");
				$("#frame").spin(false);	
				
				}
		
			} else {
				
				//if empty...
				$('#status').blink("Please enter a URL");
				$("#frame").spin(false);
				
			}		
		}
		
		//press enter to input url...
		$("#url").keypress(function(ev) {
			
			if (ev.which==13) {
				
				loadUrl();
				$('#url').blur();

			}
		});  
	//});

	$('#load').click(function () {
		loadUrl();
	});

	// !Animate message in status bar...
	$.fn.blink = function(message) {
		
		$(this).animate({opacity: 0.01}, 200, function() {
			
			$(this).html(message).show(); $(this).animate({opacity:1}, 200, function() {
				
				$(this).animate({opacity: 0.1}, 200, function() {
					
					$(this).animate({opacity: 1}, 200)

				})
			})
		});
	}



	// !show prefs menu...
	$('#prefs').click(function() {
	
		activeTheme();
		
		$('#prefs-menu').fadeIn('fast').css('display', 'inline-block');
		
		$(document).mouseup(function (e) {
			var container = $('#prefs-menu');
	
			if (container.has(e.target).length === 0) {
				container.fadeOut('fast');

			}
		});
	});



	// !show width / height dialogs...
	$('body').on('click', '#display-width, #display-height', function() {
		
		if($(this).attr('id') === 'display-width') {
			
			var dialog = 'set-width';
			var frameWidth = $('#view').width();			
			$('#new-width').val(frameWidth);
			$('#' + dialog).fadeIn('fast');
			$('#new-width').select();
			
			$('#new-width').keypress(function(ev) {
				
				if (ev.which==13) {
					
					$('#update-width').focus();
					$('#update-width').click();
					$('#set-width').fadeOut('fast');

				}
			});
			
		} else {
			
			var dialog = 'set-height';
			var frameHeight = $('#view').height();			
			$('#new-height').val(frameHeight);
			$('#' + dialog).fadeIn('fast');
			$('#new-height').select();
			
			$('#new-height').keypress(function(ev) {
				
				if (ev.which==13) {
					
					$('#update-height').focus();
					$('#update-height').click();
					$('#set-height').fadeOut('fast');

				}
			});
		}
		
		$(document).mouseup(function (e) {
			var container = $('#' + dialog);
	
			if (container.has(e.target).length === 0) {
				container.fadeOut('fast');

			}
		});	

	});
	
	
	//click function for obj-c...
	function callWidth() {
		$('#display-width').click();
	}
	
	//attatch to window for access from Objective-C...
	window.callWidth = callWidth;
	
	
	//click function for obj-c...
	function callHeight() {
		$('#display-height').click();
	}
	
	//attatch to window for access from Objective-C...
	window.callHeight = callHeight;

	// !Prefs menu...
	$('#prefs-menu dd').click(function () {
		
		// get value...
		var preference = $(this).attr('data-pref');
		
		//choose operation...
		switch (preference) {
			case '1':		
				openDevices();		
			break;
			case '2':		
				setStyle();
			break;
			case '3':
				openPrefsModal();
			break;
			case '4':
				$('#reset-modal').fadeIn('fast');
			break;

		}
		
		//hide menu...
		$('#prefs-menu').fadeOut('fast');

	});


	
// !open devices panel...
	function openDevices() {
		
		//clear select and device list...
		$('#device-select, #device-list').html('');
		
		//populate device select...
		$.each(devices, function(index, value) {
			
			$('#device-select').append('<optgroup label="' + index + '">');
			
			$.each(value, function(key, value) {
			
				var deviceDimensions = value.split(':');
			
				$('#device-select').append('<option data-man="'+ index +'" value="' + key +':' + value + '">' + key + ' ' + deviceDimensions[0] + 'x' + deviceDimensions[1] + '</option>\n');
			
			});

			$('#device-select').append('</optgroup>');

		});
		
		//populate device list...
		var buttons = JSON.parse(localStorage.getItem('buttons'));
		
		$.each(buttons, function(index, value) {
			
			var indexVal = index.split('|');
			var buttonValues = value.split('|');
			var buttonDimensions = buttonValues[1].split(':');
			
			$('#device-list').append('<li data-key="' + index + '" data-name="' + buttonValues[0] + '" data-value="' + buttonValues[1] + '">' + buttonValues[0] + ' <span>' + buttonDimensions[0] + 'x' + buttonDimensions[1] + '</span><button type="button" class="delete" tabindex="-1">delete</button></li>\n');

		});
		
		$('#devices').css('top', '97px');	
	
	}

	//attatch to window for access from Objective-C...
	window.openDevices = openDevices;

	// !add preset device...
	$('#add-preset').click(function() {
		
		//get device...
		var selectedDevice = $('#device-select').val();
		var selectedMan = $('option:selected', '#device-select').attr('data-man');
		
		//split data...
		var selectArray = selectedDevice.split(":");
		
		//set timestamp...
		var timestamp = new Date().getTime();
		
		//add to list...
		$('#device-list').append('<li data-key="' + timestamp + '|' + selectedMan + '" data-name="' + selectArray[0] + '" data-value="' + selectArray[1] + ':' + selectArray[2] + '">' + selectArray[0] + ' <span>' + selectArray[1] + 'x' + selectArray[2] + '</span><button type="button" class="delete">x</button></li>\n');
		
		getDevices();
		
	});



	// !add custom device...
	$('#add-custom').click(function() {
		
		//get device...
		var customMan = $('#custom-man').val();
		var customName = $('#custom-name').val();
		var customWidth = $('#custom-width').val();
		var customHeight = $('#custom-height').val();
		
		// !REALLY SIMPLE VALIDATION...
		if(customMan === '') { customMan = 'Manufacturer'; }
		if(customName === '') { customName = 'Custom Device'; }
		if(customWidth === '' || customWidth < 100) { customWidth = 100; }
		if(customHeight === '' || customHeight <100) { customHeight = 100; }
		if(customWidth > 3000) { customWidth = 3000; }
		if(customHeight > 3000) { customHeight = 3000; }
				
		//set timestamp...
		var timestamp = new Date().getTime();
		
		//add to list...
		$('#device-list').append('<li data-key="' + timestamp + '|' + customMan + '" data-name="' + customName + '" data-value="' + customWidth + ':' + customHeight + '">' + customName + ' <span>' + customWidth + 'x' + customHeight + '</span><button type="button" class="delete">x</button></li>\n');
		
		$('#custom-man, #custom-name, #custom-width, #custom-height').val('');
		
		getDevices();
		
	});



	// !delete device from list...
	$('body').on('click', '.delete', function() {
		
		var deleteItem = $(this).parent();
		
		$(deleteItem).fadeOut(500, function() { 
			
			$(deleteItem).remove();
			getDevices();
		
		});		
	});



	// !update buttons from device-list...
	function getDevices() {
		
		var buttons = {};
							
		$('#device-list li').each(function() {

			var buttonKey = $(this).attr('data-key');
			var buttonValue = $(this).attr('data-name') +'|' + $(this).attr('data-value');
			
			buttons[buttonKey] = buttonValue;
			
		});
		
		localStorage.setItem('buttons', JSON.stringify(buttons));
		
		$('#buttons').html('');
		
		displayButtons();
		
	}



	// !sort device list
	$( "#device-list" ).sortable({
						placeholder: "list-placeholder",
						forcePlaceholderSize: true,
						axis: "y",
						update: function() {
							
							getDevices()
							
						}
	});



	// !close devices panel...
	$('#device-close').click(function() {
		
		$('#devices').css('top', '-360px');
		
	});



	// !open the prefs modal...
	function openPrefsModal() {
		
		//populate numerics...
		var history = localStorage.getItem('list');
		var increment = localStorage.getItem('inc');
		var manufacturer = localStorage.getItem('man');
		var getLast = localStorage.getItem('getLast');
		var userAgent = localStorage.getItem('userAgent');
		
		$('#recent-amount').val(history);
		$('#inc-step').val(increment);
		
		if(manufacturer === '1') {
			$('#show-man').prop('checked', true);
		}
		
		if(getLast === '1') {
			$('#get-last').prop('checked', true);
		}
		
		if(userAgent === '1') {
			$('#show-ua').prop('checked', true);
		}
		
		$('#prefs-modal').fadeIn('fast');
		
	}
	
	//attatch to window for access from Objective-C...
	window.openPrefsModal = openPrefsModal;

	// !close the prefs modal...
	$('#prefs-close').click(function() {
	
		$('#prefs-modal').fadeOut('fast');
	
	});
	
	
	
	// !reset the application...
	$('#reset').click(function() {
		
		localStorage.clear();
		window.location.reload();
		
	});
	
	//click function for obj-c...
	function callResetApplication() {
		
		$('#reset-modal').fadeIn('fast');
		
	}
	
	//attatch to window for access from Objective-C...
	window.callResetApplication = callResetApplication;
	
	// !close the reset modal...
	$('#reset-cancel').click(function() {
	
		$('#reset-modal').fadeOut('fast');
	
	});



	// !update history list length...
	$('#recent-amount').change(function() {
		
		var historyAmount = $(this).val();
		
		if(historyAmount > 25) {
			
			historyAmount = 25;
			$('#recent-amount').val(historyAmount);
		}
		
		if(historyAmount < 5 || historyAmount === '') {
			
			historyAmount = 5;
			$('#recent-amount').val(historyAmount);
		}
		
		localStorage.setItem('list', historyAmount);
		 	
	});



	// !update +/- increment...
	$('#inc-step').change(function() {
		
		var incStep = $(this).val();
		
		if(incStep > 100) {
			
			incStep = 100;
			$('#inc-step').val(incStep);
		}
		
		if(incStep < 1 || incStep === '') {
			
			incStep = 1;
			$('#inc-step').val(incStep);
		}
		
		localStorage.setItem('inc', incStep);
		
		displayInc();
		 	
	});
	
	
	
	// !show/hide manufacturer name...
	$('#show-man').change(function() {
		
		var man = localStorage.getItem('man');
		
		if(man === '1') {
		
			localStorage.setItem('man', '0');
			$('#buttons').html('');
			displayButtons();
			
		} else {
			
			localStorage.setItem('man', '1');
			$('#buttons').html('');
			displayButtons();
			
		}		
	});


	// !Set getLast URL prefs...
	$('#get-last').change(function() {
		
		var getLast = localStorage.getItem('getLast');
		
		if(getLast === '0') {
			
			localStorage.setItem('getLast', '1');
				
		} else {
			
			localStorage.setItem('getLast', '0');
			
		}
	
	});
	
	// !Show UA String prefs...
	$('#show-ua').change(function() {
		
		var userAgent = localStorage.getItem('userAgent');
		
		if(userAgent === '0') {
			
			localStorage.setItem('userAgent', '1');			
				
		} else {
			
			localStorage.setItem('userAgent', '0');
		}
		
		getUAinfo();		
	});


	// !populate the history menu...
	function populateHistory() {
		
		//clear any contents...
		var historyDivider = document.getElementById('history-divider');
		$('#recent-sites').nextUntil(historyDivider,'dd').remove();
		
		var historyList = JSON.parse(localStorage.getItem('history'));
		
		var historySize = localStorage.getItem('list');
		
		//check to see if the history list size has been changed...
		
		if(historyList.length > historySize) {
		
			//limit the length of the history array...
			while (historyList.length > historySize) {
										
				historyList.shift();
										
			}
			
			//save the shortened list...
			localStorage.setItem('history', JSON.stringify(historyList));
			
		}
		
		if(historyList.length > 0) {
			
			// !history	
			$.each(historyList, function(index, value) {
						
				$('#recent-sites').after('<dd data-value="' + value + '">' + value + '</dd>\n');

			});
		}	
	}



	// !history menu open...
	$('#history').click(function() {

		populateHistory();
		
		$('#history-menu').fadeIn('fast').css('display', 'inline-block');
		
		$(document).mouseup(function (e) {
			var container = $('#history-menu');
	
			if (container.has(e.target).length === 0) {
				container.fadeOut('fast');

			}
		});		
	});



	// !history menu...
	$('body').on('click', '#history-menu dd', function() {
		
		// get value...
		var preference = $(this).attr('data-value');
		
		//choose operation...
		if(preference === 'reset') {
			
			var history = new Array();
			localStorage.setItem('history', JSON.stringify(history));
			
		} else {
			
			$('#url').val(preference);
			$('#load').click();
			
		}
		
		//hide menu...
		$('#history-menu').fadeOut('fast');

	});



	// !select all on click in URL...
	$('#url').click(function () {
		
		$(this).select();
		
	});



	// !Display active theme in prefs menu...
	function activeTheme() {
		
		var theme = localStorage.getItem('theme');
		
		var swap = 'Dark';
		
		if(theme === 'Dark') {
			
			swap = 'Light';
			
		}
		
		$('#active-theme').html(swap);

	}

	
	// !Get the last url...
	function getLast() {
		
		//if pref getLast is set, load url...
		if(localStorage.getItem('getLast')!=='0') {
			
			setTimeout(function (){
				var last = localStorage.getItem('last');
				loadUrl(last);
			}, 600);
		}
	}


	//!Display increment in +/- titles...
	function displayInc() {
		
		var incStep = localStorage.getItem('inc');
		$('#plus').attr('title','Width +' + incStep + 'px ⌘+');
		$('#minus').attr('title','Width -' + incStep + 'px ⌘-');
		
	}
	
	
	//!get ua string...
	function getUAinfo() {
		
		//parse info...
		var uaString = new Array();
		uaString[0] = $.ua.os.name;
		uaString[1] = $.ua.os.version;
		uaString[2] = $.ua.browser.name;
		uaString[3] = $.ua.browser.version;
		uaString[4] = $.ua.device.vendor;
		uaString[5] = $.ua.device.model;
		
		var setAgent = '';
		
		//create ua info string...
		$.each(uaString, function(index, value) {
		
			if(value !== undefined) {
				setAgent = setAgent + value;
				setAgent = setAgent + ' ';
			}
			
		});
		
		//trim whitespace...
		setAgent = setAgent.trim();
		
		//if string is empty, use actual string...
		if(setAgent.length <1) {
			setAgent = $.ua.get();
		}
		
		$('#ua-info').html(setAgent);
		$('#ua-info').attr('title', $.ua.get());
		
		var userAgent = localStorage.getItem('userAgent');
		
		if(userAgent === '0') {
			
			$('#ua-display').css('display', 'none');			
				
		} else {
			
			$('#ua-display').css('display', 'inline-block');
			
		}
	}
	
	// !Onload set last state of application...
	setStyle(localStorage.getItem('theme'));
	
	var frameWidth = parseInt(localStorage.getItem('width'));
	var frameHeight = parseInt(localStorage.getItem('height'));
		
	resizeDevice(frameWidth, frameHeight);
	displayWidth(frameWidth, frameHeight);
	
	displayButtons();
	activeTheme();
	displayInc();
	getLast();
	
	//set initial UA..
	getUAinfo();
	
});