import{d as b,r as l,$ as v,c as s,e as a,F as g,aj as x,f as u,g as y,Z as I,n as k,t as T,p as S,j as $,Q as C,l as w}from"./XAGdjFur.js";const B=t=>(S("data-v-9b59cc28"),t=t(),$(),t),N={class:"tabs-header"},U=["onClick"],j=B(()=>u("span",{class:"tab"},null,-1)),q=[j],F=b({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:p}){const h=t,f=p,n=l(),r=l(),o=e=>{e&&(r.value.style.insetInlineStart=`${e.offsetLeft}px`,r.value.style.width=`${e.clientWidth}px`)},m=(e,c)=>{f("update:activeTabIndex",c),C(()=>o(e.target))};return v(n,e=>{e&&setTimeout(()=>{o(n.value.children[h.activeTabIndex])},50)},{immediate:!0}),(e,c)=>(s(),a("div",N,[t.tabs?(s(),a("div",{key:0,ref_key:"tabsRef",ref:n,class:"tabs"},[(s(!0),a(g,null,x(t.tabs,({label:d},i)=>(s(),a("button",{key:`${i}${d}`,class:k([t.activeTabIndex===i?"active":"not-active"]),onClick:_=>m(_,i)},T(d),11,U))),128)),u("span",{ref_key:"highlightUnderline",ref:r,class:"highlight-underline"},q,512)],512)):y("",!0),I(e.$slots,"footer",{},void 0,!0)]))}}),L=w(F,[["__scopeId","data-v-9b59cc28"]]);export{L as default};
