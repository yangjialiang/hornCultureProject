webpackJsonp([17],{LP5T:function(e,t){},n2jT:function(e,t){},"vA/P":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("//Fk"),i=a.n(l),c=a("Dd8w"),n=a.n(c),r=a("Cz8s"),o=a("NYxO"),s=a("TrLn"),d=a("m8LM"),u=a("vhNw"),m={name:"club",components:{FixedLayout:s.a,FileImage2:d.a,CropperBox:u.a,"v-Header":r.a},data:function(){return{cropper:{dialog:!1,src:"",item:null,size:{width:1e3,height:1e3}},agree:!1,clubType:{value:-1,label:"请选择"},sheetClubType:{visible:!1,actions:[]},name:"",city:"",phone:null,email:"",wxId:"",bankNo:null,desc:"",headimg:{file:null,url:""},mainimg:{file:null,url:""},idcardF:{file:null,url:""},idcardB:{file:null,url:""},licenceimg:{file:null,url:""}}},computed:n()({},Object(o.d)({ClubType:function(e){return e.config.ClubType}})),watch:{ClubType:{immediate:!0,handler:function(e){var t=this;e instanceof Array&&e.forEach(function(e){t.sheetClubType.actions.push({name:e.label,method:function(){t.clubType=e}})})}}},created:function(){var e=this;new i.a(function(t,a){if(e.$route.query.clubId)e.$http.get(e.$port.MY_CLUB,{params:{clubId:e.$route.query.clubId}}).then(function(a){a.data=a.data||{},200===a.code&&(e.clubType.value=a.data.clubType,e.name=a.data.name,e.city=a.data.city,e.phone=a.data.phone,e.email=a.data.email,e.wxId=a.data.wxId,e.bankNo=a.data.bankNo,e.desc=a.data.desc,e.headimg.url=a.data.headimg,e.mainimg.url=a.data.mainimg,e.idcardF.url=a.data.idcardF,e.idcardB.url=a.data.idcardB,e.licenceimg.url=a.data.licenceimg),t()});else{e.name=localStorage.getItem("club_name"),e.city=localStorage.getItem("club_city"),e.phone=localStorage.getItem("club_phone"),e.email=localStorage.getItem("club_email"),e.wxId=localStorage.getItem("club_wxId"),e.bankNo=localStorage.getItem("club_bankNo"),e.desc=localStorage.getItem("club_desc"),t()}}).then(function(){setInterval(function(){localStorage.setItem("club_name",e.name||""),localStorage.setItem("club_city",e.city||""),localStorage.setItem("club_phone",e.phone||""),localStorage.setItem("club_email",e.email||""),localStorage.setItem("club_wxId",e.wxId||""),localStorage.setItem("club_bankNo",e.bankNo||""),localStorage.setItem("club_desc",e.desc||"")},200)})},methods:{handDeleteImage:function(e){e.file=null,e.url=""},handLoadImg:function(e,t,a){var l=this;this.cropper.item=this[a],this.cropper.file=t,this.$commons.compressorImage(t).then(function(e){"headimg"===a||"mainimg"===a?(l.cropper.dialog=!0,"headimg"===a?(l.cropper.size.width=200,l.cropper.size.height=200):"mainimg"===a&&(l.cropper.size.width=750,l.cropper.size.height=500),setTimeout(function(){l.cropper.src=window.URL.createObjectURL(e)},200)):(l.cropper.size.width=1e3,l.cropper.size.height=1e3,l.$commons.uploadImage(l.cropper.file).then(function(e){200===e.code&&(l.cropper.item.url=e.data)}))})},handCropperDone:function(e){var t=this;e.getCroppedCanvas({width:this.cropper.size.width,height:this.cropper.size.height}).toBlob(function(e){t.$commons.uploadImage(e).then(function(e){200===e.code&&(t.cropper.item.url=e.data,t.cropper.dialog=!1)})})},handSubmit:function(){var e=this;if(this.agree){var t={clubId:0,clubType:this.clubType.value,name:this.name,city:this.city,phone:this.phone,email:this.email,wxId:this.wxId,bankNo:this.bankNo,headimg:this.headimg.url,mainimg:this.mainimg.url,idcardF:this.idcardF.url,idcardB:this.idcardB.url,licenceimg:this.licenceimg.url,desc:this.desc};this.$http.post(this.$port.MY_CLUB,this.$qs.stringify(t)).then(function(t){200===t.code?(alert("资料提交成功"),e.$router.push("/")):alert(t.msg)})}else alert("请阅读并同意协议条款")}}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("fixed-layout",[a("template",{slot:"header"},[a("v-Header",{staticClass:"head"},[a("span",{attrs:{slot:"text"},slot:"text"},[e._v("俱乐部认证")])])],1),e._v(" "),a("mt-cell",{attrs:{title:"选择俱乐部类型",value:e.clubType.label,"is-link":""},nativeOn:{click:function(t){e.sheetClubType.visible=!0}}}),e._v(" "),a("mt-actionsheet",{attrs:{cancelText:"",actions:e.sheetClubType.actions},model:{value:e.sheetClubType.visible,callback:function(t){e.$set(e.sheetClubType,"visible",t)},expression:"sheetClubType.visible"}}),e._v(" "),a("mt-field",{staticClass:"right",attrs:{label:"俱乐部名称",placeholder:"请输入俱乐部名称"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),a("mt-field",{staticClass:"right",attrs:{label:"俱乐部所在城市",placeholder:"请输入俱乐部所在城市"},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}}),e._v(" "),a("mt-field",{staticClass:"right",attrs:{type:"tel",label:"俱乐部联系方式",placeholder:"请填写正确的手机号码"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),e._v(" "),a("mt-field",{staticClass:"right",attrs:{type:"mail",label:"邮箱",placeholder:"请填写邮箱"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),a("mt-field",{staticClass:"right",attrs:{label:"微信号",placeholder:"请填写微信号"},model:{value:e.wxId,callback:function(t){e.wxId=t},expression:"wxId"}}),e._v(" "),a("mt-field",{staticClass:"right",attrs:{type:"number",label:"银行账号",placeholder:"请填写银行账号"},model:{value:e.bankNo,callback:function(t){e.bankNo=t},expression:"bankNo"}}),e._v(" "),a("mt-cell",{attrs:{title:"俱乐部头像"}}),e._v(" "),a("section",{staticClass:"m-uploads"},[a("ul",[a("li",[a("file-image2",{attrs:{src:e.headimg.url},on:{load:function(t,a){return e.handLoadImg(t,a,"headimg")},delete:function(t){e.handDeleteImage(e.headimg)}}})],1)])]),e._v(" "),a("mt-cell",{attrs:{title:"俱乐部主页图",value:"请上传横图"}}),e._v(" "),a("section",{staticClass:"m-uploads"},[a("ul",[a("li",[a("file-image2",{attrs:{src:e.mainimg.url},on:{load:function(t,a){return e.handLoadImg(t,a,"mainimg")},delete:function(t){e.handDeleteImage(e.mainimg)}}})],1)])]),e._v(" "),a("mt-cell",{attrs:{title:"俱乐部简介"}}),e._v(" "),a("mt-field",{attrs:{type:"textarea",placeholder:"请填写俱乐部简介"},model:{value:e.desc,callback:function(t){e.desc=t},expression:"desc"}}),e._v(" "),a("mt-cell",{attrs:{title:"上传认证材料",value:"身份证正反面和营业执照"}}),e._v(" "),a("section",{staticClass:"m-uploads"},[a("ul",[a("li",[a("file-image2",{attrs:{src:e.idcardF.url},on:{load:function(t,a){return e.handLoadImg(t,a,"idcardF")},delete:function(t){e.handDeleteImage(e.idcardF)}}}),e._v(" "),a("h4",[e._v("身份证正面")])],1),e._v(" "),a("li",[a("file-image2",{attrs:{src:e.idcardB.url},on:{load:function(t,a){return e.handLoadImg(t,a,"idcardB")},delete:function(t){e.handDeleteImage(e.idcardB)}}}),e._v(" "),a("h4",[e._v("身份证反面")])],1),e._v(" "),a("li",[a("file-image2",{attrs:{src:e.licenceimg.url},on:{load:function(t,a){return e.handLoadImg(t,a,"licenceimg")},delete:function(t){e.handDeleteImage(e.licenceimg)}}}),e._v(" "),a("h4",[e._v("营业执照")])],1)])]),e._v(" "),a("cropper-box",{directives:[{name:"show",rawName:"v-show",value:e.cropper.dialog,expression:"cropper.dialog"}],staticClass:"cropper-box",attrs:{src:e.cropper.src,ar:e.cropper.size.width/e.cropper.size.height},on:{cancel:function(t){e.cropper.dialog=!1},done:e.handCropperDone}}),e._v(" "),a("section",{staticClass:"ft"},[a("p",{staticClass:"agreement"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.agree,expression:"agree"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.agree)?e._i(e.agree,null)>-1:e.agree},on:{change:function(t){var a=e.agree,l=t.target,i=!!l.checked;if(Array.isArray(a)){var c=e._i(a,null);l.checked?c<0&&(e.agree=a.concat([null])):c>-1&&(e.agree=a.slice(0,c).concat(a.slice(c+1)))}else e.agree=i}}}),a("a",{attrs:{href:""}},[e._v("同意《号角平台商户服务协议》")])]),e._v(" "),a("mt-button",{attrs:{disabled:!e.agree,type:"primary"},on:{click:e.handSubmit}},[e._v("确认")])],1)],2)},staticRenderFns:[]};var p=a("VU/8")(m,h,!1,function(e){a("n2jT"),a("LP5T")},"data-v-17e04cf9",null);t.default=p.exports}});
//# sourceMappingURL=17.ee7f3be68afa71d5f242.js.map