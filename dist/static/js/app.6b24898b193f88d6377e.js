webpackJsonp([32],{"4or2":function(t,e){},MPzD:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("Dd8w"),a=n.n(o),c=n("aFK5"),i=n.n(c),r=n("//Fk"),l=n.n(r),u=n("7+uW"),p=n("NYxO"),s={name:"App",data:function(){return{showImg:!1,datasrc:""}},methods:a()({},Object(p.b)(["GET_USER_INFO"]),{remove:function(){this.showImg=!1}}),created:function(){var t=this;this.$bus.$on("showImg",function(e){t.datasrc=e,t.showImg=!0}),this.GET_USER_INFO(),console.log(this.$store.state.userInfo.userId)}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),t._v(" "),n("mt-popup",{staticClass:"showImg",attrs:{modal:!1,position:"right"},model:{value:t.showImg,callback:function(e){t.showImg=e},expression:"showImg"}},[n("div",{style:{backgroundImage:"url("+t.datasrc+")"},on:{click:t.remove}})])],1)},staticRenderFns:[]};var h=n("VU/8")(s,d,!1,function(t){n("gf2s")},null,null).exports,m=n("Gu7T"),f=n.n(m),_=n("/ocq"),T=[{path:"/write",component:function(t){return n.e(15).then(function(){var e=[n("ssrx")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"cover",component:function(t){return Promise.all([n.e(0),n.e(16)]).then(function(){var e=[n("kTWP")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"club",component:function(t){return Promise.all([n.e(0),n.e(18)]).then(function(){var e=[n("gVXP")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"edit",component:function(t){return n.e(3).then(function(){var e=[n("JGuM")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"preview",component:function(t){return Promise.all([n.e(0),n.e(8)]).then(function(){var e=[n("dqAI")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}],I=[{path:"/post",component:function(t){return n.e(22).then(function(){var e=[n("RUlc")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"part",component:function(t){return Promise.all([n.e(0),n.e(10)]).then(function(){var e=[n("EoXc")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"edit",component:function(t){return Promise.all([n.e(0),n.e(17)]).then(function(){var e=[n("oOw3")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"club",component:function(t){return Promise.all([n.e(0),n.e(11)]).then(function(){var e=[n("rI90")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}],g=[{path:"/detail",component:function(t){return Promise.all([n.e(0),n.e(9)]).then(function(){var e=[n("QJR9")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"club",component:function(t){return n.e(26).then(function(){var e=[n("Oe8h")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"coach",component:function(t){return n.e(23).then(function(){var e=[n("hKKY")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"expert",component:function(t){return n.e(24).then(function(){var e=[n("Vcld")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"/auth/club",component:function(t){return Promise.all([n.e(0),n.e(12)]).then(function(){var e=[n("vA/P")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/auth/coach",component:function(t){return Promise.all([n.e(0),n.e(13)]).then(function(){var e=[n("NuEX")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/auth/expert",component:function(t){return Promise.all([n.e(0),n.e(19)]).then(function(){var e=[n("4Ghn")];t.apply(null,e)}.bind(this)).catch(n.oe)}}],P=[{path:"/homePage",component:function(t){return Promise.all([n.e(0),n.e(1)]).then(function(){var e=[n("BWlC")];t.apply(null,e)}.bind(this)).catch(n.oe)}}],E=[{path:"/seeOcean",component:function(t){return Promise.all([n.e(0),n.e(14)]).then(function(){var e=[n("tfXS")];t.apply(null,e)}.bind(this)).catch(n.oe)}}],y=[{path:"/articleDetails/:contId",component:function(t){return Promise.all([n.e(0),n.e(5)]).then(function(){var e=[n("lu5A")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"/articleDetails/commentPage/:contId/:atUserId",component:function(t){return n.e(0).then(function(){var e=[n("wE2M")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"/productArticleDetailsPage/:contId",component:function(t){return Promise.all([n.e(0),n.e(6)]).then(function(){var e=[n("00w2")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"/productArticleDetailsPage/commentPage/:contId/:atUserId",component:function(t){return n.e(0).then(function(){var e=[n("wE2M")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}],v=[{path:"/rendezvousPage/:id",component:function(t){return Promise.all([n.e(0),n.e(28)]).then(function(){var e=[n("vgnQ")];t.apply(null,e)}.bind(this)).catch(n.oe)}}],b=[{path:"/forumPage",component:function(t){return Promise.all([n.e(0),n.e(21)]).then(function(){var e=[n("38y2")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"/forumPage/forumDetailsPage/:discussId",component:function(t){return Promise.all([n.e(0),n.e(2)]).then(function(){var e=[n("q/rC")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}],S=[{path:"/personalHomePage",component:function(t){return Promise.all([n.e(0),n.e(7)]).then(function(){var e=[n("3yAT")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"/personalHomePage/forumPage",component:function(t){return Promise.all([n.e(0),n.e(30)]).then(function(){var e=[n("n1Po")];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"/personalHomePage/forumPage/forumDetailsPage/:discussId",component:function(t){return Promise.all([n.e(0),n.e(2)]).then(function(){var e=[n("q/rC")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"/personalHomePage/msg",component:function(t){return Promise.all([n.e(0),n.e(4)]).then(function(){var e=[n("r9ex")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/personalHomePage/collectionPage",component:function(t){return Promise.all([n.e(0),n.e(27)]).then(function(){var e=[n("ycFj")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/personalHomePage/myClub",component:function(t){return Promise.all([n.e(0),n.e(25)]).then(function(){var e=[n("fc0M")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/personalHomePage/publishInfo",component:function(t){return Promise.all([n.e(0),n.e(29)]).then(function(){var e=[n("y7mp")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/personalHomePage/draft",component:function(t){return Promise.all([n.e(0),n.e(20)]).then(function(){var e=[n("Y7qR")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}];u.default.use(_.a);var O,C,A=new _.a({routes:[{path:"/",name:"index",component:function(t){return Promise.all([n.e(0),n.e(1)]).then(function(){var e=[n("BWlC")];t.apply(null,e)}.bind(this)).catch(n.oe)}}].concat(f()(T),f()(I),f()(g),f()(P),f()(T),f()(E),f()(y),f()(v),f()(b),f()(S))}),D=n("mtWM"),w=n.n(D),R=n("mw3O"),L=n.n(R),U=n("bOdI"),M=n.n(U),G={set_wx_code:"SET_WX_CODE",set_token:"SET_TOKEN",set_config_data:"CONFIG_SET_DATA",set_detail_title:"SET_DETAIL_TITLE",set_article_data:"WRITE_SET_ARTICLE_DATA",set_post_data:"WRITE_SET_POST_DATA",getUserInfo:"GET_USER_INFO"},N={state:{},getters:{},actions:{},mutations:M()({},G.set_config_data,function(t,e){var n=e.data;i()(n).forEach(function(e){t[e]=[],n[e]instanceof Array&&n[e].forEach(function(n){var o=n.split(" - ");t[e].push({value:parseInt(o[0]),label:o[1]})})})})},k=n("woOf"),x=n.n(k),H={state:{article:{productId:0,contType:1,cover:"",clubId:-1,title:"",desc:"",content:""},post:{content:"",preimg:[],tagId:0,clubId:0}},getters:{},actions:{},mutations:(O={},M()(O,G.set_article_data,function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{productId:productId,cover:cover,clubId:clubId,title:title,desc:desc,content:content};x()(t.article,e)}),M()(O,G.set_post_data,function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{content:content,preimg:preimg,tagId:tagId,clubId:clubId};x()(t.post,e)}),O)},F="http://47.106.76.248:80",Y={GET_WX_CONFIG:F+"/mp/jsapi_sign",GET_TOKEN:F+"/mp/oauth",GET_CONFIG:F+"/api/config/enum/list",SEEOCEANTAGLIST_PROT:F+"/api/cont/artcile/tag/list",SEEOCEANLIST_PROT:F+"/api/cont/artcile/list",SEEOCEANARTICLE_PROT:F+"/api/cont/artcile/get",ADDLIKE_PROT:F+"/api/cont/like/add",UPLOAD_IMG:F+"/api/upload/img",AUTH_CLUB:F+"/api/user/my/club",ADD_PRODUCT:F+"/api/cont/product/add",GET_USER_CLUB_LIST:F+"/api/user/my/club",HOMEPAGE_PORT:F+"/api/index",ARTICLELIST_PROT:F+"/api/cont/product/list",ARTICLE_PROT:F+"/api/cont/product/get",ARTICLE_DEL:F+"/api/cont/product/del",DISCUSS_TAG_PROT:F+"/api/cont/discuss/tag/list",DISCUSS_LIST_PROT:F+"/api/cont/discuss/list",DISCUSS_DETAILS_PROT:F+"/api/cont/discuss/get",DISCUSS_DEL_PROT:F+"/api/cont/discuss/del",MY_PROT:F+"/api/user/my",MY_DISCUSS_PROT:F+"/api/user/my/cont/discuss",MY_CONT_DRAF:F+"/api/user/my/cont/draf",MY_CONT_MSG:F+"/api/user/my/msg",MY_CONT_LIKE:F+"/api/user/my/cont/like",MY_CONT_PRODUCT:F+"/api/user/my/cont/product",MY_CLUB:F+"/api/user/my/club",MY_CLUB_JOIN:F+"/api/user/my/club/join",COMMENT_LIST_PROT:F+"/api/cont/comment/list",COMMENT_ADD_PROT:F+"/api/cont/comment/add",COMMENT_ADD_REPLY:F+"/api/cont/comment/reply/add",COMMENT_GET_REPLY:F+"/api/cont/comment/reply/list",COMMENT_DEL:F+"/api/cont/comment/del",COMMENT_DEL_REPLY:F+"/api/cont/comment/reply/del",AUTH_COACH:F+"/api/user/my/coach",AUTH_EXPERT:F+"/api/user/my/expert",POST_DISCUSS:F+"/api/cont/discuss/add",GET_CLUB_DETAIL:F+"/api/user/home/club",GET_COACH_DETAIL:F+"/api/user/home/coach",GET_EXPERT_DETAIL:F+"/api/user/home/expert",GET_DISCUSS_LIST:F+"/api/user/home/cont/discuss",GET_PRODUCT_LIST:F+"/api/user/home/cont/product"},q={setUserInfo:function(t,e){x()(t,e)}},W={state:{auditUserType:"",headimg:"",nickname:"",userId:"",userType:""},getters:{},actions:M()({},G.getUserInfo,function(t){var e=t.commit;t.state;w.a.get(Y.MY_PROT,{}).then(function(t){var n=t.data;200==t.code&&e("setUserInfo",n)}).catch(function(t){console.log(t.response.data)})}),mutations:q};u.default.use(p.a);var B={token:localStorage.getItem("token"),code:localStorage.getItem("wx_code"),detail:{title:""}},$=(C={},M()(C,G.set_wx_code,function(t,e){t.code=e,localStorage.setItem("wx_code",t.code)}),M()(C,G.set_token,function(t,e){t.token=e,localStorage.setItem("token",t.token)}),M()(C,G.set_detail_title,function(t,e){t.detail.title=e.title}),C),X=new p.a.Store({state:B,getters:{},actions:{},mutations:$,modules:{config:N,userInfo:W,write:H}}),K=n("Au9i"),j=(n("MPzD"),n("d8/S"),n("muQq"),n("4or2"),n("VDWi")),z=function(t){return new l.a(function(e,n){new j.a(t,{quality:.8,maxWidth:750,convertSize:2e6,success:function(t){e(t)},error:function(t){console.log("图片压缩失败"),n(t)}})})},J={compressorImage:z,uploadImage:function(t){return new l.a(function(e,n){z(t).then(function(t){var o=new FormData;o.append("imgType",1),o.append("upload",t,t.name),w.a.post(Y.UPLOAD_IMG,o).then(function(t){200===!t.code&&console.log("图片上传失败"),e(t)}).catch(function(t){console.log("图片上传失败"),n(t)})})})}};u.default.use(K.InfiniteScroll),u.default.component(K.Swipe.name,K.Swipe),u.default.component(K.SwipeItem.name,K.SwipeItem),u.default.component(K.Cell.name,K.Cell),u.default.component(K.Button.name,K.Button),u.default.component(K.Actionsheet.name,K.Actionsheet),u.default.component(K.Field.name,K.Field),u.default.component(K.Checklist.name,K.Checklist),u.default.component(K.Popup.name,K.Popup),u.default.component(K.DatetimePicker.name,K.DatetimePicker),u.default.component(K.Header.name,K.Header),u.default.config.productionTip=!1,u.default.prototype.$http=w.a,u.default.prototype.$bus=new u.default,u.default.prototype.$qs=L.a,u.default.prototype.$actionType=G,u.default.prototype.$port=Y,u.default.prototype.$commons=J;var Q=A.match(location.href).query,V=function(){X.commit(G.set_token,""),X.commit(G.set_wx_code,""),new l.a(function(t,e){w.a.get(Y.GET_WX_CONFIG,{params:{url:decodeURIComponent(location.href)}}).then(function(n){200===n.code?(location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+n.data.appid+"&redirect_uri="+encodeURIComponent(location.href)+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect",t(n)):e(n)})})};Boolean(Q.code)?(Q.code&&X.commit(G.set_wx_code,Q.code instanceof Array?Q.code[0]:Q.code),i()(Q).forEach(function(t){"code"===t||"from"===t||"state"===t?delete Q[t]:Q[t]instanceof Array&&(Q[t]=Q[0])}),location.href=location.href.replace(/[&?#]code=(.)*STATE/g,"")):(w.a.defaults.crossDomain=!0,w.a.defaults.withCredentials=!0,w.a.interceptors.request.use(function(t){return t.params=a()({},t.params,{token:X.state.token}),t},function(t){return console.log(t),l.a.reject(t)}),w.a.interceptors.response.use(function(t){return 403===t.data.code&&V(),t.data},function(t){return console.log(t),l.a.reject(t)}),A.beforeEach(function(t,e,n){n()}),new l.a(function(t,e){X.state.token?t({}):X.state.code?w.a.get(Y.GET_TOKEN,{params:{code:X.state.code,state:"state"}}).then(function(n){200===n.code?(X.commit(G.set_token,n.data),console.log(n.data),t(n)):e()}):e()}).then(function(t){w.a.get(Y.GET_CONFIG,{params:{token:X.state.token}}).then(function(t){var e=t.code,n=t.data;t.msg;200===e&&X.commit(G.set_config_data,{data:n})}),new u.default({el:"#app",router:A,store:X,axios:w.a,components:{App:h},template:"<App/>"})}).catch(function(t){V()}))},"d8/S":function(t,e){},gf2s:function(t,e){},muQq:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.6b24898b193f88d6377e.js.map