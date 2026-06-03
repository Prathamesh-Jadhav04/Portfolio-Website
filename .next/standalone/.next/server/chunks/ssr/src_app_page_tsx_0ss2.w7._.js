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
      `})]})}let j=[{id:1,year:"2022",title:"COMMENCEMENT OF ENGINEERING JOURNEY",teaser:"Entered Computer Science foundations, diving into algorithms and core computing logic.",description:"Stepped into the world of computational thinking, logical structures, and database principles. Immersed myself in learning foundational engineering mathematics and digital electronics.",details:"Acquired core logic and basic troubleshooting patterns early on.",technologies:["C Language","CS Fundamentals","Boolean Logic"]},{id:2,year:"2022",title:"THE FIRST LINE OF CODE",teaser:'Wrote my very first "Hello World" terminal program, igniting a passion for software construction.',description:"Began building basic terminal games, calculators, and automation scripts. Explored control flow structure, debugging routines, and compiling mechanics.",details:"Spent hours debugging pointer offsets and system syntax anomalies.",technologies:["Python","C Language","Scripting"]},{id:3,year:"2023",title:"FIRST FULL-STACK WEB APPLICATION",teaser:"Designed, coded, and deployed my first database-driven live server site.",description:"Mastered standard relational database structures, SQL query structures, and server routing. Deployed first responsive media portal hosting, resolving client-server data flows.",details:"Optimized page load configurations and local caching schemas.",technologies:["React","Node.js","Express","SQL Databases"]},{id:4,year:"2024",title:"DATA SCIENCE INTERNSHIP",teaser:"Joined Uptricks Services Pvt. Ltd. to run statistical modeling and pre-processing.",description:"Processed high-dimensional tabular datasets. Evaluated predictive machine learning models to capture actionable analytics patterns.",details:"Wrote robust validation suites to filter noisy logistics dataset entries.",technologies:["Python","Pandas","NumPy","Scikit-Learn","Statistical Modeling"]},{id:5,year:"2024",title:"SYSTEMS-LEVEL PIPELINES",teaser:"Architected automated data ingest workflows, reducing database import overheads.",description:"Designed and deployed automated pre-processing pipelines to optimize model ingest latency.",details:"Gained hands-on exposure to CI/CD triggers and Linux deployment environments.",technologies:["Python","Shell Scripting","ETL Pipelines","Database Optimization"]},{id:6,year:"2025",title:"GENAI & LLM API INTEGRATIONS",teaser:"Engineered FastAPI endpoints and LangChain RAG pipelines for contextual bots.",description:"Built secure webhook aggregators to review git diffs. Designed vector search integration layers serving low-latency context injections to LLM prompts.",details:"Engineered prompt templates with metadata filters to prevent context leaks.",technologies:["FastAPI","LangChain","OpenAI APIs","Vector Embeddings"]},{id:7,year:"2026",title:"ENGINEERING GRADUATION (CGPA 7.8)",teaser:"Successfully completed degree. Built a Capstone Clinical Decision Support System.",description:"Completed Bachelor of Engineering in Computer Science. Designed and defended CDSS capstone model merging multi-modal clinical markers for prognosis analytics.",details:"Maintained a strong cumulative CGPA of 7.8 across rigorous coursework semesters.",technologies:["Predictive Modeling","Data Visualization","Capstone Project"]},{id:8,year:"2026",title:"PRODUCTION SYSTEMS DEVELOPMENT",teaser:"Built custom HNSW vector database (NuroSearch) & packet inspector (DPI Engine).",description:"Implemented low-latency index graphs and multi-threaded raw network packet capturing listeners. Focused on memory allocations and concurrent graph insertions.",details:"Architected custom scalar quantization scripts to compress memory footprints.",technologies:["Rust","Python","C Language","HNSW Graph","Multithreading","Scapy"]}];function k({id:a}){return 1===a?(0,b.jsxs)("svg",{width:"100%",height:"120",viewBox:"0 0 400 120",style:{background:"#111",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1rem 0"},children:[(0,b.jsx)("circle",{cx:"80",cy:"60",r:"12",fill:"rgba(255,180,0,0.08)",stroke:"#ffb400",strokeWidth:"1"}),(0,b.jsx)("circle",{cx:"200",cy:"60",r:"12",fill:"none",stroke:"rgba(245,245,245,0.15)",strokeWidth:"1"}),(0,b.jsx)("circle",{cx:"320",cy:"60",r:"12",fill:"none",stroke:"rgba(245,245,245,0.15)",strokeWidth:"1"}),(0,b.jsx)("line",{x1:"92",y1:"60",x2:"188",y2:"60",stroke:"rgba(245,245,245,0.08)",strokeDasharray:"3"}),(0,b.jsx)("line",{x1:"212",y1:"60",x2:"308",y2:"60",stroke:"rgba(245,245,245,0.08)",strokeDasharray:"3"}),(0,b.jsx)("text",{x:"80",y:"63",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"CS"}),(0,b.jsx)("text",{x:"200",y:"63",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"DS"}),(0,b.jsx)("text",{x:"320",y:"63",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"AI"}),(0,b.jsx)("text",{x:"15",y:"18",fill:"rgba(255,180,0,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"CS FOUNDATION INDEX"})]}):2===a?(0,b.jsxs)("svg",{width:"100%",height:"120",viewBox:"0 0 400 120",style:{background:"#111",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1rem 0"},children:[(0,b.jsx)("rect",{x:"25",y:"25",width:"350",height:"70",rx:"4",fill:"#050505",stroke:"rgba(245,245,245,0.05)"}),(0,b.jsx)("text",{x:"40",y:"52",fill:"rgba(245,245,245,0.35)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8.5",children:'>>> print("Hello World")'}),(0,b.jsx)("text",{x:"40",y:"72",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8.5",children:"Hello World"}),(0,b.jsx)("rect",{x:"110",y:"62",width:"5",height:"10",fill:"#ffb400",opacity:"0.8"}),(0,b.jsx)("text",{x:"15",y:"18",fill:"rgba(255,180,0,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"COMPILER SHELL EXECUTION"})]}):3===a?(0,b.jsxs)("svg",{width:"100%",height:"120",viewBox:"0 0 400 120",style:{background:"#111",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1rem 0"},children:[(0,b.jsx)("rect",{x:"35",y:"35",width:"90",height:"45",rx:"3",fill:"none",stroke:"rgba(245,245,245,0.12)"}),(0,b.jsx)("rect",{x:"275",y:"35",width:"90",height:"45",rx:"3",fill:"none",stroke:"rgba(245,245,245,0.12)"}),(0,b.jsx)("path",{d:"M 125 58 L 275 58",stroke:"#ffb400",strokeDasharray:"3"}),(0,b.jsx)("text",{x:"80",y:"53",fill:"#f5f5f5",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"USERS_DB"}),(0,b.jsx)("text",{x:"80",y:"65",fill:"rgba(245,245,245,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",textAnchor:"middle",children:"PK: user_id"}),(0,b.jsx)("text",{x:"320",y:"53",fill:"#f5f5f5",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"POSTS_DB"}),(0,b.jsx)("text",{x:"320",y:"65",fill:"rgba(245,245,245,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",textAnchor:"middle",children:"FK: author_id"}),(0,b.jsx)("text",{x:"200",y:"50",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7.5",textAnchor:"middle",children:"RELATIONAL MAP"}),(0,b.jsx)("text",{x:"15",y:"18",fill:"rgba(255,180,0,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"DATABASE SCHEMA"})]}):4===a?(0,b.jsxs)("svg",{width:"100%",height:"120",viewBox:"0 0 400 120",style:{background:"#111",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1rem 0"},children:[(0,b.jsx)("path",{d:"M 40 60 L 140 60 M 260 60 L 360 60",stroke:"rgba(245,245,245,0.15)"}),(0,b.jsx)("rect",{x:"140",y:"42",width:"120",height:"36",rx:"3",fill:"none",stroke:"#ffb400"}),(0,b.jsx)("text",{x:"200",y:"64",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"CLEANSE & MODEL"}),(0,b.jsx)("circle",{cx:"90",cy:"60",r:"3",fill:"#f5f5f5",opacity:"0.3"}),(0,b.jsx)("circle",{cx:"310",cy:"60",r:"3",fill:"#ffb400"}),(0,b.jsx)("text",{x:"15",y:"18",fill:"rgba(255,180,0,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"UPTRICKS DATA REFINEMENT FLOW"})]}):5===a?(0,b.jsxs)("svg",{width:"100%",height:"120",viewBox:"0 0 400 120",style:{background:"#111",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1rem 0"},children:[(0,b.jsxs)("g",{stroke:"rgba(245,245,245,0.1)",strokeWidth:"1",fill:"none",children:[(0,b.jsx)("rect",{x:"40",y:"45",width:"60",height:"28",rx:"2"}),(0,b.jsx)("rect",{x:"170",y:"45",width:"60",height:"28",rx:"2"}),(0,b.jsx)("rect",{x:"300",y:"45",width:"60",height:"28",rx:"2"}),(0,b.jsx)("path",{d:"M 100 59 L 170 59 M 230 59 L 300 59",stroke:"#ffb400"})]}),(0,b.jsx)("text",{x:"70",y:"62",fill:"rgba(245,245,245,0.5)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"RAW"}),(0,b.jsx)("text",{x:"200",y:"62",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"FILTER"}),(0,b.jsx)("text",{x:"330",y:"62",fill:"rgba(245,245,245,0.5)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"STORE"}),(0,b.jsx)("text",{x:"15",y:"18",fill:"rgba(255,180,0,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"AUTOMATED PIPELINE LOAD (ETL)"})]}):6===a?(0,b.jsxs)("svg",{width:"100%",height:"120",viewBox:"0 0 400 120",style:{background:"#111",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1rem 0"},children:[(0,b.jsx)("rect",{x:"30",y:"40",width:"80",height:"36",rx:"3",fill:"none",stroke:"rgba(245,245,245,0.12)"}),(0,b.jsx)("rect",{x:"160",y:"40",width:"80",height:"36",rx:"3",fill:"none",stroke:"#ffb400",strokeWidth:"1.5"}),(0,b.jsx)("rect",{x:"290",y:"40",width:"80",height:"36",rx:"3",fill:"none",stroke:"rgba(245,245,245,0.12)"}),(0,b.jsx)("path",{d:"M 110 58 L 160 58 M 240 58 L 290 58",stroke:"rgba(245,245,245,0.12)"}),(0,b.jsx)("text",{x:"70",y:"62",fill:"rgba(245,245,245,0.6)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7.5",textAnchor:"middle",children:"PROMPT"}),(0,b.jsx)("text",{x:"200",y:"62",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7.5",textAnchor:"middle",children:"RAG MODEL"}),(0,b.jsx)("text",{x:"330",y:"62",fill:"rgba(245,245,245,0.6)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7.5",textAnchor:"middle",children:"OUTPUT"}),(0,b.jsx)("text",{x:"15",y:"18",fill:"rgba(255,180,0,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"SEMANTIC CONTEXT RETRIEVAL LAYER"})]}):7===a?(0,b.jsxs)("svg",{width:"100%",height:"120",viewBox:"0 0 400 120",style:{background:"#111",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1rem 0"},children:[(0,b.jsx)("rect",{x:"150",y:"35",width:"100",height:"36",rx:"4",fill:"rgba(255,180,0,0.02)",stroke:"#ffb400",strokeWidth:"1.5"}),(0,b.jsx)("text",{x:"200",y:"57",fill:"#ffb400",fontFamily:"var(--font-bebas-neue, sans-serif)",fontSize:"14",letterSpacing:"0.05em",textAnchor:"middle",children:"B.E. GRADUATE"}),(0,b.jsx)("text",{x:"200",y:"94",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"CGPA: 7.8 // CAPSTONE DEPLOYED"}),(0,b.jsx)("text",{x:"15",y:"18",fill:"rgba(255,180,0,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"ACADEMIC DEGREE VERIFICATION"})]}):8===a?(0,b.jsxs)("svg",{width:"100%",height:"120",viewBox:"0 0 400 120",style:{background:"#111",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1rem 0"},children:[(0,b.jsx)("circle",{cx:"110",cy:"60",r:"18",fill:"none",stroke:"#ffb400",strokeWidth:"1.5"}),(0,b.jsx)("circle",{cx:"290",cy:"60",r:"18",fill:"none",stroke:"rgba(245,245,245,0.15)",strokeWidth:"1.5"}),(0,b.jsx)("line",{x1:"128",y1:"60",x2:"272",y2:"60",stroke:"#ffb400",strokeDasharray:"3"}),(0,b.jsx)("text",{x:"110",y:"63",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6",textAnchor:"middle",children:"NUROSEARCH"}),(0,b.jsx)("text",{x:"290",y:"63",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6",textAnchor:"middle",children:"DPI_ENGINE"}),(0,b.jsx)("text",{x:"200",y:"50",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7.5",textAnchor:"middle",children:"SYSTEMS ARCH"}),(0,b.jsx)("text",{x:"15",y:"18",fill:"rgba(255,180,0,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"CUSTOM ENGINE GRAPH"})]}):null}function l({onHoverChange:a}){let d=(0,c.useRef)(null),[e,f]=(0,c.useState)([]),g=(0,c.useRef)({x:0,y:0}),h=(0,c.useRef)(!1),i=(0,c.useRef)(!1),j=(0,c.useRef)({x:0,y:0}),[k,m]=(0,c.useState)(!1),n=Array.from(new Set(["React","Next.js","Node.js","TypeScript","JavaScript","Python","Rust","C Language","C++","FastAPI","LangChain","OpenAI API","HNSW Graph","Vector DB","RAG Pipelines","SQL Databases","NoSQL","MongoDB","Redis","Docker","Git","Linux","Shell Scripting","ETL Pipelines","Scikit-Learn","Pandas","NumPy","Multithreading","Scapy","Network Protocols"]));(0,c.useEffect)(()=>{let a=n.length;f(n.map((b,c)=>{let d=Math.acos(-1+(2*(c+1)-1)/a),e=Math.sqrt(a*Math.PI)*d;return{text:b,x:130*Math.sin(d)*Math.cos(e),y:130*Math.sin(d)*Math.sin(e),z:130*Math.cos(d)}}))},[]),(0,c.useEffect)(()=>{let a,b=.002,c=.002,d=()=>{if(i.current){a=requestAnimationFrame(d);return}h.current?(b=-(4e-5*g.current.y),c=4e-5*g.current.x):(b=.98*b+2e-5,c=.98*c+3e-5),f(a=>a.map(a=>{let d=Math.cos(b),e=Math.sin(b),f=a.y*d-a.z*e,g=a.y*e+a.z*d,h=Math.cos(c),i=Math.sin(c),j=a.x*h+g*i,k=-a.x*i+g*h;return{...a,x:j,y:f,z:k}})),a=requestAnimationFrame(d)};return a=requestAnimationFrame(d),()=>cancelAnimationFrame(a)},[]);let o=()=>{m(!1),i.current=!1};return(0,b.jsx)("div",{ref:d,onMouseMove:a=>{if(!d.current)return;let b=d.current.getBoundingClientRect(),c=b.left+b.width/2,e=b.top+b.height/2;if(g.current={x:a.clientX-c,y:a.clientY-e},i.current){let b=a.clientX-j.current.x,c=a.clientY-j.current.y;j.current={x:a.clientX,y:a.clientY};let d=-(.005*c),e=.005*b;f(a=>a.map(a=>{let b=Math.cos(d),c=Math.sin(d),f=a.y*b-a.z*c,g=a.y*c+a.z*b,h=Math.cos(e),i=Math.sin(e),j=a.x*h+g*i,k=-a.x*i+g*h;return{...a,x:j,y:f,z:k}}))}},onMouseDown:a=>{m(!0),i.current=!0,j.current={x:a.clientX,y:a.clientY}},onMouseUp:o,onMouseLeave:()=>{h.current=!1,a(!1),o()},onMouseEnter:()=>{h.current=!0,a(!0)},onTouchStart:b=>{a(!0),i.current=!0,m(!0),b.touches.length>0&&(j.current={x:b.touches[0].clientX,y:b.touches[0].clientY})},onTouchMove:a=>{if(!d.current||0===a.touches.length)return;let b=d.current.getBoundingClientRect(),c=b.left+b.width/2,e=b.top+b.height/2,h=a.touches[0].clientX,k=a.touches[0].clientY;if(g.current={x:h-c,y:k-e},i.current){let a=h-j.current.x,b=k-j.current.y;j.current={x:h,y:k};let c=-(.006*b),d=.006*a;f(a=>a.map(a=>{let b=Math.cos(c),e=Math.sin(c),f=a.y*b-a.z*e,g=a.y*e+a.z*b,h=Math.cos(d),i=Math.sin(d),j=a.x*h+g*i,k=-a.x*i+g*h;return{...a,x:j,y:f,z:k}}))}},onTouchEnd:()=>{a(!1),o()},onDragStart:a=>a.preventDefault(),style:{position:"relative",width:"320px",height:"320px",cursor:k?"grabbing":"grab",userSelect:"none",touchAction:"none"},children:e.map((a,c)=>{let d=(280+a.z)/280,e=160+a.x*d,f=160+a.y*d,g=(a.z+130)/260*.8+.2,h=Math.round(a.z+130);return(0,b.jsx)("span",{style:{position:"absolute",left:`${e}px`,top:`${f}px`,transform:`translate(-50%, -50%) scale(${d})`,fontSize:"0.75rem",fontFamily:"var(--font-jetbrains-mono, monospace)",fontWeight:a.z>0?500:300,color:a.z>0?"var(--accent-amber, #ffb400)":"rgba(245, 245, 245, 0.35)",opacity:g,zIndex:h,whiteSpace:"nowrap",textTransform:"uppercase",pointerEvents:a.z>0?"auto":"none",background:a.z>0?"rgba(255, 180, 0, 0.04)":"transparent",border:a.z>0?"1px solid rgba(255, 180, 0, 0.15)":"1px solid transparent",borderRadius:"4px",padding:"0.2rem 0.5rem",transition:"color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease",boxShadow:a.z>40?"0 0 10px rgba(255, 180, 0, 0.08)":"none"},children:a.text},c)})})}function m(){let[a,d]=(0,c.useState)("2022"),[e,f]=(0,c.useState)(1),[g,h]=(0,c.useState)(1),[i,m]=(0,c.useState)(!1),[n,o]=(0,c.useState)(!1),p=(0,c.useRef)(null);(0,c.useEffect)(()=>{let a=p.current;if(!a)return;let b=new IntersectionObserver(([a])=>{m(a.isIntersecting)},{root:null,rootMargin:"0px",threshold:.05});b.observe(a);let c=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting&&a.target.classList.add("in-view")})},{threshold:.1,rootMargin:"-10% 0px"}),e=p.current?.querySelectorAll(".animate-on-scroll");e?.forEach(a=>c.observe(a));let g=new IntersectionObserver(a=>{a.forEach(a=>{if(a.isIntersecting){let b=a.target.getAttribute("data-year"),c=a.target.getAttribute("data-id");if(b&&d(b),c){let a=parseInt(c,10);f(a),h(a)}}})},{root:null,rootMargin:"-10% 0px -20% 0px",threshold:.05}),i=p.current?.querySelectorAll(".timeline-card");return i?.forEach(a=>g.observe(a)),()=>{b.disconnect(),c.disconnect(),g.disconnect()}},[]),(0,c.useEffect)(()=>{let a;if(!i)return;let b=()=>{n||(clearTimeout(a),a=setTimeout(()=>{let a=p.current?.querySelector(".timeline-card.active");if(a){let b=a.getBoundingClientRect(),c=.25*window.innerHeight,d=window.scrollY+b.top-c;Math.abs(b.top-c)>8&&window.scrollTo({top:d,behavior:"smooth"})}},200))};return window.addEventListener("scroll",b),()=>{window.removeEventListener("scroll",b),clearTimeout(a)}},[i,n]);let q=(a,b)=>{b.stopPropagation();let c=g===a;h(c?null:a),c||setTimeout(()=>{let b=p.current?.querySelector(`[data-id="${a}"]`);if(b){let a=b.getBoundingClientRect(),c=.25*window.innerHeight,d=window.scrollY+a.top-c;window.scrollTo({top:d,behavior:"smooth"})}},120)};return(0,b.jsxs)("section",{id:"about",ref:p,style:{padding:"8rem 2rem",maxWidth:"1400px",margin:"0 auto",minHeight:"100vh",display:"flex",alignItems:"center",position:"relative"},children:[(0,b.jsxs)("div",{style:{width:"100%"},children:[(0,b.jsx)("div",{className:"animate-on-scroll",style:{fontFamily:'var(--font-jetbrains-mono, "JetBrains Mono", monospace)',fontSize:"0.7rem",letterSpacing:"0.3em",textTransform:"uppercase",color:"var(--accent-amber, #ffb400)",marginBottom:"3rem",opacity:0,transform:"translateY(20px)",transition:"opacity 0.7s cubic-bezier(.65,0,.35,1), transform 0.7s cubic-bezier(.65,0,.35,1)"},children:"01 / Origin"}),(0,b.jsxs)("div",{className:"about-grid",children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{style:{marginBottom:"5rem"},children:[(0,b.jsxs)("h2",{className:"animate-on-scroll",style:{fontFamily:'var(--font-bebas-neue, "Bebas Neue", cursive)',fontSize:"clamp(3rem, 6vw, 6rem)",lineHeight:.9,color:"var(--text-color, #f5f5f5)",opacity:0,transform:"translateY(30px)",transition:"opacity 0.8s cubic-bezier(.65,0,.35,1) 0.1s, transform 0.8s cubic-bezier(.65,0,.35,1) 0.1s",marginBottom:"2rem"},children:["BUILDING",(0,b.jsx)("br",{}),(0,b.jsx)("span",{style:{color:"var(--accent-amber, #ffb400)"},children:"THINGS"}),(0,b.jsx)("br",{}),"THAT MATTER."]}),(0,b.jsxs)("div",{className:"animate-on-scroll",style:{opacity:0,transform:"translateY(20px)",transition:"opacity 0.8s cubic-bezier(.65,0,.35,1) 0.2s, transform 0.8s cubic-bezier(.65,0,.35,1) 0.2s"},children:[(0,b.jsx)("p",{style:{fontFamily:'var(--font-inter, "Inter", sans-serif)',fontWeight:300,fontSize:"1.1rem",lineHeight:1.8,color:"var(--text-dim, rgba(245,245,245,0.5))",marginBottom:"1.5rem"},children:"I'm Prathamesh Jadhav — an engineering-focused AI/ML developer specializing in building production-grade vector databases, RAG pipelines, and intelligent API systems."}),(0,b.jsx)("p",{style:{fontFamily:'var(--font-inter, "Inter", sans-serif)',fontWeight:300,fontSize:"1.1rem",lineHeight:1.8,color:"var(--text-dim, rgba(245,245,245,0.5))",marginBottom:"2rem"},children:"From custom HNSW indexing to systems-level multi-threaded network analysis, I focus on building scalable, low-latency architectures that bridge AI research and robust production systems."}),(0,b.jsxs)("div",{className:"about-tech-sphere-container",children:[(0,b.jsx)("div",{className:"sphere-hud-label",children:"// DRAG & ORBIT TECHNICAL CORE"}),(0,b.jsx)(l,{onHoverChange:o})]})]})]}),(0,b.jsx)("div",{className:"animate-on-scroll",style:{fontFamily:'var(--font-jetbrains-mono, "JetBrains Mono", monospace)',fontSize:"0.65rem",letterSpacing:"0.2em",color:"rgba(245, 245, 245, 0.3)",textTransform:"uppercase",marginBottom:"2.5rem",opacity:0,transform:"translateY(15px)",transition:"opacity 0.6s ease, transform 0.6s ease"},children:"// Interactive Journey & Milestones (Click Overview to Expand)"}),(0,b.jsx)("div",{className:"timeline-container",children:j.map(a=>{let c=e===a.id,d=g===a.id;return(0,b.jsxs)("div",{"data-year":a.year,"data-id":a.id,className:`timeline-card ${d?"expanded":""} ${c?"active":""}`,onClick:b=>q(a.id,b),style:{display:"grid",gridTemplateRows:d?"auto 1fr":"auto 0fr",overflow:"hidden"},children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"mobile-year-badge",children:a.year}),(0,b.jsx)("div",{className:`timeline-dot ${c?"active":""}`}),(0,b.jsxs)("div",{style:{display:"flex",alignItems:"baseline",justifyContent:"space-between",gap:"1rem"},children:[(0,b.jsx)("h3",{className:"timeline-card-title",children:a.title}),(0,b.jsxs)("span",{className:"card-index",style:{fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"0.6rem",color:d?"var(--accent-amber, #ffb400)":"rgba(245, 245, 245, 0.2)",transition:"color 0.4s ease"},children:["0",a.id]})]}),(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"2rem",marginTop:"0.2rem"},children:[(0,b.jsx)("p",{className:"timeline-card-teaser",style:{fontFamily:"var(--font-inter, sans-serif)",fontWeight:300,fontSize:"0.9rem",color:c?"rgba(245, 245, 245, 0.75)":"rgba(245, 245, 245, 0.35)",transition:"color 0.4s ease",margin:0,flex:1},children:a.teaser}),(0,b.jsx)("button",{onClick:b=>q(a.id,b),className:"expand-trigger-btn",style:{background:"none",color:d?"var(--accent-amber, #ffb400)":"rgba(245, 245, 245, 0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"0.6rem",letterSpacing:"0.1em",cursor:"pointer",padding:"0.35rem 0.75rem",border:d?"1px solid rgba(255, 180, 0, 0.25)":"1px solid rgba(245, 245, 245, 0.1)",borderRadius:"4px",textTransform:"uppercase",transition:"all 0.3s ease",flexShrink:0},children:d?"[ - CLOSE ]":"[ + OVERVIEW ]"})]})]}),(0,b.jsx)("div",{style:{minHeight:"0",overflow:"hidden",opacity:+!!d,transition:"opacity 0.4s ease"},children:(0,b.jsxs)("div",{style:{paddingTop:"1.2rem",borderTop:"1px solid rgba(245,245,245,0.04)",marginTop:"1.2rem"},children:[(0,b.jsx)("p",{className:"timeline-card-desc",children:a.description}),(0,b.jsx)(k,{id:a.id}),a.details&&(0,b.jsx)("p",{className:"timeline-card-details",children:a.details}),(0,b.jsx)("div",{style:{display:"flex",gap:"0.4rem",flexWrap:"wrap",marginTop:"1rem"},children:a.technologies.map(a=>(0,b.jsx)("span",{style:{fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"0.55rem",color:"rgba(245, 245, 245, 0.5)",background:"rgba(245, 245, 245, 0.03)",border:"1px solid rgba(245, 245, 245, 0.08)",padding:"0.2rem 0.5rem",borderRadius:"3px",textTransform:"uppercase"},children:a},a))})]})})]},a.id)})})]}),(0,b.jsx)("div",{className:"sticky-year-container",children:(0,b.jsxs)("div",{className:"sticky-year-content",children:[(0,b.jsx)("span",{className:"sticky-year-label",children:"YEAR"}),(0,b.jsx)("div",{className:"timeline-year-display",children:a},a),(0,b.jsxs)("div",{className:"sticky-year-details",children:[(0,b.jsx)("span",{children:"// 19.0760° N, 72.8777° E"}),(0,b.jsx)("span",{children:"// CORE_SYSTEM_INDEXING: ACTIVE"}),(0,b.jsx)("span",{children:"// INDEX: HNSW_INDEX_FOUND"})]})]})})]})]}),(0,b.jsx)("style",{children:`
        .animate-on-scroll.in-view {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .about-tech-sphere-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 3rem;
          padding: 2.5rem 1rem;
          background: rgba(245, 245, 245, 0.01);
          border: 1px solid rgba(245, 245, 245, 0.03);
          border-radius: 8px;
          position: relative;
          overflow: hidden;
          width: 100%;
          user-select: none;
        }

        .sphere-hud-label {
          font-family: var(--font-jetbrains-mono, "JetBrains Mono", monospace);
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          color: rgba(245, 245, 245, 0.2);
          text-transform: uppercase;
          margin-bottom: 2rem;
          pointer-events: none;
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
      `})]})}let n=[{id:"01",title:"NUROSEARCH",year:"2026",tags:["AI/ML","Vector DB","RAG"],description:"Custom vector database from scratch implementing HNSW indexing and a full-stack RAG pipeline."},{id:"02",title:"DPI ENGINE",year:"2026",tags:["Systems","Python","Networking"],description:"Multi-threaded deep packet inspection engine analyzing 500+ packets/sec with TLS SNI extraction."},{id:"03",title:"KOZUMIHUB",year:"2026",tags:["TypeScript","Next.js","Web App"],description:"Entertainment discovery platform for anime and movies featuring smart discovery and immersive UI."},{id:"04",title:"SPENDSTRACK",year:"2026",tags:["Finance","TypeScript","Dashboard"],description:"Personal wealth tracking application with dynamic visualization and category analytics."},{id:"05",title:"CODE CHATBOT",year:"2025",tags:["AI","Python","LLM"],description:"Automated AI assistant built to review pull requests and provide constructive feedback on code structure."}],o={"01":{role:"Lead AI Systems Architect",challenges:["Standard high-dimensional vector lookups scale at O(N) linear time, causing massive latency bottlenecks for production RAG systems.","Ensuring thread safety and low latency during concurrent index builds and query phases."],solutions:["Implemented a Hierarchical Navigable Small World (HNSW) vector index from scratch, bringing search complexity down to O(log N).","Designed dynamic thread-safe insertion rules using custom locking nodes and pointer synchronization.","Built a complete chunk-level semantic cache in FastAPI integrated with OpenAI embeddings."],metrics:["Reduced average query retrieval latency to <15ms on 100,000+ vector nodes.","Achieved a 35% memory footprint reduction through scalar quantization codecs."],technologies:["Python","Rust","FastAPI","NumPy","OpenAI API","HNSW Indexing"],githubUrl:"https://github.com/Prathamesh-Jadhav04/NuroSearch"},"02":{role:"Backend & Networking Systems Engineer",challenges:["Extracting TLS Server Name Indication (SNI) hostnames in real-time under high-throughput network loads without packets dropping.","Developing thread-safe logging pipes to prevent memory leak build-ups during continuous stream capture."],solutions:["Developed a multi-threaded C/Python ingestion listener wrapping libpcap for zero packet drop.","Designed a synchronized circular queue isolating raw packet ingestion from header parsing buffers.","Engineered an SNI extraction filter isolating client hello packets."],metrics:["Successfully sustained analysis rates of 500+ packets/sec with 0% packet loss.","Decrypted, mapped, and structured SNI metadata logs instantly into audit database indices."],technologies:["Python","C Language","Scapy","Network Protocols","Multithreading","pcap"],githubUrl:"https://github.com/Prathamesh-Jadhav04/DPI-Engine"},"03":{role:"Full-Stack Developer",challenges:["Managing API rate limit bottlenecks and aggregation delays across separate third-party catalogues (Jikan, TMDB).","Minimizing frontend layout cumulative shifts while dynamically rendering card images."],solutions:["Developed a unified Next.js API route acting as an orchestrator with internal redis cache mapping.","Crafted custom fluid CSS grids layout utilizing relative skeleton placeholder layers.","Configured static asset prefetching rules inside Next.js middleware layers."],metrics:["Achieved dynamic gallery page rendering times of <200ms.","Secured zero Cumulative Layout Shift (CLS) scores during rapid page-page jumps."],technologies:["Next.js","TypeScript","TailwindCSS","Framer Motion","REST APIs","Node.js"],githubUrl:"https://github.com/Prathamesh-Jadhav04/KozumiHub"},"04":{role:"Frontend & Analytics Developer",challenges:["Creating responsive financial tracking graphs that render dynamically without crashing on mobile devices.","Ensuring secure offline database capability with smooth transaction synchronization."],solutions:["Implemented Chart.js layout wrappers optimized for aspect-ratio responsive scale changes.","Designed transactional state engines syncing automatically to structured local storage stores.","Engineered dynamic category filtering rules for instantaneous chart redraw triggers."],metrics:["Instantly updates interactive graphs with zero animation lags.","Supports complete offline capability with zero transaction sync conflicts."],technologies:["Next.js","TypeScript","Chart.js","LocalStorage API","CSS Grid","TailwindCSS"],githubUrl:"https://github.com/Prathamesh-Jadhav04/SpendsTrack"},"05":{role:"DevOps & AI Integration Engineer",challenges:["LLM context limits require chunking diffs while retaining context of pull request logic flow.","Interfacing secure webhook servers that respond instantly and prevent PR review duplicate triggers."],solutions:["Engineered an intelligent AST diff chunker feeding filtered context trees into LLM prompts.","Constructed a reliable FastAPI hook server with internal checksum ID deduplication logic.","Integrated LangChain prompt logic mapped dynamically to GitHub API comment lines."],metrics:["Reviews and comments on pull requests in <8 seconds from commit push.","Achieved 85% satisfaction rating from developers using the automated reviews."],technologies:["Python","FastAPI","LangChain","LLM APIs","GitHub Webhooks","CI/CD Pipelines"],githubUrl:"https://github.com/Prathamesh-Jadhav04/Code-Review-Chatbot"}};function p({id:a}){let[d,e]=(0,c.useState)({x:200,y:140}),[f,g]=(0,c.useState)([]),[h,i]=(0,c.useState)(["// LISTENER ONLINE: READY ON ETH0","// WAITING FOR WEB REQUESTS..."]);(0,c.useEffect)(()=>{if(0===f.length)return;let a=setInterval(()=>{g(a=>a.map(a=>{let b=a.progress+3;return b>=15&&a.progress<15?i(a=>["[INGEST] size: 1024B -> Queuing Frame",a[0]].slice(0,2)):b>=55&&a.progress<55?i(a=>["[QUEUE] Parsing SNI Header (Proto: TLS)",a[0]].slice(0,2)):b>=90&&a.progress<90&&i(b=>[`[DPI] HOST: ${a.domain||"192.168.1.100"} | Port: 443`,b[0]].slice(0,2)),{...a,progress:b}}).filter(a=>a.progress<100))},40);return()=>clearInterval(a)},[f.length]);let[j,k]=(0,c.useState)(null),[l,m]=(0,c.useState)("BALANCE"),[n,o]=(0,c.useState)(!1),[q,r]=(0,c.useState)(0),[s,t]=(0,c.useState)(["// GIT HOOK LISTENER ACTIVE","// WAITING FOR COMMIT PUSH..."]);if((0,c.useEffect)(()=>{if(!n)return;let a=setInterval(()=>{r(b=>{let c=b+5;if(c>=20&&b<20)t(a=>["[GIT] Webhook captured. Extracting branch diffs...",a[0]].slice(0,2));else if(c>=60&&b<60)t(a=>["[LLM] AST Code Analysis in progress...",a[0]].slice(0,2));else if(c>=100)return t(a=>['[BOT] Commented on PR: "Optimize mutex lock in DPI engine"',a[0]].slice(0,2)),clearInterval(a),100;return c})},80);return()=>clearInterval(a)},[n]),"01"===a){let a=[{id:1,x:60,y:140,label:"G1"},{id:2,x:150,y:140,label:"G2"},{id:3,x:250,y:140,label:"G3"},{id:4,x:340,y:140,label:"G4"}],c=[{id:1,x:70,y:90,label:"H1"},{id:2,x:200,y:90,label:"H2"},{id:3,x:330,y:90,label:"H3"}],f=[{id:1,x:100,y:40,label:"E1"},{id:2,x:300,y:40,label:"E2"}],g=0;if(d){let b=1/0;a.forEach((a,c)=>{let e=Math.abs(a.x-d.x);e<b&&(b=e,g=c)})}let h=0;d&&(h=0===g?0:1===g?Math.abs(c[0].x-d.x)<Math.abs(c[1].x-d.x)?0:1:2===g&&Math.abs(c[1].x-d.x)<Math.abs(c[2].x-d.x)?1:2);let i=0;d&&(i=0===h||1===h&&Math.abs(f[0].x-d.x)<Math.abs(f[1].x-d.x)?0:1);let j=a[g],k=c[h],l=f[i],m=d?Math.sqrt(Math.pow(j.x-d.x,2)+Math.pow(j.y-d.y,2)):0,n=d?Math.max(.45,.999-m/300*.5):.984;return(0,b.jsxs)("svg",{width:"100%",height:"180",viewBox:"0 0 400 180",onMouseMove:a=>{let b=a.currentTarget.getBoundingClientRect();e({x:(a.clientX-b.left)/b.width*400,y:(a.clientY-b.top)/b.height*180})},onMouseLeave:()=>e({x:200,y:140}),style:{background:"#121212",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1.5rem 0",cursor:"crosshair"},children:[(0,b.jsxs)("g",{stroke:"rgba(245,245,245,0.02)",strokeWidth:"1",children:[(0,b.jsx)("line",{x1:"0",y1:"40",x2:"400",y2:"40"}),(0,b.jsx)("line",{x1:"0",y1:"90",x2:"400",y2:"90"}),(0,b.jsx)("line",{x1:"0",y1:"140",x2:"400",y2:"140"})]}),(0,b.jsxs)("g",{stroke:"rgba(245, 245, 245, 0.05)",strokeWidth:"1",children:[(0,b.jsx)("line",{x1:"100",y1:"40",x2:"70",y2:"90"}),(0,b.jsx)("line",{x1:"100",y1:"40",x2:"200",y2:"90"}),(0,b.jsx)("line",{x1:"300",y1:"40",x2:"200",y2:"90"}),(0,b.jsx)("line",{x1:"300",y1:"40",x2:"330",y2:"90"}),(0,b.jsx)("line",{x1:"70",y1:"90",x2:"50",y2:"140"}),(0,b.jsx)("line",{x1:"70",y1:"90",x2:"150",y2:"140"}),(0,b.jsx)("line",{x1:"200",y1:"90",x2:"150",y2:"140"}),(0,b.jsx)("line",{x1:"200",y1:"90",x2:"250",y2:"140"}),(0,b.jsx)("line",{x1:"330",y1:"90",x2:"250",y2:"140"}),(0,b.jsx)("line",{x1:"330",y1:"90",x2:"350",y2:"140"}),(0,b.jsx)("line",{x1:"100",y1:"40",x2:"300",y2:"40",strokeDasharray:"3"}),(0,b.jsx)("line",{x1:"70",y1:"90",x2:"200",y2:"90",strokeDasharray:"3"}),(0,b.jsx)("line",{x1:"200",y1:"90",x2:"330",y2:"90",strokeDasharray:"3"}),(0,b.jsx)("line",{x1:"50",y1:"140",x2:"150",y2:"140",strokeDasharray:"2"}),(0,b.jsx)("line",{x1:"150",y1:"140",x2:"250",y2:"140",strokeDasharray:"2"}),(0,b.jsx)("line",{x1:"250",y1:"140",x2:"350",y2:"140",strokeDasharray:"2"})]}),d&&(0,b.jsxs)("g",{stroke:"var(--accent-amber, #ffb400)",strokeWidth:"2",fill:"none",style:{filter:"drop-shadow(0 0 3px rgba(255,180,0,0.4))"},children:[(0,b.jsx)("line",{x1:l.x,y1:l.y,x2:k.x,y2:k.y}),(0,b.jsx)("line",{x1:k.x,y1:k.y,x2:j.x,y2:j.y})]}),(0,b.jsx)("circle",{cx:"100",cy:"40",r:"6",fill:"E1"===l.label?"var(--accent-amber, #ffb400)":"#333",stroke:"#121212",strokeWidth:"1.5"}),(0,b.jsx)("circle",{cx:"300",cy:"40",r:"6",fill:"E2"===l.label?"var(--accent-amber, #ffb400)":"#333",stroke:"#121212",strokeWidth:"1.5"}),(0,b.jsx)("circle",{cx:"70",cy:"90",r:"5",fill:"H1"===k.label?"var(--accent-amber, #ffb400)":"#444",stroke:"#121212",strokeWidth:"1.5"}),(0,b.jsx)("circle",{cx:"200",cy:"90",r:"5",fill:"H2"===k.label?"var(--accent-amber, #ffb400)":"#444",stroke:"#121212",strokeWidth:"1.5"}),(0,b.jsx)("circle",{cx:"330",cy:"90",r:"5",fill:"H3"===k.label?"var(--accent-amber, #ffb400)":"#444",stroke:"#121212",strokeWidth:"1.5"}),(0,b.jsx)("circle",{cx:"50",cy:"140",r:"4.5",fill:1===j.id?"var(--accent-amber, #ffb400)":"#555",stroke:"#121212",strokeWidth:"1"}),(0,b.jsx)("circle",{cx:"150",cy:"140",r:"4.5",fill:2===j.id?"var(--accent-amber, #ffb400)":"#555",stroke:"#121212",strokeWidth:"1"}),(0,b.jsx)("circle",{cx:"250",cy:"140",r:"4.5",fill:3===j.id?"var(--accent-amber, #ffb400)":"#555",stroke:"#121212",strokeWidth:"1"}),(0,b.jsx)("circle",{cx:"350",cy:"140",r:"4.5",fill:4===j.id?"var(--accent-amber, #ffb400)":"#555",stroke:"#121212",strokeWidth:"1"}),d&&(0,b.jsxs)("g",{children:[(0,b.jsx)("line",{x1:d.x,y1:"0",x2:d.x,y2:"180",stroke:"rgba(255,180,0,0.15)",strokeWidth:"0.5",strokeDasharray:"2"}),(0,b.jsx)("line",{x1:"0",y1:d.y,x2:"400",y2:d.y,stroke:"rgba(255,180,0,0.15)",strokeWidth:"0.5",strokeDasharray:"2"}),(0,b.jsx)("circle",{cx:d.x,cy:d.y,r:"3",fill:"#ffffff",style:{filter:"drop-shadow(0 0 5px #fff)"}})]}),(0,b.jsx)("text",{x:"15",y:"20",fill:"rgba(255,180,0,0.4)",fontFamily:"monospace",fontSize:"8",children:"HNSW LAYERED SEARCH TOPOLOGY [MOVE CURSOR]"}),(0,b.jsx)("text",{x:"385",y:"20",fill:"rgba(245,245,245,0.2)",fontFamily:"monospace",fontSize:"7",textAnchor:"end",children:"NURO_INDEX: ACTIVE"}),(0,b.jsx)("rect",{x:"0",y:"160",width:"400",height:"20",fill:"#0c0c0c",opacity:"0.9"}),(0,b.jsx)("line",{x1:"0",y1:"160",x2:"400",y2:"160",stroke:"rgba(255,255,255,0.03)"}),d?(0,b.jsxs)("text",{x:"15",y:"172",fill:"var(--accent-amber, #ffb400)",fontFamily:"monospace",fontSize:"6.8",children:["SEARCH_VEC: [",Math.round(d.x),", ",Math.round(d.y),"] // PATH: ",l.label,"➔",k.label,"➔",j.label," // COS_SIM: ",n.toFixed(4)]}):(0,b.jsx)("text",{x:"15",y:"172",fill:"rgba(245,245,245,0.3)",fontFamily:"monospace",fontSize:"6.8",children:"HOVER GRAPH TO INITIATE COARSE-TO-FINE VECTOR TRAVERSAL"})]})}return"02"===a?(0,b.jsxs)("svg",{width:"100%",height:"180",viewBox:"0 0 400 180",style:{background:"#121212",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1.5rem 0"},children:[(0,b.jsxs)("g",{stroke:"rgba(255,180,0,0.15)",strokeWidth:"1",fill:"none",children:[(0,b.jsx)("rect",{x:"20",y:"50",width:"80",height:"40",rx:"4",fill:"#151515"}),(0,b.jsx)("rect",{x:"150",y:"50",width:"100",height:"40",rx:"4",fill:"#151515"}),(0,b.jsx)("rect",{x:"300",y:"50",width:"80",height:"40",rx:"4",fill:"#151515"}),(0,b.jsx)("path",{d:"M 100 70 L 150 70",stroke:"#ffb400",strokeWidth:"1"}),(0,b.jsx)("path",{d:"M 250 70 L 300 70",stroke:"#ffb400",strokeWidth:"1"})]}),(0,b.jsx)("text",{x:"60",y:"74",fill:"#f5f5f5",fontFamily:"monospace",fontSize:"8.5",fontWeight:"bold",textAnchor:"middle",children:"libpcap"}),(0,b.jsx)("text",{x:"200",y:"74",fill:"var(--accent-amber, #ffb400)",fontFamily:"monospace",fontSize:"8.5",fontWeight:"bold",textAnchor:"middle",children:"parser-queue"}),(0,b.jsx)("text",{x:"340",y:"74",fill:"#f5f5f5",fontFamily:"monospace",fontSize:"8.5",fontWeight:"bold",textAnchor:"middle",children:"TLS SNI"}),f.map(a=>{let c=60;return c=a.progress<50?60+a.progress/50*140:200+(a.progress-50)/50*140,(0,b.jsx)("circle",{cx:c,cy:"70",r:"4.5",fill:"TLS"===a.type?"var(--accent-amber, #ffb400)":"#f5f5f5",style:{filter:"drop-shadow(0 0 3px var(--accent-amber, #ffb400))"}},a.id)}),(0,b.jsxs)("g",{onClick:a=>{a.stopPropagation();let b=["github.com","google.com","openai.com","spotify.com"],c=["TLS","TCP","UDP"],d=c[Math.floor(Math.random()*c.length)],e="TLS"===d?b[Math.floor(Math.random()*b.length)]:"";g(a=>[...a,{id:Date.now(),progress:0,type:d,domain:e}])},style:{cursor:"pointer"},children:[(0,b.jsx)("rect",{x:"140",y:"105",width:"120",height:"22",rx:"3",fill:"#181818",stroke:"var(--accent-amber, #ffb400)",strokeWidth:"1",style:{transition:"all 0.2s ease"}}),(0,b.jsx)("text",{x:"200",y:"119",fill:"var(--accent-amber, #ffb400)",fontFamily:"monospace",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"[ INJECT PACKET ]"})]}),(0,b.jsx)("rect",{x:"20",y:"137",width:"360",height:"34",fill:"#080808",stroke:"rgba(245,245,245,0.03)",rx:"2"}),(0,b.jsx)("text",{x:"30",y:"148",fill:"rgba(245,245,245,0.3)",fontFamily:"monospace",fontSize:"6.5",children:h[1]}),(0,b.jsx)("text",{x:"30",y:"160",fill:"var(--accent-amber, #ffb400)",fontFamily:"monospace",fontSize:"6.5",children:h[0]}),(0,b.jsx)("text",{x:"15",y:"20",fill:"rgba(255,180,0,0.4)",fontFamily:"monospace",fontSize:"8",children:"DPI STREAM INGESTION FLOW"}),(0,b.jsx)("text",{x:"385",y:"20",fill:"rgba(245,245,245,0.25)",fontFamily:"monospace",fontSize:"7",textAnchor:"end",children:"STATUS: CAPTURING"})]}):"03"===a?(0,b.jsxs)("svg",{width:"100%",height:"180",viewBox:"0 0 400 180",style:{background:"#121212",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1.5rem 0"},children:[(0,b.jsx)("rect",{x:"20",y:"35",width:"360",height:"18",rx:"2",fill:"#181818",stroke:"rgba(245,245,245,0.05)"}),(0,b.jsxs)("text",{x:"32",y:"46",fill:j?"#f5f5f5":"rgba(245,245,245,0.25)",fontFamily:"monospace",fontSize:"7",style:{transition:"color 0.3s ease"},children:["left"===j&&'SEARCH MATCH: "SPIDERMAN: INTO THE MULTIVERSE" (2018)',"middle"===j&&'SEARCH MATCH: "ATTACK ON TITAN: SEASON 4" (2020)',"right"===j&&'SEARCH MATCH: "THE DARK KNIGHT" (2008)',!j&&"HOVER CARDS BELOW TO RUN DISCOVERY PIPELINE..."]}),(0,b.jsxs)("g",{style:{cursor:"pointer"},children:[(0,b.jsxs)("g",{onMouseEnter:()=>k("left"),onMouseLeave:()=>k(null),children:[(0,b.jsx)("rect",{x:"20",y:"62",width:"105",height:"85",rx:"4",fill:"left"===j?"rgba(255,180,0,0.03)":"#151515",stroke:"left"===j?"var(--accent-amber, #ffb400)":"rgba(245,245,245,0.06)",strokeWidth:"1",style:{transition:"all 0.3s ease"}}),(0,b.jsx)("polygon",{points:"67,98 67,112 79,105",fill:"left"===j?"var(--accent-amber, #ffb400)":"rgba(245,245,245,0.2)",style:{transition:"fill 0.3s ease"}}),(0,b.jsx)("text",{x:"72",y:"80",fill:"left"===j?"var(--accent-amber, #ffb400)":"rgba(245,245,245,0.4)",fontFamily:"monospace",fontSize:"7",textAnchor:"middle",style:{transition:"color 0.3s ease"},children:"01 / SCI-FI"})]}),(0,b.jsxs)("g",{onMouseEnter:()=>k("middle"),onMouseLeave:()=>k(null),children:[(0,b.jsx)("rect",{x:"147",y:"62",width:"105",height:"85",rx:"4",fill:"middle"===j?"rgba(255,180,0,0.03)":"#151515",stroke:"middle"===j?"var(--accent-amber, #ffb400)":"rgba(245,245,245,0.06)",strokeWidth:"1",style:{transition:"all 0.3s ease"}}),(0,b.jsx)("polygon",{points:"194,98 194,112 206,105",fill:"middle"===j?"var(--accent-amber, #ffb400)":"rgba(245,245,245,0.2)",style:{transition:"fill 0.3s ease"}}),(0,b.jsx)("text",{x:"200",y:"80",fill:"middle"===j?"var(--accent-amber, #ffb400)":"rgba(245,245,245,0.4)",fontFamily:"monospace",fontSize:"7",textAnchor:"middle",style:{transition:"color 0.3s ease"},children:"02 / ANIME"})]}),(0,b.jsxs)("g",{onMouseEnter:()=>k("right"),onMouseLeave:()=>k(null),children:[(0,b.jsx)("rect",{x:"275",y:"62",width:"105",height:"85",rx:"4",fill:"right"===j?"rgba(255,180,0,0.03)":"#151515",stroke:"right"===j?"var(--accent-amber, #ffb400)":"rgba(245,245,245,0.06)",strokeWidth:"1",style:{transition:"all 0.3s ease"}}),(0,b.jsx)("polygon",{points:"322,98 322,112 334,105",fill:"right"===j?"var(--accent-amber, #ffb400)":"rgba(245,245,245,0.2)",style:{transition:"fill 0.3s ease"}}),(0,b.jsx)("text",{x:"327",y:"80",fill:"right"===j?"var(--accent-amber, #ffb400)":"rgba(245,245,245,0.4)",fontFamily:"monospace",fontSize:"7",textAnchor:"middle",style:{transition:"color 0.3s ease"},children:"03 / ACTION"})]})]}),(0,b.jsx)("rect",{x:"0",y:"160",width:"400",height:"20",fill:"#0c0c0c"}),(0,b.jsx)("line",{x1:"0",y1:"160",x2:"400",y2:"160",stroke:"rgba(255,255,255,0.03)"}),(0,b.jsxs)("text",{x:"15",y:"172",fill:j?"var(--accent-amber, #ffb400)":"rgba(245,245,245,0.3)",fontFamily:"monospace",fontSize:"6.8",children:["left"===j&&"API_DISCOVERY: JIKAN_V4 & TMDB_V3 FETCH // SCORE: 9.1 // RESP: 142ms","middle"===j&&"API_DISCOVERY: JIKAN_V4 & TMDB_V3 FETCH // SCORE: 9.5 // RESP: 189ms","right"===j&&"API_DISCOVERY: JIKAN_V4 & TMDB_V3 FETCH // SCORE: 9.0 // RESP: 110ms",!j&&"DISCOVERY_ROUTING: LISTENER ONLINE // REDIS CACHE: INLINE"]}),(0,b.jsx)("text",{x:"15",y:"20",fill:"rgba(255,180,0,0.4)",fontFamily:"monospace",fontSize:"8",children:"IMMERSIVE MEDIA CATALOG GRID"})]}):"04"===a?(0,b.jsxs)("svg",{width:"100%",height:"180",viewBox:"0 0 400 180",style:{background:"#121212",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1.5rem 0"},children:[(0,b.jsxs)("g",{stroke:"rgba(245,245,245,0.02)",strokeWidth:"1",children:[(0,b.jsx)("line",{x1:"40",y1:"40",x2:"360",y2:"40"}),(0,b.jsx)("line",{x1:"40",y1:"80",x2:"360",y2:"80"}),(0,b.jsx)("line",{x1:"40",y1:"120",x2:"360",y2:"120"})]}),(0,b.jsx)("line",{x1:"40",y1:"20",x2:"40",y2:"140",stroke:"rgba(245,245,245,0.15)",strokeWidth:"1"}),(0,b.jsx)("line",{x1:"40",y1:"140",x2:"370",y2:"140",stroke:"rgba(245,245,245,0.15)",strokeWidth:"1"}),"SAVE"===l&&(0,b.jsx)("path",{d:"M 40 130 L 100 115 L 180 100 L 260 88 L 340 75",fill:"none",stroke:"var(--accent-amber, #ffb400)",strokeWidth:"2.5",style:{transition:"all 0.5s ease"}}),"BALANCE"===l&&(0,b.jsx)("path",{d:"M 40 130 Q 90 110 140 90 T 240 60 T 340 30",fill:"none",stroke:"var(--accent-amber, #ffb400)",strokeWidth:"2.5",style:{transition:"all 0.5s ease"}}),"INVEST"===l&&(0,b.jsx)("path",{d:"M 40 130 Q 90 125 140 120 T 240 70 T 340 15",fill:"none",stroke:"var(--accent-amber, #ffb400)",strokeWidth:"2.5",style:{transition:"all 0.5s ease"}}),(0,b.jsx)("circle",{cx:"340",cy:"SAVE"===l?75:"BALANCE"===l?30:15,r:"4.5",fill:"var(--accent-amber, #ffb400)",style:{filter:"drop-shadow(0 0 4px var(--accent-amber, #ffb400))",transition:"cy 0.5s ease"}}),(0,b.jsxs)("g",{style:{cursor:"pointer"},children:[(0,b.jsxs)("g",{onClick:a=>{a.stopPropagation(),m("SAVE")},children:[(0,b.jsx)("rect",{x:"75",y:"148",width:"65",height:"18",rx:"2",fill:"SAVE"===l?"var(--accent-amber, #ffb400)":"#181818",stroke:"rgba(255,180,0,0.2)",strokeWidth:"0.5"}),(0,b.jsx)("text",{x:"107.5",y:"160",fill:"SAVE"===l?"#0a0a0a":"rgba(245,245,245,0.5)",fontFamily:"monospace",fontSize:"7.5",fontWeight:"bold",textAnchor:"middle",children:"SAVINGS"})]}),(0,b.jsxs)("g",{onClick:a=>{a.stopPropagation(),m("BALANCE")},children:[(0,b.jsx)("rect",{x:"155",y:"148",width:"75",height:"18",rx:"2",fill:"BALANCE"===l?"var(--accent-amber, #ffb400)":"#181818",stroke:"rgba(255,180,0,0.2)",strokeWidth:"0.5"}),(0,b.jsx)("text",{x:"192.5",y:"160",fill:"BALANCE"===l?"#0a0a0a":"rgba(245,245,245,0.5)",fontFamily:"monospace",fontSize:"7.5",fontWeight:"bold",textAnchor:"middle",children:"BALANCED"})]}),(0,b.jsxs)("g",{onClick:a=>{a.stopPropagation(),m("INVEST")},children:[(0,b.jsx)("rect",{x:"245",y:"148",width:"75",height:"18",rx:"2",fill:"INVEST"===l?"var(--accent-amber, #ffb400)":"#181818",stroke:"rgba(255,180,0,0.2)",strokeWidth:"0.5"}),(0,b.jsx)("text",{x:"282.5",y:"160",fill:"INVEST"===l?"#0a0a0a":"rgba(245,245,245,0.5)",fontFamily:"monospace",fontSize:"7.5",fontWeight:"bold",textAnchor:"middle",children:"AGGRESSIVE"})]})]}),(0,b.jsx)("text",{x:"15",y:"20",fill:"rgba(255,180,0,0.4)",fontFamily:"monospace",fontSize:"8",children:"WEALTH GROWTH RATE PREVIEW"}),(0,b.jsx)("text",{x:"345",y:"25",fill:"#ffb400",fontFamily:"monospace",fontSize:"7",children:"GROWTH"}),(0,b.jsxs)("text",{x:"15",y:"132",fill:"rgba(245,245,245,0.25)",fontFamily:"monospace",fontSize:"6.5",children:["SAVE"===l&&"PLAN: SAFE SAVINGS // GROWTH APY: +4.5% // STABILITY: 100%","BALANCE"===l&&"PLAN: EQUITIES & SAVINGS // GROWTH APY: +8.2% // STABILITY: 70%","INVEST"===l&&"PLAN: ALPHA STOCKS & VECTOR ASSETS // GROWTH APY: +22.4% // STABILITY: 30%"]})]}):"05"===a?(0,b.jsxs)("svg",{width:"100%",height:"180",viewBox:"0 0 400 180",style:{background:"#121212",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1.5rem 0"},children:[(0,b.jsxs)("g",{stroke:"rgba(245,245,245,0.06)",strokeWidth:"1.5",fill:"none",children:[(0,b.jsx)("line",{x1:"30",y1:"90",x2:"370",y2:"90"}),(0,b.jsx)("path",{d:"M 120 90 C 140 90, 160 45, 180 45 L 280 45 C 300 45, 320 90, 340 90",strokeDasharray:"3"})]}),(0,b.jsx)("circle",{cx:"120",cy:"90",r:"4.5",fill:"#555"}),(0,b.jsx)("circle",{cx:"340",cy:"90",r:"4.5",fill:"#555"}),(0,b.jsx)("rect",{x:"180",y:"27",width:"100",height:"35",rx:"3",fill:"#181818",stroke:n?"var(--accent-amber, #ffb400)":"rgba(245,245,245,0.08)",strokeWidth:"1.5",style:{transition:"border-color 0.3s ease"}}),(0,b.jsx)("text",{x:"230",y:"47",fill:n?"var(--accent-amber, #ffb400)":"rgba(245,245,245,0.3)",fontFamily:"monospace",fontSize:"8",fontWeight:"bold",textAnchor:"middle",style:{transition:"color 0.3s ease"},children:n?`LLM SCAN: ${q}%`:"LLM ANALYZER"}),n&&q>0&&(0,b.jsx)("circle",{cx:q<40?30+q/40*90:q<85?120+(q-40)/45*110:230+(q-85)/15*110,cy:q<40?90:q<85?90-(q-40)/45*45:45+(q-85)/15*45,r:"4.5",fill:"var(--accent-amber, #ffb400)",style:{filter:"drop-shadow(0 0 4px var(--accent-amber, #ffb400))"}}),(0,b.jsxs)("g",{onClick:a=>{a.stopPropagation(),o(!0),r(0),t(["// CAPTURED: WEBHOOK PUSH EVENT ON main","// INITIALIZING DOCKER WORKER..."])},style:{cursor:n&&q<100?"not-allowed":"pointer"},children:[(0,b.jsx)("rect",{x:"135",y:"108",width:"130",height:"20",rx:"3",fill:"#181818",stroke:"var(--accent-amber, #ffb400)",strokeWidth:"1"}),(0,b.jsx)("text",{x:"200",y:"121",fill:"var(--accent-amber, #ffb400)",fontFamily:"monospace",fontSize:"7.5",fontWeight:"bold",textAnchor:"middle",children:"[ PUSH WEBHOOK EVENT ]"})]}),(0,b.jsx)("rect",{x:"20",y:"137",width:"360",height:"34",fill:"#080808",stroke:"rgba(245,245,245,0.03)",rx:"2"}),(0,b.jsx)("text",{x:"30",y:"148",fill:"rgba(245,245,245,0.3)",fontFamily:"monospace",fontSize:"6.5",children:s[1]}),(0,b.jsx)("text",{x:"30",y:"160",fill:"var(--accent-amber, #ffb400)",fontFamily:"monospace",fontSize:"6.5",children:s[0]}),(0,b.jsx)("text",{x:"15",y:"20",fill:"rgba(255,180,0,0.4)",fontFamily:"monospace",fontSize:"8",children:"GITHUB PR WEBHOOK PIPELINE"})]}):null}function q(){let[a,d]=(0,c.useState)(0),[e,f]=(0,c.useState)("01"),[h,i]=(0,c.useState)(!1),j=(0,c.useRef)(null),k=(0,c.useRef)(null);(0,c.useEffect)(()=>{let a=k.current;if(a){let b=new IntersectionObserver(([a])=>{a.isIntersecting&&(i(!0),b.disconnect())},{threshold:.1});return b.observe(a),()=>{b.disconnect()}}},[]),(0,c.useEffect)(()=>{let a=()=>{let a=j.current;if(!a)return;let b=a.getBoundingClientRect(),c=window.innerHeight,e=b.height-c;if(e<=0)return;let g=-b.top/e;d(g=Math.max(0,Math.min(1,g)));let h=Math.min(n.length-1,Math.floor(g*n.length*.999));f(n[h].id)};return window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a),a(),()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}},[]);let l=Math.min(n.length-1,Math.floor(a*n.length*.999));return(0,b.jsxs)("section",{id:"projects",ref:j,className:"projects-scroll-section",children:[(0,b.jsxs)("div",{className:"projects-sticky-viewport",children:[(0,b.jsxs)("div",{ref:k,className:"projects-hud-header",style:{opacity:+!!h,transform:h?"translateY(0)":"translateY(20px)",transition:"opacity 0.6s cubic-bezier(0.65, 0, 0.35, 1), transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)"},children:[(0,b.jsx)("div",{className:"projects-hud-label",children:"// 02 / WORK"}),(0,b.jsx)("h2",{className:"projects-hud-title",children:"SELECTED WORK"})]}),(0,b.jsx)("div",{className:"projects-horizontal-rail",style:{transform:`translateX(-${a*(n.length-1)*100}vw)`},children:n.map(a=>{let c=o[a.id];return(0,b.jsxs)("div",{className:"project-slide-panel",children:[(0,b.jsx)("div",{className:"project-panel-bg",style:{backgroundImage:`url(${(a=>{switch(a){case"01":return"/nurosearch_bg.png";case"02":return"/dpi_bg.png";case"03":return"/kozumi_bg.png";case"04":return"/spendstrack_bg.png";case"05":return"/code_chatbot_bg.png";default:return""}})(a.id)})`}}),(0,b.jsx)("div",{className:"project-panel-bg-overlay"}),(0,b.jsxs)("div",{className:"project-panel-grid",children:[(0,b.jsxs)("div",{className:"project-panel-left",children:[(0,b.jsxs)("div",{className:"project-panel-header",children:[(0,b.jsx)("span",{className:"project-panel-code",children:(a=>{switch(a){case"01":return"AI-26-01";case"02":return"SYS-26-02";case"03":return"WEB-26-03";case"04":return"FIN-26-04";case"05":return"LLM-25-05";default:return`PROJ-${a}`}})(a.id)}),(0,b.jsx)("h3",{className:"project-panel-title",children:a.title})]}),(0,b.jsx)("p",{className:"project-panel-teaser",children:a.description}),(0,b.jsxs)("div",{className:"project-panel-schematic-box",children:[(0,b.jsx)("div",{className:"schematic-label",children:"// CORE DIAGRAM & SIMULATION"}),(0,b.jsx)(p,{id:a.id})]})]}),(0,b.jsx)("div",{className:"project-panel-right",children:c&&(0,b.jsxs)("div",{className:"project-panel-details",children:[(0,b.jsxs)("div",{className:"detail-row",children:[(0,b.jsx)("span",{className:"detail-meta-label",children:"// ROLE:"}),(0,b.jsx)("span",{className:"detail-meta-val",children:c.role})]}),(0,b.jsxs)("div",{className:"details-scrollable-area",children:[(0,b.jsxs)("div",{className:"detail-section",children:[(0,b.jsx)("h4",{className:"detail-sec-title",children:"KEY CHALLENGES"}),(0,b.jsx)("ul",{className:"detail-sec-list",children:c.challenges.map((a,c)=>(0,b.jsx)("li",{children:a},c))})]}),(0,b.jsxs)("div",{className:"detail-section",children:[(0,b.jsx)("h4",{className:"detail-sec-title",children:"SOLUTIONS"}),(0,b.jsx)("ul",{className:"detail-sec-list",children:c.solutions.map((a,c)=>(0,b.jsx)("li",{children:a},c))})]}),(0,b.jsxs)("div",{className:"detail-section",children:[(0,b.jsx)("h4",{className:"detail-sec-title",children:"OUTCOMES & METRICS"}),(0,b.jsx)("ul",{className:"detail-sec-list amber-text",children:c.metrics.map((a,c)=>(0,b.jsx)("li",{children:a},c))})]})]}),(0,b.jsxs)("div",{className:"detail-section specs-section",children:[(0,b.jsx)("h4",{className:"detail-sec-title",children:"SYSTEM SPECIFICATION"}),(0,b.jsx)("div",{className:"detail-badge-group",children:c.technologies.map(a=>(0,b.jsx)("span",{className:"detail-badge",children:a},a))})]}),(0,b.jsx)("div",{className:"detail-github-wrapper",onClick:a=>a.stopPropagation(),children:(0,b.jsx)(g,{range:50,strength:.3,children:(0,b.jsx)("a",{href:c.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"detail-github-btn",children:"EXPLORE CODEBASE   →"})})})]})})]})]},a.id)})}),(0,b.jsxs)("div",{className:"projects-progress-hud",children:[(0,b.jsx)("div",{className:"hud-track-line",children:(0,b.jsx)("div",{className:"hud-fill-line",style:{width:`${100*a}%`}})}),(0,b.jsx)("div",{className:"hud-ticks-container",children:n.map((a,c)=>(0,b.jsxs)("div",{className:`hud-tick-item ${c<=l?"passed":""} ${c===l?"current":""}`,style:{left:`${c/(n.length-1)*100}%`},children:[(0,b.jsx)("span",{className:"tick-number",children:a.id}),(0,b.jsx)("span",{className:"tick-title",children:a.title})]},a.id))})]})]}),(0,b.jsx)("style",{children:`
        .projects-scroll-section {
          position: relative;
          height: 500vh; /* 5 projects * 100vh runway */
          background-color: #0a0a0a;
          box-sizing: border-box;
        }

        .projects-sticky-viewport {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          justify-content: center;
        }

        .projects-hud-header {
          position: absolute;
          top: 5rem;
          left: 5rem;
          z-index: 10;
          pointer-events: none;
        }

        .projects-hud-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          color: #ffb400;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }

        .projects-hud-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 5vw, 5rem);
          line-height: 0.9;
          color: #f5f5f5;
          margin: 0;
          letter-spacing: 0.02em;
        }

        .projects-horizontal-rail {
          display: flex;
          flex-direction: row;
          width: 500vw; /* 5 projects */
          height: 100%;
          will-change: transform;
          box-sizing: border-box;
        }

        .project-slide-panel {
          width: 100vw;
          height: 100vh;
          flex-shrink: 0;
          box-sizing: border-box;
          padding: 12rem 5rem 6rem 5rem; /* Padding to clear headers & HUD */
          display: flex;
          align-items: center;
          background-color: #0a0a0a;
          position: relative;
          overflow: hidden;
        }

        .project-panel-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0.12;
          mix-blend-mode: overlay;
          pointer-events: none;
          z-index: 1;
        }

        .project-panel-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(10, 10, 10, 0.4) 30%, rgba(10, 10, 10, 0.95) 90%);
          pointer-events: none;
          z-index: 2;
        }

        .project-panel-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
          gap: 5rem;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          height: 100%;
          align-items: center;
          position: relative;
          z-index: 3;
        }

        .project-panel-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.5rem;
          width: 100%;
        }

        .project-panel-header {
          display: flex;
          align-items: baseline;
          gap: 2rem;
        }

        .project-panel-code {
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffb400;
          letter-spacing: 0.1em;
        }

        .project-panel-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 5.5vw, 5.5rem);
          line-height: 0.9;
          font-weight: 900;
          background: linear-gradient(180deg, #f5f5f5 40%, rgba(245,245,245,0.4) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 0.02em;
        }

        .project-panel-teaser {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 1.1rem;
          line-height: 1.6;
          color: rgba(245, 245, 245, 0.6);
          margin: 0;
          max-width: 95%;
        }

        .project-panel-schematic-box {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }

        .schematic-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          color: rgba(245, 245, 245, 0.2);
          text-transform: uppercase;
        }

        .project-panel-right {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          box-sizing: border-box;
        }

        .project-panel-details {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 1.5rem;
          height: 100%;
          justify-content: center;
        }

        .detail-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        .detail-meta-label {
          color: rgba(245, 245, 245, 0.25);
        }

        .detail-meta-val {
          color: #ffb400;
        }

        .details-scrollable-area {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          max-height: 38vh; /* Scrollable if screen height is short */
          overflow-y: auto;
          padding-right: 1rem;
        }

        .details-scrollable-area::-webkit-scrollbar {
          width: 3px;
        }
        .details-scrollable-area::-webkit-scrollbar-track {
          background: rgba(245, 245, 245, 0.01);
        }
        .details-scrollable-area::-webkit-scrollbar-thumb {
          background: rgba(245, 245, 245, 0.1);
          border-radius: 1.5px;
        }

        .detail-section {
          display: flex;
          flex-direction: column;
        }

        .detail-sec-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: rgba(245, 245, 245, 0.35);
          margin-bottom: 0.4rem;
          text-transform: uppercase;
        }

        .detail-sec-list {
          padding-left: 1rem;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .detail-sec-list li {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 0.85rem;
          line-height: 1.4;
          color: rgba(245, 245, 245, 0.65);
        }

        .detail-sec-list.amber-text li {
          color: #ffb400 !important;
          font-weight: 400;
        }

        .specs-section {
          margin-top: 0.5rem;
        }

        .detail-badge-group {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
          margin-top: 0.35rem;
        }

        .detail-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.55rem;
          letter-spacing: 0.08em;
          color: rgba(245, 245, 245, 0.5);
          background: rgba(245, 245, 245, 0.03);
          border: 1px solid rgba(245, 245, 245, 0.08);
          padding: 0.2rem 0.5rem;
          border-radius: 3px;
          text-transform: uppercase;
        }

        .detail-github-wrapper {
          margin-top: 1rem;
          display: flex;
          justify-content: flex-start;
          width: 100%;
        }

        .detail-github-btn {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: #ffb400;
          border: 1px solid rgba(255, 180, 0, 0.3);
          background: transparent;
          border-radius: 4px;
          padding: 0.7rem 1.6rem;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .detail-github-btn:hover {
          background: #ffb400 !important;
          color: #0a0a0a !important;
        }

        /* Progress HUD styling */
        .projects-progress-hud {
          position: absolute;
          bottom: 3.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          max-width: 1100px;
          height: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 10;
        }

        .hud-track-line {
          width: 100%;
          height: 1px;
          background: rgba(245, 245, 245, 0.08);
          position: relative;
        }

        .hud-fill-line {
          height: 100%;
          background: #ffb400;
          box-shadow: 0 0 8px rgba(255, 180, 0, 0.5);
          position: absolute;
          left: 0;
          top: 0;
          transition: width 0.1s ease-out;
        }

        .hud-ticks-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .hud-tick-item {
          position: absolute;
          top: -3px; /* Center circle on line */
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.4s ease;
        }

        .hud-tick-item::before {
          content: '';
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(245, 245, 245, 0.25);
          border: 1px solid #000000;
          margin-bottom: 0.5rem;
          transition: all 0.4s ease;
        }

        .hud-tick-item.passed::before {
          background: #ffb400;
          box-shadow: 0 0 8px #ffb400;
        }

        .hud-tick-item.current::before {
          transform: scale(1.4);
          background: #ffb400;
          box-shadow: 0 0 12px #ffb400;
        }

        .tick-number {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          color: rgba(245, 245, 245, 0.2);
          transition: color 0.4s ease;
        }

        .hud-tick-item.passed .tick-number {
          color: rgba(245, 245, 245, 0.6);
        }

        .hud-tick-item.current .tick-number {
          color: #ffb400;
          font-weight: 700;
        }

        .tick-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          color: rgba(245, 245, 245, 0.15);
          position: absolute;
          top: -1.5rem;
          white-space: nowrap;
          transition: color 0.4s ease;
        }

        .hud-tick-item.passed .tick-title {
          color: rgba(245, 245, 245, 0.55);
        }

        .hud-tick-item.current .tick-title {
          color: #ffb400;
          font-size: 1.05rem;
        }

        @media (max-width: 992px) {
          .projects-scroll-section {
            height: auto !important; /* Standard vertical height */
          }

          .projects-sticky-viewport {
            position: relative !important;
            height: auto !important;
            width: 100% !important;
            overflow: visible !important;
            padding: 4rem 1.5rem !important;
            justify-content: flex-start !important;
          }

          .projects-hud-header {
            position: relative !important;
            top: 0 !important;
            left: 0 !important;
            margin-bottom: 3rem !important;
            pointer-events: auto !important;
          }

          .projects-hud-title {
            font-size: 3.5rem !important;
          }

          .projects-horizontal-rail {
            flex-direction: column !important;
            width: 100% !important;
            height: auto !important;
            transform: none !important;
            gap: 5rem !important;
          }

          .project-slide-panel {
            width: 100% !important;
            height: auto !important;
            padding: 0 !important;
          }

          .project-panel-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            height: auto !important;
            padding: 0 !important;
          }

          .project-panel-teaser {
            max-width: 100% !important;
          }

          .details-scrollable-area {
            max-height: none !important; /* Allow natural page scroll */
            overflow-y: visible !important;
            padding-right: 0 !important;
          }

          .projects-progress-hud {
            display: none !important;
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
      `})]})}a.s(["default",0,function(){let[a,g]=(0,c.useState)(!1),[j,k]=(0,c.useState)(!1),[l,n]=(0,c.useState)(!1);return(0,b.jsxs)(b.Fragment,{children:[!a&&(0,b.jsx)(d,{onComplete:()=>g(!0),onStartTransition:()=>k(!0)}),(0,b.jsx)(f,{}),(0,b.jsx)(e,{}),j&&(0,b.jsxs)("main",{children:[(0,b.jsx)(h,{onLogoDoubleClick:()=>n(!0)}),(0,b.jsx)(i,{}),(0,b.jsx)(m,{}),(0,b.jsx)(q,{}),(0,b.jsx)(u,{}),(0,b.jsx)(r,{isOpen:l,onClose:()=>n(!1)})]})]})}],40777)}];

//# sourceMappingURL=src_app_page_tsx_0ss2.w7._.js.map