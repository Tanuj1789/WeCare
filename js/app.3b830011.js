(function(e){function t(t){for(var n,o,r=t[0],l=t[1],u=t[2],m=0,g=[];m<r.length;m++)o=r[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&g.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(g.length)g.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],n=!0,r=1;r<s.length;r++){var l=s[r];0!==a[l]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},a={app:0},i=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/WeCare/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var c=l;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0058":function(e,t,s){e.exports=s.p+"img/2nd image.f2e315d3.jpeg"},"034f":function(e,t,s){"use strict";s("85ec")},"33a0":function(e,t,s){"use strict";s("e6aa")},4174:function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"flex-column"},[s("div",{staticClass:"flex-row flex-wrap"},[s("div",[s("nav",[s("ul",[s("li",{on:{click:e.setfalse}},[e._v(" Home "),s("span"),s("span"),s("span"),s("span")])])])]),s("div",[s("nav",[s("ul",[s("li",{on:{click:e.fun}},[e._v(" "+e._s(e.username)+"'s Space "),s("Login",{on:{uname:e.uname}}),s("span"),s("span"),s("span"),s("span")],1)])])]),"Guest"!=this.username?s("div",[s("nav",[s("ul",[s("li",{on:{click:e.fun3}},[e._v(" Survey "),s("span"),s("span"),s("span"),s("span")])])])]):e._e(),s("div",[s("nav",[s("ul",[s("li",{on:{click:e.fun2}},[s("p",[e._v(" SOS ")]),s("span"),s("span"),s("span"),s("span")])])])]),s("div",[s("nav",[s("ul",[s("li",{on:{click:e.fun4}},[s("p",[e._v(" Start Chat ")]),s("span"),s("span"),s("span"),s("span")])])])])]),s("div",[1===e.show?s("div",[s("Login",{on:{uname:e.uname}})],1):2===e.show?s("div",[s("Sospage")],1):3===e.show?s("div",[s("Survey")],1):4===e.show?s("div",[s("Chatbox")],1):s("div",[s("Home",{attrs:{name:e.username,email:e.email,doctor:e.doctor,sDate:e.sDate}})],1)])])])},i=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[1==e.show?s("div",{staticClass:"flex-column"},[s("div",[e._m(0),s("br"),s("form",{staticClass:"flex-column",on:{submit:function(t){return t.preventDefault(),e.addEmail()}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"enter nickname"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"enter email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._m(1)]),s("button",{staticStyle:{"margin-left":"50%","margin-top":"2%"},on:{click:e.toggle}},[e._v(" Login Instead ")])])]):s("div",{staticClass:"flex-column"},[s("div",[e._m(2),s("br"),s("form",{staticClass:"flex-column",on:{submit:function(t){return t.preventDefault(),e.checkEmail()}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"enter email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"enter password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),s("div",{staticStyle:{"margin-top":"10%","margin-left":"50%"}},[s("button",[e._v(" Submit ")]),s("button",{staticStyle:{"margin-top":"2%"},on:{click:e.toggle}},[e._v(" Signup Instead ")])])])])])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",[s("ul",[s("li",[e._v(" Sign-in "),s("span"),s("span"),s("span"),s("span")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{"margin-top":"10%","margin-left":"50%"}},[s("button",{attrs:{type:"submit"}},[e._v(" Submit ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",[s("ul",[s("li",[e._v(" Log-in "),s("span"),s("span"),s("span"),s("span")])])])}],l=s("1da1"),u=(s("96cf"),s("b0c0"),s("159b"),s("260b"));s("66ce"),s("ea7b");s("260b");var c=u["default"].initializeApp({apiKey:"AIzaSyCnlmOddgf9cEI4mTsC_HSwC5QCP7QD0HY",authDomain:"mentalhealth-18ab7.firebaseapp.com",projectId:"mentalhealth-18ab7",storageBucket:"mentalhealth-18ab7.appspot.com",messagingSenderId:"833080300484",databaseURL:"https://mentalhealth-18ab7-default-rtdb.firebaseio.com",appId:"1:833080300484:web:947bcf970db75d6bc3ca91"}),m=c.database(),g=m.ref("users"),h=u["default"].auth(),d={name:"Login",components:{},data:function(){return{email:"",name:"",msg:"",password:"",drname:"",date:"",listofnames:[],show:!0}},props:{},methods:{toggle:function(){this.show=!this.show,this.email="",this.name="",this.password="",this.drname="",this.date=""},addEmail:function(){var e=this;h.createUserWithEmailAndPassword(this.email,"12345678").then((function(t){e.$loggedin=!0,console.log(e.$loggedin),e.$emit("uname",{uName:e.name,email:e.email,dName:e.drname,sDate:e.date}),console.log(t),g.push({name:e.name,email:e.email,drname:e.drname,date:e.date})}),(function(t){e.msg=t,alert(e.msg)}))},checkEmail:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("beforecheckuserexecuted yahan par "),t.next=3,e.checkUser();case 3:console.log("checkuserexecuted"),console.log(e.name,e.drname,e.date),e.$emit("uname",{uName:e.name,email:e.email,dName:e.drname,sDate:e.date});case 6:case"end":return t.stop()}}),t)})))()},checkUser:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var s,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s="Guest",n="",a="",t.next=5,h.signInWithEmailAndPassword(e.email,e.password).then((function(t){console.log(t);var i=e.email;g.on("value",(function(e){e.forEach((function(e){var t=e.val();console.log(t.email);var o=t.email;i==o&&(console.log("inside if"),console.log(t.name),s=t.name,n=t.drname,a=t.date)}))}))}),(function(t){e.msg=t,console.log(e.msg),alert(e.msg)}));case 5:console.log("from checkuser"),e.name=s,e.drname=n,e.date=a,console.log(e.name),console.log(s);case 11:case"end":return t.stop()}}),t)})))()}}},p=d,v=(s("95ad"),s("2877")),f=Object(v["a"])(p,o,r,!1,null,"1aafe6fe",null),y=f.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex-column"},[n("div",{staticClass:"flex-column"},[n("p",[e._v(" Selfcare Guide ")]),n("div",{staticClass:"flex-row space-between",staticStyle:{"flex-wrap":"wrap"}},[n("div",{staticClass:"flex-column"},[n("div",[n("a",{attrs:{href:e.urlmeditation,target:"_blank"}},[n("img",{staticClass:"circle border-r",attrs:{src:s("0058")},on:{click:e.fun}})])]),e._m(0)]),n("div",{staticClass:"flex-column"},[n("div",[n("a",{attrs:{href:e.urlremote,target:"_blank"}},[n("img",{staticClass:"circle border-r",attrs:{src:s("c272")}})])]),e._m(1)]),n("div",{staticClass:"flex-column"},[n("div",[n("a",{attrs:{href:e.urlstress,target:"_blank"}},[n("img",{staticClass:"circle border-r",attrs:{src:s("a7fb")}})])]),e._m(2)]),n("div",{staticClass:"flex-column"},[n("div",[n("a",{attrs:{href:e.urlsleep,target:"_blank"}},[n("img",{staticClass:"circle border-r",attrs:{src:s("725f")}})])]),e._m(3)])])]),n("br"),n("hr",{staticStyle:{width:"50%",height:"2px","background-color":"gray"}}),n("div",{staticClass:"flex-column"},[n("div",{staticClass:"flex-row"},[n("div",{staticClass:"flex-row",staticStyle:{"min-width":"100%"}},[n("div",{staticClass:"bigimage"}),"Not Assigned"==this.doctor?n("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","flex-grow":"1"}},[e._m(4)]):n("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","flex-grow":"1"}},[n("p",[e._v(e._s(e.dr))]),n("br"),n("p",[e._v(e._s(e.sd)+" ")]),n("nav",[n("ul",[n("li",{on:{click:e.updateshow}},[e._v(" Book Session "),n("span"),n("span"),n("span"),n("span")])])]),1==e.show?n("div",[n("Booksession",{attrs:{email:e.email,name:e.name},on:{udoctor:e.udoctor}})],1):e._e()])])]),1==this.show?n("div"):e._e()])])},w=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("p",[e._v(" Meditation")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("p",[e._v(" Remote Wellness ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("p",[e._v(" Stress ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("p",[e._v(" Sleep ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",[s("ul",[s("li",{staticStyle:{width:"80%"}},[e._v(" Click on Guest's Space "),s("span"),s("span"),s("span"),s("span")])])])}],_=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("br"),s("form",{staticClass:"flex-column",on:{submit:e.saveTherapist}},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.drname,expression:"drname"}],on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.drname=t.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"Dr. Harish Pant"}},[e._v("Dr. Harish Pant (Therapist)")]),s("option",{attrs:{value:"Dr. Priya Sehgal"}},[e._v("Dr. Priya Sehgal (Psychologist)")]),s("option",{attrs:{value:"Dr. Venketesh Kohli"}},[e._v("Dr. Venketesh Kohli (Therapist)")]),s("option",{attrs:{value:"Dr. Pooja Sharma",selected:""}},[e._v("Dr. Pooja Sharma (Life Coach)")])]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"}],attrs:{type:"date",id:"start",name:"trip-start",value:"yyyy-mm-dd",min:"2000-01-01",max:"2022-12-31"},domProps:{value:e.date},on:{input:function(t){t.target.composing||(e.date=t.target.value)}}}),e._m(0)])])},x=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{"margin-top":"10%","margin-left":"50%"}},[s("button",[e._v(" Submit ")])])}],S={name:"Booksession",data:function(){return{drname:"",date:""}},props:["email","name"],methods:{saveTherapist:function(e){e.preventDefault(),console.log("adding new user"),g.push({name:this.name,email:this.email,drname:this.drname,date:this.date}),this.$emit("udoctor",{doctor:this.drname,sDate:this.date})}}},k=S,C=(s("761c"),Object(v["a"])(k,_,x,!1,null,"6a281e9e",null)),N=C.exports,O={name:"Home",props:["name","email","doctor","sDate"],components:{Booksession:N},methods:{fun:function(){console.log("printing doctor"),console.log(this.doctor)},updateshow:function(){this.show=1,console.log("From Home",this.email)},udoctor:function(e){var t=e.doctor,s=e.sDate;console.log("insidechangename"),this.dr=t,this.sd=s,this.show=!this.show}},data:function(){return{show:!1,dr:this.doctor,sd:this.sDate,urlmeditation:"https://markmanson.net/meditation/",urlremote:"https://www.flexjobs.com/employer-blog/how-companies-can-use-meditation/",urlstress:"https://www.berries.com/blog/stress-relief-activities",urlsleep:"https://www.psycom.net/sleep-deprivation-test/"}}},I=O,$=(s("e6b3"),Object(v["a"])(I,b,w,!1,null,"73c998fe",null)),E=$.exports,j=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex-column"},[s("div",{staticClass:"bigimage"}),e._m(0),s("hr",{staticStyle:{width:"50%",height:"2px","background-color":"gray"}}),e._m(1),s("div",[s("nav",[s("ul",[s("li",{staticStyle:{width:"80%"}},[s("a",{attrs:{href:e.urlsuicide,target:"_blank"}},[e._v("Suicide Prevention")]),s("span"),s("span"),s("span"),s("span")])])])]),s("div",[s("nav",[s("ul",[s("li",[s("a",{attrs:{href:e.urlwomen,target:"_blank"}},[e._v("Women Helpline ")]),s("span"),s("span"),s("span"),s("span")])])])])])},q=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","flex-grow":"1"}},[s("p",[e._v(" Are you in crisis?")]),s("p",[s("b",[e._v(" You are not alone. Help is just a call away. ")])]),s("nav",[s("ul",[s("li",{staticStyle:{width:"80%"}},[e._v(" Grounding for Panic "),s("span"),s("span"),s("span"),s("span")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v(" If you are dealing with abuse, trauma or crisis, WeCare is not enough. It is important that you talk to a person you feel safe sharing what you are going through. If there is no one, call of one the helplines below. "),s("br"),s("br"),e._v(" "),s("b",[e._v("Things will get better!")])])}],A={name:"Sospage",props:{user:String},data:function(){return{urlwomen:"https://indianhelpline.com/WOMEN-HELPLINE/",urlsuicide:"http://www.aasra.info/helpline.html"}}},P=A,D=(s("dcbf"),Object(v["a"])(P,j,q,!1,null,"5b5f64d5",null)),T=D.exports,H=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container-app"},[s("div",{staticClass:"container-quiz"},[e._m(0),s("div",{staticClass:"step-progress",style:{width:e.progress+"%"}}),e._l(e.questions.slice(e.a,e.b),(function(t,n){return s("div",{key:n,staticClass:"quiz-main"},[s("div",{staticClass:"box-question"},[s("h6",[e._v("Question "+e._s(e.b)+"/"+e._s(e.questions.length))]),s("p",[e._v(" "+e._s(t.question)+" ")])]),s("div",{staticClass:"box-suggestions"},[s("ul",e._l(t.suggestions,(function(t,n){return s("li",{key:n,class:{one:e.chosen[n]},on:{click:function(s){return e.selectResponse(t)}}},[e._v(" "+e._s(t.suggestion)+" ")])})),0)])])})),e.end?s("div",{staticClass:"box-score"},[s("h2",[e._v("Your score is:")]),s("h1",[e._v(" "+e._s(e.score)+" ")]),s("br"),s("p",[e._v(" Your mental health is ")]),s("p"),e._v(" "),s("h1",[s("b",[e._v(e._s(e.msg)+" ")])]),s("br"),s("p",[e._v(" "+e._s(e.state)+" ")]),s("div",{staticClass:"btn-restart"},[e.progress>100?s("button",{on:{click:e.restart}},[e._v(" Restart "),s("i",{staticClass:"ffas fa-sync"})]):e._e()])]):e._e(),s("div",{staticClass:"quiz-footer"},[e.progress<100?s("div",{staticClass:"box-button"},[s("button",{style:e.next?"":"background-color:rgb(106,128,202)",on:{click:e.skipQuestion}},[e._v(" Skip ")]),s("button",{style:e.next?"background-color:rgb(106,128,202)":"",on:{click:e.nextQuestion}},[e._v(" Next ")])]):e._e()])],2)])},M=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"quiz-header"},[s("h5",[e._v("Manage Your Stress!")])])}],L={name:"Survey",data:function(){return{score:0,state:"",msg:"",myclass:"",chosen:[0,0,0,0],questions:[{question:"I found myself getting upset by quite trivial things.",suggestions:[{suggestion:"Never",val:"0"},{suggestion:"Almost Never",val:"1"},{suggestion:"Sometimes",val:"2"},{suggestion:"Often",val:"3"}]},{question:"I tended to over-react to situations",suggestions:[{suggestion:"Never",val:"0"},{suggestion:"Almost Never",val:"1"},{suggestion:"Sometimes",val:"2"},{suggestion:"Often",val:"3"}]},{question:"I found it difficult to relax",suggestions:[{suggestion:"Never",val:"0"},{suggestion:"Almost Never",val:"1"},{suggestion:"Sometimes",val:"2"},{suggestion:"Often",val:"3"}]},{question:"I found myself getting upset rather easily",suggestions:[{suggestion:"Never",val:"0"},{suggestion:"Almost Never",val:"1"},{suggestion:"Sometimes",val:"2"},{suggestion:"Often",val:"3"}]},{question:"I felt that I was using a lot of nervous energy",suggestions:[{suggestion:"Never",val:"0"},{suggestion:"Almost Never",val:"1"},{suggestion:"Sometimes",val:"2"},{suggestion:"Often",val:"3"}]},{question:"I found myself getting impatient when I was delayed in any way (eg, lifts, traffic lights, being kept waiting)",suggestions:[{suggestion:"Never",val:"0"},{suggestion:"Almost Never",val:"1"},{suggestion:"Sometimes",val:"2"},{suggestion:"Often",val:"3"}]},{question:"I felt that I was rather touchy",suggestions:[{suggestion:"Never",val:"0"},{suggestion:"Almost Never",val:"1"},{suggestion:"Sometimes",val:"2"},{suggestion:"Often",val:"3"}]},{question:"I found it hard to wind down",suggestions:[{suggestion:"Never",val:"0"},{suggestion:"Almost Never",val:"1"},{suggestion:"Sometimes",val:"2"},{suggestion:"Often",val:"3"}]},{question:"I found that I was very irritable",suggestions:[{suggestion:"Never",val:"0"},{suggestion:"Almost Never",val:"1"},{suggestion:"Sometimes",val:"2"},{suggestion:"Often",val:"3"}]},{question:"I found it hard to calm down after something upset me",suggestions:[{suggestion:"Never",val:"0"},{suggestion:"Almost Never",val:"1"},{suggestion:"Sometimes",val:"2"},{suggestion:"Often",val:"3"}]},{question:"I found it difficult to tolerate interruptions to what I was doing",suggestions:[{suggestion:"Never",val:"0"},{suggestion:"Almost Never",val:"1"},{suggestion:"Sometimes",val:"2"},{suggestion:"Often",val:"3"}]},{question:"I was in a state of nervous tension",suggestions:[{suggestion:"Never",val:"0"},{suggestion:"Almost Never",val:"1"},{suggestion:"Sometimes",val:"2"},{suggestion:"Often",val:"3"}]},{question:"I found it difficult to tolerate interruptions to what I was doing",suggestions:[{suggestion:"Never",val:"0"},{suggestion:"Almost Never",val:"1"},{suggestion:"Sometimes",val:"2"},{suggestion:"Often",val:"3"}]},{question:"I was intolerant of anything that kept me from getting on with what I was doing",suggestions:[{suggestion:"Never",val:"0"},{suggestion:"Almost Never",val:"1"},{suggestion:"Sometimes",val:"2"},{suggestion:"Often",val:"3"}]},{question:"I found myself getting agitated",suggestions:[{suggestion:"Never",val:"0"},{suggestion:"Almost Never",val:"1"},{suggestion:"Sometimes",val:"2"},{suggestion:"Often",val:"3"}]}],a:0,b:1,x:-1,select:!1,current:null,end:0,next:!1,progress:0}},methods:{setcurrent:function(e){console.log(e)},selectResponse:function(e){console.log(e.val);var t=parseInt(e.val,10);0===t?(this.chosen[0]=1,this.chosen[1]=0,this.chosen[2]=0,this.chosen[3]=0):1===t?(this.chosen[0]=0,this.chosen[1]=1,this.chosen[2]=0,this.chosen[3]=0):2===t?(this.chosen[0]=0,this.chosen[1]=0,this.chosen[2]=1,this.chosen[3]=0):3===t&&(this.chosen[0]=0,this.chosen[1]=0,this.chosen[2]=0,this.chosen[3]=1),console.log(this.chosen),this.select=!0,this.next=!0,this.score>=0&&this.score<=14?(this.msg="Normal",this.state="This suggests that you experience very little stress and anxiety in your life.You find it easy to relax, which allows you to be calm and engage positively with daily challenges. When certain situations make you anxious, you show good control over your physical reactions"):this.score<=18?(this.msg="Mild",this.state="This suggests that you experience very little to mild stress and anxiety in your daily life. Though you find it easy to relax, you also are manage to manage stressful experiences easily. "):this.score<=25?(this.msg="Moderate",this.state="This suggests that you experience an average amount of stress and anxiety in your life.Though you’re often able to manage stressful experiences, sometimes you may find it hard to relax. This can make you irritable, emotional, and in some situations, it can make you feel anxious."):this.score<=33?(this.msg="Severe",this.state="This suggests that you experience a little more than the average amount of stress and anxiety in your life.You’re often unable to manage stressful experiences, and find it hard to relax. Occasionally, you may notice that you feel physical symptoms of this anxiety—heavy breathing, a pounding heart, or sweatiness in your palms."):(this.msg="Extremely Severe",this.state="This suggests that you experience too much stress and anxiety in your life.You may find it hard to relax, which can make you irritable and emotional. Feeling this way causes you to be tense and makes it hard to be flexible when meeting daily challenges. When you are anxious you may notice physical symptoms—heavy breathing, a pounding heart, or sweatiness."),-1===this.x&&(this.x=t)},nextQuestion:function(){this.next&&(this.chosen[0]=0,this.chosen[1]=0,this.chosen[2]=0,this.chosen[3]=0,this.progress=this.progress+100/this.questions.length,this.a++,this.b++,this.select=!1,this.next=!1,this.score+=this.x,this.x=-1,15===this.a&&(this.end=!0))},skipQuestion:function(){this.next||(this.progress=this.progress+100/this.questions.length,this.questions.length===this.a?this.next=!1:(this.a++,this.b++),15===this.a&&(this.end=!0))},restart:function(){Object.assign(this.$data,this.$options.data())}}},W=L,R=(s("33a0"),Object(v["a"])(W,H,M,!1,null,"6a15f8cb",null)),B=R.exports,Y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"chat-box"},[s("div",{ref:"chatbox",staticClass:"chat-box-list-container"},[s("ul",{staticClass:"chat-box-list"},e._l(e.messages,(function(t,n){return s("li",{key:n,staticClass:"message",class:t.author},[s("p",[s("span",[e._v(e._s(t.text))])])])})),0)]),s("div",{staticClass:"chat-inputs"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"text"},domProps:{value:e.message},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage(t)},input:function(t){t.target.composing||(e.message=t.target.value)}}}),s("button",{on:{click:e.sendMessage}},[e._v("Send")])])])},G=[],Q={name:"ChatBox",data:function(){return{message:"",messages:[]}},methods:{sendMessage:function(){var e=this,t=this.message;this.messages.push({text:t,author:"client"}),this.$nextTick((function(){e.$refs.chatbox.scrollTop=e.$refs.chatbox.scrollHeight})),this.message="",this.$axios.get("https://www.cleverbot.com/getreply?key=CC8uqcCcSO3VsRFvp5-uW5Nxvow&input=".concat(t)).then((function(t){e.messages.push({text:t.data.output,author:"server"}),e.$nextTick((function(){e.$refs.chatbox.scrollTop=e.$refs.chatbox.scrollHeight}))}))}}},z=Q,U=(s("b0b1"),Object(v["a"])(z,Y,G,!1,null,"551888ec",null)),F=U.exports,K={name:"App",components:{Login:y,Home:E,Sospage:T,Survey:B,Chatbox:F},data:function(){return{username:"Guest",email:"",show:0,doctor:"Not Assigned",sDate:"Not Scheculed"}},mounted:function(){this.show=0},methods:{uname:function(e){var t=e.uName,s=e.email,n=e.dName,a=e.sDate;console.log("insidechangename"),this.username=t,this.email=s,this.doctor=n,this.sDate=a,console.log(this.date),console.log("from uname"),console.log(this.doctor),this.show=0,console.log("from App"),console.log(this.email)},fun:function(){this.show=1,this.username="Guest",this.doctor="Not Assigned",this.sDate="Not Scheduled"},fun2:function(){this.show=2},fun3:function(){this.show=3},fun4:function(){(function(e,t){var s={appId:"9a2713693424ef4fba721e8f62eed13f",popupWidget:!0,automaticChatOpenOnNavigation:!0},n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://widget.kommunicate.io/v2/kommunicate.app";var a=document.getElementsByTagName("head")[0];a.appendChild(n),window.kommunicate=t,t._globals=s})(document,window.kommunicate||{}),this.show=4},setfalse:function(){this.show=0}}},V=K,J=(s("034f"),Object(v["a"])(V,a,i,!1,null,null,null)),X=J.exports,Z=s("5f5b"),ee=s("b1e0"),te=(s("f9e3"),s("2dd8"),s("0ff2")),se=s("8c4f"),ne=s("bc3a"),ae=s.n(ne);n["default"].use(Z["a"]),n["default"].use(ee["a"]),n["default"].config.productionTip=!1,n["default"].use(se["a"]),n["default"].use(te["a"]);var ie=[{path:"/Home",component:E},{path:"/Login",component:y},{path:"/Sospage",component:T},{path:"/Booksession",component:N},{path:"/Survey",component:B},{path:"/Chatbox",component:F}],oe=new se["a"]({routes:ie,mode:"history"});new n["default"]({data:{loggedin:!1},router:oe,render:function(e){return e(X)}}).$mount("#app"),n["default"].prototype.$axios=ae.a},"725f":function(e,t,s){e.exports=s.p+"img/sleep.56dda20f.jpeg"},"761c":function(e,t,s){"use strict";s("4174")},"85ec":function(e,t,s){},"95ad":function(e,t,s){"use strict";s("c733")},a7fb:function(e,t,s){e.exports=s.p+"img/Stress.3539288b.jpg"},a87c:function(e,t,s){},b0b1:function(e,t,s){"use strict";s("b120")},b120:function(e,t,s){},c272:function(e,t,s){e.exports=s.p+"img/3rd image.6c8173ea.jpeg"},c733:function(e,t,s){},dcbf:function(e,t,s){"use strict";s("a87c")},e4b4:function(e,t,s){},e6aa:function(e,t,s){},e6b3:function(e,t,s){"use strict";s("e4b4")}});
//# sourceMappingURL=app.3b830011.js.map