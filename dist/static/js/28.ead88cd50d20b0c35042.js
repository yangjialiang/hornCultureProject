webpackJsonp([28],{GJpr:function(t,e){},n1Po:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("Gu7T"),i=s.n(o),n=s("Dd8w"),a=s.n(n),d=s("Au9i"),m=s("Cz8s"),l=s("wE2M"),c=s("mpiD"),r=s("NYxO"),u=s("owcu"),p={name:"",props:[],components:{"v-Header":m.a,"v-forumList":c.a,"v-commentpage":l.default,"v-loadmove":u.a},data:function(){return{tabList:[],select:0,lastDiscussId:0,scroll:"",forumLists:[],addCommentVisible:!1,sendCommentId:0,sendCommentatUserId:0,delCommentActions:[{name:"删除评论",method:this.delComment}],delCommentVisible:!1,delCommentInfo:{},needUpdate:1,isUpdate:!1,loadType:"more",loading:!0}},watch:{delCommentVisible:function(t,e){t||(this.delCommentInfo={})}},computed:a()({},Object(r.c)({_userid:function(t){return t.userInfo.userId}})),methods:{gotopath:function(){this.$router.push({path:"/post/part"})},gotopage:function(t){this.$router.push("/personalHomePage/forumPage/forumDetailsPage/"+t)},loadMore:function(){this.getDiscussList(this.select)},initPage:function(){this.lastDiscussId=0,this.getDiscussList(this.select)},getDiscussList:function(t){var e=this;"all"==this.loadType||this.loading||(this.loading=!0,this.$http.get(this.$port.MY_DISCUSS_PROT+"?lastDiscussId="+this.lastDiscussId,{}).then(function(s){if(e.loading=!1,e.select==t){var o=s.data;if(200==s.code){if(0==o.length)return void(e.loadType="all");(e.isUpdate||0==e.lastDiscussId)&&(e.isUpdate=!1,e.forumLists=[]),e.forumLists=[].concat(i()(e.forumLists),i()(o)),e.lastDiscussId=o.pop().discussId,console.log(e.forumLists)}}}).catch(function(t){e.loading=!1,console.log(t.response.data)}))},removePost:function(t){var e=this;event.stopPropagation(),Object(d.MessageBox)({title:"",message:"确定删除吗?",showCancelButton:!0,confirmButtonText:"删除"}).then(function(s){"confirm"===s&&(d.Indicator.open({text:"正在删除..."}),e.$http.post(e.$port.DISCUSS_DEL_PROT+"?discussId="+t,{}).then(function(t){t.data;200==t.code&&(d.Indicator.close(),e.isUpdate=!0,e.initPage())}).catch(function(t){console.log(t.response.data)}))})},sendComment:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;e==this._userid?(this.delCommentInfo.id=s,this.delCommentVisible=!0):(this.sendCommentId=t,this.sendCommentatUserId=e,this.addCommentVisible=!0)},Back:function(){this.addCommentVisible=!1},updateCommentList:function(){this.isUpdate=!0,this.loading=!1,this.loadType="more",this.initPage()},delComment:function(t){var e=this,s=this.$port.COMMENT_DEL+"?commentId="+this.delCommentInfo.id;this.$http.post(""+s,{}).then(function(t){t.data;200==t.code&&(e.$route.params.discussId||e.updateCommentList(),e.needUpdate++)}).catch(function(t){console.log(t.response.data)})}},created:function(){this.isUpdate=!0,this.loading=!1,this.loadType="more",this.initPage()}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade",mode:"in-out"}},[s("div",{staticClass:"forumPage"},[s("v-Header",{staticClass:"head"},[s("span",{attrs:{slot:"text"},slot:"text"},[t._v("我的发帖")])]),t._v(" "),s("hr"),t._v(" "),s("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],attrs:{id:"forumListScroll","infinite-scroll-disabled":"loading","infinite-scroll-distance":"10"}},[s("div",[s("v-forumList",{attrs:{forumLists:t.forumLists,gotopage:t.gotopage,removePost:t.removePost,sendComment:t.sendComment}}),t._v(" "),t.forumLists.length>0?s("v-loadmove",{attrs:{type:t.loadType}}):t._e(),t._v(" "),this.loading||0!=t.forumLists.length?t._e():s("div",{staticClass:"forumListTips"},[t._v("你还没有发送过帖子，请点击添加哦^_^")])],1)]),t._v(" "),s("div",{staticClass:"sendPostBtn",on:{click:t.gotopath}},[t._v("我要发帖")]),t._v(" "),s("router-view",{attrs:{sendComment:t.sendComment,needUpdate:t.needUpdate},on:{"update-comment-list":t.updateCommentList}}),t._v(" "),s("mt-popup",{staticClass:"addCommentpopup",attrs:{modal:!1,position:"right"},model:{value:t.addCommentVisible,callback:function(e){t.addCommentVisible=e},expression:"addCommentVisible"}},[s("v-commentpage",{attrs:{isforumPage:!0,articleId:t.sendCommentId,atUserId:t.sendCommentatUserId,comeBack:t.Back},on:{"update-comment-list":t.updateCommentList}})],1),t._v(" "),s("mt-actionsheet",{attrs:{actions:t.delCommentActions},model:{value:t.delCommentVisible,callback:function(e){t.delCommentVisible=e},expression:"delCommentVisible"}})],1)])},staticRenderFns:[]};var f=s("VU/8")(p,h,!1,function(t){s("GJpr")},"data-v-0f3d9186",null);e.default=f.exports}});
//# sourceMappingURL=28.ead88cd50d20b0c35042.js.map