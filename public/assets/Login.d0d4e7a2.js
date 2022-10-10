import{u as w,j as y,d as h,p as k,r as C,o as s,c as o,b as e,F as c,f as d,q as L,s as b,v as p,a as S,w as j,h as f,t as u,m}from"./index.3ba80f74.js";const V={class:"h-screen"},B={class:"mt-8 md:mt-0 h-full text-gray-800"},F={class:"flex md:justify-center md:items-center h-full g-6"},M={class:"min-w-[400px] px-8 md:px-0"},N={class:"mb-4"},R={key:0,class:"bg-red-100 rounded-lg py-4 px-3 text-base text-red-700 inline-flex items-center w-full",role:"alert"},z=e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"times-circle",class:"w-4 h-4 mr-2 fill-current",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"})],-1),D=e("h1",{class:"block text-center text-[2rem] font-semibold text-sky-500 mb-8"},"Recipe App",-1),I=["onSubmit"],U={class:"mb-6"},E={key:0,class:"block text-rose-500 mt-2"},T={class:"mb-6"},q={key:0,class:"block text-rose-500 mt-2"},A={class:"flex justify-between items-center mb-6"},G=f("Forgot password?"),H={class:"w-full text-center lg:text-left"},O={key:0,type:"submit",name:"submit",value:"Login",class:"w-full inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"},P={key:1,type:"submit",class:"btn !w-full"},$=e("div",{class:"spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full text-green-500",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1),J=[$],K=e("p",{class:"text-sm text-center font-semibold mt-4 pt-1 mb-4"},[f(" Don't have an account? "),e("a",{href:"/register",class:"text-sky-600 hover:text-sky-700 focus:text-sky-700 transition duration-200 ease-in-out"},"Register")],-1),Q=e("div",{class:"flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"},[e("p",{class:"text-center font-semibold mx-4 mb-0"},"Or")],-1),W={class:"flex flex-col items-center justify-center lg:justify-start"},X=["href"],Y=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 488 512",class:"w-4 h-4"},[e("path",{fill:"currentColor",d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"})],-1),Z=e("label",{class:"text-base mb-0 mr-4"},"Sign in with Google",-1),ee=[Y,Z],oe={__name:"Login",setup(te){const g=w(),x=y(),l=h([]),n=h(!1),r=k({email:null,password:null}),_=async()=>{if(!n.value)try{n.value=!0,l.value=[],await g.dispatch("login",r),x.push({name:"home"})}catch(a){if(a.response.status===500||a.response.status===401){l.value=[...l.value,{message:"Invalid Credentails"}];return}l.value=a.response.data.errors}finally{n.value=!1}};return(a,i)=>{const v=C("router-link");return s(),o("section",V,[e("div",B,[e("div",F,[e("div",M,[(s(!0),o(c,null,d(l.value,t=>(s(),o("div",N,[t.message?(s(),o("div",R,[z,f(" "+u(t.message),1)])):m("",!0)]))),256)),D,e("form",{onSubmit:L(_,["prevent"]),method:"post"},[e("div",U,[b(e("input",{"onUpdate:modelValue":i[0]||(i[0]=t=>r.email=t),name:"email",type:"text",class:"form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"exampleFormControlInput1",placeholder:"Email address"},null,512),[[p,r.email]]),(s(!0),o(c,null,d(l.value,t=>(s(),o("div",null,[t.param=="email"?(s(),o("small",E,u(t.msg),1)):m("",!0)]))),256))]),e("div",T,[b(e("input",{"onUpdate:modelValue":i[1]||(i[1]=t=>r.password=t),type:"password",name:"password",class:"form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"exampleFormControlInput2",placeholder:"Password"},null,512),[[p,r.password]]),(s(!0),o(c,null,d(l.value,t=>(s(),o("div",null,[t.param=="password"?(s(),o("small",q,u(t.msg),1)):m("",!0)]))),256))]),e("div",A,[S(v,{to:"/account/password/reset",class:"text-gray-800"},{default:j(()=>[G]),_:1})]),e("div",H,[n.value?(s(),o("button",P,J)):(s(),o("input",O)),K]),Q,e("div",W,[e("a",{href:a.$serverURL+"/api/auth/google",class:"w-full flex items-center justify-center gap-2 p-3 mb-4 border text-sky-500 hover:text-white text-center font-medium text-xs leading-tight rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"},ee,8,X)])],40,I)])])])])}}};export{oe as default};