(this.webpackJsonppetshome=this.webpackJsonppetshome||[]).push([[0],{217:function(e,t,a){e.exports=a(413)},405:function(e,t,a){},413:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(89),c=a.n(l),i=a(20),s=a(6),o=a(5),m={authError:null},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGNUP_SUCCESS":return console.log("Success signing up"),Object(o.a)(Object(o.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("Error Signing up"),Object(o.a)(Object(o.a)({},e),{},{authError:t.err.message});case"SIGNOUT_SUCCESS":return console.log("Signed out"),Object(o.a)(Object(o.a)({},e),{},{authError:null});case"LOGIN_SUCCESS":return console.log("Login success"),Object(o.a)(Object(o.a)({},e),{},{authError:null});case"LOGIN_ERROR":return console.log("Login error"),Object(o.a)(Object(o.a)({},e),{},{authError:"Login Failed"});default:return e}},d=a(216),p={err:null,url:[],doc:null},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_CREATED":return Object(o.a)(Object(o.a)({},e),{},{err:null});case"POST_ERROR":return Object(o.a)(Object(o.a)({},e),{},{err:t.err});case"IMAGE_FETCH":return Object(o.a)(Object(o.a)({},e),{},{url:[].concat(Object(d.a)(e.url),[t.url])});case"GET_POST":return Object(o.a)(Object(o.a)({},e),{},{err:null,doc:t.doc});case"GET_POST_ERROR":return Object(o.a)(Object(o.a)({},e),{},{err:t.err});case"DELETED":return e;case"DELETE_ERROR":return Object(o.a)(Object(o.a)({},e),{},{err:t.err});default:return e}},E=a(41),f=a(22),b=Object(i.c)({auth:u,posts:h,firestore:E.firestoreReducer,firebase:f.firebaseReducer}),g=(a(405),a(214)),v=a(7),N=a(8),O=a(10),y=a(9),w=a(23),j=a.n(w),C=a(2),S=function(){return function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})})).catch((function(e){console.error("Sign Out Error",e)}))}},x=Object(s.b)(null,(function(e){return{signOut:function(){return e(S())}}}))((function(e){return r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement(C.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(C.b,{to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(C.b,{to:"/create"},"Create Post")),r.a.createElement("li",null,r.a.createElement(C.b,{to:"/profile"},"Profile")),r.a.createElement("li",null,r.a.createElement("a",{href:"#",onClick:e.signOut},"Sign Out")))})),P=Object(s.b)(null,(function(e){return{signOut:function(){return e(S())}}}))((function(e){return r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement(C.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(C.b,{to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(C.b,{to:"/create"},"Create Post")),r.a.createElement("li",null,r.a.createElement(C.b,{to:"/profile"},"Profile")),r.a.createElement("li",null,r.a.createElement("a",{href:"#",onClick:e.signOut},"Sign Out")))})),k=function(e){return r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement(C.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(C.b,{to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(C.b,{to:"/signin"},"Sign In")),r.a.createElement("li",null,r.a.createElement(C.b,{to:"/signup"},"Sign Up")))},F=function(e){return r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement(C.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(C.b,{to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(C.b,{to:"/signin"},"Sign In")),r.a.createElement("li",null,r.a.createElement(C.b,{to:"/signup"},"Sign Up")))},R=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelector("#slide-out");j.a.Sidenav.init(e,{})}},{key:"render",value:function(){return r.a.createElement("header",{className:"root"},r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper container"},r.a.createElement(C.b,{to:"/",className:"brand-logo left hide-on-med-and-down"},r.a.createElement("img",{src:"icons/coollogo_com-2458743-removebg-preview.png",alt:""})),r.a.createElement(C.b,{to:"/",href:"#",className:"brand-logo center hide-on-large-only"},r.a.createElement("img",{src:"icons/coollogo_com-2458743-removebg-preview.png",alt:""})),this.props.auth.isEmpty?r.a.createElement(F,null):r.a.createElement(P,null),r.a.createElement("a",{href:"#","data-target":"slide-out",className:"sidenav-trigger"},r.a.createElement("i",{className:"material-icons"},"menu"))))),r.a.createElement("ul",{id:"slide-out",className:"sidenav"},this.props.auth.isEmpty?r.a.createElement(k,null):r.a.createElement(x,null)))}}]),a}(n.Component),_=Object(s.b)((function(e){return{profile:e.firebase.profile,auth:e.firebase.auth}}),(function(e){return{signOut:function(){return e(S())}}}))(R),I=a(11),A=a(140),D=a.n(A),T=a(215),U=function(e,t){100===e?(j.a.toast({html:"Image Uploaded!!"}),t.history.push("/")):j.a.toast({html:"Uploading image, progress: ".concat(e,"%")})},L=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).getUrl=function(e){return"/images/angel.jpg"},e}return Object(N.a)(a,[{key:"render",value:function(){var e=this.props.posts;return r.a.createElement("div",{className:"root"},e&&e.map((function(e){return r.a.createElement("div",{className:"col s12 m6 l6",key:e.id},r.a.createElement("div",{className:"card large"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:e.url,className:"responsive-img ",alt:"Pet Pic"}),r.a.createElement("span",{className:"card-title"},e.title)),r.a.createElement("div",{className:"card-content"},r.a.createElement("p",null,e.description)),r.a.createElement("div",{className:"card-action"},r.a.createElement(C.b,{to:"/post/"+e.id},"Show Post"))))})))}}]),a}(n.Component),G=Object(s.b)((function(e){return{url:e.posts.url}}),(function(e){return{getImage:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase;n.getFirestore;r().storage().ref("post_pics").child(e).getDownloadURL().then((function(a){console.log(e),t({type:"IMAGE_FETCH",url:a})})).catch((function(e){console.error(e)}))}}(t))}}}))(L),q=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelectorAll(".parallax");j.a.Parallax.init(e,{})}},{key:"render",value:function(){return console.log(this.props.auth),r.a.createElement("div",null,r.a.createElement("div",{className:"parallax-container"},r.a.createElement("div",{className:"parallax"},r.a.createElement("img",{src:"/images/cat.jpg",alt:""}))),r.a.createElement("div",{className:"section-white"},r.a.createElement("div",{className:"row container"},r.a.createElement("h2",{className:"header center"},this.props.posts?"New Posts":"Loading...")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement(G,{posts:this.props.posts}))),r.a.createElement("div",{className:"parallax-container"},r.a.createElement("div",{className:"parallax"},r.a.createElement("img",{src:"/images/dog2.jpg",alt:""})))))}}]),a}(n.Component),H=Object(i.d)(Object(s.b)((function(e){return{posts:e.firestore.ordered.posts,auth:e.firebase.auth}})),Object(f.firestoreConnect)([{collection:"posts",orderBy:["createdAt","desc"]}]))(q),B=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"componentDidMount",value:function(){var e=document.getElementById("myBtn");e.style.display="none",window.onscroll=function(){document.body.scrollTop>200||document.documentElement.scrollTop>200?e.style.display="block":e.style.display="none"}}},{key:"goToTop",value:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},{key:"render",value:function(){return r.a.createElement("div",{className:"fixed-action-btn",id:"myBtin"},r.a.createElement("a",{id:"myBtn",onClick:this.goToTop,className:"btn-floating btn-large  btnColor"},r.a.createElement("i",{className:"large material-icons"},"arrow_upward")))}}]),a}(n.Component),M=a(141),W=a.n(M),z=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={image:"/images/angel.jpg"},e.handleDelete=function(t,a){window.confirm("Are you sure you want to delete post?")&&(e.props.deletePost(t,a),e.props.history.push("/"))},e}return Object(N.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelectorAll(".collapsible"),t=(j.a.Collapsible.init(e,{}),document.querySelectorAll(".parallax"));j.a.Parallax.init(t,{})}},{key:"toast",value:function(){j.a.toast({html:"Copied!",classes:"rounded"})}},{key:"render",value:function(){var e=this;if(!this.props.auth.uid)return r.a.createElement(I.a,{to:"/signin"});var t=this.props.post;if(t){var a=this.props.id,n=t.authId===this.props.auth.uid?r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",t.authorFirstName+" "+t.authorLastName),r.a.createElement("div",null,W()(t.createdAt.toDate().toString()).calendar(),r.a.createElement("div",{className:"right"},r.a.createElement("a",{onClick:function(){return e.handleDelete(a,t.image_name)},href:"#"},r.a.createElement("i",{className:"material-icons icon-grey"},"delete"))))):r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",t.authorFirstName+" "+t.authorLastName),r.a.createElement("div",null,W()(t.createdAt.toDate().toString()).calendar()));return r.a.createElement("div",{className:"root"},r.a.createElement("div",{className:"parallax-container"},r.a.createElement("div",{className:"parallax"},r.a.createElement("img",{src:"/images/cat3.jpg",alt:""}))),r.a.createElement("div",{className:"section-white"},r.a.createElement("div",{className:"container ",style:{paddingTop:"2%"}},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image padding"},r.a.createElement("img",{src:t.url,className:"hide-on-large-only",alt:"Pet Pic"}),r.a.createElement("img",{src:t.url,className:"hide-on-med-and-down",width:"200",height:"500",alt:"Pet Pic"})),r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"card-title",onCopy:this.toast},t.title),r.a.createElement("br",null),r.a.createElement("ul",{className:"collapsible"},r.a.createElement("li",null,r.a.createElement("div",{className:"collapsible-header"},r.a.createElement("i",{className:"material-icons"},"expand_more"),"Description"),r.a.createElement("div",{className:"collapsible-body"},r.a.createElement("span",{onCopy:this.toast},t.description))),r.a.createElement("li",null,r.a.createElement("div",{className:"collapsible-header"},r.a.createElement("i",{className:"material-icons"},"expand_more"),"Contact"),r.a.createElement("div",{className:"collapsible-body"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("i",{className:"material-icons",onCopy:this.toast},"phone"),r.a.createElement("a",{href:"tel:"+t.phone},t.phone)),r.a.createElement("li",null,r.a.createElement("i",{className:"material-icons",onCopy:this.toast},"mail"),r.a.createElement("a",{href:"mailto: "+t.email},t.email)))))),n))),r.a.createElement("div",{className:"parallax-container"},r.a.createElement("div",{className:"parallax"},r.a.createElement("img",{src:"/images/dog3.jpg",alt:""})))))}return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"center"},r.a.createElement("h5",{className:"grey-text"},"Loading Post...")))}}]),a}(r.a.Component),J=Object(i.d)(Object(s.b)((function(e,t){var a=t.match.params.post_id,n=e.firestore.data.posts;return{post:n?n[a]:null,auth:e.firebase.auth,id:a}}),(function(e){return{deletePost:function(t,a){return e(function(e,t){return function(a,n,r){var l=r.getFirebase,c=r.getFirestore,i=l();c().collection("posts").doc(e).delete().then((function(){console.log("Document Deleted"),i.storage().ref("post_pics").child(t).delete().then((function(){console.log("Picture Deleted")})).catch((function(e){console.error(e)})),a({type:"DELETED"})})).catch((function(e){console.error(e),a({type:"DELETE_ERROR",err:e})}))}}(t,a))}}})),Object(f.firestoreConnect)([{collection:"posts"}]))(z),K=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"page-footer root"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col l6 s12"},r.a.createElement("h5",{className:"white-text"},"Pet's Home"),r.a.createElement("p",{className:"grey-text text-lighten-4"},"A WebApp that concentrates on first of all pets and second of all humanity")),r.a.createElement("div",{className:"col l4 offset-l2 s12"},r.a.createElement("h5",{className:"white-text"},"Links"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{className:"grey-text text-lighten-3",href:"https://www.instagram.com/m_faour34/"},"Instagram")),r.a.createElement("li",null,r.a.createElement("a",{className:"grey-text text-lighten-3",href:"https://github.com/mfaour34"},"Github")))))),r.a.createElement("div",{className:"footer-copyright"},r.a.createElement("div",{className:"container"},"Pet's Home \xa9 2020 Copyright")))}}]),a}(n.Component),Q=a(32),X=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(Q.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state),e.setState({email:"",password:""})},e}return Object(N.a)(a,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement(I.a,{to:"/"}):r.a.createElement("div",{className:"container center root"},r.a.createElement("div",{className:"section white"},r.a.createElement("div",{className:"row"},r.a.createElement("br",null),r.a.createElement("br",{className:"hide-on-med-and-down"}),r.a.createElement("form",{className:"col s12 white",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("i",{className:"material-icons prefix"},"mail"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange,value:this.state.email}),r.a.createElement("label",{htmlFor:"email"},"E-mail"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("i",{className:"material-icons prefix"},"lock"),r.a.createElement("input",{required:!0,type:"password",id:"password",onChange:this.handleChange,value:this.state.password}),r.a.createElement("label",{htmlFor:"password"},"Password"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"center"},r.a.createElement("button",{className:"btn waves-effect waves-light pinkColor",type:"submit",name:"action"},"Submit",r.a.createElement("i",{className:"material-icons right"},"send")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"center"},r.a.createElement("p",{className:"red-text"},this.props.authError)))))))}}]),a}(n.Component),Y=Object(s.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(X),$=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={firstname:"",lastname:"",email:"",password:"",confirm:""},e.handleChange=function(t){e.setState(Object(Q.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.state.password===e.state.confirm?e.props.signUp(e.state):console.log("Passwords dont match")},e}return Object(N.a)(a,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement(I.a,{to:"/"}):r.a.createElement("div",{className:"container center root"},r.a.createElement("div",{className:"section white"},r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"col s12 white",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("i",{className:"material-icons prefix"},"account_circle"),r.a.createElement("input",{required:!0,type:"text",id:"firstname",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"firstname"},"First Name")),r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("i",{className:"material-icons prefix"},"account_circle"),r.a.createElement("input",{required:!0,type:"text",id:"lastname",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"lastname"},"Last Name"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("i",{className:"material-icons prefix"},"mail"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"email"},"E-mail"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("i",{className:"material-icons prefix"},"lock"),r.a.createElement("input",{required:!0,type:"password",id:"password",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"password"},"Password")),r.a.createElement("div",{className:"input-field col s6"},r.a.createElement("i",{className:"material-icons prefix"},"lock"),r.a.createElement("input",{required:!0,type:"password",id:"confirm",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"confirm"},"Confirm Password"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"center"},r.a.createElement("button",{className:"btn waves-effect waves-light pinkColor",type:"submit",name:"action"},"Submit",r.a.createElement("i",{className:"material-icons right"},"send")))),r.a.createElement("div",{className:"red-text center"},this.props.authError?r.a.createElement("p",null,this.props.authError):null)))))}}]),a}(n.Component),V=Object(s.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError,signedUp:e.auth.signedUp}}),(function(e){return{signUp:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,l=n.getFirestore,c=r(),i=l();c.auth().createUserWithEmailAndPassword(a.email,a.password).then((function(t){c.auth().onAuthStateChanged((function(n){var r=t.user.uid;i.collection("users").doc(r).set({firstName:a.firstname,lastName:a.lastname,email:a.email}).then((function(){e({type:"SIGNUP_SUCCESS"})})).catch((function(t){e({type:"SIGNUP_ERROR",err:t})}))}))})).catch((function(t){e({type:"SIGNUP_ERROR",err:t})}))}));var a}}}))($),Z=a(52),ee=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).state={title:"",description:"",phone:"",image:null},n.handleSubmit=function(e){e.preventDefault(),n.props.createPost(n.state,n.props)},n.handlePic=function(e){n.setState({image:n.fileInput.current.files[0]})},n.handleChange=function(e){n.setState(Object(Q.a)({},e.target.id,e.target.value))},n.handleSubmit=n.handleSubmit.bind(Object(Z.a)(n)),n.handleChange=n.handleChange.bind(Object(Z.a)(n)),n.handlePic=n.handlePic.bind(Object(Z.a)(n)),n.fileInput=r.a.createRef(),n}return Object(N.a)(a,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container center root"},r.a.createElement("div",{className:"section white"},r.a.createElement("div",{className:"row"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"col s12"},r.a.createElement("div",{className:"row "},r.a.createElement("h4",{className:"grey-text text-darken-3"},"Create Post")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",required:!0,value:this.state.title,onChange:this.handleChange}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 input-field"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{id:"description",required:!0,className:"materialize-textarea",onChange:this.handleChange,value:this.state.description}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 input-field"},r.a.createElement("label",{htmlFor:"phone"},"Phone"),r.a.createElement("input",{type:"text",id:"phone",required:!0,onChange:this.handleChange,value:this.state.phone}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"file-field input-field"},r.a.createElement("div",{className:"btn waves-effect waves-light pinkColor"},r.a.createElement("span",null,"Image"),r.a.createElement("input",{type:"file",required:!0,id:"image",ref:this.fileInput,onChange:this.handlePic})),r.a.createElement("div",{className:"file-path-wrapper"},r.a.createElement("input",{type:"text",disabled:!0,className:"file-path"})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"center"},r.a.createElement("button",{className:"btn waves-effect waves-light pinkColor",type:"submit",name:"action"},"Submit",r.a.createElement("i",{className:"material-icons right"},"send")))))))):r.a.createElement(I.a,{to:"/signin"})}}]),a}(n.Component),te=Object(s.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createPost:function(t,a){return e(function(e,t){return function(a,n,r){var l=r.getFirebase,c=r.getFirestore,i=l(),s=c(),o=i.storage(),m=n().firebase.profile,u=n().firebase.auth.uid,d=e.image.name+u+""+Math.random();o.ref("/post_pics/".concat(d)).put(e.image).on("state_changed",(function(e){var a=e.bytesTransferred/e.totalBytes*100;U(a,t)}),(function(e){console.log(e)}),(function(){console.log("done image upload"),o.ref("post_pics").child(d).getDownloadURL().then((function(t){console.log(t),s.collection("posts").add({title:e.title,description:e.description,authorFirstName:m.firstName,authorLastName:m.lastName,authId:u,createdAt:new Date,phone:e.phone,email:m.email,url:t,image_name:d}).then((function(){a({type:"POST_CREATED"})})).catch((function(e){a({type:"POST_ERROR",err:e})}))}))}))}}(t,a))}}}))(ee),ae=function(e){var t=e.posts;return console.log(t),r.a.createElement("div",{className:"root"},t&&t.map((function(e){return r.a.createElement("div",{className:"col s6 s6 l6",key:e.id},r.a.createElement(C.b,{to:"/post/"+e.id},r.a.createElement("h5",null,e.title)))})))},ne=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){var e;return Object(v.a)(this,a),(e=t.call(this)).state={},e}return Object(N.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.getUidPosts(this.props.creds.auth.uid).then((function(t){e.setState({res:t})}))}},{key:"render",value:function(){if(!this.props.creds.auth.uid)return r.a.createElement(I.a,{to:"/signin"});console.log(this.props);var e=this.props.creds,t=e.profile,a=e.auth;return null!=t.firstName?(console.log(this.state),r.a.createElement("div",{className:"container center"},r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement("h2",null,t.firstName+" "+t.lastName)))),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6 l6"},r.a.createElement("h5",null,a.email+"")),r.a.createElement("div",{className:"col s12 m6 l6"},r.a.createElement("h5",null,a.uid)))),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"row"},r.a.createElement("h3",{className:"grey-text"},"Ads"),r.a.createElement(ae,{posts:this.state.res}))))):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"center"},r.a.createElement("h2",{className:"grey-text"},"Loading..."))))}}]),a}(n.Component),re=Object(s.b)((function(e){return{creds:e.firebase}}),(function(e){return{getUidPosts:function(t){return e(function(e){return function(){var t=Object(T.a)(D.a.mark((function t(a,n,r){var l,c,i,s;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=r.getFirebase,c=r.getFirestore,l(),i=c(),console.log(e),s=[],t.next=7,i.collection("posts").where("authId","==",e).get().then((function(e){e.forEach((function(e){var t=e.data();t.id=e.id,console.log(t),s.push(t)}))})).catch((function(e){console.log("Error fetching data")}));case 7:return console.log(s),t.abrupt("return",s);case 9:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}()}(t))}}}))(ne),le=function(){return r.a.createElement("div",{className:"container root"},r.a.createElement("h3",{className:"center"},"About"),r.a.createElement("h4",{className:"grey-text center"},"Pet's Home aims to shelter animals who have been abondened or their families want to to pass them to another family.",r.a.createElement("br",null),"During the epidemic, Alot of families wen through hard financial situations, so they decided to pass their pets to another families for a temporary time or permanently.",r.a.createElement("br",null),"On Pet's Home families, individuals, shops, and organizations can post Ads for animal adoption."))},ce=function(e){Object(O.a)(a,e);var t=Object(y.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(N.a)(a,[{key:"render",value:function(){return r.a.createElement(C.a,null,r.a.createElement("div",{className:"App root"},r.a.createElement(_,null),r.a.createElement("main",null,r.a.createElement(I.d,null,r.a.createElement(I.b,{exact:!0,path:"/",component:H}),r.a.createElement(I.b,{path:"/about",component:le}),r.a.createElement(I.b,{path:"/post/:post_id",component:J}),r.a.createElement(I.b,{path:"/signin",component:Y}),r.a.createElement(I.b,{path:"/signup",component:V}),r.a.createElement(I.b,{path:"/create",component:te}),r.a.createElement(I.b,{path:"/profile",component:re})),r.a.createElement(B,null)),r.a.createElement(K,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=a(42),se=a.n(ie);a(408),a(411),a(414);se.a.initializeApp({apiKey:"AIzaSyBjh2xd8QGUDtsX0CyFFGlHdMPDWTptY7g",authDomain:"pets-home-9bf9d.firebaseapp.com",databaseURL:"https://pets-home-9bf9d.firebaseio.com",projectId:"pets-home-9bf9d",storageBucket:"pets-home-9bf9d.appspot.com",messagingSenderId:"458422562717",appId:"1:458422562717:web:fafd4f87196bd91832c974",measurementId:"G-9HSKS75LJ3"}),se.a.firestore();se.a;var oe=Object(i.e)(b,Object(i.d)(Object(i.a)(g.a.withExtraArgument({getFirebase:f.getFirebase,getFirestore:E.getFirestore})),Object(E.reduxFirestore)(se.a))),me={firebase:se.a,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:oe.dispatch,createFirestoreInstance:E.createFirestoreInstance};function ue(e){var t=e.children,a=Object(s.c)((function(e){return e.firebase.auth}));return Object(f.isLoaded)(a)?t:r.a.createElement("div",{className:"container center"},r.a.createElement("h3",{className:"grey-text center"},"Loading..."))}c.a.render(r.a.createElement(s.a,{store:oe},r.a.createElement(f.ReactReduxFirebaseProvider,me,r.a.createElement(ue,null,r.a.createElement(ce,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[217,1,2]]]);
//# sourceMappingURL=main.db7c99b8.chunk.js.map