!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/build/",t(0)}([function(e,t,n){e.exports=n(5)},function(e,t,n){t=e.exports=n(2)(),t.push([e.id,".es6-title,.singletons,.still{text-align:center}body{background:radial-gradient(#f0f0f0,#d2d2e1);font-size:50px;font-family:sans-serif;color:#555}#intro,.vertical-flex{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-ms-flex-align:center;align-items:center;line-height:90px}.step{position:relative;box-sizing:border-box;width:1200px}.impress-enabled .step{opacity:0;transition:opacity 1s}.step.active{opacity:1}#impress code.hljs{background:#fff}.intro-name,.intro-twitter{color:#766}.intro-title{font-size:90px;margin-bottom:50px}#tidbit .quote{font-family:serif;font-size:60px;margin-right:80px}.singletons,.what-about-angular-two{font-size:90px}#tidbit .attribution{color:#777;margin-left:20px}.singletons{margin-left:-40px;color:salmon}.es6-title{font-size:80px}.still{font-color:#777}.boilerplate{color:#aaa}.description p{font-size:100px;margin-left:200px;margin-top:0}.description li{margin-bottom:50px;list-style-type:none}.keyword{background-color:#444;color:#EEE;padding:10px 20px}#factory{font-size:45px}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(var i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=p[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(a(r.parts[o],t))}else{for(var s=[],o=0;o<r.parts.length;o++)s.push(a(r.parts[o],t));p[r.id]={id:r.id,refs:1,parts:s}}}}function i(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],o=i[0],s=i[1],a=i[2],l=i[3],f={css:s,media:a,sourceMap:l};n[o]?n[o].parts.push(f):t.push(n[o]={id:o,parts:[f]})}return t}function o(){var e=document.createElement("style"),t=h();return e.type="text/css",t.appendChild(e),e}function s(){var e=document.createElement("link"),t=h();return e.rel="stylesheet",t.appendChild(e),e}function a(e,t){var n,r,i;if(t.singleton){var a=v++;n=m||(m=o()),r=l.bind(null,n,a,!1),i=l.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(),r=c.bind(null,n),i=function(){n.parentNode.removeChild(n),n.href&&URL.revokeObjectURL(n.href)}):(n=o(),r=f.bind(null,n),i=function(){n.parentNode.removeChild(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function l(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function f(e,t){var n=t.css,r=t.media;t.sourceMap;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function c(e,t){var n=t.css,r=(t.media,t.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(JSON.stringify(r))+" */");var i=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}var p={},u=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},d=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=u(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,v=0;e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=d());var n=i(e);return r(n,t),function(e){for(var o=[],s=0;s<n.length;s++){var a=n[s],l=p[a.id];l.refs--,o.push(l)}if(e){var f=i(e);r(f,t)}for(var s=0;s<o.length;s++){var l=o[s];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete p[l.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(1);"string"==typeof r&&(r=[[e.id,r,""]]);n(3)(r,{});r.placeholders&&(e.exports=r.placeholders)},function(e,t,n){document.write('<script src="http://localhost:8080/webpack-dev-server.js"></script>'),n(4)}]);