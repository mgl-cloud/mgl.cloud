(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{386:function(t,e,r){},388:function(t,e,r){"use strict";var n=r(0);r(17),r(3),r(2),r(1),r(4),r(5),r(260);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a={data:function(){return{isLoading:!1,apiValidationErrors:{}}},methods:{setApiValidation:function(t){this.apiValidationErrors=t.reduce((function(t,e){if(console.info(t),console.info(e),void 0===e.source)return!1;var r=e.source.pointer.split("/")[3],o=(t[r]||[]).concat(e.detail);return c(c({},t),{},Object(n.a)({},r,o))}),{})},unsetApiValidationErrors:function(){this.apiValidationErrors={}}}}},389:function(t,e,r){"use strict";var n={props:{errors:{type:Array,default:function(){return[]}}}},o=(r(390),r(7)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.errors&&t.errors.length?r("span",[r("small",{staticClass:"argon-error",domProps:{textContent:t._s(t.errors[0])}})]):t._e()}),[],!1,null,null,null);e.a=component.exports},390:function(t,e,r){"use strict";r(386)},557:function(t,e,r){},595:function(t,e,r){"use strict";r(557)},619:function(t,e,r){"use strict";r.r(e);var n=r(389),o={layout:"AuthLayout",mixins:[r(388).a],components:{ValidationError:n.a},data:function(){return{form:{data:{type:"token",attributes:{email:"mgl.cloud",password:"mgl.cloud"}}}}},methods:{}},c=(r(595),r(7)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"header bg-gradient-success py-7 py-lg-8 pt-lg-9"},[r("div",{staticClass:"container"},[r("notifications"),t._v(" "),t._m(0)],1),t._v(" "),r("div",{staticClass:"separator separator-bottom separator-skew zindex-100"},[r("svg",{attrs:{x:"0",y:"0",viewBox:"0 0 2560 100",preserveAspectRatio:"none",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[r("polygon",{staticClass:"fill-default",attrs:{points:"2560 0 2560 100 0 100"}})])])]),t._v(" "),r("div",{staticClass:"container mt--9 pb-5"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-lg-5 col-md-7"},[r("div",{staticClass:"card bg-secondary border-0 mb-0"},[r("div",{staticClass:"card-body px-lg-5 py-lg-5"},[t._m(1),t._v(" "),r("form",{staticClass:"needs-validation",on:{submit:function(e){return e.preventDefault(),t.handleSubmit()}}},[r("base-input",{staticClass:"mb-3",attrs:{alternative:"",name:"Email","prepend-icon":"ni ni-email-83",placeholder:"Email"},model:{value:t.form.data.attributes.email,callback:function(e){t.$set(t.form.data.attributes,"email",e)},expression:"form.data.attributes.email"}}),t._v(" "),r("validation-error",{attrs:{errors:t.apiValidationErrors.email}}),t._v(" "),r("base-input",{staticClass:"mb-3",attrs:{alternative:"",name:"Password","prepend-icon":"ni ni-lock-circle-open",type:"password",placeholder:"Password"},model:{value:t.form.data.attributes.password,callback:function(e){t.$set(t.form.data.attributes,"password",e)},expression:"form.data.attributes.password"}}),t._v(" "),r("validation-error",{attrs:{errors:t.apiValidationErrors.password}}),t._v(" "),r("div",{staticClass:"text-center"},[r("base-button",{staticClass:"my-4",attrs:{type:"primary","native-type":"button"}},[t._v("Sign in")])],1)],1)])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header-body text-center mb-7"},[r("div",{staticClass:"text-white"},[r("h3",{staticClass:"text-white"},[r("strong",[t._v("You can log in with:")])]),t._v(" "),r("div",[t._v("Username "),r("b",[t._v("mgl")]),t._v(" Password "),r("b",[t._v("mgl")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center text-muted mb-4"},[r("small",[t._v("Sign in with credentials")])])}],!1,null,"749c623a",null);e.default=component.exports}}]);