/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{580:function(t,e,n){var o=n(581),r={autoSetContainer:!1,appendToBody:!0},c={install:function(t){t.prototype.$clipboardConfig=r,t.prototype.$copyText=function(text,t){return new Promise((function(e,n){var c=document.createElement("button"),l=new o(c,{text:function(){return text},action:function(){return"copy"},container:"object"==typeof t?t:document.body});l.on("success",(function(t){l.destroy(),e(t)})),l.on("error",(function(t){l.destroy(),n(t)})),r.appendToBody&&document.body.appendChild(c),c.click(),r.appendToBody&&document.body.removeChild(c)}))},t.directive("clipboard",{bind:function(t,e,n){if("success"===e.arg)t._vClipboard_success=e.value;else if("error"===e.arg)t._vClipboard_error=e.value;else{var c=new o(t,{text:function(){return e.value},action:function(){return"cut"===e.arg?"cut":"copy"},container:r.autoSetContainer?t:void 0});c.on("success",(function(e){var n=t._vClipboard_success;n&&n(e)})),c.on("error",(function(e){var n=t._vClipboard_error;n&&n(e)})),t._vClipboard=c}},update:function(t,e){"success"===e.arg?t._vClipboard_success=e.value:"error"===e.arg?t._vClipboard_error=e.value:(t._vClipboard.text=function(){return e.value},t._vClipboard.action=function(){return"cut"===e.arg?"cut":"copy"})},unbind:function(t,e){"success"===e.arg?delete t._vClipboard_success:"error"===e.arg?delete t._vClipboard_error:(t._vClipboard.destroy(),delete t._vClipboard)}})},config:r};t.exports=c},581:function(t,e,n){t.exports=function(){return n={},t.m=e=[function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e,n){var o=n(3),r=n(4);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!o.string(e))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(t))return s=e,h=n,(u=t).addEventListener(s,h),{destroy:function(){u.removeEventListener(s,h)}};if(o.nodeList(t))return a=t,f=e,d=n,Array.prototype.forEach.call(a,(function(t){t.addEventListener(f,d)})),{destroy:function(){Array.prototype.forEach.call(a,(function(t){t.removeEventListener(f,d)}))}};if(o.string(t))return c=t,l=e,i=n,r(document.body,c,l,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var c,l,i,a,f,d,u,s,h}},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var a=n(5);function i(t,e,n,o,r){var i=function(t,e,n,o){return function(n){n.delegateTarget=a(n.target,e),n.delegateTarget&&o.call(t,n)}}.apply(this,arguments);return t.addEventListener(n,i,r),{destroy:function(){t.removeEventListener(n,i,r)}}}t.exports=function(t,e,n,o,r){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return i(t,e,n,o,r)})))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),this.resolveOptions(t),this.initSelection()}var l=(function(t,e,n){e&&a(t.prototype,e),n&&a(t,n)}(c,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=r()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=r()(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(t){var e=0<arguments.length&&void 0!==t?t:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),c),u=n(1),s=n.n(u),f=n(2),d=n.n(f),h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=function(t,e,n){return e&&y(t.prototype,e),n&&y(t,n),t};function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var v=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(m,s.a),p(m,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===h(e.container)?e.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=d()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return b("action",t)}},{key:"defaultTarget",value:function(t){var e=b("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return b("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(t){var e=0<arguments.length&&void 0!==t?t:["copy","cut"],n="string"==typeof e?[e]:e,o=!!document.queryCommandSupported;return n.forEach((function(t){o=o&&!!document.queryCommandSupported(t)})),o}}]),m);function m(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,m);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(m.__proto__||Object.getPrototypeOf(m)).call(this));return n.resolveOptions(e),n.listenClick(t),n}function b(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}e.default=v}],t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(t){return e[t]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},t.p="",t(t.s=6).default;function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var e,n}()},603:function(t,e,n){"use strict";n.r(e);var o=n(6),r=n(580),c=n.n(r),l=n(78),f=n(161);o.default.use(c.a);var d={name:"icons",layout:"DashboardLayout",components:{BaseHeader:f.a,RouteBreadcrumb:l.a},methods:{onCopy:function(){this.$notify({type:"info",message:"Copied to clipboard"})}}},h=n(7),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-header",{staticClass:"pb-6"},[n("div",{staticClass:"row align-items-center py-4"},[n("div",{staticClass:"col-lg-6 col-7"},[n("h6",{staticClass:"h2 text-white d-inline-block mb-0"},[t._v(t._s(t.$route.name))]),t._v(" "),n("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[n("route-breadcrumb")],1)])])]),t._v(" "),n("div",{staticClass:"container-fluid mt--6"},[n("div",{staticClass:"justify-content-center"},[n("div",[n("card",{attrs:{"header-classes":"bg-transparent"}},[n("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[t._v("Tags")]),t._v(" "),n("div",{staticClass:"row icon-examples"},[n("div",{staticClass:"col-lg-3 col-md-6"},[n("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:"ni ni-active-40",expression:"'ni ni-active-40'",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],staticClass:"btn-icon-clipboard",attrs:{type:"button",title:"","data-original-title":"Copy to clipboard"}},[n("div",[n("i",{staticClass:"ni ni-active-40"}),t._v(" "),n("span",[t._v("博客")])])])])])])],1)])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);