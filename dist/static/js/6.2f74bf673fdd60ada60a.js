webpackJsonp([6],{"00w2":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Gu7T"),n=i.n(s),o=i("Dd8w"),a=i.n(o),c=i("NYxO"),l=i("Cz8s"),r=i("KsMP"),m={name:"",components:{"v-Header":l.a},props:["comeBack","reclaimId"],data:function(){return{reclaimText:"",popupVisible:!1}},watch:{},computed:{},created:function(){},methods:{reclaim:function(){var t=this;0!=this.reclaimText.length&&this.$http.post(this.$port.ARTICLE_DEL+"?productId="+this.reclaimId+"&reason="+this.reclaimText,{}).then(function(e){e.data;200==e.code?(t.comeBack(),t.reclaimText=""):(t.popupVisible=!0,setTimeout(function(){t.popupVisible=!1},1500))}).catch(function(e){console.log(e.response.data),t.popupVisible=!0,setTimeout(function(){t.popupVisible=!1},1500)})}}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade",mode:"in-out"}},[i("section",{staticClass:"reclaimCon"},[i("v-Header",{attrs:{comeBack:t.comeBack}},[i("span",{attrs:{slot:"text"},slot:"text"},[t._v("下架申请")])]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.reclaimText,expression:"reclaimText"}],staticClass:"reclaimText",attrs:{placeholder:"说点什么好呢..."},domProps:{value:t.reclaimText},on:{input:function(e){e.target.composing||(t.reclaimText=e.target.value)}}}),t._v(" "),i("div",{staticClass:"submitBtn",on:{click:t.reclaim}},[t._v("提交")]),t._v(" "),i("mt-popup",{staticClass:"popup",attrs:{"popup-transition":"popup-fade",position:"top"},model:{value:t.popupVisible,callback:function(e){t.popupVisible=e},expression:"popupVisible"}},[t._v("提交失败")])],1)])},staticRenderFns:[]};var p=i("VU/8")(m,d,!1,function(t){i("Hqrd")},"data-v-705d049d",null).exports,u=i("wE2M"),h=i("bEJH"),v=i("owcu"),C=i("xiPE"),f={name:"",components:{"v-Header":l.a,"v-CommentList":r.a,"v-reclaimPage":p,"v-loadmove":v.a,"v-commentpage":u.default,"v-showReplyComment":h.a},props:{},data:function(){return{delCommentActions:[{name:"删除评论",method:this.delComment}],delCommentInfo:{},delCommentVisible:!1,addCommentVisible:!1,reclaimsheetVisible:!1,articleId:this.$route.params.contId,article:{},CommentList:[],sendCommentId:"",sendCommentatUserId:"",lastCommentId:0,atUserId:this.$route.params.atUserId,userId:"",userType:"",headimg:"",nickname:"",reclaimId:null,showreclaimPage:!1,loadType:"more",loading:!1,popupVisible:!1,commentId:null,Lists:{},contType:"",replyTop:0}},watch:{delCommentVisible:function(t,e){t||(this.delCommentInfo={})}},computed:a()({},Object(c.d)({_userid:function(t){return t.userInfo.userId}}),{showmore:function(){return this._userid&&this._userid==this.userId},actions:function(){return 2==this.article.contStatus?[{name:"编辑",method:this.updatePage},{name:"下架",method:this.reclaim}]:3==this.article.contStatus?[{name:"编辑",method:this.updatePage}]:void 0}}),created:function(){this.getArticle(),this.getComment()},updated:function(){var t=document.getElementsByClassName("commentlistsCon")[0].offsetTop;this.$store.state.userInfo.Reply&&this.replyTop!=t&&(this.replyTop=t,setTimeout(function(){document.getElementById("articleScrollCon").scrollTop=t},10))},beforeDestroy:function(){this.setReply({Reply:null})},methods:a()({},Object(c.c)(["setReply"]),{gotopath:function(t,e){2==e?this.$router.push({path:"/detail/expert",query:{expertId:t}}):3==e?this.$router.push({path:"/detail/coach",query:{coachId:t}}):4==e&&this.$router.push({path:"/detail/club",query:{clubId:t}})},Back:function(){this.addCommentVisible=!1},delComment:function(){var t=this;this.popupVisible=!1;var e="reply"==this.delCommentInfo.type?this.$port.COMMENT_DEL_REPLY+"?replyId="+this.delCommentInfo.id:this.$port.COMMENT_DEL+"?commentId="+this.delCommentInfo.id;this.$http.post(""+e,{}).then(function(e){e.data;200==e.code&&t.updateCommentList()}).catch(function(t){console.log(t.response.data)})},updateCommentList:function(){this.loading=!1,this.loadType="more",this.lastCommentId=0,this.getComment("ture"),document.getElementById("articleScrollCon").scrollTop=document.getElementsByClassName("commentlistsCon")[0].offsetTop},entry:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.articleId,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments[2];0!=e&&e==this._userid?(this.delCommentVisible=!0,this.delCommentInfo=i):(this.popupVisible=!1,this.addCommentVisible=!0,this.sendCommentId=t,this.sendCommentatUserId=e)},getReplyList:function(t){var e=this;this.Lists=a()({},t),this.Lists.replyList=[],this.popupVisible=!0,this.commentId=t.commentId,this.$http.get(this.$port.COMMENT_GET_REPLY,{params:{commentId:this.commentId,lastCommentReplyId:0}}).then(function(t){var i=t.data;200==t.code&&(e.Lists.replyList=i)}).catch(function(t){console.log(t.response.data)})},loadMore:function(){0!=this.lastCommentId&&this.getComment()},getComment:function(t){var e=this;"all"==this.loadType||this.loading||(this.loading=!0,this.$http.get(this.$port.COMMENT_LIST_PROT,{params:{contId:this.articleId,lastCommentId:this.lastCommentId}}).then(function(i){var s=i.data;e.loading=!1,200==i.code&&(t&&(e.CommentList=[]),e.CommentList=[].concat(n()(e.CommentList),n()(s)),s.length>0?(e.lastCommentId=s.pop().commentId,e.loadType="more"):e.loadType="all")}).catch(function(t){e.loading=!1,console.log(t.response.data)}))},showMenu:function(){this.reclaimsheetVisible=!0},addPraise:function(){var t=this;1==this.article.like&&this.$http.post(this.$port.ADDLIKE_PROT+"?contId="+this.articleId,{}).then(function(e){e.data;200==e.code&&(t.article.like=2,t.article.likeNum+=1)}).catch(function(t){console.log(t.response.data)})},updatePage:function(){this.$router.push({path:"/write/cover",query:{productId:this.articleId,contType:this.contType}})},comeBack:function(){this.showreclaimPage=!1,this.reclaimId=null},reclaim:function(){console.log("下架"),this.showreclaimPage=!0,this.reclaimId=this.articleId},getArticle:function(){var t=this;this.$http.get(this.$port.ARTICLE_PROT,{params:{productId:this.articleId}}).then(function(e){var i=e.data;200==e.code&&(t.userId=i.userId,t.userType=i.userType,t.headimg=i.headimg,t.nickname=i.nickname,t.contType=i.contType,t.article=a()({},t.article,i),C.a.updateShareData(i.title,i.desc,location.href,i.preimg))}).catch(function(t){console.log(t.response.data)})}})},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade",mode:"in-out"}},[i("div",{staticClass:"articleDetailsPage"},[i("v-Header",{staticClass:"head"},[i("span",{staticClass:"headText",attrs:{slot:"text"},domProps:{innerHTML:t._s(this.article.title)},slot:"text"}),t._v(" "),t.showmore?i("mt-button",{staticClass:"more",attrs:{slot:"right",icon:"more"},on:{click:t.showMenu},slot:"right"}):t._e()],1),t._v(" "),i("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],attrs:{id:"articleScrollCon","infinite-scroll-disabled":"loading","infinite-scroll-distance":"10"}},[i("div",{staticStyle:{"min-height":"101%",background:"white"}},[this.article.title?i("div",{staticClass:"articleDetailsCon"},[i("div",{staticClass:"articleTextCon"},[this.article.preimg?i("img",{attrs:{src:this.article.preimg}}):t._e(),t._v(" "),i("div",{staticClass:"articleTitleCon",domProps:{innerHTML:t._s(this.article.title)}}),t._v(" "),i("div",{staticClass:"userInfoCon",on:{click:function(e){t.gotopath(t.userId,t.userType)}}},[i("div",{staticClass:"headimg"},[i("img",{attrs:{src:this.headimg,width:"100%"}})]),t._v("  \n                  "+t._s(this.nickname)+"              \n              ")]),t._v(" "),i("div",{domProps:{innerHTML:t._s(this.article.cont)}})])]):t._e(),t._v(" "),this.article.title?i("div",{staticClass:"giveTheThumbsUp",on:{click:t.addPraise}},[i("div",{staticClass:"addPraiseBtn"}),t._v(t._s(this.article.likeNum)+"\n\t\t\t\t\t")]):t._e(),t._v(" "),this.article.title?t._e():i("v-loadmove",{attrs:{type:"more"}}),t._v(" "),i("hr"),t._v(" "),i("v-CommentList",{attrs:{CommentList:t.CommentList,entry:t.entry,getReplyList:t.getReplyList}}),t._v(" "),t.CommentList.length>0?i("v-loadmove",{attrs:{type:t.loadType}}):t._e()],1)]),t._v(" "),i("div",{staticClass:"commentInputCon"},[i("input",{attrs:{type:"text",placeholder:"快来说点什么吧！"}}),t._v(" "),i("div",{staticClass:"inputBtn",on:{click:function(e){t.entry(t.articleId,0)}}}),t._v(" "),i("div",{class:["addPraiseBtn",2==this.article.like?"active2":"active1"],on:{click:t.addPraise}})]),t._v(" "),i("mt-actionsheet",{attrs:{actions:t.actions},model:{value:t.reclaimsheetVisible,callback:function(e){t.reclaimsheetVisible=e},expression:"reclaimsheetVisible"}}),t._v(" "),i("mt-popup",{staticClass:"popup",attrs:{position:"bottom"},model:{value:t.popupVisible,callback:function(e){t.popupVisible=e},expression:"popupVisible"}},[i("v-showReplyComment",{attrs:{Lists:t.Lists,entry:t.entry}})],1),t._v(" "),i("mt-popup",{staticClass:"reclaimPage",attrs:{modal:!1,position:"right"},model:{value:t.showreclaimPage,callback:function(e){t.showreclaimPage=e},expression:"showreclaimPage"}},[i("v-reclaimPage",{attrs:{comeBack:t.comeBack,reclaimId:t.reclaimId}})],1),t._v(" "),i("mt-popup",{staticClass:"addCommentpopup",attrs:{modal:!1,position:"right"},model:{value:t.addCommentVisible,callback:function(e){t.addCommentVisible=e},expression:"addCommentVisible"}},[i("v-commentpage",{attrs:{articleId:t.sendCommentId,atUserId:t.sendCommentatUserId,comeBack:t.Back},on:{"update-comment-list":t.updateCommentList}})],1),t._v(" "),i("mt-actionsheet",{attrs:{actions:t.delCommentActions},model:{value:t.delCommentVisible,callback:function(e){t.delCommentVisible=e},expression:"delCommentVisible"}}),t._v(" "),i("router-view")],1)])},staticRenderFns:[]};var I=i("VU/8")(f,_,!1,function(t){i("r31k")},"data-v-ea5da682",null);e.default=I.exports},"0KNC":function(t,e){},Hqrd:function(t,e){},IZDz:function(t,e){},KsMP:function(t,e,i){"use strict";var s={name:"",props:["CommentList","entry","getReplyList"],components:{"v-loadmove":i("owcu").a},data:function(){return{}},computed:{},created:function(){},methods:{}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"commentlistsCon"},[i("div",{staticClass:"commentHeader"},[t._v("评论")]),t._v(" "),t._l(t.CommentList,function(e,s){return i("div",{key:e.id},[i("div",{staticClass:"commentlist"},[i("div",{staticClass:"headImg",style:{backgroundImage:"url("+e.headimg+")"}}),t._v(" "),i("div",{staticClass:"listCon"},[i("div",{on:{click:function(i){t.entry(e.commentId,e.userId,{type:"comment",id:e.commentId})}}},[i("div",{staticClass:"name",domProps:{textContent:t._s(e.nickname)}}),t._v(" "),i("div",{staticClass:"text",domProps:{textContent:t._s(e.comment)}})]),t._v(" "),e.replyNum?i("div",t._l(e.replyList,function(s){return i("div",{key:s.name,staticClass:"otherList",on:{click:function(i){t.entry(e.commentId,s.userId,{type:"reply",id:s.commentId})}}},[i("div",{staticClass:"name",domProps:{textContent:t._s("| "+s.nickname)}}),t._v(" "),i("div",{staticClass:"text",domProps:{textContent:t._s(s.comment)}})])})):t._e(),t._v(" "),e.replyNum>2?i("div",{attrs:{id:"replyTips"},on:{click:function(i){t.getReplyList(e)}}},[t._v("查看全部"+t._s(e.replyNum)+"条回复>")]):t._e()])]),t._v(" "),s!=t.CommentList.length-1?i("hr"):t._e()])}),t._v(" "),0==t.CommentList.length?i("div",{staticClass:"CommentTips",on:{click:function(e){t.entry()}}},[t._v("暂时没有评论,点击添加你的评论吧^_^")]):t._e()],2)},staticRenderFns:[]};var o=i("VU/8")(s,n,!1,function(t){i("IZDz")},"data-v-ea8e5bfe",null);e.a=o.exports},bEJH:function(t,e,i){"use strict";var s={name:"",components:{"v-loadmove":i("owcu").a},props:["entry","Lists"],data:function(){return{}},methods:{nickname:function(t){return!t.atUserId||t.atUserId&&t.atUserId==t.userId?"| "+t.nickname:t.nickname+" 回复 "+t.atNickname}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"moreCommentScroll"},[i("div",{staticClass:"scrollCon"},[i("div",{staticClass:"commentlist"},[i("div",{staticClass:"headImg",style:{backgroundImage:"url("+t.Lists.headimg+")"}}),t._v(" "),i("div",{staticClass:"listCon"},[i("div",{on:{click:function(e){t.entry(t.Lists.commentId,t.Lists.userId,{type:"comment",id:t.Lists.commentId})}}},[i("div",{staticClass:"name",domProps:{textContent:t._s(t.Lists.nickname)}}),t._v(" "),i("div",{staticClass:"text",domProps:{textContent:t._s(t.Lists.comment)}})])])]),t._v(" "),i("hr"),t._v(" "),t._l(t.Lists.replyList,function(e){return t.Lists.replyNum?i("div",{key:e.name,staticClass:"commentlist"},[i("div",{staticClass:"headImg",style:{backgroundImage:"url("+e.headimg+")"}}),t._v(" "),i("div",{staticClass:"listCon"},[i("div",[i("div",{staticClass:"otherList",on:{click:function(i){t.entry(t.Lists.commentId,e.userId,{type:"reply",id:e.commentId})}}},[i("div",{staticClass:"name",domProps:{textContent:t._s(t.nickname(e))}}),t._v(" "),i("div",{staticClass:"text",domProps:{textContent:t._s(e.comment)}})])])])]):t._e()}),t._v(" "),t.Lists.replyList&&0==t.Lists.replyList.length?i("v-loadmove",{attrs:{type:"more"}}):t._e()],2)])},staticRenderFns:[]};var o=i("VU/8")(s,n,!1,function(t){i("0KNC")},"data-v-a29462ae",null);e.a=o.exports},r31k:function(t,e){}});
//# sourceMappingURL=6.2f74bf673fdd60ada60a.js.map