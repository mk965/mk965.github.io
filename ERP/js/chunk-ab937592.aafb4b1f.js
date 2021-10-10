(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab937592"],{"697a":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{attrs:{bordered:!1}},[a("j-modal",{staticStyle:{top:"5%",height:"100%","overflow-y":"hidden"},attrs:{title:t.title,width:t.width,visible:t.visible,confirmLoading:t.confirmLoading,maskClosable:!1,keyboard:!1,forceRender:!0,switchFullscreen:"",wrapClassName:"ant-modal-cust-warp"},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("a-spin",{attrs:{spinning:t.confirmLoading}},[a("a-form",{attrs:{form:t.form}},[a("a-row",{staticClass:"form-row",attrs:{gutter:24}},[a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"会员卡号"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["organId"],expression:"[ 'organId' ]"}],attrs:{placeholder:"选择会员卡号",dropdownMatchSelectWidth:!1,showSearch:"",optionFilterProp:"children"}},t._l(t.retailList,(function(e,i){return a("a-select-option",{key:i,attrs:{value:e.id}},[t._v("\n                  "+t._s(e.supplier)+"\n                ")])})),1)],1)],1),a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"单据日期"}},[a("j-date",{directives:[{name:"decorator",rawName:"v-decorator",value:["operTime",t.validatorRules.operTime],expression:"['operTime', validatorRules.operTime]"}],attrs:{"show-time":!0}})],1)],1),a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"单据编号"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["number"],expression:"[ 'number' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入单据编号",readOnly:!0}})],1)],1),a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"关联单据"}},[a("a-input-search",{directives:[{name:"decorator",rawName:"v-decorator",value:["linkNumber"],expression:"[ 'linkNumber' ]"}],attrs:{placeholder:"请选择关联单据",readOnly:!0},on:{search:t.onSearchLinkNumber}})],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:24}},[a("a-col",{attrs:{lg:18,md:12,sm:24}},[a("j-editable-table",{ref:t.refKeys[0],attrs:{loading:t.materialTable.loading,columns:t.materialTable.columns,dataSource:t.materialTable.dataSource,maxHeight:300,rowNumber:!1,rowSelection:!0,actionButton:!0},on:{valueChange:t.onValueChange,added:t.onAdded,deleted:t.onDeleted}})],1),a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-row",{staticClass:"form-row",attrs:{gutter:24}},[a("a-col",{attrs:{lg:24,md:6,sm:6}},[a("br"),a("br")]),a("a-col",{attrs:{lg:24,md:6,sm:6}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"实付金额"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["changeAmount"],expression:"[ 'changeAmount' ]",modifiers:{trim:!0}}],style:{color:"purple"},attrs:{readOnly:!0}})],1)],1),a("a-col",{attrs:{lg:24,md:6,sm:6}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"付款金额"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["getAmount"],expression:"[ 'getAmount' ]",modifiers:{trim:!0}}],style:{color:"red"},attrs:{defaultValue:"0"},on:{keyup:t.onKeyUpGetAmount}})],1)],1),a("a-col",{attrs:{lg:24,md:6,sm:6}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"找零"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["backAmount"],expression:"[ 'backAmount' ]",modifiers:{trim:!0}}],style:{color:"green"},attrs:{readOnly:!0,defaultValue:"0"}})],1)],1),a("a-col",{attrs:{lg:24,md:6,sm:6}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"付款账户"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["accountId",t.validatorRules.accountId],expression:"[ 'accountId', validatorRules.accountId ]"}],attrs:{placeholder:"选择付款账户",dropdownMatchSelectWidth:!1}},t._l(t.accountList,(function(e,i){return a("a-select-option",{key:i,attrs:{value:e.id}},[t._v("\n                      "+t._s(e.name)+"\n                    ")])})),1)],1)],1)],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:24}},[a("a-col",{attrs:{lg:24,md:24,sm:24}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:{xs:{span:24},sm:{span:24}},label:""}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["remark"],expression:"[ 'remark' ]"}],staticStyle:{"margin-top":"8px"},attrs:{rows:2,placeholder:"请输入备注"}})],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:24}},[a("a-col",{attrs:{lg:6,md:12,sm:24}},[a("a-form-item",{attrs:{labelCol:t.labelCol,wrapperCol:t.wrapperCol,label:"附件"}},[a("j-upload",{attrs:{bizPath:"bill"},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}})],1)],1)],1)],1)],1)],1),a("link-bill-list",{ref:"linkBillList",on:{ok:t.linkBillListOk}})],1)},o=[],n=a("88bc"),r=a.n(n),l=a("7c64"),s=a("e2e0"),c=a("d0ed"),d=a("80fd"),u=a("ca00"),m=a("4ec3"),h=a("0fea"),f=a("cf74"),p=a("2dab"),b=a("2b0e"),y={name:"RetailBackModal",mixins:[c["a"],d["BillModalMixin"]],components:{LinkBillList:l["default"],JUpload:f["default"],JDate:p["default"]},data:function(){return{title:"操作",width:"1600px",moreStatus:!1,addDefaultRowNum:1,visible:!1,operTimeStr:"",prefixNo:"LSTH",fileList:[],model:{},labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}},refKeys:["materialDataTable"],activeKey:"materialDataTable",materialTable:{loading:!1,dataSource:[],columns:[{title:"仓库名称",key:"depotId",width:"7%",type:s["a"].select,placeholder:"请选择${title}",options:[],allowSearch:!0,validateRules:[{required:!0,message:"${title}不能为空"}]},{title:"条码",key:"barCode",width:"12%",type:s["a"].popupJsh,multi:!0,validateRules:[{required:!0,message:"${title}不能为空"}]},{title:"名称",key:"name",width:"8%",type:s["a"].input,readonly:!0},{title:"规格",key:"standard",width:"5%",type:s["a"].input,readonly:!0},{title:"型号",key:"model",width:"5%",type:s["a"].input,readonly:!0},{title:"扩展信息",key:"materialOther",width:"7%",type:s["a"].input,readonly:!0},{title:"库存",key:"stock",width:"5%",type:s["a"].input,readonly:!0},{title:"单位",key:"unit",width:"4%",type:s["a"].input,readonly:!0},{title:"多属性",key:"sku",width:"5%",type:s["a"].input,readonly:!0},{title:"数量",key:"operNumber",width:"5%",type:s["a"].inputNumber,statistics:!0,validateRules:[{required:!0,message:"${title}不能为空"}]},{title:"单价",key:"unitPrice",width:"5%",type:s["a"].inputNumber},{title:"金额",key:"allPrice",width:"5%",type:s["a"].inputNumber,statistics:!0},{title:"备注",key:"remark",width:"5%",type:s["a"].input}]},confirmLoading:!1,validatorRules:{operTime:{rules:[{required:!0,message:"请输入单据日期!"}]},accountId:{rules:[{required:!0,message:"请选择结算账户!"}]}},url:{add:"/depotHead/addDepotHeadAndDetail",edit:"/depotHead/updateDepotHeadAndDetail",detailList:"/depotItem/getDetailList"}}},created:function(){},methods:{editAfter:function(){var t=this;if("add"===this.action)this.addInit(this.prefixNo),this.fileList=[];else{this.model.operTime=this.model.operTimeStr,this.model.getAmount=this.model.changeAmount,this.model.backAmount=0,this.fileList=this.model.fileName,this.$nextTick((function(){t.form.setFieldsValue(r()(t.model,"organId","operTime","number","linkNumber","remark","discount","discountMoney","discountLastMoney","otherMoney","accountId","changeAmount","getAmount","backAmount"))}));var e={headerId:this.model.id,mpList:Object(u["f"])(b["a"].ls.get("materialPropertyList"))},a=(this.readOnly,this.url.detailList);this.requestSubTableData(a,e,this.materialTable)}this.initRetail(),this.initDepot(),this.initAccount()},classifyIntoFormData:function(t){var e=0,a=Object.assign(this.model,t.formValue),i=t.tablesValue[0].values;a.type="入库",a.subType="零售退货",a.defaultNumber=a.number;var o=!0,n=!1,r=void 0;try{for(var l,s=i[Symbol.iterator]();!(o=(l=s.next()).done);o=!0){var c=l.value;e+=c.allPrice-0}}catch(d){n=!0,r=d}finally{try{o||null==s.return||s.return()}finally{if(n)throw r}}return a.totalPrice=0-e,a.changeAmount=0-a.changeAmount,this.fileList&&this.fileList.length>0&&(a.fileName=this.fileList),this.model.id&&(a.id=this.model.id),{info:JSON.stringify(a),rows:JSON.stringify(i)}},initAccount:function(){var t=this;Object(m["ib"])({}).then((function(e){e&&200===e.code&&(t.accountList=e.data.accountList)}))},autoChangePrice:function(t){var e=this,a=t.statisticsColumns.allPrice;this.$nextTick((function(){e.form.setFieldsValue({changeAmount:a,getAmount:a,backAmount:0})}))},onKeyUpGetAmount:function(t){var e=this,a=t.target.value,i=this.form.getFieldValue("changeAmount")-0,o=(a-i).toFixed(2)-0;this.$nextTick((function(){e.form.setFieldsValue({backAmount:o})}))},onSearchLinkNumber:function(){this.$refs.linkBillList.show("出库","零售","会员","0"),this.$refs.linkBillList.title="选择零售出库"},linkBillListOk:function(t){var e=this;if(t&&t.length>0){var a=t[0];this.$nextTick((function(){e.form.setFieldsValue({organId:a.organId,linkNumber:a.number,remark:a.remark,getAmount:a.totalPrice,changeAmount:a.totalPrice,backAmount:0})}));var i={headerId:a.id,mpList:Object(u["f"])(b["a"].ls.get("materialPropertyList"))};this.requestSubTableDataEx(this.url.detailList,i,this.materialTable)}},requestSubTableDataEx:function(t,e,a,i){a.loading=!0,Object(h["c"])(t,e).then((function(t){if(t&&200===t.code){for(var e=t.data.rows,o=[],n=0;n<e.length;n++){var r=e[n];r.taxMoney=0,r.taxLastMoney=r.allPrice,o.push(r)}a.dataSource=o,"function"===typeof i&&i(t)}})).finally((function(){a.loading=!1}))}}},g=y,v=a("2877"),w=Object(v["a"])(g,i,o,!1,null,"801c2f48",null);e["default"]=w.exports},"7c64":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{staticStyle:{top:"5%",height:"100%","overflow-y":"hidden"},attrs:{title:t.title,width:1e3,visible:t.visible,cancelText:"关闭",wrapClassName:"ant-modal-cust-warp"},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("a-table",{ref:"table",attrs:{bordered:"",size:"middle",rowKey:"id",columns:t.columns,dataSource:t.dataSource,pagination:t.ipagination,loading:t.loading,rowSelection:{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange,type:t.getType},customRow:t.rowAction},on:{change:t.handleTableChange}})],1)},o=[],n=a("b65a"),r={name:"LinkBillList",mixins:[n["a"]],data:function(){return{title:"操作",visible:!1,disableMixinCreated:!0,selectedRowKeys:[],selectionRows:[],selectBillRows:[],selectBillIds:"",queryParam:{number:"",searchMaterial:"",type:"",subType:"",status:""},columns:[{title:"#",dataIndex:"",key:"rowIndex",width:40,align:"center",customRender:function(t,e,a){return parseInt(a)+1}},{title:"",dataIndex:"organName",width:120},{title:"单据编号",dataIndex:"number",width:150},{title:"商品信息",dataIndex:"materialsList",width:220,ellipsis:!0,customRender:function(t,e,a){if(t)return t.replace(",","，")}},{title:"单据日期",dataIndex:"operTimeStr",width:145},{title:"操作员",dataIndex:"userName",width:60},{title:"金额合计",dataIndex:"totalPrice",width:70}],url:{list:"/depotHead/list"}}},computed:{getType:function(){return"radio"}},created:function(){},methods:{show:function(t,e,a,i){this.queryParam.type=t,this.queryParam.subType=e,this.queryParam.status=i,this.columns[1].title=a,this.model=Object.assign({},{}),this.visible=!0,this.loadData(1)},close:function(){this.$emit("close"),this.visible=!1},handleCancel:function(){this.close()},onSelectChange:function(t,e){this.selectedRowKeys=t,this.selectionRows=e},handleOk:function(){this.getSelectBillRows(),this.$emit("ok",this.selectBillRows),this.close()},getSelectBillRows:function(){var t=this.dataSource,e="";this.selectBillRows=[];for(var a=0,i=t.length;a<i;a++)this.selectedRowKeys.includes(t[a].id)&&(this.selectBillRows.push(t[a]),e=e+","+t[a].id);this.selectBillIds=e.substring(1)},rowAction:function(t,e){var a=this;return{on:{click:function(){var e=[];e.push(t.id),a.selectedRowKeys=e},dblclick:function(){var e=[];e.push(t.id),a.selectedRowKeys=e,a.handleOk()}}}}}},l=r,s=a("2877"),c=Object(s["a"])(l,i,o,!1,null,"8d45a566",null);e["default"]=c.exports},"80fd":function(t,e,a){"use strict";a.r(e),a.d(e,"BillModalMixin",(function(){return l}));a("e2e0");var i=a("4ec3"),o=a("0fea"),n=a("ca00"),r=a("2b0e"),l={data:function(){return{action:"",manyAccountBtnStatus:!1,supList:[],cusList:[],retailList:[],personList:{options:[],value:""},depotList:[],accountList:[],accountIdList:[],accountMoneyList:[],billUnitPirce:"",spans:{labelCol1:{span:2},wrapperCol1:{span:22},labelCol1_5:{span:3},wrapperCol1_5:{span:21},labelCol2:{span:4},wrapperCol2:{span:20},labelCol3:{span:6},wrapperCol3:{span:18},labelCol6:{span:12},wrapperCol6:{span:12}}}},created:function(){},computed:{readOnly:function(){return"add"!==this.action&&"edit"!==this.action}},methods:{addInit:function(t){var e=this;Object(o["c"])("/sequence/buildNumber").then((function(a){a&&200===a.code&&e.form.setFieldsValue({number:t+a.data.defaultNumber})})),this.$nextTick((function(){e.form.setFieldsValue({operTime:Object(n["g"])(),discount:0,discountMoney:0,discountLastMoney:0,otherMoney:0,changeAmount:0,debt:0})})),this.$nextTick((function(){Object(i["ib"])({}).then((function(t){if(t&&200===t.code){var a=!0,i=!1,o=void 0;try{for(var n,r=t.data.accountList[Symbol.iterator]();!(a=(n=r.next()).done);a=!0){var l=n.value;l.isDefault&&e.form.setFieldsValue({accountId:l.id})}}catch(s){i=!0,o=s}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}}}))})),this.accountIdList=[],this.accountMoneyList=[],this.manyAccountBtnStatus=!1},initSupplier:function(){var t=this;Object(i["db"])({}).then((function(e){e&&(t.supList=e)}))},initCustomer:function(){var t=this;Object(i["bb"])({}).then((function(e){e&&(t.cusList=e)}))},initRetail:function(){var t=this;Object(i["cb"])({}).then((function(e){e&&(t.retailList=e)}))},initSalesman:function(){var t=this;Object(i["pb"])({type:1}).then((function(e){e&&(t.personList.options=e)}))},initDepot:function(){var t=this;Object(o["c"])("/depot/findDepotByCurrentUser").then((function(e){if(200===e.code){var a=e.data,i=!0,o=!1,n=void 0;try{for(var r,l=t.materialTable.columns[Symbol.iterator]();!(i=(r=l.next()).done);i=!0){var s=r.value;if("depotId"==s.key||"anotherDepotId"==s.key){s.options=[];for(var c=0;c<a.length;c++){var d={};d.value=a[c].id+"",d.text=a[c].depotName,d.title=a[c].depotName,s.options.push(d)}}}}catch(u){o=!0,n=u}finally{try{i||null==l.return||l.return()}finally{if(o)throw n}}}}))},initAccount:function(){var t=this;Object(i["ib"])({}).then((function(e){if(e&&200===e.code){var a=e.data.accountList;a.splice(0,0,{id:0,name:"多账户"}),t.accountList=a}}))},handleManyAccount:function(){this.selectAccount(0)},selectAccount:function(t){0===t?(this.$refs.manyAccountModalForm.edit(this.accountIdList,this.accountMoneyList),this.$refs.manyAccountModalForm.title="多账户结算",this.manyAccountBtnStatus=!0):(this.accountIdList=[],this.accountMoneyList=[],this.manyAccountBtnStatus=!1)},manyAccountModalFormOk:function(t,e,a){var i=this;this.accountIdList=t,this.accountMoneyList=e;var o=this.form.getFieldValue("discountLastMoney")-0,n=this.form.getFieldValue("otherMoney")-0,r=(o+n-a).toFixed(2);this.$nextTick((function(){i.form.setFieldsValue({changeAmount:a,debt:r})}))},onAdded:function(t){var e=t.row,a=t.target;Object(o["c"])("/depot/findDepotByCurrentUser").then((function(t){if(200===t.code)for(var i=t.data,o=0;o<i.length;o++)i[o].isDefault&&a.setValues([{rowKey:e.id,values:{depotId:i[o].id+""}}])}))},onValueChange:function(t){var e,a,o,l,s,c,d,u,m=this,h=this,f=(t.type,t.row),p=t.column,b=t.value,y=t.target;switch(p.key){case"depotId":f.barCode&&h.getStockByDepotBarCode(f,y);break;case"barCode":e={barCode:b,mpList:Object(n["f"])(r["a"].ls.get("materialPropertyList")),prefixNo:this.prefixNo},Object(i["mb"])(e).then((function(t){if(t&&200===t.code){var e=t.data;if(b.indexOf(",")>-1)m.$refs.materialDataTable.getValues((function(t,a){a.pop();for(var i=a,o=0;o<e.length;o++){var n=e[o],r=m.parseInfoToObj(n);r.depotId=n.depotId,r.stock=n.stock,i.push(r)}for(var l=0,s=0;s<i.length;s++)l+=i[s].taxLastMoney-0;m.materialTable.dataSource=i,y.statisticsColumns.taxLastMoney=l,h.autoChangePrice(y)}));else{for(var a=[],i=0;i<e.length;i++){var o=e[i],n={rowKey:f.id,values:m.parseInfoToObj(o)};a.push(n)}y.setValues(a),h.getStockByDepotBarCode(f,y),y.recalcAllStatisticsColumns(),h.autoChangePrice(y)}}}));break;case"operNumber":a=b-0,c=f.taxRate-0,o=f.unitPrice-0,l=f.taxUnitPrice-0,s=(o*a).toFixed(2)-0,d=(.01*c*s).toFixed(2)-0,u=(s+d).toFixed(2)-0,y.setValues([{rowKey:f.id,values:{allPrice:s,taxMoney:d,taxLastMoney:u}}]),y.recalcAllStatisticsColumns(),h.autoChangePrice(y);break;case"unitPrice":a=f.operNumber-0,o=b-0,c=f.taxRate-0,l=(o*(1+.01*c)).toFixed(2)-0,s=(o*a).toFixed(2)-0,d=(.01*c*s).toFixed(2)-0,u=(s+d).toFixed(2)-0,y.setValues([{rowKey:f.id,values:{taxUnitPrice:l,allPrice:s,taxMoney:d,taxLastMoney:u}}]),y.recalcAllStatisticsColumns(),h.autoChangePrice(y);break;case"allPrice":a=f.operNumber-0,c=f.taxRate-0,s=b-0,o=(s/a).toFixed(2)-0,l=(o*(1+.01*c)).toFixed(2)-0,d=(.01*c*s).toFixed(2)-0,u=(s+d).toFixed(2)-0,y.setValues([{rowKey:f.id,values:{unitPrice:o,taxUnitPrice:l,taxMoney:d,taxLastMoney:u}}]),y.recalcAllStatisticsColumns(),h.autoChangePrice(y);break;case"taxRate":a=f.operNumber-0,s=f.allPrice-0,o=f.unitPrice-0,c=b-0,l=(o*(1+.01*c)).toFixed(2)-0,d=(.01*c*s).toFixed(2)-0,u=(s+d).toFixed(2)-0,y.setValues([{rowKey:f.id,values:{taxUnitPrice:l,taxMoney:d,taxLastMoney:u}}]),y.recalcAllStatisticsColumns(),h.autoChangePrice(y);break;case"taxLastMoney":a=f.operNumber-0,u=b-0,c=f.taxRate-0,l=(u/a).toFixed(2)-0,o=(l/(1+.01*c)).toFixed(2)-0,s=(o*a).toFixed(2)-0,d=(u-s).toFixed(2)-0,y.setValues([{rowKey:f.id,values:{unitPrice:o,taxUnitPrice:l,allPrice:s,taxMoney:d}}]),y.recalcAllStatisticsColumns(),h.autoChangePrice(y);break}},parseInfoToObj:function(t){return{barCode:t.mBarCode,name:t.name,standard:t.standard,model:t.model,materialOther:t.materialOther,unit:t.commodityUnit,sku:t.sku,operNumber:1,unitPrice:t.billPrice,taxUnitPrice:t.billPrice,allPrice:t.billPrice,taxRate:0,taxMoney:0,taxLastMoney:t.billPrice}},onDeleted:function(t,e){e.recalcAllStatisticsColumns(),this.autoChangePrice(e)},getStockByDepotBarCode:function(t,e){Object(i["gb"])({depotId:t.depotId,barCode:t.barCode}).then((function(a){a&&200===a.code&&(e.setValues([{rowKey:t.id,values:{stock:a.data.stock}}]),e.recalcAllStatisticsColumns())}))},autoChangePrice:function(t){var e=this,a=t.statisticsColumns.taxLastMoney-0,i=this.form.getFieldValue("discount")-0,o=this.form.getFieldValue("otherMoney")-0,n=(.01*i*a).toFixed(2)-0,r=(a-n).toFixed(2)-0,l=(r+o).toFixed(2)-0;this.$nextTick((function(){e.form.setFieldsValue({discount:i,discountMoney:n,discountLastMoney:r,changeAmount:l,debt:0})}))},onKeyUpDiscount:function(t){var e=this,a=t.target.value-0,i=this.form.getFieldValue("discountMoney")-0,o=this.form.getFieldValue("discountLastMoney")-0,n=this.form.getFieldValue("otherMoney")-0,r=(i+o).toFixed(2)-0,l=(r*a*.01).toFixed(2)-0,s=(r-l).toFixed(2)-0,c=(s+n).toFixed(2)-0;this.$nextTick((function(){e.form.setFieldsValue({discountMoney:l,discountLastMoney:s,changeAmount:c,debt:0})}))},onKeyUpDiscountMoney:function(t){var e=this,a=t.target.value-0,i=this.form.getFieldValue("discount")-0,o=this.form.getFieldValue("discountLastMoney")-0,n=this.form.getFieldValue("otherMoney")-0;if(100!==i){var r=(o/(1-i/100)).toFixed(2)-0,l=(a/r*100).toFixed(2)-0,s=(r-a).toFixed(2)-0,c=(s+n).toFixed(2)-0;this.$nextTick((function(){e.form.setFieldsValue({discount:l,discountLastMoney:s,changeAmount:c,debt:0})}))}},onKeyUpOtherMoney:function(t){var e=this,a=t.target.value-0,i=this.form.getFieldValue("discountLastMoney")-0,o=(i+a).toFixed(2)-0;this.$nextTick((function(){e.form.setFieldsValue({changeAmount:o,debt:0})}))},onKeyUpChangeAmount:function(t){var e=this,a=t.target.value-0,i=this.form.getFieldValue("discountLastMoney")-0,o=this.form.getFieldValue("otherMoney")-0,n=(i+o-a).toFixed(2)-0;this.$nextTick((function(){e.form.setFieldsValue({debt:n})}))}}}},d0ed:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var i=a("7550"),o=a("e2e0"),n=a("0fea"),r={components:{JEditableTable:i["default"]},data:function(){return{title:"操作",visible:!1,form:this.$form.createForm(this),confirmLoading:!1,model:{},labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:18}}}},methods:{getAllTable:function(){var t=this;if(!(this.refKeys instanceof Array))throw this.throwNotArray("refKeys");var e=this.refKeys.map((function(e){return Object(o["c"])(t,e)}));return Promise.all(e)},eachAllTable:function(t){this.getAllTable().then((function(e){e.forEach((function(e,a){"function"===typeof t&&t(e,a)}))}))},add:function(){"function"===typeof this.addBefore&&this.addBefore();var t=this.addDefaultRowNum;"number"!==typeof t&&(t=1),this.eachAllTable((function(e){e.add(t)})),"function"===typeof this.addAfter&&this.addAfter(this.model),this.edit({})},edit:function(t){"function"===typeof this.editBefore&&this.editBefore(t),this.visible=!0,this.activeKey=this.refKeys[0],this.form.resetFields(),this.model=Object.assign({},t),"function"===typeof this.editAfter&&this.editAfter(this.model)},close:function(){this.visible=!1,this.eachAllTable((function(t){t.initialize()})),this.$emit("close")},requestSubTableData:function(t,e,a,i){a.loading=!0,Object(n["c"])(t,e).then((function(t){t&&200===t.code&&(a.dataSource=t.data.rows,"function"===typeof i&&i(t))})).finally((function(){a.loading=!1}))},request:function(t){var e=this,a=this.url.add,i="post";this.model.id&&(a=this.url.edit,i="put"),this.confirmLoading=!0,Object(n["e"])(a,t,i).then((function(t){200===t.code?(e.$emit("ok"),e.confirmLoading=!1,e.close()):(e.$message.warning(t.data.message),e.confirmLoading=!1)})).finally((function(){}))},handleChangeTabs:function(t){Object(o["c"])(this,t).then((function(t){t.resetScrollTop()}))},handleCancel:function(){this.close()},handleOk:function(){var t=this;this.getAllTable().then((function(e){return Object(o["d"])(t.form,e)})).then((function(e){if("function"!==typeof t.classifyIntoFormData)throw t.throwNotFunction("classifyIntoFormData");var a=t.classifyIntoFormData(e);return t.request(a)})).catch((function(e){e.error===o["b"]&&(t.activeKey=null==e.index?t.activeKey:t.refKeys[e.index])}))},throwNotFunction:function(t){return"".concat(t," 未定义或不是一个函数")},throwNotArray:function(t){return"".concat(t," 未定义或不是一个数组")}}}}}]);