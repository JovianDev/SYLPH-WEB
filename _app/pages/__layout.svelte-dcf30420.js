import{D as ae,S as N,i as U,s as V,e as h,k as A,t as M,c as v,a as d,d as _,n as O,g as C,b as i,f as I,E as f,h as re,F,j,m as G,G as le,H as k,o as J,x as q,u as z,v as K,I as oe,U as ne,J as ce,K as ie,L as ue,M as fe}from"../chunks/vendor-b4b669e4.js";const _e=()=>{const o=ae("__svelte__");return{page:{subscribe:o.page.subscribe},navigating:{subscribe:o.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:o.navigating.subscribe}},session:o.session}},he={subscribe(o){return _e().page.subscribe(o)}};function ve(o){let e,l,n,s,a=`Download for ${o[0]}`,c;return{c(){e=h("button"),l=h("i"),n=A(),s=h("span"),c=M(a),this.h()},l(u){e=v(u,"BUTTON",{class:!0});var r=d(e);l=v(r,"I",{class:!0}),d(l).forEach(_),n=O(r),s=v(r,"SPAN",{});var t=d(s);c=C(t,a),t.forEach(_),r.forEach(_),this.h()},h(){i(l,"class","fa fa-download"),i(e,"class","download-btn svelte-190sovi")},m(u,r){I(u,e,r),f(e,l),f(e,n),f(e,s),f(s,c)},p(u,[r]){r&1&&a!==(a=`Download for ${u[0]}`)&&re(c,a)},i:F,o:F,d(u){u&&_(e)}}}function de(o,e,l){let{OS:n}=e;return o.$$set=s=>{"OS"in s&&l(0,n=s.OS)},[n]}class pe extends N{constructor(e){super();U(this,e,de,ve,V,{OS:0})}}function me(o){let e,l,n,s,a,c,u,r,t,p,$,S,B,P,y,w,R,T,x,g,E,H;return E=new pe({props:{OS:o[0].name}}),{c(){e=h("header"),l=h("img"),s=A(),a=h("nav"),c=h("ul"),u=h("li"),r=h("a"),t=M("Home"),p=A(),$=h("li"),S=h("a"),B=M("About"),P=A(),y=h("li"),w=h("a"),R=M("Docs"),T=A(),x=h("div"),g=h("form"),j(E.$$.fragment),this.h()},l(m){e=v(m,"HEADER",{class:!0});var b=d(e);l=v(b,"IMG",{src:!0,alt:!0,class:!0}),s=O(b),a=v(b,"NAV",{class:!0});var L=d(a);c=v(L,"UL",{class:!0});var D=d(c);u=v(D,"LI",{class:!0});var W=d(u);r=v(W,"A",{href:!0,class:!0});var Q=d(r);t=C(Q,"Home"),Q.forEach(_),W.forEach(_),p=O(D),$=v(D,"LI",{class:!0});var X=d($);S=v(X,"A",{href:!0,class:!0});var Y=d(S);B=C(Y,"About"),Y.forEach(_),X.forEach(_),P=O(D),y=v(D,"LI",{class:!0});var Z=d(y);w=v(Z,"A",{href:!0,class:!0});var ee=d(w);R=C(ee,"Docs"),ee.forEach(_),Z.forEach(_),D.forEach(_),L.forEach(_),T=O(b),x=v(b,"DIV",{class:!0});var te=d(x);g=v(te,"FORM",{action:!0,method:!0,target:!0});var se=d(g);G(E.$$.fragment,se),se.forEach(_),te.forEach(_),b.forEach(_),this.h()},h(){le(l.src,n="/sylphLogoPossibility.png")||i(l,"src",n),i(l,"alt","Sylph logo"),i(l,"class","svelte-1cr0xb1"),i(r,"href","/"),i(r,"class","svelte-1cr0xb1"),i(u,"class","svelte-1cr0xb1"),k(u,"active",o[2].path==="/"),i(S,"href","/about"),i(S,"class","svelte-1cr0xb1"),i($,"class","svelte-1cr0xb1"),k($,"active",o[2].path==="/about"),i(w,"href","/docs"),i(w,"class","svelte-1cr0xb1"),i(y,"class","svelte-1cr0xb1"),k(y,"active",o[2].path==="/docs"),i(c,"class","svelte-1cr0xb1"),i(a,"class","svelte-1cr0xb1"),i(g,"action",o[1]),i(g,"method","get"),i(g,"target","_blank"),i(x,"class","dl-btn svelte-1cr0xb1"),i(e,"class","svelte-1cr0xb1")},m(m,b){I(m,e,b),f(e,l),f(e,s),f(e,a),f(a,c),f(c,u),f(u,r),f(r,t),f(c,p),f(c,$),f($,S),f(S,B),f(c,P),f(c,y),f(y,w),f(w,R),f(e,T),f(e,x),f(x,g),J(E,g,null),H=!0},p(m,[b]){b&4&&k(u,"active",m[2].path==="/"),b&4&&k($,"active",m[2].path==="/about"),b&4&&k(y,"active",m[2].path==="/docs");const L={};b&1&&(L.OS=m[0].name),E.$set(L),(!H||b&2)&&i(g,"action",m[1])},i(m){H||(q(E.$$.fragment,m),H=!0)},o(m){z(E.$$.fragment,m),H=!1},d(m){m&&_(e),K(E)}}}function be(o,e,l){let n;oe(o,he,u=>l(2,n=u));let s,a;return s=new ne().getOS(),(s==null?void 0:s.name)==="Mac OS"&&(a="https://github.com/oslabs-beta/Sylph/releases/download/v1.0.0-MacOS/Sylph-1.0.0.dmg"),(s==null?void 0:s.name)==="Windows"&&(a="https://github.com/oslabs-beta/Sylph/releases/download/v1.0.0-testing/Sylph.Setup.1.0.0.exe"),[s,a,n]}class ge extends N{constructor(e){super();U(this,e,be,me,V,{})}}function $e(o){let e,l,n,s;return{c(){e=h("footer"),l=h("div"),n=h("h2"),s=M("Copyright \xA9 2021 Sylph"),this.h()},l(a){e=v(a,"FOOTER",{class:!0});var c=d(e);l=v(c,"DIV",{class:!0});var u=d(l);n=v(u,"H2",{class:!0});var r=d(n);s=C(r,"Copyright \xA9 2021 Sylph"),r.forEach(_),u.forEach(_),c.forEach(_),this.h()},h(){i(n,"class","svelte-bsk1ze"),i(l,"class","copyw svelte-bsk1ze"),i(e,"class","svelte-bsk1ze")},m(a,c){I(a,e,c),f(e,l),f(l,n),f(n,s)},p:F,i:F,o:F,d(a){a&&_(e)}}}class ye extends N{constructor(e){super();U(this,e,null,$e,V,{})}}function Ee(o){let e,l,n,s,a,c;e=new ge({});const u=o[1].default,r=ce(u,o,o[0],null);return a=new ye({}),{c(){j(e.$$.fragment),l=A(),n=h("main"),r&&r.c(),s=A(),j(a.$$.fragment),this.h()},l(t){G(e.$$.fragment,t),l=O(t),n=v(t,"MAIN",{class:!0});var p=d(n);r&&r.l(p),p.forEach(_),s=O(t),G(a.$$.fragment,t),this.h()},h(){i(n,"class","svelte-rlbqev")},m(t,p){J(e,t,p),I(t,l,p),I(t,n,p),r&&r.m(n,null),I(t,s,p),J(a,t,p),c=!0},p(t,[p]){r&&r.p&&(!c||p&1)&&ie(r,u,t,t[0],c?fe(u,t[0],p,null):ue(t[0]),null)},i(t){c||(q(e.$$.fragment,t),q(r,t),q(a.$$.fragment,t),c=!0)},o(t){z(e.$$.fragment,t),z(r,t),z(a.$$.fragment,t),c=!1},d(t){K(e,t),t&&_(l),t&&_(n),r&&r.d(t),t&&_(s),K(a,t)}}}function Se(o,e,l){let{$$slots:n={},$$scope:s}=e;return o.$$set=a=>{"$$scope"in a&&l(0,s=a.$$scope)},[s,n]}class Ae extends N{constructor(e){super();U(this,e,Se,Ee,V,{})}}export{Ae as default};