webpackJsonp([24],{c0Tl:function(t,e){},hKKY:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Dd8w"),a=i.n(s),c=i("NYxO"),n={name:"coach",components:{},data:function(){return{detail:{},clubJoinList:[],sheetClub:{show:!1,list:[]}}},computed:a()({},Object(c.d)({})),created:function(){this.init()},methods:{init:function(){var t=this;this.$store.commit(this.$actionType.set_detail,{title:"教练",id:this.$route.query.coachId,userId:this.$route.query.coachId}),this.$route.query.coachId&&this.$http.get(this.$port.GET_COACH_DETAIL,{params:{coachId:this.$route.query.coachId}}).then(function(e){200===e.code&&(t.detail=e.data,e.data.clubJoinList.forEach(function(e){t.sheetClub.list.push({name:e.name,method:function(){t.$router.push({path:"/detail/club",query:{clubId:e.clubId}})}})}))})}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("section",{staticClass:"preview"},[i("div",{staticClass:"cover"},[i("img",{staticClass:"db fit-cover",attrs:{src:t.detail.mainimg}})]),t._v(" "),i("div",{staticClass:"text"},[i("h3",[t._v(t._s(t.detail.name))]),t._v(" "),i("p",{staticClass:"info"},[t._v(t._s(t.detail.age+"岁 "+t.detail.city+" "+t.detail.lang))]),t._v(" "),i("p",[t._v(t._s(t.detail.desc))])])]),t._v(" "),i("section",{staticClass:"layout"},[i("ul",{staticClass:"ui-group"},[i("mt-cell",{attrs:{title:"加入的俱乐部",value:t.sheetClub.list[0]&&t.sheetClub.list[0].name||"无","is-link":""},nativeOn:{click:function(e){t.sheetClub.show=!0}}})],1)])])},staticRenderFns:[]};var o=i("VU/8")(n,l,!1,function(t){i("c0Tl")},"data-v-6c0c39e4",null);e.default=o.exports}});
//# sourceMappingURL=24.4b95e9c2092b8b82db8b.js.map