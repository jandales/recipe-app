import{f as l,k as a,o as i,c as d}from"./index.d4576f62.js";const _={__name:"Observer",emits:["handleLoadMoreRecipe"],setup(p,{emit:o}){const e=l(null),s=()=>{o("handleLoadMoreRecipe")},t=async()=>{const r=e.value;new IntersectionObserver(([n])=>{n&&n.isIntersecting&&s()}).observe(r)};return a(()=>{window.addEventListener("scroll",t())}),(r,c)=>(i(),d("div",{ref_key:"observerElement",ref:e,class:"p-1 w-full"},null,512))}};export{_};
