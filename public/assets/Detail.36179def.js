import{q as S,f as $,s as A,g as I,h as d,p as N,r as f,o as l,k as U,c as o,b as e,u as s,t as r,a as g,w as v,n as j,e as _,F as k,j as x,d as w}from"./index.36e94847.js";import{h as E}from"./handleImage.61cb1b02.js";const z={key:1,class:"w-full flex flex-col md:flex-row md:mt-8"},F={class:"max-w-2xl"},M={key:0,class:"w-full px-4 md:px-0"},P={class:"w-full mb-4"},q={class:"text-[2rem]"},T={class:"flex items-center py-4"},G=["src"],H=["src"],J={class:"flex w-full"},K={class:"ml-2"},O={class:"block text-sm"},Q=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"},null,-1),W=[Q],X={key:1,class:"ml-auto"},Y=w("Edit "),Z={class:"w-full mb-4"},ee=["src"],se=["src"],te={class:"w-full mb-4"},le=e("h1",{class:"text-[2rem] mb-2"},"Ingredients",-1),oe={class:"flex items-center gap-2 mb-2"},ae=e("span",{class:"flex items-center justify-center text-sm w-2 h-2 rounded-full bg-sky-500 text-white"},null,-1),ne={class:"w-full mb-4"},re=e("h1",{class:"text-[2rem] mb-2"},"Instructions",-1),ce={class:"mb-2"},ie={class:"block mb-2 font-semibold text-sky-500"},de={class:"text-gray-700"},ue=e("div",{class:"hidden w-full max-w-xs ml-10 mt-26 lg:block"},null,-1),pe={__name:"Detail",setup(_e){const y=S(),n=$(),m=A(),u=I(!1),b=async()=>{try{u.value=!0,await n.dispatch("getRecipe",y.params.id)}catch(a){console.log(a)}finally{u.value=!1}},R=async()=>{try{await n.dispatch("destroyRecipe",t.value._id),m.push({name:"home"})}catch(a){console.log(a)}},C=async()=>{try{await n.dispatch("saveRecipe",t.value._id)}catch(a){a.response.status==401&&m.push({name:"login"})}},h=d(()=>n.getters.authUser),t=d(()=>n.getters.recipe),V=d(()=>n.getters.recipe.saved.includes(n.getters.authUser._id)),B=d(()=>h.value._id==t.value.user._id);return N(b()),(a,i)=>{const D=f("PageLoading"),p=f("router-link");return u.value?(l(),U(D,{key:0})):(l(),o("div",z,[e("div",F,[s(t)?(l(),o("div",M,[e("div",P,[e("h1",q,r(s(t).name),1),e("div",T,[s(t).user.image?(l(),o("img",{key:0,src:s(E)(s(t).user),class:"rounded-full h-12 w-12 border",alt:"Avatar"},null,8,G)):(l(),o("img",{key:1,src:a.$defaultAvatar,class:"rounded-full h-12 w-12 border",alt:"Avatar"},null,8,H)),e("div",J,[e("div",K,[g(p,{to:{name:"user",params:{id:s(t).user._id}},class:"block hover:underline text-sm font-medium text-sky-500"},{default:v(()=>[w(r(s(t).user.name),1)]),_:1},8,["to"]),e("span",O,r(s(t).createdAt),1)]),s(h)._id!=s(t).user._id?(l(),o("span",{key:0,onClick:i[0]||(i[0]=c=>C()),class:"ml-auto hover:text-sky-500"},[(l(),o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:j(["w-6 h-6",{"text-sky-500":s(V)}])},W,2))])):_("",!0),s(B)?(l(),o("div",X,[g(p,{to:{name:"edit",params:{id:s(t)._id}},class:"underline cursor-pointer hover:text-sky-500"},{default:v(()=>[Y]),_:1},8,["to"]),e("span",{onClick:i[1]||(i[1]=c=>R()),class:"underline ml-2 cursor-pointer hover:text-rose-500"},"Delete")])):_("",!0)])]),e("p",null,r(s(t).description),1)]),e("div",Z,[s(t).image?(l(),o("img",{key:0,src:a.$baseUrl+s(t).image,class:"w-full h-full",alt:"img"},null,8,ee)):(l(),o("img",{key:1,src:a.$defaultRecipeImage,class:"w-full h-full"},null,8,se))]),e("div",te,[le,e("ul",null,[(l(!0),o(k,null,x(s(t).ingredients,c=>(l(),o("li",oe,[ae,e("label",null,r(c),1)]))),256))])]),e("div",ne,[re,e("ul",null,[(l(!0),o(k,null,x(s(t).instructions,(c,L)=>(l(),o("li",ce,[e("label",ie," Step "+r(L+1),1),e("p",de,r(c),1)]))),256))])])])):_("",!0)]),ue]))}}};export{pe as default};