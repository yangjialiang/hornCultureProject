webpackJsonp([9],{YQRE:function(t,e){},dU2s:function(t,e){},dqAI:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c=i("Dd8w"),n=i.n(c),r=i("NYxO"),s=i("TrLn"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"article"},[e("section",{staticClass:"article-title"},[e("h3",[this._t("title")],2)]),this._v(" "),e("section",{staticClass:"article-summary"},[e("p",[this._t("summary")],2)]),this._v(" "),e("section",{staticClass:"article-content"},[this._t("default")],2)])},staticRenderFns:[]};var a=i("VU/8")({name:"ui-article"},o,!1,function(t){i("lkLO")},"data-v-88cd402e",null).exports,u={name:"",components:{FixedLayout:s.a,UiArticle:a},props:{},data:function(){return{}},watch:{},computed:n()({},Object(r.c)({productId:function(t){return t.write.article.productId},contType:function(t){return t.write.article.contType},cover:function(t){return t.write.article.cover},clubId:function(t){return t.write.article.clubId},title:function(t){return t.write.article.title},desc:function(t){return t.write.article.desc},content:function(t){return t.write.article.content}})),created:function(){this.init()},mounted:function(){},methods:{init:function(){},initData:function(){},saveArticle:function(t){var e=this,i={productId:this.productId,clubId:this.clubId,contType:this.contType,title:this.title,desc:this.desc,preimg:this.cover,cont:this.content,contStatus:t};this.$http.post(this.$port.ADD_PRODUCT,this.$qs.stringify(i)).then(function(i){200===i.code?(e.$store.commit(e.$actionType.set_article_data,{productId:i.data}),1===t?e.$router.push({path:"/rendezvousPage/"+e.contType}):2===t&&(e.$store.commit(e.$actionType.set_article_data,{productId:0,contType:1,cover:"",clubId:-1,title:"",desc:"",content:""}),e.$router.push({path:"/productArticleDetailsPage/"+e.productId}))):500===i.code&&alert(i.msg)})},handSubmit:function(){this.saveArticle(2)},handSave:function(){this.saveArticle(1)}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("fixed-layout",[i("ui-article",[i("template",{slot:"title"},[t._v(t._s(t.title||"标题"))]),t._v(" "),i("template",{slot:"summary"},[t._v(t._s(t.desc||"简介"))]),t._v(" "),i("section",{domProps:{innerHTML:t._s(t.content||"内容")}})],2),t._v(" "),i("template",{slot:"footer"},[i("section",{staticClass:"bar"},[i("button",{staticClass:"primary",staticStyle:{"flex-basis":"30%"},on:{click:t.handSubmit}},[t._v("发布行程")]),t._v(" "),i("button",{on:{click:t.handSave}},[t._v("存草稿")])])])],2)},staticRenderFns:[]};var d=i("VU/8")(u,l,!1,function(t){i("YQRE"),i("dU2s")},"data-v-354b8ca9",null);e.default=d.exports},lkLO:function(t,e){}});
//# sourceMappingURL=9.261d90fd0db382986af8.js.map