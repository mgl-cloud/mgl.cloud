(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{552:function(t,e,n){},588:function(t,e,n){t.exports=n.p+"img/github.f7165d3.svg"},589:function(t,e,n){t.exports=n.p+"img/google.952443d.svg"},592:function(t,e,n){"use strict";n(552)},611:function(t,e,n){"use strict";n.r(e);var o=n(590),r=n.n(o),l=(n(591),n(160)),c=n(78),d=n(161),v={layout:"DashboardLayout",components:{Modal:l.d,BaseAlert:l.a,BaseHeader:d.a,RouteBreadcrumb:c.a},data:function(){return{notifications:{topCenter:!1},modals:{classic:!1,notice:!1,form:!1},formModal:{email:"",password:"",remember:!0}}},methods:{notifyVue:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";console.log(t),this.$notify({message:"Welcome to <b>Vue Argon Dashboard Pro</b> - a beautiful resource for every web developer",timeout:5e3,icon:"ni ni-bell-55",type:t})},showSwal:function(t){"basic"===t?r.a.fire({title:"Here's a message!",text:"A few words about this sweet alert ...",buttonsStyling:!1,confirmButtonClass:"btn btn-primary"}):"info"===t?r.a.fire({type:"info",title:"Info",text:"A few words about this sweet alert ...",buttonsStyling:!1,confirmButtonClass:"btn btn-info"}):"success"===t?r.a.fire({title:"Success",text:"A few words about this sweet alert ...",buttonsStyling:!1,confirmButtonClass:"btn btn-success",type:"success"}):"warning"===t?r.a.fire({title:"Warning",text:"A few words about this sweet alert ...",buttonsStyling:!1,confirmButtonClass:"btn btn-warning",type:"warning"}):"question"===t&&r.a.fire({title:"Are you sure?",text:"A few words about this sweet alert ...",buttonsStyling:!1,confirmButtonClass:"btn btn-default",type:"question"})}}},m=(n(592),n(7)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("base-header",{staticClass:"pb-6"},[o("div",{staticClass:"row align-items-center py-4"},[o("div",{staticClass:"col-lg-6 col-7"},[o("h6",{staticClass:"h2 text-white d-inline-block mb-0"},[t._v(t._s(t.$route.name))]),t._v(" "),o("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[o("route-breadcrumb")],1)]),t._v(" "),o("div",{staticClass:"col-lg-6 col-5 text-right"},[o("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("New")]),t._v(" "),o("base-button",{attrs:{size:"sm",type:"neutral"}},[t._v("Filters")])],1)])]),t._v(" "),o("div",{staticClass:"container-fluid mt--6"},[o("div",{staticClass:"row justify-content-center"},[o("div",{staticClass:"col-lg-8 card-wrapper"},[o("card",[o("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[t._v("Alerts")]),t._v(" "),o("base-alert",{attrs:{dismissible:"",type:"default",icon:"ni ni-like-2"}},[o("strong",[t._v("Default!")]),t._v(" This is a default alert—check it out!\n          ")]),t._v(" "),o("base-alert",{attrs:{dismissible:"",type:"primary",icon:"ni ni-like-2"}},[o("strong",[t._v("Default!")]),t._v(" This is a primary alert—check it out!\n          ")]),t._v(" "),o("base-alert",{attrs:{dismissible:"",type:"secondary",icon:"ni ni-like-2"}},[o("strong",[t._v("Default!")]),t._v(" This is a secondary alert—check it out!\n          ")]),t._v(" "),o("base-alert",{attrs:{dismissible:"",type:"info",icon:"ni ni-like-2"}},[o("strong",[t._v("Default!")]),t._v(" This is a info alert—check it out!\n          ")]),t._v(" "),o("base-alert",{attrs:{dismissible:"",type:"danger",icon:"ni ni-like-2"}},[o("strong",[t._v("Default!")]),t._v(" This is a danger alert—check it out!\n          ")]),t._v(" "),o("base-alert",{attrs:{dismissible:"",type:"warning",icon:"ni ni-like-2"}},[o("strong",[t._v("Default!")]),t._v(" This is a warning alert—check it out!\n          ")])],1),t._v(" "),o("card",[o("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[t._v("Modals")]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-4"},[o("base-button",{staticClass:"mb-3",attrs:{type:"primary",block:""},on:{click:function(e){t.modals.classic=!0}}},[t._v("Default")])],1),t._v(" "),o("div",{staticClass:"col-md-4"},[o("base-button",{staticClass:"mb-3",attrs:{type:"warning",block:""},on:{click:function(e){t.modals.notice=!0}}},[t._v("Notice")])],1),t._v(" "),o("div",{staticClass:"col-md-4"},[o("base-button",{staticClass:"mb-3",attrs:{type:"default",block:""},on:{click:function(e){t.modals.form=!0}}},[t._v("Form")])],1)]),t._v(" "),o("modal",{attrs:{show:t.modals.classic},on:{"update:show":function(e){return t.$set(t.modals,"classic",e)}}},[o("h6",{staticClass:"modal-title",attrs:{slot:"header"},slot:"header"},[t._v("Type your modal title")]),t._v(" "),o("p",[t._v("Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the\n              blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language\n              ocean.")]),t._v(" "),o("p",[t._v("A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a\n              paradisematic country, in which roasted parts of sentences fly into your mouth.")]),t._v(" "),o("template",{slot:"footer"},[o("base-button",{attrs:{type:"primary"}},[t._v("Save changes")]),t._v(" "),o("base-button",{staticClass:"ml-auto",attrs:{type:"link"},on:{click:function(e){t.modals.classic=!1}}},[t._v("Close")])],1)],2),t._v(" "),o("modal",{attrs:{show:t.modals.notice,"modal-classes":"modal-danger","modal-content-classes":"bg-gradient-danger"},on:{"update:show":function(e){return t.$set(t.modals,"notice",e)}}},[o("h6",{staticClass:"modal-title",attrs:{slot:"header"},slot:"header"},[t._v("Your attention is required")]),t._v(" "),o("div",{staticClass:"py-3 text-center"},[o("i",{staticClass:"ni ni-bell-55 ni-3x"}),t._v(" "),o("h4",{staticClass:"heading mt-4"},[t._v("You should read this!")]),t._v(" "),o("p",[t._v("A small river named Duden flows by their place and supplies it with the necessary regelialia.")])]),t._v(" "),o("template",{slot:"footer"},[o("base-button",{attrs:{type:"white"}},[t._v("Ok, Got it")]),t._v(" "),o("base-button",{staticClass:"text-white ml-auto",attrs:{type:"link"},on:{click:function(e){t.modals.notice=!1}}},[t._v("Close")])],1)],2),t._v(" "),o("modal",{attrs:{show:t.modals.form,size:"sm","body-classes":"p-0"},on:{"update:show":function(e){return t.$set(t.modals,"form",e)}}},[o("card",{staticClass:"border-0 mb-0",attrs:{type:"secondary","header-classes":"bg-transparent pb-5","body-classes":"px-lg-5 py-lg-5"}},[o("template",{slot:"header"},[o("div",{staticClass:"text-muted text-center mt-2 mb-3"},[o("small",[t._v("Sign in with")])]),t._v(" "),o("div",{staticClass:"btn-wrapper text-center"},[o("base-button",{attrs:{type:"neutral",icon:""}},[o("span",{staticClass:"btn-inner--icon"},[o("img",{attrs:{src:n(588)}})]),t._v(" "),o("span",{staticClass:"btn-inner--text"},[t._v("Github")])]),t._v(" "),o("base-button",{attrs:{type:"neutral",icon:""}},[o("span",{staticClass:"btn-inner--icon"},[o("img",{attrs:{src:n(589)}})]),t._v(" "),o("span",{staticClass:"btn-inner--text"},[t._v("Google")])])],1)]),t._v(" "),[o("div",{staticClass:"text-center text-muted mb-4"},[o("small",[t._v("Or sign in with credentials")])]),t._v(" "),o("form",{attrs:{role:"form"}},[o("base-input",{staticClass:"mb-3",attrs:{alternative:"",placeholder:"Email","prepend-icon":"ni ni-email-83"},model:{value:t.formModal.email,callback:function(e){t.$set(t.formModal,"email",e)},expression:"formModal.email"}}),t._v(" "),o("base-input",{attrs:{alternative:"",type:"password",placeholder:"Password","prepend-icon":"ni ni-lock-circle-open"},model:{value:t.formModal.password,callback:function(e){t.$set(t.formModal,"password",e)},expression:"formModal.password"}}),t._v(" "),o("div",{staticClass:"text-center"},[o("base-button",{staticClass:"my-4",attrs:{type:"primary"}},[t._v("Sign In")])],1)],1)]],2)],1)],1),t._v(" "),o("card",[o("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[t._v("Notifications")]),t._v(" "),o("button",{staticClass:"btn btn-default",on:{click:function(e){return t.notifyVue("default")}}},[t._v("Default")]),t._v(" "),o("button",{staticClass:"btn btn-info",on:{click:function(e){return t.notifyVue("info")}}},[t._v("Info")]),t._v(" "),o("button",{staticClass:"btn btn-success",on:{click:function(e){return t.notifyVue("success")}}},[t._v("Success")]),t._v(" "),o("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.notifyVue("warning")}}},[t._v("Warning")]),t._v(" "),o("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.notifyVue("danger")}}},[t._v("Danger")])]),t._v(" "),o("card",{staticClass:"ct-example"},[o("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[t._v("Sweet alerts")]),t._v(" "),o("base-button",{attrs:{type:"primary"},on:{click:function(e){return t.showSwal("basic")}}},[t._v("Basic alert")]),t._v(" "),o("base-button",{attrs:{type:"info"},on:{click:function(e){return t.showSwal("info")}}},[t._v("Info alert")]),t._v(" "),o("base-button",{attrs:{type:"success"},on:{click:function(e){return t.showSwal("success")}}},[t._v("Success alert")]),t._v(" "),o("base-button",{attrs:{type:"warning"},on:{click:function(e){return t.showSwal("warning")}}},[t._v("Warning alert")]),t._v(" "),o("base-button",{attrs:{type:"default"},on:{click:function(e){return t.showSwal("question")}}},[t._v("Question")])],1)],1)])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);