(this.webpackJsonpamima=this.webpackJsonpamima||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n.n(a),o=n(12),c=n.n(o),s=(n(21),n(22),n(13)),r=n(14),l=n(7),b=n(16),p=n(15),h=n(8),d=(n(23),n(25),{apiKey:"AIzaSyAmvOu9Yn7yh8WHVw8nBmeL39YFDLERs2k",authDomain:"amima-5a62b.firebaseapp.com",projectId:"amima-5a62b",storageBucket:"amima-5a62b.appspot.com",messagingSenderId:"166679900914",appId:"1:166679900914:web:486f49c1b50ad0014a566b",measurementId:"G-XBBLSCJN8L"});h.a.apps.length||h.a.initializeApp(d);var u=n(3),j=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).t1="   Coming Soon   ",a.t2="Contact Us: ",a.state={email:"",formText:""},a.onInputchange=a.onInputchange.bind(Object(l.a)(a)),a.onSubmitForm=a.onSubmitForm.bind(Object(l.a)(a)),a}return Object(r.a)(n,[{key:"onInputchange",value:function(e){e.preventDefault(),this.setState({email:e.target.value})}},{key:"onSubmitForm",value:function(e){e.preventDefault(),h.a.database().ref("notes").push(this.state.email),console.log("122"+this.state.email+"123"),this.setState({email:""})}},{key:"render",value:function(){return Object(u.jsxs)("div",{style:{backgroundColor:"#dcedff"},children:[Object(u.jsx)("header",{style:{fontSize:"80px",paddingTop:"70px",fontWeight:"bold"},children:"Amima"}),Object(u.jsx)("p",{style:{fontSize:"35px"},children:"Life for a uni student"}),Object(u.jsx)("button",{style:{border:"none",width:"200px",height:"35px",borderRadius:50,fontSize:"25px",color:"#a30316",backgroundColor:"#f9cacf"},children:this.t1}),Object(u.jsx)("p",{style:{height:"20px"},children:" "}),Object(u.jsx)("p",{children:"Sign up to recieve the newest updates for Amima"}),Object(u.jsx)("form",{onSubmit:this.onSubmitForm,children:Object(u.jsxs)("div",{class:"form-group",children:[Object(u.jsx)("label",{style:{height:"50px",fontSize:"24px"}}),Object(u.jsx)("input",{style:{borderRadius:50,outline:"none",border:"none",height:"50px",fontSize:"24px"},placeholder:"Enter email",value:this.state.email,onChange:this.onInputchange}),Object(u.jsx)("button",{style:{borderRadius:50,border:"none",height:"56px",fontSize:"24px",backgroundColor:"#80b8fb"},children:"Sign Up"})]})}),Object(u.jsx)("p",{style:{height:"20px"},children:" "}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{style:{fontSize:"24px",float:"left",fontWeight:"bold",paddingLeft:"350px"},children:"Buy as a group"}),Object(u.jsx)("label",{style:{fontSize:"24px",float:"left",paddingLeft:"100px"},children:"Buying as a group can help to you to save money"})]}),Object(u.jsx)("p",{style:{height:"20px"},children:" "}),Object(u.jsxs)("footer",{style:{},children:[Object(u.jsx)("p",{style:{height:"20px"},children:" "}),Object(u.jsx)("a",{href:"https://www.instagram.com/amima661/",style:{fontSize:"16px",color:"black",textDecoration:"none"},children:"Instagram"}),Object(u.jsx)("a",{href:"mailto: info@amimaa.com",style:{fontSize:"16px",color:"black",textDecoration:"none",paddingLeft:"50px"},children:"Email"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]})]})}}]),n}(i.a.Component);var m=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(j,{})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),o(e),c(e)}))};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),x()}},[[30,1,2]]]);
//# sourceMappingURL=main.b620a229.chunk.js.map