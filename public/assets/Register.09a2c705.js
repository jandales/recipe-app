import{u as w,m as y,d,p as k,r as S,o as s,c as o,b as e,q as V,s as u,v as c,F as m,g as b,a as C,w as N,j as g,B as j,t as f,k as p}from"./index.614d0cde.js";const B={class:"h-screen"},R={class:"mt-8 md:mt-0 h-full text-gray-800"},L={class:"flex md:justify-center md:items-center h-full g-6"},E={class:"min-w-[400px] px-8 md:px-0"},M=e("h1",{class:"block text-center text-[2rem] font-semibold text-sky-500 mb-8"},"Recipe App",-1),T=["onSubmit"],U={class:"mb-6"},A={key:0,class:"block text-rose-500 mt-2"},D={class:"mb-6"},F={key:0,class:"block text-rose-500 mt-2"},O={class:"mb-6"},P={key:0,class:"block text-rose-500 mt-2"},q={class:"text-center lg:text-left"},z={key:0,type:"submit",name:"button",class:"w-full inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",value:"Register"},G={key:1,type:"submit",class:"btn !w-full"},H=e("div",{class:"spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full text-green-500",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1),I=[H],J={class:"text-sm text-center font-semibold mt-2 pt-1 mb-0"},K=g(" Already have an account? "),Q=g("Login "),W=j('<div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"><p class="text-center font-semibold mx-4 mb-0">Or</p></div><div class="flex flex-col items-center justify-center lg:justify-start"><a href="/api/auth/google" class="w-full flex items-center justify-center gap-2 p-3 mb-4 border text-sky-500 hover:text-white text-center font-medium text-xs leading-tight rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" class="w-4 h-4"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg><label class="text-base mb-0 mr-4">Sign in with Google</label></a></div>',2),Z={__name:"Register",setup(X){const h=w(),x=y(),a=d([]),i=d(!1);d([]);const r=k({name:null,email:null,password:null}),v=async()=>{if(!i.value)try{a.value=[],i.value=!0,(await h.dispatch("register",r)).status==200&&x.push({name:"home"})}catch(n){if(n.response.status===500||n.response.status===401){a.value=[...a.value,{message:"Server Error 500"}];return}a.value=n.response.data.errors}finally{i.value=!1}};return(n,l)=>{const _=S("router-link");return s(),o("section",B,[e("div",R,[e("div",L,[e("div",E,[M,e("form",{onSubmit:V(v,["prevent"]),method:"POST"},[e("div",U,[u(e("input",{"onUpdate:modelValue":l[0]||(l[0]=t=>r.name=t),type:"text",name:"name",class:"form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Name"},null,512),[[c,r.name]]),(s(!0),o(m,null,b(a.value,t=>(s(),o("div",null,[t.param=="name"?(s(),o("small",A,f(t.msg),1)):p("",!0)]))),256))]),e("div",D,[u(e("input",{"onUpdate:modelValue":l[1]||(l[1]=t=>r.email=t),type:"email",name:"email",class:"form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Email address"},null,512),[[c,r.email]]),(s(!0),o(m,null,b(a.value,t=>(s(),o("div",null,[t.param=="email"?(s(),o("small",F,f(t.msg),1)):p("",!0)]))),256))]),e("div",O,[u(e("input",{"onUpdate:modelValue":l[2]||(l[2]=t=>r.password=t),type:"password",name:"password",class:"form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",placeholder:"Password"},null,512),[[c,r.password]]),(s(!0),o(m,null,b(a.value,t=>(s(),o("div",null,[t.param=="password"?(s(),o("small",P,f(t.msg),1)):p("",!0)]))),256))]),e("div",q,[i.value?(s(),o("button",G,I)):(s(),o("input",z))]),e("p",J,[K,C(_,{to:"/login",class:"text-sky-600 hover:text-sky-700 focus:text-sky-700 transition duration-200 ease-in-out"},{default:N(()=>[Q]),_:1})]),W],40,T)])])])])}}};export{Z as default};
