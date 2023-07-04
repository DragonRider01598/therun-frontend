"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=t(e);function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}const o=()=>{const[t,n]=e.useState();return e.useEffect((()=>{n(window.location.hostname)}),[]),t},a="https://embed.twitch.tv/embed/v1.js",i="https://www.twitch.tv/embed",l="https://clips.twitch.tv/embed",d="https://player.twitch.tv/js/embed/v1.js",c="https://player.twitch.tv",s={HEIGHT:550,WIDTH:350},u={HEIGHT:480,WIDTH:940},h={TWITCH_EMBED:"twitch-embed",TWITCH_PLAYER:"twitch-player"},p={TWITCH_CHAT:"TwitchChat",TWITCH_CLIP:"TwitchClip",TWITCH_PLAYER_NON_INTERACTIVE:"TwitchPlayerNonInteractive"},y=!0,E=!0,v=!0,w=!1,g=!0,m="0h0m0s",f=!1,T=!0,P={darkMode:g},I={darkMode:g,title:p.TWITCH_CHAT,height:s.HEIGHT,width:s.WIDTH},C=e=>{var{channel:t,parent:a,darkMode:l,title:d,height:c,width:s}=e,u=r(e,["channel","parent","darkMode","title","height","width"]);const h=o();if(!a&&!h)return null;const p=((e,t,n=P)=>{const r=Object.assign(Object.assign({},P),n),o=new URLSearchParams;Array.isArray(t)?t.forEach((e=>o.append("parent",e))):o.append("parent",t);const a=r.darkMode?"?darkpopout&":"?";return`${i}/${e}/chat${a}${o.toString()}`})(t,null!=a?a:h,{darkMode:l});return n.default.createElement("iframe",Object.assign({title:d,height:c,width:s,src:p,frameBorder:0},u))};C.defaultProps=I;const b={autoplay:E,muted:w},O={autoplay:E,muted:w,title:p.TWITCH_CLIP,height:u.HEIGHT,width:u.WIDTH},L=e=>{var{clip:t,parent:a,autoplay:i,muted:d,title:c,height:s,width:u}=e,h=r(e,["clip","parent","autoplay","muted","title","height","width"]);const p=o();if(!a&&!p)return null;const y=((e,t,n=b)=>{const r=Object.assign(Object.assign({},b),n),o=new URLSearchParams;return o.append("clip",e),o.append("autoplay",r.autoplay.toString()),o.append("muted",r.muted.toString()),Array.isArray(t)?t.forEach((e=>o.append("parent",e))):o.append("parent",t),`${l}?${o.toString()}`})(t,null!=a?a:p,{autoplay:i,muted:d});return n.default.createElement("iframe",Object.assign({title:c,height:s,width:u,src:y,frameBorder:0},h))};L.defaultProps=O;const H=t=>{const[n,r]=e.useState({loading:!0,error:null});return e.useEffect((()=>{if(!t)return void r({loading:!1,error:new Error("No src provided to useScript.")});let e=document.querySelector(`script[src="${t}"]`);e?r((t=>Object.assign(Object.assign({},t),{loading:"true"===e.getAttribute("data-loading")}))):(e=document.createElement("script"),e.src=t,e.async=!0,e.type="text/javascript",e.setAttribute("data-loading","true"),document.body.appendChild(e),e.addEventListener("load",(()=>{null==e||e.setAttribute("data-loading","false")}),{once:!0}),e.addEventListener("error",(()=>{null==e||e.setAttribute("data-loading","false")}),{once:!0}));const n=e=>{"load"===e.type?r({loading:!1,error:null}):"error"===e.type&&r({loading:!1,error:new Error(`There was an error loading the script for ${t}`)})};return e.addEventListener("load",n),e.addEventListener("error",n),()=>{null==e||e.removeEventListener("load",n),null==e||e.removeEventListener("error",n)}}),[t]),n},A=t=>{const n=e.useRef();return e.useEffect((()=>{n.current=t}),[t]),n.current},j=(e,t,n)=>{for(const r in e){if(e[r]!==t[r]&&!n.includes(r))return!0}return!1},k=e=>{const t=document.getElementById(e);t&&(t.innerHTML="")},S={allowFullscreen:y,autoplay:E,withChat:v,muted:w,darkMode:g,time:m,hideControls:f,onAuthenticate:(e,t)=>{},onVideoPlay:(e,t)=>{},onVideoPause:e=>{},onVideoReady:e=>{},id:h.TWITCH_EMBED,height:u.HEIGHT,width:u.WIDTH},R=["channel","video","collection","height","width"],_=t=>{const{allowFullscreen:o,autoplay:i,channel:l,video:d,collection:c,withChat:s,muted:u,parent:h,darkMode:p,time:y,hideControls:E,onAuthenticate:v,onVideoPlay:w,onVideoPause:g,onVideoReady:m,id:f,height:T,width:P}=t,I=r(t,["allowFullscreen","autoplay","channel","video","collection","withChat","muted","parent","darkMode","time","hideControls","onAuthenticate","onVideoPlay","onVideoPause","onVideoReady","id","height","width"]),{loading:C,error:b}=H(a),O=A(t),L=e.useRef(),S=e.useCallback((e=>{k(f);const t=new e(f,{allowfullscreen:o,autoplay:i,channel:l,video:d,collection:c,layout:s?"video-with-chat":"video",muted:u,parent:"string"==typeof h?[h]:h,theme:p?"dark":"light",time:y,controls:!E,height:"100%",width:"100%"});return t.addEventListener(e.AUTHENTICATE,(e=>v(t,e))),t.addEventListener(e.VIDEO_PLAY,(e=>w(t,e))),t.addEventListener(e.VIDEO_PAUSE,(()=>g(t))),t.addEventListener(e.VIDEO_READY,(()=>m(t))),t}),[o,i,l,d,c,s,u,h,p,y,E,v,g,w,m,f]);return e.useEffect((()=>{C||(b?console.error(b):L.current&&!((e,t)=>{var n;return j(null!==(n=e)&&void 0!==n?n:{},t,R)})(O,t)?(l&&(null==O?void 0:O.channel)!==l&&L.current.getPlayer().setChannel(l),d&&(null==O?void 0:O.video)!==d&&L.current.getPlayer().setVideo(d,0),c&&(null==O?void 0:O.collection)!==c&&L.current.getPlayer().setCollection(c,d)):L.current=S(window.Twitch.Embed))}),[l,c,S,b,C,O,t,d]),C?null:n.default.createElement("div",Object.assign({id:f,style:{height:T,width:P}},I))};_.defaultProps=S;const D={autoplay:E,muted:w,time:m,allowFullscreen:y,playsInline:T,hideControls:f,onCaptions:(e,t)=>{},onEnded:e=>{},onPause:e=>{},onPlay:(e,t)=>{},onPlaybackBlocked:e=>{},onPlaying:e=>{},onOffline:e=>{},onOnline:e=>{},onReady:e=>{},onSeek:(e,t)=>{},id:h.TWITCH_PLAYER,height:u.HEIGHT,width:u.WIDTH},W=["channel","video","collection","height","width"],N=t=>{const{channel:o,video:a,collection:i,parent:l,autoplay:c,muted:s,time:u,allowFullscreen:h,playsInline:p,hideControls:y,onCaptions:E,onEnded:v,onPause:w,onPlay:g,onPlaybackBlocked:m,onPlaying:f,onOffline:T,onOnline:P,onReady:I,onSeek:C,id:b,height:O,width:L}=t,S=r(t,["channel","video","collection","parent","autoplay","muted","time","allowFullscreen","playsInline","hideControls","onCaptions","onEnded","onPause","onPlay","onPlaybackBlocked","onPlaying","onOffline","onOnline","onReady","onSeek","id","height","width"]),{loading:R,error:_}=H(d),D=A(t),N=e.useRef(),V=e.useCallback((e=>{k(b);const t=new e(b,{channel:o,video:a,collection:i,parent:"string"==typeof l?[l]:l,autoplay:c,muted:s,time:u,allowfullscreen:h,playsinline:p,controls:!y,height:"100%",width:"100%"});return t.addEventListener(e.CAPTIONS,(e=>E(t,e))),t.addEventListener(e.ENDED,(()=>v(t))),t.addEventListener(e.PAUSE,(()=>w(t))),t.addEventListener(e.PLAY,(e=>g(t,e))),t.addEventListener(e.PLAYBACK_BLOCKED,(()=>m(t))),t.addEventListener(e.PLAYING,(()=>f(t))),t.addEventListener(e.OFFLINE,(()=>T(t))),t.addEventListener(e.ONLINE,(()=>P(t))),t.addEventListener(e.READY,(()=>I(t))),t.addEventListener(e.SEEK,(e=>C(t,e))),t}),[o,a,i,l,c,s,u,h,p,y,E,v,T,P,w,g,m,f,I,C,b]);return e.useEffect((()=>{R||(_?console.error(_):N.current&&!((e,t)=>{var n;return j(null!==(n=e)&&void 0!==n?n:{},t,W)})(D,t)?(o&&(null==D?void 0:D.channel)!==o&&N.current.setChannel(o),a&&(null==D?void 0:D.video)!==a&&N.current.setVideo(a,0),i&&(null==D?void 0:D.collection)!==i&&N.current.setCollection(i,a)):N.current=V(window.Twitch.Player))}),[o,i,V,_,R,D,t,a]),R?null:n.default.createElement("div",Object.assign({id:b,style:{height:O,width:L}},S))};N.defaultProps=D;const V={autoplay:E,muted:w,time:m},M={autoplay:E,muted:w,time:m,title:p.TWITCH_PLAYER_NON_INTERACTIVE,height:u.HEIGHT,width:u.WIDTH},B=e=>{var{parent:t,channel:a,video:i,collection:l,autoplay:d,muted:s,time:u,title:h,height:p,width:y}=e,E=r(e,["parent","channel","video","collection","autoplay","muted","time","title","height","width"]);const v=o();if(!t&&!v)return null;const w=((e,t,n=V)=>{const r=Object.assign(Object.assign({},V),n),o=new URLSearchParams;return e.channel?o.append("channel",e.channel):(e.video&&o.append("video",e.video),e.collection&&o.append("collection",e.collection)),Object.entries(r).forEach((([e,t])=>{o.append(e,t.toString())})),Array.isArray(t)?t.forEach((e=>o.append("parent",e))):o.append("parent",t),`${c}/?${o.toString()}`})({channel:a,video:i,collection:l},null!=t?t:v,{autoplay:d,muted:s,time:u});return n.default.createElement("iframe",Object.assign({title:h,height:p,width:y,src:w,frameBorder:0},E))};B.defaultProps=M,exports.TwitchChat=C,exports.TwitchClip=L,exports.TwitchEmbed=_,exports.TwitchPlayer=N,exports.TwitchPlayerNonInteractive=B;
//# sourceMappingURL=index.js.map