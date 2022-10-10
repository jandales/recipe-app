import{q as C,f as S,g as m,v as L,r as z,o as t,c as s,b as e,e as c,F as p,j as _,x as P,y as h,z as x,a as g,w,d as n,t as f}from"./index.36e94847.js";const V={class:"h-screen"},B={class:"mt-8 md:mt-0 h-full text-gray-800"},M={class:"flex flex-col md:justify-center md:items-center h-full g-6"},F={key:0,class:"w-[400px] bg-green-100 rounded-lg py-5 px-6 text-base mb-4 text-green-700 inline-flex items-center",role:"alert"},N=e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"w-4 h-4 mr-2 fill-current",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"})],-1),R=n(" Successfully Updated "),U=[N,R],j={key:0,class:"w-[400px] bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 inline-flex items-center",role:"alert"},D=e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"times-circle",class:"w-4 h-4 mr-2 fill-current",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"})],-1),I={class:"w-full md:w-[400px] px-4 md:px-0"},T=e("h1",{class:"block text-center text-[2rem] font-semibold text-sky-500 mb-8"},"Recipe App",-1),q=e("h1",{class:"block text-center text-[1.7rem] mb-4"},"Change Password",-1),A=["onSubmit"],E={class:"mb-6"},G=e("label",{for:"",class:"block mb-2 text-sm"},"Password",-1),H={key:0,class:"block text-rose-500 capitalize mt-2"},J={class:"mb-6"},K=e("label",{for:"",class:"block mb-2 text-sm"},"Confirm Password",-1),O={key:0,class:"block text-rose-500 capitalize mt-2"},Q={class:"w-full text-center lg:text-left"},W={type:"submit",name:"submit",value:"Submit",class:"w-full inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"},X={key:0,class:"spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full text-green-500",role:"status"},Y=e("span",{class:"visually-hidden"},"Loading...",-1),Z=[Y],$={key:1},ee={class:"text-sm text-center font-semibold mt-2 pt-1 mb-0"},te=n("Login"),se=n(" or "),oe=n("Register"),ne={__name:"ChangePassword",setup(ae){const v=C(),y=S(),r=m([]),d=m(!1),u=m(),a=L({token:null,password:null,confirmation_password:null}),k=async()=>{a.token=v.params.token,d.value=!0,u.value=null;try{let l=await y.dispatch("passwordChange",a);l.status==200&&(u.value=l.status.data.message)}catch(l){r.value=l.response.data.errors}finally{d.value=!1}};return(l,i)=>{const b=z("router-link");return t(),s("section",V,[e("div",B,[e("div",M,[u.value?(t(),s("div",F,U)):c("",!0),(t(!0),s(p,null,_(r.value,o=>(t(),s("div",null,[o.message?(t(),s("div",j,[D,n(" "+f(o.message),1)])):c("",!0)]))),256)),e("div",I,[T,q,e("form",{onSubmit:P(k,["prevent"]),method:"post"},[e("div",E,[G,h(e("input",{"onUpdate:modelValue":i[0]||(i[0]=o=>a.password=o),name:"password",type:"password",class:"form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"exampleFormControlInput1",placeholder:"Password"},null,512),[[x,a.password]]),(t(!0),s(p,null,_(r.value,o=>(t(),s("div",null,[o.param=="password"?(t(),s("small",H,f(o.msg),1)):c("",!0)]))),256))]),e("div",J,[K,h(e("input",{"onUpdate:modelValue":i[1]||(i[1]=o=>a.confirmation_password=o),name:"confirmation_password",type:"password",class:"form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"exampleFormControlInput1",placeholder:"Confirmation Password"},null,512),[[x,a.confirmation_password]]),(t(!0),s(p,null,_(r.value,o=>(t(),s("div",null,[o.param=="confirmation_password"?(t(),s("small",O,f(o.msg),1)):c("",!0)]))),256))]),e("div",Q,[e("button",W,[d.value?(t(),s("div",X,Z)):(t(),s("label",$,"Submit"))]),e("p",ee,[g(b,{to:"/login",class:"text-sky-600 hover:text-sky-700 focus:text-sky-700 transition duration-200 ease-in-out"},{default:w(()=>[te]),_:1}),se,g(b,{to:"/register",class:"text-sky-600 hover:text-sky-700 focus:text-sky-700 transition duration-200 ease-in-out"},{default:w(()=>[oe]),_:1})])])],40,A)])])])])}}};export{ne as default};
