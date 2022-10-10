import{p as P,u as K,m as D,f as a,q as N,j as $,o as l,k as O,c as i,b as e,s as C,v as m,x as h,F as _,d as f,n as T,y as j,z as q,t as u,h as M,P as G}from"./index.db8df400.js";import{f as H,a as g}from"./array.bb9b92bd.js";const J={key:1,class:"wrapper min-h-screen gap-8 my-8 md:my-16"},Q={class:"w-full mx-auto px-6 h-full text-gray-800"},W={class:"flex xl:justify-center justify-center items-center flex-wrap h-full"},X={class:"w-full mb-8 md:mb-0"},Y=e("h1",{class:"block mb-8 text-[1.5rem]"},"Edit Recipe",-1),Z=["onSubmit"],ee={class:"flex flex-col gap-4 md:flex-row md:gap-8 border bg-white rounded-md shadow-lg p-4 mb-8"},te={class:"w-full"},se={class:"mb-3"},oe=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-2 text-gray-700"},"Name",-1),ne={key:0,class:"block text-rose-500 capitalize mt-2"},le={class:"mb-3"},ie=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-2 text-gray-700"},"Description",-1),ae={key:0,class:"block text-rose-500 capitalize mt-2"},re=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-4 text-gray-700"},"Image",-1),de={class:"relative w-full md:w-[200px] bg-gradient-to-r from-purple-500 to-pink-500 h-[200px] mb-4"},ce=["src"],ue={for:"dropzone-file",class:"dropzone-file-wrapper absolute bottom-2 right-2 p-2 bg-white rounded-full"},me=e("span",{class:"bg-white"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 text-sky-500"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"})])],-1),pe={class:"flex flex-col"},he={id:"ingredient-wrapper",class:"border rounded-md bg-white shadow-lg p-4 mb-8"},_e=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-2 text-gray-700"},"Ingredients",-1),fe={class:"flex items-center gap-4 mb-4"},ge=["onKeydown"],ve={class:"input-field !flex !items-center !justify-between !mb-2"},be={class:"flex items-center"},xe={class:"flex items-center justify-center text-sm mr-4 w-6 h-6 rounded-full bg-sky-500 text-white"},we={href:""},ye=["onClick"],ke=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 group-hover:text-white"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),Ce=[ke],Ie={id:"instruction-wrapper",class:"border rounded-md bg-white shadow-lg p-4 mb-8"},Fe=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-2 text-gray-700"},"Instructions",-1),je={class:"flex items-center gap-4 mb-4"},Me=["onKeydown"],Re={class:"input-field !flex !items-center !justify-between !mb-2"},ze={class:"flex items-center"},Ve={class:"flex items-center justify-center text-sm mr-4 w-6 h-6 rounded-full bg-sky-500 text-white"},Se={href:""},Ue=["onClick"],Ae=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 group-hover:text-white"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),Be=[Ae],Le={class:"mb-8"},Ee=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-2 text-gray-700"},"Status",-1),Pe=e("option",{value:"private"},"Private",-1),Ke=e("option",{value:"public"},"Public",-1),De=[Pe,Ke],Ne={class:"mb-8"},$e={type:"submit",class:"btn !w-full md:!w-auto",value:"Submit"},Oe={key:0,class:"spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full text-green-500",role:"status"},Te=e("span",{class:"visually-hidden"},"Loading...",-1),qe=[Te],Ge={key:1},Xe={__name:"Edit",setup(He){const R=P(),v=K(),I=D(),b=a(!1),r=a(),d=a(),p=a([]),x=a(!1),w=a(!1),y=a(!1),F=a(null),t=N({name:null,description:null,ingredients:Array(),instructions:Array(),image:null,status:null});$((async()=>{try{y.value=!0,await v.dispatch("getRecipe",I.params.id);const{name:n,description:o,ingredients:s,instructions:c,image:k,status:L,user:E}=v.getters.recipe;F.value=E._id,t.name=n,t.description=o,t.ingredients=s,t.instructions=c,t.status=L,t.image=k,t.image&&(b.value=!0)}catch(n){console.log(n)}finally{y.value=!1}})());const z=async()=>{p.value=[],x.value=!1,w.value=!0;const n={id:I.params.id,form:t};try{await v.dispatch("updateRecipe",n),x.value=!0}catch(o){p.value=o.response.data.errors}finally{w.value=!1}!x.value||R.push({name:"user",params:{id:F.value}})},V=async n=>{const o=n.target.files[0],s=await H.fileReaderAsync(o);s&&(b.value=!0,t.image=o),document.getElementById("recipe-image").setAttribute("src",s)},S=()=>{if(!r.value)return console.log("empty");if(g.exist(t.ingredients,r.value))return alert("ingredient already exist");t.ingredients=[...t.ingredients,r.value],r.value=null},U=()=>{if(!d.value)return console.log("empty");if(g.exist(t.instructions,d.value))return alert("instructions already exist");t.instructions=[...t.instructions,d.value],d.value=null},A=n=>{t.ingredients=g.remove(t.ingredients,n)},B=n=>{t.instructions=g.remove(t.instructions,n)};return(n,o)=>y.value?(l(),O(G,{key:0})):(l(),i("section",J,[e("div",Q,[e("div",W,[e("div",X,[Y,e("form",{onSubmit:C(z,["prevent"]),method:"POST",enctype:"multipart/form-data"},[e("div",ee,[e("div",te,[e("div",se,[oe,m(e("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>t.name=s),type:"text",name:"name",class:"input-field",id:"exampleFormControlInput1",placeholder:""},null,512),[[h,t.name]]),(l(!0),i(_,null,f(p.value,s=>(l(),i("div",null,[s.param=="name"?(l(),i("small",ne,u(s.msg),1)):M("",!0)]))),256))]),e("div",le,[ie,m(e("textarea",{cols:"3",rows:"3","onUpdate:modelValue":o[1]||(o[1]=s=>t.description=s),name:"description",class:"input-field",id:"exampleFormControlInput1",placeholder:""},`\r
                        `,512),[[h,t.description]]),(l(!0),i(_,null,f(p.value,s=>(l(),i("div",null,[s.param=="description"?(l(),i("small",ae,u(s.msg),1)):M("",!0)]))),256))]),e("div",null,[re,e("div",de,[e("div",{class:T(["relative border w-full h-full",{hidden:b.value==!1}])},[e("img",{id:"recipe-image",src:n.$baseURL+t.image,class:"w-full h-full",alt:"recipe-image"},null,8,ce)],2),e("label",ue,[me,e("input",{id:"dropzone-file",onChange:o[2]||(o[2]=s=>V(s)),type:"file",name:"image",class:"hidden"},null,32)])])])])]),e("div",pe,[e("div",he,[_e,e("div",fe,[m(e("input",{onKeydown:j(C(S,["prevent"]),["enter"]),type:"text","onUpdate:modelValue":o[3]||(o[3]=s=>r.value=s),name:"ingredients",class:"input-field",id:"exampleFormControlInput1",placeholder:""},null,40,ge),[[h,r.value]])]),(l(!0),i(_,null,f(t.ingredients,(s,c)=>(l(),i("div",ve,[e("div",be,[e("div",xe,u(c+1),1),e("label",we,u(s),1)]),e("span",{onClick:k=>A(s),class:"remove-ingredient group hover:bg-rose-500 rounded-full"},Ce,8,ye)]))),256))]),e("div",Ie,[Fe,e("div",je,[m(e("textarea",{onKeydown:j(C(U,["prevent"]),["enter"]),"onUpdate:modelValue":o[4]||(o[4]=s=>d.value=s),cols:"3",rows:"3",name:"instructions",class:"input-field text-left",placeholder:""},`\r
                      `,40,Me),[[h,d.value]])]),(l(!0),i(_,null,f(t.instructions,(s,c)=>(l(),i("div",Re,[e("div",ze,[e("div",Ve,u(c+1),1),e("label",Se,u(s),1)]),e("span",{onClick:k=>B(s),class:"group hover:bg-rose-500 rounded-full"},Be,8,Ue)]))),256))])]),e("div",Le,[Ee,m(e("select",{"onUpdate:modelValue":o[5]||(o[5]=s=>t.status=s),name:"status",class:"input-field"},De,512),[[q,t.status]])]),e("div",Ne,[e("button",$e,[w.value?(l(),i("div",Oe,qe)):(l(),i("label",Ge,"Update"))])])],40,Z)])])])]))}};export{Xe as default};