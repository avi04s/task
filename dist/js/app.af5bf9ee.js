(function(t){function e(e){for(var r,o,l=e[0],n=e[1],u=e[2],p=0,b=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&b.push(s[o][0]),s[o]=0;for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);c&&c(e);while(b.length)b.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,l=1;l<a.length;l++){var n=a[l];0!==s[n]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},s={app:0},i=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/task/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=n;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"08f4":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("e792"),a("0cdd");var r=a("2b0e"),s=a("5f5b");a("ab8b"),a("2dd8");r["default"].use(s["a"]);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-nav",{staticStyle:{"background-color":"black"},attrs:{align:"right"}},[a("b-nav-item",{attrs:{active:""}},[a("span",{staticStyle:{color:"white"}},[a("i",{staticClass:"far fa-envelope"})])]),a("b-nav-item",[a("span",{staticStyle:{color:"white"}},[a("i",{staticClass:"far fa-bell"})])]),a("b-nav-item",[a("span",{staticStyle:{color:"white"}},[a("i",{staticClass:"fas fa-sign-out-alt"}),t._v(" Logout ")])])],1),a("sidebar-menu",{attrs:{menu:t.menu}}),a("router-view")],1)},o=[],l={name:"App",components:{},data:function(){return{menu:[{header:!0,title:"Main Navigation",hiddenOnCollapse:!0},{href:"/",title:"Dashboard",icon:"fa fa-user"},{href:"/signin",title:"Signin",icon:"fa fa-user"},{href:"/forms",title:"Forms",icon:"fa fa-chart-area",child:[{href:"/form1",title:"Form 1"},{href:"/form2",title:"Form 2"}]}]}}},n=l,u=a("2877"),c=Object(u["a"])(n,i,o,!1,null,null,null),p=c.exports,b=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-container",{staticClass:"bv-example-row",staticStyle:{"margin-top":"20px"}},[a("b-row",[a("b-col"),a("b-col",{attrs:{sm:"12",lg:"4"}},[a("h4",[t._v("Create Account")]),a("h5",[t._v("Get Startted with your free account")])]),a("b-col")],1),a("b-row",[a("b-col"),a("b-col",{attrs:{sm:"12",lg:"4"}},[a("b-button",{attrs:{id:"twitter",block:"",variant:"primary"}},[a("span",[a("i",{staticClass:"fab fa-twitter"}),t._v(" Login Via Twitter")])]),a("b-button",{attrs:{id:"facebook",block:"",variant:"primary"}},[a("span",[a("i",{staticClass:"fab fa-facebook-f"}),t._v(" Login Via facebook")])])],1),a("b-col")],1),a("b-row",{staticClass:"mt-3"},[a("b-col"),a("b-col",{attrs:{sm:"12",align:"center"}},[a("h6",[t._v("-------------------OR----------------")])]),a("b-col")],1),a("b-row",[a("b-col"),a("b-col",[t.error.length?a("span",[a("h3",[t._v("Please correct the following errors")]),t._l(t.error,(function(e){return a("h6",{key:e.id,staticStyle:{color:"red"}},[t._v(" "+t._s(e)+" ")])}))],2):t._e()]),a("b-col")],1),a("b-row",{attrs:{id:"inputRow"}},[a("b-col"),a("b-col",{attrs:{sm:"12",lg:"4"}},[a("form",{on:{submit:t.login}},[a("b-input-group",[a("b-input-group-prepend",[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fa fa-user fa-lg"})])]),a("b-form-input",{staticClass:"LoginInput",attrs:{size:"lg",placeholder:"Username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),a("b-input-group",{staticClass:"mt-2"},[a("b-input-group-prepend",[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fas fa-envelope"})])]),a("b-form-input",{staticClass:"LoginInput",attrs:{size:"lg",placeholder:"Email address"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("b-input-group",{staticClass:"mt-2"},[a("b-input-group-prepend",[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fas fa-phone"})]),a("b-form-select",{attrs:{id:"inline-form-custom-select-pref",size:"lg",options:[{text:"+91",value:null},"+88","+971","+01"],value:null},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1),a("b-form-input",{staticClass:"LoginInput",attrs:{size:"lg",type:"number",placeholder:"Phone Number"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),a("b-input-group",{staticClass:"mt-2"},[a("b-input-group-prepend",[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fas fa-building"})])]),a("b-form-select",{attrs:{id:"inline-form-custom-select-pref",size:"lg",options:[{text:"Select job type",value:null},"Work from office","Work from home"],value:null},model:{value:t.job,callback:function(e){t.job=e},expression:"job"}})],1),a("b-input-group",{staticClass:"mt-2"},[a("b-input-group-prepend",[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fas fa-lock"})])]),a("b-form-input",{staticClass:"LoginInput",attrs:{size:"lg",type:"password",placeholder:"Create Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("b-input-group",{staticClass:"mt-2 mb-2"},[a("b-input-group-prepend",[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fas fa-lock"})])]),a("b-form-input",{staticClass:"LoginInput",attrs:{size:"lg",type:"password",placeholder:"Repeat Password"},model:{value:t.confirm_password,callback:function(e){t.confirm_password=e},expression:"confirm_password"}})],1),a("b-button",{staticClass:"mb-2",attrs:{type:"submit",block:"",variant:"primary"}},[t._v("Create Login")]),a("span",[t._v(" Have an account? "),a("b-button",{attrs:{variant:"link",to:"/signin"}},[t._v("Login")])],1)],1)]),a("b-col")],1)],1)],1)},d=[],f=(a("ac1f"),a("00b4"),{name:"form1",data:function(){return{error:[],username:null,email:null,job:null,code:null,phone:null,password:null,confirm_password:null}},methods:{login:function(t){this.error=[],this.username||this.error.push("Username is required"),this.email?this.validEmail(this.email)||this.error.push("Please enter valid email address"):this.error.push("Email is required"),this.phone||this.error.push("Phone is required"),this.job||this.error.push("Select Job Type"),this.password||this.error.push("passowrd is required"),this.confirm_password||this.error.push("Confirm Passowrd is required"),this.password!=this.confirm_password&&this.error.push("password and confirm password did not matched"),console.warn("Hello"),t.preventDefault()},validEmail:function(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)}}}),h=f,g=(a("d027"),Object(u["a"])(h,m,d,!1,null,"43e1101e",null)),v=g.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-container",{staticStyle:{"margin-top":"100px"}},[a("b-row",{attrs:{id:"outerRow"}},[a("b-col",{attrs:{sm:"3",id:"leftCol"}},[a("i",{staticClass:"fab fa-airbnb"}),a("h5",{staticClass:"text-white"},[t._v("Welcome")]),a("p",{staticClass:"text-white"},[t._v(" You are 30 seconds away from earninig your own "),a("br"),t._v(" money! ")]),a("b-button",{attrs:{id:"loginBtn",variant:"light"}},[t._v("Login")])],1),a("b-col",{attrs:{sm:"9"}},[a("b-card",{attrs:{id:"card",title:"","sub-title":""}},[a("b-tabs",{attrs:{pills:"",align:"right"}},[a("b-tab",{attrs:{title:"Employee",active:""}},[a("b-card-text",{staticClass:"mt-4"},[a("form",{on:{submit:t.signUp}},[a("b-row",[a("b-col",{staticClass:"mb-5",attrs:{sm:"12"}},[a("h5",[t._v("Apply as a Employee")]),t.error.length?a("span",[a("h3",[t._v("Please correct the following errors")]),t._l(t.error,(function(e){return a("h6",{key:e.id,staticStyle:{color:"red"}},[t._v(" "+t._s(e)+" ")])}))],2):t._e()]),a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"First name"},model:{value:t.efirstname,callback:function(e){t.efirstname=e},expression:"efirstname"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"email",placeholder:"Your Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1)],1),a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Last Name"},model:{value:t.elastname,callback:function(e){t.elastname=e},expression:"elastname"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Your Phone"},model:{value:t.ephone,callback:function(e){t.ephone=e},expression:"ephone"}})],1)],1)],1),a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"password",placeholder:"Password"},model:{value:t.epassword,callback:function(e){t.epassword=e},expression:"epassword"}})],1)],1),a("b-col",[a("b-form-select",{attrs:{id:"",size:"",options:[{text:"Please Select Your Security Question",value:null},"A","B"],value:null},model:{value:t.equestion,callback:function(e){t.equestion=e},expression:"equestion"}})],1)],1),a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"password",placeholder:"Confirm Password"},model:{value:t.econfirmpassword,callback:function(e){t.econfirmpassword=e},expression:"econfirmpassword"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Enter Your Answer"},model:{value:t.eanswer,callback:function(e){t.eanswer=e},expression:"eanswer"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{align:"left"}},[a("b-form-radio-group",{staticClass:"mb-3",attrs:{options:t.options,"value-field":"item","text-field":"name","disabled-field":"notEnabled"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1),a("b-row",[a("b-col",{attrs:{align:"right"}},[a("b-button",{attrs:{type:"submit",variant:"info"}},[t._v("Register")])],1)],1)],1)])],1),a("b-tab",{attrs:{title:"Hirer"}},[a("b-card-text",{staticClass:"mt-4"},[a("form",{on:{submit:t.signUp1}},[a("b-row",[a("b-col",{staticClass:"mb-5",attrs:{sm:"12"}},[a("h5",[t._v("Apply as a Hirer")]),t.error1.length?a("span",[a("h3",[t._v("Please correct the following errors")]),t._l(t.error1,(function(e){return a("h6",{key:e.id,staticStyle:{color:"red"}},[t._v(" "+t._s(e)+" ")])}))],2):t._e()]),a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"First name"},model:{value:t.hfirstname,callback:function(e){t.hfirstname=e},expression:"hfirstname"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"email",placeholder:"Your Email"},model:{value:t.hmail,callback:function(e){t.hmail=e},expression:"hmail"}})],1)],1)],1),a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Last Name"},model:{value:t.hlastname,callback:function(e){t.hlastname=e},expression:"hlastname"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Phone Number"},model:{value:t.hphone,callback:function(e){t.hphone=e},expression:"hphone"}})],1)],1)],1),a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Location"},model:{value:t.hlocation,callback:function(e){t.hlocation=e},expression:"hlocation"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Profession"},model:{value:t.hprofession,callback:function(e){t.hprofession=e},expression:"hprofession"}})],1)],1)],1),a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Password"},model:{value:t.hpassword,callback:function(e){t.hpassword=e},expression:"hpassword"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Confirm Password"},model:{value:t.hconfirmpassword,callback:function(e){t.hconfirmpassword=e},expression:"hconfirmpassword"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{align:"left"}},[a("b-form-radio-group",{staticClass:"mb-3",attrs:{options:t.options1,"value-field":"item","text-field":"name","disabled-field":"notEnabled"},model:{value:t.hgender,callback:function(e){t.hgender=e},expression:"hgender"}})],1)],1),a("b-row",[a("b-col",{attrs:{align:"right"}},[a("b-button",{attrs:{type:"submit",variant:"info"}},[t._v("Register")])],1)],1)],1)])],1)],1)],1)],1)],1)],1)],1)},_=[],x={name:"form2",data:function(){return{error:[],error1:[],efirstname:null,email:null,elastname:null,ephone:null,epassword:null,econfirmpassword:null,equestion:null,eanswer:null,selected:null,options:[{item:"Male",name:"Male"},{item:"Female",name:"Female"}],options1:[{item:"Male",name:"Male"},{item:"Female",name:"Female"}],hfirstname:null,hmail:null,hlastname:null,hphone:null,hlocation:null,hprofession:null,hpassword:null,hconfirmpassword:null,hgender:null}},methods:{signUp:function(t){this.error=[],this.efirstname||this.error.push("Firstname is required"),this.email||this.error.push("Email is required"),this.elastname||this.error.push("Last Name is required"),this.ephone||this.error.push("Phone is required"),this.epassword||this.error.push("Password is required"),this.equestion||this.error.push("Question is required"),this.econfirmpassword||this.error.push("Confirm Password is required"),this.selected||this.error.push("Gender is required"),t.preventDefault()},signUp1:function(t){this.error1=[],this.hfirstname||this.error1.push("Firstname is required"),this.hmail||this.error1.push("Email is required"),this.hlastname||this.error1.push("Last Name is required"),this.hphone||this.error1.push("Phone is required"),this.hpassword||this.error1.push("Password is required"),this.hconfirmpassword||this.error1.push("Confirm Password is required"),this.hlocation||this.error1.push("Location is required"),this.hprofession||this.error1.push("Password is required"),this.hgender||this.error1.push("Gender is required"),t.preventDefault()}}},y=x,C=(a("907d"),Object(u["a"])(y,w,_,!1,null,"e15e7fbc",null)),k=C.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",[t._v("User Component")]),a("h5",[t._v("User ID is : "+t._s(t.userId))])])},j=[],S={name:"user",data:function(){return{userId:this.$route.params.id}}},q=S,E=Object(u["a"])(q,P,j,!1,null,null,null),L=E.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{align:"center"}},[a("h1",[t._v("Home Component")]),a("b-container",[a("b-row",[a("b-col",{attrs:{sm:"12",lg:"3"}},[a("b-card",{staticClass:"mb-2",attrs:{title:"","img-src":"","img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text",[a("b-row",[a("b-col",{attrs:{sm:"8",align:"left"}},[a("span",[t._v("107,300")]),a("br"),a("span",{staticStyle:{"font-size":"11px"}},[t._v("User activity this month")])]),a("b-col",{attrs:{sm:"4"}},[a("i",{staticClass:"far fa-users"})])],1),a("b-progress",{staticClass:"mb-3",attrs:{value:t.value,max:t.max}})],1)],1)],1),a("b-col",{attrs:{sm:"12",lg:"3"}},[a("b-card",{staticClass:"mb-2",attrs:{title:"","img-src":"","img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text",[a("b-row",[a("b-col",{attrs:{sm:"8",align:"left"}},[a("span",[t._v("430,300")]),a("br"),a("span",{staticStyle:{"font-size":"11px"}},[t._v("Page views")])]),a("b-col",{attrs:{sm:"4"}},[a("i",{staticClass:"fas fa-eye"})])],1),a("b-progress",{staticClass:"mb-3",attrs:{value:t.value,max:t.max,variant:"success"}})],1)],1)],1),a("b-col",{attrs:{sm:"12",lg:"3"}},[a("b-card",{staticClass:"mb-2",attrs:{title:"","img-src":"","img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text",[a("b-row",[a("b-col",{attrs:{sm:"8",align:"left"}},[a("span",[t._v("$ 653,000")]),a("br"),a("span",{staticStyle:{"font-size":"11px"}},[t._v("Monthly revenue goal")])]),a("b-col",{attrs:{sm:"4"}},[a("i",{staticClass:"fas fa-cart-plus"})])],1),a("b-progress",{staticClass:"mb-3",attrs:{value:t.value,max:t.max,variant:"warning"}})],1)],1)],1),a("b-col",{attrs:{sm:"12",lg:"3"}},[a("b-card",{staticClass:"mb-2",attrs:{title:"","img-src":"","img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text",[a("b-row",[a("b-col",{attrs:{sm:"8",align:"left"}},[a("span",[t._v("47,500")]),a("br"),a("span",{staticStyle:{"font-size":"11px"}},[t._v("New Mail Recieved")])]),a("b-col",{attrs:{sm:"4"}},[a("i",{staticClass:"far fa-envelope"})])],1),a("b-progress",{staticClass:"mb-3",attrs:{value:t.value,max:t.max,variant:"danger"}})],1)],1)],1)],1),a("b-row",[a("b-col",{attrs:{lg:"5"}},[a("h5",[t._v("Browse Stats")]),a("b-list-group",[a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t._v(" Cras justo odio "),a("b-badge",{attrs:{variant:"primary",pill:""}},[t._v("14")])],1),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t._v(" Dapibus ac facilisis in "),a("b-badge",{attrs:{variant:"primary",pill:""}},[t._v("2")])],1),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t._v(" Morbi leo risus "),a("b-badge",{attrs:{variant:"primary",pill:""}},[t._v("1")])],1),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t._v(" Morbi leo risus "),a("b-badge",{attrs:{variant:"primary",pill:""}},[t._v("1")])],1),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t._v(" Morbi leo risus "),a("b-badge",{attrs:{variant:"primary",pill:""}},[t._v("1")])],1),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t._v(" Morbi leo risus "),a("b-badge",{attrs:{variant:"primary",pill:""}},[t._v("1")])],1),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t._v(" Morbi leo risus "),a("b-badge",{attrs:{variant:"primary",pill:""}},[t._v("1")])],1),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t._v(" Morbi leo risus "),a("b-badge",{attrs:{variant:"primary",pill:""}},[t._v("1")])],1)],1)],1),a("b-col",{attrs:{lg:"4"}},[a("h5",[t._v("Browse Stats")]),a("b-list-group",[a("b-list-group-item",[a("span",[t._v(" Google Chorome")])]),a("b-list-group-item",[t._v("Firefox")]),a("b-list-group-item",[t._v("Internet Explorer")]),a("b-list-group-item",[t._v("Porta ac consectetur ac")]),a("b-list-group-item",[t._v("Vestibulum at eros")]),a("b-list-group-item",[t._v("Vestibulum at eros")]),a("b-list-group-item",[t._v("Vestibulum at eros")]),a("b-list-group-item",[t._v("Vestibulum at eros")])],1)],1),a("b-col",{attrs:{lg:"3"}},[a("b-card",{staticClass:"mb-2",attrs:{title:"Card Title","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text")],1),a("b-card",{staticClass:"mb-2",staticStyle:{height:"220px"},attrs:{title:"Card Title","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text")],1)],1)],1),a("b-row",[a("b-col",[a("b-table",{attrs:{striped:"",hover:"",items:t.items}})],1)],1)],1)],1)},I=[],M={name:"Home",data:function(){return{value:33.333333333,max:50,items:[{age:40,first_name:"Dickerson",last_name:"Macdonald"},{age:21,first_name:"Larsen",last_name:"Shaw"},{age:89,first_name:"Geneva",last_name:"Wilson"},{age:38,first_name:"Jami",last_name:"Carney"}]}}},z=M,F=(a("988a"),Object(u["a"])(z,O,I,!1,null,"dbc25058",null)),$=F.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("404 Page Not Found")]),a("h3",[t._v("Go to Home Page")]),a("router-link",{attrs:{to:"/home"}},[t._v("Home")])],1)},N=[],R={name:"PageNotFound"},U=R,D=Object(u["a"])(U,A,N,!1,null,null,null),H=D.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-container",{staticClass:"signin"},[a("b-row",[a("b-col"),a("b-col",{attrs:{sm:"12",lg:"4"}},[a("h4",[t._v("Sign In")])]),a("b-col")],1),a("b-row",[a("b-col"),a("b-col",{attrs:{sm:"12",lg:"4"}},[a("b-button",{attrs:{id:"twitter",block:"",variant:"primary"}},[a("span",[a("i",{staticClass:"fab fa-twitter"}),t._v(" Login Via Twitter")])]),a("b-button",{attrs:{id:"facebook",block:"",variant:"primary"}},[a("span",[a("i",{staticClass:"fab fa-facebook-f"}),t._v(" Login Via facebook")])])],1),a("b-col")],1),a("b-row",{staticClass:"mt-3"},[a("b-col"),a("b-col",{attrs:{sm:"12",align:"center"}},[a("span",[t._v("------------------OR-------------------")])]),a("b-col")],1),a("b-row",[a("b-col"),a("b-col",[t.error.length?a("span",[a("h3",[t._v("Please correct the following errors")]),t._l(t.error,(function(e){return a("h6",{key:e.id,staticStyle:{color:"red"}},[t._v(" "+t._s(e)+" ")])}))],2):t._e()]),a("b-col")],1),a("b-row",{attrs:{id:"inputRow"}},[a("b-col"),a("b-col",{attrs:{sm:"12",lg:"4"}},[a("form",{on:{submit:t.login}},[a("b-input-group",{staticClass:"mt-2"},[a("b-input-group-prepend",[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fas fa-envelope"})])]),a("b-form-input",{staticClass:"LoginInput",attrs:{size:"lg",placeholder:"Email address"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("b-input-group",{staticClass:"mt-2"},[a("b-input-group-prepend",[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fas fa-lock"})])]),a("b-form-input",{staticClass:"LoginInput",attrs:{size:"lg",type:"password",placeholder:"Create Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("b-form-checkbox",{staticClass:"mt-2",attrs:{id:"checkbox-1",name:"checkbox-1",value:"accepted","unchecked-value":"not_accepted"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[t._v(" Remember Me ")]),a("b-button",{staticClass:"mb-2 mt-2",attrs:{type:"submit",block:"",variant:"primary"}},[t._v("Sign In")]),a("span",[t._v(" Create an account "),a("b-button",{attrs:{variant:"link",to:"/form1"}},[t._v("Sign Up")])],1)],1)]),a("b-col")],1)],1)],1)},V=[],G={name:"signin",data:function(){return{error:[],email:null,password:null}},methods:{login:function(t){this.error=[],this.email?this.validEmail(this.email)||this.error.push("Please enter valid email address"):this.error.push("Email is required"),this.password||this.error.push("passowrd is required"),t.preventDefault()},validEmail:function(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)}}},Y=G,B=(a("a2f5"),Object(u["a"])(Y,T,V,!1,null,"5de21942",null)),J=B.exports,W=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Dashboard")])])}],Q={name:"dashboard"},K=Q,X=Object(u["a"])(K,W,Z,!1,null,"31c880f8",null),tt=X.exports,et=a("4776"),at=a.n(et),rt=(a("b15b"),a("ecee")),st=a("c074"),it=a("ad3d"),ot=a("d985"),lt=a("f309");r["default"].use(lt["a"]);var nt=new lt["a"]({}),ut=a("ce5b"),ct=a.n(ut);r["default"].use(ct.a),r["default"].component("vue-sidebar-menu-akahon",ot["a"]),rt["c"].add(st["a"]),r["default"].component("font-awesome-icon",it["a"]),r["default"].use(at.a),r["default"].use(b["a"]);var pt=[{path:"/form1",component:v},{path:"/form2",component:k},{path:"/user/:id",component:L},{path:"/",component:$},{path:"/signin",component:J},{path:"/dashboard",component:tt},{path:"*",component:H}],bt=new b["a"]({routes:pt});r["default"].config.productionTip=!1,new r["default"]({router:bt,vuetify:nt,render:function(t){return t(p)}}).$mount("#app")},"5c45":function(t,e,a){},"6ec8":function(t,e,a){},"907d":function(t,e,a){"use strict";a("08f4")},"988a":function(t,e,a){"use strict";a("6ec8")},a2f5:function(t,e,a){"use strict";a("b83f")},b83f:function(t,e,a){},d027:function(t,e,a){"use strict";a("5c45")}});
//# sourceMappingURL=app.af5bf9ee.js.map