webpackJsonp([32],{"4or2":function(t,e){},AUQY:function(t,e){},MPzD:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("Dd8w"),a=n.n(o),c=n("aFK5"),i=n.n(c),r=n("//Fk"),u=n.n(r),l=n("7+uW"),s=n("Gu7T"),p=n.n(s),d=n("NYxO"),h={name:"App",data:function(){return{showImg:!1,datasrc:""}},methods:a()({},Object(d.b)(["GET_USER_INFO"]),{remove:function(){event.stopPropagation(),this.showImg=!1}}),created:function(){var t=this;this.$bus.$on("showImg",function(e){t.datasrc=[].concat(p()(e)),t.showImg=!0}),this.GET_USER_INFO(),console.log(this.$store.state.userInfo.userId)}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),t._v(" "),n("mt-popup",{staticClass:"showImg",attrs:{modal:!1,position:"right"},model:{value:t.showImg,callback:function(e){t.showImg=e},expression:"showImg"}},[n("mt-swipe",{staticClass:"homePageswipe",attrs:{auto:0,continuous:!1,"show-indicators":!1}},t._l(t.datasrc,function(e,o){return e?n("mt-swipe-item",{key:o},[n("div",{style:{backgroundImage:"url("+e+")"},on:{click:t.remove}})]):t._e()}))],1)],1)},staticRenderFns:[]};var f=n("VU/8")(h,m,!1,function(t){n("AUQY")},null,null).exports,_=n("/ocq"),I=[{path:"/write",component:function(t){return n.e(16).then(function(){var e=[n("ssrx")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"cover",component:function(t){return Promise.all([n.e(0),n.e(17)]).then(function(){var e=[n("kTWP")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"club",component:function(t){return Promise.all([n.e(0),n.e(11)]).then(function(){var e=[n("gVXP")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"edit",component:function(t){return n.e(3).then(function(){var e=[n("JGuM")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"preview",component:function(t){return Promise.all([n.e(0),n.e(9)]).then(function(){var e=[n("dqAI")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}],T=[{path:"/post",component:function(t){return n.e(29).then(function(){var e=[n("RUlc")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"part",component:function(t){return Promise.all([n.e(0),n.e(10)]).then(function(){var e=[n("EoXc")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"edit",component:function(t){return Promise.all([n.e(0),n.e(18)]).then(function(){var e=[n("oOw3")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"club",component:function(t){return n.e(15).then(function(){var e=[n("rI90")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}],g=[{path:"/detail",component:function(t){return Promise.all([n.e(0),n.e(8)]).then(function(){var e=[n("QJR9")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"club",component:function(t){return n.e(26).then(function(){var e=[n("Oe8h")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"coach",component:function(t){return n.e(24).then(function(){var e=[n("hKKY")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"expert",component:function(t){return n.e(20).then(function(){var e=[n("Vcld")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"/auth/club",component:function(t){return Promise.all([n.e(0),n.e(12)]).then(function(){var e=[n("vA/P")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/auth/coach",component:function(t){return Promise.all([n.e(0),n.e(13)]).then(function(){var e=[n("NuEX")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/auth/expert",component:function(t){return Promise.all([n.e(0),n.e(19)]).then(function(){var e=[n("4Ghn")];t.apply(null,e)}.bind(this)).catch(n.oe)}}],P=[{path:"/homePage",component:function(t){return Promise.all([n.e(0),n.e(1)]).then(function(){var e=[n("BWlC")];t.apply(null,e)}.bind(this)).catch(n.oe)}}],E=[{path:"/seeOcean",component:function(t){return Promise.all([n.e(0),n.e(14)]).then(function(){var e=[n("tfXS")];t.apply(null,e)}.bind(this)).catch(n.oe)}}],y=[{path:"/articleDetails/:contId",component:function(t){return Promise.all([n.e(0),n.e(5)]).then(function(){var e=[n("lu5A")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"/articleDetails/commentPage/:contId/:atUserId",component:function(t){return n.e(0).then(function(){var e=[n("wE2M")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"/productArticleDetailsPage/:contId",component:function(t){return Promise.all([n.e(0),n.e(6)]).then(function(){var e=[n("00w2")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"/productArticleDetailsPage/commentPage/:contId/:atUserId",component:function(t){return n.e(0).then(function(){var e=[n("wE2M")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}],v=[{path:"/rendezvousPage/:id",component:function(t){return Promise.all([n.e(0),n.e(28)]).then(function(){var e=[n("vgnQ")];t.apply(null,e)}.bind(this)).catch(n.oe)}}],S=[{path:"/forumPage",component:function(t){return Promise.all([n.e(0),n.e(23)]).then(function(){var e=[n("38y2")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"/forumPage/forumDetailsPage/:discussId",component:function(t){return Promise.all([n.e(0),n.e(2)]).then(function(){var e=[n("q/rC")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}],b=[{path:"/personalHomePage",component:function(t){return Promise.all([n.e(0),n.e(7)]).then(function(){var e=[n("3yAT")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"/personalHomePage/forumPage",component:function(t){return Promise.all([n.e(0),n.e(30)]).then(function(){var e=[n("n1Po")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"/personalHomePage/forumPage/forumDetailsPage/:discussId",component:function(t){return Promise.all([n.e(0),n.e(2)]).then(function(){var e=[n("q/rC")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"/personalHomePage/msg",component:function(t){return Promise.all([n.e(0),n.e(4)]).then(function(){var e=[n("r9ex")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/personalHomePage/collectionPage",component:function(t){return Promise.all([n.e(0),n.e(27)]).then(function(){var e=[n("ycFj")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/personalHomePage/myClub",component:function(t){return Promise.all([n.e(0),n.e(25)]).then(function(){var e=[n("fc0M")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/personalHomePage/publishInfo",component:function(t){return Promise.all([n.e(0),n.e(22)]).then(function(){var e=[n("y7mp")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/personalHomePage/draft",component:function(t){return Promise.all([n.e(0),n.e(21)]).then(function(){var e=[n("Y7qR")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}];l.default.use(_.a);var O,C,A=new _.a({routes:[{path:"/",name:"index",component:function(t){return Promise.all([n.e(0),n.e(1)]).then(function(){var e=[n("BWlC")];t.apply(null,e)}.bind(this)).catch(n.oe)}}].concat(p()(I),p()(T),p()(g),p()(P),p()(I),p()(E),p()(y),p()(v),p()(S),p()(b))}),w=n("mtWM"),D=n.n(w),R=n("mw3O"),U=n.n(R),M=n("bOdI"),L=n.n(M),G={set_wx_code:"SET_WX_CODE",set_token:"SET_TOKEN",set_config_data:"CONFIG_SET_DATA",set_detail:"SET_DETAIL",set_article_data:"WRITE_SET_ARTICLE_DATA",set_post_data:"WRITE_SET_POST_DATA",getUserInfo:"GET_USER_INFO"},N={state:{},getters:{},actions:{},mutations:L()({},G.set_config_data,function(t,e){var n=e.data;i()(n).forEach(function(e){t[e]=[],n[e]instanceof Array&&n[e].forEach(function(n){var o=n.split(" - ");t[e].push({value:parseInt(o[0]),label:o[1]})})})})},k=n("woOf"),x=n.n(k),H={state:{article:{productId:0,contType:1,cover:"",clubId:-1,title:"",desc:"",content:""},post:{content:"",preimg:[],tagId:0,clubId:0}},getters:{},actions:{},mutations:(O={},L()(O,G.set_article_data,function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{productId:productId,cover:cover,clubId:clubId,title:title,desc:desc,content:content};x()(t.article,e)}),L()(O,G.set_post_data,function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{content:content,preimg:preimg,tagId:tagId,clubId:clubId};x()(t.post,e)}),O)},Y="http://47.106.76.248:80",F={GET_WX_CONFIG:Y+"/mp/jsapi_sign",GET_TOKEN:Y+"/mp/oauth",GET_CONFIG:Y+"/api/config/enum/list",SEEOCEANTAGLIST_PROT:Y+"/api/cont/artcile/tag/list",SEEOCEANLIST_PROT:Y+"/api/cont/artcile/list",SEEOCEANARTICLE_PROT:Y+"/api/cont/artcile/get",ADDLIKE_PROT:Y+"/api/cont/like/add",UPLOAD_IMG:Y+"/api/upload/img",AUTH_CLUB:Y+"/api/user/my/club",ADD_PRODUCT:Y+"/api/cont/product/add",GET_USER_CLUB_LIST:Y+"/api/user/my/club",HOMEPAGE_PORT:Y+"/api/index",ARTICLELIST_PROT:Y+"/api/cont/product/list",ARTICLE_PROT:Y+"/api/cont/product/get",ARTICLE_DEL:Y+"/api/cont/product/del",DISCUSS_TAG_PROT:Y+"/api/cont/discuss/tag/list",DISCUSS_LIST_PROT:Y+"/api/cont/discuss/list",DISCUSS_DETAILS_PROT:Y+"/api/cont/discuss/get",DISCUSS_DEL_PROT:Y+"/api/cont/discuss/del",MY_PROT:Y+"/api/user/my",MY_DISCUSS_PROT:Y+"/api/user/my/cont/discuss",MY_CONT_DRAF:Y+"/api/user/my/cont/draf",MY_CONT_MSG:Y+"/api/user/my/msg",MY_CONT_LIKE:Y+"/api/user/my/cont/like",MY_CONT_PRODUCT:Y+"/api/user/my/cont/product",MY_CLUB:Y+"/api/user/my/club",MY_CLUB_JOIN:Y+"/api/user/my/club/join",COMMENT_LIST_PROT:Y+"/api/cont/comment/list",COMMENT_ADD_PROT:Y+"/api/cont/comment/add",COMMENT_ADD_REPLY:Y+"/api/cont/comment/reply/add",COMMENT_GET_REPLY:Y+"/api/cont/comment/reply/list",COMMENT_DEL:Y+"/api/cont/comment/del",COMMENT_DEL_REPLY:Y+"/api/cont/comment/reply/del",AUTH_COACH:Y+"/api/user/my/coach",AUTH_EXPERT:Y+"/api/user/my/expert",POST_DISCUSS:Y+"/api/cont/discuss/add",GET_CLUB_DETAIL:Y+"/api/user/home/club",GET_COACH_DETAIL:Y+"/api/user/home/coach",GET_EXPERT_DETAIL:Y+"/api/user/home/expert",GET_DISCUSS_LIST:Y+"/api/user/home/cont/discuss",GET_PRODUCT_LIST:Y+"/api/user/home/cont/product"},q={setUserInfo:function(t,e){x()(t,e)}},B={state:{auditUserType:"",headimg:"",nickname:"",userId:"",userType:""},getters:{},actions:L()({},G.getUserInfo,function(t){var e=t.commit;t.state;D.a.get(F.MY_PROT,{}).then(function(t){var n=t.data;200==t.code&&e("setUserInfo",n)}).catch(function(t){console.log(t.response.data)})}),mutations:q};l.default.use(d.a);var W={token:localStorage.getItem("token"),code:localStorage.getItem("wx_code"),detail:{title:"",id:0}},$=(C={},L()(C,G.set_wx_code,function(t,e){t.code=e,localStorage.setItem("wx_code",t.code)}),L()(C,G.set_token,function(t,e){t.token=e,localStorage.setItem("token",t.token)}),L()(C,G.set_detail,function(t,e){t.detail.title=e.title,t.detail.id=e.id}),C),X=new d.a.Store({state:W,getters:{},actions:{},mutations:$,modules:{config:N,userInfo:B,write:H}}),j=n("Au9i"),K=(n("MPzD"),n("d8/S"),n("muQq"),n("4or2"),n("VDWi")),Q=function(t){return new u.a(function(e,n){j.Indicator.open("图片压缩中"),new K.a(t,{quality:.8,maxWidth:750,convertSize:2e6,success:function(t){j.Indicator.close(),e(t)},error:function(t){j.MessageBox.alert("图片压缩失败"),n(t)}})})},z={compressorImage:Q,uploadImage:function(t){return new u.a(function(e,n){Q(t).then(function(t){j.Indicator.open("图片上传中");var o=new FormData;o.append("imgType",1),o.append("upload",t,t.name),D.a.post(F.UPLOAD_IMG,o).then(function(t){j.Indicator.close(),200===!t.code&&j.MessageBox.alert("图片上传失败"),e(t)}).catch(function(t){j.MessageBox.alert("图片上传失败"),n(t)})})})}};l.default.use(j.InfiniteScroll),l.default.component(j.Swipe.name,j.Swipe),l.default.component(j.SwipeItem.name,j.SwipeItem),l.default.component(j.Cell.name,j.Cell),l.default.component(j.Button.name,j.Button),l.default.component(j.Actionsheet.name,j.Actionsheet),l.default.component(j.Field.name,j.Field),l.default.component(j.Checklist.name,j.Checklist),l.default.component(j.Popup.name,j.Popup),l.default.component(j.DatetimePicker.name,j.DatetimePicker),l.default.component(j.Header.name,j.Header),l.default.config.productionTip=!1,l.default.prototype.$http=D.a,l.default.prototype.$bus=new l.default,l.default.prototype.$qs=U.a,l.default.prototype.$actionType=G,l.default.prototype.$port=F,l.default.prototype.$commons=z;var J=A.match(location.href).query,V=function(){X.commit(G.set_token,""),X.commit(G.set_wx_code,""),new u.a(function(t,e){D.a.get(F.GET_WX_CONFIG,{params:{url:decodeURIComponent(location.href)}}).then(function(n){200===n.code?(location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+n.data.appid+"&redirect_uri="+encodeURIComponent(location.href)+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect",t(n)):e(n)})})};if(Boolean(J.code))J.code&&X.commit(G.set_wx_code,J.code instanceof Array?J.code[0]:J.code),i()(J).forEach(function(t){"code"===t||"from"===t||"state"===t?delete J[t]:J[t]instanceof Array&&(J[t]=J[0])}),location.href=location.href.replace(/[&?#]code=(.)*STATE/g,"");else{D.a.defaults.crossDomain=!0,D.a.defaults.withCredentials=!0,D.a.interceptors.request.use(function(t){return t.params=a()({},t.params,{token:X.state.token}),t},function(t){return console.log(t),u.a.reject(t)}),D.a.interceptors.response.use(function(t){return 403===t.data.code&&V(),t.data},function(t){return console.log(t),u.a.reject(t)});var Z=window.sessionStorage.getItem("routersArr").split("-,-")||[];A.beforeEach(function(t,e,n){Z.length>=2&&Z[Z.length-2]==t.path?Z.pop():Z[Z.length-1]!=t.path&&Z.push(t.path),window.sessionStorage.setItem("routersArr",Z.join("-,-")),n()}),new u.a(function(t,e){X.state.token?t({}):X.state.code?D.a.get(F.GET_TOKEN,{params:{code:X.state.code,state:"state"}}).then(function(n){200===n.code?(X.commit(G.set_token,n.data),console.log(n.data),t(n)):e()}):e()}).then(function(t){D.a.get(F.GET_CONFIG,{params:{token:X.state.token}}).then(function(t){var e=t.code,n=t.data;t.msg;200===e&&X.commit(G.set_config_data,{data:n})}),new l.default({el:"#app",router:A,store:X,axios:D.a,components:{App:f},template:"<App/>"})}).catch(function(t){V()})}},"d8/S":function(t,e){},muQq:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1e04815bfbc5ba2e2990.js.map