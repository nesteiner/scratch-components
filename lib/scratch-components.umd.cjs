(function(u,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],i):(u=typeof globalThis<"u"?globalThis:u||self,i(u["scratch-components"]={},u.Vue))})(this,function(u,i){"use strict";const pt={class:"row"},_t=i.defineComponent({__name:"Row",props:{mainAxisAligment:{type:String,default:"start"},crossAxisAligment:{type:String,default:"start"},mainAxisSize:{type:String,default:"max"},crossAxisSize:{type:String,default:"min"}},setup(t){const e=t;i.useCssVars(l=>({"1bfa89e2":i.unref(s),f41ada8a:i.unref(o),"5a2934c8":i.unref(n),f661adbe:i.unref(r)}));const n=i.computed(()=>c(e.mainAxisAligment)),r=i.computed(()=>c(e.crossAxisAligment)),s=i.computed(()=>a(e.mainAxisSize)),o=i.computed(()=>a(e.crossAxisSize));function c(l){return l=="center"?"center":l=="start"?"flex-start":l=="end"?"flex-end":l}function a(l){return l=="max"?"100%":"fit-content"}return(l,p)=>(i.openBlock(),i.createElementBlock("div",pt,[i.renderSlot(l.$slots,"default",{},void 0,!0)]))}}),ue="",R=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},ht=R(_t,[["__scopeId","data-v-4a3ae814"]]),mt={class:"column"},gt=i.defineComponent({__name:"Column",props:{mainAxisAligment:{type:String,default:"start"},crossAxisAligment:{type:String,default:"start"},mainAxisSize:{type:String,default:"max"},crossAxisSize:{type:String,default:"min"}},setup(t){const e=t;i.useCssVars(l=>({"1270e251":i.unref(o),"3948ef8c":i.unref(s),"8dce951c":i.unref(n),"03cfbdb7":i.unref(r)}));const n=i.computed(()=>c(e.mainAxisAligment)),r=i.computed(()=>c(e.crossAxisAligment)),s=i.computed(()=>a(e.mainAxisSize)),o=i.computed(()=>a(e.crossAxisSize));function c(l){return l=="center"?"center":l=="start"?"flex-start":l=="end"?"flex-end":l}function a(l){return l=="max"?"100%":"fit-content"}return(l,p)=>(i.openBlock(),i.createElementBlock("div",mt,[i.renderSlot(l.$slots,"default",{},void 0,!0)]))}}),de="",bt=R(gt,[["__scopeId","data-v-d064b4cb"]]),wt={class:"expanded"},Et=i.defineComponent({__name:"Expanded",props:{flex:{type:Number,default:1}},setup(t){const e=t;i.useCssVars(r=>({"08535f8b":i.unref(n)}));const n=i.computed(()=>e.flex.toString());return(r,s)=>(i.openBlock(),i.createElementBlock("div",wt,[i.renderSlot(r.$slots,"default",{},void 0,!0)]))}}),pe="",xt=R(Et,[["__scopeId","data-v-88a537bf"]]),St=i.defineComponent({__name:"SizedBox",props:{width:{type:Number,default:-1},height:{type:Number,default:-1}},setup(t){const e=t,n=i.computed(()=>e.width>=0?e.width.toString()+"px":"fit-content"),r=i.computed(()=>e.height>=0?e.height.toString()+"px":"fit-content"),s=i.ref({width:n.value,height:r.value});return(o,c)=>(i.openBlock(),i.createElementBlock("div",{class:"sizedbox",style:i.normalizeStyle(s.value)},[i.renderSlot(o.$slots,"default")],4))}}),Nt={class:"fractional"},At=i.defineComponent({__name:"Fractional",props:{widthFactor:{type:Number,default:1},heightFactor:{type:Number,default:1}},setup(t){const e=t;i.useCssVars(s=>({"375a69d3":i.unref(n),"7e14ddf8":i.unref(r)}));const n=i.computed(()=>Number(e.widthFactor*100).toFixed(0).toString()+"%"),r=i.computed(()=>Number(e.heightFactor*100).toFixed(0).toString()+"%");return(s,o)=>(i.openBlock(),i.createElementBlock("div",Nt,[i.renderSlot(s.$slots,"default",{},void 0,!0)]))}}),_e="",Ot=R(At,[["__scopeId","data-v-a4454282"]]);function yt(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}process.env.NODE_ENV!=="production"&&Object.freeze({}),process.env.NODE_ENV!=="production"&&Object.freeze([]);const Rt=Object.assign,Tt=Object.prototype.hasOwnProperty,T=(t,e)=>Tt.call(t,e),m=Array.isArray,N=t=>q(t)==="[object Map]",It=t=>typeof t=="string",K=t=>typeof t=="symbol",I=t=>t!==null&&typeof t=="object",Mt=Object.prototype.toString,q=t=>Mt.call(t),U=t=>q(t).slice(8,-1),B=t=>It(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$t=(t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))})(t=>t.charAt(0).toUpperCase()+t.slice(1)),F=(t,e)=>!Object.is(t,e),zt=t=>{const e=parseFloat(t);return isNaN(e)?t:e};function J(t,...e){console.warn(`[Vue warn] ${t}`,...e)}const A=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Vt=t=>(t.w&v)>0,Dt=t=>(t.n&v)>0,P=new WeakMap;let v=1,h;const w=Symbol(process.env.NODE_ENV!=="production"?"iterate":""),W=Symbol(process.env.NODE_ENV!=="production"?"Map key iterate":"");let O=!0;const Q=[];function jt(){Q.push(O),O=!1}function Ct(){const t=Q.pop();O=t===void 0?!0:t}function d(t,e,n){if(O&&h){let r=P.get(t);r||P.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=A());const o=process.env.NODE_ENV!=="production"?{effect:h,target:t,type:e,key:n}:void 0;H(s,o)}}function H(t,e){let n=!1;Dt(t)||(t.n|=v,n=!Vt(t)),n&&(t.add(h),h.deps.push(t),process.env.NODE_ENV!=="production"&&h.onTrack&&h.onTrack(Object.assign({effect:h},e)))}function g(t,e,n,r,s,o){const c=P.get(t);if(!c)return;let a=[];if(e==="clear")a=[...c.values()];else if(n==="length"&&m(t)){const p=zt(r);c.forEach((_,E)=>{(E==="length"||E>=p)&&a.push(_)})}else switch(n!==void 0&&a.push(c.get(n)),e){case"add":m(t)?B(n)&&a.push(c.get("length")):(a.push(c.get(w)),N(t)&&a.push(c.get(W)));break;case"delete":m(t)||(a.push(c.get(w)),N(t)&&a.push(c.get(W)));break;case"set":N(t)&&a.push(c.get(w));break}const l=process.env.NODE_ENV!=="production"?{target:t,type:e,key:n,newValue:r,oldValue:s,oldTarget:o}:void 0;if(a.length===1)a[0]&&(process.env.NODE_ENV!=="production"?x(a[0],l):x(a[0]));else{const p=[];for(const _ of a)_&&p.push(..._);process.env.NODE_ENV!=="production"?x(A(p),l):x(A(p))}}function x(t,e){const n=m(t)?t:[...t];for(const r of n)r.computed&&X(r,e);for(const r of n)r.computed||X(r,e)}function X(t,e){(t!==h||t.allowRecurse)&&(process.env.NODE_ENV!=="production"&&t.onTrigger&&t.onTrigger(Rt({effect:t},e)),t.scheduler?t.scheduler():t.run())}const Kt=yt("__proto__,__v_isRef,__isVue"),Z=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(K)),Bt=tt(),Ft=tt(!0),k=Pt();function Pt(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=f(this);for(let o=0,c=this.length;o<c;o++)d(r,"get",o+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(f)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){jt();const r=f(this)[e].apply(this,n);return Ct(),r}}),t}function tt(t=!1,e=!1){return function(r,s,o){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&o===(t?e?ne:at:e?ee:ct).get(r))return r;const c=m(r);if(!t&&c&&T(k,s))return Reflect.get(k,s,o);const a=Reflect.get(r,s,o);return(K(s)?Z.has(s):Kt(s))||(t||d(r,"get",s),e)?a:S(a)?c&&B(s)?a:a.value:I(a)?t?ft(a):lt(a):a}}const vt=Wt();function Wt(t=!1){return function(n,r,s,o){let c=n[r];if(C(c)&&S(c)&&!S(s))return!1;if(!t&&(!dt(s)&&!C(s)&&(c=f(c),s=f(s)),!m(n)&&S(c)&&!S(s)))return c.value=s,!0;const a=m(n)&&B(r)?Number(r)<n.length:T(n,r),l=Reflect.set(n,r,s,o);return n===f(o)&&(a?F(s,c)&&g(n,"set",r,s,c):g(n,"add",r,s)),l}}function Ht(t,e){const n=T(t,e),r=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&g(t,"delete",e,void 0,r),s}function Gt(t,e){const n=Reflect.has(t,e);return(!K(e)||!Z.has(e))&&d(t,"has",e),n}function Lt(t){return d(t,"iterate",m(t)?"length":w),Reflect.ownKeys(t)}const Yt={get:Bt,set:vt,deleteProperty:Ht,has:Gt,ownKeys:Lt},qt={get:Ft,set(t,e){return process.env.NODE_ENV!=="production"&&J(`Set operation on key "${String(e)}" failed: target is readonly.`,t),!0},deleteProperty(t,e){return process.env.NODE_ENV!=="production"&&J(`Delete operation on key "${String(e)}" failed: target is readonly.`,t),!0}},G=t=>t,M=t=>Reflect.getPrototypeOf(t);function $(t,e,n=!1,r=!1){t=t.__v_raw;const s=f(t),o=f(e);n||(e!==o&&d(s,"get",e),d(s,"get",o));const{has:c}=M(s),a=r?G:n?L:y;if(c.call(s,e))return a(t.get(e));if(c.call(s,o))return a(t.get(o));t!==s&&t.get(e)}function z(t,e=!1){const n=this.__v_raw,r=f(n),s=f(t);return e||(t!==s&&d(r,"has",t),d(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function V(t,e=!1){return t=t.__v_raw,!e&&d(f(t),"iterate",w),Reflect.get(t,"size",t)}function et(t){t=f(t);const e=f(this);return M(e).has.call(e,t)||(e.add(t),g(e,"add",t,t)),this}function nt(t,e){e=f(e);const n=f(this),{has:r,get:s}=M(n);let o=r.call(n,t);o?process.env.NODE_ENV!=="production"&&it(n,r,t):(t=f(t),o=r.call(n,t));const c=s.call(n,t);return n.set(t,e),o?F(e,c)&&g(n,"set",t,e,c):g(n,"add",t,e),this}function st(t){const e=f(this),{has:n,get:r}=M(e);let s=n.call(e,t);s?process.env.NODE_ENV!=="production"&&it(e,n,t):(t=f(t),s=n.call(e,t));const o=r?r.call(e,t):void 0,c=e.delete(t);return s&&g(e,"delete",t,void 0,o),c}function rt(){const t=f(this),e=t.size!==0,n=process.env.NODE_ENV!=="production"?N(t)?new Map(t):new Set(t):void 0,r=t.clear();return e&&g(t,"clear",void 0,void 0,n),r}function D(t,e){return function(r,s){const o=this,c=o.__v_raw,a=f(c),l=e?G:t?L:y;return!t&&d(a,"iterate",w),c.forEach((p,_)=>r.call(s,l(p),l(_),o))}}function j(t,e,n){return function(...r){const s=this.__v_raw,o=f(s),c=N(o),a=t==="entries"||t===Symbol.iterator&&c,l=t==="keys"&&c,p=s[t](...r),_=n?G:e?L:y;return!e&&d(o,"iterate",l?W:w),{next(){const{value:E,done:Y}=p.next();return Y?{value:E,done:Y}:{value:a?[_(E[0]),_(E[1])]:_(E),done:Y}},[Symbol.iterator](){return this}}}}function b(t){return function(...e){if(process.env.NODE_ENV!=="production"){const n=e[0]?`on key "${e[0]}" `:"";console.warn(`${$t(t)} operation ${n}failed: target is readonly.`,f(this))}return t==="delete"?!1:this}}function Ut(){const t={get(o){return $(this,o)},get size(){return V(this)},has:z,add:et,set:nt,delete:st,clear:rt,forEach:D(!1,!1)},e={get(o){return $(this,o,!1,!0)},get size(){return V(this)},has:z,add:et,set:nt,delete:st,clear:rt,forEach:D(!1,!0)},n={get(o){return $(this,o,!0)},get size(){return V(this,!0)},has(o){return z.call(this,o,!0)},add:b("add"),set:b("set"),delete:b("delete"),clear:b("clear"),forEach:D(!0,!1)},r={get(o){return $(this,o,!0,!0)},get size(){return V(this,!0)},has(o){return z.call(this,o,!0)},add:b("add"),set:b("set"),delete:b("delete"),clear:b("clear"),forEach:D(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=j(o,!1,!1),n[o]=j(o,!0,!1),e[o]=j(o,!1,!0),r[o]=j(o,!0,!0)}),[t,n,e,r]}const[Jt,Qt,Xt,Zt]=Ut();function ot(t,e){const n=e?t?Zt:Xt:t?Qt:Jt;return(r,s,o)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(T(n,s)&&s in r?n:r,s,o)}const kt={get:ot(!1,!1)},te={get:ot(!0,!1)};function it(t,e,n){const r=f(n);if(r!==n&&e.call(t,r)){const s=U(t);console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const ct=new WeakMap,ee=new WeakMap,at=new WeakMap,ne=new WeakMap;function se(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function re(t){return t.__v_skip||!Object.isExtensible(t)?0:se(U(t))}function lt(t){return C(t)?t:ut(t,!1,Yt,kt,ct)}function ft(t){return ut(t,!0,qt,te,at)}function ut(t,e,n,r,s){if(!I(t))return process.env.NODE_ENV!=="production"&&console.warn(`value cannot be made reactive: ${String(t)}`),t;if(t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=s.get(t);if(o)return o;const c=re(t);if(c===0)return t;const a=new Proxy(t,c===2?r:n);return s.set(t,a),a}function C(t){return!!(t&&t.__v_isReadonly)}function dt(t){return!!(t&&t.__v_isShallow)}function f(t){const e=t&&t.__v_raw;return e?f(e):t}const y=t=>I(t)?lt(t):t,L=t=>I(t)?ft(t):t;function oe(t){O&&h&&(t=f(t),process.env.NODE_ENV!=="production"?H(t.dep||(t.dep=A()),{target:t,type:"get",key:"value"}):H(t.dep||(t.dep=A())))}function ie(t,e){t=f(t),t.dep&&(process.env.NODE_ENV!=="production"?x(t.dep,{target:t,type:"set",key:"value",newValue:e}):x(t.dep))}function S(t){return!!(t&&t.__v_isRef===!0)}function ce(t){return ae(t,!1)}function ae(t,e){return S(t)?t:new le(t,e)}class le{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:f(e),this._value=n?e:y(e)}get value(){return oe(this),this._value}set value(e){const n=this.__v_isShallow||dt(e)||C(e);e=n?e:f(e),F(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:y(e),ie(this,e))}}const fe=i.defineComponent({__name:"Padding",props:{left:{type:Number,default:0},right:{type:Number,default:0},top:{type:Number,default:0},bottom:{type:Number,default:0}},setup(t){const e=t,n=ce({paddingLeft:`${e.left}px`,paddingRight:`${e.right}px`,paddingTop:`${e.top}px`,paddingBottom:`${e.bottom}px`});return(r,s)=>(i.openBlock(),i.createElementBlock("div",{class:"padding",style:i.normalizeStyle(i.unref(n))},[i.renderSlot(r.$slots,"default")],4))}});u.Column=bt,u.Expanded=xt,u.Fractional=Ot,u.Padding=fe,u.Row=ht,u.SizedBox=St,Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});
