webpackJsonp([20],{Y7qR:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={name:"",props:[],components:{"v-Header":e("Cz8s").a},data:function(){return{lists:[]}},methods:{gotopath:function(t){this.$router.push({path:"/write/cover",query:{contType:t.contType,productId:t.contId}})},showUserType:function(t){switch(t){case 1:return"文章";case 2:return"贴子";case 3:return"约";case 4:return"装备";case 5:return"教程"}}},created:function(){var t=this;"all"!=this.loadType&&this.$http.get(this.$port.MY_CONT_DRAF,{params:{}}).then(function(s){var e=s.data;200==s.code&&(t.lists=t.lists.concat(e),t.loadType="all")}).catch(function(s){t.loading=!1,console.log(s.response.data)})}},n={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"draftPage"},[e("v-Header",{staticClass:"head"},[e("span",{attrs:{slot:"text"},slot:"text"},[t._v("我的草稿")])]),t._v(" "),e("div",{staticClass:"draftScroll"},[t._l(t.lists,function(s){return e("div",{key:s.contId,staticClass:"draftListsCon",on:{click:function(e){t.gotopath(s)}}},[e("div",{staticClass:"draftList"},[s.preimg?e("div",{staticClass:"listImg",style:{backgroundImage:"url("+s.preimg+")"}}):t._e(),t._v(" "),e("div",{staticClass:"listInfo"},[e("span",{staticClass:"type"},[t._v(t._s(t.showUserType(s.contType)))]),t._v(" "),e("span",{staticClass:"text",domProps:{textContent:t._s(s.title)}}),t._v(" "),e("span",{staticClass:"time",domProps:{textContent:t._s(s.createDate)}})])])])}),t._v(" "),0==t.lists.length?e("div",{staticClass:"Tips"},[t._v("暂无草稿")]):t._e()],2)],1)])},staticRenderFns:[]};var i=e("VU/8")(a,n,!1,function(t){e("wOWc")},"data-v-dab40dfe",null);s.default=i.exports},wOWc:function(t,s){}});
//# sourceMappingURL=20.96516fe46b8a19ddb08c.js.map