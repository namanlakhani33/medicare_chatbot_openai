"use strict";(self.webpackChunk_streamlit_app=self.webpackChunk_streamlit_app||[]).push([[6013],{79986:function(e,t,r){r.d(t,{Z:function(){return p}});r(66845);var n,o=r(50641),i=r(86659),a=r(50189),c=r(50669),l=r(1515),s=(0,r(7865).F4)(n||(n=(0,c.Z)(["\n  50% {\n    color: rgba(0, 0, 0, 0);\n  }\n"]))),u=(0,l.Z)("span",{target:"edlqvik0"})((function(e){var t=e.includeDot,r=e.shouldBlink,n=e.theme;return(0,a.Z)((0,a.Z)({},t?{"&::before":{opacity:1,content:'"\u2022"',animation:"none",color:n.colors.gray,margin:"0 5px"}}:{}),r?{color:n.colors.red,animationName:"".concat(s),animationDuration:"0.5s",animationIterationCount:5}:{})}),""),d=r(40864),p=function(e){var t=e.dirty,r=e.value,n=e.maxLength,a=e.className,c=e.type,l=void 0===c?"single":c,s=e.inForm,p=[],f=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];p.push((0,d.jsx)(u,{includeDot:p.length>0,shouldBlink:t,children:e},p.length))};if(t){var h=s?"submit form":"apply";if("multiline"===l){var y=(0,o.Ge)()?"\u2318":"Ctrl";f("Press ".concat(y,"+Enter to ").concat(h))}else"single"===l&&f("Press Enter to ".concat(h))}return n&&("chat"!==l||t)&&f("".concat(r.length,"/").concat(n),t&&r.length>=n),(0,d.jsx)(i.X7,{"data-testid":"InputInstructions",className:a,children:p})}},46013:function(e,t,r){r.r(t),r.d(t,{default:function(){return C}});var n=r(11026),o=r(66845),i=r(25621),a=r(25773),c=r(69),l=o.forwardRef((function(e,t){return o.createElement(c.D,(0,a.Z)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),o.createElement("rect",{width:24,height:24,fill:"none"}),o.createElement("path",{d:"M3 5.51v3.71c0 .46.31.86.76.97L11 12l-7.24 1.81c-.45.11-.76.51-.76.97v3.71c0 .72.73 1.2 1.39.92l15.42-6.49c.82-.34.82-1.5 0-1.84L4.39 4.58C3.73 4.31 3 4.79 3 5.51z"}))}));l.displayName="Send";var s=r(118),u=r(46927),d=r(79986),p=r(95118),f=r(64649),h=r(50189),y=r(1515),g=r(16295);var b=(0,y.Z)("div",{target:"e1d2x3se5"})((function(e){var t=e.theme,r=e.width,n=e.position,o=(0,p.Iy)(t);return(0,h.Z)((0,h.Z)({borderRadius:t.radii.lg,display:"flex"},n===g.xg.Position.BOTTOM&&{backgroundColor:o?t.colors.gray20:t.colors.gray90}),{},{width:"".concat(r,"px")})}),""),m=(0,y.Z)("div",{target:"e1d2x3se4"})((function(e){var t=e.theme;return{backgroundColor:t.colors.transparent,position:"relative",flexGrow:1,borderRadius:t.radii.lg,display:"flex",alignItems:"center"}}),""),v=(0,y.Z)("button",{target:"e1d2x3se3"})((function(e){var t=e.theme,r=e.disabled,o=e.extended,i=(0,p.Iy)(t),a=i?[t.colors.gray60,t.colors.gray80]:[t.colors.gray80,t.colors.gray40],c=(0,n.Z)(a,2),l=c[0],s=c[1];return{border:"none",backgroundColor:t.colors.transparent,borderTopRightRadius:o?t.radii.none:t.radii.lg,borderTopLeftRadius:o?t.radii.lg:t.radii.none,borderBottomRightRadius:t.radii.lg,display:"inline-flex",alignItems:"center",justifyContent:"center",lineHeight:1,margin:0,padding:t.spacing.sm,color:r?l:s,pointerEvents:"auto","&:focus":{outline:"none"},":focus":{outline:"none"},"&:focus-visible":{backgroundColor:i?t.colors.gray10:t.colors.gray90},"&:hover":{backgroundColor:t.colors.primary,color:t.colors.white},"&:disabled, &:disabled:hover, &:disabled:active":{backgroundColor:t.colors.transparent,borderColor:t.colors.transparent,color:t.colors.gray}}}),""),x=(0,y.Z)("div",{target:"e1d2x3se2"})((function(e){var t=e.theme;return(0,f.Z)({position:"fixed",bottom:"0px",paddingBottom:"70px",paddingTop:t.spacing.lg,backgroundColor:t.colors.bgColor,zIndex:t.zIndices.chatInput},"@media (max-width: ".concat(t.breakpoints.md,")"),{display:"flex",flexDirection:"column",alignItems:"center",left:0,width:"100vw"})}),""),w=(0,y.Z)("div",{target:"e1d2x3se1"})((function(){return{display:"flex",alignItems:"flex-end",height:"100%",position:"absolute",right:"0px",pointerEvents:"none"}}),""),O=(0,y.Z)("div",{target:"e1d2x3se0"})({name:"1lm6gnd",styles:"position:absolute;bottom:0px;right:3rem"}),j=r(40864);var C=function(e){var t=e.width,r=e.element,a=e.widgetMgr,c=(0,i.u)(),f=(0,o.useState)(!1),h=(0,n.Z)(f,2),y=h[0],g=h[1],C=(0,o.useState)(r.default),S=(0,n.Z)(C,2),P=S[0],k=S[1],I=(0,o.useState)(0),R=(0,n.Z)(I,2),Z=R[0],E=R[1],T=(0,o.useRef)(null),B=(0,o.useRef)({minHeight:0,maxHeight:0}),F=function(){P&&(a.setStringTriggerValue(r,P,{fromUi:!0}),g(!1),k(""),E(0))};(0,o.useEffect)((function(){if(r.setValue){r.setValue=!1;var e=r.value||"";k(e),g(""!==e)}}),[r]),(0,o.useEffect)((function(){if(T.current){var e=T.current.offsetHeight;B.current.minHeight=e,B.current.maxHeight=6.5*e}}),[T]);var z=r.disabled,D=r.placeholder,N=r.maxChars,$=r.position,H=(0,p.Iy)(c),_=B.current,A=_.minHeight,K=_.maxHeight,L=H?c.colors.gray70:c.colors.gray80,M=!!(Z>0&&T.current)&&Math.abs(Z-A)>1;return(0,j.jsx)(x,{className:"stChatFloatingInputContainer",children:(0,j.jsx)(b,{className:"stChatInputContainer",width:t,position:$,children:(0,j.jsxs)(m,{children:[(0,j.jsx)(s.Z,{inputRef:T,value:P,placeholder:D,onChange:function(e){var t=e.target.value,n=r.maxChars;0!==n&&t.length>n||(g(""!==t),k(t),E(function(){var e=0,t=T.current;if(t){var r=t.placeholder;t.placeholder="",t.style.height="auto",e=t.scrollHeight,t.placeholder=r,t.style.height=""}return e}()))},onKeyDown:function(e){var t=e.metaKey,r=e.ctrlKey,n=e.shiftKey;(function(e){var t,r=e.keyCode;return("Enter"===e.key||13===r||10===r)&&!(!0===(null===(t=e.nativeEvent)||void 0===t?void 0:t.isComposing))})(e)&&!n&&!r&&!t&&(e.preventDefault(),F())},"aria-label":D,disabled:z,rows:1,overrides:{Root:{style:{outline:"none",backgroundColor:c.colors.transparent,borderLeftWidth:"1px",borderRightWidth:"1px",borderTopWidth:"1px",borderBottomWidth:"1px",width:"".concat(t,"px")}},InputContainer:{style:{backgroundColor:c.colors.transparent}},Input:{props:{"data-testid":"stChatInput"},style:{lineHeight:"1.4",backgroundColor:c.colors.transparent,"::placeholder":{color:L},height:M?"".concat(Z+1,"px"):"auto",maxHeight:K?"".concat(K,"px"):"none",paddingRight:"3rem",paddingLeft:c.spacing.sm,paddingBottom:c.spacing.sm,paddingTop:c.spacing.sm}}}}),(0,j.jsx)(O,{children:(0,j.jsx)(d.Z,{dirty:y,value:P,maxLength:N,type:"chat",inForm:!1})}),(0,j.jsx)(w,{children:(0,j.jsx)(v,{onClick:F,disabled:!y||z,extended:M,children:(0,j.jsx)(u.Z,{content:l,size:"xl",color:"inherit"})})})]})})})}},118:function(e,t,r){r.d(t,{Z:function(){return P}});var n=r(66845),o=r(80318),i=r(9656),a=r(38254),c=r(80745),l=r(98479);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=(0,c.zo)("div",(function(e){return u(u({},(0,l.d5)(u(u({$positive:!1},e),{},{$hasIconTrailing:!1}))),{},{width:e.$resize?"fit-content":"100%"})}));p.displayName="StyledTextAreaRoot",p.displayName="StyledTextAreaRoot";var f=(0,c.zo)("div",(function(e){return(0,l.hB)(u({$positive:!1},e))}));f.displayName="StyledTextareaContainer",f.displayName="StyledTextareaContainer";var h=(0,c.zo)("textarea",(function(e){return u(u({},(0,l.Hx)(e)),{},{resize:e.$resize||"none"})}));function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},g.apply(this,arguments)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=j(e);if(t){var o=j(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===y(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}(this,r)}}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}h.displayName="StyledTextarea",h.displayName="StyledTextarea";var S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(s,e);var t,r,c,l=w(s);function s(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return C(O(e=l.call.apply(l,[this].concat(r))),"state",{isFocused:e.props.autoFocus||!1}),C(O(e),"onFocus",(function(t){e.setState({isFocused:!0}),e.props.onFocus(t)})),C(O(e),"onBlur",(function(t){e.setState({isFocused:!1}),e.props.onBlur(t)})),e}return t=s,(r=[{key:"render",value:function(){var e=this.props.overrides,t=void 0===e?{}:e,r=b((0,o.jb)(t.Root,p),2),c=r[0],l=r[1],s=(0,o.aO)({Input:{component:h},InputContainer:{component:f}},t);return n.createElement(c,g({"data-baseweb":"textarea",$isFocused:this.state.isFocused,$isReadOnly:this.props.readOnly,$disabled:this.props.disabled,$error:this.props.error,$positive:this.props.positive,$required:this.props.required,$resize:this.props.resize},l),n.createElement(i.Z,g({},this.props,{type:a.iB.textarea,overrides:s,onFocus:this.onFocus,onBlur:this.onBlur,resize:this.props.resize})))}}])&&v(t.prototype,r),c&&v(t,c),Object.defineProperty(t,"prototype",{writable:!1}),s}(n.Component);C(S,"defaultProps",{autoFocus:!1,disabled:!1,readOnly:!1,error:!1,name:"",onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){},onFocus:function(){},overrides:{},placeholder:"",required:!1,rows:3,size:a.NO.default});var P=S}}]);