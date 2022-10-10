import{u as h,r as d,l as x,b as r,c as n,h as m,t as g,k as v,F as _,d as y,f as e,p as c,v as u,n as k}from"./index.8f28c3ee.js";const C={class:"flex flex-col w-full items-end mb-2 gap-8"},E={key:0,class:"bg-green-100 rounded-lg py-5 px-6 text-base text-green-700 inline-flex items-center w-full",role:"alert"},L=e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"w-4 h-4 mr-2 fill-current",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"})],-1),I={class:"bg-red-100 rounded-lg py-5 px-6 text-base text-red-700 inline-flex items-center w-full",role:"alert"},P=e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"times-circle",class:"w-4 h-4 mr-2 fill-current",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"})],-1),V={class:"w-full bg-white p-6 border rounded-md mb-4"},z=e("h1",{class:"text-lg font-semibold mb-4"},"Change password",-1),B={class:"w-full mb-6"},D=e("label",{for:"exampleInputEmail2",class:"block mb-2 text-gray-700"},"Old Password",-1),S={class:"w-full mb-6"},M=e("label",{for:"exampleInputEmail2",class:"block mb-2 text-gray-700"},"New Password",-1),N={class:"w-full mb-6"},H=e("label",{for:"exampleInputEmail2",class:"block mb-2 text-gray-700"},"Confirm Password",-1),U={class:"w-full"},A=["disabled"],F=e("h1",{class:"text-lg font-semibold mb-4"},"Delete account",-1),O={__name:"Security",setup(T){const p=h(),a=d(),i=d([]),b=d(!1),o=x({new_password:null,password_confirmation:null,password:null}),f=async()=>{b.value=!0;try{await p.dispatch("deleteAccount")}catch(s){console.log(s)}finally{b.value=!1}},w=async()=>{i.value=[],a.value=null;try{let s=await p.dispatch("changePassword",o);a.value=s.data.message}catch(s){i.value=s.response.data.errors}};return(s,l)=>(r(),n("div",C,[a.value?(r(),n("div",E,[L,m(" "+g(a.value),1)])):v("",!0),(r(!0),n(_,null,y(i.value,t=>(r(),n("div",I,[P,m(" "+g(t.msg),1)]))),256)),e("div",V,[z,e("div",B,[D,c(e("input",{type:"password","onUpdate:modelValue":l[0]||(l[0]=t=>o.password=t),class:"form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"exampleInputEmail2","aria-describedby":"emailHelp"},null,512),[[u,o.password]])]),e("div",S,[M,c(e("input",{type:"password","onUpdate:modelValue":l[1]||(l[1]=t=>o.new_password=t),class:"form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"exampleInputEmail2","aria-describedby":"emailHelp"},null,512),[[u,o.new_password]])]),e("div",N,[H,c(e("input",{type:"password","onUpdate:modelValue":l[2]||(l[2]=t=>o.password_confirmation=t),class:"form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"exampleInputEmail2","aria-describedby":"emailHelp"},null,512),[[u,o.password_confirmation]])]),e("div",U,[e("input",{onClick:w,type:"submit",name:"submit",value:"Change Password",disabled:s.$user.provider,class:k([{"cursor-not-allowed bg-gray-500 hover:bg-gray-500":s.$user.provider},"inline-block px-7 py-3 w-full lg:w-auto bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"])},null,10,A)])]),e("div",{class:"w-full bg-white p-6 border rounded-md"},[F,e("input",{onClick:f,type:"submit",name:"submit",value:"Delete",class:"inline-block px-7 py-3 w-full lg:w-auto border text-sm font-semibold leading-snug uppercase rounded shadow-md border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white hover:shadow-lg focus:bg-rose-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"})])]))}};export{O as default};
