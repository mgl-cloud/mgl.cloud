(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{542:function(t,e,n){},543:function(t,e,n){},576:function(t,e,n){"use strict";n(542)},577:function(t,e,n){"use strict";n(543)},594:function(t,e,n){"use strict";n.r(e);var c=n(12),article=(n(31),n(171)),r={data:function(){return{testList:[]}},mounted:function(){var t=this;Object(article.a)({}).then((function(e){console.info(e.data.list);for(var n=0;n<e.data.list.length;n++){var c=e.data.list[n],r={key:c.id,time:c.createTime,text:c.title};t.testList.push(r)}t.$nextTick((function(){t.$refs.dotted.style.left=t.$refs.circular[0].offsetLeft-12+"px"}))}))}},l=(n(576),n(7)),o={components:{mglTimeline:Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"time"},[n("div",{staticClass:"text-content"},[n("h2",{staticClass:"text-center"},[t._v("时间轴")]),t._v(" "),n("div",{staticClass:"time-line"},[t._l(t.testList,(function(e){return n("div",{key:e.key,staticClass:"time-line-div"},[n("p",{staticClass:"timeline-time"},[t._v(t._s(e.time))]),t._v(" "),n("p",{ref:"circular",refInFor:!0}),t._v(" "),n("p",{staticClass:"timeline-text"},[n("nuxt-link",{staticClass:"time-line-link",attrs:{to:{path:"/blog/article/"+e.key}}},[t._v(t._s(e.text))])],1)])})),t._v(" "),n("div",{ref:"dotted",staticClass:"img-dotted"})],2),t._v(" "),n("div",{staticStyle:{"margin-top":"20px"}})])])}),[],!1,null,null,null).exports},layout:"DashboardLayout",data:function(){return{articles:[]}},methods:{},mounted:function(){return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}},d=(n(577),Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("base-header",{staticClass:"pb-6"},[n("div",{staticClass:"row align-items-center py-4"},[n("div",{staticClass:"col-lg-6 col-7"},[n("h6",{staticClass:"h2 text-white d-inline-block mb-0"},[t._v("文章归档")]),t._v(" "),n("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[n("route-breadcrumb")],1)])])]),t._v(" "),n("div",{staticClass:"mt--6"},[n("div",{staticClass:"archive"},[n("div",{staticClass:"card border-0"},[n("mgl-timeline")],1)])])],1)}),[],!1,null,"b3c9ac16",null));e.default=d.exports}}]);