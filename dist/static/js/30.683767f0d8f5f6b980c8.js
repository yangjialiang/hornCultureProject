webpackJsonp([30],{"06cV":function(t,s){},y7mp:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("Cz8s"),a={name:"",components:{"v-rendezvousList":e("wkrh").a,"v-Header":i.a},props:[],data:function(){return{Lists:[],Lists1:[],type:this.$route.query.publishInfoType,lastProductId:0,loading:!1,loadType:"more"}},watch:{},computed:{title:function(){return 3==this.type?"行程":5==this.type?"课程":"装备"}},created:function(){var t=this;this.getList(),this.$http.get(this.$port.MY_CONT_PRODUCT,{params:{contType:this.type,contStatus:2,lastProductId:0}}).then(function(s){var e=s.data;200==s.code&&(t.Lists=t.Lists.concat(e))}).catch(function(t){console.log(t.response.data)})},methods:{loadMore:function(){console.log(1),this.getList()},getList:function(){var t=this;"all"==this.loadType||this.loading||(this.loading=!0,this.$http.get(this.$port.MY_CONT_PRODUCT,{params:{contType:this.type,contStatus:3,lastProductId:this.lastProductId}}).then(function(s){var e=s.data;t.loading=!1,200==s.code&&(t.Lists1=t.Lists1.concat(e),e.length>0?(t.loadType=e.length<10?"all":"more",t.lastProductId=e.pop().productId):t.loadType="all")}).catch(function(s){t.loading=!1,console.log(s.response.data)}))}}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"publishInfoPage"},[e("v-Header",{staticClass:"head"},[e("span",{attrs:{slot:"text"},slot:"text"},[t._v("我发布的"+t._s(t.title))])]),t._v(" "),e("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"listsScrollCon",attrs:{id:"listsScrollCon","infinite-scroll-disabled":"loading","infinite-scroll-distance":"10"}},[e("v-rendezvousList",{attrs:{Lists:t.Lists}}),t._v(" "),t.Lists1.length>0?e("div",{staticClass:"tips"},[e("span",[t._v("———    以下内容已下架    ———")])]):t._e(),t._v(" "),e("v-rendezvousList",{attrs:{Lists:t.Lists1}})],1)],1)])},staticRenderFns:[]};var n=e("VU/8")(a,o,!1,function(t){e("06cV")},"data-v-1fc87f7f",null);s.default=n.exports}});
//# sourceMappingURL=30.683767f0d8f5f6b980c8.js.map