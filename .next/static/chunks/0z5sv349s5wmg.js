(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,52683,e=>{"use strict";var t=e.i(43476),r=e.i(71645);function i({onComplete:e,onStartTransition:a}){let n=(0,r.useRef)(null),o=(0,r.useRef)(null),s=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=n.current,r=o.current,i=s.current;if(!t||!r||!i)return;let l=setTimeout(()=>{r.classList.add("visible")},100),c=setTimeout(()=>{i.classList.add("loaded")},200),d=setTimeout(()=>{t.classList.add("hidden"),a&&a()},1800),m=setTimeout(()=>{e()},3600);return()=>{clearTimeout(l),clearTimeout(c),clearTimeout(d),clearTimeout(m)}},[e]),(0,t.jsx)("div",{ref:n,className:"loader",children:(0,t.jsxs)("div",{className:"loader-content",children:[(0,t.jsx)("span",{ref:o,className:"loader-text",children:"PRATHAMESH JADHAV"}),(0,t.jsx)("div",{ref:s,className:"loader-bar"})]})})}function a(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=e.current;if(!t)return;let r=0,i=0,a=!1,n=()=>{let e=a?"scale(2.5)":"scale(1)";t.style.transform=`translate(calc(${r}px - 50%), calc(${i}px - 50%)) ${e}`},o=e=>{r=e.clientX,i=e.clientY,n()},s=e=>{let t=e.target;t instanceof Element&&t.closest("[data-magnetic]")&&(a=!0,n())},l=e=>{let t=e.target;t instanceof Element&&t.closest("[data-magnetic]")&&(a=!1,n())};return document.addEventListener("mousemove",o),document.addEventListener("mouseover",s),document.addEventListener("mouseout",l),()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseover",s),document.removeEventListener("mouseout",l)}},[]),(0,t.jsx)("div",{ref:e,"aria-hidden":"true",style:{position:"fixed",top:0,left:0,width:"20px",height:"20px",borderRadius:"50%",background:"#f5f5f5",mixBlendMode:"difference",zIndex:1e4,pointerEvents:"none",transition:"transform 0.1s, scale 0.2s",willChange:"transform"}})}function n(){return(0,t.jsx)("div",{className:"noise","aria-hidden":"true"})}function o({children:e,range:t=60,strength:i=.35}){let a=(0,r.useRef)(null),[n,s]=(0,r.useState)({x:0,y:0});(0,r.useEffect)(()=>{let e=a.current;if(!e)return;let r=r=>{let{clientX:a,clientY:n}=r,o=e.getBoundingClientRect(),l=o.left+o.width/2,c=o.top+o.height/2,d=a-l,m=n-c;Math.hypot(d,m)<t?s({x:d*i,y:m*i}):s({x:0,y:0})},n=()=>{s({x:0,y:0})};return window.addEventListener("mousemove",r),e.addEventListener("mouseleave",n),()=>{window.removeEventListener("mousemove",r),e.removeEventListener("mouseleave",n)}},[t,i]);let l=r.default.Children.only(e);return r.default.cloneElement(l,{ref:a,style:{...l.props.style,transform:`translate(${n.x}px, ${n.y}px)`,transition:0===n.x&&0===n.y?"transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)":"transform 0.1s ease-out",willChange:"transform",display:l.props.style?.display||"inline-block"}})}function s({text:e,className:i}){let[a,n]=(0,r.useState)(e),[o,l]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!o)return void n(e);let t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",r=0,i=setInterval(()=>{n(i=>e.split("").map((i,a)=>" "===i||"."===i||"/"===i||"-"===i||"_"===i?i:a<r?e[a]:t[Math.floor(Math.random()*t.length)]).join("")),(r+=1/3)>=e.length&&(clearInterval(i),n(e))},25);return()=>clearInterval(i)},[o,e]),(0,t.jsxs)("span",{onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),className:i,style:{position:"relative",display:"inline-block",cursor:"default",userSelect:"none",WebkitUserSelect:"none"},children:[(0,t.jsx)("span",{style:{opacity:0,pointerEvents:"none",userSelect:"none",WebkitUserSelect:"none"},children:e}),(0,t.jsx)("span",{style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",whiteSpace:"nowrap"},children:a})]})}function l({onLogoDoubleClick:e}){let[i,a]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=()=>{a(window.scrollY>50)};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]),(0,t.jsxs)("nav",{className:`sticky-nav${i?" scrolled":""}`,children:[(0,t.jsxs)("div",{className:"nav-content",children:[(0,t.jsxs)("div",{className:"logo-group",children:[(0,t.jsx)(o,{range:40,strength:.35,children:(0,t.jsx)("span",{className:"nav-logo",onDoubleClick:e,style:{cursor:"pointer",userSelect:"none",display:"inline-block"},children:(0,t.jsx)(s,{text:"P. JADHAV"})})}),(0,t.jsx)("div",{className:"logo-tooltip",children:"[DBL-CLICK FOR SHELL]"})]}),(0,t.jsxs)("div",{className:"nav-links",children:[(0,t.jsx)(o,{children:(0,t.jsx)("a",{href:"#about",children:(0,t.jsx)(s,{text:"Origin"})})}),(0,t.jsx)(o,{children:(0,t.jsx)("a",{href:"#projects",children:(0,t.jsx)(s,{text:"Work"})})}),(0,t.jsx)(o,{children:(0,t.jsx)("a",{href:"#contact",children:(0,t.jsx)(s,{text:"Build"})})})]})]}),(0,t.jsx)("style",{children:`
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
      `})]})}function c(){let e=(0,r.useRef)(null),i=(0,r.useRef)({x:-1e3,y:-1e3});return(0,r.useEffect)(()=>{let t,r=e.current;if(!r)return;let a=r.getContext("2d");if(!a)return;let n=[],o=()=>{r.width=window.innerWidth,r.height=window.innerHeight,s()},s=()=>{n=[];let e=Math.min(60,Math.floor(r.width*r.height/25e3));for(let t=0;t<e;t++)n.push({x:Math.random()*r.width,y:Math.random()*r.height,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,radius:1.5*Math.random()+.8})};window.addEventListener("resize",o),o();let l=e=>{i.current={x:e.clientX,y:e.clientY}},c=()=>{i.current={x:-1e3,y:-1e3}};window.addEventListener("mousemove",l),document.addEventListener("mouseleave",c);let d=()=>{a.clearRect(0,0,r.width,r.height),a.strokeStyle="rgba(255, 180, 0, 0.015)",a.lineWidth=1;for(let e=0;e<r.width;e+=80)a.beginPath(),a.moveTo(e,0),a.lineTo(e,r.height),a.stroke();for(let e=0;e<r.height;e+=80)a.beginPath(),a.moveTo(0,e),a.lineTo(r.width,e),a.stroke();for(let e=0;e<n.length;e++){let t=n[e];t.x+=t.vx,t.y+=t.vy,(t.x<0||t.x>r.width)&&(t.vx*=-1),(t.y<0||t.y>r.height)&&(t.vy*=-1);let o=i.current.x-t.x,s=i.current.y-t.y,l=Math.sqrt(o*o+s*s);l<200&&(t.x+=o/l*.3,t.y+=s/l*.3),a.beginPath(),a.arc(t.x,t.y,t.radius,0,2*Math.PI),a.fillStyle="rgba(255, 180, 0, 0.15)",a.fill();for(let r=e+1;r<n.length;r++){let e=n[r],i=t.x-e.x,o=t.y-e.y,s=Math.sqrt(i*i+o*o);if(s<130){let r=(130-s)/130*.07;a.strokeStyle=`rgba(255, 180, 0, ${r})`,a.lineWidth=.5,a.beginPath(),a.moveTo(t.x,t.y),a.lineTo(e.x,e.y),a.stroke()}}if(l<180){let e=(180-l)/180*.15;a.strokeStyle=`rgba(255, 180, 0, ${e})`,a.lineWidth=.6,a.beginPath(),a.moveTo(t.x,t.y),a.lineTo(i.current.x,i.current.y),a.stroke()}}t=requestAnimationFrame(d)};return d(),()=>{window.removeEventListener("resize",o),window.removeEventListener("mousemove",l),document.removeEventListener("mouseleave",c),cancelAnimationFrame(t)}},[]),(0,t.jsx)("canvas",{ref:e,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:2}})}function d(){let[e,i]=(0,r.useState)(12),[a,n]=(0,r.useState)("");return(0,r.useEffect)(()=>{let e=setInterval(()=>{i(Math.floor(6*Math.random())+10)},2e3),t=setInterval(()=>{let e=new Date,t=e=>e.toString().padStart(2,"0");n(`${t(e.getHours())}:${t(e.getMinutes())}:${t(e.getSeconds())}`)},1e3);return()=>{clearInterval(e),clearInterval(t)}},[]),(0,t.jsxs)("div",{className:"hero-hud-logs",children:[(0,t.jsx)("div",{className:"hud-line",children:"// PRATHAMESH_JADHAV_PORTFOLIO"}),(0,t.jsxs)("div",{className:"hud-line",children:["SYSTEM STATUS: ",(0,t.jsx)("span",{className:"green-glow",children:"OPERATIONAL"})]}),(0,t.jsxs)("div",{className:"hud-line",children:["CORE LATENCY: ",(0,t.jsxs)("span",{children:[e,"ms"]})]}),(0,t.jsxs)("div",{className:"hud-line",children:["ACTIVE NODE: ",(0,t.jsx)("span",{children:"NODE_AI_26_01"})]}),(0,t.jsxs)("div",{className:"hud-line",children:["SYS_TIME: ",(0,t.jsx)("span",{children:a||"--:--:--"})]})]})}function m(){return(0,t.jsxs)("section",{id:"hero",className:"full-screen",children:[(0,t.jsx)(c,{}),(0,t.jsx)(d,{}),(0,t.jsxs)("div",{className:"video-container",children:[(0,t.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:"bg-video",children:(0,t.jsx)("source",{src:"https://assets.mixkit.co/videos/preview/mixkit-abstract-dark-ink-swirling-in-water-4331-large.mp4",type:"video/mp4"})}),(0,t.jsx)("div",{className:"video-overlay"})]}),(0,t.jsxs)("div",{className:"hero-content container",children:[(0,t.jsxs)("div",{className:"hero-text-wrapper",children:[(0,t.jsx)(o,{range:30,strength:.2,children:(0,t.jsx)("div",{className:"year-badge",style:{display:"inline-block"},children:(0,t.jsx)(s,{text:"EST. 2022"})})}),(0,t.jsxs)("h1",{className:"hero-headline",children:[(0,t.jsx)("div",{className:"line",children:(0,t.jsx)("span",{children:"I BUILD."})}),(0,t.jsx)("div",{className:"line",children:(0,t.jsx)("span",{children:"I SHIP."})}),(0,t.jsx)("div",{className:"line",children:(0,t.jsx)("span",{children:"I OPTIMIZE."})})]}),(0,t.jsx)("p",{className:"hero-subtext",children:(0,t.jsx)(s,{text:"AI/ML Developer. Data Scientist. GenAI Engineer."})})]}),(0,t.jsx)(o,{range:40,strength:.3,children:(0,t.jsxs)("div",{className:"scroll-explore",children:[(0,t.jsx)("span",{children:(0,t.jsx)(s,{text:"SCROLL TO EXPLORE"})}),(0,t.jsx)("div",{className:"scroll-line"})]})})]}),(0,t.jsx)("style",{children:`
        .year-badge {
          border: 1px solid rgba(255, 180, 0, 0.15) !important;
          background: rgba(255, 180, 0, 0.02) !important;
          padding: 0.35rem 0.85rem !important;
          border-radius: 4px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          margin-top: 1.5rem !important; /* Lowered position slightly */
          margin-bottom: 2rem !important; /* Added space before title */
          cursor: pointer;
        }

        .year-badge:hover {
          border-color: rgba(255, 180, 0, 0.45) !important;
          background: rgba(255, 180, 0, 0.06) !important;
          box-shadow: 0 0 20px rgba(255, 180, 0, 0.18);
        }

        .hero-hud-logs {
          position: absolute;
          top: 5rem;
          right: 5rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          color: rgba(245, 245, 245, 0.25);
          letter-spacing: 0.15em;
          border-left: 2px solid rgba(255, 180, 0, 0.25);
          padding-left: 1rem;
          z-index: 10;
          pointer-events: none;
          text-transform: uppercase;
        }

        .hero-hud-logs .green-glow {
          color: #00ff66;
          text-shadow: 0 0 10px rgba(0, 255, 102, 0.4);
        }

        .scroll-explore {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .scroll-explore:hover {
          color: var(--accent-amber, #ffb400) !important;
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

        @media (max-width: 992px) {
          .hero-hud-logs {
            display: none !important;
          }
        }
      `})]})}let x=[{id:1,year:"2022",title:"ACADEMIC CONCEPTS & LOGICAL FOUNDATIONS",teaser:"Initiated formal academic study in Computer Science, mastering core computational paradigms.",description:"Acquired rigorous knowledge of data structures, classical algorithms, discrete mathematics, and computer architecture. Established fundamental habits in algorithm design, compiler constraints, and complexity analysis.",details:"Acquired core logic and basic troubleshooting patterns early on.",technologies:["C Language","CS Fundamentals","Boolean Logic"]},{id:2,year:"2022",title:"FIRST PYTHON & C SYSTEM ENGINE CONSTRUCTS",teaser:"Programmed core console logic, shell algorithms, and procedural scripting models.",description:"Built command-line tools and custom memory buffers. Practiced memory layout debugging, manual pointer reference handling, and clean modular development principles.",details:"Spent hours debugging pointer offsets and system syntax anomalies.",technologies:["Python","C Language","Scripting"]},{id:3,year:"2023",title:"SCALABLE WEB & DISTRIBUTED DATA FLOWS",teaser:"Architected secure database pipelines, server-side handlers, and state management.",description:"Designed relational schemas and high-throughput server backends. Addressed distributed application bottlenecks, database transaction constraints, and web browser rendering performance.",details:"Optimized page load configurations and local caching schemas.",technologies:["React","Node.js","Express","SQL Databases"]},{id:4,year:"2024",title:"DATA SCIENCE INTERNSHIP — UPTRICKS SERVICES",teaser:"Engineered data preprocessing engines and mathematical prediction pipelines.",description:"Processed complex logistics datasets. Conducted feature engineering, multi-collinearity checks, and statistical modeling to generate production-ready predictive insights.",details:"Wrote robust validation suites to filter noisy logistics dataset entries.",technologies:["Python","Pandas","NumPy","Scikit-Learn","Statistical Modeling"]},{id:5,year:"2024",title:"HIGH-VOLUME DATA INGESTION & ETL ENGINES",teaser:"Streamlined data automation systems, reducing query processing latencies.",description:"Optimized extract-transform-load data paths. Automated pipeline triggers using custom shell automation scripts, decreasing system load times and streamlining database ingest.",details:"Gained hands-on exposure to CI/CD triggers and Linux deployment environments.",technologies:["Python","Shell Scripting","ETL Pipelines","Database Optimization"]},{id:6,year:"2025",title:"CONTEXTUAL AI ENGINES & RETRIEVAL-AUGMENTED GENERATION",teaser:"Engineered LangChain agent pipelines and real-time semantic search layers.",description:"Developed Retrieval-Augmented Generation (RAG) models using vector indexes. Designed low-latency contextual embeddings integration to feed LLM completions with enterprise security.",details:"Engineered prompt templates with metadata filters to prevent context leaks.",technologies:["FastAPI","LangChain","OpenAI APIs","Vector Embeddings"]},{id:7,year:"2026",title:"BACHELOR OF COMPUTER SCIENCE — CGPA 7.8",teaser:"Successfully graduated. Researched clinical decision networks for prediction.",description:"Defended B.E. Thesis in Computer Science. Focused coursework on advanced machine learning, concurrent systems, and database engineering, maintaining a competitive cumulative CGPA of 7.8.",details:"Maintained a strong cumulative CGPA of 7.8 across rigorous coursework semesters.",technologies:["Predictive Modeling","Data Visualization","Capstone Project"]},{id:8,year:"2026",title:"NUROSEARCH VECTOR STORAGE & HIGH-SPEED PACKET CAPTURE",teaser:"Engineered custom graph-based vector storage indexing (HNSW) and C-based DPI listener.",description:"Designed NuroSearch, a custom HNSW graph indexing vector database for semantic search. Built a high-performance network packet sniffer utilising multithreaded raw socket streams and C libraries.",details:"Architected custom scalar quantization scripts to compress memory footprints.",technologies:["Rust","Python","C Language","HNSW Graph","Multithreading","Scapy"]}];function h({id:e}){return 1===e?(0,t.jsxs)("svg",{width:"100%",height:"130",viewBox:"0 0 400 130",style:{background:"#090909",border:"1px solid rgba(255,180,0,0.12)",borderRadius:"6px",margin:"1rem 0",overflow:"hidden"},children:[(0,t.jsx)("style",{children:`
          @keyframes nodePulse { 0%, 100% { transform: scale(1); filter: drop-shadow(0 0 2px rgba(255,180,0,0.2)); } 50% { transform: scale(1.08); filter: drop-shadow(0 0 8px rgba(255,180,0,0.6)); } }
          @keyframes flowLine { 0% { stroke-dashoffset: 24; } 100% { stroke-dashoffset: 0; } }
          .tree-node { animation: nodePulse 3s infinite ease-in-out; transform-origin: 200px 30px; }
          .tree-node-delay1 { animation: nodePulse 3s infinite ease-in-out 1s; transform-origin: 120px 65px; }
          .tree-node-delay2 { animation: nodePulse 3s infinite ease-in-out 2s; transform-origin: 80px 100px; }
          .flow-link { stroke-dasharray: 6 3; animation: flowLine 1.5s linear infinite; }
        `}),(0,t.jsxs)("g",{stroke:"rgba(255,180,0,0.02)",strokeWidth:"0.5",children:[(0,t.jsx)("line",{x1:"0",y1:"20",x2:"400",y2:"20"}),(0,t.jsx)("line",{x1:"0",y1:"40",x2:"400",y2:"40"}),(0,t.jsx)("line",{x1:"0",y1:"60",x2:"400",y2:"60"}),(0,t.jsx)("line",{x1:"0",y1:"80",x2:"400",y2:"80"}),(0,t.jsx)("line",{x1:"0",y1:"100",x2:"400",y2:"100"}),(0,t.jsx)("line",{x1:"50",y1:"0",x2:"50",y2:"130"}),(0,t.jsx)("line",{x1:"100",y1:"0",x2:"100",y2:"130"}),(0,t.jsx)("line",{x1:"150",y1:"0",x2:"150",y2:"130"}),(0,t.jsx)("line",{x1:"200",y1:"0",x2:"200",y2:"130"}),(0,t.jsx)("line",{x1:"250",y1:"0",x2:"250",y2:"130"}),(0,t.jsx)("line",{x1:"300",y1:"0",x2:"300",y2:"130"}),(0,t.jsx)("line",{x1:"350",y1:"0",x2:"350",y2:"130"})]}),(0,t.jsxs)("g",{stroke:"rgba(255, 180, 0, 0.2)",strokeWidth:"1.5",children:[(0,t.jsx)("line",{x1:"200",y1:"30",x2:"120",y2:"65",className:"flow-link",stroke:"#ffb400"}),(0,t.jsx)("line",{x1:"200",y1:"30",x2:"280",y2:"65",className:"flow-link"}),(0,t.jsx)("line",{x1:"120",y1:"65",x2:"80",y2:"100",className:"flow-link",stroke:"#ffb400"}),(0,t.jsx)("line",{x1:"120",y1:"65",x2:"160",y2:"100",className:"flow-link"})]}),(0,t.jsx)("circle",{cx:"200",cy:"30",r:"10",fill:"#090909",stroke:"#ffb400",strokeWidth:"1.5",className:"tree-node"}),(0,t.jsx)("text",{x:"200",y:"33",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",fontWeight:"bold",children:"ROOT"}),(0,t.jsx)("circle",{cx:"120",cy:"65",r:"10",fill:"#090909",stroke:"#ffb400",strokeWidth:"1.5",className:"tree-node-delay1"}),(0,t.jsx)("text",{x:"120",y:"68",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"L_01"}),(0,t.jsx)("circle",{cx:"280",cy:"65",r:"10",fill:"#090909",stroke:"rgba(245,245,245,0.3)",strokeWidth:"1"}),(0,t.jsx)("text",{x:"280",y:"68",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"R_01"}),(0,t.jsx)("circle",{cx:"80",cy:"100",r:"10",fill:"#090909",stroke:"#ffb400",strokeWidth:"1.5",className:"tree-node-delay2"}),(0,t.jsx)("text",{x:"80",y:"103",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"0x3A"}),(0,t.jsx)("circle",{cx:"160",cy:"100",r:"10",fill:"#090909",stroke:"rgba(245,245,245,0.2)",strokeWidth:"1"}),(0,t.jsx)("text",{x:"160",y:"103",fill:"rgba(245,245,245,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"0x7B"}),(0,t.jsx)("text",{x:"15",y:"18",fill:"rgba(255,180,0,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",letterSpacing:"0.05em",children:"DATA_STRUCTURE: HIERARCHICAL_INDEX"}),(0,t.jsx)("text",{x:"385",y:"18",fill:"rgba(245,245,245,0.25)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",textAnchor:"end",children:"O(log N) SEARCH"})]}):2===e?(0,t.jsxs)("svg",{width:"100%",height:"130",viewBox:"0 0 400 130",style:{background:"#090909",border:"1px solid rgba(255,180,0,0.12)",borderRadius:"6px",margin:"1rem 0",overflow:"hidden"},children:[(0,t.jsx)("style",{children:`
          @keyframes cursorBlink { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
          @keyframes textType1 {
            0% { content: ""; }
            10% { content: "c"; }
            20% { content: "ch"; }
            30% { content: "char"; }
            40% { content: "char*"; }
            50% { content: "char* pt"; }
            60% { content: "char* ptr "; }
            70% { content: "char* ptr = "; }
            80% { content: "char* ptr = ma"; }
            90% { content: "char* ptr = malloc"; }
            100% { content: "char* ptr = malloc(16);"; }
          }
          .typewriter::after {
            display: inline-block;
            content: "";
            animation: textType1 4s steps(11) infinite alternate;
          }
          .cursor { animation: cursorBlink 1s infinite; fill: #ffb400; }
          .memory-box { transition: fill 0.3s; }
          .memory-box:hover { fill: rgba(255,180,0,0.08); }
        `}),(0,t.jsxs)("g",{fill:"rgba(245,245,245,0.15)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:[(0,t.jsx)("text",{x:"15",y:"45",children:"0x007FFF01: [ 0x3F ]  -- ptr"}),(0,t.jsx)("text",{x:"15",y:"65",children:"0x007FFF02: [ 0x4E ]"}),(0,t.jsx)("text",{x:"15",y:"85",children:"0x007FFF03: [ 0x00 ]"})]}),(0,t.jsx)("path",{d:"M 120 42 L 180 42 L 180 65 L 210 65",fill:"none",stroke:"#ffb400",strokeWidth:"1",strokeDasharray:"3 3"}),(0,t.jsx)("polygon",{points:"210,65 205,62 205,68",fill:"#ffb400"}),(0,t.jsx)("rect",{x:"215",y:"35",width:"150",height:"75",rx:"4",fill:"rgba(255,255,255,0.01)",stroke:"rgba(245,245,245,0.1)"}),(0,t.jsx)("text",{x:"225",y:"48",fill:"rgba(245,245,245,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6.5",children:"HEAP MEMORY MAP"}),(0,t.jsx)("rect",{x:"225",y:"58",width:"30",height:"20",rx:"2",fill:"rgba(255,180,0,0.05)",stroke:"#ffb400",strokeWidth:"1",className:"memory-box"}),(0,t.jsx)("text",{x:"240",y:"70",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"16B"}),(0,t.jsx)("rect",{x:"260",y:"58",width:"45",height:"20",rx:"2",fill:"none",stroke:"rgba(245,245,245,0.15)",strokeWidth:"1",className:"memory-box"}),(0,t.jsx)("text",{x:"282",y:"70",fill:"rgba(245,245,245,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"32B"}),(0,t.jsx)("rect",{x:"310",y:"58",width:"45",height:"20",rx:"2",fill:"rgba(245,245,245,0.02)",stroke:"rgba(245,245,245,0.1)",strokeWidth:"1",className:"memory-box"}),(0,t.jsx)("text",{x:"332",y:"70",fill:"rgba(245,245,245,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"FREE"}),(0,t.jsx)("text",{x:"15",y:"18",fill:"rgba(255,180,0,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",letterSpacing:"0.05em",children:"LOW-LEVEL REGISTER & MEMORY LEAK WATCH"}),(0,t.jsx)("text",{x:"15",y:"112",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",className:"typewriter",children:"guest@kernel:~$ "}),(0,t.jsx)("rect",{x:"180",y:"104",width:"4",height:"8",fill:"#ffb400",className:"cursor"})]}):3===e?(0,t.jsxs)("svg",{width:"100%",height:"130",viewBox:"0 0 400 130",style:{background:"#090909",border:"1px solid rgba(255,180,0,0.12)",borderRadius:"6px",margin:"1rem 0",overflow:"hidden"},children:[(0,t.jsx)("style",{children:`
          @keyframes dataStream {
            0% { stroke-dashoffset: 40; }
            100% { stroke-dashoffset: 0; }
          }
          @keyframes hitFlash {
            0%, 100% { fill: rgba(74, 222, 128, 0.05); stroke: rgba(74, 222, 128, 0.4); }
            50% { fill: rgba(74, 222, 128, 0.25); stroke: rgba(74, 222, 128, 1); }
          }
          .stream-path { stroke-dasharray: 8 4; animation: dataStream 1s linear infinite; }
          .redis-node { animation: hitFlash 2s infinite ease-in-out; }
        `}),(0,t.jsxs)("g",{stroke:"rgba(245,245,245,0.1)",fill:"rgba(245,245,245,0.01)",strokeWidth:"1",children:[(0,t.jsx)("rect",{x:"20",y:"45",width:"55",height:"35",rx:"3"}),(0,t.jsx)("rect",{x:"110",y:"45",width:"65",height:"35",rx:"3"}),(0,t.jsx)("rect",{x:"210",y:"25",width:"70",height:"30",rx:"3",className:"redis-node"}),(0,t.jsx)("rect",{x:"210",y:"70",width:"70",height:"30",rx:"3"}),(0,t.jsx)("rect",{x:"315",y:"45",width:"65",height:"35",rx:"3"})]}),(0,t.jsx)("path",{d:"M 75 62 L 110 62",stroke:"#58c4dc",strokeWidth:"1.5",className:"stream-path"}),(0,t.jsx)("path",{d:"M 175 62 L 195 62 L 195 40 L 210 40",stroke:"#ffb400",strokeWidth:"1",strokeDasharray:"4 2"}),(0,t.jsx)("path",{d:"M 175 62 L 195 62 L 195 85 L 210 85",stroke:"#cbd5e1",strokeWidth:"1",strokeDasharray:"4 2"}),(0,t.jsx)("path",{d:"M 280 40 L 295 40 L 295 62 L 315 62",stroke:"#ffb400",strokeWidth:"1"}),(0,t.jsx)("path",{d:"M 280 85 L 295 85 L 295 62 L 315 62",stroke:"#cbd5e1",strokeWidth:"1"}),(0,t.jsx)("text",{x:"47",y:"66",fill:"rgba(245,245,245,0.8)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"CLIENT"}),(0,t.jsx)("text",{x:"142",y:"66",fill:"rgba(245,245,245,0.8)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"GATEWAY"}),(0,t.jsx)("text",{x:"245",y:"43",fill:"#4ade80",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",textAnchor:"middle",children:"REDIS"}),(0,t.jsx)("text",{x:"245",y:"88",fill:"rgba(245,245,245,0.6)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",textAnchor:"middle",children:"NODE_API"}),(0,t.jsx)("text",{x:"347",y:"66",fill:"#58c4dc",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"POSTGRES"}),(0,t.jsx)("text",{x:"15",y:"18",fill:"rgba(255,180,0,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",letterSpacing:"0.05em",children:"DISTRIBUTED SYSTEMS AND CACHING LAYERS"}),(0,t.jsx)("text",{x:"245",y:"52",fill:"#4ade80",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"5.5",textAnchor:"middle",children:"CACHE_HIT (2ms)"})]}):4===e?(0,t.jsxs)("svg",{width:"100%",height:"130",viewBox:"0 0 400 130",style:{background:"#090909",border:"1px solid rgba(255,180,0,0.12)",borderRadius:"6px",margin:"1rem 0",overflow:"hidden"},children:[(0,t.jsx)("style",{children:`
          @keyframes dropPoint {
            0% { transform: translateY(-5px); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(60px); opacity: 0; }
          }
          .data-drop { animation: dropPoint 2.5s infinite linear; }
          .data-drop-d1 { animation: dropPoint 2.5s infinite linear 0.8s; }
          .data-drop-d2 { animation: dropPoint 2.5s infinite linear 1.6s; }
        `}),(0,t.jsxs)("g",{stroke:"rgba(245,245,245,0.06)",fill:"rgba(245,245,245,0.02)",children:[(0,t.jsx)("rect",{x:"20",y:"30",width:"80",height:"85",rx:"3"}),(0,t.jsx)("line",{x1:"20",y1:"50",x2:"100",y2:"50"}),(0,t.jsx)("line",{x1:"20",y1:"70",x2:"100",y2:"70"}),(0,t.jsx)("line",{x1:"20",y1:"90",x2:"100",y2:"90"})]}),(0,t.jsx)("text",{x:"60",y:"42",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",textAnchor:"middle",children:"RAW_COLUMNS"}),(0,t.jsx)("text",{x:"60",y:"62",fill:"rgba(245,245,245,0.7)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7.5",textAnchor:"middle",children:"Logistics_Data"}),(0,t.jsx)("text",{x:"60",y:"82",fill:"rgba(245,245,245,0.7)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7.5",textAnchor:"middle",children:"Geo_Lat_Lon"}),(0,t.jsx)("text",{x:"60",y:"102",fill:"rgba(245,245,245,0.7)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7.5",textAnchor:"middle",children:"Transit_Time"}),(0,t.jsx)("path",{d:"M 100 72 L 150 72",stroke:"rgba(255,180,0,0.4)",strokeWidth:"1",strokeDasharray:"3 3"}),(0,t.jsx)("rect",{x:"150",y:"45",width:"80",height:"50",rx:"4",fill:"rgba(255,180,0,0.03)",stroke:"#ffb400",strokeWidth:"1"}),(0,t.jsx)("text",{x:"190",y:"65",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",fontWeight:"bold",children:"COV_MATRIX"}),(0,t.jsx)("text",{x:"190",y:"78",fill:"rgba(245,245,245,0.5)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6",textAnchor:"middle",children:"VIF FILTERS > 5.0"}),(0,t.jsx)("path",{d:"M 230 72 L 275 72",stroke:"rgba(255,180,0,0.4)",strokeWidth:"1"}),(0,t.jsxs)("g",{stroke:"rgba(245,245,245,0.1)",strokeWidth:"1",children:[(0,t.jsx)("line",{x1:"285",y1:"105",x2:"375",y2:"105"}),(0,t.jsx)("line",{x1:"285",y1:"35",x2:"285",y2:"105"})]}),(0,t.jsx)("path",{d:"M 285 95 L 365 45",stroke:"#fb923c",strokeWidth:"1.5"}),(0,t.jsx)("circle",{cx:"305",cy:"80",r:"2",fill:"#60a5fa"}),(0,t.jsx)("circle",{cx:"325",cy:"72",r:"2",fill:"#60a5fa"}),(0,t.jsx)("circle",{cx:"340",cy:"55",r:"2",fill:"#60a5fa"}),(0,t.jsx)("circle",{cx:"310",cy:"92",r:"2",fill:"#60a5fa"}),(0,t.jsx)("text",{x:"15",y:"18",fill:"rgba(255,180,0,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",letterSpacing:"0.05em",children:"FEATURE ENGINEERING & COLLINEARITY PREDICTION"}),(0,t.jsx)("text",{x:"375",y:"42",fill:"#fb923c",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6",textAnchor:"end",children:"MODEL FIT"})]}):5===e?(0,t.jsxs)("svg",{width:"100%",height:"130",viewBox:"0 0 400 130",style:{background:"#090909",border:"1px solid rgba(255,180,0,0.12)",borderRadius:"6px",margin:"1rem 0",overflow:"hidden"},children:[(0,t.jsx)("style",{children:`
          @keyframes liquidFlow { 0% { stroke-dashoffset: 32; } 100% { stroke-dashoffset: 0; } }
          .flow-liquid { stroke-dasharray: 8 8; animation: liquidFlow 2s linear infinite; }
        `}),(0,t.jsx)("path",{d:"M 30 65 L 120 65",stroke:"rgba(245,245,245,0.15)",strokeWidth:"8",strokeLinecap:"round"}),(0,t.jsx)("path",{d:"M 30 65 L 120 65",stroke:"#10b981",strokeWidth:"2",className:"flow-liquid"}),(0,t.jsx)("circle",{cx:"30",cy:"65",r:"16",fill:"#090909",stroke:"rgba(245,245,245,0.15)",strokeWidth:"1"}),(0,t.jsx)("text",{x:"30",y:"68",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6",textAnchor:"middle",children:"CRON"}),(0,t.jsx)("rect",{x:"150",y:"35",width:"100",height:"60",rx:"4",fill:"rgba(16,185,129,0.02)",stroke:"#10b981",strokeWidth:"1"}),(0,t.jsx)("text",{x:"200",y:"52",fill:"#10b981",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8.5",textAnchor:"middle",fontWeight:"bold",children:"TRANSFORMER"}),(0,t.jsx)("text",{x:"200",y:"66",fill:"rgba(245,245,245,0.5)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6",textAnchor:"middle",children:"CSV --> PARQUET"}),(0,t.jsx)("text",{x:"200",y:"80",fill:"rgba(245,245,245,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6.5",textAnchor:"middle",children:"GZIP COMPRESSION"}),(0,t.jsx)("path",{d:"M 250 65 L 340 65",stroke:"rgba(245,245,245,0.15)",strokeWidth:"8",strokeLinecap:"round"}),(0,t.jsx)("path",{d:"M 250 65 L 340 65",stroke:"#10b981",strokeWidth:"2",className:"flow-liquid"}),(0,t.jsx)("rect",{x:"340",y:"45",width:"40",height:"40",rx:"3",fill:"#090909",stroke:"rgba(245,245,245,0.15)",strokeWidth:"1"}),(0,t.jsx)("text",{x:"360",y:"62",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7.5",textAnchor:"middle",children:"DB"}),(0,t.jsx)("text",{x:"360",y:"74",fill:"#10b981",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6",textAnchor:"middle",children:"LOAD"}),(0,t.jsx)("text",{x:"15",y:"18",fill:"rgba(255,180,0,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",letterSpacing:"0.05em",children:"DATA INTEGRATION & BATCH ETL PIPELINING"}),(0,t.jsx)("text",{x:"200",y:"112",fill:"rgba(245,245,245,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",textAnchor:"middle",children:"throughput: 25.4 MB/s"})]}):6===e?(0,t.jsxs)("svg",{width:"100%",height:"130",viewBox:"0 0 400 130",style:{background:"#090909",border:"1px solid rgba(255,180,0,0.12)",borderRadius:"6px",margin:"1rem 0",overflow:"hidden"},children:[(0,t.jsx)("style",{children:`
          @keyframes pulseSonar {
            0% { r: 5px; opacity: 0.9; }
            100% { r: 60px; opacity: 0; }
          }
          .sonar { animation: pulseSonar 3s infinite cubic-bezier(0.1, 0.8, 0.3, 1); }
          .query-pt { filter: drop-shadow(0 0 4px var(--accent-amber, #ffb400)); }
        `}),(0,t.jsx)("circle",{cx:"200",cy:"65",r:"5",fill:"#ffb400",className:"query-pt"}),(0,t.jsx)("circle",{cx:"200",cy:"65",r:"30",fill:"none",stroke:"rgba(255,180,0,0.2)",strokeWidth:"0.75"}),(0,t.jsx)("circle",{cx:"200",cy:"65",r:"55",fill:"none",stroke:"rgba(255,180,0,0.15)",strokeWidth:"0.75"}),(0,t.jsx)("circle",{cx:"200",cy:"65",r:"5",fill:"none",stroke:"#ffb400",strokeWidth:"1",className:"sonar"}),(0,t.jsx)("circle",{cx:"160",cy:"45",r:"3",fill:"#ffb400"}),(0,t.jsx)("line",{x1:"200",y1:"65",x2:"160",y2:"45",stroke:"rgba(255,180,0,0.5)",strokeWidth:"1"}),(0,t.jsx)("text",{x:"153",y:"42",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6.5",children:"chunk_09 (sim=0.88)"}),(0,t.jsx)("circle",{cx:"245",cy:"50",r:"3",fill:"#ffb400"}),(0,t.jsx)("line",{x1:"200",y1:"65",x2:"245",y2:"50",stroke:"rgba(255,180,0,0.5)",strokeWidth:"1"}),(0,t.jsx)("text",{x:"252",y:"48",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6.5",children:"chunk_14 (sim=0.84)"}),(0,t.jsx)("circle",{cx:"140",cy:"85",r:"2",fill:"rgba(245,245,245,0.2)"}),(0,t.jsx)("circle",{cx:"260",cy:"85",r:"2",fill:"rgba(245,245,245,0.2)"}),(0,t.jsx)("circle",{cx:"190",cy:"110",r:"2",fill:"rgba(245,245,245,0.2)"}),(0,t.jsx)("circle",{cx:"215",cy:"25",r:"2",fill:"rgba(245,245,245,0.2)"}),(0,t.jsx)("text",{x:"15",y:"18",fill:"rgba(255,180,0,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",letterSpacing:"0.05em",children:"SEMANTIC RAG VECTOR NEAREST-NEIGHBORS"}),(0,t.jsx)("text",{x:"385",y:"18",fill:"rgba(245,245,245,0.25)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",textAnchor:"end",children:"API LATENCY: 28ms"}),(0,t.jsx)("text",{x:"200",y:"112",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6.5",textAnchor:"middle",children:'Query: "vector database optimization" --> Embedding Ingest'})]}):7===e?(0,t.jsxs)("svg",{width:"100%",height:"130",viewBox:"0 0 400 130",style:{background:"#090909",border:"1px solid rgba(255,180,0,0.12)",borderRadius:"6px",margin:"1rem 0",overflow:"hidden"},children:[(0,t.jsxs)("g",{stroke:"rgba(245,245,245,0.05)",strokeWidth:"1",children:[(0,t.jsx)("line",{x1:"30",y1:"100",x2:"370",y2:"100"}),(0,t.jsx)("line",{x1:"30",y1:"30",x2:"370",y2:"30"})]}),(0,t.jsx)("rect",{x:"50",y:"55",width:"20",height:"45",fill:"rgba(245,245,245,0.15)",rx:"1"}),(0,t.jsx)("text",{x:"60",y:"112",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6",textAnchor:"middle",children:"SEM_I"}),(0,t.jsx)("text",{x:"60",y:"50",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6.5",textAnchor:"middle",children:"7.2"}),(0,t.jsx)("rect",{x:"90",y:"50",width:"20",height:"50",fill:"rgba(245,245,245,0.15)",rx:"1"}),(0,t.jsx)("text",{x:"100",y:"112",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6",textAnchor:"middle",children:"SEM_II"}),(0,t.jsx)("text",{x:"100",y:"45",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6.5",textAnchor:"middle",children:"7.5"}),(0,t.jsx)("rect",{x:"130",y:"47",width:"20",height:"53",fill:"rgba(245,245,245,0.2)",rx:"1"}),(0,t.jsx)("text",{x:"140",y:"112",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6",textAnchor:"middle",children:"SEM_III"}),(0,t.jsx)("text",{x:"140",y:"42",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6.5",textAnchor:"middle",children:"7.7"}),(0,t.jsx)("rect",{x:"170",y:"44",width:"20",height:"56",fill:"rgba(245,245,245,0.2)",rx:"1"}),(0,t.jsx)("text",{x:"180",y:"112",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6",textAnchor:"middle",children:"SEM_IV"}),(0,t.jsx)("text",{x:"180",y:"39",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6.5",textAnchor:"middle",children:"7.8"}),(0,t.jsx)("rect",{x:"210",y:"42",width:"20",height:"58",fill:"rgba(255,180,0,0.15)",stroke:"#ffb400",strokeWidth:"0.5",rx:"1"}),(0,t.jsx)("text",{x:"220",y:"112",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6",textAnchor:"middle",children:"SEM_V"}),(0,t.jsx)("text",{x:"220",y:"37",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6.5",textAnchor:"middle",children:"8.0"}),(0,t.jsx)("rect",{x:"260",y:"35",width:"110",height:"65",rx:"3",fill:"rgba(245,245,245,0.01)",stroke:"rgba(245,245,245,0.08)"}),(0,t.jsx)("text",{x:"315",y:"48",fill:"rgba(245,245,245,0.7)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7.5",textAnchor:"middle",children:"CAPSTONE THESIS"}),(0,t.jsx)("text",{x:"315",y:"62",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",fontWeight:"bold",children:"CLINICAL ML NET"}),(0,t.jsx)("text",{x:"315",y:"78",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6",textAnchor:"middle",children:"VERDICT: APPROVED // GRADE A"}),(0,t.jsx)("text",{x:"15",y:"18",fill:"rgba(255,180,0,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",letterSpacing:"0.05em",children:"ACADEMIC TRACKING AND GRADE ENGINE"}),(0,t.jsx)("text",{x:"385",y:"18",fill:"rgba(245,245,245,0.25)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",textAnchor:"end",children:"CGPA: 7.80"})]}):8===e?(0,t.jsxs)("svg",{width:"100%",height:"130",viewBox:"0 0 400 130",style:{background:"#090909",border:"1px solid rgba(255,180,0,0.12)",borderRadius:"6px",margin:"1rem 0",overflow:"hidden"},children:[(0,t.jsx)("style",{children:`
          @keyframes oscil1 {
            0% { stroke-dashoffset: 200; }
            100% { stroke-dashoffset: 0; }
          }
          .oscilloscope-trace { stroke-dasharray: 200; stroke-dashoffset: 200; animation: oscil1 2.5s infinite linear; }
          .oscilloscope-trace-secondary { opacity: 0.15; }
        `}),(0,t.jsxs)("g",{stroke:"rgba(239,68,68,0.03)",strokeWidth:"0.5",children:[(0,t.jsx)("line",{x1:"20",y1:"65",x2:"380",y2:"65"}),(0,t.jsx)("line",{x1:"20",y1:"35",x2:"380",y2:"35"}),(0,t.jsx)("line",{x1:"20",y1:"95",x2:"380",y2:"95"}),(0,t.jsx)("line",{x1:"200",y1:"10",x2:"200",y2:"120"}),(0,t.jsx)("line",{x1:"100",y1:"10",x2:"100",y2:"120"}),(0,t.jsx)("line",{x1:"300",y1:"10",x2:"300",y2:"120"})]}),(0,t.jsx)("rect",{x:"15",y:"10",width:"370",height:"110",fill:"none",stroke:"rgba(239,68,68,0.08)",strokeWidth:"1"}),(0,t.jsx)("path",{d:"M 20 65 Q 65 15, 110 65 T 200 65 T 290 65 T 380 65",fill:"none",stroke:"rgba(239,68,68,0.2)",strokeWidth:"1",className:"oscilloscope-trace-secondary"}),(0,t.jsx)("path",{d:"M 20 65 Q 65 15, 110 65 T 200 65 T 290 65 T 380 65",fill:"none",stroke:"#ef4444",strokeWidth:"1.5",className:"oscilloscope-trace"}),(0,t.jsx)("circle",{cx:"50",cy:"95",r:"3",fill:"#cbd5e1"}),(0,t.jsx)("circle",{cx:"80",cy:"105",r:"3",fill:"#cbd5e1"}),(0,t.jsx)("circle",{cx:"65",cy:"85",r:"3",fill:"#cbd5e1"}),(0,t.jsx)("line",{x1:"50",y1:"95",x2:"80",y2:"105",stroke:"rgba(245,245,245,0.3)",strokeWidth:"0.75"}),(0,t.jsx)("line",{x1:"50",y1:"95",x2:"65",y2:"85",stroke:"rgba(245,245,245,0.3)",strokeWidth:"0.75"}),(0,t.jsx)("line",{x1:"80",y1:"105",x2:"65",y2:"85",stroke:"rgba(245,245,245,0.3)",strokeWidth:"0.75"}),(0,t.jsx)("text",{x:"80",y:"82",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"5.5",children:"HNSW_L0_GRAPH"}),(0,t.jsx)("text",{x:"375",y:"22",fill:"#ef4444",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6",textAnchor:"end",children:"DPI BUFFER: 99.8% INGEST"}),(0,t.jsx)("text",{x:"375",y:"32",fill:"#ef4444",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6",textAnchor:"end",children:"RAW CAPTURE STREAM: 10Gbps"}),(0,t.jsx)("text",{x:"25",y:"22",fill:"rgba(255,180,0,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",letterSpacing:"0.05em",children:"C RAW SOCKET CAPTURE & MULTITHREADED PACKET PARSING"}),(0,t.jsx)("text",{x:"200",y:"115",fill:"#ef4444",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6.5",textAnchor:"middle",children:"MT_INGEST_THREAD [ID: 0x7000B2A3] -- RUNNING"})]}):null}let f=Array.from(new Set(["React","Next.js","Node.js","TypeScript","JavaScript","HTML","CSS","Python","Rust","C Language","C++","FastAPI","LangChain","OpenAI API","HNSW Graph","Vector DB","RAG Pipelines","SQL Databases","NoSQL","MongoDB","Redis","Docker","Git","Linux","Shell Scripting","ETL Pipelines","Scikit-Learn","Pandas","NumPy","Multithreading","Scapy","Network Protocols"])),p=f.map(e=>{let t=["HTML","CSS","JavaScript"].includes(e),r=["React","Next.js","TypeScript"].includes(e),i=["Node.js","FastAPI","SQL Databases","NoSQL","MongoDB","Redis"].includes(e),a=["Python","Pandas","NumPy","Scikit-Learn","LangChain","OpenAI API","HNSW Graph","Vector DB","RAG Pipelines","ETL Pipelines"].includes(e),n=["Rust","C Language","C++","Docker","Git","Linux","Shell Scripting","Multithreading","Scapy","Network Protocols"].includes(e),o="#cbd5e1",s="rgba(203, 213, 225, 0.05)",l="1px solid rgba(203, 213, 225, 0.25)",c="none";if(t){let t="#ff6d3b"==(o="HTML"===e?"#ff6d3b":"CSS"===e?"#ffb33b":"#f5e050")?"255, 109, 59":"#ffb33b"===o?"255, 179, 59":"245, 224, 80";s=`rgba(${t}, 0.05)`,l=`1px solid rgba(${t}, 0.25)`,c=`0 0 15px rgba(${t}, 0.15)`}else if(r){let t="#58c4dc"==(o="React"===e?"#58c4dc":"Next.js"===e?"#a5f3fc":"#3178c6")?"88, 196, 220":"#a5f3fc"===o?"165, 243, 252":"49, 120, 198";s=`rgba(${t}, 0.05)`,l=`1px solid rgba(${t}, 0.25)`,c=`0 0 15px rgba(${t}, 0.15)`}else if(i){let t="#f87171"==(o="Redis"===e?"#f87171":"MongoDB"===e?"#10b981":"FastAPI"===e?"#2dd4bf":"#4ade80")?"248, 113, 113":"#10b981"===o?"16, 185, 129":"#2dd4bf"===o?"45, 212, 191":"74, 222, 128";s=`rgba(${t}, 0.05)`,l=`1px solid rgba(${t}, 0.25)`,c=`0 0 15px rgba(${t}, 0.15)`}else if(a){let t="#60a5fa"==(o="Python"===e?"#60a5fa":"RAG Pipelines"===e||"Vector DB"===e?"#fb923c":"var(--accent-amber, #ffb400)")?"96, 165, 250":"#fb923c"===o?"251, 146, 60":"255, 180, 0";s=`rgba(${t}, 0.05)`,l=`1px solid rgba(${t}, 0.25)`,c=`0 0 15px rgba(${t}, 0.15)`}else if(n){let t="#ef4444"==(o="Rust"===e?"#ef4444":"Docker"===e||"Git"===e?"#818cf8":"Linux"===e||"Shell Scripting"===e?"#c084fc":"#a78bfa")?"239, 68, 68":"#818cf8"===o?"129, 140, 248":"#c084fc"===o?"192, 132, 252":"167, 139, 250";s=`rgba(${t}, 0.05)`,l=`1px solid rgba(${t}, 0.25)`,c=`0 0 15px rgba(${t}, 0.15)`}return{text:e,activeColor:o,activeBg:s,activeBorder:l,activeGlow:c}});function g({onHoverChange:e}){let i=(0,r.useRef)(null),a=(0,r.useRef)({x:0,y:0}),n=(0,r.useRef)(!1),o=(0,r.useRef)(!1),s=(0,r.useRef)({x:0,y:0}),[l,c]=(0,r.useState)(!1),d=(0,r.useRef)([]),m=(0,r.useRef)([]),x=(e,t)=>{if(0===d.current.length)return;let r=Math.cos(e),i=Math.sin(e),a=Math.cos(t),n=Math.sin(t);d.current.forEach((e,t)=>{let o=e.y*r-e.z*i,s=e.y*i+e.z*r,l=e.x*a+s*n,c=-e.x*n+s*a;e.x=l,e.y=o,e.z=c;let d=m.current[t];if(d){let r=p[t],i=(280+e.z)/280,a=160+e.x*i,n=160+e.y*i,o=(e.z+130)/260*.8+.2,s=Math.round(e.z+130),l=e.z>0,c=0;e.z<-20&&(c=Math.min(2.5,(Math.abs(e.z)-20)*.015)),d.style.left=`${a}px`,d.style.top=`${n}px`,d.style.transform=`translate(-50%, -50%) scale(${i})`,d.style.opacity=`${o}`,d.style.zIndex=`${s}`,d.style.fontWeight=l?"500":"300",d.style.color=l?r.activeColor:"rgba(245, 245, 245, 0.25)",d.style.pointerEvents=l?"auto":"none",d.style.background=l?r.activeBg:"transparent",d.style.border=l?r.activeBorder:"1px solid transparent",d.style.boxShadow=l?r.activeGlow:"none",d.style.filter=c>0?`blur(${c}px)`:"none"}})};(0,r.useEffect)(()=>{let e=f.length;d.current=f.map((t,r)=>{let i=Math.acos(-1+(2*(r+1)-1)/e),a=Math.sqrt(e*Math.PI)*i;return{text:t,x:130*Math.sin(i)*Math.cos(a),y:130*Math.sin(i)*Math.sin(a),z:130*Math.cos(i)}}),x(0,0)},[]),(0,r.useEffect)(()=>{let e,t=.002,r=.002,i=()=>{if(o.current){e=requestAnimationFrame(i);return}n.current?(t=-(4e-5*a.current.y),r=4e-5*a.current.x):(t=.98*t+2e-5,r=.98*r+3e-5),x(t,r),e=requestAnimationFrame(i)};return e=requestAnimationFrame(i),()=>cancelAnimationFrame(e)},[]);let h=()=>{c(!1),o.current=!1};return(0,t.jsx)("div",{ref:i,onMouseMove:e=>{if(!i.current)return;let t=i.current.getBoundingClientRect(),r=t.left+t.width/2,n=t.top+t.height/2;if(a.current={x:e.clientX-r,y:e.clientY-n},o.current){let t=e.clientX-s.current.x,r=e.clientY-s.current.y;s.current={x:e.clientX,y:e.clientY},x(-(.005*r),.005*t)}},onMouseDown:e=>{c(!0),o.current=!0,s.current={x:e.clientX,y:e.clientY}},onMouseUp:h,onMouseLeave:()=>{n.current=!1,e(!1),h()},onMouseEnter:()=>{n.current=!0,e(!0)},onTouchStart:t=>{e(!0),o.current=!0,c(!0),t.touches.length>0&&(s.current={x:t.touches[0].clientX,y:t.touches[0].clientY})},onTouchMove:e=>{if(!i.current||0===e.touches.length)return;let t=i.current.getBoundingClientRect(),r=t.left+t.width/2,n=t.top+t.height/2,l=e.touches[0].clientX,c=e.touches[0].clientY;if(a.current={x:l-r,y:c-n},o.current){let e=l-s.current.x,t=c-s.current.y;s.current={x:l,y:c},x(-(.006*t),.006*e)}},onTouchEnd:()=>{e(!1),h()},onDragStart:e=>e.preventDefault(),style:{position:"relative",width:"320px",height:"320px",cursor:l?"grabbing":"grab",userSelect:"none",touchAction:"none"},children:f.map((e,r)=>(0,t.jsx)("span",{ref:e=>{m.current[r]=e},className:"sphere-tag",style:{position:"absolute",fontSize:"0.72rem",whiteSpace:"nowrap",textTransform:"uppercase",borderRadius:"4px",padding:"0.2rem 0.5rem",transition:"color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, filter 0.3s ease",left:"160px",top:"160px",transform:"translate(-50%, -50%) scale(1)",opacity:0,pointerEvents:"none"},children:e},r))})}function b({activeId:e}){let r=(()=>{switch(e){case 1:return{color:"#ffb400",rgb:"255, 180, 0",label:"CS_FOUNDATION_INDEX"};case 2:return{color:"#ffb400",rgb:"255, 180, 0",label:"COMPILER_SHELL_EXEC"};case 3:return{color:"#58c4dc",rgb:"88, 196, 220",label:"RELATIONAL_DB_SCHEMA"};case 4:return{color:"#fb923c",rgb:"251, 146, 60",label:"MODEL_REGRESSION_PLOT"};case 5:return{color:"#10b981",rgb:"16, 185, 129",label:"ETL_DATA_PIPELINE"};case 6:return{color:"#ffb400",rgb:"255, 180, 0",label:"VECTOR_SIMILARITY_RAG"};case 7:return{color:"#a78bfa",rgb:"167, 139, 250",label:"NEURAL_NET_CAPSTONE"};case 8:return{color:"#ef4444",rgb:"239, 68, 68",label:"RAW_PACKET_DPI_ENGINE"};default:return{color:"#ffb400",rgb:"255, 180, 0",label:"SYSTEM_SCHEMATIC"}}})();return(0,t.jsxs)("div",{className:"hud-visualizer-card animate-on-scroll",style:{borderColor:`rgba(${r.rgb}, 0.12)`,boxShadow:`0 20px 50px rgba(0, 0, 0, 0.4), 0 0 20px rgba(${r.rgb}, 0.03)`},children:[(0,t.jsxs)("div",{className:"hud-visualizer-header",style:{borderBottomColor:`rgba(${r.rgb}, 0.08)`},children:[(0,t.jsxs)("span",{className:"hud-indicator",style:{color:`rgba(${r.rgb}, 0.5)`},children:["// ",r.label]}),(0,t.jsx)("div",{className:"hud-status-dot",style:{backgroundColor:r.color,boxShadow:`0 0 8px ${r.color}`}})]}),(0,t.jsx)("div",{className:"hud-visualizer-body",style:{borderColor:`rgba(${r.rgb}, 0.06)`},children:(()=>{switch(e){case 1:return(0,t.jsxs)("svg",{viewBox:"0 0 200 100",className:"hud-svg",children:[(0,t.jsx)("style",{children:`
              @keyframes scanline {
                0% { transform: translateY(-100px); }
                100% { transform: translateY(100px); }
              }
              .binary-text {
                font-family: var(--font-jetbrains-mono, monospace);
                font-size: 6px;
                fill: rgba(255, 180, 0, 0.45);
              }
            `}),(0,t.jsx)("text",{x:"10",y:"20",className:"binary-text",children:"01010100 01000101"}),(0,t.jsx)("text",{x:"10",y:"35",className:"binary-text",children:"01000011 01001000"}),(0,t.jsx)("text",{x:"10",y:"50",className:"binary-text",children:"01001111 01010010"}),(0,t.jsx)("text",{x:"10",y:"65",className:"binary-text",children:"01000111 01001001"}),(0,t.jsx)("text",{x:"10",y:"80",className:"binary-text",children:"01001110 01010011"}),(0,t.jsx)("rect",{x:"0",y:"0",width:"200",height:"100",fill:"rgba(255,180,0,0.01)"}),(0,t.jsx)("line",{x1:"0",y1:"0",x2:"200",y2:"0",stroke:"rgba(255,180,0,0.3)",strokeWidth:"1",style:{animation:"scanline 3s linear infinite"}})]});case 2:return(0,t.jsxs)("svg",{viewBox:"0 0 200 100",className:"hud-svg",children:[(0,t.jsx)("style",{children:`
              @keyframes blink-cursor {
                0%, 100% { opacity: 0; }
                50% { opacity: 1; }
              }
              .shell-text {
                font-family: var(--font-jetbrains-mono, monospace);
                font-size: 6px;
                fill: #ffffff;
              }
              .prompt-symbol {
                fill: var(--accent-amber, #ffb400);
              }
            `}),(0,t.jsxs)("text",{x:"10",y:"25",className:"shell-text",children:[(0,t.jsx)("tspan",{className:"prompt-symbol",children:"guest@system:~$"})," gcc engine.c -o out"]}),(0,t.jsxs)("text",{x:"10",y:"42",className:"shell-text",children:[(0,t.jsx)("tspan",{className:"prompt-symbol",children:"guest@system:~$"})," ./out"]}),(0,t.jsx)("text",{x:"10",y:"58",className:"shell-text",fill:"var(--accent-amber, #ffb400)",children:">> STACK CORE LOADED"}),(0,t.jsxs)("text",{x:"10",y:"75",className:"shell-text",children:[(0,t.jsx)("tspan",{className:"prompt-symbol",children:"guest@system:~$"})," _"]}),(0,t.jsx)("rect",{x:"73",y:"69",width:"3",height:"6",fill:"#ffb400",style:{animation:"blink-cursor 0.8s infinite"}})]});case 3:return(0,t.jsxs)("svg",{viewBox:"0 0 200 100",className:"hud-svg",children:[(0,t.jsx)("style",{children:`
              @keyframes pulse-node {
                0%, 100% { r: 3px; opacity: 0.4; }
                50% { r: 5px; opacity: 1; }
              }
              @keyframes dash {
                to { stroke-dashoffset: -20; }
              }
            `}),(0,t.jsx)("circle",{cx:"50",cy:"50",r:"4",fill:"#58c4dc",style:{animation:"pulse-node 1.5s infinite"}}),(0,t.jsx)("circle",{cx:"100",cy:"25",r:"4",fill:"#a5f3fc"}),(0,t.jsx)("circle",{cx:"100",cy:"75",r:"4",fill:"#a5f3fc"}),(0,t.jsx)("circle",{cx:"150",cy:"50",r:"4",fill:"#58c4dc",style:{animation:"pulse-node 1.5s infinite 0.75s"}}),(0,t.jsx)("line",{x1:"50",y1:"50",x2:"100",y2:"25",stroke:"rgba(88,196,220,0.3)",strokeWidth:"1",strokeDasharray:"4",style:{animation:"dash 1s linear infinite"}}),(0,t.jsx)("line",{x1:"50",y1:"50",x2:"100",y2:"75",stroke:"rgba(88,196,220,0.3)",strokeWidth:"1",strokeDasharray:"4",style:{animation:"dash 1s linear infinite"}}),(0,t.jsx)("line",{x1:"100",y1:"25",x2:"150",y2:"50",stroke:"rgba(245,245,245,0.2)",strokeWidth:"1"}),(0,t.jsx)("line",{x1:"100",y1:"75",x2:"150",y2:"50",stroke:"rgba(245,245,245,0.2)",strokeWidth:"1"}),(0,t.jsx)("text",{x:"100",y:"16",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"5.5",textAnchor:"middle",children:"CLIENT"}),(0,t.jsx)("text",{x:"100",y:"90",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"5.5",textAnchor:"middle",children:"DATABASE"})]});case 4:return(0,t.jsxs)("svg",{viewBox:"0 0 200 100",className:"hud-svg",children:[(0,t.jsx)("style",{children:`
              @keyframes draw-line {
                to { stroke-dashoffset: 0; }
              }
            `}),(0,t.jsx)("line",{x1:"20",y1:"80",x2:"180",y2:"80",stroke:"rgba(245,245,245,0.1)",strokeWidth:"0.5"}),(0,t.jsx)("line",{x1:"20",y1:"20",x2:"20",y2:"80",stroke:"rgba(245,245,245,0.1)",strokeWidth:"0.5"}),(0,t.jsx)("circle",{cx:"40",cy:"70",r:"2.5",fill:"#fb923c"}),(0,t.jsx)("circle",{cx:"60",cy:"55",r:"2.5",fill:"#fb923c"}),(0,t.jsx)("circle",{cx:"80",cy:"62",r:"2.5",fill:"#fb923c"}),(0,t.jsx)("circle",{cx:"100",cy:"45",r:"2.5",fill:"#fb923c"}),(0,t.jsx)("circle",{cx:"120",cy:"38",r:"2.5",fill:"#fb923c"}),(0,t.jsx)("circle",{cx:"140",cy:"42",r:"2.5",fill:"#fb923c"}),(0,t.jsx)("circle",{cx:"160",cy:"25",r:"2.5",fill:"#fb923c"}),(0,t.jsx)("line",{x1:"30",y1:"75",x2:"170",y2:"22",stroke:"#60a5fa",strokeWidth:"1.5",strokeDasharray:"200",strokeDashoffset:"200",style:{animation:"draw-line 2s cubic-bezier(0.16, 1, 0.3, 1) forwards"}}),(0,t.jsx)("text",{x:"160",y:"75",fill:"rgba(245,245,245,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"5.5",textAnchor:"end",children:"R² = 0.942"})]});case 5:return(0,t.jsxs)("svg",{viewBox:"0 0 200 100",className:"hud-svg",children:[(0,t.jsx)("style",{children:`
              @keyframes etl-flow {
                0% { stroke-dashoffset: 20; }
                100% { stroke-dashoffset: 0; }
              }
            `}),(0,t.jsx)("rect",{x:"25",y:"35",width:"40",height:"30",rx:"3",fill:"none",stroke:"rgba(245,245,245,0.15)"}),(0,t.jsx)("rect",{x:"135",y:"35",width:"40",height:"30",rx:"3",fill:"none",stroke:"rgba(245,245,245,0.15)"}),(0,t.jsx)("path",{d:"M 65 50 L 135 50",stroke:"#10b981",strokeWidth:"1.5",strokeDasharray:"6 4",style:{animation:"etl-flow 0.8s linear infinite"}}),(0,t.jsx)("circle",{cx:"100",cy:"50",r:"6",fill:"#10b981"}),(0,t.jsx)("text",{x:"45",y:"52",fill:"rgba(245,245,245,0.5)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6",textAnchor:"middle",children:"IN"}),(0,t.jsx)("text",{x:"155",y:"52",fill:"rgba(245,245,245,0.5)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6",textAnchor:"middle",children:"OUT"}),(0,t.jsx)("text",{x:"100",y:"24",fill:"#10b981",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"5.5",textAnchor:"middle",children:"FILTER NODE"})]});case 6:return(0,t.jsxs)("svg",{viewBox:"0 0 200 100",className:"hud-svg",children:[(0,t.jsx)("style",{children:`
              @keyframes pulse-ring {
                0% { r: 5px; opacity: 1; }
                100% { r: 25px; opacity: 0; }
              }
            `}),(0,t.jsx)("circle",{cx:"100",cy:"50",r:"3",fill:"#ffb400"}),(0,t.jsx)("circle",{cx:"100",cy:"50",r:"5",fill:"none",stroke:"#ffb400",strokeWidth:"0.75",style:{animation:"pulse-ring 2s cubic-bezier(0.16, 1, 0.3, 1) infinite"}}),(0,t.jsx)("circle",{cx:"85",cy:"40",r:"1.5",fill:"rgba(245,245,245,0.4)"}),(0,t.jsx)("circle",{cx:"118",cy:"62",r:"1.5",fill:"rgba(245,245,245,0.4)"}),(0,t.jsx)("circle",{cx:"112",cy:"38",r:"1.5",fill:"rgba(245,245,245,0.4)"}),(0,t.jsx)("circle",{cx:"92",cy:"65",r:"1.5",fill:"rgba(245,245,245,0.4)"}),(0,t.jsx)("circle",{cx:"70",cy:"55",r:"1.5",fill:"rgba(245,245,245,0.15)"}),(0,t.jsx)("circle",{cx:"130",cy:"45",r:"1.5",fill:"rgba(245,245,245,0.15)"}),(0,t.jsx)("line",{x1:"100",y1:"50",x2:"85",y2:"40",stroke:"rgba(255,180,0,0.3)",strokeWidth:"0.5"}),(0,t.jsx)("line",{x1:"100",y1:"50",x2:"118",y2:"62",stroke:"rgba(255,180,0,0.3)",strokeWidth:"0.5"}),(0,t.jsx)("line",{x1:"100",y1:"50",x2:"112",y2:"38",stroke:"rgba(255,180,0,0.3)",strokeWidth:"0.5"}),(0,t.jsx)("line",{x1:"100",y1:"50",x2:"92",y2:"65",stroke:"rgba(255,180,0,0.3)",strokeWidth:"0.5"}),(0,t.jsx)("text",{x:"100",y:"85",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"5.5",textAnchor:"middle",children:"COSINE SIMILARITY CORE"})]});case 7:return(0,t.jsxs)("svg",{viewBox:"0 0 200 100",className:"hud-svg",children:[(0,t.jsx)("style",{children:`
              @keyframes neuro-pulse {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 0.95; }
              }
            `}),(0,t.jsx)("circle",{cx:"40",cy:"25",r:"3.5",fill:"#f5f5f5"}),(0,t.jsx)("circle",{cx:"40",cy:"50",r:"3.5",fill:"#f5f5f5"}),(0,t.jsx)("circle",{cx:"40",cy:"75",r:"3.5",fill:"#f5f5f5"}),(0,t.jsx)("circle",{cx:"100",cy:"20",r:"3.5",fill:"#c084fc",style:{animation:"neuro-pulse 2s infinite"}}),(0,t.jsx)("circle",{cx:"100",cy:"40",r:"3.5",fill:"#c084fc",style:{animation:"neuro-pulse 2s infinite 0.5s"}}),(0,t.jsx)("circle",{cx:"100",cy:"60",r:"3.5",fill:"#c084fc",style:{animation:"neuro-pulse 2s infinite 1s"}}),(0,t.jsx)("circle",{cx:"100",cy:"80",r:"3.5",fill:"#c084fc",style:{animation:"neuro-pulse 2s infinite 1.5s"}}),(0,t.jsx)("circle",{cx:"160",cy:"50",r:"4.5",fill:"#a78bfa"}),(0,t.jsx)("path",{d:"M 40 25 L 100 20 M 40 25 L 100 40 M 40 50 L 100 40 M 40 50 L 100 60 M 40 75 L 100 60 M 40 75 L 100 80",stroke:"rgba(245,245,245,0.08)",strokeWidth:"0.75"}),(0,t.jsx)("path",{d:"M 100 20 L 160 50 M 100 40 L 160 50 M 100 60 L 160 50 M 100 80 L 160 50",stroke:"rgba(192,132,252,0.15)",strokeWidth:"0.75"}),(0,t.jsx)("text",{x:"160",y:"38",fill:"#a78bfa",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"5.5",textAnchor:"middle",children:"OUTPUT"})]});case 8:return(0,t.jsxs)("svg",{viewBox:"0 0 200 100",className:"hud-svg",children:[(0,t.jsx)("style",{children:`
              @keyframes sniffer-wave {
                0% { stroke-dashoffset: 40; }
                100% { stroke-dashoffset: 0; }
              }
            `}),(0,t.jsx)("path",{d:"M 20 50 Q 40 20, 60 50 T 100 50 T 140 50 T 180 50",fill:"none",stroke:"rgba(239,68,68,0.15)",strokeWidth:"1"}),(0,t.jsx)("path",{d:"M 20 50 Q 40 10, 60 50 T 100 50 T 140 50 T 180 50",fill:"none",stroke:"#ef4444",strokeWidth:"1.5",strokeDasharray:"8 6",style:{animation:"sniffer-wave 1.5s linear infinite"}}),(0,t.jsx)("circle",{cx:"100",cy:"50",r:"4.5",fill:"#ef4444"}),(0,t.jsx)("circle",{cx:"60",cy:"50",r:"3",fill:"#cbd5e1"}),(0,t.jsx)("circle",{cx:"140",cy:"50",r:"3",fill:"#cbd5e1"}),(0,t.jsx)("text",{x:"100",y:"85",fill:"#ef4444",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"5.5",textAnchor:"middle",children:"RAW PACKET STREAM / C INGEST"})]});default:return null}})()})]})}function y(){let[e,i]=(0,r.useState)("2022"),[a,n]=(0,r.useState)(1),[o,s]=(0,r.useState)(1),[l,c]=(0,r.useState)(!1),[d,m]=(0,r.useState)(!1),f=(0,r.useRef)(null);(0,r.useEffect)(()=>{let e=f.current;if(!e)return;let t=new IntersectionObserver(([e])=>{c(e.isIntersecting)},{root:null,rootMargin:"0px",threshold:.05});t.observe(e);let r=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add("in-view")})},{threshold:.1,rootMargin:"-10% 0px"}),a=f.current?.querySelectorAll(".animate-on-scroll");a?.forEach(e=>r.observe(e));let o=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){let t=e.target.getAttribute("data-year"),r=e.target.getAttribute("data-id");if(t&&i(t),r){let e=parseInt(r,10);n(e),s(e)}}})},{root:null,rootMargin:"-10% 0px -20% 0px",threshold:.05}),l=f.current?.querySelectorAll(".timeline-card");return l?.forEach(e=>o.observe(e)),()=>{t.disconnect(),r.disconnect(),o.disconnect()}},[]);let p=(e,t)=>{t.stopPropagation();let r=o===e;s(r?null:e),r||setTimeout(()=>{let t=f.current?.querySelector(`[data-id="${e}"]`);if(t){let e=t.getBoundingClientRect(),r=.25*window.innerHeight,i=window.scrollY+e.top-r;window.scrollTo({top:i,behavior:"smooth"})}},120)};return(0,t.jsxs)("section",{id:"about",ref:f,style:{padding:"8rem 2rem",maxWidth:"1400px",margin:"0 auto",minHeight:"100vh",display:"flex",alignItems:"center",position:"relative"},children:[(0,t.jsxs)("div",{style:{width:"100%"},children:[(0,t.jsx)("div",{className:"animate-on-scroll",style:{fontFamily:'var(--font-jetbrains-mono, "JetBrains Mono", monospace)',fontSize:"0.7rem",letterSpacing:"0.3em",textTransform:"uppercase",color:"var(--accent-amber, #ffb400)",marginBottom:"3rem",opacity:0,transform:"translateY(20px)",transition:"opacity 0.7s cubic-bezier(.65,0,.35,1), transform 0.7s cubic-bezier(.65,0,.35,1)"},children:"01 / Origin"}),(0,t.jsxs)("div",{className:"about-grid",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{style:{marginBottom:"5rem"},children:[(0,t.jsxs)("h2",{className:"animate-on-scroll",style:{fontFamily:'var(--font-bebas-neue, "Bebas Neue", cursive)',fontSize:"clamp(3rem, 6vw, 6rem)",lineHeight:.9,color:"var(--text-color, #f5f5f5)",opacity:0,transform:"translateY(30px)",transition:"opacity 0.8s cubic-bezier(.65,0,.35,1) 0.1s, transform 0.8s cubic-bezier(.65,0,.35,1) 0.1s",marginBottom:"2rem"},children:["BUILDING",(0,t.jsx)("br",{}),(0,t.jsx)("span",{style:{color:"var(--accent-amber, #ffb400)"},children:"THINGS"}),(0,t.jsx)("br",{}),"THAT MATTER."]}),(0,t.jsxs)("div",{className:"animate-on-scroll",style:{opacity:0,transform:"translateY(20px)",transition:"opacity 0.8s cubic-bezier(.65,0,.35,1) 0.2s, transform 0.8s cubic-bezier(.65,0,.35,1) 0.2s"},children:[(0,t.jsx)("p",{style:{fontWeight:300,fontSize:"1.1rem",lineHeight:1.8,color:"var(--text-dim, rgba(245,245,245,0.5))",marginBottom:"1.5rem"},children:"I'm Prathamesh Jadhav — an engineering-focused AI/ML developer specializing in building production-grade vector databases, RAG pipelines, and intelligent API systems."}),(0,t.jsx)("p",{style:{fontWeight:300,fontSize:"1.1rem",lineHeight:1.8,color:"var(--text-dim, rgba(245,245,245,0.5))",marginBottom:"2rem"},children:"From custom HNSW indexing to systems-level multi-threaded network analysis, I focus on building scalable, low-latency architectures that bridge AI research and robust production systems."}),(0,t.jsxs)("div",{className:"about-tech-sphere-container",children:[(0,t.jsx)("div",{className:"sphere-hud-label",children:"// DRAG & ORBIT TECHNICAL CORE"}),(0,t.jsx)("div",{className:"sphere-holo-backdrop",children:(0,t.jsxs)("svg",{viewBox:"0 0 400 400",className:"holo-svg",children:[(0,t.jsx)("circle",{cx:"200",cy:"200",r:"180",stroke:"rgba(255, 180, 0, 0.02)",strokeWidth:"1",fill:"none"}),(0,t.jsx)("circle",{cx:"200",cy:"200",r:"150",stroke:"rgba(255, 180, 0, 0.03)",strokeWidth:"1",strokeDasharray:"6 30",fill:"none",className:"rotate-clockwise",style:{transformOrigin:"200px 200px"}}),(0,t.jsx)("circle",{cx:"200",cy:"200",r:"130",stroke:"rgba(245, 245, 245, 0.02)",strokeWidth:"1",strokeDasharray:"40 120",fill:"none",className:"rotate-counter-clockwise",style:{transformOrigin:"200px 200px"}}),(0,t.jsx)("circle",{cx:"200",cy:"200",r:"100",stroke:"rgba(255, 180, 0, 0.04)",strokeWidth:"0.5",strokeDasharray:"2 6",fill:"none"}),(0,t.jsx)("line",{x1:"200",y1:"10",x2:"200",y2:"390",stroke:"rgba(245, 245, 245, 0.015)",strokeWidth:"0.5"}),(0,t.jsx)("line",{x1:"10",y1:"200",x2:"390",y2:"200",stroke:"rgba(245, 245, 245, 0.015)",strokeWidth:"0.5"}),(0,t.jsx)("path",{d:"M 180 200 A 20 20 0 0 1 220 200",fill:"none",stroke:"rgba(255, 180, 0, 0.15)",strokeWidth:"0.75"}),(0,t.jsx)("path",{d:"M 200 180 A 20 20 0 0 1 200 220",fill:"none",stroke:"rgba(255, 180, 0, 0.15)",strokeWidth:"0.75"}),(0,t.jsx)("line",{x1:"200",y1:"20",x2:"200",y2:"28",stroke:"rgba(255, 180, 0, 0.3)",strokeWidth:"1"}),(0,t.jsx)("line",{x1:"200",y1:"380",x2:"200",y2:"372",stroke:"rgba(255, 180, 0, 0.3)",strokeWidth:"1"}),(0,t.jsx)("line",{x1:"20",y1:"200",x2:"28",y2:"200",stroke:"rgba(255, 180, 0, 0.3)",strokeWidth:"1"}),(0,t.jsx)("line",{x1:"380",y1:"200",x2:"372",y2:"200",stroke:"rgba(255, 180, 0, 0.3)",strokeWidth:"1"}),(0,t.jsx)("text",{x:"210",y:"35",fill:"rgba(255, 180, 0, 0.25)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6",children:"ROTATION: ACTIVE"}),(0,t.jsx)("text",{x:"210",y:"375",fill:"rgba(245, 245, 245, 0.15)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6",children:"LOC: 19.0760° N"})]})}),(0,t.jsx)(g,{onHoverChange:m})]})]})]}),(0,t.jsx)("div",{className:"animate-on-scroll",style:{fontFamily:'var(--font-jetbrains-mono, "JetBrains Mono", monospace)',fontSize:"0.65rem",letterSpacing:"0.2em",color:"rgba(245, 245, 245, 0.3)",textTransform:"uppercase",marginBottom:"2.5rem",opacity:0,transform:"translateY(15px)",transition:"opacity 0.6s ease, transform 0.6s ease"},children:"// Interactive Journey & Milestones (Click Overview to Expand)"}),(0,t.jsx)("div",{className:"timeline-container",children:x.map(e=>{let r=a===e.id,i=o===e.id;return(0,t.jsxs)("div",{"data-year":e.year,"data-id":e.id,className:`timeline-card ${i?"expanded":""} ${r?"active":""}`,onClick:t=>p(e.id,t),children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"mobile-year-badge",children:e.year}),(0,t.jsx)("div",{className:`timeline-dot ${r?"active":""}`}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"baseline",justifyContent:"space-between",gap:"1rem"},children:[(0,t.jsx)("h3",{className:"timeline-card-title",children:e.title}),(0,t.jsxs)("span",{className:"card-index",style:{fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"0.6rem",color:i?"var(--accent-amber, #ffb400)":"rgba(245, 245, 245, 0.2)",transition:"color 0.4s ease"},children:["0",e.id]})]}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"2rem",marginTop:"0.2rem"},children:[(0,t.jsx)("p",{className:"timeline-card-teaser",style:{fontFamily:"var(--font-inter, sans-serif)",fontWeight:300,fontSize:"0.9rem",color:r?"rgba(245, 245, 245, 0.75)":"rgba(245, 245, 245, 0.35)",transition:"color 0.4s ease",margin:0,flex:1},children:e.teaser}),(0,t.jsx)("button",{onClick:t=>p(e.id,t),className:"expand-trigger-btn",style:{background:"none",color:i?"var(--accent-amber, #ffb400)":"rgba(245, 245, 245, 0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"0.6rem",letterSpacing:"0.1em",cursor:"pointer",padding:"0.35rem 0.75rem",border:i?"1px solid rgba(255, 180, 0, 0.25)":"1px solid rgba(245, 245, 245, 0.1)",borderRadius:"4px",textTransform:"uppercase",transition:"all 0.3s ease",flexShrink:0},children:i?"[ - CLOSE ]":"[ + OVERVIEW ]"})]})]}),(0,t.jsx)("div",{className:"timeline-card-expandable-panel",children:(0,t.jsxs)("div",{style:{paddingTop:"1.2rem",borderTop:"1px solid rgba(245,245,245,0.04)",marginTop:"1.2rem"},children:[(0,t.jsx)("p",{className:"timeline-card-desc",children:e.description}),(0,t.jsx)(h,{id:e.id}),e.details&&(0,t.jsx)("p",{className:"timeline-card-details",children:e.details}),(0,t.jsx)("div",{style:{display:"flex",gap:"0.4rem",flexWrap:"wrap",marginTop:"1rem"},children:e.technologies.map(e=>(0,t.jsx)("span",{style:{fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"0.55rem",color:"rgba(245, 245, 245, 0.5)",background:"rgba(245, 245, 245, 0.03)",border:"1px solid rgba(245, 245, 245, 0.08)",padding:"0.2rem 0.5rem",borderRadius:"3px",textTransform:"uppercase"},children:e},e))})]})})]},e.id)})})]}),(0,t.jsx)("div",{className:"sticky-year-container",children:(0,t.jsxs)("div",{className:"sticky-year-content",children:[(0,t.jsx)("span",{className:"sticky-year-label",children:"YEAR"}),(0,t.jsx)("div",{className:"timeline-year-display",children:e},e),(0,t.jsx)(b,{activeId:a}),(0,t.jsxs)("div",{className:"sticky-year-details",children:[(0,t.jsx)("span",{children:"// 19.0760° N, 72.8777° E"}),(0,t.jsx)("span",{children:"// CORE_SYSTEM_INDEXING: ACTIVE"}),(0,t.jsx)("span",{children:"// INDEX: HNSW_INDEX_FOUND"})]})]})})]})]}),(0,t.jsx)("style",{children:`
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

        .sphere-holo-backdrop {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 320px;
          height: 320px;
          pointer-events: none;
          z-index: 0;
          opacity: 0.7;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .holo-svg {
          width: 100%;
          height: 100%;
        }

        @keyframes cwSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ccwSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .rotate-clockwise {
          animation: cwSpin 30s linear infinite;
        }
        .rotate-counter-clockwise {
          animation: ccwSpin 20s linear infinite;
        }

        /* High-tech sci-fi corner brackets for expanded cards */
        .timeline-card.expanded::before,
        .timeline-card.expanded::after {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          border-color: rgba(245, 245, 245, 0.2);
          border-style: solid;
          pointer-events: none;
          transition: border-color 0.4s ease;
        }
        .timeline-card.expanded::before {
          top: 8px;
          left: 8px;
          border-width: 1px 0 0 1px;
        }
        .timeline-card.expanded::after {
          bottom: 8px;
          right: 8px;
          border-width: 0 1px 1px 0;
        }
        .timeline-card.active.expanded::before,
        .timeline-card.active.expanded::after {
          border-color: var(--accent-amber, #ffb400);
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
          display: grid;
          grid-template-rows: auto 0fr;
          overflow: hidden;
          transition: 
            grid-template-rows 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            background-color 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            border-color 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .timeline-card.expanded {
          opacity: 1;
          transform: scale(1);
          grid-template-rows: auto 1fr;
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

        /* Inner Expandable Panel Transition */
        .timeline-card-expandable-panel {
          min-height: 0;
          overflow: hidden;
          opacity: 0;
          transform: scale(0.96) translateY(5px);
          transition: 
            opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: center top;
        }

        .timeline-card.expanded .timeline-card-expandable-panel {
          opacity: 1;
          transform: scale(1) translateY(0);
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

        .hud-visualizer-card {
          margin-top: 2rem;
          width: 280px;
          background: rgba(245, 245, 245, 0.015);
          border: 1px solid rgba(245, 245, 245, 0.04);
          border-radius: 6px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.02);
          transform: translateX(-15px);
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }

        .hud-visualizer-card:hover {
          border-color: rgba(255, 180, 0, 0.15);
          box-shadow: 0 25px 60px rgba(255, 180, 0, 0.02), 0 20px 50px rgba(0, 0, 0, 0.4);
        }

        .hud-visualizer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(245, 245, 245, 0.05);
          padding-bottom: 0.5rem;
        }

        .hud-indicator {
          font-family: var(--font-jetbrains-mono, monospace);
          font-size: 0.55rem;
          letter-spacing: 0.1em;
          color: rgba(245, 245, 245, 0.3);
          text-transform: uppercase;
        }

        .hud-status-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #00ff66;
          box-shadow: 0 0 8px #00ff66;
          animation: pulse-dot 1s infinite alternate;
        }

        @keyframes pulse-dot {
          from { opacity: 0.4; }
          to { opacity: 1; }
        }

        .hud-visualizer-body {
          width: 100%;
          height: 120px;
          background: #070707;
          border: 1px solid rgba(245, 245, 245, 0.02);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hud-svg {
          width: 100%;
          height: 100%;
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
      `})]})}let u=[{id:"01",title:"NUROSEARCH",year:"2026",tags:["AI/ML","Vector DB","RAG"],description:"Custom vector database from scratch implementing HNSW indexing and a full-stack RAG pipeline."},{id:"02",title:"DPI ENGINE",year:"2026",tags:["Systems","Python","Networking"],description:"Multi-threaded deep packet inspection engine analyzing 500+ packets/sec with TLS SNI extraction."},{id:"03",title:"KOZUMIHUB",year:"2026",tags:["TypeScript","Next.js","Web App"],description:"Entertainment discovery platform for anime and movies featuring smart discovery and immersive UI."},{id:"04",title:"SPENDSTRACK",year:"2026",tags:["Finance","TypeScript","Dashboard"],description:"Personal wealth tracking application with dynamic visualization and category analytics."},{id:"05",title:"CODE CHATBOT",year:"2025",tags:["AI","Python","LLM"],description:"Automated AI assistant built to review pull requests and provide constructive feedback on code structure."}],j={"01":{role:"Lead AI Systems Architect",challenges:["Standard high-dimensional vector lookups scale at O(N) linear time, causing massive latency bottlenecks for production RAG systems.","Ensuring thread safety and low latency during concurrent index builds and query phases."],solutions:["Implemented a Hierarchical Navigable Small World (HNSW) vector index from scratch, bringing search complexity down to O(log N).","Designed dynamic thread-safe insertion rules using custom locking nodes and pointer synchronization.","Built a complete chunk-level semantic cache in FastAPI integrated with OpenAI embeddings."],metrics:["Reduced average query retrieval latency to <15ms on 100,000+ vector nodes.","Achieved a 35% memory footprint reduction through scalar quantization codecs."],technologies:["Python","Rust","FastAPI","NumPy","OpenAI API","HNSW Indexing"],githubUrl:"https://github.com/Prathamesh-Jadhav04/NuroSearch"},"02":{role:"Backend & Networking Systems Engineer",challenges:["Extracting TLS Server Name Indication (SNI) hostnames in real-time under high-throughput network loads without packets dropping.","Developing thread-safe logging pipes to prevent memory leak build-ups during continuous stream capture."],solutions:["Developed a multi-threaded C/Python ingestion listener wrapping libpcap for zero packet drop.","Designed a synchronized circular queue isolating raw packet ingestion from header parsing buffers.","Engineered an SNI extraction filter isolating client hello packets."],metrics:["Successfully sustained analysis rates of 500+ packets/sec with 0% packet loss.","Decrypted, mapped, and structured SNI metadata logs instantly into audit database indices."],technologies:["Python","C Language","Scapy","Network Protocols","Multithreading","pcap"],githubUrl:"https://github.com/Prathamesh-Jadhav04/DPI-Engine"},"03":{role:"Full-Stack Developer",challenges:["Managing API rate limit bottlenecks and aggregation delays across separate third-party catalogues (Jikan, TMDB).","Minimizing frontend layout cumulative shifts while dynamically rendering card images."],solutions:["Developed a unified Next.js API route acting as an orchestrator with internal redis cache mapping.","Crafted custom fluid CSS grids layout utilizing relative skeleton placeholder layers.","Configured static asset prefetching rules inside Next.js middleware layers."],metrics:["Achieved dynamic gallery page rendering times of <200ms.","Secured zero Cumulative Layout Shift (CLS) scores during rapid page-page jumps."],technologies:["Next.js","TypeScript","TailwindCSS","Framer Motion","REST APIs","Node.js"],githubUrl:"https://github.com/Prathamesh-Jadhav04/KozumiHub"},"04":{role:"Frontend & Analytics Developer",challenges:["Creating responsive financial tracking graphs that render dynamically without crashing on mobile devices.","Ensuring secure offline database capability with smooth transaction synchronization."],solutions:["Implemented Chart.js layout wrappers optimized for aspect-ratio responsive scale changes.","Designed transactional state engines syncing automatically to structured local storage stores.","Engineered dynamic category filtering rules for instantaneous chart redraw triggers."],metrics:["Instantly updates interactive graphs with zero animation lags.","Supports complete offline capability with zero transaction sync conflicts."],technologies:["Next.js","TypeScript","Chart.js","LocalStorage API","CSS Grid","TailwindCSS"],githubUrl:"https://github.com/Prathamesh-Jadhav04/SpendsTrack"},"05":{role:"DevOps & AI Integration Engineer",challenges:["LLM context limits require chunking diffs while retaining context of pull request logic flow.","Interfacing secure webhook servers that respond instantly and prevent PR review duplicate triggers."],solutions:["Engineered an intelligent AST diff chunker feeding filtered context trees into LLM prompts.","Constructed a reliable FastAPI hook server with internal checksum ID deduplication logic.","Integrated LangChain prompt logic mapped dynamically to GitHub API comment lines."],metrics:["Reviews and comments on pull requests in <8 seconds from commit push.","Achieved 85% satisfaction rating from developers using the automated reviews."],technologies:["Python","FastAPI","LangChain","LLM APIs","GitHub Webhooks","CI/CD Pipelines"],githubUrl:"https://github.com/Prathamesh-Jadhav04/Code-Review-Chatbot"}};function v({id:e}){let[i,a]=(0,r.useState)({x:200,y:140}),[n,o]=(0,r.useState)([]),[s,l]=(0,r.useState)(["// LISTENER ONLINE: READY ON ETH0","// WAITING FOR WEB REQUESTS..."]);(0,r.useEffect)(()=>{if(0===n.length)return;let e=setInterval(()=>{o(e=>e.map(e=>{let t=e.progress+3;return t>=15&&e.progress<15?l(e=>["[INGEST] size: 1024B -> Queuing Frame",e[0]].slice(0,2)):t>=55&&e.progress<55?l(e=>["[QUEUE] Parsing SNI Header (Proto: TLS)",e[0]].slice(0,2)):t>=90&&e.progress<90&&l(t=>[`[DPI] HOST: ${e.domain||"192.168.1.100"} | Port: 443`,t[0]].slice(0,2)),{...e,progress:t}}).filter(e=>e.progress<100))},40);return()=>clearInterval(e)},[n.length]);let[c,d]=(0,r.useState)(null),[m,x]=(0,r.useState)("BALANCE"),[h,f]=(0,r.useState)(!1),[p,g]=(0,r.useState)(0),[b,y]=(0,r.useState)(["// GIT HOOK LISTENER ACTIVE","// WAITING FOR COMMIT PUSH..."]);if((0,r.useEffect)(()=>{if(!h)return;let e=setInterval(()=>{g(t=>{let r=t+5;if(r>=20&&t<20)y(e=>["[GIT] Webhook captured. Extracting branch diffs...",e[0]].slice(0,2));else if(r>=60&&t<60)y(e=>["[LLM] AST Code Analysis in progress...",e[0]].slice(0,2));else if(r>=100)return y(e=>['[BOT] Commented on PR: "Optimize mutex lock in DPI engine"',e[0]].slice(0,2)),clearInterval(e),100;return r})},80);return()=>clearInterval(e)},[h]),"01"===e){let e=[{id:1,x:60,y:140,label:"G1"},{id:2,x:150,y:140,label:"G2"},{id:3,x:250,y:140,label:"G3"},{id:4,x:340,y:140,label:"G4"}],r=[{id:1,x:70,y:90,label:"H1"},{id:2,x:200,y:90,label:"H2"},{id:3,x:330,y:90,label:"H3"}],n=[{id:1,x:100,y:40,label:"E1"},{id:2,x:300,y:40,label:"E2"}],o=0;if(i){let t=1/0;e.forEach((e,r)=>{let a=Math.abs(e.x-i.x);a<t&&(t=a,o=r)})}let s=0;i&&(s=0===o?0:1===o?Math.abs(r[0].x-i.x)<Math.abs(r[1].x-i.x)?0:1:2===o&&Math.abs(r[1].x-i.x)<Math.abs(r[2].x-i.x)?1:2);let l=0;i&&(l=0===s||1===s&&Math.abs(n[0].x-i.x)<Math.abs(n[1].x-i.x)?0:1);let c=e[o],d=r[s],m=n[l],x=i?Math.sqrt(Math.pow(c.x-i.x,2)+Math.pow(c.y-i.y,2)):0,h=i?Math.max(.45,.999-x/300*.5):.984;return(0,t.jsxs)("svg",{width:"100%",height:"180",viewBox:"0 0 400 180",onMouseMove:e=>{let t=e.currentTarget.getBoundingClientRect();a({x:(e.clientX-t.left)/t.width*400,y:(e.clientY-t.top)/t.height*180})},onMouseLeave:()=>a({x:200,y:140}),style:{background:"#090909",border:"1px solid rgba(255,180,0,0.15)",borderRadius:"6px",margin:"1.5rem 0",cursor:"crosshair",boxShadow:"0 10px 30px rgba(0,0,0,0.5)"},children:[(0,t.jsx)("style",{children:`
          @keyframes glowPulse {
            0%, 100% { filter: drop-shadow(0 0 2px rgba(255,180,0,0.4)); opacity: 0.8; }
            50% { filter: drop-shadow(0 0 10px rgba(255,180,0,0.9)); opacity: 1; }
          }
          .active-node-glow { animation: glowPulse 2s infinite ease-in-out; }
        `}),(0,t.jsxs)("g",{stroke:"rgba(255,180,0,0.03)",strokeWidth:"0.5",children:[(0,t.jsx)("line",{x1:"0",y1:"20",x2:"400",y2:"20"}),(0,t.jsx)("line",{x1:"0",y1:"40",x2:"400",y2:"40"}),(0,t.jsx)("line",{x1:"0",y1:"65",x2:"400",y2:"65"}),(0,t.jsx)("line",{x1:"0",y1:"90",x2:"400",y2:"90"}),(0,t.jsx)("line",{x1:"0",y1:"115",x2:"400",y2:"115"}),(0,t.jsx)("line",{x1:"0",y1:"140",x2:"400",y2:"140"}),(0,t.jsx)("line",{x1:"50",y1:"0",x2:"50",y2:"180"}),(0,t.jsx)("line",{x1:"100",y1:"0",x2:"100",y2:"180"}),(0,t.jsx)("line",{x1:"150",y1:"0",x2:"150",y2:"180"}),(0,t.jsx)("line",{x1:"200",y1:"0",x2:"200",y2:"180"}),(0,t.jsx)("line",{x1:"250",y1:"0",x2:"250",y2:"180"}),(0,t.jsx)("line",{x1:"300",y1:"0",x2:"300",y2:"180"}),(0,t.jsx)("line",{x1:"350",y1:"0",x2:"350",y2:"180"})]}),(0,t.jsx)("text",{x:"390",y:"43",fill:"rgba(255,180,0,0.15)",fontFamily:"monospace",fontSize:"5.5",textAnchor:"end",children:"LAYER_2 (COARSE)"}),(0,t.jsx)("text",{x:"390",y:"93",fill:"rgba(255,180,0,0.15)",fontFamily:"monospace",fontSize:"5.5",textAnchor:"end",children:"LAYER_1 (INTER)"}),(0,t.jsx)("text",{x:"390",y:"143",fill:"rgba(255,180,0,0.15)",fontFamily:"monospace",fontSize:"5.5",textAnchor:"end",children:"LAYER_0 (FINE)"}),(0,t.jsxs)("g",{stroke:"rgba(245, 245, 245, 0.05)",strokeWidth:"1",children:[(0,t.jsx)("line",{x1:"100",y1:"40",x2:"70",y2:"90"}),(0,t.jsx)("line",{x1:"100",y1:"40",x2:"200",y2:"90"}),(0,t.jsx)("line",{x1:"300",y1:"40",x2:"200",y2:"90"}),(0,t.jsx)("line",{x1:"300",y1:"40",x2:"330",y2:"90"}),(0,t.jsx)("line",{x1:"70",y1:"90",x2:"50",y2:"140"}),(0,t.jsx)("line",{x1:"70",y1:"90",x2:"150",y2:"140"}),(0,t.jsx)("line",{x1:"200",y1:"90",x2:"150",y2:"140"}),(0,t.jsx)("line",{x1:"200",y1:"90",x2:"250",y2:"140"}),(0,t.jsx)("line",{x1:"330",y1:"90",x2:"250",y2:"140"}),(0,t.jsx)("line",{x1:"330",y1:"90",x2:"350",y2:"140"}),(0,t.jsx)("line",{x1:"100",y1:"40",x2:"300",y2:"40",strokeDasharray:"4"}),(0,t.jsx)("line",{x1:"70",y1:"90",x2:"200",y2:"90",strokeDasharray:"4"}),(0,t.jsx)("line",{x1:"200",y1:"90",x2:"330",y2:"90",strokeDasharray:"4"})]}),i&&(0,t.jsxs)("g",{stroke:"var(--accent-amber, #ffb400)",strokeWidth:"1.5",fill:"none",children:[(0,t.jsx)("line",{x1:m.x,y1:m.y,x2:d.x,y2:d.y,style:{filter:"drop-shadow(0 0 4px rgba(255,180,0,0.6))"}}),(0,t.jsx)("line",{x1:d.x,y1:d.y,x2:c.x,y2:c.y,style:{filter:"drop-shadow(0 0 4px rgba(255,180,0,0.6))"}})]}),(0,t.jsx)("circle",{cx:"100",cy:"40",r:"7",fill:"E1"===m.label?"var(--accent-amber, #ffb400)":"#181818",stroke:"E1"===m.label?"#ffb400":"rgba(255,255,255,0.1)",strokeWidth:"1",className:"E1"===m.label?"active-node-glow":""}),(0,t.jsx)("circle",{cx:"300",cy:"40",r:"7",fill:"E2"===m.label?"var(--accent-amber, #ffb400)":"#181818",stroke:"E2"===m.label?"#ffb400":"rgba(255,255,255,0.1)",strokeWidth:"1",className:"E2"===m.label?"active-node-glow":""}),(0,t.jsx)("circle",{cx:"70",cy:"90",r:"6",fill:"H1"===d.label?"var(--accent-amber, #ffb400)":"#181818",stroke:"H1"===d.label?"#ffb400":"rgba(255,255,255,0.1)",strokeWidth:"1",className:"H1"===d.label?"active-node-glow":""}),(0,t.jsx)("circle",{cx:"200",cy:"90",r:"6",fill:"H2"===d.label?"var(--accent-amber, #ffb400)":"#181818",stroke:"H2"===d.label?"#ffb400":"rgba(255,255,255,0.1)",strokeWidth:"1",className:"H2"===d.label?"active-node-glow":""}),(0,t.jsx)("circle",{cx:"330",cy:"90",r:"6",fill:"H3"===d.label?"var(--accent-amber, #ffb400)":"#181818",stroke:"H3"===d.label?"#ffb400":"rgba(255,255,255,0.1)",strokeWidth:"1",className:"H3"===d.label?"active-node-glow":""}),(0,t.jsx)("circle",{cx:"50",cy:"140",r:"5",fill:1===c.id?"var(--accent-amber, #ffb400)":"#181818",stroke:1===c.id?"#ffb400":"rgba(255,255,255,0.1)",strokeWidth:"1",className:1===c.id?"active-node-glow":""}),(0,t.jsx)("circle",{cx:"150",cy:"140",r:"5",fill:2===c.id?"var(--accent-amber, #ffb400)":"#181818",stroke:2===c.id?"#ffb400":"rgba(255,255,255,0.1)",strokeWidth:"1",className:2===c.id?"active-node-glow":""}),(0,t.jsx)("circle",{cx:"250",cy:"140",r:"5",fill:3===c.id?"var(--accent-amber, #ffb400)":"#181818",stroke:3===c.id?"#ffb400":"rgba(255,255,255,0.1)",strokeWidth:"1",className:3===c.id?"active-node-glow":""}),(0,t.jsx)("circle",{cx:"350",cy:"140",r:"5",fill:4===c.id?"var(--accent-amber, #ffb400)":"#181818",stroke:4===c.id?"#ffb400":"rgba(255,255,255,0.1)",strokeWidth:"1",className:4===c.id?"active-node-glow":""}),i&&(0,t.jsxs)("g",{children:[(0,t.jsx)("line",{x1:i.x,y1:"0",x2:i.x,y2:"180",stroke:"rgba(255,180,0,0.18)",strokeWidth:"0.75",strokeDasharray:"3 3"}),(0,t.jsx)("line",{x1:"0",y1:i.y,x2:"400",y2:i.y,stroke:"rgba(255,180,0,0.18)",strokeWidth:"0.75",strokeDasharray:"3 3"}),(0,t.jsx)("circle",{cx:i.x,cy:i.y,r:"3",fill:"#ffffff",style:{filter:"drop-shadow(0 0 5px #fff)"}})]}),(0,t.jsx)("text",{x:"15",y:"22",fill:"rgba(255,180,0,0.45)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",letterSpacing:"0.05em",children:"HNSW INDEX TRAVERSAL CONSOLE [MOVE CURSOR]"}),(0,t.jsx)("text",{x:"385",y:"22",fill:"rgba(245,245,245,0.2)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",textAnchor:"end",children:"NURO_INDEX: ACTIVE"}),(0,t.jsx)("rect",{x:"0",y:"160",width:"400",height:"20",fill:"#050505",opacity:"0.95"}),(0,t.jsx)("line",{x1:"0",y1:"160",x2:"400",y2:"160",stroke:"rgba(255,255,255,0.05)"}),i?(0,t.jsxs)("text",{x:"15",y:"173",fill:"var(--accent-amber, #ffb400)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:["SEARCH_VEC: [",Math.round(i.x),", ",Math.round(i.y),"] // PATH: ",m.label," ➔ ",d.label," ➔ ",c.label," // SIMILARITY: ",h.toFixed(4)]}):(0,t.jsx)("text",{x:"15",y:"173",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"HOVER GRAPH TO RUN NEAREST-NEIGHBOR HNSW INDEXING"})]})}return"02"===e?(0,t.jsxs)("svg",{width:"100%",height:"180",viewBox:"0 0 400 180",style:{background:"#090909",border:"1px solid rgba(239,68,68,0.15)",borderRadius:"6px",margin:"1.5rem 0",overflow:"hidden"},children:[(0,t.jsx)("style",{children:`
          @keyframes pulseDpiNode { 0%, 100% { fill: rgba(239,68,68,0.08); stroke: rgba(239,68,68,0.3); } 50% { fill: rgba(239,68,68,0.2); stroke: rgba(239,68,68,0.85); } }
          @keyframes packetDash { to { stroke-dashoffset: -20; } }
          .queue-node { animation: pulseDpiNode 2s infinite ease-in-out; }
          .dpi-stream-dash { stroke-dasharray: 6 3; animation: packetDash 0.8s linear infinite; }
        `}),(0,t.jsxs)("g",{stroke:"rgba(239,68,68,0.02)",strokeWidth:"0.5",children:[(0,t.jsx)("line",{x1:"0",y1:"40",x2:"400",y2:"40"}),(0,t.jsx)("line",{x1:"0",y1:"80",x2:"400",y2:"80"}),(0,t.jsx)("line",{x1:"0",y1:"120",x2:"400",y2:"120"}),(0,t.jsx)("line",{x1:"100",y1:"0",x2:"100",y2:"180"}),(0,t.jsx)("line",{x1:"200",y1:"0",x2:"200",y2:"180"}),(0,t.jsx)("line",{x1:"300",y1:"0",x2:"300",y2:"180"})]}),(0,t.jsxs)("g",{stroke:"rgba(239,68,68,0.2)",strokeWidth:"1",fill:"rgba(239,68,68,0.01)",children:[(0,t.jsx)("rect",{x:"25",y:"45",width:"70",height:"35",rx:"3"}),(0,t.jsx)("rect",{x:"155",y:"45",width:"90",height:"35",rx:"3",className:"queue-node"}),(0,t.jsx)("rect",{x:"305",y:"45",width:"70",height:"35",rx:"3"})]}),(0,t.jsx)("path",{d:"M 95 62 L 155 62",stroke:"#ef4444",strokeWidth:"1.5",className:"dpi-stream-dash"}),(0,t.jsx)("path",{d:"M 245 62 L 305 62",stroke:"#ef4444",strokeWidth:"1.5",className:"dpi-stream-dash"}),(0,t.jsx)("text",{x:"60",y:"66",fill:"#f5f5f5",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8.5",fontWeight:"bold",textAnchor:"middle",children:"LIBPCAP"}),(0,t.jsx)("text",{x:"200",y:"66",fill:"#ef4444",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"RING_BUFFER"}),(0,t.jsx)("text",{x:"340",y:"66",fill:"#f5f5f5",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8.5",fontWeight:"bold",textAnchor:"middle",children:"TLS_SNI"}),n.map(e=>{let r=60;return r=e.progress<50?60+e.progress/50*95:155+(e.progress-50)/50*150,(0,t.jsx)("circle",{cx:r,cy:"62",r:"4.5",fill:"TLS"===e.type?"#ef4444":"#f5f5f5",style:{filter:"drop-shadow(0 0 4px #ef4444)"}},e.id)}),(0,t.jsxs)("g",{onClick:e=>{e.stopPropagation();let t=["github.com","google.com","openai.com","spotify.com"],r=["TLS","TCP","UDP"],i=r[Math.floor(Math.random()*r.length)],a="TLS"===i?t[Math.floor(Math.random()*t.length)]:"";o(e=>[...e,{id:Date.now(),progress:0,type:i,domain:a}])},style:{cursor:"pointer"},children:[(0,t.jsx)("rect",{x:"140",y:"98",width:"120",height:"22",rx:"3",fill:"#111",stroke:"#ef4444",strokeWidth:"1"}),(0,t.jsx)("text",{x:"200",y:"112",fill:"#ef4444",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"[ INJECT PACKET ]"})]}),(0,t.jsx)("rect",{x:"25",y:"132",width:"350",height:"36",fill:"#050505",stroke:"rgba(239,68,68,0.06)",rx:"2"}),(0,t.jsx)("text",{x:"35",y:"144",fill:"rgba(245,245,245,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:s[1]}),(0,t.jsx)("text",{x:"35",y:"157",fill:"#ef4444",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",fontWeight:"bold",children:s[0]}),(0,t.jsx)("text",{x:"15",y:"22",fill:"rgba(239,68,68,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",children:"DPI PACKET PARSING CORE [CLICK INJECT]"}),(0,t.jsx)("text",{x:"385",y:"22",fill:"rgba(245,245,245,0.25)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",textAnchor:"end",children:"CAPTURING"})]}):"03"===e?(0,t.jsxs)("svg",{width:"100%",height:"180",viewBox:"0 0 400 180",style:{background:"#090909",border:"1px solid rgba(88,196,220,0.15)",borderRadius:"6px",margin:"1.5rem 0",overflow:"hidden"},children:[(0,t.jsx)("style",{children:`
          @keyframes glowCyanCard {
            0%, 100% { filter: drop-shadow(0 0 2px rgba(88,196,220,0.2)); }
            50% { filter: drop-shadow(0 0 10px rgba(88,196,220,0.6)); }
          }
          .cyan-card-glow { animation: glowCyanCard 2s infinite ease-in-out; }
        `}),(0,t.jsx)("rect",{x:"20",y:"35",width:"360",height:"18",rx:"2",fill:"#111",stroke:"rgba(88,196,220,0.1)"}),(0,t.jsxs)("text",{x:"32",y:"46",fill:c?"#58c4dc":"rgba(245,245,245,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7.5",style:{transition:"color 0.3s ease",fontWeight:c?"bold":"normal"},children:["left"===c&&'MATCH: "SPIDERMAN: INTO THE MULTIVERSE" (REDIS_CACHE)',"middle"===c&&'MATCH: "ATTACK ON TITAN: SEASON 4" (JIKAN_API_FETCH)',"right"===c&&'MATCH: "THE DARK KNIGHT" (TMDB_V3_DB)',!c&&"HOVER DISCOVERY CARDS FOR MEDIA GRAPH FETCH..."]}),(0,t.jsxs)("g",{style:{cursor:"pointer"},children:[(0,t.jsxs)("g",{onMouseEnter:()=>d("left"),onMouseLeave:()=>d(null),children:[(0,t.jsx)("rect",{x:"20",y:"62",width:"105",height:"85",rx:"4",fill:"left"===c?"rgba(88,196,220,0.03)":"#111",stroke:"left"===c?"#58c4dc":"rgba(245,245,245,0.06)",strokeWidth:"1",style:{transition:"all 0.3s ease"},className:"left"===c?"cyan-card-glow":""}),(0,t.jsx)("rect",{x:"35",y:"75",width:"75",height:"40",fill:"none",stroke:"left"===c?"rgba(88,196,220,0.3)":"rgba(245,245,245,0.08)",strokeWidth:"1"}),(0,t.jsx)("polygon",{points:"67,88 67,102 79,95",fill:"left"===c?"#58c4dc":"rgba(245,245,245,0.2)",style:{transition:"fill 0.3s ease"}}),(0,t.jsx)("text",{x:"72",y:"132",fill:"left"===c?"#58c4dc":"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",textAnchor:"middle",style:{transition:"color 0.3s ease"},children:"01 / SCI-FI"})]}),(0,t.jsxs)("g",{onMouseEnter:()=>d("middle"),onMouseLeave:()=>d(null),children:[(0,t.jsx)("rect",{x:"147",y:"62",width:"105",height:"85",rx:"4",fill:"middle"===c?"rgba(88,196,220,0.03)":"#111",stroke:"middle"===c?"#58c4dc":"rgba(245,245,245,0.06)",strokeWidth:"1",style:{transition:"all 0.3s ease"},className:"middle"===c?"cyan-card-glow":""}),(0,t.jsx)("rect",{x:"162",y:"75",width:"75",height:"40",fill:"none",stroke:"middle"===c?"rgba(88,196,220,0.3)":"rgba(245,245,245,0.08)",strokeWidth:"1"}),(0,t.jsx)("polygon",{points:"194,88 194,102 206,95",fill:"middle"===c?"#58c4dc":"rgba(245,245,245,0.2)",style:{transition:"fill 0.3s ease"}}),(0,t.jsx)("text",{x:"200",y:"132",fill:"middle"===c?"#58c4dc":"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",textAnchor:"middle",style:{transition:"color 0.3s ease"},children:"02 / ANIME"})]}),(0,t.jsxs)("g",{onMouseEnter:()=>d("right"),onMouseLeave:()=>d(null),children:[(0,t.jsx)("rect",{x:"275",y:"62",width:"105",height:"85",rx:"4",fill:"right"===c?"rgba(88,196,220,0.03)":"#111",stroke:"right"===c?"#58c4dc":"rgba(245,245,245,0.06)",strokeWidth:"1",style:{transition:"all 0.3s ease"},className:"right"===c?"cyan-card-glow":""}),(0,t.jsx)("rect",{x:"290",y:"75",width:"75",height:"40",fill:"none",stroke:"right"===c?"rgba(88,196,220,0.3)":"rgba(245,245,245,0.08)",strokeWidth:"1"}),(0,t.jsx)("polygon",{points:"322,88 322,102 334,95",fill:"right"===c?"#58c4dc":"rgba(245,245,245,0.2)",style:{transition:"fill 0.3s ease"}}),(0,t.jsx)("text",{x:"327",y:"132",fill:"right"===c?"#58c4dc":"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",textAnchor:"middle",style:{transition:"color 0.3s ease"},children:"03 / ACTION"})]})]}),(0,t.jsx)("rect",{x:"0",y:"160",width:"400",height:"20",fill:"#050505"}),(0,t.jsx)("line",{x1:"0",y1:"160",x2:"400",y2:"160",stroke:"rgba(255,255,255,0.05)"}),(0,t.jsxs)("text",{x:"15",y:"173",fill:c?"#58c4dc":"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:["left"===c&&"API_DISCOVERY: REDIS_CACHE HIT // LATENCY: 3ms // STATS: CACHE_HEALTH_100%","middle"===c&&"API_DISCOVERY: JIKAN_V4 ROUTE // LATENCY: 220ms // REST_PAYLOAD: 42KB","right"===c&&"API_DISCOVERY: TMDB_V3 ROUTE // LATENCY: 140ms // MATCH_CONFIDENCE: 98%",!c&&"DISCOVERY_ROUTING: SERVICE LISTENING // REDIS KEY_SPACER: STANDBY"]}),(0,t.jsx)("text",{x:"15",y:"22",fill:"rgba(88,196,220,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",children:"IMMERSIVE MEDIA CATALOG GATEWAY [HOVER CARDS]"})]}):"04"===e?(0,t.jsxs)("svg",{width:"100%",height:"180",viewBox:"0 0 400 180",style:{background:"#090909",border:"1px solid rgba(16,185,129,0.15)",borderRadius:"6px",margin:"1.5rem 0",overflow:"hidden"},children:[(0,t.jsx)("style",{children:`
          @keyframes chartPulse { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.35; } }
          .chart-area { animation: chartPulse 3s infinite ease-in-out; }
        `}),(0,t.jsxs)("g",{stroke:"rgba(16,185,129,0.02)",strokeWidth:"0.5",children:[(0,t.jsx)("line",{x1:"40",y1:"40",x2:"360",y2:"40"}),(0,t.jsx)("line",{x1:"40",y1:"80",x2:"360",y2:"80"}),(0,t.jsx)("line",{x1:"40",y1:"120",x2:"360",y2:"120"}),(0,t.jsx)("line",{x1:"120",y1:"20",x2:"120",y2:"140"}),(0,t.jsx)("line",{x1:"200",y1:"20",x2:"200",y2:"140"}),(0,t.jsx)("line",{x1:"280",y1:"20",x2:"280",y2:"140"})]}),(0,t.jsx)("line",{x1:"40",y1:"20",x2:"40",y2:"140",stroke:"rgba(245,245,245,0.15)",strokeWidth:"1"}),(0,t.jsx)("line",{x1:"40",y1:"140",x2:"370",y2:"140",stroke:"rgba(245,245,245,0.15)",strokeWidth:"1"}),"SAVE"===m&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{d:"M 40 130 L 100 115 L 180 100 L 260 88 L 340 75 L 340 140 L 40 140 Z",fill:"rgba(16,185,129,0.03)",className:"chart-area"}),(0,t.jsx)("path",{d:"M 40 130 L 100 115 L 180 100 L 260 88 L 340 75",fill:"none",stroke:"#10b981",strokeWidth:"2.5",style:{transition:"all 0.5s ease"}})]}),"BALANCE"===m&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{d:"M 40 130 Q 90 110 140 90 T 240 60 T 340 30 L 340 140 L 40 140 Z",fill:"rgba(16,185,129,0.03)",className:"chart-area"}),(0,t.jsx)("path",{d:"M 40 130 Q 90 110 140 90 T 240 60 T 340 30",fill:"none",stroke:"#10b981",strokeWidth:"2.5",style:{transition:"all 0.5s ease"}})]}),"INVEST"===m&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{d:"M 40 130 Q 90 125 140 120 T 240 70 T 340 15 L 340 140 L 40 140 Z",fill:"rgba(16,185,129,0.03)",className:"chart-area"}),(0,t.jsx)("path",{d:"M 40 130 Q 90 125 140 120 T 240 70 T 340 15",fill:"none",stroke:"#10b981",strokeWidth:"2.5",style:{transition:"all 0.5s ease"}})]}),(0,t.jsx)("circle",{cx:"340",cy:"SAVE"===m?75:"BALANCE"===m?30:15,r:"4.5",fill:"#10b981",style:{filter:"drop-shadow(0 0 5px #10b981)",transition:"cy 0.5s ease"}}),(0,t.jsxs)("g",{style:{cursor:"pointer"},children:[(0,t.jsxs)("g",{onClick:e=>{e.stopPropagation(),x("SAVE")},children:[(0,t.jsx)("rect",{x:"75",y:"148",width:"65",height:"18",rx:"2",fill:"SAVE"===m?"#10b981":"#111",stroke:"rgba(16,185,129,0.2)",strokeWidth:"0.5"}),(0,t.jsx)("text",{x:"107.5",y:"160",fill:"SAVE"===m?"#0a0a0a":"rgba(245,245,245,0.5)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7.5",fontWeight:"bold",textAnchor:"middle",children:"SAVINGS"})]}),(0,t.jsxs)("g",{onClick:e=>{e.stopPropagation(),x("BALANCE")},children:[(0,t.jsx)("rect",{x:"155",y:"148",width:"75",height:"18",rx:"2",fill:"BALANCE"===m?"#10b981":"#111",stroke:"rgba(16,185,129,0.2)",strokeWidth:"0.5"}),(0,t.jsx)("text",{x:"192.5",y:"160",fill:"BALANCE"===m?"#0a0a0a":"rgba(245,245,245,0.5)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7.5",fontWeight:"bold",textAnchor:"middle",children:"BALANCED"})]}),(0,t.jsxs)("g",{onClick:e=>{e.stopPropagation(),x("INVEST")},children:[(0,t.jsx)("rect",{x:"245",y:"148",width:"75",height:"18",rx:"2",fill:"INVEST"===m?"#10b981":"#111",stroke:"rgba(16,185,129,0.2)",strokeWidth:"0.5"}),(0,t.jsx)("text",{x:"282.5",y:"160",fill:"INVEST"===m?"#0a0a0a":"rgba(245,245,245,0.5)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7.5",fontWeight:"bold",textAnchor:"middle",children:"AGGRESSIVE"})]})]}),(0,t.jsx)("text",{x:"15",y:"22",fill:"rgba(16,185,129,0.45)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",children:"WEALTH COMPOUND GROWTH PREVIEW [CLICK PRESETS]"}),(0,t.jsx)("text",{x:"345",y:"25",fill:"#10b981",fontFamily:"var(--font-bebas-neue, sans-serif)",fontSize:"9",letterSpacing:"0.05em",children:"GROWTH"}),(0,t.jsxs)("text",{x:"15",y:"132",fill:"rgba(245,245,245,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:["SAVE"===m&&"STRATEGY: LIQUID ASSETS // YIELD APY: +4.8% // RISK PROFILE: LOW","BALANCE"===m&&"STRATEGY: EQUITIES INDEX & CASH // YIELD APY: +8.5% // RISK PROFILE: MODERATE","INVEST"===m&&"STRATEGY: ALPHA STOCKS & HIGH-MUTABLE DBs // YIELD APY: +24.6% // RISK PROFILE: HIGH"]})]}):"05"===e?(0,t.jsxs)("svg",{width:"100%",height:"180",viewBox:"0 0 400 180",style:{background:"#090909",border:"1px solid rgba(129,140,248,0.15)",borderRadius:"6px",margin:"1.5rem 0",overflow:"hidden"},children:[(0,t.jsx)("style",{children:`
          @keyframes prFlowPulse {
            0% { stroke-dashoffset: 20; }
            100% { stroke-dashoffset: 0; }
          }
          .pr-stream-dash { stroke-dasharray: 5 3; animation: prFlowPulse 1s linear infinite; }
        `}),(0,t.jsxs)("g",{stroke:"rgba(129,140,248,0.02)",strokeWidth:"0.5",children:[(0,t.jsx)("line",{x1:"0",y1:"40",x2:"400",y2:"40"}),(0,t.jsx)("line",{x1:"0",y1:"80",x2:"400",y2:"80"}),(0,t.jsx)("line",{x1:"0",y1:"120",x2:"400",y2:"120"}),(0,t.jsx)("line",{x1:"100",y1:"0",x2:"100",y2:"180"}),(0,t.jsx)("line",{x1:"200",y1:"0",x2:"200",y2:"180"}),(0,t.jsx)("line",{x1:"300",y1:"0",x2:"300",y2:"180"})]}),(0,t.jsxs)("g",{stroke:"rgba(245,245,245,0.06)",strokeWidth:"1.5",fill:"none",children:[(0,t.jsx)("line",{x1:"30",y1:"90",x2:"370",y2:"90"}),(0,t.jsx)("path",{d:"M 120 90 C 140 90, 160 45, 180 45 L 280 45 C 300 45, 320 90, 340 90",strokeDasharray:"3"})]}),(0,t.jsx)("circle",{cx:"120",cy:"90",r:"5.5",fill:"#181818",stroke:"rgba(245,245,245,0.2)"}),(0,t.jsx)("circle",{cx:"340",cy:"90",r:"5.5",fill:"#181818",stroke:"rgba(245,245,245,0.2)"}),(0,t.jsx)("rect",{x:"180",y:"27",width:"100",height:"35",rx:"3",fill:"#111",stroke:h?"#818cf8":"rgba(245,245,245,0.08)",strokeWidth:"1.5",style:{transition:"border-color 0.3s ease"}}),(0,t.jsx)("text",{x:"230",y:"48",fill:h?"#818cf8":"rgba(245,245,245,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8.5",fontWeight:"bold",textAnchor:"middle",style:{transition:"color 0.3s ease"},children:h?`SCANNING: ${p}%`:"LLM_AGENT_CORE"}),h&&p>0&&(0,t.jsx)("circle",{cx:p<40?30+p/40*90:p<85?120+(p-40)/45*110:230+(p-85)/15*110,cy:p<40?90:p<85?90-(p-40)/45*45:45+(p-85)/15*45,r:"5",fill:"#818cf8",style:{filter:"drop-shadow(0 0 5px #818cf8)"}}),(0,t.jsxs)("g",{onClick:e=>{e.stopPropagation(),f(!0),g(0),y(["// CAPTURED: WEBHOOK PUSH EVENT ON main","// INITIALIZING DOCKER WORKER..."])},style:{cursor:h&&p<100?"not-allowed":"pointer"},children:[(0,t.jsx)("rect",{x:"135",y:"108",width:"130",height:"20",rx:"3",fill:"#111",stroke:"#818cf8",strokeWidth:"1"}),(0,t.jsx)("text",{x:"200",y:"121",fill:"#818cf8",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7.5",fontWeight:"bold",textAnchor:"middle",children:"[ SEND WEBHOOK EVENT ]"})]}),(0,t.jsx)("rect",{x:"25",y:"132",width:"350",height:"36",fill:"#050505",stroke:"rgba(129,140,248,0.06)",rx:"2"}),(0,t.jsx)("text",{x:"35",y:"144",fill:"rgba(245,245,245,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:b[1]}),(0,t.jsx)("text",{x:"35",y:"157",fill:"#818cf8",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",fontWeight:"bold",children:b[0]}),(0,t.jsx)("text",{x:"15",y:"22",fill:"rgba(129,140,248,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",children:"GITHUB WEBHOOK PR AUTOMATION PIPELINE"})]}):null}let k={"01":{primary:"#ffb400",primaryMuted:"rgba(255, 180, 0, 0.15)",primaryMutedLight:"rgba(255, 180, 0, 0.03)",primaryMutedDeep:"rgba(255, 180, 0, 0.3)",accent:"#ffb400",glow:"rgba(255, 180, 0, 0.4)",glowDeep:"rgba(255, 180, 0, 0.8)"},"02":{primary:"#ef4444",primaryMuted:"rgba(239, 68, 68, 0.15)",primaryMutedLight:"rgba(239, 68, 68, 0.03)",primaryMutedDeep:"rgba(239, 68, 68, 0.3)",accent:"#ef4444",glow:"rgba(239, 68, 68, 0.4)",glowDeep:"rgba(239, 68, 68, 0.8)"},"03":{primary:"#58c4dc",primaryMuted:"rgba(88, 196, 220, 0.15)",primaryMutedLight:"rgba(88, 196, 220, 0.03)",primaryMutedDeep:"rgba(88, 196, 220, 0.3)",accent:"#58c4dc",glow:"rgba(88, 196, 220, 0.4)",glowDeep:"rgba(88, 196, 220, 0.8)"},"04":{primary:"#10b981",primaryMuted:"rgba(16, 185, 129, 0.15)",primaryMutedLight:"rgba(16, 185, 129, 0.03)",primaryMutedDeep:"rgba(16, 185, 129, 0.3)",accent:"#10b981",glow:"rgba(16, 185, 129, 0.4)",glowDeep:"rgba(16, 185, 129, 0.8)"},"05":{primary:"#818cf8",primaryMuted:"rgba(129, 140, 248, 0.15)",primaryMutedLight:"rgba(129, 140, 248, 0.03)",primaryMutedDeep:"rgba(129, 140, 248, 0.3)",accent:"#818cf8",glow:"rgba(129, 140, 248, 0.4)",glowDeep:"rgba(129, 140, 248, 0.8)"}};function S(){let[e,i]=(0,r.useState)(0),[a,n]=(0,r.useState)("01"),[s,l]=(0,r.useState)(!1),c=(0,r.useRef)(null),d=(0,r.useRef)(null);(0,r.useEffect)(()=>{let e=d.current;if(e){let t=new IntersectionObserver(([e])=>{e.isIntersecting&&(l(!0),t.disconnect())},{threshold:.1});return t.observe(e),()=>{t.disconnect()}}},[]),(0,r.useEffect)(()=>{let e=!1,t=null,r=()=>{let t=c.current;if(t){let e=t.getBoundingClientRect(),r=window.innerHeight,a=e.height-r;if(a>0){let t=-e.top/a;i(t=Math.max(0,Math.min(1,t)));let r=Math.min(u.length-1,Math.floor(t*u.length*.999));n(u[r].id)}}e=!1},a=()=>{e||(t=window.requestAnimationFrame(r),e=!0)};window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a);let o=c.current;if(o){let e=o.getBoundingClientRect(),t=window.innerHeight,r=e.height-t;if(r>0){let t=-e.top/r;i(t=Math.max(0,Math.min(1,t)));let a=Math.min(u.length-1,Math.floor(t*u.length*.999));n(u[a].id)}}return()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",a),t&&window.cancelAnimationFrame(t)}},[]);let m=Math.min(u.length-1,Math.floor(e*u.length*.999)),x=k[a]||k["01"];return(0,t.jsxs)("section",{id:"projects",ref:c,className:"projects-scroll-section",style:{"--active-primary":x.primary,"--active-primary-muted":x.primaryMuted,"--active-primary-muted-deep":x.primaryMutedDeep,"--active-glow":x.glow},children:[(0,t.jsxs)("div",{className:"projects-sticky-viewport",children:[(0,t.jsxs)("div",{ref:d,className:"projects-hud-header",style:{opacity:+!!s,transform:s?"translateY(0)":"translateY(20px)",transition:"opacity 0.6s cubic-bezier(0.65, 0, 0.35, 1), transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)"},children:[(0,t.jsx)("div",{className:"projects-hud-label",children:"// 02 / WORK"}),(0,t.jsx)("h2",{className:"projects-hud-title",children:"SELECTED WORK"})]}),(0,t.jsx)("div",{className:"projects-horizontal-rail",style:{transform:`translateX(-${e*(u.length-1)*100}vw)`},children:u.map((r,i)=>{let a=j[r.id],n=k[r.id],s=i/(u.length-1);return(0,t.jsxs)("div",{className:"project-slide-panel",style:{"--theme-primary":n.primary,"--theme-primary-muted":n.primaryMuted,"--theme-primary-muted-light":n.primaryMutedLight,"--theme-primary-muted-deep":n.primaryMutedDeep,"--theme-accent":n.accent,"--theme-glow":n.glow,"--theme-glow-deep":n.glowDeep},children:[(0,t.jsx)("div",{className:"project-panel-bg",style:{backgroundImage:`url(${(e=>{switch(e){case"01":return"/nurosearch_bg.png";case"02":return"/dpi_bg.png";case"03":return"/kozumi_bg.png";case"04":return"/spendstrack_bg.png";case"05":return"/code_chatbot_bg.png";default:return""}})(r.id)})`,transform:`translateX(${-(100*(e-s))}px) scale(1.15)`}}),(0,t.jsx)("div",{className:"project-panel-bg-overlay"}),(0,t.jsx)("div",{className:"project-panel-grid-overlay"}),(0,t.jsxs)("div",{className:"project-panel-grid",children:[(0,t.jsxs)("div",{className:"project-panel-left",children:[(0,t.jsxs)("div",{className:"project-panel-header",children:[(0,t.jsx)("span",{className:"project-panel-code",children:(e=>{switch(e){case"01":return"AI-26-01";case"02":return"SYS-26-02";case"03":return"WEB-26-03";case"04":return"FIN-26-04";case"05":return"LLM-25-05";default:return`PROJ-${e}`}})(r.id)}),(0,t.jsx)("h3",{className:"project-panel-title",children:r.title})]}),(0,t.jsx)("p",{className:"project-panel-teaser",children:r.description}),(0,t.jsxs)("div",{className:"project-panel-schematic-box",children:[(0,t.jsx)("div",{className:"schematic-label",children:"// CORE DIAGRAM & SIMULATION"}),(0,t.jsx)(v,{id:r.id})]})]}),(0,t.jsx)("div",{className:"project-panel-right",children:a&&(0,t.jsxs)("div",{className:"project-panel-details",children:[(0,t.jsxs)("div",{className:"detail-row",children:[(0,t.jsx)("span",{className:"detail-meta-label",children:"// ROLE:"}),(0,t.jsx)("span",{className:"detail-meta-val",children:a.role})]}),(0,t.jsxs)("div",{className:"details-scrollable-area",children:[(0,t.jsxs)("div",{className:"detail-section",children:[(0,t.jsx)("h4",{className:"detail-sec-title",children:"KEY CHALLENGES"}),(0,t.jsx)("ul",{className:"detail-sec-list",children:a.challenges.map((e,r)=>(0,t.jsx)("li",{children:e},r))})]}),(0,t.jsxs)("div",{className:"detail-section",children:[(0,t.jsx)("h4",{className:"detail-sec-title",children:"SOLUTIONS"}),(0,t.jsx)("ul",{className:"detail-sec-list",children:a.solutions.map((e,r)=>(0,t.jsx)("li",{children:e},r))})]}),(0,t.jsxs)("div",{className:"detail-section",children:[(0,t.jsx)("h4",{className:"detail-sec-title",children:"OUTCOMES & METRICS"}),(0,t.jsx)("ul",{className:"detail-sec-list theme-text",children:a.metrics.map((e,r)=>(0,t.jsx)("li",{children:e},r))})]})]}),(0,t.jsxs)("div",{className:"detail-section specs-section",children:[(0,t.jsx)("h4",{className:"detail-sec-title",children:"SYSTEM SPECIFICATION"}),(0,t.jsx)("div",{className:"detail-badge-group",children:a.technologies.map(e=>(0,t.jsx)("span",{className:"detail-badge",children:e},e))})]}),(0,t.jsx)("div",{className:"detail-github-wrapper",onClick:e=>e.stopPropagation(),children:(0,t.jsx)(o,{range:50,strength:.3,children:(0,t.jsx)("a",{href:a.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"detail-github-btn",children:"EXPLORE CODEBASE   →"})})})]})})]})]},r.id)})}),(0,t.jsxs)("div",{className:"projects-progress-hud",children:[(0,t.jsx)("div",{className:"hud-track-line",children:(0,t.jsx)("div",{className:"hud-fill-line",style:{width:`${100*e}%`}})}),(0,t.jsx)("div",{className:"hud-ticks-container",children:u.map((e,r)=>(0,t.jsxs)("div",{className:`hud-tick-item ${r<=m?"passed":""} ${r===m?"current":""}`,style:{left:`${r/(u.length-1)*100}%`},children:[(0,t.jsx)("span",{className:"tick-number",children:e.id}),(0,t.jsx)("span",{className:"tick-title",children:e.title})]},e.id))})]})]}),(0,t.jsx)("style",{children:`
        .projects-scroll-section {
          position: relative;
          height: 500vh; /* 5 projects * 100vh runway */
          background-color: #0a0a0a;
          box-sizing: border-box;
          transition: background-color 0.6s ease;
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
          color: var(--active-primary);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          transition: color 0.4s ease;
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
          transition: transform 0.1s ease-out;
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

        .project-panel-grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(var(--theme-primary-muted-light) 1px, transparent 1px),
            linear-gradient(to right, rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.015) 1px, transparent 1px);
          background-size: 32px 32px;
          opacity: 0.45;
          pointer-events: none;
          z-index: 2;
          transition: background-image 0.6s ease;
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
          color: var(--theme-primary);
          letter-spacing: 0.1em;
          transition: color 0.4s ease;
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
          color: var(--theme-primary);
          transition: color 0.4s ease;
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

        .detail-sec-list.theme-text li {
          color: var(--theme-primary) !important;
          font-weight: 400;
          transition: color 0.4s ease;
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
          color: var(--theme-primary);
          border: 1px solid var(--theme-primary-muted-deep);
          background: transparent;
          border-radius: 4px;
          padding: 0.7rem 1.6rem;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .detail-github-btn:hover {
          background: var(--theme-primary) !important;
          color: #0a0a0a !important;
          box-shadow: 0 0 15px var(--theme-glow);
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
          background: var(--active-primary);
          box-shadow: 0 0 10px var(--active-glow);
          position: absolute;
          left: 0;
          top: 0;
          transition: width 0.1s ease-out, background 0.4s ease, box-shadow 0.4s ease;
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
          background: var(--active-primary);
          box-shadow: 0 0 8px var(--active-glow);
        }

        .hud-tick-item.current::before {
          transform: scale(1.4);
          background: var(--active-primary);
          box-shadow: 0 0 12px var(--active-glow);
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
          color: var(--active-primary);
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
          color: var(--active-primary);
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
      `})]})}function w({isOpen:e,onClose:i}){let[a,n]=(0,r.useState)(""),[o,s]=(0,r.useState)([{type:"welcome",text:"=================================================="},{type:"welcome",text:"PRATHAMESH JADHAV // AI & SYSTEMS DEVELOPMENT CORE"},{type:"welcome",text:"=================================================="},{type:"welcome",text:'Type "help" for a list of registered queries.'},{type:"welcome",text:'Type "exit" or click outside to close system shell.'},{type:"welcome",text:" "}]),l=(0,r.useRef)(null),c=(0,r.useRef)(null);return((0,r.useEffect)(()=>(e?(setTimeout(()=>{l.current?.focus()},100),document.body.style.overflow="hidden"):document.body.style.overflow="",()=>{document.body.style.overflow=""}),[e]),(0,r.useEffect)(()=>{let t=t=>{"Escape"===t.key&&e&&i()};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[e,i]),(0,r.useEffect)(()=>{c.current&&(c.current.scrollTop=c.current.scrollHeight)},[o]),e)?(0,t.jsxs)("div",{onClick:i,style:{position:"fixed",inset:0,backgroundColor:"rgba(10, 10, 10, 0.85)",backdropFilter:"blur(8px)",zIndex:6e3,display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem"},children:[(0,t.jsxs)("div",{onClick:e=>{e.stopPropagation(),l.current?.focus()},style:{width:"100%",maxWidth:"850px",backgroundColor:"#050505",border:"1px solid rgba(245,245,245,0.08)",borderRadius:"8px",overflow:"hidden",boxShadow:"0 30px 60px rgba(0, 0, 0, 0.8)",cursor:"text"},children:[(0,t.jsxs)("div",{style:{padding:"0.75rem 1.25rem",backgroundColor:"rgba(245,245,245,0.015)",borderBottom:"1px solid rgba(245,245,245,0.04)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,t.jsxs)("div",{style:{display:"flex",gap:"0.4rem"},children:[(0,t.jsx)("button",{onClick:i,style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"rgba(245,245,245,0.1)",border:"none",cursor:"pointer"},onMouseEnter:e=>e.currentTarget.style.backgroundColor="#ff4444",onMouseLeave:e=>e.currentTarget.style.backgroundColor="rgba(245,245,245,0.1)"}),(0,t.jsx)("div",{style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"var(--accent-amber, #ffb400)",opacity:.6}}),(0,t.jsx)("div",{style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"rgba(245,245,245,0.1)"}})]}),(0,t.jsx)("span",{style:{fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"0.6rem",letterSpacing:"0.25em",color:"rgba(245,245,245,0.3)",textTransform:"uppercase"},children:"guest@prathamesh-jadhav: ~ (DOUBLE-CLICK BRAND TO EXIT)"}),(0,t.jsx)("button",{onClick:i,style:{background:"none",border:"none",color:"rgba(245,245,245,0.3)",fontFamily:"monospace",fontSize:"0.8rem",cursor:"pointer"},onMouseEnter:e=>e.currentTarget.style.color="#ffb400",onMouseLeave:e=>e.currentTarget.style.color="rgba(245,245,245,0.3)",children:"✕"})]}),(0,t.jsxs)("div",{ref:c,className:"terminal-stream",style:{height:"380px",overflowY:"auto",padding:"1.5rem",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"0.85rem",lineHeight:1.5,color:"rgba(245,245,245,0.7)",display:"flex",flexDirection:"column",gap:"0.4rem",textAlign:"left",position:"relative"},"data-lenis-prevent":!0,children:[(0,t.jsx)("div",{className:"terminal-scanlines"}),o.map((e,r)=>"welcome"===e.type?(0,t.jsx)("div",{style:{color:"rgba(245,245,245,0.4)",whiteSpace:"pre"},children:e.text},r):"input"===e.type?(0,t.jsx)("div",{style:{color:"var(--accent-amber, #ffb400)",fontWeight:500},children:e.text},r):(0,t.jsx)("div",{style:{whiteSpace:"pre-wrap",color:"rgba(245,245,245,0.75)",marginBottom:"0.5rem"},children:e.text},r)),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault();let t=a.trim().toLowerCase();if(!t)return;let r=[...o,{type:"input",text:`guest@prathamesh:~$ ${a}`}];switch(t){case"help":r.push({type:"output",text:`
Registered system queries:
  about    - Displays profile summary and systems focus
  skills   - Lists technical framework & algorithm specs
  projects - Displays active production-grade directories
  contact  - Outputs secure mailbox and connection channels
  neofetch - Shows system hardware and configuration
  exit     - Shuts down system shell
  clear    - Flushes console output log history
          `.trim()});break;case"about":r.push({type:"output",text:`
Prathamesh Jadhav — Engineering-focused AI/ML developer.
Specializing in building production-grade vector databases, low-latency RAG architectures, and multi-threaded systems-level network analysis.
Focus: Custom indexing (HNSW), concurrency control, and data throughput optimizations.
          `.trim()});break;case"skills":r.push({type:"output",text:`
Technical Competencies:
  [Vector Engines]     HNSW Graph Indexing, Scalar Quantization
  [Systems & Networking] Multithreading, C, Python (Scapy, pcap)
  [GenAI / RAG]          FastAPI, LangChain, OpenAI APIs
  [Web Frameworks]       Next.js, React 19, TypeScript, CSS Grid
          `.trim()});break;case"projects":r.push({type:"output",text:`
Production Repositories:
  01 / NUROSEARCH   - HNSW-indexed vector database [Rust/Python/FastAPI]
  02 / DPI ENGINE   - Multi-threaded raw packet interceptor [C/Python/Scapy]
  03 / KOZUMIHUB    - Entertainment indexing orchestrator [TypeScript/NextJS]
  04 / SPENDSTRACK  - Offline-first transactional dashboard [TypeScript]
  05 / PR REVIEWER  - Automated AI code reviewing webhook chatbot [FastAPI]
          `.trim()});break;case"contact":r.push({type:"output",text:`
Ingestion Gateways:
  Email:    Prathamesh.Jadhav.Office@gmail.com
  GitHub:   https://github.com/Prathamesh-Jadhav04
  LinkedIn: https://linkedin.com/in/prathamesh-jadhav04
          `.trim()});break;case"neofetch":r.push({type:"output",text:`
 _  _              guest@prathamesh-jadhav
 |  |  _|_  |_|    -----------------------
 |__|   |_  | |    OS: NextJS Core OS (Windows WSL2)
 _                 KERNEL: React 19.2.4 (Turbopack)
 |_) ._ _._|_|_    UPTIME: 22h 45m
 |   | (_| |_| |   SHELL: jsh v1.0.0
                   RESOLUTION: 1920x1080
                   THEME: Dark Brutalist Amber
                   COMPILER: TypeScript v5
          `.trim()});break;case"clear":s([]),n("");return;case"exit":i(),n("");return;default:r.push({type:"output",text:`jsh: command not recognized: "${t}". Type "help" for instructions.`})}s(r),n("")},style:{display:"flex",alignItems:"center",marginTop:"0.5rem"},children:[(0,t.jsx)("span",{style:{color:"var(--accent-amber, #ffb400)",marginRight:"0.5rem",flexShrink:0},children:"guest@prathamesh:~$"}),(0,t.jsx)("input",{ref:l,type:"text",value:a,onChange:e=>n(e.target.value),autoComplete:"off",autoCapitalize:"off",spellCheck:"false",style:{flex:1,background:"transparent",border:"none",outline:"none",color:"#f5f5f5",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"0.85rem",padding:0,caretColor:"var(--accent-amber, #ffb400)",cursor:"text"}})]})]})]}),(0,t.jsx)("style",{children:`
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
      `})]}):null}let N=[{label:"GitHub",href:"https://github.com/Prathamesh-Jadhav04",icon:(0,t.jsx)(function(){return(0,t.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"})})},{})},{label:"LinkedIn",href:"https://linkedin.com/in/prathamesh-jadhav04",icon:(0,t.jsx)(function(){return(0,t.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})},{})}];function E({link:e}){let[i,a]=(0,r.useState)(!1);return(0,t.jsx)(o,{children:(0,t.jsxs)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer","aria-label":e.label,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),className:"social-console-btn",children:[e.icon,(0,t.jsx)("span",{children:e.label}),(0,t.jsx)("span",{className:"btn-terminal-tag",children:i?"➔ STACK":"// LINK"})]})})}function A(){let[e,i]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let e,t=()=>{i(e=>(e+.04)%(2*Math.PI)),e=requestAnimationFrame(t)};return e=requestAnimationFrame(t),()=>cancelAnimationFrame(e)},[]),(0,t.jsx)("div",{className:"console-oscilloscope-container",children:(0,t.jsxs)("svg",{width:"100%",height:"50",viewBox:"0 0 220 50",preserveAspectRatio:"none",children:[(0,t.jsxs)("g",{stroke:"rgba(255, 180, 0, 0.04)",strokeWidth:"0.5",children:[(0,t.jsx)("line",{x1:"0",y1:"12.5",x2:"220",y2:"12.5"}),(0,t.jsx)("line",{x1:"0",y1:"25",x2:"220",y2:"25"}),(0,t.jsx)("line",{x1:"0",y1:"37.5",x2:"220",y2:"37.5"}),(0,t.jsx)("line",{x1:"55",y1:"0",x2:"55",y2:"50"}),(0,t.jsx)("line",{x1:"110",y1:"0",x2:"110",y2:"50"}),(0,t.jsx)("line",{x1:"165",y1:"0",x2:"165",y2:"50"})]}),(0,t.jsx)("path",{d:(()=>{let t=[];for(let r=0;r<=220;r+=4){let i=25+5*Math.sin(.045*r-1.4*e+Math.PI/3);t.push(`${r},${i}`)}return`M ${t.join(" L ")}`})(),fill:"none",stroke:"rgba(255, 180, 0, 0.2)",strokeWidth:"0.8"}),(0,t.jsx)("path",{d:(()=>{let t=[];for(let r=0;r<=220;r+=4){let i=25+8*Math.sin(.055*r+1.8*e);t.push(`${r},${i}`)}return`M ${t.join(" L ")}`})(),fill:"none",stroke:"#ffb400",strokeWidth:"1.2",style:{filter:"drop-shadow(0 0 3px rgba(255, 180, 0, 0.5))"}})]})})}function I(){let e=(0,r.useRef)(null),[i,a]=(0,r.useState)(!1),[n,s]=(0,r.useState)({name:"",email:"",subject:"",message:""}),[l,c]=(0,r.useState)("idle"),[d,m]=(0,r.useState)(""),[x,h]=(0,r.useState)(""),[f,p]=(0,r.useState)([]);(0,r.useEffect)(()=>{let t=e.current;if(!t)return;let r=new IntersectionObserver(([e])=>{e.isIntersecting&&(a(!0),r.disconnect())},{threshold:.1});return r.observe(t),()=>r.disconnect()},[]),(0,r.useEffect)(()=>{let e=Math.random().toString(16).substring(2,8).toUpperCase();h(`LINK-NODE-${e}`)},[]);let g=["// INITIALIZING PIPELINE INGESTION TO ETH0...","// SSL HANDSHAKE SECURE WITH GATEWAY: SUCCESS","// SERIALIZING PAYLOAD BLOCKS INTO JSON_STREAM...","// TRANSMITTING PACKET OVER ENCRYPTED UDP TUNNEL...","// VERIFYING CHECKSUM WITH REMOTE INSTANCE...","// ACK RECEIVED: 200 OK (SAVED TO QUEUE)"];(0,r.useEffect)(()=>{if("sending"!==l)return;p([g[0]]);let e=g.map((e,t)=>0===t?null:setTimeout(()=>{p(t=>[...t,e])},180*t));return()=>{e.forEach(e=>e&&clearTimeout(e))}},[l]);let b=e=>{let{name:t,value:r}=e.target;s(e=>({...e,[t]:r}))},y=async e=>{if(e.preventDefault(),!n.name||!n.email||!n.subject||!n.message){m("All fields are required."),c("error");return}c("sending"),m("");try{let e=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),t=await e.json();if(!e.ok)throw Error(t.error||"Failed to transmit message.");setTimeout(()=>{c("success"),s({name:"",email:"",subject:"",message:""})},1300)}catch(e){console.error(e),setTimeout(()=>{m(e.message||"Something went wrong. Please try again."),c("error")},1300)}};return(0,t.jsxs)("section",{id:"contact",className:"contact-section-container",children:[(0,t.jsx)("div",{className:"contact-grid-overlay"}),(0,t.jsxs)("div",{ref:e,className:"contact-inner-wrapper",children:[(0,t.jsxs)("div",{className:"contact-dashboard-grid",children:[(0,t.jsxs)("div",{className:`contact-telemetry-panel ${i?"fade-in-up":""}`,style:{transitionDelay:"0.1s"},children:[(0,t.jsx)("div",{className:"contact-hud-label",children:"// 03 / BUILD"}),(0,t.jsx)("h2",{className:"contact-hud-title",children:"ESTABLISH SECURE LINK"}),(0,t.jsx)("p",{className:"contact-hud-teaser",children:"Have an architectural challenge or scaling requirement? Initialize a secure socket transmission below."}),(0,t.jsxs)("div",{className:"hardware-console-card",children:[(0,t.jsxs)("div",{className:"console-card-header",children:[(0,t.jsx)("span",{className:"terminal-title",children:"// LOG_RECEIVER_TELEMETRY.conf"}),(0,t.jsxs)("span",{className:"blinking-dot-container",children:[(0,t.jsx)("span",{className:"blinking-dot"}),"STATUS: ESTABLISHED"]})]}),(0,t.jsx)(A,{}),(0,t.jsxs)("div",{className:"console-readout-rows",children:[(0,t.jsxs)("div",{className:"readout-row",children:[(0,t.jsx)("span",{className:"readout-label",children:"SYSTEM STATE:"}),(0,t.jsx)("span",{className:"readout-val color-green",children:"NOMINAL (99.8%)"})]}),(0,t.jsxs)("div",{className:"readout-row",children:[(0,t.jsx)("span",{className:"readout-label",children:"SESSION ID:"}),(0,t.jsx)("span",{className:"readout-val monospace",children:x||"LINKING..."})]}),(0,t.jsxs)("div",{className:"readout-row",children:[(0,t.jsx)("span",{className:"readout-label",children:"CRYPTO SUITE:"}),(0,t.jsx)("span",{className:"readout-val monospace",children:"ECDH_P256 / AES-GCM-256"})]}),(0,t.jsxs)("div",{className:"readout-row",children:[(0,t.jsx)("span",{className:"readout-label",children:"PING METRIC:"}),(0,t.jsx)("span",{className:"readout-val color-amber",children:"14ms (RTT_OPTIMAL)"})]})]})]}),(0,t.jsxs)("div",{className:"social-gateways-container",children:[(0,t.jsx)("span",{className:"gateways-label",children:"// PUBLIC KEY ENDPOINTS"}),(0,t.jsx)("div",{className:"social-links-grid",children:N.map(e=>(0,t.jsx)(E,{link:e},e.label))})]})]}),(0,t.jsx)("div",{className:`contact-form-panel ${i?"fade-in-up":""}`,style:{transitionDelay:"0.2s"},children:"success"===l?(0,t.jsxs)("div",{className:"terminal-result-card success",children:[(0,t.jsx)("div",{className:"terminal-result-header",children:"// TRANSACTION_VERIFIED"}),(0,t.jsxs)("div",{className:"terminal-result-body",children:[(0,t.jsx)("div",{className:"success-code-log",children:"[VERIFIED] TRANSMISSION ESTABLISHED"}),(0,t.jsx)("h3",{className:"success-heading",children:"MESSAGE INGESTED"}),(0,t.jsxs)("div",{className:"terminal-logs-window font-mono",children:[(0,t.jsx)("div",{className:"terminal-log-line color-green",children:"> Packet checksum verified: 0xFD8E42"}),(0,t.jsx)("div",{className:"terminal-log-line color-green",children:"> Ingesting message stream payloads..."}),(0,t.jsx)("div",{className:"terminal-log-line color-green",children:"> Writing record block to PostgreSQL DB..."}),(0,t.jsx)("div",{className:"terminal-log-line",children:"> Pipeline shutdown. Connection standby mode."})]}),(0,t.jsx)("p",{className:"success-subtext",children:"Your transmission was saved securely. Prathamesh will review your packet nodes and respond shortly."}),(0,t.jsx)(o,{strength:.2,range:60,children:(0,t.jsx)("button",{type:"button",onClick:()=>c("idle"),className:"transmit-submit-btn cursor-pointer",children:"[ NEW_TRANSMISSION() ]"})})]})]}):"sending"===l?(0,t.jsxs)("div",{className:"terminal-result-card transmitting",children:[(0,t.jsx)("div",{className:"terminal-result-header",children:"// PIPELINE_ACTIVE (TRANSMITTING)"}),(0,t.jsxs)("div",{className:"terminal-result-body flex flex-col justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"success-code-log animate-pulse",children:"TRANSMITTING PACKETS..."}),(0,t.jsx)("div",{className:"terminal-logs-window font-mono min-h-[140px] mt-4",children:f.map((e,r)=>(0,t.jsx)("div",{className:"terminal-log-line",children:e},r))})]}),(0,t.jsx)("div",{className:"progress-bar-container mt-6",children:(0,t.jsx)("div",{className:"progress-bar-fill"})})]})]}):(0,t.jsxs)("form",{onSubmit:y,className:"console-form-container",children:[(0,t.jsxs)("div",{className:"console-form-header",children:[(0,t.jsx)("span",{children:"// STREAM_INGEST_FORM"}),(0,t.jsx)("span",{children:"SECURE CHANNEL"})]}),(0,t.jsxs)("div",{className:"contact-inputs-grid",children:[(0,t.jsxs)("div",{className:"console-form-group",children:[(0,t.jsxs)("div",{className:"console-form-group-header",children:[(0,t.jsx)("span",{className:"param-label",children:"[PARAM: name]"}),(0,t.jsx)("span",{className:"param-type",children:"string"})]}),(0,t.jsx)("input",{type:"text",id:"name",name:"name",required:!0,value:n.name,onChange:b,className:"console-input",placeholder:"Enter name"}),(0,t.jsx)("div",{className:"console-focus-underline"})]}),(0,t.jsxs)("div",{className:"console-form-group",children:[(0,t.jsxs)("div",{className:"console-form-group-header",children:[(0,t.jsx)("span",{className:"param-label",children:"[PARAM: email]"}),(0,t.jsx)("span",{className:"param-type",children:"email"})]}),(0,t.jsx)("input",{type:"email",id:"email",name:"email",required:!0,value:n.email,onChange:b,className:"console-input",placeholder:"name@domain.com"}),(0,t.jsx)("div",{className:"console-focus-underline"})]})]}),(0,t.jsxs)("div",{className:"console-form-group",children:[(0,t.jsxs)("div",{className:"console-form-group-header",children:[(0,t.jsx)("span",{className:"param-label",children:"[PARAM: subject]"}),(0,t.jsx)("span",{className:"param-type",children:"string"})]}),(0,t.jsx)("input",{type:"text",id:"subject",name:"subject",required:!0,value:n.subject,onChange:b,className:"console-input",placeholder:"Enter subject header"}),(0,t.jsx)("div",{className:"console-focus-underline"})]}),(0,t.jsxs)("div",{className:"console-form-group",children:[(0,t.jsxs)("div",{className:"console-form-group-header",children:[(0,t.jsx)("span",{className:"param-label",children:"[PARAM: message]"}),(0,t.jsx)("span",{className:"param-type",children:"text"})]}),(0,t.jsx)("textarea",{id:"message",name:"message",required:!0,value:n.message,onChange:b,className:"console-textarea",placeholder:"Enter project specs, pipeline requirements, or message details..."}),(0,t.jsx)("div",{className:"console-focus-underline"})]}),"error"===l&&(0,t.jsxs)("div",{className:"terminal-error-log font-mono",children:["// [CRITICAL ERROR] Failed to transmit packet: ",d]}),(0,t.jsx)("div",{className:"submit-btn-row",children:(0,t.jsx)(o,{strength:.15,range:60,children:(0,t.jsx)("button",{type:"submit",className:"transmit-submit-btn cursor-pointer",children:"[ EXECUTE TRANSMIT_MESSAGE() ]"})})})]})})]}),(0,t.jsx)("div",{className:`contact-footer-line ${i?"fade-in-up":""}`,style:{transitionDelay:"0.4s"},children:(0,t.jsx)("span",{className:"footer-copyright-text",children:"© 2026 PRATHAMESH JADHAV. BUILT WITH SYSTEMS FOCUS & SOLID INFRASTRUCTURE."})})]}),(0,t.jsx)("style",{children:`
        .contact-section-container {
          position: relative;
          padding: 8rem 5rem 4rem 5rem;
          background-color: #0a0a0a;
          box-sizing: border-box;
          border-top: 1px solid rgba(245, 245, 245, 0.05);
          overflow: hidden;
        }

        .contact-grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(rgba(255, 180, 0, 0.02) 1.5px, transparent 1.5px),
            linear-gradient(to right, rgba(255,255,255,0.008) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.008) 1px, transparent 1px);
          background-size: 32px 32px;
          opacity: 0.85;
          pointer-events: none;
          z-index: 1;
        }

        .contact-inner-wrapper {
          position: relative;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          z-index: 3;
        }

        .contact-dashboard-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
          gap: 6rem;
          align-items: start;
        }

        .contact-telemetry-panel {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
        }

        .contact-hud-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          color: #ffb400;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
        }

        .contact-hud-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 4.5vw, 4.5rem);
          line-height: 0.95;
          color: #f5f5f5;
          margin: 0;
          letter-spacing: 0.02em;
        }

        .contact-hud-teaser {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 1.05rem;
          line-height: 1.6;
          color: rgba(245, 245, 245, 0.5);
          margin: 1.5rem 0 2rem 0;
        }

        /* Telemetry Box Card */
        .hardware-console-card {
          width: 100%;
          background: rgba(10, 10, 10, 0.6);
          border: 1px solid rgba(255, 180, 0, 0.12);
          border-radius: 6px;
          padding: 1.5rem;
          box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          margin-bottom: 2rem;
        }

        .console-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(245, 245, 245, 0.06);
          padding-bottom: 0.75rem;
        }

        .terminal-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.05em;
          color: rgba(245, 245, 245, 0.35);
        }

        .blinking-dot-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.55rem;
          font-weight: bold;
          color: #10b981;
          letter-spacing: 0.05em;
        }

        .blinking-dot {
          width: 5px;
          height: 5px;
          background-color: #10b981;
          border-radius: 50%;
          display: inline-block;
          animation: terminalBlink 1.4s infinite ease-in-out;
        }

        @keyframes terminalBlink {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }

        .console-oscilloscope-container {
          width: 100%;
          background-color: #050505;
          border: 1px solid rgba(245, 245, 245, 0.04);
          border-radius: 4px;
          overflow: hidden;
          padding: 0.25rem 0;
        }

        .console-readout-rows {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .readout-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.65rem;
          letter-spacing: 0.05em;
        }

        .readout-label {
          font-family: 'JetBrains Mono', monospace;
          color: rgba(245, 245, 245, 0.3);
        }

        .readout-val {
          font-family: 'Inter', sans-serif;
          color: #f5f5f5;
        }

        .readout-val.monospace {
          font-family: 'JetBrains Mono', monospace;
        }

        .readout-val.color-green {
          color: #10b981;
          font-weight: 600;
        }

        .readout-val.color-amber {
          color: #ffb400;
        }

        /* Gateways container */
        .social-gateways-container {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          width: 100%;
        }

        .gateways-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          color: rgba(245, 245, 245, 0.25);
          letter-spacing: 0.1em;
        }

        .social-links-grid {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          width: 100%;
        }

        .social-console-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: rgba(245,245,245,0.4);
          background: rgba(245, 245, 245, 0.02);
          border: 1px solid rgba(245, 245, 245, 0.08);
          border-radius: 4px;
          text-decoration: none;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);
          padding: 0.7rem 1.2rem;
          justify-content: space-between;
          min-width: 150px;
        }

        .social-console-btn:hover {
          color: #ffb400;
          border-color: rgba(255, 180, 0, 0.3);
          background: rgba(255, 180, 0, 0.02);
        }

        .btn-terminal-tag {
          font-size: 0.55rem;
          color: rgba(245, 245, 245, 0.2);
          transition: color 0.3s ease;
        }

        .social-console-btn:hover .btn-terminal-tag {
          color: #ffb400;
        }

        /* Form styling */
        .contact-form-panel {
          width: 100%;
        }

        .console-form-container {
          background: rgba(10, 10, 10, 0.5);
          border: 1px solid rgba(245, 245, 245, 0.06);
          border-radius: 6px;
          padding: 2.5rem;
          box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          display: flex;
          flex-direction: column;
          gap: 2.2rem;
        }

        .console-form-header {
          display: flex;
          justify-content: space-between;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          color: rgba(245, 245, 245, 0.25);
          border-bottom: 1px solid rgba(245, 245, 245, 0.06);
          padding-bottom: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .contact-inputs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        .console-form-group {
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .console-form-group-header {
          display: flex;
          justify-content: space-between;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        .param-label {
          color: rgba(245, 245, 245, 0.3);
          transition: color 0.3s ease;
        }

        .param-type {
          color: rgba(255, 180, 0, 0.35);
        }

        .console-input, .console-textarea {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 0.95rem;
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

        .console-focus-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #ffb400;
          box-shadow: 0 0 6px #ffb400;
          transition: width 0.35s cubic-bezier(0.65, 0, 0.35, 1);
        }

        .console-input:focus ~ .console-focus-underline,
        .console-textarea:focus ~ .console-focus-underline {
          width: 100%;
        }

        .console-form-group:focus-within .param-label {
          color: #ffb400;
        }

        .console-textarea {
          min-height: 140px;
          resize: vertical;
        }

        .terminal-error-log {
          font-size: 0.7rem;
          color: #ef4444;
          letter-spacing: 0.05em;
        }

        .submit-btn-row {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .transmit-submit-btn {
          border: 1px solid #ffb400;
          color: #ffb400;
          background: transparent;
          padding: 1.1rem 3rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);
          border-radius: 4px;
        }

        .transmit-submit-btn:hover {
          color: #0a0a0a;
          background-color: #ffb400;
          box-shadow: 0 0 15px rgba(255, 180, 0, 0.4);
        }

        /* Result cards styling (Transmitting and Success States) */
        .terminal-result-card {
          background: rgba(10, 10, 10, 0.6);
          border: 1px solid rgba(245, 245, 245, 0.08);
          border-radius: 6px;
          padding: 3rem;
          box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          min-height: 420px;
          display: flex;
          flex-direction: column;
        }

        .terminal-result-card.success {
          border-color: rgba(16, 185, 129, 0.2);
          box-shadow: 0 15px 45px -15px rgba(16, 185, 129, 0.1);
        }

        .terminal-result-card.transmitting {
          border-color: rgba(255, 180, 0, 0.2);
          box-shadow: 0 15px 45px -15px rgba(255, 180, 0, 0.1);
        }

        .terminal-result-header {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: rgba(245, 245, 245, 0.3);
          border-bottom: 1px solid rgba(245, 245, 245, 0.06);
          padding-bottom: 0.75rem;
          margin-bottom: 2rem;
          text-transform: uppercase;
        }

        .terminal-result-card.success .terminal-result-header {
          color: #10b981;
        }

        .terminal-result-card.transmitting .terminal-result-header {
          color: #ffb400;
        }

        .terminal-result-body {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .success-code-log {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: #ffb400;
          margin-bottom: 0.75rem;
        }

        .terminal-result-card.success .success-code-log {
          color: #10b981;
        }

        .success-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.8rem;
          color: #f5f5f5;
          margin-bottom: 1.5rem;
          letter-spacing: 0.02em;
          line-height: 1;
        }

        .terminal-logs-window {
          background-color: #050505;
          border: 1px solid rgba(245, 245, 245, 0.04);
          border-radius: 4px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-bottom: 2rem;
        }

        .terminal-log-line {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          color: rgba(245, 245, 245, 0.55);
          letter-spacing: 0.02em;
          line-height: 1.4;
        }

        .terminal-log-line.color-green {
          color: #10b981;
        }

        .success-subtext {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(245, 245, 245, 0.6);
          margin-bottom: 2rem;
        }

        .progress-bar-container {
          width: 100%;
          height: 3px;
          background-color: rgba(245, 245, 245, 0.04);
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background-color: #ffb400;
          width: 0%;
          animation: transmitProgressBar 1.1s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          box-shadow: 0 0 6px #ffb400;
        }

        @keyframes transmitProgressBar {
          to { width: 100%; }
        }

        /* Footer line */
        .contact-footer-line {
          margin-top: 8rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(245, 245, 245, 0.06);
          text-align: center;
        }

        .footer-copyright-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: rgba(245, 245, 245, 0.25);
          text-transform: uppercase;
        }

        /* Intersection Observer entry animations */
        .fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .contact-telemetry-panel, .contact-form-panel, .contact-footer-line {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.65, 0, 0.35, 1), transform 0.8s cubic-bezier(0.65, 0, 0.35, 1);
        }

        @media (max-width: 992px) {
          .contact-section-container {
            padding: 6rem 2rem 4rem 2rem;
          }

          .contact-dashboard-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }

          .contact-hud-title {
            font-size: 3.5rem;
          }
        }

        @media (max-width: 768px) {
          .contact-inputs-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .terminal-result-card {
            padding: 2rem;
          }
        }
      `})]})}e.s(["default",0,function(){let[e,o]=(0,r.useState)(!1),[s,c]=(0,r.useState)(!1),[d,x]=(0,r.useState)(!1);return(0,t.jsxs)(t.Fragment,{children:[!e&&(0,t.jsx)(i,{onComplete:()=>o(!0),onStartTransition:()=>c(!0)}),(0,t.jsx)(n,{}),(0,t.jsx)(a,{}),s&&(0,t.jsxs)("main",{children:[(0,t.jsx)(l,{onLogoDoubleClick:()=>x(!0)}),(0,t.jsx)(m,{}),(0,t.jsx)(y,{}),(0,t.jsx)(S,{}),(0,t.jsx)(I,{}),(0,t.jsx)(w,{isOpen:d,onClose:()=>x(!1)})]})]})}],52683)}]);