var Ta=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Ia(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ii={exports:{}};(function(t,e){(function(r,s){t.exports=s()})(Ta,function(){return function(n){var r={};function s(i){if(r[i])return r[i].exports;var o=r[i]={i,l:!1,exports:{}};return n[i].call(o.exports,o,o.exports,s),o.l=!0,o.exports}return s.m=n,s.c=r,s.d=function(i,o,a){s.o(i,o)||Object.defineProperty(i,o,{enumerable:!0,get:a})},s.r=function(i){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},s.t=function(i,o){if(o&1&&(i=s(i)),o&8||o&4&&typeof i=="object"&&i&&i.__esModule)return i;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:i}),o&2&&typeof i!="string")for(var u in i)s.d(a,u,function(c){return i[c]}.bind(null,u));return a},s.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return s.d(o,"a",o),o},s.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},s.p="",s(s.s=0)}({"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":function(n,r){function s(i,o){(o==null||o>i.length)&&(o=i.length);for(var a=0,u=new Array(o);a<o;a++)u[a]=i[a];return u}n.exports=s,n.exports.default=n.exports,n.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":function(n,r,s){var i=s("./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");function o(a){if(Array.isArray(a))return i(a)}n.exports=o,n.exports.default=n.exports,n.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/classCallCheck.js":function(n,r){function s(i,o){if(!(i instanceof o))throw new TypeError("Cannot call a class as a function")}n.exports=s,n.exports.default=n.exports,n.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/createClass.js":function(n,r){function s(o,a){for(var u=0;u<a.length;u++){var c=a[u];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(o,c.key,c)}}function i(o,a,u){return a&&s(o.prototype,a),u&&s(o,u),o}n.exports=i,n.exports.default=n.exports,n.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/defineProperty.js":function(n,r){function s(i,o,a){return o in i?Object.defineProperty(i,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[o]=a,i}n.exports=s,n.exports.default=n.exports,n.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/interopRequireDefault.js":function(n,r){function s(i){return i&&i.__esModule?i:{default:i}}n.exports=s,n.exports.default=n.exports,n.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":function(n,r,s){var i=s("./node_modules/@babel/runtime/helpers/typeof.js").default;function o(u){if(typeof WeakMap!="function")return null;var c=new WeakMap,l=new WeakMap;return(o=function(y){return y?l:c})(u)}function a(u,c){if(!c&&u&&u.__esModule)return u;if(u===null||i(u)!=="object"&&typeof u!="function")return{default:u};var l=o(c);if(l&&l.has(u))return l.get(u);var h={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in u)if(d!=="default"&&Object.prototype.hasOwnProperty.call(u,d)){var p=y?Object.getOwnPropertyDescriptor(u,d):null;p&&(p.get||p.set)?Object.defineProperty(h,d,p):h[d]=u[d]}return h.default=u,l&&l.set(u,h),h}n.exports=a,n.exports.default=n.exports,n.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/iterableToArray.js":function(n,r){function s(i){if(typeof Symbol!="undefined"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}n.exports=s,n.exports.default=n.exports,n.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/nonIterableSpread.js":function(n,r){function s(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}n.exports=s,n.exports.default=n.exports,n.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":function(n,r,s){var i=s("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");function o(a,u){if(a==null)return{};var c=i(a,u),l,h;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(a);for(h=0;h<y.length;h++)l=y[h],!(u.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,l)||(c[l]=a[l]))}return c}n.exports=o,n.exports.default=n.exports,n.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":function(n,r){function s(i,o){if(i==null)return{};var a={},u=Object.keys(i),c,l;for(l=0;l<u.length;l++)c=u[l],!(o.indexOf(c)>=0)&&(a[c]=i[c]);return a}n.exports=s,n.exports.default=n.exports,n.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/toConsumableArray.js":function(n,r,s){var i=s("./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js"),o=s("./node_modules/@babel/runtime/helpers/iterableToArray.js"),a=s("./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"),u=s("./node_modules/@babel/runtime/helpers/nonIterableSpread.js");function c(l){return i(l)||o(l)||a(l)||u()}n.exports=c,n.exports.default=n.exports,n.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/typeof.js":function(n,r){function s(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(n.exports=s=function(a){return typeof a},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=s=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},n.exports.default=n.exports,n.exports.__esModule=!0),s(i)}n.exports=s,n.exports.default=n.exports,n.exports.__esModule=!0},"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":function(n,r,s){var i=s("./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");function o(a,u){if(!!a){if(typeof a=="string")return i(a,u);var c=Object.prototype.toString.call(a).slice(8,-1);if(c==="Object"&&a.constructor&&(c=a.constructor.name),c==="Map"||c==="Set")return Array.from(a);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return i(a,u)}}n.exports=o,n.exports.default=n.exports,n.exports.__esModule=!0},"./node_modules/webpack/buildin/global.js":function(n,r){var s;s=function(){return this}();try{s=s||new Function("return this")()}catch{typeof window=="object"&&(s=window)}n.exports=s},"./packages/@apphub:logrocket-console/src/index.js":function(n,r,s){var i=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=i(s("./packages/@apphub:logrocket-console/src/registerConsole.js")),a=o.default;r.default=a,n.exports=r.default},"./packages/@apphub:logrocket-console/src/registerConsole.js":function(n,r,s){var i=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(r,"__esModule",{value:!0}),r.default=c;var o=i(s("./node_modules/@babel/runtime/helpers/typeof.js")),a=i(s("./packages/@apphub:logrocket-utils/src/enhanceFunc.js")),u=s("./packages/@apphub:logrocket-exceptions/src/index.js");function c(l){var h=[],y=["log","warn","info","error","debug"];return y.forEach(function(d){h.push((0,a.default)(console,d,function(){for(var p=arguments.length,g=new Array(p),S=0;S<p;S++)g[S]=arguments[S];l.addEvent("lr.core.LogEvent",function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=b.isEnabled;return(0,o.default)(f)==="object"&&f[d]===!1||f===!1?null:(d==="error"&&b.shouldAggregateConsoleErrors&&u.Capture.captureMessage(l,g[0],{},!0),{logLevel:d.toUpperCase(),args:g})})}))}),function(){h.forEach(function(d){return d()})}}n.exports=r.default},"./packages/@apphub:logrocket-exceptions/src/Capture.js":function(n,r,s){var i=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(r,"__esModule",{value:!0}),r.captureMessage=h,r.captureException=y;var o=i(s("./node_modules/@babel/runtime/helpers/typeof.js")),a=i(s("./packages/@apphub:logrocket-utils/src/TraceKit.js")),u=i(s("./packages/@apphub:logrocket-exceptions/src/stackTraceFromError.js"));function c(d){return/boolean|number|string/.test((0,o.default)(d))}function l(d,p){if(p){for(var g=["level","logger"],S=0,b=g;S<b.length;S++){var f=b[S],w=p[f];c(w)&&(d[f]=w.toString())}for(var m=["tags","extra"],v=0,E=m;v<E.length;v++){for(var T=E[v],I=p[T]||{},O={},R=0,j=Object.keys(I);R<j.length;R++){var H=j[R],_=I[H];c(_)&&(O[H.toString()]=_.toString())}d[T]=O}}}function h(d,p){var g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},S=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,b={exceptionType:S?"CONSOLE":"MESSAGE",message:p,browserHref:window.location?window.location.href:""};l(b,g),d.addEvent("lr.core.Exception",function(){return b})}function y(d,p){var g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},S=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,b=S||a.default.computeStackTrace(p),f={exceptionType:"WINDOW",errorType:b.name,message:b.message,browserHref:window.location?window.location.href:""};l(f,g);var w={_stackTrace:(0,u.default)(b)};d.addEvent("lr.core.Exception",function(){return f},w)}},"./packages/@apphub:logrocket-exceptions/src/index.js":function(n,r,s){var i=s("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"registerExceptions",{enumerable:!0,get:function(){return a.default}}),r.Capture=void 0;var a=o(s("./packages/@apphub:logrocket-exceptions/src/registerExceptions.js")),u=i(s("./packages/@apphub:logrocket-exceptions/src/Capture.js"));r.Capture=u},"./packages/@apphub:logrocket-exceptions/src/raven/raven.js":function(n,r,s){(function(i){var o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=o(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),u=o(s("./node_modules/@babel/runtime/helpers/createClass.js")),c=o(s("./packages/@apphub:logrocket-utils/src/TraceKit.js")),l=Object.prototype;function h(b){return b===void 0}function y(b){return typeof b=="function"}function d(b,f){return l.hasOwnProperty.call(b,f)}function p(b,f,w,m){var v=b[f];b[f]=w(v),m&&m.push([b,f,v])}var g=typeof window!="undefined"?window:typeof i!="undefined"?i:typeof self!="undefined"?self:{};g.document;var S=function(){function b(f){var w=f.captureException;(0,a.default)(this,b),this._errorHandler=this._errorHandler.bind(this),this._ignoreOnError=0,this._wrappedBuiltIns=[],this.captureException=w,c.default.report.subscribe(this._errorHandler),this._instrumentTryCatch()}return(0,u.default)(b,[{key:"uninstall",value:function(){c.default.report.unsubscribe(this._errorHandler);for(var w;this._wrappedBuiltIns.length;){w=this._wrappedBuiltIns.shift();var m=w[0],v=w[1],E=w[2];m[v]=E}}},{key:"_errorHandler",value:function(w){this._ignoreOnError||this.captureException(w)}},{key:"_ignoreNextOnError",value:function(){var w=this;this._ignoreOnError+=1,setTimeout(function(){w._ignoreOnError-=1})}},{key:"context",value:function(w,m,v){return y(w)&&(v=m||[],m=w,w=void 0),this.wrap(w,m).apply(this,v)}},{key:"wrap",value:function(w,m,v){var E=this;if(h(m)&&!y(w))return w;if(y(w)&&(m=w,w=void 0),!y(m))return m;try{if(m.__lr__)return m;if(m.__lr_wrapper__)return m.__lr_wrapper__;if(!Object.isExtensible(m))return m}catch{return m}function T(){var O=[],R=arguments.length,j=!w||w&&w.deep!==!1;for(v&&y(v)&&v.apply(this,arguments);R--;)O[R]=j?E.wrap(w,arguments[R]):arguments[R];try{return m.apply(this,O)}catch(H){throw E._ignoreNextOnError(),E.captureException(c.default.computeStackTrace(H),w),H}}for(var I in m)d(m,I)&&(T[I]=m[I]);return T.prototype=m.prototype,m.__lr_wrapper__=T,T.__lr__=!0,T.__inner__=m,T}},{key:"_instrumentTryCatch",value:function(){var w=this,m=w._wrappedBuiltIns;function v(R){return function(j,H){for(var _=new Array(arguments.length),A=0;A<_.length;++A)_[A]=arguments[A];var q=_[0];return y(q)&&(_[0]=w.wrap(q)),R.apply?R.apply(this,_):R(_[0],_[1])}}function E(R){var j=g[R]&&g[R].prototype;j&&j.hasOwnProperty&&j.hasOwnProperty("addEventListener")&&(p(j,"addEventListener",function(H){return function(_,A,q,z){try{A&&A.handleEvent&&(A.handleEvent=w.wrap(A.handleEvent))}catch{}var J;return H.call(this,_,w.wrap(A,void 0,J),q,z)}},m),p(j,"removeEventListener",function(H){return function(_,A,q,z){try{A=A&&(A.__lr_wrapper__?A.__lr_wrapper__:A)}catch{}return H.call(this,_,A,q,z)}},m))}p(g,"setTimeout",v,m),p(g,"setInterval",v,m),g.requestAnimationFrame&&p(g,"requestAnimationFrame",function(R){return function(j){return R(w.wrap(j))}},m);for(var T=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],I=0;I<T.length;I++)E(T[I]);var O=g.jQuery||g.$;O&&O.fn&&O.fn.ready&&p(O.fn,"ready",function(R){return function(j){return R.call(this,w.wrap(j))}},m)}}]),b}();r.default=S,n.exports=r.default}).call(this,s("./node_modules/webpack/buildin/global.js"))},"./packages/@apphub:logrocket-exceptions/src/registerExceptions.js":function(n,r,s){var i=s("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(r,"__esModule",{value:!0}),r.default=c;var a=o(s("./packages/@apphub:logrocket-exceptions/src/raven/raven.js")),u=i(s("./packages/@apphub:logrocket-exceptions/src/Capture.js"));function c(l){var h=new a.default({captureException:function(p){u.captureException(l,null,null,p)}}),y=function(p){l.addEvent("lr.core.Exception",function(){return{exceptionType:"UNHANDLED_REJECTION",message:p.reason||"Unhandled Promise rejection"}})};return window.addEventListener("unhandledrejection",y),function(){window.removeEventListener("unhandledrejection",y),h.uninstall()}}n.exports=r.default},"./packages/@apphub:logrocket-exceptions/src/stackTraceFromError.js":function(n,r,s){Object.defineProperty(r,"__esModule",{value:!0}),r.default=i;function i(o){function a(u){return u===null?void 0:u}return o.stack?o.stack.map(function(u){return{lineNumber:a(u.line),columnNumber:a(u.column),fileName:a(u.url),functionName:a(u.func)}}):void 0}n.exports=r.default},"./packages/@apphub:logrocket-network/src/fetchIntercept.js":function(n,r,s){var i=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=i(s("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),a=s("./packages/@apphub:logrocket-network/src/registerXHR.js"),u=[];function c(d,p){for(var g=u.reduce(function(m,v){return[v].concat(m)},[]),S=arguments.length,b=new Array(S>2?S-2:0),f=2;f<S;f++)b[f-2]=arguments[f];var w=Promise.resolve(b);return g.forEach(function(m){var v=m.request,E=m.requestError;(v||E)&&(w=w.then(function(T){return v.apply(void 0,[p].concat((0,o.default)(T)))},function(T){return E.apply(void 0,[p].concat((0,o.default)(T)))}))}),w=w.then(function(m){(0,a.setActive)(!1);var v,E;try{v=d.apply(void 0,(0,o.default)(m))}catch(T){E=T}if((0,a.setActive)(!0),E)throw E;return v}),g.forEach(function(m){var v=m.response,E=m.responseError;(v||E)&&(w=w.then(function(T){return v(p,T)},function(T){return E&&E(p,T)}))}),w}function l(d){if(!(!d.fetch||!d.Promise)){var p=d.fetch.polyfill;d.fetch=function(g){var S=0;return function(){for(var b=arguments.length,f=new Array(b),w=0;w<b;w++)f[w]=arguments[w];return c.apply(void 0,[g,S++].concat(f))}}(d.fetch),p&&(d.fetch.polyfill=p)}}var h=!1,y={register:function(p){return h||(h=!0,l(window)),u.push(p),function(){var g=u.indexOf(p);g>=0&&u.splice(g,1)}},clear:function(){u=[]}};r.default=y,n.exports=r.default},"./packages/@apphub:logrocket-network/src/index.js":function(n,r,s){var i=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(r,"__esModule",{value:!0}),r.default=p;var o=i(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),a=i(s("./node_modules/@babel/runtime/helpers/typeof.js")),u=i(s("./packages/@apphub:logrocket-network/src/registerFetch.js")),c=i(s("./packages/@apphub:logrocket-network/src/registerNetworkInformation.js")),l=i(s("./packages/@apphub:logrocket-network/src/registerXHR.js")),h=i(s("./packages/@apphub:logrocket-utils/src/mapValues.js"));function y(g,S){var b=Object.keys(g);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(g);S&&(f=f.filter(function(w){return Object.getOwnPropertyDescriptor(g,w).enumerable})),b.push.apply(b,f)}return b}function d(g){for(var S=1;S<arguments.length;S++){var b=arguments[S]!=null?arguments[S]:{};S%2?y(Object(b),!0).forEach(function(f){(0,o.default)(g,f,b[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(b)):y(Object(b)).forEach(function(f){Object.defineProperty(g,f,Object.getOwnPropertyDescriptor(b,f))})}return g}function p(g){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{isReactNative:!1},b=S.isReactNative,f=S.shouldAugmentNPS,w=S.shouldParseXHRBlob,m={},v=function(_){var A=4096e3,q=_;if((0,a.default)(_)==="object"&&_!=null){var z=Object.getPrototypeOf(_);(z===Object.prototype||z===null)&&(q=JSON.stringify(_))}if(q&&q.length&&q.length>A&&typeof q=="string"){var J=q.substring(0,1e3);return"".concat(J,` ... LogRocket truncating to first 1000 characters.
      Keep data under 4MB to prevent truncation. https://docs.logrocket.com/reference#network`)}return _},E=function(_,A){var q=A.method;g.addEvent("lr.network.RequestEvent",function(){var z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},J=z.isEnabled,we=J===void 0?!0:J,Ae=z.requestSanitizer,W=Ae===void 0?function(se){return se}:Ae;if(!we)return null;var M=null;try{M=W(d(d({},A),{},{reqId:_}))}catch(se){console.error(se)}if(M){var F=M.url;if(typeof document!="undefined"&&typeof document.createElement=="function"){var re=document.createElement("a");re.href=M.url,F=re.href}return{reqId:_,url:F,headers:(0,h.default)(M.headers,function(se){return"".concat(se)}),body:v(M.body),method:q,referrer:M.referrer||void 0,mode:M.mode||void 0,credentials:M.credentials||void 0}}return m[_]=!0,null})},T=function(_,A){var q=A.method,z=A.status;g.addEvent("lr.network.ResponseEvent",function(){var J=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},we=J.isEnabled,Ae=we===void 0?!0:we,W=J.responseSanitizer,M=W===void 0?function(re){return re}:W;if(Ae){if(m[_])return delete m[_],null}else return null;var F=null;try{F=M(d(d({},A),{},{reqId:_}))}catch(re){console.error(re)}return F?{reqId:_,status:F.status,headers:(0,h.default)(F.headers,function(re){return"".concat(re)}),body:v(F.body),method:q}:{reqId:_,status:z,headers:{},body:null,method:q}})},I=function(_){return g.isDisabled||m[_]===!0},O=(0,u.default)({addRequest:E,addResponse:T,isIgnored:I}),R=(0,l.default)({addRequest:E,addResponse:T,isIgnored:I,logger:g,shouldAugmentNPS:f,shouldParseXHRBlob:w}),j=b?function(){}:(0,c.default)(g);return function(){j(),O(),R()}}n.exports=r.default},"./packages/@apphub:logrocket-network/src/registerFetch.js":function(n,r,s){var i=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(r,"__esModule",{value:!0}),r.default=p;var o=i(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),a=i(s("./packages/@apphub:logrocket-utils/src/mapValues.js")),u=i(s("./packages/@apphub:logrocket-network/src/fetchIntercept.js"));function c(g,S){var b=Object.keys(g);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(g);S&&(f=f.filter(function(w){return Object.getOwnPropertyDescriptor(g,w).enumerable})),b.push.apply(b,f)}return b}function l(g){for(var S=1;S<arguments.length;S++){var b=arguments[S]!=null?arguments[S]:{};S%2?c(Object(b),!0).forEach(function(f){(0,o.default)(g,f,b[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(b)):c(Object(b)).forEach(function(f){Object.defineProperty(g,f,Object.getOwnPropertyDescriptor(b,f))})}return g}function h(g){if(g==null||typeof g.forEach!="function")return g;var S={};return g.forEach(function(b,f){S[f]?S[f]="".concat(S[f],",").concat(b):S[f]="".concat(b)}),S}var y=function(S){return(0,a.default)(h(S),function(b){return"".concat(b)})};function d(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return{url:g.url,headers:y(g.headers),method:g.method&&g.method.toUpperCase(),referrer:g.referrer||void 0,mode:g.mode||void 0,credentials:g.credentials||void 0}}function p(g){var S=g.addRequest,b=g.addResponse,f=g.isIgnored,w="fetch-",m={},v=u.default.register({request:function(T){for(var I=arguments.length,O=new Array(I>1?I-1:0),R=1;R<I;R++)O[R-1]=arguments[R];var j;if(typeof Request!="undefined"&&O[0]instanceof Request){var H;try{H=O[0].clone().text()}catch(_){H=Promise.resolve("LogRocket fetch error: ".concat(_.message))}j=H.then(function(_){return l(l({},d(O[0])),{},{body:_})},function(_){return l(l({},d(O[0])),{},{body:"LogRocket fetch error: ".concat(_.message)})})}else j=Promise.resolve(l(l({},d(O[1])),{},{url:"".concat(O[0]),body:(O[1]||{}).body}));return j.then(function(_){return m[T]=_.method,S("".concat(w).concat(T),_),O})},requestError:function(T,I){return Promise.reject(I)},response:function(T,I){var O;if(f("".concat(w).concat(T)))return I;try{O=I.clone().text()}catch(R){O=Promise.resolve("LogRocket fetch error: ".concat(R.message))}return O.catch(function(R){if(!(R.name==="AbortError"&&R instanceof DOMException))throw R}).then(function(R){var j={url:I.url,status:I.status,headers:y(I.headers),body:R,method:m[T]};delete m[T],b("".concat(w).concat(T),j)}),I},responseError:function(T,I){var O={url:void 0,status:0,headers:{},body:"".concat(I)};return b("".concat(w).concat(T),O),Promise.reject(I)}});return v}n.exports=r.default},"./packages/@apphub:logrocket-network/src/registerNetworkInformation.js":function(n,r,s){Object.defineProperty(r,"__esModule",{value:!0}),r.default=o;var i={"slow-2g":"SLOW2G","2g":"TWOG","3g":"THREEG","4g":"FOURG"};function o(a){var u=void 0;function c(){var l={online:window.navigator.onLine,effectiveType:"UNKOWN"};window.navigator.onLine?window.navigator.connection&&window.navigator.connection.effectiveType&&(l.effectiveType=i[window.navigator.connection.effectiveType]||"UNKNOWN"):l.effectiveType="NONE",!(u&&l.online===u.online&&l.effectiveType===u.effectiveType)&&(u=l,a.addEvent("lr.network.NetworkStatusEvent",function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},y=h.isEnabled,d=y===void 0?!0:y;return d?l:null}))}return setTimeout(c),window.navigator.connection&&typeof window.navigator.connection.addEventListener=="function"&&window.navigator.connection.addEventListener("change",c),window.addEventListener("online",c),window.addEventListener("offline",c),function(){window.removeEventListener("offline",c),window.removeEventListener("online",c),window.navigator.connection&&typeof window.navigator.connection.removeEventListener=="function"&&window.navigator.connection.removeEventListener("change",c)}}n.exports=r.default},"./packages/@apphub:logrocket-network/src/registerXHR.js":function(n,r,s){var i=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(r,"__esModule",{value:!0}),r.setActive=h,r.default=d;var o=i(s("./packages/@apphub:logrocket-utils/src/mapValues.js")),a=i(s("./packages/@apphub:logrocket-utils/src/enhanceFunc.js")),u=i(s("./packages/@apphub:logrocket-utils/src/startsWith.js")),c=s("./packages/@apphub:logrocket-utils/src/constants/nps.js"),l=!0;function h(p){l=p}var y=0;function d(p){var g=p.addRequest,S=p.addResponse,b=p.isIgnored,f=p.logger,w=p.shouldAugmentNPS,m=w===void 0?!0:w,v=p.shouldParseXHRBlob,E=v===void 0?!1:v,T=XMLHttpRequest,I=new WeakMap,O=!1,R="xhr-";return window._lrXMLHttpRequest=XMLHttpRequest,XMLHttpRequest=function(H,_){var A=new T(H,_);if(!l)return A;I.set(A,{xhrId:++y,headers:{}});var q=A.open;function z(){for(var W=arguments.length,M=new Array(W),F=0;F<W;F++)M[F]=arguments[F];try{var re=M[1];if(window.URL&&typeof window.URL=="function"&&re.search(c.WOOTRIC_RESPONSES_REGEX)===0){var se=new window.URL(f.recordingURL);se.searchParams.set("nps","wootric");var Ie=new window.URL(re),Ne=Ie.searchParams.get("response[text]"),Te=Ne?"".concat(Ne,`

`):"";Ie.searchParams.set("response[text]","".concat(Te,"<").concat(se.href,"|View LogRocket session>")),M[1]=Ie.href}}catch{}return q.apply(this,M)}var J=A.send;function we(){for(var W=arguments.length,M=new Array(W),F=0;F<W;F++)M[F]=arguments[F];try{var re=I.get(A);if(window.URL&&typeof window.URL=="function"&&re&&re.url&&re.url.search(c.DELIGHTED_RESPONSES_REGEX)===0&&M.length&&M[0].indexOf(c.DELIGHTED_FEEDBACK_PREFIX)!==-1){var se=new window.URL(f.recordingURL);se.searchParams.set("nps","delighted");var Ie=encodeURIComponent(se.href),Ne=M[0].split("&").map(function(Te){if((0,u.default)(Te,c.DELIGHTED_FEEDBACK_PREFIX)){var Qt=Te===c.DELIGHTED_FEEDBACK_PREFIX;return"".concat(Te).concat(Qt?"":`

`,"<").concat(Ie,"|View LogRocket session>")}return Te}).join("&");M[0]=Ne}}catch{}return J.apply(this,M)}m&&(A.open=z,A.send=we),(0,a.default)(A,"open",function(W,M){if(!O){var F=I.get(A);F.method=W,F.url=M}}),(0,a.default)(A,"send",function(W){if(!O){var M=I.get(A);if(!!M){var F={url:M.url,method:M.method&&M.method.toUpperCase(),headers:(0,o.default)(M.headers||{},function(re){return re.join(", ")}),body:W};g("".concat(R).concat(M.xhrId),F)}}}),(0,a.default)(A,"setRequestHeader",function(W,M){if(!O){var F=I.get(A);!F||(F.headers=F.headers||{},F.headers[W]=F.headers[W]||[],F.headers[W].push(M))}});var Ae={readystatechange:function(){if(!O&&A.readyState===4){var M=I.get(A);if(!M||b("".concat(R).concat(M.xhrId)))return;var F=A.getAllResponseHeaders()||"",re=F.split(/[\r\n]+/).reduce(function(Te,Qt){var $n=Te,Hn=Qt.split(": ");if(Hn.length>0){var qn=Hn.shift(),Ss=Hn.join(": ");Te[qn]?$n[qn]+=", ".concat(Ss):$n[qn]=Ss}return $n},{}),se;try{switch(A.responseType){case"json":se=f._shouldCloneResponse?JSON.parse(JSON.stringify(A.response)):A.response;break;case"arraybuffer":case"blob":{se=A.response;break}case"document":{se=A.responseXML;break}case"text":case"":{se=A.responseText;break}default:se=""}}catch{se="LogRocket: Error accessing response."}var Ie={url:M.url,status:A.status,headers:re,body:se,method:(M.method||"").toUpperCase()};if(E&&Ie.body instanceof Blob){var Ne=new FileReader;Ne.readAsText(Ie.body),Ne.onload=function(){try{Ie.body=JSON.parse(Ne.result)}catch{}S("".concat(R).concat(M.xhrId),Ie)}}else S("".concat(R).concat(M.xhrId),Ie)}}};return Object.keys(Ae).forEach(function(W){A.addEventListener(W,Ae[W])}),A},XMLHttpRequest.prototype=T.prototype,["UNSENT","OPENED","HEADERS_RECEIVED","LOADING","DONE"].forEach(function(j){XMLHttpRequest[j]=T[j]}),function(){O=!0,XMLHttpRequest=T}}},"./packages/@apphub:logrocket-redux/src/createEnhancer.js":function(n,r,s){var i=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(r,"__esModule",{value:!0}),r.default=h;var o=i(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),a=i(s("./packages/@apphub:now/src/index.js"));function u(y,d){var p=Object.keys(y);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(y);d&&(g=g.filter(function(S){return Object.getOwnPropertyDescriptor(y,S).enumerable})),p.push.apply(p,g)}return p}function c(y){for(var d=1;d<arguments.length;d++){var p=arguments[d]!=null?arguments[d]:{};d%2?u(Object(p),!0).forEach(function(g){(0,o.default)(y,g,p[g])}):Object.getOwnPropertyDescriptors?Object.defineProperties(y,Object.getOwnPropertyDescriptors(p)):u(Object(p)).forEach(function(g){Object.defineProperty(y,g,Object.getOwnPropertyDescriptor(p,g))})}return y}var l=0;function h(y){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},p=d.stateSanitizer,g=p===void 0?function(f){return f}:p,S=d.actionSanitizer,b=S===void 0?function(f){return f}:S;return function(f){return function(w,m,v){var E=f(w,m,v),T=E.dispatch,I=l++;y.addEvent("lr.redux.InitialState",function(){var R;try{R=g(E.getState())}catch(j){console.error(j.toString())}return{state:R,storeId:I}});var O=function(j){var H=(0,a.default)(),_,A;try{A=T(j)}catch(z){_=z}finally{var q=(0,a.default)()-H;y.addEvent("lr.redux.ReduxAction",function(){var z=null,J=null;try{z=g(E.getState()),J=b(j)}catch(we){console.error(we.toString())}return z&&J?{storeId:I,action:J,duration:q,stateDelta:z}:null})}if(_)throw _;return A};return c(c({},E),{},{dispatch:O})}}}n.exports=r.default},"./packages/@apphub:logrocket-redux/src/createMiddleware.js":function(n,r,s){var i=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(r,"__esModule",{value:!0}),r.default=u;var o=i(s("./packages/@apphub:now/src/index.js")),a=0;function u(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=l.stateSanitizer,y=h===void 0?function(g){return g}:h,d=l.actionSanitizer,p=d===void 0?function(g){return g}:d;return function(g){var S=a++;return c.addEvent("lr.redux.InitialState",function(){var b;try{b=y(g.getState())}catch(f){console.error(f.toString())}return{state:b,storeId:S}}),function(b){return function(f){var w=(0,o.default)(),m,v;try{v=b(f)}catch(T){m=T}finally{var E=(0,o.default)()-w;c.addEvent("lr.redux.ReduxAction",function(){var T=null,I=null;try{T=y(g.getState()),I=p(f)}catch(O){console.error(O.toString())}return T&&I?{storeId:S,action:I,duration:E,stateDelta:T}:null})}if(m)throw m;return v}}}}n.exports=r.default},"./packages/@apphub:logrocket-redux/src/index.js":function(n,r,s){var i=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"createEnhancer",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(r,"createMiddleware",{enumerable:!0,get:function(){return a.default}});var o=i(s("./packages/@apphub:logrocket-redux/src/createEnhancer.js")),a=i(s("./packages/@apphub:logrocket-redux/src/createMiddleware.js"))},"./packages/@apphub:logrocket-utils/src/TraceKit.js":function(n,r,s){(function(i){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o={collectWindowErrors:!0,debug:!1},a=typeof window!="undefined"?window:typeof i!="undefined"?i:typeof self!="undefined"?self:{},u=[].slice,c="?",l=/^(?:Uncaught (?:exception: )?)?((?:Eval|Internal|Range|Reference|Syntax|Type|URI)Error): ?(.*)$/;function h(){return typeof document=="undefined"||typeof document.location=="undefined"?"":document.location.href}o.report=function(){var p=[],g=null,S=null,b=null;function f(_){O(),p.push(_)}function w(_){for(var A=p.length-1;A>=0;--A)p[A]===_&&p.splice(A,1)}function m(){R(),p=[]}function v(_,A){var q=null;if(!(A&&!o.collectWindowErrors)){for(var z in p)if(p.hasOwnProperty(z))try{p[z].apply(null,[_].concat(u.call(arguments,2)))}catch(J){q=J}if(q)throw q}}var E,T;function I(_,A,q,z,J){var we=null;if(b)o.computeStackTrace.augmentStackTraceWithInitialElement(b,A,q,_),j();else if(J)we=o.computeStackTrace(J),v(we,!0);else{var Ae={url:A,line:q,column:z},W=void 0,M=_,F;if({}.toString.call(_)==="[object String]"){var F=_.match(l);F&&(W=F[1],M=F[2])}Ae.func=c,we={name:W,message:M,url:h(),stack:[Ae]},v(we,!0)}return E?E.apply(this,arguments):!1}function O(){T||(E=a.onerror,a.onerror=I,T=!0)}function R(){!T||(a.onerror=E,T=!1,E=void 0)}function j(){var _=b,A=g;g=null,b=null,S=null,v.apply(null,[_,!1].concat(A))}function H(_,A){var q=u.call(arguments,1);if(b){if(S===_)return;j()}var z=o.computeStackTrace(_);if(b=z,S=_,g=q,setTimeout(function(){S===_&&j()},z.incomplete?2e3:0),A!==!1)throw _}return H.subscribe=f,H.unsubscribe=w,H.uninstall=m,H}(),o.computeStackTrace=function(){function p(f){if(!(typeof f.stack=="undefined"||!f.stack)){var w=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,m=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|resource|\[native).*?)(?::(\d+))?(?::(\d+))?\s*$/i,v=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,E=f.stack.split(`
`),T=[],I,O;/^(.*) is undefined$/.exec(f.message);for(var R=0,j=E.length;R<j;++R){if(I=w.exec(E[R])){var H=I[2]&&I[2].indexOf("native")!==-1;O={url:H?null:I[2],func:I[1]||c,args:H?[I[2]]:[],line:I[3]?+I[3]:null,column:I[4]?+I[4]:null}}else if(I=v.exec(E[R]))O={url:I[2],func:I[1]||c,args:[],line:+I[3],column:I[4]?+I[4]:null};else if(I=m.exec(E[R]))O={url:I[3],func:I[1]||c,args:I[2]?I[2].split(","):[],line:I[4]?+I[4]:null,column:I[5]?+I[5]:null};else continue;!O.func&&O.line&&(O.func=c),T.push(O)}return T.length?(!T[0].column&&typeof f.columnNumber!="undefined"&&(T[0].column=f.columnNumber+1),{name:f.name,message:f.message,url:h(),stack:T}):null}}function g(f,w,m,v){var E={url:w,line:m};if(E.url&&E.line){if(f.incomplete=!1,E.func||(E.func=c),f.stack.length>0&&f.stack[0].url===E.url){if(f.stack[0].line===E.line)return!1;if(!f.stack[0].line&&f.stack[0].func===E.func)return f.stack[0].line=E.line,!1}return f.stack.unshift(E),f.partial=!0,!0}else f.incomplete=!0;return!1}function S(f,w){for(var m=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,v=[],E={},T=!1,I,O,R=S.caller;R&&!T;R=R.caller)if(!(R===b||R===o.report)){if(O={url:null,func:c,line:null,column:null},R.name?O.func=R.name:(I=m.exec(R.toString()))&&(O.func=I[1]),typeof O.func=="undefined")try{O.func=I.input.substring(0,I.input.indexOf("{"))}catch{}E[""+R]?T=!0:E[""+R]=!0,v.push(O)}w&&v.splice(0,w);var j={name:f.name,message:f.message,url:h(),stack:v};return g(j,f.sourceURL||f.fileName,f.line||f.lineNumber,f.message||f.description),j}function b(f,w){var m=null;w=w==null?0:+w;try{if(m=p(f),m)return m}catch(v){if(o.debug)throw v}try{if(m=S(f,w+1),m)return m}catch(v){if(o.debug)throw v}return{name:f.name,message:f.message,url:h()}}return b.augmentStackTraceWithInitialElement=g,b.computeStackTraceFromStackProp=p,b}();var y=o;r.default=y,n.exports=r.default}).call(this,s("./node_modules/webpack/buildin/global.js"))},"./packages/@apphub:logrocket-utils/src/constants/nps.js":function(n,r,s){Object.defineProperty(r,"__esModule",{value:!0}),r.DELIGHTED_FEEDBACK_PREFIX=r.DELIGHTED_RESPONSES_REGEX=r.WOOTRIC_RESPONSES_REGEX=void 0;var i=/^https:\/\/production.wootric.com\/responses/;r.WOOTRIC_RESPONSES_REGEX=i;var o=/^https:\/\/web.delighted.com\/e\/[a-zA-Z-]*\/c/;r.DELIGHTED_RESPONSES_REGEX=o;var a="comment=";r.DELIGHTED_FEEDBACK_PREFIX=a},"./packages/@apphub:logrocket-utils/src/enhanceFunc.js":function(n,r,s){Object.defineProperty(r,"__esModule",{value:!0}),r.default=i;function i(o,a,u){var c=o[a];function l(){for(var h,y=arguments.length,d=new Array(y),p=0;p<y;p++)d[p]=arguments[p];return c&&(h=c.apply(this,d)),u.apply(this,d),h}return o[a]=l,function(){o[a]=c}}n.exports=r.default},"./packages/@apphub:logrocket-utils/src/mapValues.js":function(n,r,s){Object.defineProperty(r,"__esModule",{value:!0}),r.default=i;function i(o,a){if(o==null)return{};var u={};return Object.keys(o).forEach(function(c){u[c]=a(o[c])}),u}n.exports=r.default},"./packages/@apphub:logrocket-utils/src/startsWith.js":function(n,r,s){Object.defineProperty(r,"__esModule",{value:!0}),r.default=i;function i(o,a){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;return o&&a&&o.substring(u,u+a.length)===a}n.exports=r.default},"./packages/@apphub:now/src/index.js":function(n,r,s){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=Date.now.bind(Date),o=i(),a=typeof performance!="undefined"&&performance.now?performance.now.bind(performance):function(){return i()-o};r.default=a,n.exports=r.default},"./packages/logrocket/src/LogRocket.js":function(n,r,s){var i=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(r,"__esModule",{value:!0}),r.default=r.MAX_QUEUE_SIZE=void 0;var o=i(s("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=i(s("./node_modules/@babel/runtime/helpers/createClass.js")),u=i(s("./node_modules/@babel/runtime/helpers/defineProperty.js")),c=i(s("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=i(s("./packages/@apphub:logrocket-network/src/index.js")),h=s("./packages/@apphub:logrocket-exceptions/src/index.js"),y=i(s("./packages/@apphub:logrocket-console/src/index.js")),d=s("./packages/@apphub:logrocket-redux/src/index.js");function p(w,m){var v=Object.keys(w);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(w);m&&(E=E.filter(function(T){return Object.getOwnPropertyDescriptor(w,T).enumerable})),v.push.apply(v,E)}return v}function g(w){for(var m=1;m<arguments.length;m++){var v=arguments[m]!=null?arguments[m]:{};m%2?p(Object(v),!0).forEach(function(E){(0,u.default)(w,E,v[E])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(v)):p(Object(v)).forEach(function(E){Object.defineProperty(w,E,Object.getOwnPropertyDescriptor(v,E))})}return w}var S=1e3;r.MAX_QUEUE_SIZE=S;var b=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=m.ingestServer,E=(0,c.default)(m,["ingestServer"]);return v?g({serverURL:"".concat(v,"/i"),statsURL:"".concat(v,"/s")},E):E},f=function(){function w(){var m=this;(0,o.default)(this,w),this._buffer=[],["log","info","warn","error","debug"].forEach(function(v){m[v]=function(){for(var E=arguments.length,T=new Array(E),I=0;I<E;I++)T[I]=arguments[I];m.addEvent("lr.core.LogEvent",function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return v==="error"&&O.shouldAggregateConsoleErrors&&h.Capture.captureMessage(m,T[0],{},!0),{logLevel:v.toUpperCase(),args:T}},{shouldCaptureStackTrace:!0})}}),this._isInitialized=!1,this._installed=[],window._lr_surl_cb=this.getSessionURL.bind(this)}return(0,a.default)(w,[{key:"addEvent",value:function(v,E){var T=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},I=Date.now();this._run(function(O){O.addEvent(v,E,g(g({},T),{},{timeOverride:I}))})}},{key:"onLogger",value:function(v){for(this._logger=v;this._buffer.length>0;){var E=this._buffer.shift();E(this._logger)}}},{key:"_run",value:function(v){if(!this._isDisabled)if(this._logger)v(this._logger);else{if(this._buffer.length>=S){this._isDisabled=!0,console.warn("LogRocket: script did not load. Check that you have a valid network connection."),this.uninstall();return}this._buffer.push(v.bind(this))}}},{key:"init",value:function(v){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this._isInitialized){var T=E.shouldAugmentNPS,I=T===void 0?!0:T,O=E.shouldParseXHRBlob,R=O===void 0?!1:O;this._installed.push((0,h.registerExceptions)(this)),this._installed.push((0,l.default)(this,{shouldAugmentNPS:!!I,shouldParseXHRBlob:!!R})),this._installed.push((0,y.default)(this)),this._isInitialized=!0,this._run(function(j){j.init(v,b(E))})}}},{key:"start",value:function(){this._run(function(v){v.start()})}},{key:"uninstall",value:function(){this._installed.forEach(function(v){return v()}),this._buffer=[],this._run(function(v){v.uninstall()})}},{key:"identify",value:function(v,E){this._run(function(T){T.identify(v,E)})}},{key:"startNewSession",value:function(){this._run(function(v){v.startNewSession()})}},{key:"track",value:function(v,E){this._run(function(T){T.track(v,E)})}},{key:"getSessionURL",value:function(v){if(typeof v!="function")throw new Error("LogRocket: must pass callback to getSessionURL()");this._run(function(E){E.getSessionURL?E.getSessionURL(v):v(E.recordingURL)})}},{key:"getVersion",value:function(v){this._run(function(E){v(E.version)})}},{key:"captureMessage",value:function(v){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};h.Capture.captureMessage(this,v,E)}},{key:"captureException",value:function(v){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};h.Capture.captureException(this,v,E)}},{key:"version",get:function(){return this._logger&&this._logger.version}},{key:"sessionURL",get:function(){return this._logger&&this._logger.recordingURL}},{key:"recordingURL",get:function(){return this._logger&&this._logger.recordingURL}},{key:"recordingID",get:function(){return this._logger&&this._logger.recordingID}},{key:"threadID",get:function(){return this._logger&&this._logger.threadID}},{key:"tabID",get:function(){return this._logger&&this._logger.tabID}},{key:"reduxEnhancer",value:function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return(0,d.createEnhancer)(this,v)}},{key:"reduxMiddleware",value:function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return(0,d.createMiddleware)(this,v)}},{key:"isDisabled",get:function(){return!!(this._isDisabled||this._logger&&this._logger._isDisabled)}}]),w}();r.default=f},"./packages/logrocket/src/makeLogRocket.js":function(n,r,s){var i=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(r,"__esModule",{value:!0}),r.default=c;var o=i(s("./packages/logrocket/src/LogRocket.js")),a="LogRocket does not yet support React Native.",u=function(){return{init:function(){},uninstall:function(){},log:function(){},info:function(){},warn:function(){},error:function(){},debug:function(){},addEvent:function(){},identify:function(){},start:function(){},get threadID(){return null},get recordingID(){return null},get recordingURL(){return null},reduxEnhancer:function(){return function(y){return function(){return y.apply(void 0,arguments)}}},reduxMiddleware:function(){return function(){return function(y){return function(d){return y(d)}}}},track:function(){},getSessionURL:function(){},getVersion:function(){},startNewSession:function(){},onLogger:function(){},setClock:function(){},captureMessage:function(){},captureException:function(){}}};function c(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};if(typeof navigator!="undefined"&&navigator.product==="ReactNative")throw new Error(a);if(typeof window!="undefined"){if(window._disableLogRocket)return u();if(window.MutationObserver&&window.WeakMap){window._lrMutationObserver=window.MutationObserver;var h=new o.default;return l(h),h}}return u()}n.exports=r.default},"./packages/logrocket/src/module-npm.js":function(n,r,s){var i=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=i(s("./packages/logrocket/src/setup.js")),a=(0,o.default)(),u=a;r.default=u,n.exports=r.default},"./packages/logrocket/src/setup.js":function(n,r,s){var i=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(r,"__esModule",{value:!0}),r.default=c;var o=i(s("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=i(s("./packages/logrocket/src/makeLogRocket.js")),u={"cdn.logrocket.io":"https://r.logrocket.io","cdn.lr-ingest.io":"https://r.lr-ingest.io","cdn.lr-in.com":"https://r.lr-in.com","cdn-staging.logrocket.io":"https://staging-i.logrocket.io","cdn-staging.lr-ingest.io":"https://staging-i.lr-ingest.io","cdn-staging.lr-in.com":"https://staging-i.lr-in.com"};function c(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},h=l.enterpriseServer,y=l.sdkVersion,d=y===void 0?"2.2.1":y,p=(0,o.default)(l,["enterpriseServer","sdkVersion"]),g="https://cdn.logrocket.io",S;if(d==="script")try{var b=document.currentScript,f=b.src.match(/^(https?:\/\/([^\\]+))\/.+$/),w=f&&f[2];w&&u[w]&&(g=f&&f[1],S=u[w])}catch{}else g="https://cdn.lr-in.com",S="https://r.lr-in.com";var m=p.sdkServer||h,v=p.ingestServer||h||S,E=(0,a.default)(function(){var T=document.createElement("script");v&&(typeof window.__SDKCONFIG__=="undefined"&&(window.__SDKCONFIG__={}),window.__SDKCONFIG__.serverURL="".concat(v,"/i"),window.__SDKCONFIG__.statsURL="".concat(v,"/s")),m?T.src="".concat(m,"/logger.min.js"):window.__SDKCONFIG__&&window.__SDKCONFIG__.loggerURL?T.src=window.__SDKCONFIG__.loggerURL:window._lrAsyncScript?T.src=window._lrAsyncScript:T.src="".concat(g,"/logger-1.min.js"),T.async=!0,document.head.appendChild(T),T.onload=function(){typeof window._LRLogger=="function"?E.onLogger(new window._LRLogger({sdkVersion:d})):(console.warn("LogRocket: script execution has been blocked by a product or service."),E.uninstall())},T.onerror=function(){console.warn("LogRocket: script could not load. Check that you have a valid network connection."),E.uninstall()}});return E}n.exports=r.default},0:function(n,r,s){n.exports=s("./packages/logrocket/src/module-npm.js")}})})})(Ii);var Af=Ia(Ii.exports);/**
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
 */const Ci=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ca=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Aa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let y=(a&15)<<2|c>>6,d=c&63;u||(d=64,o||(y=64)),r.push(n[l],n[h],n[y],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ci(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ca(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw Error();const y=i<<2|a>>4;if(r.push(y),c!==64){const d=a<<4&240|c>>2;if(r.push(d),h!==64){const p=c<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ka=function(t){const e=Ci(t);return Aa.encodeByteArray(e,!0)},Ai=function(t){return ka(t).replace(/\./g,"")};/**
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
 */class _a{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function bn(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Da(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bn())}function Ra(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Oa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Na(){return bn().indexOf("Electron/")>=0}function xa(){const t=bn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function La(){return bn().indexOf("MSAppHost/")>=0}function Pa(){return typeof indexedDB=="object"}function Ma(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const ja="FirebaseError";class Sn extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=ja,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ki.prototype.create)}}class ki{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Fa(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Sn(s,a,r)}}function Fa(t,e){return t.replace(Va,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Va=/\{\$([^}]+)}/g;function ir(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ts(i)&&Ts(o)){if(!ir(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ts(t){return t!==null&&typeof t=="object"}/**
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
 */function Ua(t){return t&&t._delegate?t._delegate:t}/**
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
 */function yt(t,e){return new Promise((n,r)=>{t.onsuccess=s=>{n(s.target.result)},t.onerror=s=>{var i;r(`${e}: ${(i=s.target.error)===null||i===void 0?void 0:i.message}`)}})}class Is{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n){return new _i(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new Di(this._db.createObjectStore(e,n))}close(){this._db.close()}}class _i{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new Di(this._transaction.objectStore(e))}}class Di{constructor(e){this._store=e}index(e){return new Cs(this._store.index(e))}createIndex(e,n,r){return new Cs(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return yt(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return yt(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return yt(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return yt(e,"Error clearing IndexedDB object store")}}class Cs{constructor(e){this._index=e}get(e){const n=this._index.get(e);return yt(n,"Error reading from IndexedDB")}}function Ba(t,e,n){return new Promise((r,s)=>{try{const i=indexedDB.open(t,e);i.onsuccess=o=>{r(new Is(o.target.result))},i.onerror=o=>{var a;s(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},i.onupgradeneeded=o=>{n(new Is(i.result),o.oldVersion,o.newVersion,new _i(i.transaction))}}catch(i){s(`Error opening indexedDB: ${i.message}`)}})}class Tt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fe="[DEFAULT]";/**
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
 */class $a{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _a;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qa(e))try{this.getOrInitializeService({instanceIdentifier:Fe})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Fe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fe){return this.instances.has(e)}getOptions(e=Fe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ha(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fe){return this.component?this.component.multipleInstances?e:Fe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ha(t){return t===Fe?void 0:t}function qa(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ka{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $a(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const Ga={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},za=K.INFO,Wa={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},Xa=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Wa[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ri{constructor(e){this.name=e,this._logLevel=za,this._logHandler=Xa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ga[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}/**
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
 */class Qa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ya(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ya(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const or="@firebase/app",As="0.7.19";/**
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
 */const xr=new Ri("@firebase/app"),Ja="@firebase/app-compat",Za="@firebase/analytics-compat",eu="@firebase/analytics",tu="@firebase/app-check-compat",nu="@firebase/app-check",ru="@firebase/auth",su="@firebase/auth-compat",iu="@firebase/database",ou="@firebase/database-compat",au="@firebase/functions",uu="@firebase/functions-compat",cu="@firebase/installations",lu="@firebase/installations-compat",hu="@firebase/messaging",fu="@firebase/messaging-compat",du="@firebase/performance",pu="@firebase/performance-compat",gu="@firebase/remote-config",mu="@firebase/remote-config-compat",yu="@firebase/storage",vu="@firebase/storage-compat",wu="@firebase/firestore",Eu="@firebase/firestore-compat",bu="firebase",Su="9.6.9";/**
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
 */const Oi="[DEFAULT]",Tu={[or]:"fire-core",[Ja]:"fire-core-compat",[eu]:"fire-analytics",[Za]:"fire-analytics-compat",[nu]:"fire-app-check",[tu]:"fire-app-check-compat",[ru]:"fire-auth",[su]:"fire-auth-compat",[iu]:"fire-rtdb",[ou]:"fire-rtdb-compat",[au]:"fire-fn",[uu]:"fire-fn-compat",[cu]:"fire-iid",[lu]:"fire-iid-compat",[hu]:"fire-fcm",[fu]:"fire-fcm-compat",[du]:"fire-perf",[pu]:"fire-perf-compat",[gu]:"fire-rc",[mu]:"fire-rc-compat",[yu]:"fire-gcs",[vu]:"fire-gcs-compat",[wu]:"fire-fst",[Eu]:"fire-fst-compat","fire-js":"fire-js",[bu]:"fire-js-all"};/**
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
 */const on=new Map,ar=new Map;function Iu(t,e){try{t.container.addComponent(e)}catch(n){xr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function an(t){const e=t.name;if(ar.has(e))return xr.debug(`There were multiple attempts to register component ${e}.`),!1;ar.set(e,t);for(const n of on.values())Iu(n,t);return!0}function Cu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Au={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},He=new ki("app","Firebase",Au);/**
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
 */class ku{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw He.create("app-deleted",{appName:this._name})}}/**
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
 */const _u=Su;function kf(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Oi,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw He.create("bad-app-name",{appName:String(r)});const s=on.get(r);if(s){if(ir(t,s.options)&&ir(n,s.config))return s;throw He.create("duplicate-app",{appName:r})}const i=new Ka(r);for(const a of ar.values())i.addComponent(a);const o=new ku(t,n,i);return on.set(r,o),o}function Du(t=Oi){const e=on.get(t);if(!e)throw He.create("no-app",{appName:t});return e}function et(t,e,n){var r;let s=(r=Tu[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xr.warn(a.join(" "));return}an(new Tt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Ru="firebase-heartbeat-database",Ou=1,It="firebase-heartbeat-store";let Kn=null;function Ni(){return Kn||(Kn=Ba(Ru,Ou,(t,e)=>{switch(e){case 0:t.createObjectStore(It)}}).catch(t=>{throw He.create("storage-open",{originalErrorMessage:t.message})})),Kn}async function Nu(t){try{return(await Ni()).transaction(It).objectStore(It).get(xi(t))}catch(e){throw He.create("storage-get",{originalErrorMessage:e.message})}}async function ks(t,e){try{const r=(await Ni()).transaction(It,"readwrite");return await r.objectStore(It).put(e,xi(t)),r.complete}catch(n){throw He.create("storage-set",{originalErrorMessage:n.message})}}function xi(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xu=1024,Lu=30*24*60*60*1e3;class Pu{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ju(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=_s();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Lu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_s(),{heartbeatsToSend:n,unsentEntries:r}=Mu(this._heartbeatsCache.heartbeats),s=Ai(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function _s(){return new Date().toISOString().substring(0,10)}function Mu(t,e=xu){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ds(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ds(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ju{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pa()?Ma().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Nu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ks(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ks(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ds(t){return Ai(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Fu(t){an(new Tt("platform-logger",e=>new Qa(e),"PRIVATE")),an(new Tt("heartbeat",e=>new Pu(e),"PRIVATE")),et(or,As,t),et(or,As,"esm2017"),et("fire-js","")}Fu("");var Vu="firebase",Uu="9.6.9";/**
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
 */et(Vu,Uu,"app");var Bu=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},D,Lr=Lr||{},L=Bu||self;function un(){}function ur(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function jt(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function $u(t){return Object.prototype.hasOwnProperty.call(t,Gn)&&t[Gn]||(t[Gn]=++Hu)}var Gn="closure_uid_"+(1e9*Math.random()>>>0),Hu=0;function qu(t,e,n){return t.call.apply(t.bind,arguments)}function Ku(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ue(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ue=qu:ue=Ku,ue.apply(null,arguments)}function Yt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function de(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Me(){this.s=this.s,this.o=this.o}var Gu=0,zu={};Me.prototype.s=!1;Me.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Gu!=0)){var t=$u(this);delete zu[t]}};Me.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Li=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Pi=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s=typeof t=="string"?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function Wu(t){e:{var e=Vc;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Rs(t){return Array.prototype.concat.apply([],arguments)}function Pr(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function cn(t){return/^[\s\xa0]*$/.test(t)}var Os=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function me(t,e){return t.indexOf(e)!=-1}function zn(t,e){return t<e?-1:t>e?1:0}var ye;e:{var Ns=L.navigator;if(Ns){var xs=Ns.userAgent;if(xs){ye=xs;break e}}ye=""}function Mr(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Mi(t){const e={};for(const n in t)e[n]=t[n];return e}var Ls="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ji(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Ls.length;i++)n=Ls[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function jr(t){return jr[" "](t),t}jr[" "]=un;function Xu(t){var e=Ju;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Qu=me(ye,"Opera"),rt=me(ye,"Trident")||me(ye,"MSIE"),Fi=me(ye,"Edge"),cr=Fi||rt,Vi=me(ye,"Gecko")&&!(me(ye.toLowerCase(),"webkit")&&!me(ye,"Edge"))&&!(me(ye,"Trident")||me(ye,"MSIE"))&&!me(ye,"Edge"),Yu=me(ye.toLowerCase(),"webkit")&&!me(ye,"Edge");function Ui(){var t=L.document;return t?t.documentMode:void 0}var ln;e:{var Wn="",Xn=function(){var t=ye;if(Vi)return/rv:([^\);]+)(\)|;)/.exec(t);if(Fi)return/Edge\/([\d\.]+)/.exec(t);if(rt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Yu)return/WebKit\/(\S+)/.exec(t);if(Qu)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Xn&&(Wn=Xn?Xn[1]:""),rt){var Qn=Ui();if(Qn!=null&&Qn>parseFloat(Wn)){ln=String(Qn);break e}}ln=Wn}var Ju={};function Zu(){return Xu(function(){let t=0;const e=Os(String(ln)).split("."),n=Os("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=zn(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||zn(s[2].length==0,i[2].length==0)||zn(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var lr;if(L.document&&rt){var Ps=Ui();lr=Ps||parseInt(ln,10)||void 0}else lr=void 0;var ec=lr,tc=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{L.addEventListener("test",un,e),L.removeEventListener("test",un,e)}catch{}return t}();function ge(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};function Ct(t,e){if(ge.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Vi){e:{try{jr(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:nc[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ct.Z.h.call(this)}}de(Ct,ge);var nc={2:"touch",3:"pen",4:"mouse"};Ct.prototype.h=function(){Ct.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ft="closure_listenable_"+(1e6*Math.random()|0),rc=0;function sc(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++rc,this.ca=this.fa=!1}function Tn(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function In(t){this.src=t,this.g={},this.h=0}In.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=fr(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new sc(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};function hr(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Li(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Tn(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function fr(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}var Fr="closure_lm_"+(1e6*Math.random()|0),Yn={};function Bi(t,e,n,r,s){if(r&&r.once)return Hi(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Bi(t,e[i],n,r,s);return null}return n=Br(n),t&&t[Ft]?t.N(e,n,jt(r)?!!r.capture:!!r,s):$i(t,e,n,!1,r,s)}function $i(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=jt(s)?!!s.capture:!!s,a=Ur(t);if(a||(t[Fr]=a=new In(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=ic(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)tc||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Ki(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ic(){function t(n){return e.call(t.src,t.listener,n)}var e=oc;return t}function Hi(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Hi(t,e[i],n,r,s);return null}return n=Br(n),t&&t[Ft]?t.O(e,n,jt(r)?!!r.capture:!!r,s):$i(t,e,n,!0,r,s)}function qi(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)qi(t,e[i],n,r,s);else r=jt(r)?!!r.capture:!!r,n=Br(n),t&&t[Ft]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=fr(i,n,r,s),-1<n&&(Tn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ur(t))&&(e=t.g[e.toString()],t=-1,e&&(t=fr(e,n,r,s)),(n=-1<t?e[t]:null)&&Vr(n))}function Vr(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Ft])hr(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ki(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ur(e))?(hr(n,t),n.h==0&&(n.src=null,e[Fr]=null)):Tn(t)}}}function Ki(t){return t in Yn?Yn[t]:Yn[t]="on"+t}function oc(t,e){if(t.ca)t=!0;else{e=new Ct(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Vr(t),t=n.call(r,e)}return t}function Ur(t){return t=t[Fr],t instanceof In?t:null}var Jn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Br(t){return typeof t=="function"?t:(t[Jn]||(t[Jn]=function(e){return t.handleEvent(e)}),t[Jn])}function oe(){Me.call(this),this.i=new In(this),this.P=this,this.I=null}de(oe,Me);oe.prototype[Ft]=!0;oe.prototype.removeEventListener=function(t,e,n,r){qi(this,t,e,n,r)};function ce(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new ge(e,t);else if(e instanceof ge)e.target=e.target||t;else{var s=e;e=new ge(r,t),ji(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Jt(o,r,!0,e)&&s}if(o=e.g=t,s=Jt(o,r,!0,e)&&s,s=Jt(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Jt(o,r,!1,e)&&s}oe.prototype.M=function(){if(oe.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Tn(n[r]);delete t.g[e],t.h--}}this.I=null};oe.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};oe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Jt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&hr(t.i,o),s=a.call(u,r)!==!1&&s}}return s&&!r.defaultPrevented}var $r=L.JSON.stringify;function ac(){var t=zi;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class uc{constructor(){this.h=this.g=null}add(e,n){const r=Gi.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Gi=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new cc,t=>t.reset());class cc{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function lc(t){L.setTimeout(()=>{throw t},0)}function Hr(t,e){dr||hc(),pr||(dr(),pr=!0),zi.add(t,e)}var dr;function hc(){var t=L.Promise.resolve(void 0);dr=function(){t.then(fc)}}var pr=!1,zi=new uc;function fc(){for(var t;t=ac();){try{t.h.call(t.g)}catch(n){lc(n)}var e=Gi;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}pr=!1}function Cn(t,e){oe.call(this),this.h=t||1,this.g=e||L,this.j=ue(this.kb,this),this.l=Date.now()}de(Cn,oe);D=Cn.prototype;D.da=!1;D.S=null;D.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ce(this,"tick"),this.da&&(qr(this),this.start()))}};D.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function qr(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}D.M=function(){Cn.Z.M.call(this),qr(this),delete this.g};function Kr(t,e,n){if(typeof t=="function")n&&(t=ue(t,n));else if(t&&typeof t.handleEvent=="function")t=ue(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:L.setTimeout(t,e||0)}function Wi(t){t.g=Kr(()=>{t.g=null,t.i&&(t.i=!1,Wi(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class dc extends Me{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Wi(this)}M(){super.M(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function At(t){Me.call(this),this.h=t,this.g={}}de(At,Me);var Ms=[];function Xi(t,e,n,r){Array.isArray(n)||(n&&(Ms[0]=n.toString()),n=Ms);for(var s=0;s<n.length;s++){var i=Bi(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Qi(t){Mr(t.g,function(e,n){this.g.hasOwnProperty(n)&&Vr(e)},t),t.g={}}At.prototype.M=function(){At.Z.M.call(this),Qi(this)};At.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function An(){this.g=!0}An.prototype.Aa=function(){this.g=!1};function pc(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+c+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function gc(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Je(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+yc(t,n)+(r?" "+r:"")})}function mc(t,e){t.info(function(){return"TIMEOUT: "+e})}An.prototype.info=function(){};function yc(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return $r(n)}catch{return e}}var Qe={},js=null;function kn(){return js=js||new oe}Qe.Ma="serverreachability";function Yi(t){ge.call(this,Qe.Ma,t)}de(Yi,ge);function kt(t){const e=kn();ce(e,new Yi(e,t))}Qe.STAT_EVENT="statevent";function Ji(t,e){ge.call(this,Qe.STAT_EVENT,t),this.stat=e}de(Ji,ge);function ve(t){const e=kn();ce(e,new Ji(e,t))}Qe.Na="timingevent";function Zi(t,e){ge.call(this,Qe.Na,t),this.size=e}de(Zi,ge);function Vt(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){t()},e)}var _n={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},eo={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Gr(){}Gr.prototype.h=null;function Fs(t){return t.h||(t.h=t.i())}function to(){}var Ut={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function zr(){ge.call(this,"d")}de(zr,ge);function Wr(){ge.call(this,"c")}de(Wr,ge);var gr;function Dn(){}de(Dn,Gr);Dn.prototype.g=function(){return new XMLHttpRequest};Dn.prototype.i=function(){return{}};gr=new Dn;function Bt(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new At(this),this.P=vc,t=cr?125:void 0,this.W=new Cn(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new no}function no(){this.i=null,this.g="",this.h=!1}var vc=45e3,mr={},hn={};D=Bt.prototype;D.setTimeout=function(t){this.P=t};function yr(t,e,n){t.K=1,t.v=On(Oe(e)),t.s=n,t.U=!0,ro(t,null)}function ro(t,e){t.F=Date.now(),$t(t),t.A=Oe(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),lo(n.h,"t",r),t.C=0,n=t.l.H,t.h=new no,t.g=Oo(t.l,n?e:null,!t.s),0<t.O&&(t.L=new dc(ue(t.Ia,t,t.g),t.O)),Xi(t.V,t.g,"readystatechange",t.gb),e=t.H?Mi(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),kt(1),pc(t.j,t.u,t.A,t.m,t.X,t.s)}D.gb=function(t){t=t.target;const e=this.L;e&&De(t)==3?e.l():this.Ia(t)};D.Ia=function(t){try{if(t==this.g)e:{const l=De(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||cr||this.g&&(this.h.h||this.g.ga()||$s(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?kt(3):kt(2)),Rn(this);var n=this.g.ba();this.N=n;t:if(so(this)){var r=$s(this.g);t="";var s=r.length,i=De(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Ve(this),wt(this);var o="";break t}this.h.i=new L.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,gc(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!cn(a)){var c=a;break t}}c=null}if(n=c)Je(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,vr(this,n);else{this.i=!1,this.o=3,ve(12),Ve(this),wt(this);break e}}this.U?(io(this,l,o),cr&&this.i&&l==3&&(Xi(this.V,this.W,"tick",this.fb),this.W.start())):(Je(this.j,this.m,o,null),vr(this,o)),l==4&&Ve(this),this.i&&!this.I&&(l==4?ko(this.l,this):(this.i=!1,$t(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ve(12)):(this.o=0,ve(13)),Ve(this),wt(this)}}}catch{}finally{}};function so(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function io(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=wc(t,n),s==hn){e==4&&(t.o=4,ve(14),r=!1),Je(t.j,t.m,null,"[Incomplete Response]");break}else if(s==mr){t.o=4,ve(15),Je(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Je(t.j,t.m,s,null),vr(t,s);so(t)&&s!=hn&&s!=mr&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ve(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),rs(e),e.L=!0,ve(11))):(Je(t.j,t.m,n,"[Invalid Chunked Response]"),Ve(t),wt(t))}D.fb=function(){if(this.g){var t=De(this.g),e=this.g.ga();this.C<e.length&&(Rn(this),io(this,t,e),this.i&&t!=4&&$t(this))}};function wc(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?hn:(n=Number(e.substring(n,r)),isNaN(n)?mr:(r+=1,r+n>e.length?hn:(e=e.substr(r,n),t.C=r+n,e)))}D.cancel=function(){this.I=!0,Ve(this)};function $t(t){t.Y=Date.now()+t.P,oo(t,t.P)}function oo(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Vt(ue(t.eb,t),e)}function Rn(t){t.B&&(L.clearTimeout(t.B),t.B=null)}D.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(mc(this.j,this.A),this.K!=2&&(kt(3),ve(17)),Ve(this),this.o=2,wt(this)):oo(this,this.Y-t)};function wt(t){t.l.G==0||t.I||ko(t.l,t)}function Ve(t){Rn(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,qr(t.W),Qi(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function vr(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||wr(n.i,t))){if(n.I=t.N,!t.J&&wr(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)gn(n),Ln(n);else break e;ns(n),ve(18)}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&n.A==0&&!n.v&&(n.v=Vt(ue(n.ab,n),6e3));if(1>=po(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Ue(n,11)}else if((t.J||n.g==t)&&gn(n),!cn(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const l=c[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=c[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const y=c[5];y!=null&&typeof y=="number"&&0<y&&(r=1.5*y,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var i=r.i;!i.g&&(me(p,"spdy")||me(p,"quic")||me(p,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Yr(i,i.h),i.h=null))}if(r.D){const g=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(r.sa=g,X(r.F,r.D,g))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Ro(r,r.H?r.la:null,r.W),o.J){go(r.i,o);var a=o,u=r.K;u&&a.setTimeout(u),a.B&&(Rn(a),$t(a)),r.g=o}else Co(r);0<n.l.length&&Pn(n)}else c[0]!="stop"&&c[0]!="close"||Ue(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ue(n,7):ts(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}kt(4)}catch{}}function Ec(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(ur(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Xr(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ur(t)||typeof t=="string")Pi(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(ur(t)||typeof t=="string"){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=Ec(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function ct(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof ct)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}D=ct.prototype;D.R=function(){Qr(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};D.T=function(){return Qr(this),this.g.concat()};function Qr(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];qe(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],qe(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}D.get=function(t,e){return qe(this.h,t)?this.h[t]:e};D.set=function(t,e){qe(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};D.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};function qe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var ao=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function bc(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ke(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ke){this.g=e!==void 0?e:t.g,fn(this,t.j),this.s=t.s,dn(this,t.i),pn(this,t.m),this.l=t.l,e=t.h;var n=new _t;n.i=e.i,e.g&&(n.g=new ct(e.g),n.h=e.h),Vs(this,n),this.o=t.o}else t&&(n=String(t).match(ao))?(this.g=!!e,fn(this,n[1]||"",!0),this.s=Et(n[2]||""),dn(this,n[3]||"",!0),pn(this,n[4]),this.l=Et(n[5]||"",!0),Vs(this,n[6]||"",!0),this.o=Et(n[7]||"")):(this.g=!!e,this.h=new _t(null,this.g))}Ke.prototype.toString=function(){var t=[],e=this.j;e&&t.push(vt(e,Us,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(vt(e,Us,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(vt(n,n.charAt(0)=="/"?Ac:Cc,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",vt(n,_c)),t.join("")};function Oe(t){return new Ke(t)}function fn(t,e,n){t.j=n?Et(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function dn(t,e,n){t.i=n?Et(e,!0):e}function pn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Vs(t,e,n){e instanceof _t?(t.h=e,Dc(t.h,t.g)):(n||(e=vt(e,kc)),t.h=new _t(e,t.g))}function X(t,e,n){t.h.set(e,n)}function On(t){return X(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Sc(t){return t instanceof Ke?Oe(t):new Ke(t,void 0)}function Tc(t,e,n,r){var s=new Ke(null,void 0);return t&&fn(s,t),e&&dn(s,e),n&&pn(s,n),r&&(s.l=r),s}function Et(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function vt(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Ic),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ic(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Us=/[#\/\?@]/g,Cc=/[#\?:]/g,Ac=/[#\?]/g,kc=/[#\?@]/g,_c=/#/g;function _t(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function je(t){t.g||(t.g=new ct,t.h=0,t.i&&bc(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=_t.prototype;D.add=function(t,e){je(this),this.i=null,t=lt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function uo(t,e){je(t),e=lt(t,e),qe(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,qe(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Qr(t)))}function co(t,e){return je(t),e=lt(t,e),qe(t.g.h,e)}D.forEach=function(t,e){je(this),this.g.forEach(function(n,r){Pi(n,function(s){t.call(e,s,r,this)},this)},this)};D.T=function(){je(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n};D.R=function(t){je(this);var e=[];if(typeof t=="string")co(this,t)&&(e=Rs(e,this.g.get(lt(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Rs(e,t[n])}return e};D.set=function(t,e){return je(this),this.i=null,t=lt(this,t),co(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function lo(t,e,n){uo(t,e),0<n.length&&(t.i=null,t.g.set(lt(t,e),Pr(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};function lt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Dc(t,e){e&&!t.j&&(je(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(uo(this,r),lo(this,s,n))},t)),t.j=e}var Rc=class{constructor(t,e){this.h=t,this.g=e}};function ho(t){this.l=t||Oc,L.PerformanceNavigationTiming?(t=L.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(L.g&&L.g.Ea&&L.g.Ea()&&L.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Oc=10;function fo(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function po(t){return t.h?1:t.g?t.g.size:0}function wr(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Yr(t,e){t.g?t.g.add(e):t.h=e}function go(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ho.prototype.cancel=function(){if(this.i=mo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function mo(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Pr(t.i)}function Jr(){}Jr.prototype.stringify=function(t){return L.JSON.stringify(t,void 0)};Jr.prototype.parse=function(t){return L.JSON.parse(t,void 0)};function Nc(){this.g=new Jr}function xc(t,e,n){const r=n||"";try{Xr(t,function(s,i){let o=s;jt(s)&&(o=$r(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function Lc(t,e){const n=new An;if(L.Image){const r=new Image;r.onload=Yt(Zt,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Yt(Zt,n,r,"TestLoadImage: error",!1,e),r.onabort=Yt(Zt,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Yt(Zt,n,r,"TestLoadImage: timeout",!1,e),L.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Zt(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ht(t){this.l=t.$b||null,this.j=t.ib||!1}de(Ht,Gr);Ht.prototype.g=function(){return new Nn(this.l,this.j)};Ht.prototype.i=function(t){return function(){return t}}({});function Nn(t,e){oe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Zr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}de(Nn,oe);var Zr=0;D=Nn.prototype;D.open=function(t,e){if(this.readyState!=Zr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Dt(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||L).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qt(this)),this.readyState=Zr};D.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Dt(this)),this.g&&(this.readyState=3,Dt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof L.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;yo(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function yo(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}D.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?qt(this):Dt(this),this.readyState==3&&yo(this)}};D.Ua=function(t){this.g&&(this.response=this.responseText=t,qt(this))};D.Ta=function(t){this.g&&(this.response=t,qt(this))};D.ha=function(){this.g&&qt(this)};function qt(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Dt(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Dt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Nn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Pc=L.JSON.parse;function ne(t){oe.call(this),this.headers=new ct,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=vo,this.K=this.L=!1}de(ne,oe);var vo="",Mc=/^https?$/i,jc=["POST","PUT"];D=ne.prototype;D.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gr.g(),this.C=this.u?Fs(this.u):Fs(gr),this.g.onreadystatechange=ue(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Bs(this,i);return}t=n||"";const s=new ct(this.headers);r&&Xr(r,function(i,o){s.set(o,i)}),r=Wu(s.T()),n=L.FormData&&t instanceof L.FormData,!(0<=Li(jc,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{bo(this),0<this.B&&((this.K=Fc(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ue(this.pa,this)):this.A=Kr(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Bs(this,i)}};function Fc(t){return rt&&Zu()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function Vc(t){return t.toLowerCase()=="content-type"}D.pa=function(){typeof Lr!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ce(this,"timeout"),this.abort(8))};function Bs(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,wo(t),xn(t)}function wo(t){t.D||(t.D=!0,ce(t,"complete"),ce(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ce(this,"complete"),ce(this,"abort"),xn(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xn(this,!0)),ne.Z.M.call(this)};D.Fa=function(){this.s||(this.F||this.v||this.l?Eo(this):this.cb())};D.cb=function(){Eo(this)};function Eo(t){if(t.h&&typeof Lr!="undefined"&&(!t.C[1]||De(t)!=4||t.ba()!=2)){if(t.v&&De(t)==4)Kr(t.Fa,0,t);else if(ce(t,"readystatechange"),De(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(ao)[1]||null;if(!s&&L.self&&L.self.location){var i=L.self.location.protocol;s=i.substr(0,i.length-1)}r=!Mc.test(s?s.toLowerCase():"")}n=r}if(n)ce(t,"complete"),ce(t,"success");else{t.m=6;try{var o=2<De(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",wo(t)}}finally{xn(t)}}}}function xn(t,e){if(t.g){bo(t);const n=t.g,r=t.C[0]?un:null;t.g=null,t.C=null,e||ce(t,"ready");try{n.onreadystatechange=r}catch{}}}function bo(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(L.clearTimeout(t.A),t.A=null)}function De(t){return t.g?t.g.readyState:0}D.ba=function(){try{return 2<De(this)?this.g.status:-1}catch{return-1}};D.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Pc(e)}};function $s(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case vo:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Da=function(){return this.m};D.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Uc(t){let e="";return Mr(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function es(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Uc(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):X(t,e,n))}function mt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function So(t){this.za=0,this.l=[],this.h=new An,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=mt("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=mt("baseRetryDelayMs",5e3,t),this.$a=mt("retryDelaySeedMs",1e4,t),this.Ya=mt("forwardChannelMaxRetries",2,t),this.ra=mt("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new ho(t&&t.concurrentRequestLimit),this.Ca=new Nc,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}D=So.prototype;D.ma=8;D.G=1;function ts(t){if(To(t),t.G==3){var e=t.V++,n=Oe(t.F);X(n,"SID",t.J),X(n,"RID",e),X(n,"TYPE","terminate"),Kt(t,n),e=new Bt(t,t.h,e,void 0),e.K=2,e.v=On(Oe(n)),n=!1,L.navigator&&L.navigator.sendBeacon&&(n=L.navigator.sendBeacon(e.v.toString(),"")),!n&&L.Image&&(new Image().src=e.v,n=!0),n||(e.g=Oo(e.l,null),e.g.ea(e.v)),e.F=Date.now(),$t(e)}Do(t)}D.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Ln(t){t.g&&(rs(t),t.g.cancel(),t.g=null)}function To(t){Ln(t),t.u&&(L.clearTimeout(t.u),t.u=null),gn(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&L.clearTimeout(t.m),t.m=null)}function Zn(t,e){t.l.push(new Rc(t.Za++,e)),t.G==3&&Pn(t)}function Pn(t){fo(t.i)||t.m||(t.m=!0,Hr(t.Ha,t),t.C=0)}function Bc(t,e){return po(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Vt(ue(t.Ha,t,e),_o(t,t.C)),t.C++,!0)}D.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Bt(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=Mi(i),ji(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Io(this,s,e),n=Oe(this.F),X(n,"RID",t),X(n,"CVER",22),this.D&&X(n,"X-HTTP-Session-Id",this.D),Kt(this,n),this.o&&i&&es(n,this.o,i),Yr(this.i,s),this.Ra&&X(n,"TYPE","init"),this.ja?(X(n,"$req",e),X(n,"SID","null"),s.$=!0,yr(s,n,null)):yr(s,n,e),this.G=2}}else this.G==3&&(t?Hs(this,t):this.l.length==0||fo(this.i)||Hs(this))};function Hs(t,e){var n;e?n=e.m:n=t.V++;const r=Oe(t.F);X(r,"SID",t.J),X(r,"RID",n),X(r,"AID",t.U),Kt(t,r),t.o&&t.s&&es(r,t.o,t.s),n=new Bt(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Io(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Yr(t.i,n),yr(n,r,e)}function Kt(t,e){t.j&&Xr({},function(n,r){X(e,r,n)})}function Io(t,e,n){n=Math.min(t.l.length,n);var r=t.j?ue(t.j.Oa,t.j,t):null;e:{var s=t.l;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<n;u++){let c=s[u].h;const l=s[u].g;if(c-=i,0>c)i=Math.max(0,s[u].h-100),a=!1;else try{xc(l,o,"req"+c+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function Co(t){t.g||t.u||(t.Y=1,Hr(t.Ga,t),t.A=0)}function ns(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Vt(ue(t.Ga,t),_o(t,t.A)),t.A++,!0)}D.Ga=function(){if(this.u=null,Ao(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Vt(ue(this.bb,this),t)}};D.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ve(10),Ln(this),Ao(this))};function rs(t){t.B!=null&&(L.clearTimeout(t.B),t.B=null)}function Ao(t){t.g=new Bt(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Oe(t.oa);X(e,"RID","rpc"),X(e,"SID",t.J),X(e,"CI",t.N?"0":"1"),X(e,"AID",t.U),Kt(t,e),X(e,"TYPE","xmlhttp"),t.o&&t.s&&es(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=On(Oe(e)),n.s=null,n.U=!0,ro(n,t)}D.ab=function(){this.v!=null&&(this.v=null,Ln(this),ns(this),ve(19))};function gn(t){t.v!=null&&(L.clearTimeout(t.v),t.v=null)}function ko(t,e){var n=null;if(t.g==e){gn(t),rs(t),t.g=null;var r=2}else if(wr(t.i,e))n=e.D,go(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=kn(),ce(r,new Zi(r,n,e,s)),Pn(t)}else Co(t);else if(s=e.o,s==3||s==0&&0<t.I||!(r==1&&Bc(t,e)||r==2&&ns(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Ue(t,5);break;case 4:Ue(t,10);break;case 3:Ue(t,6);break;default:Ue(t,2)}}}function _o(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Ue(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=ue(t.jb,t);n||(n=new Ke("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||fn(n,"https"),On(n)),Lc(n.toString(),r)}else ve(2);t.G=0,t.j&&t.j.va(e),Do(t),To(t)}D.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ve(2)):(this.h.info("Failed to ping google.com"),ve(1))};function Do(t){t.G=0,t.I=-1,t.j&&((mo(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Pr(t.l),t.l.length=0),t.j.ua())}function Ro(t,e,n){let r=Sc(n);if(r.i!="")e&&dn(r,e+"."+r.i),pn(r,r.m);else{const s=L.location;r=Tc(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,n)}return t.aa&&Mr(t.aa,function(s,i){X(r,i,s)}),e=t.D,n=t.sa,e&&n&&X(r,e,n),X(r,"VER",t.ma),Kt(t,r),r}function Oo(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new ne(new Ht({ib:!0})):new ne(t.qa),e.L=t.H,e}function No(){}D=No.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Oa=function(){};function mn(){if(rt&&!(10<=Number(ec)))throw Error("Environmental error: no available transport.")}mn.prototype.g=function(t,e){return new Se(t,e)};function Se(t,e){oe.call(this),this.g=new So(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!cn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!cn(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ht(this)}de(Se,oe);Se.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Hr(ue(t.hb,t,e))),ve(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Ro(t,null,t.W),Pn(t)};Se.prototype.close=function(){ts(this.g)};Se.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Zn(this.g,e)}else this.v?(e={},e.__data__=$r(t),Zn(this.g,e)):Zn(this.g,t)};Se.prototype.M=function(){this.g.j=null,delete this.j,ts(this.g),delete this.g,Se.Z.M.call(this)};function xo(t){zr.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}de(xo,zr);function Lo(){Wr.call(this),this.status=1}de(Lo,Wr);function ht(t){this.g=t}de(ht,No);ht.prototype.xa=function(){ce(this.g,"a")};ht.prototype.wa=function(t){ce(this.g,new xo(t))};ht.prototype.va=function(t){ce(this.g,new Lo(t))};ht.prototype.ua=function(){ce(this.g,"b")};mn.prototype.createWebChannel=mn.prototype.g;Se.prototype.send=Se.prototype.u;Se.prototype.open=Se.prototype.m;Se.prototype.close=Se.prototype.close;_n.NO_ERROR=0;_n.TIMEOUT=8;_n.HTTP_ERROR=6;eo.COMPLETE="complete";to.EventType=Ut;Ut.OPEN="a";Ut.CLOSE="b";Ut.ERROR="c";Ut.MESSAGE="d";oe.prototype.listen=oe.prototype.N;ne.prototype.listenOnce=ne.prototype.O;ne.prototype.getLastError=ne.prototype.La;ne.prototype.getLastErrorCode=ne.prototype.Da;ne.prototype.getStatus=ne.prototype.ba;ne.prototype.getResponseJson=ne.prototype.Qa;ne.prototype.getResponseText=ne.prototype.ga;ne.prototype.send=ne.prototype.ea;var $c=function(){return new mn},Hc=function(){return kn()},er=_n,qc=eo,Kc=Qe,qs={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Gc=Ht,en=to,zc=ne;const Ks="@firebase/firestore";/**
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
 */class Ee{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ee.UNAUTHENTICATED=new Ee(null),Ee.GOOGLE_CREDENTIALS=new Ee("google-credentials-uid"),Ee.FIRST_PARTY=new Ee("first-party-uid"),Ee.MOCK_USER=new Ee("mock-user");/**
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
 */let ft="9.6.9";/**
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
 */const Ge=new Ri("@firebase/firestore");function Gs(){return Ge.logLevel}function N(t,...e){if(Ge.logLevel<=K.DEBUG){const n=e.map(ss);Ge.debug(`Firestore (${ft}): ${t}`,...n)}}function Le(t,...e){if(Ge.logLevel<=K.ERROR){const n=e.map(ss);Ge.error(`Firestore (${ft}): ${t}`,...n)}}function zs(t,...e){if(Ge.logLevel<=K.WARN){const n=e.map(ss);Ge.warn(`Firestore (${ft}): ${t}`,...n)}}function ss(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function V(t="Unexpected state"){const e=`FIRESTORE (${ft}) INTERNAL ASSERTION FAILED: `+t;throw Le(e),new Error(e)}function te(t,e){t||V()}function $(t,e){return t}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends Sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Be{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Wc{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Xc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ee.UNAUTHENTICATED))}shutdown(){}}class Qc{constructor(e){this.t=e,this.currentUser=Ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Be;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Be,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Be)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(te(typeof r.accessToken=="string"),new Wc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string"),new Ee(e)}}class Yc{constructor(e,n,r){this.type="FirstParty",this.user=Ee.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class Jc{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new Yc(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Zc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class el{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=i=>{i.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(te(typeof n.token=="string"),this.p=n.token,new Zc(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class is{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.I(r),this.T=r=>n.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
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
 */function tl(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */is.A=-1;class Po{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=tl(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function G(t,e){return t<e?-1:t>e?1:0}function Rt(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new xe(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Ws(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Mn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function nl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ot{constructor(e,n,r){n===void 0?n=0:n>e.length&&V(),r===void 0?r=e.length-n:r>e.length-n&&V(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ot.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ot?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Y extends Ot{construct(e,n,r){return new Y(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new P(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Y(n)}static emptyPath(){return new Y([])}}const rl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ce extends Ot{construct(e,n,r){return new Ce(e,n,r)}static isValidIdentifier(e){return rl.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ce.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ce(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new P(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new P(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new P(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new P(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ce(n)}static emptyPath(){return new Ce([])}}/**
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
 */class he{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new he(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new he(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}he.EMPTY_BYTE_STRING=new he("");const sl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pe(t){if(te(!!t),typeof t=="string"){let e=0;const n=sl.exec(t);if(te(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ee(t.seconds),nanos:ee(t.nanos)}}function ee(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function st(t){return typeof t=="string"?he.fromBase64String(t):he.fromUint8Array(t)}/**
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
 */function Mo(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function jo(t){const e=t.mapValue.fields.__previous_value__;return Mo(e)?jo(e):e}function Nt(t){const e=Pe(t.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
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
 */class il{constructor(e,n,r,s,i,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class it{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new it("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof it&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function dt(t){return t==null}function Er(t){return t===0&&1/t==-1/0}/**
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
 */class x{constructor(e){this.path=e}static fromPath(e){return new x(Y.fromString(e))}static fromName(e){return new x(Y.fromString(e).popFirst(5))}static empty(){return new x(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Y.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Y.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new x(new Y(e.slice()))}}function ze(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mo(t)?4:ol(t)?9:10:V()}function ke(t,e){if(t===e)return!0;const n=ze(t);if(n!==ze(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Nt(t).isEqual(Nt(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Pe(r.timestampValue),o=Pe(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return st(r.bytesValue).isEqual(st(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return ee(r.geoPointValue.latitude)===ee(s.geoPointValue.latitude)&&ee(r.geoPointValue.longitude)===ee(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return ee(r.integerValue)===ee(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=ee(r.doubleValue),o=ee(s.doubleValue);return i===o?Er(i)===Er(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Rt(t.arrayValue.values||[],e.arrayValue.values||[],ke);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Ws(i)!==Ws(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ke(i[a],o[a])))return!1;return!0}(t,e);default:return V()}}function xt(t,e){return(t.values||[]).find(n=>ke(n,e))!==void 0}function ot(t,e){if(t===e)return 0;const n=ze(t),r=ze(e);if(n!==r)return G(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return G(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=ee(s.integerValue||s.doubleValue),a=ee(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Xs(t.timestampValue,e.timestampValue);case 4:return Xs(Nt(t),Nt(e));case 5:return G(t.stringValue,e.stringValue);case 6:return function(s,i){const o=st(s),a=st(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=G(o[u],a[u]);if(c!==0)return c}return G(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=G(ee(s.latitude),ee(i.latitude));return o!==0?o:G(ee(s.longitude),ee(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=ot(o[u],a[u]);if(c)return c}return G(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){const o=s.fields||{},a=Object.keys(o),u=i.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let l=0;l<a.length&&l<c.length;++l){const h=G(a[l],c[l]);if(h!==0)return h;const y=ot(o[a[l]],u[c[l]]);if(y!==0)return y}return G(a.length,c.length)}(t.mapValue,e.mapValue);default:throw V()}}function Xs(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return G(t,e);const n=Pe(t),r=Pe(e),s=G(n.seconds,r.seconds);return s!==0?s:G(n.nanos,r.nanos)}function tt(t){return br(t)}function br(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Pe(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?st(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,x.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=br(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${br(r.fields[a])}`;return i+"}"}(t.mapValue):V();var e,n}function Sr(t){return!!t&&"integerValue"in t}function os(t){return!!t&&"arrayValue"in t}function Qs(t){return!!t&&"nullValue"in t}function Ys(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function tr(t){return!!t&&"mapValue"in t}function bt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Mn(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=bt(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ol(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class _e{constructor(e){this.value=e}static empty(){return new _e({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!tr(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bt(n)}setAll(e){let n=Ce.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=bt(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());tr(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ke(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];tr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Mn(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new _e(bt(this.value))}}/**
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
 */class pe{constructor(e,n,r,s,i,o){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new pe(e,0,U.min(),U.min(),_e.empty(),0)}static newFoundDocument(e,n,r){return new pe(e,1,n,U.min(),r,0)}static newNoDocument(e,n){return new pe(e,2,n,U.min(),_e.empty(),0)}static newUnknownDocument(e,n){return new pe(e,3,n,U.min(),_e.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_e.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_e.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pe(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class al{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function Js(t,e=null,n=[],r=[],s=null,i=null,o=null){return new al(t,e,n,r,s,i,o)}function as(t){const e=$(t);if(e.P===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+tt(s.value);var s}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),dt(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>tt(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>tt(r)).join(",")),e.P=n}return e.P}function ul(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${tt(r.value)}`;var r}).join(", ")}]`),dt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>tt(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>tt(n)).join(",")),`Target(${e})`}function us(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!ml(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!ke(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ei(t.startAt,e.startAt)&&ei(t.endAt,e.endAt)}function Tr(t){return x.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class be extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.V(e,n,r):new cl(e,n,r):n==="array-contains"?new fl(e,r):n==="in"?new dl(e,r):n==="not-in"?new pl(e,r):n==="array-contains-any"?new gl(e,r):new be(e,n,r)}static V(e,n,r){return n==="in"?new ll(e,r):new hl(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(ot(n,this.value)):n!==null&&ze(this.value)===ze(n)&&this.v(ot(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return V()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class cl extends be{constructor(e,n,r){super(e,n,r),this.key=x.fromName(r.referenceValue)}matches(e){const n=x.comparator(e.key,this.key);return this.v(n)}}class ll extends be{constructor(e,n){super(e,"in",n),this.keys=Fo("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class hl extends be{constructor(e,n){super(e,"not-in",n),this.keys=Fo("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Fo(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>x.fromName(r.referenceValue))}class fl extends be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return os(n)&&xt(n.arrayValue,this.value)}}class dl extends be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xt(this.value.arrayValue,n)}}class pl extends be{constructor(e,n){super(e,"not-in",n)}matches(e){if(xt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xt(this.value.arrayValue,n)}}class gl extends be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!os(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>xt(this.value.arrayValue,r))}}class yn{constructor(e,n){this.position=e,this.inclusive=n}}class St{constructor(e,n="asc"){this.field=e,this.dir=n}}function ml(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Zs(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=x.comparator(x.fromName(o.referenceValue),n.key):r=ot(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ei(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ke(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class jn{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.D=null,this.C=null,this.startAt,this.endAt}}function yl(t,e,n,r,s,i,o,a){return new jn(t,e,n,r,s,i,o,a)}function cs(t){return new jn(t)}function nn(t){return!dt(t.limit)&&t.limitType==="F"}function Ir(t){return!dt(t.limit)&&t.limitType==="L"}function vl(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function wl(t){for(const e of t.filters)if(e.S())return e.field;return null}function El(t){return t.collectionGroup!==null}function Lt(t){const e=$(t);if(e.D===null){e.D=[];const n=wl(e),r=vl(e);if(n!==null&&r===null)n.isKeyField()||e.D.push(new St(n)),e.D.push(new St(Ce.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new St(Ce.keyField(),i))}}}return e.D}function We(t){const e=$(t);if(!e.C)if(e.limitType==="F")e.C=Js(e.path,e.collectionGroup,Lt(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Lt(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new St(i.field,o))}const r=e.endAt?new yn(e.endAt.position,!e.endAt.inclusive):null,s=e.startAt?new yn(e.startAt.position,!e.startAt.inclusive):null;e.C=Js(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e.C}function bl(t,e,n){return new jn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fn(t,e){return us(We(t),We(e))&&t.limitType===e.limitType}function Vo(t){return`${as(We(t))}|lt:${t.limitType}`}function Cr(t){return`Query(target=${ul(We(t))}; limitType=${t.limitType})`}function ls(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):x.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of n.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=Zs(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Lt(n),r)||n.endAt&&!function(s,i,o){const a=Zs(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Lt(n),r))}(t,e)}function Uo(t){return(e,n)=>{let r=!1;for(const s of Lt(t)){const i=Sl(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Sl(t,e,n){const r=t.field.isKeyField()?x.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),u=o.data.field(s);return a!==null&&u!==null?ot(a,u):V()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return V()}}/**
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
 */function Tl(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Er(e)?"-0":e}}function Il(t){return{integerValue:""+t}}/**
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
 */class Vn{constructor(){this._=void 0}}function Cl(t,e,n){return t instanceof Ar?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof vn?Bo(t,e):t instanceof wn?$o(t,e):function(r,s){const i=kl(r,s),o=ti(i)+ti(r.k);return Sr(i)&&Sr(r.k)?Il(o):Tl(r.M,o)}(t,e)}function Al(t,e,n){return t instanceof vn?Bo(t,e):t instanceof wn?$o(t,e):n}function kl(t,e){return t instanceof kr?Sr(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ar extends Vn{}class vn extends Vn{constructor(e){super(),this.elements=e}}function Bo(t,e){const n=Ho(e);for(const r of t.elements)n.some(s=>ke(s,r))||n.push(r);return{arrayValue:{values:n}}}class wn extends Vn{constructor(e){super(),this.elements=e}}function $o(t,e){let n=Ho(e);for(const r of t.elements)n=n.filter(s=>!ke(s,r));return{arrayValue:{values:n}}}class kr extends Vn{constructor(e,n){super(),this.M=e,this.k=n}}function ti(t){return ee(t.integerValue||t.doubleValue)}function Ho(t){return os(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function _l(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof vn&&r instanceof vn||n instanceof wn&&r instanceof wn?Rt(n.elements,r.elements,ke):n instanceof kr&&r instanceof kr?ke(n.k,r.k):n instanceof Ar&&r instanceof Ar}(t.transform,e.transform)}function rn(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qo{}function Dl(t,e,n){t instanceof Ko?function(r,s,i){const o=r.value.clone(),a=si(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Go?function(r,s,i){if(!rn(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=si(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(zo(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function _r(t,e,n){t instanceof Ko?function(r,s,i){if(!rn(r.precondition,s))return;const o=r.value.clone(),a=ii(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(ri(s),o).setHasLocalMutations()}(t,e,n):t instanceof Go?function(r,s,i){if(!rn(r.precondition,s))return;const o=ii(r.fieldTransforms,i,s),a=s.data;a.setAll(zo(r)),a.setAll(o),s.convertToFoundDocument(ri(s),a).setHasLocalMutations()}(t,e,n):function(r,s){rn(r.precondition,s)&&s.convertToNoDocument(U.min())}(t,e)}function ni(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Rt(n,r,(s,i)=>_l(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function ri(t){return t.isFoundDocument()?t.version:U.min()}class Ko extends qo{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}}class Go extends qo{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function zo(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function si(t,e,n){const r=new Map;te(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Al(o,a,n[s]))}return r}function ii(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Cl(i,o,e))}return r}/**
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
 */class Rl{constructor(e){this.count=e}}/**
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
 */var Z,B;function Wo(t){if(t===void 0)return Le("GRPC error has no .code"),k.UNKNOWN;switch(t){case Z.OK:return k.OK;case Z.CANCELLED:return k.CANCELLED;case Z.UNKNOWN:return k.UNKNOWN;case Z.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Z.INTERNAL:return k.INTERNAL;case Z.UNAVAILABLE:return k.UNAVAILABLE;case Z.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Z.NOT_FOUND:return k.NOT_FOUND;case Z.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Z.ABORTED:return k.ABORTED;case Z.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Z.DATA_LOSS:return k.DATA_LOSS;default:return V()}}(B=Z||(Z={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class pt{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Mn(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return nl(this.inner)}size(){return this.innerSize}}/**
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
 */class fe{constructor(e,n){this.comparator=e,this.root=n||ae.EMPTY}insert(e,n){return new fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ae.BLACK,null,null))}remove(e){return new fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ae.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tn(this.root,e,this.comparator,!1)}getReverseIterator(){return new tn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tn(this.root,e,this.comparator,!0)}}class tn{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ae{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:ae.RED,this.left=s!=null?s:ae.EMPTY,this.right=i!=null?i:ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ae(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ae.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw V();const e=this.left.check();if(e!==this.right.check())throw V();return e+(this.isRed()?0:1)}}ae.EMPTY=null,ae.RED=!0,ae.BLACK=!1;ae.EMPTY=new class{constructor(){this.size=0}get key(){throw V()}get value(){throw V()}get color(){throw V()}get left(){throw V()}get right(){throw V()}copy(t,e,n,r,s){return this}insert(t,e,n){return new ae(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class le{constructor(e){this.comparator=e,this.data=new fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new oi(this.data.getIterator())}getIteratorFrom(e){return new oi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof le)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new le(this.comparator);return n.data=e,n}}class oi{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const Ol=new fe(x.comparator);function Xe(){return Ol}const Nl=new fe(x.comparator);function Dr(){return Nl}function nr(){return new pt(t=>t.toString(),(t,e)=>t.isEqual(e))}new fe(x.comparator);const xl=new le(x.comparator);function Q(...t){let e=xl;for(const n of t)e=e.add(n);return e}const Ll=new le(G);function Xo(){return Ll}/**
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
 */class Un{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Gt.createSynthesizedTargetChangeForCurrentChange(e,n)),new Un(U.min(),r,Xo(),Xe(),Q())}}class Gt{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Gt(he.EMPTY_BYTE_STRING,n,Q(),Q(),Q())}}/**
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
 */class sn{constructor(e,n,r,s){this.O=e,this.removedTargetIds=n,this.key=r,this.$=s}}class Qo{constructor(e,n){this.targetId=e,this.F=n}}class Yo{constructor(e,n,r=he.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ai{constructor(){this.B=0,this.L=ci(),this.q=he.EMPTY_BYTE_STRING,this.U=!1,this.K=!0}get current(){return this.U}get resumeToken(){return this.q}get G(){return this.B!==0}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.q=e)}H(){let e=Q(),n=Q(),r=Q();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:V()}}),new Gt(this.q,this.U,e,n,r)}J(){this.K=!1,this.L=ci()}Y(e,n){this.K=!0,this.L=this.L.insert(e,n)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.U=!0}}class Pl{constructor(e){this.nt=e,this.st=new Map,this.it=Xe(),this.rt=ui(),this.ot=new le(G)}at(e){for(const n of e.O)e.$&&e.$.isFoundDocument()?this.ut(n,e.$):this.ct(n,e.key,e.$);for(const n of e.removedTargetIds)this.ct(n,e.key,e.$)}ht(e){this.forEachTarget(e,n=>{const r=this.lt(n);switch(e.state){case 0:this.ft(n)&&r.W(e.resumeToken);break;case 1:r.tt(),r.G||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.G||this.removeTarget(n);break;case 3:this.ft(n)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),r.W(e.resumeToken));break;default:V()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.st.forEach((r,s)=>{this.ft(s)&&n(s)})}_t(e){const n=e.targetId,r=e.F.count,s=this.wt(n);if(s){const i=s.target;if(Tr(i))if(r===0){const o=new x(i.path);this.ct(n,o,pe.newNoDocument(o,U.min()))}else te(r===1);else this.gt(n)!==r&&(this.dt(n),this.ot=this.ot.add(n))}}yt(e){const n=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&Tr(a.target)){const u=new x(a.target.path);this.it.get(u)!==null||this.It(o,u)||this.ct(o,u,pe.newNoDocument(u,e))}i.j&&(n.set(o,i.H()),i.J())}});let r=Q();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.wt(u);return!c||c.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const s=new Un(e,n,this.ot,this.it,r);return this.it=Xe(),this.rt=ui(),this.ot=new le(G),s}ut(e,n){if(!this.ft(e))return;const r=this.It(e,n.key)?2:0;this.lt(e).Y(n.key,r),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(e))}ct(e,n,r){if(!this.ft(e))return;const s=this.lt(e);this.It(e,n)?s.Y(n,1):s.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(e)),r&&(this.it=this.it.insert(n,r))}removeTarget(e){this.st.delete(e)}gt(e){const n=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let n=this.st.get(e);return n||(n=new ai,this.st.set(e,n)),n}Tt(e){let n=this.rt.get(e);return n||(n=new le(G),this.rt=this.rt.insert(e,n)),n}ft(e){const n=this.wt(e)!==null;return n||N("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.st.get(e);return n&&n.G?null:this.nt.Et(e)}dt(e){this.st.set(e,new ai),this.nt.getRemoteKeysForTarget(e).forEach(n=>{this.ct(e,n,null)})}It(e,n){return this.nt.getRemoteKeysForTarget(e).has(n)}}function ui(){return new fe(x.comparator)}function ci(){return new fe(x.comparator)}/**
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
 */const Ml=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),jl=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Fl{constructor(e,n){this.databaseId=e,this.N=n}}function Vl(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ul(t,e){return t.N?e.toBase64():e.toUint8Array()}function Pt(t){return te(!!t),U.fromTimestamp(function(e){const n=Pe(e);return new xe(n.seconds,n.nanos)}(t))}function Bl(t,e){return function(n){return new Y(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Jo(t){const e=Y.fromString(t);return te(ta(e)),e}function rr(t,e){const n=Jo(e);if(n.get(1)!==t.databaseId.projectId)throw new P(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new x(Zo(n))}function Rr(t,e){return Bl(t.databaseId,e)}function $l(t){const e=Jo(t);return e.length===4?Y.emptyPath():Zo(e)}function li(t){return new Y(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Zo(t){return te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Hl(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:V()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,c){return u.N?(te(c===void 0||typeof c=="string"),he.fromBase64String(c||"")):(te(c===void 0||c instanceof Uint8Array),he.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?k.UNKNOWN:Wo(u.code);return new P(c,u.message||"")}(o);n=new Yo(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=rr(t,r.document.name),i=Pt(r.document.updateTime),o=new _e({mapValue:{fields:r.document.fields}}),a=pe.newFoundDocument(s,i,o),u=r.targetIds||[],c=r.removedTargetIds||[];n=new sn(u,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=rr(t,r.document),i=r.readTime?Pt(r.readTime):U.min(),o=pe.newNoDocument(s,i),a=r.removedTargetIds||[];n=new sn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=rr(t,r.document),i=r.removedTargetIds||[];n=new sn([],i,s,null)}else{if(!("filter"in e))return V();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new Rl(s),o=r.targetId;n=new Qo(o,i)}}return n}function ql(t,e){return{documents:[Rr(t,e.path)]}}function Kl(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Rr(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Rr(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(u){if(u.length===0)return;const c=u.map(l=>function(h){if(h.op==="=="){if(Ys(h.value))return{unaryFilter:{field:Ye(h.field),op:"IS_NAN"}};if(Qs(h.value))return{unaryFilter:{field:Ye(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Ys(h.value))return{unaryFilter:{field:Ye(h.field),op:"IS_NOT_NAN"}};if(Qs(h.value))return{unaryFilter:{field:Ye(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ye(h.field),op:Xl(h.op),value:h.value}}}(l));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(u){if(u.length!==0)return u.map(c=>function(l){return{field:Ye(l.field),direction:Wl(l.dir)}}(c))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(u,c){return u.N||dt(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function Gl(t){let e=$l(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){te(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=ea(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new St(Ze(h.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,dt(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(l){const h=!!l.before,y=l.values||[];return new yn(y,h)}(n.startAt));let c=null;return n.endAt&&(c=function(l){const h=!l.before,y=l.values||[];return new yn(y,h)}(n.endAt)),yl(e,s,o,i,a,"F",u,c)}function zl(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return V()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function ea(t){return t?t.unaryFilter!==void 0?[Yl(t)]:t.fieldFilter!==void 0?[Ql(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>ea(e)).reduce((e,n)=>e.concat(n)):V():[]}function Wl(t){return Ml[t]}function Xl(t){return jl[t]}function Ye(t){return{fieldPath:t.canonicalString()}}function Ze(t){return Ce.fromServerFormat(t.fieldPath)}function Ql(t){return be.create(Ze(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return V()}}(t.fieldFilter.op),t.fieldFilter.value)}function Yl(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ze(t.unaryFilter.field);return be.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ze(t.unaryFilter.field);return be.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ze(t.unaryFilter.field);return be.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ze(t.unaryFilter.field);return be.create(s,"!=",{nullValue:"NULL_VALUE"});default:return V()}}function ta(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */const Jl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&V(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(s=>s?C.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}}function zt(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class eh{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Dl(i,e,r[s])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&_r(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&_r(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(U.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Q())}isEqual(e){return this.batchId===e.batchId&&Rt(this.mutations,e.mutations,(n,r)=>ni(n,r))&&Rt(this.baseMutations,e.baseMutations,(n,r)=>ni(n,r))}}/**
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
 */class th{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class $e{constructor(e,n,r,s,i=U.min(),o=U.min(),a=he.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new $e(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new $e(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new $e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class nh{constructor(e){this.Jt=e}}function rh(t){const e=Gl({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bl(e,e.limit,"L"):e}/**
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
 */class sh{constructor(){this.Ue=new ih}addToCollectionParentIndex(e,n){return this.Ue.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.Ue.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getFieldIndex(e,n){return C.resolve(null)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class ih{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new le(Y.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new le(Y.comparator)).toArray()}}/**
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
 */class at{constructor(e){this.wn=e}next(){return this.wn+=2,this.wn}static mn(){return new at(0)}static gn(){return new at(-1)}}/**
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
 */async function hs(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==Jl)throw t;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class oh{constructor(){this.changes=new pt(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ah{constructor(e,n,r){this.ls=e,this.Fs=n,this.indexManager=r}Bs(e,n){return this.Fs.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Ls(e,n,r))}Ls(e,n,r){return this.ls.getEntry(e,n).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}qs(e,n){e.forEach((r,s)=>{for(const i of n)i.applyToLocalView(s)})}Us(e,n){return this.ls.getEntries(e,n).next(r=>this.Ks(e,r).next(()=>r))}Ks(e,n){return this.Fs.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.qs(n,r))}Gs(e,n,r){return function(s){return x.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.Qs(e,n.path):El(n)?this.js(e,n,r):this.Ws(e,n,r)}Qs(e,n){return this.Bs(e,new x(n)).next(r=>{let s=Dr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}js(e,n,r){const s=n.collectionGroup;let i=Dr();return this.indexManager.getCollectionParents(e,s).next(o=>C.forEach(o,a=>{const u=function(c,l){return new jn(l,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(s));return this.Ws(e,u,r).next(c=>{c.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}Ws(e,n,r){let s;return this.ls.getAll(e,n.path,r).next(i=>(s=i,this.Fs.getAllMutationBatchesAffectingQuery(e,n))).next(i=>{for(const o of i)for(const a of o.mutations){const u=a.key;let c=s.get(u);c==null&&(c=pe.newInvalidDocument(u),s=s.insert(u,c)),_r(a,c,o.localWriteTime),c.isFoundDocument()||(s=s.remove(u))}}).next(()=>(s.forEach((i,o)=>{ls(n,o)||(s=s.remove(i))}),s))}}/**
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
 */class fs{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.zs=r,this.Hs=s}static Js(e,n){let r=Q(),s=Q();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new fs(e,n.fromCache,r,s)}}/**
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
 */class uh{Ys(e){this.Xs=e}Gs(e,n,r,s){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(U.min())?this.Zs(e,n):this.Xs.Us(e,s).next(i=>{const o=this.ti(n,i);return(nn(n)||Ir(n))&&this.ei(n.limitType,o,s,r)?this.Zs(e,n):(Gs()<=K.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Cr(n)),this.Xs.Gs(e,n,r).next(a=>(o.forEach(u=>{a=a.insert(u.key,u)}),a)))})}ti(e,n){let r=new le(Uo(e));return n.forEach((s,i)=>{ls(e,i)&&(r=r.add(i))}),r}ei(e,n,r,s){if(r.size!==n.size)return!0;const i=e==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Zs(e,n){return Gs()<=K.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Cr(n)),this.Xs.Gs(e,n,U.min())}}/**
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
 */class ch{constructor(e,n,r,s){this.persistence=e,this.ni=n,this.M=s,this.si=new fe(G),this.ii=new pt(i=>as(i),us),this.ri=U.min(),this.oi=e.getRemoteDocumentCache(),this.hs=e.getTargetCache(),this.fs=e.getBundleCache(),this.ai(r)}ai(e){this.indexManager=this.persistence.getIndexManager(e),this.Fs=this.persistence.getMutationQueue(e,this.indexManager),this.ui=new ah(this.oi,this.Fs,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ui)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.si))}}function lh(t,e,n,r){return new ch(t,e,n,r)}async function na(t,e){const n=$(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.Fs.getAllMutationBatches(r).next(i=>(s=i,n.ai(e),n.Fs.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=Q();for(const c of s){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of i){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return n.ui.Us(r,u).next(c=>({ci:c,removedBatchIds:o,addedBatchIds:a}))})})}function ra(t){const e=$(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hs.getLastRemoteSnapshotVersion(n))}function hh(t,e){const n=$(t),r=e.snapshotVersion;let s=n.si;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.oi.newChangeBuffer({trackRemovals:!0});s=n.si;const a=[];e.targetChanges.forEach((c,l)=>{const h=s.get(l);if(!h)return;a.push(n.hs.removeMatchingKeys(i,c.removedDocuments,l).next(()=>n.hs.addMatchingKeys(i,c.addedDocuments,l)));let y=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(l)?y=y.withResumeToken(he.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):c.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(c.resumeToken,r)),s=s.insert(l,y),function(d,p,g){return d.resumeToken.approximateByteSize()===0||p.snapshotVersion.toMicroseconds()-d.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(h,y,c)&&a.push(n.hs.updateTargetData(i,y))});let u=Xe();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,c))}),a.push(fh(i,o,e.documentUpdates).next(c=>{u=c})),!r.isEqual(U.min())){const c=n.hs.getLastRemoteSnapshotVersion(i).next(l=>n.hs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(c)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.ui.Ks(i,u)).next(()=>u)}).then(i=>(n.si=s,i))}function fh(t,e,n){let r=Q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let i=Xe();return n.forEach((o,a)=>{const u=s.get(o);a.isNoDocument()&&a.version.isEqual(U.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!u.isValidDocument()||a.version.compareTo(u.version)>0||a.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):N("LocalStore","Ignoring outdated watch update for ",o,". Current version:",u.version," Watch version:",a.version)}),i})}function dh(t,e){const n=$(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.hs.getTargetData(r,e).next(i=>i?(s=i,C.resolve(s)):n.hs.allocateTargetId(r).next(o=>(s=new $e(e,o,0,r.currentSequenceNumber),n.hs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.si.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.si=n.si.insert(r.targetId,r),n.ii.set(e,r.targetId)),r})}async function Or(t,e,n){const r=$(t),s=r.si.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!zt(o))throw o;N("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.si=r.si.remove(e),r.ii.delete(s.target)}function hi(t,e,n){const r=$(t);let s=U.min(),i=Q();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const l=$(a),h=l.ii.get(c);return h!==void 0?C.resolve(l.si.get(h)):l.hs.getTargetData(u,c)}(r,o,We(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.hs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.ni.Gs(o,e,n?s:U.min(),n?i:Q())).next(a=>({documents:a,hi:i})))}/**
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
 */class ph{constructor(e){this.M=e,this._i=new Map,this.wi=new Map}getBundleMetadata(e,n){return C.resolve(this._i.get(n))}saveBundleMetadata(e,n){var r;return this._i.set(n.id,{id:(r=n).id,version:r.version,createTime:Pt(r.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.wi.get(n))}saveNamedQuery(e,n){return this.wi.set(n.name,function(r){return{name:r.name,query:rh(r.bundledQuery),readTime:Pt(r.readTime)}}(n)),C.resolve()}}/**
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
 */class gh{constructor(){this.overlays=new fe(x.comparator),this.mi=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Xt(e,n,i)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.mi.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.mi.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const s=nr(),i=n.length+1,o=new x(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return C.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new fe((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let l=i.get(c.largestBatchId);l===null&&(l=nr(),i=i.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=nr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=s)););return C.resolve(a)}Xt(e,n,r){if(r===null)return;const s=this.overlays.get(r.key);if(s!==null){const o=this.mi.get(s.largestBatchId).delete(r.key);this.mi.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new th(n,r));let i=this.mi.get(n);i===void 0&&(i=Q(),this.mi.set(n,i)),this.mi.set(n,i.add(r.key))}}/**
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
 */class ds{constructor(){this.gi=new le(ie.yi),this.pi=new le(ie.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(e,n){const r=new ie(e,n);this.gi=this.gi.add(r),this.pi=this.pi.add(r)}Ti(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ei(new ie(e,n))}Ai(e,n){e.forEach(r=>this.removeReference(r,n))}Ri(e){const n=new x(new Y([])),r=new ie(n,e),s=new ie(n,e+1),i=[];return this.pi.forEachInRange([r,s],o=>{this.Ei(o),i.push(o.key)}),i}bi(){this.gi.forEach(e=>this.Ei(e))}Ei(e){this.gi=this.gi.delete(e),this.pi=this.pi.delete(e)}Pi(e){const n=new x(new Y([])),r=new ie(n,e),s=new ie(n,e+1);let i=Q();return this.pi.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ie(e,0),r=this.gi.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ie{constructor(e,n){this.key=e,this.Vi=n}static yi(e,n){return x.comparator(e.key,n.key)||G(e.Vi,n.Vi)}static Ii(e,n){return G(e.Vi,n.Vi)||x.comparator(e.key,n.key)}}/**
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
 */class mh{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.Fs=[],this.vi=1,this.Si=new le(ie.yi)}checkEmpty(e){return C.resolve(this.Fs.length===0)}addMutationBatch(e,n,r,s){const i=this.vi;this.vi++,this.Fs.length>0&&this.Fs[this.Fs.length-1];const o=new eh(i,n,r,s);this.Fs.push(o);for(const a of s)this.Si=this.Si.add(new ie(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.Di(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Ci(r),i=s<0?0:s;return C.resolve(this.Fs.length>i?this.Fs[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.Fs.length===0?-1:this.vi-1)}getAllMutationBatches(e){return C.resolve(this.Fs.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ie(n,0),s=new ie(n,Number.POSITIVE_INFINITY),i=[];return this.Si.forEachInRange([r,s],o=>{const a=this.Di(o.Vi);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new le(G);return n.forEach(s=>{const i=new ie(s,0),o=new ie(s,Number.POSITIVE_INFINITY);this.Si.forEachInRange([i,o],a=>{r=r.add(a.Vi)})}),C.resolve(this.xi(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;x.isDocumentKey(i)||(i=i.child(""));const o=new ie(new x(i),0);let a=new le(G);return this.Si.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(u.Vi)),!0)},o),C.resolve(this.xi(a))}xi(e){const n=[];return e.forEach(r=>{const s=this.Di(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){te(this.Ni(n.batchId,"removed")===0),this.Fs.shift();let r=this.Si;return C.forEach(n.mutations,s=>{const i=new ie(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Si=r})}dn(e){}containsKey(e,n){const r=new ie(n,0),s=this.Si.firstAfterOrEqual(r);return C.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.Fs.length,C.resolve()}Ni(e,n){return this.Ci(e)}Ci(e){return this.Fs.length===0?0:e-this.Fs[0].batchId}Di(e){const n=this.Ci(e);return n<0||n>=this.Fs.length?null:this.Fs[n]}}/**
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
 */class yh{constructor(e){this.ki=e,this.docs=new fe(x.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ki(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():pe.newInvalidDocument(n))}getEntries(e,n){let r=Xe();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():pe.newInvalidDocument(s))}),C.resolve(r)}getAll(e,n,r){let s=Xe();const i=new x(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||u.readTime.compareTo(r)<=0||(s=s.insert(u.key,u.mutableCopy()))}return C.resolve(s)}Mi(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new vh(this)}getSize(e){return C.resolve(this.size)}}class vh extends oh{constructor(e){super(),this.Un=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Un.addEntry(e,s)):this.Un.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this.Un.getEntry(e,n)}getAllFromCache(e,n){return this.Un.getEntries(e,n)}}/**
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
 */class wh{constructor(e){this.persistence=e,this.Oi=new pt(n=>as(n),us),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.$i=0,this.Fi=new ds,this.targetCount=0,this.Bi=at.mn()}forEachTarget(e,n){return this.Oi.forEach((r,s)=>n(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.$i)}allocateTargetId(e){return this.highestTargetId=this.Bi.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$i&&(this.$i=n),C.resolve()}In(e){this.Oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Bi=new at(n),this.highestTargetId=n),e.sequenceNumber>this.$i&&(this.$i=e.sequenceNumber)}addTargetData(e,n){return this.In(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.In(n),C.resolve()}removeTargetData(e,n){return this.Oi.delete(n.target),this.Fi.Ri(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Oi.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),C.waitFor(i).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.Oi.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.Fi.Ti(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.Fi.Ai(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Fi.Ri(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Fi.Pi(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.Fi.containsKey(n))}}/**
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
 */class Eh{constructor(e,n){this.Li={},this.overlays={},this.Zn=new is(0),this.ts=!1,this.ts=!0,this.referenceDelegate=e(this),this.hs=new wh(this),this.indexManager=new sh,this.ls=function(r){return new yh(r)}(r=>this.referenceDelegate.qi(r)),this.M=new nh(n),this.fs=new ph(this.M)}start(){return Promise.resolve()}shutdown(){return this.ts=!1,Promise.resolve()}get started(){return this.ts}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gh,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Li[e.toKey()];return r||(r=new mh(n,this.referenceDelegate),this.Li[e.toKey()]=r),r}getTargetCache(){return this.hs}getRemoteDocumentCache(){return this.ls}getBundleCache(){return this.fs}runTransaction(e,n,r){N("MemoryPersistence","Starting transaction:",e);const s=new bh(this.Zn.next());return this.referenceDelegate.Ui(),r(s).next(i=>this.referenceDelegate.Ki(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gi(e,n){return C.or(Object.values(this.Li).map(r=>()=>r.containsKey(e,n)))}}class bh extends Zl{constructor(e){super(),this.currentSequenceNumber=e}}class ps{constructor(e){this.persistence=e,this.Qi=new ds,this.ji=null}static Wi(e){return new ps(e)}get zi(){if(this.ji)return this.ji;throw V()}addReference(e,n,r){return this.Qi.addReference(r,n),this.zi.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.Qi.removeReference(r,n),this.zi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.zi.add(n.toString()),C.resolve()}removeTarget(e,n){this.Qi.Ri(n.targetId).forEach(s=>this.zi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.zi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ui(){this.ji=new Set}Ki(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.zi,r=>{const s=x.fromPath(r);return this.Hi(e,s).next(i=>{i||n.removeEntry(s,U.min())})}).next(()=>(this.ji=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hi(e,n).next(r=>{r?this.zi.delete(n.toString()):this.zi.add(n.toString())})}qi(e){return 0}Hi(e,n){return C.or([()=>C.resolve(this.Qi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gi(e,n)])}}class fi{constructor(){this.activeTargetIds=Xo()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Sh{constructor(){this.Or=new fi,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Or.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Or.Zi(e)}isLocalQueryTarget(e){return this.Or.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Or.activeTargetIds}isActiveQueryTarget(e){return this.Or.activeTargetIds.has(e)}start(){return this.Or=new fi,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class Th{Fr(e){}shutdown(){}}/**
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
 */class di{constructor(){this.Br=()=>this.Lr(),this.qr=()=>this.Ur(),this.Kr=[],this.Gr()}Fr(e){this.Kr.push(e)}shutdown(){window.removeEventListener("online",this.Br),window.removeEventListener("offline",this.qr)}Gr(){window.addEventListener("online",this.Br),window.addEventListener("offline",this.qr)}Lr(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Kr)e(0)}Ur(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Kr)e(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Ih={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class Ch{constructor(e){this.Qr=e.Qr,this.jr=e.jr}Wr(e){this.zr=e}Hr(e){this.Jr=e}onMessage(e){this.Yr=e}close(){this.jr()}send(e){this.Qr(e)}Xr(){this.zr()}Zr(e){this.Jr(e)}eo(e){this.Yr(e)}}/**
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
 */class Ah extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.no=n+"://"+e.host,this.so="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}io(e,n,r,s,i){const o=this.ro(e,n);N("RestConnection","Sending: ",o,r);const a={};return this.oo(a,s,i),this.ao(e,o,a,r).then(u=>(N("RestConnection","Received: ",u),u),u=>{throw zs("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",r),u})}uo(e,n,r,s,i){return this.io(e,n,r,s,i)}oo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ft,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ro(e,n){const r=Ih[e];return`${this.no}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}ao(e,n,r,s){return new Promise((i,o)=>{const a=new zc;a.listenOnce(qc.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case er.NO_ERROR:const c=a.getResponseJson();N("Connection","XHR received:",JSON.stringify(c)),i(c);break;case er.TIMEOUT:N("Connection",'RPC "'+e+'" timed out'),o(new P(k.DEADLINE_EXCEEDED,"Request time out"));break;case er.HTTP_ERROR:const l=a.getStatus();if(N("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const y=function(d){const p=d.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(p)>=0?p:k.UNKNOWN}(h.status);o(new P(y,h.message))}else o(new P(k.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new P(k.UNAVAILABLE,"Connection failed."));break;default:V()}}finally{N("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(s);a.send(n,"POST",u,r,15)})}co(e,n,r){const s=[this.no,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=$c(),o=Hc(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Gc({})),this.oo(a.initMessageHeaders,n,r),Da()||Oa()||Na()||xa()||La()||Ra()||(a.httpHeadersOverwriteParam="$httpHeaders");const u=s.join("");N("Connection","Creating WebChannel: "+u,a);const c=i.createWebChannel(u,a);let l=!1,h=!1;const y=new Ch({Qr:p=>{h?N("Connection","Not sending because WebChannel is closed:",p):(l||(N("Connection","Opening WebChannel transport."),c.open(),l=!0),N("Connection","WebChannel sending:",p),c.send(p))},jr:()=>c.close()}),d=(p,g,S)=>{p.listen(g,b=>{try{S(b)}catch(f){setTimeout(()=>{throw f},0)}})};return d(c,en.EventType.OPEN,()=>{h||N("Connection","WebChannel transport opened.")}),d(c,en.EventType.CLOSE,()=>{h||(h=!0,N("Connection","WebChannel transport closed"),y.Zr())}),d(c,en.EventType.ERROR,p=>{h||(h=!0,zs("Connection","WebChannel transport errored:",p),y.Zr(new P(k.UNAVAILABLE,"The operation could not be completed")))}),d(c,en.EventType.MESSAGE,p=>{var g;if(!h){const S=p.data[0];te(!!S);const b=S,f=b.error||((g=b[0])===null||g===void 0?void 0:g.error);if(f){N("Connection","WebChannel received error:",f);const w=f.status;let m=function(E){const T=Z[E];if(T!==void 0)return Wo(T)}(w),v=f.message;m===void 0&&(m=k.INTERNAL,v="Unknown error status: "+w+" with message "+f.message),h=!0,y.Zr(new P(m,v)),c.close()}else N("Connection","WebChannel received:",S),y.eo(S)}}),d(o,Kc.STAT_EVENT,p=>{p.stat===qs.PROXY?N("Connection","Detected buffering proxy"):p.stat===qs.NOPROXY&&N("Connection","Detected no buffering proxy")}),setTimeout(()=>{y.Xr()},0),y}}function sr(){return typeof document!="undefined"?document:null}/**
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
 */function sa(t){return new Fl(t,!0)}class ia{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Hn=e,this.timerId=n,this.ho=r,this.lo=s,this.fo=i,this._o=0,this.wo=null,this.mo=Date.now(),this.reset()}reset(){this._o=0}yo(){this._o=this.fo}po(e){this.cancel();const n=Math.floor(this._o+this.Io()),r=Math.max(0,Date.now()-this.mo),s=Math.max(0,n-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this._o} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.wo=this.Hn.enqueueAfterDelay(this.timerId,s,()=>(this.mo=Date.now(),e())),this._o*=this.lo,this._o<this.ho&&(this._o=this.ho),this._o>this.fo&&(this._o=this.fo)}To(){this.wo!==null&&(this.wo.skipDelay(),this.wo=null)}cancel(){this.wo!==null&&(this.wo.cancel(),this.wo=null)}Io(){return(Math.random()-.5)*this._o}}/**
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
 */class kh{constructor(e,n,r,s,i,o,a,u){this.Hn=e,this.Eo=r,this.Ao=s,this.Ro=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.bo=0,this.Po=null,this.Vo=null,this.stream=null,this.vo=new ia(e,n)}So(){return this.state===1||this.state===5||this.Do()}Do(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Co()}async stop(){this.So()&&await this.close(0)}xo(){this.state=0,this.vo.reset()}No(){this.Do()&&this.Po===null&&(this.Po=this.Hn.enqueueAfterDelay(this.Eo,6e4,()=>this.ko()))}Mo(e){this.Oo(),this.stream.send(e)}async ko(){if(this.Do())return this.close(0)}Oo(){this.Po&&(this.Po.cancel(),this.Po=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Oo(),this.$o(),this.vo.cancel(),this.bo++,e!==4?this.vo.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(Le(n.toString()),Le("Using maximum backoff delay to prevent overloading the backend."),this.vo.yo()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Fo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Hr(n)}Fo(){}auth(){this.state=1;const e=this.Bo(this.bo),n=this.bo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.bo===n&&this.Lo(r,s)},r=>{e(()=>{const s=new P(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(s)})})}Lo(e,n){const r=this.Bo(this.bo);this.stream=this.Uo(e,n),this.stream.Wr(()=>{r(()=>(this.state=2,this.Vo=this.Hn.enqueueAfterDelay(this.Ao,1e4,()=>(this.Do()&&(this.state=3),Promise.resolve())),this.listener.Wr()))}),this.stream.Hr(s=>{r(()=>this.qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Co(){this.state=5,this.vo.po(async()=>{this.state=0,this.start()})}qo(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Bo(e){return n=>{this.Hn.enqueueAndForget(()=>this.bo===e?n():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _h extends kh{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.M=i}Uo(e,n){return this.Ro.co("Listen",e,n)}onMessage(e){this.vo.reset();const n=Hl(this.M,e),r=function(s){if(!("targetChange"in s))return U.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?U.min():i.readTime?Pt(i.readTime):U.min()}(e);return this.listener.Ko(n,r)}Go(e){const n={};n.database=li(this.M),n.addTarget=function(s,i){let o;const a=i.target;return o=Tr(a)?{documents:ql(s,a)}:{query:Kl(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Ul(s,i.resumeToken):i.snapshotVersion.compareTo(U.min())>0&&(o.readTime=Vl(s,i.snapshotVersion.toTimestamp())),o}(this.M,e);const r=zl(this.M,e);r&&(n.labels=r),this.Mo(n)}Qo(e){const n={};n.database=li(this.M),n.removeTarget=e,this.Mo(n)}}/**
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
 */class Dh extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Ro=r,this.M=s,this.Xo=!1}Zo(){if(this.Xo)throw new P(k.FAILED_PRECONDITION,"The client has already been terminated.")}io(e,n,r){return this.Zo(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.Ro.io(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new P(k.UNKNOWN,s.toString())})}uo(e,n,r){return this.Zo(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.Ro.uo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new P(k.UNKNOWN,s.toString())})}terminate(){this.Xo=!0}}class Rh{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ta=0,this.ea=null,this.na=!0}sa(){this.ta===0&&(this.ia("Unknown"),this.ea=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ea=null,this.ra("Backend didn't respond within 10 seconds."),this.ia("Offline"),Promise.resolve())))}oa(e){this.state==="Online"?this.ia("Unknown"):(this.ta++,this.ta>=1&&(this.aa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ia("Offline")))}set(e){this.aa(),this.ta=0,e==="Online"&&(this.na=!1),this.ia(e)}ia(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.na?(Le(n),this.na=!1):N("OnlineStateTracker",n)}aa(){this.ea!==null&&(this.ea.cancel(),this.ea=null)}}/**
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
 */class Oh{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.ua=[],this.ca=new Map,this.ha=new Set,this.la=[],this.fa=i,this.fa.Fr(o=>{r.enqueueAndForget(async()=>{Xt(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=$(a);u.ha.add(4),await Wt(u),u.da.set("Unknown"),u.ha.delete(4),await Bn(u)}(this))})}),this.da=new Rh(r,s)}}async function Bn(t){if(Xt(t))for(const e of t.la)await e(!0)}async function Wt(t){for(const e of t.la)await e(!1)}function oa(t,e){const n=$(t);n.ca.has(e.targetId)||(n.ca.set(e.targetId,e),ys(n)?ms(n):gt(n).Do()&&gs(n,e))}function aa(t,e){const n=$(t),r=gt(n);n.ca.delete(e),r.Do()&&ua(n,e),n.ca.size===0&&(r.Do()?r.No():Xt(n)&&n.da.set("Unknown"))}function gs(t,e){t._a.Z(e.targetId),gt(t).Go(e)}function ua(t,e){t._a.Z(e),gt(t).Qo(e)}function ms(t){t._a=new Pl({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.ca.get(e)||null}),gt(t).start(),t.da.sa()}function ys(t){return Xt(t)&&!gt(t).So()&&t.ca.size>0}function Xt(t){return $(t).ha.size===0}function ca(t){t._a=void 0}async function Nh(t){t.ca.forEach((e,n)=>{gs(t,e)})}async function xh(t,e){ca(t),ys(t)?(t.da.oa(e),ms(t)):t.da.set("Unknown")}async function Lh(t,e,n){if(t.da.set("Online"),e instanceof Yo&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.ca.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.ca.delete(o),r._a.removeTarget(o))}(t,e)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pi(t,r)}else if(e instanceof sn?t._a.at(e):e instanceof Qo?t._a._t(e):t._a.ht(e),!n.isEqual(U.min()))try{const r=await ra(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s._a.yt(i);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.ca.get(u);c&&s.ca.set(u,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const u=s.ca.get(a);if(!u)return;s.ca.set(a,u.withResumeToken(he.EMPTY_BYTE_STRING,u.snapshotVersion)),ua(s,a);const c=new $e(u.target,a,1,u.sequenceNumber);gs(s,c)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await pi(t,r)}}async function pi(t,e,n){if(!zt(e))throw e;t.ha.add(1),await Wt(t),t.da.set("Offline"),n||(n=()=>ra(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await n(),t.ha.delete(1),await Bn(t)})}async function gi(t,e){const n=$(t);n.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const r=Xt(n);n.ha.add(3),await Wt(n),r&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.ha.delete(3),await Bn(n)}async function Ph(t,e){const n=$(t);e?(n.ha.delete(2),await Bn(n)):e||(n.ha.add(2),await Wt(n),n.da.set("Unknown"))}function gt(t){return t.wa||(t.wa=function(e,n,r){const s=$(e);return s.Zo(),new _h(n,s.Ro,s.authCredentials,s.appCheckCredentials,s.M,r)}(t.datastore,t.asyncQueue,{Wr:Nh.bind(null,t),Hr:xh.bind(null,t),Ko:Lh.bind(null,t)}),t.la.push(async e=>{e?(t.wa.xo(),ys(t)?ms(t):t.da.set("Unknown")):(await t.wa.stop(),ca(t))})),t.wa}/**
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
 */class vs{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Be,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new vs(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function la(t,e){if(Le("AsyncQueue",`${e}: ${t}`),zt(t))return new P(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class nt{constructor(e){this.comparator=e?(n,r)=>e(n,r)||x.comparator(n.key,r.key):(n,r)=>x.comparator(n.key,r.key),this.keyedMap=Dr(),this.sortedSet=new fe(this.comparator)}static emptySet(e){return new nt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new nt;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class mi{constructor(){this.ga=new fe(x.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):V():this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class ut{constructor(e,n,r,s,i,o,a,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(e,n,r,s){const i=[];return n.forEach(o=>{i.push({type:0,doc:o})}),new ut(e,n,nt.emptySet(n),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fn(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Mh{constructor(){this.pa=void 0,this.listeners=[]}}class jh{constructor(){this.queries=new pt(e=>Vo(e),Fn),this.onlineState="Unknown",this.Ia=new Set}}async function Fh(t,e){const n=$(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Mh),s)try{i.pa=await n.onListen(r)}catch(o){const a=la(o,`Initialization of query '${Cr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Ta(n.onlineState),i.pa&&e.Ea(i.pa)&&ws(n)}async function Vh(t,e){const n=$(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Uh(t,e){const n=$(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Ea(s)&&(r=!0);o.pa=s}}r&&ws(n)}function Bh(t,e,n){const r=$(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function ws(t){t.Ia.forEach(e=>{e.next()})}class $h{constructor(e,n,r){this.query=e,this.Aa=n,this.Ra=!1,this.ba=null,this.onlineState="Unknown",this.options=r||{}}Ea(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ut(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Ra?this.Pa(e)&&(this.Aa.next(e),n=!0):this.Va(e,this.onlineState)&&(this.va(e),n=!0),this.ba=e,n}onError(e){this.Aa.error(e)}Ta(e){this.onlineState=e;let n=!1;return this.ba&&!this.Ra&&this.Va(this.ba,e)&&(this.va(this.ba),n=!0),n}Va(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Sa||!r)&&(!e.docs.isEmpty()||n==="Offline")}Pa(e){if(e.docChanges.length>0)return!0;const n=this.ba&&this.ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}va(e){e=ut.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Ra=!0,this.Aa.next(e)}}/**
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
 */class ha{constructor(e){this.key=e}}class fa{constructor(e){this.key=e}}class Hh{constructor(e,n){this.query=e,this.ka=n,this.Ma=null,this.current=!1,this.Oa=Q(),this.mutatedKeys=Q(),this.$a=Uo(e),this.Fa=new nt(this.$a)}get Ba(){return this.ka}La(e,n){const r=n?n.qa:new mi,s=n?n.Fa:this.Fa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=nn(this.query)&&s.size===this.query.limit?s.last():null,c=Ir(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const y=s.get(l),d=ls(this.query,h)?h:null,p=!!y&&this.mutatedKeys.has(y.key),g=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let S=!1;y&&d?y.data.isEqual(d.data)?p!==g&&(r.track({type:3,doc:d}),S=!0):this.Ua(y,d)||(r.track({type:2,doc:d}),S=!0,(u&&this.$a(d,u)>0||c&&this.$a(d,c)<0)&&(a=!0)):!y&&d?(r.track({type:0,doc:d}),S=!0):y&&!d&&(r.track({type:1,doc:y}),S=!0,(u||c)&&(a=!0)),S&&(d?(o=o.add(d),i=g?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),nn(this.query)||Ir(this.query))for(;o.size>this.query.limit;){const l=nn(this.query)?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Fa:o,qa:r,ei:a,mutatedKeys:i}}Ua(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Fa;this.Fa=e.Fa,this.mutatedKeys=e.mutatedKeys;const i=e.qa.ya();i.sort((c,l)=>function(h,y){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return V()}};return d(h)-d(y)}(c.type,l.type)||this.$a(c.doc,l.doc)),this.Ka(r);const o=n?this.Ga():[],a=this.Oa.size===0&&this.current?1:0,u=a!==this.Ma;return this.Ma=a,i.length!==0||u?{snapshot:new ut(this.query,e.Fa,s,i,e.mutatedKeys,a===0,u,!1),Qa:o}:{Qa:o}}Ta(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Fa:this.Fa,qa:new mi,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{Qa:[]}}ja(e){return!this.ka.has(e)&&!!this.Fa.has(e)&&!this.Fa.get(e).hasLocalMutations}Ka(e){e&&(e.addedDocuments.forEach(n=>this.ka=this.ka.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ka=this.ka.delete(n)),this.current=e.current)}Ga(){if(!this.current)return[];const e=this.Oa;this.Oa=Q(),this.Fa.forEach(r=>{this.ja(r.key)&&(this.Oa=this.Oa.add(r.key))});const n=[];return e.forEach(r=>{this.Oa.has(r)||n.push(new fa(r))}),this.Oa.forEach(r=>{e.has(r)||n.push(new ha(r))}),n}Wa(e){this.ka=e.hi,this.Oa=Q();const n=this.La(e.documents);return this.applyChanges(n,!0)}za(){return ut.fromInitialDocuments(this.query,this.Fa,this.mutatedKeys,this.Ma===0)}}class qh{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Kh{constructor(e){this.key=e,this.Ha=!1}}class Gh{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ja={},this.Ya=new pt(a=>Vo(a),Fn),this.Xa=new Map,this.Za=new Set,this.tu=new fe(x.comparator),this.eu=new Map,this.nu=new ds,this.su={},this.iu=new Map,this.ru=at.gn(),this.onlineState="Unknown",this.ou=void 0}get isPrimaryClient(){return this.ou===!0}}async function zh(t,e){const n=ef(t);let r,s;const i=n.Ya.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.za();else{const o=await dh(n.localStore,We(e));n.isPrimaryClient&&oa(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Wh(n,e,r,a==="current")}return s}async function Wh(t,e,n,r){t.au=(l,h,y)=>async function(d,p,g,S){let b=p.view.La(g);b.ei&&(b=await hi(d.localStore,p.query,!1).then(({documents:m})=>p.view.La(m,b)));const f=S&&S.targetChanges.get(p.targetId),w=p.view.applyChanges(b,d.isPrimaryClient,f);return vi(d,p.targetId,w.Qa),w.snapshot}(t,l,h,y);const s=await hi(t.localStore,e,!0),i=new Hh(e,s.hi),o=i.La(s.documents),a=Gt.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),u=i.applyChanges(o,t.isPrimaryClient,a);vi(t,n,u.Qa);const c=new qh(e,n,i);return t.Ya.set(e,c),t.Xa.has(n)?t.Xa.get(n).push(e):t.Xa.set(n,[e]),u.snapshot}async function Xh(t,e){const n=$(t),r=n.Ya.get(e),s=n.Xa.get(r.targetId);if(s.length>1)return n.Xa.set(r.targetId,s.filter(i=>!Fn(i,e))),void n.Ya.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Or(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),aa(n.remoteStore,r.targetId),Nr(n,r.targetId)}).catch(hs)):(Nr(n,r.targetId),await Or(n.localStore,r.targetId,!0))}async function da(t,e){const n=$(t);try{const r=await hh(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.eu.get(i);o&&(te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ha=!0:s.modifiedDocuments.size>0?te(o.Ha):s.removedDocuments.size>0&&(te(o.Ha),o.Ha=!1))}),await ga(n,r,e)}catch(r){await hs(r)}}function yi(t,e,n){const r=$(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Ya.forEach((i,o)=>{const a=o.view.Ta(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=$(i);a.onlineState=o;let u=!1;a.queries.forEach((c,l)=>{for(const h of l.listeners)h.Ta(o)&&(u=!0)}),u&&ws(a)}(r.eventManager,e),s.length&&r.Ja.Ko(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Qh(t,e,n){const r=$(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.eu.get(e),i=s&&s.key;if(i){let o=new fe(x.comparator);o=o.insert(i,pe.newNoDocument(i,U.min()));const a=Q().add(i),u=new Un(U.min(),new Map,new le(G),o,a);await da(r,u),r.tu=r.tu.remove(i),r.eu.delete(e),Es(r)}else await Or(r.localStore,e,!1).then(()=>Nr(r,e,n)).catch(hs)}function Nr(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Xa.get(e))t.Ya.delete(r),n&&t.Ja.uu(r,n);t.Xa.delete(e),t.isPrimaryClient&&t.nu.Ri(e).forEach(r=>{t.nu.containsKey(r)||pa(t,r)})}function pa(t,e){t.Za.delete(e.path.canonicalString());const n=t.tu.get(e);n!==null&&(aa(t.remoteStore,n),t.tu=t.tu.remove(e),t.eu.delete(n),Es(t))}function vi(t,e,n){for(const r of n)r instanceof ha?(t.nu.addReference(r.key,e),Yh(t,r)):r instanceof fa?(N("SyncEngine","Document no longer in limbo: "+r.key),t.nu.removeReference(r.key,e),t.nu.containsKey(r.key)||pa(t,r.key)):V()}function Yh(t,e){const n=e.key,r=n.path.canonicalString();t.tu.get(n)||t.Za.has(r)||(N("SyncEngine","New document in limbo: "+n),t.Za.add(r),Es(t))}function Es(t){for(;t.Za.size>0&&t.tu.size<t.maxConcurrentLimboResolutions;){const e=t.Za.values().next().value;t.Za.delete(e);const n=new x(Y.fromString(e)),r=t.ru.next();t.eu.set(r,new Kh(n)),t.tu=t.tu.insert(n,r),oa(t.remoteStore,new $e(We(cs(n.path)),r,2,is.A))}}async function ga(t,e,n){const r=$(t),s=[],i=[],o=[];r.Ya.isEmpty()||(r.Ya.forEach((a,u)=>{o.push(r.au(u,e,n).then(c=>{if(c){r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c.fromCache?"not-current":"current"),s.push(c);const l=fs.Js(u.targetId,c);i.push(l)}}))}),await Promise.all(o),r.Ja.Ko(s),await async function(a,u){const c=$(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>C.forEach(u,h=>C.forEach(h.zs,y=>c.persistence.referenceDelegate.addReference(l,h.targetId,y)).next(()=>C.forEach(h.Hs,y=>c.persistence.referenceDelegate.removeReference(l,h.targetId,y)))))}catch(l){if(!zt(l))throw l;N("LocalStore","Failed to update sequence numbers: "+l)}for(const l of u){const h=l.targetId;if(!l.fromCache){const y=c.si.get(h),d=y.snapshotVersion,p=y.withLastLimboFreeSnapshotVersion(d);c.si=c.si.insert(h,p)}}}(r.localStore,i))}async function Jh(t,e){const n=$(t);if(!n.currentUser.isEqual(e)){N("SyncEngine","User change. New user:",e.toKey());const r=await na(n.localStore,e);n.currentUser=e,function(s,i){s.iu.forEach(o=>{o.forEach(a=>{a.reject(new P(k.CANCELLED,i))})}),s.iu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ga(n,r.ci)}}function Zh(t,e){const n=$(t),r=n.eu.get(e);if(r&&r.Ha)return Q().add(r.key);{let s=Q();const i=n.Xa.get(e);if(!i)return s;for(const o of i){const a=n.Ya.get(o);s=s.unionWith(a.view.Ba)}return s}}function ef(t){const e=$(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=da.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zh.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Qh.bind(null,e),e.Ja.Ko=Uh.bind(null,e.eventManager),e.Ja.uu=Bh.bind(null,e.eventManager),e}class tf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=sa(e.databaseInfo.databaseId),this.sharedClientState=this.hu(e),this.persistence=this.lu(e),await this.persistence.start(),this.gcScheduler=this.fu(e),this.localStore=this.du(e)}fu(e){return null}du(e){return lh(this.persistence,new uh,e.initialUser,this.M)}lu(e){return new Eh(ps.Wi,this.M)}hu(e){return new Sh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yi(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jh.bind(null,this.syncEngine),await Ph(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new jh}createDatastore(e){const n=sa(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new Ah(s));var s;return function(i,o,a,u){return new Dh(i,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>yi(this.syncEngine,a,0),o=di.vt()?new di:new Th,new Oh(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,u,c){const l=new Gh(r,s,i,o,a,u);return c&&(l.ou=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=$(e);N("RemoteStore","RemoteStore shutting down."),n.ha.add(5),await Wt(n),n.fa.shutdown(),n.da.set("Unknown")}(this.remoteStore)}}/**
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
 */class rf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.wu(this.observer.next,e)}error(e){this.observer.error?this.wu(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}mu(){this.muted=!0}wu(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class sf{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ee.UNAUTHENTICATED,this.clientId=Po.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{N("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(N("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Be;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=la(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function of(t,e){t.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await na(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function af(t,e){t.asyncQueue.verifyOperationInProgress();const n=await uf(t);N("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>gi(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>gi(e.remoteStore,i)),t.onlineComponents=e}async function uf(t){return t.offlineComponents||(N("FirestoreClient","Using default OfflineComponentProvider"),await of(t,new tf)),t.offlineComponents}async function cf(t){return t.onlineComponents||(N("FirestoreClient","Using default OnlineComponentProvider"),await af(t,new nf)),t.onlineComponents}async function lf(t){const e=await cf(t),n=e.eventManager;return n.onListen=zh.bind(null,e.syncEngine),n.onUnlisten=Xh.bind(null,e.syncEngine),n}function hf(t,e,n={}){const r=new Be;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,u){const c=new rf({next:h=>{i.enqueueAndForget(()=>Vh(s,l));const y=h.docs.has(o);!y&&h.fromCache?u.reject(new P(k.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&h.fromCache&&a&&a.source==="server"?u.reject(new P(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),l=new $h(cs(o.path),c,{includeMetadataChanges:!0,Sa:!0});return Fh(s,l)}(await lf(t),t.asyncQueue,e,n,r)),r.promise}const wi=new Map;/**
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
 */function ff(t,e,n){if(!n)throw new P(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function df(t,e,n,r){if(e===!0&&r===!0)throw new P(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ei(t){if(!x.isDocumentKey(t))throw new P(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function pf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":V()}function bi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pf(t);throw new P(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Si{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new P(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,df("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class ma{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Si({}),this._settingsFrozen=!1,e instanceof it?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new P(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new it(s.options.projectId)}(e))}get app(){if(!this._app)throw new P(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Si(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Xc;switch(n.type){case"gapi":const r=n.client;return te(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new Jc(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new P(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=wi.get(e);n&&(N("ComponentProvider","Removing Datastore"),wi.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class Re{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Re(this.firestore,e,this._key)}}class bs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bs(this.firestore,e,this._query)}}class Mt extends bs{constructor(e,n,r){super(e,n,cs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Re(this.firestore,null,new x(e))}withConverter(e){return new Mt(this.firestore,e,this._path)}}function _f(t,e,...n){if(t=Ua(t),arguments.length===1&&(e=Po.R()),ff("doc","path",e),t instanceof ma){const r=Y.fromString(e,...n);return Ei(r),new Re(t,null,new x(r))}{if(!(t instanceof Re||t instanceof Mt))throw new P(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Y.fromString(e,...n));return Ei(r),new Re(t.firestore,t instanceof Mt?t.converter:null,new x(r))}}/**
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
 */class gf{constructor(){this.Du=Promise.resolve(),this.Cu=[],this.xu=!1,this.Nu=[],this.ku=null,this.Mu=!1,this.Ou=!1,this.$u=[],this.vo=new ia(this,"async_queue_retry"),this.Fu=()=>{const n=sr();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.vo.To()};const e=sr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Fu)}get isShuttingDown(){return this.xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Bu(),this.Lu(e)}enterRestrictedMode(e){if(!this.xu){this.xu=!0,this.Ou=e||!1;const n=sr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Fu)}}enqueue(e){if(this.Bu(),this.xu)return new Promise(()=>{});const n=new Be;return this.Lu(()=>this.xu&&this.Ou?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Cu.push(e),this.qu()))}async qu(){if(this.Cu.length!==0){try{await this.Cu[0](),this.Cu.shift(),this.vo.reset()}catch(e){if(!zt(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Cu.length>0&&this.vo.po(()=>this.qu())}}Lu(e){const n=this.Du.then(()=>(this.Mu=!0,e().catch(r=>{this.ku=r,this.Mu=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Le("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Mu=!1,r))));return this.Du=n,n}enqueueAfterDelay(e,n,r){this.Bu(),this.$u.indexOf(e)>-1&&(n=0);const s=vs.createAndSchedule(this,e,n,r,i=>this.Uu(i));return this.Nu.push(s),s}Bu(){this.ku&&V()}verifyOperationInProgress(){}async Ku(){let e;do e=this.Du,await e;while(e!==this.Du)}Gu(e){for(const n of this.Nu)if(n.timerId===e)return!0;return!1}Qu(e){return this.Ku().then(()=>{this.Nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ku()})}ju(e){this.$u.push(e)}Uu(e){const n=this.Nu.indexOf(e);this.Nu.splice(n,1)}}class ya extends ma{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new gf,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||va(this),this._firestoreClient.terminate()}}function Df(t=Du()){return Cu(t,"firestore").getImmediate()}function mf(t){return t._firestoreClient||va(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function va(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new il(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new sf(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class wa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class En{constructor(e){this._byteString=e}static fromBase64String(e){try{return new En(he.fromBase64String(e))}catch(n){throw new P(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new En(he.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class yf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}}const vf=new RegExp("[~\\*/\\[\\]]");function wf(t,e,n){if(e.search(vf)>=0)throw Ti(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wa(...e.split("."))._internalPath}catch{throw Ti(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ti(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new P(k.INVALID_ARGUMENT,a+t+u)}/**
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
 */class Ea{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ef(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ba("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ef extends Ea{data(){return super.data()}}function ba(t,e){return typeof e=="string"?wf(t,e):e instanceof wa?e._internalPath:e._delegate._internalPath}/**
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
 */class bf{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Sa extends Ea{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Sf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ba("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Sf extends Sa{data(e={}){return super.data(e)}}/**
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
 */class Tf{convertValue(e,n="none"){switch(ze(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(st(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw V()}}convertObject(e,n){const r={};return Mn(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new yf(ee(e.latitude),ee(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=jo(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Nt(e));default:return null}}convertTimestamp(e){const n=Pe(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Y.fromString(e);te(ta(r));const s=new it(r.get(1),r.get(3)),i=new x(r.popFirst(5));return s.isEqual(n)||Le(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Rf(t){t=bi(t,Re);const e=bi(t.firestore,ya);return hf(mf(e),t._key).then(n=>Cf(e,t,n))}class If extends Tf{constructor(e){super(),this.firestore=e}convertBytes(e){return new En(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,n)}}function Cf(t,e,n){const r=n.docs.get(e._key),s=new If(t);return new Sa(t,s,e._key,r,new bf(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ft=n})(_u),an(new Tt("firestore",(n,{options:r})=>{const s=n.getProvider("app").getImmediate(),i=new ya(s,new Qc(n.getProvider("auth-internal")),new el(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),et(Ks,"3.4.6",t),et(Ks,"3.4.6","esm2017")})();export{Rf as G,Af as L,_f as h,kf as i,Df as p};
