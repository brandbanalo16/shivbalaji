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
      `}),(0,b.jsx)("div",{className:"gallery-main-image "+(j?"zoomed":""),ref:l,onMouseMove:a=>{if(!l.current)return;let{left:b,top:c,width:d,height:e}=l.current.getBoundingClientRect();i({transformOrigin:(a.clientX-b)/d*100+"% "+(a.clientY-c)/e*100+"%",transform:"scale(2.5)"})},onMouseEnter:()=>k(!0),onMouseLeave:()=>{k(!1),i({transformOrigin:"center center",transform:"scale(1)"})},children:(0,b.jsx)(d.default,{src:m,alt:e,width:800,height:800,style:j?h:{},priority:!0})}),a.length>1&&(0,b.jsx)("div",{className:"gallery-thumbnails layout-side",children:a.map((a,c)=>(0,b.jsx)("div",{className:"gallery-thumbnail "+(c===f?"active":""),onClick:()=>g(c),children:(0,b.jsx)(d.default,{src:a,alt:e+" thumbnail "+(c+1),width:100,height:100})},c))})]})}},54725,a=>{"use strict";a.s(["default",()=>d]);var b=a.i(87924),c=a.i(72131);function d({description:a,features:d,specifications:e}){let[f,g]=(0,c.useState)("description");return(0,b.jsxs)("div",{className:"product-tabs",style:{marginBottom:"60px"},children:[(0,b.jsxs)("div",{className:"tab-buttons",style:{display:"flex",gap:"5px",borderBottom:"1px solid #e2e8f0",flexWrap:"wrap",margin:0},children:[a&&(0,b.jsx)("button",{onClick:()=>g("description"),style:{padding:"12px 25px",background:"description"===f?"#fe5e04":"#1e293b",color:"description"===f?"#fff":"#cbd5e1",border:"none",fontWeight:600,fontSize:"15px",cursor:"pointer",borderTopLeftRadius:"5px",borderTopRightRadius:"5px",transition:"all 0.3s ease"},children:"Description"}),d&&d.length>0&&(0,b.jsx)("button",{onClick:()=>g("features"),style:{padding:"12px 25px",background:"features"===f?"#fe5e04":"#1e293b",color:"features"===f?"#fff":"#cbd5e1",border:"none",fontWeight:600,fontSize:"15px",cursor:"pointer",borderTopLeftRadius:"5px",borderTopRightRadius:"5px",transition:"all 0.3s ease"},children:"Key Features"}),e&&e.length>0&&(0,b.jsx)("button",{onClick:()=>g("specifications"),style:{padding:"12px 25px",background:"specifications"===f?"#fe5e04":"#1e293b",color:"specifications"===f?"#fff":"#cbd5e1",border:"none",fontWeight:600,fontSize:"15px",cursor:"pointer",borderTopLeftRadius:"5px",borderTopRightRadius:"5px",transition:"all 0.3s ease"},children:"Specifications"})]}),(0,b.jsxs)("div",{className:"tab-content",style:{border:"1px solid #e2e8f0",borderTop:"none",padding:"40px",borderRadius:"0 0 5px 5px",background:"#fff"},children:["description"===f&&(0,b.jsxs)("div",{className:"tab-pane active",style:{animation:"fadeIn 0.5s ease"},children:[(0,b.jsx)("h3",{style:{fontSize:"20px",fontWeight:700,marginBottom:"20px",color:"#334155"},children:"Product Description"}),(0,b.jsx)("div",{style:{color:"#64748b",lineHeight:"1.8",fontSize:"15px"},dangerouslySetInnerHTML:{__html:a}})]}),"features"===f&&(0,b.jsxs)("div",{className:"tab-pane active",style:{animation:"fadeIn 0.5s ease"},children:[(0,b.jsx)("h3",{style:{fontSize:"20px",fontWeight:700,marginBottom:"20px",color:"#334155"},children:"Key Features"}),(0,b.jsx)("ul",{style:{paddingLeft:"20px",color:"#64748b",lineHeight:"1.8",fontSize:"15px"},children:d.map((a,c)=>(0,b.jsx)("li",{style:{marginBottom:"10px",listStyleType:"disc"},children:a},c))})]}),"specifications"===f&&(0,b.jsxs)("div",{className:"tab-pane active",style:{animation:"fadeIn 0.5s ease"},children:[(0,b.jsx)("h3",{style:{fontSize:"20px",fontWeight:700,marginBottom:"20px",color:"#334155"},children:"Technical Specifications"}),(0,b.jsx)("div",{className:"table-responsive",children:(0,b.jsx)("table",{className:"table",style:{border:"1px solid #e2e8f0",borderRadius:"8px",overflow:"hidden",marginBottom:0},children:(0,b.jsx)("tbody",{children:e.map((a,c)=>(0,b.jsx)("tr",{style:{borderBottom:c===e.length-1?"none":"1px solid #e2e8f0",background:c%2==0?"#f8fafc":"#fff"},children:(0,b.jsxs)("td",{style:{padding:"15px 20px",color:"#475569",fontSize:"15px"},children:[(0,b.jsx)("i",{className:"fa-solid fa-check",style:{color:"#fe5e04",marginRight:"12px",fontSize:"14px"}}),a]})},c))})})})]})]}),(0,b.jsx)("style",{dangerouslySetInnerHTML:{__html:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}})]})}},73885,a=>{"use strict";a.s(["default",()=>e]);var b=a.i(87924),c=a.i(72131),d=a.i(40352);function e({productName:a}){let[e,f]=(0,c.useState)(!1),[g,h]=(0,c.useState)(null),i=async b=>{b.preventDefault(),f(!0),h(null);let c=new FormData(b.currentTarget),e={formName:"Product Enquiry",name:c.get("name"),email:c.get("email"),phone:c.get("phone"),message:c.get("message"),product:a},g=await (0,d.submitEnquiry)(e);h({type:g.success?"success":"error",text:g.message}),g.success&&b.currentTarget.reset(),f(!1)};return(0,b.jsxs)("form",{onSubmit:i,children:[g&&(0,b.jsx)("div",{style:{padding:"15px",marginBottom:"20px",borderRadius:"6px",background:"success"===g.type?"#dcfce7":"#fee2e2",color:"success"===g.type?"#166534":"#991b1b",fontSize:"14px"},children:g.text}),(0,b.jsxs)("div",{className:"form-group mb-3",children:[(0,b.jsx)("label",{style:{fontSize:"14px",fontWeight:600,color:"#475569",marginBottom:"8px",display:"block"},children:"Full Name *"}),(0,b.jsx)("input",{type:"text",name:"name",required:!0,style:{width:"100%",padding:"14px 20px",border:"1px solid #cbd5e1",borderRadius:"6px",fontSize:"15px",background:"#f8fafc"},placeholder:"Enter your name",disabled:e})]}),(0,b.jsxs)("div",{className:"row mb-3",children:[(0,b.jsxs)("div",{className:"col-md-6 form-group mb-3 mb-md-0",children:[(0,b.jsx)("label",{style:{fontSize:"14px",fontWeight:600,color:"#475569",marginBottom:"8px",display:"block"},children:"Email Address *"}),(0,b.jsx)("input",{type:"email",name:"email",required:!0,style:{width:"100%",padding:"14px 20px",border:"1px solid #cbd5e1",borderRadius:"6px",fontSize:"15px",background:"#f8fafc"},placeholder:"Enter your email",disabled:e})]}),(0,b.jsxs)("div",{className:"col-md-6 form-group",children:[(0,b.jsx)("label",{style:{fontSize:"14px",fontWeight:600,color:"#475569",marginBottom:"8px",display:"block"},children:"Phone Number *"}),(0,b.jsx)("input",{type:"text",name:"phone",required:!0,style:{width:"100%",padding:"14px 20px",border:"1px solid #cbd5e1",borderRadius:"6px",fontSize:"15px",background:"#f8fafc"},placeholder:"Enter your phone",disabled:e})]})]}),(0,b.jsxs)("div",{className:"form-group mb-4",children:[(0,b.jsx)("label",{style:{fontSize:"14px",fontWeight:600,color:"#475569",marginBottom:"8px",display:"block"},children:"Message"}),(0,b.jsx)("textarea",{name:"message",rows:4,style:{width:"100%",padding:"14px 20px",border:"1px solid #cbd5e1",borderRadius:"6px",fontSize:"15px",resize:"none",background:"#f8fafc"},placeholder:`I am interested in ${a}...`,disabled:e})]}),(0,b.jsx)("button",{type:"submit",disabled:e,className:"theme-btn btn-one",style:{width:"100%",border:"none",padding:"15px",borderRadius:"6px",opacity:e?.7:1},children:(0,b.jsxs)("span",{style:{padding:"0"},children:[e?"Submitting...":"Submit Enquiry"," ",(0,b.jsx)("i",{className:"fa-solid fa-arrow-right ms-2"})]})})]})}},22980,a=>{a.v(b=>Promise.all(["server/chunks/ssr/node_modules_wowjs_dist_wow_28a448ac.js"].map(b=>a.l(b))).then(()=>b(47911)))}];

//# sourceMappingURL=_a0b48582._.js.map