(this["webpackJsonpexplore-redux"]=this["webpackJsonpexplore-redux"]||[]).push([[0],{72:function(e,t,a){e.exports=a.p+"static/media/background.d2b1d46d.png"},84:function(e,t,a){e.exports=a(97)},93:function(e,t){e.exports={apiUrl:"test-server-express-2.herokuapp.com:80"}},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a(25),c=a(35),l="ADD_ARTICLE",u="DATA_LOADED",s={articles:[],update_id:null};var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;return t.type===l?Object.assign({},e,{articles:e.articles.concat(t.payload),update_id:t.payload.id}):t.type===u?Object.assign({},e,{articles:e.articles.concat(t.payload)}):e},d=["spam","money"];var p=a(66),f=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.c,Object(c.d)(m,Object(c.a)((function(e){var t=e.dispatch;return function(e){return function(a){if(a.type===l&&d.filter((function(e){return a.payload.title.includes(e)})).length)return t({type:"FOUND_BAD_WORD"});return e(a)}}}),p.a))),b=a(73),g=a(28),h=a(9);a(93);function E(){!function(){var e=JSON.parse(localStorage.getItem("user"));console.log(e),e&&e.authdata?e.authdata:console.log("ERROR: "+e)}();return function(e){return fetch("https://test-server-express-2.herokuapp.com/users/getStories").then((function(e){return e.json()})).then((function(t){e({type:u,payload:t})}))}}var v=a(15),O=a(134),y=a(3),j=a(137),x=a(139),S=a(141),k=a(142),w=a(143),C=a(140),N=a(48),T=a(47),_=a(68),D=a.n(_),A=a(69),R=a.n(A),I=a(70),F=a.n(I),B=a(67),W=a.n(B),J=Object(O.a)((function(e){return{card:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:T.a[500]}}}));function L(e){var t=J(),a=r.a.useState(!1),n=Object(v.a)(a,2),o=n[0],i=n[1];return r.a.createElement(j.a,{className:t.card},r.a.createElement(x.a,{action:r.a.createElement(C.a,{"aria-label":"settings"},r.a.createElement(W.a,null)),title:e.title,subheader:e.date?e.date:"01/01/1979"}),r.a.createElement(S.a,null,r.a.createElement(N.a,{variant:"body2",color:"textSecondary",component:"p"},e.content.substr(0,150)+"...")),r.a.createElement(k.a,{disableSpacing:!0},r.a.createElement(C.a,{"aria-label":"add to favorites"},r.a.createElement(D.a,null)),r.a.createElement(C.a,{"aria-label":"share"},r.a.createElement(R.a,null)),r.a.createElement(C.a,{className:Object(y.a)(t.expand,Object(h.a)({},t.expandOpen,o)),onClick:function(){i(!o)},"aria-expanded":o,"aria-label":"show more"},r.a.createElement(F.a,null))),r.a.createElement(w.a,{in:o,timeout:"auto",unmountOnExit:!0},r.a.createElement(S.a,null,r.a.createElement(N.a,{paragraph:!0},e.content))))}var q=a(144);var P=Object(i.b)((function(e){return{articles:e.articles.slice(0,20)}}),{getStories:E})((function(e){return e.articles.length||e.getStories(),r.a.createElement(q.a,{container:!0,spacing:3},e.articles.map((function(e){return r.a.createElement(q.a,Object(h.a)({key:e.title,item:!0,sm:6,md:3},"key",e.title),r.a.createElement(L,{title:e.title,date:e.date,content:e.content}))})))})),U=a(145),X=a(149),Y=Object(O.a)((function(e){return{button:{margin:e.spacing(1)},input:{display:"none"}}}));var z=Object(i.b)((function(e){return{articles:e.articles.slice(0,20)}}),{getStories:E,confirm:function(e){var t=e.title,a=e.date,n=e.content,r=e.email;console.log(" confirm(payload)");var o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:t,date:a,content:n,email:r})};return function(e){return fetch("https://178.221.74.252/email/confirm",o).then((function(e){return e.json()})).then((function(e){console.log("updated")}))}}})((function(e){var t=Y();e.articles.length||e.getStories();var a=e.match.params.id,n=e.articles.find((function(e){return e._id===a}));return n&&e.confirm(n),r.a.createElement(q.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},e.articles.find((function(e){return e._id===a}))?r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{variant:"subtitle1"},"Your story is uploaded to our server."),r.a.createElement(X.a,null,r.a.createElement(U.a,{href:"/",color:"primary",className:t.button},"Check it out")," ")):r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{variant:"subtitle1"},"Are you sure this is the right link?"),r.a.createElement(X.a,null,r.a.createElement(U.a,{href:"/",color:"primary",className:t.button},"Back")," ")))})),G=a(2),M=a(148),V=a(152);var H=Object(O.a)((function(e){return{button:{margin:e.spacing(1)},input:{display:"none"},main:{width:"500px",maxWidth:360,overflow:"auto"}}}));var K=Object(i.b)((function(e){return{articles:e.articles.slice(0,10)}}),(function(e){return{addArticle:function(t){return e(function(e){var t=e.title,a=e.date,n=e.content,r=e.email,o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:t,date:a,content:n,email:r})};return function(e){return fetch("https://test-server-express-2.herokuapp.com/users/addArticle",o).then((function(e){return e.json()})).then((function(t){e({type:l,payload:t})}))}}(t))}}}))((function(e){var t=H(),a=Object(n.useState)(""),o=Object(v.a)(a,2),i=o[0],c=o[1],l=Object(n.useState)(""),u=Object(v.a)(l,2),s=(u[0],u[1]),m=Object(n.useState)(""),d=Object(v.a)(m,2),p=d[0],f=d[1],b=Object(n.useState)(""),g=Object(v.a)(b,2),h=g[0],E=g[1],O=Object(n.useState)(!1),y=Object(v.a)(O,2),j=y[0],x=y[1],S=Object(n.useState)(!1),k=Object(v.a)(S,2),w=k[0],C=k[1],N=Object(n.useState)(!1),T=Object(v.a)(N,2),_=T[0],D=T[1];function A(e){"title"===e.target.id?(x(!1),c(e.target.value)):"content"===e.target.id?(C(!1),f(e.target.value)):"email"===e.target.id?(D(!1),E(e.target.value)):console.error("id not recognized")}return r.a.createElement(X.a,{className:t.main},r.a.createElement(V.a,{fullWidth:!0},r.a.createElement(M.a,{id:"title",label:"Title",value:i,onChange:A,margin:"normal",variant:"outlined",helperText:j||"",error:!!j}),r.a.createElement(M.a,{id:"content",label:"Write your story here...",value:p,onChange:A,multiline:!0,rows:"10",margin:"normal",variant:"outlined",helperText:w||"",error:!!w}),r.a.createElement(M.a,{id:"email",label:"email",value:h,onChange:A,margin:"normal",variant:"outlined",helperText:_||"",error:!!_}),r.a.createElement(X.a,{direction:"row"},r.a.createElement(U.a,{color:"primary",onClick:function(t){t.preventDefault();var a=(new Date).toLocaleDateString();i&&p&&h?e.articles.find((function(e){return e.title===i}))?x("Title must be unique"):(e.addArticle({title:i,date:a,content:p,email:h}),c(""),s(""),f(""),E(""),alert("Your story will apear on our page after you click on confirmation link we've sent to your email"),e.handleClose()):(i||x("Required"),p||C("Required"),h||D("Required"))},className:t.button}," Save "),r.a.createElement(U.a,{color:"secondary",onClick:e.handleClose,className:t.button}," Cancel "))))})),Q=a(150),Z=a(151),$=a(146),ee=a(71),te=a.n(ee),ae=a(52),ne=Object(O.a)((function(e){var t;return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:(t={backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},Object(h.a)(t,"backgroundColor","#e8e7e7"),Object(h.a)(t,"backgroundImage","linear-gradient(to right, #f5f0f0 , white , white , white, white , white )"),t),fab:{margin:e.spacing(1)}}})),re=r.a.forwardRef((function(e,t){var a=e.in,n=e.children,o=e.onEnter,i=e.onExited,c=Object(G.a)(e,["in","children","onEnter","onExited"]),l=Object(ae.useSpring)({from:{opacity:0},to:{opacity:a?1:0},onStart:function(){a&&o&&o()},onRest:function(){!a&&i&&i()}});return r.a.createElement(ae.animated.div,Object.assign({ref:t,style:l},c),n)}));function oe(){var e=ne(),t=r.a.useState(!1),a=Object(v.a)(t,2),n=a[0],o=a[1],i=function(){o(!1)};return r.a.createElement("div",null,r.a.createElement($.a,{color:"primary","aria-label":"add",onClick:function(){o(!0)},className:e.fab},r.a.createElement(te.a,null)),r.a.createElement(Q.a,{"aria-labelledby":"spring-modal-title","aria-describedby":"spring-modal-description",className:e.modal,open:n,onClose:i,closeAfterTransition:!0,BackdropComponent:Z.a,BackdropProps:{timeout:500}},r.a.createElement(re,{in:n},r.a.createElement("div",{className:e.paper},r.a.createElement(K,{handleClose:i})))))}var ie=a(72),ce=a.n(ie),le=a(147),ue=Object(O.a)((function(e){return{root:{flexGrow:1,height:"350px",backgroundImage:"url(".concat(ce.a,")"),marginBottom:"20px"},titleFont:{fontStyle:"italic",fontWeight:"400",padding:"20px",color:"#000067",fontFamily:"cursive"}}}));var se=function(){var e=ue();return r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,{container:!0,direction:"row",justify:"space-between",alignItems:"flex-start",className:e.root},r.a.createElement(N.a,{variant:"h2",component:"h6",className:e.titleFont}," ","Share your dream"," "),r.a.createElement(oe,null)),r.a.createElement(le.a,null,r.a.createElement(b.a,null,r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/confirm/:id",component:z}),r.a.createElement(g.a,{exact:!0,path:"/",component:P})))))};Object(o.render)(r.a.createElement(i.a,{store:f},r.a.createElement(se,null)),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.7ab5ccd6.chunk.js.map