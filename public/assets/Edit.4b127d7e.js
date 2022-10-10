import{u as L,r as c,y as B,l as I,o as V,b as a,c as r,h as w,t as m,k as p,F as x,d as S,f as e,p as f,v as g}from"./index.43fd95b2.js";const M={key:0,class:"bg-green-100 rounded-lg py-5 px-6 text-base mb-4 text-green-700 inline-flex items-center w-full",role:"alert"},N=e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"w-4 h-4 mr-2 fill-current",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"})],-1),P={class:"bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 inline-flex items-center w-full",role:"alert"},R=e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"times-circle",class:"w-4 h-4 mr-2 fill-current",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"})],-1),z={key:1,class:"w-full"},D={class:"flex items-center bg-white p-6 border rounded-md gap-4 mb-8"},F={class:"flex w-auto"},H=["src"],j=["src"],T={class:"w-auto"},G={for:"",class:"block text-base"},Y={key:0,class:"text-gray-500 text-sm"},q={class:"flex flex-col w-full mb-4 gap-8 bg-white p-6 border rounded-md"},J=e("h1",{class:"text-lg font-semibold"},"Profile",-1),K={class:"w-full"},O=e("label",{for:"exampleInputEmail2",class:"block mb-2 text-gray-700"},"Name",-1),Q={class:"w-full"},W=e("label",{for:"exampleInputEmail2",class:"block mb-2 text-gray-700"},"Email Address",-1),X={class:"w-full"},Z=e("label",{for:"exampleInputEmail2",class:"block mb-2 text-gray-700"},"Phone Number",-1),ee={class:"w-full"},te=e("label",{for:"exampleInputEmail2",class:"block mb-2 text-gray-700"},"Bio",-1),se={class:"w-full"},le={key:2,class:"w-full fixed flex items-center justify-center h-screen backdrop-grayscale-0 bg-black/30 top-0 left-0 p-8 md:p-0"},oe={class:"w-96 relative bg-white overflow-hidden rounded-lg shadow-lg"},ae={class:"p-8 w-full"},re=["src"],ne=["src"],ie={class:"w-full"},de={class:"block w-full text-sm text-center py-2 text-sky-500 hover:bg-slate-100 cursor-pointer border-t border-b"},ce=w(" Upload Photo "),ue={key:0,class:"absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-grayscale-0 bg-white/30"},be=e("div",{class:"spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-green-500",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1),me=[be],ge={__name:"Edit",setup(pe){const i=L(),h=c(),v=c([]),u=c(),d=c(!1),y=c(!1),_=B(),o=I({id:null,name:null,email:null,phone:null,bio:null}),b=()=>{y.value=y.value==!1},k=t=>new Promise((s,l)=>{var n=new FileReader;n.onload=()=>{s(n.result)},n.onerror=l,n.readAsDataURL(t)}),A=async t=>{let s=document.getElementById("avatar");const l=await k(t.target.files[0]);s.setAttribute("src",l);try{d.value=!0,await i.dispatch("uploadAvatar",t.target.files[0]),b()}catch(n){console.log(n)}finally{d.value=!1}},C=async()=>{try{d.value=!0,await i.dispatch("removeAvatar"),b()}catch(t){console.log(t)}finally{d.value=!1}},U=async()=>{h.value=_.appContext.config.globalProperties.$user;const{name:t,email:s,phone:l,id:n,bio:E}=h.value;o.id=n,o.name=t,o.email=s,o.phone=l,o.bio=E},$=async()=>{v.value=[],u.value=null;try{const{id:t,name:s,phone:l,bio:n}=o;await i.dispatch("updateUser",{id:t,name:s,phone:l,bio:n}),await i.dispatch("user"),h.value=i.getters.user,u.value="Your profile successfully updated"}catch(t){v.value=t.response.data.errors}};return V(U),(t,s)=>(a(),r(x,null,[u.value?(a(),r("div",M,[N,w(" "+m(u.value),1)])):p("",!0),(a(!0),r(x,null,S(v.value,l=>(a(),r("div",P,[R,w(" "+m(l.msg),1)]))),256)),t.$user?(a(),r("div",z,[e("div",D,[e("div",F,[t.$user.image?(a(),r("img",{key:0,src:t.$user.image,class:"rounded-full w-16 h-16 border-2 border-sky-500",alt:"Avatar"},null,8,H)):(a(),r("img",{key:1,src:t.$defaultAvatar,class:"rounded-full w-16 h-16 border-2 border-sky-500",alt:"avatar"},null,8,j))]),e("div",T,[e("label",G,m(t.$user.name),1),t.$user.provider?(a(),r("p",Y,"Go to "+m(t.$user.provider)+" account to change your avatar",1)):(a(),r("span",{key:1,onClick:b,class:"block text-sky-500 text-sm cursor-pointer hover:underline"},"Change profile image"))])]),e("div",q,[J,e("div",K,[O,f(e("input",{type:"email","onUpdate:modelValue":s[0]||(s[0]=l=>o.name=l),class:"form-control w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none","aria-describedby":"emailHelp"},null,512),[[g,o.name]])]),e("div",Q,[W,f(e("input",{type:"email","onUpdate:modelValue":s[1]||(s[1]=l=>o.email=l),class:"form-control w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none","aria-describedby":"emailHelp",disabled:""},null,512),[[g,o.email]])]),e("div",X,[Z,f(e("input",{type:"email","onUpdate:modelValue":s[2]||(s[2]=l=>o.phone=l),class:"form-control w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none","aria-describedby":"emailHelp"},null,512),[[g,o.phone]])]),e("div",ee,[te,f(e("textarea",{name:"bio","onUpdate:modelValue":s[3]||(s[3]=l=>o.bio=l),cols:"0",rows:"5",class:"form-control w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"},null,512),[[g,o.bio]])]),e("div",se,[e("input",{onClick:s[4]||(s[4]=l=>$()),type:"submit",name:"submit",value:"Submit",class:"inline-block px-7 py-3 bg-blue-600 w-full lg:w-auto text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"})])])])):p("",!0),y.value?(a(),r("div",le,[e("div",oe,[e("div",ae,[t.$user.image?(a(),r("img",{key:0,id:"avatar",src:t.$user.image,class:"rounded-full border-2 border-sky-500 mx-auto w-24 h-24",alt:"Avatar"},null,8,re)):(a(),r("img",{key:1,src:t.$defaultAvatar,id:"avatar",class:"rounded-full border-2 border-sky-500 mx-auto w-24 h-24",alt:"avatar"},null,8,ne))]),e("div",ie,[e("label",de,[ce,e("input",{type:"file",onChange:s[5]||(s[5]=l=>A(l)),class:"hidden",name:"image"},null,32)]),e("span",{onClick:C,for:"",class:"block w-full text-sm text-center py-2 text-rose-500 hover:bg-slate-100 cursor-pointer border-b"}," Remove "),e("span",{onClick:b,class:"block w-full text-sm text-center py-2 hover:bg-slate-100 cursor-pointer"}," Cancel ")]),d.value?(a(),r("div",ue,me)):p("",!0)])])):p("",!0)],64))}};export{ge as default};
