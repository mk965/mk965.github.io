(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bf6b20b","chunk-409bb0c0","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0df437","chunk-2d0bdf09"],{"2dab":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-date-picker",{attrs:{disabled:e.disabled||e.readOnly,placeholder:e.placeholder,value:e.momVal,showTime:e.showTime,format:e.dateFormat,getCalendarContainer:e.getCalendarContainer},on:{change:e.handleDateChange}})},n=[],i=a("c1df"),l=a.n(i),o={name:"JDate",props:{placeholder:{type:String,default:"",required:!1},value:{type:String,required:!1},dateFormat:{type:String,default:"YYYY-MM-DD HH:mm:ss",required:!1},triggerChange:{type:Boolean,required:!1,default:!1},readOnly:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},showTime:{type:Boolean,required:!1,default:!1},getCalendarContainer:{type:Function,default:function(e){return e.parentNode}}},data:function(){var e=this.value;return{decorator:"",momVal:e?l()(e,this.dateFormat):null}},watch:{value:function(e){this.momVal=e?l()(e,this.dateFormat):null}},methods:{moment:l.a,handleDateChange:function(e,t){this.$emit("change",t)}},model:{prop:"value",event:"change"}},s=o,c=a("2877"),d=Object(c["a"])(s,r,n,!1,null,null,null);t["default"]=d.exports},"512f":function(e,t,a){"use strict";var r=a("d9eb"),n=a.n(r);n.a},"648d":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{staticStyle:{top:"5%",height:"100%","overflow-y":"hidden"},attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭",wrapClassName:"ant-modal-cust-warp"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("template",{slot:"footer"},[e.isReadOnly?a("a-button",{key:"back",on:{click:e.handleCancel}},[e._v("\n      关闭\n    ")]):e._e()],1),a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["supplier",e.validatorRules.supplier],expression:"[ 'supplier', validatorRules.supplier]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入名称"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"联系人"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["contacts"],expression:"[ 'contacts' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入联系人"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"手机号码"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["telephone"],expression:"[ 'telephone' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入手机号码"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"电子邮箱"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["email"],expression:"[ 'email' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入电子邮箱"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"联系电话"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["phoneNum"],expression:"[ 'phoneNum' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入联系电话"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"传真"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["fax"],expression:"[ 'fax' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入传真"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"期初应收"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["beginNeedGet"],expression:"[ 'beginNeedGet' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入期初应收"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"期末应收"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["allNeedGet"],expression:"[ 'allNeedGet' ]",modifiers:{trim:!0}}],attrs:{readOnly:!0}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"纳税人识别号"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["taxNum"],expression:"[ 'taxNum' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入纳税人识别号"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"税率(%)"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["taxRate"],expression:"[ 'taxRate' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入税率(%)"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"开户行"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["bankName"],expression:"[ 'bankName' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入开户行"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"账号"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["accountNumber"],expression:"[ 'accountNumber' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入账号"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"地址"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["address"],expression:"[ 'address' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入地址"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"备注"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["description"],expression:"[ 'description' ]",modifiers:{trim:!0}}],attrs:{rows:2,placeholder:"请输入备注"}})],1)],1)],1)],1)],2)},n=[],i=a("88bc"),l=a.n(i),o=a("4ec3"),s={name:"CustomerModal",data:function(){return{title:"操作",visible:!1,model:{},isReadOnly:!1,labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{supplier:{rules:[{required:!0,message:"请输入名称!"},{min:2,max:30,message:"长度在 2 到 30 个字符",trigger:"blur"},{validator:this.validateSupplierName}]}}}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(l()(t.model,"supplier","contacts","telephone","email","telephone","phoneNum","fax","beginNeedGet","beginNeedPay","allNeedGet","allNeedPay","taxNum","taxRate","bankName","accountNumber","address","description"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,r){if(!a){t.confirmLoading=!0;var n,i=Object.assign(e.model,r);if(e.model.beginNeedGet&&e.model.beginNeedPay)return t.$message.warn("期初应收和期初应付不能同时输入"),void(t.confirmLoading=!1);i.type="客户",n=e.model.id?Object(o["T"])(i):Object(o["i"])(i),n.then((function(e){200===e.code?t.$emit("ok"):t.$message.warning(e.data.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},validateSupplierName:function(e,t,a){var r={name:t,id:this.model.id?this.model.id:0};Object(o["E"])(r).then((function(e){e&&200===e.code?e.data.status?a("名称已经存在"):a():a(e.data)}))}}},c=s,d=a("2877"),u=Object(d["a"])(c,r,n,!1,null,"65c941da",null);t["default"]=u.exports},"815c":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:24}},[a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"名称",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{attrs:{placeholder:"请输入名称查询"},model:{value:e.queryParam.supplier,callback:function(t){e.$set(e.queryParam,"supplier",t)},expression:"queryParam.supplier"}})],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"手机号码",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{attrs:{placeholder:"请输入手机号码查询"},model:{value:e.queryParam.telephone,callback:function(t){e.$set(e.queryParam,"telephone",t)},expression:"queryParam.telephone"}})],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"联系电话",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{attrs:{placeholder:"请输入联系电话查询"},model:{value:e.queryParam.phonenum,callback:function(t){e.$set(e.queryParam,"phonenum",t)},expression:"queryParam.phonenum"}})],1)],1),a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-button",{attrs:{type:"primary"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.searchReset}},[e._v("重置")])],1)],1)],1)],1)],1),a("div",{staticClass:"table-operator",staticStyle:{"margin-top":"5px"}},[e.btnEnableList.indexOf(1)>-1?a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]):e._e(),e.btnEnableList.indexOf(1)>-1?a("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[a("a-popover",{attrs:{title:"导入注意点"}},[a("template",{slot:"content"},[a("p",[e._v("期初应收、期初应付、税率均为数值且要大于0；"),a("br"),e._v("另外期初应收、期初应付不能同时输入")])]),a("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],2)],1):e._e(),a("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("客户信息")}}},[e._v("导出")]),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[e.btnEnableList.indexOf(1)>-1?a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("删除")],1):e._e(),e.btnEnableList.indexOf(1)>-1?a("a-menu-item",{key:"2",on:{click:function(t){return e.batchSetStatus(!0)}}},[a("a-icon",{attrs:{type:"check-square"}}),e._v("启用")],1):e._e(),e.btnEnableList.indexOf(1)>-1?a("a-menu-item",{key:"3",on:{click:function(t){return e.batchSetStatus(!1)}}},[a("a-icon",{attrs:{type:"close-square"}}),e._v("禁用")],1):e._e()],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v("\n            批量操作 "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,r){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(r)}}},[e._v("编辑")]),e.btnEnableList.indexOf(1)>-1?a("a-divider",{attrs:{type:"vertical"}}):e._e(),e.btnEnableList.indexOf(1)>-1?a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(r.id)}}},[a("a",[e._v("删除")])]):e._e()],1)}},{key:"customRenderFlag",fn:function(t){return[t?a("a-tag",{attrs:{color:"green"}},[e._v("启用")]):e._e(),t?e._e():a("a-tag",{attrs:{color:"orange"}},[e._v("禁用")])]}}])})],1),a("customer-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)],1)],1)},n=[],i=a("648d"),l=a("b65a"),o=a("2dab"),s={name:"CustomerList",mixins:[l["a"]],components:{CustomerModal:i["default"],JDate:o["default"]},data:function(){return{labelCol:{span:5},wrapperCol:{span:18,offset:1},queryParam:{supplier:"",type:"客户",telephone:"",phonenum:""},columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"名称",dataIndex:"supplier",width:150},{title:"联系人",dataIndex:"contacts",width:70,align:"center"},{title:"手机号码",dataIndex:"telephone",width:100,align:"center"},{title:"联系电话",dataIndex:"phoneNum",width:100,align:"center"},{title:"期初应收",dataIndex:"beginNeedGet",width:80,align:"center"},{title:"期末应收",dataIndex:"allNeedGet",width:80,align:"center"},{title:"税率(%)",dataIndex:"taxRate",width:80,align:"center"},{title:"状态",dataIndex:"enabled",width:70,align:"center",scopedSlots:{customRender:"customRenderFlag"}},{title:"操作",dataIndex:"action",width:200,align:"center",scopedSlots:{customRender:"action"}}],url:{list:"/supplier/list",delete:"/supplier/delete",deleteBatch:"/supplier/deleteBatch",importExcelUrl:"/supplier/importExcel",exportXlsUrl:"/supplier/exportExcel",batchSetStatusUrl:"/supplier/batchSetStatus"}}},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"]).concat(this.url.importExcelUrl)}},methods:{searchReset:function(){this.queryParam={type:"客户"},this.loadData(1)},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1,-1===this.btnEnableList.indexOf(1)&&(this.$refs.modalForm.isReadOnly=!0)}}},c=s,d=(a("512f"),a("2877")),u=Object(d["a"])(c,r,n,!1,null,"92c5320e",null);t["default"]=u.exports},"88bc":function(e,t,a){(function(t){var a=1/0,r=9007199254740991,n="[object Arguments]",i="[object Function]",l="[object GeneratorFunction]",o="[object Symbol]",s="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,d=s||c||Function("return this")();function u(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function p(e,t){var a=-1,r=e?e.length:0,n=Array(r);while(++a<r)n[a]=t(e[a],a,e);return n}function m(e,t){var a=-1,r=t.length,n=e.length;while(++a<r)e[n+a]=t[a];return e}var h=Object.prototype,f=h.hasOwnProperty,b=h.toString,g=d.Symbol,y=h.propertyIsEnumerable,w=g?g.isConcatSpreadable:void 0,v=Math.max;function C(e,t,a,r,n){var i=-1,l=e.length;a||(a=k),n||(n=[]);while(++i<l){var o=e[i];t>0&&a(o)?t>1?C(o,t-1,a,r,n):m(n,o):r||(n[n.length]=o)}return n}function x(e,t){return e=Object(e),O(e,t,(function(t,a){return a in e}))}function O(e,t,a){var r=-1,n=t.length,i={};while(++r<n){var l=t[r],o=e[l];a(o,l)&&(i[l]=o)}return i}function S(e,t){return t=v(void 0===t?e.length-1:t,0),function(){var a=arguments,r=-1,n=v(a.length-t,0),i=Array(n);while(++r<n)i[r]=a[t+r];r=-1;var l=Array(t+1);while(++r<t)l[r]=a[r];return l[t]=i,u(e,this,l)}}function k(e){return R(e)||j(e)||!!(w&&e&&e[w])}function N(e){if("string"==typeof e||L(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}function j(e){return P(e)&&f.call(e,"callee")&&(!y.call(e,"callee")||b.call(e)==n)}var R=Array.isArray;function $(e){return null!=e&&F(e.length)&&!_(e)}function P(e){return D(e)&&$(e)}function _(e){var t=E(e)?b.call(e):"";return t==i||t==l}function F(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}function E(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function D(e){return!!e&&"object"==typeof e}function L(e){return"symbol"==typeof e||D(e)&&b.call(e)==o}var q=S((function(e,t){return null==e?{}:x(e,p(C(t,1),N))}));e.exports=q}).call(this,a("c8ba"))},b65a:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a("ca00"),n=a("0fea"),i=a("2b0e"),l=a("9fb0");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var d={data:function(){return{tokenHeader:{Authorization:i["a"].ls.get(l["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:"",superQueryMatchType:"and",disableMixinCreated:!1,btnEnableList:""}},created:function(){this.disableMixinCreated||(this.loadData(),this.initDictConfig(),this.initActiveBtnStr())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(n["c"])(this.url.list,a).then((function(e){200===e.code&&(t.dataSource=e.data.rows,t.ipagination.total=e.data.total),510===e.code&&t.$message.warning(e.data),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){},handleSuperQuery:function(e,t){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e),this.superQueryMatchType=t):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData(1)},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams),e["superQueryMatchType"]=this.superQueryMatchType);var t={};t.search=JSON.stringify(this.queryParam);var a=Object.assign(e,t,this.isorter,this.filters);return a.field=this.getQueryField(),a.currentPage=this.ipagination.current,a.pageSize=this.ipagination.pageSize,Object(r["c"])(a)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchSetStatus:function(e){if(this.url.batchSetStatusUrl)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var t="",a=0;a<this.selectedRowKeys.length;a++)t+=this.selectedRowKeys[a]+",";var r=this;this.$confirm({title:"确认操作",content:"是否操作选中数据?",onOk:function(){r.loading=!0,Object(n["f"])(r.url.batchSetStatusUrl,{status:e,ids:t}).then((function(e){200===e.code?(r.loadData(),r.onClearSelected()):r.$message.warning(e.data.message)})).finally((function(){r.loading=!1}))}})}else this.$message.error("请设置url.batchSetStatusUrl属性!")},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){a.loading=!0,Object(n["a"])(a.url.deleteBatch,{ids:e}).then((function(e){200===e.code?(a.loadData(),a.onClearSelected()):a.$message.warning(e.data.message)})).finally((function(){a.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(n["a"])(t.url.delete,{id:e}).then((function(e){200===e.code?t.loadData():t.$message.warning(e.data.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},getPopupField:function(e){return e.split(",")[0]},modalFormOk:function(){this.loadData()},handleDetail:function(e,t){this.$refs.modalDetail.show(e,t),this.$refs.modalDetail.title=t+"-详情"},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var a=s({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(a["selections"]=this.selectedRowKeys.join(",")),Object(n["b"])(this.url.exportXlsUrl,a).then((function(a){if(a)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([a],{type:"application/vnd.ms-excel"}),e+".xls");else{var r=window.URL.createObjectURL(new Blob([a],{type:"application/vnd.ms-excel"})),n=document.createElement("a");n.style.display="none",n.href=r,n.setAttribute("download",e+".xls"),document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(r)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){e.file.status,"done"===e.file.status?e.file.response?(200===e.file.response.code?this.$message.success(e.file.response.data||"".concat(e.file.name," 文件上传成功")):this.$message.warning(e.file.response.data),this.loadData()):this.$message.error("".concat(e.file.name," ").concat(e.file.response.data,".")):"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),Object(n["d"])(e)},uploadFile:function(e){if(e){e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(",")));var t=Object(n["d"])(e);window.open(t)}else this.$message.warning("未知的文件")},initActiveBtnStr:function(){var e=i["a"].ls.get("funId"),t=i["a"].ls.get("winBtnStrList");if(this.btnEnableList="",e&&t)for(var a=0;a<t.length;a++)t[a].funId==e&&t[a].btnStr&&(this.btnEnableList=t[a].btnStr)}}}},d9eb:function(e,t,a){}}]);