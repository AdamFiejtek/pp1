"use strict";exports.id=488,exports.ids=[488],exports.modules={1488:(e,n,t)=>{t.r(n),t.d(n,{BE_PROFILE:()=>y,NRT_PROFILE:()=>p,PostChannel:()=>qe,RT_PROFILE:()=>h});var i=t(7421),r=t(9141),a=t(1782),o=t(7954),u=t(7624),s=t(5705),c=t(4869),l=t(9251),f=t(8452),d=t(9339),v=t(7951),h="REAL_TIME",p="NEAR_REAL_TIME",y="BEST_EFFORT",g="",m="POST",b="Microsoft_ApplicationInsights_BypassAjaxInstrumentation",S="drop",T="send",_="requeue",x="rspFail",w="oth",R="no-cache, no-store",k="application/x-json-stream",E="cache-control",K="content-type",O="kill-tokens",P="kill-duration",C="kill-duration-seconds",M="time-delta-millis",B="client-version",A="client-id",H="time-delta-to-apply-millis",L="upload-time",F="apikey",U="AuthMsaDeviceTicket",q="AuthXToken",z="msfpc",j="trace",D="user";function I(e){var n=(e.ext||{}).intweb;return n&&(0,s.Sn)(n[z])?n[z]:null}function N(e){for(var n=null,t=0;null===n&&t<e.length;t++)n=I(e[t]);return n}var J=function(){function e(n,t){var i=t?[].concat(t):[],r=this,a=N(i);r.iKey=function(){return n},r.Msfpc=function(){return a||g},r.count=function(){return i.length},r.events=function(){return i},r.addEvent=function(e){return!!e&&(i.push(e),a||(a=I(e)),!0)},r.split=function(t,r){var o;if(t<i.length){var u=i.length-t;(0,c.le)(r)||(u=r<u?r:u),o=i.splice(t,u),a=N(i)}return new e(n,o)}}return e.create=function(n,t){return new e(n,t)},e}();const X=function(){function e(){var n=!0,t=!0,i=!0,a="use-collector-delta",o=!1;(0,r.Z)(e,this,(function(e){e.allowRequestSending=function(){return n},e.firstRequestSent=function(){i&&(i=!1,o||(n=!1))},e.shouldAddClockSkewHeaders=function(){return t},e.getClockSkewHeaderValue=function(){return a},e.setClockSkew=function(e){o||(e?(a=e,t=!0,o=!0):t=!1,n=!0)}}))}return e.__ieDyn=1,e}();var Q=1e3;const W=function(){function e(){var n={};(0,r.Z)(e,this,(function(e){e.setKillSwitchTenants=function(e,t){if(e&&t)try{var i=(o=e.split(","),u=[],o&&(0,c.tO)(o,(function(e){u.push((0,c.nd)(e))})),u);if("this-request-only"===t)return i;for(var r=parseInt(t,10)*Q,a=0;a<i.length;++a)n[i[a]]=(0,c.m6)()+r}catch(e){return[]}var o,u;return[]},e.isTenantKilled=function(e){var t=n,i=(0,c.nd)(e);return void 0!==t[i]&&t[i]>(0,c.m6)()||(delete t[i],!1)}}))}return e.__ieDyn=1,e}();var V=t(1550),Z=.8,Y=1.2,$=3e3,G=6e5;function ee(e){var n,t=$*Z,i=$*Y,r=Math.floor(Math.random()*(i-t))+t;return n=Math.pow(2,e)*r,Math.min(n,G)}var ne,te=20,ie=3984588,re=65e3,ae=2e6,oe=Math.min(ae,re),ue="metadata",se="f",ce=/\./,le=function(){function e(n,t,i,o){var u="data",l="baseData",f=!!o,d=t,v={};(0,r.Z)(e,this,(function(e){function t(e,n,r,a,o,u,l){(0,c.rW)(e,(function(e,h){var p=null;if(h||(0,s.Sn)(h)){var y=r,g=e,m=o,b=n;if(f&&!a&&ce.test(e)){var S=e.split("."),T=S.length;if(T>1){m&&(m=m.slice());for(var _=0;_<T-1;_++){var x=S[_];b=b[x]=b[x]||{},y+="."+x,m&&m.push(x)}g=S[T-1]}}var w=a&&function(e,n){var t=v[e];return void 0===t&&(e.length>=7&&(t=(0,c.xe)(e,"ext.metadata")||(0,c.xe)(e,"ext.web")),v[e]=t),t}(y);if(p=!w&&d&&d.handleField(y,g)?d.value(y,g,h,i):(0,s.yj)(g,h,i)){var R=p.value;if(b[g]=R,u&&u(m,g,p),l&&"object"==typeof R&&!(0,c.kJ)(R)){var k=m;k&&(k=k.slice()).push(g),t(h,R,y+"."+g,a,k,u,l)}}}}))}e.createPayload=function(e,n,t,i,r,a){return{apiKeys:[],payloadBlob:g,overflow:null,sizeExceed:[],failedEvts:[],batches:[],numEvents:0,retryCnt:e,isTeardown:n,isSync:t,isBeacon:i,sendType:a,sendReason:r}},e.appendPayload=function(t,i,r){var o=t&&i&&!t.overflow;return o&&(0,a.Lm)(n,(function(){return"Serializer:appendPayload"}),(function(){for(var n=i.events(),a=t.payloadBlob,o=t.numEvents,u=!1,s=[],l=[],f=t.isBeacon,d=f?re:ie,v=f?oe:ae,h=0,p=0;h<n.length;){var y=n[h];if(y){if(o>=r){t.overflow=i.split(h);break}var g=e.getEventBlob(y);if(g&&g.length<=v){var m=g.length;if(a.length+m>d){t.overflow=i.split(h);break}a&&(a+="\n"),a+=g,++p>te&&(a.substr(0,1),p=0),u=!0,o++}else g?s.push(y):l.push(y),n.splice(h,1),h--}h++}if(s&&s.length>0&&t.sizeExceed.push(J.create(i.iKey(),s)),l&&l.length>0&&t.failedEvts.push(J.create(i.iKey(),l)),u){t.batches.push(i),t.payloadBlob=a,t.numEvents=o;var b=i.iKey();-1===(0,c.UA)(t.apiKeys,b)&&t.apiKeys.push(b)}}),(function(){return{payload:t,theBatch:{iKey:i.iKey(),evts:i.events()},max:r}})),o},e.getEventBlob=function(e){try{return(0,a.Lm)(n,(function(){return"Serializer.getEventBlob"}),(function(){var n={};n.name=e.name,n.time=e.time,n.ver=e.ver,n.iKey="o:"+(0,s.jM)(e.iKey);var i={},r=e.ext;r&&(n.ext=i,(0,c.rW)(r,(function(e,n){t(n,i[e]={},"ext."+e,!0,null,null,!0)})));var a=n[u]={};a.baseType=e.baseType;var o=a[l]={};return t(e.baseData,o,l,!1,[l],(function(e,n,t){fe(i,e,n,t)}),!0),t(e.data,a,u,!1,[],(function(e,n,t){fe(i,e,n,t)}),!0),JSON.stringify(n)}),(function(){return{item:e}}))}catch(e){return null}}}))}return e.__ieDyn=1,e}();function fe(e,n,t,i){if(i&&e){var r=(0,s.Vv)(i.value,i.kind,i.propertyType);if(r>-1){var a=e[ue];a||(a=e[ue]={f:{}});var o=a[se];if(o||(o=a[se]={}),n)for(var u=0;u<n.length;u++){var l=n[u];o[l]||(o[l]={f:{}});var f=o[l][se];f||(f=o[l][se]={}),o=f}o=o[t]={},(0,c.kJ)(i.value)?o.a={t:r}:o.t=r}}}var de="sendAttempt",ve="&NoResponseBody=true",he=((ne={})[1]=_,ne[100]=_,ne[200]="sent",ne[8004]=S,ne[8003]=S,ne),pe={},ye={};function ge(e,n,t){pe[e]=n,!1!==t&&(ye[n]=e)}function me(e){try{return e.responseText}catch(e){}return g}function be(e,n){var t=!1;if(e&&n){var i=(0,c.FY)(e);if(i&&i.length>0)for(var r=n.toLowerCase(),a=0;a<i.length;a++){var o=i[a];if(o&&(0,c.nr)(n,o)&&o.toLowerCase()===r){t=!0;break}}}return t}function Se(e,n,t,i){n&&t&&t.length>0&&(i&&pe[n]?(e.hdrs[pe[n]]=t,e.useHdrs=!0):e.url+="&"+n+"="+t)}function Te(e,n){return n&&((0,c.hj)(n)?e=[n].concat(e):(0,c.kJ)(n)&&(e=n.concat(e))),e}ge(U,U,!1),ge(B,B),ge(A,"Client-Id"),ge(F,F),ge(H,H),ge(L,L),ge(q,q);var _e=function(){function e(n,t,i,o,u){this._responseHandlers=[];var f,v,h,p,y,_,U,q,j,D,I="?cors=true&"+K.toLowerCase()+"="+k,N=new W,J=!1,Q=new X,Z=!1,Y=0,$=!0,G=[],ne={},te=[],ie=null,re=!1,ae=!1,oe=!1;(0,r.Z)(e,this,(function(e){var r=!0;function X(e,n){for(var t=0,i=null,r=0;null==i&&r<e.length;)1===(t=e[r])?(0,l.cp)()?i=W:(0,l.Z3)()&&(i=se):2===t&&(0,l.JO)(n)&&(!n||n&&!q)?i=ue:Z&&3===t&&(0,l.MF)()&&(i=fe),r++;return i?{_transport:t,_isSync:n,sendPOST:i}:null}function W(e,n,t){var i=new XDomainRequest;i.open(m,e.urlString),e.timeout&&(i.timeout=e.timeout),i.onload=function(){var e=me(i);ce(n,200,{},e),Pe(e)},i.onerror=function(){ce(n,400,{})},i.ontimeout=function(){ce(n,500,{})},i.onprogress=function(){},t?i.send(e.data):u.set((function(){i.send(e.data)}),0)}function ue(e,n,t){var i,a=e.urlString,o=!1,s=!1,l=((i={body:e.data,method:m})[b]=!0,i);t&&(l.keepalive=!0,2===e._sendReason&&(o=!0,D&&(a+=ve))),r&&(l.credentials="include"),e.headers&&(0,c.FY)(e.headers).length>0&&(l.headers=e.headers),fetch(a,l).then((function(e){var t={},i=g,r=e.headers;r&&r.forEach((function(e,n){t[n]=e})),e.body&&e.text().then((function(e){i=e})),s||(s=!0,ce(n,e.status,t,i),Pe(i))})).catch((function(e){s||(s=!0,ce(n,0,{}))})),o&&!s&&(s=!0,ce(n,200,{})),!s&&e.timeout>0&&u.set((function(){s||(s=!0,ce(n,500,{}))}),e.timeout)}function se(e,n,t){var i=e.urlString;function a(e,n,t){if(!e[t]&&n&&n.getResponseHeader){var i=n.getResponseHeader(t);i&&(e[t]=(0,c.nd)(i))}return e}function o(e,t){ce(n,e.status,function(e){var n={};return e.getAllResponseHeaders?n=function(e){var n={};if((0,c.HD)(e)){var t=(0,c.nd)(e).split(/[\r\n]+/);(0,c.tO)(t,(function(e){if(e){var t=e.indexOf(": ");if(-1!==t){var i=(0,c.nd)(e.substring(0,t)).toLowerCase(),r=(0,c.nd)(e.substring(t+1));n[i]=r}else n[(0,c.nd)(e)]=1}}))}return n}(e.getAllResponseHeaders()):(n=a(n,e,M),n=a(n,e,P),n=a(n,e,C)),n}(e),t)}t&&e.disableXhrSync&&(t=!1);var u=(0,s.ot)(m,i,r,!0,t,e.timeout);(0,c.rW)(e.headers,(function(e,n){u.setRequestHeader(e,n)})),u.onload=function(){var e=me(u);o(u,e),Pe(e)},u.onerror=function(){o(u)},u.ontimeout=function(){o(u)},u.send(e.data)}function ce(e,n,t,i){try{e(n,t,i)}catch(e){(0,d.kP)(v,2,518,(0,l.eU)(e))}}function fe(e,n,t){var i=200,r=e._thePayload,a=e.urlString+(D?ve:g);try{var o=(0,l.jW)();if(!o.sendBeacon(a,e.data))if(r){var u=[];(0,c.tO)(r.batches,(function(e){if(u&&e&&e.count()>0){for(var n=e.events(),t=0;t<n.length;t++)if(!o.sendBeacon(a,ie.getEventBlob(n[t]))){u.push(e.split(t));break}}else u.push(e.split(0))})),Ce(u,8003,r.sendType,!0)}else i=0}catch(e){(0,d.jV)(v,"Failed to send telemetry using sendBeacon API. Ex:"+(0,l.eU)(e)),i=0}finally{ce(n,i,{},g)}}function pe(e){return 2===e||3===e}function ge(e){return ae&&pe(e)&&(e=2),e}function _e(){return!J&&Y<t}function xe(){var e=te;return te=[],e}function we(e,n,t){var i=!1;return e&&e.length>0&&!J&&h[n]&&ie&&(i=0!==n||_e()&&(t>0||Q.allowRequestSending())),i}function Re(e){var n={};return e&&(0,c.tO)(e,(function(e,t){n[t]={iKey:e.iKey(),evts:e.events()}})),n}function ke(e,t,i,r,o){if(e&&0!==e.length)if(J)Ce(e,1,r);else{r=ge(r);try{var u=e,c=0!==r;(0,a.Lm)(p,(function(){return"HttpManager:_sendBatches"}),(function(a){a&&(e=e.slice(0));for(var u=[],l=null,f=(0,s.hK)(),d=h[r]||(c?h[1]:h[0]),v=d&&d._transport,p=j&&(ae||pe(r)||3===v||d._isSync&&2===v);we(e,r,t);){var y=e.shift();y&&y.count()>0&&(N.isTenantKilled(y.iKey())?u.push(y):(l=l||ie.createPayload(t,i,c,p,o,r),ie.appendPayload(l,y,n)?null!==l.overflow&&(e=[l.overflow].concat(e),l.overflow=null,Ke(l,f,(0,s.hK)(),o),f=(0,s.hK)(),l=null):(Ke(l,f,(0,s.hK)(),o),f=(0,s.hK)(),e=[y].concat(e),l=null)))}l&&Ke(l,f,(0,s.hK)(),o),e.length>0&&(te=e.concat(te)),Ce(u,8004,r)}),(function(){return{batches:Re(u),retryCount:t,isTeardown:i,isSynchronous:c,sendReason:o,useSendBeacon:pe(r),sendType:r}}),!c)}catch(e){(0,d.kP)(v,2,48,"Unexpected Exception sending batch: "+(0,l.eU)(e))}}}function Ee(e,n,t){e[n]=e[n]||{},e[n][f.identifier]=t}function Ke(n,t,r,o){if(n&&n.payloadBlob&&n.payloadBlob.length>0){var u=!!e.sendHook,y=h[n.sendType];!pe(n.sendType)&&n.isBeacon&&2===n.sendReason&&(y=h[2]||h[3]||y);var m=oe;(n.isBeacon||3===y._transport)&&(m=!1);var b=function(e,n){var t={url:I,hdrs:{},useHdrs:!1};n?(t.hdrs=(0,s.l7)(t.hdrs,ne),t.useHdrs=(0,c.FY)(t.hdrs).length>0):(0,c.rW)(ne,(function(e,n){ye[e]?Se(t,ye[e],n,!1):(t.hdrs[e]=n,t.useHdrs=!0)})),Se(t,A,"NO_AUTH",n),Se(t,B,s.vs,n);var i=g;(0,c.tO)(e.apiKeys,(function(e){i.length>0&&(i+=","),i+=e})),Se(t,F,i,n),Se(t,L,(0,c.m6)().toString(),n);var r=function(e){for(var n=0;n<e.batches.length;n++){var t=e.batches[n].Msfpc();if(t)return encodeURIComponent(t)}return g}(e);if((0,s.Sn)(r)&&(t.url+="&ext.intweb.msfpc="+r),Q.shouldAddClockSkewHeaders()&&Se(t,H,Q.getClockSkewHeaderValue(),n),p.getWParam){var a=p.getWParam();a>=0&&(t.url+="&w="+a)}for(var o=0;o<G.length;o++)t.url+="&"+G[o].name+"="+G[o].value;return t}(n,m);m=m||b.useHdrs;var S=(0,s.hK)();(0,a.Lm)(p,(function(){return"HttpManager:_doPayloadSend"}),(function(){for(var h=0;h<n.batches.length;h++)for(var g=n.batches[h].events(),T=0;T<g.length;T++){var x=g[T];if(re){var w=x.timings=x.timings||{};Ee(w,"sendEventStart",S),Ee(w,"serializationStart",t),Ee(w,"serializationCompleted",r)}x[de]>0?x[de]++:x[de]=1}Ce(n.batches,1e3+(o||0),n.sendType,!0);var C={data:n.payloadBlob,urlString:b.url,headers:b.hdrs,_thePayload:n,_sendReason:o,timeout:_,disableXhrSync:U,disableFetchKeepAlive:q};m&&(be(C.headers,E)||(C.headers[E]=R),be(C.headers,K)||(C.headers[K]=k));var B=null;y&&(B=function(t){Q.firstRequestSent();var r=function(t,r){!function(n,t,r,a){var o,u=9e3,l=null,d=!1,v=!1;try{var h=!0;if(typeof n!==V.jA){if(t){Q.setClockSkew(t[M]);var p=t[P]||t["kill-duration-seconds"];(0,c.tO)(N.setKillSwitchTenants(t[O],p),(function(e){(0,c.tO)(r.batches,(function(n){if(n.iKey()===e){l=l||[];var t=n.split(0);r.numEvents-=t.count(),l.push(t)}}))}))}if(200==n||204==n)return void(u=200);((o=n)>=300&&o<500&&408!=o&&429!=o||501==o||505==o||r.numEvents<=0)&&(h=!1),u=9e3+n%1e3}if(h){u=100;var y=r.retryCnt;0===r.sendType&&(y<i?(d=!0,Oe((function(){0===r.sendType&&Y--,ke(r.batches,y+1,r.isTeardown,ae?2:r.sendType,5)}),ae,ee(y))):(v=!0,ae&&(u=8001)))}}finally{d||(Q.setClockSkew(),function(n,t,i,r){try{r&&f._backOffTransmission(),200===t&&(r||n.isSync||f._clearBackOff(),function(e){if(re){var n=(0,s.hK)();(0,c.tO)(e,(function(e){e&&e.count()>0&&function(e,n){re&&(0,c.tO)(e,(function(e){Ee(e.timings=e.timings||{},"sendEventCompleted",n)}))}(e.events(),n)}))}}(n.batches)),Ce(n.batches,t,n.sendType,!0)}finally{0===n.sendType&&(Y--,5!==i&&e.sendQueuedRequests(n.sendType,i))}}(r,u,a,v)),Ce(l,8004,r.sendType)}}(t,r,n,o)},a=n.isTeardown||n.isSync;try{y.sendPOST(t,r,a),e.sendListener&&e.sendListener(C,t,a,n.isBeacon)}catch(e){(0,d.jV)(v,"Unexpected exception sending payload. Ex:"+(0,l.eU)(e)),ce(r,0,{})}}),(0,a.Lm)(p,(function(){return"HttpManager:_doPayloadSend.sender"}),(function(){if(B)if(0===n.sendType&&Y++,u&&!n.isBeacon&&3!==y._transport){var t={data:C.data,urlString:C.urlString,headers:(0,s.l7)({},C.headers),timeout:C.timeout,disableXhrSync:C.disableXhrSync,disableFetchKeepAlive:C.disableFetchKeepAlive},i=!1;(0,a.Lm)(p,(function(){return"HttpManager:_doPayloadSend.sendHook"}),(function(){try{e.sendHook(t,(function(e){i=!0,$||e._thePayload||(e._thePayload=e._thePayload||C._thePayload,e._sendReason=e._sendReason||C._sendReason),B(e)}),n.isSync||n.isTeardown)}catch(e){i||B(C)}}))}else B(C)}))}),(function(){return{thePayload:n,serializationStart:t,serializationCompleted:r,sendReason:o}}),n.isSync)}n.sizeExceed&&n.sizeExceed.length>0&&Ce(n.sizeExceed,8003,n.sendType),n.failedEvts&&n.failedEvts.length>0&&Ce(n.failedEvts,8002,n.sendType)}function Oe(e,n,t){n?e():u.set(e,t)}function Pe(n){var t=e._responseHandlers;try{for(var i=0;i<t.length;i++)try{t[i](n)}catch(e){(0,d.kP)(v,1,519,"Response handler failed: "+e)}if(n){var r=JSON.parse(n);(0,s.Sn)(r.webResult)&&(0,s.Sn)(r.webResult[z])&&y.set("MSFPC",r.webResult[z],31536e3)}}catch(e){}}function Ce(e,n,t,i){if(e&&e.length>0&&o){var r=o[(c=n,l=he[c],(0,s.Sn)(l)||(l=w,c>=9e3&&c<=9999?l=x:c>=8e3&&c<=8999?l=S:c>=1e3&&c<=1999&&(l=T)),l)];if(r){var u=0!==t;(0,a.Lm)(p,(function(){return"HttpManager:_sendBatchesNotification"}),(function(){Oe((function(){try{r.call(o,e,n,u,t)}catch(e){(0,d.kP)(v,1,74,"send request notification failed: "+e)}}),i||u,0)}),(function(){return{batches:Re(e),reason:n,isSync:u,sendSync:i,sendType:t}}),!u)}}var c,l}e.initialize=function(e,n,t,i,a){var o;a||(a={}),I=e+I,oe=!!(0,c.o8)(a.avoidOptions)||!a.avoidOptions,p=n,y=n.getCookieMgr(),re=!p.config.disableEventTimings;var u=!!p.config.enableCompoundKey;v=(f=t).diagLog();var s=a.valueSanitizer,g=a.stringifyObjects;(0,c.o8)(a.enableCompoundKey)||(u=!!a.enableCompoundKey),_=a.xhrTimeout,U=!!a.disableXhrSync,q=!!a.disableFetchKeepAlive,D=!1!==a.addNoResponse,Z=!(0,l.b$)(),ie=new le(p,s,g,u),(0,c.le)(a.useSendBeacon)||(Z=!!a.useSendBeacon);var m=i,b=a.alwaysUseXhrOverride?i:null,S=a.alwaysUseXhrOverride?i:null,T=[3,2];if(!i){$=!1;var x=(0,l.k$)();x&&x.protocol&&"file:"===x.protocol.toLowerCase()&&(r=!1);var w=[];(0,l.b$)()?(w=[2,1],T=[2,1,3]):w=[1,2,3],(i=X(w=Te(w,a.transports),!1))||(0,d.jV)(v,"No available transport to send events"),m=X(w,!0)}b||(b=X(T=Te(T,a.unloadTransports),!0)),j=!$&&(Z&&(0,l.MF)()||!q&&(0,l.JO)(!0)),(o={})[0]=i,o[1]=m||X([1,2,3],!0),o[2]=b||m||X([1],!0),o[3]=S||X([2,3],!0)||m||X([1],!0),h=o},e._getDbgPlgTargets=function(){return[h[0],N,ie,h]},e.addQueryStringParameter=function(e,n){for(var t=0;t<G.length;t++)if(G[t].name===e)return void(G[t].value=n);G.push({name:e,value:n})},e.addHeader=function(e,n){ne[e]=n},e.canSendRequest=function(){return _e()&&Q.allowRequestSending()},e.sendQueuedRequests=function(e,n){(0,c.o8)(e)&&(e=0),ae&&(e=ge(e),n=2),we(te,e,0)&&ke(xe(),0,!1,e,n||0)},e.isCompletelyIdle=function(){return!J&&0===Y&&0===te.length},e.setUnloading=function(e){ae=e},e.addBatch=function(e){if(e&&e.count()>0){if(N.isTenantKilled(e.iKey()))return!1;te.push(e)}return!0},e.teardown=function(){te.length>0&&ke(xe(),0,!0,2,2)},e.pause=function(){J=!0},e.resume=function(){J=!1,e.sendQueuedRequests(0,4)},e.sendSynchronousBatch=function(e,n,t){e&&e.count()>0&&((0,c.le)(n)&&(n=1),ae&&(n=ge(n),t=2),ke([e],0,!1,n,t||0))}}))}return e.__ieDyn=1,e}();function xe(e,n){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];return setTimeout(e,n,t)}function we(e){clearTimeout(e)}function Re(e,n){return{set:e||xe,clear:n||we}}var ke=.25,Ee=500,Ke=20,Oe=6,Pe=2,Ce=4,Me=2,Be=1,Ae="eventsDiscarded",He="overrideInstrumentationKey",Le="maxEventRetryAttempts",Fe="maxUnloadEventRetryAttempts",Ue="addUnloadCb";const qe=function(e){function n(){var t,i=e.call(this)||this;i.identifier="PostChannel",i.priority=1011,i.version="3.2.9";var v,g,m,b,S,T,_,x=!1,w=[],R=null,k=!1,E=0,K=500,O=0,P=1e4,C={},M=h,B=null,A=null,H=0,L=0,F={},q=-1,z=!0,I=!1,N=Oe,X=Pe;return(0,r.Z)(n,i,(function(e,n){function i(e){"beforeunload"!==(e||(0,l.Jj)().event).type&&(I=!0,g.setUnloading(I)),ne(2,2)}function r(e){I=!1,g.setUnloading(I)}function Q(e,n){if(e.sendAttempt||(e.sendAttempt=0),e.latency||(e.latency=1),e.ext&&e.ext[j]&&delete e.ext[j],e.ext&&e.ext[D]&&e.ext[D].id&&delete e.ext[D].id,z&&(s.if,e.ext=(0,c.Ax)(e.ext),e.baseData&&(e.baseData=(0,c.Ax)(e.baseData)),e.data&&(e.data=(0,c.Ax)(e.data))),e.sync)if(H||k)e.latency=3,e.sync=!1;else if(g)return z&&(e=(0,c.Ax)(e)),void g.sendSynchronousBatch(J.create(e.iKey,[e]),!0===e.sync?1:e.sync,3);var t=e.latency,i=O,r=P;4===t&&(i=E,r=K);var a=!1;if(i<r)a=!re(e,n);else{var o=1,u=Ke;4===t&&(o=4,u=1),a=!0,function(e,n,t,i){for(;t<=n;){var r=te(e,n,!0);if(r&&r.count()>0){var a=r.split(0,i),o=a.count();if(o>0)return 4===t?E-=o:O-=o,ve(Ae,[a],f.h.QueueFull),!0}t++}return ae(),!1}(e.iKey,e.latency,o,u)&&(a=!re(e,n))}a&&de(Ae,[e],f.h.QueueFull)}function W(e,n,t){var i=oe(e,n,t);return g.sendQueuedRequests(n,t),i}function V(){return O>0}function Z(){if(q>=0&&oe(q,0,S)&&g.sendQueuedRequests(0,S),E>0&&!A&&!k){var e=C[M][2];e>=0&&(A=$((function(){A=null,W(4,0,1),Z()}),e))}var n=C[M][1];!B&&!R&&n>=0&&!k&&(V()?B=$((function(){B=null,W(0===L?3:1,0,1),L++,L%=2,Z()}),n):L=0)}function Y(){t=null,x=!1,w=[],R=null,k=!1,E=0,K=500,O=0,P=1e4,C={},M=h,B=null,A=null,H=0,L=0,v=null,F={},m=void 0,b=0,q=-1,S=null,z=!0,I=!1,N=Oe,X=Pe,T=null,_=Re(),g=new _e(Ee,Me,Be,{requeue:le,send:he,sent:pe,drop:ye,rspFail:ge,oth:me},_),ce(),F[4]={batches:[],iKeyMap:{}},F[3]={batches:[],iKeyMap:{}},F[2]={batches:[],iKeyMap:{}},F[1]={batches:[],iKeyMap:{}},be()}function $(e,n){0===n&&H&&(n=1);var t=1e3;return H&&(t=ee(H-1)),_.set(e,n*t)}function G(){return null!==B&&(_.clear(B),B=null,L=0,!0)}function ne(e,n){G(),R&&(_.clear(R),R=null),k||W(1,e,n)}function te(e,n,t){var i=F[n];i||(i=F[n=1]);var r=i.iKeyMap[e];return!r&&t&&(r=J.create(e),i.batches.push(r),i.iKeyMap[e]=r),r}function ie(n,t){g.canSendRequest()&&!H&&(m>0&&O>m&&(t=!0),t&&null==R&&e.flush(n,null,20))}function re(e,n){z&&(e=(0,c.Ax)(e));var t=e.latency,i=te(e.iKey,t,!0);return!!i.addEvent(e)&&(4!==t?(O++,n&&0===e.sendAttempt&&ie(!e.sync,b>0&&i.count()>=b)):E++,!0)}function ae(){for(var e=0,n=0,t=function(t){var i=F[t];i&&i.batches&&(0,c.tO)(i.batches,(function(i){4===t?e+=i.count():n+=i.count()}))},i=1;i<=4;i++)t(i);O=n,E=e}function oe(n,t,i){var r=!1,o=0===t;return!o||g.canSendRequest()?(0,a.Lm)(e.core,(function(){return"PostChannel._queueBatches"}),(function(){for(var e=[],t=4;t>=n;){var i=F[t];i&&i.batches&&i.batches.length>0&&((0,c.tO)(i.batches,(function(n){g.addBatch(n)?r=r||n&&n.count()>0:e=e.concat(n.events()),4===t?E-=n.count():O-=n.count()})),i.batches=[],i.iKeyMap={}),t--}e.length>0&&de(Ae,e,f.h.KillSwitch),r&&q>=n&&(q=-1,S=0)}),(function(){return{latency:n,sendType:t,sendReason:i}}),!o):(q=q>=0?Math.min(q,n):n,S=Math.max(S,i)),r}function ue(e,n){W(1,0,n),ae(),se((function(){e&&e(),w.length>0?R=$((function(){R=null,ue(w.shift(),n)}),0):(R=null,Z())}))}function se(e){g.isCompletelyIdle()?e():R=$((function(){R=null,se(e)}),ke)}function ce(){(C={})[h]=[2,1,0],C[p]=[6,3,0],C[y]=[18,9,0]}function le(n,t){var i=[],r=N;I&&(r=X),(0,c.tO)(n,(function(n){n&&n.count()>0&&(0,c.tO)(n.events(),(function(n){n&&(n.sync&&(n.latency=4,n.sync=!1),n.sendAttempt<r?((0,s.if)(n,e.identifier),Q(n,!1)):i.push(n))}))})),i.length>0&&de(Ae,i,f.h.NonRetryableStatus),I&&ne(2,2)}function fe(n,t){var i=e._notificationManager||{},r=i[n];if(r)try{r.apply(i,t)}catch(t){(0,d.kP)(e.diagLog(),1,74,n+" notification failed: "+t)}}function de(e,n){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];n&&n.length>0&&fe(e,[n].concat(t))}function ve(e,n){for(var t=[],i=2;i<arguments.length;i++)t[i-2]=arguments[i];n&&n.length>0&&(0,c.tO)(n,(function(n){n&&n.count()>0&&fe(e,[n.events()].concat(t))}))}function he(e,n,t){e&&e.length>0&&fe("eventsSendRequest",[n>=1e3&&n<=1999?n-1e3:0,!0!==t])}function pe(e,n){ve("eventsSent",e,n),Z()}function ye(e,n){ve(Ae,e,n>=8e3&&n<=8999?n-8e3:f.h.Unknown)}function ge(e){ve(Ae,e,f.h.NonRetryableStatus),Z()}function me(e,n){ve(Ae,e,f.h.Unknown),Z()}function be(){b=t&&t.disableAutoBatchFlushLimit?0:Math.max(Ee*(Me+1),P/6)}Y(),e._getDbgPlgTargets=function(){return[g]},e.initialize=function(l,f,d){(0,a.Lm)(f,(function(){return"PostChannel:initialize"}),(function(){var a=f;n.initialize(l,f,d);try{f[Ue],T=(0,o.jU)((0,u.J)(e.identifier),f.evtNamespace&&f.evtNamespace());var h=e._getTelCtx();l.extensionConfig[e.identifier]=l.extensionConfig[e.identifier]||{},t=h.getExtCfg(e.identifier),_=Re(t.setTimeoutOverride,t.clearTimeoutOverride),z=!t.disableOptimizeObj&&(0,s.mJ)(),function(e){var n=e.getWParam;e.getWParam=function(){var e=0;return t.ignoreMc1Ms0CookieProcessing&&(e|=2),e|n()}}(a),t.eventsLimitInMem>0&&(P=t.eventsLimitInMem),t.immediateEventLimit>0&&(K=t.immediateEventLimit),t.autoFlushEventsLimit>0&&(m=t.autoFlushEventsLimit),(0,c.hj)(t[Le])&&(N=t[Le]),(0,c.hj)(t[Fe])&&(X=t[Fe]),be(),t.httpXHROverride&&t.httpXHROverride.sendPOST&&(v=t.httpXHROverride),(0,s.Sn)(l.anonCookieName)&&g.addQueryStringParameter("anoncknm",l.anonCookieName),g.sendHook=t.payloadPreprocessor,g.sendListener=t.payloadListener;var p=t.overrideEndpointUrl?t.overrideEndpointUrl:l.endpointUrl;e._notificationManager=f.getNotifyMgr(),g.initialize(p,e.core,e,v,t);var y=l.disablePageUnloadEvents||[];(0,o.c9)(i,y,T),(0,o.TJ)(i,y,T),(0,o.nD)(r,l.disablePageShowEvents,T)}catch(n){throw e.setInitialized(!1),n}}),(function(){return{coreConfig:l,core:f,extensions:d}}))},e.processTelemetry=function(n,i){(0,s.if)(n,e.identifier);var r=(i=e._getTelCtx(i)).getExtCfg(e.identifier),a=!!t.disableTelemetry;r&&(a=a||!!r.disableTelemetry);var o=n;a||x||(t[He]&&(o.iKey=t[He]),r&&r[He]&&(o.iKey=r[He]),Q(o,!0),I?ne(2,2):Z()),e.processNext(o,i)},e._doTeardown=function(e,n){ne(2,2),x=!0,g.teardown(),(0,o.JA)(null,T),(0,o.C9)(null,T),(0,o.Yl)(null,T),Y()},e.setEventQueueLimits=function(e,n){P=e>0?e:1e4,m=n>0?n:0,be();var t=O>e;if(!t&&b>0)for(var i=1;!t&&i<=3;i++){var r=F[i];r&&r.batches&&(0,c.tO)(r.batches,(function(e){e&&e.count()>=b&&(t=!0)}))}ie(!0,t)},e.pause=function(){G(),k=!0,g.pause()},e.resume=function(){k=!1,g.resume(),Z()},e.addResponseHandler=function(e){g._responseHandlers.push(e)},e._loadTransmitProfiles=function(e){G(),ce(),M=h,Z(),(0,c.rW)(e,(function(e,n){var t=n.length;if(t>=2){var i=t>2?n[2]:0;if(n.splice(0,t-2),n[1]<0&&(n[0]=-1),n[1]>0&&n[0]>0){var r=n[0]/n[1];n[0]=Math.ceil(r)*n[1]}i>=0&&n[1]>=0&&i>n[1]&&(i=n[1]),n.push(i),C[e]=n}}))},e.flush=function(e,n,t){if(void 0===e&&(e=!0),!k)if(t=t||1,e)null==R?(G(),oe(1,0,t),R=$((function(){R=null,ue(n,t)}),0)):w.push(n);else{var i=G();W(1,1,t),null!=n&&n(),i&&Z()}},e.setMsaAuthTicket=function(e){g.addHeader(U,e)},e.hasEvents=V,e._setTransmitProfile=function(e){M!==e&&void 0!==C[e]&&(G(),M=e,Z())},e._backOffTransmission=function(){H<Ce&&(H++,G(),Z())},e._clearBackOff=function(){H&&(H=0,G(),Z())},(0,c.l_)(e,"_setTimeoutOverride",(function(){return _.set}),(function(e){_=Re(e,_.clear)})),(0,c.l_)(e,"_clearTimeoutOverride",(function(){return _.clear}),(function(e){_=Re(_.set,e)}))})),i}return(0,i.ne)(n,e),n.__ieDyn=1,n}(v.i)}};
//# sourceMappingURL=488.js.map