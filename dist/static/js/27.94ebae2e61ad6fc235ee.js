webpackJsonp([27],{Oe8h:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("Dd8w"),a=e.n(s),n=e("NYxO"),c={name:"club",components:{},data:function(){return{detail:{}}},computed:a()({},Object(n.d)({}),{tabList:function(){var t=[];return this.tab.list.forEach(function(i){return t.push(i.label)}),t}}),created:function(){this.init()},methods:{init:function(){var t=this;this.$store.commit(this.$actionType.set_detail,{title:"俱乐部",id:this.$route.query.clubId,userId:this.detail.userId}),this.$route.query.clubId&&this.$http.get(this.$port.GET_CLUB_DETAIL,{params:{clubId:this.$route.query.clubId}}).then(function(i){200===i.code?t.detail=i.data:alert(i.msg)})},handJoin:function(){var t=this;this.$http.post(this.$port.MY_CLUB_JOIN,this.$qs.stringify({clubId:this.$route.query.clubId})).then(function(i){200===i.code&&(t.detail.joinSatus=2),alert(i.msg)})}}},r={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",[e("section",{staticClass:"preview"},[e("div",{staticClass:"cover"},[e("img",{staticClass:"db fit-cover",attrs:{src:t.detail.mainimg}})]),t._v(" "),e("div",{staticClass:"text"},[e("h3",[t._v(t._s(t.detail.name))]),t._v(" "),e("p",[t._v(t._s(t.detail.desc))])]),t._v(" "),e("div",{staticClass:"ft"},[1===t.detail.joinSatus?[e("button",{staticClass:"ui-button primary",on:{click:t.handJoin}},[t._v("加入俱乐部")])]:[e("button",{staticClass:"ui-button disabled"},[t._v("已加入俱乐部")])]],2)])])},staticRenderFns:[]};var u=e("VU/8")(c,r,!1,function(t){e("SE0y")},"data-v-0fa3a2a7",null);i.default=u.exports},SE0y:function(t,i){}});
//# sourceMappingURL=27.94ebae2e61ad6fc235ee.js.map