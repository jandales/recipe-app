import{_ as p}from"./Recipe.233c6e08.js";import{u as h,q as y,i as k,d as w,e as v,l as x,C as R,o as s,c as a,m as n,F as C,f as q,h as d,g as f,P as B}from"./index.16d2990d.js";import"./handleImage.224c27dd.js";const F={class:"relative w-full"},L={key:0,class:"w-full"},P={key:0,class:"mt-8 flex flex-col md:flex-row flex-wrap w-full gap-4 md:gap-8"},S={key:1,class:"w-full text-center"},I={__name:"Search",setup(U){const r=h(),c=y(),m=k(),o=w(!1),{$defaultRecipeImage:_,$baseUrl:g}=m.appContext.config.globalProperties,u=async()=>{o.value=!0;let e=c.query.keyword;try{await r.dispatch("searchRecipes",e)}catch(t){console.log(t)}finally{o.value=!1}};let l=v(()=>r.getters.recipes.map(e=>{const t=r.getters.authUser._id;return e.isSaved=e.saved.includes(t),e.isAuthUserRecipe=t==e.user._id,e.image?e.image=g+e.image:e.image=_,e}));return x(u),R(()=>c.query.keyword,u),(e,t)=>(s(),a("div",F,[o.value?(s(),f(B,{key:1})):(s(),a("div",L,[n(l)?(s(),a("div",P,[(s(!0),a(C,null,q(n(l),i=>(s(),f(p,{recipe:i,key:i._id},null,8,["recipe"]))),128))])):d("",!0),n(l).length==0?(s(),a("div",S," No result Found ")):d("",!0)]))]))}};export{I as default};
