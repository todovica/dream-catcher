(this["webpackJsonpexplore-redux"]=this["webpackJsonpexplore-redux"]||[]).push([[0],{141:function(e,t,a){e.exports=a.p+"static/media/background.d2b1d46d.png"},153:function(e,t,a){e.exports=a(257)},162:function(e,t){e.exports={apiUrl:"test-server-express-2.herokuapp.com:80"}},257:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a(37),i=a(51),l="ADD_ARTICLE",u="DATA_LOADED",s={articles:[],update_id:null};var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;return t.type===l?Object.assign({},e,{articles:e.articles.concat(t.payload),update_id:t.payload.id}):t.type===u?Object.assign({},e,{articles:e.articles.concat(t.payload)}):e},d=["spam","money"];var p=a(137),f=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,Object(i.d)(m,Object(i.a)((function(e){var t=e.dispatch;return function(e){return function(a){if(a.type===l&&d.filter((function(e){return a.payload.title.includes(e)})).length)return t({type:"FOUND_BAD_WORD"});return e(a)}}}),p.a))),h=a(143),g=a(40),b=a(13);a(162);function E(){!function(){var e=JSON.parse(localStorage.getItem("user"));e&&e.authdata?e.authdata:console.log("ERROR: "+e)}();return function(e){return fetch("https://test-server-express-2.herokuapp.com/email/getStories").then((function(e){return e.json()})).then((function(t){e({type:u,payload:t})}))}}var v=a(292),O=a(297),y=a(298),j=a(300),S=a(299),x=a(78),C=a(139),w=a.n(C),k=a(140),N=a.n(k),T=a(138),R=a.n(T),_=a(306),D=a(79),A=a(21),I=Object(v.a)((function(e){return{button:{margin:e.spacing(1)},input:{display:"none"},main:{width:"700px",maxWidth:700,maxHeight:"500px",overflow:"auto"}}}));var F=function(e){var t=I(),a=A.EditorState.createWithContent(Object(A.convertFromRaw)(e.content)),n=A.EditorState.createWithContent(a.getCurrentContent());return r.a.createElement(_.a,{className:t.main},r.a.createElement(D.a,{color:"textSecondary",component:"div"},r.a.createElement(_.a,{mb:2,fontSize:"h5.fontSize"},e.title),r.a.createElement(A.Editor,{editorState:n,onChange:function(){}}),r.a.createElement(_.a,{textAlign:"right",fontStyle:"italic"}," ","by "+e.author)))},W=a(16),J=a(2),B=a(307),L=a(309),q=a(91),P=Object(v.a)((function(e){var t;return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:(t={backgroundColor:e.palette.background.paper,maxHeight:"550px",overflow:"auto",border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},Object(b.a)(t,"backgroundColor","#e8e7e7"),Object(b.a)(t,"backgroundImage","linear-gradient(to right, #f5f0f0 , white , white , white, white , white )"),t),fab:{margin:e.spacing(1)}}})),z=r.a.forwardRef((function(e,t){var a=e.in,n=e.children,o=e.onEnter,c=e.onExited,i=Object(J.a)(e,["in","children","onEnter","onExited"]),l=Object(q.useSpring)({from:{opacity:0},to:{opacity:a?1:0},onStart:function(){a&&o&&o()},onRest:function(){!a&&c&&c()}});return r.a.createElement(q.animated.div,Object.assign({ref:t,style:l},i),n)}));function U(e){var t=P(),a=r.a.Children.map(e.children,(function(t){return r.a.cloneElement(t,{handleClose:e.handleClose})}));return r.a.createElement("div",null,r.a.createElement(B.a,{"aria-labelledby":"spring-modal-title","aria-describedby":"spring-modal-description",className:t.modal,open:e.open,onClose:e.handleClose,closeAfterTransition:!0,BackdropComponent:L.a,BackdropProps:{timeout:500}},r.a.createElement(z,{in:e.open},r.a.createElement("div",{className:t.paper},a))))}var H=a(296);function X(e){var t=r.a.useState(!1),a=Object(W.a)(t,2),n=a[0],o=a[1];return r.a.createElement("div",null,r.a.createElement(H.a,{onClick:function(){o(!0)}},r.a.createElement(D.a,{variant:"body2",color:"textSecondary",component:"p"},"fake summary ...")),r.a.createElement(U,{open:n,handleClose:function(){o(!1)}},e.children))}var Y=Object(v.a)((function(e){return{card:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:x.a[500]}}}));function G(e){var t=Y();return r.a.createElement(O.a,{className:t.card},r.a.createElement(y.a,{action:r.a.createElement(S.a,{"aria-label":"settings"},r.a.createElement(R.a,null)),title:e.title,subheader:e.date?e.date:"01/01/1979"}),r.a.createElement(X,{content:e.content},r.a.createElement(F,{title:e.title,content:e.content,author:e.author})),r.a.createElement(j.a,{disableSpacing:!0},r.a.createElement(S.a,{"aria-label":"add to favorites"},r.a.createElement(w.a,null)),r.a.createElement(S.a,{"aria-label":"share"},r.a.createElement(N.a,null))))}var M=a(301);var V=Object(c.b)((function(e){return{articles:e.articles.slice(0,20)}}),{getStories:E})((function(e){return e.articles.length||e.getStories(),r.a.createElement(M.a,{container:!0,spacing:3},e.articles.map((function(e){return r.a.createElement(M.a,Object(b.a)({key:e.title,item:!0,sm:6,md:3},"key",e.title),r.a.createElement(G,{title:e.title,date:e.date,content:e.content,author:e.author}))})))})),K=a(302),Q=a(305),Z=a(308);var $=Object(v.a)((function(e){return{button:{margin:e.spacing(1)},input:{display:"none"},main:{width:"500px",maxWidth:360,overflow:"auto"},editorContainer:{border:"1px solid rgba(0, 0, 0, 0.23)",height:"300px",padding:"15px",overflow:"auto"}}}));var ee=Object(c.b)((function(e){return{articles:e.articles.slice(0,10)}}),(function(e){return{addArticle:function(t){return e(function(e){var t=e.title,a=e.date,n=e.content,r=e.email,o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:t,date:a,content:n,email:r})};return function(e){return fetch("https://test-server-express-2.herokuapp.com/email/addArticle",o).then((function(e){return e.json()})).then((function(t){e({type:l,payload:t})}))}}(t))}}}))((function(e){var t=$(),a=window.localStorage.getItem("content"),o=Object(n.useState)(""),c=Object(W.a)(o,2),i=c[0],l=c[1],u=Object(n.useState)(""),s=Object(W.a)(u,2),m=(s[0],s[1]),d=Object(n.useState)(a?A.EditorState.createWithContent(Object(A.convertFromRaw)(JSON.parse(a))):A.EditorState.createEmpty()),p=Object(W.a)(d,2),f=p[0],h=p[1],g=Object(n.useState)(""),b=Object(W.a)(g,2),E=b[0],v=b[1],O=Object(n.useState)(""),y=Object(W.a)(O,2),j=y[0],S=y[1],x=Object(n.useState)(!1),C=Object(W.a)(x,2),w=C[0],k=C[1],N=Object(n.useState)(!1),T=Object(W.a)(N,2),R=(T[0],T[1],Object(n.useState)(!1)),D=Object(W.a)(R,2),I=D[0],F=D[1],J=Object(n.useState)(!1),B=Object(W.a)(J,2),L=B[0],q=B[1];function P(e){"title"===e.target.id?(k(!1),l(e.target.value)):"email"===e.target.id?(F(!1),v(e.target.value)):"author"===e.target.id?(q(!1),S(e.target.value)):console.error("id not recognized")}return r.a.createElement(_.a,{className:t.main},r.a.createElement(Z.a,{fullWidth:!0},r.a.createElement(Q.a,{id:"title",label:"Title",value:i,onChange:P,margin:"normal",variant:"outlined",helperText:w||"",error:!!w}),r.a.createElement("div",{className:t.editorContainer},r.a.createElement(A.Editor,{editorState:f,onChange:function(e){window.localStorage.setItem("content",JSON.stringify(Object(A.convertToRaw)(e.getCurrentContent()))),console.log("content state",Object(A.convertToRaw)(e.getCurrentContent())),h(e)}})),r.a.createElement(Q.a,{id:"email",label:"email",value:E,onChange:P,margin:"normal",variant:"outlined",helperText:I||"",error:!!I}),r.a.createElement(Q.a,{id:"author",label:"author",value:j,onChange:P,margin:"normal",variant:"outlined",helperText:L||"",error:!!L}),r.a.createElement(_.a,{direction:"row"},r.a.createElement(K.a,{color:"primary",onClick:function(t){t.preventDefault();var a=(new Date).toLocaleDateString();i&&E&&j?e.articles.find((function(e){return e.title===i}))?k("Title must be unique"):(window.localStorage.setItem("content",""),e.addArticle({title:i,date:a,content:Object(A.convertToRaw)(f.getCurrentContent()),email:E,author:j}),l(""),m(""),h(A.EditorState.createEmpty()),v(""),S(""),alert("Your story will apear on our page after you click on confirmation link we've sent to your email"),e.handleClose()):(i||k("Required"),E||F("Required"),j||q("Required"))},className:t.button}," Save "),r.a.createElement(K.a,{color:"secondary",onClick:e.handleClose,className:t.button}," Cancel "))))})),te=Object(v.a)((function(e){return{button:{margin:e.spacing(1)},input:{display:"none"}}}));var ae=Object(c.b)((function(e){return{articles:e.articles.slice(0,20)}}),{getStories:E,confirm:function(e){var t=e.title,a=e.date,n=e.content,r=e.email;console.log(" confirm(payload)");var o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:t,date:a,content:n,email:r})};return function(e){return fetch("https://test-server-express-2.herokuapp.com/email/confirm",o).then((function(e){return e.json()})).then((function(e){console.log("updated")}))}}})((function(e){var t=te();e.articles.length||e.getStories();var a=e.match.params.id,n=e.articles.find((function(e){return e._id===a}));return n&&e.confirm(n),r.a.createElement(M.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},e.articles.find((function(e){return e._id===a}))?r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{variant:"subtitle1"},"Your story is uploaded to our server."),r.a.createElement(_.a,null,r.a.createElement(K.a,{href:"/",color:"primary",className:t.button},"Check it out")," ")):r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{variant:"subtitle1"},"Are you sure this is the right link?"),r.a.createElement(_.a,null,r.a.createElement(K.a,{href:"/",color:"primary",className:t.button},"Back")," ")))})),ne=a(303),re=Object(v.a)((function(e){return{fab:{margin:e.spacing(1)}}}));function oe(e){var t=re(),a=r.a.useState(!1),n=Object(W.a)(a,2),o=n[0],c=n[1];return r.a.createElement("div",null,r.a.createElement(ne.a,{color:"primary","aria-label":"add",onClick:function(){c(!0)},className:t.fab},e.icon),r.a.createElement(U,{open:o,handleClose:function(){c(!1)}},e.children))}var ce=a(141),ie=a.n(ce),le=a(142),ue=a.n(le),se=a(304),me=Object(v.a)((function(e){return{root:{flexGrow:1,height:"250px",backgroundImage:"-webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(59%, rgba(0, 0, 0, 0)), color-stop(10%, #f5f0f0)), -webkit-gradient(linear, left top, left bottom, color-stop(10%, rgba(0, 0, 0, 0)), color-stop(70%, rgba(0, 0, 0, 0)), color-stop(190%, #f5f0f0)), url(".concat(ie.a,")"),marginBottom:"20px"},titleFont:{fontStyle:"italic",fontWeight:"400",padding:"20px",color:"#000067",fontFamily:"cursive"}}}));var de=function(){var e=me();return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{container:!0,direction:"row",justify:"space-between",alignItems:"flex-start",className:e.root},r.a.createElement(_.a,null,r.a.createElement(D.a,{variant:"h2",component:"h6",className:e.titleFont}," ","Dream catcher"," "),r.a.createElement(D.a,{variant:"h4",component:"h4",className:e.titleFont}," ","Share your dream!!!"," ")),r.a.createElement(oe,{icon:r.a.createElement(ue.a,null)},r.a.createElement(ee,null))),r.a.createElement(se.a,null,r.a.createElement(h.a,null,r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/dream-catcher/confirm/:id",component:ae}),r.a.createElement(g.b,{exact:!0,path:"/dream-catcher",component:V}),r.a.createElement(g.a,{from:"*",to:"/dream-catcher"})))))};Object(o.render)(r.a.createElement(c.a,{store:f},r.a.createElement(de,null)),document.getElementById("root"))}},[[153,1,2]]]);
//# sourceMappingURL=main.f97abf35.chunk.js.map