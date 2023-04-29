var kl=Object.defineProperty,Ml=Object.defineProperties;var Pl=Object.getOwnPropertyDescriptors;var ei=Object.getOwnPropertySymbols;var Ll=Object.prototype.hasOwnProperty,$l=Object.prototype.propertyIsEnumerable;var ni=(e,t,n)=>t in e?kl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,si=(e,t)=>{for(var n in t||(t={}))Ll.call(t,n)&&ni(e,n,t[n]);if(ei)for(var n of ei(t))$l.call(t,n)&&ni(e,n,t[n]);return e},ri=(e,t)=>Ml(e,Pl(t));import{u as Fl,c as Bl,o as I,a as D,b as m,t as tt,d as Ul,n as Ke,r as ii,F as xt,e as qt,f as J,g as ir,h as Vl,_ as ho,i as G,w as Ms,p as fo,j as po,k as Un,l as jl,m as En,q as be,v as ms,s as Hl,x as ql}from"./index.f1801bc4.js";var Vn="/casamiento/assets/flores.02d10ca5.png";const zl={class:"w-full h-screen"},Gl={class:"container-section h-screen grid content-center"},Kl={class:"text-center text-black bg-opacity-50 backdrop-blur-sm rounded-3xl pt-20"},Wl=m("h2",{class:"text-lg font-bold"},"\xA1NOS CASAMOS!",-1),Xl={class:"tangerine-font text-title font-bold"},Ql=m("img",{src:Vn,class:"w-6/12 md:w-6/12 mx-auto"},null,-1),Yl={class:"text-sm"},Jl=m("p",{class:"font-medium"},null,-1),Zl={class:"font-medium my-2 text-lg"},tu=m("p",{class:"font-medium my-2 text-lg"},"Te invitamos a nuestro Casamiento!",-1),eu={setup(e){const t=["Chelu","Brian"],n=Fl();let s=Bl(()=>n.query);return n.query.first===void 0&&(s={first:""}),(r,i)=>(I(),D("section",zl,[m("section",Gl,[m("div",Kl,[Wl,m("h1",Xl,tt(t.join(" & ")),1),Ql,m("div",Yl,[Jl,m("p",Zl,"Hola"+tt(Ul(s).first)+"!",1),tu])])])]))}};var nu="/casamiento/assets/couples.27244076.jpg";const su=m("img",{src:Vn,class:"w-6/12 md:w-6/12 mx-auto"},null,-1),ru={class:"satisfy-font text-4xl font-medium mb-5"},iu=["innerHTML"],jn={props:{title:{type:String,default:"The Section"},subtitle:{type:String,default:"Duis splople autem vel eum iriure Dapibus sit amet, tincidunt eu, nibh."},textColor:{type:String,default:"text-slate-800"}},setup(e){const t=e;return(n,s)=>(I(),D("section",{"data-aos":"fade-up",class:Ke([t.textColor,"sm:w-full w-9/12 px-4 mb-6 text-center flex justify-center flex-col items-center ml-auto mr-auto"])},[su,m("h1",ru,tt(t.title),1),m("p",{class:"text-sm",innerHTML:e.subtitle},null,8,iu)],2))}},ou={"data-aos":"fade-up"},au={"data-aos":"fade-up"},lu={props:{bgColor:{type:String,default:"bg-gray-50"}},setup(e){const t=e;return(n,s)=>(I(),D("section",{"data-aos":"zoom-in",class:Ke([t.bgColor,"w-9/12 mx-auto rounded-tl-[2rem] rounded-br-[2rem] shadow-xl overflow-hidden border border-red-200"])},[m("div",ou,[ii(n.$slots,"body")]),m("div",au,[ii(n.$slots,"footer")])],2))}};var or={exports:{}},mo=function(t,n){return function(){for(var r=new Array(arguments.length),i=0;i<r.length;i++)r[i]=arguments[i];return t.apply(n,r)}},uu=mo,ar=Object.prototype.toString,lr=function(e){return function(t){var n=ar.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())}}(Object.create(null));function zt(e){return e=e.toLowerCase(),function(n){return lr(n)===e}}function ur(e){return Array.isArray(e)}function bn(e){return typeof e=="undefined"}function cu(e){return e!==null&&!bn(e)&&e.constructor!==null&&!bn(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var go=zt("ArrayBuffer");function hu(e){var t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&go(e.buffer),t}function fu(e){return typeof e=="string"}function du(e){return typeof e=="number"}function yo(e){return e!==null&&typeof e=="object"}function gn(e){if(lr(e)!=="object")return!1;var t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}var pu=zt("Date"),mu=zt("File"),gu=zt("Blob"),yu=zt("FileList");function cr(e){return ar.call(e)==="[object Function]"}function vu(e){return yo(e)&&cr(e.pipe)}function wu(e){var t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||ar.call(e)===t||cr(e.toString)&&e.toString()===t)}var Eu=zt("URLSearchParams");function bu(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Tu(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function hr(e,t){if(!(e===null||typeof e=="undefined"))if(typeof e!="object"&&(e=[e]),ur(e))for(var n=0,s=e.length;n<s;n++)t.call(null,e[n],n,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}function Ps(){var e={};function t(r,i){gn(e[i])&&gn(r)?e[i]=Ps(e[i],r):gn(r)?e[i]=Ps({},r):ur(r)?e[i]=r.slice():e[i]=r}for(var n=0,s=arguments.length;n<s;n++)hr(arguments[n],t);return e}function _u(e,t,n){return hr(t,function(r,i){n&&typeof r=="function"?e[i]=uu(r,n):e[i]=r}),e}function Au(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function Su(e,t,n,s){e.prototype=Object.create(t.prototype,s),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)}function Cu(e,t,n){var s,r,i,o={};t=t||{};do{for(s=Object.getOwnPropertyNames(e),r=s.length;r-- >0;)i=s[r],o[i]||(t[i]=e[i],o[i]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t}function Iu(e,t,n){e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;var s=e.indexOf(t,n);return s!==-1&&s===n}function Du(e){if(!e)return null;var t=e.length;if(bn(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n}var xu=function(e){return function(t){return e&&t instanceof e}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),X={isArray:ur,isArrayBuffer:go,isBuffer:cu,isFormData:wu,isArrayBufferView:hu,isString:fu,isNumber:du,isObject:yo,isPlainObject:gn,isUndefined:bn,isDate:pu,isFile:mu,isBlob:gu,isFunction:cr,isStream:vu,isURLSearchParams:Eu,isStandardBrowserEnv:Tu,forEach:hr,merge:Ps,extend:_u,trim:bu,stripBOM:Au,inherits:Su,toFlatObject:Cu,kindOf:lr,kindOfTest:zt,endsWith:Iu,toArray:Du,isTypedArray:xu,isFileList:yu},Qt=X;function oi(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var vo=function(t,n,s){if(!n)return t;var r;if(s)r=s(n);else if(Qt.isURLSearchParams(n))r=n.toString();else{var i=[];Qt.forEach(n,function(l,c){l===null||typeof l=="undefined"||(Qt.isArray(l)?c=c+"[]":l=[l],Qt.forEach(l,function(h){Qt.isDate(h)?h=h.toISOString():Qt.isObject(h)&&(h=JSON.stringify(h)),i.push(oi(c)+"="+oi(h))}))}),r=i.join("&")}if(r){var o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+r}return t},Nu=X;function Hn(){this.handlers=[]}Hn.prototype.use=function(t,n,s){return this.handlers.push({fulfilled:t,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1};Hn.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)};Hn.prototype.forEach=function(t){Nu.forEach(this.handlers,function(s){s!==null&&t(s)})};var Ru=Hn,Ou=X,ku=function(t,n){Ou.forEach(t,function(r,i){i!==n&&i.toUpperCase()===n.toUpperCase()&&(t[n]=r,delete t[i])})},wo=X;function se(e,t,n,s,r){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),s&&(this.request=s),r&&(this.response=r)}wo.inherits(se,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Eo=se.prototype,bo={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){bo[e]={value:e}});Object.defineProperties(se,bo);Object.defineProperty(Eo,"isAxiosError",{value:!0});se.from=function(e,t,n,s,r,i){var o=Object.create(Eo);return wo.toFlatObject(e,o,function(l){return l!==Error.prototype}),se.call(o,e.message,t,n,s,r),o.name=e.name,i&&Object.assign(o,i),o};var fe=se,To={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},pt=X;function Mu(e,t){t=t||new FormData;var n=[];function s(i){return i===null?"":pt.isDate(i)?i.toISOString():pt.isArrayBuffer(i)||pt.isTypedArray(i)?typeof Blob=="function"?new Blob([i]):Buffer.from(i):i}function r(i,o){if(pt.isPlainObject(i)||pt.isArray(i)){if(n.indexOf(i)!==-1)throw Error("Circular reference detected in "+o);n.push(i),pt.forEach(i,function(l,c){if(!pt.isUndefined(l)){var u=o?o+"."+c:c,h;if(l&&!o&&typeof l=="object"){if(pt.endsWith(c,"{}"))l=JSON.stringify(l);else if(pt.endsWith(c,"[]")&&(h=pt.toArray(l))){h.forEach(function(p){!pt.isUndefined(p)&&t.append(u,s(p))});return}}r(l,u)}}),n.pop()}else t.append(o,s(i))}return r(e),t}var _o=Mu,gs=fe,Pu=function(t,n,s){var r=s.config.validateStatus;!s.status||!r||r(s.status)?t(s):n(new gs("Request failed with status code "+s.status,[gs.ERR_BAD_REQUEST,gs.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))},ln=X,Lu=ln.isStandardBrowserEnv()?function(){return{write:function(n,s,r,i,o,a){var l=[];l.push(n+"="+encodeURIComponent(s)),ln.isNumber(r)&&l.push("expires="+new Date(r).toGMTString()),ln.isString(i)&&l.push("path="+i),ln.isString(o)&&l.push("domain="+o),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){var s=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),$u=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)},Fu=function(t,n){return n?t.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):t},Bu=$u,Uu=Fu,Ao=function(t,n){return t&&!Bu(n)?Uu(t,n):n},ys=X,Vu=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],ju=function(t){var n={},s,r,i;return t&&ys.forEach(t.split(`
`),function(a){if(i=a.indexOf(":"),s=ys.trim(a.substr(0,i)).toLowerCase(),r=ys.trim(a.substr(i+1)),s){if(n[s]&&Vu.indexOf(s)>=0)return;s==="set-cookie"?n[s]=(n[s]?n[s]:[]).concat([r]):n[s]=n[s]?n[s]+", "+r:r}}),n},ai=X,Hu=ai.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a"),s;function r(i){var o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return s=r(window.location.href),function(o){var a=ai.isString(o)?r(o):o;return a.protocol===s.protocol&&a.host===s.host}}():function(){return function(){return!0}}(),Ls=fe,qu=X;function So(e){Ls.call(this,e==null?"canceled":e,Ls.ERR_CANCELED),this.name="CanceledError"}qu.inherits(So,Ls,{__CANCEL__:!0});var qn=So,zu=function(t){var n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return n&&n[1]||""},Te=X,Gu=Pu,Ku=Lu,Wu=vo,Xu=Ao,Qu=ju,Yu=Hu,Ju=To,vt=fe,Zu=qn,tc=zu,li=function(t){return new Promise(function(s,r){var i=t.data,o=t.headers,a=t.responseType,l;function c(){t.cancelToken&&t.cancelToken.unsubscribe(l),t.signal&&t.signal.removeEventListener("abort",l)}Te.isFormData(i)&&Te.isStandardBrowserEnv()&&delete o["Content-Type"];var u=new XMLHttpRequest;if(t.auth){var h=t.auth.username||"",p=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";o.Authorization="Basic "+btoa(h+":"+p)}var y=Xu(t.baseURL,t.url);u.open(t.method.toUpperCase(),Wu(y,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function _(){if(!!u){var E="getAllResponseHeaders"in u?Qu(u.getAllResponseHeaders()):null,A=!a||a==="text"||a==="json"?u.responseText:u.response,Y={data:A,status:u.status,statusText:u.statusText,headers:E,config:t,request:u};Gu(function(Xt){s(Xt),c()},function(Xt){r(Xt),c()},Y),u=null}}if("onloadend"in u?u.onloadend=_:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(_)},u.onabort=function(){!u||(r(new vt("Request aborted",vt.ECONNABORTED,t,u)),u=null)},u.onerror=function(){r(new vt("Network Error",vt.ERR_NETWORK,t,u,u)),u=null},u.ontimeout=function(){var A=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",Y=t.transitional||Ju;t.timeoutErrorMessage&&(A=t.timeoutErrorMessage),r(new vt(A,Y.clarifyTimeoutError?vt.ETIMEDOUT:vt.ECONNABORTED,t,u)),u=null},Te.isStandardBrowserEnv()){var R=(t.withCredentials||Yu(y))&&t.xsrfCookieName?Ku.read(t.xsrfCookieName):void 0;R&&(o[t.xsrfHeaderName]=R)}"setRequestHeader"in u&&Te.forEach(o,function(A,Y){typeof i=="undefined"&&Y.toLowerCase()==="content-type"?delete o[Y]:u.setRequestHeader(Y,A)}),Te.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),a&&a!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",t.onDownloadProgress),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",t.onUploadProgress),(t.cancelToken||t.signal)&&(l=function(E){!u||(r(!E||E&&E.type?new Zu:E),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(l),t.signal&&(t.signal.aborted?l():t.signal.addEventListener("abort",l))),i||(i=null);var k=tc(y);if(k&&["http","https","file"].indexOf(k)===-1){r(new vt("Unsupported protocol "+k+":",vt.ERR_BAD_REQUEST,t));return}u.send(i)})},ec=null,U=X,ui=ku,ci=fe,nc=To,sc=_o,rc={"Content-Type":"application/x-www-form-urlencoded"};function hi(e,t){!U.isUndefined(e)&&U.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function ic(){var e;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(e=li),e}function oc(e,t,n){if(U.isString(e))try{return(t||JSON.parse)(e),U.trim(e)}catch(s){if(s.name!=="SyntaxError")throw s}return(n||JSON.stringify)(e)}var zn={transitional:nc,adapter:ic(),transformRequest:[function(t,n){if(ui(n,"Accept"),ui(n,"Content-Type"),U.isFormData(t)||U.isArrayBuffer(t)||U.isBuffer(t)||U.isStream(t)||U.isFile(t)||U.isBlob(t))return t;if(U.isArrayBufferView(t))return t.buffer;if(U.isURLSearchParams(t))return hi(n,"application/x-www-form-urlencoded;charset=utf-8"),t.toString();var s=U.isObject(t),r=n&&n["Content-Type"],i;if((i=U.isFileList(t))||s&&r==="multipart/form-data"){var o=this.env&&this.env.FormData;return sc(i?{"files[]":t}:t,o&&new o)}else if(s||r==="application/json")return hi(n,"application/json"),oc(t);return t}],transformResponse:[function(t){var n=this.transitional||zn.transitional,s=n&&n.silentJSONParsing,r=n&&n.forcedJSONParsing,i=!s&&this.responseType==="json";if(i||r&&U.isString(t)&&t.length)try{return JSON.parse(t)}catch(o){if(i)throw o.name==="SyntaxError"?ci.from(o,ci.ERR_BAD_RESPONSE,this,null,this.response):o}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ec},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};U.forEach(["delete","get","head"],function(t){zn.headers[t]={}});U.forEach(["post","put","patch"],function(t){zn.headers[t]=U.merge(rc)});var fr=zn,ac=X,lc=fr,uc=function(t,n,s){var r=this||lc;return ac.forEach(s,function(o){t=o.call(r,t,n)}),t},Co=function(t){return!!(t&&t.__CANCEL__)},fi=X,vs=uc,cc=Co,hc=fr,fc=qn;function ws(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new fc}var dc=function(t){ws(t),t.headers=t.headers||{},t.data=vs.call(t,t.data,t.headers,t.transformRequest),t.headers=fi.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),fi.forEach(["delete","get","head","post","put","patch","common"],function(r){delete t.headers[r]});var n=t.adapter||hc.adapter;return n(t).then(function(r){return ws(t),r.data=vs.call(t,r.data,r.headers,t.transformResponse),r},function(r){return cc(r)||(ws(t),r&&r.response&&(r.response.data=vs.call(t,r.response.data,r.response.headers,t.transformResponse))),Promise.reject(r)})},ht=X,Io=function(t,n){n=n||{};var s={};function r(u,h){return ht.isPlainObject(u)&&ht.isPlainObject(h)?ht.merge(u,h):ht.isPlainObject(h)?ht.merge({},h):ht.isArray(h)?h.slice():h}function i(u){if(ht.isUndefined(n[u])){if(!ht.isUndefined(t[u]))return r(void 0,t[u])}else return r(t[u],n[u])}function o(u){if(!ht.isUndefined(n[u]))return r(void 0,n[u])}function a(u){if(ht.isUndefined(n[u])){if(!ht.isUndefined(t[u]))return r(void 0,t[u])}else return r(void 0,n[u])}function l(u){if(u in n)return r(t[u],n[u]);if(u in t)return r(void 0,t[u])}var c={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l};return ht.forEach(Object.keys(t).concat(Object.keys(n)),function(h){var p=c[h]||i,y=p(h);ht.isUndefined(y)&&p!==l||(s[h]=y)}),s},Do={version:"0.27.2"},pc=Do.version,At=fe,dr={};["object","boolean","number","function","string","symbol"].forEach(function(e,t){dr[e]=function(s){return typeof s===e||"a"+(t<1?"n ":" ")+e}});var di={};dr.transitional=function(t,n,s){function r(i,o){return"[Axios v"+pc+"] Transitional option '"+i+"'"+o+(s?". "+s:"")}return function(i,o,a){if(t===!1)throw new At(r(o," has been removed"+(n?" in "+n:"")),At.ERR_DEPRECATED);return n&&!di[o]&&(di[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,a):!0}};function mc(e,t,n){if(typeof e!="object")throw new At("options must be an object",At.ERR_BAD_OPTION_VALUE);for(var s=Object.keys(e),r=s.length;r-- >0;){var i=s[r],o=t[i];if(o){var a=e[i],l=a===void 0||o(a,i,e);if(l!==!0)throw new At("option "+i+" must be "+l,At.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new At("Unknown option "+i,At.ERR_BAD_OPTION)}}var gc={assertOptions:mc,validators:dr},xo=X,yc=vo,pi=Ru,mi=dc,Gn=Io,vc=Ao,No=gc,Yt=No.validators;function re(e){this.defaults=e,this.interceptors={request:new pi,response:new pi}}re.prototype.request=function(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Gn(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var s=n.transitional;s!==void 0&&No.assertOptions(s,{silentJSONParsing:Yt.transitional(Yt.boolean),forcedJSONParsing:Yt.transitional(Yt.boolean),clarifyTimeoutError:Yt.transitional(Yt.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(i=i&&y.synchronous,r.unshift(y.fulfilled,y.rejected))});var o=[];this.interceptors.response.forEach(function(y){o.push(y.fulfilled,y.rejected)});var a;if(!i){var l=[mi,void 0];for(Array.prototype.unshift.apply(l,r),l=l.concat(o),a=Promise.resolve(n);l.length;)a=a.then(l.shift(),l.shift());return a}for(var c=n;r.length;){var u=r.shift(),h=r.shift();try{c=u(c)}catch(p){h(p);break}}try{a=mi(c)}catch(p){return Promise.reject(p)}for(;o.length;)a=a.then(o.shift(),o.shift());return a};re.prototype.getUri=function(t){t=Gn(this.defaults,t);var n=vc(t.baseURL,t.url);return yc(n,t.params,t.paramsSerializer)};xo.forEach(["delete","get","head","options"],function(t){re.prototype[t]=function(n,s){return this.request(Gn(s||{},{method:t,url:n,data:(s||{}).data}))}});xo.forEach(["post","put","patch"],function(t){function n(s){return function(i,o,a){return this.request(Gn(a||{},{method:t,headers:s?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}re.prototype[t]=n(),re.prototype[t+"Form"]=n(!0)});var wc=re,Ec=qn;function ie(e){if(typeof e!="function")throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(r){t=r});var n=this;this.promise.then(function(s){if(!!n._listeners){var r,i=n._listeners.length;for(r=0;r<i;r++)n._listeners[r](s);n._listeners=null}}),this.promise.then=function(s){var r,i=new Promise(function(o){n.subscribe(o),r=o}).then(s);return i.cancel=function(){n.unsubscribe(r)},i},e(function(r){n.reason||(n.reason=new Ec(r),t(n.reason))})}ie.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};ie.prototype.subscribe=function(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]};ie.prototype.unsubscribe=function(t){if(!!this._listeners){var n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}};ie.source=function(){var t,n=new ie(function(r){t=r});return{token:n,cancel:t}};var bc=ie,Tc=function(t){return function(s){return t.apply(null,s)}},_c=X,Ac=function(t){return _c.isObject(t)&&t.isAxiosError===!0},gi=X,Sc=mo,yn=wc,Cc=Io,Ic=fr;function Ro(e){var t=new yn(e),n=Sc(yn.prototype.request,t);return gi.extend(n,yn.prototype,t),gi.extend(n,t),n.create=function(r){return Ro(Cc(e,r))},n}var ut=Ro(Ic);ut.Axios=yn;ut.CanceledError=qn;ut.CancelToken=bc;ut.isCancel=Co;ut.VERSION=Do.version;ut.toFormData=_o;ut.AxiosError=fe;ut.Cancel=ut.CanceledError;ut.all=function(t){return Promise.all(t)};ut.spread=Tc;ut.isAxiosError=Ac;or.exports=ut;or.exports.default=ut;var pr=or.exports;const Dc={class:"w-full mb-6","data-aos":"slide-up"},xc=["src","alt"],Nc={class:"mt-10 w-full text-center text-slate-800 text-sm"},Rc={class:"text-black text-[2rem] font-semibold tangerine-font"},Oc={class:"text-black mb-3 mt-1 font-semibold"},kc={class:"flex gap-3 justify-center mt-3"},Mc=["href"],Pc={props:{source:{type:Object,default:{name:"fulan"}}},setup(e){return(t,n)=>(I(),D("section",Dc,[m("img",{class:"w-9/12 shadow-lg border border-gray-200 mx-auto rounded-tr-3xl rounded-bl-3xl",src:e.source.thumb,alt:e.source.thumb},null,8,xc),m("div",Nc,[m("p",Rc,tt(e.source.name),1),m("p",Oc,tt(e.source.description),1),m("div",kc,[(I(!0),D(xt,null,qt(e.source.social,(s,r)=>(I(),D("a",{key:r,target:"_blank",class:"text-amber-500",href:s.link},[m("i",{class:Ke([s.icon,"text-xl"])},null,2)],8,Mc))),128))])])]))}},Lc={class:"w-10/12 mx-auto flex flex-wrap justify-center items-center gap-5 mt-6"},$c={setup(e){const t=J(null);return ir(()=>{pr.get("contents/couples.json").then(n=>t.value=n.data.couples).catch(n=>alert(n))}),(n,s)=>(I(),D("section",Lc,[(I(!0),D(xt,null,qt(t.value,(r,i)=>(I(),Vl(Pc,{key:i,source:r},null,8,["source"]))),128))]))}},Fc={class:"px-2 py-4"},Bc=m("p",{class:"mx-auto text-center text-sm text-black w-10/12 mb-2"},"Los esperamos en",-1),Uc={class:"flex justify-center gap-3"},Vc={class:"text-3xl font-medium text-amber-500 mb-2"},jc={class:"text-black text-sm font-medium"},Hc={setup(e){const t=J(null),n=(r,i,o)=>{const a=new Date().getTime(),l=r-a;if(l>0){const c=Math.floor(l/864e5),u=Math.floor(l%(1e3*60*60*24)/(1e3*60*60)),h=Math.floor(l%(1e3*60*60)/(1e3*60)),p=Math.floor(l%(1e3*60)/1e3);i.value={dias:c,horas:u,minutos:h,segundos:p},c===0&&u===0&&h===0&&p===0&&o()}else i.value={dias:0,horas:0,minutos:0,segundos:0}},s=setInterval(()=>{n(new Date("2022-10-8 19:30").getTime(),t,()=>{clearInterval(s)})},1e3);return(r,i)=>(I(),D("div",Fc,[Bc,m("section",Uc,[(I(!0),D(xt,null,qt(t.value,(o,a,l)=>(I(),D("div",{key:l,"data-aos":"zoom-in",class:"text-center w-3/12"},[m("p",Vc,tt(o),1),m("p",jc,tt(a),1)]))),128))])]))}};const de=e=>(fo("data-v-52de65c5"),e=e(),po(),e),qc={class:"w-full bg-cream"},zc={class:"container-section pb-12"},Gc={"data-aos":"fade-up"},Kc={class:"text-xl satisfy-font text-amber-400"},Wc={class:"font-medium text-black"},Xc={class:"font-medium text-black"},Qc=de(()=>m("img",{src:Vn,class:"w-4/12 md:w-4/12 mx-auto rotate-180"},null,-1)),Yc={class:"text-amber-500"},Jc={class:"text-black"},Zc=["href"],th=de(()=>m("i",{class:"fa-solid fa-map"},null,-1)),eh=Un(" Ver Mapa "),nh=[th,eh],sh=de(()=>m("img",{src:Vn,class:"w-4/12 md:w-4/12 mx-auto"},null,-1)),rh={class:""},ih=de(()=>m("p",{class:"text-sm text-black"},"Por favor confirmar asistencia",-1)),oh=de(()=>m("i",{class:"fa-solid fa-clipboard-check"},null,-1)),ah=Un(" Confirmar "),lh=[oh,ah],uh=de(()=>m("img",{src:nu,alt:""},null,-1)),ch={emits:["goToGuestBook"],setup(e,{emit:t}){const n=J(null);ir(()=>{pr.get("contents/timelines.json").then(r=>n.value=r.data.timelines).catch(r=>alert(r))});const s=()=>setTimeout(()=>{t("goToGuestBook")},300);return(r,i)=>(I(),D("section",qc,[m("section",zc,[G(jn,{"text-color":"text-black",subtitle:"Los invitamos a los siguientes eventos:",title:"Cronograma"}),G(lu,null,{body:Ms(()=>[(I(!0),D(xt,null,qt(n.value,(o,a)=>(I(),D("div",{class:"px-6 py-8 text-center text-sm font-medium",key:a},[m("section",Gc,[m("h1",Kc,tt(o.title),1),m("p",Wc,tt(o.date),1),m("p",Xc,tt(o.time),1),Qc,m("p",Yc,tt(o.location),1),m("p",Jc,tt(o.address),1),m("a",{class:"btn bg-rosa text-amber-500",href:o.mapUrl,target:"_blank"},nh,8,Zc),sh])]))),128))]),footer:Ms(()=>[m("section",rh,[G(Hc),m("div",{class:"px-6 pt-5 pb-8 text-center"},[ih,m("button",{onClick:s,class:"btn bg-rosa text-amber-500"},lh)]),uh])]),_:1})])]))}};var hh=ho(ch,[["__scopeId","data-v-52de65c5"]]);const fh={class:"w-full bg-cream"},dh={class:"container-section"},ph={setup(e){return(t,n)=>(I(),D("section",fh,[m("section",dh,[G(jn,{"text-color":"text-black",title:"El novio y la novia",subtitle:"From tonight until the end of time"}),G($c)])]))}},mh={class:"w-full xl:bg-slate-100"},gh={class:"w-full px-0"},yh={class:"flex flex-wrap"},vh=["src","alt"],wh={setup(e){const t=J(null);return ir(()=>{pr.get("contents/galleries.json").then(n=>t.value=n.data.galleries).catch(n=>alert(n))}),(n,s)=>{const r=jl("viewer");return I(),D("section",mh,[m("section",gh,[G(r,{images:t.value},{default:Ms(()=>[m("div",yh,[(I(!0),D(xt,null,qt(t.value,i=>(I(),D("div",{key:i,"data-aos":"fade-up",class:"w-4/12"},[m("img",{src:i,class:"w-full h-full",alt:i},null,8,vh)]))),128))])]),_:1},8,["images"])])])}}};var Eh="/casamiento/assets/sobre.907d6085.png";const bh={key:0,class:"text-black font-bold"},yi={props:{content:{type:String,default:"Example"},header:{type:String,required:!1,default:null}},setup(e){const t=e,n=J(t.content),s=()=>{navigator.clipboard&&navigator.clipboard.writeText(t.content).then(r=>n.value="Copied!").catch(r=>console.log(r))};return(r,i)=>(I(),D(xt,null,[e.header?(I(),D("p",bh,tt(e.header),1)):En("",!0),m("button",{onClick:s,class:"active:scale-95 duration-300 bg-gray-800 text-sm text-gray-50 py-2 px-4 rounded-lg inline-block mt-1 mb-3"},[Un(tt(n.value)+" ",1),m("i",{class:Ke([n.value==="Copied!"?"fa-check":"fa-copy","fa-solid ml-2"])},null,2)])],64))}},Th={class:"w-full xl:bg-slate-100 pt-12 pb-5"},_h={class:"section-container"},Ah={class:""},Sh=["src","alt"],Ch=m("p",{class:"font-bold text-sm text-slate-800"},"O podes dejarnos un sobrecito",-1),Ih=m("img",{src:Eh,alt:"$$",class:"w-5/12 mx-auto mb-3"},null,-1),Dh={setup(e){const t=[{thumb:"wallets/santander.svg",platform:"Santander",number:"0720210288000001131372",alias:"PRISMA.MAMA.LANA"}];return(n,s)=>(I(),D("section",Th,[m("section",_h,[G(jn,{class:"max-w-9/12",title:"Regalos",subtitle:"Lo mas importante es que vengas! Si ademas queres sponsorear nuestro proyecto de vida, podes hacernos una transferencia:"}),m("section",Ah,[(I(),D(xt,null,qt(t,(r,i)=>m("div",{key:i,"data-aos":"zoom-in",class:"w-8/12 text-center border border-gray-200 mx-auto p-5 mb-5 bg-gray-100 shadow-lg rounded-tl-3xl rounded-br-3xl"},[m("img",{src:r.thumb,alt:r.platform,class:"w-5/12 mx-auto mb-3"},null,8,Sh),G(yi,{header:"CBU",content:r.number},null,8,["content"]),G(yi,{header:"Alias",content:r.alias},null,8,["content"]),Ch,Ih])),64))])])]))}},xh={key:0,class:"flex gap-2 mb-6"},Nh=m("i",{class:"fa fa-times"},null,-1),Rh=[Nh],Oh={props:{statusResponse:{type:Boolean,default:!1},showAlert:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:t}){return(n,s)=>e.showAlert?(I(),D("section",xh,[m("div",{class:Ke([e.statusResponse?"bg-green-500":"bg-red-500","w-10/12 text-gray-100 p-2 text-center rounded-lg duration-300"])},tt(e.statusResponse?"Mensaje enviado con exito":"El mensaje no se pudo enviar"),3),m("button",{onClick:s[0]||(s[0]=r=>t("close")),class:"text-black px-1 w-2/12 grid place-items-center border border-gray-600 rounded-lg"},Rh)])):En("",!0)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},kh=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(l>>10)),t[s++]=String.fromCharCode(56320+(l&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Mh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,l=r+2<e.length,c=l?e[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,y=c&63;l||(y=64,o||(p=64)),s.push(n[u],n[h],n[p],n[y])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Oo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):kh(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const c=r<e.length?n[e.charAt(r)]:64;++r;const h=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||c==null||h==null)throw Error();const p=i<<2|a>>4;if(s.push(p),c!==64){const y=a<<4&240|c>>2;if(s.push(y),h!==64){const _=c<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ph=function(e){const t=Oo(e);return Mh.encodeByteArray(t,!0)},ko=function(e){return Ph(e).replace(/\./g,"")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $h(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Kn())}function Fh(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Bh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uh(){return Kn().indexOf("Electron/")>=0}function Vh(){const e=Kn();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function jh(){return Kn().indexOf("MSAppHost/")>=0}function Hh(){return typeof indexedDB=="object"}function qh(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="FirebaseError";class pe extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=zh,Object.setPrototypeOf(this,pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mo.prototype.create)}}class Mo{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?Gh(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new pe(r,a,s)}}function Gh(e,t){return e.replace(Kh,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Kh=/\{\$([^}]+)}/g;function $s(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(vi(i)&&vi(o)){if(!$s(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function vi(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(e){return e&&e._delegate?e._delegate:e}class Oe{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Lh;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Qh(t))try{this.getOrInitializeService({instanceIdentifier:Ot})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Ot){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ot){return this.instances.has(t)}getOptions(t=Ot){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Xh(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Ot){return this.component?this.component.multipleInstances?t:Ot:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xh(e){return e===Ot?void 0:e}function Qh(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Wh(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(x||(x={}));const Jh={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},Zh=x.INFO,tf={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},ef=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=tf[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Po{constructor(t){this.name=t,this._logLevel=Zh,this._logHandler=ef,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in x))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Jh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...t),this._logHandler(this,x.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...t),this._logHandler(this,x.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,x.INFO,...t),this._logHandler(this,x.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,x.WARN,...t),this._logHandler(this,x.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...t),this._logHandler(this,x.ERROR,...t)}}const nf=(e,t)=>t.some(n=>e instanceof n);let wi,Ei;function sf(){return wi||(wi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rf(){return Ei||(Ei=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lo=new WeakMap,Fs=new WeakMap,$o=new WeakMap,Es=new WeakMap,mr=new WeakMap;function of(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(St(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Lo.set(n,e)}).catch(()=>{}),mr.set(t,e),t}function af(e){if(Fs.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Fs.set(e,t)}let Bs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Fs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||$o.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return St(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function lf(e){Bs=e(Bs)}function uf(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(bs(this),t,...n);return $o.set(s,t.sort?t.sort():[t]),St(s)}:rf().includes(e)?function(...t){return e.apply(bs(this),t),St(Lo.get(this))}:function(...t){return St(e.apply(bs(this),t))}}function cf(e){return typeof e=="function"?uf(e):(e instanceof IDBTransaction&&af(e),nf(e,sf())?new Proxy(e,Bs):e)}function St(e){if(e instanceof IDBRequest)return of(e);if(Es.has(e))return Es.get(e);const t=cf(e);return t!==e&&(Es.set(e,t),mr.set(t,e)),t}const bs=e=>mr.get(e);function hf(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=St(o);return s&&o.addEventListener("upgradeneeded",l=>{s(St(o.result),l.oldVersion,l.newVersion,St(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const ff=["get","getKey","getAll","getAllKeys","count"],df=["put","add","delete","clear"],Ts=new Map;function bi(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ts.get(t))return Ts.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=df.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||ff.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return Ts.set(t,i),i}lf(e=>ri(si({},e),{get:(t,n,s)=>bi(t,n)||e.get(t,n,s),has:(t,n)=>!!bi(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mf(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function mf(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Us="@firebase/app",Ti="0.7.31";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new Po("@firebase/app"),gf="@firebase/app-compat",yf="@firebase/analytics-compat",vf="@firebase/analytics",wf="@firebase/app-check-compat",Ef="@firebase/app-check",bf="@firebase/auth",Tf="@firebase/auth-compat",_f="@firebase/database",Af="@firebase/database-compat",Sf="@firebase/functions",Cf="@firebase/functions-compat",If="@firebase/installations",Df="@firebase/installations-compat",xf="@firebase/messaging",Nf="@firebase/messaging-compat",Rf="@firebase/performance",Of="@firebase/performance-compat",kf="@firebase/remote-config",Mf="@firebase/remote-config-compat",Pf="@firebase/storage",Lf="@firebase/storage-compat",$f="@firebase/firestore",Ff="@firebase/firestore-compat",Bf="firebase",Uf="9.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo="[DEFAULT]",Vf={[Us]:"fire-core",[gf]:"fire-core-compat",[vf]:"fire-analytics",[yf]:"fire-analytics-compat",[Ef]:"fire-app-check",[wf]:"fire-app-check-compat",[bf]:"fire-auth",[Tf]:"fire-auth-compat",[_f]:"fire-rtdb",[Af]:"fire-rtdb-compat",[Sf]:"fire-fn",[Cf]:"fire-fn-compat",[If]:"fire-iid",[Df]:"fire-iid-compat",[xf]:"fire-fcm",[Nf]:"fire-fcm-compat",[Rf]:"fire-perf",[Of]:"fire-perf-compat",[kf]:"fire-rc",[Mf]:"fire-rc-compat",[Pf]:"fire-gcs",[Lf]:"fire-gcs-compat",[$f]:"fire-fst",[Ff]:"fire-fst-compat","fire-js":"fire-js",[Bf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new Map,Vs=new Map;function jf(e,t){try{e.container.addComponent(t)}catch(n){$t.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function _n(e){const t=e.name;if(Vs.has(t))return $t.debug(`There were multiple attempts to register component ${t}.`),!1;Vs.set(t,e);for(const n of Tn.values())jf(n,e);return!0}function Hf(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ft=new Mo("app","Firebase",qf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Oe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=Uf;function Kf(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:Fo,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw Ft.create("bad-app-name",{appName:String(s)});const r=Tn.get(s);if(r){if($s(e,r.options)&&$s(n,r.config))return r;throw Ft.create("duplicate-app",{appName:s})}const i=new Yh(s);for(const a of Vs.values())i.addComponent(a);const o=new zf(e,n,i);return Tn.set(s,o),o}function Wf(e=Fo){const t=Tn.get(e);if(!t)throw Ft.create("no-app",{appName:e});return t}function te(e,t,n){var s;let r=(s=Vf[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$t.warn(a.join(" "));return}_n(new Oe(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="firebase-heartbeat-database",Qf=1,ke="firebase-heartbeat-store";let _s=null;function Bo(){return _s||(_s=hf(Xf,Qf,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ke)}}}).catch(e=>{throw Ft.create("idb-open",{originalErrorMessage:e.message})})),_s}async function Yf(e){var t;try{return(await Bo()).transaction(ke).objectStore(ke).get(Uo(e))}catch(n){if(n instanceof pe)$t.warn(n.message);else{const s=Ft.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});$t.warn(s.message)}}}async function _i(e,t){var n;try{const r=(await Bo()).transaction(ke,"readwrite");return await r.objectStore(ke).put(t,Uo(e)),r.done}catch(s){if(s instanceof pe)$t.warn(s.message);else{const r=Ft.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});$t.warn(r.message)}}}function Uo(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=1024,Zf=30*24*60*60*1e3;class td{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nd(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ai();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Zf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ai(),{heartbeatsToSend:n,unsentEntries:s}=ed(this._heartbeatsCache.heartbeats),r=ko(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ai(){return new Date().toISOString().substring(0,10)}function ed(e,t=Jf){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Si(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Si(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class nd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hh()?qh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Yf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return _i(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return _i(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Si(e){return ko(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(e){_n(new Oe("platform-logger",t=>new pf(t),"PRIVATE")),_n(new Oe("heartbeat",t=>new td(t),"PRIVATE")),te(Us,Ti,e),te(Us,Ti,"esm2017"),te("fire-js","")}sd("");var rd=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},g,gr=gr||{},w=rd||self;function An(){}function js(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function We(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function id(e){return Object.prototype.hasOwnProperty.call(e,As)&&e[As]||(e[As]=++od)}var As="closure_uid_"+(1e9*Math.random()>>>0),od=0;function ad(e,t,n){return e.call.apply(e.bind,arguments)}function ld(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function K(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?K=ad:K=ld,K.apply(null,arguments)}function un(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function Q(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function Nt(){this.s=this.s,this.o=this.o}var ud=0,cd={};Nt.prototype.s=!1;Nt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),ud!=0)){var e=id(this);delete cd[e]}};Nt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Vo=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},jo=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,r=typeof e=="string"?e.split(""):e;for(let i=0;i<s;i++)i in r&&t.call(n,r[i],i,e)};function hd(e){t:{var t=np;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let r=0;r<n;r++)if(r in s&&t.call(void 0,s[r],r,e)){t=r;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function Ci(e){return Array.prototype.concat.apply([],arguments)}function yr(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Sn(e){return/^[\s\xa0]*$/.test(e)}var Ii=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function st(e,t){return e.indexOf(t)!=-1}function Ss(e,t){return e<t?-1:e>t?1:0}var rt;t:{var Di=w.navigator;if(Di){var xi=Di.userAgent;if(xi){rt=xi;break t}}rt=""}function vr(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Ho(e){const t={};for(const n in e)t[n]=e[n];return t}var Ni="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qo(e,t){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)e[n]=s[n];for(let i=0;i<Ni.length;i++)n=Ni[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function wr(e){return wr[" "](e),e}wr[" "]=An;function fd(e){var t=md;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var dd=st(rt,"Opera"),oe=st(rt,"Trident")||st(rt,"MSIE"),zo=st(rt,"Edge"),Hs=zo||oe,Go=st(rt,"Gecko")&&!(st(rt.toLowerCase(),"webkit")&&!st(rt,"Edge"))&&!(st(rt,"Trident")||st(rt,"MSIE"))&&!st(rt,"Edge"),pd=st(rt.toLowerCase(),"webkit")&&!st(rt,"Edge");function Ko(){var e=w.document;return e?e.documentMode:void 0}var Cn;t:{var Cs="",Is=function(){var e=rt;if(Go)return/rv:([^\);]+)(\)|;)/.exec(e);if(zo)return/Edge\/([\d\.]+)/.exec(e);if(oe)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(pd)return/WebKit\/(\S+)/.exec(e);if(dd)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Is&&(Cs=Is?Is[1]:""),oe){var Ds=Ko();if(Ds!=null&&Ds>parseFloat(Cs)){Cn=String(Ds);break t}}Cn=Cs}var md={};function gd(){return fd(function(){let e=0;const t=Ii(String(Cn)).split("."),n=Ii("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=Ss(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ss(r[2].length==0,i[2].length==0)||Ss(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}var qs;if(w.document&&oe){var Ri=Ko();qs=Ri||parseInt(Cn,10)||void 0}else qs=void 0;var yd=qs,vd=function(){if(!w.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{w.addEventListener("test",An,t),w.removeEventListener("test",An,t)}catch{}return e}();function nt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}nt.prototype.h=function(){this.defaultPrevented=!0};function Me(e,t){if(nt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Go){t:{try{wr(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:wd[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Me.Z.h.call(this)}}Q(Me,nt);var wd={2:"touch",3:"pen",4:"mouse"};Me.prototype.h=function(){Me.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Xe="closure_listenable_"+(1e6*Math.random()|0),Ed=0;function bd(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=r,this.key=++Ed,this.ca=this.fa=!1}function Wn(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Xn(e){this.src=e,this.g={},this.h=0}Xn.prototype.add=function(e,t,n,s,r){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Gs(e,t,s,r);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new bd(t,this.src,i,!!s,r),t.fa=n,e.push(t)),t};function zs(e,t){var n=t.type;if(n in e.g){var s=e.g[n],r=Vo(s,t),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Wn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Gs(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ca&&i.listener==t&&i.capture==!!n&&i.ia==s)return r}return-1}var Er="closure_lm_"+(1e6*Math.random()|0),xs={};function Wo(e,t,n,s,r){if(s&&s.once)return Qo(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Wo(e,t[i],n,s,r);return null}return n=_r(n),e&&e[Xe]?e.N(t,n,We(s)?!!s.capture:!!s,r):Xo(e,t,n,!1,s,r)}function Xo(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=We(r)?!!r.capture:!!r,a=Tr(e);if(a||(e[Er]=a=new Xn(e)),n=a.add(t,n,s,o,i),n.proxy)return n;if(s=Td(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)vd||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(Jo(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Td(){function e(n){return t.call(e.src,e.listener,n)}var t=_d;return e}function Qo(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Qo(e,t[i],n,s,r);return null}return n=_r(n),e&&e[Xe]?e.O(t,n,We(s)?!!s.capture:!!s,r):Xo(e,t,n,!0,s,r)}function Yo(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)Yo(e,t[i],n,s,r);else s=We(s)?!!s.capture:!!s,n=_r(n),e&&e[Xe]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Gs(i,n,s,r),-1<n&&(Wn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Tr(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Gs(t,n,s,r)),(n=-1<e?t[e]:null)&&br(n))}function br(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[Xe])zs(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Jo(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Tr(t))?(zs(n,e),n.h==0&&(n.src=null,t[Er]=null)):Wn(e)}}}function Jo(e){return e in xs?xs[e]:xs[e]="on"+e}function _d(e,t){if(e.ca)e=!0;else{t=new Me(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&br(e),e=n.call(s,t)}return e}function Tr(e){return e=e[Er],e instanceof Xn?e:null}var Ns="__closure_events_fn_"+(1e9*Math.random()>>>0);function _r(e){return typeof e=="function"?e:(e[Ns]||(e[Ns]=function(t){return e.handleEvent(t)}),e[Ns])}function H(){Nt.call(this),this.i=new Xn(this),this.P=this,this.I=null}Q(H,Nt);H.prototype[Xe]=!0;H.prototype.removeEventListener=function(e,t,n,s){Yo(this,e,t,n,s)};function W(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new nt(t,e);else if(t instanceof nt)t.target=t.target||e;else{var r=t;t=new nt(s,e),qo(t,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=cn(o,s,!0,t)&&r}if(o=t.g=e,r=cn(o,s,!0,t)&&r,r=cn(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)o=t.g=n[i],r=cn(o,s,!1,t)&&r}H.prototype.M=function(){if(H.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Wn(n[s]);delete e.g[t],e.h--}}this.I=null};H.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};H.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function cn(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&zs(e.i,o),r=a.call(l,s)!==!1&&r}}return r&&!s.defaultPrevented}var Ar=w.JSON.stringify;function Ad(){var e=ta;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Sd{constructor(){this.h=this.g=null}add(t,n){const s=Zo.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Zo=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Cd,e=>e.reset());class Cd{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Id(e){w.setTimeout(()=>{throw e},0)}function Sr(e,t){Ks||Dd(),Ws||(Ks(),Ws=!0),ta.add(e,t)}var Ks;function Dd(){var e=w.Promise.resolve(void 0);Ks=function(){e.then(xd)}}var Ws=!1,ta=new Sd;function xd(){for(var e;e=Ad();){try{e.h.call(e.g)}catch(n){Id(n)}var t=Zo;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ws=!1}function Qn(e,t){H.call(this),this.h=e||1,this.g=t||w,this.j=K(this.kb,this),this.l=Date.now()}Q(Qn,H);g=Qn.prototype;g.da=!1;g.S=null;g.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),W(this,"tick"),this.da&&(Cr(this),this.start()))}};g.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Cr(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}g.M=function(){Qn.Z.M.call(this),Cr(this),delete this.g};function Ir(e,t,n){if(typeof e=="function")n&&(e=K(e,n));else if(e&&typeof e.handleEvent=="function")e=K(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:w.setTimeout(e,t||0)}function ea(e){e.g=Ir(()=>{e.g=null,e.i&&(e.i=!1,ea(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Nd extends Nt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ea(this)}M(){super.M(),this.g&&(w.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pe(e){Nt.call(this),this.h=e,this.g={}}Q(Pe,Nt);var Oi=[];function na(e,t,n,s){Array.isArray(n)||(n&&(Oi[0]=n.toString()),n=Oi);for(var r=0;r<n.length;r++){var i=Wo(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function sa(e){vr(e.g,function(t,n){this.g.hasOwnProperty(n)&&br(t)},e),e.g={}}Pe.prototype.M=function(){Pe.Z.M.call(this),sa(this)};Pe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Yn(){this.g=!0}Yn.prototype.Aa=function(){this.g=!1};function Rd(e,t,n,s,r,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+`
`+n+`
`+o})}function Od(e,t,n,s,r,i,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+`
`+n+`
`+i+" "+o})}function Jt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Md(e,n)+(s?" "+s:"")})}function kd(e,t){e.info(function(){return"TIMEOUT: "+t})}Yn.prototype.info=function(){};function Md(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Ar(n)}catch{return t}}var Gt={},ki=null;function Jn(){return ki=ki||new H}Gt.Ma="serverreachability";function ra(e){nt.call(this,Gt.Ma,e)}Q(ra,nt);function Le(e){const t=Jn();W(t,new ra(t,e))}Gt.STAT_EVENT="statevent";function ia(e,t){nt.call(this,Gt.STAT_EVENT,e),this.stat=t}Q(ia,nt);function it(e){const t=Jn();W(t,new ia(t,e))}Gt.Na="timingevent";function oa(e,t){nt.call(this,Gt.Na,e),this.size=t}Q(oa,nt);function Qe(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return w.setTimeout(function(){e()},t)}var Zn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},aa={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Dr(){}Dr.prototype.h=null;function Mi(e){return e.h||(e.h=e.i())}function la(){}var Ye={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function xr(){nt.call(this,"d")}Q(xr,nt);function Nr(){nt.call(this,"c")}Q(Nr,nt);var Xs;function ts(){}Q(ts,Dr);ts.prototype.g=function(){return new XMLHttpRequest};ts.prototype.i=function(){return{}};Xs=new ts;function Je(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new Pe(this),this.P=Pd,e=Hs?125:void 0,this.W=new Qn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ua}function ua(){this.i=null,this.g="",this.h=!1}var Pd=45e3,Qs={},In={};g=Je.prototype;g.setTimeout=function(e){this.P=e};function Ys(e,t,n){e.K=1,e.v=ns(Tt(t)),e.s=n,e.U=!0,ca(e,null)}function ca(e,t){e.F=Date.now(),Ze(e),e.A=Tt(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),ya(n.h,"t",s),e.C=0,n=e.l.H,e.h=new ua,e.g=$a(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Nd(K(e.Ia,e,e.g),e.O)),na(e.V,e.g,"readystatechange",e.gb),t=e.H?Ho(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Le(1),Rd(e.j,e.u,e.A,e.m,e.X,e.s)}g.gb=function(e){e=e.target;const t=this.L;t&&wt(e)==3?t.l():this.Ia(e)};g.Ia=function(e){try{if(e==this.g)t:{const u=wt(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Hs||this.g&&(this.h.h||this.g.ga()||Fi(this.g)))){this.I||u!=4||t==7||(t==8||0>=h?Le(3):Le(2)),es(this);var n=this.g.ba();this.N=n;e:if(ha(this)){var s=Fi(this.g);e="";var r=s.length,i=wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){kt(this),Se(this);var o="";break e}this.h.i=new w.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,Od(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Sn(a)){var c=a;break e}}c=null}if(n=c)Jt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Js(this,n);else{this.i=!1,this.o=3,it(12),kt(this),Se(this);break t}}this.U?(fa(this,u,o),Hs&&this.i&&u==3&&(na(this.V,this.W,"tick",this.fb),this.W.start())):(Jt(this.j,this.m,o,null),Js(this,o)),u==4&&kt(this),this.i&&!this.I&&(u==4?ka(this.l,this):(this.i=!1,Ze(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,it(12)):(this.o=0,it(13)),kt(this),Se(this)}}}catch{}finally{}};function ha(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function fa(e,t,n){let s=!0,r;for(;!e.I&&e.C<n.length;)if(r=Ld(e,n),r==In){t==4&&(e.o=4,it(14),s=!1),Jt(e.j,e.m,null,"[Incomplete Response]");break}else if(r==Qs){e.o=4,it(15),Jt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Jt(e.j,e.m,r,null),Js(e,r);ha(e)&&r!=In&&r!=Qs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,it(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Br(t),t.L=!0,it(11))):(Jt(e.j,e.m,n,"[Invalid Chunked Response]"),kt(e),Se(e))}g.fb=function(){if(this.g){var e=wt(this.g),t=this.g.ga();this.C<t.length&&(es(this),fa(this,e,t),this.i&&e!=4&&Ze(this))}};function Ld(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?In:(n=Number(t.substring(n,s)),isNaN(n)?Qs:(s+=1,s+n>t.length?In:(t=t.substr(s,n),e.C=s+n,t)))}g.cancel=function(){this.I=!0,kt(this)};function Ze(e){e.Y=Date.now()+e.P,da(e,e.P)}function da(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Qe(K(e.eb,e),t)}function es(e){e.B&&(w.clearTimeout(e.B),e.B=null)}g.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(kd(this.j,this.A),this.K!=2&&(Le(3),it(17)),kt(this),this.o=2,Se(this)):da(this,this.Y-e)};function Se(e){e.l.G==0||e.I||ka(e.l,e)}function kt(e){es(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Cr(e.W),sa(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Js(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Zs(n.i,e))){if(n.I=e.N,!e.J&&Zs(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Rn(n),is(n);else break t;Fr(n),it(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&n.A==0&&!n.v&&(n.v=Qe(K(n.ab,n),6e3));if(1>=Ea(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Mt(n,11)}else if((e.J||n.g==e)&&Rn(n),!Sn(t))for(r=n.Ca.g.parse(t),t=0;t<r.length;t++){let c=r[t];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const u=c[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=c[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const p=c[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const y=e.g;if(y){const _=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=s.i;!i.g&&(st(_,"spdy")||st(_,"quic")||st(_,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(kr(i,i.h),i.h=null))}if(s.D){const R=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(s.sa=R,M(s.F,s.D,R))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=La(s,s.H?s.la:null,s.W),o.J){ba(s.i,o);var a=o,l=s.K;l&&a.setTimeout(l),a.B&&(es(a),Ze(a)),s.g=o}else Ra(s);0<n.l.length&&os(n)}else c[0]!="stop"&&c[0]!="close"||Mt(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Mt(n,7):$r(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}Le(4)}catch{}}function $d(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(js(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Rr(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(js(e)||typeof e=="string")jo(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(js(e)||typeof e=="string"){n=[];for(var s=e.length,r=0;r<s;r++)n.push(r)}else for(r in n=[],s=0,e)n[s++]=r;s=$d(e),r=s.length;for(var i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}}function me(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof me)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}g=me.prototype;g.R=function(){Or(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};g.T=function(){return Or(this),this.g.concat()};function Or(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];Bt(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var r={};for(n=t=0;t<e.g.length;)s=e.g[t],Bt(r,s)||(e.g[n++]=s,r[s]=1),t++;e.g.length=n}}g.get=function(e,t){return Bt(this.h,e)?this.h[e]:t};g.set=function(e,t){Bt(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};g.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var r=n[s],i=this.get(r);e.call(t,i,r,this)}};function Bt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var pa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Fd(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ut(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Ut){this.g=t!==void 0?t:e.g,Dn(this,e.j),this.s=e.s,xn(this,e.i),Nn(this,e.m),this.l=e.l,t=e.h;var n=new $e;n.i=t.i,t.g&&(n.g=new me(t.g),n.h=t.h),Pi(this,n),this.o=e.o}else e&&(n=String(e).match(pa))?(this.g=!!t,Dn(this,n[1]||"",!0),this.s=Ce(n[2]||""),xn(this,n[3]||"",!0),Nn(this,n[4]),this.l=Ce(n[5]||"",!0),Pi(this,n[6]||"",!0),this.o=Ce(n[7]||"")):(this.g=!!t,this.h=new $e(null,this.g))}Ut.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ae(t,Li,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ae(t,Li,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(Ae(n,n.charAt(0)=="/"?Hd:jd,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ae(n,zd)),e.join("")};function Tt(e){return new Ut(e)}function Dn(e,t,n){e.j=n?Ce(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function xn(e,t,n){e.i=n?Ce(t,!0):t}function Nn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Pi(e,t,n){t instanceof $e?(e.h=t,Gd(e.h,e.g)):(n||(t=Ae(t,qd)),e.h=new $e(t,e.g))}function M(e,t,n){e.h.set(t,n)}function ns(e){return M(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Bd(e){return e instanceof Ut?Tt(e):new Ut(e,void 0)}function Ud(e,t,n,s){var r=new Ut(null,void 0);return e&&Dn(r,e),t&&xn(r,t),n&&Nn(r,n),s&&(r.l=s),r}function Ce(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ae(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Vd),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Vd(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Li=/[#\/\?@]/g,jd=/[#\?:]/g,Hd=/[#\?]/g,qd=/[#\?@]/g,zd=/#/g;function $e(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Rt(e){e.g||(e.g=new me,e.h=0,e.i&&Fd(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=$e.prototype;g.add=function(e,t){Rt(this),this.i=null,e=ge(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function ma(e,t){Rt(e),t=ge(e,t),Bt(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Bt(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Or(e)))}function ga(e,t){return Rt(e),t=ge(e,t),Bt(e.g.h,t)}g.forEach=function(e,t){Rt(this),this.g.forEach(function(n,s){jo(n,function(r){e.call(t,r,s,this)},this)},this)};g.T=function(){Rt(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var r=e[s],i=0;i<r.length;i++)n.push(t[s]);return n};g.R=function(e){Rt(this);var t=[];if(typeof e=="string")ga(this,e)&&(t=Ci(t,this.g.get(ge(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Ci(t,e[n])}return t};g.set=function(e,t){return Rt(this),this.i=null,e=ge(this,e),ga(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function ya(e,t,n){ma(e,t),0<n.length&&(e.i=null,e.g.set(ge(e,t),yr(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],r=encodeURIComponent(String(s));s=this.R(s);for(var i=0;i<s.length;i++){var o=r;s[i]!==""&&(o+="="+encodeURIComponent(String(s[i]))),e.push(o)}}return this.i=e.join("&")};function ge(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Gd(e,t){t&&!e.j&&(Rt(e),e.i=null,e.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(ma(this,s),ya(this,r,n))},e)),e.j=t}var Kd=class{constructor(e,t){this.h=e,this.g=t}};function va(e){this.l=e||Wd,w.PerformanceNavigationTiming?(e=w.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(w.g&&w.g.Ea&&w.g.Ea()&&w.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Wd=10;function wa(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Ea(e){return e.h?1:e.g?e.g.size:0}function Zs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function kr(e,t){e.g?e.g.add(t):e.h=t}function ba(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}va.prototype.cancel=function(){if(this.i=Ta(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Ta(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return yr(e.i)}function Mr(){}Mr.prototype.stringify=function(e){return w.JSON.stringify(e,void 0)};Mr.prototype.parse=function(e){return w.JSON.parse(e,void 0)};function Xd(){this.g=new Mr}function Qd(e,t,n){const s=n||"";try{Rr(e,function(r,i){let o=r;We(r)&&(o=Ar(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function Yd(e,t){const n=new Yn;if(w.Image){const s=new Image;s.onload=un(hn,n,s,"TestLoadImage: loaded",!0,t),s.onerror=un(hn,n,s,"TestLoadImage: error",!1,t),s.onabort=un(hn,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=un(hn,n,s,"TestLoadImage: timeout",!1,t),w.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function hn(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function tn(e){this.l=e.$b||null,this.j=e.ib||!1}Q(tn,Dr);tn.prototype.g=function(){return new ss(this.l,this.j)};tn.prototype.i=function(e){return function(){return e}}({});function ss(e,t){H.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Pr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Q(ss,H);var Pr=0;g=ss.prototype;g.open=function(e,t){if(this.readyState!=Pr)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Fe(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||w).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,en(this)),this.readyState=Pr};g.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Fe(this)),this.g&&(this.readyState=3,Fe(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof w.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_a(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function _a(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}g.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?en(this):Fe(this),this.readyState==3&&_a(this)}};g.Ua=function(e){this.g&&(this.response=this.responseText=e,en(this))};g.Ta=function(e){this.g&&(this.response=e,en(this))};g.ha=function(){this.g&&en(this)};function en(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Fe(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Fe(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(ss.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Jd=w.JSON.parse;function $(e){H.call(this),this.headers=new me,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Aa,this.K=this.L=!1}Q($,H);var Aa="",Zd=/^https?$/i,tp=["POST","PUT"];g=$.prototype;g.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Xs.g(),this.C=this.u?Mi(this.u):Mi(Xs),this.g.onreadystatechange=K(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){$i(this,i);return}e=n||"";const r=new me(this.headers);s&&Rr(s,function(i,o){r.set(o,i)}),s=hd(r.T()),n=w.FormData&&e instanceof w.FormData,!(0<=Vo(tp,t))||s||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ia(this),0<this.B&&((this.K=ep(this.g))?(this.g.timeout=this.B,this.g.ontimeout=K(this.pa,this)):this.A=Ir(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){$i(this,i)}};function ep(e){return oe&&gd()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function np(e){return e.toLowerCase()=="content-type"}g.pa=function(){typeof gr!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,W(this,"timeout"),this.abort(8))};function $i(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Sa(e),rs(e)}function Sa(e){e.D||(e.D=!0,W(e,"complete"),W(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,W(this,"complete"),W(this,"abort"),rs(this))};g.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),rs(this,!0)),$.Z.M.call(this)};g.Fa=function(){this.s||(this.F||this.v||this.l?Ca(this):this.cb())};g.cb=function(){Ca(this)};function Ca(e){if(e.h&&typeof gr!="undefined"&&(!e.C[1]||wt(e)!=4||e.ba()!=2)){if(e.v&&wt(e)==4)Ir(e.Fa,0,e);else if(W(e,"readystatechange"),wt(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(pa)[1]||null;if(!r&&w.self&&w.self.location){var i=w.self.location.protocol;r=i.substr(0,i.length-1)}s=!Zd.test(r?r.toLowerCase():"")}n=s}if(n)W(e,"complete"),W(e,"success");else{e.m=6;try{var o=2<wt(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",Sa(e)}}finally{rs(e)}}}}function rs(e,t){if(e.g){Ia(e);const n=e.g,s=e.C[0]?An:null;e.g=null,e.C=null,t||W(e,"ready");try{n.onreadystatechange=s}catch{}}}function Ia(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(w.clearTimeout(e.A),e.A=null)}function wt(e){return e.g?e.g.readyState:0}g.ba=function(){try{return 2<wt(this)?this.g.status:-1}catch{return-1}};g.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Jd(t)}};function Fi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Aa:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}g.Da=function(){return this.m};g.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function sp(e){let t="";return vr(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Lr(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=sp(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):M(e,t,n))}function _e(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Da(e){this.za=0,this.l=[],this.h=new Yn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=_e("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=_e("baseRetryDelayMs",5e3,e),this.$a=_e("retryDelaySeedMs",1e4,e),this.Ya=_e("forwardChannelMaxRetries",2,e),this.ra=_e("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new va(e&&e.concurrentRequestLimit),this.Ca=new Xd,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}g=Da.prototype;g.ma=8;g.G=1;function $r(e){if(xa(e),e.G==3){var t=e.V++,n=Tt(e.F);M(n,"SID",e.J),M(n,"RID",t),M(n,"TYPE","terminate"),nn(e,n),t=new Je(e,e.h,t,void 0),t.K=2,t.v=ns(Tt(n)),n=!1,w.navigator&&w.navigator.sendBeacon&&(n=w.navigator.sendBeacon(t.v.toString(),"")),!n&&w.Image&&(new Image().src=t.v,n=!0),n||(t.g=$a(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Ze(t)}Pa(e)}g.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function is(e){e.g&&(Br(e),e.g.cancel(),e.g=null)}function xa(e){is(e),e.u&&(w.clearTimeout(e.u),e.u=null),Rn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&w.clearTimeout(e.m),e.m=null)}function Rs(e,t){e.l.push(new Kd(e.Za++,t)),e.G==3&&os(e)}function os(e){wa(e.i)||e.m||(e.m=!0,Sr(e.Ha,e),e.C=0)}function rp(e,t){return Ea(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=Qe(K(e.Ha,e,t),Ma(e,e.C)),e.C++,!0)}g.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const r=new Je(this,this.h,e,void 0);let i=this.s;if(this.P&&(i?(i=Ho(i),qo(i,this.P)):i=this.P),this.o===null&&(r.H=i),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Na(this,r,t),n=Tt(this.F),M(n,"RID",e),M(n,"CVER",22),this.D&&M(n,"X-HTTP-Session-Id",this.D),nn(this,n),this.o&&i&&Lr(n,this.o,i),kr(this.i,r),this.Ra&&M(n,"TYPE","init"),this.ja?(M(n,"$req",t),M(n,"SID","null"),r.$=!0,Ys(r,n,null)):Ys(r,n,t),this.G=2}}else this.G==3&&(e?Bi(this,e):this.l.length==0||wa(this.i)||Bi(this))};function Bi(e,t){var n;t?n=t.m:n=e.V++;const s=Tt(e.F);M(s,"SID",e.J),M(s,"RID",n),M(s,"AID",e.U),nn(e,s),e.o&&e.s&&Lr(s,e.o,e.s),n=new Je(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Na(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),kr(e.i,n),Ys(n,s,t)}function nn(e,t){e.j&&Rr({},function(n,s){M(t,s,n)})}function Na(e,t,n){n=Math.min(e.l.length,n);var s=e.j?K(e.j.Oa,e.j,e):null;t:{var r=e.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=r[l].h;const u=r[l].g;if(c-=i,0>c)i=Math.max(0,r[l].h-100),a=!1;else try{Qd(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function Ra(e){e.g||e.u||(e.Y=1,Sr(e.Ga,e),e.A=0)}function Fr(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=Qe(K(e.Ga,e),Ma(e,e.A)),e.A++,!0)}g.Ga=function(){if(this.u=null,Oa(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Qe(K(this.bb,this),e)}};g.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,it(10),is(this),Oa(this))};function Br(e){e.B!=null&&(w.clearTimeout(e.B),e.B=null)}function Oa(e){e.g=new Je(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=Tt(e.oa);M(t,"RID","rpc"),M(t,"SID",e.J),M(t,"CI",e.N?"0":"1"),M(t,"AID",e.U),nn(e,t),M(t,"TYPE","xmlhttp"),e.o&&e.s&&Lr(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=ns(Tt(t)),n.s=null,n.U=!0,ca(n,e)}g.ab=function(){this.v!=null&&(this.v=null,is(this),Fr(this),it(19))};function Rn(e){e.v!=null&&(w.clearTimeout(e.v),e.v=null)}function ka(e,t){var n=null;if(e.g==t){Rn(e),Br(e),e.g=null;var s=2}else if(Zs(e.i,t))n=t.D,ba(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;s=Jn(),W(s,new oa(s,n,t,r)),os(e)}else Ra(e);else if(r=t.o,r==3||r==0&&0<e.I||!(s==1&&rp(e,t)||s==2&&Fr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:Mt(e,5);break;case 4:Mt(e,10);break;case 3:Mt(e,6);break;default:Mt(e,2)}}}function Ma(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Mt(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=K(e.jb,e);n||(n=new Ut("//www.google.com/images/cleardot.gif"),w.location&&w.location.protocol=="http"||Dn(n,"https"),ns(n)),Yd(n.toString(),s)}else it(2);e.G=0,e.j&&e.j.va(t),Pa(e),xa(e)}g.jb=function(e){e?(this.h.info("Successfully pinged google.com"),it(2)):(this.h.info("Failed to ping google.com"),it(1))};function Pa(e){e.G=0,e.I=-1,e.j&&((Ta(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,yr(e.l),e.l.length=0),e.j.ua())}function La(e,t,n){let s=Bd(n);if(s.i!="")t&&xn(s,t+"."+s.i),Nn(s,s.m);else{const r=w.location;s=Ud(r.protocol,t?t+"."+r.hostname:r.hostname,+r.port,n)}return e.aa&&vr(e.aa,function(r,i){M(s,i,r)}),t=e.D,n=e.sa,t&&n&&M(s,t,n),M(s,"VER",e.ma),nn(e,s),s}function $a(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new $(new tn({ib:!0})):new $(e.qa),t.L=e.H,t}function Fa(){}g=Fa.prototype;g.xa=function(){};g.wa=function(){};g.va=function(){};g.ua=function(){};g.Oa=function(){};function On(){if(oe&&!(10<=Number(yd)))throw Error("Environmental error: no available transport.")}On.prototype.g=function(e,t){return new ft(e,t)};function ft(e,t){H.call(this),this.g=new Da(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Sn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Sn(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ye(this)}Q(ft,H);ft.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Sr(K(e.hb,e,t))),it(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=La(e,null,e.W),os(e)};ft.prototype.close=function(){$r(this.g)};ft.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,Rs(this.g,t)}else this.v?(t={},t.__data__=Ar(e),Rs(this.g,t)):Rs(this.g,e)};ft.prototype.M=function(){this.g.j=null,delete this.j,$r(this.g),delete this.g,ft.Z.M.call(this)};function Ba(e){xr.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Q(Ba,xr);function Ua(){Nr.call(this),this.status=1}Q(Ua,Nr);function ye(e){this.g=e}Q(ye,Fa);ye.prototype.xa=function(){W(this.g,"a")};ye.prototype.wa=function(e){W(this.g,new Ba(e))};ye.prototype.va=function(e){W(this.g,new Ua(e))};ye.prototype.ua=function(){W(this.g,"b")};On.prototype.createWebChannel=On.prototype.g;ft.prototype.send=ft.prototype.u;ft.prototype.open=ft.prototype.m;ft.prototype.close=ft.prototype.close;Zn.NO_ERROR=0;Zn.TIMEOUT=8;Zn.HTTP_ERROR=6;aa.COMPLETE="complete";la.EventType=Ye;Ye.OPEN="a";Ye.CLOSE="b";Ye.ERROR="c";Ye.MESSAGE="d";H.prototype.listen=H.prototype.N;$.prototype.listenOnce=$.prototype.O;$.prototype.getLastError=$.prototype.La;$.prototype.getLastErrorCode=$.prototype.Da;$.prototype.getStatus=$.prototype.ba;$.prototype.getResponseJson=$.prototype.Qa;$.prototype.getResponseText=$.prototype.ga;$.prototype.send=$.prototype.ea;var ip=function(){return new On},op=function(){return Jn()},Os=Zn,ap=aa,lp=Gt,Ui={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},up=tn,fn=la,cp=$;const Vi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ve="9.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=new Po("@firebase/firestore");function ji(){return Vt.logLevel}function v(e,...t){if(Vt.logLevel<=x.DEBUG){const n=t.map(Ur);Vt.debug(`Firestore (${ve}): ${e}`,...n)}}function jt(e,...t){if(Vt.logLevel<=x.ERROR){const n=t.map(Ur);Vt.error(`Firestore (${ve}): ${e}`,...n)}}function Hi(e,...t){if(Vt.logLevel<=x.WARN){const n=t.map(Ur);Vt.warn(`Firestore (${ve}): ${e}`,...n)}}function Ur(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e="Unexpected state"){const t=`FIRESTORE (${ve}) INTERNAL ASSERTION FAILED: `+e;throw jt(t),new Error(t)}function B(e,t){e||C()}function O(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends pe{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class fp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class dp{constructor(t){this.t=t,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new Lt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Lt,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Lt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(B(typeof s.accessToken=="string"),new hp(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return B(t===null||typeof t=="string"),new at(t)}}class pp{constructor(t,n,s){this.type="FirstParty",this.user=at.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class mp{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new pp(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gp{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yp{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const s=i=>{i.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(B(typeof n.token=="string"),this.p=n.token,new gp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const r=vp(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%t.length))}return s}}function N(e,t){return e<t?-1:e>t?1:0}function ae(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new b(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new b(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new b(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new b(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return j.fromMillis(Date.now())}static fromDate(t){return j.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new j(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?N(this.nanoseconds,t.nanoseconds):N(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.timestamp=t}static fromTimestamp(t){return new F(t)}static min(){return new F(new j(0,0))}static max(){return new F(new j(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t,n,s){n===void 0?n=0:n>t.length&&C(),s===void 0?s=t.length-n:s>t.length-n&&C(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Be.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Be?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class P extends Be{construct(t,n,s){return new P(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new b(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new P(n)}static emptyPath(){return new P([])}}const wp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends Be{construct(t,n,s){return new et(t,n,s)}static isValidIdentifier(t){return wp.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new b(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new b(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new b(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new b(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new et(n)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.path=t}static fromPath(t){return new T(P.fromString(t))}static fromName(t){return new T(P.fromString(t).popFirst(5))}static empty(){return new T(P.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&P.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return P.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new T(new P(t.slice()))}}function Ep(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=F.fromTimestamp(s===1e9?new j(n+1,0):new j(n,s));return new It(r,T.empty(),t)}function bp(e){return new It(e.readTime,e.key,-1)}class It{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new It(F.min(),T.empty(),-1)}static max(){return new It(F.max(),T.empty(),-1)}}function Tp(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=T.comparator(e.documentKey,t.documentKey),n!==0?n:N(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ap{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ja(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==_p)throw e;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&C(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new f((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):f.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):f.reject(n)}static resolve(t){return new f((n,s)=>{n(t)})}static reject(t){return new f((n,s)=>{s(t)})}static waitFor(t){return new f((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},l=>s(l))}),o=!0,i===r&&n()})}static or(t){let n=f.resolve(!1);for(const s of t)n=n.next(r=>r?f.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new f((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(t[c]).next(u=>{o[c]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(t,n){return new f((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function as(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.it(s),this.rt=s=>n.writeSequenceNumber(s))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function sn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function qa(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ha.ot=-1;class ct{constructor(t,n){this.comparator=t,this.root=n||q.EMPTY}insert(t,n){return new ct(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,q.BLACK,null,null))}remove(t){return new ct(this.comparator,this.root.remove(t,this.comparator).copy(null,null,q.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new dn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new dn(this.root,t,this.comparator,!1)}getReverseIterator(){return new dn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new dn(this.root,t,this.comparator,!0)}}class dn{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class q{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s!=null?s:q.RED,this.left=r!=null?r:q.EMPTY,this.right=i!=null?i:q.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new q(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return q.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return q.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,q.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,q.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw C();const t=this.left.check();if(t!==this.right.check())throw C();return t+(this.isRed()?0:1)}}q.EMPTY=null,q.RED=!0,q.BLACK=!1;q.EMPTY=new class{constructor(){this.size=0}get key(){throw C()}get value(){throw C()}get color(){throw C()}get left(){throw C()}get right(){throw C()}copy(e,t,n,s,r){return this}insert(e,t,n){return new q(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.comparator=t,this.data=new ct(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new zi(this.data.getIterator())}getIteratorFrom(t){return new zi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof ot)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new ot(this.comparator);return n.data=t,n}}class zi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.fields=t,t.sort(et.comparator)}static empty(){return new gt([])}unionWith(t){let n=new ot(et.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new gt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ae(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new _t(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new _t(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return N(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const Sp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ht(e){if(B(!!e),typeof e=="string"){let t=0;const n=Sp.exec(e);if(B(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:z(e.seconds),nanos:z(e.nanos)}}function z(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ue(e){return typeof e=="string"?_t.fromBase64String(e):_t.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function kn(e){const t=Ht(e.mapValue.fields.__local_write_time__.timestampValue);return new j(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(t,n,s,r,i,o,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ve{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ve("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ve&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(e){return e==null}function Mn(e){return e===0&&1/e==-1/0}function Dp(e){return typeof e=="number"&&Number.isInteger(e)&&!Mn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function le(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Cp(e)?4:xp(e)?9007199254740991:10:C()}function yt(e,t){if(e===t)return!0;const n=le(e);if(n!==le(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return kn(e).isEqual(kn(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Ht(s.timestampValue),o=Ht(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return Ue(s.bytesValue).isEqual(Ue(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return z(s.geoPointValue.latitude)===z(r.geoPointValue.latitude)&&z(s.geoPointValue.longitude)===z(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return z(s.integerValue)===z(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=z(s.doubleValue),o=z(r.doubleValue);return i===o?Mn(i)===Mn(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return ae(e.arrayValue.values||[],t.arrayValue.values||[],yt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(qi(i)!==qi(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!yt(i[a],o[a])))return!1;return!0}(e,t);default:return C()}}function je(e,t){return(e.values||[]).find(n=>yt(n,t))!==void 0}function ue(e,t){if(e===t)return 0;const n=le(e),s=le(t);if(n!==s)return N(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return N(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=z(r.integerValue||r.doubleValue),a=z(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Gi(e.timestampValue,t.timestampValue);case 4:return Gi(kn(e),kn(t));case 5:return N(e.stringValue,t.stringValue);case 6:return function(r,i){const o=Ue(r),a=Ue(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=N(o[l],a[l]);if(c!==0)return c}return N(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=N(z(r.latitude),z(i.latitude));return o!==0?o:N(z(r.longitude),z(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=ue(o[l],a[l]);if(c)return c}return N(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===pn.mapValue&&i===pn.mapValue)return 0;if(r===pn.mapValue)return 1;if(i===pn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),l=i.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=N(a[u],c[u]);if(h!==0)return h;const p=ue(o[a[u]],l[c[u]]);if(p!==0)return p}return N(a.length,c.length)}(e.mapValue,t.mapValue);default:throw C()}}function Gi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return N(e,t);const n=Ht(e),s=Ht(t),r=N(n.seconds,s.seconds);return r!==0?r:N(n.nanos,s.nanos)}function ee(e){return tr(e)}function tr(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=Ht(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ue(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,T.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=tr(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${tr(s.fields[a])}`;return i+"}"}(e.mapValue):C();var t,n}function er(e){return!!e&&"integerValue"in e}function jr(e){return!!e&&"arrayValue"in e}function vn(e){return!!e&&"mapValue"in e}function Ie(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return sn(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Ie(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ie(e.arrayValue.values[n]);return t}return Object.assign({},e)}function xp(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.value=t}static empty(){return new mt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!vn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ie(n)}setAll(t){let n=et.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Ie(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());vn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return yt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];vn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){sn(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new mt(Ie(this.value))}}function za(e){const t=[];return sn(e.fields,(n,s)=>{const r=new et([n]);if(vn(s)){const i=za(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new gt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t,n,s,r,i,o){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.data=i,this.documentState=o}static newInvalidDocument(t){return new dt(t,0,F.min(),F.min(),mt.empty(),0)}static newFoundDocument(t,n,s){return new dt(t,1,n,F.min(),s,0)}static newNoDocument(t,n){return new dt(t,2,n,F.min(),mt.empty(),0)}static newUnknownDocument(t,n){return new dt(t,3,n,F.min(),mt.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof dt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ut=null}}function Ki(e,t=null,n=[],s=[],r=null,i=null,o=null){return new Np(e,t,n,s,r,i,o)}function Hr(e){const t=O(e);if(t.ut===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(r=s).field.canonicalString()+r.op.toString()+ee(r.value);var r}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Vr(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>ee(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>ee(s)).join(",")),t.ut=n}return t.ut}function Rp(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${ee(s.value)}`;var s}).join(", ")}]`),Vr(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>ee(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>ee(n)).join(",")),`Target(${t})`}function qr(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let r=0;r<e.orderBy.length;r++)if(!Bp(e.orderBy[r],t.orderBy[r]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(n=e.filters[r],s=t.filters[r],n.op!==s.op||!n.field.isEqual(s.field)||!yt(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Xi(e.startAt,t.startAt)&&Xi(e.endAt,t.endAt)}class lt extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.ct(t,n,s):new Op(t,n,s):n==="array-contains"?new Pp(t,s):n==="in"?new Lp(t,s):n==="not-in"?new $p(t,s):n==="array-contains-any"?new Fp(t,s):new lt(t,n,s)}static ct(t,n,s){return n==="in"?new kp(t,s):new Mp(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.at(ue(n,this.value)):n!==null&&le(this.value)===le(n)&&this.at(ue(n,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return C()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Op extends lt{constructor(t,n,s){super(t,n,s),this.key=T.fromName(s.referenceValue)}matches(t){const n=T.comparator(t.key,this.key);return this.at(n)}}class kp extends lt{constructor(t,n){super(t,"in",n),this.keys=Ga("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Mp extends lt{constructor(t,n){super(t,"not-in",n),this.keys=Ga("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Ga(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>T.fromName(s.referenceValue))}class Pp extends lt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return jr(n)&&je(n.arrayValue,this.value)}}class Lp extends lt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&je(this.value.arrayValue,n)}}class $p extends lt{constructor(t,n){super(t,"not-in",n)}matches(t){if(je(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!je(this.value.arrayValue,n)}}class Fp extends lt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!jr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>je(this.value.arrayValue,s))}}class Pn{constructor(t,n){this.position=t,this.inclusive=n}}class De{constructor(t,n="asc"){this.field=t,this.dir=n}}function Bp(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Wi(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(i.field.isKeyField()?s=T.comparator(T.fromName(o.referenceValue),n.key):s=ue(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Xi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!yt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Up(e,t,n,s,r,i,o,a){return new ls(e,t,n,s,r,i,o,a)}function Vp(e){return new ls(e)}function Qi(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function jp(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Hp(e){for(const t of e.filters)if(t.ht())return t.field;return null}function qp(e){return e.collectionGroup!==null}function He(e){const t=O(e);if(t.lt===null){t.lt=[];const n=Hp(t),s=jp(t);if(n!==null&&s===null)n.isKeyField()||t.lt.push(new De(n)),t.lt.push(new De(et.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.lt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.lt.push(new De(et.keyField(),i))}}}return t.lt}function ce(e){const t=O(e);if(!t.ft)if(t.limitType==="F")t.ft=Ki(t.path,t.collectionGroup,He(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of He(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new De(i.field,o))}const s=t.endAt?new Pn(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Pn(t.startAt.position,t.startAt.inclusive):null;t.ft=Ki(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t.ft}function nr(e,t,n){return new ls(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ka(e,t){return qr(ce(e),ce(t))&&e.limitType===t.limitType}function Wa(e){return`${Hr(ce(e))}|lt:${e.limitType}`}function Yi(e){return`Query(target=${Rp(ce(e))}; limitType=${e.limitType})`}function Xa(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):T.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of n.explicitOrderBy)if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Wi(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,He(n),s)||n.endAt&&!function(r,i,o){const a=Wi(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,He(n),s))}(e,t)}function zp(e){return(t,n)=>{let s=!1;for(const r of He(e)){const i=Gp(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Gp(e,t,n){const s=e.field.isKeyField()?T.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),l=o.data.field(r);return a!==null&&l!==null?ue(a,l):C()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return C()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(e,t){if(e.dt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mn(t)?"-0":t}}function Ya(e){return{integerValue:""+e}}function Kp(e,t){return Dp(t)?Ya(t):Qa(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this._=void 0}}function Wp(e,t,n){return e instanceof Ln?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof qe?Za(e,t):e instanceof ze?tl(e,t):function(s,r){const i=Ja(s,r),o=Ji(i)+Ji(s._t);return er(i)&&er(s._t)?Ya(o):Qa(s.wt,o)}(e,t)}function Xp(e,t,n){return e instanceof qe?Za(e,t):e instanceof ze?tl(e,t):n}function Ja(e,t){return e instanceof $n?er(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Ln extends us{}class qe extends us{constructor(t){super(),this.elements=t}}function Za(e,t){const n=el(t);for(const s of e.elements)n.some(r=>yt(r,s))||n.push(s);return{arrayValue:{values:n}}}class ze extends us{constructor(t){super(),this.elements=t}}function tl(e,t){let n=el(t);for(const s of e.elements)n=n.filter(r=>!yt(r,s));return{arrayValue:{values:n}}}class $n extends us{constructor(t,n){super(),this.wt=t,this._t=n}}function Ji(e){return z(e.integerValue||e.doubleValue)}function el(e){return jr(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Qp(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof qe&&s instanceof qe||n instanceof ze&&s instanceof ze?ae(n.elements,s.elements,yt):n instanceof $n&&s instanceof $n?yt(n._t,s._t):n instanceof Ln&&s instanceof Ln}(e.transform,t.transform)}class Yp{constructor(t,n){this.version=t,this.transformResults=n}}class Et{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Et}static exists(t){return new Et(void 0,t)}static updateTime(t){return new Et(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function wn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class cs{}function nl(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new rl(e.key,Et.none()):new rn(e.key,e.data,Et.none());{const n=e.data,s=mt.empty();let r=new ot(et.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Kt(e.key,s,new gt(r.toArray()),Et.none())}}function Jp(e,t,n){e instanceof rn?function(s,r,i){const o=s.value.clone(),a=to(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Kt?function(s,r,i){if(!wn(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=to(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(sl(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function xe(e,t,n,s){return e instanceof rn?function(r,i,o,a){if(!wn(r.precondition,i))return o;const l=r.value.clone(),c=eo(r.fieldTransforms,a,i);return l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),null}(e,t,n,s):e instanceof Kt?function(r,i,o,a){if(!wn(r.precondition,i))return o;const l=eo(r.fieldTransforms,a,i),c=i.data;return c.setAll(sl(r)),c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(e,t,n,s):function(r,i,o){return wn(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function Zp(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=Ja(s.transform,r||null);i!=null&&(n===null&&(n=mt.empty()),n.set(s.field,i))}return n||null}function Zi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ae(n,s,(r,i)=>Qp(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class rn extends cs{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Kt extends cs{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function sl(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function to(e,t,n){const s=new Map;B(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,Xp(o,a,n[r]))}return s}function eo(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Wp(i,o,t))}return s}class rl extends cs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tm extends cs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L,S;function em(e){switch(e){default:return C();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function nm(e){if(e===void 0)return jt("GRPC error has no .code"),d.UNKNOWN;switch(e){case L.OK:return d.OK;case L.CANCELLED:return d.CANCELLED;case L.UNKNOWN:return d.UNKNOWN;case L.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case L.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case L.INTERNAL:return d.INTERNAL;case L.UNAVAILABLE:return d.UNAVAILABLE;case L.UNAUTHENTICATED:return d.UNAUTHENTICATED;case L.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case L.NOT_FOUND:return d.NOT_FOUND;case L.ALREADY_EXISTS:return d.ALREADY_EXISTS;case L.PERMISSION_DENIED:return d.PERMISSION_DENIED;case L.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case L.ABORTED:return d.ABORTED;case L.OUT_OF_RANGE:return d.OUT_OF_RANGE;case L.UNIMPLEMENTED:return d.UNIMPLEMENTED;case L.DATA_LOSS:return d.DATA_LOSS;default:return C()}}(S=L||(L={}))[S.OK=0]="OK",S[S.CANCELLED=1]="CANCELLED",S[S.UNKNOWN=2]="UNKNOWN",S[S.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",S[S.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",S[S.NOT_FOUND=5]="NOT_FOUND",S[S.ALREADY_EXISTS=6]="ALREADY_EXISTS",S[S.PERMISSION_DENIED=7]="PERMISSION_DENIED",S[S.UNAUTHENTICATED=16]="UNAUTHENTICATED",S[S.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",S[S.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",S[S.ABORTED=10]="ABORTED",S[S.OUT_OF_RANGE=11]="OUT_OF_RANGE",S[S.UNIMPLEMENTED=12]="UNIMPLEMENTED",S[S.INTERNAL=13]="INTERNAL",S[S.UNAVAILABLE=14]="UNAVAILABLE",S[S.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){sn(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return qa(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=new ct(T.comparator);function Fn(){return sm}const il=new ct(T.comparator);function mn(...e){let t=il;for(const n of e)t=t.insert(n.key,n);return t}function ol(e){let t=il;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Pt(){return Ne()}function al(){return Ne()}function Ne(){return new we(e=>e.toString(),(e,t)=>e.isEqual(t))}const rm=new ct(T.comparator),im=new ot(T.comparator);function Z(...e){let t=im;for(const n of e)t=t.add(n);return t}const om=new ot(N);function am(){return om}class lm{constructor(t,n){this.databaseId=t,this.dt=n}}function sr(e,t){return e.dt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function um(e,t){return e.dt?t.toBase64():t.toUint8Array()}function cm(e,t){return sr(e,t.toTimestamp())}function ne(e){return B(!!e),F.fromTimestamp(function(t){const n=Ht(t);return new j(n.seconds,n.nanos)}(e))}function ll(e,t){return function(n){return new P(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function hm(e){const t=P.fromString(e);return B(bm(t)),t}function rr(e,t){return ll(e.databaseId,t.path)}function fm(e){const t=hm(e);return t.length===4?P.emptyPath():pm(t)}function dm(e){return new P(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function pm(e){return B(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function no(e,t,n){return{name:rr(e,t),fields:n.value.mapValue.fields}}function mm(e,t){let n;if(t instanceof rn)n={update:no(e,t.key,t.value)};else if(t instanceof rl)n={delete:rr(e,t.key)};else if(t instanceof Kt)n={update:no(e,t.key,t.data),updateMask:Em(t.fieldMask)};else{if(!(t instanceof tm))return C();n={verify:rr(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Ln)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof qe)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ze)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof $n)return{fieldPath:i.field.canonicalString(),increment:o._t};throw C()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:cm(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:C()}(e,t.precondition)),n}function gm(e,t){return e&&e.length>0?(B(t!==void 0),e.map(n=>function(s,r){let i=s.updateTime?ne(s.updateTime):ne(r);return i.isEqual(F.min())&&(i=ne(r)),new Yp(i,s.transformResults||[])}(n,t))):[]}function ym(e){let t=fm(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){B(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=ul(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new De(Zt(h.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Vr(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,p=u.values||[];return new Pn(p,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,p=u.values||[];return new Pn(p,h)}(n.endAt)),Up(t,r,o,i,a,"F",l,c)}function ul(e){return e?e.unaryFilter!==void 0?[wm(e)]:e.fieldFilter!==void 0?[vm(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>ul(t)).reduce((t,n)=>t.concat(n)):C():[]}function Zt(e){return et.fromServerFormat(e.fieldPath)}function vm(e){return lt.create(Zt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return C()}}(e.fieldFilter.op),e.fieldFilter.value)}function wm(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Zt(e.unaryFilter.field);return lt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Zt(e.unaryFilter.field);return lt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Zt(e.unaryFilter.field);return lt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Zt(e.unaryFilter.field);return lt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return C()}}function Em(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function bm(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&Jp(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=xe(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=xe(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=al();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const l=nl(o,a);l!==null&&s.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(F.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Z())}isEqual(t){return this.batchId===t.batchId&&ae(this.mutations,t.mutations,(n,s)=>Zi(n,s))&&ae(this.baseMutations,t.baseMutations,(n,s)=>Zi(n,s))}}class zr{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){B(t.mutations.length===s.length);let r=rm;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new zr(t,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(t){this.ne=t}}function Sm(e){const t=ym({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?nr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(){this.ze=new Im}addToCollectionParentIndex(t,n){return this.ze.add(n),f.resolve()}getCollectionParents(t,n){return f.resolve(this.ze.getEntries(n))}addFieldIndex(t,n){return f.resolve()}deleteFieldIndex(t,n){return f.resolve()}getDocumentsMatchingTarget(t,n){return f.resolve(null)}getIndexType(t,n){return f.resolve(0)}getFieldIndexes(t,n){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}getMinOffset(t,n){return f.resolve(It.min())}getMinOffsetFromCollectionGroup(t,n){return f.resolve(It.min())}updateCollectionGroup(t,n,s){return f.resolve()}updateIndexEntries(t,n){return f.resolve()}}class Im{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new ot(P.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new ot(P.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new he(0)}static Rn(){return new he(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(){this.changes=new we(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,dt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?f.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.getBaseDocument(t,n,s))).next(r=>(s!==null&&xe(s.mutation,r,gt.empty(),j.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,Z()).next(()=>s))}getLocalViewOfDocuments(t,n,s=Z()){const r=Pt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=mn();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Pt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,Z()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=Fn();const o=Ne(),a=Ne();return n.forEach((l,c)=>{const u=s.get(c.key);r.has(c.key)&&(u===void 0||u.mutation instanceof Kt)?i=i.insert(c.key,c):u!==void 0&&(o.set(c.key,u.mutation.getFieldMask()),xe(u.mutation,c,u.mutation.getFieldMask(),j.now()))}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new xm(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Ne();let r=new ct((o,a)=>o-a),i=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||gt.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(r.get(a.batchId)||Z()).add(l);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=al();u.forEach(p=>{if(!i.has(p)){const y=nl(n.get(p),s.get(p));y!==null&&h.set(p,y),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return f.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return T.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):qp(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):f.resolve(Pt());let a=-1,l=i;return o.next(c=>f.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?f.resolve():this.getBaseDocument(t,u,h).next(p=>{l=l.insert(u,p)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,l,c,Z())).next(u=>({batchId:a,changes:ol(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new T(n)).next(s=>{let r=mn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=mn();return this.indexManager.getCollectionParents(t,r).next(o=>f.forEach(o,a=>{const l=function(c,u){return new ls(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,l,s).next(c=>{c.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(t,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId))).next(i=>{i.forEach((a,l)=>{const c=l.getKey();r.get(c)===null&&(r=r.insert(c,dt.newInvalidDocument(c)))});let o=mn();return r.forEach((a,l)=>{const c=i.get(a);c!==void 0&&xe(c.mutation,l,gt.empty(),j.now()),Xa(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(t,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(t,n):f.resolve(dt.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,n){return f.resolve(this.Jn.get(n))}saveBundleMetadata(t,n){var s;return this.Jn.set(n.id,{id:(s=n).id,version:s.version,createTime:ne(s.createTime)}),f.resolve()}getNamedQuery(t,n){return f.resolve(this.Yn.get(n))}saveNamedQuery(t,n){return this.Yn.set(n.name,function(s){return{name:s.name,query:Sm(s.bundledQuery),readTime:ne(s.readTime)}}(n)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this.overlays=new ct(T.comparator),this.Xn=new Map}getOverlay(t,n){return f.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Pt();return f.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.ie(t,n,i)}),f.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.Xn.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Xn.delete(s)),f.resolve()}getOverlaysForCollection(t,n,s){const r=Pt(),i=n.length+1,o=new T(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return f.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new ct((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=i.get(c.largestBatchId);u===null&&(u=Pt(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Pt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=r)););return f.resolve(a)}ie(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Xn.get(r.largestBatchId).delete(s.key);this.Xn.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new _m(n,s));let i=this.Xn.get(n);i===void 0&&(i=Z(),this.Xn.set(n,i)),this.Xn.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.Zn=new ot(V.ts),this.es=new ot(V.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,n){const s=new V(t,n);this.Zn=this.Zn.add(s),this.es=this.es.add(s)}ss(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.rs(new V(t,n))}os(t,n){t.forEach(s=>this.removeReference(s,n))}us(t){const n=new T(new P([])),s=new V(n,t),r=new V(n,t+1),i=[];return this.es.forEachInRange([s,r],o=>{this.rs(o),i.push(o.key)}),i}cs(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const n=new T(new P([])),s=new V(n,t),r=new V(n,t+1);let i=Z();return this.es.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new V(t,0),s=this.Zn.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class V{constructor(t,n){this.key=t,this.ls=n}static ts(t,n){return T.comparator(t.key,n.key)||N(t.ls,n.ls)}static ns(t,n){return N(t.ls,n.ls)||T.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new ot(V.ts)}checkEmpty(t){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Tm(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ds=this.ds.add(new V(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,n){return f.resolve(this._s(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.ws(s),i=r<0?0:r;return f.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(t){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new V(n,0),r=new V(n,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([s,r],o=>{const a=this._s(o.ls);i.push(a)}),f.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new ot(N);return n.forEach(r=>{const i=new V(r,0),o=new V(r,Number.POSITIVE_INFINITY);this.ds.forEachInRange([i,o],a=>{s=s.add(a.ls)})}),f.resolve(this.gs(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;T.isDocumentKey(i)||(i=i.child(""));const o=new V(new T(i),0);let a=new ot(N);return this.ds.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.ls)),!0)},o),f.resolve(this.gs(a))}gs(t){const n=[];return t.forEach(s=>{const r=this._s(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){B(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ds;return f.forEach(n.mutations,r=>{const i=new V(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ds=s})}In(t){}containsKey(t,n){const s=new V(n,0),r=this.ds.firstAfterOrEqual(s);return f.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,f.resolve()}ys(t,n){return this.ws(t)}ws(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}_s(t){const n=this.ws(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(t){this.ps=t,this.docs=new ct(T.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ps(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return f.resolve(s?s.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(t,n){let s=Fn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():dt.newInvalidDocument(r))}),f.resolve(s)}getAllFromCollection(t,n,s){let r=Fn();const i=new T(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Tp(bp(l),s)<=0||(r=r.insert(l.key,l.mutableCopy()))}return f.resolve(r)}getAllFromCollectionGroup(t,n,s,r){C()}Is(t,n){return f.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Pm(this)}getSize(t){return f.resolve(this.size)}}class Pm extends Dm{constructor(t){super(),this.zn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.zn.addEntry(t,r)):this.zn.removeEntry(s)}),f.waitFor(n)}getFromCache(t,n){return this.zn.getEntry(t,n)}getAllFromCache(t,n){return this.zn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(t){this.persistence=t,this.Ts=new we(n=>Hr(n),qr),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Es=0,this.As=new Gr,this.targetCount=0,this.Rs=he.An()}forEachTarget(t,n){return this.Ts.forEach((s,r)=>n(r)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Es&&(this.Es=n),f.resolve()}vn(t){this.Ts.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Rs=new he(n),this.highestTargetId=n),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,n){return this.vn(n),this.targetCount+=1,f.resolve()}updateTargetData(t,n){return this.vn(n),f.resolve()}removeTargetData(t,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Ts.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),f.waitFor(i).next(()=>r)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,n){const s=this.Ts.get(n)||null;return f.resolve(s)}addMatchingKeys(t,n,s){return this.As.ss(n,s),f.resolve()}removeMatchingKeys(t,n,s){this.As.os(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),f.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.As.us(n),f.resolve()}getMatchingKeysForTargetId(t,n){const s=this.As.hs(n);return f.resolve(s)}containsKey(t,n){return f.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(t,n){this.bs={},this.overlays={},this.Ps=new Ha(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new Lm(this),this.indexManager=new Cm,this.remoteDocumentCache=function(s){return new Mm(s)}(s=>this.referenceDelegate.Ss(s)),this.wt=new Am(n),this.Ds=new Rm(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Om,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.bs[t.toKey()];return s||(s=new km(n,this.referenceDelegate),this.bs[t.toKey()]=s),s}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,n,s){v("MemoryPersistence","Starting transaction:",t);const r=new Fm(this.Ps.next());return this.referenceDelegate.Cs(),s(r).next(i=>this.referenceDelegate.xs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ns(t,n){return f.or(Object.values(this.bs).map(s=>()=>s.containsKey(t,n)))}}class Fm extends Ap{constructor(t){super(),this.currentSequenceNumber=t}}class Kr{constructor(t){this.persistence=t,this.ks=new Gr,this.Ms=null}static Os(t){return new Kr(t)}get Fs(){if(this.Ms)return this.Ms;throw C()}addReference(t,n,s){return this.ks.addReference(s,n),this.Fs.delete(s.toString()),f.resolve()}removeReference(t,n,s){return this.ks.removeReference(s,n),this.Fs.add(s.toString()),f.resolve()}markPotentiallyOrphaned(t,n){return this.Fs.add(n.toString()),f.resolve()}removeTarget(t,n){this.ks.us(n.targetId).forEach(r=>this.Fs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Fs.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}Cs(){this.Ms=new Set}xs(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Fs,s=>{const r=T.fromPath(s);return this.$s(t,r).next(i=>{i||n.removeEntry(r,F.min())})}).next(()=>(this.Ms=null,n.apply(t)))}updateLimboDocument(t,n){return this.$s(t,n).next(s=>{s?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(t){return 0}$s(t,n){return f.or([()=>f.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ns(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Pi=s,this.vi=r}static Vi(t,n){let s=Z(),r=Z();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Wr(t,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(){this.Si=!1}initialize(t,n){this.Di=t,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(t,n,s,r){return this.Ci(t,n).next(i=>i||this.xi(t,n,r,s)).next(i=>i||this.Ni(t,n))}Ci(t,n){if(Qi(n))return f.resolve(null);let s=ce(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=nr(n,null,"F"),s=ce(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=Z(...i);return this.Di.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(l=>{const c=this.ki(n,a);return this.Mi(n,c,o,l.readTime)?this.Ci(t,nr(n,null,"F")):this.Oi(t,c,n,l)}))})))}xi(t,n,s,r){return Qi(n)||r.isEqual(F.min())?this.Ni(t,n):this.Di.getDocuments(t,s).next(i=>{const o=this.ki(n,i);return this.Mi(n,o,s,r)?this.Ni(t,n):(ji()<=x.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Yi(n)),this.Oi(t,o,n,Ep(r,-1)))})}ki(t,n){let s=new ot(zp(t));return n.forEach((r,i)=>{Xa(t,i)&&(s=s.add(i))}),s}Mi(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(t,n){return ji()<=x.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",Yi(n)),this.Di.getDocumentsMatchingQuery(t,n,It.min())}Oi(t,n,s,r){return this.Di.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(t,n,s,r){this.persistence=t,this.Fi=n,this.wt=r,this.$i=new ct(N),this.Bi=new we(i=>Hr(i),qr),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(s)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Nm(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.$i))}}function Vm(e,t,n,s){return new Um(e,t,n,s)}async function cl(e,t){const n=O(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.qi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let l=Z();for(const c of r){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({Ki:c,removedBatchIds:o,addedBatchIds:a}))})})}function jm(e,t){const n=O(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=t.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let p=f.resolve();return h.forEach(y=>{p=p.next(()=>c.getEntry(a,y)).next(_=>{const R=l.docVersions.get(y);B(R!==null),_.version.compareTo(R)<0&&(u.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),c.addEntry(_)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,t,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=Z();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,r))})}function Hm(e){const t=O(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Vs.getLastRemoteSnapshotVersion(n))}function qm(e,t){const n=O(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}class so{constructor(){this.activeTargetIds=am()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class zm{constructor(){this.Fr=new so,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,n,s){this.$r[t]=n}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new so,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{Br(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.so=n+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,n,s,r,i){const o=this.oo(t,n);v("RestConnection","Sending: ",o,s);const a={};return this.uo(a,r,i),this.co(t,o,a,s).then(l=>(v("RestConnection","Received: ",l),l),l=>{throw Hi("RestConnection",`${t} failed with error: `,l,"url: ",o,"request:",s),l})}ao(t,n,s,r,i,o){return this.ro(t,n,s,r,i)}uo(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+ve,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}oo(t,n){const s=Km[t];return`${this.so}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,n,s,r){return new Promise((i,o)=>{const a=new cp;a.listenOnce(ap.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Os.NO_ERROR:const c=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(c)),i(c);break;case Os.TIMEOUT:v("Connection",'RPC "'+t+'" timed out'),o(new b(d.DEADLINE_EXCEEDED,"Request time out"));break;case Os.HTTP_ERROR:const u=a.getStatus();if(v("Connection",'RPC "'+t+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const p=function(y){const _=y.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(_)>=0?_:d.UNKNOWN}(h.status);o(new b(p,h.message))}else o(new b(d.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new b(d.UNAVAILABLE,"Connection failed."));break;default:C()}}finally{v("Connection",'RPC "'+t+'" completed.')}});const l=JSON.stringify(r);a.send(n,"POST",l,s,15)})}ho(t,n,s){const r=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=ip(),o=op(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new up({})),this.uo(a.initMessageHeaders,n,s),$h()||Bh()||Uh()||Vh()||jh()||Fh()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=r.join("");v("Connection","Creating WebChannel: "+l,a);const c=i.createWebChannel(l,a);let u=!1,h=!1;const p=new Wm({jr:_=>{h?v("Connection","Not sending because WebChannel is closed:",_):(u||(v("Connection","Opening WebChannel transport."),c.open(),u=!0),v("Connection","WebChannel sending:",_),c.send(_))},Wr:()=>c.close()}),y=(_,R,k)=>{_.listen(R,E=>{try{k(E)}catch(A){setTimeout(()=>{throw A},0)}})};return y(c,fn.EventType.OPEN,()=>{h||v("Connection","WebChannel transport opened.")}),y(c,fn.EventType.CLOSE,()=>{h||(h=!0,v("Connection","WebChannel transport closed"),p.eo())}),y(c,fn.EventType.ERROR,_=>{h||(h=!0,Hi("Connection","WebChannel transport errored:",_),p.eo(new b(d.UNAVAILABLE,"The operation could not be completed")))}),y(c,fn.EventType.MESSAGE,_=>{var R;if(!h){const k=_.data[0];B(!!k);const E=k,A=E.error||((R=E[0])===null||R===void 0?void 0:R.error);if(A){v("Connection","WebChannel received error:",A);const Y=A.status;let Ee=function(Ol){const ti=L[Ol];if(ti!==void 0)return nm(ti)}(Y),Xt=A.message;Ee===void 0&&(Ee=d.INTERNAL,Xt="Unknown error status: "+Y+" with message "+A.message),h=!0,p.eo(new b(Ee,Xt)),c.close()}else v("Connection","WebChannel received:",k),p.no(k)}}),y(o,lp.STAT_EVENT,_=>{_.stat===Ui.PROXY?v("Connection","Detected buffering proxy"):_.stat===Ui.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.Zr()},0),p}}function ks(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(e){return new lm(e,!0)}class hl{constructor(t,n,s=1e3,r=1.5,i=6e4){this.js=t,this.timerId=n,this.lo=s,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const n=Math.floor(this.wo+this.To()),s=Math.max(0,Date.now()-this.yo),r=Math.max(0,n-s);r>0&&v("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),t())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(t,n,s,r,i,o,a,l){this.js=t,this.Ao=s,this.Ro=r,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new hl(t,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(t){this.Fo(),this.stream.send(t)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,t!==4?this.So.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(jt(n.toString()),jt("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Po===n&&this.Uo(s,r)},s=>{t(()=>{const r=new b(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.qo(r)})})}Uo(t,n){const s=this.Lo(this.Po);this.stream=this.Ko(t,n),this.stream.zr(()=>{s(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(r=>{s(()=>this.qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(t){return v("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return n=>{this.js.enqueueAndForget(()=>this.Po===t?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ym extends Qm{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,n){return this.bo.ho("Write",t,n)}onMessage(t){if(B(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const n=gm(t.writeResults,t.commitTime),s=ne(t.commitTime);return this.listener.Jo(s,n)}return B(!t.writeResults||t.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=dm(this.wt),this.Oo(t)}Ho(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>mm(this.wt,s))};this.Oo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.bo=s,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new b(d.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,n,s){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.bo.ro(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new b(d.UNKNOWN,r.toString())})}ao(t,n,s,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.bo.ao(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new b(d.UNKNOWN,i.toString())})}terminate(){this.Zo=!0}}class Zm{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(t){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,t==="Online"&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(jt(n),this.su=!1):v("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{s.enqueueAndForget(async()=>{an(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=O(a);l.lu.add(4),await on(l),l._u.set("Unknown"),l.lu.delete(4),await fs(l)}(this))})}),this._u=new Zm(s,r)}}async function fs(e){if(an(e))for(const t of e.fu)await t(!0)}async function on(e){for(const t of e.fu)await t(!1)}function an(e){return O(e).lu.size===0}async function fl(e,t,n){if(!as(t))throw t;e.lu.add(1),await on(e),e._u.set("Offline"),n||(n=()=>Hm(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await fs(e)})}function dl(e,t){return t().catch(n=>fl(e,n,t))}async function ds(e){const t=O(e),n=Dt(t);let s=t.au.length>0?t.au[t.au.length-1].batchId:-1;for(;eg(t);)try{const r=await qm(t.localStore,s);if(r===null){t.au.length===0&&n.ko();break}s=r.batchId,ng(t,r)}catch(r){await fl(t,r)}pl(t)&&ml(t)}function eg(e){return an(e)&&e.au.length<10}function ng(e,t){e.au.push(t);const n=Dt(e);n.Co()&&n.zo&&n.Ho(t.mutations)}function pl(e){return an(e)&&!Dt(e).Do()&&e.au.length>0}function ml(e){Dt(e).start()}async function sg(e){Dt(e).Xo()}async function rg(e){const t=Dt(e);for(const n of e.au)t.Ho(n.mutations)}async function ig(e,t,n){const s=e.au.shift(),r=zr.from(s,t,n);await dl(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await ds(e)}async function og(e,t){t&&Dt(e).zo&&await async function(n,s){if(r=s.code,em(r)&&r!==d.ABORTED){const i=n.au.shift();Dt(n).No(),await dl(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ds(n)}var r}(e,t),pl(e)&&ml(e)}async function io(e,t){const n=O(e);n.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const s=an(n);n.lu.add(3),await on(n),s&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await fs(n)}async function ag(e,t){const n=O(e);t?(n.lu.delete(2),await fs(n)):t||(n.lu.add(2),await on(n),n._u.set("Unknown"))}function Dt(e){return e.gu||(e.gu=function(t,n,s){const r=O(t);return r.tu(),new Ym(n,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,s)}(e.datastore,e.asyncQueue,{zr:sg.bind(null,e),Jr:og.bind(null,e),Yo:rg.bind(null,e),Jo:ig.bind(null,e)}),e.fu.push(async t=>{t?(e.gu.No(),await ds(e)):(await e.gu.stop(),e.au.length>0&&(v("RemoteStore",`Stopping write stream with ${e.au.length} pending writes`),e.au=[]))})),e.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new Xr(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gl(e,t){if(jt("AsyncQueue",`${t}: ${e}`),as(e))return new b(d.UNAVAILABLE,`${t}: ${e}`);throw e}class lg{constructor(){this.queries=new we(t=>Wa(t),Ka),this.onlineState="Unknown",this.Tu=new Set}}function ug(e){e.Tu.forEach(t=>{t.next()})}class cg{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new we(a=>Wa(a),Ka),this.ec=new Map,this.nc=new Set,this.sc=new ct(T.comparator),this.ic=new Map,this.rc=new Gr,this.oc={},this.uc=new Map,this.cc=he.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function hg(e,t,n){const s=mg(e);try{const r=await function(i,o){const a=O(i),l=j.now(),c=o.reduce((p,y)=>p.add(y.key),Z());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=Fn(),_=Z();return a.Ui.getEntries(p,c).next(R=>{y=R,y.forEach((k,E)=>{E.isValidDocument()||(_=_.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,y)).next(R=>{u=R;const k=[];for(const E of o){const A=Zp(E,u.get(E.key).overlayedDocument);A!=null&&k.push(new Kt(E.key,A,za(A.value.mapValue),Et.exists(!0)))}return a.mutationQueue.addMutationBatch(p,l,k,o)}).next(R=>{h=R;const k=R.applyToLocalDocumentSet(u,_);return a.documentOverlayCache.saveOverlays(p,R.batchId,k)})}).then(()=>({batchId:h.batchId,changes:ol(u)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let l=i.oc[i.currentUser.toKey()];l||(l=new ct(N)),l=l.insert(o,a),i.oc[i.currentUser.toKey()]=l}(s,r.batchId,n),await ps(s,r.changes),await ds(s.remoteStore)}catch(r){const i=gl(r,"Failed to persist write");n.reject(i)}}function oo(e,t,n){const s=O(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.tc.forEach((i,o)=>{const a=o.view.Eu(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=O(i);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.Eu(o)&&(l=!0)}),l&&ug(a)}(s.eventManager,t),r.length&&s.Zu.Go(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function fg(e,t){const n=O(e),s=t.batch.batchId;try{const r=await jm(n.localStore,t);vl(n,s,null),yl(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ps(n,r)}catch(r){await ja(r)}}async function dg(e,t,n){const s=O(e);try{const r=await function(i,o){const a=O(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(B(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,t);vl(s,t,n),yl(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await ps(s,r)}catch(r){await ja(r)}}function yl(e,t){(e.uc.get(t)||[]).forEach(n=>{n.resolve()}),e.uc.delete(t)}function vl(e,t,n){const s=O(e);let r=s.oc[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.oc[s.currentUser.toKey()]=r}}async function ps(e,t,n){const s=O(e),r=[],i=[],o=[];s.tc.isEmpty()||(s.tc.forEach((a,l)=>{o.push(s.hc(l,t,n).then(c=>{if(c){s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),r.push(c);const u=Wr.Vi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),s.Zu.Go(r),await async function(a,l){const c=O(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>f.forEach(l,h=>f.forEach(h.Pi,p=>c.persistence.referenceDelegate.addReference(u,h.targetId,p)).next(()=>f.forEach(h.vi,p=>c.persistence.referenceDelegate.removeReference(u,h.targetId,p)))))}catch(u){if(!as(u))throw u;v("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const p=c.$i.get(h),y=p.snapshotVersion,_=p.withLastLimboFreeSnapshotVersion(y);c.$i=c.$i.insert(h,_)}}}(s.localStore,i))}async function pg(e,t){const n=O(e);if(!n.currentUser.isEqual(t)){v("SyncEngine","User change. New user:",t.toKey());const s=await cl(n.localStore,t);n.currentUser=t,function(r,i){r.uc.forEach(o=>{o.forEach(a=>{a.reject(new b(d.CANCELLED,i))})}),r.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await ps(n,s.Ki)}}function mg(e){const t=O(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=fg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=dg.bind(null,t),t}class gg{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=hs(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,n){return null}gc(t,n){return null}wc(t){return Vm(this.persistence,new Bm,t.initialUser,this.wt)}_c(t){return new $m(Kr.Os,this.wt)}dc(t){return new zm}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class yg{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>oo(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=pg.bind(null,this.syncEngine),await ag(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new lg}createDatastore(t){const n=hs(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new Xm(r));var r;return function(i,o,a,l){return new Jm(i,o,a,l)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>oo(this.syncEngine,a,0),o=ro.V()?new ro:new Gm,new tg(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,l,c){const u=new cg(s,r,i,o,a,l);return c&&(u.ac=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=O(t);v("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await on(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=at.UNAUTHENTICATED,this.clientId=Va.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{v("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(v("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=gl(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function wg(e,t){e.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await cl(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Eg(e,t){e.asyncQueue.verifyOperationInProgress();const n=await bg(e);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>io(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>io(t.remoteStore,i)),e.onlineComponents=t}async function bg(e){return e.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await wg(e,new gg)),e.offlineComponents}async function Tg(e){return e.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await Eg(e,new yg)),e.onlineComponents}function _g(e){return Tg(e).then(t=>t.syncEngine)}const ao=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(e,t,n){if(!n)throw new b(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Ag(e,t,n,s){if(t===!0&&s===!0)throw new b(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function lo(e){if(!T.isDocumentKey(e))throw new b(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function uo(e){if(T.isDocumentKey(e))throw new b(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Qr(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":C()}function Sg(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new b(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qr(e);throw new b(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new b(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new b(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Ag("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new co({}),this._settingsFrozen=!1,t instanceof Ve?this._databaseId=t:(this._app=t,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new b(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ve(r.options.projectId)}(t))}get app(){if(!this._app)throw new b(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new b(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new co(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new fp;switch(n.type){case"gapi":const s=n.client;return B(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new mp(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new b(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ao.get(t);n&&(v("ComponentProvider","Removing Datastore"),ao.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ct(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new bt(this.firestore,t,this._key)}}class Jr{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Jr(this.firestore,t,this._query)}}class Ct extends Jr{constructor(t,n,s){super(t,n,Vp(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new bt(this.firestore,null,new T(t))}withConverter(t){return new Ct(this.firestore,t,this._path)}}function Cg(e,t,...n){if(e=Re(e),wl("collection","path",t),e instanceof Yr){const s=P.fromString(t,...n);return uo(s),new Ct(e,null,s)}{if(!(e instanceof bt||e instanceof Ct))throw new b(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(P.fromString(t,...n));return uo(s),new Ct(e.firestore,null,s)}}function Ig(e,t,...n){if(e=Re(e),arguments.length===1&&(t=Va.I()),wl("doc","path",t),e instanceof Yr){const s=P.fromString(t,...n);return lo(s),new bt(e,null,new T(s))}{if(!(e instanceof bt||e instanceof Ct))throw new b(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(P.fromString(t,...n));return lo(s),new bt(e.firestore,e instanceof Ct?e.converter:null,new T(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new hl(this,"async_queue_retry"),this.Kc=()=>{const n=ks();n&&v("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const t=ks();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const n=ks();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Lt;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Oc.push(t),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(t){if(!as(t))throw t;v("AsyncQueue","Operation failed with retryable error: "+t)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(t){const n=this.Mc.then(()=>(this.Lc=!0,t().catch(s=>{this.Bc=s,this.Lc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw jt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Lc=!1,s))));return this.Mc=n,n}enqueueAfterDelay(t,n,s){this.Gc(),this.qc.indexOf(t)>-1&&(n=0);const r=Xr.createAndSchedule(this,t,n,s,i=>this.Wc(i));return this.$c.push(r),r}Gc(){this.Bc&&C()}verifyOperationInProgress(){}async zc(){let t;do t=this.Mc,await t;while(t!==this.Mc)}Hc(t){for(const n of this.$c)if(n.timerId===t)return!0;return!1}Jc(t){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.zc()})}Yc(t){this.qc.push(t)}Wc(t){const n=this.$c.indexOf(t);this.$c.splice(n,1)}}class El extends Yr{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new Dg,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||bl(this),this._firestoreClient.terminate()}}function xg(e=Wf()){return Hf(e,"firestore").getImmediate()}function Ng(e){return e._firestoreClient||bl(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function bl(e){var t;const n=e._freezeSettings(),s=function(r,i,o,a){return new Ip(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new vg(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new b(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ge(_t.fromBase64String(t))}catch(n){throw new b(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ge(_t.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new b(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new b(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return N(this._lat,t._lat)||N(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=/^__.*__$/;class Og{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Kt(t,this.data,this.fieldMask,n,this.fieldTransforms):new rn(t,this.data,n,this.fieldTransforms)}}function Sl(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw C()}}class Zr{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.wt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new Zr(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ta({path:s,na:!1});return r.sa(t),r}ia(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.ta({path:s,na:!1});return r.Xc(),r}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return Bn(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(t.length===0)throw this.oa("Document fields must not be empty");if(Sl(this.Zc)&&Rg.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class kg{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.wt=s||hs(t)}aa(t,n,s,r=!1){return new Zr({Zc:t,methodName:n,ca:s,path:et.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function Mg(e){const t=e._freezeSettings(),n=hs(e._databaseId);return new kg(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Pg(e,t,n,s,r,i={}){const o=e.aa(i.merge||i.mergeFields?2:0,t,n,r);xl("Data must be an object, but it was:",o,s);const a=Il(s,o);let l,c;if(i.merge)l=new gt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const p=Lg(t,h,n);if(!o.contains(p))throw new b(d.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Bg(u,p)||u.push(p)}l=new gt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new Og(new mt(a),l,c)}function Cl(e,t){if(Dl(e=Re(e)))return xl("Unsupported field value:",t,e),Il(e,t);if(e instanceof _l)return function(n,s){if(!Sl(s.Zc))throw s.oa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.oa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.na&&t.Zc!==4)throw t.oa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Cl(o,s.ra(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=Re(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Kp(s.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=j.fromDate(n);return{timestampValue:sr(s.wt,r)}}if(n instanceof j){const r=new j(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:sr(s.wt,r)}}if(n instanceof Al)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ge)return{bytesValue:um(s.wt,n._byteString)};if(n instanceof bt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ll(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.oa(`Unsupported field value: ${Qr(n)}`)}(e,t)}function Il(e,t){const n={};return qa(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):sn(e,(s,r)=>{const i=Cl(r,t.ea(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Dl(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof j||e instanceof Al||e instanceof Ge||e instanceof bt||e instanceof _l)}function xl(e,t,n){if(!Dl(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Qr(n);throw s==="an object"?t.oa(e+" a custom object"):t.oa(e+" "+s)}}function Lg(e,t,n){if((t=Re(t))instanceof Tl)return t._internalPath;if(typeof t=="string")return Fg(e,t);throw Bn("Field path arguments must be of type string or ",e,!1,void 0,n)}const $g=new RegExp("[~\\*/\\[\\]]");function Fg(e,t,n){if(t.search($g)>=0)throw Bn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Tl(...t.split("."))._internalPath}catch{throw Bn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Bn(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new b(d.INVALID_ARGUMENT,a+e+l)}function Bg(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}function Vg(e,t){const n=Sg(e.firestore,El),s=Ig(e),r=Ug(e.converter,t);return jg(n,[Pg(Mg(e.firestore),"addDoc",s._key,r,e.converter!==null,{}).toMutation(s._key,Et.exists(!1))]).then(()=>s)}function jg(e,t){return function(n,s){const r=new Lt;return n.asyncQueue.enqueueAndForget(async()=>hg(await _g(n),s,r)),r.promise}(Ng(e),t)}(function(e,t=!0){(function(n){ve=n})(Gf),_n(new Oe("firestore",(n,{options:s})=>{const r=n.getProvider("app").getImmediate(),i=new El(r,new dp(n.getProvider("auth-internal")),new yp(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),i._setSettings(s),i},"PUBLIC")),te(Vi,"3.4.14",e),te(Vi,"3.4.14","esm2017")})();var Hg="firebase",qg="9.9.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */te(Hg,qg,"app");const zg={apiKey:"AIzaSyA4z7iojD9k9VOG81xJrGdgzHr4-wyGAko",authDomain:"asistencia-casamiento.firebaseapp.com",projectId:"asistencia-casamiento",storageBucket:"asistencia-casamiento.appspot.com",messagingSenderId:"13406005698",appId:"1:13406005698:web:6942fcb12fdbec2ff90e5b"},Nl=Kf(zg),Rl=xg(Nl);window.app=Nl;window.firestore=Rl;const Wt=e=>(fo("data-v-2fe94f61"),e=e(),po(),e),Gg={class:"w-full xl:bg-slate-100 pt-5"},Kg={class:"container-section xl:bg-slate-100"},Wg={class:"text-center"},Xg={class:"input-wrapper","data-aos":"zoom-in"},Qg=Wt(()=>m("label",{class:"w-full",for:"Nombre"},"Nombre",-1)),Yg={class:"input-wrapper","data-aos":"zoom-in"},Jg=Wt(()=>m("label",{class:"w-full",for:"Estado"},"Presencia",-1)),Zg=Wt(()=>m("option",{value:"Presente"},"Presente",-1)),ty=Wt(()=>m("option",{value:"Ausente"},"Ausente",-1)),ey=[Zg,ty],ny=Wt(()=>m("label",{class:"w-full text-bold"},"Especificaciones Alimenticias",-1)),sy={class:"input-wrapper flex flex-col","data-aos":"zoom-in"},ry=["id","value"],iy=["for"],oy={class:"input-wrapper","data-aos":"zoom-in"},ay=Wt(()=>m("label",{class:"w-full",for:"Comentarios"},"Comentario",-1)),ly=["disabled"],uy={key:0,class:"fa fa-paper-plane mr-1"},cy={key:1,class:"fa fa-spinner fa-spin mr-1"},hy=Un(" Confirmar asistencia "),fy=Wt(()=>m("div",{class:"w-full text-center pb-12 mt-12"},[m("p",{class:"text-sm text-amber-600 font-medium"},"Shipupi \xA9 2022")],-1)),dy={setup(e){const t=J(null),n=J(null),s=J(null),r=J("Presente"),i=J(new Date),o=J([]),a=J(["Vegetariano","Kosher","Celiaco","Sin Sal","Menu Infantil (Menor a 5 a\xF1os)","Otro (Agregar en comentarios)"]),l=J(!1),c=J(!1),u=J(!1),h=J(!1),p=()=>new Promise((k,E)=>{console.log("Sending 1");const A={Nombre:n.value,Fecha:new Date,Estado:r.value,Comentarios:s.value,Dieta:o.value};Vg(Cg(Rl,"asistencia-casamiento"),A).then(Y=>k(Y)).catch(Y=>E(Y))}),y=()=>{n.value=null,s.value=null,o=[],r="Presente"},_=k=>{u.value||(k.preventDefault(),u.value=!0,Promise.allSettled([p(),R()]).then(E=>{E[1].status=="fulfilled"?(u.value=!1,l.value=!0,c.value=!0,h.value=!0,y()):(u.value=!0,l.value=!1,c.value=!0)}))},R=async()=>{const k="https://script.google.com/macros/s/AKfycby1ovbqWQ5T5wkb8zGGA7oK8Qv3nMUtLz1us1SwIAF7H0H0NwQtaoB7N3RptNZElaqP/exec",E=new FormData(t.value);E.append("Dieta",o.value.join(", ")),await fetch(k,{method:"POST",body:E})};return(k,E)=>(I(),D("section",Gg,[m("section",Kg,[G(jn,{title:"Confirma tu asistencia!",subtitle:"Para la tranquilidad del evento, se solicita a los invitados que aseguren su asistencia. <br><span class='text-red-700 font-bold'>Importante: Mandar un formulario por invitado.</span>"}),G(Oh,{statusResponse:l.value,showAlert:c.value,onClose:E[0]||(E[0]=A=>c.value=!1)},null,8,["statusResponse","showAlert"]),m("div",Wg,[h.value?(I(),D("button",{key:0,class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:E[1]||(E[1]=A=>h.value=!1)},"Enviar otro")):En("",!0)]),h.value?En("",!0):(I(),D("form",{key:0,ref_key:"form",ref:t,onSubmit:_,class:"w-10/12 mx-auto mt-6"},[m("div",Xg,[Qg,be(m("input",{class:"w-full","onUpdate:modelValue":E[2]||(E[2]=A=>n.value=A),placeholder:"Tu nombre completo",name:"Nombre",id:"Nombre",type:"text",required:""},null,512),[[ms,n.value]])]),be(m("input",{type:"hidden",id:"Fecha",name:"Fecha","onUpdate:modelValue":E[3]||(E[3]=A=>i.value=A)},null,512),[[ms,i.value]]),m("div",Yg,[Jg,be(m("select",{class:"w-full","onUpdate:modelValue":E[4]||(E[4]=A=>r.value=A),name:"Estado",id:"Estado",required:""},ey,512),[[Hl,r.value]])]),ny,m("div",sy,[(I(!0),D(xt,null,qt(a.value,A=>(I(),D("div",{key:A,class:"flex items-center align-center"},[be(m("input",{class:"mr-1",type:"checkbox",id:A,value:A,"onUpdate:modelValue":E[5]||(E[5]=Y=>o.value=Y)},null,8,ry),[[ql,o.value]]),m("label",{class:"w-auto",for:A},tt(A),9,iy)]))),128))]),m("div",oy,[ay,be(m("textarea",{class:"w-full",placeholder:"Si necesitas dejar un comentario, aca podes hacerlo","onUpdate:modelValue":E[6]||(E[6]=A=>s.value=A),name:"Comentarios",id:"Comentarios",cols:"30",rows:"5"},null,512),[[ms,s.value]])]),m("button",{disabled:u.value,"data-aos":"zoom-in",class:"w-full bg-gray-800 text-gray-100 mt-6 rounded-lg py-2 font-medium pointer active:scale-90 border-gray-500 duration-300",type:"submit"},[u.value?(I(),D("i",cy)):(I(),D("i",uy)),hy],8,ly)],544)),fy])]))}};var py=ho(dy,[["__scopeId","data-v-2fe94f61"]]);const yy={setup(e){const t=n=>{document.querySelector(n).scrollIntoView({behavior:"smooth"})};return(n,s)=>(I(),D("section",null,[G(eu,{id:"mainCover"}),G(ph),G(hh,{onGoToGuestBook:s[0]||(s[0]=r=>t("#guest-book"))}),G(wh),G(Dh,{id:"envelope"}),G(py,{id:"guest-book"})]))}};export{yy as default};
