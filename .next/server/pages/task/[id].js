(()=>{var e={};e.id=423,e.ids=[220,423,636],e.modules={5537:e=>{e.exports={header:"header_header__Awatn",section:"header_section__H6QEe",nav:"header_nav___1UFd",button:"header_button__00R_3",sectionButton:"header_sectionButton__ojz8F",tarefas:"header_tarefas__z2Eic"}},6447:e=>{e.exports={textArea:"textarea_textArea__ArG9i"}},9077:e=>{e.exports={container:"task_container__oIqUJ",main:"task_main__7mI4i",article:"task_article__TRvRW",section:"task_section__RjrdM",button:"task_button__hkpG1",sectionAllCommets:"task_sectionAllCommets__4r1Qh",articleComment:"task_articleComment__jm0YW",infoUser:"task_infoUser__do0zG",buttonTrash:"task_buttonTrash__vT0U5"}},5227:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{config:()=>x,default:()=>m,getServerSideProps:()=>p,getStaticPaths:()=>h,getStaticProps:()=>u,reportWebVitals:()=>_,routeModule:()=>v,unstable_getServerProps:()=>g,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>j,unstable_getStaticPaths:()=>b,unstable_getStaticProps:()=>f});var r=a(3865),n=a(9455),i=a(671),o=a(3212),c=a(50),l=a(9071),d=e([l]);l=(d.then?(await d)():d)[0];let m=(0,i.M)(l,"default"),u=(0,i.M)(l,"getStaticProps"),h=(0,i.M)(l,"getStaticPaths"),p=(0,i.M)(l,"getServerSideProps"),x=(0,i.M)(l,"config"),_=(0,i.M)(l,"reportWebVitals"),f=(0,i.M)(l,"unstable_getStaticProps"),b=(0,i.M)(l,"unstable_getStaticPaths"),j=(0,i.M)(l,"unstable_getStaticParams"),g=(0,i.M)(l,"unstable_getServerProps"),S=(0,i.M)(l,"unstable_getServerSideProps"),v=new r.PagesRouteModule({definition:{kind:n.A.PAGES,page:"/task/[id]",pathname:"/task/[id]",bundlePath:"",filename:""},components:{App:c.default,Document:o.default},userland:l});s()}catch(e){s(e)}})},9127:(e,t,a)=>{"use strict";a.d(t,{f:()=>i});var s=a(8732),r=a(6447),n=a.n(r);function i({...e}){return(0,s.jsx)("textarea",{className:n().textArea,...e})}},50:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m});var s=a(8732);a(9361);var r=a(1106),n=a.n(r),i=a(5537),o=a.n(i),c=a(4722),l=a(630);function d(){let{data:e,status:t}=(0,c.useSession)();return(0,s.jsx)("header",{className:o().header,children:(0,s.jsxs)("section",{className:o().section,children:[(0,s.jsxs)("nav",{className:o().nav,children:[(0,s.jsx)(n(),{className:o().tarefas,href:"/",children:(0,s.jsxs)("h1",{children:["Tarefas ",(0,s.jsx)("span",{className:o().meuMais,children:"+"})]})}),e?.user&&(0,s.jsx)(n(),{href:"/dashboard",children:(0,s.jsx)("button",{className:o().sectionButton,children:"Meu painel"})})]}),"loading"===t?(0,s.jsx)(s.Fragment,{}):e?(0,s.jsx)("button",{onClick:()=>(0,c.signOut)(),className:o().button,children:e.user?.name}):(0,s.jsx)("button",{onClick:()=>(0,c.signIn)("google"),className:o().button,children:"Acessar"}),(0,s.jsx)(l.ELn,{})]})})}function m({Component:e,pageProps:t}){return(0,s.jsxs)(c.SessionProvider,{session:t.session,children:[(0,s.jsx)(d,{}),(0,s.jsx)(e,{...t})]})}},3212:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var s=a(8732),r=a(883);function n(){return(0,s.jsxs)(r.Html,{lang:"en",children:[(0,s.jsx)(r.Head,{}),(0,s.jsxs)("body",{children:[(0,s.jsx)(r.Main,{}),(0,s.jsx)(r.NextScript,{})]})]})}},9071:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{default:()=>p,getServerSideProps:()=>x});var r=a(8732),n=a(9398),i=a(4337),o=a(9077),c=a.n(o),l=a(9127),d=a(2015),m=a(4722),u=a(4062),h=e([n,i]);function p({item:e,comments:t}){let[a,s]=(0,d.useState)(""),[o,h]=(0,d.useState)(t||[]),{data:p}=(0,m.useSession)();async function x(t){if(t.preventDefault(),""!==a&&p?.user?.email)try{let t={idUser:(await (0,i.addDoc)((0,i.collection)(n.db,"comments"),{email:p?.user?.email,date:new Date,name:p?.user?.name,comment:a,idDoComment:e?.id})).id,comment:a,data:null,email:p.user?.email||"",idDoComment:e.id,name:p.user?.name||""};h(e=>[...e,t]),s("")}catch(e){console.log(e)}}async function _(e){let t=(0,i.doc)(n.db,"comments",e);(0,i.deleteDoc)(t),h(t=>[...t.filter(t=>t.idUser!==e)])}return(0,r.jsxs)("div",{className:c().container,children:[(0,r.jsxs)("main",{className:c().main,children:[(0,r.jsx)("h1",{children:"Tarefa"}),(0,r.jsx)("article",{className:c().article,children:(0,r.jsx)("p",{children:e.tarefa})})]}),(0,r.jsxs)("section",{className:c().section,children:[(0,r.jsx)("h2",{children:"Deixar comentario"}),(0,r.jsxs)("form",{onSubmit:x,children:[(0,r.jsx)(l.f,{value:a,onChange:e=>s(e.target.value),placeholder:"Digite seu comentario..."}),(0,r.jsx)("button",{className:c().button,disabled:!p?.user,type:"submit",children:"Enviar comentario"})]})]}),(0,r.jsxs)("section",{className:c().sectionAllCommets,children:[(0,r.jsx)("h2",{children:"Todos os comentarios"}),0===o.length&&(0,r.jsx)("h2",{children:"Tarefa sem comentarios..."}),o.map(e=>(0,r.jsxs)("article",{className:c().articleComment,children:[(0,r.jsxs)("div",{className:c().infoUser,children:[(0,r.jsx)("p",{children:e.name}),e.email===p?.user?.email&&(0,r.jsx)("button",{onClick:()=>_(e.idUser),className:c().buttonTrash,children:(0,r.jsx)(u.qbC,{size:18,color:"red"})})]}),(0,r.jsx)("p",{children:e.comment})]},e.idUser))]})]})}[n,i]=h.then?(await h)():h;let x=async({params:e})=>{let t=e?.id;console.log(t);let a=(0,i.collection)(n.db,"comments"),s=(0,i.query)(a,(0,i.where)("idDoComment","==",t)),r=await (0,i.getDocs)(s),o=[];r.forEach(e=>{o.push({comment:e.data().comment,data:e.data().data||null,email:e.data().email,idDoComment:e.data().idDoComment,name:e.data().name,idUser:e.id})}),console.log(o);let c=(0,i.doc)(n.db,"tarefas",t),l=await (0,i.getDoc)(c);if(void 0===l.data()||!l.data()?.check)return{redirect:{destination:"/",permanent:!1}};let d=l.data()?.data?.seconds*1e3;return{props:{item:{user:l.data()?.user,data:new Date(d).toLocaleDateString(),id:l.id,tarefa:l.data()?.tarefa,check:l.data()?.check},comments:o}}};s()}catch(e){s(e)}})},9398:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(t,{db:()=>c});var r=a(6551),n=a(4337),i=e([r,n]);[r,n]=i.then?(await i)():i;let o=(0,r.initializeApp)({apiKey:"AIzaSyBmdX43PYGRc2JvQvxShSwmaKei64MA4y8",authDomain:"tarefaplus-a201b.firebaseapp.com",projectId:"tarefaplus-a201b",storageBucket:"tarefaplus-a201b.firebasestorage.app",messagingSenderId:"883737194036",appId:"1:883737194036:web:5078a4be18a750536fe461"}),c=(0,n.getFirestore)(o);s()}catch(e){s(e)}})},9361:()=>{},4722:e=>{"use strict";e.exports=require("next-auth/react")},361:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},2015:e=>{"use strict";e.exports=require("react")},8732:e=>{"use strict";e.exports=require("react/jsx-runtime")},3873:e=>{"use strict";e.exports=require("path")},6551:e=>{"use strict";e.exports=import("firebase/app")},4337:e=>{"use strict";e.exports=import("firebase/firestore")}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[916,677,883,362],()=>a(5227));module.exports=s})();