(function(e,i){typeof exports=="object"&&typeof module!="undefined"?module.exports=i(require("vue")):typeof define=="function"&&define.amd?define(["vue"],i):(e=typeof globalThis!="undefined"?globalThis:e||self,e.index=i(e.Vue))})(this,function(e){"use strict";var i="",p=(a,s)=>{const o=a.__vccOpts||a;for(const[n,r]of s)o[n]=r;return o};const _={class:"icon"},f={class:"content"};var m=p(e.defineComponent({setup(a){let s=e.ref("\u8BF7\u9009\u62E9"),o=e.ref(!1),n=e.ref("\u6309\u57CE\u5E02"),r=e.ref("");const C=e.ref([{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"},{value:"Option4",label:"Option4"},{value:"Option5",label:"Option5"}]);return(k,l)=>{const V=e.resolveComponent("el-icon-arrowdown"),c=e.resolveComponent("el-radio-button"),b=e.resolveComponent("el-radio-group"),d=e.resolveComponent("el-col"),x=e.resolveComponent("el-option"),w=e.resolveComponent("el-select"),N=e.resolveComponent("el-row"),E=e.resolveComponent("el-popover");return e.openBlock(),e.createBlock(E,{placement:"bottom-start",visible:e.unref(o),"onUpdate:visible":l[3]||(l[3]=t=>e.isRef(o)?o.value=t:o=t),width:450,trigger:"click"},{reference:e.withCtx(()=>[e.createElementVNode("div",{class:"city",onClick:l[0]||(l[0]=t=>e.isRef(o)?o.value=!e.unref(o):o=!e.unref(o))},[e.createElementVNode("div",null,e.toDisplayString(e.unref(s)),1),e.createElementVNode("div",_,[e.createVNode(V,{class:e.normalizeClass({rotate:e.unref(o)})},null,8,["class"])])])]),default:e.withCtx(()=>[e.createElementVNode("div",f,[e.createVNode(N,{align:"middle"},{default:e.withCtx(()=>[e.createVNode(d,{span:8},{default:e.withCtx(()=>[e.createVNode(b,{modelValue:e.unref(n),"onUpdate:modelValue":l[1]||(l[1]=t=>e.isRef(n)?n.value=t:n=t),size:"small"},{default:e.withCtx(()=>[e.createVNode(c,{label:"\u6309\u57CE\u5E02"}),e.createVNode(c,{label:"\u6309\u7701\u4EFD"})]),_:1},8,["modelValue"])]),_:1}),e.createVNode(d,{offset:1,span:15},{default:e.withCtx(()=>[e.createVNode(w,{size:"small",modelValue:e.unref(r),"onUpdate:modelValue":l[2]||(l[2]=t=>e.isRef(r)?r.value=t:r=t),filterable:"",placeholder:"Select"},{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(C.value,t=>(e.openBlock(),e.createBlock(x,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})])]),_:1},8,["visible"])}}}),[["__scopeId","data-v-89e9c012"]]),u={install(a){a.component("m-choose-city",m)}};return u});