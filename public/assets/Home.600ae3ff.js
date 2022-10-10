import{o as s,c as t,F as p,d as y,e as C,r as U,b as c,a as h,w as g,f as _,t as x,n as V,g as j,u as q,h as o,i as k,j as B,k as w,l as L}from"./index.d2fa4dad.js";const N={class:"flex flex-col md:flex-row flex-wrap w-full gap-8 md:px-6 py-8"},A=C('<div class="w-full flex items-center px-4 py-2"><div class="rounded-full w-8 h-8 bg-skeleton" alt="Avatar"></div><div class="ml-2 w-32 p-3 bg-skeleton"></div><div class="w-4 h-4 bg-skeleton ml-auto"></div></div><div class="aspect-square"><div class="aspect-square bg-skeleton"></div></div><div class="w-full p-4"><div class="w-3/4 py-2 bg-skeleton"></div></div>',3),M=[A],F={__name:"RecipeSkeleton",props:{count:0},setup(e){return(d,a)=>(s(),t("div",N,[(s(!0),t(p,null,y(e.count,i=>(s(),t("div",{key:i,class:"recipe-item"},M))),128))]))}},z={class:"recipe-item item"},H={class:"w-full flex items-center px-4 py-3"},O=["src"],D=["src"],E=c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[c("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"})],-1),I=[E],T={class:"aspect-square"},G=["src"],J=["src"],K={class:"flex items-center p-4"},P={__name:"Recipe",props:{recipe:Object,authUser:Object},emits:["handleSaveRecipe"],setup(e,{emit:d}){const a=e,i=()=>{d("handleSaveRecipe",a.recipe._id)};return(l,n)=>{const u=U("router-link");return s(),t("div",z,[c("div",H,[e.recipe.user.image?(s(),t("img",{key:0,src:e.recipe.user.image,class:"rounded-full w-8 border",alt:"Avatar"},null,8,O)):(s(),t("img",{key:1,src:l.$defaultAvatar,class:"rounded-full w-8 border",alt:"Avatar"},null,8,D)),h(u,{to:{name:"user",params:{id:e.recipe.user._id}},class:"ml-2 text-sm font-semibold text-gray-600 hover:underline"},{default:g(()=>[_(x(e.recipe.user.name),1)]),_:1},8,["to"]),e.authUser._id!=e.recipe.user._id?(s(),t("span",{key:2,onClick:n[0]||(n[0]=v=>i()),class:V(["ml-auto hover:text-sky-500",{"text-sky-500":e.recipe.isSaved}])},I,2)):j("",!0)]),c("div",T,[e.recipe.image?(s(),t("img",{key:0,class:"aspect-square",src:e.recipe.image,alt:"recipe-image"},null,8,G)):(s(),t("img",{key:1,class:"aspect-square",src:l.$defaultRecipeImage,alt:"recipe-image"},null,8,J))]),c("div",K,[h(u,{to:{name:"recipe",params:{id:e.recipe._id}},class:"block text-sm text-gray-700 font-semibold mb-2 hover:text-sky-500"},{default:g(()=>[_(x(e.recipe.name),1)]),_:1},8,["to"])])])}}},Q={key:1,class:"w-full"},W={class:"wrapper-1 flex flex-col md:flex-row flex-wrap w-full gap-8 md:px-6 py-8"},Z={__name:"Home",setup(e,{expose:d}){const a=q(),i=o(!1),l=o([]);let n=o(null);d({recipeComponent:n});const u=async()=>{try{i.value=!0,await a.dispatch("getRecipes"),l.value=[...l.value,...m.value]}catch(r){console.log(r)}finally{i.value=!1}},v=async r=>{a.dispatch("saveRecipe",r)},b=k(()=>a.getters.authUser);let m=k(()=>a.getters.recipes.map(r=>(r.isSaved=r.saved.includes(a.getters.authUser._id),r)));const f=o(0),R=o(9),S=async()=>{f.value+=R.value,await a.dispatch("getRecipes",f.value),l.value=[...l.value,...m.value]};return B(u()),(r,X)=>(s(),t(p,null,[c("div",{ref_key:"recipeComponent",ref:n,class:"relative flex flex-col lg:flex-row w-full"},[i.value?(s(),w(F,{key:0,count:6})):(s(),t("div",Q,[c("div",W,[(s(!0),t(p,null,y(l.value,$=>(s(),w(P,{class:"item",recipe:$,authUser:L(b),onHandleSaveRecipe:v},null,8,["recipe","authUser"]))),256))])]))],512),c("div",{class:"flex items-center justify-center"},[c("button",{class:"btn text-center",onClick:S},"Load More")])],64))}};export{Z as default};