(function(e,n){typeof exports=="object"&&typeof module!="undefined"?module.exports=n(require("vue")):typeof define=="function"&&define.amd?define(["vue"],n):(e=typeof globalThis!="undefined"?globalThis:e||self,e.index=n(e.Vue))})(this,function(e){"use strict";const n=e.defineComponent({props:{percentage:{type:Number,default:0},isAnimation:{type:Boolean,default:!1},time:{type:Number,default:3e3}},setup(o){const t=o;let r=e.ref(0);return e.onMounted(()=>{if(t.isAnimation){const p=Math.ceil(t.percentage/t.time);let s=setInterval(()=>{r.value+=1,r.value>=t.percentage&&(r.value=t.percentage,clearInterval(s))},p)}else r.value=t.percentage}),(p,s)=>{const a=e.resolveComponent("el-progress");return e.openBlock(),e.createBlock(a,e.mergeProps(p.$attrs,{percentage:e.unref(r)}),null,16,["percentage"])}}});var i={install(o){o.component("m-progress",n)}};return i});