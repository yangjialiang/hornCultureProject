webpackJsonp([25],{Oe8h:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("Dd8w"),n=e.n(s),a=e("NYxO"),c={name:"club",components:{},data:function(){return{detail:{}}},computed:n()({},Object(a.c)({}),{tabList:function(){var t=[];return this.tab.list.forEach(function(i){return t.push(i.label)}),t}}),created:function(){this.init()},methods:{init:function(){var t=this;this.$store.commit(this.$actionType.set_detail_title,{title:"俱乐部"}),this.$route.query.clubId&&this.$http.get(this.$port.GET_CLUB_DETAIL,{params:{clubId:this.$route.query.clubId}}).then(function(i){200===i.code?t.detail=i.data:alert(i.msg)})},handJoin:function(){var t=this;this.$http.post(this.$port.MY_CLUB_JOIN,this.$qs.stringify({clubId:this.$route.query.clubId})).then(function(i){200===i.code&&(t.detail.joinSatus=2),alert(i.msg)})}}},o={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",[e("section",{staticClass:"preview"},[e("div",{staticClass:"cover"},[e("img",{staticClass:"db fit-cover",attrs:{src:t.detail.mainimg}})]),t._v(" "),e("div",{staticClass:"text"},[e("h3",[t._v(t._s(t.detail.name))]),t._v(" "),e("p",[t._v(t._s(t.detail.desc))])]),t._v(" "),e("div",{staticClass:"ft"},[1===t.detail.joinSatus?[e("button",{staticClass:"ui-button primary",on:{click:t.handJoin}},[t._v("加入俱乐部")])]:[e("button",{staticClass:"ui-button disabled"},[t._v("已加入俱乐部")])]],2)])])},staticRenderFns:[]};var r=e("VU/8")(c,o,!1,function(t){e("T8/Y")},"data-v-3484132e",null);i.default=r.exports},"T8/Y":function(t,i){}});
//# sourceMappingURL=25.d40a53c8227e14649620.js.map