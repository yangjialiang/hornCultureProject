webpackJsonp([32],{"4or2":function(e,t){},CK3q:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o={set_wx_code:"SET_WX_CODE",set_token:"SET_TOKEN",set_wx_config:"SET_WX_CONFIG",set_config_data:"CONFIG_SET_DATA",set_detail:"SET_DETAIL",set_article_data:"WRITE_SET_ARTICLE_DATA",set_post_data:"WRITE_SET_POST_DATA",getUserInfo:"GET_USER_INFO"}},Cvae:function(e,t){},DJf5:function(e,t,n){"use strict";var o=n("//Fk"),a=n.n(o),i=n("Zrlr"),c=n.n(i),r=n("ar4J"),s=n("YaEn"),u=n("IcnI"),l="號角文化",p="致力于传播海洋文化，为热爱海洋文化的朋友提供分享、沟通、互动的平台，为企业和目标群体搭建关于海洋文化交流的桥梁，提供更多更全面的海洋知识与资源给有需要的人士";t.a=new function e(){var t=this;c()(this,e),this.configPromise=null,this.config=function(){return t.configPromise||(t.configPromise=new a.a(function(e){wx.config({debug:!1,appId:u.a.state.wx_config.appId,timestamp:u.a.state.wx_config.timestamp,nonceStr:u.a.state.wx_config.nonceStr,signature:u.a.state.wx_config.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone"]}),wx.ready(function(){t.updateShareData(),e()})})),t.configPromise},this.updateShareData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:location.href,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:location.origin+"/static/share.jpg",c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"link";return t.config().then(function(){return new a.a(function(t){wx.onMenuShareAppMessage({title:e,desc:n,link:o,imgUrl:i,type:c,success:function(){r.a.onMenuShareAppMessage(s.a.match(o).hash,e),console.log("share success"),t()}}),wx.onMenuShareTimeline({title:e,desc:n,link:o,imgUrl:i,type:c,success:function(){r.a.onMenuShareTimeline(s.a.match(o).hash,e),console.log("share success"),t()}})})})}}},IcnI:function(e,t,n){"use strict";var o,a,i=n("bOdI"),c=n.n(i),r=n("7+uW"),s=n("NYxO"),u=n("mtWM"),l=n.n(u),p=n("CK3q"),h=n("aFK5"),d=n.n(h),m={state:{AuditStatus:[],ClubType:[],CommentStatus:[],CommentType:[],ContStatus:[],ContType:[],ImgType:[],JoinStatus:[],Like:[],MsgType:[],TagStatus:[],TagType:[]},getters:{},actions:{},mutations:c()({},p.a.set_config_data,function(e,t){var n=t.data;d()(n).forEach(function(t){e[t]=[],n[t]instanceof Array&&(e[t]=[],n[t].forEach(function(n){var o=n.split(" - ");e[t].push({value:parseInt(o[0]),label:o[1]})}))})})},f=n("woOf"),g=n.n(f),_={state:{article:{productId:0,contType:1,cover:"",clubId:-1,title:"",desc:"",content:""},post:{content:"",preimg:[],tagId:0,clubId:0}},getters:{},actions:{},mutations:(o={},c()(o,p.a.set_article_data,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{productId:productId,cover:cover,clubId:clubId,title:title,desc:desc,content:content};g()(e.article,t)}),c()(o,p.a.set_post_data,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{content:content,preimg:preimg,tagId:tagId,clubId:clubId};g()(e.post,t)}),o)},T=n("k/nm"),I={setUserInfo:function(e,t){g()(e,t)}},v={state:{auditUserType:"",headimg:"",nickname:"",userId:"",userType:""},getters:{},actions:c()({},p.a.getUserInfo,function(e){var t=e.commit;e.state;return l.a.get(T.a.MY_PROT,{}).then(function(e){var n=e.data;200==e.code&&t("setUserInfo",n)}).catch(function(e){console.log(e.response.data)})}),mutations:I};r.default.use(s.a);var P={token:localStorage.getItem("token"),code:localStorage.getItem("wx_code"),wx_config:{appId:"",timestamp:"",nonceStr:"",signature:""},detail:{title:"",id:0}},E=(a={},c()(a,p.a.set_wx_code,function(e,t){e.code=t,localStorage.setItem("wx_code",e.code)}),c()(a,p.a.set_token,function(e,t){e.token=t,localStorage.setItem("token",e.token)}),c()(a,p.a.set_wx_config,function(e,t){e.wx_config.appId=t.appid,e.wx_config.timestamp=t.timestamp,e.wx_config.nonceStr=t.noncestr,e.wx_config.signature=t.signature}),c()(a,p.a.set_detail,function(e,t){e.detail.title=t.title,e.detail.id=t.id}),a);t.a=new s.a.Store({state:P,getters:{},actions:{},mutations:E,modules:{config:m,userInfo:v,write:_}})},MPzD:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("Dd8w"),a=n.n(o),i=n("aFK5"),c=n.n(i),r=n("//Fk"),s=n.n(r),u=n("7+uW"),l=n("Gu7T"),p=n.n(l),h=n("NYxO"),d=n("ar4J"),m={name:"App",data:function(){return{showImg:!1,datasrc:""}},methods:a()({},Object(h.b)(["GET_USER_INFO"]),{remove:function(){event.stopPropagation(),this.showImg=!1}}),created:function(){var e=this;this.$bus.$on("showImg",function(t){e.datasrc=[].concat(p()(t)),e.showImg=!0}),this.GET_USER_INFO().then(function(){d.a.setCustomVar("用户类型",e.$store.state.config.UserType.find(function(t){return t.value===e.$store.state.userInfo.userType}).label),console.log("config.UserType=",e.$store.state.config.UserType),console.log("userInfo.userType=",e.$store.state.userInfo.userType),console.log("用户类型=",e.$store.state.config.UserType.find(function(t){return t.value===e.$store.state.userInfo.userType}).label),console.log("userId=",e.$store.state.userInfo.userId)})}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),e._v(" "),n("mt-popup",{staticClass:"showImg",attrs:{modal:!1,position:"right"},model:{value:e.showImg,callback:function(t){e.showImg=t},expression:"showImg"}},[n("mt-swipe",{staticClass:"homePageswipe",attrs:{auto:0,continuous:!1,"show-indicators":!1}},e._l(e.datasrc,function(t,o){return t?n("mt-swipe-item",{key:o},[n("div",{style:{backgroundImage:"url("+t+")"},on:{click:e.remove}})]):e._e()}))],1)],1)},staticRenderFns:[]};var g=n("VU/8")(m,f,!1,function(e){n("Cvae")},null,null).exports,_=n("YaEn"),T=n("mtWM"),I=n.n(T),v=n("mw3O"),P=n.n(v),E=n("IcnI"),y=n("DJf5"),S=n("Au9i"),w=(n("MPzD"),n("d8/S"),n("muQq"),n("4or2"),n("CK3q")),C=n("k/nm"),b=n("VDWi"),O=function(e){return new s.a(function(t,n){S.Indicator.open("图片压缩中"),new b.a(e,{quality:.8,maxWidth:750,convertSize:2e6,success:function(e){S.Indicator.close(),t(e)},error:function(e){S.MessageBox.alert("图片压缩失败"),n(e)}})})},A={compressorImage:O,uploadImage:function(e){return new s.a(function(t,n){O(e).then(function(e){S.Indicator.open("图片上传中");var o=new FormData;o.append("imgType",1),o.append("upload",e,e.name),I.a.post(C.a.UPLOAD_IMG,o).then(function(e){S.Indicator.close(),200===!e.code&&S.MessageBox.alert("图片上传失败"),t(e)}).catch(function(e){S.MessageBox.alert("图片上传失败"),n(e)})})})}};u.default.use(S.InfiniteScroll),u.default.component(S.Swipe.name,S.Swipe),u.default.component(S.SwipeItem.name,S.SwipeItem),u.default.component(S.Cell.name,S.Cell),u.default.component(S.Button.name,S.Button),u.default.component(S.Actionsheet.name,S.Actionsheet),u.default.component(S.Field.name,S.Field),u.default.component(S.Checklist.name,S.Checklist),u.default.component(S.Popup.name,S.Popup),u.default.component(S.DatetimePicker.name,S.DatetimePicker),u.default.component(S.Header.name,S.Header),u.default.config.productionTip=!1,u.default.prototype.$http=I.a,u.default.prototype.$bus=new u.default,u.default.prototype.$qs=P.a,u.default.prototype.$actionType=w.a,u.default.prototype.$port=C.a,u.default.prototype.$commons=A;var D=_.a.match(location.href).query,M=function(){E.a.commit(w.a.set_token,""),E.a.commit(w.a.set_wx_code,""),new s.a(function(e,t){I.a.get(C.a.GET_WX_CONFIG,{params:{url:decodeURIComponent(location.href)}}).then(function(n){200===n.code?(location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+n.data.appid+"&redirect_uri="+encodeURIComponent(location.href)+"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect",e(n)):t(n)})})};if(Boolean(D.code))D.code&&E.a.commit(w.a.set_wx_code,D.code instanceof Array?D.code[0]:D.code),c()(D).forEach(function(e){"code"===e||"from"===e||"state"===e?delete D[e]:D[e]instanceof Array&&(D[e]=D[0])}),location.href=location.href.replace(/[&?#]code=(.)*STATE/g,"");else{I.a.defaults.crossDomain=!0,I.a.defaults.withCredentials=!0,I.a.interceptors.request.use(function(e){return e.params=a()({},e.params,{token:E.a.state.token}),e.startTime=(new Date).getTime(),e},function(e){return console.log(e),s.a.reject(e)}),I.a.interceptors.response.use(function(e){if(console.log("interceptors res=",e),403===e.data.code?M():200!==e.data.code&&d.a.responseError(e.request.responseURL,e.data.code,e.data.msg),e.config&&e.config.startTime){var t=(new Date).getTime()-e.config.startTime,n=Math.floor(t/5e3),o=5*n+"s~"+5*(n+1)+"s";t>5e3&&d.a.responseError(e.request.responseURL,"COSTLONGTIME",o)}return e.data},function(e){return console.log(e),e&&e.config?d.a.responseError(e.config.url,error.code):d.a.responseError("err url",error.code),s.a.reject(e)});var R=window.sessionStorage.getItem("routersArr")?window.sessionStorage.getItem("routersArr").split("-,-"):[];_.a.beforeEach(function(e,t,n){R.length>=2&&R[R.length-2]==e.path?R.pop():R[R.length-1]!=e.path&&R.push(e.path),window.sessionStorage.setItem("routersArr",R.join("-,-")),n()}),new s.a(function(e,t){E.a.state.token?e({}):E.a.state.code?I.a.get(C.a.GET_TOKEN,{params:{code:E.a.state.code,state:"state"}}).then(function(n){200===n.code?(E.a.commit(w.a.set_token,n.data),console.log(n.data),e(n)):t()}):t()}).then(function(e){I.a.get(C.a.GET_CONFIG).then(function(e){var t=e.code,n=e.data;e.msg;200===t&&E.a.commit(w.a.set_config_data,{data:n})}),I.a.get(C.a.GET_WX_CONFIG,{params:{url:decodeURIComponent(location.href)}}).then(function(e){var t=e.code,n=e.data;e.msg;200===t&&(E.a.commit(w.a.set_wx_config,n),y.a.config())}),window.$v=new u.default({el:"#app",router:_.a,store:E.a,axios:I.a,components:{App:g},template:"<App/>"})}).catch(function(e){M()})}},YaEn:function(e,t,n){"use strict";var o=n("Gu7T"),a=n.n(o),i=n("7+uW"),c=n("/ocq"),r=[{path:"/write",component:function(e){return n.e(16).then(function(){var t=[n("ssrx")];e.apply(null,t)}.bind(this)).catch(n.oe)},children:[{path:"cover",component:function(e){return Promise.all([n.e(0),n.e(13)]).then(function(){var t=[n("kTWP")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"club",component:function(e){return Promise.all([n.e(0),n.e(11)]).then(function(){var t=[n("gVXP")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"edit",component:function(e){return Promise.all([n.e(0),n.e(3)]).then(function(){var t=[n("JGuM")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"preview",component:function(e){return Promise.all([n.e(0),n.e(9)]).then(function(){var t=[n("dqAI")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}],s=[{path:"/post",component:function(e){return n.e(22).then(function(){var t=[n("RUlc")];e.apply(null,t)}.bind(this)).catch(n.oe)},children:[{path:"part",component:function(e){return Promise.all([n.e(0),n.e(15)]).then(function(){var t=[n("EoXc")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"edit",component:function(e){return Promise.all([n.e(0),n.e(19)]).then(function(){var t=[n("oOw3")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"club",component:function(e){return Promise.all([n.e(0),n.e(18)]).then(function(){var t=[n("rI90")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}],u=[{path:"/detail",component:function(e){return Promise.all([n.e(0),n.e(8)]).then(function(){var t=[n("QJR9")];e.apply(null,t)}.bind(this)).catch(n.oe)},children:[{path:"club",component:function(e){return n.e(27).then(function(){var t=[n("Oe8h")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"coach",component:function(e){return n.e(23).then(function(){var t=[n("hKKY")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"expert",component:function(e){return n.e(24).then(function(){var t=[n("Vcld")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"/auth/club",component:function(e){return Promise.all([n.e(0),n.e(17)]).then(function(){var t=[n("vA/P")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/auth/coach",component:function(e){return Promise.all([n.e(0),n.e(10)]).then(function(){var t=[n("NuEX")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/auth/expert",component:function(e){return Promise.all([n.e(0),n.e(12)]).then(function(){var t=[n("4Ghn")];e.apply(null,t)}.bind(this)).catch(n.oe)}}],l=[{path:"/homePage",component:function(e){return Promise.all([n.e(0),n.e(1)]).then(function(){var t=[n("BWlC")];e.apply(null,t)}.bind(this)).catch(n.oe)}}],p=[{path:"/seeOcean",name:"seeOcean",meta:{title:"看海洋"},component:function(e){return Promise.all([n.e(0),n.e(14)]).then(function(){var t=[n("tfXS")];e.apply(null,t)}.bind(this)).catch(n.oe)}}],h=[{path:"/articleDetails/:contId",name:"articleDetails",component:function(e){return Promise.all([n.e(0),n.e(5)]).then(function(){var t=[n("lu5A")];e.apply(null,t)}.bind(this)).catch(n.oe)},children:[{path:"/articleDetails/commentPage/:contId/:atUserId",component:function(e){return n.e(0).then(function(){var t=[n("wE2M")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"/productArticleDetailsPage/:contId",name:"productArticleDetails",component:function(e){return Promise.all([n.e(0),n.e(6)]).then(function(){var t=[n("00w2")];e.apply(null,t)}.bind(this)).catch(n.oe)},children:[{path:"/productArticleDetailsPage/commentPage/:contId/:atUserId",component:function(e){return n.e(0).then(function(){var t=[n("wE2M")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}],d=[{path:"/rendezvousPage/:id",component:function(e){return Promise.all([n.e(0),n.e(26)]).then(function(){var t=[n("vgnQ")];e.apply(null,t)}.bind(this)).catch(n.oe)}}],m=[{path:"/forumPage",component:function(e){return Promise.all([n.e(0),n.e(21)]).then(function(){var t=[n("38y2")];e.apply(null,t)}.bind(this)).catch(n.oe)},children:[{path:"/forumPage/forumDetailsPage/:discussId",component:function(e){return Promise.all([n.e(0),n.e(2)]).then(function(){var t=[n("q/rC")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}],f=[{path:"/personalHomePage",component:function(e){return Promise.all([n.e(0),n.e(7)]).then(function(){var t=[n("3yAT")];e.apply(null,t)}.bind(this)).catch(n.oe)},children:[{path:"/personalHomePage/forumPage",component:function(e){return Promise.all([n.e(0),n.e(28)]).then(function(){var t=[n("n1Po")];e.apply(null,t)}.bind(this)).catch(n.oe)},children:[{path:"/personalHomePage/forumPage/forumDetailsPage/:discussId",component:function(e){return Promise.all([n.e(0),n.e(2)]).then(function(){var t=[n("q/rC")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"/personalHomePage/msg",component:function(e){return Promise.all([n.e(0),n.e(4)]).then(function(){var t=[n("r9ex")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/personalHomePage/collectionPage",component:function(e){return Promise.all([n.e(0),n.e(25)]).then(function(){var t=[n("ycFj")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/personalHomePage/myClub",component:function(e){return Promise.all([n.e(0),n.e(30)]).then(function(){var t=[n("fc0M")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/personalHomePage/publishInfo",component:function(e){return Promise.all([n.e(0),n.e(20)]).then(function(){var t=[n("y7mp")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/personalHomePage/draft",component:function(e){return Promise.all([n.e(0),n.e(29)]).then(function(){var t=[n("Y7qR")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}],g=n("ar4J"),_=n("DJf5");i.default.use(c.a);var T=new c.a({routes:[{path:"/",name:"index",meta:{title:"號角文化"},component:function(e){return Promise.all([n.e(0),n.e(1)]).then(function(){var t=[n("BWlC")];e.apply(null,t)}.bind(this)).catch(n.oe)}}].concat(a()(r),a()(s),a()(u),a()(l),a()(r),a()(p),a()(h),a()(d),a()(m),a()(f))});T.afterEach(function(e,t){var n=e.meta?e.meta.title:document.title;_.a.updateShareData(n),g.a.pageView(e.fullPath,t.fullPath)});t.a=T},ar4J:function(e,t,n){"use strict";var o=n("Zrlr"),a=n.n(o),i=n("IcnI");t.a=new function e(){var t=this;a()(this,e),this.trackevent=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments[4];_czc.push(["_trackEvent",e,t,n,o,a])},this.pageView=function(e,t){_czc.push(["_trackPageview",e,t])},this.setCustomVar=function(e,t,n){_czc.push(["_setCustomVar",e,t,n])},this.setAutoPageview=function(e){_czc.push(["_setAutoPageview",e])},this.responseError=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";t.trackevent("response",e,n,o)},this.onMenuShareAppMessage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=i.a.state.config.UserType.find(function(e){return e.value===i.a.state.userInfo.userType}).label||"其他";t.trackevent("shareAppMessage",e,o,n)},this.onMenuShareTimeline=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=i.a.state.config.UserType.find(function(e){return e.value===i.a.state.userInfo.userType}).label||"其他";t.trackevent("shareTimeline",e,o,n)}}},"d8/S":function(e,t){},"k/nm":function(e,t,n){"use strict";var o="http://47.106.76.248:80";t.a={GET_WX_CONFIG:o+"/mp/jsapi_sign",GET_TOKEN:o+"/mp/oauth",GET_CONFIG:o+"/api/config/enum/list",SEEOCEANTAGLIST_PROT:o+"/api/cont/artcile/tag/list",SEEOCEANLIST_PROT:o+"/api/cont/artcile/list",SEEOCEANARTICLE_PROT:o+"/api/cont/artcile/get",ADDLIKE_PROT:o+"/api/cont/like/add",UPLOAD_IMG:o+"/api/upload/img",ADD_PRODUCT:o+"/api/cont/product/add",HOMEPAGE_PORT:o+"/api/index",ARTICLELIST_PROT:o+"/api/cont/product/list",ARTICLE_PROT:o+"/api/cont/product/get",ARTICLE_DEL:o+"/api/cont/product/del",DISCUSS_TAG_PROT:o+"/api/cont/discuss/tag/list",DISCUSS_LIST_PROT:o+"/api/cont/discuss/list",DISCUSS_DETAILS_PROT:o+"/api/cont/discuss/get",DISCUSS_DEL_PROT:o+"/api/cont/discuss/del",MY_PROT:o+"/api/user/my",MY_DISCUSS_PROT:o+"/api/user/my/cont/discuss",MY_CONT_DRAF:o+"/api/user/my/cont/draf",MY_CONT_MSG:o+"/api/user/my/msg",MY_CONT_LIKE:o+"/api/user/my/cont/like",MY_CONT_PRODUCT:o+"/api/user/my/cont/product",MY_CLUB:o+"/api/user/my/club",MY_CLUB_JOIN:o+"/api/user/my/club/join",COMMENT_LIST_PROT:o+"/api/cont/comment/list",COMMENT_ADD_PROT:o+"/api/cont/comment/add",COMMENT_ADD_REPLY:o+"/api/cont/comment/reply/add",COMMENT_GET_REPLY:o+"/api/cont/comment/reply/list",COMMENT_DEL:o+"/api/cont/comment/del",COMMENT_DEL_REPLY:o+"/api/cont/comment/reply/del",AUTH_COACH:o+"/api/user/my/coach",AUTH_EXPERT:o+"/api/user/my/expert",POST_DISCUSS:o+"/api/cont/discuss/add",GET_CLUB_DETAIL:o+"/api/user/home/club",GET_COACH_DETAIL:o+"/api/user/home/coach",GET_EXPERT_DETAIL:o+"/api/user/home/expert",GET_DISCUSS_LIST:o+"/api/user/home/cont/discuss",GET_PRODUCT_LIST:o+"/api/user/home/cont/product"}},muQq:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.60b7e9cde3bf066ebc76.js.map