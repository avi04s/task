(function(t){function e(e){for(var s,i,l=e[0],n=e[1],c=e[2],p=0,m=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,l=1;l<a.length;l++){var n=a[l];0!==r[n]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},o=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/task/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=n;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"309a":function(t,e,a){},"43a7":function(t,e,a){},"4bf6":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("e792"),a("0cdd");var s=a("2b0e"),r=a("5f5b");a("ab8b"),a("2dd8");s["default"].use(r["a"]);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-view")],1)},i=[],l={name:"App",components:{}},n=l,c=a("2877"),u=Object(c["a"])(n,o,i,!1,null,null,null),p=u.exports,m=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Toasts",{attrs:{"show-progress":!0,rtl:!1,"max-messages":5,"time-out":3e3,closeable:!0}}),a("b-container",{staticClass:"bv-example-row",staticStyle:{"margin-top":"20px"}},[a("b-row",[a("b-col"),a("b-col",{attrs:{sm:"12",lg:"4"}},[a("h4",[t._v("Create Account")]),a("h5",[t._v("Get Startted with your free account")])]),a("b-col")],1),a("b-row",[a("b-col"),a("b-col",{attrs:{sm:"12",lg:"4"}},[a("b-button",{attrs:{id:"twitter",block:"",variant:"primary"}},[a("span",{staticStyle:{color:"white"}},[a("i",{staticClass:"fab fa-twitter"}),t._v(" Login Via Twitter")])]),a("b-button",{attrs:{id:"facebook",block:"",variant:"primary"}},[a("span",{staticStyle:{color:"white"}},[a("i",{staticClass:"fab fa-facebook-f"}),t._v(" Login Via facebook")])])],1),a("b-col")],1),a("b-row",{staticClass:"mt-3"},[a("b-col"),a("b-col",{attrs:{sm:"12",align:"center"}},[a("h6",[t._v("-------------------OR----------------")])]),a("b-col")],1),a("b-row",[a("b-col"),a("b-col",[t.error.length?a("span",[a("h3",[t._v("Please correct the following errors")]),t._l(t.error,(function(e){return a("h6",{key:e.id,staticStyle:{color:"red"}},[t._v(" "+t._s(e)+" ")])}))],2):t._e()]),a("b-col")],1),a("b-row",{attrs:{id:"inputRow"}},[a("b-col"),a("b-col",{attrs:{sm:"12",lg:"4"}},[a("form",{on:{submit:t.login}},[a("b-input-group",[a("b-input-group-prepend",[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fa fa-user fa-lg"})])]),a("b-form-input",{staticClass:"LoginInput",attrs:{size:"lg",placeholder:"Full Name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("b-input-group",{staticClass:"mt-2"},[a("b-input-group-prepend",[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fas fa-envelope"})])]),a("b-form-input",{staticClass:"LoginInput",attrs:{size:"lg",placeholder:"Email address"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("b-input-group",{staticClass:"mt-2"},[a("b-input-group-prepend",[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fas fa-phone"})]),a("b-form-select",{attrs:{id:"inline-form-custom-select-pref",size:"lg",options:[{text:"+91",value:null},"+88","+971","+01"],value:null},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1),a("b-form-input",{staticClass:"LoginInput",attrs:{size:"lg",type:"number",placeholder:"Phone Number"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),a("b-input-group",{staticClass:"mt-2"},[a("b-input-group-prepend",[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fas fa-building"})])]),a("b-form-select",{attrs:{id:"inline-form-custom-select-pref",size:"lg",options:[{text:"Select job type",value:null},"Work from office","Work from home"],value:null},model:{value:t.form.job,callback:function(e){t.$set(t.form,"job",e)},expression:"form.job"}})],1),a("b-input-group",{staticClass:"mt-2"},[a("b-input-group-prepend",[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fas fa-lock"})])]),a("b-form-input",{staticClass:"LoginInput",attrs:{size:"lg",type:"password",placeholder:"Create Password"},on:{input:t.passwordCheck},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t.check?a("b-input-group-prepend",[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fas fa-times text-danger"})])]):t._e(),t.correct?a("b-input-group-prepend",[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fas fa-check text-success"})])]):t._e()],1),t.check?a("span",{staticClass:"text-danger"},[t._v("Note: Password must be 7 character, One Capital letter, lowercase letter, number and a special character ")]):t._e(),a("b-input-group",{staticClass:"mt-2 mb-2"},[a("b-input-group-prepend",[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fas fa-lock"})])]),a("b-form-input",{staticClass:"LoginInput",attrs:{size:"lg",type:"password",placeholder:"Repeat Password"},model:{value:t.form.confirm_password,callback:function(e){t.$set(t.form,"confirm_password",e)},expression:"form.confirm_password"}})],1),a("b-button",{staticClass:"mb-2",staticStyle:{color:"white"},attrs:{type:"submit",block:"",variant:"primary"}},[t._v("Create Login")]),a("span",[t._v(" Have an account? "),a("b-button",{attrs:{variant:"link",to:"/"}},[t._v("Login")])],1)],1)]),a("b-col")],1)],1)],1)},b=[],d=(a("ac1f"),a("00b4"),a("b0c0"),{name:"form1",data:function(){return{error:[],form:{name:null,email:null,job:null,code:null,phone:null,password:null,confirm_password:null},check:!1,correct:!1}},mounted:function(){localStorage.getItem("email")&&this.$router.push({path:"/dashboard"})},methods:{passwordCheck:function(){/[a-z]/.test(this.form.password)?(this.correct=!0,this.check=!1):(this.correct=!1,this.check=!0),/\d/.test(this.form.password)?(this.correct=!0,this.check=!1):(this.correct=!1,this.check=!0),/[A-Z]/.test(this.form.password)?(this.correct=!0,this.check=!1):(this.correct=!1,this.check=!0);var t=/[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;t.test(this.form.password)?(this.correct=!0,this.check=!1):(this.correct=!1,this.check=!0)},login:function(t){var e=this;this.error=[],this.form.name?this.form.email?this.validEmail(this.form.email)?this.form.phone?this.form.job?this.form.password?this.form.confirm_password?this.form.password!=this.form.confirm_password?this.$toast.error("password and confirm password did not matched"):1==this.check?this.$toast.error("Password must be 7 character, One Capital letter, lowercase letter, number and a special character"):this.axios.post("https://www.alegralabs.com/abhijit/api/register.php",this.form).then((function(t){console.warn("response.success",t.data.success),"1"==t.data.success?(e.$session.start(),e.$session.set("email",t.data.email),e.$session.set("name",t.data.name),localStorage.setItem("email",t.data.email),e.$router.push({path:"/dashboard"})):"0"==t.data.success&&e.$toast.error(t.data.message)})):this.$toast.error("Confirm Passowrd is required"):this.$toast.error("passowrd is required"):this.$toast.error("Select Job Type"):this.$toast.error("Phone is required"):this.$toast.error("Please enter valid email address"):this.$toast.error("Email is required"):this.$toast.error("Username is required"),console.warn("Hello"),t.preventDefault()},validEmail:function(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)}}}),h=d,g=(a("9aca"),Object(c["a"])(h,f,b,!1,null,"f5b87382",null)),v=g.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Toasts",{attrs:{"show-progress":!0,rtl:!1,"max-messages":5,"time-out":3e3,closeable:!0}}),a("b-container",{staticStyle:{"margin-top":"100px"}},[a("b-row",{attrs:{id:"outerRow"}},[a("b-col",{attrs:{sm:"3",id:"leftCol"}},[a("i",{staticClass:"fab fa-airbnb"}),a("h5",{staticClass:"text-white"},[t._v("Welcome")]),a("p",{staticClass:"text-white"},[t._v(" You are 30 seconds away from earninig your own "),a("br"),t._v(" money! ")]),a("b-button",{attrs:{id:"loginBtn",variant:"light"}},[t._v("Login")])],1),a("b-col",{attrs:{sm:"9"}},[a("b-card",{attrs:{id:"card",title:"","sub-title":""}},[a("b-tabs",{attrs:{pills:"",align:"right"}},[a("b-tab",{attrs:{title:"Employee",active:""}},[a("b-card-text",{staticClass:"mt-4"},[a("form",{on:{submit:t.signUp}},[a("b-row",[a("b-col",{staticClass:"mb-5",attrs:{sm:"12"}},[a("h5",[t._v("Apply as a Employee")]),t.error.length?a("span",[a("h3",[t._v("Please correct the following errors")]),t._l(t.error,(function(e){return a("h6",{key:e.id,staticStyle:{color:"red"}},[t._v(" "+t._s(e)+" ")])}))],2):t._e()]),a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"First name"},model:{value:t.efirstname,callback:function(e){t.efirstname=e},expression:"efirstname"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"email",placeholder:"Your Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1)],1),a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Last Name"},model:{value:t.elastname,callback:function(e){t.elastname=e},expression:"elastname"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Your Phone"},model:{value:t.ephone,callback:function(e){t.ephone=e},expression:"ephone"}})],1)],1)],1),a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"password",placeholder:"Password"},model:{value:t.epassword,callback:function(e){t.epassword=e},expression:"epassword"}})],1)],1),a("b-col",[a("b-form-select",{attrs:{id:"",size:"",options:[{text:"Please Select Your Security Question",value:null},"A","B"],value:null},model:{value:t.equestion,callback:function(e){t.equestion=e},expression:"equestion"}})],1)],1),a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"password",placeholder:"Confirm Password"},model:{value:t.econfirmpassword,callback:function(e){t.econfirmpassword=e},expression:"econfirmpassword"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Enter Your Answer"},model:{value:t.eanswer,callback:function(e){t.eanswer=e},expression:"eanswer"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{align:"left"}},[a("b-form-radio-group",{staticClass:"mb-3",attrs:{options:t.options,"value-field":"item","text-field":"name","disabled-field":"notEnabled"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1),a("b-row",[a("b-col",{attrs:{align:"right"}},[a("b-button",{staticStyle:{color:"white"},attrs:{type:"submit",variant:"info"}},[t._v("Register")])],1)],1)],1)])],1),a("b-tab",{attrs:{title:"Hirer"}},[a("b-card-text",{staticClass:"mt-4"},[a("form",{on:{submit:t.signUp1}},[a("b-row",[a("b-col",{staticClass:"mb-5",attrs:{sm:"12"}},[a("h5",[t._v("Apply as a Hirer")]),t.error1.length?a("span",[a("h3",[t._v("Please correct the following errors")]),t._l(t.error1,(function(e){return a("h6",{key:e.id,staticStyle:{color:"red"}},[t._v(" "+t._s(e)+" ")])}))],2):t._e()]),a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"First name"},model:{value:t.hfirstname,callback:function(e){t.hfirstname=e},expression:"hfirstname"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"email",placeholder:"Your Email"},model:{value:t.hmail,callback:function(e){t.hmail=e},expression:"hmail"}})],1)],1)],1),a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Last Name"},model:{value:t.hlastname,callback:function(e){t.hlastname=e},expression:"hlastname"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Phone Number"},model:{value:t.hphone,callback:function(e){t.hphone=e},expression:"hphone"}})],1)],1)],1),a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Location"},model:{value:t.hlocation,callback:function(e){t.hlocation=e},expression:"hlocation"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Profession"},model:{value:t.hprofession,callback:function(e){t.hprofession=e},expression:"hprofession"}})],1)],1)],1),a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Password"},model:{value:t.hpassword,callback:function(e){t.hpassword=e},expression:"hpassword"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{id:"input-group-1",label:"","label-for":"input-1",description:""}},[a("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Confirm Password"},model:{value:t.hconfirmpassword,callback:function(e){t.hconfirmpassword=e},expression:"hconfirmpassword"}})],1)],1)],1),a("b-row",[a("b-col",{attrs:{align:"left"}},[a("b-form-radio-group",{staticClass:"mb-3",attrs:{options:t.options1,"value-field":"item","text-field":"name","disabled-field":"notEnabled"},model:{value:t.hgender,callback:function(e){t.hgender=e},expression:"hgender"}})],1)],1),a("b-row",[a("b-col",{attrs:{align:"right"}},[a("b-button",{staticStyle:{color:"white"},attrs:{type:"submit",variant:"info"}},[t._v("Register")])],1)],1)],1)])],1)],1)],1)],1)],1)],1)],1)},_=[],x={name:"form2",data:function(){return{error:[],error1:[],efirstname:null,email:null,elastname:null,ephone:null,epassword:null,econfirmpassword:null,equestion:null,eanswer:null,selected:null,options:[{item:"Male",name:"Male"},{item:"Female",name:"Female"}],options1:[{item:"Male",name:"Male"},{item:"Female",name:"Female"}],hfirstname:null,hmail:null,hlastname:null,hphone:null,hlocation:null,hprofession:null,hpassword:null,hconfirmpassword:null,hgender:null}},methods:{signUp:function(t){this.error=[],this.efirstname||this.$toast.error("Firstname is required"),this.email||this.$toast.error("Email is required"),this.elastname||this.$toast.error("Last Name is required"),this.ephone||this.$toast.error("Phone is required"),this.epassword||this.$toast.error("Password is required"),this.equestion||this.$toast.error("Question is required"),this.econfirmpassword||this.$toast.error("Confirm Password is required"),this.selected||this.$toast.error("Gender is required"),t.preventDefault()},signUp1:function(t){this.error1=[],this.hfirstname||this.$toast.error("Firstname is required"),this.hmail||this.$toast.error("Email is required"),this.hlastname||this.$toast.error("Last Name is required"),this.hphone||this.$toast.error("Phone is required"),this.hpassword||this.$toast.error("Password is required"),this.hconfirmpassword||this.$toast.error("Confirm Password is required"),this.hlocation||this.$toast.error("Location is required"),this.hprofession||this.$toast.error("Password is required"),this.hgender||this.$toast.error("Gender is required"),t.preventDefault()}}},C=x,y=(a("8c01"),Object(c["a"])(C,w,_,!1,null,"407be1f5",null)),k=y.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",[t._v("User Component")]),a("h5",[t._v("User ID is : "+t._s(t.userId))])])},S=[],P={name:"user",data:function(){return{userId:this.$route.params.id}}},j=P,E=Object(c["a"])(j,$,S,!1,null,null,null),q=E.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{align:"center"}},[a("navbar"),a("h1",[t._v("Home Component")]),a("b-container",[a("b-row",[a("b-col",{attrs:{sm:"12",lg:"3"}},[a("b-card",{staticClass:"mb-2",attrs:{title:"","img-src":"","img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text",[a("b-row",[a("b-col",{attrs:{sm:"8",align:"left"}},[a("span",[t._v("107,300")]),a("br"),a("span",{staticStyle:{"font-size":"11px"}},[t._v("User activity this month")])]),a("b-col",{attrs:{sm:"4"}},[a("i",{staticClass:"far fa-users"})])],1),a("b-progress",{staticClass:"mb-3",attrs:{value:t.value,max:t.max}})],1)],1)],1),a("b-col",{attrs:{sm:"12",lg:"3"}},[a("b-card",{staticClass:"mb-2",attrs:{title:"","img-src":"","img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text",[a("b-row",[a("b-col",{attrs:{sm:"8",align:"left"}},[a("span",[t._v("430,300")]),a("br"),a("span",{staticStyle:{"font-size":"11px"}},[t._v("Page views")])]),a("b-col",{attrs:{sm:"4"}},[a("i",{staticClass:"fas fa-eye"})])],1),a("b-progress",{staticClass:"mb-3",attrs:{value:t.value,max:t.max,variant:"success"}})],1)],1)],1),a("b-col",{attrs:{sm:"12",lg:"3"}},[a("b-card",{staticClass:"mb-2",attrs:{title:"","img-src":"","img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text",[a("b-row",[a("b-col",{attrs:{sm:"8",align:"left"}},[a("span",[t._v("$ 653,000")]),a("br"),a("span",{staticStyle:{"font-size":"11px"}},[t._v("Monthly revenue goal")])]),a("b-col",{attrs:{sm:"4"}},[a("i",{staticClass:"fas fa-cart-plus"})])],1),a("b-progress",{staticClass:"mb-3",attrs:{value:t.value,max:t.max,variant:"warning"}})],1)],1)],1),a("b-col",{attrs:{sm:"12",lg:"3"}},[a("b-card",{staticClass:"mb-2",attrs:{title:"","img-src":"","img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text",[a("b-row",[a("b-col",{attrs:{sm:"8",align:"left"}},[a("span",[t._v("47,500")]),a("br"),a("span",{staticStyle:{"font-size":"11px"}},[t._v("New Mail Recieved")])]),a("b-col",{attrs:{sm:"4"}},[a("i",{staticClass:"far fa-envelope"})])],1),a("b-progress",{staticClass:"mb-3",attrs:{value:t.value,max:t.max,variant:"danger"}})],1)],1)],1)],1),a("b-row",[a("b-col",{attrs:{lg:"5"}},[a("h5",[t._v("Browse Stats")]),a("b-list-group",[a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t._v(" Cras justo odio "),a("b-badge",{attrs:{variant:"primary",pill:""}},[t._v("14")])],1),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t._v(" Dapibus ac facilisis in "),a("b-badge",{attrs:{variant:"primary",pill:""}},[t._v("2")])],1),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t._v(" Morbi leo risus "),a("b-badge",{attrs:{variant:"primary",pill:""}},[t._v("1")])],1),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t._v(" Morbi leo risus "),a("b-badge",{attrs:{variant:"primary",pill:""}},[t._v("1")])],1),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t._v(" Morbi leo risus "),a("b-badge",{attrs:{variant:"primary",pill:""}},[t._v("1")])],1),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t._v(" Morbi leo risus "),a("b-badge",{attrs:{variant:"primary",pill:""}},[t._v("1")])],1),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t._v(" Morbi leo risus "),a("b-badge",{attrs:{variant:"primary",pill:""}},[t._v("1")])],1),a("b-list-group-item",{staticClass:"d-flex justify-content-between align-items-center"},[t._v(" Morbi leo risus "),a("b-badge",{attrs:{variant:"primary",pill:""}},[t._v("1")])],1)],1)],1),a("b-col",{attrs:{lg:"4"}},[a("h5",[t._v("Browse Stats")]),a("b-list-group",[a("b-list-group-item",[a("span",[t._v(" Google Chorome")])]),a("b-list-group-item",[t._v("Firefox")]),a("b-list-group-item",[t._v("Internet Explorer")]),a("b-list-group-item",[t._v("Porta ac consectetur ac")]),a("b-list-group-item",[t._v("Vestibulum at eros")]),a("b-list-group-item",[t._v("Vestibulum at eros")]),a("b-list-group-item",[t._v("Vestibulum at eros")]),a("b-list-group-item",[t._v("Vestibulum at eros")])],1)],1),a("b-col",{attrs:{lg:"3"}},[a("b-card",{staticClass:"mb-2",attrs:{title:"Card Title","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text")],1),a("b-card",{staticClass:"mb-2",staticStyle:{height:"220px"},attrs:{title:"Card Title","img-src":"https://picsum.photos/600/300/?image=25","img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text")],1)],1)],1),a("b-row",[a("b-col",[a("b-table",{attrs:{striped:"",hover:"",items:t.items}})],1)],1)],1)],1)},z=[],L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-nav",{staticStyle:{"background-color":"#4e5e6a"},attrs:{align:"right"}},[a("b-nav-item",{attrs:{active:""}},[a("span",{staticStyle:{color:"white"}},[a("i",{staticClass:"far fa-envelope"})])]),a("b-nav-item",[a("span",{staticStyle:{color:"white"}},[a("i",{staticClass:"far fa-bell"})])]),a("b-nav-item",[a("span",{staticStyle:{color:"white"}},[t._v(" Hello, "+t._s(this.$session.get("name"))+" ")])]),a("b-nav-item",{on:{click:t.logout}},[a("span",{staticStyle:{color:"white"}},[a("i",{staticClass:"fas fa-sign-out-alt"}),t._v(" Logout ")])])],1),a("sidebar-menu",{staticStyle:{"background-color":"#4e5e6a"},attrs:{menu:t.menu}},[a("div",{attrs:{slot:"header"},slot:"header"}),a("div",{attrs:{slot:"footer"},slot:"footer"}),a("span",{attrs:{slot:"toggle-icon"},slot:"toggle-icon"},[a("i",{staticClass:"fas fa-toggle-on"})]),a("span",{attrs:{slot:"dropdown-icon"},slot:"dropdown-icon"},[a("i",{staticClass:"fas fa-arrow-down"})])])],1)},O=[],M={name:"navbar",data:function(){return{menu:[{header:!0,title:"Main Navigation",hiddenOnCollapse:!0},{href:"/dashboard",title:"Dashboard",icon:"fa fa-user"},{href:"/profile",title:"Profile",icon:"fa fa-user"}]}},methods:{logout:function(){this.$session.destroy(),this.$router.push({path:"/"}),localStorage.removeItem("email")}}},F=M,U=Object(c["a"])(F,L,O,!1,null,null,null),A=U.exports,D={name:"Home",components:{navbar:A},data:function(){return{value:33.333333333,max:50,items:[{age:40,first_name:"Dickerson",last_name:"Macdonald"},{age:21,first_name:"Larsen",last_name:"Shaw"},{age:89,first_name:"Geneva",last_name:"Wilson"},{age:38,first_name:"Jami",last_name:"Carney"}]}}},T=D,N=(a("c5ac"),Object(c["a"])(T,I,z,!1,null,"435f1470",null)),R=N.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("404 Page Not Found")]),a("h3",[t._v("Go to Home Page")]),a("router-link",{attrs:{to:"/home"}},[t._v("Home")])],1)},V=[],B={name:"PageNotFound"},Y=B,Z=Object(c["a"])(Y,H,V,!1,null,null,null),W=Z.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Toasts",{attrs:{"show-progress":!0,rtl:!1,"max-messages":5,"time-out":3e3,closeable:!0}}),a("b-container",{staticClass:"signin"},[a("b-row",[a("b-col"),a("b-col",{attrs:{sm:"12",lg:"4"}},[a("h4",[t._v("Sign In")])]),a("b-col")],1),a("b-row",[a("b-col"),a("b-col",{attrs:{sm:"12",lg:"4"}},[a("b-button",{attrs:{id:"twitter",block:"",variant:"primary"}},[a("span",{staticStyle:{color:"white"}},[a("i",{staticClass:"fab fa-twitter"}),t._v(" Login Via Twitter")])]),a("b-button",{attrs:{id:"facebook",block:"",variant:"primary"}},[a("span",{staticStyle:{color:"white"}},[a("i",{staticClass:"fab fa-facebook-f"}),t._v(" Login Via facebook")])])],1),a("b-col")],1),a("b-row",{staticClass:"mt-3"},[a("b-col"),a("b-col",{attrs:{sm:"12",align:"center"}},[a("span",[t._v("------------------OR-------------------")])]),a("b-col")],1),a("b-row",[a("b-col"),a("b-col",[t.error.length?a("span",[a("h3",[t._v("Please correct the following errors")]),t._l(t.error,(function(e){return a("h6",{key:e.id,staticStyle:{color:"red"}},[t._v(" "+t._s(e)+" ")])}))],2):t._e()]),a("b-col")],1),a("b-row",{attrs:{id:"inputRow"}},[a("b-col"),a("b-col",{attrs:{sm:"12",lg:"4"}},[a("form",{on:{submit:t.login}},[a("b-input-group",{staticClass:"mt-2"},[a("b-input-group-prepend",[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fas fa-envelope"})])]),a("b-form-input",{staticClass:"LoginInput",attrs:{size:"lg",placeholder:"Email address"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("b-input-group",{staticClass:"mt-2"},[a("b-input-group-prepend",[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fas fa-lock"})])]),a("b-form-input",{staticClass:"LoginInput",attrs:{size:"lg",type:"password",placeholder:"Create Password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("b-form-checkbox",{staticClass:"mt-2",attrs:{id:"checkbox-1",name:"checkbox-1",value:"accepted","unchecked-value":"not_accepted"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[t._v(" Remember Me ")]),a("b-button",{staticClass:"mb-2 mt-2",staticStyle:{color:"white"},attrs:{type:"submit",block:"",variant:"primary"}},[t._v("Sign In")]),a("span",[t._v(" Create an account "),a("b-button",{attrs:{variant:"link",to:"/form1"}},[t._v("Sign Up")])],1)],1)]),a("b-col")],1)],1)],1)},J=[],K={name:"signin",data:function(){return{error:[],form:{email:null,password:null}}},mounted:function(){localStorage.getItem("email")&&this.$router.push({path:"/dashboard"})},methods:{login:function(t){var e=this;this.error=[],this.form.email?this.validEmail(this.form.email)?this.form.password?this.axios.post("https://www.alegralabs.com/abhijit/api/login.php",this.form).then((function(t){"1"==t.data.success?(e.$session.start(),e.$session.set("email",t.data.email),e.$session.set("name",t.data.name),localStorage.setItem("email",t.data.email),e.$session.set("file",t.data.file),e.$router.push({path:"/dashboard"})):"0"==t.data.success&&e.$toast.error(t.data.message)})):this.$toast.error("Password is required"):this.$toast.error("Please Enter Valid Email Address"):this.$toast.error("Email is required"),t.preventDefault()},validEmail:function(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)}}},Q=K,X=(a("a523"),Object(c["a"])(Q,G,J,!1,null,"1118b1d0",null)),tt=X.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("navbar"),a("b-container",[a("b-row",[a("b-col",{staticStyle:{"margin-top":"50px"},attrs:{cols:"12",align:"center"}},[a("b-card",{staticClass:"mb-2",attrs:{"bg-variant":"dark","text-variant":"white",title:"Login Details","img-src":"","img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text",[this.$session.get("file")?a("div",{attrs:{align:"center"}},[a("hr"),a("h6",[t._v("Uploaded Photo: ")]),a("img",{staticStyle:{width:"20%"},attrs:{src:this.$session.get("file"),alt:"profile pic"}})]):t._e(),t._v(" Hello, "+t._s(this.$session.get("name"))+" "),a("br"),t._v(" Your Register Email : "+t._s(this.$session.get("email"))+" ")])],1)],1)],1)],1)],1)},at=[],st={name:"dashboard",components:{navbar:A}},rt=st,ot=Object(c["a"])(rt,et,at,!1,null,"db20c878",null),it=ot.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Toasts",{attrs:{"show-progress":!0,rtl:!1,"max-messages":5,"time-out":3e3,closeable:!0}}),a("navbar"),a("b-container",{staticClass:"bv-example-row",staticStyle:{"margin-top":"120px"}},[a("b-row",[a("b-col"),a("b-col",{attrs:{sm:"12",lg:"4",align:"center"}},[a("h4"),a("h4",[t._v("Update Your Profile")])]),a("b-col")],1),a("b-row",[a("b-col"),a("b-col")],1),a("b-row",[a("b-col"),a("b-col",[t.error.length?a("span",[a("h3",[t._v("Please correct the following errors")]),t._l(t.error,(function(e){return a("h6",{key:e.id,staticStyle:{color:"red"}},[t._v(" "+t._s(e)+" ")])}))],2):t._e()]),a("b-col")],1),a("b-row",{attrs:{id:"inputRow"}},[a("b-col"),a("b-col",{attrs:{sm:"12",lg:"4"}},[a("form",{attrs:{enctype:"multipart/form-data"},on:{submit:t.login}},[a("b-input-group",[a("b-form-input",{staticClass:"LoginInput",attrs:{size:"lg",placeholder:"Id",readonly:""},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}})],1),a("b-input-group",[a("b-input-group-prepend",[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fa fa-user fa-lg"})])]),a("b-form-input",{staticClass:"LoginInput",attrs:{size:"lg",placeholder:"Full Name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("b-input-group",{staticClass:"mt-2"},[a("b-input-group-prepend",[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fas fa-envelope"})])]),a("b-form-input",{staticClass:"LoginInput",attrs:{size:"lg",placeholder:"Email address",readonly:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("b-input-group",{staticClass:"mt-2"},[a("b-input-group-prepend",[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fas fa-phone"})]),a("b-form-select",{attrs:{id:"inline-form-custom-select-pref",size:"lg",options:[{text:"+91",value:null},"+88","+971","+01"],value:null},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1),a("b-form-input",{staticClass:"LoginInput",attrs:{size:"lg",type:"number",placeholder:"Phone Number"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),a("b-input-group",{staticClass:"mt-2"},[a("b-input-group-prepend",[a("span",{staticClass:"input-group-text"},[a("i",{staticClass:"fas fa-building"})])]),a("b-form-select",{attrs:{id:"inline-form-custom-select-pref",size:"lg",options:[{text:"Select job type",value:null},"Work from office","Work from home"],value:null},model:{value:t.form.job,callback:function(e){t.$set(t.form,"job",e)},expression:"form.job"}})],1),a("b-input-group",{staticClass:"mt-2"},[a("b-form-file",{ref:"form.file",attrs:{state:Boolean(t.form.file),placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},on:{change:function(e){return t.onChangeFileUpload()}},model:{value:t.form.file,callback:function(e){t.$set(t.form,"file",e)},expression:"form.file"}})],1),a("div",{staticClass:"mt-3"},[t._v(" Selected file: "+t._s(t.form.file?t.form.file.name:"")+" ")]),t.form.file?a("div",{attrs:{align:"center"}},[a("hr"),a("h6",[t._v("Uploaded Photo:")]),a("img",{staticStyle:{width:"20%"},attrs:{src:this.form.file,alt:"profile pic"}})]):t._e(),a("b-button",{staticClass:"mb-2",staticStyle:{color:"white"},attrs:{type:"submit",block:"",variant:"primary"}},[t._v("Update Profile")])],1)]),a("b-col")],1)],1)],1)},nt=[],ct=a("bc3a"),ut=a.n(ct),pt=a("130e");s["default"].use(pt["a"],ut.a);var mt={name:"profile",components:{navbar:A},data:function(){return{error:[],form:{name:null,email:null,job:null,code:null,phone:null,password:null,file:null,id:null},data:null,check:!1,correct:!1}},methods:{passwordCheck:function(){/[a-z]/.test(this.form.password)?(this.correct=!0,this.check=!1):(this.correct=!1,this.check=!0),/\d/.test(this.form.password)?(this.correct=!0,this.check=!1):(this.correct=!1,this.check=!0),/[A-Z]/.test(this.form.password)?(this.correct=!0,this.check=!1):(this.correct=!1,this.check=!0);var t=/[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;t.test(this.form.password)?(this.correct=!0,this.check=!1):(this.correct=!1,this.check=!0)},login:function(t){var e=this;if(this.error=[],this.form.name)if(this.form.email)if(this.validEmail(this.form.email))if(this.form.phone)if(this.form.job){var a=new FormData;a.append("id",this.form.id),a.append("file",this.form.file),a.append("name",this.form.name),a.append("email",this.form.email),this.axios.post("https://www.alegralabs.com/abhijit/api/update.php",a,{headers:{"Content-Type":"multipart/form-data;boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbTL"}}).then((function(t){console.warn("response check",t),"1"==t.data.success?(e.form.name=t.data.name,e.form.email=t.data.email,e.form.phone=t.data.id,e.form.file=t.data.file,e.$session.set("file",t.data.file),e.$toast.error(t.data.message)):"0"==t.data.success&&e.$toast.error(t.data.message)}))}else this.$toast.error("Select Job Type");else this.$toast.error("Phone is required");else this.$toast.error("Please enter valid email address");else this.$toast.error("Email is required");else this.$toast.error("Username is required");console.warn("Hello"),t.preventDefault()},validEmail:function(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)},getData:function(){var t=this,e=this.$session.get("email"),a="https://www.alegralabs.com/abhijit/api/user.php?data="+e;s["default"].axios.get(a).then((function(e){console.log(e.data.id),t.form.id=e.data.id,t.form.name=e.data.name,t.form.email=e.data.email,t.form.phone=e.data.id,t.form.file=e.data.file}))},onChangeFileUpload:function(t){this.form.file=t.target.files[0]}},created:function(){this.getData()}},ft=mt,bt=(a("bf53"),Object(c["a"])(ft,lt,nt,!1,null,"80ca7872",null)),dt=bt.exports,ht=a("4776"),gt=a.n(ht),vt=(a("b15b"),a("ecee")),wt=a("c074"),_t=a("ad3d"),xt=a("d985"),Ct=a("ef76"),yt=a("f309");s["default"].use(yt["a"]);var kt=new yt["a"]({}),$t=a("ce5b"),St=a.n($t),Pt=a("1dce"),jt=a.n(Pt),Et=a("0628"),qt=a.n(Et);function It(t,e,a){var s=!1;s=!!localStorage.getItem("email"),s?a():a("/")}s["default"].use(Ct["a"]),s["default"].use(jt.a),s["default"].use(St.a),s["default"].component("vue-sidebar-menu-akahon",xt["a"]),vt["c"].add(wt["a"]),s["default"].component("font-awesome-icon",_t["a"]),s["default"].use(gt.a),s["default"].use(m["a"]),s["default"].use(qt.a),s["default"].use(pt["a"],ut.a);var zt=[{path:"/form2",component:k},{path:"/user/:id",component:q},{path:"/dashboard",beforeEnter:It,component:it},{path:"/profile",beforeEnter:It,component:dt},{path:"/",component:tt},{path:"/home",component:R},{path:"/form1",component:v},{path:"*",component:W}],Lt=new m["a"]({routes:zt});s["default"].config.productionTip=!1,new s["default"]({router:Lt,vuetify:kt,render:function(t){return t(p)}}).$mount("#app")},"8c01":function(t,e,a){"use strict";a("caf0")},"9aca":function(t,e,a){"use strict";a("43a7")},a523:function(t,e,a){"use strict";a("4bf6")},bf53:function(t,e,a){"use strict";a("309a")},c5ac:function(t,e,a){"use strict";a("d8cf")},caf0:function(t,e,a){},d8cf:function(t,e,a){}});
//# sourceMappingURL=app.13250a60.js.map