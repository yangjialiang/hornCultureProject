webpackJsonp([27],{NoNr:function(t,s){},y7mp:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("Dd8w"),o=e.n(i),n=e("Cz8s"),a=e("wkrh"),r=e("NYxO"),l={name:"",components:{"v-rendezvousList":a.a,"v-Header":n.a},props:[],data:function(){return{Lists:[],Lists1:[],type:this.$route.query.publishInfoType,lastProductId:0,loading:!1,loadType:"more"}},watch:{},computed:o()({},Object(r.c)({_userType:function(t){return t.userInfo.userType}}),{title:function(){return 3==this.type?"行程":5==this.type?"课程":"装备"}}),created:function(){var t=this;this.getList(),this.$http.get(this.$port.MY_CONT_PRODUCT,{params:{contType:this.type,contStatus:2,lastProductId:0}}).then(function(s){var e=s.data;200==s.code&&(t.Lists=t.Lists.concat(e))}).catch(function(t){console.log(t.response.data)})},methods:{publish:function(){2==this._userType||3==this._userType||4==this._userType?this.$router.push({path:"/write/cover",query:{contType:this.type}}):alert("暂无发布文章权限，请到个人主页进行身份验证吧^_^")},loadMore:function(){console.log(1),this.getList()},getList:function(){var t=this;"all"==this.loadType||this.loading||(this.loading=!0,this.$http.get(this.$port.MY_CONT_PRODUCT,{params:{contType:this.type,contStatus:3,lastProductId:this.lastProductId}}).then(function(s){var e=s.data;t.loading=!1,200==s.code&&(t.Lists1=t.Lists1.concat(e),e.length>0?(t.loadType=e.length<10?"all":"more",t.lastProductId=e.pop().productId):t.loadType="all")}).catch(function(s){t.loading=!1,console.log(s.response.data)}))}}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"publishInfoPage"},[e("v-Header",{staticClass:"head"},[e("span",{attrs:{slot:"text"},slot:"text"},[t._v("我发布的"+t._s(t.title))])]),t._v(" "),e("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"listsScrollCon",attrs:{id:"listsScrollCon","infinite-scroll-disabled":"loading","infinite-scroll-distance":"10"}},[e("v-rendezvousList",{attrs:{Lists:t.Lists}}),t._v(" "),t.Lists1.length>0?e("div",{staticClass:"tips"},[e("span",[t._v("———    以下内容已下架    ———")])]):t._e(),t._v(" "),e("v-rendezvousList",{attrs:{Lists:t.Lists1}})],1),t._v(" "),e("div",{staticClass:"publishBtn",on:{click:t.publish}},[t._v("发布文章")])],1)])},staticRenderFns:[]};var d=e("VU/8")(l,c,!1,function(t){e("NoNr")},"data-v-1cb99e9a",null);s.default=d.exports}});
//# sourceMappingURL=27.51c4c66200a49ac510c3.js.map