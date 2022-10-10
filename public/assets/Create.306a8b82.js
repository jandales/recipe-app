import{i as B,q as R,f as u,s as K,j as L,o,c as n,b as e,v as w,x as h,y as f,F as m,d as p,n as E,z as C,A as D,t as r,h as v}from"./index.d4576f62.js";import{f as N,a as g}from"./array.bb9b92bd.js";const P={class:"wrapper min-h-screen gap-8 my-8 md:my-16"},O={class:"w-full mx-auto px-6 h-full text-gray-800"},T={class:"flex xl:justify-center justify-center items-center flex-wrap h-full g-6"},$={class:"w-full mb-8 md:mb-0"},q=e("h1",{class:"block mb-8 text-[1.5rem]"},"Create Recipe",-1),G=["onSubmit"],H={class:"flex flex-col gap-4 md:flex-row md:gap-8 border bg-white rounded-md shadow-lg p-4 mb-8"},J={class:"w-full"},Q={class:"mb-3"},W=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-2 text-gray-700"},"Name",-1),X={key:0,class:"block text-rose-500 capitalize mt-2"},Y={class:"mb-3"},Z=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-2 text-gray-700"},"Description",-1),ee={key:0,class:"block text-rose-500 capitalize mt-2"},te=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-4 text-gray-700"},"Image",-1),se={class:"relative w-full md:w-[200px] bg-gradient-to-r from-purple-500 to-pink-500 h-[200px] mb-4"},oe=e("img",{id:"recipe-image",class:"w-full h-full",alt:"recipe-image"},null,-1),ne=[oe],le={for:"dropzone-file",class:"dropzone-file-wrapper absolute bottom-2 right-2 p-2 bg-white rounded-full"},ie=e("span",{class:"bg-white"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 text-sky-500"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"})])],-1),re={class:"flex flex-col"},ae={id:"ingredient-wrapper",class:"border rounded-md bg-white shadow-lg p-4 mb-8"},de=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-2 text-gray-700"},"Ingredients",-1),ce={class:"flex items-center gap-4 mb-4"},ue=["onKeydown"],me={key:0,class:"block text-rose-500 capitalize mt-2"},pe={class:"input-field !flex !items-center !justify-between !mb-2"},he={class:"flex items-center"},_e={class:"flex items-center justify-center text-sm mr-4 w-6 h-6 rounded-full bg-sky-500 text-white"},fe={href:""},ve=["onClick"],ge=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 group-hover:text-white"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),be=[ge],xe={id:"instruction-wrapper",class:"border rounded-md bg-white shadow-lg p-4 mb-8"},we=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-2 text-gray-700"},"Instructions",-1),ye={class:"flex items-center gap-4 mb-4"},ke=["onKeydown"],Ce={key:0,class:"block text-rose-500 capitalize mt-2"},Ie={class:"input-field !flex !items-center !justify-between !mb-2"},ze={class:"flex items-center"},Fe={class:"flex items-center justify-center text-sm mr-4 w-6 h-6 rounded-full bg-sky-500 text-white"},je={href:""},Me=["onClick"],Se=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 group-hover:text-white"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),Ve=[Se],Ue={class:"mb-8 border rounded-md bg-white shadow-lg p-4"},Ae=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-2 text-gray-700"},"Status",-1),Be=e("option",{value:"private"},"Private",-1),Re=e("option",{value:"public"},"Public",-1),Ke=[Be,Re],Le={class:"mb-8"},Ee={type:"submit",class:"btn !w-full md:!w-auto"},De={key:0,class:"spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full text-green-500",role:"status"},Ne=e("span",{class:"visually-hidden"},"Loading...",-1),Pe=[Ne],Oe={key:1,for:""},Ge={__name:"Create",setup(Te){const y=B(),I=R(),k=u(!1),a=u(),d=u(),c=u([]),b=u(!1),x=u(!1),s=K({name:null,description:null,ingredients:[],instructions:[],image:null,status:"private"}),z=async()=>{c.value=[],b.value=!1,x.value=!0;try{await y.dispatch("storeRecipe",s),b.value=!0}catch(i){i.response.status===400&&(c.value=i.response.data.errors)}finally{x.value=!1}!b.value||I.push({name:"user",params:{id:U.value._id}})},F=async i=>{const l=i.target.files[0],t=await N.fileReaderAsync(l);t&&(k.value=!0,s.image=l),document.getElementById("recipe-image").setAttribute("src",t)},j=()=>{if(!a.value)return;if(g.exist(s.ingredients,a.value))return alert("ingredient already exist");s.ingredients=[...s.ingredients,a.value],a.value=null},M=()=>{if(!d.value)return;if(g.exist(s.instructions,d.value))return alert("instructions already exist");s.instructions=[...s.instructions,d.value],d.value=null},S=i=>{s.ingredients=g.remove(s.ingredients,i)},V=i=>{s.instructions=g.remove(s.instructions,i)},U=L(()=>y.getters.authUser);return(i,l)=>(o(),n("section",P,[e("div",O,[e("div",T,[e("div",$,[q,e("form",{onSubmit:w(z,["prevent"]),method:"POST",enctype:"multipart/form-data"},[e("div",H,[e("div",J,[e("div",Q,[W,h(e("input",{"onUpdate:modelValue":l[0]||(l[0]=t=>s.name=t),type:"text",name:"name",class:"input-field",id:"exampleFormControlInput1",placeholder:""},null,512),[[f,s.name]]),(o(!0),n(m,null,p(c.value,t=>(o(),n("div",null,[t.param=="name"?(o(),n("small",X,r(t.msg),1)):v("",!0)]))),256))]),e("div",Y,[Z,h(e("textarea",{cols:"3",rows:"3","onUpdate:modelValue":l[1]||(l[1]=t=>s.description=t),name:"description",class:"input-field",id:"exampleFormControlInput1",placeholder:""},`\r
                      `,512),[[f,s.description]]),(o(!0),n(m,null,p(c.value,t=>(o(),n("div",null,[t.param=="description"?(o(),n("small",ee,r(t.msg),1)):v("",!0)]))),256))]),e("div",null,[te,e("div",se,[e("div",{class:E(["relative border w-full h-full",{hidden:k.value==!1}])},ne,2),e("label",le,[ie,e("input",{id:"dropzone-file",onChange:l[2]||(l[2]=t=>F(t)),type:"file",name:"image",class:"hidden"},null,32)])])])])]),e("div",re,[e("div",ae,[de,e("div",ce,[h(e("input",{onKeydown:C(w(j,["prevent"]),["enter"]),type:"text","onUpdate:modelValue":l[3]||(l[3]=t=>a.value=t),name:"ingredients",class:"input-field",id:"exampleFormControlInput1",placeholder:""},null,40,ue),[[f,a.value]])]),(o(!0),n(m,null,p(c.value,t=>(o(),n("div",null,[t.param=="ingredients"?(o(),n("small",me,r(t.msg),1)):v("",!0)]))),256)),(o(!0),n(m,null,p(s.ingredients,(t,_)=>(o(),n("div",pe,[e("div",he,[e("div",_e,r(_+1),1),e("label",fe,r(t),1)]),e("span",{onClick:A=>S(t),class:"remove-ingredient group hover:bg-rose-500 rounded-full"},be,8,ve)]))),256))]),e("div",xe,[we,e("div",ye,[h(e("textarea",{onKeydown:C(w(M,["prevent"]),["enter"]),"onUpdate:modelValue":l[4]||(l[4]=t=>d.value=t),cols:"3",rows:"3",name:"instructions",class:"input-field text-left",placeholder:""},`\r
                    `,40,ke),[[f,d.value]])]),(o(!0),n(m,null,p(c.value,t=>(o(),n("div",null,[t.param=="instructions"?(o(),n("small",Ce,r(t.msg),1)):v("",!0)]))),256)),(o(!0),n(m,null,p(s.instructions,(t,_)=>(o(),n("div",Ie,[e("div",ze,[e("div",Fe,r(_+1),1),e("label",je,r(t),1)]),e("span",{onClick:A=>V(t),class:"group hover:bg-rose-500 rounded-full"},Ve,8,Me)]))),256))])]),e("div",Ue,[Ae,h(e("select",{"onUpdate:modelValue":l[5]||(l[5]=t=>s.status=t),name:"status",class:"input-field"},Ke,512),[[D,s.status]])]),e("div",Le,[e("button",Ee,[x.value?(o(),n("div",De,Pe)):(o(),n("label",Oe,"Save"))])])],40,G)])])])]))}};export{Ge as default};
