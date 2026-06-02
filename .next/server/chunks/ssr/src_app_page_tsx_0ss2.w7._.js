module.exports=[40777,a=>{"use strict";var b=a.i(87924),c=a.i(72131);function d({onComplete:a,onStartTransition:e}){let f=(0,c.useRef)(null),g=(0,c.useRef)(null),h=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let b=f.current,c=g.current,d=h.current;if(!b||!c||!d)return;let i=setTimeout(()=>{c.classList.add("visible")},100),j=setTimeout(()=>{d.classList.add("loaded")},200),k=setTimeout(()=>{b.classList.add("hidden"),e&&e()},1800),l=setTimeout(()=>{a()},3600);return()=>{clearTimeout(i),clearTimeout(j),clearTimeout(k),clearTimeout(l)}},[a]),(0,b.jsx)("div",{ref:f,className:"loader",children:(0,b.jsxs)("div",{className:"loader-content",children:[(0,b.jsx)("span",{ref:g,className:"loader-text",children:"PRATHAMESH JADHAV"}),(0,b.jsx)("div",{ref:h,className:"loader-bar"})]})})}function e(){let a=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let b=a.current;if(!b)return;let c=0,d=0,e=!1,f=()=>{let a=e?"scale(2.5)":"scale(1)";b.style.transform=`translate(calc(${c}px - 50%), calc(${d}px - 50%)) ${a}`},g=a=>{c=a.clientX,d=a.clientY,f()},h=a=>{let b=a.target;b instanceof Element&&b.closest("[data-magnetic]")&&(e=!0,f())},i=a=>{let b=a.target;b instanceof Element&&b.closest("[data-magnetic]")&&(e=!1,f())};return document.addEventListener("mousemove",g),document.addEventListener("mouseover",h),document.addEventListener("mouseout",i),()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseover",h),document.removeEventListener("mouseout",i)}},[]),(0,b.jsx)("div",{ref:a,"aria-hidden":"true",style:{position:"fixed",top:0,left:0,width:"20px",height:"20px",borderRadius:"50%",background:"#f5f5f5",mixBlendMode:"difference",zIndex:1e4,pointerEvents:"none",transition:"transform 0.1s, scale 0.2s",willChange:"transform"}})}function f(){return(0,b.jsx)("div",{className:"noise","aria-hidden":"true"})}function g({children:a,range:b=60,strength:d=.35}){let e=(0,c.useRef)(null),[f,h]=(0,c.useState)({x:0,y:0});(0,c.useEffect)(()=>{let a=e.current;if(!a)return;let c=c=>{let{clientX:e,clientY:f}=c,g=a.getBoundingClientRect(),i=g.left+g.width/2,j=g.top+g.height/2,k=e-i,l=f-j;Math.hypot(k,l)<b?h({x:k*d,y:l*d}):h({x:0,y:0})},f=()=>{h({x:0,y:0})};return window.addEventListener("mousemove",c),a.addEventListener("mouseleave",f),()=>{window.removeEventListener("mousemove",c),a.removeEventListener("mouseleave",f)}},[b,d]);let i=c.default.Children.only(a);return c.default.cloneElement(i,{ref:e,style:{...i.props.style,transform:`translate(${f.x}px, ${f.y}px)`,transition:0===f.x&&0===f.y?"transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)":"transform 0.1s ease-out",willChange:"transform",display:i.props.style?.display||"inline-block"}})}function h({onLogoDoubleClick:a}){let[d,e]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let a=()=>{e(window.scrollY>50)};return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]),(0,b.jsxs)("nav",{className:`sticky-nav${d?" scrolled":""}`,children:[(0,b.jsxs)("div",{className:"nav-content",children:[(0,b.jsxs)("div",{className:"logo-group",children:[(0,b.jsx)(g,{range:40,strength:.35,children:(0,b.jsx)("span",{className:"nav-logo",onDoubleClick:a,style:{cursor:"pointer",userSelect:"none",display:"inline-block"},children:"P. JADHAV"})}),(0,b.jsx)("div",{className:"logo-tooltip",children:"[DBL-CLICK FOR SHELL]"})]}),(0,b.jsxs)("div",{className:"nav-links",children:[(0,b.jsx)(g,{children:(0,b.jsx)("a",{href:"#about",children:"Origin"})}),(0,b.jsx)(g,{children:(0,b.jsx)("a",{href:"#projects",children:"Work"})}),(0,b.jsx)(g,{children:(0,b.jsx)("a",{href:"#contact",children:"Build"})})]})]}),(0,b.jsx)("style",{children:`
        .logo-group {
          position: relative;
          display: inline-block;
        }

        .logo-tooltip {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%) translateY(0);
          background: #050505;
          border: 1px solid rgba(255, 180, 0, 0.2);
          color: var(--accent-amber, #ffb400);
          font-family: var(--font-jetbrains-mono, monospace);
          font-size: 0.55rem;
          letter-spacing: 0.1em;
          padding: 0.35rem 0.65rem;
          border-radius: 4px;
          white-space: nowrap;
          opacity: 0.8;
          pointer-events: none;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
          z-index: 1001;
        }

        .logo-group:hover .logo-tooltip {
          opacity: 1;
          border-color: rgba(255, 180, 0, 0.45);
        }
      `})]})}function i(){return(0,b.jsxs)("section",{id:"hero",className:"full-screen",children:[(0,b.jsxs)("div",{className:"video-container",children:[(0,b.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:"bg-video",children:(0,b.jsx)("source",{src:"https://assets.mixkit.co/videos/preview/mixkit-abstract-dark-ink-swirling-in-water-4331-large.mp4",type:"video/mp4"})}),(0,b.jsx)("div",{className:"video-overlay"})]}),(0,b.jsxs)("div",{className:"hero-content container",children:[(0,b.jsxs)("div",{className:"hero-text-wrapper",children:[(0,b.jsx)("div",{className:"year-badge",children:"EST. 2022"}),(0,b.jsxs)("h1",{className:"hero-headline",children:[(0,b.jsx)("div",{className:"line",children:(0,b.jsx)("span",{children:"I BUILD."})}),(0,b.jsx)("div",{className:"line",children:(0,b.jsx)("span",{children:"I SHIP."})}),(0,b.jsx)("div",{className:"line",children:(0,b.jsx)("span",{children:"I OPTIMIZE."})})]}),(0,b.jsx)("p",{className:"hero-subtext",children:"AI/ML Developer. Data Scientist. GenAI Engineer."})]}),(0,b.jsxs)("div",{className:"scroll-explore",children:[(0,b.jsx)("span",{children:"SCROLL TO EXPLORE"}),(0,b.jsx)("div",{className:"scroll-line"})]})]}),(0,b.jsx)("style",{children:`
        .year-badge {
          border: 1px solid rgba(255, 180, 0, 0.15) !important;
          background: rgba(255, 180, 0, 0.02) !important;
          padding: 0.35rem 0.85rem !important;
          border-radius: 4px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .year-badge:hover {
          border-color: rgba(255, 180, 0, 0.45) !important;
          background: rgba(255, 180, 0, 0.06) !important;
          box-shadow: 0 0 20px rgba(255, 180, 0, 0.18);
          transform: translateY(-2px) !important;
        }

        .scroll-explore {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .scroll-explore:hover {
          color: var(--accent-amber, #ffb400) !important;
          transform: translateY(3px);
        }

        .scroll-explore:hover .scroll-line {
          background: var(--accent-amber, #ffb400) !important;
          animation: lineStretch 0.8s infinite alternate ease-in-out;
        }

        @keyframes lineStretch {
          from {
            width: 30px;
          }
          to {
            width: 55px;
          }
        }
      `})]})}let j=[{id:1,year:"2022",title:"COMMENCEMENT OF ENGINEERING JOURNEY",teaser:"Entered Computer Science foundations, diving into algorithms and core computing logic.",description:"Stepped into the world of computational thinking, logical structures, and database principles. Immersed myself in learning foundational engineering mathematics and digital electronics.",details:"Acquired core logic and basic troubleshooting patterns early on.",technologies:["C Language","CS Fundamentals","Boolean Logic"]},{id:2,year:"2022",title:"THE FIRST LINE OF CODE",teaser:'Wrote my very first "Hello World" terminal program, igniting a passion for software construction.',description:"Began building basic terminal games, calculators, and automation scripts. Explored control flow structure, debugging routines, and compiling mechanics.",details:"Spent hours debugging pointer offsets and system syntax anomalies.",technologies:["Python","C Language","Scripting"]},{id:3,year:"2023",title:"FIRST FULL-STACK WEB APPLICATION",teaser:"Designed, coded, and deployed my first database-driven live server site.",description:"Mastered standard relational database structures, SQL query structures, and server routing. Deployed first responsive media portal hosting, resolving client-server data flows.",details:"Optimized page load configurations and local caching schemas.",technologies:["React","Node.js","Express","SQL Databases"]},{id:4,year:"2024",title:"DATA SCIENCE INTERNSHIP",teaser:"Joined Uptricks Services Pvt. Ltd. to run statistical modeling and pre-processing.",description:"Processed high-dimensional tabular datasets. Evaluated predictive machine learning models to capture actionable analytics patterns.",details:"Wrote robust validation suites to filter noisy logistics dataset entries.",technologies:["Python","Pandas","NumPy","Scikit-Learn","Statistical Modeling"]},{id:5,year:"2024",title:"SYSTEMS-LEVEL PIPELINES",teaser:"Architected automated data ingest workflows, reducing database import overheads.",description:"Designed and deployed automated pre-processing pipelines to optimize model ingest latency.",details:"Gained hands-on exposure to CI/CD triggers and Linux deployment environments.",technologies:["Python","Shell Scripting","ETL Pipelines","Database Optimization"]},{id:6,year:"2025",title:"GENAI & LLM API INTEGRATIONS",teaser:"Engineered FastAPI endpoints and LangChain RAG pipelines for contextual bots.",description:"Built secure webhook aggregators to review git diffs. Designed vector search integration layers serving low-latency context injections to LLM prompts.",details:"Engineered prompt templates with metadata filters to prevent context leaks.",technologies:["FastAPI","LangChain","OpenAI APIs","Vector Embeddings"]},{id:7,year:"2026",title:"ENGINEERING GRADUATION (CGPA 7.8)",teaser:"Successfully completed degree. Built a Capstone Clinical Decision Support System.",description:"Completed Bachelor of Engineering in Computer Science. Designed and defended CDSS capstone model merging multi-modal clinical markers for prognosis analytics.",details:"Maintained a strong cumulative CGPA of 7.8 across rigorous coursework semesters.",technologies:["Predictive Modeling","Data Visualization","Capstone Project"]},{id:8,year:"2026",title:"PRODUCTION SYSTEMS DEVELOPMENT",teaser:"Built custom HNSW vector database (NuroSearch) & packet inspector (DPI Engine).",description:"Implemented low-latency index graphs and multi-threaded raw network packet capturing listeners. Focused on memory allocations and concurrent graph insertions.",details:"Architected custom scalar quantization scripts to compress memory footprints.",technologies:["Rust","Python","C Language","HNSW Graph","Multithreading","Scapy"]}];function k({id:a}){return 1===a?(0,b.jsxs)("svg",{width:"100%",height:"120",viewBox:"0 0 400 120",style:{background:"#111",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1rem 0"},children:[(0,b.jsx)("circle",{cx:"80",cy:"60",r:"12",fill:"rgba(255,180,0,0.08)",stroke:"#ffb400",strokeWidth:"1"}),(0,b.jsx)("circle",{cx:"200",cy:"60",r:"12",fill:"none",stroke:"rgba(245,245,245,0.15)",strokeWidth:"1"}),(0,b.jsx)("circle",{cx:"320",cy:"60",r:"12",fill:"none",stroke:"rgba(245,245,245,0.15)",strokeWidth:"1"}),(0,b.jsx)("line",{x1:"92",y1:"60",x2:"188",y2:"60",stroke:"rgba(245,245,245,0.08)",strokeDasharray:"3"}),(0,b.jsx)("line",{x1:"212",y1:"60",x2:"308",y2:"60",stroke:"rgba(245,245,245,0.08)",strokeDasharray:"3"}),(0,b.jsx)("text",{x:"80",y:"63",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"CS"}),(0,b.jsx)("text",{x:"200",y:"63",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"DS"}),(0,b.jsx)("text",{x:"320",y:"63",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"AI"}),(0,b.jsx)("text",{x:"15",y:"18",fill:"rgba(255,180,0,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"CS FOUNDATION INDEX"})]}):2===a?(0,b.jsxs)("svg",{width:"100%",height:"120",viewBox:"0 0 400 120",style:{background:"#111",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1rem 0"},children:[(0,b.jsx)("rect",{x:"25",y:"25",width:"350",height:"70",rx:"4",fill:"#050505",stroke:"rgba(245,245,245,0.05)"}),(0,b.jsx)("text",{x:"40",y:"52",fill:"rgba(245,245,245,0.35)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8.5",children:'>>> print("Hello World")'}),(0,b.jsx)("text",{x:"40",y:"72",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8.5",children:"Hello World"}),(0,b.jsx)("rect",{x:"110",y:"62",width:"5",height:"10",fill:"#ffb400",opacity:"0.8"}),(0,b.jsx)("text",{x:"15",y:"18",fill:"rgba(255,180,0,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"COMPILER SHELL EXECUTION"})]}):3===a?(0,b.jsxs)("svg",{width:"100%",height:"120",viewBox:"0 0 400 120",style:{background:"#111",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1rem 0"},children:[(0,b.jsx)("rect",{x:"35",y:"35",width:"90",height:"45",rx:"3",fill:"none",stroke:"rgba(245,245,245,0.12)"}),(0,b.jsx)("rect",{x:"275",y:"35",width:"90",height:"45",rx:"3",fill:"none",stroke:"rgba(245,245,245,0.12)"}),(0,b.jsx)("path",{d:"M 125 58 L 275 58",stroke:"#ffb400",strokeDasharray:"3"}),(0,b.jsx)("text",{x:"80",y:"53",fill:"#f5f5f5",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"USERS_DB"}),(0,b.jsx)("text",{x:"80",y:"65",fill:"rgba(245,245,245,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",textAnchor:"middle",children:"PK: user_id"}),(0,b.jsx)("text",{x:"320",y:"53",fill:"#f5f5f5",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"POSTS_DB"}),(0,b.jsx)("text",{x:"320",y:"65",fill:"rgba(245,245,245,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",textAnchor:"middle",children:"FK: author_id"}),(0,b.jsx)("text",{x:"200",y:"50",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7.5",textAnchor:"middle",children:"RELATIONAL MAP"}),(0,b.jsx)("text",{x:"15",y:"18",fill:"rgba(255,180,0,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"DATABASE SCHEMA"})]}):4===a?(0,b.jsxs)("svg",{width:"100%",height:"120",viewBox:"0 0 400 120",style:{background:"#111",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1rem 0"},children:[(0,b.jsx)("path",{d:"M 40 60 L 140 60 M 260 60 L 360 60",stroke:"rgba(245,245,245,0.15)"}),(0,b.jsx)("rect",{x:"140",y:"42",width:"120",height:"36",rx:"3",fill:"none",stroke:"#ffb400"}),(0,b.jsx)("text",{x:"200",y:"64",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"CLEANSE & MODEL"}),(0,b.jsx)("circle",{cx:"90",cy:"60",r:"3",fill:"#f5f5f5",opacity:"0.3"}),(0,b.jsx)("circle",{cx:"310",cy:"60",r:"3",fill:"#ffb400"}),(0,b.jsx)("text",{x:"15",y:"18",fill:"rgba(255,180,0,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"UPTRICKS DATA REFINEMENT FLOW"})]}):5===a?(0,b.jsxs)("svg",{width:"100%",height:"120",viewBox:"0 0 400 120",style:{background:"#111",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1rem 0"},children:[(0,b.jsxs)("g",{stroke:"rgba(245,245,245,0.1)",strokeWidth:"1",fill:"none",children:[(0,b.jsx)("rect",{x:"40",y:"45",width:"60",height:"28",rx:"2"}),(0,b.jsx)("rect",{x:"170",y:"45",width:"60",height:"28",rx:"2"}),(0,b.jsx)("rect",{x:"300",y:"45",width:"60",height:"28",rx:"2"}),(0,b.jsx)("path",{d:"M 100 59 L 170 59 M 230 59 L 300 59",stroke:"#ffb400"})]}),(0,b.jsx)("text",{x:"70",y:"62",fill:"rgba(245,245,245,0.5)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"RAW"}),(0,b.jsx)("text",{x:"200",y:"62",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"FILTER"}),(0,b.jsx)("text",{x:"330",y:"62",fill:"rgba(245,245,245,0.5)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"STORE"}),(0,b.jsx)("text",{x:"15",y:"18",fill:"rgba(255,180,0,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"AUTOMATED PIPELINE LOAD (ETL)"})]}):6===a?(0,b.jsxs)("svg",{width:"100%",height:"120",viewBox:"0 0 400 120",style:{background:"#111",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1rem 0"},children:[(0,b.jsx)("rect",{x:"30",y:"40",width:"80",height:"36",rx:"3",fill:"none",stroke:"rgba(245,245,245,0.12)"}),(0,b.jsx)("rect",{x:"160",y:"40",width:"80",height:"36",rx:"3",fill:"none",stroke:"#ffb400",strokeWidth:"1.5"}),(0,b.jsx)("rect",{x:"290",y:"40",width:"80",height:"36",rx:"3",fill:"none",stroke:"rgba(245,245,245,0.12)"}),(0,b.jsx)("path",{d:"M 110 58 L 160 58 M 240 58 L 290 58",stroke:"rgba(245,245,245,0.12)"}),(0,b.jsx)("text",{x:"70",y:"62",fill:"rgba(245,245,245,0.6)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7.5",textAnchor:"middle",children:"PROMPT"}),(0,b.jsx)("text",{x:"200",y:"62",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7.5",textAnchor:"middle",children:"RAG MODEL"}),(0,b.jsx)("text",{x:"330",y:"62",fill:"rgba(245,245,245,0.6)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7.5",textAnchor:"middle",children:"OUTPUT"}),(0,b.jsx)("text",{x:"15",y:"18",fill:"rgba(255,180,0,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"SEMANTIC CONTEXT RETRIEVAL LAYER"})]}):7===a?(0,b.jsxs)("svg",{width:"100%",height:"120",viewBox:"0 0 400 120",style:{background:"#111",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1rem 0"},children:[(0,b.jsx)("rect",{x:"150",y:"35",width:"100",height:"36",rx:"4",fill:"rgba(255,180,0,0.02)",stroke:"#ffb400",strokeWidth:"1.5"}),(0,b.jsx)("text",{x:"200",y:"57",fill:"#ffb400",fontFamily:"var(--font-bebas-neue, sans-serif)",fontSize:"14",letterSpacing:"0.05em",textAnchor:"middle",children:"B.E. GRADUATE"}),(0,b.jsx)("text",{x:"200",y:"94",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"CGPA: 7.8 // CAPSTONE DEPLOYED"}),(0,b.jsx)("text",{x:"15",y:"18",fill:"rgba(255,180,0,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"ACADEMIC DEGREE VERIFICATION"})]}):8===a?(0,b.jsxs)("svg",{width:"100%",height:"120",viewBox:"0 0 400 120",style:{background:"#111",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1rem 0"},children:[(0,b.jsx)("circle",{cx:"110",cy:"60",r:"18",fill:"none",stroke:"#ffb400",strokeWidth:"1.5"}),(0,b.jsx)("circle",{cx:"290",cy:"60",r:"18",fill:"none",stroke:"rgba(245,245,245,0.15)",strokeWidth:"1.5"}),(0,b.jsx)("line",{x1:"128",y1:"60",x2:"272",y2:"60",stroke:"#ffb400",strokeDasharray:"3"}),(0,b.jsx)("text",{x:"110",y:"63",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6",textAnchor:"middle",children:"NUROSEARCH"}),(0,b.jsx)("text",{x:"290",y:"63",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6",textAnchor:"middle",children:"DPI_ENGINE"}),(0,b.jsx)("text",{x:"200",y:"50",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7.5",textAnchor:"middle",children:"SYSTEMS ARCH"}),(0,b.jsx)("text",{x:"15",y:"18",fill:"rgba(255,180,0,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"CUSTOM ENGINE GRAPH"})]}):null}function l(){let[a,d]=(0,c.useState)("2022"),[e,f]=(0,c.useState)(1),[g,h]=(0,c.useState)(null),i=(0,c.useRef)(null);(0,c.useEffect)(()=>{let a=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting&&a.target.classList.add("in-view")})},{threshold:.1,rootMargin:"-10% 0px"}),b=i.current?.querySelectorAll(".animate-on-scroll");b?.forEach(b=>a.observe(b));let c=new IntersectionObserver(a=>{a.forEach(a=>{if(a.isIntersecting){let b=a.target.getAttribute("data-year"),c=a.target.getAttribute("data-id");b&&d(b),c&&f(parseInt(c,10))}})},{root:null,rootMargin:"-25% 0px -45% 0px",threshold:.05}),e=i.current?.querySelectorAll(".timeline-card");return e?.forEach(a=>c.observe(a)),()=>{a.disconnect(),c.disconnect()}},[]);let l=(a,b)=>{b.stopPropagation(),h(g===a?null:a)};return(0,b.jsxs)("section",{id:"about",ref:i,style:{padding:"8rem 2rem",maxWidth:"1400px",margin:"0 auto",minHeight:"100vh",display:"flex",alignItems:"center",position:"relative"},children:[(0,b.jsxs)("div",{style:{width:"100%"},children:[(0,b.jsx)("div",{className:"animate-on-scroll",style:{fontFamily:'var(--font-jetbrains-mono, "JetBrains Mono", monospace)',fontSize:"0.7rem",letterSpacing:"0.3em",textTransform:"uppercase",color:"var(--accent-amber, #ffb400)",marginBottom:"3rem",opacity:0,transform:"translateY(20px)",transition:"opacity 0.7s cubic-bezier(.65,0,.35,1), transform 0.7s cubic-bezier(.65,0,.35,1)"},children:"01 / Origin"}),(0,b.jsxs)("div",{className:"about-grid",children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{style:{marginBottom:"5rem"},children:[(0,b.jsxs)("h2",{className:"animate-on-scroll",style:{fontFamily:'var(--font-bebas-neue, "Bebas Neue", cursive)',fontSize:"clamp(3rem, 6vw, 6rem)",lineHeight:.9,color:"var(--text-color, #f5f5f5)",opacity:0,transform:"translateY(30px)",transition:"opacity 0.8s cubic-bezier(.65,0,.35,1) 0.1s, transform 0.8s cubic-bezier(.65,0,.35,1) 0.1s",marginBottom:"2rem"},children:["BUILDING",(0,b.jsx)("br",{}),(0,b.jsx)("span",{style:{color:"var(--accent-amber, #ffb400)"},children:"THINGS"}),(0,b.jsx)("br",{}),"THAT MATTER."]}),(0,b.jsxs)("div",{className:"animate-on-scroll",style:{opacity:0,transform:"translateY(20px)",transition:"opacity 0.8s cubic-bezier(.65,0,.35,1) 0.2s, transform 0.8s cubic-bezier(.65,0,.35,1) 0.2s"},children:[(0,b.jsx)("p",{style:{fontFamily:'var(--font-inter, "Inter", sans-serif)',fontWeight:300,fontSize:"1.1rem",lineHeight:1.8,color:"var(--text-dim, rgba(245,245,245,0.5))",marginBottom:"1.5rem"},children:"I'm Prathamesh Jadhav — an engineering-focused AI/ML developer specializing in building production-grade vector databases, RAG pipelines, and intelligent API systems."}),(0,b.jsx)("p",{style:{fontFamily:'var(--font-inter, "Inter", sans-serif)',fontWeight:300,fontSize:"1.1rem",lineHeight:1.8,color:"var(--text-dim, rgba(245,245,245,0.5))",marginBottom:"2rem"},children:"From custom HNSW indexing to systems-level multi-threaded network analysis, I focus on building scalable, low-latency architectures that bridge AI research and robust production systems."}),(0,b.jsx)("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",marginBottom:"3rem"},children:["Vector Search","RAG Pipelines","GenAI APIs","Network Systems","Performance Tuning"].map(a=>(0,b.jsx)("span",{style:{fontFamily:'var(--font-jetbrains-mono, "JetBrains Mono", monospace)',fontSize:"0.65rem",letterSpacing:"0.08em",color:"var(--accent-amber, #ffb400)",background:"rgba(255, 180, 0, 0.05)",border:"1px solid rgba(255, 180, 0, 0.12)",borderRadius:"4px",padding:"0.35rem 0.75rem",textTransform:"uppercase"},children:a},a))})]})]}),(0,b.jsx)("div",{className:"animate-on-scroll",style:{fontFamily:'var(--font-jetbrains-mono, "JetBrains Mono", monospace)',fontSize:"0.65rem",letterSpacing:"0.2em",color:"rgba(245, 245, 245, 0.3)",textTransform:"uppercase",marginBottom:"2.5rem",opacity:0,transform:"translateY(15px)",transition:"opacity 0.6s ease, transform 0.6s ease"},children:"// Interactive Journey & Milestones (Click Overview to Expand)"}),(0,b.jsx)("div",{className:"timeline-container",children:j.map(a=>{let c=e===a.id,d=g===a.id;return(0,b.jsxs)("div",{"data-year":a.year,"data-id":a.id,className:`timeline-card ${d?"expanded":""} ${c?"active":""}`,onClick:b=>l(a.id,b),style:{display:"grid",gridTemplateRows:d?"auto 1fr":"auto 0fr",overflow:"hidden"},children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"mobile-year-badge",children:a.year}),(0,b.jsx)("div",{className:`timeline-dot ${c?"active":""}`}),(0,b.jsxs)("div",{style:{display:"flex",alignItems:"baseline",justifyContent:"space-between",gap:"1rem"},children:[(0,b.jsx)("h3",{className:"timeline-card-title",children:a.title}),(0,b.jsxs)("span",{className:"card-index",style:{fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"0.6rem",color:d?"var(--accent-amber, #ffb400)":"rgba(245, 245, 245, 0.2)",transition:"color 0.4s ease"},children:["0",a.id]})]}),(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"2rem",marginTop:"0.2rem"},children:[(0,b.jsx)("p",{className:"timeline-card-teaser",style:{fontFamily:"var(--font-inter, sans-serif)",fontWeight:300,fontSize:"0.9rem",color:c?"rgba(245, 245, 245, 0.75)":"rgba(245, 245, 245, 0.35)",transition:"color 0.4s ease",margin:0,flex:1},children:a.teaser}),(0,b.jsx)("button",{onClick:b=>l(a.id,b),className:"expand-trigger-btn",style:{background:"none",color:d?"var(--accent-amber, #ffb400)":"rgba(245, 245, 245, 0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"0.6rem",letterSpacing:"0.1em",cursor:"pointer",padding:"0.35rem 0.75rem",border:d?"1px solid rgba(255, 180, 0, 0.25)":"1px solid rgba(245, 245, 245, 0.1)",borderRadius:"4px",textTransform:"uppercase",transition:"all 0.3s ease",flexShrink:0},children:d?"[ - CLOSE ]":"[ + OVERVIEW ]"})]})]}),(0,b.jsx)("div",{style:{minHeight:"0",overflow:"hidden",opacity:+!!d,transition:"opacity 0.4s ease"},children:(0,b.jsxs)("div",{style:{paddingTop:"1.2rem",borderTop:"1px solid rgba(245,245,245,0.04)",marginTop:"1.2rem"},children:[(0,b.jsx)("p",{className:"timeline-card-desc",children:a.description}),(0,b.jsx)(k,{id:a.id}),a.details&&(0,b.jsx)("p",{className:"timeline-card-details",children:a.details}),(0,b.jsx)("div",{style:{display:"flex",gap:"0.4rem",flexWrap:"wrap",marginTop:"1rem"},children:a.technologies.map(a=>(0,b.jsx)("span",{style:{fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"0.55rem",color:"rgba(245, 245, 245, 0.5)",background:"rgba(245, 245, 245, 0.03)",border:"1px solid rgba(245, 245, 245, 0.08)",padding:"0.2rem 0.5rem",borderRadius:"3px",textTransform:"uppercase"},children:a},a))})]})})]},a.id)})})]}),(0,b.jsx)("div",{className:"sticky-year-container",children:(0,b.jsxs)("div",{className:"sticky-year-content",children:[(0,b.jsx)("span",{className:"sticky-year-label",children:"YEAR"}),(0,b.jsx)("div",{className:"timeline-year-display",children:a},a),(0,b.jsxs)("div",{className:"sticky-year-details",children:[(0,b.jsx)("span",{children:"// 19.0760° N, 72.8777° E"}),(0,b.jsx)("span",{children:"// CORE_SYSTEM_INDEXING: ACTIVE"}),(0,b.jsx)("span",{children:"// INDEX: HNSW_INDEX_FOUND"})]})]})})]})]}),(0,b.jsx)("style",{children:`
        .animate-on-scroll.in-view {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* 2-column Grid configuration */
        .about-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 6rem;
          align-items: start;
          position: relative;
        }

        /* Timeline vertical line */
        .timeline-container {
          position: relative;
          padding-left: 2.5rem;
          border-left: 1px solid rgba(245, 245, 245, 0.08);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* Dot aligned with vertical line */
        .timeline-dot {
          position: absolute;
          left: -2.55rem;
          top: 2.3rem;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(245, 245, 245, 0.2);
          border: 2px solid #000000;
          transform: translateX(-50%);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 2;
        }

        .timeline-dot.active {
          background: var(--accent-amber, #ffb400);
          box-shadow: 0 0 14px var(--accent-amber, #ffb400);
          transform: translateX(-50%) scale(1.5);
        }

        /* Individual Card styles */
        .timeline-card {
          position: relative;
          padding: 1.8rem;
          background: rgba(245, 245, 245, 0.01);
          border: 1px solid rgba(245, 245, 245, 0.025);
          border-radius: 8px;
          cursor: pointer;
          opacity: 0.35;
          transform: scale(0.985);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .timeline-card.expanded {
          opacity: 1;
          transform: scale(1);
          background: rgba(245, 245, 245, 0.02) !important;
          border-color: rgba(245, 245, 245, 0.08) !important;
          box-shadow: 0 10px 40px -25px rgba(0, 0, 0, 0.5);
        }

        .timeline-card.active {
          opacity: 0.85;
          border-color: rgba(245, 245, 245, 0.06);
        }

        .timeline-card.active.expanded {
          opacity: 1;
          border-left: 3px solid var(--accent-amber, #ffb400) !important;
          padding-left: calc(1.8rem - 2px) !important;
          border-color: rgba(255, 180, 0, 0.2) !important;
          background: rgba(255, 180, 0, 0.015) !important;
          box-shadow: 0 15px 40px -15px rgba(255, 180, 0, 0.06), inset 0 1px 0px rgba(255, 255, 255, 0.05) !important;
        }

        .timeline-card:hover {
          border-color: rgba(245, 245, 245, 0.1);
          background: rgba(245, 245, 245, 0.015);
          opacity: 0.85;
        }

        .timeline-card.expanded:hover {
          background: rgba(245, 245, 245, 0.02) !important;
          border-color: rgba(245, 245, 245, 0.08) !important;
          opacity: 1;
        }

        .timeline-card.active:hover {
          opacity: 1;
        }

        .timeline-card.active.expanded:hover {
          border-color: rgba(255, 180, 0, 0.35) !important;
          background: rgba(255, 180, 0, 0.025) !important;
        }

        /* Hover behavior for inner trigger button */
        .timeline-card:hover .expand-trigger-btn {
          color: rgba(245, 245, 245, 0.8);
          border-color: rgba(245, 245, 245, 0.25);
        }

        .timeline-card:hover .expand-trigger-btn:hover {
          color: var(--accent-amber, #ffb400) !important;
          border-color: rgba(255, 180, 0, 0.35) !important;
          background: rgba(255, 180, 0, 0.03);
        }

        .timeline-card-title {
          font-family: var(--font-bebas-neue, "Bebas Neue", cursive);
          font-size: 1.4rem;
          letter-spacing: 0.05em;
          color: rgba(245, 245, 245, 0.7);
          margin-bottom: 0.4rem;
          transition: color 0.4s ease;
        }

        .timeline-card.active .timeline-card-title {
          color: rgba(245, 245, 245, 0.95);
        }

        .timeline-card.active.expanded .timeline-card-title {
          color: var(--accent-amber, #ffb400);
        }

        .timeline-card-desc {
          font-family: var(--font-inter, "Inter", sans-serif);
          font-weight: 300;
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(245, 245, 245, 0.8);
          margin-bottom: 0.6rem;
        }

        .timeline-card-details {
          font-family: var(--font-inter, "Inter", sans-serif);
          font-weight: 300;
          font-size: 0.85rem;
          line-height: 1.5;
          color: rgba(245, 245, 245, 0.5);
        }

        /* Sticky container for desktop */
        .sticky-year-container {
          position: sticky;
          top: 25vh;
          height: 50vh;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .sticky-year-content {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .sticky-year-label {
          font-family: var(--font-jetbrains-mono, "JetBrains Mono", monospace);
          font-size: 0.75rem;
          letter-spacing: 0.4em;
          color: rgba(245, 245, 245, 0.2);
          margin-bottom: 0.5rem;
          transform: translateX(-15px);
        }

        /* Giant Year Slide-in animation */
        @keyframes yearSlideIn {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 0.95;
          }
        }

        .timeline-year-display {
          font-family: var(--font-bebas-neue, "Bebas Neue", cursive);
          font-size: clamp(10rem, 20vw, 20rem);
          line-height: 0.8;
          font-weight: 900;
          background: linear-gradient(180deg, var(--accent-amber, #ffb400) 40%, rgba(255, 180, 0, 0.3) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          opacity: 0.95;
          letter-spacing: -0.04em;
          filter: drop-shadow(0 0 40px rgba(255, 180, 0, 0.15));
          animation: yearSlideIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          user-select: none;
        }

        .sticky-year-details {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.25rem;
          font-family: var(--font-jetbrains-mono, "JetBrains Mono", monospace);
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          color: rgba(245, 245, 245, 0.25);
          margin-top: 1.5rem;
          transform: translateX(-15px);
        }

        /* Mobile layout styling fallback */
        .mobile-year-badge {
          display: none;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .sticky-year-container {
            display: none !important;
          }
          
          .mobile-year-badge {
            display: inline-block;
            font-family: var(--font-jetbrains-mono, "JetBrains Mono", monospace);
            font-size: 0.7rem;
            color: var(--accent-amber, #ffb400);
            border: 1px solid rgba(255, 180, 0, 0.25);
            background: rgba(255, 180, 0, 0.06);
            padding: 0.25rem 0.6rem;
            border-radius: 4px;
            margin-bottom: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }
          
          .timeline-card {
            opacity: 1 !important;
            transform: none !important;
            padding: 1.8rem !important;
          }

          .timeline-dot {
            top: 4.2rem !important; /* adjust for the badge space */
          }
        }
      `})]})}let m=[{id:"01",title:"NUROSEARCH",year:"2026",tags:["AI/ML","Vector DB","RAG"],description:"Custom vector database from scratch implementing HNSW indexing and a full-stack RAG pipeline."},{id:"02",title:"DPI ENGINE",year:"2026",tags:["Systems","Python","Networking"],description:"Multi-threaded deep packet inspection engine analyzing 500+ packets/sec with TLS SNI extraction."},{id:"03",title:"KOZUMIHUB",year:"2026",tags:["TypeScript","Next.js","Web App"],description:"Entertainment discovery platform for anime and movies featuring smart discovery and immersive UI."},{id:"04",title:"SPENDSTRACK",year:"2026",tags:["Finance","TypeScript","Dashboard"],description:"Personal wealth tracking application with dynamic visualization and category analytics."},{id:"05",title:"CODE CHATBOT",year:"2025",tags:["AI","Python","LLM"],description:"Automated AI assistant built to review pull requests and provide constructive feedback on code structure."}],n={"01":{role:"Lead AI Systems Architect",challenges:["Standard high-dimensional vector lookups scale at O(N) linear time, causing massive latency bottlenecks for production RAG systems.","Ensuring thread safety and low latency during concurrent index builds and query phases."],solutions:["Implemented a Hierarchical Navigable Small World (HNSW) vector index from scratch, bringing search complexity down to O(log N).","Designed dynamic thread-safe insertion rules using custom locking nodes and pointer synchronization.","Built a complete chunk-level semantic cache in FastAPI integrated with OpenAI embeddings."],metrics:["Reduced average query retrieval latency to <15ms on 100,000+ vector nodes.","Achieved a 35% memory footprint reduction through scalar quantization codecs."],technologies:["Python","Rust","FastAPI","NumPy","OpenAI API","HNSW Indexing"],githubUrl:"https://github.com/Prathamesh-Jadhav04/NuroSearch"},"02":{role:"Backend & Networking Systems Engineer",challenges:["Extracting TLS Server Name Indication (SNI) hostnames in real-time under high-throughput network loads without packets dropping.","Developing thread-safe logging pipes to prevent memory leak build-ups during continuous stream capture."],solutions:["Developed a multi-threaded C/Python ingestion listener wrapping libpcap for zero packet drop.","Designed a synchronized circular queue isolating raw packet ingestion from header parsing buffers.","Engineered an SNI extraction filter isolating client hello packets."],metrics:["Successfully sustained analysis rates of 500+ packets/sec with 0% packet loss.","Decrypted, mapped, and structured SNI metadata logs instantly into audit database indices."],technologies:["Python","C Language","Scapy","Network Protocols","Multithreading","pcap"],githubUrl:"https://github.com/Prathamesh-Jadhav04/DPI-Engine"},"03":{role:"Full-Stack Developer",challenges:["Managing API rate limit bottlenecks and aggregation delays across separate third-party catalogues (Jikan, TMDB).","Minimizing frontend layout cumulative shifts while dynamically rendering card images."],solutions:["Developed a unified Next.js API route acting as an orchestrator with internal redis cache mapping.","Crafted custom fluid CSS grids layout utilizing relative skeleton placeholder layers.","Configured static asset prefetching rules inside Next.js middleware layers."],metrics:["Achieved dynamic gallery page rendering times of <200ms.","Secured zero Cumulative Layout Shift (CLS) scores during rapid page-page jumps."],technologies:["Next.js","TypeScript","TailwindCSS","Framer Motion","REST APIs","Node.js"],githubUrl:"https://github.com/Prathamesh-Jadhav04/KozumiHub"},"04":{role:"Frontend & Analytics Developer",challenges:["Creating responsive financial tracking graphs that render dynamically without crashing on mobile devices.","Ensuring secure offline database capability with smooth transaction synchronization."],solutions:["Implemented Chart.js layout wrappers optimized for aspect-ratio responsive scale changes.","Designed transactional state engines syncing automatically to structured local storage stores.","Engineered dynamic category filtering rules for instantaneous chart redraw triggers."],metrics:["Instantly updates interactive graphs with zero animation lags.","Supports complete offline capability with zero transaction sync conflicts."],technologies:["Next.js","TypeScript","Chart.js","LocalStorage API","CSS Grid","TailwindCSS"],githubUrl:"https://github.com/Prathamesh-Jadhav04/SpendsTrack"},"05":{role:"DevOps & AI Integration Engineer",challenges:["LLM context limits require chunking diffs while retaining context of pull request logic flow.","Interfacing secure webhook servers that respond instantly and prevent PR review duplicate triggers."],solutions:["Engineered an intelligent AST diff chunker feeding filtered context trees into LLM prompts.","Constructed a reliable FastAPI hook server with internal checksum ID deduplication logic.","Integrated LangChain prompt logic mapped dynamically to GitHub API comment lines."],metrics:["Reviews and comments on pull requests in <8 seconds from commit push.","Achieved 85% satisfaction rating from developers using the automated reviews."],technologies:["Python","FastAPI","LangChain","LLM APIs","GitHub Webhooks","CI/CD Pipelines"],githubUrl:"https://github.com/Prathamesh-Jadhav04/Code-Review-Chatbot"}};function o({id:a}){return"01"===a?(0,b.jsxs)("svg",{width:"100%",height:"180",viewBox:"0 0 400 180",style:{background:"#121212",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1.5rem 0"},children:[(0,b.jsxs)("g",{stroke:"rgba(255,180,0,0.15)",strokeWidth:"1",children:[(0,b.jsx)("line",{x1:"100",y1:"40",x2:"300",y2:"40"}),(0,b.jsx)("line",{x1:"70",y1:"90",x2:"200",y2:"90"}),(0,b.jsx)("line",{x1:"200",y1:"90",x2:"330",y2:"90"}),(0,b.jsx)("line",{x1:"50",y1:"140",x2:"150",y2:"140"}),(0,b.jsx)("line",{x1:"150",y1:"140",x2:"250",y2:"140"}),(0,b.jsx)("line",{x1:"250",y1:"140",x2:"350",y2:"140"}),(0,b.jsx)("line",{x1:"100",y1:"40",x2:"70",y2:"90",strokeDasharray:"3"}),(0,b.jsx)("line",{x1:"300",y1:"40",x2:"330",y2:"90",strokeDasharray:"3"}),(0,b.jsx)("line",{x1:"200",y1:"90",x2:"150",y2:"140",strokeDasharray:"3"}),(0,b.jsx)("line",{x1:"200",y1:"90",x2:"250",y2:"140",strokeDasharray:"3"})]}),(0,b.jsx)("circle",{cx:"100",cy:"40",r:"5",fill:"#ffb400"}),(0,b.jsx)("circle",{cx:"300",cy:"40",r:"5",fill:"#ffb400"}),(0,b.jsx)("circle",{cx:"70",cy:"90",r:"4.5",fill:"#f5f5f5",opacity:"0.8"}),(0,b.jsx)("circle",{cx:"200",cy:"90",r:"4.5",fill:"#ffb400"}),(0,b.jsx)("circle",{cx:"330",cy:"90",r:"4.5",fill:"#f5f5f5",opacity:"0.8"}),(0,b.jsx)("circle",{cx:"50",cy:"140",r:"4",fill:"#f5f5f5",opacity:"0.4"}),(0,b.jsx)("circle",{cx:"150",cy:"140",r:"4",fill:"#f5f5f5",opacity:"0.4"}),(0,b.jsx)("circle",{cx:"250",cy:"140",r:"4",fill:"#ffb400"}),(0,b.jsx)("circle",{cx:"350",cy:"140",r:"4",fill:"#f5f5f5",opacity:"0.4"}),(0,b.jsx)("text",{x:"15",y:"20",fill:"rgba(255,180,0,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",children:"HNSW LAYERED SEARCH TOPOLOGY"}),(0,b.jsx)("text",{x:"105",y:"35",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"ENTRY LAYER"}),(0,b.jsx)("text",{x:"255",y:"152",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"NEAREST NEIGHBOR"})]}):"02"===a?(0,b.jsxs)("svg",{width:"100%",height:"180",viewBox:"0 0 400 180",style:{background:"#121212",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1.5rem 0"},children:[(0,b.jsxs)("g",{stroke:"rgba(255,180,0,0.15)",strokeWidth:"1",fill:"none",children:[(0,b.jsx)("rect",{x:"20",y:"60",width:"70",height:"35",rx:"3"}),(0,b.jsx)("rect",{x:"150",y:"60",width:"90",height:"35",rx:"3"}),(0,b.jsx)("rect",{x:"300",y:"60",width:"80",height:"35",rx:"3"}),(0,b.jsx)("path",{d:"M 90 77 L 150 77",stroke:"#ffb400"}),(0,b.jsx)("path",{d:"M 240 77 L 300 77",stroke:"#ffb400"})]}),(0,b.jsx)("text",{x:"55",y:"81",fill:"#f5f5f5",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"libpcap"}),(0,b.jsx)("text",{x:"195",y:"81",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"parser-queue"}),(0,b.jsx)("text",{x:"340",y:"81",fill:"#f5f5f5",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"TLS SNI"}),(0,b.jsx)("circle",{cx:"110",cy:"77",r:"2.5",fill:"#ffb400"}),(0,b.jsx)("circle",{cx:"130",cy:"77",r:"2.5",fill:"#ffb400"}),(0,b.jsx)("circle",{cx:"260",cy:"77",r:"2.5",fill:"#ffb400"}),(0,b.jsx)("circle",{cx:"280",cy:"77",r:"2.5",fill:"#ffb400"}),(0,b.jsx)("text",{x:"15",y:"20",fill:"rgba(255,180,0,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",children:"DPI STREAM INGESTION FLOW"}),(0,b.jsx)("text",{x:"150",y:"130",fill:"rgba(245,245,245,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"// Multi-threaded circular packet buffer"})]}):"03"===a?(0,b.jsxs)("svg",{width:"100%",height:"180",viewBox:"0 0 400 180",style:{background:"#121212",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1.5rem 0"},children:[(0,b.jsxs)("g",{stroke:"rgba(255,180,0,0.15)",strokeWidth:"1",fill:"none",children:[(0,b.jsx)("rect",{x:"20",y:"30",width:"360",height:"18",rx:"2"}),(0,b.jsx)("rect",{x:"20",y:"60",width:"105",height:"100",rx:"3"}),(0,b.jsx)("rect",{x:"147",y:"60",width:"105",height:"100",rx:"3"}),(0,b.jsx)("rect",{x:"275",y:"60",width:"105",height:"100",rx:"3"})]}),(0,b.jsx)("rect",{x:"147",y:"60",width:"105",height:"100",rx:"3",fill:"rgba(255,180,0,0.02)",stroke:"#ffb400",strokeWidth:"1"}),(0,b.jsx)("circle",{cx:"200",cy:"110",r:"7",fill:"#ffb400",opacity:"0.6"}),(0,b.jsx)("text",{x:"15",y:"20",fill:"rgba(255,180,0,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",children:"IMMERSIVE MEDIA CATALOG GRID"}),(0,b.jsx)("text",{x:"30",y:"42",fill:"rgba(245,245,245,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6",children:"SEARCH ENTERTAINMENT TITLE..."})]}):"04"===a?(0,b.jsxs)("svg",{width:"100%",height:"180",viewBox:"0 0 400 180",style:{background:"#121212",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1.5rem 0"},children:[(0,b.jsxs)("g",{stroke:"rgba(245,245,245,0.03)",strokeWidth:"1",children:[(0,b.jsx)("line",{x1:"40",y1:"40",x2:"360",y2:"40"}),(0,b.jsx)("line",{x1:"40",y1:"80",x2:"360",y2:"80"}),(0,b.jsx)("line",{x1:"40",y1:"120",x2:"360",y2:"120"})]}),(0,b.jsx)("line",{x1:"40",y1:"20",x2:"40",y2:"150",stroke:"rgba(245,245,245,0.15)",strokeWidth:"1.5"}),(0,b.jsx)("line",{x1:"40",y1:"150",x2:"370",y2:"150",stroke:"rgba(245,245,245,0.15)",strokeWidth:"1.5"}),(0,b.jsx)("path",{d:"M 40 130 Q 90 110 140 90 T 240 60 T 340 30",fill:"none",stroke:"#ffb400",strokeWidth:"2"}),(0,b.jsx)("circle",{cx:"340",cy:"30",r:"3.5",fill:"#ffb400"}),(0,b.jsx)("text",{x:"15",y:"15",fill:"rgba(255,180,0,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",children:"WEALTH GROWTH RATE PREVIEW"}),(0,b.jsx)("text",{x:"345",y:"24",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"BALANCE"})]}):"05"===a?(0,b.jsxs)("svg",{width:"100%",height:"180",viewBox:"0 0 400 180",style:{background:"#121212",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1.5rem 0"},children:[(0,b.jsxs)("g",{stroke:"rgba(245,245,245,0.1)",strokeWidth:"1.5",fill:"none",children:[(0,b.jsx)("path",{d:"M 30 90 L 370 90"}),(0,b.jsx)("path",{d:"M 100 90 C 140 90, 160 45, 200 45 L 300 45 C 330 45, 340 90, 360 90"})]}),(0,b.jsx)("circle",{cx:"50",cy:"90",r:"4.5",fill:"#f5f5f5",opacity:"0.3"}),(0,b.jsx)("circle",{cx:"100",cy:"90",r:"4.5",fill:"#f5f5f5",opacity:"0.3"}),(0,b.jsx)("circle",{cx:"160",cy:"45",r:"4.5",fill:"#ffb400"}),(0,b.jsx)("circle",{cx:"240",cy:"45",r:"4.5",fill:"#ffb400"}),(0,b.jsx)("circle",{cx:"360",cy:"90",r:"5.5",fill:"#ffb400"}),(0,b.jsx)("rect",{x:"180",y:"80",width:"130",height:"35",rx:"3",fill:"#181818",stroke:"#ffb400",strokeWidth:"1"}),(0,b.jsx)("path",{d:"M 240 45 L 240 80",stroke:"#ffb400",strokeDasharray:"3"}),(0,b.jsx)("text",{x:"190",y:"93",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"LLM PR REVIEW: ACTIVE"}),(0,b.jsx)("text",{x:"190",y:"106",fill:"rgba(245,245,245,0.6)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6.5",children:'"Optimize lines 12-25..."'}),(0,b.jsx)("text",{x:"15",y:"20",fill:"rgba(255,180,0,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",children:"GITHUB PR WEBHOOK PIPELINE"})]}):null}function p({project:a,index:d,isActive:e,isExpanded:f,onToggle:h}){let[i,j]=(0,c.useState)(!1),[k,l]=(0,c.useState)(!1),m=(0,c.useRef)(null),q=n[a.id];return(0,c.useEffect)(()=>{let a=m.current;if(!a)return;let b=new IntersectionObserver(([a])=>{a.isIntersecting&&(setTimeout(()=>l(!0),120*d),b.disconnect())},{threshold:.15});return b.observe(a),()=>b.disconnect()},[d]),(0,b.jsxs)("div",{ref:m,"data-id":a.id,onMouseEnter:()=>j(!0),onMouseLeave:()=>j(!1),onClick:b=>h(a.id,b),className:`project-card ${f?"expanded":""} ${e?"active":""}`,style:{display:"grid",gridTemplateRows:f?"auto 1fr":"auto 0fr",overflow:"hidden",opacity:k?void 0:0,transform:k?void 0:"translateY(40px)"},children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{className:"mobile-project-badge",children:["PROJECT ",a.id]}),(0,b.jsx)("div",{className:`project-dot ${e?"active":""}`}),(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"2rem"},children:[(0,b.jsxs)("div",{style:{display:"flex",alignItems:"baseline",gap:"2rem",flex:1},children:[(0,b.jsx)("span",{style:{fontFamily:"var(--font-mono, monospace)",fontSize:"0.7rem",letterSpacing:"0.15em",color:f?"var(--accent-amber, #ffb400)":"rgba(245,245,245,0.2)",transition:"color 0.4s ease",flexShrink:0},children:a.id}),(0,b.jsx)("span",{className:"project-title-text",style:{fontFamily:"var(--font-heading, sans-serif)",lineHeight:1,letterSpacing:"0.02em"},children:a.title})]}),(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"1.5rem",flexShrink:0},children:[(0,b.jsx)("div",{className:"project-tags-container",style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",justifyContent:"flex-end"},children:a.tags.map(a=>(0,b.jsx)("span",{style:{fontFamily:"var(--font-mono, monospace)",fontSize:"0.6rem",letterSpacing:"0.15em",color:f?"var(--accent-amber, #ffb400)":"rgba(245,245,245,0.4)",border:f?"1px solid rgba(255, 180, 0, 0.25)":"1px solid rgba(245,245,245,0.12)",borderRadius:"999px",padding:"0.25rem 0.75rem",textTransform:"uppercase",whiteSpace:"nowrap",transition:"all 0.3s ease"},children:a},a))}),(0,b.jsx)("span",{style:{fontFamily:"var(--font-mono, monospace)",fontSize:"0.7rem",letterSpacing:"0.1em",color:"rgba(245,245,245,0.3)",minWidth:"3rem",textAlign:"right"},children:a.year}),(0,b.jsx)("button",{onClick:b=>h(a.id,b),className:"project-trigger-btn",style:{background:"none",color:f?"var(--accent-amber, #ffb400)":"rgba(245, 245, 245, 0.4)",fontFamily:"var(--font-mono, monospace)",fontSize:"0.6rem",letterSpacing:"0.1em",cursor:"pointer",padding:"0.35rem 0.75rem",border:f?"1px solid rgba(255, 180, 0, 0.25)":"1px solid rgba(245, 245, 245, 0.1)",borderRadius:"4px",textTransform:"uppercase",transition:"all 0.3s ease",flexShrink:0},children:f?"[ - CLOSE ]":"[ + CASE STUDY ]"})]})]}),(0,b.jsx)("div",{className:"project-card-desc-container",children:(0,b.jsx)("span",{style:{fontFamily:"var(--font-sans, sans-serif)",fontWeight:300,fontSize:"0.9rem",color:f?"rgba(245,245,245,0.7)":e?"rgba(245,245,245,0.75)":"rgba(245,245,245,0.35)",transition:"color 0.4s cubic-bezier(0.65, 0, 0.35, 1)",letterSpacing:"0.01em"},children:a.description})})]}),(0,b.jsx)("div",{style:{minHeight:"0",overflow:"hidden",opacity:+!!f,transition:"opacity 0.4s ease"},children:(0,b.jsxs)("div",{className:"project-card-expanded-content",style:{paddingTop:"2rem",marginTop:"1.5rem",borderTop:"1px solid rgba(245,245,245,0.04)"},children:[(0,b.jsx)(o,{id:a.id}),q&&(0,b.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"3rem",marginTop:"2rem",textAlign:"left"},className:"project-expanded-grid",children:[(0,b.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h4",{className:"spec-title",children:"ROLE"}),(0,b.jsx)("p",{className:"spec-text",style:{color:"#f5f5f5",fontWeight:400},children:q.role})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h4",{className:"spec-title",children:"KEY CHALLENGES"}),(0,b.jsx)("ul",{className:"spec-list",children:q.challenges.map((a,c)=>(0,b.jsx)("li",{children:a},c))})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h4",{className:"spec-title",children:"SOLUTIONS"}),(0,b.jsx)("ul",{className:"spec-list",children:q.solutions.map((a,c)=>(0,b.jsx)("li",{children:a},c))})]})]}),(0,b.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",justifyContent:"space-between"},children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h4",{className:"spec-title",children:"OUTCOMES & KEY METRICS"}),(0,b.jsx)("ul",{className:"spec-list",style:{color:"var(--accent-amber, #ffb400)"},children:q.metrics.map((a,c)=>(0,b.jsx)("li",{children:a},c))})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h4",{className:"spec-title",children:"SYSTEM SPECIFICATION"}),(0,b.jsx)("div",{style:{display:"flex",gap:"0.4rem",flexWrap:"wrap",marginTop:"0.5rem"},children:q.technologies.map(a=>(0,b.jsx)("span",{style:{fontFamily:"var(--font-mono, monospace)",fontSize:"0.55rem",letterSpacing:"0.08em",color:"var(--accent-amber, #ffb400)",background:"rgba(255, 180, 0, 0.04)",border:"1px solid rgba(255, 180, 0, 0.15)",borderRadius:"3px",padding:"0.25rem 0.5rem",textTransform:"uppercase"},children:a},a))})]}),(0,b.jsx)("div",{style:{marginTop:"1rem"},onClick:a=>a.stopPropagation(),children:(0,b.jsx)(g,{range:50,strength:.3,children:(0,b.jsx)("a",{href:q.githubUrl,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",border:"1px solid var(--accent-amber, #ffb400)",background:"transparent",color:"var(--accent-amber, #ffb400)",fontFamily:"var(--font-mono, monospace)",fontSize:"0.65rem",letterSpacing:"0.15em",padding:"0.75rem 1.8rem",textTransform:"uppercase",textDecoration:"none",transition:"all 0.3s ease"},onMouseEnter:a=>{a.currentTarget.style.background="var(--accent-amber, #ffb400)",a.currentTarget.style.color="#0a0a0a"},onMouseLeave:a=>{a.currentTarget.style.background="transparent",a.currentTarget.style.color="var(--accent-amber, #ffb400)"},children:"EXPLORE CODEBASE   →"})})})]})]})]})}),(0,b.jsx)("style",{children:`
        .spec-title {
          font-family: var(--font-mono, monospace);
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          color: rgba(245, 245, 245, 0.35);
          margin-bottom: 0.4rem;
          text-transform: uppercase;
        }

        .spec-text {
          font-family: var(--font-sans, sans-serif);
          font-weight: 300;
          font-size: 0.9rem;
          line-height: 1.5;
          color: rgba(245, 245, 245, 0.75);
        }

        .spec-list {
          padding-left: 1rem;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .spec-list li {
          font-family: var(--font-sans, sans-serif);
          font-weight: 300;
          font-size: 0.85rem;
          line-height: 1.4;
          color: rgba(245, 245, 245, 0.7);
        }

        /* Hover behaviors for trigger buttons */
        .project-trigger-btn:hover {
          color: var(--accent-amber, #ffb400) !important;
          border-color: rgba(255, 180, 0, 0.35) !important;
          background: rgba(255, 180, 0, 0.03);
        }

        @media (max-width: 768px) {
          .project-expanded-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .project-tags-container {
            display: none !important;
          }
        }
      `})]})}function q(){let a=(0,c.useRef)(null),d=(0,c.useRef)(null),[e,f]=(0,c.useState)(!1),[g,h]=(0,c.useState)("01"),[i,j]=(0,c.useState)(null),k=(a,b)=>{b.stopPropagation(),j(i===a?null:a)};(0,c.useEffect)(()=>{let b=d.current;if(!b)return;let c=new IntersectionObserver(([a])=>{a.isIntersecting&&(f(!0),c.disconnect())},{threshold:.2});c.observe(b);let e=new IntersectionObserver(a=>{a.forEach(a=>{if(a.isIntersecting){let b=a.target.getAttribute("data-id");b&&h(b)}})},{root:null,rootMargin:"-25% 0px -45% 0px",threshold:.05}),g=a.current?.querySelectorAll(".project-card");return g?.forEach(a=>e.observe(a)),()=>{c.disconnect(),e.disconnect()}},[]);let l=m.find(a=>a.id===g);return(0,b.jsxs)("section",{id:"projects",ref:a,style:{padding:"8rem 2rem",backgroundColor:"#0a0a0a",position:"relative"},children:[(0,b.jsxs)("div",{style:{maxWidth:"1400px",margin:"0 auto"},children:[(0,b.jsx)("div",{ref:d,style:{fontFamily:"JetBrains Mono, monospace",fontSize:"0.7rem",letterSpacing:"0.3em",color:"#ffb400",marginBottom:"3rem",textTransform:"uppercase",opacity:+!!e,transform:e?"translateY(0)":"translateY(20px)",transition:"opacity 0.6s cubic-bezier(0.65, 0, 0.35, 1), transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)"},children:"02 / Work"}),(0,b.jsx)("h2",{style:{fontFamily:"Bebas Neue, sans-serif",fontSize:"clamp(3rem, 6vw, 6rem)",lineHeight:.9,color:"#f5f5f5",margin:"0 0 5rem 0",letterSpacing:"0.02em",opacity:+!!e,transform:e?"translateY(0)":"translateY(30px)",transition:"opacity 0.7s 0.1s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s 0.1s cubic-bezier(0.65, 0, 0.35, 1)"},children:"SELECTED WORK"}),(0,b.jsxs)("div",{className:"projects-grid",children:[(0,b.jsx)("div",{children:(0,b.jsx)("div",{className:"projects-timeline-container",children:m.map((a,c)=>{let d=g===a.id;return(0,b.jsx)(p,{project:a,index:c,isActive:d,isExpanded:i===a.id,onToggle:k},a.id)})})}),(0,b.jsx)("div",{className:"sticky-project-container",children:(0,b.jsxs)("div",{className:"sticky-project-content",children:[(0,b.jsx)("span",{className:"sticky-project-label",children:"PROJECT"}),(0,b.jsx)("div",{className:"project-id-display",children:g},g),(0,b.jsxs)("div",{className:"sticky-project-details",children:[(0,b.jsxs)("span",{children:["// NAME: ",l?.title]}),(0,b.jsxs)("span",{children:["// YEAR: ",l?.year]}),(0,b.jsxs)("span",{children:["// STACK: ",l?.tags.join(", ")]}),(0,b.jsx)("span",{children:"// INFRASTRUCTURE: OPERATIONAL"})]})]})})]})]}),(0,b.jsx)("style",{children:`
        /* 2-column Grid configuration */
        .projects-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 6rem;
          align-items: start;
          position: relative;
        }

        /* Timeline vertical line */
        .projects-timeline-container {
          position: relative;
          padding-left: 2.5rem;
          border-left: 1px solid rgba(245, 245, 245, 0.08);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* Dot aligned with vertical line */
        .project-dot {
          position: absolute;
          left: -2.55rem;
          top: 2.3rem;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(245, 245, 245, 0.2);
          border: 2px solid #000000;
          transform: translateX(-50%);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 2;
        }

        .project-dot.active {
          background: var(--accent-amber, #ffb400);
          box-shadow: 0 0 14px var(--accent-amber, #ffb400);
          transform: translateX(-50%) scale(1.5);
        }

        /* Individual Project Card styles */
        .project-card {
          position: relative;
          padding: 1.8rem;
          background: rgba(245, 245, 245, 0.01);
          border: 1px solid rgba(245, 245, 245, 0.025);
          border-radius: 8px;
          cursor: pointer;
          opacity: 0.35;
          transform: scale(0.985);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card.expanded {
          opacity: 1;
          transform: scale(1);
          background: rgba(245, 245, 245, 0.02) !important;
          border-color: rgba(245, 245, 245, 0.08) !important;
          box-shadow: 0 10px 40px -25px rgba(0, 0, 0, 0.5);
        }

        .project-card.active {
          opacity: 0.85;
          border-color: rgba(245, 245, 245, 0.06);
        }

        .project-card.active.expanded {
          opacity: 1;
          border-left: 3px solid var(--accent-amber, #ffb400) !important;
          padding-left: calc(1.8rem - 2px) !important;
          border-color: rgba(255, 180, 0, 0.2) !important;
          background: rgba(255, 180, 0, 0.015) !important;
          box-shadow: 0 15px 40px -15px rgba(255, 180, 0, 0.06), inset 0 1px 0px rgba(255, 255, 255, 0.05) !important;
        }

        .project-card:hover {
          border-color: rgba(245, 245, 245, 0.1);
          background: rgba(245, 245, 245, 0.015);
          opacity: 0.85;
        }

        .project-card.expanded:hover {
          background: rgba(245, 245, 245, 0.02) !important;
          border-color: rgba(245, 245, 245, 0.08) !important;
          opacity: 1;
        }

        .project-card.active:hover {
          opacity: 1;
        }

        .project-card.active.expanded:hover {
          border-color: rgba(255, 180, 0, 0.35) !important;
          background: rgba(255, 180, 0, 0.025) !important;
        }

        /* Project Title styles */
        .project-title-text {
          font-family: var(--font-heading, sans-serif);
          font-size: clamp(1.8rem, 4vw, 3rem);
          line-height: 1;
          color: rgba(245, 245, 245, 0.7);
          transition: color 0.4s ease;
          letter-spacing: 0.02em;
        }

        .project-card.active .project-title-text {
          color: rgba(245, 245, 245, 0.95);
        }

        .project-card.active.expanded .project-title-text {
          color: var(--accent-amber, #ffb400);
        }

        /* Hover behavior for inner trigger button */
        .project-card:hover .project-trigger-btn {
          color: rgba(245, 245, 245, 0.8);
          border-color: rgba(245, 245, 245, 0.25);
        }

        .project-card:hover .project-trigger-btn:hover {
          color: var(--accent-amber, #ffb400) !important;
          border-color: rgba(255, 180, 0, 0.35) !important;
          background: rgba(255, 180, 0, 0.03);
        }

        /* Description container indentation */
        .project-card-desc-container {
          padding-left: 3.5rem;
          margin-top: 0.75rem;
        }

        .project-card-expanded-content {
          padding-left: 3.5rem;
        }

        /* Sticky container for desktop */
        .sticky-project-container {
          position: sticky;
          top: 25vh;
          height: 50vh;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .sticky-project-content {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .sticky-project-label {
          font-family: var(--font-mono, "JetBrains Mono", monospace);
          font-size: 0.75rem;
          letter-spacing: 0.4em;
          color: rgba(245, 245, 245, 0.2);
          margin-bottom: 0.5rem;
          transform: translateX(-15px);
        }

        /* Giant ID Slide-in animation */
        @keyframes idSlideIn {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 0.95;
          }
        }

        .project-id-display {
          font-family: var(--font-heading, "Bebas Neue", cursive);
          font-size: clamp(10rem, 20vw, 20rem);
          line-height: 0.8;
          font-weight: 900;
          background: linear-gradient(180deg, var(--accent-amber, #ffb400) 40%, rgba(255, 180, 0, 0.3) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          opacity: 0.95;
          letter-spacing: -0.04em;
          filter: drop-shadow(0 0 40px rgba(255, 180, 0, 0.15));
          animation: idSlideIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          user-select: none;
        }

        .sticky-project-details {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.25rem;
          font-family: var(--font-mono, "JetBrains Mono", monospace);
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          color: rgba(245, 245, 245, 0.25);
          margin-top: 1.5rem;
          transform: translateX(-15px);
        }

        /* Mobile layout styling fallback */
        .mobile-project-badge {
          display: none;
        }

        @media (max-width: 992px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          
          .sticky-project-container {
            display: none !important;
          }
          
          .mobile-project-badge {
            display: inline-block;
            font-family: var(--font-mono, "JetBrains Mono", monospace);
            font-size: 0.7rem;
            color: var(--accent-amber, #ffb400);
            border: 1px solid rgba(255, 180, 0, 0.25);
            background: rgba(255, 180, 0, 0.06);
            padding: 0.25rem 0.6rem;
            border-radius: 4px;
            margin-bottom: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }
          
          .project-card {
            opacity: 1 !important;
            transform: none !important;
            padding: 1.8rem !important;
          }

          .project-dot {
            top: 4.2rem !important; /* adjust for the badge space */
          }

          .project-card-desc-container {
            padding-left: 0 !important;
          }

          .project-card-expanded-content {
            padding-left: 0 !important;
          }
        }
      `})]})}function r({isOpen:a,onClose:d}){let[e,f]=(0,c.useState)(""),[g,h]=(0,c.useState)([{type:"welcome",text:"=================================================="},{type:"welcome",text:"PRATHAMESH JADHAV // AI & SYSTEMS DEVELOPMENT CORE"},{type:"welcome",text:"=================================================="},{type:"welcome",text:'Type "help" for a list of registered queries.'},{type:"welcome",text:'Type "exit" or click outside to close system shell.'},{type:"welcome",text:" "}]),i=(0,c.useRef)(null),j=(0,c.useRef)(null);return((0,c.useEffect)(()=>(a?(setTimeout(()=>{i.current?.focus()},100),document.body.style.overflow="hidden"):document.body.style.overflow="",()=>{document.body.style.overflow=""}),[a]),(0,c.useEffect)(()=>{let b=b=>{"Escape"===b.key&&a&&d()};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[a,d]),(0,c.useEffect)(()=>{j.current&&(j.current.scrollTop=j.current.scrollHeight)},[g]),a)?(0,b.jsxs)("div",{onClick:d,style:{position:"fixed",inset:0,backgroundColor:"rgba(10, 10, 10, 0.85)",backdropFilter:"blur(8px)",zIndex:6e3,display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem"},children:[(0,b.jsxs)("div",{onClick:a=>{a.stopPropagation(),i.current?.focus()},style:{width:"100%",maxWidth:"850px",backgroundColor:"#050505",border:"1px solid rgba(245,245,245,0.08)",borderRadius:"8px",overflow:"hidden",boxShadow:"0 30px 60px rgba(0, 0, 0, 0.8)",cursor:"text"},children:[(0,b.jsxs)("div",{style:{padding:"0.75rem 1.25rem",backgroundColor:"rgba(245,245,245,0.015)",borderBottom:"1px solid rgba(245,245,245,0.04)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,b.jsxs)("div",{style:{display:"flex",gap:"0.4rem"},children:[(0,b.jsx)("button",{onClick:d,style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"rgba(245,245,245,0.1)",border:"none",cursor:"pointer"},onMouseEnter:a=>a.currentTarget.style.backgroundColor="#ff4444",onMouseLeave:a=>a.currentTarget.style.backgroundColor="rgba(245,245,245,0.1)"}),(0,b.jsx)("div",{style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"var(--accent-amber, #ffb400)",opacity:.6}}),(0,b.jsx)("div",{style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"rgba(245,245,245,0.1)"}})]}),(0,b.jsx)("span",{style:{fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"0.6rem",letterSpacing:"0.25em",color:"rgba(245,245,245,0.3)",textTransform:"uppercase"},children:"guest@prathamesh-jadhav: ~ (DOUBLE-CLICK BRAND TO EXIT)"}),(0,b.jsx)("button",{onClick:d,style:{background:"none",border:"none",color:"rgba(245,245,245,0.3)",fontFamily:"monospace",fontSize:"0.8rem",cursor:"pointer"},onMouseEnter:a=>a.currentTarget.style.color="#ffb400",onMouseLeave:a=>a.currentTarget.style.color="rgba(245,245,245,0.3)",children:"✕"})]}),(0,b.jsxs)("div",{ref:j,className:"terminal-stream",style:{height:"380px",overflowY:"auto",padding:"1.5rem",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"0.85rem",lineHeight:1.5,color:"rgba(245,245,245,0.7)",display:"flex",flexDirection:"column",gap:"0.4rem",textAlign:"left",position:"relative"},"data-lenis-prevent":!0,children:[(0,b.jsx)("div",{className:"terminal-scanlines"}),g.map((a,c)=>"welcome"===a.type?(0,b.jsx)("div",{style:{color:"rgba(245,245,245,0.4)",whiteSpace:"pre"},children:a.text},c):"input"===a.type?(0,b.jsx)("div",{style:{color:"var(--accent-amber, #ffb400)",fontWeight:500},children:a.text},c):(0,b.jsx)("div",{style:{whiteSpace:"pre-wrap",color:"rgba(245,245,245,0.75)",marginBottom:"0.5rem"},children:a.text},c)),(0,b.jsxs)("form",{onSubmit:a=>{a.preventDefault();let b=e.trim().toLowerCase();if(!b)return;let c=[...g,{type:"input",text:`guest@prathamesh:~$ ${e}`}];switch(b){case"help":c.push({type:"output",text:`
Registered system queries:
  about    - Displays profile summary and systems focus
  skills   - Lists technical framework & algorithm specs
  projects - Displays active production-grade directories
  contact  - Outputs secure mailbox and connection channels
  neofetch - Shows system hardware and configuration
  exit     - Shuts down system shell
  clear    - Flushes console output log history
          `.trim()});break;case"about":c.push({type:"output",text:`
Prathamesh Jadhav — Engineering-focused AI/ML developer.
Specializing in building production-grade vector databases, low-latency RAG architectures, and multi-threaded systems-level network analysis.
Focus: Custom indexing (HNSW), concurrency control, and data throughput optimizations.
          `.trim()});break;case"skills":c.push({type:"output",text:`
Technical Competencies:
  [Vector Engines]     HNSW Graph Indexing, Scalar Quantization
  [Systems & Networking] Multithreading, C, Python (Scapy, pcap)
  [GenAI / RAG]          FastAPI, LangChain, OpenAI APIs
  [Web Frameworks]       Next.js, React 19, TypeScript, CSS Grid
          `.trim()});break;case"projects":c.push({type:"output",text:`
Production Repositories:
  01 / NUROSEARCH   - HNSW-indexed vector database [Rust/Python/FastAPI]
  02 / DPI ENGINE   - Multi-threaded raw packet interceptor [C/Python/Scapy]
  03 / KOZUMIHUB    - Entertainment indexing orchestrator [TypeScript/NextJS]
  04 / SPENDSTRACK  - Offline-first transactional dashboard [TypeScript]
  05 / PR REVIEWER  - Automated AI code reviewing webhook chatbot [FastAPI]
          `.trim()});break;case"contact":c.push({type:"output",text:`
Ingestion Gateways:
  Email:    Prathamesh.Jadhav.Office@gmail.com
  GitHub:   https://github.com/Prathamesh-Jadhav04
  LinkedIn: https://linkedin.com/in/prathamesh-jadhav04
          `.trim()});break;case"neofetch":c.push({type:"output",text:`
 _  _              guest@prathamesh-jadhav
 |  |  _|_  |_|    -----------------------
 |__|   |_  | |    OS: NextJS Core OS (Windows WSL2)
 _                 KERNEL: React 19.2.4 (Turbopack)
 |_) ._ _._|_|_    UPTIME: 22h 45m
 |   | (_| |_| |   SHELL: jsh v1.0.0
                   RESOLUTION: 1920x1080
                   THEME: Dark Brutalist Amber
                   COMPILER: TypeScript v5
          `.trim()});break;case"clear":h([]),f("");return;case"exit":d(),f("");return;default:c.push({type:"output",text:`jsh: command not recognized: "${b}". Type "help" for instructions.`})}h(c),f("")},style:{display:"flex",alignItems:"center",marginTop:"0.5rem"},children:[(0,b.jsx)("span",{style:{color:"var(--accent-amber, #ffb400)",marginRight:"0.5rem",flexShrink:0},children:"guest@prathamesh:~$"}),(0,b.jsx)("input",{ref:i,type:"text",value:e,onChange:a=>f(a.target.value),autoComplete:"off",autoCapitalize:"off",spellCheck:"false",style:{flex:1,background:"transparent",border:"none",outline:"none",color:"#f5f5f5",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"0.85rem",padding:0,caretColor:"var(--accent-amber, #ffb400)",cursor:"text"}})]})]})]}),(0,b.jsx)("style",{children:`
        .terminal-stream::-webkit-scrollbar {
          width: 4px;
        }
        .terminal-stream::-webkit-scrollbar-track {
          background: rgba(245,245,245,0.01);
        }
        .terminal-stream::-webkit-scrollbar-thumb {
          background: rgba(245,245,245,0.08);
          border-radius: 2px;
        }
        
        .terminal-scanlines {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            rgba(18, 16, 16, 0) 50%, 
            rgba(0, 0, 0, 0.25) 50%
          );
          background-size: 100% 4px;
          z-index: 10;
          pointer-events: none;
          opacity: 0.15;
        }
      `})]}):null}let s=[{label:"GitHub",href:"https://github.com/Prathamesh-Jadhav04",icon:(0,b.jsx)(function(){return(0,b.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:(0,b.jsx)("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"})})},{})},{label:"LinkedIn",href:"https://linkedin.com/in/prathamesh-jadhav04",icon:(0,b.jsx)(function(){return(0,b.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:(0,b.jsx)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})},{})}];function t({link:a}){let[d,e]=(0,c.useState)(!1);return(0,b.jsx)(g,{children:(0,b.jsxs)("a",{href:a.href,target:"_blank",rel:"noopener noreferrer","aria-label":a.label,onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),style:{display:"flex",alignItems:"center",gap:"0.5rem",color:d?"#ffb400":"rgba(245,245,245,0.4)",textDecoration:"none",fontFamily:"JetBrains Mono, monospace",fontSize:"0.65rem",letterSpacing:"0.15em",textTransform:"uppercase",transition:"color 0.3s cubic-bezier(0.65, 0, 0.35, 1)",padding:"0.5rem"},children:[a.icon,(0,b.jsx)("span",{children:a.label})]})})}function u(){let a=(0,c.useRef)(null),[d,e]=(0,c.useState)(!1),[f,h]=(0,c.useState)({name:"",email:"",subject:"",message:""}),[i,j]=(0,c.useState)("idle"),[k,l]=(0,c.useState)("");(0,c.useEffect)(()=>{let b=a.current;if(!b)return;let c=new IntersectionObserver(([a])=>{a.isIntersecting&&(e(!0),c.disconnect())},{threshold:.1});return c.observe(b),()=>c.disconnect()},[]);let m=a=>{let{name:b,value:c}=a.target;h(a=>({...a,[b]:c}))},n=async a=>{if(a.preventDefault(),!f.name||!f.email||!f.subject||!f.message){l("All fields are required."),j("error");return}j("sending"),l("");try{let a=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)}),b=await a.json();if(!a.ok)throw Error(b.error||"Failed to transmit message.");j("success"),h({name:"",email:"",subject:"",message:""})}catch(a){console.error(a),l(a.message||"Something went wrong. Please try again."),j("error")}};return(0,b.jsxs)("section",{id:"contact",style:{padding:"8rem 2rem",borderTop:"1px solid rgba(245,245,245,0.08)",backgroundColor:"#0a0a0a"},children:[(0,b.jsxs)("div",{ref:a,style:{maxWidth:"1400px",margin:"0 auto",textAlign:"center"},children:[(0,b.jsx)("div",{style:{fontFamily:"JetBrains Mono, monospace",fontSize:"0.7rem",letterSpacing:"0.3em",color:"#ffb400",marginBottom:"2rem",textTransform:"uppercase",opacity:+!!d,transform:d?"translateY(0)":"translateY(20px)",transition:"opacity 0.6s cubic-bezier(0.65, 0, 0.35, 1), transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)"},children:"03 / Build"}),(0,b.jsx)("h2",{style:{fontFamily:"Bebas Neue, sans-serif",fontSize:"clamp(3.5rem, 8vw, 8rem)",lineHeight:.9,color:"#f5f5f5",margin:"0 0 2rem 0",letterSpacing:"0.02em",opacity:+!!d,transform:d?"translateY(0)":"translateY(30px)",transition:"opacity 0.7s 0.1s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s 0.1s cubic-bezier(0.65, 0, 0.35, 1)"},children:"LET'S BUILD SOMETHING."}),(0,b.jsx)("p",{style:{fontFamily:"Inter, sans-serif",fontWeight:300,fontSize:"clamp(0.9rem, 1.5vw, 1.1rem)",color:"rgba(245,245,245,0.5)",margin:"0 0 4rem 0",opacity:+!!d,transform:d?"translateY(0)":"translateY(20px)",transition:"opacity 0.7s 0.2s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s 0.2s cubic-bezier(0.65, 0, 0.35, 1)"},children:"Have an idea? Let's make it real."}),(0,b.jsx)("div",{style:{maxWidth:"650px",margin:"0 auto",textAlign:"left",opacity:+!!d,transform:d?"translateY(0)":"translateY(30px)",transition:"opacity 0.8s 0.25s cubic-bezier(0.65, 0, 0.35, 1), transform 0.8s 0.25s cubic-bezier(0.65, 0, 0.35, 1)"},children:"success"===i?(0,b.jsxs)("div",{style:{background:"rgba(255, 180, 0, 0.02)",border:"1px solid rgba(255, 180, 0, 0.2)",borderRadius:"8px",padding:"3rem 2rem",textAlign:"center",boxShadow:"0 15px 40px -15px rgba(255, 180, 0, 0.05)"},children:[(0,b.jsx)("div",{style:{fontFamily:"JetBrains Mono, monospace",fontSize:"0.65rem",letterSpacing:"0.25em",color:"#ffb400",marginBottom:"1rem"},children:"[SUCCESS] TRANSMISSION ESTABLISHED"}),(0,b.jsx)("h3",{style:{fontFamily:"Bebas Neue, sans-serif",fontSize:"2.5rem",color:"#f5f5f5",marginBottom:"1rem",letterSpacing:"0.02em"},children:"MESSAGE LOGGED"}),(0,b.jsx)("p",{style:{fontFamily:"Inter, sans-serif",fontWeight:300,fontSize:"0.95rem",lineHeight:1.6,color:"rgba(245,245,245,0.6)",marginBottom:"2rem"},children:"Thank you. Your message has been ingested securely. Prathamesh will review your query and reply shortly."}),(0,b.jsx)(g,{strength:.2,range:60,children:(0,b.jsx)("button",{type:"button",onClick:()=>j("idle"),className:"submit-btn",children:"SEND ANOTHER MESSAGE"})})]}):(0,b.jsxs)("form",{onSubmit:n,children:[(0,b.jsxs)("div",{className:"contact-form-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2rem"},children:[(0,b.jsxs)("div",{className:"contact-form-group",children:[(0,b.jsx)("label",{htmlFor:"name",className:"contact-label",children:"Name"}),(0,b.jsx)("input",{type:"text",id:"name",name:"name",required:!0,value:f.name,onChange:m,className:"contact-input",placeholder:"Enter your name",disabled:"sending"===i})]}),(0,b.jsxs)("div",{className:"contact-form-group",children:[(0,b.jsx)("label",{htmlFor:"email",className:"contact-label",children:"Email"}),(0,b.jsx)("input",{type:"email",id:"email",name:"email",required:!0,value:f.email,onChange:m,className:"contact-input",placeholder:"Enter your email",disabled:"sending"===i})]})]}),(0,b.jsxs)("div",{className:"contact-form-group",children:[(0,b.jsx)("label",{htmlFor:"subject",className:"contact-label",children:"Subject"}),(0,b.jsx)("input",{type:"text",id:"subject",name:"subject",required:!0,value:f.subject,onChange:m,className:"contact-input",placeholder:"Enter message subject",disabled:"sending"===i})]}),(0,b.jsxs)("div",{className:"contact-form-group",children:[(0,b.jsx)("label",{htmlFor:"message",className:"contact-label",children:"Message"}),(0,b.jsx)("textarea",{id:"message",name:"message",required:!0,value:f.message,onChange:m,className:"contact-textarea",placeholder:"Enter details of your project or query...",disabled:"sending"===i})]}),"error"===i&&(0,b.jsxs)("div",{style:{fontFamily:"JetBrains Mono, monospace",fontSize:"0.7rem",color:"#ff4444",marginBottom:"1.5rem",letterSpacing:"0.05em"},children:["// [ERROR]: ",k]}),(0,b.jsx)("div",{style:{textAlign:"center",marginTop:"1rem"},children:(0,b.jsx)(g,{strength:.2,range:80,children:(0,b.jsx)("button",{type:"submit",disabled:"sending"===i,className:"submit-btn",children:"sending"===i?"TRANSMITTING...":"TRANSMIT MESSAGE"})})})]})}),(0,b.jsx)("div",{style:{display:"flex",gap:"2rem",justifyContent:"center",marginTop:"5rem",flexWrap:"wrap",opacity:+!!d,transform:d?"translateY(0)":"translateY(20px)",transition:"opacity 0.7s 0.4s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s 0.4s cubic-bezier(0.65, 0, 0.35, 1)"},children:s.map(a=>(0,b.jsx)(t,{link:a},a.label))}),(0,b.jsx)("div",{style:{marginTop:"6rem",paddingTop:"2rem",borderTop:"1px solid rgba(245,245,245,0.08)",opacity:+!!d,transition:"opacity 0.7s 0.5s cubic-bezier(0.65, 0, 0.35, 1)"},children:(0,b.jsx)("span",{style:{fontFamily:"JetBrains Mono, monospace",fontSize:"0.65rem",letterSpacing:"0.2em",color:"rgba(245,245,245,0.3)",textTransform:"uppercase"},children:"© 2026 PRATHAMESH JADHAV. BUILT WITH PURPOSE."})})]}),(0,b.jsx)("style",{children:`
        .contact-form-group {
          position: relative;
          margin-bottom: 2.5rem;
          display: flex;
          flex-direction: column;
        }
        
        .contact-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: rgba(245, 245, 245, 0.3);
          text-transform: uppercase;
          margin-bottom: 0.6rem;
          transition: color 0.3s ease;
        }

        .contact-input, .contact-textarea {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 1rem;
          color: #f5f5f5;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(245, 245, 245, 0.12);
          padding: 0.8rem 0;
          transition: all 0.3s ease;
          width: 100%;
          outline: none;
          cursor: text !important;
        }

        .contact-input:focus, .contact-textarea:focus {
          border-bottom-color: var(--accent-amber, #ffb400);
        }

        .contact-form-group:focus-within .contact-label {
          color: var(--accent-amber, #ffb400);
        }

        .contact-textarea {
          min-height: 120px;
          resize: vertical;
        }
        
        .submit-btn {
          border: 1px solid #ffb400;
          color: #ffb400;
          background: transparent;
          padding: 1rem 3rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);
          display: inline-block;
        }

        .submit-btn:hover {
          color: #0a0a0a;
          background-color: #ffb400;
        }
        
        .submit-btn:disabled {
          border-color: rgba(245, 245, 245, 0.2);
          color: rgba(245, 245, 245, 0.3);
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .contact-form-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `})]})}a.s(["default",0,function(){let[a,g]=(0,c.useState)(!1),[j,k]=(0,c.useState)(!1),[m,n]=(0,c.useState)(!1);return(0,b.jsxs)(b.Fragment,{children:[!a&&(0,b.jsx)(d,{onComplete:()=>g(!0),onStartTransition:()=>k(!0)}),(0,b.jsx)(f,{}),(0,b.jsx)(e,{}),j&&(0,b.jsxs)("main",{children:[(0,b.jsx)(h,{onLogoDoubleClick:()=>n(!0)}),(0,b.jsx)(i,{}),(0,b.jsx)(l,{}),(0,b.jsx)(q,{}),(0,b.jsx)(u,{}),(0,b.jsx)(r,{isOpen:m,onClose:()=>n(!1)})]})]})}],40777)}];

//# sourceMappingURL=src_app_page_tsx_0ss2.w7._.js.map