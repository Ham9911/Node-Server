(this["webpackJsonpfriends-app"]=this["webpackJsonpfriends-app"]||[]).push([[0],{167:function(e,t,c){},168:function(e,t,c){},244:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(49),a=c.n(n),o=(c(167),c(168),c(130),c(23)),i=c(9),l=c(145),r=c(74),j=c(52),d=c(38),b=Object(l.a)({apiKey:"AIzaSyDvVYViIxakEjH7PdEd3RJvrkGG22E4U5A",authDomain:"friends-app-5751e.firebaseapp.com",projectId:"friends-app-5751e",storageBucket:"friends-app-5751e.appspot.com",messagingSenderId:"138260231048",appId:"1:138260231048:web:b61bd4506e4f6cb0d5003d"}),m=Object(r.b)(),u=Object(j.g)(b),p=Object(d.b)(),h=Object(d.c)(p),O=c(254),g=c(249),x=c(247),f=c(70),v=c(248),y=c(253),w=c(250),N=c(246),S=c(255),P=c(7),I=function(){var e,t={email:"",lastLoggedin:"",username:"",dob:"",gender:"",contactno:"",about:""},c=Object(o.f)(),s=g.a.Option;var n=x.a.useForm(),a=Object(i.a)(n,1)[0];Object(r.c)(m,(function(e){if(e){var c=e.email,s=new Date;console.log(c,s),t.email=c,t.lastLoggedin=s,localStorage.setItem("logginUser",e.uid)}else console.log("no user has logged in")}));var l=function(){a.resetFields()};return Object(P.jsxs)("div",{children:[Object(P.jsx)(f.a,{icon:Object(P.jsx)(O.a,{}),type:"primary",onClick:function(){Object(r.e)(m).then((function(){c("/")})).catch((function(e){}))},children:"LogOut"}),Object(P.jsxs)(x.a,{name:"complex-form",onFinish:function(s){e=localStorage.getItem("logginUser");var n=s.upload[0].originFileObj;console.log(n);var a=e;console.log(a);var o=Object(d.c)(h,"images"),i=Object(d.c)(o,a),r=i.fullPath;console.log(r);var b=i.name;console.log(b);var m=i.parent;console.log(m);var O=Object(d.c)(p,"images/".concat(e));Object(d.d)(O,n).then((function(e){console.log("Uploaded a blob or file!"),g(),x(),l(),c("/home")}));var g=function(){Object(d.a)(Object(d.c)(p,"images/".concat(e))).then((function(c){console.log(c),t.pic=c,console.log(t.pic),Object(j.i)(Object(j.d)(u,"users",e),{profileimage:t.pic},{merge:!0}),console.log("Pic Uploaded")}))},x=function(){console.log("Received values of form: ",s),t.username=s.username,t.contactno=s.contactno,t.about=s.about,Object(j.i)(Object(j.d)(u,"users",e),{username:s.username,contactno:s.contactno,about:s.about,dob:t.dob,gender:t.gender,uid:e},{merge:!0}),console.log("Done")}},form:a,labelCol:{span:8},wrapperCol:{span:16},children:[Object(P.jsx)(x.a.Item,{name:"upload",label:"Upload",valuePropName:"fileList",getValueFromEvent:function(e){return console.log("Upload event:",e),Array.isArray(e)?e:e&&e.fileList},children:Object(P.jsx)(v.a,{name:"logo",listType:"picture",accept:"image/*",multiple:!1,maxCount:1,children:Object(P.jsx)(f.a,{icon:Object(P.jsx)(S.a,{}),children:"Click to upload"})})}),Object(P.jsx)(x.a.Item,{label:"Username",children:Object(P.jsx)(y.b,{children:Object(P.jsx)(x.a.Item,{name:"username",noStyle:!0,rules:[{required:!0,message:"Username is required"}],children:Object(P.jsx)(w.a,{style:{width:160},placeholder:"Please input"})})})}),Object(P.jsx)(x.a.Item,{label:"Contact Number",children:Object(P.jsx)(y.b,{children:Object(P.jsx)(x.a.Item,{name:"contactno",type:Number,noStyle:!0,rules:[{required:!0,message:"Contact Number Required"}],children:Object(P.jsx)(w.a,{style:{width:160},placeholder:"Please Enter Contact Number"})})})}),Object(P.jsx)(x.a.Item,{label:"Date Of Birth",children:Object(P.jsx)(y.b,{children:Object(P.jsx)(N.a,{name:"date-of-birth",label:"date-of-birth",onChange:function(e,c){console.log(e,c),t.dob=c}})})}),Object(P.jsx)(x.a.Item,{label:"Select",children:Object(P.jsxs)(g.a,{placeholder:"Select a option and change input text above",onChange:function(e){console.log(e),t.gender=e},allowClear:!0,children:[Object(P.jsx)(s,{value:"male",children:"male"}),Object(P.jsx)(s,{value:"female",children:"female"}),Object(P.jsx)(s,{value:"other",children:"other"})]})}),Object(P.jsx)(x.a.Item,{label:"About me",children:Object(P.jsx)(w.a.Group,{compact:!0,children:Object(P.jsx)(x.a.Item,{name:"about",noStyle:!0,rules:[{required:!0,message:"Enter about Yourself"}],children:Object(P.jsx)(w.a,{style:{width:"50%"}})})})}),Object(P.jsx)(x.a.Item,{label:" ",colon:!1,children:Object(P.jsx)(f.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})]})},C=c(1),U=c.n(C),L=c(3),E=c(57),F=c(129),k=Object(F.b)({name:"friends",initialState:{status:!1,search:[],liveSearch:[],user:[],posts:[],myposts:[],searchdata:"z"},reducers:{setShow:function(e,t){e.status=t.payload},setAllSearch:function(e,t){e.search=t.payload},searchparam:function(e,t){e.searchdata=t.payload},setLiveSearch:function(e,t){e.liveSearch=t.payload},setMyUser:function(e,t){e.user=t.payload},setAllPosts:function(e,t){e.posts=t.payload},setMyPosts:function(e,t){e.myposts=t.payload}}}),A=Object(F.a)({reducer:k.reducer}),T=k.actions,B=(T.setShow,T.setAllSearch,T.setLiveSearch,T.setMyUser),D=(T.searchparam,T.setAllPosts),z=T.setMyPosts,q=A,V=c.p+"static/media/logoimage.03ca98a3.png",R=c.p+"static/media/friends.bfe83ab6.png",M=(c(97),c(252)),J=c(256),G=c(257),H=c(258),Y=c(55),K=function(){var e=Object(o.f)(),t={};return Object(s.useEffect)((function(){Object(r.c)(m,(function(e){if(e){var c=e.email,s=new Date;e.lastLoggedin=s,console.log(c,s),t.email=c,t.lastLoggedin=s}else console.log("no user has logged in")}))}),[]),Object(P.jsx)("div",{children:Object(P.jsx)("div",{className:"container",children:Object(P.jsxs)("div",{className:"logo",children:[Object(P.jsx)("span",{children:Object(P.jsx)("img",{style:{height:"45px"},src:V})}),Object(P.jsx)("span",{children:Object(P.jsx)("img",{style:{height:"45px"},src:R})}),Object(P.jsx)("h1",{className:"heading",children:"Login Page"}),Object(P.jsxs)(x.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(t){console.log("Received values of form: ",t);var c=t.email,s=t.password;(function(){return c})(c),console.log(c,s),Object(r.d)(m,c,s).then((function(t){console.log(t);var c=t.user;console.log(c.email,c.password),e("/home")})).catch((function(e){e.code,e.message;console.log(e)}))},children:[Object(P.jsx)(x.a.Item,{name:"email",rules:[{required:!0,message:"Please input your Username!"}],children:Object(P.jsx)(w.a,{prefix:Object(P.jsx)(J.a,{className:"site-form-item-icon"}),placeholder:"Username",type:"email"})}),Object(P.jsx)(x.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(P.jsx)(w.a,{prefix:Object(P.jsx)(G.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password",size:"10"})}),Object(P.jsxs)(x.a.Item,{children:[Object(P.jsx)(x.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:Object(P.jsx)(M.a,{children:"Remember me"})}),Object(P.jsx)("a",{className:"login-form-forgot",href:"",children:"Forgot password"})]}),Object(P.jsxs)(x.a.Item,{children:[Object(P.jsx)(f.a,{icon:Object(P.jsx)(H.a,{}),type:"primary",htmlType:"submit",className:"login-form-button",children:"Log in"}),"Or ",Object(P.jsx)(Y.b,{to:"/signup",children:"Signup Here"})]})]})]})})})},W=function(){var e,t=Object(E.b)(),c=(w.a.Search,g.a.Option),n=Object(s.useState)([]),a=Object(i.a)(n,2),l=a[0],d=a[1],b=Object(s.useState)("home"),p=Object(i.a)(b,2),h=(p[0],p[1],Object(s.useState)("zzz")),O=Object(i.a)(h,2),x=O[0],v=O[1],y=[];Object(s.useEffect)(Object(L.a)(U.a.mark((function e(){var t,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(t=x).split(" ").join("").toLowerCase(),console.log(t),c=Object(j.h)(Object(j.b)(u,"users"),Object(j.j)("username",">=",t),Object(j.j)("username","<=",t+"\uf8ff")),e.next=6,Object(j.f)(c);case 6:e.sent.forEach((function(e){console.log(e.data()),y.push(e.data())})),d(y);case 9:case"end":return e.stop()}}),e)}))),[x]);var N=l.map((function(e,t){return Object(P.jsx)(c,{children:e.username},t)}));Object(s.useEffect)((function(){}),[]);var S=Object(E.c)((function(e){return e.status}));console.log(S);var I=Object(E.c)((function(e){return e.search}));console.log(I),Object(r.c)(m,(function(t){t?(localStorage.setItem("logginUser",t.uid),localStorage.setItem("user",t.email),e=t.email):console.log("no user has logged in")}));localStorage.getItem("logginUser");var C=Object(o.f)(),F=Object(E.c)((function(e){return e.user})),k=[];console.log(e),Object(s.useEffect)(Object(L.a)(U.a.mark((function c(){var s,n;return U.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return e=localStorage.getItem("logginUser"),s=Object(j.d)(u,"users",e),c.next=4,Object(j.e)(s);case 4:(n=c.sent).exists()?(console.log("Document data:",n.data()),k=n.data(),t(B(k))):console.log("No such document!");case 6:case"end":return c.stop()}}),c)}))),[]);var A,T=[],z=[],q=Object(E.c)((function(e){return e.posts}));return Object(s.useEffect)(Object(L.a)(U.a.mark((function e(){var c,s;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(j.b)(u,"Posts"),console.log(c),s=Object(j.h)(c),e.next=5,Object(j.f)(s);case 5:A=e.sent,console.log(A),A.forEach((function(e){T=e.data(),z.push(T),console.log(z)})),t(D(z));case 9:case"end":return e.stop()}}),e)}))),[]),Object(P.jsxs)("div",{className:"main",children:[Object(P.jsxs)("div",{className:"top-bar",children:[Object(P.jsx)("span",{children:Object(P.jsx)("img",{style:{height:"45px"},src:V})}),Object(P.jsx)("span",{children:Object(P.jsx)("img",{style:{height:"45px"},src:R})}),Object(P.jsx)(g.a,{showSearch:!0,placeholder:"Search Users",showArrow:!1,className:"searchSelect",defaultActiveFirstOption:!1,onSearch:function(e){v(""===e?"zzz":e)},style:{width:"250px"},onChange:function(e){console.log(l[e]),C("/".concat(l[e].uid))},optionFilterProp:"children",filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:N})]}),Object(P.jsxs)("div",{className:"intro-section",children:[Object(P.jsx)("img",{className:"profileimage",src:F.profileimage,style:{width:"200px",height:"200px"}}),Object(P.jsxs)("div",{className:"search-section ".concat(S?"":"none"),children:[Object(P.jsx)("h2",{className:"sub-heading",children:"Users"}),I.map((function(e,t){return console.log(e),Object(P.jsxs)("div",{id:"searchResult",children:[Object(P.jsx)("div",{style:{maxWidth:"auto"},children:Object(P.jsx)("img",{src:e.profileimage,style:{width:"200px",height:"150px"}})}),Object(P.jsxs)("div",{className:"boxes",children:["User Name: ",e.username," "]}),Object(P.jsxs)("div",{className:"boxes",children:["About: ",e.about]}),Object(P.jsxs)("div",{id:"username",className:"boxes",children:["Uid: ",e.uid]}),Object(P.jsx)(f.a,{type:"submit",onClick:function(){!function(e){var t=e;console.log("clicked"),C("/".concat(t))}(e.uid)},style:{marginTop:"10px"},children:"View Profile"})]})}))]}),Object(P.jsxs)("div",{className:"post-section ".concat(S?"none":""),children:[Object(P.jsx)("div",{}),Object(P.jsx)("div",{children:q.map((function(e,t){return Object(P.jsxs)("div",{className:"postDiv",style:{marginTop:"10px"},children:[Object(P.jsx)("div",{className:"postedBy",children:e.createdby}),Object(P.jsx)("div",{className:"postTitle",children:e.title}),Object(P.jsx)("div",{children:Object(P.jsx)("img",{className:"postImage",src:e.image,style:{width:"570px",height:"450px"}})}),Object(P.jsxs)("div",{className:"postContent",children:[" ",e.content]})]})}))})]}),Object(P.jsx)("div",{id:"intro",children:Object(P.jsxs)("div",{children:[Object(P.jsx)("div",{className:"user-name",children:F.username}),Object(P.jsxs)("div",{children:[Object(P.jsx)("img",{style:{paddingLeft:"20px",paddingBottom:"10px"},src:"https://img.icons8.com/fluency/48/000000/age.png"})," ",F.dob]}),Object(P.jsxs)("div",{children:[Object(P.jsx)("img",{style:{paddingLeft:"20px",paddingBottom:"10px"},src:"https://img.icons8.com/fluency/48/000000/phone-disconnected.png"})," ",F.contactno]}),Object(P.jsxs)("div",{children:[Object(P.jsx)("img",{style:{paddingLeft:"20px",paddingBottom:"10px"},src:"https://img.icons8.com/fluency/48/000000/about.png"})," ",F.about]}),Object(P.jsx)(f.a,{style:{margin:"20px 0px 30px 20px"},onClick:function(){C("/form")},children:"Edit Profile"}),Object(P.jsx)(f.a,{style:{margin:"20px 0px 30px 30px"},onClick:function(){C("/")},children:"Logout"}),Object(P.jsx)("span",{children:Object(P.jsx)(f.a,{style:{margin:"20px 0px 30px 30px"},onClick:function(){C("/Posts")},children:"Add Post"})})]})})]})]})},_=c(6),Q=function(){var e=Object(E.b)(),t={uid:"",title:"",image:"",content:"",postedBy:""},c={labelCol:{span:5},wrapperCol:{span:12}},n=JSON.parse(localStorage.getItem("post"));console.log(n);var a=localStorage.getItem("logginUser"),o=x.a.useForm(),l=Object(i.a)(o,1)[0],b=function(e){var c=localStorage.getItem("user");console.log(e),t.content=e.content,t.title=e.post,t.uid=a,Object(j.i)(Object(j.d)(u,"Posts",t.title),{createdby:c,content:t.content,title:t.title,uid:a},{merge:!0}),console.log("Data Set"),console.log(t);var s=e.upload[0].originFileObj;console.log(s);var n=t.title;console.log(n);var o=Object(d.c)(h,"images"),i=Object(d.c)(o,n),l=i.fullPath;console.log(l);var r=i.name;console.log(r);var b=i.parent;console.log(b);var m=Object(d.c)(p,"postimages/".concat(n));Object(d.d)(m,s).then((function(e){console.log("Uploaded a blob or file!"),y(),O()}))},O=function(){l.resetFields()};Object(s.useEffect)((function(){Object(r.c)(m,(function(e){if(e){var c=e.email;console.log(c),t.postedBy=c}else console.log("no user has logged in")}))}),[b]);var g,y=function(){Object(d.a)(Object(d.c)(p,"postimages/".concat(t.title))).then((function(e){console.log(e),t.image=e,Object(j.i)(Object(j.d)(u,"Posts",t.title),{image:t.image},{merge:!0}),console.log("Pic Uploaded")}))},N=function(){var e=Object(L.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,Object(j.c)(Object(j.d)(u,"Posts",t));case 3:window.location.reload();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=[],C=[],F=Object(E.c)((function(e){return e.myposts}));return Object(s.useEffect)(Object(L.a)(U.a.mark((function t(){var c,s;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=Object(j.h)(Object(j.b)(u,"Posts"),Object(j.j)("uid","==",a)),console.log(c),s=Object(j.h)(c),t.next=5,Object(j.f)(s);case 5:g=t.sent,console.log(g),g.forEach((function(e){I=e.data(),C.push(I),console.log(C)})),e(z(C));case 9:case"end":return t.stop()}}),t)}))),[]),console.log(F),Object(P.jsxs)("div",{children:[Object(P.jsxs)("div",{className:"top-bar ",style:{fontSize:"30px"},children:[Object(P.jsx)("span",{children:Object(P.jsx)("img",{style:{height:"45px"},src:V})}),Object(P.jsx)("span",{children:Object(P.jsx)("img",{style:{height:"45px"},src:R})})]}),Object(P.jsx)("div",{children:Object(P.jsxs)(x.a,Object(_.a)(Object(_.a)({className:"post-section-form"},c),{},{name:"nest-messages",onFinish:b,form:l,children:[Object(P.jsx)("span",{style:{margin:"0 0 20px 273px",fontSize:"38px"},children:"Add Posts"}),Object(P.jsx)(x.a.Item,{name:"upload",label:"Upload",valuePropName:"fileList",getValueFromEvent:function(e){return console.log("Upload event:",e),Array.isArray(e)?e:e&&e.fileList},children:Object(P.jsx)(v.a,{name:"logo",listType:"picture",accept:"image/*",multiple:!1,maxCount:1,children:Object(P.jsx)(f.a,{style:{alignContent:"left"},icon:Object(P.jsx)(S.a,{}),children:"Click to upload"})})}),Object(P.jsx)(x.a.Item,{name:"post",label:"Title",children:Object(P.jsx)(w.a,{})}),Object(P.jsx)(x.a.Item,{name:["content"],label:"Content",children:Object(P.jsx)(w.a.TextArea,{})}),Object(P.jsx)(x.a.Item,{wrapperCol:Object(_.a)(Object(_.a)({},c.wrapperCol),{},{offset:8}),children:Object(P.jsx)(f.a,{type:"primary",htmlType:"submit",children:"Submit"})})," "]}))}),Object(P.jsxs)("div",{className:"",children:[Object(P.jsx)("span",{style:{margin:"0 0 20px 273px",fontSize:"38px"},children:"All Posts"}),F.map((function(e){return Object(P.jsxs)("div",{className:"postDiv postAlign",children:[Object(P.jsxs)("div",{className:"postedBy",children:["Created By: ",e.createdby]}),Object(P.jsxs)("div",{className:"postTitle",children:["Post Title: ",e.title]}),Object(P.jsx)("div",{children:Object(P.jsx)("img",{src:e.image,style:{width:"900px",height:"600px"}})}),Object(P.jsx)("div",{className:"postContent",children:e.content}),Object(P.jsx)(f.a,{style:{marginTop:"10px"},onClick:function(){N(e.title)},children:"Delete Post"})]})}))]})]})},X=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(o.g)();console.log(a.username);var l=[];Object(s.useEffect)(Object(L.a)(U.a.mark((function e(){var t,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(j.d)(u,"users",a.username),e.next=3,Object(j.e)(t);case 3:(c=e.sent).exists()?(console.log("Document data:",c.data()),l=c.data(),n(l)):console.log("No such document!");case 5:case"end":return e.stop()}}),e)}))),[]);var r,d=Object(s.useState)([]),b=Object(i.a)(d,2),m=b[0],p=b[1],h=[],O=[];return Object(s.useEffect)(Object(L.a)(U.a.mark((function e(){var t,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(j.h)(Object(j.b)(u,"Posts"),Object(j.j)("uid","==",a.username)),console.log(t),c=Object(j.h)(t),e.next=5,Object(j.f)(c);case 5:r=e.sent,console.log(r),r.forEach((function(e){h=e.data(),O.push(h),console.log(O)})),p(O);case 9:case"end":return e.stop()}}),e)}))),[]),console.log(m),Object(P.jsxs)("div",{className:"main",children:[Object(P.jsxs)("div",{className:"top-bar",children:[Object(P.jsx)("span",{children:Object(P.jsx)("img",{style:{height:"45px"},src:V})}),Object(P.jsx)("span",{children:Object(P.jsx)("img",{style:{height:"45px"},src:R})})]}),Object(P.jsx)("div",{className:"searched-section",children:Object(P.jsx)("div",{id:"searchedProfile",children:Object(P.jsxs)("div",{children:[Object(P.jsx)("img",{className:"searchedProfileImage",src:c.profileimage,style:{width:"200px",height:"200px"}}),Object(P.jsx)("div",{className:"user-name",children:c.username}),Object(P.jsxs)("div",{children:[Object(P.jsx)("img",{style:{paddingLeft:"20px",paddingBottom:"10px"},src:"https://img.icons8.com/fluency/48/000000/age.png"})," ",c.dob]}),Object(P.jsxs)("div",{children:[Object(P.jsx)("img",{style:{paddingLeft:"20px",paddingBottom:"10px"},src:"https://img.icons8.com/fluency/48/000000/phone-disconnected.png"})," ",c.contactno]}),Object(P.jsxs)("div",{children:[Object(P.jsx)("img",{style:{paddingLeft:"20px",paddingBottom:"10px"},src:"https://img.icons8.com/fluency/48/000000/about.png"})," ",c.about]})]})})}),Object(P.jsxs)("div",{className:"post-section",children:[Object(P.jsx)("div",{children:Object(P.jsx)("h2",{className:"sub-heading",children:"My Posts"})}),Object(P.jsx)("div",{children:m.map((function(e,t){return console.log(e),Object(P.jsxs)("div",{style:{marginTop:"10px"},children:[Object(P.jsx)("div",{children:Object(P.jsx)("img",{src:e.image,style:{width:"200px",height:"150px"}})}),Object(P.jsxs)("div",{className:"boxes",children:["Post Title: ",e.title]}),Object(P.jsxs)("div",{className:"boxes",children:["Created By: ",e.createdby]}),Object(P.jsxs)("div",{className:"boxes",children:[" Post content:",e.content]})]})}))})]})]})},Z=c(259),$=function(){var e={};return Object(P.jsxs)("div",{className:"container",children:[Object(P.jsx)("span",{children:Object(P.jsx)("img",{style:{height:"45px"},src:V})}),Object(P.jsx)("span",{children:Object(P.jsx)("img",{style:{height:"45px"},src:R})}),Object(P.jsx)("h1",{className:"heading",children:"Signup Page"}),Object(P.jsxs)(x.a,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:function(t){console.log("Success:",t),Object(r.a)(m,t.email,t.password).then((function(e){var c=e.user;console.log(c),c.displayName=t.username,Object(j.i)(Object(j.d)(u,"users",c.uid),{name:t.username,email:t.email,uid:c.uid,profileimage:""})})).catch((function(e){e.code,e.message})),console.log("User Details",e)},onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",children:[Object(P.jsx)(x.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(P.jsx)(w.a,{})}),Object(P.jsx)(x.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your username!"}],children:Object(P.jsx)(w.a,{})}),Object(P.jsx)(x.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(P.jsx)(w.a.Password,{})}),Object(P.jsxs)(x.a.Item,{wrapperCol:{offset:8,span:16},children:[Object(P.jsx)(f.a,{icon:Object(P.jsx)(Z.a,{}),type:"primary",htmlType:"submit",children:"Signup"})," Already have an Account ",Object(P.jsx)(Y.b,{to:"/",children:"Login Here"})]})]})]})},ee=function(){return Object(P.jsx)("div",{children:Object(P.jsxs)(o.c,{children:[Object(P.jsx)(o.a,{path:"/",element:Object(P.jsx)(K,{})}),Object(P.jsx)(o.a,{path:"/signup",element:Object(P.jsx)($,{})}),Object(P.jsx)(o.a,{path:"/form",element:Object(P.jsx)(I,{})}),Object(P.jsx)(o.a,{path:"/home",element:Object(P.jsx)(W,{})}),Object(P.jsx)(o.a,{path:"/posts",element:Object(P.jsx)(Q,{})}),Object(P.jsx)(o.a,{path:"/:username",element:Object(P.jsx)(X,{})})]})})};var te=function(){return Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(ee,{})})},ce=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,260)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),s(e),n(e),a(e),o(e)}))};a.a.render(Object(P.jsx)(E.a,{store:q,children:Object(P.jsx)(Y.a,{children:Object(P.jsx)(te,{})})}),document.getElementById("root")),ce()},97:function(e,t,c){}},[[244,1,2]]]);
//# sourceMappingURL=main.d21c4be8.chunk.js.map