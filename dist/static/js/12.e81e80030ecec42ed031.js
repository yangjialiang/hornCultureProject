webpackJsonp([12],{"24of":function(e,t){},"4Ghn":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("//Fk"),r=a.n(i),l=a("Dd8w"),o=a.n(l),n=a("Cz8s"),c=a("NYxO"),s=a("TrLn"),d=a("m8LM"),m=a("vhNw"),h={name:"expert",components:{FixedLayout:s.a,FileImage2:d.a,CropperBox:m.a,"v-Header":n.a},data:function(){return{cropper:{dialog:!1,src:"",item:null,size:{width:1e3,height:1e3}},agree:!1,city:"",phone:null,email:"",wxId:"",bankNo:"",birth:new Date,lang:"",desc:"",headimg:{file:null,url:""},mainimg:{file:null,url:""},idcardF:{file:null,url:""},idcardB:{file:null,url:""},certimg:{file:null,url:""}}},computed:o()({},Object(c.d)({}),{formatBirth:function(){var e=this.birth.getFullYear(),t=this.birth.getMonth()+1,a=this.birth.getDate();return e+"-"+(t<10?0:"")+t+"-"+(a<10?0:"")+a}}),watch:{},created:function(){var e=this;new r.a(function(t,a){if(e.$route.query.expertId)e.$http.get(e.$port.AUTH_EXPERT,{params:{expertId:e.$route.query.expertId}}).then(function(a){a.data=a.data||{},200===a.code&&(e.city=a.data.city,e.phone=a.data.phone,e.email=a.data.email,e.wxId=a.data.wxId,e.bankNo=a.data.bankNo,e.birth=new Date(a.data.birth),e.lang=a.data.lang,e.desc=a.data.desc,e.headimg.url=a.data.headimg,e.mainimg.url=a.data.mainimg,e.idcardF.url=a.data.idcardF,e.idcardB.url=a.data.idcardB,e.certimg.url=a.data.certimg),t()});else{var i="expert_";e.city=localStorage.getItem(i+"city"),e.phone=localStorage.getItem(i+"phone"),e.email=localStorage.getItem(i+"email"),e.wxId=localStorage.getItem(i+"wxId"),e.bankNo=localStorage.getItem(i+"bankNo"),e.lang=localStorage.getItem(i+"lang"),e.desc=localStorage.getItem(i+"desc"),t()}}).then(function(){var t="expert_";setInterval(function(){localStorage.setItem(t+"city",e.city||""),localStorage.setItem(t+"phone",e.phone||""),localStorage.setItem(t+"email",e.email||""),localStorage.setItem(t+"wxId",e.wxId||""),localStorage.setItem(t+"bankNo",e.bankNo||""),localStorage.setItem(t+"lang",e.lang||""),localStorage.setItem(t+"desc",e.desc||"")},200)})},methods:{handDeleteImage:function(e){e.file=null,e.url=""},handLoadImg:function(e,t,a){var i=this;this.cropper.item=this[a],this.cropper.file=t,this.$commons.compressorImage(t).then(function(e){"headimg"===a||"mainimg"===a?(i.cropper.dialog=!0,"headimg"===a?(i.cropper.size.width=200,i.cropper.size.height=200):"mainimg"===a&&(i.cropper.size.width=750,i.cropper.size.height=500),setTimeout(function(){i.cropper.src=window.URL.createObjectURL(e)},200)):(i.cropper.size.width=1e3,i.cropper.size.height=1e3,i.$commons.uploadImage(i.cropper.file).then(function(e){200===e.code&&(i.cropper.item.url=e.data)}))})},handCropperDone:function(e){var t=this;e.getCroppedCanvas({width:this.cropper.size.width,height:this.cropper.size.height}).toBlob(function(e){t.$commons.uploadImage(e).then(function(e){200===e.code&&(t.cropper.item.url=e.data,t.cropper.dialog=!1)})})},handSubmit:function(){var e=this;if(this.agree){var t={city:this.city,phone:this.phone,email:this.email,wxId:this.wxId,bankNo:this.bankNo,birth:this.formatBirth,lang:this.lang,desc:this.desc,headimg:this.headimg.url,mainimg:this.mainimg.url,idcardF:this.idcardF.url,idcardB:this.idcardB.url,certimg:this.certimg.url};this.$http.post(this.$port.AUTH_EXPERT,this.$qs.stringify(t)).then(function(t){200===t.code?(alert("资料提交成功"),e.$router.push("/")):alert(t.msg)})}else alert("请阅读并同意协议条款")}}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("fixed-layout",[a("template",{slot:"header"},[a("v-Header",{staticClass:"head"},[a("span",{attrs:{slot:"text"},slot:"text"},[e._v("达人认证")])])],1),e._v(" "),a("mt-field",{staticClass:"right",attrs:{type:"tel",label:"联系方式",placeholder:"请填写正确的手机号码"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),e._v(" "),a("mt-field",{staticClass:"right",attrs:{type:"mail",label:"邮箱",placeholder:"请填写邮箱"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),a("mt-field",{staticClass:"right",attrs:{label:"所属城市",placeholder:"请输入所在城市"},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}}),e._v(" "),a("mt-field",{staticClass:"right",attrs:{label:"微信号",placeholder:"请填写微信号"},model:{value:e.wxId,callback:function(t){e.wxId=t},expression:"wxId"}}),e._v(" "),a("mt-field",{staticClass:"right",attrs:{type:"number",label:"银行账号",placeholder:"请填写银行账号"},model:{value:e.bankNo,callback:function(t){e.bankNo=t},expression:"bankNo"}}),e._v(" "),a("mt-cell",{attrs:{title:"生日",value:e.formatBirth,"is-link":""},nativeOn:{click:function(t){e.$refs.pickerBirth.open()}}}),e._v(" "),a("mt-datetime-picker",{ref:"pickerBirth",attrs:{startDate:new Date("1900"),type:"date"},model:{value:e.birth,callback:function(t){e.birth=t},expression:"birth"}}),e._v(" "),a("mt-field",{staticClass:"right",attrs:{type:"text",label:"语言",placeholder:"请填写熟悉的语言"},model:{value:e.lang,callback:function(t){e.lang=t},expression:"lang"}}),e._v(" "),a("mt-cell",{attrs:{title:"上传头像"}}),e._v(" "),a("section",{staticClass:"m-uploads"},[a("ul",[a("li",[a("file-image2",{attrs:{src:e.headimg.url},on:{load:function(t,a){return e.handLoadImg(t,a,"headimg")},delete:function(t){e.handDeleteImage(e.headimg)}}})],1)])]),e._v(" "),a("mt-cell",{attrs:{title:"个人主页图",value:"请上传横图"}}),e._v(" "),a("section",{staticClass:"m-uploads"},[a("ul",[a("li",[a("file-image2",{attrs:{src:e.mainimg.url},on:{load:function(t,a){return e.handLoadImg(t,a,"mainimg")},delete:function(t){e.handDeleteImage(e.mainimg)}}})],1)])]),e._v(" "),a("mt-cell",{attrs:{title:"个人简介"}}),e._v(" "),a("mt-field",{attrs:{type:"textarea",placeholder:"请简单介绍下自己，会有更多人对您感兴趣哦"},model:{value:e.desc,callback:function(t){e.desc=t},expression:"desc"}}),e._v(" "),a("mt-cell",{attrs:{title:"上传认证材料",value:"身份证正反面和达人证正反面"}}),e._v(" "),a("section",{staticClass:"m-uploads"},[a("ul",[a("li",[a("file-image2",{attrs:{src:e.idcardF.url},on:{load:function(t,a){return e.handLoadImg(t,a,"idcardF")},delete:function(t){e.handDeleteImage(e.idcardF)}}}),e._v(" "),a("h4",[e._v("身份证正面")])],1),e._v(" "),a("li",[a("file-image2",{attrs:{src:e.idcardB.url},on:{load:function(t,a){return e.handLoadImg(t,a,"idcardB")},delete:function(t){e.handDeleteImage(e.idcardB)}}}),e._v(" "),a("h4",[e._v("身份证反面")])],1),e._v(" "),a("li",[a("file-image2",{attrs:{src:e.certimg.url},on:{load:function(t,a){return e.handLoadImg(t,a,"certimg")},delete:function(t){e.handDeleteImage(e.certimg)}}}),e._v(" "),a("h4",[e._v("相关证件")])],1)])]),e._v(" "),a("cropper-box",{directives:[{name:"show",rawName:"v-show",value:e.cropper.dialog,expression:"cropper.dialog"}],staticClass:"cropper-box",attrs:{src:e.cropper.src,ar:e.cropper.size.width/e.cropper.size.height},on:{cancel:function(t){e.cropper.dialog=!1},done:e.handCropperDone}}),e._v(" "),a("section",{staticClass:"ft"},[a("p",{staticClass:"agreement"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.agree,expression:"agree"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.agree)?e._i(e.agree,null)>-1:e.agree},on:{change:function(t){var a=e.agree,i=t.target,r=!!i.checked;if(Array.isArray(a)){var l=e._i(a,null);i.checked?l<0&&(e.agree=a.concat([null])):l>-1&&(e.agree=a.slice(0,l).concat(a.slice(l+1)))}else e.agree=r}}}),a("a",{attrs:{href:""}},[e._v("同意《号角平台商户服务协议》")])]),e._v(" "),a("mt-button",{attrs:{disabled:!e.agree,type:"primary"},on:{click:e.handSubmit}},[e._v("确认")])],1)],2)},staticRenderFns:[]};var u=a("VU/8")(h,p,!1,function(e){a("56VE"),a("24of")},"data-v-770d275a",null);t.default=u.exports},"56VE":function(e,t){}});
//# sourceMappingURL=12.e81e80030ecec42ed031.js.map