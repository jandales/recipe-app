import{_ as p}from"./Recipe.d4e28b77.js";import{P as h}from"./PageLoading.0c9f286b.js";import{u as y,s as k,i as w,d as v,e as x,n as R,D as B,o as s,c as a,m as n,F as C,f as F,h as d,g as f}from"./index.1d546c79.js";import"./handleImage.811fa4e9.js";const L={class:"relative w-full"},P={key:0,class:"w-full"},S={key:0,class:"mt-8 flex flex-col md:flex-row flex-wrap w-full gap-4 md:gap-8"},U={key:1,class:"w-full text-center"},N={__name:"Search",setup($){const r=y(),c=k(),m=w(),o=v(!1),{$defaultRecipeImage:_,$baseUrl:g}=m.appContext.config.globalProperties,u=async()=>{o.value=!0;let e=c.query.keyword;try{await r.dispatch("searchRecipes",e)}catch(t){console.log(t)}finally{o.value=!1}};let l=x(()=>r.getters.recipes.map(e=>{const t=r.getters.authUser._id;return e.isSaved=e.saved.includes(t),e.isAuthUserRecipe=t==e.user._id,e.image?e.image=g+e.image:e.image=_,e}));return R(u),B(()=>c.query.keyword,u),(e,t)=>(s(),a("div",L,[o.value?(s(),f(h,{key:1})):(s(),a("div",P,[n(l)?(s(),a("div",S,[(s(!0),a(C,null,F(n(l),i=>(s(),f(p,{recipe:i,key:i._id},null,8,["recipe"]))),128))])):d("",!0),n(l).length==0?(s(),a("div",U," No result Found ")):d("",!0)]))]))}};export{N as default};
