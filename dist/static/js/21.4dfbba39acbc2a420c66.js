webpackJsonp([21],{"38y2":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("Gu7T"),i=s.n(o),n=s("Dd8w"),a=s.n(n),d=s("Au9i"),c=s("Cz8s"),l=s("wE2M"),m=s("mpiD"),r=s("NYxO"),u=s("owcu"),p={name:"",props:[],components:{"v-Header":c.a,"v-forumList":m.a,"v-commentpage":l.default,"v-loadmove":u.a},data:function(){return{tabList:[],select:"",lastDiscussId:0,scroll:"",forumLists:[],addCommentVisible:!1,sendCommentId:0,sendCommentatUserId:0,delCommentActions:[{name:"删除评论",method:this.delComment}],delCommentVisible:!1,delCommentInfo:{},needUpdate:1,isUpdate:!1,loadType:"more",loading:!0}},watch:{select:function(t,e){t!==e&&(this.isUpdate=!0,this.loading=!1,this.loadType="more",this.initPage())},delCommentVisible:function(t,e){t||(this.delCommentInfo={})}},computed:a()({},Object(r.d)({_userid:function(t){return t.userInfo.userId}})),methods:{gotopath:function(){this.$router.push({path:"/post/part"})},gotopage:function(t){this.$router.push("/forumPage/forumDetailsPage/"+t)},loadMore:function(){this.getDiscussList(this.select)},initPage:function(){this.lastDiscussId=0,this.getDiscussList(this.select)},changeType:function(t){this.select=t},getDiscussTag:function(){var t=this;this.$http.get(this.$port.DISCUSS_TAG_PROT,{}).then(function(e){var s=e.data;200==e.code&&(t.tabList=[{tagId:0,tagName:"全部"}].concat(i()(s)),t.select=t.tabList[0].tagId)}).catch(function(t){console.log(t.response.data)})},getDiscussList:function(t){var e=this;"all"==this.loadType||this.loading||(this.loading=!0,this.$http.get(this.$port.DISCUSS_LIST_PROT+"?tagId="+this.select+"&lastDiscussId="+this.lastDiscussId,{}).then(function(s){if(e.loading=!1,e.select==t){var o=s.data;200==s.code&&(e.isUpdate&&(e.isUpdate=!1,e.forumLists=[]),e.forumLists=[].concat(i()(e.forumLists),i()(o)),0==o.length?e.loadType="all":e.lastDiscussId=o.pop().discussId,console.log(e.forumLists))}}).catch(function(t){e.loading=!1,console.log(t.response.data)}))},removePost:function(t){var e=this;event.stopPropagation(),Object(d.MessageBox)({title:"",message:"确定删除吗?",showCancelButton:!0,confirmButtonText:"删除"}).then(function(s){"confirm"===s&&(d.Indicator.open({text:"正在删除..."}),e.$http.post(e.$port.DISCUSS_DEL_PROT+"?discussId="+t,{}).then(function(t){t.data;200==t.code&&(d.Indicator.close(),e.isUpdate=!0,e.initPage())}).catch(function(t){console.log(t.response.data)}))})},sendComment:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;e==this._userid?(this.delCommentInfo.id=s,this.delCommentVisible=!0):(this.sendCommentId=t,this.sendCommentatUserId=e,this.addCommentVisible=!0)},Back:function(){this.addCommentVisible=!1},updateCommentList:function(){this.loading=!1,this.loadType="more",this.isUpdate=!0,this.initPage()},delComment:function(t){var e=this,s=this.$port.COMMENT_DEL+"?commentId="+this.delCommentInfo.id;this.$http.post(""+s,{}).then(function(t){t.data;200==t.code&&(e.$route.params.discussId||e.updateCommentList(),e.needUpdate++)}).catch(function(t){console.log(t.response.data)})}},created:function(){this.getDiscussTag()}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade",mode:"in-out"}},[s("div",{staticClass:"forumPage"},[s("v-Header",{staticClass:"head"},[s("span",{attrs:{slot:"text"},slot:"text"},[t._v("社区")])]),t._v(" "),s("nav",{staticClass:"forumType"},[s("ul",[t._l(t.tabList,function(e,o){return[s("li",{key:o,class:{active:t.select===e.tagId},on:{click:function(s){t.changeType(e.tagId)}}},[t._v(t._s(e.tagName))])]})],2)]),t._v(" "),s("hr"),t._v(" "),s("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],attrs:{id:"forumListScroll","infinite-scroll-disabled":"loading","infinite-scroll-distance":"10"}},[s("div",[s("v-forumList",{attrs:{forumLists:t.forumLists,gotopage:t.gotopage,removePost:t.removePost,sendComment:t.sendComment}}),t._v(" "),t.forumLists.length>0?s("v-loadmove",{attrs:{type:t.loadType}}):t._e(),t._v(" "),this.loading||0!=t.forumLists.length?t._e():s("div",{staticClass:"forumListTips"},[t._v("该板块暂无相关信息，请点击添加哦^_^")])],1)]),t._v(" "),s("div",{staticClass:"sendPostBtn",on:{click:t.gotopath}},[t._v("我要发帖")]),t._v(" "),s("router-view",{attrs:{sendComment:t.sendComment,needUpdate:t.needUpdate},on:{"update-comment-list":t.updateCommentList}}),t._v(" "),s("mt-popup",{staticClass:"addCommentpopup",attrs:{modal:!1,position:"right"},model:{value:t.addCommentVisible,callback:function(e){t.addCommentVisible=e},expression:"addCommentVisible"}},[s("v-commentpage",{attrs:{isforumPage:!0,articleId:t.sendCommentId,atUserId:t.sendCommentatUserId,comeBack:t.Back},on:{"update-comment-list":t.updateCommentList}})],1),t._v(" "),s("mt-actionsheet",{attrs:{actions:t.delCommentActions},model:{value:t.delCommentVisible,callback:function(e){t.delCommentVisible=e},expression:"delCommentVisible"}})],1)])},staticRenderFns:[]};var f=s("VU/8")(p,h,!1,function(t){s("3lez")},"data-v-919b3ad0",null);e.default=f.exports},"3lez":function(t,e){}});
//# sourceMappingURL=21.4dfbba39acbc2a420c66.js.map