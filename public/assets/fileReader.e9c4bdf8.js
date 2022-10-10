const o=async r=>new Promise((a,n)=>{var e=new FileReader;e.onload=()=>{a(e.result)},e.onerror=n,e.readAsDataURL(r)});var s={fileReaderAsync:o};export{s as f};
