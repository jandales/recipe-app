import{l as j,u as N,m as S,d as $,f as u,e as A,r as f,o,i as E,c as a,h as t,b as e,t as r,a as v,w as g,n as I,k as _,F as w,g as y,j as k}from"./index.614d0cde.js";const U={key:1,class:"w-full"},z={key:0,class:"w-full p-4 md:p-0 md:w-3/4 md:mx-auto md:mt-8"},F={class:"w-full mb-4"},M={class:"text-[2rem]"},P={class:"flex items-center py-4"},T=["src"],q=["src"],G={class:"flex w-full"},H=e("span",{class:"ml-2 font-semibold"},"By:",-1),J=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"},null,-1),K=[J],O={key:1,class:"ml-auto"},Q=k("Edit "),W={class:"w-full mb-4"},X=["src"],Y=["src"],Z={class:"w-full mb-4"},ee=e("h1",{class:"text-[2rem] mb-2"},"Ingredients",-1),se={class:"flex items-center gap-4 mb-2"},te=e("span",{class:"flex items-center justify-center text-sm w-2 h-2 rounded-full bg-sky-500 text-white"},null,-1),oe={class:"w-full mb-4"},ae=e("h1",{class:"text-[2rem] mb-2"},"Instructions",-1),le={class:"flex items-center gap-4 mb-2"},ne={class:"flex items-center justify-center text-sm w-6 h-6 rounded-full bg-sky-500 text-white"},re={for:""},ue={__name:"Detail",setup(ce){const x=j(),n=N(),m=S(),d=$(!1),b=async()=>{try{d.value=!0,await n.dispatch("getRecipe",x.params.id)}catch(l){console.log(l)}finally{d.value=!1}},R=async()=>{try{await n.dispatch("destroyRecipe",s.value._id),m.push({name:"home"})}catch(l){console.log(l)}},C=async()=>{try{await n.dispatch("saveRecipe",s.value._id)}catch(l){l.response.status==401&&m.push({name:"login"})}},h=u(()=>n.getters.authUser),s=u(()=>n.getters.recipe),B=u(()=>n.getters.recipe.saved.includes(n.getters.authUser._id)),V=u(()=>h.value._id==s.value.user._id);return A(b()),(l,i)=>{const D=f("PageLoading"),p=f("router-link");return d.value?(o(),E(D,{key:0})):(o(),a("div",U,[t(s)?(o(),a("div",z,[e("div",F,[e("h1",M,r(t(s).name),1),e("div",P,[t(s).user.avatar?(o(),a("img",{key:0,src:t(s).user.image,class:"rounded-full w-12 md:w-8",alt:"Avatar"},null,8,T)):(o(),a("img",{key:1,src:l.$defaultAvatar,class:"rounded-full w-12 md:w-8",alt:"Avatar"},null,8,q)),e("div",G,[H,v(p,{to:{name:"user",params:{id:t(s).user._id}},class:"ml-2 hover:underline hover:text-sky-500"},{default:g(()=>[k(r(t(s).user.name),1)]),_:1},8,["to"]),t(h)._id!=t(s).user._id?(o(),a("span",{key:0,onClick:i[0]||(i[0]=c=>C()),class:"ml-auto hover:text-sky-500"},[(o(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:I(["w-6 h-6",{"text-sky-500":t(B)}])},K,2))])):_("",!0),t(V)?(o(),a("div",O,[v(p,{to:{name:"edit",params:{id:t(s)._id}},class:"underline cursor-pointer hover:text-sky-500"},{default:g(()=>[Q]),_:1},8,["to"]),e("span",{onClick:i[1]||(i[1]=c=>R()),class:"underline ml-2 cursor-pointer hover:text-rose-500"},"Delete")])):_("",!0)])]),e("p",null,r(t(s).description),1)]),e("div",W,[t(s).image?(o(),a("img",{key:0,src:t(s).image,class:"w-full",alt:"",srcset:""},null,8,X)):(o(),a("img",{key:1,src:l.$defaultRecipeImage,class:"w-full"},null,8,Y))]),e("div",Z,[ee,e("ul",null,[(o(!0),a(w,null,y(t(s).ingredients,c=>(o(),a("li",se,[te,e("label",null,r(c),1)]))),256))])]),e("div",oe,[ae,e("ul",null,[(o(!0),a(w,null,y(t(s).instructions,(c,L)=>(o(),a("li",le,[e("span",ne,r(L+1),1),e("label",re,r(c),1)]))),256))])])])):_("",!0)]))}}};export{ue as default};