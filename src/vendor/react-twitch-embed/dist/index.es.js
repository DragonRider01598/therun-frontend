import e,{useState as t,useEffect as n,useRef as o,useCallback as r}from"react";function i(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}const a=()=>{const[e,o]=t();return n((()=>{o(window.location.hostname)}),[]),e},l="https://embed.twitch.tv/embed/v1.js",d="https://www.twitch.tv/embed",c="https://clips.twitch.tv/embed",s="https://player.twitch.tv/js/embed/v1.js",h="https://player.twitch.tv",u={HEIGHT:550,WIDTH:350},p={HEIGHT:480,WIDTH:940},y={TWITCH_EMBED:"twitch-embed",TWITCH_PLAYER:"twitch-player"},E={TWITCH_CHAT:"TwitchChat",TWITCH_CLIP:"TwitchClip",TWITCH_PLAYER_NON_INTERACTIVE:"TwitchPlayerNonInteractive"},m=!0,g=!0,v=!0,w=!1,T=!0,P="0h0m0s",I=!1,f=!0,C={darkMode:T},O={darkMode:T,title:E.TWITCH_CHAT,height:u.HEIGHT,width:u.WIDTH},L=t=>{var{channel:n,parent:o,darkMode:r,title:l,height:c,width:s}=t,h=i(t,["channel","parent","darkMode","title","height","width"]);const u=a();if(!o&&!u)return null;const p=((e,t,n=C)=>{const o=Object.assign(Object.assign({},C),n),r=new URLSearchParams;Array.isArray(t)?t.forEach((e=>r.append("parent",e))):r.append("parent",t);const i=o.darkMode?"?darkpopout&":"?";return`${d}/${e}/chat${i}${r.toString()}`})(n,null!=o?o:u,{darkMode:r});return e.createElement("iframe",Object.assign({title:l,height:c,width:s,src:p,frameBorder:0},h))};L.defaultProps=O;const b={autoplay:g,muted:w},H={autoplay:g,muted:w,title:E.TWITCH_CLIP,height:p.HEIGHT,width:p.WIDTH},A=t=>{var{clip:n,parent:o,autoplay:r,muted:l,title:d,height:s,width:h}=t,u=i(t,["clip","parent","autoplay","muted","title","height","width"]);const p=a();if(!o&&!p)return null;const y=((e,t,n=b)=>{const o=Object.assign(Object.assign({},b),n),r=new URLSearchParams;return r.append("clip",e),r.append("autoplay",o.autoplay.toString()),r.append("muted",o.muted.toString()),Array.isArray(t)?t.forEach((e=>r.append("parent",e))):r.append("parent",t),`${c}?${r.toString()}`})(n,null!=o?o:p,{autoplay:r,muted:l});return e.createElement("iframe",Object.assign({title:d,height:s,width:h,src:y,frameBorder:0},u))};A.defaultProps=H;const j=e=>{const[o,r]=t({loading:!0,error:null});return n((()=>{if(!e)return void r({loading:!1,error:new Error("No src provided to useScript.")});let t=document.querySelector(`script[src="${e}"]`);t?r((e=>Object.assign(Object.assign({},e),{loading:"true"===t.getAttribute("data-loading")}))):(t=document.createElement("script"),t.src=e,t.async=!0,t.type="text/javascript",t.setAttribute("data-loading","true"),document.body.appendChild(t),t.addEventListener("load",(()=>{null==t||t.setAttribute("data-loading","false")}),{once:!0}),t.addEventListener("error",(()=>{null==t||t.setAttribute("data-loading","false")}),{once:!0}));const n=t=>{"load"===t.type?r({loading:!1,error:null}):"error"===t.type&&r({loading:!1,error:new Error(`There was an error loading the script for ${e}`)})};return t.addEventListener("load",n),t.addEventListener("error",n),()=>{null==t||t.removeEventListener("load",n),null==t||t.removeEventListener("error",n)}}),[e]),o},k=e=>{const t=o();return n((()=>{t.current=e}),[e]),t.current},S=(e,t,n)=>{for(const o in e){if(e[o]!==t[o]&&!n.includes(o))return!0}return!1},_=e=>{const t=document.getElementById(e);t&&(t.innerHTML="")},D={allowFullscreen:m,autoplay:g,withChat:v,muted:w,darkMode:T,time:P,hideControls:I,onAuthenticate:(e,t)=>{},onVideoPlay:(e,t)=>{},onVideoPause:e=>{},onVideoReady:e=>{},id:y.TWITCH_EMBED,height:p.HEIGHT,width:p.WIDTH},R=["channel","video","collection","height","width"],W=t=>{const{allowFullscreen:a,autoplay:d,channel:c,video:s,collection:h,withChat:u,muted:p,parent:y,darkMode:E,time:m,hideControls:g,onAuthenticate:v,onVideoPlay:w,onVideoPause:T,onVideoReady:P,id:I,height:f,width:C}=t,O=i(t,["allowFullscreen","autoplay","channel","video","collection","withChat","muted","parent","darkMode","time","hideControls","onAuthenticate","onVideoPlay","onVideoPause","onVideoReady","id","height","width"]),{loading:L,error:b}=j(l),H=k(t),A=o(),D=r((e=>{_(I);const t=new e(I,{allowfullscreen:a,autoplay:d,channel:c,video:s,collection:h,layout:u?"video-with-chat":"video",muted:p,parent:"string"==typeof y?[y]:y,theme:E?"dark":"light",time:m,controls:!g,height:"100%",width:"100%"});return t.addEventListener(e.AUTHENTICATE,(e=>v(t,e))),t.addEventListener(e.VIDEO_PLAY,(e=>w(t,e))),t.addEventListener(e.VIDEO_PAUSE,(()=>T(t))),t.addEventListener(e.VIDEO_READY,(()=>P(t))),t}),[a,d,c,s,h,u,p,y,E,m,g,v,T,w,P,I]);return n((()=>{L||(b?console.error(b):A.current&&!((e,t)=>{var n;return S(null!==(n=e)&&void 0!==n?n:{},t,R)})(H,t)?(c&&(null==H?void 0:H.channel)!==c&&A.current.getPlayer().setChannel(c),s&&(null==H?void 0:H.video)!==s&&A.current.getPlayer().setVideo(s,0),h&&(null==H?void 0:H.collection)!==h&&A.current.getPlayer().setCollection(h,s)):A.current=D(window.Twitch.Embed))}),[c,h,D,b,L,H,t,s]),L?null:e.createElement("div",Object.assign({id:I,style:{height:f,width:C}},O))};W.defaultProps=D;const V={autoplay:g,muted:w,time:P,allowFullscreen:m,playsInline:f,hideControls:I,onCaptions:(e,t)=>{},onEnded:e=>{},onPause:e=>{},onPlay:(e,t)=>{},onPlaybackBlocked:e=>{},onPlaying:e=>{},onOffline:e=>{},onOnline:e=>{},onReady:e=>{},onSeek:(e,t)=>{},id:y.TWITCH_PLAYER,height:p.HEIGHT,width:p.WIDTH},N=["channel","video","collection","height","width"],M=t=>{const{channel:a,video:l,collection:d,parent:c,autoplay:h,muted:u,time:p,allowFullscreen:y,playsInline:E,hideControls:m,onCaptions:g,onEnded:v,onPause:w,onPlay:T,onPlaybackBlocked:P,onPlaying:I,onOffline:f,onOnline:C,onReady:O,onSeek:L,id:b,height:H,width:A}=t,D=i(t,["channel","video","collection","parent","autoplay","muted","time","allowFullscreen","playsInline","hideControls","onCaptions","onEnded","onPause","onPlay","onPlaybackBlocked","onPlaying","onOffline","onOnline","onReady","onSeek","id","height","width"]),{loading:R,error:W}=j(s),V=k(t),M=o(),B=r((e=>{_(b);const t=new e(b,{channel:a,video:l,collection:d,parent:"string"==typeof c?[c]:c,autoplay:h,muted:u,time:p,allowfullscreen:y,playsinline:E,controls:!m,height:"100%",width:"100%"});return t.addEventListener(e.CAPTIONS,(e=>g(t,e))),t.addEventListener(e.ENDED,(()=>v(t))),t.addEventListener(e.PAUSE,(()=>w(t))),t.addEventListener(e.PLAY,(e=>T(t,e))),t.addEventListener(e.PLAYBACK_BLOCKED,(()=>P(t))),t.addEventListener(e.PLAYING,(()=>I(t))),t.addEventListener(e.OFFLINE,(()=>f(t))),t.addEventListener(e.ONLINE,(()=>C(t))),t.addEventListener(e.READY,(()=>O(t))),t.addEventListener(e.SEEK,(e=>L(t,e))),t}),[a,l,d,c,h,u,p,y,E,m,g,v,f,C,w,T,P,I,O,L,b]);return n((()=>{R||(W?console.error(W):M.current&&!((e,t)=>{var n;return S(null!==(n=e)&&void 0!==n?n:{},t,N)})(V,t)?(a&&(null==V?void 0:V.channel)!==a&&M.current.setChannel(a),l&&(null==V?void 0:V.video)!==l&&M.current.setVideo(l,0),d&&(null==V?void 0:V.collection)!==d&&M.current.setCollection(d,l)):M.current=B(window.Twitch.Player))}),[a,d,B,W,R,V,t,l]),R?null:e.createElement("div",Object.assign({id:b,style:{height:H,width:A}},D))};M.defaultProps=V;const B={autoplay:g,muted:w,time:P},Y={autoplay:g,muted:w,time:P,title:E.TWITCH_PLAYER_NON_INTERACTIVE,height:p.HEIGHT,width:p.WIDTH},$=t=>{var{parent:n,channel:o,video:r,collection:l,autoplay:d,muted:c,time:s,title:u,height:p,width:y}=t,E=i(t,["parent","channel","video","collection","autoplay","muted","time","title","height","width"]);const m=a();if(!n&&!m)return null;const g=((e,t,n=B)=>{const o=Object.assign(Object.assign({},B),n),r=new URLSearchParams;return e.channel?r.append("channel",e.channel):(e.video&&r.append("video",e.video),e.collection&&r.append("collection",e.collection)),Object.entries(o).forEach((([e,t])=>{r.append(e,t.toString())})),Array.isArray(t)?t.forEach((e=>r.append("parent",e))):r.append("parent",t),`${h}/?${r.toString()}`})({channel:o,video:r,collection:l},null!=n?n:m,{autoplay:d,muted:c,time:s});return e.createElement("iframe",Object.assign({title:u,height:p,width:y,src:g,frameBorder:0},E))};$.defaultProps=Y;export{L as TwitchChat,A as TwitchClip,W as TwitchEmbed,M as TwitchPlayer,$ as TwitchPlayerNonInteractive};
//# sourceMappingURL=index.es.js.map