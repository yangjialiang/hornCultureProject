webpackJsonp([5],{"0KNC":function(t,e){},"5UuF":function(t,e){},IZDz:function(t,e){},KsMP:function(t,e,s){"use strict";var i={name:"",props:["CommentList","entry","getReplyList"],components:{"v-loadmove":s("owcu").a},data:function(){return{}},computed:{},created:function(){},methods:{}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"commentlistsCon"},[s("div",{staticClass:"commentHeader"},[t._v("评论")]),t._v(" "),t._l(t.CommentList,function(e,i){return s("div",{key:e.id},[s("div",{staticClass:"commentlist"},[s("div",{staticClass:"headImg",style:{backgroundImage:"url("+e.headimg+")"}}),t._v(" "),s("div",{staticClass:"listCon"},[s("div",{on:{click:function(s){t.entry(e.commentId,e.userId,{type:"comment",id:e.commentId})}}},[s("div",{staticClass:"name",domProps:{textContent:t._s(e.nickname)}}),t._v(" "),s("div",{staticClass:"text",domProps:{textContent:t._s(e.comment)}})]),t._v(" "),e.replyNum?s("div",t._l(e.replyList,function(i){return s("div",{key:i.name,staticClass:"otherList",on:{click:function(s){t.entry(e.commentId,i.userId,{type:"reply",id:i.commentId})}}},[s("div",{staticClass:"name",domProps:{textContent:t._s("| "+i.nickname)}}),t._v(" "),s("div",{staticClass:"text",domProps:{textContent:t._s(i.comment)}})])})):t._e(),t._v(" "),e.replyNum>2?s("div",{attrs:{id:"replyTips"},on:{click:function(s){t.getReplyList(e)}}},[t._v("查看全部"+t._s(e.replyNum)+"条回复>")]):t._e()])]),t._v(" "),i!=t.CommentList.length-1?s("hr"):t._e()])}),t._v(" "),0==t.CommentList.length?s("div",{staticClass:"CommentTips",on:{click:function(e){t.entry()}}},[t._v("暂时没有评论,点击添加你的评论吧^_^")]):t._e()],2)},staticRenderFns:[]};var o=s("VU/8")(i,n,!1,function(t){s("IZDz")},"data-v-ea8e5bfe",null);e.a=o.exports},bEJH:function(t,e,s){"use strict";var i={name:"",components:{"v-loadmove":s("owcu").a},props:["entry","Lists"],data:function(){return{}},methods:{nickname:function(t){return!t.atUserId||t.atUserId&&t.atUserId==t.userId?"| "+t.nickname:t.nickname+" 回复 "+t.atNickname}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"moreCommentScroll"},[s("div",{staticClass:"scrollCon"},[s("div",{staticClass:"commentlist"},[s("div",{staticClass:"headImg",style:{backgroundImage:"url("+t.Lists.headimg+")"}}),t._v(" "),s("div",{staticClass:"listCon"},[s("div",{on:{click:function(e){t.entry(t.Lists.commentId,t.Lists.userId,{type:"comment",id:t.Lists.commentId})}}},[s("div",{staticClass:"name",domProps:{textContent:t._s(t.Lists.nickname)}}),t._v(" "),s("div",{staticClass:"text",domProps:{textContent:t._s(t.Lists.comment)}})])])]),t._v(" "),s("hr"),t._v(" "),t._l(t.Lists.replyList,function(e){return t.Lists.replyNum?s("div",{key:e.name,staticClass:"commentlist"},[s("div",{staticClass:"headImg",style:{backgroundImage:"url("+e.headimg+")"}}),t._v(" "),s("div",{staticClass:"listCon"},[s("div",[s("div",{staticClass:"otherList",on:{click:function(s){t.entry(t.Lists.commentId,e.userId,{type:"reply",id:e.commentId})}}},[s("div",{staticClass:"name",domProps:{textContent:t._s(t.nickname(e))}}),t._v(" "),s("div",{staticClass:"text",domProps:{textContent:t._s(e.comment)}})])])])]):t._e()}),t._v(" "),t.Lists.replyList&&0==t.Lists.replyList.length?s("v-loadmove",{attrs:{type:"more"}}):t._e()],2)])},staticRenderFns:[]};var o=s("VU/8")(i,n,!1,function(t){s("0KNC")},"data-v-a29462ae",null);e.a=o.exports},lu5A:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Gu7T"),n=s.n(i),o=s("Dd8w"),a=s.n(o),l=s("Cz8s"),m=s("NYxO"),c=s("KsMP"),d=s("wE2M"),r=s("bEJH"),p=s("owcu"),u=s("DJf5"),v={name:"",components:{"v-Header":l.a,"v-CommentList":c.a,"v-loadmove":p.a,"v-commentpage":d.default,"v-showReplyComment":r.a},props:{},data:function(){return{delCommentActions:[{name:"删除评论",method:this.delComment}],delCommentInfo:{},delCommentVisible:!1,addCommentVisible:!1,articleId:this.$route.params.contId,lastCommentId:0,article:{},sendCommentId:"",sendCommentatUserId:"",CommentList:[],atUserId:this.$route.params.atUserId,loadType:"more",loading:!1,popupVisible:!1,commentId:null,Lists:{}}},watch:{delCommentVisible:function(t,e){t||(this.delCommentInfo={})}},computed:a()({},Object(m.d)({_userid:function(t){return t.userInfo.userId}})),created:function(){this.getArticle(),this.getComment()},updated:function(){},methods:{comeBack:function(){this.addCommentVisible=!1},updateCommentList:function(){this.loading=!1,this.loadType="more",this.lastCommentId=0,this.getComment("ture"),document.getElementById("articleScrollCon").scrollTop=document.getElementsByClassName("commentlistsCon")[0].offsetTop},delComment:function(){var t=this;this.popupVisible=!1;var e="reply"==this.delCommentInfo.type?this.$port.COMMENT_DEL_REPLY+"?replyId="+this.delCommentInfo.id:this.$port.COMMENT_DEL+"?commentId="+this.delCommentInfo.id;this.$http.post(""+e,{}).then(function(e){e.data;200==e.code&&t.updateCommentList()}).catch(function(t){console.log(t.response.data)})},entry:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.articleId,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments[2];0!=e&&e==this._userid?(this.delCommentVisible=!0,this.delCommentInfo=s):(this.popupVisible=!1,this.addCommentVisible=!0,this.sendCommentId=t,this.sendCommentatUserId=e)},getReplyList:function(t){var e=this;this.Lists=a()({},t),this.Lists.replyList=[],this.popupVisible=!0,this.commentId=t.commentId,this.$http.get(this.$port.COMMENT_GET_REPLY,{params:{commentId:this.commentId,lastCommentReplyId:0}}).then(function(t){var s=t.data;200==t.code&&(e.Lists.replyList=s)}).catch(function(t){console.log(t.response.data)})},loadMore:function(){0!=this.lastCommentId&&this.getComment()},getComment:function(t){var e=this;"all"==this.loadType||this.loading||(this.loading=!0,this.$http.get(this.$port.COMMENT_LIST_PROT,{params:{contId:this.articleId,lastCommentId:this.lastCommentId}}).then(function(s){var i=s.data;e.loading=!1,200==s.code&&(t&&(e.CommentList=[]),e.CommentList=[].concat(n()(e.CommentList),n()(i)),i.length>0?(e.lastCommentId=i.pop().commentId,e.loadType="more"):e.loadType="all")}).catch(function(t){e.loading=!1,console.log(t.response.data)}))},addPraise:function(){var t=this;1==this.article.like&&this.$http.post(this.$port.ADDLIKE_PROT+"?contId="+this.articleId,{}).then(function(e){e.data;200==e.code&&(t.article.like=2,t.article.likeNum+=1)}).catch(function(t){console.log(t.response.data)})},getArticle:function(){var t=this;this.$http.get(this.$port.SEEOCEANARTICLE_PROT,{params:{articleId:this.articleId}}).then(function(e){var s=e.data;return console.log(s),200==e.code&&(t.article=a()({},t.article,s)),s}).then(function(t){u.a.updateShareData(t.title)}).catch(function(t){console.log(t.response.data)})}}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade",mode:"in-out"}},[s("div",{staticClass:"articleDetailsPage"},[s("v-Header",{staticClass:"head"},[s("span",{staticClass:"headText",attrs:{slot:"text"},domProps:{innerHTML:t._s(this.article.title)},slot:"text"})]),t._v(" "),s("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],attrs:{id:"articleScrollCon","infinite-scroll-disabled":"loading","infinite-scroll-distance":"10"}},[s("div",{staticStyle:{"min-height":"101%",background:"white"}},[this.article.title?s("div",{staticClass:"articleDetailsCon"},[s("div",{staticClass:"articleTitleCon",domProps:{innerHTML:t._s(this.article.title)}}),t._v(" "),s("div",{staticClass:"articleTagCon",domProps:{innerHTML:t._s(this.article.publisher+" "+this.article.publishDate)}}),t._v(" "),s("div",{staticClass:"articleTextCon"},[s("img",{attrs:{src:this.article.preimg}}),t._v(" "),s("div",{domProps:{innerHTML:t._s(this.article.cont)}})])]):t._e(),t._v(" "),this.article.title?s("div",{staticClass:"giveTheThumbsUp",on:{click:t.addPraise}},[s("div",{staticClass:"addPraiseBtn"}),t._v(t._s(this.article.likeNum)+"\n\t\t\t\t\t")]):t._e(),t._v(" "),this.article.title?t._e():s("v-loadmove",{attrs:{type:"more"}}),t._v(" "),s("hr"),t._v(" "),s("v-CommentList",{attrs:{CommentList:t.CommentList,entry:t.entry,getReplyList:t.getReplyList}}),t._v(" "),t.CommentList.length>0?s("v-loadmove",{attrs:{type:t.loadType}}):t._e()],1)]),t._v(" "),s("div",{staticClass:"commentInputCon"},[s("input",{attrs:{type:"text",placeholder:"快来说点什么吧！"}}),t._v(" "),s("div",{staticClass:"inputBtn",on:{click:function(e){t.entry(t.articleId,0)}}}),t._v(" "),s("div",{class:["addPraiseBtn",2==this.article.like?"active2":"active1"],on:{click:t.addPraise}})]),t._v(" "),s("mt-popup",{staticClass:"popup",attrs:{position:"bottom"},model:{value:t.popupVisible,callback:function(e){t.popupVisible=e},expression:"popupVisible"}},[s("v-showReplyComment",{attrs:{Lists:t.Lists,entry:t.entry}})],1),t._v(" "),s("mt-popup",{staticClass:"addCommentpopup",attrs:{modal:!1,position:"right"},model:{value:t.addCommentVisible,callback:function(e){t.addCommentVisible=e},expression:"addCommentVisible"}},[s("v-commentpage",{attrs:{articleId:t.sendCommentId,atUserId:t.sendCommentatUserId,comeBack:t.comeBack},on:{"update-comment-list":t.updateCommentList}})],1),t._v(" "),s("mt-actionsheet",{attrs:{actions:t.delCommentActions},model:{value:t.delCommentVisible,callback:function(e){t.delCommentVisible=e},expression:"delCommentVisible"}})],1)])},staticRenderFns:[]};var h=s("VU/8")(v,C,!1,function(t){s("mdfn"),s("5UuF")},"data-v-1114a6d7",null);e.default=h.exports},mdfn:function(t,e){}});
//# sourceMappingURL=5.9b4a63fd97461869304e.js.map