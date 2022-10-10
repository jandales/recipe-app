import{u as L,d as r,e as N,w as B,o as s,c as n,b as i,F as p,f as k,g as _,a as v,h as V,i as A,j as F,k as H,l as w,S as U,m as j}from"./index.1d546c79.js";import{_ as E,S as I}from"./Spinner.ab44b542.js";import{_ as M}from"./Recipe.d4e28b77.js";import"./handleImage.811fa4e9.js";const q={class:"flex flex-wrap w-full gap-4 px-4 md:gap-8"},P={__name:"ListRecipe",async setup(u){let t,c;const a=L(),y=A(),d=r([]),m=r(0),o=r(!1),f=r(0),{$perpage:g,$defaultRecipeImage:R,$baseUrl:S}=y.appContext.config.globalProperties,h=async(e=0)=>{try{await a.dispatch("getRecipes",e),d.value=[...d.value,...x.value],f.value=x.value.length}catch(l){console.log(l)}};let x=N(()=>a.getters.recipes.map(e=>{const l=a.getters.authUser._id;return e.isSaved=e.saved.includes(l),e.isAuthUserRecipe=l==e.user._id,e.image?e.image=S+e.image:e.image=R,e}));const $=async e=>{a.dispatch("saveRecipe",e)},b=async()=>{if(f.value<g)return o.value=!1;o.value=!0,m.value+=g,await h(m.value),o.value=!1};return[t,c]=B(()=>h()),await t,c(),(e,l)=>(s(),n(p,null,[i("div",q,[(s(!0),n(p,null,k(d.value,C=>(s(),_(M,{recipe:C,onHandleSaveRecipe:$},null,8,["recipe"]))),256)),v(E,{onHandleLoadMoreRecipe:b})]),o.value?(s(),_(I,{key:0})):V("",!0)],64))}},T={class:"flex flex-wrap w-full gap-4 px-4 md:gap-8"},z=F('<div class="w-full hidden md:flex items-center px-4 py-2"><div class="rounded-full w-8 h-8 bg-skeleton" alt="Avatar"></div><div class="ml-2 w-32 p-3 bg-skeleton"></div><div class="w-4 h-4 bg-skeleton ml-auto"></div></div><div class="aspect-square md:aspect-video bg-skeleton"></div><div class="w-full px-4 py-2"><div class="w-3/4 py-2 bg-skeleton"></div></div>',3),D=[z],G={__name:"RecipeSkeleton",props:{count:0},setup(u){return(t,c)=>(s(),n("div",T,[(s(!0),n(p,null,k(u.count,a=>(s(),n("div",{key:a,class:"recipe-item"},D))),128))]))}},J={ref:"recipeComponent",class:"relative flex flex-col lg:flex-row w-full"},K={class:"mt-8"},O={class:"mt-8"},Z={__name:"Home",setup(u){const t=H("perpage");return(c,a)=>(s(),_(U,null,{default:w(()=>[i("div",J,[i("div",K,[v(P)])],512)]),fallback:w(()=>[i("div",O,[v(G,{count:j(t)},null,8,["count"])])]),_:1}))}};export{Z as default};
