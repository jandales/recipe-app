import{u as g,i as f,r as _,o as w,x as b,a as x,b as t,c as o,f as e,t as l,e as k,w as p,k as h,F as y,d as C,n as R,h as m,g as V}from"./index.8f28c3ee.js";const z={key:0,class:"w-[900px] mx-auto mt-16"},E={class:"w-full flex md:items-center md:justify-center px-3 md:px-0 mx-auto mb-8"},S=["src"],B=["src"],M={class:"w-full ml-4 md:ml-16"},$={class:"w-full flex flex-col md:flex-row md:items-center"},j={for:"",class:"block text-[1.5rem] mb-2 md:mb-0"},A=m("Edit Profile"),N={class:"flex gap-8 mt-4"},H={class:"text-base"},I={class:"font-semibold"},P=m(" recipes"),U={class:"mt-2 hidden text-sm md:block"},q={class:"block p-4 text-sm md:hidden"},D={key:0,class:"w-full flex justify-center gap-8 mb-8 p-4 border-b"},F=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})],-1),L=e("label",{class:"text-sm font-semibold text-gray-500"},"RECIPES",-1),T=[F,L],G=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 group-hover:cursor-pointer"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"})],-1),J=e("label",{class:"text-sm font-semibold text-gray-500 group-hover:cursor-pointer"},"SAVED",-1),K=[G,J],O={key:1,class:"w-full flex r gap-8 mb-8 p-4 border-b"},Q=e("label",{class:"text-sm font-semibold text-gray-500"},"RECIPES",-1),W=[Q],X={class:"relative w-1/2 md:w-[calc(((100%_+_1rem)_/_3)_-_1rem)] md:rounded-lg md:shadow-lg md:overflow-hidden md:border bg-white"},Y=["src"],Z=["src"],ee={class:"p-2 md:p-4"},ae={__name:"UserRecipe",setup(se){const r=g(),n=f(),c=_([]),s=_(),d=async()=>{await r.dispatch("getUserRecipes",n.params.id),s.value=r.getters.recipeUser,c.value=r.getters.recipes},v=async()=>{await r.dispatch("getSavedRecipes",n.params.id),c.value=r.getters.recipes};return w(()=>{d()}),b(()=>n.params.id,d),(a,te)=>{const u=x("router-link");return s.value?(t(),o("div",z,[e("div",E,[s.value.image?(t(),o("img",{key:0,src:s.value.image,class:"rounded-full w-24 h-24 md:w-40 md:h-40 border-4 border-sky-700",alt:"Avatar"},null,8,S)):(t(),o("img",{key:1,src:a.$defaultAvatar,class:"rounded-full w-24 h-24 md:w-40 md:h-40 border-4 border-sky-700",alt:"Avatar"},null,8,B)),e("div",M,[e("div",$,[e("label",j,l(s.value.name),1),a.$user._id==s.value._id?(t(),k(u,{key:0,to:{name:"account.edit",params:{id:s.value._id}},class:"md:ml-4 px-3 py-2 text-center bg-white rounded-md border"},{default:p(()=>[A]),_:1},8,["to"])):h("",!0)]),e("ul",N,[e("li",H,[e("span",I,l(c.value.length),1),P])]),e("p",U,l(s.value.bio),1)])]),e("p",q,l(s.value.bio),1),a.$user&&a.$user._id==s.value._id?(t(),o("div",D,[e("div",{onClick:d,class:"flex items-center gap-2 cursor-pointer"},T),e("div",{onClick:v,class:"flex items-center gap-2 group cursor-pointer"},K)])):(t(),o("div",O,[e("div",{onClick:d,class:"flex gap-2 cursor-pointer"},W)])),e("div",{class:R(["w-full md:mx-auto flex flex-wrap md:gap-4",{"mt-16":!a.$user}])},[(t(!0),o(y,null,C(c.value,i=>(t(),o("div",X,[i.image?(t(),o("img",{key:0,class:"aspect-square",src:i.image,alt:""},null,8,Y)):(t(),o("img",{key:1,class:"aspect-square",src:a.$defaultRecipeImage,alt:""},null,8,Z)),e("div",ee,[V(u,{to:{name:"recipe",params:{id:i._id}},class:"text-gray-900 block text-sm font-semibold mb-2"},{default:p(()=>[m(l(i.name),1)]),_:2},1032,["to"])])]))),256))],2)])):h("",!0)}}};export{ae as default};
