(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{383:function(t,e,r){},392:function(t,e,r){"use strict";var n={name:"article-stats-card",components:{Card:r(59).a},props:{type:{type:String,default:"primary"},icon:String,title:String,subTitle:String,path:String,iconClasses:[String,Array]}},l=(r(398),r(7)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("card",{staticClass:"card-stats",attrs:{"show-footer-line":!0}},[r("b-row",{staticClass:"article-row"},[r("b-col",[t._t("default",(function(){return[t.path?[r("nuxt-link",{directives:[{name:"to",rawName:"v-to",value:t.path,expression:"path"}]},[t.title?r("h5",{staticClass:"card-title h2 text-uppercase mb-0 font-weight-bold"},[t._v(t._s(t.title)+" ")]):t._e()])]:[t.title?r("h5",{staticClass:"card-title h2 text-uppercase mb-0 font-weight-bold"},[t._v(t._s(t.title))]):t._e()],t._v(" "),t.subTitle?r("span",{staticClass:"article-summary text-muted  mb-0"},[t._v(t._s(t.subTitle))]):t._e()]}))],2)],1),t._v(" "),r("p",{staticClass:"mt-3 mb-0 text-sm"},[t._t("footer")],2)],1)}),[],!1,null,null,null);e.a=component.exports},398:function(t,e,r){"use strict";r(383)},399:function(t,e,r){"use strict";e.a=[{img:"/img/theme/bootstrap.jpg",title:"Argon Design System",budget:"$2500 USD",status:"pending",statusType:"warning",completion:60},{img:"/img/theme/angular.jpg",title:"Angular Now UI Kit PRO",budget:"$1800 USD",status:"completed",statusType:"success",completion:100},{img:"/img/theme/sketch.jpg",title:"Black Dashboard",budget:"$3150 USD",status:"delayed",statusType:"danger",completion:72},{img:"/img/theme/react.jpg",title:"React Material Dashboard",budget:"$4400 USD",status:"on schedule",statusType:"info",completion:90},{img:"/img/theme/vue.jpg",title:"Vue Paper UI Kit PRO",budget:"$2200 USD",status:"completed",statusType:"success",completion:100},{img:"/img/theme/bootstrap.jpg",title:"Argon Design System",budget:"$2500 USD",status:"pending",statusType:"warning",completion:60},{img:"/img/theme/angular.jpg",title:"Angular Now UI Kit PRO",budget:"$1800 USD",status:"completed",statusType:"success",completion:100},{img:"/img/theme/sketch.jpg",title:"Black Dashboard",budget:"$3150 USD",status:"delayed",statusType:"danger",completion:72},{img:"/img/theme/vue.jpg",title:"Vue Paper UI Kit PRO",budget:"$2200 USD",status:"completed",statusType:"success",completion:100}]},403:function(t,e,r){"use strict";var n,l=r(12),c=r(0),o=(r(384),r(67),r(385)),m=r.n(o),d=(r(386),r(387)),h=r.n(d),v=(r(388),r(389)),f=r.n(v),_=(r(393),r(394)),C=r.n(_),w=(r(395),r(396)),y=r.n(w),j=(r(31),r(11),r(14),r(399),r(392)),x=(r(172),{name:"light-table",components:(n={ArticleStatsCard:j.a},Object(c.a)(n,y.a.name,y.a),Object(c.a)(n,C.a.name,C.a),Object(c.a)(n,f.a.name,f.a),Object(c.a)(n,h.a.name,h.a),Object(c.a)(n,m.a.name,m.a),n),asyncData:function(){return Object(l.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={},t.next=3,new Promise((function(t,r){setTimeout((function(){e.username="John Smith",t()}),1)}));case 3:return t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{queryParams:{pageNum:1,pageSize:10,title:""},list:[]}},mounted:function(){},actions:{nuxtServerInit:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.dispatch,e.next=3,r("core/load");case 3:case"end":return e.stop()}}),e)})))()}}}),S=r(7),component=Object(S.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},t._l(t.list,(function(e){return r("div",{key:e.id,staticClass:"col-xl-6 col-md-6"},[r("article-stats-card",{attrs:{title:e.title,type:"gradient-red","sub-title":e.summary,icon:"ni ni-active-40"}},[r("template",{slot:"footer"},[r("span",{staticClass:"text-success mr-2"},[r("i",{staticClass:"fa fa-arrow-up"}),t._v(t._s(e.createTime))]),t._v(" "),r("span",{staticClass:"text-nowrap"},[t._v("mgl.cloud")])])],2)],1)})),0)}),[],!1,null,null,null);e.a=component.exports},404:function(t,e,r){"use strict";var n,l=r(0),c=(r(384),r(67),r(385)),o=r.n(c),m=(r(386),r(387)),d=r.n(m),h=(r(388),r(389)),v=r.n(h),f=(r(393),r(394)),_=r.n(f),C=(r(395),r(396)),w=r.n(C),y=(r(11),r(399)),j={name:"light-table",components:(n={},Object(l.a)(n,w.a.name,w.a),Object(l.a)(n,_.a.name,_.a),Object(l.a)(n,v.a.name,v.a),Object(l.a)(n,d.a.name,d.a),Object(l.a)(n,o.a.name,o.a),n),data:function(){return{projects:y.a,currentPage:1}}},x=r(7),component=Object(x.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card bg-default shadow"},[t._m(0),t._v(" "),r("el-table",{staticClass:"table-responsive table-dark",attrs:{"header-row-class-name":"thead-dark",data:t.projects}},[r("el-table-column",{attrs:{label:"Project","min-width":"310px",prop:"name",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[r("div",{staticClass:"media align-items-center"},[r("a",{staticClass:"avatar rounded-circle mr-3",attrs:{href:"#"}},[r("img",{attrs:{alt:"Image placeholder",src:n.img}})]),t._v(" "),r("div",{staticClass:"media-body"},[r("span",{staticClass:"font-weight-600 name mb-0 text-sm"},[t._v(t._s(n.title))])])])]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"Budget",prop:"budget","min-width":"140px",sortable:""}}),t._v(" "),r("el-table-column",{attrs:{label:"Status","min-width":"170px",prop:"status",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[r("badge",{staticClass:"badge-dot mr-4"},[r("i",{class:"bg-"+n.statusType}),t._v(" "),r("span",{staticClass:"status"},[t._v(t._s(n.status))])])]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"Users","min-width":"190px"}},[r("div",{staticClass:"avatar-group"},[r("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Ryan Tompson"}},[r("img",{attrs:{alt:"Image placeholder",src:"/img/theme/team-1.jpg"}})]),t._v(" "),r("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Romina Hadid"}},[r("img",{attrs:{alt:"Image placeholder",src:"/img/theme/team-2.jpg"}})]),t._v(" "),r("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Alexander Smith"}},[r("img",{attrs:{alt:"Image placeholder",src:"/img/theme/team-3.jpg"}})]),t._v(" "),r("a",{staticClass:"avatar avatar-sm rounded-circle",attrs:{href:"#","data-toggle":"tooltip","data-original-title":"Jessica Doe"}},[r("img",{attrs:{alt:"Image placeholder",src:"/img/theme/team-4.jpg"}})])])]),t._v(" "),r("el-table-column",{attrs:{label:"Completion",prop:"completion","min-width":"240px",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[r("div",{staticClass:"d-flex align-items-center"},[r("span",{staticClass:"completion mr-2"},[t._v(t._s(n.completion)+"%")]),t._v(" "),r("div",[r("base-progress",{attrs:{type:n.statusType,value:n.completion}})],1)])]}}])}),t._v(" "),r("el-table-column",{attrs:{"min-width":"180px"},scopedSlots:t._u([{key:"default",fn:function(e){e.row;return[r("el-dropdown",{staticClass:"dropdown",attrs:{trigger:"click"}},[r("span",{staticClass:"btn btn-sm btn-icon-only text-light"},[r("i",{staticClass:"fas fa-ellipsis-v mt-2"})]),t._v(" "),r("el-dropdown-menu",{staticClass:"dropdown-menu dropdown-menu-arrow show",attrs:{slot:"dropdown"},slot:"dropdown"},[r("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),r("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),r("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])],1)]}}])})],1)],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-header bg-transparent border-0"},[r("h3",{staticClass:"mb-0 text-white"},[t._v("Dark table")])])}],!1,null,null,null);e.a=component.exports},553:function(t,e,r){},594:function(t,e,r){"use strict";r(553)},615:function(t,e,r){"use strict";r.r(e);var n,l=r(12),c=r(0),o=(r(393),r(67),r(394)),m=r.n(o),d=(r(395),r(396)),h=r.n(d),v=(r(384),r(385)),f=r.n(v),_=(r(386),r(387)),C=r.n(_),w=(r(388),r(389)),y=r.n(w),j=(r(31),r(11),r(13),r(78)),x=r(403),S=r(404),O=r(172),k=r(392),T=r(546),D=(r(547),{head:function(){return{title:this.article.title,meta:[{hid:"article description",name:"description",content:this.article.title}]}},layout:"DashboardLayout",components:(n={LightTable:x.a,DarkTable:S.a,RouteBreadCrumb:j.a,ArticleStatsCard:k.a},Object(c.a)(n,y.a.name,y.a),Object(c.a)(n,C.a.name,C.a),Object(c.a)(n,f.a.name,f.a),Object(c.a)(n,h.a.name,h.a),Object(c.a)(n,m.a.name,m.a),n),asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query.id||t.params.id,n={queryParams:{pageNum:1,pageSize:10,title:""},id:r.replace(".html",""),article:{}},e.next=4,Object(O.b)(n.id).then((function(t){return n.article=t.data,t.data}));case 4:return e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))()},methods:{readMode:function(){T.a.show([{src:"#article-content",type:"clone",mainClass:"read-mode"}])}},mounted:function(){}}),R=(r(594),r(7)),component=Object(R.a)(D,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("base-header",{staticClass:"pb-6"},[r("div",{staticClass:"row align-items-center py-4"},[r("div",{staticClass:"col-lg-6 col-7"},[r("h6",{staticClass:"h2 text-white d-inline-block mb-0"},[t._v("ARTICLE")]),t._v(" "),r("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[r("route-bread-crumb")],1)])])]),t._v(" "),r("div",{staticClass:"mt--6"},[r("div",{staticClass:"article-detail"},[r("card",{attrs:{"header-classes":"bg-transparent"}},[r("div",{attrs:{slot:"header"},slot:"header"},[r("h2",{staticClass:"mb-0",domProps:{textContent:t._s(t.article.title)}}),t._v(" "),r("a",{staticClass:"read-mode-btn",attrs:{href:"javascript:;"},on:{click:function(e){return t.readMode()}}},[r("i",{staticClass:"fab fa-readme"})]),t._v(" "),r("div",{staticStyle:{"margin-top":"1rem",BACKGROUND:"rgb(0 0 0 / 8%)",WIDTH:"100%"}},[r("div",[r("i",{staticClass:"far fa-clock"}),t._v(" "+t._s(t.article.createTime))])])]),t._v(" "),r("div",{staticClass:"col-lg-12 col-md-6",attrs:{id:"article-content"},domProps:{innerHTML:t._s(t.article.content)}})])],1)])],1)}),[],!1,null,"4568237e",null);e.default=component.exports}}]);