webpackJsonp([15],{EoXc:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Cz8s"),i=s("TrLn"),n={name:"",components:{Topbar:s("looZ").a,FixedLayout:i.a,"v-Header":a.a},props:{},data:function(){return{title:"讨论区",selectedIndex:-1,list:[]}},watch:{},computed:{},created:function(){this.init()},methods:{init:function(){var t=this;this.$store.commit(this.$actionType.set_post_data,{tagId:0,clubId:0}),this.$http.get(this.$port.DISCUSS_TAG_PROT).then(function(e){t.list=e.data})},initData:function(){},handSelect:function(t){this.selectedIndex=t},handNext:function(){var t=this;this.$store.commit(this.$actionType.set_post_data,{tagId:this.list[this.selectedIndex].tagId}),this.$http.get(this.$port.MY_CLUB,{params:{auditStatus:2}}).then(function(e){200===e.code&&(e.data.length>1?t.$router.push({path:"/post/club"}):t.$router.push({path:"edit"}))})}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("fixed-layout",[s("template",{slot:"header"},[s("v-Header",{staticClass:"head"},[s("span",{staticClass:"headText",attrs:{slot:"text"},slot:"text"},[t._v("选择"+t._s(t.title))]),t._v(" "),s("mt-button",{staticClass:"nextBtn",attrs:{slot:"right"},on:{click:t.handNext},slot:"right"},[t._v("下一步")])],1)],1),t._v(" "),s("div",{staticClass:"club"},[s("div",{staticClass:"item hd"},[s("span",[t._v("选择"+t._s(t.title))]),t._v(" "),s("span",[t._v(t._s((t.list[t.selectedIndex]||{tagName:"请选择"}).tagName))])]),t._v(" "),t._l(t.list,function(e,a){return[s("div",{staticClass:"item",class:{active:a===t.selectedIndex},on:{click:function(e){t.handSelect(a)}}},[s("div",[t._v(t._s(e.tagName))]),t._v(" "),s("div",[s("b",{staticClass:"iconfont icon-success"})])])]})],2)],2)},staticRenderFns:[]};var o=s("VU/8")(n,c,!1,function(t){s("GCOk"),s("T0Nx")},"data-v-2d386bf6",null);e.default=o.exports},GCOk:function(t,e){},T0Nx:function(t,e){}});
//# sourceMappingURL=15.ff177cff527913020be3.js.map