webpackJsonp([8],{"1WHW":function(t,e){},QJR9:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("Dd8w"),a=s.n(n),i=s("NYxO"),o=s("TrLn"),c=s("looZ"),l={name:"tab",props:{select:{type:Number,default:0},data:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{handSelect:function(t){this.$emit("update:select",t),this.$emit("change",t)}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"ui-tab"},[s("ul",[t._l(t.data,function(e,n){return[s("li",{class:{active:t.select===n},on:{click:function(e){t.handSelect(n)}}},[t._v(t._s(e))])]})],2)])},staticRenderFns:[]};var d=s("VU/8")(l,r,!1,function(t){s("sF0M")},"data-v-407ec95e",null).exports,u=s("wkrh"),m={name:"",props:{forumLists:{}},data:function(){return{}},computed:{},methods:{showImg:function(t){event.stopPropagation(),this.$bus.$emit("showImg",t)},gotopage:function(t){this.$router.push("/forumPage/forumDetailsPage/"+t)},addLike:function(t){event.stopPropagation(),1==t.like&&this.$http.post(this.$port.ADDLIKE_PROT+"?contId="+t.discussId,{}).then(function(e){e.data;200==e.code&&(t.likeNum++,t.like=2)}).catch(function(t){console.log(t.response.data)})}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"forumListCon"},[s("hr"),t._v(" "),t.forumLists.length>0?[t._l(t.forumLists,function(e){return s("div",{key:e.discussId,staticClass:"forumList",on:{click:function(s){t.gotopage(e.discussId)}}},[s("div",{staticClass:"userInfo"},[s("div",{staticClass:"headImg",style:{backgroundImage:"url("+e.headimg+")"}}),t._v(" "),s("div",{staticClass:"InfoCon"},[s("div",{staticClass:"name",domProps:{textContent:t._s(e.nickname)}}),t._v(" "),s("div",{staticClass:"describe"},[s("span",{staticClass:"time",domProps:{textContent:t._s(e.publishDate)}}),t._v("板块：\n            "),s("span",{staticClass:"type",domProps:{textContent:t._s(e.tagName)}})])])]),t._v(" "),s("div",{staticClass:"text",domProps:{textContent:t._s(e.cont)}}),t._v(" "),e.preimg?s("div",{staticClass:"imgCon"},[t._l(e.preimg.split("#"),function(n){return n?s("div",{key:n.id,style:{backgroundImage:"url("+n+")"},on:{click:function(s){t.showImg(e.preimg.split("#"))}}}):t._e()}),t._v(" "),3==e.preimg.split("#").length?s("div"):t._e()],2):t._e(),t._v(" "),s("div",{staticClass:"other"},[s("span",{staticClass:"commentBtn"}),t._v(" "),s("span",{class:["iconfont AddPraiseImg",2==e.like&&"active"],on:{click:function(s){t.addLike(e)}}}),t._v(t._s(e.likeNum)+"\n      ")]),t._v(" "),e.commentList.length>0?s("div",{staticClass:"commentCon"},t._l(e.commentList,function(e){return s("div",{key:e.commentId},[e.userId==e.atUserId||0==e.atUserId?s("p",[s("span",{staticClass:"name",domProps:{textContent:t._s(e.nickname)}}),t._v(":\n            "),s("span",{domProps:{textContent:t._s(e.comment)}})]):s("p",[s("span",{staticClass:"name",domProps:{textContent:t._s(e.nickname)}}),t._v("回复"),s("span",{staticClass:"name",domProps:{textContent:t._s(e.atNickname)}}),t._v(":\n            "),s("span",{domProps:{textContent:t._s(e.comment)}})])])})):[s("div",{staticClass:"commentTips"},[t._v("暂时还没有评论哦，点击添加评论吧^_^")])]],2)}),t._v(" "),s("hr")]:t._e()],2)},staticRenderFns:[]};var h=s("VU/8")(m,p,!1,function(t){s("1WHW")},"data-v-cb3f1c9e",null).exports,f={name:"coach",components:{FixedLayout:o.a,Topbar:c.a,Tab:d,RendezvousList:u.a,ForumList:h},data:function(){return{tab:{select:0,list:[{value:5,label:"课程"},{value:3,label:"行程"},{value:4,label:"装备"},{value:2,label:"帖子"}]},list:[],lastProductId:0,isNone:!1}},computed:a()({},Object(i.c)({title:function(t){return t.detail.title},userInfo:function(t){return t.userInfo}}),{minHeight:function(){return 0==this.list.length?"13.34rem":"0"},tabList:function(){var t=[];return this.tab.list.forEach(function(e){return t.push(e.label)}),t}}),created:function(){this.getList(3===this.tab.select&&1)},methods:{init:function(){},handChangeTab:function(t){this.list=[],this.lastProductId=0,this.isNone=!1,this.getList(3===this.tab.select&&1)},getList:function(t){var e=this;1===t?this.$http.get(this.$port.GET_DISCUSS_LIST,{params:{userId:this.userInfo.userId,lastDiscussId:this.lastProductId}}).then(function(t){200===t.code&&(t.data.length&&t.data[t.data.length-1].discussId!==e.lastProductId?(e.list=e.list.concat(t.data),e.lastProductId=t.data[t.data.length-1].discussId,e.isNone=!1):e.isNone=!0)}):this.$http.get(this.$port.GET_PRODUCT_LIST,{params:{userId:this.userInfo.userId,lastProductId:this.lastProductId}}).then(function(t){200===t.code&&(t.data.length&&t.data[t.data.length-1].productId!==e.lastProductId?(e.list=e.list.concat(t.data),e.lastProductId=t.data[t.data.length-1].productId,e.isNone=!1):e.isNone=!0)})},loadMore:function(){this.getList(3===this.tab.select&&1)}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("fixed-layout",[s("template",{slot:"header"},[s("topbar",[s("template",{slot:"before"},[s("b",{staticClass:"iconfont icon-back",on:{click:function(e){t.$router.go(-1)}}})]),t._v("\n      "+t._s(t.title)+"详情\n    ")],2)],1),t._v(" "),s("section",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"m-scroll",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"10"}},[s("router-view"),t._v(" "),s("section",{staticClass:"detail"},[s("tab",{attrs:{select:t.tab.select,data:t.tabList},on:{"update:select":function(e){t.$set(t.tab,"select",e)},change:t.handChangeTab}}),t._v(" "),s("section",{staticClass:"tc1",style:{"min-height":t.minHeight}},[t.list.length?[0===t.tab.select||1===t.tab.select||2===t.tab.select?[s("rendezvous-list",{attrs:{Lists:t.list}}),t._v(" "),t.isNone?[s("p",{staticStyle:{"text-align":"center",padding:"10px"}},[t._v("没有更多了")])]:t._e()]:3===t.tab.select?[s("forum-list",{attrs:{forumLists:t.list}})]:t._e()]:[s("p",{staticStyle:{"text-align":"center",padding:"10px"}},[t._v("暂无内容")])]],2)],1)],1)],2)},staticRenderFns:[]};var _=s("VU/8")(f,v,!1,function(t){s("vKGz")},"data-v-763f7a66",null);e.default=_.exports},sF0M:function(t,e){},vKGz:function(t,e){}});
//# sourceMappingURL=8.d452addd61f0d8765331.js.map