(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ac219"],{"17da":function(e,a,t){"use strict";t.r(a);var l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("a-input-search",{attrs:{placeholder:"请选择商品",readOnly:""},on:{search:e.onSearchMaterial},model:{value:e.materialNames,callback:function(a){e.materialNames=a},expression:"materialNames"}}),t("j-select-material-modal",{ref:"selectModal",attrs:{"modal-width":e.modalWidth,multi:e.multi,"bar-code":e.value},on:{ok:e.selectOK,initComp:e.initComp}})],1)},i=[],r=t("79e9"),n={name:"JSelectMaterial",components:{JSelectMaterialModal:r["default"]},props:{modalWidth:{type:Number,default:1200,required:!1},value:{type:String,required:!1},disabled:{type:Boolean,required:!1,default:!1},multi:{type:Boolean,default:!0,required:!1}},data:function(){return{materialIds:"",materialNames:""}},mounted:function(){this.materialIds=this.value},watch:{value:function(e){this.materialIds=e}},model:{prop:"value",event:"change"},methods:{initComp:function(e){this.materialNames=e},onSearchMaterial:function(){this.$refs.selectModal.showModal()},selectOK:function(e,a){if(e){var t="",l=!0,i=!1,r=void 0;try{for(var n,o=e[Symbol.iterator]();!(l=(n=o.next()).done);l=!0){var s=n.value;t+=","+s.mBarCode}}catch(d){i=!0,r=d}finally{try{l||null==o.return||o.return()}finally{if(i)throw r}}this.materialNames=t.substring(1),this.materialIds=a}else this.materialNames="",this.materialIds="";this.$emit("change",this.materialIds)}}},o=n,s=t("2877"),d=Object(s["a"])(o,l,i,!1,null,"34120651",null);a["default"]=d.exports}}]);