(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{383:function(t,e,n){},392:function(t,e,n){"use strict";var r={name:"article-stats-card",components:{Card:n(59).a},props:{type:{type:String,default:"primary"},icon:String,title:String,subTitle:String,path:String,iconClasses:[String,Array]}},l=(n(398),n(7)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("card",{staticClass:"card-stats",attrs:{"show-footer-line":!0}},[n("b-row",{staticClass:"article-row"},[n("b-col",[t._t("default",(function(){return[t.path?[n("nuxt-link",{directives:[{name:"to",rawName:"v-to",value:t.path,expression:"path"}]},[t.title?n("h5",{staticClass:"card-title h2 text-uppercase mb-0 font-weight-bold"},[t._v(t._s(t.title)+" ")]):t._e()])]:[t.title?n("h5",{staticClass:"card-title h2 text-uppercase mb-0 font-weight-bold"},[t._v(t._s(t.title))]):t._e()],t._v(" "),t.subTitle?n("span",{staticClass:"article-summary text-muted  mb-0"},[t._v(t._s(t.subTitle))]):t._e()]}))],2)],1),t._v(" "),n("p",{staticClass:"mt-3 mb-0 text-sm"},[t._t("footer")],2)],1)}),[],!1,null,null,null);e.a=component.exports},398:function(t,e,n){"use strict";n(383)},599:function(t,e,n){"use strict";n.r(e);var r,l=n(12),c=n(0),o=(n(384),n(67),n(385)),d=n.n(o),m=(n(386),n(387)),h=n.n(m),v=(n(388),n(389)),f=n.n(v),_=(n(31),n(11),n(10),n(78)),article=n(172),C=n(392),w={data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(t){this.sliding=!0},onSlideEnd:function(t){this.sliding=!1}}},x=n(7),y=Object(x.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-carousel",{staticClass:"mgl-carousel",staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[n("b-carousel-slide",{attrs:{caption:"",text:"网络风景图片 与本站与文章无关","img-src":"https://picsum.photos/1024/480/?image=52"}}),t._v(" "),n("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=54"}},[n("h1",[t._v("Hello world!")])]),t._v(" "),n("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/480/?image=58"}}),t._v(" "),n("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[n("img",{staticClass:"d-block img-fluid w-100",attrs:{width:"1024",height:"480",src:"https://picsum.photos/1024/480/?image=55",alt:"image slot"}})]},proxy:!0}])}),t._v(" "),n("b-carousel-slide",{attrs:{caption:"Blank Image","img-blank":"","img-alt":"Blank image"}},[n("p")])],1)],1)}),[],!1,null,null,null).exports,k={head:{title:"MGL.CLOUD BLOG 博客模板",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"MGL.CLOUD BLOG 博客模板"}]},layout:"DashboardLayout",components:(r={RouteBreadCrumb:_.a,ArticleStatsCard:C.a,Carousel:y},Object(c.a)(r,f.a.name,f.a),Object(c.a)(r,h.a.name,h.a),Object(c.a)(r,d.a.name,d.a),r),asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,r,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,r={queryParams:{pageNum:1,pageSize:10,title:""},list:[]},e.next=4,Object(article.a)(r.queryParams).then((function(t){return t.data.list}));case 4:return l=e.sent,r.list=l,c=l.slice(0,10),n.commit("pub/setNewArticles",c),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})))()},methods:{},mounted:function(){}};(function(t,e){if(t&&t.length){var n=0;document.documentElement.addEventListener("click",(function(e){var r=e.pageX,l=e.pageY,c=document.createElement("span");c.className="text-popup",this.appendChild(c),t[n]?c.innerHTML=t[n]:(n=0,c.innerHTML=t[0]),c.addEventListener("animationend",(function(){c.parentNode.removeChild(c)})),c.style.left=r-c.clientWidth/2+"px",c.style.top=l-c.clientHeight+"px",n++}))}})(["富强","民主","文明","和谐","自由","平等","公正","法治","爱国","敬业","诚信","友善"]);var S=k,O=Object(x.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-header",{staticClass:"pb-6"},[n("div",{staticClass:"row align-items-center py-4"},[n("div",{},[n("h6",{staticClass:"h1 text-white d-inline-block mb-0"},[t._v("锅仔博客")]),t._v(" "),n("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[n("route-bread-crumb")],1),t._v(" "),n("h4",{staticStyle:{color:"#a0a0a0"}},[t._v("\n          我们努力不是要改变世界，而是不想被世界改变！\n        ")])])]),t._v(" "),n("Carousel",{staticClass:"pb-4 row"})],1),t._v(" "),n("div",{staticClass:"mt--6"},[n("div",{},[n("div",{},t._l(t.list,(function(e){return n("div",{key:e.id,staticClass:"article-item"},[n("nuxt-link",{attrs:{to:{path:"/blog/article/"+e.id+".html"}}},[n("article-stats-card",{attrs:{title:e.title,type:"gradient-red","sub-title":e.summary,icon:"ni ni-active-40"}},[n("template",{slot:"footer"},[n("div",{staticClass:"article-list-item-footer"},[n("span",{staticClass:"text-success mr-2"},[n("i",{staticClass:"far fa-clock"}),t._v(t._s(e.createTime))]),t._v(" "),n("span",{staticClass:"text-nowrap"},[t._v("mgl.cloud")])])])],2)],1)],1)})),0)])])],1)}),[],!1,null,null,null);e.default=O.exports}}]);