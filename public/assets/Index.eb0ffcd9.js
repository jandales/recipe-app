import{P as g}from"./PageLoading.261865ce.js";import{u as f,r as d,o as p,a as h,b as e,c as t,F as v,d as k,e as w,f as r,g as i,w as u,h as m,t as _}from"./index.8f28c3ee.js";const x={class:"relative w-full"},y={key:0,class:"flex flex-col md:flex-row flex-wrap w-full gap-8 md:px-6 py-8"},b={class:"relative w-full border-t border-b md:w-[calc(((100%_+_2rem)_/_3)_-_2rem)] md:rounded-lg md:shadow-lg md:border bg-white"},R={class:"flex items-center p-4"},B=["src"],q=["src"],I={class:"aspect-square"},L=["src"],N=["src"],V={class:"flex items-center p-4"},$={__name:"Index",setup(A){const l=f(),c=d([]),o=d(!1);return p((async()=>{o.value=!0;try{await l.dispatch("getRecipes"),c.value=l.getters.recipes}catch(a){console.log(a)}finally{o.value=!1}})()),(a,F)=>{const n=h("router-link");return e(),t("div",x,[o.value?(e(),w(g,{key:1})):(e(),t("div",y,[(e(!0),t(v,null,k(c.value,s=>(e(),t("div",b,[r("div",R,[s.user.image?(e(),t("img",{key:0,src:s.user.image,class:"rounded-full w-8 border",alt:"Avatar"},null,8,B)):(e(),t("img",{key:1,src:a.$defaultRecipeImage,class:"rounded-full w-8 border",alt:"Avatar"},null,8,q)),i(n,{to:{name:"user",params:{id:s.user._id}},class:"ml-2 hover:underline"},{default:u(()=>[m(_(s.user.name),1)]),_:2},1032,["to"])]),r("div",I,[s.image?(e(),t("img",{key:0,class:"aspect-square",src:s.image,alt:""},null,8,L)):(e(),t("img",{key:1,class:"aspect-square",src:a.$defaultRecipeImage,alt:""},null,8,N))]),r("div",V,[i(n,{to:{name:"recipe",params:{id:s._id}},class:"text-gray-900 block text-sm font-semibold mb-2 hover:text-sky-500"},{default:u(()=>[m(_(s.name),1)]),_:2},1032,["to"])])]))),256))]))])}}};export{$ as default};
