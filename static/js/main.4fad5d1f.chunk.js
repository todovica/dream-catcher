(this["webpackJsonpexplore-redux"]=this["webpackJsonpexplore-redux"]||[]).push([[0],{147:function(e,t,a){e.exports=a.p+"static/media/background.73fb1baa.png"},164:function(e,t,a){e.exports=a(266)},266:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a(42),i=a(57),l="ADD_ARTICLE",u="DATA_LOADED",s={articles:[],update_id:null};var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;return t.type===l?Object.assign({},e,{articles:e.articles.concat(t.payload),update_id:t.payload.id}):t.type===u?Object.assign({},e,{articles:e.articles.concat(t.payload)}):e},d=["spam","money"];var p=a(141),b=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,Object(i.d)(m,Object(i.a)((function(e){var t=e.dispatch;return function(e){return function(a){if(a.type===l&&d.filter((function(e){return a.payload.title.includes(e)})).length)return t({type:"FOUND_BAD_WORD"});return e(a)}}}),p.a))),g=a(149),h=a(44);function f(){return function(e){return fetch("https://test-server-express-2.herokuapp.com/email/getStories").then((function(e){return e.json()})).then((function(t){e({type:u,payload:t})}))}}var E=a(16),v=a(143),y=a(26),O=a(317),x=a(337),j=a(314),S=a(60),w=a(334),C=a(318),k=a(319),N=a(145),T=a.n(N),R=a(146),D=a.n(R),_=a(144),A=a.n(_),I=a(320),W=a(2),z=a(4),B=a(313),F=a(315),q=a(316),J=a(142),P=a.n(J),L=Object(z.a)((function(e){return{root:{margin:0,padding:e.spacing(2),marginRight:"20px !important"},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,a=e.classes,n=e.onClose,o=Object(W.a)(e,["children","classes","onClose"]);return r.a.createElement(B.a,Object.assign({disableTypography:!0,className:a.root},o),r.a.createElement(S.a,{variant:"h6"},t),n?r.a.createElement(j.a,{"aria-label":"close",className:a.closeButton,onClick:n},r.a.createElement(P.a,null)):null)})),U=Object(z.a)((function(e){return{root:{padding:e.spacing(2),"@media(min-width: 780px)":{minWidth:"600px !important"}}}}))(F.a),H=Object(z.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(q.a),Y=a(18),V=Object(v.a)((function(e){return{button:{margin:e.spacing(1)},input:{display:"none"}}}));var X=function(e){var t=V(),a=Y.EditorState.createWithContent(Object(Y.convertFromRaw)(e.content)),n=Y.EditorState.createWithContent(a.getCurrentContent());return r.a.createElement(w.a,{className:t.main},r.a.createElement(S.a,{color:"textSecondary",component:"div"},r.a.createElement(Y.Editor,{editorState:n,onChange:function(){}})))},G=Object(v.a)((function(e){return{card:{maxWidth:345,boxShadow:" 0 1px 10px rgba(0,0,0,0.12), 0 1px 10px rgba(0,0,0,0.24)","&:hover":{background:"aliceblue"}},onhover:{"&:hover":{cursor:"pointer"}},main:{width:"700px",maxHeight:"500px",overflow:"auto"}}}));function M(e){var t=G(),a=Object(y.a)(),n=Object(O.a)(a.breakpoints.down("sm")),o=r.a.useState(!1),c=Object(E.a)(o,2),i=c[0],l=c[1],u=function(){l(!0)},s=function(){l(!1)};return r.a.createElement("div",null,r.a.createElement(C.a,{className:t.card},r.a.createElement(k.a,{onClick:u,className:t.onhover,action:r.a.createElement(j.a,{"aria-label":"settings"},r.a.createElement(A.a,null)),title:e.title,subheader:e.date?e.date:"01/01/1979"}),r.a.createElement(I.a,{onClick:u,className:t.onhover},r.a.createElement(S.a,{variant:"body2",color:"textSecondary",component:"p"},e.content.blocks[0].text.substr(0,150)+"..."))),r.a.createElement(x.a,{fullScreen:n,onClose:s,"aria-labelledby":"customized-dialog-title",open:i},r.a.createElement(L,{id:"customized-dialog-title",onClose:s},r.a.createElement(S.a,{color:"textSecondary",component:"div"},r.a.createElement(w.a,{fontSize:"h5.fontSize"},e.title))),r.a.createElement(U,{dividers:!0},r.a.createElement(X,{title:e.title,content:e.content,author:e.author,open:i,handleClose:s})),r.a.createElement(H,null,r.a.createElement(j.a,{"aria-label":"add to favorites"},r.a.createElement(T.a,null)),r.a.createElement(j.a,{"aria-label":"share"},r.a.createElement(D.a,null)))))}var K=a(321),Q=a(322);var Z=Object(c.b)((function(e){return{articles:e.articles.slice(0,20)}}),{getStories:f})((function(e){return e.articles.length?r.a.createElement(K.a,{container:!0,spacing:3},e.articles.map((function(e){return r.a.createElement(K.a,{key:e.title,item:!0,sm:6,md:3},r.a.createElement(M,{title:e.title,date:e.date,content:e.content,author:e.author}))}))):(e.getStories(),r.a.createElement(K.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(Q.a,{color:"secondary"})))})),$=a(323),ee=Object(v.a)((function(e){return{button:{margin:e.spacing(1)},confirm:{marginTop:"20px",paddingTop:"15px"}}}));var te=Object(c.b)((function(e){return{articles:e.articles.slice(0,20)}}),{getStories:f,confirm:function(e){var t=e.title,a=e.date,n=e.content,r=e.email;console.log(" confirm(payload)");var o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:t,date:a,content:n,email:r})};return function(e){return fetch("https://test-server-express-2.herokuapp.com/email/confirm",o).then((function(e){return e.json()})).then((function(e){console.log("updated")}))}}})((function(e){var t=ee();e.articles.length||e.getStories();var a=e.match.params.id,n=e.articles.find((function(e){return e._id===a}));return n&&e.confirm(n),r.a.createElement(K.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:t.confirm},e.articles.find((function(e){return e._id===a}))?r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{variant:"subtitle1"},"Your story is uploaded to our server."),r.a.createElement(w.a,null,r.a.createElement($.a,{href:"/dream-catcher",color:"primary",className:t.button},"Check it out")," ")):r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{variant:"subtitle1"},"Are you sure this is the right link?"),r.a.createElement(w.a,null,r.a.createElement($.a,{href:"/dream-catcher",color:"primary",className:t.button},"Back")," ")))})),ae=a(147),ne=a.n(ae),re=a(324),oe=Object(v.a)((function(e){return{root:{padding:"20px",backgroundColor:"#5a5c8d",boxShadow:" 0 1px 10px rgba(0,0,0,0.12), 0 1px 10px rgba(0,0,0,0.24)"}}}));function ce(){var e=oe();return r.a.createElement(S.a,{className:e.root,variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(re.a,{color:"inherit",href:"https://todovica.github.io/"},"Ana Todovic")," ",(new Date).getFullYear(),".")}var ie=a(333),le=a(338),ue=a(339),se=a(326),me=a(336),de=a(148),pe=a.n(de),be=a(325);var ge=Object(v.a)((function(e){return{fab:{margin:e.spacing(1)},button:{marginRight:e.spacing(1)},editorContainer:{height:"250px",overflow:"auto"},previewContainer:{height:"400px",overflow:"auto"},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},dialogTitle:{"@media(max-width: 780px)":{padding:"24px 0 0 0 !important"}}}}));var he=Object(c.b)((function(e){return{articles:e.articles.slice(0,10)}}),(function(e){return{addArticle:function(t){return e(function(e){var t=e.title,a=e.date,n=e.content,r=e.email,o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:t,date:a,content:n,email:r})};return function(e){return fetch("https://test-server-express-2.herokuapp.com/email/addArticle",o).then((function(e){return e.json()})).then((function(t){e({type:l,payload:t})}))}}(t))}}}))((function(e){var t=ge(),a=Object(y.a)(),o=Object(O.a)(a.breakpoints.down("sm")),c=r.a.useState(!1),i=Object(E.a)(c,2),l=i[0],u=i[1],s=function(){u(!1)},m=r.a.useState(0),d=Object(E.a)(m,2),p=d[0],b=d[1],g=r.a.useState(new Set),h=Object(E.a)(g,2),f=h[0],v=h[1],j=["Write","Preview","Publish"],w=window.localStorage.getItem("content"),C=Object(n.useState)(""),k=Object(E.a)(C,2),N=k[0],T=k[1],R=Object(n.useState)(""),D=Object(E.a)(R,2),_=(D[0],D[1]),A=Object(n.useState)(w?Y.EditorState.createWithContent(Object(Y.convertFromRaw)(JSON.parse(w))):Y.EditorState.createEmpty()),I=Object(E.a)(A,2),W=I[0],z=I[1],B=Object(n.useState)(""),F=Object(E.a)(B,2),q=F[0],J=F[1],P=Object(n.useState)(""),V=Object(E.a)(P,2),G=V[0],M=V[1],Q=Object(n.useState)(!1),Z=Object(E.a)(Q,2),ee=Z[0],te=Z[1],ae=Object(n.useState)(!1),ne=Object(E.a)(ae,2),re=(ne[0],ne[1],Object(n.useState)(!1)),oe=Object(E.a)(re,2),ce=oe[0],de=oe[1],he=Object(n.useState)(!1),fe=Object(E.a)(he,2),Ee=fe[0],ve=fe[1];function ye(e){window.localStorage.setItem("content",JSON.stringify(Object(Y.convertToRaw)(e.getCurrentContent()))),console.log("content state",Object(Y.convertToRaw)(e.getCurrentContent())),z(e)}function Oe(e){"title"===e.target.id?(te(!1),T(e.target.value)):"email"===e.target.id?(de(!1),J(e.target.value)):"author"===e.target.id?(ve(!1),M(e.target.value)):console.error("id not recognized")}var xe=function(e){return 1===e},je=function(e){return f.has(e)};return r.a.createElement("div",null,r.a.createElement(be.a,{color:"primary","aria-label":"add",onClick:function(){u(!0)},className:t.fab},r.a.createElement(pe.a,null)),r.a.createElement(x.a,{fullScreen:o,onClose:s,"aria-labelledby":"customized-dialog-title",open:l},r.a.createElement(L,{id:"customized-dialog-title",className:t.dialogTitle,onClose:s},r.a.createElement(ue.a,{activeStep:p},j.map((function(e,t){var a={},n={};return xe(t)&&(n.optional=r.a.createElement(S.a,{variant:"caption"},"Optional")),je(t)&&(a.completed=!1),r.a.createElement(se.a,Object.assign({key:e},a),r.a.createElement(me.a,n,e))})))),p===j.length?r.a.createElement("div",null,r.a.createElement(S.a,{className:t.instructions}," All steps completed - you're finished "),r.a.createElement($.a,{onClick:function(){b(0)},className:t.button}," Reset ")):r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{dividers:!0},r.a.createElement(K.a,{style:{height:"380px"}},function(e){switch(e){case 0:return r.a.createElement(le.a,{fullWidth:!0},r.a.createElement(ie.a,{id:"title",label:"Title",value:N,onChange:Oe,margin:"normal",helperText:ee||"",error:!!ee}),r.a.createElement(Y.Editor,{fullWidth:!0,editorState:W,onChange:ye,placeholder:"Tell a story..."}));case 1:return r.a.createElement(X,{title:N,content:Object(Y.convertToRaw)(W.getCurrentContent()),author:G});case 2:return r.a.createElement(le.a,{fullWidth:!0},r.a.createElement(S.a,{className:t.instructions},"Name of the author will be publicly visible. Use pseudonym or anything you like."),r.a.createElement(S.a,{className:t.instructions},"Email address will not appear in public. It will be used strictly for authentication."),r.a.createElement(ie.a,{id:"email",label:"email",value:q,onChange:Oe,margin:"normal",helperText:ce||"",error:!!ce}),r.a.createElement(ie.a,{id:"author",label:"author",value:G,onChange:Oe,margin:"normal",helperText:Ee||"",error:!!Ee}));default:return"Unknown step"}}(p))),r.a.createElement(H,null,r.a.createElement($.a,{disabled:0===p,onClick:function(){b((function(e){return e-1}))},className:t.button}," Back "),xe(p)&&r.a.createElement($.a,{variant:"contained",color:"primary",onClick:function(){if(!xe(p))throw new Error("You can't skip a step that isn't optional.");b((function(e){return e+1})),v((function(e){var t=new Set(e.values());return t.add(p),t}))},className:t.button},"Skip"),r.a.createElement($.a,{variant:"contained",color:"primary",onClick:p===j.length-1?function(t){t.preventDefault();var a=(new Date).toLocaleDateString();N&&q&&G?e.articles.find((function(e){return e.title===N}))?te("Title must be unique"):(window.localStorage.setItem("content",""),e.addArticle({title:N,date:a,content:Object(Y.convertToRaw)(W.getCurrentContent()),email:q,author:G}),T(""),_(""),z(Y.EditorState.createEmpty()),J(""),M(""),alert("Now your story will temporarily appear on our site. After you click on the link we have sent to your email, your story will be permanently on our site."),s()):(N||te("Required"),q||de("Required"),G||ve("Required"))}:function(){var t=f;je(p)&&(t=new Set(t.values())).delete(p),p||N?!p&&e.articles.find((function(e){return e.title===N}))?te("Title must be unique"):b((function(e){return e+1})):N||te("Required"),v(t)},className:t.button}," ",p===j.length-1?"Publish":"Next")))))})),fe=a(152),Ee=a(329),ve=a(332),ye=a(331),Oe=a(330),xe=a(327),je=a(151),Se=a.n(je),we=a(328),Ce=Object(fe.a)({palette:{primary:{main:"#655b7d"},secondary:{main:"#f3f3f3"}}}),ke=Object(v.a)((function(e){return{root:{flexGrow:1,paddingTop:"40px",marginBottom:"40px",minHeight:"500px"},start:{backgroundImage:"url(".concat(ne.a,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center",paddingTop:"100px",paddingBottom:"160px",backgroundColor:"#eeeeee",boxShadow:" 0 1px 10px rgba(0,0,0,0.12), 0 1px 10px rgba(0,0,0,0.24)"},zoom:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},titleFont:{fontStyle:"italic",fontWeight:"400",backgroundColor:"#f3f3f3",borderRadius:"1em",padding:"10px",margin:"20px",boxShadow:" 0 1px 10px rgba(0,0,0,0.12), 0 1px 10px rgba(0,0,0,0.24)"}}}));function Ne(e){var t=e.children,a=e.window,n=ke(),o=Object(xe.a)({target:a?a():void 0,disableHysteresis:!0,threshold:100});return r.a.createElement(we.a,{in:o},r.a.createElement("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:n.zoom},t))}var Te=function(e){var t=ke();return r.a.createElement(Ee.a,{theme:Ce},r.a.createElement(Oe.a,null),r.a.createElement(K.a,{container:!0,className:t.start,direction:"column",justify:"flex-start",alignItems:"center"},r.a.createElement(ye.a,{id:"back-to-top-anchor"}),r.a.createElement(S.a,{variant:"h6",component:"h5",color:"primary",className:t.titleFont}," ","Journey begins with one step, a great story begins here."," "),r.a.createElement(he,null)),r.a.createElement(ve.a,{className:t.root},r.a.createElement(g.a,null,r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/dream-catcher/confirm/:id",component:te}),r.a.createElement(h.b,{exact:!0,path:"/dream-catcher",component:Z}),r.a.createElement(h.a,{from:"*",to:"/dream-catcher"})))),r.a.createElement(ce,null),r.a.createElement(Ne,e,r.a.createElement(K.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(be.a,{color:"secondary","aria-label":"scroll back to top"},r.a.createElement(Se.a,null)),r.a.createElement(he,null))))};Object(o.render)(r.a.createElement(c.a,{store:b},r.a.createElement(Te,null)),document.getElementById("root"))}},[[164,1,2]]]);
//# sourceMappingURL=main.4fad5d1f.chunk.js.map