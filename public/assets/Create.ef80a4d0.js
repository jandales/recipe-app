import{u as B,r as m,l as A,b as l,c as o,k as _,f as e,m as L,p as f,v,F as p,d as h,n as R,q as k,s as U,t as a,h as E}from"./index.8d985fa2.js";import{f as K}from"./fileReader.e9c4bdf8.js";const N={class:"wrapper min-h-screen gap-8 my-8 md:my-16"},T={key:0,class:"bg-green-100 rounded-lg py-5 px-6 text-base mb-4 text-green-700 inline-flex items-center w-full",role:"alert"},D=e("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"w-4 h-4 mr-2 fill-current",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[e("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"})],-1),P=E(" Successfully Created "),O=[D,P],$={class:"w-full mx-auto px-6 h-full text-gray-800"},q={class:"flex xl:justify-center justify-center items-center flex-wrap h-full g-6"},G={class:"w-full mb-8 md:mb-0"},H=e("h1",{class:"block mb-8 text-[1.5rem]"},"Create Recipe",-1),J=["onSubmit"],Q={class:"flex flex-col gap-4 md:flex-row md:gap-8 border bg-white rounded-md shadow-lg p-4 mb-8"},W={class:"w-full"},X={class:"mb-3"},Y=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-2 text-gray-700"},"Name",-1),Z={key:0,class:"block text-rose-500 capitalize mt-2"},ee={class:"mb-3"},te=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-2 text-gray-700"},"Description",-1),se={key:0,class:"block text-rose-500 capitalize mt-2"},le=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-4 text-gray-700"},"Image",-1),oe={class:"relative w-full md:w-[200px] bg-gradient-to-r from-purple-500 to-pink-500 h-[200px] mb-4"},ne=e("img",{id:"recipe-image",class:"w-full h-full",alt:"recipe-image"},null,-1),ie=[ne],re={for:"dropzone-file",class:"dropzone-file-wrapper absolute bottom-2 right-2 p-2 bg-white rounded-full"},ae=e("span",{class:"bg-white"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 text-sky-500"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"})])],-1),de={class:"flex flex-col"},ce={id:"ingredient-wrapper",class:"border rounded-md bg-white shadow-lg p-4 mb-8"},ue=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-2 text-gray-700"},"Ingredients",-1),me={class:"flex items-center gap-4 mb-4"},pe=["onKeydown"],he={key:0,class:"block text-rose-500 capitalize mt-2"},_e={class:"input-field !flex !items-center !justify-between !mb-2"},fe={class:"flex items-center"},ge={class:"flex items-center justify-center text-sm mr-4 w-6 h-6 rounded-full bg-sky-500 text-white"},ve={href:""},be=["onClick"],xe=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 group-hover:text-white"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),we=[xe],ye={id:"instruction-wrapper",class:"border rounded-md bg-white shadow-lg p-4 mb-8"},ke=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-2 text-gray-700"},"Instructions",-1),Ce={class:"flex items-center gap-4 mb-4"},Ie=["onKeydown"],ze={key:0,class:"block text-rose-500 capitalize mt-2"},Fe={class:"input-field !flex !items-center !justify-between !mb-2"},Me={class:"flex items-center"},Se={class:"flex items-center justify-center text-sm mr-4 w-6 h-6 rounded-full bg-sky-500 text-white"},Ve={href:""},je=["onClick"],Be=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 group-hover:text-white"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),Ae=[Be],Le={class:"mb-8 border rounded-md bg-white shadow-lg p-4"},Re=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-2 text-gray-700"},"Status",-1),Ue=e("option",{value:"private"},"Private",-1),Ee=e("option",{value:"public"},"Public",-1),Ke=[Ue,Ee],Ne={class:"mb-8"},Te={type:"submit",class:"btn !w-full md:!w-auto"},De={key:0,class:"spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full text-green-500",role:"status"},Pe=e("span",{class:"visually-hidden"},"Loading...",-1),Oe=[Pe],$e={key:1,for:""},Je={__name:"Create",setup(qe){const C=B(),x=m(!1),d=m(),c=m(),u=m([]),b=m(!1),g=m(!1),s=A({name:null,description:null,ingredients:[],instructions:[],image:null,status:"private"}),I=async()=>{u.value=[],b.value=!1,g.value=!0;try{await C.dispatch("storeRecipe",s),g.value=!1,b.value=!0,window.scrollTo(0,0)}catch(i){u.value=i.response.data.errors}finally{g.value=!1}},z=async i=>{const n=i.target.files[0],t=await K.fileReaderAsync(n);t&&(x.value=!0,s.image=n),document.getElementById("recipe-image").setAttribute("src",t)},F=()=>{if(!d.value)return console.log("empty");if(w(s.ingredients,d.value))return alert("ingredient already exist");s.ingredients=[...s.ingredients,d.value],d.value=null},M=()=>{if(!c.value)return console.log("empty");if(w(s.instructions,c.value))return alert("instructions already exist");s.instructions=[...s.instructions,c.value],c.value=null},S=i=>{s.ingredients=y(s.ingredients,i)},V=i=>{s.instructions=y(s.instructions,i)},w=(i,n)=>{let t=!1;for(let r=0;r<i.length;r++)if(i[r]==n)return t=!0;return t};function y(i,n){return i.filter(function(t){return t!=n})}return(i,n)=>(l(),o("section",N,[b.value?(l(),o("div",T,O)):_("",!0),e("div",$,[e("div",q,[e("div",G,[H,e("form",{onSubmit:L(I,["prevent"]),method:"POST",enctype:"multipart/form-data"},[e("div",Q,[e("div",W,[e("div",X,[Y,f(e("input",{"onUpdate:modelValue":n[0]||(n[0]=t=>s.name=t),type:"text",name:"name",class:"input-field",id:"exampleFormControlInput1",placeholder:""},null,512),[[v,s.name]]),(l(!0),o(p,null,h(u.value,t=>(l(),o("div",null,[t.param=="name"?(l(),o("small",Z,a(t.msg),1)):_("",!0)]))),256))]),e("div",ee,[te,f(e("textarea",{cols:"3",rows:"3","onUpdate:modelValue":n[1]||(n[1]=t=>s.description=t),name:"description",class:"input-field",id:"exampleFormControlInput1",placeholder:""},`\r
                      `,512),[[v,s.description]]),(l(!0),o(p,null,h(u.value,t=>(l(),o("div",null,[t.param=="description"?(l(),o("small",se,a(t.msg),1)):_("",!0)]))),256))]),e("div",null,[le,e("div",oe,[e("div",{class:R(["relative border w-full h-full",{hidden:x.value==!1}])},ie,2),e("label",re,[ae,e("input",{id:"dropzone-file",onChange:n[2]||(n[2]=t=>z(t)),type:"file",name:"image",class:"hidden"},null,32)])])])])]),e("div",de,[e("div",ce,[ue,e("div",me,[f(e("input",{onKeydown:k(F,["enter"]),type:"text","onUpdate:modelValue":n[3]||(n[3]=t=>d.value=t),name:"ingredients",class:"input-field",id:"exampleFormControlInput1",placeholder:""},null,40,pe),[[v,d.value]])]),(l(!0),o(p,null,h(u.value,t=>(l(),o("div",null,[t.param=="ingredients"?(l(),o("small",he,a(t.msg),1)):_("",!0)]))),256)),(l(!0),o(p,null,h(s.ingredients,(t,r)=>(l(),o("div",_e,[e("div",fe,[e("div",ge,a(r+1),1),e("label",ve,a(t),1)]),e("span",{onClick:j=>S(t),class:"remove-ingredient group hover:bg-rose-500 rounded-full"},we,8,be)]))),256))]),e("div",ye,[ke,e("div",Ce,[f(e("textarea",{onKeydown:k(M,["enter"]),"onUpdate:modelValue":n[4]||(n[4]=t=>c.value=t),cols:"3",rows:"3",name:"instructions",class:"input-field text-left",placeholder:""},`\r
                    `,40,Ie),[[v,c.value]])]),(l(!0),o(p,null,h(u.value,t=>(l(),o("div",null,[t.param=="instructions"?(l(),o("small",ze,a(t.msg),1)):_("",!0)]))),256)),(l(!0),o(p,null,h(s.instructions,(t,r)=>(l(),o("div",Fe,[e("div",Me,[e("div",Se,a(r+1),1),e("label",Ve,a(t),1)]),e("span",{onClick:j=>V(t),class:"group hover:bg-rose-500 rounded-full"},Ae,8,je)]))),256))])]),e("div",Le,[Re,f(e("select",{"onUpdate:modelValue":n[5]||(n[5]=t=>s.status=t),name:"status",class:"input-field"},Ke,512),[[U,s.status]])]),e("div",Ne,[e("button",Te,[g.value?(l(),o("div",De,Oe)):(l(),o("label",$e,"Save"))])])],40,J)])])])]))}};export{Je as default};
