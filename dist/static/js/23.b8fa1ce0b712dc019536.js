webpackJsonp([23],{Vcld:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Dd8w"),a=s.n(i),n=s("NYxO"),l={name:"expert",components:{},data:function(){return{detail:{},clubJoinList:[],sheetClub:{show:!1,list:[]}}},computed:a()({},Object(n.d)({})),created:function(){this.init()},methods:{init:function(){var t=this;this.$store.commit(this.$actionType.set_detail,{title:"达人",id:this.$route.query.expertId,userId:this.$route.query.expertId}),this.$route.query.expertId&&this.$http.get(this.$port.GET_EXPERT_DETAIL,{params:{expertId:this.$route.query.expertId}}).then(function(e){200===e.code&&(t.detail=e.data,e.data.clubJoinList.forEach(function(e){t.sheetClub.list.push({name:e.name,method:function(){t.$router.push({path:"/detail/club",query:{clubId:e.clubId}})}})}))})}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("section",{staticClass:"preview"},[s("div",{staticClass:"cover"},[s("img",{staticClass:"db fit-cover",attrs:{src:t.detail.mainimg}})]),t._v(" "),s("div",{staticClass:"text"},[s("h3",[t._v(t._s(t.detail.name))]),t._v(" "),s("p",{staticClass:"info"},[t._v(t._s(t.detail.age+"岁 "+t.detail.city+" "+t.detail.lang))]),t._v(" "),s("p",[t._v(t._s(t.detail.desc))])])]),t._v(" "),s("section",{staticClass:"layout"},[s("ul",{staticClass:"ui-group"},[s("mt-cell",{attrs:{title:"加入的俱乐部",value:t.sheetClub.list[0]&&t.sheetClub.list[0].name||"无","is-link":""},nativeOn:{click:function(e){t.sheetClub.show=!0}}})],1)]),t._v(" "),s("mt-actionsheet",{attrs:{actions:t.sheetClub.list},model:{value:t.sheetClub.show,callback:function(e){t.$set(t.sheetClub,"show",e)},expression:"sheetClub.show"}})],1)},staticRenderFns:[]};var u=s("VU/8")(l,c,!1,function(t){s("e3vR")},"data-v-70fd440a",null);e.default=u.exports},e3vR:function(t,e){}});
//# sourceMappingURL=23.b8fa1ce0b712dc019536.js.map