(self.webpackChunkcnblogs_theme=self.webpackChunkcnblogs_theme||[]).push([[3191],{42152:function(t){function o(t){var e;return(r[t]||(e=r[t]={exports:{}},n[t](e,e.exports,o),e)).exports}var n,r;t.exports=(n={686:function(t,e,n){"use strict";n.d(e,{default:function(){return b}});var e=n(279),e=n.n(e),o=n(370),c=n.n(o),o=n(817),r=n.n(o);function i(t){try{document.execCommand(t)}catch(t){}}function a(t){return t=r()(t),i("cut"),t}function u(t,e){o="rtl"===document.documentElement.getAttribute("dir"),(n=document.createElement("textarea")).style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[o?"right":"left"]="-9999px",o=window.pageYOffset||document.documentElement.scrollTop,n.style.top="".concat(o,"px"),n.setAttribute("readonly",""),n.value=t;var n,o=n,t=(e.container.appendChild(o),r()(o));return i("copy"),o.remove(),t}function l(t,e){var e=1<arguments.length&&void 0!==e?e:{container:document.body},n="";return"string"==typeof t?n=u(t,e):t instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null==t?void 0:t.type)?n=u(t.value,e):(n=r()(t),i("copy")),n}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){if(t="data-clipboard-".concat(t),e.hasAttribute(t))return e.getAttribute(t)}var b=function(t){var e=i;if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t);var n=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}(),r=function(){var t,e=y(n),e=(t=o?(t=y(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments),this);if(!t||"object"!==f(t)&&"function"!=typeof t){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}return t};function i(t,e){var n;if(this instanceof i)return(n=r.call(this)).resolveOptions(e),n.listenClick(t),n;throw new TypeError("Cannot call a class as a function")}return e=[{key:"copy",value:function(t){return l(t,1<arguments.length&&void 0!==arguments[1]?arguments[1]:{container:document.body})}},{key:"cut",value:a},{key:"isSupported",value:function(){var t="string"==typeof(t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"])?[t]:t,e=!!document.queryCommandSupported;return t.forEach(function(t){e=e&&!!document.queryCommandSupported(t)}),e}}],d((t=i).prototype,[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===f(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=c()(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=function(t){var e=void 0===(e=(t=0<arguments.length&&void 0!==t?t:{}).action)?"copy":e,n=t.container,o=t.target,t=t.text;if("copy"!==e&&"cut"!==e)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==o){if(!o||"object"!==s(o)||1!==o.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===e&&o.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===e&&(o.hasAttribute("readonly")||o.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return t?l(t,{container:n}):o?"cut"===e?a(o):l(o,{container:n}):void 0}({action:t=this.action(e)||"copy",container:this.container,target:this.target(e),text:this.text(e)});this.emit(n?"success":"error",{action:t,text:n,trigger:e,clearSelection:function(){e&&e.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return h("action",t)}},{key:"defaultTarget",value:function(t){if(t=h("target",t))return document.querySelector(t)}},{key:"defaultText",value:function(t){return h("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}]),d(t,e),i}(e())},828:function(t){var e;"undefined"==typeof Element||Element.prototype.matches||((e=Element.prototype).matches=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector),t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},438:function(t,e,n){var c=n(828);function i(t,e,n,o,r){var i=function(e,n,t,o){return function(t){t.delegateTarget=c(t.target,n),t.delegateTarget&&o.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,r),{destroy:function(){t.removeEventListener(n,i,r)}}}t.exports=function(t,e,n,o,r){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,o,r)}))}},879:function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},370:function(t,e,n){var l=n(879),s=n(438);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!l.string(e))throw new TypeError("Second argument must be a String");if(!l.fn(n))throw new TypeError("Third argument must be a Function");if(l.node(t))return(o=t).addEventListener(r=e,i=n),{destroy:function(){o.removeEventListener(r,i)}};var o,r,i,c,a,u;if(l.nodeList(t))return c=t,a=e,u=n,Array.prototype.forEach.call(c,function(t){t.addEventListener(a,u)}),{destroy:function(){Array.prototype.forEach.call(c,function(t){t.removeEventListener(a,u)})}};if(l.string(t))return s(document.body,t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(t){t.exports=function(t){var e,n;return"SELECT"===t.nodeName?(t.focus(),t.value):"INPUT"===t.nodeName||"TEXTAREA"===t.nodeName?((e=t.hasAttribute("readonly"))||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),e||t.removeAttribute("readonly"),t.value):(t.hasAttribute("contenteditable")&&t.focus(),e=window.getSelection(),(n=document.createRange()).selectNodeContents(t),e.removeAllRanges(),e.addRange(n),e.toString())}},279:function(t){function e(){}e.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,c=o.length;i<c;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},r={},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o(686).default)},28294:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return r}});var e=n(42152),o=n.n(e);function r(i){let r=$("#main pre");function e(){if(!i.__config.code.options.line)return!0;let r=$("code-box pre code");$.each(r,function(t){let e=$(r[t]),n=e.html().replace(/\<br\>/g,"\n").split("\n"),o=[];$.each(n,t=>{(n[t].trim()||t<n.length-1)&&"</code>"!==n[t]&&o.push('<code-line class="line-numbers-rows"></code-line>'+n[t])}),e.html(o.join("\n")),e.addClass("code-pre-line")})}if("function"==typeof(t=i).__config.hooks.beforeCode&&t.__config.hooks.beforeCode(t),$.each(r,function(e){let n=$(r[e]),t="code-"+i.__tools.randomString(6),o=(n.wrap('<code-box id="'+t+'"></code-box>'),n.attr("boxid",t),n.find("code"));if(0<o.length){let t=o.attr("class");t&&(e=t.match(/.*(language-[a-z0-9]+)\s+.*/))&&0<e.length&&n.addClass(e[1])}}),i.__config.code.options.macStyle){let e=$("code-box");$.each(e,function(t){$(e[t]).prepend('<div class="code-tools"></div>')})}else r.css("border-radius","4px");{let r=$("code-box");$.each(r,function(t){let e=$(r[t]),n=e.attr("id"),o='<button boxid="'+n+'" type="button" class="clipboard code-copay-btn" data-clipboard-action="copy" data-clipboard-target="#'+n+' pre" aria-label="复制代码" ><i class="iconfont icon-fuzhi"></i></button>';e.prepend(o)}),$("code-box .code-copay-btn").click(function(){$(this).find("i").removeClass("icon-fuzhi").addClass("icon-right"),setTimeout("$('code-box button[boxid="+$(this).attr("boxid")+"] i').removeClass('icon-right').addClass('icon-fuzhi')",1500)}),r.on({mouseover:function(){$(this).find(".code-copay-btn").css({opacity:1,visibility:"visible"})},mouseout:function(){$(this).find(".code-copay-btn").css({opacity:0,visibility:"hidden"})}}),new(o())(".clipboard")}var t;i.__config.code.options.maxHeight&&$("code-box pre").css("max-height",i.__config.code.options.maxHeight),"hljs"===i.__config.code.type.toLowerCase()?Promise.all([n.e(637),n.e(6586)]).then(n.bind(n,92209)).then(t=>{(0,t.default)(i,e)}):(r.css("background","#f5f5fa"),$("code-box .code-tools").css("background","#f5f5fa"),$("pre .hljs").css({background:"none",border:"0","border-radius":"0",padding:"0"}),e()),"function"==typeof(t=i).__config.hooks.afterCode&&t.__config.hooks.afterCode(t)}}}]);