function R(){}function mi(i,e){for(const s in e)i[s]=e[s];return i}function ai(i){return i()}function li(){return Object.create(null)}function L(i){i.forEach(ai)}function hi(i){return typeof i=="function"}function pi(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}let D;function Ui(i,e){return D||(D=document.createElement("a")),D.href=e,i===D.href}function _i(i){return Object.keys(i).length===0}function gi(i,...e){if(i==null)return R;const s=i.subscribe(...e);return s.unsubscribe?()=>s.unsubscribe():s}function Ii(i,e,s){i.$$.on_destroy.push(gi(e,s))}function Pi(i,e,s,r){if(i){const u=ci(i,e,s,r);return i[0](u)}}function ci(i,e,s,r){return i[1]&&r?mi(s.ctx.slice(),i[1](r(e))):s.ctx}function Di(i,e,s,r){if(i[2]&&r){const u=i[2](r(s));if(e.dirty===void 0)return u;if(typeof u=="object"){const h=[],d=Math.max(e.dirty.length,u.length);for(let f=0;f<d;f+=1)h[f]=e.dirty[f]|u[f];return h}return e.dirty|u}return e.dirty}function Vi(i,e,s,r,u,h){if(u){const d=ci(e,s,r,h);i.p(d,u)}}function Gi(i){if(i.ctx.length>32){const e=[],s=i.ctx.length/32;for(let r=0;r<s;r++)e[r]=-1;return e}return-1}let V=!1;function xi(){V=!0}function vi(){V=!1}function yi(i,e,s,r){for(;i<e;){const u=i+(e-i>>1);s(u)<=r?i=u+1:e=u}return i}function ki(i){if(i.hydrate_init)return;i.hydrate_init=!0;let e=i.childNodes;if(i.nodeName==="HEAD"){const c=[];for(let w=0;w<e.length;w++){const k=e[w];k.claim_order!==void 0&&c.push(k)}e=c}const s=new Int32Array(e.length+1),r=new Int32Array(e.length);s[0]=-1;let u=0;for(let c=0;c<e.length;c++){const w=e[c].claim_order,k=(u>0&&e[s[u]].claim_order<=w?u+1:yi(1,u,n=>e[s[n]].claim_order,w))-1;r[c]=s[k]+1;const E=k+1;s[E]=c,u=Math.max(E,u)}const h=[],d=[];let f=e.length-1;for(let c=s[u]+1;c!=0;c=r[c-1]){for(h.push(e[c-1]);f>=c;f--)d.push(e[f]);f--}for(;f>=0;f--)d.push(e[f]);h.reverse(),d.sort((c,w)=>c.claim_order-w.claim_order);for(let c=0,w=0;c<d.length;c++){for(;w<h.length&&d[c].claim_order>=h[w].claim_order;)w++;const k=w<h.length?h[w]:null;i.insertBefore(d[c],k)}}function Ei(i,e){if(V){for(ki(i),(i.actual_end_child===void 0||i.actual_end_child!==null&&i.actual_end_child.parentElement!==i)&&(i.actual_end_child=i.firstChild);i.actual_end_child!==null&&i.actual_end_child.claim_order===void 0;)i.actual_end_child=i.actual_end_child.nextSibling;e!==i.actual_end_child?(e.claim_order!==void 0||e.parentNode!==i)&&i.insertBefore(e,i.actual_end_child):i.actual_end_child=e.nextSibling}else(e.parentNode!==i||e.nextSibling!==null)&&i.appendChild(e)}function $i(i,e,s){V&&!s?Ei(i,e):(e.parentNode!==i||e.nextSibling!=s)&&i.insertBefore(e,s||null)}function Ai(i){i.parentNode.removeChild(i)}function Si(i){return document.createElement(i)}function Ni(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function J(i){return document.createTextNode(i)}function Wi(){return J(" ")}function Hi(){return J("")}function Yi(i,e,s){s==null?i.removeAttribute(e):i.getAttribute(e)!==s&&i.setAttribute(e,s)}function Ti(i){return Array.from(i.childNodes)}function Oi(i){i.claim_info===void 0&&(i.claim_info={last_index:0,total_claimed:0})}function ui(i,e,s,r,u=!1){Oi(i);const h=(()=>{for(let d=i.claim_info.last_index;d<i.length;d++){const f=i[d];if(e(f)){const c=s(f);return c===void 0?i.splice(d,1):i[d]=c,u||(i.claim_info.last_index=d),f}}for(let d=i.claim_info.last_index-1;d>=0;d--){const f=i[d];if(e(f)){const c=s(f);return c===void 0?i.splice(d,1):i[d]=c,u?c===void 0&&i.claim_info.last_index--:i.claim_info.last_index=d,f}}return r()})();return h.claim_order=i.claim_info.total_claimed,i.claim_info.total_claimed+=1,h}function di(i,e,s,r){return ui(i,u=>u.nodeName===e,u=>{const h=[];for(let d=0;d<u.attributes.length;d++){const f=u.attributes[d];s[f.name]||h.push(f.name)}h.forEach(d=>u.removeAttribute(d))},()=>r(e))}function Zi(i,e,s){return di(i,e,s,Si)}function Xi(i,e,s){return di(i,e,s,Ni)}function Bi(i,e){return ui(i,s=>s.nodeType===3,s=>{const r=""+e;if(s.data.startsWith(r)){if(s.data.length!==r.length)return s.splitText(r.length)}else s.data=r},()=>J(e),!0)}function Ji(i){return Bi(i," ")}function Ki(i,e){e=""+e,i.wholeText!==e&&(i.data=e)}function Qi(i,e,s){i.classList[s?"add":"remove"](e)}function ie(i,e=document.body){return Array.from(e.querySelectorAll(i))}let G;function $(i){G=i}function W(){if(!G)throw new Error("Function called outside component initialization");return G}function ee(i){W().$$.on_mount.push(i)}function se(i){W().$$.after_update.push(i)}function te(i,e){W().$$.context.set(i,e)}function ne(i){return W().$$.context.get(i)}const F=[],fi=[],H=[],wi=[],Mi=Promise.resolve();let K=!1;function Ci(){K||(K=!0,Mi.then(bi))}function Q(i){H.push(i)}let ii=!1;const ei=new Set;function bi(){if(!ii){ii=!0;do{for(let i=0;i<F.length;i+=1){const e=F[i];$(e),Ri(e.$$)}for($(null),F.length=0;fi.length;)fi.pop()();for(let i=0;i<H.length;i+=1){const e=H[i];ei.has(e)||(ei.add(e),e())}H.length=0}while(F.length);for(;wi.length;)wi.pop()();K=!1,ii=!1,ei.clear()}}function Ri(i){if(i.fragment!==null){i.update(),L(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(Q)}}const Y=new Set;let M;function oe(){M={r:0,c:[],p:M}}function re(){M.r||L(M.c),M=M.p}function zi(i,e){i&&i.i&&(Y.delete(i),i.i(e))}function ae(i,e,s,r){if(i&&i.o){if(Y.has(i))return;Y.add(i),M.c.push(()=>{Y.delete(i),r&&(s&&i.d(1),r())}),i.o(e)}}function le(i,e){const s={},r={},u={$$scope:1};let h=i.length;for(;h--;){const d=i[h],f=e[h];if(f){for(const c in d)c in f||(r[c]=1);for(const c in f)u[c]||(s[c]=f[c],u[c]=1);i[h]=f}else for(const c in d)u[c]=1}for(const d in r)d in s||(s[d]=void 0);return s}function ce(i){return typeof i=="object"&&i!==null?i:{}}function ue(i){i&&i.c()}function de(i,e){i&&i.l(e)}function qi(i,e,s,r){const{fragment:u,on_mount:h,on_destroy:d,after_update:f}=i.$$;u&&u.m(e,s),r||Q(()=>{const c=h.map(ai).filter(hi);d?d.push(...c):L(c),i.$$.on_mount=[]}),f.forEach(Q)}function ji(i,e){const s=i.$$;s.fragment!==null&&(L(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function Li(i,e){i.$$.dirty[0]===-1&&(F.push(i),Ci(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function fe(i,e,s,r,u,h,d,f=[-1]){const c=G;$(i);const w=i.$$={fragment:null,ctx:null,props:h,update:R,not_equal:u,bound:li(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:li(),dirty:f,skip_bound:!1,root:e.target||c.$$.root};d&&d(w.root);let k=!1;if(w.ctx=s?s(i,e.props||{},(E,n,...a)=>{const t=a.length?a[0]:n;return w.ctx&&u(w.ctx[E],w.ctx[E]=t)&&(!w.skip_bound&&w.bound[E]&&w.bound[E](t),k&&Li(i,E)),n}):[],w.update(),k=!0,L(w.before_update),w.fragment=r?r(w.ctx):!1,e.target){if(e.hydrate){xi();const E=Ti(e.target);w.fragment&&w.fragment.l(E),E.forEach(Ai)}else w.fragment&&w.fragment.c();e.intro&&zi(i.$$.fragment),qi(i,e.target,e.anchor,e.customElement),vi(),bi()}$(c)}class we{$destroy(){ji(this,1),this.$destroy=R}$on(e,s){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(s),()=>{const u=r.indexOf(s);u!==-1&&r.splice(u,1)}}$set(e){this.$$set&&!_i(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const z=[];function be(i,e=R){let s;const r=new Set;function u(f){if(pi(i,f)&&(i=f,s)){const c=!z.length;for(const w of r)w[1](),z.push(w,i);if(c){for(let w=0;w<z.length;w+=2)z[w][0](z[w+1]);z.length=0}}}function h(f){u(f(i))}function d(f,c=R){const w=[f,c];return r.add(w),r.size===1&&(s=e(u)||R),f(i),()=>{r.delete(w),r.size===0&&(s(),s=null)}}return{set:u,update:h,subscribe:d}}var Fi=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},si={exports:{}};/*!@license
 * UAParser.js v0.7.28
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */(function(i,e){(function(s,r){var u="0.7.28",h="",d="?",f="function",c="undefined",w="object",k="string",E="major",n="model",a="name",t="type",o="vendor",l="version",N="architecture",q="console",m="mobile",b="tablet",T="smarttv",U="wearable",ti="embedded",Z=255,A={extend:function(p,g){var _={};for(var y in p)g[y]&&g[y].length%2==0?_[y]=g[y].concat(p[y]):_[y]=p[y];return _},has:function(p,g){return typeof p===k?g.toLowerCase().indexOf(p.toLowerCase())!==-1:!1},lowerize:function(p){return p.toLowerCase()},major:function(p){return typeof p===k?p.replace(/[^\d\.]/g,"").split(".")[0]:r},trim:function(p,g){return p=p.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),typeof g===c?p:p.substring(0,Z)}},B={rgx:function(p,g){for(var _=0,y,v,P,x,j,O;_<g.length&&!j;){var oi=g[_],ri=g[_+1];for(y=v=0;y<oi.length&&!j;)if(j=oi[y++].exec(p),j)for(P=0;P<ri.length;P++)O=j[++v],x=ri[P],typeof x===w&&x.length>0?x.length==2?typeof x[1]==f?this[x[0]]=x[1].call(this,O):this[x[0]]=x[1]:x.length==3?typeof x[1]===f&&!(x[1].exec&&x[1].test)?this[x[0]]=O?x[1].call(this,O,x[2]):r:this[x[0]]=O?O.replace(x[1],x[2]):r:x.length==4&&(this[x[0]]=O?x[3].call(this,O.replace(x[1],x[2])):r):this[x]=O||r;_+=2}},str:function(p,g){for(var _ in g)if(typeof g[_]===w&&g[_].length>0){for(var y=0;y<g[_].length;y++)if(A.has(g[_][y],p))return _===d?r:_}else if(A.has(g[_],p))return _===d?r:_;return p}},X={browser:{oldSafari:{version:{"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},oldEdge:{version:{"0.1":"12.","21":"13.","31":"14.","39":"15.","41":"16.","42":"17.","44":"18."}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0","2000":"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0","7":"NT 6.1","8":"NT 6.2","8.1":"NT 6.3","10":["NT 6.4","NT 10.0"],RT:"ARM"}}}},ni={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[l,[a,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[l,[a,"Edge"]],[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,/(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],[a,l],[/opios[\/\s]+([\w\.]+)/i],[l,[a,"Opera Mini"]],[/\sopr\/([\w\.]+)/i],[l,[a,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(ba?idubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,/(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,/(weibo)__([\d\.]+)/i],[a,l],[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[l,[a,"UCBrowser"]],[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],[l,[a,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[l,[a,"WeChat"]],[/konqueror\/([\w\.]+)/i],[l,[a,"Konqueror"]],[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],[l,[a,"IE"]],[/yabrowser\/([\w\.]+)/i],[l,[a,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[a,/(.+)/,"$1 Secure Browser"],l],[/focus\/([\w\.]+)/i],[l,[a,"Firefox Focus"]],[/opt\/([\w\.]+)/i],[l,[a,"Opera Touch"]],[/coc_coc_browser\/([\w\.]+)/i],[l,[a,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[l,[a,"Dolphin"]],[/coast\/([\w\.]+)/i],[l,[a,"Opera Coast"]],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[l,[a,"MIUI Browser"]],[/fxios\/([\w\.-]+)/i],[l,[a,"Firefox"]],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[a,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[a,/(.+)/,"$1 Browser"],l],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],l],[/\s(electron)\/([\w\.]+)\ssafari/i,/(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],[a,l],[/(MetaSr)[\/\s]?([\w\.]+)/i,/(LBBROWSER)/i],[a],[/;fbav\/([\w\.]+);/i],[l,[a,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[a,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/\s]([\w\.-]+)/i],[a,l],[/\bgsa\/([\w\.]+)\s.*safari\//i],[l,[a,"GSA"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[l,[a,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[a,"Chrome WebView"],l],[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],[l,[a,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[a,l],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[l,[a,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[l,a],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[a,[l,B.str,X.browser.oldSafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[a,l],[/(navigator|netscape)\/([\w\.-]+)/i],[[a,"Netscape"],l],[/ile\svr;\srv:([\w\.]+)\).+firefox/i],[l,[a,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[a,l]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[N,"amd64"]],[/(ia32(?=;))/i],[[N,A.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[N,"ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[[N,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[N,"armhf"]],[/windows\s(ce|mobile);\sppc;/i],[[N,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[N,/ower/,"",A.lowerize]],[/(sun4\w)[;\)]/i],[[N,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[N,A.lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],[n,[o,"Samsung"],[t,b]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,/\ssamsung[\s-]([\w-]+)/i,/sec-(sgh\w+)/i],[n,[o,"Samsung"],[t,m]],[/\((ip(?:hone|od)[\s\w]*);/i],[n,[o,"Apple"],[t,m]],[/\((ipad);[\w\s\),;-]+apple/i,/applecoremedia\/[\w\.]+\s\((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[n,[o,"Apple"],[t,b]],[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],[n,[o,"Huawei"],[t,b]],[/d\/huawei([\w\s-]+)[;\)]/i,/\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],[n,[o,"Huawei"],[t,m]],[/\b(poco[\s\w]+)(?:\sbuild|\))/i,/\b;\s(\w+)\sbuild\/hm\1/i,/\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,/\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[n,/_/g," "],[o,"Xiaomi"],[t,m]],[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],[[n,/_/g," "],[o,"Xiaomi"],[t,b]],[/;\s(\w+)\sbuild.+\soppo/i,/\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[n,[o,"OPPO"],[t,m]],[/\svivo\s(\w+)(?:\sbuild|\))/i,/\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],[n,[o,"Vivo"],[t,m]],[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],[n,[o,"Realme"],[t,m]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,/\smot(?:orola)?[\s-](\w*)/i,/((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],[n,[o,"Motorola"],[t,m]],[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[n,[o,"Motorola"],[t,b]],[/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],[n,[o,"LG"],[t,b]],[/(lm-?f100[nv]?|nexus\s[45])/i,/lg[e;\s\/-]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+)\sbuild/i],[n,[o,"LG"],[t,m]],[/(ideatab[\w\-\s]+)/i,/lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],[n,[o,"Lenovo"],[t,b]],[/(?:maemo|nokia).*(n900|lumia\s\d+)/i,/nokia[\s_-]?([\w\.-]*)/i],[[n,/_/g," "],[o,"Nokia"],[t,m]],[/droid.+;\s(pixel\sc)[\s)]/i],[n,[o,"Google"],[t,b]],[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],[n,[o,"Google"],[t,m]],[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[n,[o,"Sony"],[t,m]],[/sony\stablet\s[ps]\sbuild\//i,/(?:sony)?sgp\w+(?:\sbuild\/|\))/i],[[n,"Xperia Tablet"],[o,"Sony"],[t,b]],[/\s(kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1)\sbuild/i,/\boneplus\s(a\d{4})[\s)]/i],[n,[o,"OnePlus"],[t,m]],[/(alexa)webm/i,/(kf[a-z]{2}wi)(\sbuild\/|\))/i,/(kf[a-z]+)(\sbuild\/|\)).+silk\//i],[n,[o,"Amazon"],[t,b]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[n,"Fire Phone"],[o,"Amazon"],[t,m]],[/\((playbook);[\w\s\),;-]+(rim)/i],[n,o,[t,b]],[/((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10;\s(\w+)/i],[n,[o,"BlackBerry"],[t,m]],[/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],[n,[o,"ASUS"],[t,b]],[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],[n,[o,"ASUS"],[t,m]],[/(nexus\s9)/i],[n,[o,"HTC"],[t,b]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[o,[n,/_/g," "],[t,m]],[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[n,[o,"Acer"],[t,b]],[/droid.+;\s(m[1-5]\snote)\sbuild/i,/\bmz-([\w-]{2,})/i],[n,[o,"Meizu"],[t,m]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i,/(microsoft);\s(lumia[\s\w]+)/i,/(lenovo)[_\s-]?([\w-]+)/i,/linux;.+(jolla);/i,/droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[o,n,[t,m]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i,/[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,/[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,/\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,/\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],[o,n,[t,b]],[/\s(surface\sduo)\s/i],[n,[o,"Microsoft"],[t,b]],[/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],[n,[o,"Fairphone"],[t,m]],[/\s(u304aa)\sbuild/i],[n,[o,"AT&T"],[t,m]],[/sie-(\w*)/i],[n,[o,"Siemens"],[t,m]],[/[;\/]\s?(rct\w+)\sbuild/i],[n,[o,"RCA"],[t,b]],[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],[n,[o,"Dell"],[t,b]],[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],[n,[o,"Verizon"],[t,b]],[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],[n,[o,"Barnes & Noble"],[t,b]],[/[;\/]\s(tm\d{3}\w+)\sbuild/i],[n,[o,"NuVision"],[t,b]],[/;\s(k88)\sbuild/i],[n,[o,"ZTE"],[t,b]],[/;\s(nx\d{3}j)\sbuild/i],[n,[o,"ZTE"],[t,m]],[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],[n,[o,"Swiss"],[t,m]],[/[;\/]\s?(zur\d{3})\sbuild/i],[n,[o,"Swiss"],[t,b]],[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],[n,[o,"Zeki"],[t,b]],[/[;\/]\s([yr]\d{2})\sbuild/i,/[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],[[o,"Dragon Touch"],n,[t,b]],[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],[n,[o,"Insignia"],[t,b]],[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],[n,[o,"NextBook"],[t,b]],[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],[[o,"Voice"],n,[t,m]],[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],[[o,"LvTel"],n,[t,m]],[/;\s(ph-1)\s/i],[n,[o,"Essential"],[t,m]],[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],[n,[o,"Envizen"],[t,b]],[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],[n,[o,"MachSpeed"],[t,b]],[/[;\/]\s?tu_(1491)\sbuild/i],[n,[o,"Rotor"],[t,b]],[/(shield[\w\s]+)\sbuild/i],[n,[o,"Nvidia"],[t,b]],[/(sprint)\s(\w+)/i],[o,n,[t,m]],[/(kin\.[onetw]{3})/i],[[n,/\./g," "],[o,"Microsoft"],[t,m]],[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[n,[o,"Zebra"],[t,b]],[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],[n,[o,"Zebra"],[t,m]],[/\s(ouya)\s/i,/(nintendo)\s([wids3utch]+)/i],[o,n,[t,q]],[/droid.+;\s(shield)\sbuild/i],[n,[o,"Nvidia"],[t,q]],[/(playstation\s[345portablevi]+)/i],[n,[o,"Sony"],[t,q]],[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],[n,[o,"Microsoft"],[t,q]],[/smart-tv.+(samsung)/i],[o,[t,T]],[/hbbtv.+maple;(\d+)/i],[[n,/^/,"SmartTV"],[o,"Samsung"],[t,T]],[/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],[[o,"LG"],[t,T]],[/(apple)\s?tv/i],[o,[n,"Apple TV"],[t,T]],[/crkey/i],[[n,"Chromecast"],[o,"Google"],[t,T]],[/droid.+aft([\w])(\sbuild\/|\))/i],[n,[o,"Amazon"],[t,T]],[/\(dtv[\);].+(aquos)/i],[n,[o,"Sharp"],[t,T]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[o,A.trim],[n,A.trim],[t,T]],[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],[[t,T]],[/((pebble))app\/[\d\.]+\s/i],[o,n,[t,U]],[/droid.+;\s(glass)\s\d/i],[n,[o,"Google"],[t,U]],[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],[n,[o,"Zebra"],[t,U]],[/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],[o,[t,ti]],[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[n,[t,m]],[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[n,[t,b]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[t,A.lowerize]],[/(android[\w\.\s\-]{0,9});.+build/i],[n,[o,"Generic"]],[/(phone)/i],[[t,m]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[l,[a,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[l,[a,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[a,l],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[l,a]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[a,l],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],[a,[l,B.str,X.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[a,"Windows"],[l,B.str,X.os.windows.version]],[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,/cfnetwork\/.+darwin/i],[[l,/_/g,"."],[a,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],[[a,"Mac OS"],[l,/_/g,"."]],[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/\((series40);/i],[a,l],[/\(bb(10);/i],[l,[a,"BlackBerry"]],[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],[l,[a,"Symbian"]],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[a,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[l,[a,"webOS"]],[/crkey\/([\d\.]+)/i],[l,[a,"Chromecast"]],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[a,"Chromium OS"],l],[/(nintendo|playstation)\s([wids345portablevuch]+)/i,/(xbox);\s+xbox\s([^\);]+)/i,/(mint)[\/\s\(\)]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i,/\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku)\s(\w+)/i],[a,l],[/(sunos)\s?([\w\.\d]*)/i],[[a,"Solaris"],l],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[a,l]]},S=function(p,g){if(typeof p=="object"&&(g=p,p=r),!(this instanceof S))return new S(p,g).getResult();var _=p||(typeof s!="undefined"&&s.navigator&&s.navigator.userAgent?s.navigator.userAgent:h),y=g?A.extend(ni,g):ni;return this.getBrowser=function(){var v={name:r,version:r};return B.rgx.call(v,_,y.browser),v.major=A.major(v.version),v},this.getCPU=function(){var v={architecture:r};return B.rgx.call(v,_,y.cpu),v},this.getDevice=function(){var v={vendor:r,model:r,type:r};return B.rgx.call(v,_,y.device),v},this.getEngine=function(){var v={name:r,version:r};return B.rgx.call(v,_,y.engine),v},this.getOS=function(){var v={name:r,version:r};return B.rgx.call(v,_,y.os),v},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return _},this.setUA=function(v){return _=typeof v===k&&v.length>Z?A.trim(v,Z):v,this},this.setUA(_),this};S.VERSION=u,S.BROWSER={NAME:a,MAJOR:E,VERSION:l},S.CPU={ARCHITECTURE:N},S.DEVICE={MODEL:n,VENDOR:o,TYPE:t,CONSOLE:q,MOBILE:m,SMARTTV:T,TABLET:b,WEARABLE:U,EMBEDDED:ti},S.ENGINE={NAME:a,VERSION:l},S.OS={NAME:a,VERSION:l},i.exports&&(e=i.exports=S),e.UAParser=S;var C=typeof s!="undefined"&&(s.jQuery||s.Zepto);if(C&&!C.ua){var I=new S;C.ua=I.getResult(),C.ua.get=function(){return I.getUA()},C.ua.set=function(p){I.setUA(p);var g=I.getResult();for(var _ in g)C.ua[_]=g[_]}}})(typeof window=="object"?window:Fi)})(si,si.exports);var me=si.exports;export{ee as A,mi as B,be as C,ne as D,Ei as E,R as F,Ui as G,Qi as H,Ii as I,Pi as J,Vi as K,Gi as L,Di as M,Ni as N,Xi as O,ie as P,we as S,me as U,Ti as a,Yi as b,Zi as c,Ai as d,Si as e,$i as f,Bi as g,Ki as h,fe as i,ue as j,Wi as k,Hi as l,de as m,Ji as n,qi as o,le as p,ce as q,oe as r,pi as s,J as t,ae as u,ji as v,re as w,zi as x,te as y,se as z};