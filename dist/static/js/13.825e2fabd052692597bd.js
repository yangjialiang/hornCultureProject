webpackJsonp([13],{"+3hO":function(t,e){},"jt/+":function(t,e){},kTWP:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o("Dd8w"),n=o.n(r),a=o("NYxO"),c=o("m8LM"),i=o("vhNw"),s={name:"",components:{FileImage2:c.a,CropperBox:i.a},props:{},data:function(){return{cropper:{dialog:!1,src:""},detail:{}}},watch:{},computed:n()({},Object(a.c)({userType:function(t){return t.userInfo.userType},cover:function(t){return t.write.article.cover}})),created:function(){window.$v=this,this.init()},methods:{init:function(){var t=this;this.$route.query.productId&&this.$http.get(this.$port.ARTICLE_PROT,{params:{productId:this.$route.query.productId}}).then(function(e){200===e.code?t.$store.commit(t.$actionType.set_article_data,{contType:t.$route.query.contType,productId:t.$route.query.productId,cover:e.data.preimg,title:e.data.title,desc:e.data.desc,content:e.data.cont}):alert(e.msg)})},initData:function(){},handDeleteImage:function(){this.$store.commit(this.$actionType.set_article_data,{cover:""})},handLoadFile:function(t,e){var o=this;this.$commons.compressorImage(e).then(function(e){o.cropper.dialog=!0,setTimeout(function(){o.cropper.src=t.target.result},200)})},handCropperDone:function(t){var e=this;t.getCroppedCanvas({width:500,height:500}).toBlob(function(t){e.$commons.uploadImage(t).then(function(t){if(200===t.code){var o=parseInt(e.$route.query.contType);isNaN(o)&&(o=1),e.$store.commit(e.$actionType.set_article_data,{cover:t.data,contType:o}),e.cropper.dialog=!1}else alert("图片上传失败")})})},handNext:function(){this.cover?4===this.userType?this.$router.push({path:"/write/club"}):this.$router.push({path:"edit",query:this.$route.query}):alert("请上传图片")}}},u={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("mt-header",{attrs:{title:"上传封面"}},[o("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[o("mt-button",{attrs:{icon:"back"},on:{click:function(e){t.$router.go(-1)}}})],1),t._v(" "),o("mt-button",{attrs:{slot:"right"},on:{click:t.handNext},slot:"right"},[t._v("下一步")])],1),t._v(" "),o("section",{staticClass:"upload"},[t.cover?[o("h3",{staticClass:"fw4"},[t._v("上传成功")])]:[o("h3",{staticClass:"fw4"},[t._v("上传封面")])],t._v(" "),o("file-image2",{attrs:{src:t.cover},on:{load:t.handLoadFile,delete:t.handDeleteImage}}),t._v(" "),o("p",[t._v("注：该封面图片会出现在“约”的文章列表及文章头部")])],2),t._v(" "),o("cropper-box",{directives:[{name:"show",rawName:"v-show",value:t.cropper.dialog,expression:"cropper.dialog"}],attrs:{src:t.cropper.src},on:{cancel:function(e){t.cropper.dialog=!1},done:t.handCropperDone}})],1)},staticRenderFns:[]};var p=o("VU/8")(s,u,!1,function(t){o("jt/+"),o("+3hO")},"data-v-6e7ba670",null);e.default=p.exports}});
//# sourceMappingURL=13.825e2fabd052692597bd.js.map