(()=>{var e={};e.id=332,e.ids=[220,332,636],e.modules={671:(e,t)=>{"use strict";Object.defineProperty(t,"M",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},5537:e=>{e.exports={header:"header_header__Awatn",section:"header_section__H6QEe",nav:"header_nav___1UFd",button:"header_button__00R_3",sectionButton:"header_sectionButton__ojz8F",tarefas:"header_tarefas__z2Eic"}},5001:e=>{e.exports={container:"Home_container__9OuOz",logoContent:"Home_logoContent__3KEno",tittle:"Home_tittle__EmTkJ",img:"Home_img__TebwI",dadoss:"Home_dadoss__qN55s",section:"Home_section__8mMQM"}},4975:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});let n={src:"/_next/static/media/hero.397efab8.png",height:353,width:579,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAS1BMVEXPztJva3Tj5+6cmaP7/PzExMsXByf///+dnal/fImqqq0yKTKeqMMiQoEecvS+vMDCwsKjqr3V09nx+v/u6+6IqeKMk6mqqLa1uMbK9mNvAAAAEnRSTlP6fvq3+/4Q/nJtRT3JdnSSJvxgrpLKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nAXBBwKAIAwAsWO2oGxF/v9SE6KbwEzEe4n4R6mvF7GfUjYhjKNcKTeM6T8gkgF9eESSlQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}},3557:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{config:()=>g,default:()=>c,getServerSideProps:()=>m,getStaticPaths:()=>p,getStaticProps:()=>f,reportWebVitals:()=>h,routeModule:()=>S,unstable_getServerProps:()=>x,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>_,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>b});var i=r(3865),s=r(9455),a=r(671),o=r(3212),l=r(50),d=r(4280),u=e([d]);d=(u.then?(await u)():u)[0];let c=(0,a.M)(d,"default"),f=(0,a.M)(d,"getStaticProps"),p=(0,a.M)(d,"getStaticPaths"),m=(0,a.M)(d,"getServerSideProps"),g=(0,a.M)(d,"config"),h=(0,a.M)(d,"reportWebVitals"),b=(0,a.M)(d,"unstable_getStaticProps"),v=(0,a.M)(d,"unstable_getStaticPaths"),_=(0,a.M)(d,"unstable_getStaticParams"),x=(0,a.M)(d,"unstable_getServerProps"),y=(0,a.M)(d,"unstable_getServerSideProps"),S=new i.PagesRouteModule({definition:{kind:s.A.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:l.default,Document:o.default},userland:d});n()}catch(e){n(e)}})},6579:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return x}});let n=r(9929),i=r(4588),s=r(8732),a=i._(r(2015)),o=n._(r(2326)),l=n._(r(4426)),d=r(4515),u=r(4118),c=r(2691);r(9794);let f=r(7564),p=n._(r(5643)),m=r(1280),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,r,n,i,s,a){let o=null==e?void 0:e.src;e&&e["data-loaded-src"]!==o&&(e["data-loaded-src"]=o,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function b(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let v=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:o,width:l,decoding:d,className:u,style:c,fetchPriority:f,placeholder:p,loading:g,unoptimized:v,fill:_,onLoadRef:x,onLoadingCompleteRef:y,setBlurComplete:S,setShowAltText:A,sizesInput:j,onLoad:P,onError:w,...M}=e,E=(0,a.useCallback)(e=>{e&&(w&&(e.src=e.src),e.complete&&h(e,p,x,y,S,v,j))},[r,p,x,y,S,w,v,j]),C=(0,m.useMergedRef)(t,E);return(0,s.jsx)("img",{...M,...b(f),loading:g,width:l,height:o,decoding:d,"data-nimg":_?"fill":"1",className:u,style:c,sizes:i,srcSet:n,src:r,ref:C,onLoad:e=>{h(e.currentTarget,p,x,y,S,v,j)},onError:e=>{A(!0),"empty"!==p&&S(!0),w&&w(e)}})});function _(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...b(r.fetchPriority)};return t&&o.default.preload?(o.default.preload(r.src,n),null):(0,s.jsx)(l.default,{children:(0,s.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let x=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(f.RouterContext),n=(0,a.useContext)(c.ImageConfigContext),i=(0,a.useMemo)(()=>{let e=g||n||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:o,onLoadingComplete:l}=e,m=(0,a.useRef)(o);(0,a.useEffect)(()=>{m.current=o},[o]);let h=(0,a.useRef)(l);(0,a.useEffect)(()=>{h.current=l},[l]);let[b,x]=(0,a.useState)(!1),[y,S]=(0,a.useState)(!1),{props:A,meta:j}=(0,d.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:b,showAltText:y});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v,{...A,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:x,setShowAltText:S,sizesInput:e.sizes,ref:t}),j.priority?(0,s.jsx)(_,{isAppRouter:!r,imgAttributes:A}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8498:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},4515:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return o}}),r(9794);let n=r(1674),i=r(4118);function s(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function o(e,t){var r;let o,l,d,{src:u,sizes:c,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:b,height:v,fill:_=!1,style:x,overrideSrc:y,onLoad:S,onLoadingComplete:A,placeholder:j="empty",blurDataURL:P,fetchPriority:w,decoding:M="async",layout:E,objectFit:C,objectPosition:O,lazyBoundary:I,lazyRoot:z,...N}=e,{imgConf:R,showAltText:k,blurComplete:T,defaultLoader:G}=t,q=R||i.imageConfigDefault;if("allSizes"in q)o=q;else{let e=[...q.deviceSizes,...q.imageSizes].sort((e,t)=>e-t),t=q.deviceSizes.sort((e,t)=>e-t);o={...q,allSizes:e,deviceSizes:t}}if(void 0===G)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let B=N.loader||G;delete N.loader,delete N.srcSet;let D="__next_img_default"in B;if(D){if("custom"===o.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=B;B=t=>{let{config:r,...n}=t;return e(n)}}if(E){"fill"===E&&(_=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(x={...x,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!c&&(c=t)}let U="",F=a(b),H=a(v);if((r=u)&&"object"==typeof r&&(s(r)||void 0!==r.src)){let e=s(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,d=e.blurHeight,P=P||e.blurDataURL,U=e.src,!_){if(F||H){if(F&&!H){let t=F/e.width;H=Math.round(e.height*t)}else if(!F&&H){let t=H/e.height;F=Math.round(e.width*t)}}else F=e.width,H=e.height}}let L=!p&&("lazy"===m||void 0===m);(!(u="string"==typeof u?u:U)||u.startsWith("data:")||u.startsWith("blob:"))&&(f=!0,L=!1),o.unoptimized&&(f=!0),D&&u.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(f=!0);let K=a(h),V=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:O}:{},k?{}:{color:"transparent"},x),W=T||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:F,heightInt:H,blurWidth:l,blurHeight:d,blurDataURL:P||"",objectFit:V.objectFit})+'")':'url("'+j+'")',J=W?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:W}:{},X=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:s,sizes:a,loader:o}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),u=l.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:l.map((e,n)=>o({config:t,src:r,quality:s,width:e})+" "+("w"===d?e:n+1)+d).join(", "),src:o({config:t,src:r,quality:s,width:l[u]})}}({config:o,src:u,unoptimized:f,width:F,quality:K,sizes:c,loader:B});return{props:{...N,loading:L?"lazy":m,fetchPriority:w,width:F,height:H,decoding:M,className:g,style:{...V,...J},sizes:X.sizes,srcSet:X.srcSet,src:y||X.src},meta:{unoptimized:f,priority:p,placeholder:j,fill:_}}}},4426:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return c}});let n=r(9929),i=r(4588),s=r(8732),a=i._(r(2015)),o=n._(r(3309)),l=r(9811),d=r(9241),u=r(8498);function c(e){void 0===e&&(e=!1);let t=[(0,s.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(9794);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(f,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let s=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?s=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?s=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?s=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?s=!1:(r.add(e),n[t]=r)}}}}return s}}()).reverse().map((e,t)=>{let n=e.key||t;if(process.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:n})})}let g=function(e){let{children:t}=e,r=(0,a.useContext)(l.AmpStateContext),n=(0,a.useContext)(d.HeadManagerContext);return(0,s.jsx)(o.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,u.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1674:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:s,objectFit:a}=e,o=n?40*n:t,l=i?40*i:r,d=o&&l?"viewBox='0 0 "+o+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},4118:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},7947:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return o}});let n=r(9929),i=r(4515),s=r(6579),a=n._(r(5643));function o(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=s.Image},5643:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},3309:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(2015),i=()=>{},s=()=>{};function a(e){var t;let{headManager:r,reduceComponentsToState:a}=e;function o(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(a(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),o(),i(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),i(()=>(r&&(r._pendingUpdate=o),()=>{r&&(r._pendingUpdate=o)})),s(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},9794:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},50:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var n=r(8732);r(9361);var i=r(1106),s=r.n(i),a=r(5537),o=r.n(a),l=r(4722),d=r(630);function u(){let{data:e,status:t}=(0,l.useSession)();return(0,n.jsx)("header",{className:o().header,children:(0,n.jsxs)("section",{className:o().section,children:[(0,n.jsxs)("nav",{className:o().nav,children:[(0,n.jsx)(s(),{className:o().tarefas,href:"/",children:(0,n.jsxs)("h1",{children:["Tarefas ",(0,n.jsx)("span",{className:o().meuMais,children:"+"})]})}),e?.user&&(0,n.jsx)(s(),{href:"/dashboard",children:(0,n.jsx)("button",{className:o().sectionButton,children:"Meu painel"})})]}),"loading"===t?(0,n.jsx)(n.Fragment,{}):e?(0,n.jsx)("button",{onClick:()=>(0,l.signOut)(),className:o().button,children:e.user?.name}):(0,n.jsx)("button",{onClick:()=>(0,l.signIn)("google"),className:o().button,children:"Acessar"}),(0,n.jsx)(d.ELn,{})]})})}function c({Component:e,pageProps:t}){return(0,n.jsxs)(l.SessionProvider,{session:t.session,children:[(0,n.jsx)(u,{}),(0,n.jsx)(e,{...t})]})}},3212:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(8732),i=r(883);function s(){return(0,n.jsxs)(i.Html,{lang:"en",children:[(0,n.jsx)(i.Head,{}),(0,n.jsxs)("body",{children:[(0,n.jsx)(i.Main,{}),(0,n.jsx)(i.NextScript,{})]})]})}},4280:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{default:()=>g,getStaticProps:()=>h});var i=r(8732),s=r(7912),a=r.n(s),o=r(9965),l=r.n(o),d=r(5001),u=r.n(d),c=r(4975),f=r(4337),p=r(9398),m=e([f,p]);function g({tarefas:e,comments:t}){return(0,i.jsxs)("div",{className:u().container,children:[(0,i.jsx)(a(),{children:(0,i.jsx)("title",{children:"Create Next App"})}),(0,i.jsxs)("main",{className:u().main,children:[(0,i.jsx)("div",{className:u().logoContent,children:(0,i.jsx)(l(),{className:u().img,src:c.A,alt:"Imagem da home"})}),(0,i.jsxs)("h1",{className:u().tittle,children:["Sistema feito para voc\xea organizar",(0,i.jsx)("br",{}),"seus estudos e tarefas"]}),(0,i.jsxs)("div",{className:u().dadoss,children:[(0,i.jsx)("section",{className:u().section,children:(0,i.jsxs)("span",{className:u().dadosSpan,children:["+",e," posts"]})}),(0,i.jsx)("section",{className:u().section,children:(0,i.jsxs)("span",{children:["+",t," comentarios"]})})]})]})]})}[f,p]=m.then?(await m)():m;let h=async()=>{let e=(0,f.collection)(p.db,"tarefas"),t=await (0,f.getDocs)(e),r=(0,f.collection)(p.db,"comments"),n=await (0,f.getDocs)(r);return{props:{tarefas:t.size||0,comments:n.size||0},revalidate:60}};n()}catch(e){n(e)}})},9398:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.d(t,{db:()=>l});var i=r(6551),s=r(4337),a=e([i,s]);[i,s]=a.then?(await a)():a;let o=(0,i.initializeApp)({apiKey:"AIzaSyBmdX43PYGRc2JvQvxShSwmaKei64MA4y8",authDomain:"tarefaplus-a201b.firebaseapp.com",projectId:"tarefaplus-a201b",storageBucket:"tarefaplus-a201b.firebasestorage.app",messagingSenderId:"883737194036",appId:"1:883737194036:web:5078a4be18a750536fe461"}),l=(0,s.getFirestore)(o);n()}catch(e){n(e)}})},9361:()=>{},9455:(e,t)=>{"use strict";var r;Object.defineProperty(t,"A",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE"}(r||(r={}))},9811:(e,t,r)=>{"use strict";e.exports=r(3865).vendored.contexts.AmpContext},9241:(e,t,r)=>{"use strict";e.exports=r(3865).vendored.contexts.HeadManagerContext},2691:(e,t,r)=>{"use strict";e.exports=r(3865).vendored.contexts.ImageConfigContext},9965:(e,t,r)=>{e.exports=r(7947)},4722:e=>{"use strict";e.exports=require("next-auth/react")},361:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},7912:e=>{"use strict";e.exports=require("next/head")},2015:e=>{"use strict";e.exports=require("react")},2326:e=>{"use strict";e.exports=require("react-dom")},8732:e=>{"use strict";e.exports=require("react/jsx-runtime")},3873:e=>{"use strict";e.exports=require("path")},6551:e=>{"use strict";e.exports=import("firebase/app")},4337:e=>{"use strict";e.exports=import("firebase/firestore")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[916,677,883],()=>r(3557));module.exports=n})();