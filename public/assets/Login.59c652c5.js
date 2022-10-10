import{u as w,v as k,d as p,x as L,r as C,o as s,c as o,b as e,F as c,f as d,y as V,z as b,A as h,a as g,l as B,p as f,t as u,h as m}from"./index.1d546c79.js";import{G as F}from"./GoogleButton.f7dd2661.js";const S={class:"h-screen"},j={class:"mt-8 md:mt-0 h-full text-gray-800"},N={class:"flex md:justify-center md:items-center h-full g-6"},z={class:"min-w-[400px] px-8 md:px-0"},D={class:"mb-4"},I={key:0,class:"bg-red-100 rounded-lg py-4 px-3 text-base text-red-700 inline-flex items-center w-full",role:"alert"},M=e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"times-circle",class:"w-4 h-4 mr-2 fill-current",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"})],-1),R=e("h1",{class:"block text-center text-[2rem] font-semibold text-sky-500 mb-8"},"Recipe App",-1),A=["onSubmit"],E={class:"mb-6"},G={key:0,class:"block text-rose-500 mt-2"},T={class:"mb-6"},U={key:0,class:"block text-rose-500 mt-2"},O={class:"flex justify-between items-center mb-6"},P=f("Forgot password?"),q={class:"w-full text-center lg:text-left"},H={key:0,type:"submit",name:"submit",value:"Login",class:"w-full inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"},J={key:1,type:"submit",class:"btn !w-full"},K=e("div",{class:"spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full text-green-500",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1),Q=[K],W=e("p",{class:"text-sm text-center font-semibold mt-4 pt-1 mb-4"},[f(" Don't have an account? "),e("a",{href:"/register",class:"text-sky-600 hover:text-sky-700 focus:text-sky-700 transition duration-200 ease-in-out"},"Register")],-1),X=e("div",{class:"flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"},[e("p",{class:"text-center font-semibold mx-4 mb-0"},"Or")],-1),Y={class:"flex flex-col items-center justify-center lg:justify-start"},te={__name:"Login",setup(Z){const x=w(),_=k(),r=p([]),l=p(!1),a=L({email:null,password:null}),v=async()=>{if(!l.value)try{l.value=!0,r.value=[],await x.dispatch("login",a),_.push({name:"home"})}catch(n){if(n.response.status===500||n.response.status===401){r.value=[...r.value,{message:"Invalid Credentails"}];return}r.value=n.response.data.errors}finally{l.value=!1}};return(n,i)=>{const y=C("router-link");return s(),o("section",S,[e("div",j,[e("div",N,[e("div",z,[(s(!0),o(c,null,d(r.value,t=>(s(),o("div",D,[t.message?(s(),o("div",I,[M,f(" "+u(t.message),1)])):m("",!0)]))),256)),R,e("form",{onSubmit:V(v,["prevent"]),method:"post"},[e("div",E,[b(e("input",{"onUpdate:modelValue":i[0]||(i[0]=t=>a.email=t),name:"email",type:"text",class:"form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"exampleFormControlInput1",placeholder:"Email address"},null,512),[[h,a.email]]),(s(!0),o(c,null,d(r.value,t=>(s(),o("div",null,[t.param=="email"?(s(),o("small",G,u(t.msg),1)):m("",!0)]))),256))]),e("div",T,[b(e("input",{"onUpdate:modelValue":i[1]||(i[1]=t=>a.password=t),type:"password",name:"password",class:"form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"exampleFormControlInput2",placeholder:"Password"},null,512),[[h,a.password]]),(s(!0),o(c,null,d(r.value,t=>(s(),o("div",null,[t.param=="password"?(s(),o("small",U,u(t.msg),1)):m("",!0)]))),256))]),e("div",O,[g(y,{to:"/account/password/reset",class:"text-gray-800"},{default:B(()=>[P]),_:1})]),e("div",q,[l.value?(s(),o("button",J,Q)):(s(),o("input",H)),W]),X,e("div",Y,[g(F)])],40,A)])])])])}}};export{te as default};