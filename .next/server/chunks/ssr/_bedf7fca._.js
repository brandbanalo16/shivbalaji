module.exports=[91542,a=>{"use strict";a.s(["default",()=>e]);var b=a.i(87924),c=a.i(72131),d=a.i(71133);function e({images:a,productName:e}){let[f,g]=(0,c.useState)(0),[h,i]=(0,c.useState)({}),[j,k]=(0,c.useState)(!1),l=(0,c.useRef)(null),m=a[f]||a[0];return(0,b.jsxs)("div",{className:"product-image-gallery layout-side",children:[(0,b.jsx)("style",{children:`
        .product-image-gallery {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        @media (min-width: 992px) {
          .product-image-gallery.layout-side {
            flex-direction: row-reverse;
          }
          .gallery-thumbnails.layout-side {
            flex-direction: column;
            width: 90px;
          }
        }

        .gallery-main-image {
          flex: 1;
          position: relative;
          aspect-ratio: 1 / 1;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          cursor: crosshair;
        }

        .gallery-main-image img {
          width: 100%;
          height: 100%;
          object-fit: contain; /* Product centered inside the square */
          padding: 30px;
          transition: transform 0.1s ease-out;
        }
        
        .gallery-main-image.zoomed img {
          padding: 0;
          object-fit: cover;
        }

        .gallery-thumbnails {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          padding-bottom: 8px; /* space for scrollbar */
        }
        
        .gallery-thumbnails::-webkit-scrollbar {
          height: 4px;
        }
        .gallery-thumbnails::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }

        .gallery-thumbnail {
          width: 90px;
          height: 90px;
          flex-shrink: 0;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
          background: #ffffff;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0,0,0,0.02);
        }

        .gallery-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 10px;
        }

        .gallery-thumbnail:hover {
          border-color: #cbd5e1;
        }

        .gallery-thumbnail.active {
          border-color: #fe5e04;
          box-shadow: 0 4px 15px rgba(254,94,4,0.15);
        }
      `}),(0,b.jsx)("div",{className:"gallery-main-image "+(j?"zoomed":""),ref:l,onMouseMove:a=>{if(!l.current)return;let{left:b,top:c,width:d,height:e}=l.current.getBoundingClientRect();i({transformOrigin:(a.clientX-b)/d*100+"% "+(a.clientY-c)/e*100+"%",transform:"scale(2.5)"})},onMouseEnter:()=>k(!0),onMouseLeave:()=>{k(!1),i({transformOrigin:"center center",transform:"scale(1)"})},children:(0,b.jsx)(d.default,{src:m,alt:e,width:800,height:800,style:j?h:{},priority:!0})}),a.length>1&&(0,b.jsx)("div",{className:"gallery-thumbnails layout-side",children:a.map((a,c)=>(0,b.jsx)("div",{className:"gallery-thumbnail "+(c===f?"active":""),onClick:()=>g(c),children:(0,b.jsx)(d.default,{src:a,alt:e+" thumbnail "+(c+1),width:100,height:100})},c))})]})}},22980,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_wowjs_dist_wow_28a448ac.js"].map(b=>a.l(b))).then(()=>b(47911)))}];

//# sourceMappingURL=_bedf7fca._.js.map