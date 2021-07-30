var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function r(t){return t()}function o(){return Object.create(null)}function c(t){t.forEach(r)}function s(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const i="undefined"!=typeof window;let a=i?()=>window.performance.now():()=>Date.now(),u=i?t=>requestAnimationFrame(t):t;const f=new Set;function d(t){f.forEach(e=>{e.c(t)||(f.delete(e),e.f())}),0!==f.size&&u(d)}function p(t){let e;return 0===f.size&&u(d),{promise:new Promise(n=>{f.add(e={c:t,f:n})}),abort(){f.delete(e)}}}function m(t,e){t.appendChild(e)}function g(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function y(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function v(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function w(){return $(" ")}function b(){return $("")}function k(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){e=""+e,t.data!==e&&(t.data=e)}function P(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function E(t,e,n){t.classList[n?"add":"remove"](e)}function M(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}const C=new Set;let O,z=0;function j(t,e,n,r,o,c,s,l=0){const i=16.666/r;let a="{\n";for(let t=0;t<=1;t+=i){const r=e+(n-e)*c(t);a+=100*t+`%{${s(r,1-r)}}\n`}const u=a+`100% {${s(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${l}`,d=t.ownerDocument;C.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(v("style")).sheet),m=d.__svelte_rules||(d.__svelte_rules={});m[f]||(m[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?g+", ":""}${f} ${r}ms linear ${o}ms 1 both`,z+=1,f}function S(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-r.length;o&&(t.style.animation=r.join(", "),z-=o,z||u(()=>{z||(C.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),C.clear())}))}function A(t){O=t}function L(){if(!O)throw new Error("Function called outside component initialization");return O}function T(){const t=L();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=M(e,n);r.slice().forEach(e=>{e.call(t,o)})}}}const N=[],R=[],q=[],B=[],F=Promise.resolve();let I=!1;function D(t){q.push(t)}let H=!1;const W=new Set;function Y(){if(!H){H=!0;do{for(let t=0;t<N.length;t+=1){const e=N[t];A(e),K(e.$$)}for(N.length=0;R.length;)R.pop()();for(let t=0;t<q.length;t+=1){const e=q[t];W.has(e)||(W.add(e),e())}q.length=0}while(N.length);for(;B.length;)B.pop()();I=!1,H=!1,W.clear()}}function K(t){if(null!==t.fragment){t.update(),c(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}let V;function G(){return V||(V=Promise.resolve(),V.then(()=>{V=null})),V}function J(t,e,n){t.dispatchEvent(M(`${e?"intro":"outro"}${n}`))}const Q=new Set;let U;function X(){U={r:0,c:[],p:U}}function Z(){U.r||c(U.c),U=U.p}function tt(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function et(t,e,n,r){if(t&&t.o){if(Q.has(t))return;Q.add(t),U.c.push(()=>{Q.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const nt={duration:0};function rt(n,r,o){let c,l,i=r(n,o),u=!1,f=0;function d(){c&&S(n,c)}function m(){const{delay:r=0,duration:o=300,easing:s=e,tick:m=t,css:g}=i||nt;g&&(c=j(n,0,1,o,r,s,g,f++)),m(0,1);const h=a()+r,y=h+o;l&&l.abort(),u=!0,D(()=>J(n,!0,"start")),l=p(t=>{if(u){if(t>=y)return m(1,0),J(n,!0,"end"),d(),u=!1;if(t>=h){const e=s((t-h)/o);m(e,1-e)}}return u})}let g=!1;return{start(){g||(S(n),s(i)?(i=i(),G().then(m)):m())},invalidate(){g=!1},end(){u&&(d(),u=!1)}}}function ot(n,r,o){let l,i=r(n,o),u=!0;const f=U;function d(){const{delay:r=0,duration:o=300,easing:s=e,tick:d=t,css:m}=i||nt;m&&(l=j(n,1,0,o,r,s,m));const g=a()+r,h=g+o;D(()=>J(n,!1,"start")),p(t=>{if(u){if(t>=h)return d(0,1),J(n,!1,"end"),--f.r||c(f.c),!1;if(t>=g){const e=s((t-g)/o);d(1-e,e)}}return u})}return f.r+=1,s(i)?G().then(()=>{i=i(),d()}):d(),{end(t){t&&i.tick&&i.tick(1,0),u&&(l&&S(n,l),u=!1)}}}function ct(t,e){const n=e.token={};function r(t,r,o,c){if(e.token!==n)return;e.resolved=c;let s=e.ctx;void 0!==o&&(s=s.slice(),s[o]=c);const l=t&&(e.current=t)(s);let i=!1;e.block&&(e.blocks?e.blocks.forEach((t,n)=>{n!==r&&t&&(X(),et(t,1,1,()=>{e.blocks[n]=null}),Z())}):e.block.d(1),l.c(),tt(l,1),l.m(e.mount(),e.anchor),i=!0),e.block=l,e.blocks&&(e.blocks[r]=l),i&&Y()}if((o=t)&&"object"==typeof o&&"function"==typeof o.then){const n=L();if(t.then(t=>{A(n),r(e.then,1,e.value,t),A(null)},t=>{A(n),r(e.catch,2,e.error,t),A(null)}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}var o}function st(t){t&&t.c()}function lt(t,e,n){const{fragment:o,on_mount:l,on_destroy:i,after_update:a}=t.$$;o&&o.m(e,n),D(()=>{const e=l.map(r).filter(s);i?i.push(...e):c(e),t.$$.on_mount=[]}),a.forEach(D)}function it(t,e){const n=t.$$;null!==n.fragment&&(c(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(t,e){-1===t.$$.dirty[0]&&(N.push(t),I||(I=!0,F.then(Y)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ut(e,n,r,s,l,i,a=[-1]){const u=O;A(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:a};let p=!1;if(d.ctx=r?r(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&l(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),p&&at(e,t)),n}):[],d.update(),p=!0,c(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(h)}else d.fragment&&d.fragment.c();n.intro&&tt(e.$$.fragment),lt(e,n.target,n.anchor),Y()}A(u)}class ft{$destroy(){it(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function dt(t){return t[Math.floor(t.length*Math.random())]}function pt(t){return new Promise(e=>{setTimeout(e,t)})}function mt(t){return new Promise((e,n)=>{const r=new Image;r.onload=()=>e(r),r.onerror=n,r.src=t})}function gt(t,e){-1!==e&&(t[e]=t[t.length-1],t.pop())}function ht(t,e,n){const r=t.slice();return r[5]=e[n],r}function yt(t){let e,n,r,o,c=t[5].label+"";function s(...e){return t[3](t[5],...e)}return{c(){e=v("button"),n=$(c),e.disabled=t[0],_(e,"class","svelte-f9zemw")},m(t,c){g(t,e,c),m(e,n),r||(o=k(e,"click",s),r=!0)},p(n,r){t=n,1&r&&(e.disabled=t[0])},d(t){t&&h(e),r=!1,o()}}}function vt(e){let n,r,o,c,s,l=e[1],i=[];for(let t=0;t<l.length;t+=1)i[t]=yt(ht(e,l,t));return{c(){n=v("header"),n.innerHTML='<h1 class="svelte-f9zemw">\n    CameoP<img class="logo svelte-f9zemw" src="icons/compare.svg" alt="compare icon">rison\n  </h1> \n\n  <p class="svelte-f9zemw">\n    On <a href="https://cameo.com">cameo.com</a>, you can buy personalised video\n    clips from everyone from Lindsay Lohan to Ice T.\n  </p> \n\n  <p class="svelte-f9zemw">But who commands the highest price?</p>',r=w(),o=v("p"),o.textContent="Pick a category to play a game",c=w(),s=v("div");for(let t=0;t<i.length;t+=1)i[t].c();_(o,"class","svelte-f9zemw"),_(s,"class","categories svelte-f9zemw")},m(t,e){g(t,n,e),g(t,r,e),g(t,o,e),g(t,c,e),g(t,s,e);for(let t=0;t<i.length;t+=1)i[t].m(s,null)},p(t,[e]){if(7&e){let n;for(l=t[1],n=0;n<l.length;n+=1){const r=ht(t,l,n);i[n]?i[n].p(r,e):(i[n]=yt(r),i[n].c(),i[n].m(s,null))}for(;n<i.length;n+=1)i[n].d(1);i.length=l.length}},i:t,o:t,d(t){t&&h(n),t&&h(r),t&&h(o),t&&h(c),t&&h(s),y(i,t)}}}function $t(t,e,n){const r=T();let o=!1;const c=t=>{n(0,o=!0),r("select",{category:t})};return[o,[{slug:"actors",label:"Actors"},{slug:"athletes",label:"Athletes"},{slug:"comedians",label:"Comedians"},{slug:"creators",label:"Creators"},{slug:"models",label:"Models"},{slug:"musicians",label:"Musicians"},{slug:"reality-tv",label:"Reality TV"}],c,t=>c(t)]}class wt extends ft{constructor(t){super(),ut(this,t,$t,vt,l,{})}}function bt(t){const e=t-1;return e*e*e+1}function kt(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */function _t(t,{delay:e=0,duration:n=400,easing:r=bt,x:o=0,y:c=0,opacity:s=0}){const l=getComputedStyle(t),i=+l.opacity,a="none"===l.transform?"":l.transform,u=i*(1-s);return{delay:e,duration:n,easing:r,css:(t,e)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*o}px, ${(1-t)*c}px);\n\t\t\topacity: ${i-u*e}`}}function xt(t,{delay:e=0,duration:n=400,easing:r=bt,start:o=0,opacity:c=0}){const s=getComputedStyle(t),l=+s.opacity,i="none"===s.transform?"":s.transform,a=1-o,u=l*(1-c);return{delay:e,duration:n,easing:r,css:(t,e)=>`\n\t\t\ttransform: ${i} scale(${1-a*e});\n\t\t\topacity: ${l-u*e}\n\t\t`}}function Pt(t){var{fallback:e}=t,r=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}(t,["fallback"]);const o=new Map,c=new Map;function l(t,o,c){return(l,i)=>(t.set(i.key,{rect:l.getBoundingClientRect()}),()=>{if(o.has(i.key)){const{rect:t}=o.get(i.key);return o.delete(i.key),function(t,e,o){const{delay:c=0,duration:l=(t=>30*Math.sqrt(t)),easing:i=bt}=n(n({},r),o),a=e.getBoundingClientRect(),u=t.left-a.left,f=t.top-a.top,d=t.width/a.width,p=t.height/a.height,m=Math.sqrt(u*u+f*f),g=getComputedStyle(e),h="none"===g.transform?"":g.transform,y=+g.opacity;return{delay:c,duration:s(l)?l(m):l,easing:i,css:(t,e)=>`\n\t\t\t\topacity: ${t*y};\n\t\t\t\ttransform-origin: top left;\n\t\t\t\ttransform: ${h} translate(${e*u}px,${e*f}px) scale(${t+(1-t)*d}, ${t+(1-t)*p});\n\t\t\t`}}(t,l,i)}return t.delete(i.key),e&&e(l,i,c)})}return[l(c,o,!1),l(o,c,!0)]}function Et(e){let n,r,o,c,s,l=e[0].price+"";return{c(){n=v("div"),r=v("span"),o=$("$"),c=$(l),_(n,"class","price svelte-14stzkp"),E(n,"large",e[2])},m(t,e){g(t,n,e),m(n,r),m(r,o),m(r,c)},p(t,e){1&e&&l!==(l=t[0].price+"")&&x(c,l),4&e&&E(n,"large",t[2])},i(t){s||D(()=>{s=rt(r,xt,{easing:kt,duration:600}),s.start()})},o:t,d(t){t&&h(n)}}}function Mt(e){let n,r,o,c,s,l,i,a,u,f,d,p,y,b=e[0].name+"",E=e[0].type+"",M=e[1]&&Et(e);return{c(){n=v("div"),r=v("button"),o=v("div"),c=v("h2"),s=v("a"),l=$(b),a=w(),u=v("p"),f=$(E),d=w(),M&&M.c(),_(s,"target","_blank"),_(s,"href",i="https://cameo.com/"+e[0].id),_(c,"class","svelte-14stzkp"),_(u,"class","type svelte-14stzkp"),_(o,"class","details svelte-14stzkp"),_(r,"class","card-inner svelte-14stzkp"),P(r,"background-image","url("+e[0].image+")"),_(n,"class","card-outer svelte-14stzkp")},m(t,i){g(t,n,i),m(n,r),m(r,o),m(o,c),m(c,s),m(s,l),m(o,a),m(o,u),m(u,f),m(r,d),M&&M.m(r,null),p||(y=k(r,"click",e[4]),p=!0)},p(t,[e]){1&e&&b!==(b=t[0].name+"")&&x(l,b),1&e&&i!==(i="https://cameo.com/"+t[0].id)&&_(s,"href",i),1&e&&E!==(E=t[0].type+"")&&x(f,E),t[1]?M?(M.p(t,e),2&e&&tt(M,1)):(M=Et(t),M.c(),tt(M,1),M.m(r,null)):M&&(M.d(1),M=null),1&e&&P(r,"background-image","url("+t[0].image+")")},i(t){tt(M)},o:t,d(t){t&&h(n),M&&M.d(),p=!1,y()}}}function Ct(t,e,n){let{celeb:r}=e,{showPrice:o}=e,{winner:c}=e;const s=T();return t.$set=t=>{"celeb"in t&&n(0,r=t.celeb),"showPrice"in t&&n(1,o=t.showPrice),"winner"in t&&n(2,c=t.winner)},[r,o,c,s,()=>s("select")]}class Ot extends ft{constructor(t){super(),ut(this,t,Ct,Mt,l,{celeb:0,showPrice:1,winner:2})}}function zt(t,e,n){const r=t.slice();return r[21]=e[n],r[6]=n,r}function jt(t){t[23]=t[25][0],t[24]=t[25][1]}function St(t){let e;return{c(){e=$("Tap on the more monetisable celebrity's face, or tap 'same price' if\n      society values them equally.")},m(t,n){g(t,e,n)},d(t){t&&h(e)}}}function At(t){let e,n,r,o;const c=[Tt,Lt],s=[];function l(t,e){return t[3]?0:1}return e=l(t),n=s[e]=c[e](t),{c(){n.c(),r=b()},m(t,n){s[e].m(t,n),g(t,r,n),o=!0},p(t,o){let i=e;e=l(t),e===i?s[e].p(t,o):(X(),et(s[i],1,1,()=>{s[i]=null}),Z(),n=s[e],n||(n=s[e]=c[e](t),n.c()),tt(n,1),n.m(r.parentNode,r))},i(t){o||(tt(n),o=!0)},o(t){et(n),o=!1},d(t){s[e].d(t),t&&h(r)}}}function Lt(t){let e,n,r,o={ctx:t,current:null,token:null,pending:qt,then:Rt,catch:Nt,value:25,blocks:[,,,]};return ct(n=t[7][t[6]],o),{c(){e=b(),o.block.c()},m(t,n){g(t,e,n),o.block.m(t,o.anchor=n),o.mount=()=>e.parentNode,o.anchor=e,r=!0},p(e,r){if(t=e,o.ctx=t,64&r&&n!==(n=t[7][t[6]])&&ct(n,o));else{const e=t.slice();e[25]=o.resolved,o.block.p(e,r)}},i(t){r||(tt(o.block),r=!0)},o(t){for(let t=0;t<3;t+=1){et(o.blocks[t])}r=!1},d(t){t&&h(e),o.block.d(t),o.token=null,o=null}}}function Tt(e){let n,r,o,c,s,l,i,a,u,f,d,p,y,b,P,E=e[4].length+"",M=e[12](e[5],e[4].length)+"";return{c(){n=v("div"),r=v("p"),r.textContent="Your score is...",o=w(),c=v("strong"),s=$(e[5]),l=$("/"),i=$(E),a=w(),u=v("p"),f=$(M),d=w(),p=v("button"),p.textContent="Back to main screen",_(c,"class","svelte-1l5sw70"),_(n,"class","game-end svelte-1l5sw70")},m(t,h){g(t,n,h),m(n,r),m(n,o),m(n,c),m(c,s),m(c,l),m(c,i),m(n,a),m(n,u),m(u,f),m(n,d),m(n,p),b||(P=k(p,"click",e[14]),b=!0)},p(t,e){32&e&&x(s,t[5]),16&e&&E!==(E=t[4].length+"")&&x(i,E),48&e&&M!==(M=t[12](t[5],t[4].length)+"")&&x(f,M)},i(t){y||D(()=>{y=rt(n,xt,{easing:kt,duration:800}),y.start()})},o:t,d(t){t&&h(n),b=!1,P()}}}function Nt(e){let n;return{c(){n=v("p"),n.textContent="Ooops! Failed to load data",_(n,"class","error svelte-1l5sw70")},m(t,e){g(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}function Rt(t){let e,n,r,o,s,l,i,a,u,f,d,p,y,$;function b(...e){return t[16](t[23],t[24],...e)}return jt(t),r=new Ot({props:{celeb:t[23],winner:t[23].price>=t[24].price,showPrice:t[2]}}),r.$on("select",(function(...e){return t[15](t[23],t[24],...e)})),u=new Ot({props:{celeb:t[24],winner:t[24].price>=t[23].price,showPrice:t[2]}}),u.$on("select",(function(...e){return t[17](t[23],t[24],...e)})),{c(){e=v("div"),n=v("div"),st(r.$$.fragment),o=w(),s=v("div"),l=v("button"),l.textContent="Same price",i=w(),a=v("div"),st(u.$$.fragment),_(n,"class","card-container svelte-1l5sw70"),_(l,"class","same svelte-1l5sw70"),_(s,"class","svelte-1l5sw70"),_(a,"class","card-container svelte-1l5sw70"),_(e,"class","game svelte-1l5sw70")},m(c,f){g(c,e,f),m(e,n),lt(r,n,null),m(e,o),m(e,s),m(s,l),m(e,i),m(e,a),lt(u,a,null),p=!0,y||($=[k(l,"click",b),k(e,"outrostart",t[18]),k(e,"outroend",t[19])],y=!0)},p(e,n){t=e;const o={};64&n&&(o.celeb=t[23]),64&n&&(o.winner=t[23].price>=t[24].price),4&n&&(o.showPrice=t[2]),r.$set(o);const c={};64&n&&(c.celeb=t[24]),64&n&&(c.winner=t[24].price>=t[23].price),4&n&&(c.showPrice=t[2]),u.$set(c),jt(t)},i(t){p||(tt(r.$$.fragment,t),tt(u.$$.fragment,t),D(()=>{d&&d.end(1),f||(f=rt(e,_t,{duration:200,y:20})),f.start()}),p=!0)},o(t){et(r.$$.fragment,t),et(u.$$.fragment,t),f&&f.invalidate(),d=ot(e,_t,{duration:200,y:-20}),p=!1},d(t){t&&h(e),it(r),it(u),t&&d&&d.end(),y=!1,c($)}}}function qt(e){let n;return{c(){n=v("div"),n.innerHTML='<div class="loading-animation svelte-1l5sw70">Loading</div>',_(n,"class","loading svelte-1l5sw70")},m(t,e){g(t,n,e)},p:t,i:t,o:t,d(t){t&&h(n)}}}function Bt(t){let e,n,r,o,c,s;return{c(){e=v("img"),_(e,"class","giant-result svelte-1l5sw70"),e.src!==(n="icons/"+t[1]+".svg")&&_(e,"src",n),_(e,"alt",r=t[1]+" answer")},m(t,n){g(t,e,n),s=!0},p(t,o){(!s||2&o&&e.src!==(n="icons/"+t[1]+".svg"))&&_(e,"src",n),(!s||2&o&&r!==(r=t[1]+" answer"))&&_(e,"alt",r)},i(t){s||(D(()=>{c&&c.end(1),o||(o=rt(e,_t,{x:100,duration:200})),o.start()}),s=!0)},o(n){o&&o.invalidate(),c=ot(e,t[9],{key:t[6]}),s=!1},d(t){t&&h(e),t&&c&&c.end()}}}function Ft(e){let n,r,o,c;return{c(){n=v("img"),n.src!==(r="icons/"+e[21]+".svg")&&_(n,"src",r),_(n,"alt",o=e[21]+" answer"),_(n,"class","svelte-1l5sw70")},m(t,e){g(t,n,e)},p(t,e){16&e&&n.src!==(r="icons/"+t[21]+".svg")&&_(n,"src",r),16&e&&o!==(o=t[21]+" answer")&&_(n,"alt",o)},i(t){c||D(()=>{c=rt(n,e[10],{key:e[6]}),c.start()})},o:t,d(t){t&&h(n)}}}function It(e){let n,r,o=e[21]&&Ft(e);return{c(){n=v("span"),o&&o.c(),r=w(),_(n,"class","result svelte-1l5sw70")},m(t,e){g(t,n,e),o&&o.m(n,null),m(n,r)},p(t,e){t[21]?o?(o.p(t,e),16&e&&tt(o,1)):(o=Ft(t),o.c(),tt(o,1),o.m(n,r)):o&&(o.d(1),o=null)},i(t){tt(o)},o:t,d(t){t&&h(n),o&&o.d()}}}function Dt(t){let e,n,r,o,c,s,l,i,a=!t[3]&&St(),u=t[0]&&At(t),f=t[2]&&Bt(t),d=t[4],p=[];for(let e=0;e<d.length;e+=1)p[e]=It(zt(t,d,e));return{c(){e=v("header"),n=v("p"),a&&a.c(),r=w(),o=v("div"),u&&u.c(),c=w(),f&&f.c(),s=w(),l=v("div");for(let t=0;t<p.length;t+=1)p[t].c();_(o,"class","game-container svelte-1l5sw70"),_(l,"class","results svelte-1l5sw70"),P(l,"grid-template-columns","repeat("+t[4].length+", 1fr)")},m(t,d){g(t,e,d),m(e,n),a&&a.m(n,null),g(t,r,d),g(t,o,d),u&&u.m(o,null),g(t,c,d),f&&f.m(t,d),g(t,s,d),g(t,l,d);for(let t=0;t<p.length;t+=1)p[t].m(l,null);i=!0},p(t,[e]){if(t[3]?a&&(a.d(1),a=null):a||(a=St(),a.c(),a.m(n,null)),t[0]?u?(u.p(t,e),1&e&&tt(u,1)):(u=At(t),u.c(),tt(u,1),u.m(o,null)):u&&(X(),et(u,1,1,()=>{u=null}),Z()),t[2]?f?(f.p(t,e),4&e&&tt(f,1)):(f=Bt(t),f.c(),tt(f,1),f.m(s.parentNode,s)):f&&(X(),et(f,1,1,()=>{f=null}),Z()),16&e){let n;for(d=t[4],n=0;n<d.length;n+=1){const r=zt(t,d,n);p[n]?(p[n].p(r,e),tt(p[n],1)):(p[n]=It(r),p[n].c(),tt(p[n],1),p[n].m(l,null))}for(;n<p.length;n+=1)p[n].d(1);p.length=d.length}(!i||16&e)&&P(l,"grid-template-columns","repeat("+t[4].length+", 1fr)")},i(t){if(!i){tt(u),tt(f);for(let t=0;t<d.length;t+=1)tt(p[t]);i=!0}},o(t){et(u),et(f),i=!1},d(t){t&&h(e),a&&a.d(),t&&h(r),t&&h(o),u&&u.d(),t&&h(c),f&&f.d(t),t&&h(s),t&&h(l),y(p,t)}}}function Ht(t,e,n){let{selection:r}=e;const o=async t=>{const e=await fetch(`https://cameo-explorer.netlify.app/celebs/${t}.json`),n=await e.json();return await mt(n.image),n},c=r.map(t=>Promise.all([o(t.a.id),o(t.b.id)])),s=T(),[l,i]=Pt({easing:bt,duration:300});let a,u,f=!0,d=0,p=!1;const m=Array(r.length),g=async(t,e,o)=>{n(1,a=Math.sign(t.price-e.price)===o?"right":"wrong"),n(2,u=!0),await pt(1200),n(2,u=!1),n(4,m[d]=a,m),await pt(400),d<r.length-1?n(6,d+=1):n(3,p=!0)};let h;return t.$set=t=>{"selection"in t&&n(13,r=t.selection)},t.$$.update=()=>{16&t.$$.dirty&&n(5,h=m.filter(t=>"right"===t).length)},[f,a,u,p,m,h,d,c,s,l,i,g,(t,e)=>{const n=t/e;return dt(n<.5?["Ouch","That wasn't very good","Must try harder"]:n<.8?["Not bad!","Keep practicing!"]:n<1?["So close!","Almost there!"]:["You rock!","Flawless victory"])},r,()=>s("restart"),(t,e)=>{g(t,e,1)},(t,e)=>{g(t,e,0)},(t,e)=>{g(t,e,-1)},()=>n(0,f=!1),()=>n(0,f=!0)]}class Wt extends ft{constructor(t){super(),ut(this,t,Ht,Dt,l,{selection:13})}}function Yt(t){let e,n;return e=new Wt({props:{selection:t[1]}}),e.$on("restart",t[3]),{c(){st(e.$$.fragment)},m(t,r){lt(e,t,r),n=!0},p(t,n){const r={};2&n&&(r.selection=t[1]),e.$set(r)},i(t){n||(tt(e.$$.fragment,t),n=!0)},o(t){et(e.$$.fragment,t),n=!1},d(t){it(e,t)}}}function Kt(e){let n,r;return n=new wt({}),n.$on("select",e[2]),{c(){st(n.$$.fragment)},m(t,e){lt(n,t,e),r=!0},p:t,i(t){r||(tt(n.$$.fragment,t),r=!0)},o(t){et(n.$$.fragment,t),r=!1},d(t){it(n,t)}}}function Vt(t){let e,n,r,o;const c=[Kt,Yt],s=[];function l(t,e){return"welcome"===t[0]?0:"playing"===t[0]?1:-1}return~(n=l(t))&&(r=s[n]=c[n](t)),{c(){e=v("main"),r&&r.c(),_(e,"class","svelte-2p147u")},m(t,r){g(t,e,r),~n&&s[n].m(e,null),o=!0},p(t,[o]){let i=n;n=l(t),n===i?~n&&s[n].p(t,o):(r&&(X(),et(s[i],1,1,()=>{s[i]=null}),Z()),~n?(r=s[n],r||(r=s[n]=c[n](t),r.c()),tt(r,1),r.m(e,null)):r=null)},i(t){o||(tt(r),o=!0)},o(t){et(r),o=!1},d(t){t&&h(e),~n&&s[n].d()}}}function Gt(t,e,n){let r,o,c="welcome";var s;s=()=>{r=(async()=>{const t=await fetch("https://cameo-explorer.netlify.app/celebs.json"),e=await t.json(),n=new Map;e.forEach(t=>n.set(t.id,t));const r=new Set;return e.forEach(t=>{t.reviews>=50&&(r.add(t),t.similar.forEach(t=>r.add(n.get(t))))}),{celebs:Array.from(r),lookup:n}})(),mt("icons/right.svg"),mt("icons/wrong.svg")},L().$$.on_mount.push(s);return[c,o,async t=>{const{celebs:e,lookup:s}=await r;n(1,o=function(t,e,n){const r=t.filter(t=>t.categories.includes(n)),o=new Set,c=[];let s=10;for(;s--;){const t=Math.random(),n=Math.floor(t*r.length),s=r[n];let l;gt(r,n);const i=s.similar.filter(t=>!o.has(t));if(i.length>0&&Math.random()<.75){const t=dt(i);l=e.get(t)}else l=dt(r);c.push({a:s,b:l}),o.add(s.id),o.add(l.id),gt(r,r.indexOf(l))}return c}(e,s,t.detail.category.slug)),n(0,c="playing")},()=>n(0,c="welcome")]}const Jt=new class extends ft{constructor(t){super(),ut(this,t,Gt,Vt,l,{})}}({target:document.body});return"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js"),Jt}();
//# sourceMappingURL=bundle.js.map
