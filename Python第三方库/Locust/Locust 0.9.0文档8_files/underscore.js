!function(n){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this)._=n()}}(function(){return function i(o,a,l){function c(t,n){if(!a[t]){if(!o[t]){var r="function"==typeof require&&require;if(!n&&r)return r(t,!0);if(f)return f(t,!0);var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}var u=a[t]={exports:{}};o[t][0].call(u.exports,function(n){return c(o[t][1][n]||n)},u,u.exports,i,o,a,l)}return a[t].exports}for(var f="function"==typeof require&&require,n=0;n<l.length;n++)c(l[n]);return c}({"/repo/bower_components/underscore/underscore.js":[function(n,M,N){(function(){var n=this,t=n._,e=Array.prototype,r=Object.prototype,u=Function.prototype,a=e.push,c=e.slice,f=e.concat,p=r.toString,i=r.hasOwnProperty,o=Array.isArray,l=Object.keys,s=u.bind,h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};void 0!==N?(void 0!==M&&M.exports&&(N=M.exports=h),N._=h):n._=h,h.VERSION="1.7.0";var v=function(u,i,n){if(void 0===i)return u;switch(null==n?3:n){case 1:return function(n){return u.call(i,n)};case 2:return function(n,t){return u.call(i,n,t)};case 3:return function(n,t,r){return u.call(i,n,t,r)};case 4:return function(n,t,r,e){return u.call(i,n,t,r,e)}}return function(){return u.apply(i,arguments)}};h.iteratee=function(n,t,r){return null==n?h.identity:h.isFunction(n)?v(n,t,r):h.isObject(n)?h.matches(n):h.property(n)},h.each=h.forEach=function(n,t,r){if(null==n)return n;t=v(t,r);var e,u=n.length;if(u===+u)for(e=0;e<u;e++)t(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;e<u;e++)t(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,t,r){if(null==n)return[];t=h.iteratee(t,r);for(var e,u=n.length!==+n.length&&h.keys(n),i=(u||n).length,o=Array(i),a=0;a<i;a++)e=u?u[a]:a,o[a]=t(n[e],e,n);return o};var y="Reduce of empty array with no initial value";h.reduce=h.foldl=h.inject=function(n,t,r,e){null==n&&(n=[]),t=v(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),o=(i||n).length,a=0;if(arguments.length<3){if(!o)throw new TypeError(y);r=n[i?i[a++]:a++]}for(;a<o;a++)r=t(r,n[u=i?i[a]:a],u,n);return r},h.reduceRight=h.foldr=function(n,t,r,e){null==n&&(n=[]),t=v(t,e,4);var u,i=n.length!==+n.length&&h.keys(n),o=(i||n).length;if(arguments.length<3){if(!o)throw new TypeError(y);r=n[i?i[--o]:--o]}for(;o--;)r=t(r,n[u=i?i[o]:o],u,n);return r},h.find=h.detect=function(n,e,t){var u;return e=h.iteratee(e,t),h.some(n,function(n,t,r){if(e(n,t,r))return u=n,!0}),u},h.filter=h.select=function(n,e,t){var u=[];return null==n||(e=h.iteratee(e,t),h.each(n,function(n,t,r){e(n,t,r)&&u.push(n)})),u},h.reject=function(n,t,r){return h.filter(n,h.negate(h.iteratee(t)),r)},h.every=h.all=function(n,t,r){if(null==n)return!0;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),o=(i||n).length;for(e=0;e<o;e++)if(!t(n[u=i?i[e]:e],u,n))return!1;return!0},h.some=h.any=function(n,t,r){if(null==n)return!1;t=h.iteratee(t,r);var e,u,i=n.length!==+n.length&&h.keys(n),o=(i||n).length;for(e=0;e<o;e++)if(t(n[u=i?i[e]:e],u,n))return!0;return!1},h.contains=h.include=function(n,t){return null!=n&&(n.length!==+n.length&&(n=h.values(n)),0<=h.indexOf(n,t))},h.invoke=function(n,t){var r=c.call(arguments,2),e=h.isFunction(t);return h.map(n,function(n){return(e?t:n[t]).apply(n,r)})},h.pluck=function(n,t){return h.map(n,h.property(t))},h.where=function(n,t){return h.filter(n,h.matches(t))},h.findWhere=function(n,t){return h.find(n,h.matches(t))},h.max=function(n,e,t){var r,u,i=-1/0,o=-1/0;if(null==e&&null!=n)for(var a=0,l=(n=n.length===+n.length?n:h.values(n)).length;a<l;a++)r=n[a],i<r&&(i=r);else e=h.iteratee(e,t),h.each(n,function(n,t,r){u=e(n,t,r),(o<u||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},h.min=function(n,e,t){var r,u,i=1/0,o=1/0;if(null==e&&null!=n)for(var a=0,l=(n=n.length===+n.length?n:h.values(n)).length;a<l;a++)(r=n[a])<i&&(i=r);else e=h.iteratee(e,t),h.each(n,function(n,t,r){((u=e(n,t,r))<o||u===1/0&&i===1/0)&&(i=n,o=u)});return i},h.shuffle=function(n){for(var t,r=n&&n.length===+n.length?n:h.values(n),e=r.length,u=Array(e),i=0;i<e;i++)(t=h.random(0,i))!==i&&(u[i]=u[t]),u[t]=r[i];return u},h.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=h.values(n)),n[h.random(n.length-1)]):h.shuffle(n).slice(0,Math.max(0,t))},h.sortBy=function(n,e,t){return e=h.iteratee(e,t),h.pluck(h.map(n,function(n,t,r){return{value:n,index:t,criteria:e(n,t,r)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(e<r||void 0===r)return 1;if(r<e||void 0===e)return-1}return n.index-t.index}),"value")};var g=function(o){return function(e,u,n){var i={};return u=h.iteratee(u,n),h.each(e,function(n,t){var r=u(n,t,e);o(i,n,r)}),i}};h.groupBy=g(function(n,t,r){h.has(n,r)?n[r].push(t):n[r]=[t]}),h.indexBy=g(function(n,t,r){n[r]=t}),h.countBy=g(function(n,t,r){h.has(n,r)?n[r]++:n[r]=1}),h.sortedIndex=function(n,t,r,e){for(var u=(r=h.iteratee(r,e,1))(t),i=0,o=n.length;i<o;){var a=i+o>>>1;r(n[a])<u?i=a+1:o=a}return i},h.toArray=function(n){return n?h.isArray(n)?c.call(n):n.length===+n.length?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:n.length===+n.length?n.length:h.keys(n).length},h.partition=function(n,e,t){e=h.iteratee(e,t);var u=[],i=[];return h.each(n,function(n,t,r){(e(n,t,r)?u:i).push(n)}),[u,i]},h.first=h.head=h.take=function(n,t,r){if(null!=n)return null==t||r?n[0]:t<0?[]:c.call(n,0,t)},h.initial=function(n,t,r){return c.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},h.last=function(n,t,r){if(null!=n)return null==t||r?n[n.length-1]:c.call(n,Math.max(n.length-t,0))},h.rest=h.tail=h.drop=function(n,t,r){return c.call(n,null==t||r?1:t)},h.compact=function(n){return h.filter(n,h.identity)};var d=function(n,t,r,e){if(t&&h.every(n,h.isArray))return f.apply(e,n);for(var u=0,i=n.length;u<i;u++){var o=n[u];h.isArray(o)||h.isArguments(o)?t?a.apply(e,o):d(o,t,r,e):r||e.push(o)}return e};h.flatten=function(n,t){return d(n,t,!1,[])},h.without=function(n){return h.difference(n,c.call(arguments,1))},h.uniq=h.unique=function(n,t,r,e){if(null==n)return[];h.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=h.iteratee(r,e));for(var u=[],i=[],o=0,a=n.length;o<a;o++){var l=n[o];if(t)o&&i===l||u.push(l),i=l;else if(r){var c=r(l,o,n);h.indexOf(i,c)<0&&(i.push(c),u.push(l))}else h.indexOf(u,l)<0&&u.push(l)}return u},h.union=function(){return h.uniq(d(arguments,!0,!0,[]))},h.intersection=function(n){if(null==n)return[];for(var t=[],r=arguments.length,e=0,u=n.length;e<u;e++){var i=n[e];if(!h.contains(t,i)){for(var o=1;o<r&&h.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},h.difference=function(n){var t=d(c.call(arguments,1),!0,!0,[]);return h.filter(n,function(n){return!h.contains(t,n)})},h.zip=function(n){if(null==n)return[];for(var t=h.max(arguments,"length").length,r=Array(t),e=0;e<t;e++)r[e]=h.pluck(arguments,e);return r},h.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;e<u;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},h.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return n[e=h.sortedIndex(n,t)]===t?e:-1;e=r<0?Math.max(0,u+r):r}for(;e<u;e++)if(n[e]===t)return e;return-1},h.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=n.length;for("number"==typeof r&&(e=r<0?e+r+1:Math.min(e,r+1));0<=--e;)if(n[e]===t)return e;return-1},h.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;i<e;i++,n+=r)u[i]=n;return u};var m=function(){};h.bind=function(r,e){var u,i;if(s&&r.bind===s)return s.apply(r,c.call(arguments,1));if(!h.isFunction(r))throw new TypeError("Bind must be called on a function");return u=c.call(arguments,2),i=function(){if(!(this instanceof i))return r.apply(e,u.concat(c.call(arguments)));m.prototype=r.prototype;var n=new m;m.prototype=null;var t=r.apply(n,u.concat(c.call(arguments)));return h.isObject(t)?t:n}},h.partial=function(u){var i=c.call(arguments,1);return function(){for(var n=0,t=i.slice(),r=0,e=t.length;r<e;r++)t[r]===h&&(t[r]=arguments[n++]);for(;n<arguments.length;)t.push(arguments[n++]);return u.apply(this,t)}},h.bindAll=function(n){var t,r,e=arguments.length;if(e<=1)throw new Error("bindAll must be passed function names");for(t=1;t<e;t++)n[r=arguments[t]]=h.bind(n[r],n);return n},h.memoize=function(e,u){var i=function(n){var t=i.cache,r=u?u.apply(this,arguments):n;return h.has(t,r)||(t[r]=e.apply(this,arguments)),t[r]};return i.cache={},i},h.delay=function(n,t){var r=c.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},h.defer=function(n){return h.delay.apply(h,[n,1].concat(c.call(arguments,1)))},h.throttle=function(r,e,u){var i,o,a,l=null,c=0;u||(u={});var f=function(){c=!1===u.leading?0:h.now(),l=null,a=r.apply(i,o),l||(i=o=null)};return function(){var n=h.now();c||!1!==u.leading||(c=n);var t=e-(n-c);return i=this,o=arguments,t<=0||e<t?(clearTimeout(l),l=null,c=n,a=r.apply(i,o),l||(i=o=null)):l||!1===u.trailing||(l=setTimeout(f,t)),a}},h.debounce=function(t,r,e){var u,i,o,a,l,c=function(){var n=h.now()-a;n<r&&0<n?u=setTimeout(c,r-n):(u=null,e||(l=t.apply(o,i),u||(o=i=null)))};return function(){o=this,i=arguments,a=h.now();var n=e&&!u;return u||(u=setTimeout(c,r)),n&&(l=t.apply(o,i),o=i=null),l}},h.wrap=function(n,t){return h.partial(t,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var r=arguments,e=r.length-1;return function(){for(var n=e,t=r[e].apply(this,arguments);n--;)t=r[n].call(this,t);return t}},h.after=function(n,t){return function(){if(--n<1)return t.apply(this,arguments)}},h.before=function(n,t){var r;return function(){return 0<--n?r=t.apply(this,arguments):t=null,r}},h.once=h.partial(h.before,2),h.keys=function(n){if(!h.isObject(n))return[];if(l)return l(n);var t=[];for(var r in n)h.has(n,r)&&t.push(r);return t},h.values=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=n[t[u]];return e},h.pairs=function(n){for(var t=h.keys(n),r=t.length,e=Array(r),u=0;u<r;u++)e[u]=[t[u],n[t[u]]];return e},h.invert=function(n){for(var t={},r=h.keys(n),e=0,u=r.length;e<u;e++)t[n[r[e]]]=r[e];return t},h.functions=h.methods=function(n){var t=[];for(var r in n)h.isFunction(n[r])&&t.push(r);return t.sort()},h.extend=function(n){if(!h.isObject(n))return n;for(var t,r,e=1,u=arguments.length;e<u;e++)for(r in t=arguments[e])i.call(t,r)&&(n[r]=t[r]);return n},h.pick=function(n,t,r){var e,u={};if(null==n)return u;if(h.isFunction(t))for(e in t=v(t,r),n){var i=n[e];t(i,e,n)&&(u[e]=i)}else{var o=f.apply([],c.call(arguments,1));n=new Object(n);for(var a=0,l=o.length;a<l;a++)(e=o[a])in n&&(u[e]=n[e])}return u},h.omit=function(n,t,r){if(h.isFunction(t))t=h.negate(t);else{var e=h.map(f.apply([],c.call(arguments,1)),String);t=function(n,t){return!h.contains(e,t)}}return h.pick(n,t,r)},h.defaults=function(n){if(!h.isObject(n))return n;for(var t=1,r=arguments.length;t<r;t++){var e=arguments[t];for(var u in e)void 0===n[u]&&(n[u]=e[u])}return n},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,t){return t(n),n};var b=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof h&&(n=n._wrapped),t instanceof h&&(t=t._wrapped);var u=p.call(n);if(u!==p.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!=+n?+t!=+t:0==+n?1/+n==1/t:+n==+t;case"[object Date]":case"[object Boolean]":return+n==+t}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]===n)return e[i]===t;var o,a,l=n.constructor,c=t.constructor;if(l!==c&&"constructor"in n&&"constructor"in t&&!(h.isFunction(l)&&l instanceof l&&h.isFunction(c)&&c instanceof c))return!1;if(r.push(n),e.push(t),"[object Array]"===u){if(a=(o=n.length)===t.length)for(;o--&&(a=b(n[o],t[o],r,e)););}else{var f,s=h.keys(n);if(o=s.length,a=h.keys(t).length===o)for(;o--&&(f=s[o],a=h.has(t,f)&&b(n[f],t[f],r,e)););}return r.pop(),e.pop(),a};h.isEqual=function(n,t){return b(n,t,[],[])},h.isEmpty=function(n){if(null==n)return!0;if(h.isArray(n)||h.isString(n)||h.isArguments(n))return 0===n.length;for(var t in n)if(h.has(n,t))return!1;return!0},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=o||function(n){return"[object Array]"===p.call(n)},h.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp"],function(t){h["is"+t]=function(n){return p.call(n)==="[object "+t+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return h.has(n,"callee")}),"function"!=typeof/./&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&n!==+n},h.isBoolean=function(n){return!0===n||!1===n||"[object Boolean]"===p.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return void 0===n},h.has=function(n,t){return null!=n&&i.call(n,t)},h.noConflict=function(){return n._=t,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(t){return function(n){return n[t]}},h.matches=function(n){var u=h.pairs(n),i=u.length;return function(n){if(null==n)return!i;n=new Object(n);for(var t=0;t<i;t++){var r=u[t],e=r[0];if(r[1]!==n[e]||!(e in n))return!1}return!0}},h.times=function(n,t,r){var e=Array(Math.max(0,n));t=v(t,r,1);for(var u=0;u<n;u++)e[u]=t(u);return e},h.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var w={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},_=h.invert(w),j=function(t){var r=function(n){return t[n]},n="(?:"+h.keys(t).join("|")+")",e=RegExp(n),u=RegExp(n,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,r):n}};h.escape=j(w),h.unescape=j(_),h.result=function(n,t){if(null!=n){var r=n[t];return h.isFunction(r)?n[t]():r}};var x=0;h.uniqueId=function(n){var t=++x+"";return n?n+t:t},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var A=/(.)^/,k={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},O=/\\|'|\r|\n|\u2028|\u2029/g,F=function(n){return"\\"+k[n]};h.template=function(i,n,t){!n&&t&&(n=t),n=h.defaults({},n,h.templateSettings);var r=RegExp([(n.escape||A).source,(n.interpolate||A).source,(n.evaluate||A).source].join("|")+"|$","g"),o=0,a="__p+='";i.replace(r,function(n,t,r,e,u){return a+=i.slice(o,u).replace(O,F),o=u+n.length,t?a+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":r?a+="'+\n((__t=("+r+"))==null?'':__t)+\n'":e&&(a+="';\n"+e+"\n__p+='"),n}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{var e=new Function(n.variable||"obj","_",a)}catch(n){throw n.source=a,n}var u=function(n){return e.call(this,n,h)},l=n.variable||"obj";return u.source="function("+l+"){\n"+a+"}",u},h.chain=function(n){var t=h(n);return t._chain=!0,t};var E=function(n){return this._chain?h(n).chain():n};h.mixin=function(r){h.each(h.functions(r),function(n){var t=h[n]=r[n];h.prototype[n]=function(){var n=[this._wrapped];return a.apply(n,arguments),E.call(this,t.apply(h,n))}})},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(t){var r=e[t];h.prototype[t]=function(){var n=this._wrapped;return r.apply(n,arguments),"shift"!==t&&"splice"!==t||0!==n.length||delete n[0],E.call(this,n)}}),h.each(["concat","join","slice"],function(n){var t=e[n];h.prototype[n]=function(){return E.call(this,t.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped}}).call(this)},{}]},{},[])("/repo/bower_components/underscore/underscore.js")});