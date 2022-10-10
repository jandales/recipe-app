import{h as D}from"./handleImage.c5dff1ba.js";import{r as U,o as s,c as t,u as m,b as r,t as x,l as S,w,h as b,g as j,_ as P,e as F,a as _,i as L,p as M,f as n,j as v,k as $,F as k,d as R,C as O,D as H,E as G,G as W,x as J,H as K}from"./index.d4576f62.js";import{_ as B}from"./Observer.2148c0c6.js";const Q={class:"w-full flex flex-col items-center justify-center"},X=["src"],Y=["src"],Z={class:"block text-[1.5rem] mt-4 mb-4"},ee=j("Edit Profile"),se={__name:"BigAvatar",props:{user:Object,isAuth:Boolean},setup(c){return(e,o)=>{const a=U("router-link");return s(),t("div",Q,[c.user.image?(s(),t("img",{key:0,src:m(D)(c.user),class:"rounded-full w-24 h-24 aspect-square md:w-28 md:h-28 border-sky-700",alt:"Avatar"},null,8,X)):(s(),t("img",{key:1,src:e.$defaultAvatar,class:"rounded-full w-24 h-24 aspect-square md:w-28 md:h-28 border-sky-700",alt:"Avatar"},null,8,Y)),r("label",Z,x(c.user.name),1),c.isAuth?(s(),S(a,{key:2,to:{name:"account.edit",params:{id:c.user._id}},class:"block px-3 py-2 w-40 text-center text-sm bg-white rounded-md border hover:border-blue-500 hover:text-white hover:bg-blue-500"},{default:w(()=>[ee]),_:1},8,["to"])):b("",!0)])}}},te={},ae={class:"w-full mx-auto lg:max-w-xs lg:mx-0 p-4 lg:bg-white rounded-md"},le=F('<div class="w-full flex flex-col items-center justify-center"><div class="rounded-full w-24 h-24 aspect-square md:w-28 md:h-28 bg-skeleton" alt="Avatar"></div><label class="block w-[200px] py-4 text-[1.5rem] mt-4 mb-4 bg-skeleton"></label><div class="w-[100px] px-6 py-3 text-center text-sm bg-gray-200 rounded-sm"></div></div><ul class="flex justify-center gap-8 mt-4 mb-4"><li class="text-base py-2 bg-skeleton w-[100px]"><span class="font-semibold"></span></li><li class="text-base py-2 bg-skeleton w-[100px]"><span class="font-semibold"></span></li></ul><p class="block w-full py-2 text-center text-sm mb-4 bg-skeleton"></p>',3),ce=[le];function oe(c,e){return s(),t("div",ae,ce)}var re=P(te,[["render",oe]]);const ne={class:"relative w-full md:w-[calc(((100%_+_1rem)_/_3)_-_1rem)] md:rounded-lg md:shadow-lg md:overflow-hidden md:border bg-white"},ie=["src"],ue=["src"],de={class:"px-4 py-2"},z={__name:"Recipe",props:{recipe:Object},setup(c){return(e,o)=>{const a=U("router-link");return s(),t("div",ne,[c.recipe.image?(s(),t("img",{key:0,class:"aspect-video",src:e.$baseUrl+c.recipe.image,alt:""},null,8,ie)):(s(),t("img",{key:1,class:"aspect-video",src:e.$defaultRecipeImage,alt:""},null,8,ue)),r("div",de,[_(a,{to:{name:"recipe",params:{id:c.recipe._id}},class:"text-gray-900 block text-xs font-medium"},{default:w(()=>[j(x(c.recipe.name),1)]),_:1},8,["to"])])])}}},_e={class:"w-full flex flex-wrap gap-4"},pe={key:0,class:"w-full flex items-center justify-center mt-4"},me=r("div",{class:"spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-gray-300",role:"status"},[r("span",{class:"visually-hidden"},"Loading...")],-1),he=[me],ve={__name:"UserRecipeList",setup(c){const e=L(),o=M(),a=n([]),d=n(!1),i=async(p=0)=>{await e.dispatch("getUserRecipes",{id:o.params.id,page:p}),a.value=[...a.value,...u.value]},u=v(()=>e.getters.recipes),l=async()=>{};return $(i()),(p,h)=>(s(),t(k,null,[r("div",_e,[(s(!0),t(k,null,R(a.value,y=>(s(),S(z,{recipe:y,key:y._id},null,8,["recipe"]))),128)),_(B,{onHandleLoadMoreRecipe:l})]),d.value?(s(),t("div",pe,he)):b("",!0)],64))}},fe={class:"w-full flex flex-wrap gap-4"},ge={__name:"UserRecipeSavedCollection",setup(c){const e=L(),o=M(),a=n([]);n(!1);const d=async(l=0)=>{await e.dispatch("getSavedRecipes",{id:o.params.id,page:l}),a.value=[...a.value,...i.value]},i=v(()=>e.getters.savedRecipes),u=async()=>{};return $(d()),(l,p)=>(s(),t("div",fe,[(s(!0),t(k,null,R(a.value,h=>(s(),S(z,{recipe:h,key:h._id},null,8,["recipe"]))),128)),_(B,{onHandleLoadMoreRecipe:u})]))}},xe={class:"w-full flex gap-8 mb-8 py-2 border-t border-b lg:border-t-0"},we={class:"w-full hidden lg:flex justify-between gap-4 px-4"},be=["onClick"],ke={class:"w-full flex lg:hidden justify-between gap-4 px-4"},ye=["onClick"],$e={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},Re=r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"},null,-1),Se=[Re],je={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},Ce=r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"},null,-1),Le=[Ce],Me={__name:"RecipeWrapper",setup(c){var a,d;const e=n();e.value=(d=(a=O())==null?void 0:a.default)==null?void 0:d.call(a).map(i=>{var u;return(u=i==null?void 0:i.props)==null?void 0:u.title});const o=n(e.value[0]);return G("selectedTitle",o),(i,u)=>(s(),t("div",null,[r("div",xe,[r("ul",we,[(s(!0),t(k,null,R(e.value,l=>(s(),t("li",{key:l,onClick:p=>o.value=l,class:"w-1/2 flex justify-center cursor-pointer"},x(l),9,be))),128))]),r("ul",ke,[(s(!0),t(k,null,R(e.value,l=>(s(),t("li",{key:l,onClick:p=>o.value=l,class:"w-1/2 flex justify-center cursor-pointer"},[l=="Recipes"?(s(),t("svg",$e,Se)):b("",!0),l=="Saved Collection"?(s(),t("svg",je,Le)):b("",!0)],8,ye))),128))])]),H(i.$slots,"default")]))}},T={__name:"Tab",props:{title:String},setup(c){const e=W("selectedTitle");return(o,a)=>J((s(),t("div",null,[H(o.$slots,"default")],512)),[[K,c.title==m(e)]])}},Ve={class:"w-full flex flex-col lg:flex-row gap-8 mt-8"},Ae={key:1,class:"w-full mx-auto lg:max-w-xs lg:mx-0 p-4 lg:bg-white rounded-md"},Te={class:"flex justify-center gap-8 mt-4 mb-4"},Ue={class:"text-base"},He={class:"font-semibold"},Be=j(" Recipes"),ze={key:0,class:"text-base text-sx"},Ne={class:"font-semibold"},Ee=j(" Saved Collection"),Ie={class:"block text-center text-sm mb-4"},qe={class:"w-full max-w-2xl"},Ge={__name:"UserRecipe",setup(c){const e=L(),o=M(),a=n(!1),d=n(!1),i=n(3),u=n(0),l=n([]),p=n([]),h=n(!0),y=async()=>{try{a.value=!0,await e.dispatch("getUserInfo",o.params.id)}catch(g){console.log(g)}finally{a.value=!1}f&&N()},N=async(g=0)=>{await e.dispatch("getUserRecipes",{id:o.params.id,page:g}),l.value=[...l.value,...C.value],E(!1)},E=g=>{d.value=g},I=async()=>{if(u.value+=i.value,!!h.value){if(d.value){await e.dispatch("getSavedRecipes",{id:o.params.id,page}),p.value=[...p.value,...V.value],h.value=V.value.length!=0;return}await e.dispatch("getUserRecipes",{id:o.params.id,page:u.value}),l.value=[...l.value,...C.value],h.value=C.value.length!=0}};$(y()),$(()=>{window.addEventListener("scroll",I)});const q=v(()=>e.getters.authUser),f=v(()=>e.getters.user),C=v(()=>e.getters.recipes),V=v(()=>e.getters.savedRecipes),A=v(()=>q.value._id==f.value._id);return(g,De)=>(s(),t("div",Ve,[a.value?(s(),S(re,{key:0})):(s(),t("div",Ae,[_(se,{user:m(f),isAuth:m(A)},null,8,["user","isAuth"]),r("ul",Te,[r("li",Ue,[r("span",He,x(m(f).recipes_count),1),Be]),m(A)?(s(),t("li",ze,[r("span",Ne,x(m(f).recipes_saved_count),1),Ee])):b("",!0)]),r("p",Ie,x(m(f).bio),1)])),r("div",qe,[_(Me,null,{default:w(()=>[_(T,{title:"Recipes"},{default:w(()=>[_(ve)]),_:1}),_(T,{title:"Saved Collection"},{default:w(()=>[_(ge)]),_:1})]),_:1})])]))}};export{Ge as default};
