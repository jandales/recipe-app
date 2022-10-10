import{_ as E,o as e,c as t,j as G,r as I,m as u,b as s,t as k,g as v,l as _,h as g,p as A,u as S,s as M,w as V,e as R,a as p,d as f,F as x,f as b,i as N,k as z,E as J,G as P,H as W,z as K,I as Q,v as X,J as Y,S as U}from"./index.17f1bc14.js";import{h as Z}from"./handleImage.9346fc3e.js";import{_ as D,S as F}from"./Spinner.4d117cec.js";const ee={},te={class:"w-full mx-auto lg:max-w-xs lg:mx-0 p-4 lg:bg-white rounded-md"},se=G('<div class="w-full flex flex-col items-center justify-center"><div class="rounded-full w-24 h-24 aspect-square md:w-28 md:h-28 bg-skeleton" alt="Avatar"></div><label class="block w-[200px] py-4 text-[1.5rem] mt-4 mb-4 bg-skeleton"></label><div class="w-[100px] px-6 py-3 text-center text-sm bg-gray-200 rounded-sm"></div></div><ul class="flex justify-center gap-8 mt-4 mb-4"><li class="text-base py-2 bg-skeleton w-[100px]"><span class="font-semibold"></span></li><li class="text-base py-2 bg-skeleton w-[100px]"><span class="font-semibold"></span></li></ul><p class="block w-full py-2 text-center text-sm mb-4 bg-skeleton"></p>',3),le=[se];function oe(c,o){return e(),t("div",te,le)}var ae=E(ee,[["render",oe]]);const ce={class:"w-full flex flex-col items-center justify-center"},re=["src"],ne=["src"],ie={class:"block text-[1.5rem] mt-4 mb-4"},ue=A("Edit Profile"),de={__name:"BigAvatar",props:{user:Object,isAuth:Boolean},setup(c){return(o,r)=>{const a=I("router-link");return e(),t("div",ce,[c.user.image?(e(),t("img",{key:0,src:u(Z)(c.user),class:"rounded-full w-24 h-24 aspect-square md:w-28 md:h-28 border-sky-700",alt:"Avatar"},null,8,re)):(e(),t("img",{key:1,src:o.$defaultAvatar,class:"rounded-full w-24 h-24 aspect-square md:w-28 md:h-28 border-sky-700",alt:"Avatar"},null,8,ne)),s("label",ie,k(c.user.name),1),c.isAuth?(e(),v(a,{key:2,to:{name:"account.edit",params:{id:c.user._id}},class:"block px-3 py-2 w-40 text-center text-sm bg-white rounded-md border hover:border-blue-500 hover:text-white hover:bg-blue-500"},{default:_(()=>[ue]),_:1},8,["to"])):g("",!0)])}}},_e={class:"w-full mx-auto h-fit lg:max-w-xs lg:mx-0 p-4 lg:bg-white rounded-md"},pe={class:"flex justify-center gap-8 mt-4 mb-4"},me={class:"text-base"},he={class:"font-semibold"},ve=A(" Recipes"),fe={key:0,class:"text-base text-sx"},ge={class:"font-semibold"},xe=A(" Saved Collection"),we={class:"block text-center text-sm mb-4"},ke={__name:"UserProfile",async setup(c){let o,r;const a=S(),d=M(),n=async()=>{try{await a.dispatch("getUserInfo",d.params.id)}catch(h){console.log(h)}};[o,r]=V(()=>n()),await o,r();const i=R(()=>a.getters.authUser),l=R(()=>a.getters.user),m=R(()=>i.value._id==l.value._id);return(h,w)=>(e(),t("div",_e,[p(de,{user:u(l),isAuth:u(m)},null,8,["user","isAuth"]),s("ul",pe,[s("li",me,[s("span",he,k(u(l).recipes_count),1),ve]),u(m)?(e(),t("li",fe,[s("span",ge,k(u(l).recipes_saved_count),1),xe])):g("",!0)]),s("p",we,k(u(l).bio),1)]))}},be={class:"relative w-[calc(((100%_+_1rem)_/_2)_-_1rem)] md:w-[calc(((100%_+_1rem)_/_3)_-_1rem)] md:rounded-lg md:shadow-lg md:overflow-hidden md:border bg-white"},ye={class:"aspect-square md:aspect-video bg-skeleton"},$e=["src"],Ce=["src"],Re={class:"px-4 py-2"},O={__name:"Recipe",props:{recipe:Object},setup(c){return(o,r)=>{const a=I("router-link");return e(),t("div",be,[s("div",ye,[c.recipe.image?(e(),t("img",{key:0,class:"aspect-square md:aspect-video",src:o.$baseUrl+c.recipe.image,alt:""},null,8,$e)):(e(),t("img",{key:1,class:"aspect-video",src:o.$defaultRecipeImage,alt:""},null,8,Ce))]),s("div",Re,[p(a,{to:{name:"recipe",params:{id:c.recipe._id}},class:"text-gray-900 block text-xs font-medium"},{default:_(()=>[A(k(c.recipe.name),1)]),_:1},8,["to"])])])}}},je={class:"w-full flex flex-wrap gap-4 px-4 md:px-0"},Ae={key:0,class:"w-full flex flex-col justify-center items-center mt-8"},Se=s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-24 h-24 text-gray-500 mb-8"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"})],-1),Le=s("h1",{class:"text-lg block text-center text-gray-500"},"Upload your Recipe",-1),Ue=[Se,Le],Me={__name:"UserRecipeList",async setup(c){let o,r;const a=S(),d=M(),n=N(),{$perpage:i}=n.appContext.config.globalProperties,l=f([]),m=f(0),h=f(!1),w=f(0),y=async(j=0)=>{await a.dispatch("getUserRecipes",{id:d.params.id,page:j}),l.value=[...l.value,...$.value],w.value=$.value.length},$=R(()=>a.getters.recipes),L=async()=>{w.value<i||(m.value+=i,h.value=!0,await y(m.value),h.value=!1)};return[o,r]=V(()=>y()),await o,r(),(j,B)=>(e(),t(x,null,[s("div",je,[(e(!0),t(x,null,b(l.value,C=>(e(),v(O,{recipe:C,key:C._id},null,8,["recipe"]))),128)),p(D,{onHandleLoadMoreRecipe:L})]),l.value&&l.value.length==0?(e(),t("div",Ae,Ue)):g("",!0),h.value?(e(),v(F,{key:1})):g("",!0)],64))}},Ve={key:0,class:"w-full flex flex-col justify-center items-center mt-8"},ze=s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-24 h-24 text-gray-500"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"})],-1),Be=s("h1",{class:"text-lg block text-center text-gray-500 mt-4"},"Private",-1),He=[ze,Be],Te={key:1,class:"w-full flex flex-wrap gap-4"},qe={key:2,class:"w-full flex flex-col justify-center items-center mt-8"},Ee=s("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-24 h-24 text-gray-500 mb-8"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"})],-1),Ie=s("h1",{class:"text-lg block text-center text-gray-500"},"Add Recipe in your Collection",-1),Ne=[Ee,Ie],Pe={__name:"UserRecipeSavedCollection",async setup(c){let o,r;const a=S(),d=M(),n=N(),{$perpage:i}=n.appContext.config.globalProperties,l=f([]),m=f(0),h=f(!1),w=f(0),y=async(C=0)=>{await a.dispatch("getSavedRecipes",{id:d.params.id,page:C}),l.value=[...l.value,...$.value],w.value=$.value},$=R(()=>a.getters.savedRecipes),L=async()=>{w.value<i||(m.value+=i,h.value=!0,await y(m.value),h.value=!1)},j=d.params.id,B=z("isAuthUser");return[o,r]=V(()=>y()),await o,r(),(C,dt)=>(e(),t(x,null,[u(B)(u(j))?(e(),t("div",Te,[(e(!0),t(x,null,b(l.value,H=>(e(),v(O,{recipe:H,key:H._id},null,8,["recipe"]))),128)),p(D,{onHandleLoadMoreRecipe:L})])):(e(),t("div",Ve,He)),l.value&&l.value.length==0?(e(),t("div",qe,Ne)):g("",!0),h.value?(e(),v(F,{key:3})):g("",!0)],64))}},De={class:"w-full flex gap-8 mb-8 py-2 border-t border-b lg:border-t-0"},Fe={class:"w-full hidden lg:flex justify-between gap-4 px-4"},Oe=["onClick"],Ge={class:"w-full flex lg:hidden justify-between gap-4 px-4"},Je=["onClick"],We={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},Ke=s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"},null,-1),Qe=[Ke],Xe={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},Ye=s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"},null,-1),Ze=[Ye],et={__name:"RecipeWrapper",setup(c){var a,d;const o=f();o.value=(d=(a=J())==null?void 0:a.default)==null?void 0:d.call(a).map(n=>{var i;return(i=n==null?void 0:n.props)==null?void 0:i.title});const r=f(o.value[0]);return W("selectedTitle",r),(n,i)=>(e(),t("div",null,[s("div",De,[s("ul",Fe,[(e(!0),t(x,null,b(o.value,l=>(e(),t("li",{key:l,onClick:m=>r.value=l,class:"w-1/2 flex justify-center cursor-pointer"},k(l),9,Oe))),128))]),s("ul",Ge,[(e(!0),t(x,null,b(o.value,l=>(e(),t("li",{key:l,onClick:m=>r.value=l,class:"w-1/2 flex justify-center cursor-pointer"},[l=="Recipes"?(e(),t("svg",We,Qe)):g("",!0),l=="Saved Collection"?(e(),t("svg",Xe,Ze)):g("",!0)],8,Je))),128))])]),P(n.$slots,"default")]))}},T={__name:"Tab",props:{title:String},setup(c){const o=z("selectedTitle");return(r,a)=>K((e(),t("div",null,[P(r.$slots,"default")],512)),[[Q,c.title==u(o)]])}},tt={},st={class:"relative w-[calc(((100%_+_1rem)_/_2)_-_1rem)] md:w-[calc(((100%_+_1rem)_/_3)_-_1rem)] md:rounded-lg md:shadow-lg md:overflow-hidden md:border bg-white"},lt=s("div",{class:"aspect-square md:aspect-video bg-skeleton",alt:""},null,-1),ot=s("div",{class:"px-4 py-2"},[s("div",{class:"w-full py-2 bg-skeleton"})],-1),at=[lt,ot];function ct(c,o){return e(),t("div",st,at)}var q=E(tt,[["render",ct]]);const rt={class:"w-full flex flex-col lg:flex-row gap-8 mt-8"},nt={class:"w-full max-w-2xl"},it={class:"flex flex-wrap gap-4"},ut={class:"flex flex-wrap gap-4"},ht={__name:"UserRecipe",setup(c){X();const o=z("perpage"),r=S();return Y((a,d,n)=>{const i=r.getters.authUser;if(a.params.id==i._id){location.href=`/user/${i._id}`;return}}),(a,d)=>(e(),t("div",rt,[(e(),v(U,null,{default:_(()=>[p(ke)]),fallback:_(()=>[p(ae)]),_:1})),s("div",nt,[p(et,null,{default:_(()=>[p(T,{title:"Recipes"},{default:_(()=>[(e(),v(U,null,{default:_(()=>[p(Me)]),fallback:_(()=>[s("div",it,[(e(!0),t(x,null,b(u(o),n=>(e(),v(q,{key:n}))),128))])]),_:1}))]),_:1}),p(T,{title:"Saved Collection"},{default:_(()=>[(e(),v(U,null,{default:_(()=>[p(Pe)]),fallback:_(()=>[s("div",ut,[(e(!0),t(x,null,b(u(o),n=>(e(),v(q,{key:n}))),128))])]),_:1}))]),_:1})]),_:1})])]))}};export{ht as default};
