(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{545:function(t,e,n){},581:function(t,e,n){"use strict";n(545)},606:function(t,e,n){"use strict";n.r(e);var o,r=n(0),l=(n(573),n(67),n(262)),c=n.n(l),d=(n(574),n(575)),m=n.n(d),f=(n(576),n(577)),h=n.n(f),v=(n(384),n(385)),_=n.n(v),C=(n(386),n(387)),w=n.n(C),P=(n(388),n(389)),y=n.n(P),x=(n(393),n(394)),j=n.n(x),O=(n(395),n(396)),k=n.n(O),R=(n(264),n(174)),E=n.n(R),L=(n(11),{layout:"DashboardLayout",components:(o={BasePagination:n(160).b},Object(r.a)(o,E.a.name,E.a),Object(r.a)(o,k.a.name,k.a),Object(r.a)(o,j.a.name,j.a),Object(r.a)(o,y.a.name,y.a),Object(r.a)(o,w.a.name,w.a),Object(r.a)(o,_.a.name,_.a),Object(r.a)(o,h.a.name,h.a),Object(r.a)(o,m.a.name,m.a),Object(r.a)(o,c.a.name,c.a),o),data:function(){return{selectedRows:[],users:[],sort:"created_at",pagination:{perPage:5,currentPage:1,perPageOptions:[5,10,25,50]},total:1}},computed:{from:function(){return this.pagination.perPage*(this.pagination.currentPage-1)},to:function(){var t=this.from+this.pagination.perPage;return this.total<t&&(t=this.total),t}},created:function(){this.getList()},methods:{getList:function(){this.users=[{name:"Admin",email:"admin@jsonapi.com",created_at:"2020-01-01"}]},onProFeature:function(){this.$notify({type:"danger",message:"This is a PRO feature."})},sortChange:function(t){var e=t.prop,n=t.order;this.sort="descending"===n?"-".concat(e):"".concat(e),this.getList()}}}),$=(n(581),n(7)),component=Object($.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid mt-5"},[t._m(0),t._v(" "),n("div",[n("card",{staticClass:"no-border-card",attrs:{"body-classes":"px-0 pb-1","footer-classes":"pb-2"}},[n("template",{slot:"header"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("h3",{staticClass:"mb-0"},[t._v("Users List")])]),t._v(" "),n("div",{staticClass:"col-6 text-right"},[n("base-button",{attrs:{type:"primary",icon:"",size:"sm"},on:{click:t.onProFeature}},[n("span",{staticClass:"btn-inner--icon"},[n("i",{staticClass:"fas fa-user-edit"})]),t._v(" "),n("span",{staticClass:"btn-inner--text"},[t._v("Add User")])])],1)])]),t._v(" "),n("div",[n("div",{staticClass:"col-12 d-flex justify-content-center justify-content-sm-between flex-wrap mb-4"},[n("el-select",{staticClass:"select-primary pagination-select",attrs:{placeholder:"Per page"},model:{value:t.pagination.perPage,callback:function(e){t.$set(t.pagination,"perPage",e)},expression:"pagination.perPage"}},t._l(t.pagination.perPageOptions,(function(t){return n("el-option",{key:t,staticClass:"select-primary",attrs:{label:t,value:t}})})),1)],1),t._v(" "),n("el-table",{staticClass:"table-responsive align-items-center table-flush",attrs:{"header-row-class-name":"thead-light",data:t.users},on:{"sort-change":t.sortChange}},[n("el-table-column",{attrs:{label:"Name","min-width":"310px",prop:"name",sortable:"custom"}}),t._v(" "),n("el-table-column",{attrs:{label:"Email","min-width":"310px",prop:"email",sortable:"custom"}}),t._v(" "),n("el-table-column",{attrs:{label:"Created At",prop:"created_at","min-width":"140px",sortable:"custom"}}),t._v(" "),n("el-table-column",{attrs:{"min-width":"180px",align:"center"}},[n("div",{staticClass:"table-actions"},[n("el-tooltip",{attrs:{content:"Edit",placement:"top"}},[n("a",{staticClass:"table-action",staticStyle:{cursor:"pointer"},attrs:{type:"text","data-toggle":"tooltip"},on:{click:t.onProFeature}},[n("i",{staticClass:"fas fa-user-edit"})])]),t._v(" "),n("el-tooltip",{attrs:{content:"Delete",placement:"top"}},[n("a",{staticClass:"table-action table-action-delete",staticStyle:{cursor:"pointer"},attrs:{type:"text","data-toggle":"tooltip"},on:{click:t.onProFeature}},[n("i",{staticClass:"fas fa-trash"})])])],1)])],1)],1),t._v(" "),n("div",{staticClass:"col-12 d-flex justify-content-center justify-content-sm-between flex-wrap",attrs:{slot:"footer"},slot:"footer"},[n("div",{},[n("p",{staticClass:"card-category"},[t._v("\n            Showing "+t._s(t.from+1)+" to "+t._s(t.to)+" of "+t._s(t.total)+" entries\n\n            "),t.selectedRows.length?n("span",[t._v("\n                  "+t._s(t.selectedRows.length)+" rows selected\n            ")]):t._e()])]),t._v(" "),n("base-pagination",{staticClass:"pagination-no-border",attrs:{"per-page":t.pagination.perPage,total:t.total},model:{value:t.pagination.currentPage,callback:function(e){t.$set(t.pagination,"currentPage",e)},expression:"pagination.currentPage"}})],1)],2)],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alert alert-danger"},[n("strong",[t._v("Add, Edit, Delete features are not functional. This is a PRO feature!\n      Click\n      "),n("a",{attrs:{href:"https://www.creative-tim.com/live/nuxt-argon-dashboard-pro-laravel",target:"_blank",id:"pro-feature"}},[t._v("here")]),t._v("\n      to see the PRO product.")])])}],!1,null,null,null);e.default=component.exports}}]);