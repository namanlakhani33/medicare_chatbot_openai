(self.webpackChunk_streamlit_app=self.webpackChunk_streamlit_app||[]).push([[3301],{40763:function(n,t,e){"use strict";var a=e(66845),r=e(7974),i=e.n(r),o=e(23175),c=e.n(o),u=e(40864),s=function(n){var t=n.className,e=n.scriptRunId,a=n.numParticles,r=n.numParticleTypes,o=n.ParticleComponent;return(0,u.jsx)("div",{className:c()(t,"stHidden"),"data-testid":"".concat(t),children:i()(a).map((function(n){var t=Math.floor(Math.random()*r);return(0,u.jsx)(o,{particleType:t},e+n)}))})};t.Z=(0,a.memo)(s)},69436:function(n,t,e){"use strict";e.r(t),e.d(t,{NUM_FLAKES:function(){return v},default:function(){return b}});var a,r=e(66845),i=e.p+"static/media/flake-0.beded754e8024c73d9d2.png",o=e.p+"static/media/flake-1.8077dc154e0bf900aa73.png",c=e.p+"static/media/flake-2.e3f07d06933dd0e84c24.png",u=e(40763),s=e(50669),f=e(1515),p=e(7865),m=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.random()*(n-t)+t},l=(0,f.Z)("img",{target:"ekdfb790"})((function(n){var t=n.theme;return{position:"fixed",top:"".concat(-150,"px"),marginLeft:"".concat(-75,"px"),zIndex:t.zIndices.balloons,left:"".concat(m(90,10),"vw"),animationDelay:"".concat(m(4e3),"ms"),height:"".concat(150,"px"),width:"".concat(150,"px"),pointerEvents:"none",animationDuration:"3000ms",animationName:(0,p.F4)(a||(a=(0,s.Z)(["\n  from {\n    transform:\n      translateY(0)\n      rotateX(","deg)\n      rotateY(","deg)\n      rotateZ(","deg);\n  }\n\n  to {\n    transform:\n      translateY(calc(100vh + ","px))\n      rotateX(0)\n      rotateY(0)\n      rotateZ(0);\n  }\n"])),m(360),m(360),m(360),150),animationTimingFunction:"ease-in",animationDirection:"normal",animationIterationCount:1,opacity:1}}),""),d=e(40864),v=100,x=[i,o,c],h=x.length,g=function(n){var t=n.particleType;return(0,d.jsx)(l,{src:x[t]})},y=function(n){var t=n.scriptRunId;return(0,d.jsx)(u.Z,{className:"snow",scriptRunId:t,numParticleTypes:h,numParticles:v,ParticleComponent:g})},b=(0,r.memo)(y)},61054:function(n){var t=Math.ceil,e=Math.max;n.exports=function(n,a,r,i){for(var o=-1,c=e(t((a-n)/(r||1)),0),u=Array(c);c--;)u[i?c:++o]=n,n+=r;return u}},13811:function(n,t,e){var a=e(51030),r=/^\s+/;n.exports=function(n){return n?n.slice(0,a(n)+1).replace(r,""):n}},10583:function(n,t,e){var a=e(61054),r=e(18621),i=e(78054);n.exports=function(n){return function(t,e,o){return o&&"number"!=typeof o&&r(t,e,o)&&(e=o=void 0),t=i(t),void 0===e?(e=t,t=0):e=i(e),o=void 0===o?t<e?1:-1:i(o),a(t,e,o,n)}}},51030:function(n){var t=/\s/;n.exports=function(n){for(var e=n.length;e--&&t.test(n.charAt(e)););return e}},7974:function(n,t,e){var a=e(10583)();n.exports=a},78054:function(n,t,e){var a=e(90773),r=1/0;n.exports=function(n){return n?(n=a(n))===r||n===-1/0?17976931348623157e292*(n<0?-1:1):n===n?n:0:0===n?n:0}},90773:function(n,t,e){var a=e(13811),r=e(60506),i=e(3490),o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt;n.exports=function(n){if("number"==typeof n)return n;if(i(n))return NaN;if(r(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=r(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=a(n);var e=c.test(n);return e||u.test(n)?s(n.slice(2),e?2:8):o.test(n)?NaN:+n}}}]);