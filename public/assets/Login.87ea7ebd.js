import{u as w,s as y,d as b,v as k,r as C,o as s,c as o,b as e,F as c,f as d,x as L,y as p,z as g,a as S,k as V,n as f,j,t as u,h as m}from"./index.998c2029.js";const B={class:"h-screen"},F={class:"mt-8 md:mt-0 h-full text-gray-800"},N={class:"flex md:justify-center md:items-center h-full g-6"},z={class:"min-w-[400px] px-8 md:px-0"},M={class:"mb-4"},D={key:0,class:"bg-red-100 rounded-lg py-4 px-3 text-base text-red-700 inline-flex items-center w-full",role:"alert"},I=e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"times-circle",class:"w-4 h-4 mr-2 fill-current",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"})],-1),R=e("h1",{class:"block text-center text-[2rem] font-semibold text-sky-500 mb-8"},"Recipe App",-1),E=["onSubmit"],T={class:"mb-6"},U={key:0,class:"block text-rose-500 mt-2"},A={class:"mb-6"},G={key:0,class:"block text-rose-500 mt-2"},H={class:"flex justify-between items-center mb-6"},O=f("Forgot password?"),P={class:"w-full text-center lg:text-left"},q={key:0,type:"submit",name:"submit",value:"Login",class:"w-full inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"},J={key:1,type:"submit",class:"btn !w-full"},K=e("div",{class:"spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full text-green-500",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1),Q=[K],W=e("p",{class:"text-sm text-center font-semibold mt-4 pt-1 mb-4"},[f(" Don't have an account? "),e("a",{href:"/register",class:"text-sky-600 hover:text-sky-700 focus:text-sky-700 transition duration-200 ease-in-out"},"Register")],-1),X=j('<div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"><p class="text-center font-semibold mx-4 mb-0">Or</p></div><div class="flex flex-col items-center justify-center lg:justify-start"><a href="/api/auth/google" class="w-full flex items-center justify-center gap-2 p-3 mb-4 border text-sky-500 hover:text-white text-center font-medium text-xs leading-tight rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" class="w-4 h-4"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg><label class="text-base mb-0 mr-4">Sign in with Google</label></a></div>',2),$={__name:"Login",setup(Y){const h=w(),x=y(),a=b([]),r=b(!1),l=k({email:null,password:null}),v=async()=>{if(!r.value)try{r.value=!0,a.value=[],await h.dispatch("login",l),x.push({name:"home"})}catch(n){if(n.response.status===500||n.response.status===401){a.value=[...a.value,{message:"Invalid Credentails"}];return}a.value=n.response.data.errors}finally{r.value=!1}};return(n,i)=>{const _=C("router-link");return s(),o("section",B,[e("div",F,[e("div",N,[e("div",z,[(s(!0),o(c,null,d(a.value,t=>(s(),o("div",M,[t.message?(s(),o("div",D,[I,f(" "+u(t.message),1)])):m("",!0)]))),256)),R,e("form",{onSubmit:L(v,["prevent"]),method:"post"},[e("div",T,[p(e("input",{"onUpdate:modelValue":i[0]||(i[0]=t=>l.email=t),name:"email",type:"text",class:"form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"exampleFormControlInput1",placeholder:"Email address"},null,512),[[g,l.email]]),(s(!0),o(c,null,d(a.value,t=>(s(),o("div",null,[t.param=="email"?(s(),o("small",U,u(t.msg),1)):m("",!0)]))),256))]),e("div",A,[p(e("input",{"onUpdate:modelValue":i[1]||(i[1]=t=>l.password=t),type:"password",name:"password",class:"form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"exampleFormControlInput2",placeholder:"Password"},null,512),[[g,l.password]]),(s(!0),o(c,null,d(a.value,t=>(s(),o("div",null,[t.param=="password"?(s(),o("small",G,u(t.msg),1)):m("",!0)]))),256))]),e("div",H,[S(_,{to:"/account/password/reset",class:"text-gray-800"},{default:V(()=>[O]),_:1})]),e("div",P,[r.value?(s(),o("button",J,Q)):(s(),o("input",q)),W]),X],40,E)])])])])}}};export{$ as default};
