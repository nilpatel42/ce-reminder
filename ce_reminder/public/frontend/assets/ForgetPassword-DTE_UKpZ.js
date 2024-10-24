import{r as a,h as x,a as f,b as e,d as r,w as d,u as _,j as y,T as V,F,e as T,o as v,_ as U,f as b,l as $,t as C}from"./index-W_lnXAtG.js";import{_ as E}from"./FormControl.vue_vue_type_script_setup_true_lang-DwYvdCJj.js";import"./TextInput.vue_vue_type_script_setup_true_lang-CdzQ2H2L.js";import"./Popover-D9lPCEKX.js";const N={class:"w-full sm:w-96 bg-[#f4f5f7] flex justify-center items-center h-screen"},R={class:"w-full h-96 flex justify-center items-center"},q={class:"w-full object-center justify-center flex"},B=["src"],G=e("div",{class:"w-full"},[e("p",{class:"font-medium p-2 flex justify-center"},"Forget Password")],-1),H={class:"bg-white rounded-lg w-80 h-68 mt-4"},O={class:"p-4"},A={key:0,class:"text-red-500 text-xs pl-2"},D={class:"p-2"},M={class:"w-full"},J={class:"fixed bottom-0 flex justify-end w-full sm:w-96 pr-3"},Y={key:0,class:"w-full sm:w-72 p-2 mb-4 text-sm leading-5 text-white bg-blue-500 rounded-lg opacity-100 font-regular animate-slide-in-right animate-fade-out"},X={__name:"ForgetPassword",setup(z){const h=a(""),i=a(""),l=a(""),p=a(!1),c=a(!1),w=x(()=>!!i.value),k=a(window.location.href),u=x(()=>{const t=new URL(k.value);return`${t.protocol}//${t.hostname}`});u.value=u.value+"/assets";const j=a(`${u.value}/assets`),P=a(`${u.value}/`),L=()=>{const t=new Headers;t.append("Cookie","full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image=");const n={method:"GET",headers:t,redirect:"follow"};fetch(j.value,n).then(s=>s.text()).then(s=>{const g=new DOMParser().parseFromString(s,"text/html").querySelector('link[rel="shortcut icon"]');g&&(h.value=g.href)}).catch(s=>console.error(s))},S=()=>{if(p.value=!0,!w.value)return;c.value=!0;const t=new Headers;t.append("Content-Type","application/json");const n=JSON.stringify({cmd:"frappe.core.doctype.user.user.reset_password",user:i.value}),s={method:"POST",headers:t,body:n,redirect:"follow"};fetch(P.value,s).then(o=>{o.text().then(m=>{c.value=!1,o.status===200?(l.value="Password reset instructions have been sent to your email",console.log(m)):o.status===404?(l.value="User Mail Not Found",console.log(m)):o.status===501?l.value="Please setup default Email Account from Settings > Email Account":l.value="You hit the rate limit because of too many requests. Please try after sometime.",setTimeout(()=>{l.value=""},1e3)})}).catch(o=>{c.value=!1,console.error(o)})};return L(),(t,n)=>{const s=T("router-link");return v(),f(F,null,[e("div",N,[e("div",R,[e("div",null,[e("div",q,[e("img",{src:h.value,class:"w-16 h-16 object-cover rounded-lg"},null,8,B)]),G,e("div",H,[e("div",O,[r(_(E),{required:"",type:"text",label:"Email",name:"email",modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=o=>i.value=o),placeholder:"johndoe@email.com",class:"p-2"},{prefix:d(()=>[r(_(U),{class:"w-4",name:"mail"})]),_:1},8,["modelValue"]),p.value&&!w.value?(v(),f("div",A," Enter email ! ")):y("",!0),e("div",D,[r(_($),{loading:c.value,variant:"solid",class:"w-full",onClick:S},{default:d(()=>[b(" Reset Password ")]),_:1},8,["loading"])]),e("div",M,[r(s,{to:"/",class:"text-sm font-medium text-black justify-center flex p-2 hover:underline"},{default:d(()=>[b("Back to Login")]),_:1})])])])])])]),e("div",J,[r(V,{name:"fade"},{default:d(()=>[l.value?(v(),f("div",Y,C(l.value),1)):y("",!0)]),_:1})])],64)}}};export{X as default};
