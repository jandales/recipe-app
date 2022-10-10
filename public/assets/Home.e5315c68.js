import{_ as L}from"./Observer.79986f65.js";import{o as s,c as t,F as f,d as b,e as U,f as o,r as V,b as l,a as v,w as g,g as _,t as k,n as N,h as R,u as j,i as x,j as q,k as w,l as B}from"./index.db8df400.js";const A={class:"flex flex-col md:flex-row flex-wrap w-full gap-4 md:gap-8 py-8"},M=U('<div class="w-full flex items-center px-4 py-2"><div class="rounded-full w-8 h-8 bg-skeleton" alt="Avatar"></div><div class="ml-2 w-32 p-3 bg-skeleton"></div><div class="w-4 h-4 bg-skeleton ml-auto"></div></div><div class="aspect-square"><div class="aspect-square bg-skeleton"></div></div><div class="w-full p-4"><div class="w-3/4 py-2 bg-skeleton"></div></div>',3),F=[M],y={__name:"RecipeSkeleton",props:{count:0},setup(e){return(a,c)=>(s(),t("div",A,[(s(!0),t(f,null,b(e.count,i=>(s(),t("div",{key:i,class:"recipe-item"},F))),128))]))}},H={class:"w-full flex items-center px-4 py-3"},z=["src"],O=["src"],T=l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[l("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"})],-1),D=[T],E={class:"aspect-square"},I=["src"],G=["src"],J={class:"flex items-center p-4"},K={__name:"Recipe",props:{recipe:Object,authUser:Object},emits:["handleSaveRecipe"],setup(e,{emit:a}){const c=e,i=o(null),d=()=>{a("handleSaveRecipe",c.recipe._id)};return(u,n)=>{const p=V("router-link");return s(),t("div",{ref_key:"item",ref:i,class:"recipe-item"},[l("div",H,[e.recipe.user.image?(s(),t("img",{key:0,src:e.recipe.user.image,class:"rounded-full w-8 border",alt:"Avatar"},null,8,z)):(s(),t("img",{key:1,src:u.$defaultAvatar,class:"rounded-full w-8 border",alt:"Avatar"},null,8,O)),v(p,{to:{name:"user",params:{id:e.recipe.user._id}},class:"ml-2 text-sm font-semibold text-gray-600 hover:underline"},{default:g(()=>[_(k(e.recipe.user.name),1)]),_:1},8,["to"]),e.authUser._id!=e.recipe.user._id?(s(),t("span",{key:2,onClick:n[0]||(n[0]=h=>d()),class:N(["ml-auto hover:text-sky-500",{"text-sky-500":e.recipe.isSaved}])},D,2)):R("",!0)]),l("div",E,[e.recipe.image?(s(),t("img",{key:0,class:"aspect-square",src:e.recipe.image,alt:"recipe-image"},null,8,I)):(s(),t("img",{key:1,class:"aspect-square",src:u.$defaultRecipeImage,alt:"recipe-image"},null,8,G))]),l("div",J,[v(p,{to:{name:"recipe",params:{id:e.recipe._id}},class:"block text-sm text-gray-700 font-semibold mb-2 hover:text-sky-500"},{default:g(()=>[_(k(e.recipe.name),1)]),_:1},8,["to"])])],512)}}},P={ref:"recipeComponent",class:"relative flex flex-col lg:flex-row w-full"},Q={key:1,class:"w-full"},W={class:"wrapper-1 flex flex-col md:flex-row flex-wrap w-full gap-4 md:gap-8 py-8"},X={key:0,class:"flex flex-col items-center justify-center"},Y=l("div",{class:"spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-gray-300",role:"status"},[l("span",{class:"visually-hidden"},"Loading...")],-1),te={__name:"Home",setup(e){const a=j(),c=o([]),i=o(!1),d=o(0),u=o(3),n=o(!1),p=async()=>{try{i.value=!0,await a.dispatch("getRecipes"),c.value=[...c.value,...m.value]}catch(r){console.log(r)}finally{i.value=!1}},h=async r=>{a.dispatch("saveRecipe",r)},$=x(()=>a.getters.authUser);let m=x(()=>a.getters.recipes.map(r=>(r.isSaved=r.saved.includes(a.getters.authUser._id),r)));const S=async()=>{d.value+=u.value,!n.value&&(await a.dispatch("getRecipes",d.value),c.value=[...c.value,...m.value],n.value=m.value.length==0)};return q(p()),(r,Z)=>(s(),t(f,null,[l("div",P,[i.value?(s(),w(y,{key:0,count:6})):(s(),t("div",Q,[l("div",W,[(s(!0),t(f,null,b(c.value,C=>(s(),w(K,{recipe:C,authUser:B($),onHandleSaveRecipe:h},null,8,["recipe","authUser"]))),256)),v(L,{onHandleLoadMoreRecipe:S})])]))],512),n.value?R("",!0):(s(),t("div",X,[v(y,{count:3}),Y]))],64))}};export{te as default};