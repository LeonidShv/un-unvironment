import{l as k,r as x,m as B,n as L,q as S,t as w,v as M,x as T,y as U,a as C,z as D,A as E,c as i,b as a,B as d,u as c,F as I,e as F,o as l,p as P,g as R,_ as j}from"./bljCDX81.js";import{a as q}from"./Duz-BQAt.js";function z(t,s={}){const e=s.head||k();if(e)return e.ssr?e.push(t,s):N(e,t,s)}function N(t,s,e={}){const n=x(!1),r=x({});B(()=>{r.value=n.value?{}:U(s)});const o=t.push(r.value,e);return L(r,_=>{o.patch(_)}),T()&&(S(()=>{o.dispose()}),w(()=>{n.value=!0}),M(()=>{n.value=!1})),o}const V=t=>(P("data-v-cea3087f"),t=t(),R(),t),G={class:"article p-t-2 p-b-4"},J={class:"article__title m-b-1"},K={class:"article__author"},O={class:"article__header d-flex gap-1"},Q={class:"article__header-text"},W={class:"article__header-text"},X=V(()=>a("div",{class:"devider m-t-1 m-b-1"},null,-1)),Y={class:"article__info"},Z=["src","alt"],$=["innerHTML"],ee=["innerHTML"],te=C({__name:"ArticlePage",setup(t){var n,r,o,u,_;const s=D(),e=E(()=>q.articles.find(({id:m})=>m===s.params.id));return z({title:(n=e.value)==null?void 0:n.title,meta:[{name:"description",content:(r=e.value)==null?void 0:r.description[0]},{property:"og:type",content:"article"},{property:"article:published_time",content:(o=e.value)==null?void 0:o.date},{property:"og:title",content:(u=e.value)==null?void 0:u.title},{name:"author",content:(_=e.value)==null?void 0:_.author}],htmlAttrs:{lang:"en"}}),(m,ae)=>{var h,v,f,g,y,b,H;return l(),i("section",G,[a("h2",J,d((h=c(e))==null?void 0:h.title),1),a("p",K,d((v=c(e))==null?void 0:v.author),1),a("div",O,[a("p",Q,d((f=c(e))==null?void 0:f.timeRead),1),a("p",W,d((g=c(e))==null?void 0:g.date),1)]),X,a("div",Y,[a("img",{class:"article__img m-b-2",src:"/un-environment"+((y=c(e))==null?void 0:y.imgSrc),alt:(b=c(e))==null?void 0:b.imgAlt},null,8,Z),(l(!0),i(I,null,F((H=c(e))==null?void 0:H.description,(p,A)=>(l(),i(I,{key:A},[p.includes("</ul>")?(l(),i("div",{key:1,class:"article__description-wrapper m-b-1",innerHTML:p},null,8,ee)):(l(),i("p",{key:0,class:"article__description m-b-1",innerHTML:p},null,8,$))],64))),128))])])}}}),ne=j(te,[["__scopeId","data-v-cea3087f"]]);export{ne as default};
