module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},62212,a=>{a.n(a.i(66114))},59433,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/components/layout/Layout.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/layout/Layout.tsx <module evaluation>","default")},73875,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/components/layout/Layout.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/layout/Layout.tsx","default")},57415,a=>{"use strict";a.i(59433);var b=a.i(73875);a.n(b)},71029,(a,b,c)=>{"use strict";c._=function(a){return a&&a.__esModule?a:{default:a}}},16426,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"warnOnce",{enumerable:!0,get:function(){return d}});let d=a=>{}},1359,(a,b,c)=>{"use strict";function d(a){let{widthInt:b,heightInt:c,blurWidth:d,blurHeight:e,blurDataURL:f,objectFit:g}=a,h=d?40*d:b,i=e?40*e:c,j=h&&i?"viewBox='0 0 "+h+" "+i+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+j+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(j?"none":"contain"===g?"xMidYMid":"cover"===g?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+f+"'/%3E%3C/svg%3E"}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"getImageBlurSvg",{enumerable:!0,get:function(){return d}})},53549,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),!function(a,b){for(var c in b)Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}(c,{VALID_LOADERS:function(){return d},imageConfigDefault:function(){return e}});let d=["default","imgix","cloudinary","akamai","custom"],e={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumResponseBody:5e7,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}},87713,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"getImgProps",{enumerable:!0,get:function(){return i}}),a.r(16426);let d=a.r(1359),e=a.r(53549),f=["-moz-initial","fill","none","scale-down",void 0];function g(a){return void 0!==a.default}function h(a){return void 0===a?a:"number"==typeof a?Number.isFinite(a)?a:NaN:"string"==typeof a&&/^[0-9]+$/.test(a)?parseInt(a,10):NaN}function i(a,b){var c,i;let j,k,l,{src:m,sizes:n,unoptimized:o=!1,priority:p=!1,loading:q,className:r,quality:s,width:t,height:u,fill:v=!1,style:w,overrideSrc:x,onLoad:y,onLoadingComplete:z,placeholder:A="empty",blurDataURL:B,fetchPriority:C,decoding:D="async",layout:E,objectFit:F,objectPosition:G,lazyBoundary:H,lazyRoot:I,...J}=a,{imgConf:K,showAltText:L,blurComplete:M,defaultLoader:N}=b,O=K||e.imageConfigDefault;if("allSizes"in O)j=O;else{let a=[...O.deviceSizes,...O.imageSizes].sort((a,b)=>a-b),b=O.deviceSizes.sort((a,b)=>a-b),d=null==(c=O.qualities)?void 0:c.sort((a,b)=>a-b);j={...O,allSizes:a,deviceSizes:b,qualities:d}}if(void 0===N)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let P=J.loader||N;delete J.loader,delete J.srcSet;let Q="__next_img_default"in P;if(Q){if("custom"===j.loader)throw Object.defineProperty(Error('Image with src "'+m+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let a=P;P=b=>{let{config:c,...d}=b;return a(d)}}if(E){"fill"===E&&(v=!0);let a={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];a&&(w={...w,...a});let b={responsive:"100vw",fill:"100vw"}[E];b&&!n&&(n=b)}let R="",S=h(t),T=h(u);if((i=m)&&"object"==typeof i&&(g(i)||void 0!==i.src)){let a=g(m)?m.default:m;if(!a.src)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(a)),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!a.height||!a.width)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(a)),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(k=a.blurWidth,l=a.blurHeight,B=B||a.blurDataURL,R=a.src,!v)if(S||T){if(S&&!T){let b=S/a.width;T=Math.round(a.height*b)}else if(!S&&T){let b=T/a.height;S=Math.round(a.width*b)}}else S=a.width,T=a.height}let U=!p&&("lazy"===q||void 0===q);(!(m="string"==typeof m?m:R)||m.startsWith("data:")||m.startsWith("blob:"))&&(o=!0,U=!1),j.unoptimized&&(o=!0),Q&&!j.dangerouslyAllowSVG&&m.split("?",1)[0].endsWith(".svg")&&(o=!0);let V=h(s),W=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:F,objectPosition:G}:{},L?{}:{color:"transparent"},w),X=M||"empty"===A?null:"blur"===A?'url("data:image/svg+xml;charset=utf-8,'+(0,d.getImageBlurSvg)({widthInt:S,heightInt:T,blurWidth:k,blurHeight:l,blurDataURL:B||"",objectFit:W.objectFit})+'")':'url("'+A+'")',Y=f.includes(W.objectFit)?"fill"===W.objectFit?"100% 100%":"cover":W.objectFit,Z=X?{backgroundSize:Y,backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},$=function(a){let{config:b,src:c,unoptimized:d,width:e,quality:f,sizes:g,loader:h}=a;if(d)return{src:c,srcSet:void 0,sizes:void 0};let{widths:i,kind:j}=function(a,b,c){let{deviceSizes:d,allSizes:e}=a;if(c){let a=/(^|\s)(1?\d?\d)vw/g,b=[];for(let d;d=a.exec(c);)b.push(parseInt(d[2]));if(b.length){let a=.01*Math.min(...b);return{widths:e.filter(b=>b>=d[0]*a),kind:"w"}}return{widths:e,kind:"w"}}return"number"!=typeof b?{widths:d,kind:"w"}:{widths:[...new Set([b,2*b].map(a=>e.find(b=>b>=a)||e[e.length-1]))],kind:"x"}}(b,e,g),k=i.length-1;return{sizes:g||"w"!==j?g:"100vw",srcSet:i.map((a,d)=>h({config:b,src:c,quality:f,width:a})+" "+("w"===j?a:d+1)+j).join(", "),src:h({config:b,src:c,quality:f,width:i[k]})}}({config:j,src:m,unoptimized:o,width:S,quality:V,sizes:n,loader:P});return{props:{...J,loading:U?"lazy":q,fetchPriority:C,width:S,height:T,decoding:D,className:r,style:{...W,...Z},sizes:$.sizes,srcSet:$.srcSet,src:x||$.src},meta:{unoptimized:o,priority:p,placeholder:A,fill:v}}}},42377,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(11857);a.n(d("[project]/node_modules/next/dist/client/image-component.js <module evaluation>"))},43489,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(11857);a.n(d("[project]/node_modules/next/dist/client/image-component.js"))},18409,a=>{"use strict";a.i(42377);var b=a.i(43489);a.n(b)},37763,(a,b,c)=>{"use strict";function d(a){var b;let{config:c,src:d,width:e,quality:f}=a,g=f||(null==(b=c.qualities)?void 0:b.reduce((a,b)=>Math.abs(b-75)<Math.abs(a-75)?b:a))||75;return c.path+"?url="+encodeURIComponent(d)+"&w="+e+"&q="+g+(d.startsWith("/_next/static/media/"),"")}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return e}}),d.__next_img_default=!0;let e=d},50858,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),!function(a,b){for(var c in b)Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}(c,{default:function(){return i},getImageProps:function(){return h}});let d=a.r(71029),e=a.r(87713),f=a.r(18409),g=d._(a.r(37763));function h(a){let{props:b}=(0,e.getImgProps)(a,{defaultLoader:g.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[a,c]of Object.entries(b))void 0===c&&delete b[a];return{props:b}}let i=f.Image},3236,(a,b,c)=>{b.exports=a.r(50858)},11306,a=>{"use strict";a.s(["40c29ea5706802aaa9b171260da05de6569efcc34f",()=>c.submitEnquiry],11306),a.s([],43915);var b=a.i(5074);a.i(43915);var c=b},21900,a=>{"use strict";a.s(["default",()=>h]);var b=a.i(7997),c=a.i(97647),d=a.i(3236),e=a.i(57415),f=a.i(48661);let g={"bedside-lockers-over-bed-tables":{image:"/assets/images/service/R4.webp",icon:"fa-box-archive",accent:"#4a90e2"},"examination-room-furniture":{image:"/assets/images/service/R3.webp",icon:"fa-stethoscope",accent:"#27ae60"},"hospital-icu-beds":{image:"/assets/images/service/R1.webp",icon:"fa-bed",accent:"#e74c3c"},"medical-trolleys-carts":{image:"/assets/images/service/R4.webp",icon:"fa-truck-medical",accent:"#f39c12"},"stools-chairs-patient-seating":{image:"/assets/images/service/R9.webp",icon:"fa-chair",accent:"#8e44ad"},"stretchers-screens-accessories":{image:"/assets/images/service/R8.webp",icon:"fa-wheelchair",accent:"#16a085"}};function h(){return(0,b.jsxs)(e.default,{breadcrumbTitle:"Our Product Range",wrapperCls:"product-range-page",children:[(0,b.jsx)("style",{children:`
        /* ── Hero Stats Bar ── */
        .pr-stats-bar {
          background: linear-gradient(90deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%);
          padding: 28px 0;
          border-bottom: 3px solid #fe5e04;
        }
        .pr-stat-item {
          text-align: center;
          color: #fff;
          position: relative;
        }
        .pr-stat-item + .pr-stat-item::before {
          content: '';
          position: absolute;
          left: 0; top: 20%; height: 60%;
          width: 1px;
          background: rgba(255,255,255,0.15);
        }
        .pr-stat-num {
          font-size: 32px;
          font-weight: 800;
          color: #fe5e04;
          line-height: 1;
          display: block;
        }
        .pr-stat-label {
          font-size: 13px;
          color: rgba(255,255,255,0.7);
          margin-top: 4px;
          display: block;
          letter-spacing: 0.5px;
        }

        /* ── Section Header ── */
        .pr-section-header {
          text-align: center;
          padding: 70px 0 50px;
        }
        .pr-section-header .sub-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff4ee;
          color: #fe5e04;
          border: 1px solid #ffd7c2;
          border-radius: 30px;
          padding: 6px 18px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 18px;
        }
        .pr-section-header h2 {
          font-size: 36px;
          font-weight: 800;
          color: #1a1a2e;
          margin-bottom: 14px;
          line-height: 1.25;
        }
        .pr-section-header h2 span { color: #fe5e04; }
        .pr-section-header p {
          font-size: 16px;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ── Grid ── */
        .pr-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          padding-bottom: 80px;
        }
        @media (max-width: 991px) {
          .pr-grid { grid-template-columns: repeat(2, 1fr); }
          .pr-section-header h2 { font-size: 28px; }
        }
        @media (max-width: 575px) {
          .pr-grid { grid-template-columns: 1fr; gap: 20px; }
        }

        /* ── Card ── */
        .pr-card {
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
          border: 1px solid #f0f0f0;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          display: flex;
          flex-direction: column;
        }
        .pr-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.13);
        }
        .pr-card-img {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          background: #f5f5f5;
        }
        .pr-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .pr-card:hover .pr-card-img img {
          transform: scale(1.07);
        }
        .pr-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .pr-card:hover .pr-card-overlay {
          opacity: 1;
        }
        .pr-card-count {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(255,255,255,0.95);
          color: #fe5e04;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 30px;
          backdrop-filter: blur(4px);
        }
        .pr-card-icon {
          position: absolute;
          bottom: 14px;
          left: 14px;
          width: 42px;
          height: 42px;
          background: #fe5e04;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 17px;
          opacity: 0;
          transform: translateY(8px);
          transition: all 0.35s ease;
        }
        .pr-card:hover .pr-card-icon {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Card Body ── */
        .pr-card-body {
          padding: 22px 24px 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .pr-card-cat {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 600;
          color: #fe5e04;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 10px;
        }
        .pr-card-cat::before {
          content: '';
          display: block;
          width: 18px;
          height: 2px;
          background: #fe5e04;
          border-radius: 2px;
          flex-shrink: 0;
        }
        .pr-card-body h3 {
          font-size: 19px;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0 0 10px;
          line-height: 1.35;
        }
        .pr-card-body h3 a {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s;
        }
        .pr-card-body h3 a:hover { color: #fe5e04; }
        .pr-card-body p {
          font-size: 14px;
          color: #777;
          line-height: 1.65;
          flex: 1;
          margin-bottom: 20px;
        }
        .pr-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #f0f0f0;
          padding-top: 16px;
          margin-top: auto;
        }
        .pr-view-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #fe5e04;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          padding: 9px 20px;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
          letter-spacing: 0.3px;
        }
        .pr-view-btn:hover {
          background: #d94e00;
          color: #fff;
          transform: translateX(3px);
        }
        .pr-card-products-count {
          font-size: 12px;
          color: #aaa;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .pr-card-products-count i { color: #fe5e04; font-size: 11px; }

        /* ── CTA strip ── */
        .pr-cta-strip {
          background: linear-gradient(135deg, #fe5e04 0%, #ff8533 100%);
          border-radius: 20px;
          padding: 50px 50px;
          margin: 0 0 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          box-shadow: 0 10px 40px rgba(254,94,4,0.3);
        }
        @media (max-width: 767px) {
          .pr-cta-strip { flex-direction: column; text-align: center; padding: 40px 24px; }
        }
        .pr-cta-strip h3 {
          font-size: 26px;
          font-weight: 800;
          color: #fff;
          margin: 0 0 8px;
        }
        .pr-cta-strip p {
          font-size: 15px;
          color: rgba(255,255,255,0.85);
          margin: 0;
        }
        .pr-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          color: #fe5e04;
          font-size: 15px;
          font-weight: 700;
          padding: 14px 32px;
          border-radius: 50px;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.3s;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }
        .pr-cta-btn:hover {
          background: #1a1a2e;
          color: #fff;
        }
      `}),(0,b.jsxs)("div",{className:"auto-container",children:[(0,b.jsxs)("div",{className:"pr-section-header",children:[(0,b.jsxs)("div",{className:"sub-badge",children:[(0,b.jsx)("i",{className:"fas fa-th-large"}),"Explore Our Categories"]}),(0,b.jsxs)("h2",{children:["Our ",(0,b.jsx)("span",{children:"Product Range"})]}),(0,b.jsx)("p",{children:"Browse our complete range of premium hospital furniture and surgical equipment — designed for durability, safety, and clinical excellence."})]}),(0,b.jsx)("div",{className:"pr-grid",children:f.departments.map((a,e)=>{let f,h,i,j=(f=a.slug,g[f]?.image??`/assets/images/service/service-${e%10+1}.jpg`),k=(h=a.slug,i=a.icon||"fa-box",g[h]?.icon??i);return(0,b.jsxs)("div",{className:"pr-card",children:[(0,b.jsxs)("div",{className:"pr-card-img",children:[(0,b.jsx)(d.default,{src:j,alt:a.name,width:480,height:230,style:{width:"100%",height:"100%",objectFit:"cover"}}),(0,b.jsx)("div",{className:"pr-card-overlay"}),(0,b.jsxs)("span",{className:"pr-card-count",children:[a.products.length," Products"]}),(0,b.jsx)("div",{className:"pr-card-icon",children:(0,b.jsx)("i",{className:`fas ${k}`})})]}),(0,b.jsxs)("div",{className:"pr-card-body",children:[(0,b.jsx)("span",{className:"pr-card-cat",children:"Category"}),(0,b.jsx)("h3",{children:(0,b.jsx)(c.default,{href:`/${a.slug}`,children:a.name})}),(0,b.jsx)("p",{children:a.description.length>120?a.description.substring(0,120)+"...":a.description}),(0,b.jsxs)("div",{className:"pr-card-footer",children:[(0,b.jsxs)(c.default,{href:`/${a.slug}`,className:"pr-view-btn",children:["View Products ",(0,b.jsx)("i",{className:"fas fa-arrow-right"})]}),(0,b.jsxs)("span",{className:"pr-card-products-count",children:[(0,b.jsx)("i",{className:"fas fa-cube"}),a.products.length," items"]})]})]})]},a.slug)})}),(0,b.jsxs)("div",{className:"pr-cta-strip",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{children:"Can't find what you're looking for?"}),(0,b.jsx)("p",{children:"Contact us for custom orders, bulk pricing, or product enquiries."})]}),(0,b.jsxs)(c.default,{href:"/contact",className:"pr-cta-btn",children:[(0,b.jsx)("i",{className:"fas fa-phone-alt"}),"Get In Touch"]})]})]})]})}}];

//# sourceMappingURL=%5Broot-of-the-server%5D__bf9469d0._.js.map