(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-031aa3b9","chunk-7f6deb78","chunk-2d221f48"],{"0673":function(t,c,e){"use strict";e.r(c);var s=function(){var t=this,c=t.$createElement,e=t._self._c||c;return e("div",{staticClass:"exception"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:t.config[t.type].img}})]),e("div",{staticClass:"content"},[e("h1",[t._v(t._s(t.config[t.type].title))]),e("div",{staticClass:"desc"},[t._v(t._s(t.config[t.type].desc))]),e("div",{staticClass:"action"},[e("a-button",{attrs:{type:"primary"},on:{click:t.handleToHome}},[t._v("返回首页")])],1)])])},a=[],n=e("cd0a"),i={name:"Exception",props:{type:{type:String,default:"404"}},data:function(){return{config:n["default"]}},methods:{handleToHome:function(){this.$router.push({name:"dashboard"})}}},o=i,r=(e("ccc4"),e("2877")),l=Object(r["a"])(o,s,a,!1,null,"6d5e2f4a",null);c["default"]=l.exports},"6c05":function(t,c,e){"use strict";e.r(c);var s=function(){var t=this,c=t.$createElement,e=t._self._c||c;return e("exception-page",{attrs:{type:"500"}})},a=[],n=e("0673"),i={components:{ExceptionPage:n["default"]}},o=i,r=e("2877"),l=Object(r["a"])(o,s,a,!1,null,"58acec66",null);c["default"]=l.exports},c20d:function(t,c,e){},ccc4:function(t,c,e){"use strict";var s=e("c20d"),a=e.n(s);a.a},cd0a:function(t,c,e){"use strict";e.r(c);var s={403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403",desc:"抱歉，你无权访问该页面"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404",desc:"抱歉，你访问的页面不存在或仍在开发中"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500",desc:"抱歉，服务器出错了"}};c["default"]=s}}]);