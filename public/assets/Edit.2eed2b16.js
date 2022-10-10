import{u as T,d as y,i as B,x as V,n as H,e as A,o as s,c as l,p as k,t as u,h as d,F as p,f as g,m,b as t,z as _,A as x}from"./index.751c8c45.js";const z={key:0,class:"bg-green-100 rounded-lg py-5 px-6 text-base mb-4 text-green-700 inline-flex items-center w-full",role:"alert"},M=t("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"w-4 h-4 mr-2 fill-current",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[t("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"})],-1),N={key:0,class:"bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 inline-flex items-center w-full",role:"alert"},P=t("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"times-circle",class:"w-4 h-4 mr-2 fill-current",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[t("path",{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"})],-1),D={key:1,class:"w-full"},F={class:"flex items-center bg-white p-6 border rounded-md gap-4 mb-8"},$={class:"flex w-auto"},j=["src"],G=["src"],Y={class:"w-auto"},q={for:"",class:"block text-base"},J={key:0,class:"text-gray-500 text-sm"},K={class:"flex flex-col w-full mb-4 gap-8 bg-white p-6 border rounded-md"},O=t("h1",{class:"text-lg text-gray-500 font-semibold"},"Profile",-1),Q={class:"w-full"},W=t("label",{for:"exampleInputEmail2",class:"block mb-2 text-gray-700"},"Name",-1),X={key:0,class:"block text-rose-500 mt-2"},Z={class:"w-full"},ee=t("label",{for:"exampleInputEmail2",class:"block mb-2 text-gray-700"},"Email Address",-1),te={key:0,class:"block text-rose-500 mt-2"},se={class:"w-full"},le=t("label",{for:"exampleInputEmail2",class:"block mb-2 text-gray-700"},"Phone Number",-1),oe={key:0,class:"block text-rose-500 mt-2"},ae={class:"w-full"},re=t("label",{for:"exampleInputEmail2",class:"block mb-2 text-gray-700"},"Bio",-1),ne={key:0,class:"block text-rose-500 mt-2"},ie={class:"w-full"},ce={key:2,class:"w-full fixed flex items-center justify-center h-screen backdrop-grayscale-0 bg-black/30 top-0 left-0 p-8 md:p-0"},de={class:"w-96 relative bg-white overflow-hidden rounded-lg shadow-lg"},ue={class:"p-8 w-full"},me=["src"],be=["src"],pe={class:"w-full"},fe={class:"block w-full text-sm text-center py-2 text-sky-500 hover:bg-slate-100 cursor-pointer border-t border-b"},ge=k(" Upload Photo "),he={key:0,class:"absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-grayscale-0 bg-white/30"},ve=t("div",{class:"spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-green-500",role:"status"},[t("span",{class:"visually-hidden"},"Loading...")],-1),ye=[ve],we={__name:"Edit",setup(_e){const n=T(),c=y([]),h=y(),f=y(!1),w=y(!1);B();const r=V({id:null,name:null,email:null,phone:null,bio:null}),v=()=>{w.value=w.value==!1},E=a=>new Promise((o,e)=>{var i=new FileReader;i.onload=()=>{o(i.result)},i.onerror=e,i.readAsDataURL(a)}),C=async a=>{let o=document.getElementById("avatar");const e=await E(a.target.files[0]);o.setAttribute("src",e);try{f.value=!0,await n.dispatch("uploadAvatar",a.target.files[0]),n.commit("SET_AUTH_USER",n.getters.user),v()}catch(i){console.log(i)}finally{f.value=!1}},S=async()=>{try{f.value=!0,await n.dispatch("removeAvatar"),n.commit("SET_AUTH_USER",n.getters.user),v()}catch(a){console.log(a)}finally{f.value=!1}},I=async()=>{const{name:a,email:o,phone:e,id:i,bio:R}=b.value;r.id=i,r.name=a,r.email=o,r.phone=e,r.bio=R},L=async()=>{c.value=[],h.value=null;try{const{id:a,name:o,phone:e,bio:i}=r;await n.dispatch("updateUser",{id:a,name:o,phone:e,bio:i}),n.commit("SET_AUTH_USER",n.getters.user),h.value="Your profile successfully updated"}catch(a){const o=a.response.data.errors;a.response.status===400&&(c.value=o),a.response.status>400&&(c.value=[...c.value,{message:o}])}};H(I);const b=A(()=>n.getters.authUser),U=A(()=>n.getters.authUserImage);return(a,o)=>(s(),l(p,null,[h.value?(s(),l("div",z,[M,k(" "+u(h.value),1)])):d("",!0),(s(!0),l(p,null,g(c.value,e=>(s(),l("div",null,[e.message?(s(),l("div",N,[P,k(" "+u(e.message),1)])):d("",!0)]))),256)),m(b)?(s(),l("div",D,[t("div",F,[t("div",$,[m(b).image?(s(),l("img",{key:0,src:m(U),class:"rounded-full w-16 h-16 border-2 border-sky-500",alt:"Avatar"},null,8,j)):(s(),l("img",{key:1,src:a.$defaultAvatar,class:"rounded-full w-16 h-16 border-2 border-sky-500",alt:"avatar"},null,8,G))]),t("div",Y,[t("label",q,u(m(b).name),1),m(b).provider?(s(),l("p",J,"Go to "+u(m(b).provider)+" account to change your avatar",1)):(s(),l("span",{key:1,onClick:v,class:"block text-sky-500 text-sm cursor-pointer hover:underline"},"Change profile image"))])]),t("div",K,[O,t("div",Q,[W,_(t("input",{type:"email","onUpdate:modelValue":o[0]||(o[0]=e=>r.name=e),class:"form-control w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none","aria-describedby":"emailHelp"},null,512),[[x,r.name]]),(s(!0),l(p,null,g(c.value,e=>(s(),l("div",null,[e.param=="name"?(s(),l("small",X,u(e.msg),1)):d("",!0)]))),256))]),t("div",Z,[ee,_(t("input",{type:"email","onUpdate:modelValue":o[1]||(o[1]=e=>r.email=e),class:"form-control w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none","aria-describedby":"emailHelp",disabled:""},null,512),[[x,r.email]]),(s(!0),l(p,null,g(c.value,e=>(s(),l("div",null,[e.param=="email"?(s(),l("small",te,u(e.msg),1)):d("",!0)]))),256))]),t("div",se,[le,_(t("input",{type:"tel","onUpdate:modelValue":o[2]||(o[2]=e=>r.phone=e),class:"form-control w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none","aria-describedby":"emailHelp"},null,512),[[x,r.phone]]),(s(!0),l(p,null,g(c.value,e=>(s(),l("div",null,[e.param=="phone"?(s(),l("small",oe,u(e.msg),1)):d("",!0)]))),256))]),t("div",ae,[re,_(t("textarea",{name:"bio","onUpdate:modelValue":o[3]||(o[3]=e=>r.bio=e),cols:"0",rows:"5",class:"form-control w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"},null,512),[[x,r.bio]]),(s(!0),l(p,null,g(c.value,e=>(s(),l("div",null,[e.param=="bio"?(s(),l("small",ne,u(e.msg),1)):d("",!0)]))),256))]),t("div",ie,[t("input",{onClick:o[4]||(o[4]=e=>L()),type:"submit",name:"submit",value:"Submit",class:"inline-block px-7 py-3 bg-blue-600 w-full lg:w-auto text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"})])])])):d("",!0),w.value?(s(),l("div",ce,[t("div",de,[t("div",ue,[m(b).image?(s(),l("img",{key:0,id:"avatar",src:m(U),class:"rounded-full border-2 border-sky-500 mx-auto w-24 h-24",alt:"Avatar"},null,8,me)):(s(),l("img",{key:1,src:a.$defaultAvatar,id:"avatar",class:"rounded-full border-2 border-sky-500 mx-auto w-24 h-24",alt:"avatar"},null,8,be))]),t("div",pe,[t("label",fe,[ge,t("input",{type:"file",onChange:o[5]||(o[5]=e=>C(e)),class:"hidden",name:"image"},null,32)]),t("span",{onClick:S,for:"",class:"block w-full text-sm text-center py-2 text-rose-500 hover:bg-slate-100 cursor-pointer border-b"}," Remove "),t("span",{onClick:v,class:"block w-full text-sm text-center py-2 hover:bg-slate-100 cursor-pointer"}," Cancel ")]),f.value?(s(),l("div",he,ye)):d("",!0)])])):d("",!0)],64))}};export{we as default};
