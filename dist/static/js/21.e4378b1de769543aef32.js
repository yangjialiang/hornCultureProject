webpackJsonp([21],{"3T30":function(t,i){},Oe8h:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("Dd8w"),n=e.n(a),s=e("NYxO"),c={name:"club",components:{Topbar:e("looZ").a},data:function(){return{detail:{}}},computed:n()({},Object(s.c)({}),{tabList:function(){var t=[];return this.tab.list.forEach(function(i){return t.push(i.label)}),t}}),created:function(){this.init()},methods:{init:function(){var t=this;this.$route.query.clubId&&this.$http.get(this.$port.GET_CLUB_DETAIL,{params:{clubId:this.$route.query.clubId}}).then(function(i){200===i.code&&(t.detail=i.data)})}}},o={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",[e("topbar",[e("template",{slot:"before"},[e("b",{staticClass:"iconfont icon-back",on:{click:function(i){t.$router.go(-1)}}})]),t._v("\n    俱乐部详情\n  ")],2),t._v(" "),e("section",{staticClass:"preview"},[e("div",{staticClass:"cover"},[e("img",{staticClass:"db fit-cover",attrs:{src:t.detail.mainimg}})]),t._v(" "),e("div",{staticClass:"text"},[e("h3",[t._v(t._s(t.detail.name))]),t._v(" "),e("p",[t._v(t._s(t.detail.desc))])]),t._v(" "),e("div",{staticClass:"ft"},[1===t.detail.joinSatus?[e("button",{staticClass:"ui-button primary",on:{click:t.handJoin}},[t._v("加入俱乐部")])]:[e("button",{staticClass:"ui-button disabled"},[t._v("已加入俱乐部")])]],2)])],1)},staticRenderFns:[]};var r=e("VU/8")(c,o,!1,function(t){e("3T30")},"data-v-cd716828",null);i.default=r.exports}});
//# sourceMappingURL=21.e4378b1de769543aef32.js.map