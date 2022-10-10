import{v as N,u as O,s as T,i as q,d as a,x as G,n as H,o as l,g as J,c as i,b as e,y as C,z as m,A as _,F as f,f as g,B as M,C as Q,t as u,h as R}from"./index.1d546c79.js";import{f as W,a as v}from"./array.f93e9ab1.js";import{P as X}from"./PageLoading.0c9f286b.js";const Y={key:1,class:"wrapper min-h-screen gap-8 my-8 md:my-16"},Z={class:"w-full mx-auto px-6 h-full text-gray-800"},ee={class:"flex xl:justify-center justify-center items-center flex-wrap h-full"},te={class:"w-full mb-8 md:mb-0"},se=e("h1",{class:"block mb-8 text-[1.5rem]"},"Edit Recipe",-1),oe=["onSubmit"],ne={class:"flex flex-col gap-4 md:flex-row md:gap-8 border bg-white rounded-md shadow-lg p-4 mb-8"},le={class:"w-full"},ie={class:"mb-3"},ae=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-2 text-gray-700"},"Name",-1),re={key:0,class:"block text-rose-500 capitalize mt-2"},de={class:"mb-3"},ce=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-2 text-gray-700"},"Description",-1),ue={key:0,class:"block text-rose-500 capitalize mt-2"},pe=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-4 text-gray-700"},"Image",-1),me={class:"relative w-full md:w-[200px] bg-gradient-to-r from-purple-500 to-pink-500 h-[200px] mb-4"},he={class:"relative border w-full h-full"},_e=["src"],fe={for:"dropzone-file",class:"dropzone-file-wrapper absolute bottom-2 right-2 p-2 bg-white rounded-full"},ge=e("span",{class:"bg-white"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 text-sky-500"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"})])],-1),ve={class:"flex flex-col"},be={id:"ingredient-wrapper",class:"border rounded-md bg-white shadow-lg p-4 mb-8"},xe=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-4 text-gray-700"},"Ingredients",-1),we={class:"input-field !flex !items-center !justify-between !mb-4"},ye={class:"flex items-center"},ke={class:"flex items-center justify-center text-sm mr-4 w-6 h-6 rounded-full bg-sky-500 text-white"},Ce={href:""},Ie=["onClick"],Fe=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 group-hover:text-white"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),Me=[Fe],Re={class:"flex items-center gap-4 mb-4"},Se=["onKeydown"],Ve={id:"instruction-wrapper",class:"border rounded-md bg-white shadow-lg p-4 mb-8"},je=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-4 text-gray-700"},"Instructions",-1),ze={class:"input-field !mb-4"},Ae={class:"flex justify-between items-center mb-1"},Be={class:"inline-block py-1 text-sky-500 font-semibold"},Ue=["onClick"],Le=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 group-hover:text-white"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),Pe=[Le],Ee={class:"flex items-center gap-4 mb-4"},Ke=["onKeydown"],$e={class:"mb-8"},De=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-2 text-gray-700"},"Status",-1),Ne=e("option",{value:"private"},"Private",-1),Oe=e("option",{value:"public"},"Public",-1),Te=[Ne,Oe],qe={class:"mb-8"},Ge={type:"submit",class:"btn !w-full md:!w-auto",value:"Submit"},He={key:0,class:"spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full text-green-500",role:"status"},Je=e("span",{class:"visually-hidden"},"Loading...",-1),Qe=[Je],We={key:1,class:"text-white"},st={__name:"Edit",setup(Xe){const S=N(),b=O(),I=T(),V=q(),{$baseUrl:j,$defaultRecipeImage:z}=V.appContext.config.globalProperties,A=a(!1),r=a(),d=a(),h=a([]),x=a(!1),w=a(!1),y=a(!1),F=a(null),k=a(null),s=G({name:null,description:null,ingredients:Array(),instructions:Array(),image:null,status:null});H((async()=>{try{y.value=!0,await b.dispatch("getRecipe",I.params.id);const{name:n,description:o,ingredients:t,instructions:c,image:p,status:$,user:D}=b.getters.recipe;if(F.value=D._id,s.name=n,s.description=o,s.ingredients=t,s.instructions=c,s.status=$,typeof p!="undefined"&&p){k.value=j+p;return}k.value=z}catch(n){console.log(n)}finally{y.value=!1}})());const B=async()=>{h.value=[],x.value=!1,w.value=!0;const n={id:I.params.id,form:s};try{await b.dispatch("updateRecipe",n),x.value=!0}catch(o){h.value=o.response.data.errors}finally{w.value=!1}!x.value||S.push({name:"user",params:{id:F.value}})},U=async n=>{const o=n.target.files[0],t=await W.fileReaderAsync(o);t&&(A.value=!0,s.image=o),document.getElementById("recipe-image").setAttribute("src",t)},L=()=>{if(!r.value)return console.log("empty");if(v.exist(s.ingredients,r.value))return alert("ingredient already exist");s.ingredients=[...s.ingredients,r.value],r.value=null},P=()=>{if(!d.value)return console.log("empty");if(v.exist(s.instructions,d.value))return alert("instructions already exist");s.instructions=[...s.instructions,d.value],d.value=null},E=n=>{s.ingredients=v.remove(s.ingredients,n)},K=n=>{s.instructions=v.remove(s.instructions,n)};return(n,o)=>y.value?(l(),J(X,{key:0})):(l(),i("section",Y,[e("div",Z,[e("div",ee,[e("div",te,[se,e("form",{onSubmit:C(B,["prevent"]),method:"POST",enctype:"multipart/form-data"},[e("div",ne,[e("div",le,[e("div",ie,[ae,m(e("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>s.name=t),type:"text",name:"name",class:"input-field",id:"exampleFormControlInput1",placeholder:""},null,512),[[_,s.name]]),(l(!0),i(f,null,g(h.value,t=>(l(),i("div",null,[t.param=="name"?(l(),i("small",re,u(t.msg),1)):R("",!0)]))),256))]),e("div",de,[ce,m(e("textarea",{cols:"3",rows:"3","onUpdate:modelValue":o[1]||(o[1]=t=>s.description=t),name:"description",class:"input-field",id:"exampleFormControlInput1",placeholder:""},`\r
                        `,512),[[_,s.description]]),(l(!0),i(f,null,g(h.value,t=>(l(),i("div",null,[t.param=="description"?(l(),i("small",ue,u(t.msg),1)):R("",!0)]))),256))]),e("div",null,[pe,e("div",me,[e("div",he,[e("img",{id:"recipe-image",src:k.value,class:"w-full h-full",alt:"recipe-image"},null,8,_e)]),e("label",fe,[ge,e("input",{id:"dropzone-file",onChange:o[2]||(o[2]=t=>U(t)),type:"file",name:"image",class:"hidden"},null,32)])])])])]),e("div",ve,[e("div",be,[xe,(l(!0),i(f,null,g(s.ingredients,(t,c)=>(l(),i("div",we,[e("div",ye,[e("div",ke,u(c+1),1),e("label",Ce,u(t),1)]),e("span",{onClick:p=>E(t),class:"remove-ingredient group hover:bg-rose-500 rounded-full"},Me,8,Ie)]))),256)),e("div",Re,[m(e("input",{onKeydown:M(C(L,["prevent"]),["enter"]),type:"text","onUpdate:modelValue":o[3]||(o[3]=t=>r.value=t),name:"ingredients",class:"input-field",id:"exampleFormControlInput1",placeholder:""},null,40,Se),[[_,r.value]])])]),e("div",Ve,[je,(l(!0),i(f,null,g(s.instructions,(t,c)=>(l(),i("div",ze,[e("div",Ae,[e("span",Be," Step "+u(c+1),1),e("span",{onClick:p=>K(t),class:"group hover:bg-rose-500 rounded-full"},Pe,8,Ue)]),e("p",null,u(t),1)]))),256)),e("div",Ee,[m(e("textarea",{onKeydown:M(C(P,["prevent"]),["enter"]),"onUpdate:modelValue":o[4]||(o[4]=t=>d.value=t),cols:"3",rows:"3",name:"instructions",class:"input-field text-left",placeholder:""},`\r
                      `,40,Ke),[[_,d.value]])])])]),e("div",$e,[De,m(e("select",{"onUpdate:modelValue":o[5]||(o[5]=t=>s.status=t),name:"status",class:"input-field"},Te,512),[[Q,s.status]])]),e("div",qe,[e("button",Ge,[w.value?(l(),i("div",He,Qe)):(l(),i("label",We,"Update"))])])],40,oe)])])])]))}};export{st as default};
