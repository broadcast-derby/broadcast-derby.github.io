import{m as R,R as e,r as C,G as l,C as i,a as d,F,b as D,S as O,B as p,c as E,I as h,d as y,e as x,M as P,f as L,g as M,h as T,i as g,j as w,k as I,T as N,l as G}from"./vendor.d1b87fdf.js";const W=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function m(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerpolicy&&(t.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?t.credentials="include":n.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(n){if(n.ep)return;n.ep=!0;const t=m(n);fetch(n.href,t)}};W();const _=R(()=>({})),j=()=>(_(),e.createElement("div",null,"TOP\u30DA\u30FC\u30B8")),H=()=>{const f=[{key:"B",name:"\u9752\u8272"},{key:"C",name:"\u30B7\u30A2\u30F3"},{key:"G",name:"\u7DD1\u8272"},{key:"I",name:"\u85CD\u8272"},{key:"M",name:"\u30DE\u30BC\u30F3\u30BF"},{key:"O",name:"\u6A59\u8272"},{key:"P",name:"\u7D2B\u8272"},{key:"R",name:"\u8D64\u8272"},{key:"S",name:"\u9280\u8272"},{key:"W",name:"\u767D\u8272"},{key:"Y",name:"\u9EC4\u8272"}],c={name:"",color:"",number:0},m=11,[s,n]=C.exports.useState(!1),[t,u]=C.exports.useState([]),A=(r,a)=>{n(a)},b=()=>{t.push(c),u(t.concat())},k=(r,a)=>{t[a].name=r,u(t.concat())},v=(r,a)=>{t[a].color=r,u(t.concat())},B=(r,a)=>{t[a].number=Number(r)||0,u(t.concat())},S=r=>{t.splice(r,1),u(t.concat())};return e.createElement(l,{container:!0},e.createElement(l,{item:!0,xs:12},"\u8A2D\u5B9A\u753B\u9762"),e.createElement(l,{container:!0,item:!0,xs:12},e.createElement(i,null,e.createElement(d,null,e.createElement(l,{item:!0,xs:12},e.createElement(F,null,e.createElement(D,{control:e.createElement(O,{checked:s,onChange:A}),label:"\u914D\u4FE1\u8005\u7528\u8A2D\u5B9A\u3092\u8868\u793A\u3059\u308B"}))),s?e.createElement(l,{item:!0,xs:12},e.createElement("div",null,"\u5165\u529B\u6B04")):null))),e.createElement(l,{item:!0,xs:12},e.createElement(i,null,e.createElement(d,null,e.createElement(p,{variant:"contained",onClick:b,disabled:t.length===m},"\u99AC\u8FFD\u52A0")))),e.createElement(l,{item:!0,container:!0,xs:12},t.map((r,a)=>e.createElement(l,{item:!0,xs:4},e.createElement(i,null,e.createElement(d,null,e.createElement(l,{container:!0},e.createElement(l,{item:!0,xs:12},e.createElement(E,{variant:"standard",fullWidth:!0},e.createElement(h,{htmlFor:"name"},"\u540D\u524D"),e.createElement(y,{id:"name",value:r.name,onChange:o=>k(o.target.value,a)}))),e.createElement(l,{item:!0,xs:12},e.createElement(E,{variant:"standard",fullWidth:!0},e.createElement(h,{htmlFor:"color"},"\u6307\u5B9A\u8077"),e.createElement(x,{id:"color",value:r.color,label:"\u6307\u5B9A\u8272",onChange:o=>v(o.target.value,a)},f.map(o=>e.createElement(P,{value:o.key},o.name))))),e.createElement(l,{item:!0,xs:12},e.createElement(E,{variant:"standard",fullWidth:!0},e.createElement(h,{htmlFor:"number"},"\u756A\u53F7"),e.createElement(y,{id:"number",value:r.number,type:"number",onChange:o=>B(o.target.value,a)}))))),e.createElement(L,null,e.createElement(p,{onClick:()=>S(a)},"\u524A\u9664")))))))},q=()=>e.createElement(M,null,e.createElement(T,null,e.createElement(g,{path:"/",component:j,exact:!0}),e.createElement(g,{path:"/config",component:H,exact:!0}))),K=w({}),U={},X=()=>e.createElement(e.Fragment,null,e.createElement(I,{styles:U}),e.createElement(N,{theme:K},e.createElement(q,null)));G.render(e.createElement(e.StrictMode,null,e.createElement(X,null)),document.getElementById("root"));
