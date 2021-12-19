import{c as te,a as ue,b as ne,t as ae,R as e,G as c,T as _,S as re,I as v,B as g,C as k,d as M,F as P,e as O,f as le,M as oe,g as ce,u as H,r as m,h as U,i as se,m as I,j as ie,k as me,l as b,n as Ee,o as de,p as Ce,q as pe,P as he}from"./vendor.3eaad05f.js";const Ae=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))C(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const p of l.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&C(p)}).observe(document,{childList:!0,subtree:!0});function i(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function C(r){if(r.ep)return;r.ep=!0;const l=i(r);fetch(r.href,l)}};Ae();const fe=()=>({comments:[]}),De=(n=fe(),a)=>{switch(a.type){case"GET_COMMENT":return{comments:a.payload};default:return n}},ge=()=>{const n=window.localStorage.getItem("racehorses");return{racehorses:JSON.parse(n!=null?n:"[]")}},Se=(n=ge(),a)=>{switch(a.type){case"UPDATE_RACEHORSES":return window.localStorage.setItem("racehorses",JSON.stringify(a.payload)),{racehorses:a.payload};default:return n}},ye=te({commentReducer:De,racehorsesReducer:Se}),Be=ue(ye,ne(ae)),xe=11,Re=[{key:"B",name:"\u9752\u8272"},{key:"C",name:"\u30B7\u30A2\u30F3"},{key:"G",name:"\u7DD1\u8272"},{key:"I",name:"\u85CD\u8272"},{key:"M",name:"\u30DE\u30BC\u30F3\u30BF"},{key:"O",name:"\u6A59\u8272"},{key:"P",name:"\u7D2B\u8272"},{key:"R",name:"\u8D64\u8272"},{key:"S",name:"\u9280\u8272"},{key:"W",name:"\u767D\u8272"},{key:"Y",name:"\u9EC4\u8272"}],A=({description:n,max:a,min:i,title:C,value:r,onChange:l})=>{const p=d=>{l(d)},h=d=>{let E=d?Number(d):0;E<i?E=i:a<E&&(E=a),l(E)},f=()=>{l(Math.floor(Math.random()*(a-i)+i))};return e.createElement(c,{item:!0,container:!0,xs:12},e.createElement(c,{item:!0,xs:12},e.createElement(_,{gutterBottom:!0},C),e.createElement(_,{gutterBottom:!0},n)),e.createElement(c,{item:!0,xs:6},e.createElement(re,{value:r,onChange:(d,E)=>p(E),min:i,max:a})),e.createElement(c,{item:!0,xs:1},e.createElement(v,{fullWidth:!0,value:r,onChange:d=>h(d.target.value),inputProps:{min:i,max:a,type:"number"}})),e.createElement(c,{item:!0,xs:3},e.createElement(g,{variant:"contained",onClick:f},"\u30E9\u30F3\u30C0\u30E0")))},L=({racehorse:n,onChange:a,onDelete:i})=>{const C=t=>{n.name=t,a(n)},r=t=>{n.color=t,a(n)},l=t=>{n.number=t?Number(t):0,a(n)},p=t=>{n.support=t,a(n)},h=t=>{n.condition=t,a(n)},f=t=>{n.ranking=t,a(n)},d=t=>{n.distance=t,a(n)},E=t=>{n.popular=t,a(n)};return e.createElement(k,null,e.createElement(M,null,e.createElement(c,{container:!0},e.createElement(c,{item:!0,xs:12},e.createElement(P,{variant:"standard",fullWidth:!0},e.createElement(O,{htmlFor:"name"},"\u540D\u524D"),e.createElement(v,{id:"name",value:n.name,onChange:t=>C(t.target.value)}))),e.createElement(c,{item:!0,xs:12},e.createElement(P,{variant:"standard",fullWidth:!0},e.createElement(O,{htmlFor:"color"},"\u6307\u5B9A\u8272"),e.createElement(le,{id:"color",value:n.color,label:"\u6307\u5B9A\u8272",onChange:t=>r(t.target.value)},Re.map(t=>e.createElement(oe,{key:t.key,value:t.key},t.name))))),e.createElement(c,{item:!0,xs:12},e.createElement(P,{variant:"standard",fullWidth:!0},e.createElement(O,{htmlFor:"number"},"\u756A\u53F7"),e.createElement(v,{id:"number",value:n.number,type:"number",onChange:t=>l(t.target.value)}))),e.createElement(A,{description:"\u5FDC\u63F4\u3055\u308C\u308B\u3068\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u5FDC\u63F4\u88DC\u6B63",value:n.support,onChange:t=>p(t)}),e.createElement(A,{description:"\u8ABF\u5B50\u304C\u3044\u3044\u3068\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u8ABF\u5B50\u88DC\u6B63",value:n.condition,onChange:t=>h(t)}),e.createElement(A,{description:"\u4E0A\u4F4D\u3092\u8D70\u3063\u3066\u3044\u308B\u3068\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u9806\u4F4D\u88DC\u6B63",value:n.ranking,onChange:t=>f(t)}),e.createElement(A,{description:"\u8D70\u3063\u305F\u8DDD\u96E2\u306B\u5FDC\u3058\u3066\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u8DDD\u96E2\u88DC\u6B63",value:n.distance,onChange:t=>d(t)}),e.createElement(A,{description:"\u4EBA\u6C17\u306B\u5FDC\u3058\u3066\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u4EBA\u6C17\u88DC\u6B63",value:n.popular,onChange:t=>E(t)}))),e.createElement(ce,null,e.createElement(g,{onClick:()=>i()},"\u524A\u9664")))},Fe=()=>{const n=H(),a={name:"",color:"",number:0,support:1,condition:1,ranking:1,distance:1,popular:1},i=()=>{o.push(a),n({type:"UPDATE_RACEHORSES",payload:o.concat()})},C=()=>{o.forEach(u=>{const s=Math.floor(Math.random()*(100-0)+0),D=Math.floor(Math.random()*(100-0)+0),R=Math.floor(Math.random()*(100-0)+0),F=Math.floor(Math.random()*(100-0)+0),ee=Math.floor(Math.random()*(100-0)+0);u.support=s,u.condition=D,u.ranking=R,u.distance=F,u.popular=ee}),n({type:"UPDATE_RACEHORSES",payload:o.concat()})},r=()=>{const u=Math.floor(Math.random()*(100-0)+0),s=Math.floor(Math.random()*(100-0)+0),D=Math.floor(Math.random()*(100-0)+0),R=Math.floor(Math.random()*(100-0)+0),F=Math.floor(Math.random()*(100-0)+0);f(u),S(s),T(D),N(R),w(F)},[l,p]=m.exports.useState(!1),[h,f]=m.exports.useState(0),[d,E]=m.exports.useState(!1),[t,S]=m.exports.useState(0),[G,W]=m.exports.useState(!1),[y,T]=m.exports.useState(0),[j,q]=m.exports.useState(!1),[B,N]=m.exports.useState(0),[J,K]=m.exports.useState(!1),[x,w]=m.exports.useState(0),V=u=>{o.forEach(s=>s.support=u),f(u)},X=u=>{o.forEach(s=>s.condition=u),S(u)},Y=u=>{o.forEach(s=>s.ranking=u),T(u)},$=u=>{o.forEach(s=>s.distance=u),N(u)},z=u=>{o.forEach(s=>s.popular=u),w(u)};m.exports.useEffect(()=>{if(!l){p(!0);return}o.forEach(u=>u.support=h),n({type:"UPDATE_RACEHORSES",payload:o.concat()})},[h]),m.exports.useEffect(()=>{if(!d){E(!0);return}o.forEach(u=>u.condition=t),n({type:"UPDATE_RACEHORSES",payload:o.concat()})},[t]),m.exports.useEffect(()=>{if(!G){W(!0);return}o.forEach(u=>u.ranking=y),n({type:"UPDATE_RACEHORSES",payload:o.concat()})},[y]),m.exports.useEffect(()=>{if(!j){q(!0);return}o.forEach(u=>u.distance=B),n({type:"UPDATE_RACEHORSES",payload:o.concat()})},[B]),m.exports.useEffect(()=>{if(!J){K(!0);return}o.forEach(u=>u.popular=x),n({type:"UPDATE_RACEHORSES",payload:o.concat()})},[x]);const o=U(u=>u.racehorsesReducer.racehorses),Q=(u,s)=>{o[s]=u,n({type:"UPDATE_RACEHORSES",payload:o.concat()})},Z=u=>{o.splice(u,1),n({type:"UPDATE_RACEHORSES",payload:o.concat()})};return e.createElement(c,{container:!0},e.createElement(c,{item:!0,xs:12},"\u8A2D\u5B9A\u753B\u9762"),e.createElement(c,{item:!0,xs:12},e.createElement(k,null,e.createElement(M,null,e.createElement(g,{variant:"contained",onClick:i,disabled:o.length===xe},"\u99AC\u8FFD\u52A0")))),e.createElement(c,{item:!0,xs:12},e.createElement(k,null,e.createElement(M,null,e.createElement(c,{container:!0},e.createElement(c,{item:!0,xs:12},"\u5171\u901A\u8A2D\u5B9A"),e.createElement(c,{item:!0,xs:2},e.createElement(g,{variant:"contained",onClick:C},"\u5B8C\u5168\u30E9\u30F3\u30C0\u30E0")),e.createElement(c,{item:!0,xs:2},e.createElement(g,{variant:"contained",onClick:r},"\u7D71\u4E00\u30E9\u30F3\u30C0\u30E0")),e.createElement(A,{description:"\u5FDC\u63F4\u3055\u308C\u308B\u3068\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u5FDC\u63F4\u88DC\u6B63",value:h,onChange:u=>V(u)}),e.createElement(A,{description:"\u8ABF\u5B50\u304C\u3044\u3044\u3068\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u8ABF\u5B50\u88DC\u6B63",value:t,onChange:u=>X(u)}),e.createElement(A,{description:"\u4E0A\u4F4D\u3092\u8D70\u3063\u3066\u3044\u308B\u3068\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u9806\u4F4D\u88DC\u6B63",value:y,onChange:u=>Y(u)}),e.createElement(A,{description:"\u8D70\u3063\u305F\u8DDD\u96E2\u306B\u5FDC\u3058\u3066\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u8DDD\u96E2\u88DC\u6B63",value:B,onChange:u=>$(u)}),e.createElement(A,{description:"\u4EBA\u6C17\u306B\u5FDC\u3058\u3066\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u4EBA\u6C17\u88DC\u6B63",value:x,onChange:u=>z(u)}))))),e.createElement(c,{item:!0,container:!0,xs:12},o.map((u,s)=>e.createElement(c,{item:!0,xs:4,key:s},e.createElement(L,{racehorse:u,onChange:D=>Q(D,s),onDelete:()=>Z(s)})))))},ve=se.create({}),ke=new window.DOMParser,Me=async n=>{var l,p,h,f,d;const a=await ve.get("/setting/comment.xml"),i=ke.parseFromString(a.data,"text/xml");let C=[],r=i.getElementsByTagName("comment");for(let E=0;E<r.length;E++){let t=r[E],S={time:((l=t==null?void 0:t.getAttributeNode("time"))==null?void 0:l.value)||"",no:((p=t==null?void 0:t.getAttributeNode("no"))==null?void 0:p.value)||"",owner:((h=t==null?void 0:t.getAttributeNode("owner"))==null?void 0:h.value)||"",handle:((f=t==null?void 0:t.getAttributeNode("handle"))==null?void 0:f.value)||"",service:((d=t==null?void 0:t.getAttributeNode("service"))==null?void 0:d.value)||"",content:(t==null?void 0:t.firstChild)?t.firstChild.nodeValue:""};C.push(S)}n({type:"GET_COMMENT",payload:C})};I(()=>({}));const Pe=()=>{const n=H(),a=U(r=>r.racehorsesReducer.racehorses),i=(r,l)=>{},C=r=>{};return m.exports.useEffect(()=>{setInterval(()=>{n(Me)},1e3)},[]),e.createElement(c,{container:!0},e.createElement(c,{item:!0,xs:12},"\u30B2\u30FC\u30E0\u753B\u9762"),e.createElement(c,{item:!0,container:!0,xs:12},a.map((r,l)=>e.createElement(c,{item:!0,xs:4,key:l},e.createElement(L,{racehorse:r,onChange:p=>i(),onDelete:()=>C()})))))},Oe=I(()=>({})),be=()=>(Oe(),e.createElement("div",null,"TOP\u30DA\u30FC\u30B8")),Te=()=>e.createElement(ie,null,e.createElement(me,null,e.createElement(b,{path:"/",component:be,exact:!0}),e.createElement(b,{path:"/config",component:Fe,exact:!0}),e.createElement(b,{path:"/game",component:Pe,exact:!0}))),Ne=Ee({}),we={},_e=()=>e.createElement(e.Fragment,null,e.createElement(de,{styles:we}),e.createElement(Ce,{theme:Ne},e.createElement(Te,null)));pe.render(e.createElement(e.StrictMode,null,e.createElement(he,{store:Be},e.createElement(_e,null))),document.getElementById("root"));
