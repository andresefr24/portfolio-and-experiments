(this["webpackJsonpportfolio-and-experiments"]=this["webpackJsonpportfolio-and-experiments"]||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(27),o=n.n(i),c=(n(88),n(42)),s=n(14),l=n(34),d=n(75),h=n(151),j=n(13),b=n(148),u=n(144),x=n(142),m=n(141),p=n(146),f=n(150),O=n(143),g=n(147),v=n(2);function y(e){var t=e.path,n=e.children,r=e.onClick;return Object(v.jsx)(p.a,{p:3,onClick:r,sx:{"& a":{textDecoration:"none"},width:"100%",display:"flex",alignItems:"center"},children:Object(v.jsx)(c.b,{to:t,children:Object(v.jsx)(g.a,{variant:"body1",sx:{textTransform:"capitalize"},color:"primary.light",children:n})})})}function C(e){var t=Object(s.f)().location,n=Object(r.useState)(!1),i=Object(j.a)(n,2),o=i[0],c=i[1],d=A.filter((function(e){return e.path!==t.pathname}));return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(b.a,Object(l.a)(Object(l.a)({},e),{},{children:Object(v.jsx)(u.a,{item:!0,container:!0,xs:12,alignItems:"center",children:Object(v.jsx)(x.a,{size:"small",onClick:function(){return c(!0)},children:Object(v.jsx)(O.a,{sx:{fontSize:24,color:function(e){return e.palette.primary.dark}}})})})})),Object(v.jsx)(a.a.Fragment,{children:Object(v.jsx)(m.a,{anchor:"left",open:o,onClose:function(){return c(!1)},onOpen:function(){return c(!0)},children:Object(v.jsx)(p.a,{sx:{minWidth:300,backgroundColor:function(e){return e.palette.primary.main},height:"100%",overflowX:"hidden"},children:d.map((function(e,t){var n=e.name,r=e.path;return Object(v.jsxs)(a.a.Fragment,{children:[Object(v.jsx)(y,{path:r,onClick:function(){c(!1)},children:n}),t<d.length-1&&Object(v.jsx)(f.a,{sx:{backgroundColor:"red"}})]},"app-bar-item-".concat(n))}))})})},"left")]})}function k(e){var t=e.children,n=e.maxWidth,r=void 0!==n&&n,a=e.topPadding,i=e.sx,o=Object(d.a)(e,["children","maxWidth","topPadding","sx"]);return Object(v.jsxs)(h.a,Object(l.a)(Object(l.a)({maxWidth:r,sx:Object(l.a)({paddingTop:a?"48px":0},i),disableGutters:!0},o),{},{children:[Object(v.jsx)(C,{}),t]}))}var w,I=n(35),F=n(149),z=n(73),M=n(32),S=n(26),W=n(140),D=function(e,t,n){return Object(M.a)(w||(w=Object(I.a)(["\n  0% {\n    transform: rotate(","deg) scale(1);\n  }\n  50% { \n    transform: rotate(0deg) scale(",");\n  }\n  100%{\n    transform: rotate(","deg) scale(1);\n  }\n"])),e,n/t-.025,e)};function E(){var e=Object(S.a)(),t=Object(W.a)(e.breakpoints.down("md"));return Object(v.jsx)(z.SizeMe,{monitorHeight:!0,monitorWidth:!0,refreshRate:32,children:function(e){for(var n=e.size,r=t?24:48,a=Math.ceil(Math.round(Number(null===n||void 0===n?void 0:n.height))/r)||0,i=Math.ceil(Math.round(Number(null===n||void 0===n?void 0:n.width))/r)||0,o=[],c=0;c<a;c++){for(var s=[],l=0;l<i;l++)s.push(null);o.push(s)}return Object(v.jsx)(F.a,{sx:{width:"100%",height:"100%",position:"absolute",backgroundColor:"transparent",zIndex:0,overflow:"hidden"},children:o.map((function(e,n){return e.map((function(e,a){return Object(v.jsx)(p.a,{sx:{position:"absolute",top:r*n,left:r*a,height:r-a/6,width:r-a/6,backgroundColor:"#000000".concat(r+10-a),boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",transform:"rotate(".concat(a*(t?2:1),"deg)"),transition:"all 0.2s",animation:"".concat(D(a*(t?2:1),r-a/6,r)," 10s linear infinite alternate"),"&:hover":{backgroundColor:function(e){return e.palette.secondary.main},height:r,width:r}}},"home-background-cell-".concat(String(n),"-").concat(String(a)))}))}))})}})}var A=[{name:"home",path:"/",Component:function(){return Object(v.jsx)(k,{children:Object(v.jsxs)(u.a,{item:!0,container:!0,xs:12,sx:{minHeight:"100vh",background:function(){return"linear-gradient(45deg, #028090, #E4FDE1)"}},alignItems:"center",justifyContent:"center",children:[Object(v.jsx)(E,{}),Object(v.jsx)(p.a,{p:4,sx:{backgroundColor:function(e){return e.palette.primary.dark},borderRadius:2,width:"50%",zIndex:1},children:Object(v.jsxs)(u.a,{item:!0,container:!0,xs:12,children:[Object(v.jsxs)(u.a,{item:!0,container:!0,xs:12,children:[Object(v.jsx)(g.a,{variant:"h4",color:"primary.light",children:"Welcome!"}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]}),Object(v.jsxs)(u.a,{item:!0,container:!0,xs:12,children:[Object(v.jsx)(g.a,{variant:"body1",color:"primary.light",children:"I`m Andr\xe9s, a Madrid based venezuelan frontend developer that loves to doodle and make visual experiments."}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]}),Object(v.jsx)(u.a,{item:!0,container:!0,xs:12,children:Object(v.jsx)(g.a,{variant:"body1",color:"primary.light",children:"I`ve made this website to let the world see those alive and also to publish some articles about the daily life of a frontend developer."})})]})})]})})}},{name:"about me",path:"/about",Component:function(){return Object(v.jsx)(k,{children:Object(v.jsx)(u.a,{item:!0,container:!0,xs:12,sx:{minHeight:"100vh"},alignItems:"center",justifyContent:"center",children:Object(v.jsx)(g.a,{variant:"h3",color:"primary",children:"About me"})})})}}];function B(){return Object(v.jsx)(c.a,{basename:"/portfolio-and-experiments",children:Object(v.jsx)(s.c,{children:A.map((function(e){var t=e.name,n=e.path,r=e.Component;return Object(v.jsx)(s.a,{path:n,exact:!0,children:Object(v.jsx)(r,{})},t)}))})})}var H=n(145),P=n(74),T=Object(P.a)({palette:{primary:{main:"#028090",light:"#E4FDE1",dark:"#114B5F"},secondary:{main:"#ff9100",light:"#ff9e00",dark:"#ff8500"}},components:{MuiAppBar:{styleOverrides:{root:{backgroundColor:"transparent",padding:"0 8px",boxShadow:"none",height:48}}},MuiContainer:{styleOverrides:{root:{minHeight:"100vh",backgroundColor:"#2A2D34"}}}}});var J=function(){return Object(v.jsx)(H.a,{theme:T,children:Object(v.jsx)(B,{})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,152)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),i(e),o(e)}))};o.a.render(Object(v.jsx)(J,{}),document.getElementById("root")),L()},88:function(e,t,n){}},[[109,1,2]]]);
//# sourceMappingURL=main.5f126d68.chunk.js.map