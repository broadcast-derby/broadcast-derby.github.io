var Re=Object.defineProperty,Oe=Object.defineProperties;var Pe=Object.getOwnPropertyDescriptors;var ge=Object.getOwnPropertySymbols;var Le=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var he=(u,r,i)=>r in u?Re(u,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):u[r]=i,ie=(u,r)=>{for(var i in r||(r={}))Le.call(r,i)&&he(u,i,r[i]);if(ge)for(var i of ge(r))_e.call(r,i)&&he(u,i,r[i]);return u},se=(u,r)=>Oe(u,Pe(r));import{c as ke,a as Ue,b as Ge,t as Ke,s as O,S as Ce,R as e,G as n,T as me,I as fe,B as w,C as H,d as j,e as ye,u as Se,f as ne,r as h,A as Ne,g as Ve,h as He,i as Je,j as $e,k as je,l as ue,m as Q,n as X,o as Z,p as b,q as o,v as ee,w as ae,x as Ye,y as qe,z as Ie,F as ze,D as Qe,E as xe,H as Ae,J as Ee,K as Be,L as De,M as Fe,N as we,O as Xe,P as Ze,Q as de,U as et,V as tt,W as nt,X as ut,Y as at}from"./vendor.6565fc3d.js";const rt=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))m(d);new MutationObserver(d=>{for(const g of d)if(g.type==="childList")for(const C of g.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&m(C)}).observe(document,{childList:!0,subtree:!0});function i(d){const g={};return d.integrity&&(g.integrity=d.integrity),d.referrerpolicy&&(g.referrerPolicy=d.referrerpolicy),d.crossorigin==="use-credentials"?g.credentials="include":d.crossorigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function m(d){if(d.ep)return;d.ep=!0;const g=i(d);fetch(d.href,g)}};rt();const lt=[{key:"B",name:"\u9752\u8272",code:"#0000ff"},{key:"C",name:"\u30B7\u30A2\u30F3",code:"#9999ff"},{key:"G",name:"\u7DD1\u8272",code:"#00ff00"},{key:"I",name:"\u85CD\u8272",code:"#0000cc"},{key:"M",name:"\u30DE\u30BC\u30F3\u30BF",code:"#ff00ff"},{key:"O",name:"\u6A59\u8272",code:"#ffcc00"},{key:"P",name:"\u7D2B\u8272",code:"#990099"},{key:"R",name:"\u8D64\u8272",code:"#ff0000"},{key:"S",name:"\u9280\u8272",code:"#cccccc"},{key:"W",name:"\u767D\u8272",code:"#ffffff"},{key:"Y",name:"\u9EC4\u8272",code:"#ffff00"}],G=[{name:"\u5358\u52DD",description:"\u4E00\u7740\u306B\u306A\u308B\u9B5A\u3092\u5F53\u3066\u308B",racehorseCount:1,isCombination:!0,keyword:"t"},{name:"\u8907\u52DD",description:"\u4E09\u7740\u307E\u3067\u306B\u5165\u308B\u9B5A\u3092\u5F53\u3066\u308B",racehorseCount:1,isCombination:!0,keyword:"f"},{name:"\u9B5A\u9023",description:"\u4E00\u7740\u3068\u4E8C\u7740\u306E\u7D44\u307F\u5408\u308F\u305B\u3092\u5F53\u3066\u308B",racehorseCount:2,isCombination:!0,keyword:"ur"},{name:"\u9B5A\u5358",description:"\u4E00\u7740\u3068\u4E8C\u7740\u306E\u7740\u9806\u3092\u5F53\u3066\u308B",racehorseCount:2,isCombination:!1,keyword:"ut"},{name:"\u30EF\u30A4\u30C9",description:"\u4E09\u7740\u307E\u3067\u306B\u5165\u308B\u4E8C\u5C3E\u306E\u7D44\u307F\u5408\u308F\u305B\u3092\u5F53\u3066\u308B",racehorseCount:2,isCombination:!0,keyword:"w"},{name:"\u4E09\u9023\u8907",description:"\u4E09\u7740\u307E\u3067\u306E\u9B5A\u306E\u7D44\u307F\u5408\u308F\u305B\u3092\u5F53\u3066\u308B",racehorseCount:3,isCombination:!0,keyword:"3p"},{name:"\u4E09\u9023\u5358",description:"\u4E09\u7740\u307E\u3067\u306E\u9B5A\u306E\u7740\u9806\u3092\u5F53\u3066\u308B",racehorseCount:3,isCombination:!1,keyword:"3t"}],J=[{name:"\u30DE\u30B0\u30ED",color:"B",number:1,imagePath:"/Maguro.png",keywordRegexList:[/.*マ.*グ.*ロ.*/,/.*ま.*ぐ.*ろ.*/,/.*鮪.*/]},{name:"\u30B7\u30E3\u30B1",color:"C",number:2,imagePath:"/Sake.png",keywordRegexList:[/.*シャ.*ケ.*/,/.*しゃ.*け.*/,/.*鮭.*/,/.*サ.*ー.*モ.*ン.*/,/.*さ.*け.*/,/.*サ.*ケ.*/]},{name:"\u30AB\u30B8\u30AD",color:"G",number:3,imagePath:"/Kajiki.png",keywordRegexList:[/.*カ.*ジ.*キ.*/,/.*か.*じ.*き.*/]},{name:"\u30A2\u30B8",color:"I",number:4,imagePath:"/Aji.png",keywordRegexList:[/.*ア.*ジ.*/,/.*あ.*じ.*/,/.*鯵.*/,/.*鰺.*/]},{name:"\u30B5\u30D0",color:"M",number:5,imagePath:"/Saba.png",keywordRegexList:[/.*サ.*バ.*/,/.*さ.*ば.*/,/.*鯖.*/]},{name:"\u30AB\u30C4\u30AA",color:"O",number:6,imagePath:"/Katsuo.png",keywordRegexList:[/.*カ.*ツ.*オ.*/,/.*か.*つ.*お.*/,/.*鰹.*/]},{name:"\u30A4\u30AB",color:"P",number:7,imagePath:"/Ika.png",keywordRegexList:[/.*い.*か.*/,/.*イ.*カ.*/,/.*烏.*賊.*/]},{name:"\u30BF\u30B3",color:"R",number:8,imagePath:"/Tako.png",keywordRegexList:[/.*タ.*コ.*/,/.*た.*こ.*/,/.*蛸.*/]},{name:"\u30AB\u30B5\u30B4",color:"S",number:9,imagePath:"/Kasago.png",keywordRegexList:[/.*カ.*サ.*ゴ.*/,/.*か.*さ.*ご.*/]},{name:"\u30BF\u30A4",color:"W",number:10,imagePath:"/Tai.png",keywordRegexList:[/.*タ.*イ.*/,/.*た.*い.*/,/.*鯛.*/]},{name:"\u30D6\u30EA",color:"Y",number:11,imagePath:"/Buri.png",keywordRegexList:[/.*ブ.*リ.*/,/.*ぶ.*り.*/,/.*鰤.*/]}],be="ACTION_COMMENT_GET_COMMENTS",Te="ACTION_RACEHORSE_CONSISTENCY",k="ACTION_RACEHORSE_UPDATE_RACEHORSES",ve="ACTION_USER_CLEAN_BOUGHT_TICKETS",Me="ACTION_USER_BUY_TICKET",ot="ACTION_GET_USERS",pe="ACTION_UPDATE_USERS",ct=()=>({comments:[]}),it=(u=ct(),r)=>{switch(r.type){case be:return{comments:r.payload};default:return u}},st=()=>{let u=window.localStorage.getItem("racehorses");return u||(u="[]"),{racehorses:JSON.parse(u)}},mt=(u=st(),r)=>{switch(r.type){case k:return window.localStorage.setItem("racehorses",JSON.stringify(r.payload)),{racehorses:r.payload};case Te:let i=window.localStorage.getItem("racehorses");return i||(i="[]"),{racehorses:JSON.parse(i)};default:return u}},Et=()=>{let u=window.localStorage.getItem("users");return u||(u="[]"),{users:JSON.parse(u)}},dt=(u=Et(),r)=>{let i=window.localStorage.getItem("users");i||(i="[]");const m=JSON.parse(i);switch(r.type){case ve:return m.forEach(S=>S.boughtTickets=[]),window.localStorage.setItem("users",JSON.stringify(m)),{users:m};case Me:let d=null;for(let S=0;S<m.length;S++){const p=m[S];if(p.name===r.payload.userName&&p.service===r.payload.service){d=S;break}}const g={formula:r.payload.formula,racehorses:r.payload.racehorses,money:r.payload.money,refund:0};return d===null?m.push({name:r.payload.userName,service:r.payload.service,money:1e4,boughtTickets:[g]}):m[d].boughtTickets.push(g),window.localStorage.setItem("users",JSON.stringify(m)),{users:m};case ot:let C=window.localStorage.getItem("users");return C||(C="[]"),{users:JSON.stringify(C)};case pe:return window.localStorage.setItem("users",JSON.stringify(r.payload)),{users:r.payload};default:return u}},pt=ke({commentReducer:it,racehorsesReducer:mt,userReducer:dt}),gt=Ue(pt,Ge(Ke)),ht=O(Ce)({"& .MuiSlider-disabled":{color:"blue"}}),U=({description:u,max:r,min:i,title:m,value:d,onChange:g})=>{const C=f=>{g(f)},S=f=>{let T=f?Number(f):0;T<i?T=i:r<T&&(T=r),g(T)},p=()=>{g(Math.floor(Math.random()*(r-i)+i))};return e.createElement(n,{item:!0,container:!0,xs:12},e.createElement(n,{item:!0,xs:12},e.createElement(me,{gutterBottom:!0},m),e.createElement(me,{gutterBottom:!0},u)),e.createElement(e.Fragment,null,e.createElement(n,{item:!0,xs:6},e.createElement(ht,{value:d,onChange:(f,T)=>C(T),min:i,max:r})),e.createElement(n,{item:!0,xs:1},e.createElement(fe,{fullWidth:!0,value:d,onChange:f=>S(f.target.value),inputProps:{min:i,max:r,type:"number"}})),e.createElement(n,{item:!0,xs:3},e.createElement(w,{variant:"contained",onClick:p},"\u30E9\u30F3\u30C0\u30E0"))))},Ct=({racehorse:u,onChange:r,onDelete:i})=>{const m=p=>{u.support=p,r(u)},d=p=>{u.condition=p,r(u)},g=p=>{u.ranking=p,r(u)},C=p=>{u.distance=p,r(u)},S=p=>{u.popular=p,r(u)};return e.createElement(H,null,e.createElement(j,null,e.createElement(n,{container:!0},e.createElement(n,{item:!0,xs:12},e.createElement(n,{container:!0},e.createElement(n,{item:!0,xs:3},"\u540D\u524D"),e.createElement(n,{item:!0,xs:9},u.name))),e.createElement(n,{item:!0,xs:12},e.createElement(n,{container:!0},e.createElement(n,{item:!0,xs:3},"\u6307\u5B9A\u8272"),e.createElement(n,{item:!0,xs:9},u.color))),e.createElement(n,{item:!0,xs:12},e.createElement(n,{container:!0},e.createElement(n,{item:!0,xs:3},"\u756A\u53F7"),e.createElement(n,{item:!0,xs:9},u.number))),e.createElement(U,{description:"\u5FDC\u63F4\u3055\u308C\u308B\u3068\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u5FDC\u63F4\u88DC\u6B63",value:u.support,onChange:p=>m(p)}),e.createElement(U,{description:"\u8ABF\u5B50\u304C\u3044\u3044\u3068\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u8ABF\u5B50\u88DC\u6B63",value:u.condition,onChange:p=>d(p)}),e.createElement(U,{description:"\u4E0A\u4F4D\u3092\u8D70\u3063\u3066\u3044\u308B\u3068\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u9806\u4F4D\u88DC\u6B63",value:u.ranking,onChange:p=>g(p)}),e.createElement(U,{description:"\u8D70\u3063\u305F\u8DDD\u96E2\u306B\u5FDC\u3058\u3066\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u8DDD\u96E2\u88DC\u6B63",value:u.distance,onChange:p=>C(p)}),e.createElement(U,{description:"\u4EBA\u6C17\u306B\u5FDC\u3058\u3066\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u4EBA\u6C17\u88DC\u6B63",value:u.popular,onChange:p=>S(p)}))),e.createElement(ye,null,e.createElement(w,{onClick:()=>i()},"\u524A\u9664")))},ft=()=>{const u=Se(),r=ne(E=>E.racehorsesReducer.racehorses),i=()=>{const E=J.find(t=>!r.find(c=>c.number===t.number));if(E===void 0)return;const B=se(ie({},E),{support:1,condition:1,ranking:1,distance:1,popular:1});r.push(B),u({type:k,payload:r.concat()})},m=()=>{r.forEach(E=>{const B=Math.floor(Math.random()*(100-0)+0),t=Math.floor(Math.random()*(100-0)+0),c=Math.floor(Math.random()*(100-0)+0),s=Math.floor(Math.random()*(100-0)+0),a=Math.floor(Math.random()*(100-0)+0);E.support=B,E.condition=t,E.ranking=c,E.distance=s,E.popular=a}),u({type:k,payload:r.concat()})},d=()=>{const E=Math.floor(Math.random()*(100-0)+0),B=Math.floor(Math.random()*(100-0)+0),t=Math.floor(Math.random()*(100-0)+0),c=Math.floor(Math.random()*(100-0)+0),s=Math.floor(Math.random()*(100-0)+0);p(E),x(B),F(t),$(c),L(s)},[g,C]=h.exports.useState(!1),[S,p]=h.exports.useState(0),[f,T]=h.exports.useState(!1),[P,x]=h.exports.useState(0),[v,D]=h.exports.useState(!1),[W,F]=h.exports.useState(0),[M,Y]=h.exports.useState(!1),[N,$]=h.exports.useState(0),[K,q]=h.exports.useState(!1),[A,L]=h.exports.useState(0),re=E=>{r.forEach(B=>B.support=E),p(E)},le=E=>{r.forEach(B=>B.condition=E),x(E)},I=E=>{r.forEach(B=>B.ranking=E),F(E)},oe=E=>{r.forEach(B=>B.distance=E),$(E)},R=E=>{r.forEach(B=>B.popular=E),L(E)};h.exports.useEffect(()=>{if(!g){C(!0);return}r.forEach(E=>E.support=S),u({type:k,payload:r.concat()})},[S]),h.exports.useEffect(()=>{if(!f){T(!0);return}r.forEach(E=>E.condition=P),u({type:k,payload:r.concat()})},[P]),h.exports.useEffect(()=>{if(!v){D(!0);return}r.forEach(E=>E.ranking=W),u({type:k,payload:r.concat()})},[W]),h.exports.useEffect(()=>{if(!M){Y(!0);return}r.forEach(E=>E.distance=N),u({type:k,payload:r.concat()})},[N]),h.exports.useEffect(()=>{if(!K){q(!0);return}r.forEach(E=>E.popular=A),u({type:k,payload:r.concat()})},[A]);const ce=(E,B)=>{r[B]=E,u({type:k,payload:r.concat()})},z=E=>{r.splice(E,1),u({type:k,payload:r.concat()})};return e.createElement(H,null,e.createElement(n,{container:!0},e.createElement(n,{item:!0,xs:12},e.createElement(H,null,e.createElement(j,null,e.createElement(w,{variant:"contained",onClick:i,disabled:r.length===J.length},"\u9B5A\u8FFD\u52A0")))),e.createElement(n,{item:!0,xs:12},e.createElement(H,null,e.createElement(j,null,e.createElement(n,{container:!0},e.createElement(n,{item:!0,xs:12},"\u5171\u901A\u8A2D\u5B9A"),e.createElement(n,{item:!0,xs:2},e.createElement(w,{variant:"contained",onClick:m},"\u5B8C\u5168\u30E9\u30F3\u30C0\u30E0")),e.createElement(n,{item:!0,xs:2},e.createElement(w,{variant:"contained",onClick:d},"\u7D71\u4E00\u30E9\u30F3\u30C0\u30E0")),e.createElement(U,{description:"\u5FDC\u63F4\u3055\u308C\u308B\u3068\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u5FDC\u63F4\u88DC\u6B63",value:S,onChange:E=>re(E)}),e.createElement(U,{description:"\u8ABF\u5B50\u304C\u3044\u3044\u3068\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u8ABF\u5B50\u88DC\u6B63",value:P,onChange:E=>le(E)}),e.createElement(U,{description:"\u4E0A\u4F4D\u3092\u8D70\u3063\u3066\u3044\u308B\u3068\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u9806\u4F4D\u88DC\u6B63",value:W,onChange:E=>I(E)}),e.createElement(U,{description:"\u8D70\u3063\u305F\u8DDD\u96E2\u306B\u5FDC\u3058\u3066\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u8DDD\u96E2\u88DC\u6B63",value:N,onChange:E=>oe(E)}),e.createElement(U,{description:"\u4EBA\u6C17\u306B\u5FDC\u3058\u3066\u30B9\u30D4\u30FC\u30C9\u304C\u4E0A\u304C\u308A\u307E\u3059",max:100,min:0,title:"\u4EBA\u6C17\u88DC\u6B63",value:A,onChange:E=>R(E)}))))),e.createElement(n,{item:!0,container:!0,xs:12},r.map((E,B)=>e.createElement(n,{item:!0,xs:4,key:B},e.createElement(Ct,{racehorse:E,onChange:t=>ce(t,B),onDelete:()=>z(B)}))))))},yt=()=>e.createElement(n,{container:!0},e.createElement(n,{item:!0,xs:12},"\u8A2D\u5B9A\u753B\u9762"),e.createElement(n,{item:!0,xs:12},e.createElement(Ne,null,e.createElement(Ve,{expandIcon:e.createElement(He,null),"aria-controls":"panel1a-content",id:"panel1a-header"},e.createElement(me,null,"\u51FA\u6CF3\u9B5A\u60C5\u5831")),e.createElement(Je,null,e.createElement(ft,null))))),St=$e.create({}),xt=new window.DOMParser,At=async u=>{const r=await St.get("/setting/comment.xml"),i=xt.parseFromString(r.data,"text/xml"),m=[],d=i.getElementsByTagName("comment");for(let g=0;g<d.length;g++){const C=d[g];if(C){const S=C.getAttributeNode("time"),p=C.getAttributeNode("no"),f=C.getAttributeNode("owner"),T=C.getAttributeNode("handle"),P=C.getAttributeNode("service"),x=C.firstChild,v={time:S?Number(S.value):0,no:p?Number(p.value):0,owner:f?Number(f.value):0,userName:T?T.value:"",service:P?P.value:"",content:x?x.nodeValue:""};m.push(v)}}u({type:be,payload:m})},_=O(Ce)({height:8,"& .MuiSlider-rail":{opacity:0},"& .MuiSlider-track":{opacity:0},"& .MuiSlider-thumb":{borderRadius:"0%",backgroundColor:je("#ffffff",0)},"& .MuiSlider-thumb:before":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}}),Bt=O(_)({"& .MuiSlider-thumb":{height:100,width:370,backgroundImage:"url(Aji.png)"}}),Dt=O(_)({"& .MuiSlider-thumb":{height:100,width:450,backgroundImage:"url(Buri.png)"}}),Ft=O(_)({"& .MuiSlider-thumb":{height:100,width:414,backgroundImage:"url(Ika.png)"}}),wt=O(_)({"& .MuiSlider-thumb":{height:100,width:442,backgroundImage:"url(Kajiki.png)"}}),bt=O(_)({"& .MuiSlider-thumb":{height:100,width:334,backgroundImage:"url(Kasago.png)"}}),Tt=O(_)({"& .MuiSlider-thumb":{height:100,width:376,backgroundImage:"url(Katsuo.png)"}}),vt=O(_)({"& .MuiSlider-thumb":{height:100,width:392,backgroundImage:"url(Maguro.png)"}}),Mt=O(_)({"& .MuiSlider-thumb":{height:100,width:594,backgroundImage:"url(Saba.png)"}}),Wt=O(_)({"& .MuiSlider-thumb":{height:100,width:544,backgroundImage:"url(Sake.png)"}}),Rt=O(_)({"& .MuiSlider-thumb":{height:100,width:320,backgroundImage:"url(Tai.png)"}}),Ot=O(_)({"& .MuiSlider-thumb":{height:100,width:326,backgroundImage:"url(Tako.png)"}}),Pt=({realRacehorses:u,onGoal:r})=>{const[i,m]=h.exports.useState([]),[d,g]=h.exports.useState(!1);h.exports.useEffect(()=>{m(u.concat())},[]);const C=()=>{g(!0)},S=200,[p,f]=h.exports.useState([]);h.exports.useEffect(()=>{if(!d)return;let x=setInterval(()=>{const v=1,D=50,W=[];i.map(F=>{F.runValue+=Math.floor(Math.random()*(D-v)+v+(F.supportPower>0?25:0)),1e4<=F.runValue&&!p.includes(F.number)&&(p.push(F.number),f(p.concat())),F.supportPower>0&&F.supportPower--,W.push(F)}),m(W.concat())},S);return()=>{x&&(clearInterval(x),x=void 0)}},[d]);const T=[vt,Wt,wt,Bt,Mt,Tt,Ft,Ot,bt,Rt,Dt];h.exports.useEffect(()=>{p.length===0||p.length!==i.length||r(p)},[p]);const P=x=>{const v=J.find(D=>D.number===x);if(v)return v.name};return e.createElement(n,{container:!0},e.createElement(n,{item:!0,xs:12},e.createElement(w,{variant:"contained",onClick:C},"\u30B9\u30BF\u30FC\u30C8")),i.map((x,v)=>e.createElement(e.Fragment,{key:v},e.createElement(n,{item:!0,xs:3},x.name),e.createElement(n,{item:!0,xs:9},T.map((D,W)=>e.createElement(e.Fragment,{key:W},W+1===x.number?e.createElement(D,{min:0,max:1e4,value:x.runValue}):null))))),e.createElement(n,{item:!0,xs:12},e.createElement(n,{container:!0},p.map((x,v)=>e.createElement(e.Fragment,{key:v},e.createElement(n,{item:!0,xs:3},v+1,"\u7740"),e.createElement(n,{item:!0,xs:9},P(x)))))))},Lt=({raceResult:u})=>{const r=i=>{const m=J.find(d=>d.number===i);if(m)return m.name};return e.createElement(ue,{maxWidth:"xs"},e.createElement(n,{container:!0},e.createElement(n,{item:!0,xs:12},e.createElement(Q,null,e.createElement(X,null,e.createElement(Z,null,e.createElement(b,null,e.createElement(o,null,"\u7740\u9806"),e.createElement(o,{align:"right"},"\u756A\u53F7"),e.createElement(o,{align:"right"},"\u51FA\u8D70\u9B5A"))),e.createElement(ee,null,u.top3Numbers.map((i,m)=>e.createElement(e.Fragment,{key:m},e.createElement(b,null,e.createElement(o,{component:"th",scope:"row"},m+1),e.createElement(o,{align:"right"},i),e.createElement(o,{align:"right"},r(i))))))))),e.createElement(n,{item:!0,xs:12},e.createElement(Q,null,e.createElement(X,null,e.createElement(Z,null,e.createElement(b,null,e.createElement(o,null,"\u5F0F\u5225"),e.createElement(o,{align:"right"},"\u756A\u53F7"),e.createElement(o,{align:"right"},"\u91D1\u984D\u30EC\u30FC\u30C8"),e.createElement(o,{align:"right"},"\u4EBA\u6C17"))),e.createElement(ee,null,e.createElement(b,null,e.createElement(o,{component:"th",scope:"row"},"\u5358\u52DD"),e.createElement(o,{align:"right"},u.singleWin.displayNumber),e.createElement(o,{align:"right"},u.singleWin.money),e.createElement(o,{align:"right"},u.singleWin.popular,"\u4EBA\u6C17")),e.createElement(b,null,e.createElement(o,{component:"th",scope:"row"},"\u8907\u52DD"),e.createElement(o,{align:"right"},u.doubleWin[0].displayNumber),e.createElement(o,{align:"right"},u.doubleWin[0].money),e.createElement(o,{align:"right"},u.doubleWin[0].popular,"\u4EBA\u6C17")),e.createElement(b,null,e.createElement(o,{component:"th",scope:"row"},"\u8907\u52DD"),e.createElement(o,{align:"right"},u.doubleWin[1].displayNumber),e.createElement(o,{align:"right"},u.doubleWin[1].money),e.createElement(o,{align:"right"},u.doubleWin[1].popular,"\u4EBA\u6C17")),e.createElement(b,null,e.createElement(o,{component:"th",scope:"row"},"\u8907\u52DD"),e.createElement(o,{align:"right"},u.doubleWin[2].displayNumber),e.createElement(o,{align:"right"},u.doubleWin[2].money),e.createElement(o,{align:"right"},u.doubleWin[2].popular,"\u4EBA\u6C17")),e.createElement(b,null,e.createElement(o,{component:"th",scope:"row"},"\u9B5A\u9023"),e.createElement(o,{align:"right"},u.compoundWin.displayNumber),e.createElement(o,{align:"right"},u.compoundWin.money),e.createElement(o,{align:"right"},u.compoundWin.popular,"\u4EBA\u6C17")),e.createElement(b,null,e.createElement(o,{component:"th",scope:"row"},"\u9B5A\u5358"),e.createElement(o,{align:"right"},u.continueWin.displayNumber),e.createElement(o,{align:"right"},u.continueWin.money),e.createElement(o,{align:"right"},u.continueWin.popular,"\u4EBA\u6C17")),e.createElement(b,null,e.createElement(o,{component:"th",scope:"row"},"\u30EF\u30A4\u30C9"),e.createElement(o,{align:"right"},u.wideWin[0].displayNumber),e.createElement(o,{align:"right"},u.wideWin[0].money),e.createElement(o,{align:"right"},u.wideWin[0].popular,"\u4EBA\u6C17")),e.createElement(b,null,e.createElement(o,{component:"th",scope:"row"},"\u30EF\u30A4\u30C9"),e.createElement(o,{align:"right"},u.wideWin[1].displayNumber),e.createElement(o,{align:"right"},u.wideWin[1].money),e.createElement(o,{align:"right"},u.wideWin[1].popular,"\u4EBA\u6C17")),e.createElement(b,null,e.createElement(o,{component:"th",scope:"row"},"\u30EF\u30A4\u30C9"),e.createElement(o,{align:"right"},u.wideWin[2].displayNumber),e.createElement(o,{align:"right"},u.wideWin[2].money),e.createElement(o,{align:"right"},u.wideWin[2].popular,"\u4EBA\u6C17")),e.createElement(b,null,e.createElement(o,{component:"th",scope:"row"},"\u4E09\u9023\u8907"),e.createElement(o,{align:"right"},u.trifectaWin.displayNumber),e.createElement(o,{align:"right"},u.trifectaWin.money),e.createElement(o,{align:"right"},u.trifectaWin.popular,"\u4EBA\u6C17")),e.createElement(b,null,e.createElement(o,{component:"th",scope:"row"},"\u4E09\u9023\u5358"),e.createElement(o,{align:"right"},u.tripleWin.displayNumber),e.createElement(o,{align:"right"},u.tripleWin.money),e.createElement(o,{align:"right"},u.tripleWin.popular,"\u4EBA\u6C17"))))))))};ae(()=>({}));const _t=({realRacehorses:u})=>e.createElement(n,{container:!0},u.map((r,i)=>e.createElement(n,{item:!0,xs:4,key:i},e.createElement(H,null,e.createElement(j,null,e.createElement(n,{container:!0},e.createElement(n,{item:!0,xs:12},e.createElement(n,{container:!0},e.createElement(n,{item:!0,xs:12},e.createElement("img",{src:r.imagePath})),e.createElement(n,{item:!0,xs:3},"\u540D\u524D"),e.createElement(n,{item:!0,xs:9},r.name))),e.createElement(n,{item:!0,xs:12},e.createElement(n,{container:!0},e.createElement(n,{item:!0,xs:3},"\u6307\u5B9A\u8272"),e.createElement(n,{item:!0,xs:9},r.color))),e.createElement(n,{item:!0,xs:12},e.createElement(n,{container:!0},e.createElement(n,{item:!0,xs:3},"\u756A\u53F7"),e.createElement(n,{item:!0,xs:9},r.number)))))))));ae(()=>({}));const kt=()=>{const u=500,r=ne(t=>t.commentReducer.comments),[i,m]=h.exports.useState(Math.floor(new Date().getTime()/1e3)),[d,g]=h.exports.useState(-1),C=(t,c,s,a,l)=>l===""?!1:t<s?!0:t===s&&c<a;h.exports.useEffect(()=>{const t=[];r.map(c=>{!C(i,d,c.time,c.no,c.content)||(m(c.time),g(c.no),c.owner!==1&&t.push(c))}),t.length!==0&&p(t.concat())},[r]),h.exports.useEffect(()=>{let t=setInterval(()=>{f(At)},u);return()=>{t&&(clearInterval(t),t=void 0)}},[]);const[S,p]=h.exports.useState([]),f=Se(),T=ne(t=>t.racehorsesReducer.racehorses),P=["\u5F85\u6A5F\u4E2D","\u51FA\u6CF3\u9B5A\u7D39\u4ECB","\u9B5A\u5238\u8CFC\u5165\u7DE0\u3081\u5207\u308A","\u30EC\u30FC\u30B9","\u7D50\u679C\u8868\u793A"],[x,v]=e.useState(0),[D,W]=h.exports.useState([]),F=ne(t=>t.userReducer.users),[M,Y]=h.exports.useState(0),[N,$]=h.exports.useState(0),K=t=>()=>{if(!(I===null&&t===4)){switch(t){case 0:F.map(a=>a.boughtTickets=[]),f({type:pe,payload:F});case 1:f({type:Te}),f({type:ve}),setTimeout(()=>{const a=[];T.map(l=>{const y=se(ie({},l),{currentCondition:Math.floor(Math.random()*100),runValue:0,supportPower:0,odds:0,singleMoney:0,votes:0,popularPower:0});a.push(y)}),W(a)},0);break;case 2:let c=0,s=0;F.map(a=>{a.boughtTickets.map(l=>{if(c+=l.money,l.racehorses.map(y=>{const V=D.find(te=>te.number===y);V&&(V.votes++,s++)}),l.formula===0){const y=D.find(V=>V.number===l.racehorses[0]);y&&(y.singleMoney+=l.money)}})}),D.map(a=>{a.odds=a.singleMoney?Math.round(c/a.singleMoney*100)/100:0,a.popularPower=a.votes?Math.round(a.votes/s*100)/100:0}),W(D.concat()),Y(c),$(s)}v(t)}},q=t=>t.match(/^((t|f)([1-9]{1}\d{0,1})|((u(r|t)|w)[1-9]{1}\d{0,1}-[1-9]{1}\d{0,1})|3(p|t)[1-9]{1}\d{0,1}-[1-9]{1}\d{0,1}-[1-9]{1}\d{0,1}) ([1-9]{1}\d{0,6})$/),A=(t,c,s)=>{let a=0;switch(!0){case/^t/.test(s):a=0;break;case/^f/.test(s):a=1;break;case/^ur/.test(s):a=2;break;case/^ut/.test(s):a=3;break;case/^w/.test(s):a=4;break;case/^3p/.test(s):a=5;break;case/^3t/.test(s):a=6;break}const l=s.replace(/^(t|f|ur|ut|w|3p|3t)/,"").split(/[- ]/),y=[];let V=0;l.forEach((te,We)=>{We===l.length-1?V=Number(te):y.push(Number(te))}),f({type:Me,payload:{userName:t,service:c,formula:a,racehorses:y,money:V}})},L=10,re=1,le=t=>{D.map(c=>{c.supportPower+=re;const s=J.find(l=>l.number===c.number);let a;s?a=s.keywordRegexList:a=[],a.map(l=>{if(t.match(l)){c.supportPower+=L;return}})}),W(D.concat())};h.exports.useEffect(()=>{switch(x){case 1:S.map(t=>{q(t.content)&&A(t.userName,t.service,t.content)});break;case 3:S.map(t=>{le(t.content)});break}},[S]);const[I,oe]=h.exports.useState(null),R=(t,c,s)=>{const a=[];c.map(y=>{console.log(`formula:${y.formula}`),console.log(`racehorses:${JSON.stringify(y.racehorses)}`),s(y.formula,y.racehorses)&&(console.log("ticket push!"),a.push(y))}),console.log(`filteringTicketLength:${a.length}`);let l=0;return a.map(y=>{l+=y.money}),l===0?0:Math.round(t/l*100)/100},ce=t=>{console.log(`totalMoney:${M}`),console.log(`rankInNumbers:${JSON.stringify(t)}`);const c=[];F.map(a=>a.boughtTickets.map(l=>c.push(l))),console.log(`allTicketsLength:${c.length}`);const s={top3Numbers:t.filter((a,l)=>l<3),singleWin:{money:R(M,c,(a,l)=>a===0&&l[0]===t[0]),popular:c.filter(a=>a.formula===0&&a.racehorses[0]===t[0]).length,displayNumber:t[0].toString()},doubleWin:[{money:R(M,c,(a,l)=>a===1&&l[0]===t[0]),popular:c.filter(a=>a.formula===1&&a.racehorses[0]===t[0]).length,displayNumber:t[0].toString()},{money:R(M,c,(a,l)=>a===1&&l[0]===t[1]),popular:c.filter(a=>a.formula===1&&a.racehorses[0]===t[1]).length,displayNumber:t[1].toString()},{money:R(M,c,(a,l)=>a===1&&l[0]===t[2]),popular:c.filter(a=>a.formula===1&&a.racehorses[0]===t[2]).length,displayNumber:t[2].toString()}],compoundWin:{money:R(M,c,(a,l)=>a===2&&l.includes(t[0])&&l.includes(t[1])),popular:c.filter(a=>a.formula===2&&a.racehorses.includes(t[0])&&a.racehorses.includes(t[1])).length,displayNumber:t[0]+"-"+t[1]},continueWin:{money:R(M,c,(a,l)=>a===3&&l[0]===t[0]&&l[1]===t[1]),popular:c.filter(a=>a.formula===3&&a.racehorses[0]===t[0]&&a.racehorses[1]===t[1]).length,displayNumber:t[0]+"-"+t[1]},wideWin:[{money:R(M,c,(a,l)=>a===4&&l.includes(t[0])&&l.includes(t[1])),popular:c.filter(a=>a.formula===4&&a.racehorses.includes(t[0])&&a.racehorses.includes(t[1])).length,displayNumber:t[0]+"-"+t[1]},{money:R(M,c,(a,l)=>a===4&&l.includes(t[1])&&l.includes(t[2])),popular:c.filter(a=>a.formula===4&&a.racehorses.includes(t[1])&&a.racehorses.includes(t[2])).length,displayNumber:t[1]+"-"+t[2]},{money:R(M,c,(a,l)=>a===4&&l.includes(t[0])&&l.includes(t[2])),popular:c.filter(a=>a.formula===4&&a.racehorses.includes(t[0])&&a.racehorses.includes(t[2])).length,displayNumber:t[0]+"-"+t[2]}],trifectaWin:{money:R(M,c,(a,l)=>a===5&&l.includes(t[0])&&l.includes(t[1])&&l.includes(t[2])),popular:c.filter(a=>a.formula===5&&a.racehorses.includes(t[0])&&a.racehorses.includes(t[1])&&a.racehorses.includes(t[2])).length,displayNumber:t[0]+"-"+t[1]+"-"+t[2]},tripleWin:{money:R(M,c,(a,l)=>a===6&&l[0]===t[0]&&l[1]===t[1]&&l[2]===t[2]),popular:c.filter(a=>a.formula===6&&a.racehorses[0]===t[0]&&a.racehorses[1]===t[1]&&a.racehorses[2]===t[2]).length,displayNumber:t[0]+"-"+t[1]+"-"+t[2]}};s.singleWin.money=s.singleWin.money===1/0?0:s.singleWin.money,s.doubleWin.map(a=>a.money=a.money===1/0?0:a.money),s.compoundWin.money=s.compoundWin.money===1/0?0:s.compoundWin.money,s.continueWin.money=s.continueWin.money===1/0?0:s.continueWin.money,s.wideWin.map(a=>a.money=a.money===1/0?0:a.money),s.trifectaWin.money=s.trifectaWin.money===1/0?0:s.trifectaWin.money,s.tripleWin.money=s.tripleWin.money===1/0?0:s.tripleWin.money,oe(s),F.map(a=>{a.money-=a.boughtTickets.reduce((l,y)=>l+y.money,0),a.boughtTickets.map(l=>{let y=0;switch(l.formula){case 0:l.racehorses[0]===t[0]&&(y=s.singleWin.money);break;case 1:l.racehorses[0]===t[0]?y=s.doubleWin[0].money:l.racehorses[0]===t[1]?y=s.doubleWin[1].money:l.racehorses[0]===t[2]&&(y=s.doubleWin[2].money);break;case 2:l.racehorses.includes(t[0])&&l.racehorses.includes(t[1])&&(y=s.compoundWin.money);break;case 3:l.racehorses[0]===t[0]&&l.racehorses[1]===t[1]&&(y=s.continueWin.money);break;case 4:l.racehorses.includes(t[0])&&l.racehorses.includes(t[1])?y=s.wideWin[0].money:l.racehorses.includes(t[1])&&l.racehorses.includes(t[2])?y=s.wideWin[1].money:l.racehorses.includes(t[0])&&l.racehorses.includes(t[2])&&(y=s.wideWin[2].money);break;case 5:l.racehorses.includes(t[0])&&l.racehorses.includes(t[1])&&l.racehorses.includes(t[2])&&(y=s.trifectaWin.money);break;case 6:l.racehorses[0]===t[0]&&l.racehorses[1]===t[1]&&l.racehorses[2]===t[2]&&(y=s.tripleWin.money);break}l.refund=y===0?0:Math.round(y*l.money),console.log(`ticket.refund:${l.refund}`),a.money+=l.refund})}),f({type:pe,payload:F})},[z,E]=h.exports.useState("race"),B=(t,c)=>{E(c)};return e.createElement(n,{container:!0},e.createElement(n,{item:!0,xs:12},"\u30B2\u30FC\u30E0\u753B\u9762"),e.createElement(n,{item:!0,xs:12},e.createElement(Ye,{nonLinear:!0,activeStep:x},P.map((t,c)=>e.createElement(qe,{key:t},e.createElement(Ie,{color:"inherit",onClick:K(c)},t))))),x===0?e.createElement(n,{item:!0,container:!0,xs:12},e.createElement(n,{item:!0,xs:12},S.map((t,c)=>e.createElement("div",{key:c},t.content))),e.createElement(n,{item:!0,xs:12},"\u53C2\u52A0\u8005\u30EA\u30B9\u30C8"),e.createElement(n,{item:!0,xs:12},e.createElement(ue,{maxWidth:"md"},e.createElement(Q,null,e.createElement(X,null,e.createElement(Z,null,e.createElement(b,null,e.createElement(o,null,"\u30B5\u30FC\u30D3\u30B9\u540D"),e.createElement(o,null,"\u30E6\u30FC\u30B6\u540D"),e.createElement(o,null,"\u6240\u6301\u91D1(10,000\u30B9\u30BF\u30FC\u30C8)"))),e.createElement(ee,null,F.map((t,c)=>e.createElement(b,{key:c},e.createElement(o,null,t.service),e.createElement(o,null,t.name),e.createElement(o,null,t.money.toLocaleString()))))))))):null,x===1?e.createElement(n,{item:!0,xs:12},e.createElement(_t,{realRacehorses:D})):null,x===2?e.createElement(n,{item:!0,container:!0,xs:12},e.createElement(n,{item:!0,xs:12},"\u9B5A\u5238\u91D1\u984D\u5408\u8A08:",M.toLocaleString()),e.createElement(n,{item:!0,xs:12},"\u5408\u8A08\u6307\u540D\u6570:",N.toLocaleString()),e.createElement(n,{item:!0,xs:12},e.createElement(Q,null,e.createElement(X,null,e.createElement(Z,null,e.createElement(b,null,e.createElement(o,null,"\u51FA\u8D70\u9B5A"),e.createElement(o,{align:"right"},"\u756A\u53F7"),e.createElement(o,{align:"right"},"\u4EBA\u6C17\u5EA6"),e.createElement(o,{align:"right"},"\u5358\u52DD\u500D\u7387"))),e.createElement(ee,null,D.map(t=>e.createElement(b,{key:t.number},e.createElement(o,{component:"th",scope:"row"},t.name),e.createElement(o,{align:"right"},t.number),e.createElement(o,{align:"right"},(t.popularPower*100).toString().split(".")[0],"%"),e.createElement(o,{align:"right"},t.odds,"\u500D")))))))):null,x===3?e.createElement(n,{item:!0,container:!0,xs:12},e.createElement(n,{item:!0,xs:12},"."),e.createElement(Pt,{realRacehorses:D,onGoal:ce})):null,x===4?e.createElement(n,{item:!0,container:!0,xs:12},e.createElement(n,{item:!0,xs:12},e.createElement(ze,{component:"fieldset"},e.createElement(Qe,{defaultValue:"race",name:"radio-buttons-group",value:z,onChange:B},e.createElement(xe,{value:"race",control:e.createElement(Ae,null),label:"\u30EC\u30FC\u30B9\u7D50\u679C"}),e.createElement(xe,{value:"money",control:e.createElement(Ae,null),label:"\u6255\u623B\u91D1"})))),e.createElement(n,{item:!0,xs:12},z==="race"&&I!==null?e.createElement(Lt,{raceResult:I}):null,z==="money"?e.createElement(ue,{maxWidth:"md"},e.createElement(Q,null,e.createElement(X,null,e.createElement(Z,null,e.createElement(b,null,e.createElement(o,null,"\u30B5\u30FC\u30D3\u30B9\u540D"),e.createElement(o,null,"\u30E6\u30FC\u30B6\u540D"),e.createElement(o,{align:"right"},"\u5F0F\u5225"),e.createElement(o,{align:"right"},"\u9B5A\u5238"),e.createElement(o,{align:"right"},"\u8CFC\u5165\u91D1\u984D"),e.createElement(o,{align:"right"},"\u6255\u3044\u623B\u3057\u91D1\u984D"))),e.createElement(ee,null,F.map(t=>t.boughtTickets.map(c=>e.createElement(b,null,e.createElement(o,{component:"th",scope:"row"},t.service),e.createElement(o,null,t.name),e.createElement(o,null,G[c.formula].name),e.createElement(o,null,c.racehorses.reduce((s,a,l)=>s+a+(l===c.racehorses.length-1?"":"-"),"")),e.createElement(o,{align:"right"},c.money.toLocaleString()),e.createElement(o,{align:"right"},c.refund.toLocaleString())))))))):null)):null)},Ut=({max:u,value:r,onChange:i})=>{const m=g=>{r.toString().length!==u&&i(r===0?g:r*10+g)},d=()=>{i(0)};return e.createElement(n,{container:!0},e.createElement(n,{item:!0,xs:12},r.toLocaleString()),e.createElement(n,{item:!0,container:!0,xs:12},e.createElement(n,{item:!0,xs:4},e.createElement(w,{variant:"contained",onClick:()=>m(7)},"7")),e.createElement(n,{item:!0,xs:4},e.createElement(w,{variant:"contained",onClick:()=>m(8)},"8")),e.createElement(n,{item:!0,xs:4},e.createElement(w,{variant:"contained",onClick:()=>m(9)},"9"))),e.createElement(n,{item:!0,container:!0,xs:12},e.createElement(n,{item:!0,xs:4},e.createElement(w,{variant:"contained",onClick:()=>m(4)},"4")),e.createElement(n,{item:!0,xs:4},e.createElement(w,{variant:"contained",onClick:()=>m(5)},"5")),e.createElement(n,{item:!0,xs:4},e.createElement(w,{variant:"contained",onClick:()=>m(6)},"6"))),e.createElement(n,{item:!0,container:!0,xs:12},e.createElement(n,{item:!0,xs:4},e.createElement(w,{variant:"contained",onClick:()=>m(1)},"1")),e.createElement(n,{item:!0,xs:4},e.createElement(w,{variant:"contained",onClick:()=>m(2)},"2")),e.createElement(n,{item:!0,xs:4},e.createElement(w,{variant:"contained",onClick:()=>m(3)},"3"))),e.createElement(n,{item:!0,container:!0,xs:12},e.createElement(n,{item:!0,xs:4}),e.createElement(n,{item:!0,xs:4},e.createElement(w,{variant:"contained",onClick:()=>m(0)},"0")),e.createElement(n,{item:!0,xs:4},e.createElement(w,{variant:"contained",onClick:d},"C"))))},Gt=({racehorses:u,formula:r,money:i,open:m,onClose:d})=>{const[g,C]=h.exports.useState("");h.exports.useEffect(()=>{let p=G[r].keyword;for(let f=0;f<u.length;f++)p+=u[f].number,f+1!==u.length&&(p+="-");p+=" "+i,C(p)});const S=()=>{const p=f=>{f.clipboardData.setData("text/plain",g),f.preventDefault(),document.removeEventListener("copy",p)};document.addEventListener("copy",p),document.execCommand("copy")};return e.createElement(Ee,{onClose:()=>d(),open:m},e.createElement(H,null,e.createElement(j,null,e.createElement(n,{container:!0},e.createElement(n,{item:!0,xs:12},G[r].name),e.createElement(n,{item:!0,container:!0,xs:12},u.map((p,f)=>e.createElement(n,{item:!0,container:!0,xs:12,key:f},e.createElement(n,{item:!0,xs:1}),e.createElement(n,{item:!0,xs:2},G[r].isCombination?null:f+1+"\u7740"),e.createElement(n,{item:!0,xs:9},p.name)))),e.createElement(n,{item:!0,xs:12},"\u91D1\u984D\uFF1A",i.toLocaleString()),e.createElement(n,{item:!0,xs:12},"\u4E0B\u306E\u6587\u5B57\u5217\u3092\u30B3\u30D4\u30FC\u3057\u3066\u30B3\u30E1\u30F3\u30C8\u3057\u3088\u3046\uFF01\uFF01"),e.createElement(n,{container:!0,item:!0,xs:12},e.createElement(n,{item:!0,xs:9},e.createElement(fe,{fullWidth:!0,readOnly:!0,value:g})),e.createElement(n,{item:!0,xs:3},e.createElement(w,{variant:"contained",onClick:S},"\u30AF\u30EA\u30C3\u30D7\u30DC\u30FC\u30C9\u306B\u30B3\u30D4\u30FC")))))))},Kt=({open:u,onClose:r})=>{const i=m=>{r(m)};return e.createElement(Ee,{onClose:()=>{r(null)},open:u},e.createElement(Be,null,"\u5F0F\u5225\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044"),e.createElement(De,null,G.map((m,d)=>e.createElement(Fe,{button:!0,onClick:()=>i(d),key:d},e.createElement(we,{primary:m.name,secondary:m.description})))))};ae(()=>({}));const Nt=({open:u,onClose:r})=>{const i=d=>{r(d)},m=d=>{const g=lt.find(C=>C.key===d);return g?g.name:""};return e.createElement(Ee,{onClose:()=>{r(null)},open:u},e.createElement(Be,null,"\u9B5A\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044"),e.createElement(De,null,J.map((d,g)=>e.createElement(Fe,{button:!0,onClick:()=>i(g),key:g},e.createElement(we,{primary:d.name,secondary:d.number+" "+m(d.color)})))))},Vt=ae(()=>({})),Ht=()=>{Vt();const[u,r]=h.exports.useState(null),[i,m]=h.exports.useState(!1),d=()=>{m(!0)},g=A=>{A!==null&&r(A),m(!1)},[C,S]=h.exports.useState([]);h.exports.useEffect(()=>{const A=[];if(u!==null)for(let L=0;L<G[u].racehorseCount;L++)A.push({name:"",color:"",number:0,imagePath:"",keywordRegexList:[]});S(A.concat())},[u]);const[p,f]=h.exports.useState(!1),[T,P]=h.exports.useState(0),x=A=>{P(A),f(!0)},v=A=>{f(!1),A!==null&&(C[T]=J[A],S(C.concat()))},[D,W]=h.exports.useState(0),[F,M]=h.exports.useState(!1),Y=()=>{M(!0)},N=()=>{M(!1)},[$,K]=h.exports.useState(!0);h.exports.useEffect(()=>{if(D===0){K(!0);return}if(C.length===0){K(!0);return}for(let A=0;A<C.length;A++)if(C[A].name===""){K(!0);return}K(!1)},[C,D]);const q=()=>{r(null),W(0)};return e.createElement(e.Fragment,null,e.createElement(ue,{maxWidth:"lg"},e.createElement(H,null,e.createElement(j,null,e.createElement(n,{container:!0},e.createElement(n,{container:!0,item:!0,xs:12},e.createElement(n,{item:!0,xs:1}),e.createElement(n,{item:!0,xs:2},"\u5F0F\u5225"),e.createElement(n,{item:!0,xs:6},u!==null?G[u].name:"\u5F0F\u5225\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044"),e.createElement(n,{item:!0,xs:3},e.createElement(w,{variant:"contained",onClick:d},"\u9078\u629E\u3059\u308B"))),e.createElement(n,{item:!0,container:!0,xs:12},u!==null?e.createElement(e.Fragment,null,e.createElement(n,{item:!0,xs:12},G[u].description),C.map((A,L)=>e.createElement(n,{item:!0,container:!0,xs:12,key:L},e.createElement(n,{item:!0,xs:1}),e.createElement(n,{item:!0,xs:2},G[u].isCombination?null:L+1+"\u7740"),e.createElement(n,{item:!0,xs:6},A.name||"\u9B5A\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044"),e.createElement(n,{item:!0,xs:3},e.createElement(w,{variant:"contained",onClick:()=>x(L)},"\u9078\u629E\u3059\u308B"))))):null),e.createElement(n,{container:!0,item:!0,xs:12},e.createElement(n,{item:!0,xs:4}),e.createElement(n,{item:!0,container:!0,xs:4},e.createElement(n,{item:!0,xs:12},"\u91D1\u984D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"),e.createElement(n,{item:!0,xs:12},e.createElement(Ut,{max:6,value:D,onChange:A=>W(A)}))),e.createElement(n,{item:!0,xs:4})))),e.createElement(ye,null,e.createElement(w,{variant:"contained",onClick:q},"\u30AF\u30EA\u30A2"),e.createElement(w,{variant:"contained",onClick:Y,disabled:$},"\u767A\u884C")))),e.createElement(Kt,{open:i,onClose:g}),e.createElement(Nt,{open:p,onClose:v}),e.createElement(Gt,{formula:u||0,racehorses:C,money:D,open:F,onClose:N}))},Jt=()=>e.createElement(Xe,null,e.createElement(Ze,null,e.createElement(de,{path:"/",component:Ht,exact:!0}),e.createElement(de,{path:"/config",component:yt,exact:!0}),e.createElement(de,{path:"/game",component:kt,exact:!0}))),$t=et({}),jt={},Yt=()=>e.createElement(e.Fragment,null,e.createElement(tt,{styles:jt}),e.createElement(nt,{theme:$t},e.createElement(Jt,null)));ut.render(e.createElement(e.StrictMode,null,e.createElement(at,{store:gt},e.createElement(Yt,null))),document.getElementById("root"));
