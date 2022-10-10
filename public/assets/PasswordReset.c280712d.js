import{f as x,g as d,v as g,r as v,o as s,c as o,b as e,d as l,t as _,e as w,x as y,y as k,z as S,F as C,j as L,a as h,w as p}from"./index.36e94847.js";const R={class:"h-screen"},V={class:"mt-8 md:mt-0 md:px-6 h-full text-gray-800"},z={class:"flex flex-col md:justify-center md:items-center h-full g-6"},B={key:0,class:"md:w-[400px] md:mx-auto bg-green-100 rounded-lg py-5 px-6 text-base mb-4 text-green-700 inline-flex items-center w-full",role:"alert"},E=e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"w-4 h-4 mr-2 fill-current",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"})],-1),M={class:"w-full md:w-[400px] px-8 md:px-0"},N=e("h1",{class:"block text-center text-[2rem] font-semibold text-sky-500 mb-8"},"Recipe App",-1),F=e("h1",{class:"block text-center text-[1.7rem] mb-4"},"Reset Password",-1),j=e("p",{class:"mb-4 text-sm"},"Enter your email address below and we'll send you a link to reset your password.",-1),D=["onSubmit"],P={class:"mb-6"},T=e("label",{for:"",class:"block mb-2 text-sm"},"Email",-1),A={class:"block text-rose-500 capitalize mt-2"},I={class:"w-full text-center lg:text-left"},U={type:"submit",name:"submit",value:"Submit",class:"w-full inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"},q={key:0,class:"spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full text-green-500",role:"status"},G=e("span",{class:"visually-hidden"},"Loading...",-1),H=[G],J={key:1},K={class:"text-sm text-center font-semibold mt-2 pt-1 mb-0"},O=l("Login"),Q=l(" or "),W=l("Register"),Z={__name:"PasswordReset",setup(X){const b=x(),n=d(),r=d(!1),i=d([]),t=g({state:!1,message:null}),f=async()=>{r.value=!0,i.value=[],t.state=!1,t.message=null;try{const a=await b.dispatch("passwordReset",{email:n.value});a.status===200&&(t.state=!0,t.message=a.data.message)}catch(a){i.value=a.response.data.errors}finally{r.value=!1}};return(a,u)=>{const m=v("router-link");return s(),o("section",R,[e("div",V,[e("div",z,[t.state?(s(),o("div",B,[E,l(" "+_(t.message),1)])):w("",!0),e("div",M,[N,F,j,e("form",{onSubmit:y(f,["prevent"]),method:"post"},[e("div",P,[T,k(e("input",{"onUpdate:modelValue":u[0]||(u[0]=c=>n.value=c),name:"email",type:"text",class:"form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"exampleFormControlInput1",placeholder:"Email address"},null,512),[[S,n.value]]),(s(!0),o(C,null,L(i.value,c=>(s(),o("div",null,[e("small",A,_(c.msg),1)]))),256))]),e("div",I,[e("button",U,[r.value?(s(),o("div",q,H)):(s(),o("label",J,"Submit"))]),e("p",K,[h(m,{to:"/login",class:"text-sky-600 hover:text-sky-700 focus:text-sky-700 transition duration-200 ease-in-out"},{default:p(()=>[O]),_:1}),Q,h(m,{to:"/register",class:"text-sky-600 hover:text-sky-700 focus:text-sky-700 transition duration-200 ease-in-out"},{default:p(()=>[W]),_:1})])])],40,D)])])])])}}};export{Z as default};
