(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bcca420"],{"79e9":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-modal",{staticStyle:{"margin-top":"-70px"},attrs:{width:t.modalWidth,visible:t.visible,title:t.title,cancelText:"关闭",wrapClassName:"ant-modal-cust-warp"},on:{ok:t.handleSubmit,cancel:t.close}},[r("a-row",{staticStyle:{padding:"10px",margin:"-10px"},attrs:{gutter:10}},[r("a-col",{attrs:{md:24,sm:24}},[r("div",{staticClass:"table-page-search-wrapper"},[r("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSearch(e)}}},[r("a-row",{attrs:{gutter:24}},[r("a-col",{attrs:{md:6,sm:8}},[r("a-form-item",{attrs:{label:"商品",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[r("a-input",{attrs:{placeholder:"条码、名称、规格、型号"},model:{value:t.queryParam.q,callback:function(e){t.$set(t.queryParam,"q",e)},expression:"queryParam.q"}})],1)],1),r("a-col",{attrs:{md:6,sm:8}},[r("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"类别"}},[r("a-tree-select",{staticStyle:{width:"100%"},attrs:{dropdownStyle:{maxHeight:"200px",overflow:"auto"},"allow-clear":"",treeData:t.categoryTree,placeholder:"请选择类别"},model:{value:t.queryParam.categoryId,callback:function(e){t.$set(t.queryParam,"categoryId",e)},expression:"queryParam.categoryId"}})],1)],1),r("a-col",{attrs:{md:6,sm:8}},[r("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"仓库"}},[r("a-select",{attrs:{placeholder:"选择仓库",dropdownMatchSelectWidth:!1,showSearch:"",optionFilterProp:"children","allow-clear":""},model:{value:t.queryParam.depotId,callback:function(e){t.$set(t.queryParam,"depotId",e)},expression:"queryParam.depotId"}},t._l(t.depotList,(function(e,n){return r("a-select-option",{key:n,attrs:{value:e.id}},[t._v("\n                    "+t._s(e.depotName)+"\n                  ")])})),1)],1)],1),r("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[r("a-col",{attrs:{md:6,sm:24}},[r("a-button",{attrs:{type:"primary"},on:{click:t.onSearch}},[t._v("查询")]),r("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){return t.searchReset(1)}}},[t._v("重置")])],1)],1)],1)],1),r("a-table",{ref:"table",attrs:{scroll:t.scrollTrigger,size:"middle",rowKey:"id",columns:t.columns,dataSource:t.dataSource,pagination:t.ipagination,rowSelection:{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange,type:t.getType},loading:t.loading,customRow:t.rowAction},on:{change:t.handleTableChange}})],1)])],1)],1)},a=[],i=r("a34a"),o=r.n(i),s=r("0fea"),c=r("ca00"),l=r("4ec3"),u=r("b65a"),h=r("2b0e");function d(t,e,r,n,a,i,o){try{var s=t[i](o),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(n,a)}function f(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function o(t){d(i,n,a,o,s,"next",t)}function s(t){d(i,n,a,o,s,"throw",t)}o(void 0)}))}}var p={name:"JSelectMaterialModal",mixins:[u["a"]],components:{},props:["modalWidth","multi","barCode"],data:function(){return{queryParam:{q:"",depotId:""},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},categoryTree:[],columns:[{dataIndex:"mBarCode",title:"条码",width:100,align:"left"},{dataIndex:"name",title:"名称",width:100},{dataIndex:"categoryName",title:"类别",width:80},{dataIndex:"standard",title:"规格",width:80},{dataIndex:"model",title:"型号",width:80},{dataIndex:"unit",title:"单位",width:60},{dataIndex:"sku",title:"多属性",width:100},{dataIndex:"skuStock",title:"多属性库存",width:100},{dataIndex:"stock",title:"商品库存",width:100},{dataIndex:"expand",title:"扩展信息",width:80}],scrollTrigger:{},dataSource:[],selectedRowKeys:[],selectMaterialRows:[],selectMaterialIds:[],title:"选择商品",ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(t,e){return e[0]+"-"+e[1]+" 共"+t+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},departTree:[],depotList:[],visible:!1,form:this.$form.createForm(this),loading:!1,expandedKeys:[]}},computed:{getType:function(){return 1==this.multi?"checkbox":"radio"}},watch:{barCode:{immediate:!0,handler:function(){this.initBarCode()}}},created:function(){this.resetScreenSize(),this.loadTreeData(),this.getDepotList(),this.loadData()},methods:{initBarCode:function(){this.barCode?this.$emit("initComp",this.barCode):this.$emit("initComp","")},loadData:function(){var t=f(o.a.mark((function t(e){var r,n=this;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return 1===e&&(this.ipagination.current=1),this.loading=!0,r=this.getQueryParams(),t.next=5,Object(l["nb"])(r).then((function(t){t&&(n.dataSource=t.rows,n.ipagination.total=t.total)})).finally((function(){n.loading=!1}));case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),loadTreeData:function(){var t=this,e={id:""};Object(l["vb"])(e).then((function(e){if(e){t.categoryTree=[];for(var r=0;r<e.length;r++){var n=e[r];t.categoryTree.push(n)}}}))},resetScreenSize:function(){var t=document.body.clientWidth;this.scrollTrigger=t<500?{x:800}:{}},showModal:function(){this.visible=!0,this.loadData(),this.form.resetFields()},getQueryParams:function(){var t=Object.assign({},this.queryParam,this.isorter);return t.mpList=Object(c["f"])(h["a"].ls.get("materialPropertyList")),t.page=this.ipagination.current,t.rows=this.ipagination.pageSize,Object(c["c"])(t)},getQueryField:function(){for(var t="id,",e=0;e<this.columns.length;e++)t+=","+this.columns[e].dataIndex;return t},searchReset:function(t){var e=this;0!==t&&(e.queryParam={},e.loadData(1)),e.selectedRowKeys=[],e.selectMaterialIds=[]},close:function(){this.searchReset(0),this.visible=!1},handleTableChange:function(t,e,r){Object.keys(r).length>0&&(this.isorter.column=r.field,this.isorter.order="ascend"===r.order?"asc":"desc"),this.ipagination=t,this.loadData()},handleSubmit:function(){var t=this;this.getSelectMaterialRows(),t.$emit("ok",t.selectMaterialRows,t.selectMaterialIds),t.searchReset(0),t.close()},getSelectMaterialRows:function(t){var e=this.dataSource,r="";this.selectMaterialRows=[];for(var n=0,a=e.length;n<a;n++)this.selectedRowKeys.includes(e[n].id)&&(this.selectMaterialRows.push(e[n]),r=r+","+e[n].mBarCode);this.selectMaterialIds=r.substring(1)},getDepotList:function(){var t=this;Object(s["c"])("/depot/findDepotByCurrentUser").then((function(e){200===e.code&&(t.depotList=e.data)}))},onSelectChange:function(t,e){this.selectedRowKeys=t,this.selectionRows=e},onSearch:function(){this.loadData(1)},modalFormOk:function(){this.loadData()},rowAction:function(t,e){var r=this;return{on:{click:function(){var e=[];e.push(t.id),r.selectedRowKeys=e},dblclick:function(){var e=[];e.push(t.id),r.selectedRowKeys=e,r.handleSubmit()}}}}}},g=p,m=(r("c2bd"),r("2877")),y=Object(m["a"])(g,n,a,!1,null,"75426d77",null);e["default"]=y.exports},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(t,e,r,n){var a=e&&e.prototype instanceof g?e:g,i=Object.create(a.prototype),o=new L(n||[]);return i._invoke=P(t,r,o),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var u="suspendedStart",h="suspendedYield",d="executing",f="completed",p={};function g(){}function m(){}function y(){}var w={};w[i]=function(){return this};var v=Object.getPrototypeOf,b=v&&v(v(j([])));b&&b!==r&&n.call(b,i)&&(w=b);var S=y.prototype=g.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function O(t,e){function r(a,i,o,s){var c=l(t[a],t,i);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,o,s)}),(function(t){r("throw",t,o,s)})):e.resolve(h).then((function(t){u.value=t,o(u)}),(function(t){return r("throw",t,o,s)}))}s(c.arg)}var a;function i(t,n){function i(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(i,i):i()}this._invoke=i}function P(t,e,r){var n=u;return function(a,i){if(n===d)throw new Error("Generator is already running");if(n===f){if("throw"===a)throw i;return D()}r.method=a,r.arg=i;while(1){var o=r.delegate;if(o){var s=C(o,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?f:h,c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=f,r.method="throw",r.arg=c.arg)}}}function C(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=l(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,p;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function R(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(R,this),this.reset(!0)}function j(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){while(++a<t.length)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:D}}function D(){return{value:e,done:!0}}return m.prototype=S.constructor=y,y.constructor=m,y[s]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},x(O.prototype),O.prototype[o]=function(){return this},t.AsyncIterator=O,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var o=new O(c(e,r,n,a),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},x(S),S[s]="Generator",S[i]=function(){return this},S.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return s.type="throw",s.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},a032:function(t,e,r){},a34a:function(t,e,r){t.exports=r("96cf")},b65a:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r("ca00"),a=r("0fea"),i=r("2b0e"),o=r("9fb0");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u={data:function(){return{tokenHeader:{Authorization:i["a"].ls.get(o["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(t,e){return e[0]+"-"+e[1]+" 共"+t+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:"",superQueryMatchType:"and",disableMixinCreated:!1,btnEnableList:""}},created:function(){this.disableMixinCreated||(this.loadData(),this.initDictConfig(),this.initActiveBtnStr())},methods:{loadData:function(t){var e=this;if(this.url.list){1===t&&(this.ipagination.current=1);var r=this.getQueryParams();this.loading=!0,Object(a["c"])(this.url.list,r).then((function(t){200===t.code&&(e.dataSource=t.data.rows,e.ipagination.total=t.data.total),510===t.code&&e.$message.warning(t.data),e.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){},handleSuperQuery:function(t,e){t?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(t),this.superQueryMatchType=e):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData(1)},getQueryParams:function(){var t={};this.superQueryParams&&(t["superQueryParams"]=encodeURI(this.superQueryParams),t["superQueryMatchType"]=this.superQueryMatchType);var e={};e.search=JSON.stringify(this.queryParam);var r=Object.assign(t,e,this.isorter,this.filters);return r.field=this.getQueryField(),r.currentPage=this.ipagination.current,r.pageSize=this.ipagination.pageSize,Object(n["c"])(r)},getQueryField:function(){var t="id,";return this.columns.forEach((function(e){t+=","+e.dataIndex})),t},onSelectChange:function(t,e){this.selectedRowKeys=t,this.selectionRows=e},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchSetStatus:function(t){if(this.url.batchSetStatusUrl)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",r=0;r<this.selectedRowKeys.length;r++)e+=this.selectedRowKeys[r]+",";var n=this;this.$confirm({title:"确认操作",content:"是否操作选中数据?",onOk:function(){n.loading=!0,Object(a["f"])(n.url.batchSetStatusUrl,{status:t,ids:e}).then((function(t){200===t.code?(n.loadData(),n.onClearSelected()):n.$message.warning(t.data.message)})).finally((function(){n.loading=!1}))}})}else this.$message.error("请设置url.batchSetStatusUrl属性!")},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var t="",e=0;e<this.selectedRowKeys.length;e++)t+=this.selectedRowKeys[e]+",";var r=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){r.loading=!0,Object(a["a"])(r.url.deleteBatch,{ids:t}).then((function(t){200===t.code?(r.loadData(),r.onClearSelected()):r.$message.warning(t.data.message)})).finally((function(){r.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(t){if(this.url.delete){var e=this;Object(a["a"])(e.url.delete,{id:t}).then((function(t){200===t.code?e.loadData():e.$message.warning(t.data.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(t){this.$refs.modalForm.edit(t),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(t,e,r){Object.keys(r).length>0&&(this.isorter.column=r.field,this.isorter.order="ascend"==r.order?"asc":"desc"),this.ipagination=t,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},getPopupField:function(t){return t.split(",")[0]},modalFormOk:function(){this.loadData()},handleDetail:function(t,e){this.$refs.modalDetail.show(t,e),this.$refs.modalDetail.title=e+"-详情"},handleExportXls2:function(){var t=encodeURI(JSON.stringify(this.getQueryParams())),e="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(t);window.location.href=e},handleExportXls:function(t){var e=this;t&&"string"==typeof t||(t="导出文件");var r=c({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(r["selections"]=this.selectedRowKeys.join(",")),Object(a["b"])(this.url.exportXlsUrl,r).then((function(r){if(r)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([r],{type:"application/vnd.ms-excel"}),t+".xls");else{var n=window.URL.createObjectURL(new Blob([r],{type:"application/vnd.ms-excel"})),a=document.createElement("a");a.style.display="none",a.href=n,a.setAttribute("download",t+".xls"),document.body.appendChild(a),a.click(),document.body.removeChild(a),window.URL.revokeObjectURL(n)}else e.$message.warning("文件下载失败")}))},handleImportExcel:function(t){t.file.status,"done"===t.file.status?t.file.response?(200===t.file.response.code?this.$message.success(t.file.response.data||"".concat(t.file.name," 文件上传成功")):this.$message.warning(t.file.response.data),this.loadData()):this.$message.error("".concat(t.file.name," ").concat(t.file.response.data,".")):"error"===t.file.status&&this.$message.error("文件上传失败: ".concat(t.file.msg," "))},getImgView:function(t){return t&&t.indexOf(",")>0&&(t=t.substring(0,t.indexOf(","))),Object(a["d"])(t)},uploadFile:function(t){if(t){t.indexOf(",")>0&&(t=t.substring(0,t.indexOf(",")));var e=Object(a["d"])(t);window.open(e)}else this.$message.warning("未知的文件")},initActiveBtnStr:function(){var t=i["a"].ls.get("funId"),e=i["a"].ls.get("winBtnStrList");if(this.btnEnableList="",t&&e)for(var r=0;r<e.length;r++)e[r].funId==t&&e[r].btnStr&&(this.btnEnableList=e[r].btnStr)}}}},c2bd:function(t,e,r){"use strict";var n=r("a032"),a=r.n(n);a.a}}]);