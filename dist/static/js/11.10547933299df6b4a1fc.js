webpackJsonp([11],{"/HsB":function(t,e){},"V/Qt":function(t,e){},gVXP:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("TrLn"),s={name:"",components:{Topbar:n("looZ").a,FixedLayout:a.a},props:{},data:function(){return{selectedIndex:-1,list:[{name:"号角俱乐部1"},{name:"号角俱乐部2"},{name:"号角俱乐部3"}]}},watch:{},computed:{},created:function(){this.init()},methods:{init:function(){},initData:function(){},handSelect:function(t){this.selectedIndex=t},handNext:function(){this.$store.commit(this.$actionType.write.set_article_data,{club:this.selectedIndex}),this.$router.push({path:"done"})}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fixed-layout",[n("template",{slot:"header"},[n("topbar",[n("template",{slot:"before"},[n("b",{staticClass:"iconfont icon-back",on:{click:function(e){t.$router.go(-1)}}})]),t._v("\n      选择俱乐部\n      "),n("template",{slot:"after"},[n("button",{staticClass:"btn",on:{click:t.handNext}},[t._v("下一步")])])],2)],1),t._v(" "),n("div",{staticClass:"club"},[n("div",{staticClass:"item hd"},[n("span",[t._v("选择俱乐部")]),t._v(" "),n("span",[t._v(t._s((t.list[t.selectedIndex]||{name:"请选择"}).name))])]),t._v(" "),t._l(t.list,function(e,a){return[n("div",{staticClass:"item",class:{active:a===t.selectedIndex},on:{click:function(e){t.handSelect(a)}}},[n("div",[t._v(t._s(e.name))]),t._v(" "),n("div",[n("b",{staticClass:"iconfont icon-success"})])])]})],2)],2)},staticRenderFns:[]};var c=n("VU/8")(s,i,!1,function(t){n("V/Qt"),n("/HsB")},"data-v-739ce8ae",null);e.default=c.exports}});
//# sourceMappingURL=11.10547933299df6b4a1fc.js.map