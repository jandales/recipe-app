import{s as P,f as K,q as D,g as a,v as N,p as $,o as l,k as O,c as i,b as e,x as C,y as m,z as h,F as _,j as f,n as T,A as M,B as q,t as u,e as R,P as G}from"./index.36e94847.js";import{f as H,a as g}from"./array.bb9b92bd.js";const J={key:1,class:"wrapper min-h-screen gap-8 my-8 md:my-16"},Q={class:"w-full mx-auto px-6 h-full text-gray-800"},W={class:"flex xl:justify-center justify-center items-center flex-wrap h-full"},X={class:"w-full mb-8 md:mb-0"},Y=e("h1",{class:"block mb-8 text-[1.5rem]"},"Edit Recipe",-1),Z=["onSubmit"],ee={class:"flex flex-col gap-4 md:flex-row md:gap-8 border bg-white rounded-md shadow-lg p-4 mb-8"},te={class:"w-full"},se={class:"mb-3"},oe=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-2 text-gray-700"},"Name",-1),ne={key:0,class:"block text-rose-500 capitalize mt-2"},le={class:"mb-3"},ie=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-2 text-gray-700"},"Description",-1),ae={key:0,class:"block text-rose-500 capitalize mt-2"},re=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-4 text-gray-700"},"Image",-1),de={class:"relative w-full md:w-[200px] bg-gradient-to-r from-purple-500 to-pink-500 h-[200px] mb-4"},ce=["src"],ue={for:"dropzone-file",class:"dropzone-file-wrapper absolute bottom-2 right-2 p-2 bg-white rounded-full"},me=e("span",{class:"bg-white"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 text-sky-500"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"})])],-1),pe={class:"flex flex-col"},he={id:"ingredient-wrapper",class:"border rounded-md bg-white shadow-lg p-4 mb-8"},_e=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-4 text-gray-700"},"Ingredients",-1),fe={class:"input-field !flex !items-center !justify-between !mb-4"},ge={class:"flex items-center"},ve={class:"flex items-center justify-center text-sm mr-4 w-6 h-6 rounded-full bg-sky-500 text-white"},be={href:""},xe=["onClick"],we=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 group-hover:text-white"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),ye=[we],ke={class:"flex items-center gap-4 mb-4"},Ce=["onKeydown"],Ie={id:"instruction-wrapper",class:"border rounded-md bg-white shadow-lg p-4 mb-8"},Fe=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-4 text-gray-700"},"Instructions",-1),Me={class:"input-field !mb-4"},Re={class:"flex justify-between items-center mb-1"},je={class:"inline-block py-1 text-sky-500 font-semibold"},ze=["onClick"],Se=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 group-hover:text-white"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),Ve=[Se],Ae={class:"flex items-center gap-4 mb-4"},Be=["onKeydown"],Ue={class:"mb-8"},Le=e("label",{for:"exampleFormControlInput1",class:"form-label inline-block mb-2 text-gray-700"},"Status",-1),Ee=e("option",{value:"private"},"Private",-1),Pe=e("option",{value:"public"},"Public",-1),Ke=[Ee,Pe],De={class:"mb-8"},Ne={type:"submit",class:"btn !w-full md:!w-auto",value:"Submit"},$e={key:0,class:"spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full text-green-500",role:"status"},Oe=e("span",{class:"visually-hidden"},"Loading...",-1),Te=[Oe],qe={key:1,class:"text-white"},We={__name:"Edit",setup(Ge){const j=P(),v=K(),I=D(),b=a(!1),r=a(),d=a(),p=a([]),x=a(!1),w=a(!1),y=a(!1),F=a(null),t=N({name:null,description:null,ingredients:Array(),instructions:Array(),image:null,status:null});$((async()=>{try{y.value=!0,await v.dispatch("getRecipe",I.params.id);const{name:n,description:o,ingredients:s,instructions:c,image:k,status:L,user:E}=v.getters.recipe;F.value=E._id,t.name=n,t.description=o,t.ingredients=s,t.instructions=c,t.status=L,t.image=k,t.image&&(b.value=!0)}catch(n){console.log(n)}finally{y.value=!1}})());const z=async()=>{p.value=[],x.value=!1,w.value=!0;const n={id:I.params.id,form:t};try{await v.dispatch("updateRecipe",n),x.value=!0}catch(o){p.value=o.response.data.errors}finally{w.value=!1}!x.value||j.push({name:"user",params:{id:F.value}})},S=async n=>{const o=n.target.files[0],s=await H.fileReaderAsync(o);s&&(b.value=!0,t.image=o),document.getElementById("recipe-image").setAttribute("src",s)},V=()=>{if(!r.value)return console.log("empty");if(g.exist(t.ingredients,r.value))return alert("ingredient already exist");t.ingredients=[...t.ingredients,r.value],r.value=null},A=()=>{if(!d.value)return console.log("empty");if(g.exist(t.instructions,d.value))return alert("instructions already exist");t.instructions=[...t.instructions,d.value],d.value=null},B=n=>{t.ingredients=g.remove(t.ingredients,n)},U=n=>{t.instructions=g.remove(t.instructions,n)};return(n,o)=>y.value?(l(),O(G,{key:0})):(l(),i("section",J,[e("div",Q,[e("div",W,[e("div",X,[Y,e("form",{onSubmit:C(z,["prevent"]),method:"POST",enctype:"multipart/form-data"},[e("div",ee,[e("div",te,[e("div",se,[oe,m(e("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>t.name=s),type:"text",name:"name",class:"input-field",id:"exampleFormControlInput1",placeholder:""},null,512),[[h,t.name]]),(l(!0),i(_,null,f(p.value,s=>(l(),i("div",null,[s.param=="name"?(l(),i("small",ne,u(s.msg),1)):R("",!0)]))),256))]),e("div",le,[ie,m(e("textarea",{cols:"3",rows:"3","onUpdate:modelValue":o[1]||(o[1]=s=>t.description=s),name:"description",class:"input-field",id:"exampleFormControlInput1",placeholder:""},`\r
                        `,512),[[h,t.description]]),(l(!0),i(_,null,f(p.value,s=>(l(),i("div",null,[s.param=="description"?(l(),i("small",ae,u(s.msg),1)):R("",!0)]))),256))]),e("div",null,[re,e("div",de,[e("div",{class:T(["relative border w-full h-full",{hidden:b.value==!1}])},[e("img",{id:"recipe-image",src:n.$baseURL+t.image,class:"w-full h-full",alt:"recipe-image"},null,8,ce)],2),e("label",ue,[me,e("input",{id:"dropzone-file",onChange:o[2]||(o[2]=s=>S(s)),type:"file",name:"image",class:"hidden"},null,32)])])])])]),e("div",pe,[e("div",he,[_e,(l(!0),i(_,null,f(t.ingredients,(s,c)=>(l(),i("div",fe,[e("div",ge,[e("div",ve,u(c+1),1),e("label",be,u(s),1)]),e("span",{onClick:k=>B(s),class:"remove-ingredient group hover:bg-rose-500 rounded-full"},ye,8,xe)]))),256)),e("div",ke,[m(e("input",{onKeydown:M(C(V,["prevent"]),["enter"]),type:"text","onUpdate:modelValue":o[3]||(o[3]=s=>r.value=s),name:"ingredients",class:"input-field",id:"exampleFormControlInput1",placeholder:""},null,40,Ce),[[h,r.value]])])]),e("div",Ie,[Fe,(l(!0),i(_,null,f(t.instructions,(s,c)=>(l(),i("div",Me,[e("div",Re,[e("span",je," Step "+u(c+1),1),e("span",{onClick:k=>U(s),class:"group hover:bg-rose-500 rounded-full"},Ve,8,ze)]),e("p",null,u(s),1)]))),256)),e("div",Ae,[m(e("textarea",{onKeydown:M(C(A,["prevent"]),["enter"]),"onUpdate:modelValue":o[4]||(o[4]=s=>d.value=s),cols:"3",rows:"3",name:"instructions",class:"input-field text-left",placeholder:""},`\r
                      `,40,Be),[[h,d.value]])])])]),e("div",Ue,[Le,m(e("select",{"onUpdate:modelValue":o[5]||(o[5]=s=>t.status=s),name:"status",class:"input-field"},Ke,512),[[q,t.status]])]),e("div",De,[e("button",Ne,[w.value?(l(),i("div",$e,Te)):(l(),i("label",qe,"Update"))])])],40,Z)])])])]))}};export{We as default};
