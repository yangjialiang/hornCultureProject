webpackJsonp([12],{YTNc:function(t,e){},gVXP:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Dd8w"),i=n.n(s),c=n("NYxO"),a=n("TrLn"),o={name:"",components:{Topbar:n("looZ").a,FixedLayout:a.a},props:{},data:function(){return{selectedIndex:-1,userClubList:[]}},computed:i()({},Object(c.c)({})),watch:{},created:function(){this.init()},methods:{init:function(){var t=this;this.$http.get(this.$port.GET_USER_CLUB_LIST,{params:{}}).then(function(e){200===e.code&&(t.userClubList=e.data)})},initData:function(){},handSelect:function(t){this.selectedIndex=t},handNext:function(){this.$store.commit(this.$actionType.set_article_data,{clubId:this.userClubList[this.selectedIndex].clubId}),this.$router.push({path:"done"})}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fixed-layout",[n("template",{slot:"header"},[n("mt-header",{attrs:{title:"选择俱乐部"}},[n("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[n("mt-button",{attrs:{icon:"back"},on:{click:function(e){t.$router.go(-1)}}})],1),t._v(" "),n("mt-button",{attrs:{slot:"right"},on:{click:t.handNext},slot:"right"},[t._v("下一步")])],1)],1),t._v(" "),n("div",{staticClass:"club"},[n("div",{staticClass:"item hd"},[n("span",[t._v("选择俱乐部")]),t._v(" "),n("span",[t._v(t._s((t.userClubList[t.selectedIndex]||{name:"请选择"}).name))])]),t._v(" "),t._l(t.userClubList,function(e,s){return[n("div",{staticClass:"item",class:{active:s===t.selectedIndex},on:{click:function(e){t.handSelect(s)}}},[n("div",[t._v(t._s(e.name))]),t._v(" "),n("div",[n("b",{staticClass:"iconfont icon-success"})])])]})],2)],2)},staticRenderFns:[]};var r=n("VU/8")(o,u,!1,function(t){n("vUqx"),n("YTNc")},"data-v-7d747776",null);e.default=r.exports},vUqx:function(t,e){}});
//# sourceMappingURL=12.e25e970cb7391e19669f.js.map