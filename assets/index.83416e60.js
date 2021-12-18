import{c as we,a as ke,R as e,G as r,T as q,S as Te,I as A,B as S,C as U,b as x,F as f,d as D,e as be,M as Oe,f as Pe,u as $,r as m,g as K,h as X,i as R,j as v,m as z,k as _e,l as Ie,n as N,o as Me,p as Ne,q as Le,s as He,P as Ye}from"./vendor.23ca6154.js";const We=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))E(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const h of i.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&E(h)}).observe(document,{childList:!0,subtree:!0});function l(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function E(o){if(o.ep)return;o.ep=!0;const i=l(o);fetch(o.href,i)}};We();const Ge=()=>{var a,l,E,o;const n=JSON.parse((a=window.localStorage.getItem("private"))!=null?a:"{}");return{niconicoUrl:(l=n.niconicoUrl)!=null?l:"",youtubeUrl:(E=n.youtubeUrl)!=null?E:"",twitchUrl:(o=n.twitchUrl)!=null?o:""}},Je=(n=Ge(),a)=>{var E;const l=JSON.parse((E=window.localStorage.getItem("private"))!=null?E:"{}");switch(a.type){case"GET_NICONICO_URL":return l.niconicoUrl;case"UPDATE_NICONICO_URL":return l.niconicoUrl=a.payload,window.localStorage.setItem("private",JSON.stringify(l)),{niconicoUrl:a.payload};case"GET_YOUTUBE_URL":return l.youtubeUrl;case"UPDATE_YOUTUBE_URL":return l.youtubeUrl=a.payload,window.localStorage.setItem("private",JSON.stringify(l)),{youtubeUrl:a.payload};case"GET_TWITCH_URL":return l.twitchUrl;case"UPDATE_TWITCH_URL":return l.twitchUrl=a.payload,window.localStorage.setItem("private",JSON.stringify(l)),{twitchUrl:a.payload};default:return n}},je=()=>{const n=window.localStorage.getItem("racehorses");return{racehorses:JSON.parse(n!=null?n:"[]")}},qe=(n=je(),a)=>{switch(a.type){case"UPDATE_RACEHORSES":return window.localStorage.setItem("racehorses",JSON.stringify(a.payload)),{racehorses:a.payload};default:return n}},$e=we({privateSettingReducer:Je,racehorsesReducer:qe}),F=ke($e),Ke=11,Xe=[{key:"B",name:"\u9752\u8272"},{key:"C",name:"\u30B7\u30A2\u30F3"},{key:"G",name:"\u7DD1\u8272"},{key:"I",name:"\u85CD\u8272"},{key:"M",name:"\u30DE\u30BC\u30F3\u30BF"},{key:"O",name:"\u6A59\u8272"},{key:"P",name:"\u7D2B\u8272"},{key:"R",name:"\u8D64\u8272"},{key:"S",name:"\u9280\u8272"},{key:"W",name:"\u767D\u8272"},{key:"Y",name:"\u9EC4\u8272"}],p=({description:n,max:a,min:l,title:E,value:o,onChange:i})=>{const h=d=>{i(d)},y=d=>{let C=d?Number(d):0;C<l?C=l:a<C&&(C=a),i(C)},g=()=>{i(Math.floor(Math.random()*(a-l)+l))};return e.createElement(r,{item:!0,container:!0,xs:12},e.createElement(r,{item:!0,xs:12},e.createElement(q,{gutterBottom:!0},E),e.createElement(q,{gutterBottom:!0},n)),e.createElement(r,{item:!0,xs:6},e.createElement(Te,{value:o,onChange:(d,C)=>h(C),min:l,max:a})),e.createElement(r,{item:!0,xs:1},e.createElement(A,{fullWidth:!0,value:o,onChange:d=>y(d.target.value),inputProps:{min:l,max:a,type:"number"}})),e.createElement(r,{item:!0,xs:3},e.createElement(S,{variant:"contained",onClick:g},"\u30E9\u30F3\u30C0\u30E0")))},Q=({racehorse:n,onChange:a,onDelete:l})=>{const E=u=>{n.name=u,a(n)},o=u=>{n.color=u,a(n)},i=u=>{n.number=u?Number(u):0,a(n)},h=u=>{n.support=u,a(n)},y=u=>{n.condition=u,a(n)},g=u=>{n.ranking=u,a(n)},d=u=>{n.distance=u,a(n)},C=u=>{n.popular=u,a(n)};return e.createElement(U,null,e.createElement(x,null,e.createElement(r,{container:!0},e.createElement(r,{item:!0,xs:12},e.createElement(f,{variant:"standard",fullWidth:!0},e.createElement(D,{htmlFor:"name"},"\u540D\u524D"),e.createElement(A,{id:"name",value:n.name,onChange:u=>E(u.target.value)}))),e.createElement(r,{item:!0,xs:12},e.createElement(f,{variant:"standard",fullWidth:!0},e.createElement(D,{htmlFor:"color"},"\u6307\u5B9A\u8272"),e.createElement(be,{id:"color",value:n.color,label:"\u6307\u5B9A\u8272",onChange:u=>o(u.target.value)},Xe.map(u=>e.createElement(Oe,{key:u.key,value:u.key},u.name))))),e.createElement(r,{item:!0,xs:12},e.createElement(f,{variant:"standard",fullWidth:!0},e.createElement(D,{htmlFor:"number"},"\u756A\u53F7"),e.createElement(A,{id:"number",value:n.number,type:"number",onChange:u=>i(u.target.value)}))),e.createElement(p,{description:"\u5FDC\u63F4\u3055\u308C\u308B\u3068\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u5FDC\u63F4\u88DC\u6B63",value:n.support,onChange:u=>h(u)}),e.createElement(p,{description:"\u8ABF\u5B50\u304C\u3044\u3044\u3068\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u8ABF\u5B50\u88DC\u6B63",value:n.condition,onChange:u=>y(u)}),e.createElement(p,{description:"\u4E0A\u4F4D\u3092\u8D70\u3063\u3066\u3044\u308B\u3068\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u9806\u4F4D\u88DC\u6B63",value:n.ranking,onChange:u=>g(u)}),e.createElement(p,{description:"\u8D70\u3063\u305F\u8DDD\u96E2\u306B\u5FDC\u3058\u3066\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u8DDD\u96E2\u88DC\u6B63",value:n.distance,onChange:u=>d(u)}),e.createElement(p,{description:"\u4EBA\u6C17\u306B\u5FDC\u3058\u3066\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u4EBA\u6C17\u88DC\u6B63",value:n.popular,onChange:u=>C(u)}))),e.createElement(Pe,null,e.createElement(S,{onClick:()=>l()},"\u524A\u9664")))},ze=()=>{const n=$(),a={name:"",color:"",number:0,support:1,condition:1,ranking:1,distance:1,popular:1},[l,E]=m.exports.useState(!1),o=(t,c)=>{E(c)},[i,h]=m.exports.useState(!1),y=(t,c)=>{h(c)},[g,d]=m.exports.useState(F.getState().privateSettingReducer.niconicoUrl),C=t=>{d(t)},u=()=>{n({type:"UPDATE_NICONICO_URL",payload:g})},[w,V]=m.exports.useState(!1),Z=(t,c)=>{V(c)},[L,ee]=m.exports.useState(F.getState().privateSettingReducer.youtubeUrl),te=t=>{ee(t)},ne=()=>{n({type:"UPDATE_YOUTUBE_URL",payload:L})},[k,ue]=m.exports.useState(!1),ae=(t,c)=>{ue(c)},[H,re]=m.exports.useState(F.getState().privateSettingReducer.twitchUrl),le=t=>{re(t)},oe=()=>{n({type:"UPDATE_TWITCH_URL",payload:H})},ce=()=>{s.push(a),n({type:"UPDATE_RACEHORSES",payload:s.concat()})},se=()=>{s.forEach(t=>{const c=Math.floor(Math.random()*(100-0)+0),B=Math.floor(Math.random()*(100-0)+0),I=Math.floor(Math.random()*(100-0)+0),M=Math.floor(Math.random()*(100-0)+0),Fe=Math.floor(Math.random()*(100-0)+0);t.support=c,t.condition=B,t.ranking=I,t.distance=M,t.popular=Fe}),n({type:"UPDATE_RACEHORSES",payload:s.concat()})},ie=()=>{const t=Math.floor(Math.random()*(100-0)+0),c=Math.floor(Math.random()*(100-0)+0),B=Math.floor(Math.random()*(100-0)+0),I=Math.floor(Math.random()*(100-0)+0),M=Math.floor(Math.random()*(100-0)+0);Y(t),W(c),G(B),J(I),j(M)},[me,Ee]=m.exports.useState(!1),[T,Y]=m.exports.useState(0),[de,Ce]=m.exports.useState(!1),[b,W]=m.exports.useState(0),[pe,he]=m.exports.useState(!1),[O,G]=m.exports.useState(0),[Se,ge]=m.exports.useState(!1),[P,J]=m.exports.useState(0),[Ae,fe]=m.exports.useState(!1),[_,j]=m.exports.useState(0),De=t=>{s.forEach(c=>c.support=t),Y(t)},ye=t=>{s.forEach(c=>c.condition=t),W(t)},Be=t=>{s.forEach(c=>c.ranking=t),G(t)},Ue=t=>{s.forEach(c=>c.distance=t),J(t)},xe=t=>{s.forEach(c=>c.popular=t),j(t)};m.exports.useEffect(()=>{if(!me){Ee(!0);return}s.forEach(t=>t.support=T),n({type:"UPDATE_RACEHORSES",payload:s.concat()})},[T]),m.exports.useEffect(()=>{if(!de){Ce(!0);return}s.forEach(t=>t.condition=b),n({type:"UPDATE_RACEHORSES",payload:s.concat()})},[b]),m.exports.useEffect(()=>{if(!pe){he(!0);return}s.forEach(t=>t.ranking=O),n({type:"UPDATE_RACEHORSES",payload:s.concat()})},[O]),m.exports.useEffect(()=>{if(!Se){ge(!0);return}s.forEach(t=>t.distance=P),n({type:"UPDATE_RACEHORSES",payload:s.concat()})},[P]),m.exports.useEffect(()=>{if(!Ae){fe(!0);return}s.forEach(t=>t.popular=_),n({type:"UPDATE_RACEHORSES",payload:s.concat()})},[_]);const s=K(t=>t.racehorsesReducer.racehorses),Re=(t,c)=>{s[c]=t,n({type:"UPDATE_RACEHORSES",payload:s.concat()})},ve=t=>{s.splice(t,1),n({type:"UPDATE_RACEHORSES",payload:s.concat()})};return e.createElement(r,{container:!0},e.createElement(r,{item:!0,xs:12},"\u8A2D\u5B9A\u753B\u9762"),e.createElement(r,{container:!0,item:!0,xs:12},e.createElement(U,null,e.createElement(x,null,e.createElement(r,{item:!0,xs:12},e.createElement(X,null,e.createElement(R,{control:e.createElement(v,{checked:l,onChange:o}),label:"\u914D\u4FE1\u8005\u7528\u8A2D\u5B9A\u3092\u8868\u793A\u3059\u308B"}))),e.createElement(r,{item:!0,xs:12},l?e.createElement(X,null,e.createElement(r,{container:!0},e.createElement(r,{item:!0,xs:3},e.createElement(R,{control:e.createElement(v,{checked:i,onChange:y}),label:"\u30CB\u30B3\u30CB\u30B3URL"})),e.createElement(r,{item:!0,xs:6},i?e.createElement(f,{variant:"standard",fullWidth:!0},e.createElement(D,{htmlFor:"niconico"},"\u30CB\u30B3\u30CB\u30B3\u751F\u653E\u9001"),e.createElement(A,{id:"niconico",value:g,onChange:t=>C(t.target.value)})):null),e.createElement(r,{item:!0,xs:3},i?e.createElement(S,{variant:"contained",onClick:u},"\u66F4\u65B0"):null),e.createElement(r,{item:!0,xs:3},e.createElement(R,{control:e.createElement(v,{checked:w,onChange:Z}),label:"YoutubeURL"})),e.createElement(r,{item:!0,xs:6},w?e.createElement(f,{variant:"standard",fullWidth:!0},e.createElement(D,{htmlFor:"youtube"},"Youtube Live"),e.createElement(A,{id:"youtube",value:L,onChange:t=>te(t.target.value)})):null),e.createElement(r,{item:!0,xs:3},w?e.createElement(S,{variant:"contained",onClick:ne},"\u66F4\u65B0"):null),e.createElement(r,{item:!0,xs:3},e.createElement(R,{control:e.createElement(v,{checked:k,onChange:ae}),label:"TwitchURL"})),e.createElement(r,{item:!0,xs:6},k?e.createElement(f,{variant:"standard",fullWidth:!0},e.createElement(D,{htmlFor:"twitch"},"Twitch"),e.createElement(A,{id:"twitch",value:H,onChange:t=>le(t.target.value)})):null),e.createElement(r,{item:!0,xs:3},k?e.createElement(S,{variant:"contained",onClick:oe},"\u66F4\u65B0"):null))):null)))),e.createElement(r,{item:!0,xs:12},e.createElement(U,null,e.createElement(x,null,e.createElement(S,{variant:"contained",onClick:ce,disabled:s.length===Ke},"\u99AC\u8FFD\u52A0")))),e.createElement(r,{item:!0,xs:12},e.createElement(U,null,e.createElement(x,null,e.createElement(r,{container:!0},e.createElement(r,{item:!0,xs:12},"\u5171\u901A\u8A2D\u5B9A"),e.createElement(r,{item:!0,xs:2},e.createElement(S,{variant:"contained",onClick:se},"\u5B8C\u5168\u30E9\u30F3\u30C0\u30E0")),e.createElement(r,{item:!0,xs:2},e.createElement(S,{variant:"contained",onClick:ie},"\u7D71\u4E00\u30E9\u30F3\u30C0\u30E0")),e.createElement(p,{description:"\u5FDC\u63F4\u3055\u308C\u308B\u3068\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u5FDC\u63F4\u88DC\u6B63",value:T,onChange:t=>De(t)}),e.createElement(p,{description:"\u8ABF\u5B50\u304C\u3044\u3044\u3068\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u8ABF\u5B50\u88DC\u6B63",value:b,onChange:t=>ye(t)}),e.createElement(p,{description:"\u4E0A\u4F4D\u3092\u8D70\u3063\u3066\u3044\u308B\u3068\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u9806\u4F4D\u88DC\u6B63",value:O,onChange:t=>Be(t)}),e.createElement(p,{description:"\u8D70\u3063\u305F\u8DDD\u96E2\u306B\u5FDC\u3058\u3066\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u8DDD\u96E2\u88DC\u6B63",value:P,onChange:t=>Ue(t)}),e.createElement(p,{description:"\u4EBA\u6C17\u306B\u5FDC\u3058\u3066\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u4EBA\u6C17\u88DC\u6B63",value:_,onChange:t=>xe(t)}))))),e.createElement(r,{item:!0,container:!0,xs:12},s.map((t,c)=>e.createElement(r,{item:!0,xs:4,key:c},e.createElement(Q,{racehorse:t,onChange:B=>Re(B,c),onDelete:()=>ve(c)})))))};z(()=>({}));const Qe=()=>{$();const n=K(E=>E.racehorsesReducer.racehorses),a=(E,o)=>{},l=E=>{};return e.createElement(r,{container:!0},e.createElement(r,{item:!0,xs:12},"\u30B2\u30FC\u30E0\u753B\u9762"),e.createElement(r,{item:!0,container:!0,xs:12},n.map((E,o)=>e.createElement(r,{item:!0,xs:4,key:o},e.createElement(Q,{racehorse:E,onChange:i=>a(),onDelete:()=>l()})))))},Ve=z(()=>({})),Ze=()=>(Ve(),e.createElement("div",null,"TOP\u30DA\u30FC\u30B8")),et=()=>e.createElement(_e,null,e.createElement(Ie,null,e.createElement(N,{path:"/",component:Ze,exact:!0}),e.createElement(N,{path:"/config",component:ze,exact:!0}),e.createElement(N,{path:"/game",component:Qe,exact:!0}))),tt=Me({}),nt={},ut=()=>e.createElement(e.Fragment,null,e.createElement(Ne,{styles:nt}),e.createElement(Le,{theme:tt},e.createElement(et,null)));He.render(e.createElement(e.StrictMode,null,e.createElement(Ye,{store:F},e.createElement(ut,null))),document.getElementById("root"));
