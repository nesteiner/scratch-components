(function(n,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(n=typeof globalThis<"u"?globalThis:n||self,e(n["scratch-components"]={},n.Vue))})(this,function(n,e){"use strict";const d={class:"row"},p=e.defineComponent({__name:"Row",props:{mainAxisAligment:{type:String,default:"start"},crossAxisAligment:{type:String,default:"start"},mainAxisSize:{type:String,default:"max"},crossAxisSize:{type:String,default:"min"}},setup(i){const s=i;e.useCssVars(t=>({"1bfa89e2":e.unref(c),f41ada8a:e.unref(m),"5a2934c8":e.unref(o),f661adbe:e.unref(r)}));const o=e.computed(()=>a(s.mainAxisAligment)),r=e.computed(()=>a(s.crossAxisAligment)),c=e.computed(()=>f(s.mainAxisSize)),m=e.computed(()=>f(s.crossAxisSize));function a(t){return t=="center"?"center":t=="start"?"flex-start":t=="end"?"flex-end":t}function f(t){return t=="max"?"100%":"fit-content"}return(t,x)=>(e.openBlock(),e.createElementBlock("div",d,[e.renderSlot(t.$slots,"default",{},void 0,!0)]))}}),_="",u=((i,s)=>{const o=i.__vccOpts||i;for(const[r,c]of s)o[r]=c;return o})(p,[["__scopeId","data-v-4a3ae814"]]);n.Row=u,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});