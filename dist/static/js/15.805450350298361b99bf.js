webpackJsonp([15],{"4bpI":function(t,e){},dOoc:function(t,e){},rI90:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("TrLn"),s={name:"",components:{Topbar:n("looZ").a,FixedLayout:i.a},props:{},data:function(){return{title:"俱乐部",selectedIndex:-1,list:[]}},watch:{},computed:{},created:function(){this.init()},methods:{init:function(){var t=this;this.$http.get(this.$port.GET_USER_CLUB_LIST).then(function(e){200===e.code&&(200===e.code?t.list=e.data:alert(e.msg))})},initData:function(){},handSelect:function(t){this.selectedIndex=t},handNext:function(){this.$store.commit(this.$actionType.write.set_post_data,{clubId:this.selectedIndex}),this.$router.push({path:"edit"})}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fixed-layout",[n("template",{slot:"header"},[n("topbar",[n("template",{slot:"before"},[n("b",{staticClass:"iconfont icon-back",on:{click:function(e){t.$router.go(-1)}}})]),t._v("\n      选择"+t._s(t.title)+"\n      "),n("template",{slot:"after"},[n("button",{staticClass:"btn",on:{click:t.handNext}},[t._v("下一步")])])],2)],1),t._v(" "),n("div",{staticClass:"club"},[n("div",{staticClass:"item hd"},[n("span",[t._v("选择"+t._s(t.title))]),t._v(" "),n("span",[t._v(t._s((t.list[t.selectedIndex]||{name:"请选择"}).name))])]),t._v(" "),t._l(t.list,function(e,i){return[n("div",{staticClass:"item",class:{active:i===t.selectedIndex},on:{click:function(e){t.handSelect(i)}}},[n("div",[t._v(t._s(e.name))]),t._v(" "),n("div",[n("b",{staticClass:"iconfont icon-success"})])])]})],2)],2)},staticRenderFns:[]};var c=n("VU/8")(s,a,!1,function(t){n("dOoc"),n("4bpI")},"data-v-4ff5a0be",null);e.default=c.exports}});
//# sourceMappingURL=15.805450350298361b99bf.js.map