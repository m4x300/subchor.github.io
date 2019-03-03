/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-classlist-es5array-fetch-promises-queryselector-setclasses !*/
 !function(e,n,o){function r(e,n){return typeof e===n}function t(){var e,n,o,t,s,l,f;for(var c in i)if(i.hasOwnProperty(c)){if(e=[],n=i[c],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(o=0;o<n.options.aliases.length;o++)e.push(n.options.aliases[o].toLowerCase());for(t=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)l=e[s],f=l.split("."),1===f.length?Modernizr[f[0]]=t:(!Modernizr[f[0]]||Modernizr[f[0]]instanceof Boolean||(Modernizr[f[0]]=new Boolean(Modernizr[f[0]])),Modernizr[f[0]][f[1]]=t),a.push((t?"":"no-")+f.join("-"))}}function s(e){var n=f.className,o=Modernizr._config.classPrefix||"";if(c&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");n=n.replace(r,"$1"+o+"js$2")}Modernizr._config.enableClasses&&(n+=" "+o+e.join(" "+o),c?f.className.baseVal=n:f.className=n)}var a=[],i=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var o=this;setTimeout(function(){n(o[e])},0)},addTest:function(e,n,o){i.push({name:e,fn:n,options:o})},addAsyncTest:function(e){i.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr,Modernizr.addTest("queryselector","querySelector"in n&&"querySelectorAll"in n),Modernizr.addTest("es5array",function(){return!!(Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray)}),Modernizr.addTest("promises",function(){return"Promise"in e&&"resolve"in e.Promise&&"reject"in e.Promise&&"all"in e.Promise&&"race"in e.Promise&&function(){var n;return new e.Promise(function(e){n=e}),"function"==typeof n}()}),Modernizr.addTest("fetch","fetch"in e);var f=n.documentElement;Modernizr.addTest("classlist","classList"in f);var c="svg"===f.nodeName.toLowerCase();t(),s(a),delete l.addTest,delete l.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);