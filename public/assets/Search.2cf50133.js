import{u as v,i as w,r as m,o as k,x as y,a as b,b as e,c as s,F as x,d as L,k as _,e as N,f as l,g as h,w as p,h as f,t as g}from"./index.8f28c3ee.js";import{P as R}from"./PageLoading.261865ce.js";const B={class:"relative w-full"},V={key:0,class:"w-full"},q={key:0,class:"flex flex-col md:flex-row flex-wrap w-full gap-8 md:px-6 py-8"},C={class:"relative w-full border-t border-b md:w-[calc(((100%_+_2rem)_/_3)_-_2rem)] md:rounded-lg md:shadow-lg md:border bg-white"},F={class:"flex items-center p-4"},S=["src"],A={key:1,src:"https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",class:"rounded-full w-8 border",alt:"Avatar"},P={class:"aspect-square"},U=["src"],$={key:1,class:"aspect-square",src:"https://mdbootstrap.com/img/new/standard/nature/182.jpg",alt:""},j={class:"flex items-center p-4"},D={key:1,class:"w-full text-center"},z={__name:"Search",setup(E){const c=v(),n=w(),a=m([]),r=m(!1),d=async()=>{r.value=!0;let o=n.params.keyword;try{await c.dispatch("searchRecipes",o),a.value=c.getters.recipes}catch(i){console.log(i)}finally{r.value=!1}};return k(d),y(()=>n.params.keyword,d),(o,i)=>{const u=b("router-link");return e(),s("div",B,[r.value?(e(),N(R,{key:1})):(e(),s("div",V,[a.value?(e(),s("div",q,[(e(!0),s(x,null,L(a.value,t=>(e(),s("div",C,[l("div",F,[t.user.image?(e(),s("img",{key:0,src:o.$baseURL+t.user.image,class:"rounded-full w-8 border",alt:"Avatar"},null,8,S)):(e(),s("img",A)),h(u,{to:{name:"user",params:{id:t.user._id}},class:"ml-2 hover:underline"},{default:p(()=>[f(g(t.user.name),1)]),_:2},1032,["to"])]),l("div",P,[t.image?(e(),s("img",{key:0,class:"aspect-square",src:o.$baseURL+t.image,alt:""},null,8,U)):(e(),s("img",$))]),l("div",j,[h(u,{to:{name:"recipe",params:{id:t._id}},class:"text-gray-900 block text-sm font-semibold mb-2 hover:text-sky-500"},{default:p(()=>[f(g(t.name),1)]),_:2},1032,["to"])])]))),256))])):_("",!0),a.value.length==0?(e(),s("div",D," No result Found ")):_("",!0)]))])}}};export{z as default};