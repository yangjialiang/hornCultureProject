webpackJsonp([16],{RiPg:function(t,e){},rI90:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("mt-header",{attrs:{title:"选择俱乐部"}},[n("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[n("mt-button",{attrs:{icon:"back"},on:{click:function(e){t.$router.go(-1)}}})],1),t._v(" "),n("mt-button",{attrs:{slot:"right"},on:{click:t.handNext},slot:"right"},[t._v("下一步")])],1),t._v(" "),n("div",{staticClass:"club"},[n("div",{staticClass:"item hd"},[n("span",[t._v("选择俱乐部")]),t._v(" "),n("span",[t._v(t._s((t.list[t.selectedIndex]||{name:"请选择"}).name))])]),t._v(" "),t._l(t.list,function(e,s){return[n("div",{staticClass:"item",class:{active:s===t.selectedIndex},on:{click:function(e){t.handSelect(s)}}},[n("div",[t._v(t._s(e.name))]),t._v(" "),t._m(0,!0)])]})],2)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b",{staticClass:"iconfont icon-success"})])}]};var i=n("VU/8")({name:"",components:{},props:{},data:function(){return{selectedIndex:-1,list:[]}},watch:{},computed:{},created:function(){this.init()},methods:{init:function(){var t=this;this.$http.get(this.$port.MY_CLUB,{params:{auditStatus:2}}).then(function(e){200===e.code&&200===e.code&&(t.list=e.data)})},initData:function(){},handSelect:function(t){this.selectedIndex=t},handNext:function(){this.$store.commit(this.$actionType.set_post_data,{clubId:this.list[this.selectedIndex].clubId}),this.$router.push({path:"edit"})}}},s,!1,function(t){n("RiPg"),n("sV9W")},"data-v-1fcbcf56",null);e.default=i.exports},sV9W:function(t,e){}});
//# sourceMappingURL=16.d32382e678425c3ea102.js.map