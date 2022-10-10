import{u as p,j as b,r as f,l as g,a as h,b as x,c as w,f as e,m as _,p as r,v as n,g as y,w as v,h as l}from"./index.8f28c3ee.js";const k={class:"h-screen"},C={class:"mt-8 md:mt-0 h-full text-gray-800"},S={class:"flex md:justify-center md:items-center h-full g-6"},V={class:"min-w-[400px] px-8 md:px-0"},j=e("h1",{class:"block text-center text-[2rem] font-semibold text-sky-500 mb-8"},"Recipe App",-1),R=["onSubmit"],B={class:"mb-6"},N={class:"mb-6"},U={class:"mb-6"},q=e("div",{class:"text-center lg:text-left"},[e("input",{type:"submit",name:"button",class:"w-full inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",value:"Register"})],-1),F={class:"text-sm text-center font-semibold mt-2 pt-1 mb-0"},I=l(" Already have an account? "),M=l("Login "),T=e("div",{class:"flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"},[e("p",{class:"text-center font-semibold mx-4 mb-0"},"Or")],-1),A=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 488 512",class:"w-4 h-4"},[e("path",{fill:"currentColor",d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"})],-1),E=e("label",{class:"text-lg mb-0 mr-4"},"Sign up with Google",-1),G=[A,E],z={__name:"Register",setup(O){const a=p(),i=b();f([]);const t=g({name:null,email:null,password:null}),d=async()=>{(await a.dispatch("register",t)).status==200&&i.push({name:"home"})},c=async()=>{window.open("http://127.0.0.1:3001/api/auth/google","_self")};return(u,o)=>{const m=h("router-link");return x(),w("section",k,[e("div",C,[e("div",S,[e("div",V,[j,e("form",{onSubmit:_(d,["prevent"]),method:"POST"},[e("div",B,[r(e("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>t.name=s),type:"text",name:"name",class:"form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"exampleFormControlInput1",placeholder:"Name",required:""},null,512),[[n,t.name]])]),e("div",N,[r(e("input",{"onUpdate:modelValue":o[1]||(o[1]=s=>t.email=s),type:"email",name:"email",class:"form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"exampleFormControlInput1",placeholder:"Email address",required:""},null,512),[[n,t.email]])]),e("div",U,[r(e("input",{"onUpdate:modelValue":o[2]||(o[2]=s=>t.password=s),type:"password",name:"password",class:"form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"exampleFormControlInput2",placeholder:"Password",required:""},null,512),[[n,t.password]])]),q,e("p",F,[I,y(m,{to:"/login",class:"text-sky-600 hover:text-sky-700 focus:text-sky-700 transition duration-200 ease-in-out"},{default:v(()=>[M]),_:1})]),T,e("div",{class:"flex flex-col items-center justify-center lg:justify-start"},[e("button",{onClick:c,type:"button","data-mdb-ripple":"true","data-mdb-ripple-color":"light",class:"w-full flex items-center justify-center gap-2 p-3 mb-4 text-sky-500 hover:text-white text-center font-medium text-xs leading-tight rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"},G)])],40,R)])])])])}}};export{z as default};
