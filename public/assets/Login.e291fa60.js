import{u as m,r as p,l as f,a as b,b as g,c as h,f as e,m as x,p as l,v as n,g as w,w as _,z as v,h as y}from"./index.8d985fa2.js";const k={class:"h-screen"},C={class:"mt-8 md:mt-0 h-full text-gray-800"},S={class:"flex md:justify-center md:items-center h-full g-6"},V={class:"min-w-[400px] px-8 md:px-0"},j=e("h1",{class:"block text-center text-[2rem] font-semibold text-sky-500 mb-8"},"Recipe App",-1),B=["onSubmit"],N={class:"mb-6"},F={class:"mb-6"},L={class:"flex justify-between items-center mb-6"},M=y("Forgot password?"),U=v('<div class="w-full text-center lg:text-left"><input type="submit" name="submit" value="Login" class="w-full inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"><p class="text-sm text-center font-semibold mt-4 pt-1 mb-4"> Don&#39;t have an account? <a href="/register" class="text-sky-600 hover:text-sky-700 focus:text-sky-700 transition duration-200 ease-in-out">Register</a></p></div><div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"><p class="text-center font-semibold mx-4 mb-0">Or</p></div>',2),z=e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 488 512",class:"w-4 h-4"},[e("path",{fill:"currentColor",d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"})],-1),D=e("label",{class:"text-lg mb-0 mr-4"},"Sign in with Google",-1),E=[z,D],R={__name:"Login",setup(G){const i=m(),a=p([]),t=f({email:null,password:null}),c=async()=>{window.open("http://127.0.0.1:3001/api/auth/google","_self")},d=async()=>{try{a.value=[],await i.dispatch("login",t),location.reload()}catch(s){console.log(s.response),a.value=s.response.data.errors}};return(s,o)=>{const u=b("router-link");return g(),h("section",k,[e("div",C,[e("div",S,[e("div",V,[j,e("form",{onSubmit:x(d,["prevent"]),method:"post"},[e("div",N,[l(e("input",{"onUpdate:modelValue":o[0]||(o[0]=r=>t.email=r),name:"email",type:"text",class:"form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"exampleFormControlInput1",placeholder:"Email address"},null,512),[[n,t.email]])]),e("div",F,[l(e("input",{"onUpdate:modelValue":o[1]||(o[1]=r=>t.password=r),type:"password",name:"password",class:"form-control block w-full px-4 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",id:"exampleFormControlInput2",placeholder:"Password"},null,512),[[n,t.password]])]),e("div",L,[w(u,{to:"/account/password/reset",class:"text-gray-800"},{default:_(()=>[M]),_:1})]),U,e("div",{class:"flex flex-col items-center justify-center lg:justify-start"},[e("button",{onClick:c,type:"button","data-mdb-ripple":"true","data-mdb-ripple-color":"light",class:"w-full flex items-center justify-center gap-2 p-3 mb-4 border text-sky-500 hover:text-white text-center font-medium text-xs leading-tight rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"},E)])],40,B)])])])])}}};export{R as default};
