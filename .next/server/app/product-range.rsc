1:"$Sreact.fragment"
2:I[39756,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/7d5fd19a460be294.js"],"default"]
3:I[37457,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/7d5fd19a460be294.js"],"default"]
4:I[22016,["/_next/static/chunks/9eea60cd2e706f09.js","/_next/static/chunks/386c81df302e8b94.js","/_next/static/chunks/d39446d198fc5493.js"],"default"]
5:I[41911,["/_next/static/chunks/9eea60cd2e706f09.js"],"default"]
6:I[98406,["/_next/static/chunks/9eea60cd2e706f09.js"],"default"]
7:I[54026,["/_next/static/chunks/9eea60cd2e706f09.js","/_next/static/chunks/386c81df302e8b94.js","/_next/static/chunks/d39446d198fc5493.js"],"default"]
10:I[68027,["/_next/static/chunks/9eea60cd2e706f09.js"],"default"]
:HL["/_next/static/chunks/476db5d00475d961.css","style"]
:HL["/_next/static/chunks/6262a15d23b614f3.css","style"]
:HL["/_next/static/chunks/fddcce455ee11745.css","style"]
:HL["/_next/static/chunks/0ae024b180240453.css","style"]
:HL["/_next/static/chunks/c0baae3da34b98c0.css","style"]
:HL["/_next/static/chunks/83cdee1d967b9c88.css","style"]
:HL["/_next/static/chunks/6b70eca557afb560.css","style"]
:HL["/_next/static/chunks/27aab4816fbfe2dc.css","style"]
:HL["/_next/static/chunks/163f657a16afbe5e.css","style"]
:HL["/_next/static/media/a85fe84266768609-s.p.e658778d.woff2","font",{"crossOrigin":"","type":"font/woff2"}]
:HL["/_next/static/media/ce62453a442c7f35-s.p.124b2306.woff2","font",{"crossOrigin":"","type":"font/woff2"}]
8:T1f81,
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
      0:{"P":null,"b":"iNDKfqEO3SgEAY2Ed0jfN","p":"","c":["","product-range"],"i":false,"f":[[["",{"children":["product-range",{"children":["__PAGE__",{}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/476db5d00475d961.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/6262a15d23b614f3.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","2",{"rel":"stylesheet","href":"/_next/static/chunks/fddcce455ee11745.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","3",{"rel":"stylesheet","href":"/_next/static/chunks/0ae024b180240453.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","4",{"rel":"stylesheet","href":"/_next/static/chunks/c0baae3da34b98c0.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","5",{"rel":"stylesheet","href":"/_next/static/chunks/83cdee1d967b9c88.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","6",{"rel":"stylesheet","href":"/_next/static/chunks/6b70eca557afb560.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","7",{"rel":"stylesheet","href":"/_next/static/chunks/27aab4816fbfe2dc.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","8",{"rel":"stylesheet","href":"/_next/static/chunks/163f657a16afbe5e.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","script","script-0",{"src":"/_next/static/chunks/9eea60cd2e706f09.js","async":true,"nonce":"$undefined"}]],["$","html",null,{"lang":"en","children":["$","body",null,{"className":"roboto_521dbee7-module__it5UaG__variable caveat_3ab2ea4-module__A1ZJyq__variable","children":[["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","section",null,{"className":"error-section centred pt_130 pb_150","children":["$","div",null,{"className":"auto-container","children":["$","div",null,{"className":"content-box","children":[["$","h1",null,{"children":"404"}],["$","h2",null,{"children":["Oops! that page can not ",["$","br",null,{}],"be found."]}],["$","$L4",null,{"href":"/","className":"theme-btn btn-two","children":["$","span",null,{"children":"Back to Homepage"}]}]]}]}]}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}],["$","$L5",null,{}],["$","$L6",null,{}]]}]}]]}],{"children":["product-range",["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["__PAGE__",["$","$1","c",{"children":[["$","$L7",null,{"breadcrumbTitle":"Our Product Range","wrapperCls":"product-range-page","children":[["$","style",null,{"children":"$8"}],"$L9"]}],["$La","$Lb"],"$Lc"]}],{},null,false]},null,false]},["$Ld",[],["$Le"]],false],"$Lf",false]],"m":"$undefined","G":["$10",["$L11","$L12","$L13","$L14","$L15","$L16","$L17","$L18","$L19"]],"s":false,"S":true}
1a:I[5500,["/_next/static/chunks/9eea60cd2e706f09.js","/_next/static/chunks/386c81df302e8b94.js","/_next/static/chunks/d39446d198fc5493.js"],"Image"]
22:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/7d5fd19a460be294.js"],"OutletBoundary"]
24:I[11533,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/7d5fd19a460be294.js"],"AsyncMetadataOutlet"]
26:I[36740,["/_next/static/chunks/9eea60cd2e706f09.js","/_next/static/chunks/195eabe12f5d099c.js"],"default"]
27:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/7d5fd19a460be294.js"],"ViewportBoundary"]
29:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/7d5fd19a460be294.js"],"MetadataBoundary"]
2a:"$Sreact.suspense"
9:["$","div",null,{"className":"auto-container","children":[["$","div",null,{"className":"pr-section-header","children":[["$","div",null,{"className":"sub-badge","children":[["$","i",null,{"className":"fas fa-th-large"}],"Explore Our Categories"]}],["$","h2",null,{"children":["Our ",["$","span",null,{"children":"Product Range"}]]}],["$","p",null,{"children":"Browse our complete range of premium hospital furniture and surgical equipment — designed for durability, safety, and clinical excellence."}]]}],["$","div",null,{"className":"pr-grid","children":[["$","div","hospital-icu-beds",{"className":"pr-card","children":[["$","div",null,{"className":"pr-card-img","children":[["$","$L1a",null,{"src":"/assets/images/service/R1.webp","alt":"Hospital & ICU Beds","width":480,"height":230,"style":{"width":"100%","height":"100%","objectFit":"cover"}}],["$","div",null,{"className":"pr-card-overlay"}],["$","span",null,{"className":"pr-card-count","children":[20," Products"]}],["$","div",null,{"className":"pr-card-icon","children":["$","i",null,{"className":"fas fa-bed"}]}]]}],["$","div",null,{"className":"pr-card-body","children":[["$","span",null,{"className":"pr-card-cat","children":"Category"}],["$","h3",null,{"children":["$","$L4",null,{"href":"/hospital-icu-beds","children":"Hospital & ICU Beds"}]}],["$","p",null,{"children":"Comfort-oriented hospital & ICU beds built for safe patient handling, reliable positioning and efficient clinical care. ..."}],["$","div",null,{"className":"pr-card-footer","children":[["$","$L4",null,{"href":"/hospital-icu-beds","className":"pr-view-btn","children":["View Products ",["$","i",null,{"className":"fas fa-arrow-right"}]]}],["$","span",null,{"className":"pr-card-products-count","children":[["$","i",null,{"className":"fas fa-cube"}],20," items"]}]]}]]}]]}],["$","div","medical-trolleys-carts",{"className":"pr-card","children":[["$","div",null,{"className":"pr-card-img","children":[["$","$L1a",null,{"src":"/assets/images/service/R4.webp","alt":"Medical Trolleys & Carts","width":480,"height":230,"style":{"width":"100%","height":"100%","objectFit":"cover"}}],["$","div",null,{"className":"pr-card-overlay"}],["$","span",null,{"className":"pr-card-count","children":[26," Products"]}],["$","div",null,{"className":"pr-card-icon","children":["$","i",null,{"className":"fas fa-truck-medical"}]}]]}],["$","div",null,{"className":"pr-card-body","children":[["$","span",null,{"className":"pr-card-cat","children":"Category"}],["$","h3",null,{"children":["$","$L4",null,{"href":"/medical-trolleys-carts","children":"Medical Trolleys & Carts"}]}],["$","p",null,{"children":"Hospital trolleys and carts for emergency response, medication distribution, instrument handling and ward mobility. ISO-..."}],["$","div",null,{"className":"pr-card-footer","children":[["$","$L4",null,{"href":"/medical-trolleys-carts","className":"pr-view-btn","children":["View Products ",["$","i",null,{"className":"fas fa-arrow-right"}]]}],["$","span",null,{"className":"pr-card-products-count","children":[["$","i",null,{"className":"fas fa-cube"}],26," items"]}]]}]]}]]}],["$","div","bedside-lockers-over-bed-tables",{"className":"pr-card","children":[["$","div",null,{"className":"pr-card-img","children":[["$","$L1a",null,{"src":"/assets/images/service/R4.webp","alt":"Bedside Lockers & Over-Bed Tables","width":480,"height":230,"style":{"width":"100%","height":"100%","objectFit":"cover"}}],["$","div",null,{"className":"pr-card-overlay"}],["$","span",null,{"className":"pr-card-count","children":[10," Products"]}],["$","div",null,{"className":"pr-card-icon","children":["$","i",null,{"className":"fas fa-box-archive"}]}]]}],["$","div",null,{"className":"pr-card-body","children":[["$","span",null,{"className":"pr-card-cat","children":"Category"}],["$","h3",null,{"children":["$","$L4",null,{"href":"/bedside-lockers-over-bed-tables","children":"Bedside Lockers & Over-Bed Tables"}]}],["$","p",null,{"children":"Bedside lockers and over-bed tables for organized patient storage and bedside utility. Available in standard, deluxe, AB..."}],["$","div",null,{"className":"pr-card-footer","children":[["$","$L4",null,{"href":"/bedside-lockers-over-bed-tables","className":"pr-view-btn","children":["View Products ",["$","i",null,{"className":"fas fa-arrow-right"}]]}],["$","span",null,{"className":"pr-card-products-count","children":[["$","i",null,{"className":"fas fa-cube"}],10," items"]}]]}]]}]]}],["$","div","examination-room-furniture",{"className":"pr-card","children":[["$","div",null,{"className":"pr-card-img","children":[["$","$L1a",null,{"src":"/assets/images/service/R3.webp","alt":"Examination Room Furniture","width":480,"height":230,"style":{"width":"100%","height":"100%","objectFit":"cover"}}],"$L1b","$L1c","$L1d"]}],"$L1e"]}],"$L1f","$L20"]}],"$L21"]}]
a:["$","script","script-0",{"src":"/_next/static/chunks/386c81df302e8b94.js","async":true,"nonce":"$undefined"}]
b:["$","script","script-1",{"src":"/_next/static/chunks/d39446d198fc5493.js","async":true,"nonce":"$undefined"}]
c:["$","$L22",null,{"children":["$L23",["$","$L24",null,{"promise":"$@25"}]]}]
d:["$","$L26","l",{}]
e:["$","script","script-0",{"src":"/_next/static/chunks/195eabe12f5d099c.js","async":true}]
f:["$","$1","h",{"children":[null,[["$","$L27",null,{"children":"$L28"}],["$","meta",null,{"name":"next-size-adjust","content":""}]],["$","$L29",null,{"children":["$","div",null,{"hidden":true,"children":["$","$2a",null,{"fallback":null,"children":"$L2b"}]}]}]]}]
11:["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/476db5d00475d961.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
12:["$","link","1",{"rel":"stylesheet","href":"/_next/static/chunks/6262a15d23b614f3.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
13:["$","link","2",{"rel":"stylesheet","href":"/_next/static/chunks/fddcce455ee11745.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
14:["$","link","3",{"rel":"stylesheet","href":"/_next/static/chunks/0ae024b180240453.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
15:["$","link","4",{"rel":"stylesheet","href":"/_next/static/chunks/c0baae3da34b98c0.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
16:["$","link","5",{"rel":"stylesheet","href":"/_next/static/chunks/83cdee1d967b9c88.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
17:["$","link","6",{"rel":"stylesheet","href":"/_next/static/chunks/6b70eca557afb560.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
18:["$","link","7",{"rel":"stylesheet","href":"/_next/static/chunks/27aab4816fbfe2dc.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
19:["$","link","8",{"rel":"stylesheet","href":"/_next/static/chunks/163f657a16afbe5e.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]
1b:["$","div",null,{"className":"pr-card-overlay"}]
1c:["$","span",null,{"className":"pr-card-count","children":[6," Products"]}]
1d:["$","div",null,{"className":"pr-card-icon","children":["$","i",null,{"className":"fas fa-stethoscope"}]}]
1e:["$","div",null,{"className":"pr-card-body","children":[["$","span",null,{"className":"pr-card-cat","children":"Category"}],["$","h3",null,{"children":["$","$L4",null,{"href":"/examination-room-furniture","children":"Examination Room Furniture"}]}],["$","p",null,{"children":"Examination couches, OPD chairs and procedure tables designed for patient comfort and clinical efficiency. Trusted by ho..."}],["$","div",null,{"className":"pr-card-footer","children":[["$","$L4",null,{"href":"/examination-room-furniture","className":"pr-view-btn","children":["View Products ",["$","i",null,{"className":"fas fa-arrow-right"}]]}],["$","span",null,{"className":"pr-card-products-count","children":[["$","i",null,{"className":"fas fa-cube"}],6," items"]}]]}]]}]
1f:["$","div","stools-chairs-patient-seating",{"className":"pr-card","children":[["$","div",null,{"className":"pr-card-img","children":[["$","$L1a",null,{"src":"/assets/images/service/R9.webp","alt":"Stools, Chairs & Patient Seating","width":480,"height":230,"style":{"width":"100%","height":"100%","objectFit":"cover"}}],["$","div",null,{"className":"pr-card-overlay"}],["$","span",null,{"className":"pr-card-count","children":[14," Products"]}],["$","div",null,{"className":"pr-card-icon","children":["$","i",null,{"className":"fas fa-chair"}]}]]}],["$","div",null,{"className":"pr-card-body","children":[["$","span",null,{"className":"pr-card-cat","children":"Category"}],["$","h3",null,{"children":["$","$L4",null,{"href":"/stools-chairs-patient-seating","children":"Stools, Chairs & Patient Seating"}]}],["$","p",null,{"children":"Hospital stools, chairs and patient seating including revolving stools, surgeon's chairs, blood donor chairs and multi-s..."}],["$","div",null,{"className":"pr-card-footer","children":[["$","$L4",null,{"href":"/stools-chairs-patient-seating","className":"pr-view-btn","children":["View Products ",["$","i",null,{"className":"fas fa-arrow-right"}]]}],["$","span",null,{"className":"pr-card-products-count","children":[["$","i",null,{"className":"fas fa-cube"}],14," items"]}]]}]]}]]}]
20:["$","div","stretchers-screens-accessories",{"className":"pr-card","children":[["$","div",null,{"className":"pr-card-img","children":[["$","$L1a",null,{"src":"/assets/images/service/R8.webp","alt":"Stretchers, Screens & Accessories","width":480,"height":230,"style":{"width":"100%","height":"100%","objectFit":"cover"}}],["$","div",null,{"className":"pr-card-overlay"}],["$","span",null,{"className":"pr-card-count","children":[11," Products"]}],["$","div",null,{"className":"pr-card-icon","children":["$","i",null,{"className":"fas fa-wheelchair"}]}]]}],["$","div",null,{"className":"pr-card-body","children":[["$","span",null,{"className":"pr-card-cat","children":"Category"}],["$","h3",null,{"children":["$","$L4",null,{"href":"/stretchers-screens-accessories","children":"Stretchers, Screens & Accessories"}]}],["$","p",null,{"children":"Patient stretchers, trolleys, bedside privacy screens and hospital accessories. Built for safe patient transport and cli..."}],["$","div",null,{"className":"pr-card-footer","children":[["$","$L4",null,{"href":"/stretchers-screens-accessories","className":"pr-view-btn","children":["View Products ",["$","i",null,{"className":"fas fa-arrow-right"}]]}],["$","span",null,{"className":"pr-card-products-count","children":[["$","i",null,{"className":"fas fa-cube"}],11," items"]}]]}]]}]]}]
21:["$","div",null,{"className":"pr-cta-strip","children":[["$","div",null,{"children":[["$","h3",null,{"children":"Can't find what you're looking for?"}],["$","p",null,{"children":"Contact us for custom orders, bulk pricing, or product enquiries."}]]}],["$","$L4",null,{"href":"/contact","className":"pr-cta-btn","children":[["$","i",null,{"className":"fas fa-phone-alt"}],"Get In Touch"]}]]}]
28:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
23:null
2c:I[27201,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/7d5fd19a460be294.js"],"IconMark"]
25:{"metadata":[["$","title","0",{"children":"Shiv Balaji Surgical | Hospital Bed & Hospital Furniture Manufacturer in Delhi"}],["$","meta","1",{"name":"description","content":"Shiv Balaji Surgical — Leading Hospital Furniture Manufacturer in Delhi, India. ISO & GMP Certified manufacturer of Hospital Beds, ICU Beds, Fowler Beds, Medical Trolleys, Examination Couches and all Hospital Furniture."}],["$","meta","2",{"name":"keywords","content":"Hospital Bed Manufacturer in India, Hospital Furniture Manufacturer in Delhi, ICU Bed Manufacturer, Fowler Bed Manufacturer, Medical Furniture Manufacturer India"}],["$","meta","3",{"property":"og:title","content":"Shiv Balaji Surgical | Hospital Bed & Hospital Furniture Manufacturer in Delhi"}],["$","meta","4",{"property":"og:description","content":"Shiv Balaji Surgical — Leading Hospital Furniture Manufacturer in Delhi, India. ISO & GMP Certified manufacturer of Hospital Beds, ICU Beds, Fowler Beds, Medical Trolleys, Examination Couches and all Hospital Furniture."}],["$","meta","5",{"property":"og:site_name","content":"Shiv Balaji Surgical"}],["$","meta","6",{"property":"og:locale","content":"en_IN"}],["$","meta","7",{"property":"og:type","content":"website"}],["$","meta","8",{"name":"twitter:card","content":"summary"}],["$","meta","9",{"name":"twitter:title","content":"Shiv Balaji Surgical | Hospital Bed & Hospital Furniture Manufacturer in Delhi"}],["$","meta","10",{"name":"twitter:description","content":"Shiv Balaji Surgical — Leading Hospital Furniture Manufacturer in Delhi, India. ISO & GMP Certified manufacturer of Hospital Beds, ICU Beds, Fowler Beds, Medical Trolleys, Examination Couches and all Hospital Furniture."}],["$","link","11",{"rel":"icon","href":"/favicon.ico?favicon.112e98ac.ico","sizes":"50x50","type":"image/x-icon"}],["$","$L2c","12",{}]],"error":null,"digest":"$undefined"}
2b:"$25:metadata"
