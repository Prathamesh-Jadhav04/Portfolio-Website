module.exports=[40777,a=>{"use strict";var b=a.i(87924),c=a.i(72131);function d({onComplete:a,onStartTransition:e}){let f=(0,c.useRef)(null),g=(0,c.useRef)(null),h=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let b=f.current,c=g.current,d=h.current;if(!b||!c||!d)return;let i=setTimeout(()=>{c.classList.add("visible")},100),j=setTimeout(()=>{d.classList.add("loaded")},200),k=setTimeout(()=>{b.classList.add("hidden"),e&&e()},1800),l=setTimeout(()=>{a()},3600);return()=>{clearTimeout(i),clearTimeout(j),clearTimeout(k),clearTimeout(l)}},[a]),(0,b.jsx)("div",{ref:f,className:"loader",children:(0,b.jsxs)("div",{className:"loader-content",children:[(0,b.jsx)("span",{ref:g,className:"loader-text",children:"PRATHAMESH JADHAV"}),(0,b.jsx)("div",{ref:h,className:"loader-bar"})]})})}function e(){let a=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let b=a.current;if(!b)return;let c=0,d=0,e=!1,f=()=>{let a=e?"scale(2.5)":"scale(1)";b.style.transform=`translate(calc(${c}px - 50%), calc(${d}px - 50%)) ${a}`},g=a=>{c=a.clientX,d=a.clientY,f()},h=a=>{let b=a.target;b instanceof Element&&b.closest("[data-magnetic]")&&(e=!0,f())},i=a=>{let b=a.target;b instanceof Element&&b.closest("[data-magnetic]")&&(e=!1,f())};return document.addEventListener("mousemove",g),document.addEventListener("mouseover",h),document.addEventListener("mouseout",i),()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseover",h),document.removeEventListener("mouseout",i)}},[]),(0,b.jsx)("div",{ref:a,"aria-hidden":"true",style:{position:"fixed",top:0,left:0,width:"20px",height:"20px",borderRadius:"50%",background:"#f5f5f5",mixBlendMode:"difference",zIndex:1e4,pointerEvents:"none",transition:"transform 0.1s, scale 0.2s",willChange:"transform"}})}function f(){return(0,b.jsx)("div",{className:"noise","aria-hidden":"true"})}function g(){let[a,d]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let a=()=>{d(window.scrollY>50)};return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]),(0,b.jsx)("nav",{className:`sticky-nav${a?" scrolled":""}`,children:(0,b.jsxs)("div",{className:"nav-content",children:[(0,b.jsx)("span",{className:"nav-logo",children:"P. JADHAV"}),(0,b.jsxs)("div",{className:"nav-links",children:[(0,b.jsx)("a",{href:"#about",children:"Origin"}),(0,b.jsx)("a",{href:"#projects",children:"Work"}),(0,b.jsx)("a",{href:"#contact",children:"Build"})]})]})})}function h(){return(0,b.jsxs)("section",{id:"hero",className:"full-screen",children:[(0,b.jsxs)("div",{className:"video-container",children:[(0,b.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:"bg-video",children:(0,b.jsx)("source",{src:"https://assets.mixkit.co/videos/preview/mixkit-abstract-dark-ink-swirling-in-water-4331-large.mp4",type:"video/mp4"})}),(0,b.jsx)("div",{className:"video-overlay"})]}),(0,b.jsxs)("div",{className:"hero-content container",children:[(0,b.jsxs)("div",{className:"hero-text-wrapper",children:[(0,b.jsx)("div",{className:"year-badge",children:"EST. 2022"}),(0,b.jsxs)("h1",{className:"hero-headline",children:[(0,b.jsx)("div",{className:"line",children:(0,b.jsx)("span",{children:"I BUILD."})}),(0,b.jsx)("div",{className:"line",children:(0,b.jsx)("span",{children:"I SHIP."})}),(0,b.jsx)("div",{className:"line",children:(0,b.jsx)("span",{children:"I OPTIMIZE."})})]}),(0,b.jsx)("p",{className:"hero-subtext",children:"AI/ML Developer. Data Scientist. GenAI Engineer."})]}),(0,b.jsxs)("div",{className:"scroll-explore",children:[(0,b.jsx)("span",{children:"SCROLL TO EXPLORE"}),(0,b.jsx)("div",{className:"scroll-line"})]})]}),(0,b.jsx)("style",{children:`
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
      `})]})}let i=[{id:1,year:"2022",title:"COMMENCEMENT OF ENGINEERING JOURNEY",description:"Began my Bachelor of Engineering in Computer Science. Stepped into the world of computational thinking, algorithms, and systems architecture.",details:"Immersed myself in foundational engineering mathematics, logical reasoning, and structured programming paradigms."},{id:2,year:"2022",title:"THE FIRST LINE OF CODE",description:'Wrote my very first "Hello World" program. This small print statement ignited a passion for building complex software systems.',details:"Started building command-line utilities and scripts, exploring data structures and debugging processes."},{id:3,year:"2023",title:"MASTERING CS FUNDAMENTALS",description:"Delved deep into Core Computer Science: Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), and Database Management Systems (DBMS).",details:"Designed custom relational database schemas and optimized algorithmic complexities for academic projects."},{id:4,year:"2024",title:"DATA SCIENCE INTERNSHIP",description:"Joined Uptricks Services Pvt. Ltd. as a Data Science Intern. Learned to handle, preprocess, and model complex datasets in Python.",details:"Utilized pandas, numpy, and scikit-learn to analyze and draw actionable patterns from multi-dimensional datasets."},{id:5,year:"2024",title:"SYSTEMS-LEVEL PIPELINES",description:"Architected automated preprocessing pipelines to streamline machine learning workflows and database ingestion.",details:"Significantly minimized data cleanup time and enhanced throughput, bridging raw data engineering with predictive modeling."},{id:6,year:"2025",title:"GENAI & INTELLIGENT APIs",description:"Engineered custom Retrieval-Augmented Generation (RAG) pipelines and automated AI-driven Code Review Chatbots.",details:"Designed highly secure, low-latency RESTful API architectures using FastAPI and Node.js to serve LLM inferences."},{id:7,year:"2026",title:"ENGINEERING GRADUATION",description:"Graduated with a Bachelor of Engineering in Computer Science, maintaining a strong CGPA of 7.8.",details:"Successfully built and defended a Clinical Decision Support System (CDSS) capstone project integrating multi-modal clinical data."},{id:8,year:"2026",title:"NUROSEARCH & DPI ENGINE",description:"Designed and implemented NuroSearch, a custom HNSW-indexed vector database, and DPI Engine, a multi-threaded network packet analysis tool.",details:"Focused on low-latency vector operations, high-concurrency systems, and custom memory management configurations."}];function j(){let[a,d]=(0,c.useState)("2022"),[e,f]=(0,c.useState)(1),g=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let a=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting&&a.target.classList.add("in-view")})},{threshold:.1,rootMargin:"-10% 0px"}),b=g.current?.querySelectorAll(".animate-on-scroll");b?.forEach(b=>a.observe(b));let c=new IntersectionObserver(a=>{a.forEach(a=>{if(a.isIntersecting){let b=a.target.getAttribute("data-year"),c=a.target.getAttribute("data-id");b&&d(b),c&&f(parseInt(c,10))}})},{root:null,rootMargin:"-25% 0px -45% 0px",threshold:.05}),e=g.current?.querySelectorAll(".timeline-card");return e?.forEach(a=>c.observe(a)),()=>{a.disconnect(),c.disconnect()}},[]),(0,b.jsxs)("section",{id:"about",ref:g,style:{padding:"8rem 2rem",maxWidth:"1400px",margin:"0 auto",minHeight:"100vh",display:"flex",alignItems:"center",position:"relative"},children:[(0,b.jsxs)("div",{style:{width:"100%"},children:[(0,b.jsx)("div",{className:"animate-on-scroll",style:{fontFamily:'var(--font-jetbrains-mono, "JetBrains Mono", monospace)',fontSize:"0.7rem",letterSpacing:"0.3em",textTransform:"uppercase",color:"var(--accent-amber, #ffb400)",marginBottom:"3rem",opacity:0,transform:"translateY(20px)",transition:"opacity 0.7s cubic-bezier(.65,0,.35,1), transform 0.7s cubic-bezier(.65,0,.35,1)"},children:"01 / Origin"}),(0,b.jsxs)("div",{className:"about-grid",children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{style:{marginBottom:"5rem"},children:[(0,b.jsxs)("h2",{className:"animate-on-scroll",style:{fontFamily:'var(--font-bebas-neue, "Bebas Neue", cursive)',fontSize:"clamp(3rem, 6vw, 6rem)",lineHeight:.9,color:"var(--text-color, #f5f5f5)",opacity:0,transform:"translateY(30px)",transition:"opacity 0.8s cubic-bezier(.65,0,.35,1) 0.1s, transform 0.8s cubic-bezier(.65,0,.35,1) 0.1s",marginBottom:"2rem"},children:["BUILDING",(0,b.jsx)("br",{}),(0,b.jsx)("span",{style:{color:"var(--accent-amber, #ffb400)"},children:"THINGS"}),(0,b.jsx)("br",{}),"THAT MATTER."]}),(0,b.jsxs)("div",{className:"animate-on-scroll",style:{opacity:0,transform:"translateY(20px)",transition:"opacity 0.8s cubic-bezier(.65,0,.35,1) 0.2s, transform 0.8s cubic-bezier(.65,0,.35,1) 0.2s"},children:[(0,b.jsx)("p",{style:{fontFamily:'var(--font-inter, "Inter", sans-serif)',fontWeight:300,fontSize:"1.1rem",lineHeight:1.8,color:"var(--text-dim, rgba(245,245,245,0.5))",marginBottom:"1.5rem"},children:"I'm Prathamesh Jadhav — an engineering-focused AI/ML developer specializing in building production-grade vector databases, RAG pipelines, and intelligent API systems."}),(0,b.jsx)("p",{style:{fontFamily:'var(--font-inter, "Inter", sans-serif)',fontWeight:300,fontSize:"1.1rem",lineHeight:1.8,color:"var(--text-dim, rgba(245,245,245,0.5))",marginBottom:"2rem"},children:"From custom HNSW indexing to systems-level multi-threaded network analysis, I focus on building scalable, low-latency architectures that bridge AI research and robust production systems."}),(0,b.jsx)("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",marginBottom:"3rem"},children:["Vector Search","RAG Pipelines","GenAI APIs","Network Systems","Performance Tuning"].map(a=>(0,b.jsx)("span",{style:{fontFamily:'var(--font-jetbrains-mono, "JetBrains Mono", monospace)',fontSize:"0.65rem",letterSpacing:"0.08em",color:"var(--accent-amber, #ffb400)",background:"rgba(255, 180, 0, 0.05)",border:"1px solid rgba(255, 180, 0, 0.12)",borderRadius:"4px",padding:"0.35rem 0.75rem",textTransform:"uppercase"},children:a},a))})]})]}),(0,b.jsx)("div",{className:"animate-on-scroll",style:{fontFamily:'var(--font-jetbrains-mono, "JetBrains Mono", monospace)',fontSize:"0.65rem",letterSpacing:"0.2em",color:"rgba(245, 245, 245, 0.3)",textTransform:"uppercase",marginBottom:"2.5rem",opacity:0,transform:"translateY(15px)",transition:"opacity 0.6s ease, transform 0.6s ease"},children:"// Interactive Journey & Milestones"}),(0,b.jsx)("div",{className:"timeline-container",children:i.map(a=>{let c=e===a.id;return(0,b.jsxs)("div",{"data-year":a.year,"data-id":a.id,className:`timeline-card ${c?"active":""}`,onClick:()=>{let b=document.querySelector(`[data-id="${a.id}"]`);b?.scrollIntoView({behavior:"smooth",block:"center"})},children:[(0,b.jsx)("div",{className:"mobile-year-badge",children:a.year}),(0,b.jsx)("div",{className:`timeline-dot ${c?"active":""}`}),(0,b.jsx)("h3",{className:"timeline-card-title",children:a.title}),(0,b.jsx)("p",{className:"timeline-card-desc",children:a.description}),a.details&&(0,b.jsx)("p",{className:"timeline-card-details",children:a.details})]},a.id)})})]}),(0,b.jsx)("div",{className:"sticky-year-container",children:(0,b.jsxs)("div",{className:"sticky-year-content",children:[(0,b.jsx)("span",{className:"sticky-year-label",children:"YEAR"}),(0,b.jsx)("div",{className:"timeline-year-display",children:a},a),(0,b.jsxs)("div",{className:"sticky-year-details",children:[(0,b.jsx)("span",{children:"// 19.0760° N, 72.8777° E"}),(0,b.jsx)("span",{children:"// CORE_SYSTEM_INDEXING: ACTIVE"}),(0,b.jsx)("span",{children:"// INDEX: HNSW_INDEX_FOUND"})]})]})})]})]}),(0,b.jsx)("style",{children:`
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
          gap: 2.5rem;
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
          padding: 2.2rem;
          background: rgba(245, 245, 245, 0.012);
          border: 1px solid rgba(245, 245, 245, 0.03);
          border-radius: 8px;
          cursor: pointer;
          opacity: 0.3;
          transform: scale(0.97);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .timeline-card.active {
          opacity: 1;
          transform: scale(1);
          background: rgba(255, 180, 0, 0.015) !important;
          border-color: rgba(255, 180, 0, 0.2) !important;
          border-left: 3px solid var(--accent-amber, #ffb400) !important;
          padding-left: calc(2.2rem - 2px) !important;
          box-shadow: 0 15px 40px -15px rgba(255, 180, 0, 0.08), inset 0 1px 0px rgba(255, 255, 255, 0.05);
        }

        .timeline-card:hover {
          border-color: rgba(245, 245, 245, 0.12);
          background: rgba(245, 245, 245, 0.02);
        }

        .timeline-card.active:hover {
          border-color: rgba(255, 180, 0, 0.35) !important;
          background: rgba(255, 180, 0, 0.025) !important;
        }

        .timeline-card-title {
          font-family: var(--font-bebas-neue, "Bebas Neue", cursive);
          font-size: 1.6rem;
          letter-spacing: 0.05em;
          color: rgba(245, 245, 245, 0.85);
          margin-bottom: 0.8rem;
          transition: color 0.4s ease;
        }

        .timeline-card.active .timeline-card-title {
          color: var(--accent-amber, #ffb400);
        }

        .timeline-card-desc {
          font-family: var(--font-inter, "Inter", sans-serif);
          font-weight: 300;
          font-size: 1.05rem;
          line-height: 1.6;
          color: rgba(245, 245, 245, 0.5);
          transition: color 0.4s ease;
          margin-bottom: 0.6rem;
        }

        .timeline-card.active .timeline-card-desc {
          color: rgba(245, 245, 245, 0.85);
        }

        .timeline-card-details {
          font-family: var(--font-inter, "Inter", sans-serif);
          font-weight: 300;
          font-size: 0.9rem;
          line-height: 1.5;
          color: rgba(245, 245, 245, 0.25);
          transition: color 0.4s ease;
        }

        .timeline-card.active .timeline-card-details {
          color: rgba(245, 245, 245, 0.55);
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
            opacity: 0.85;
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
      `})]})}let k=[{id:"01",title:"NUROSEARCH",year:"2026",tags:["AI/ML","Vector DB","RAG"],description:"Custom vector database from scratch implementing HNSW indexing and a full-stack RAG pipeline."},{id:"02",title:"DPI ENGINE",year:"2026",tags:["Systems","Python","Networking"],description:"Multi-threaded deep packet inspection engine analyzing 500+ packets/sec with TLS SNI extraction."},{id:"03",title:"KOZUMIHUB",year:"2026",tags:["TypeScript","Next.js","Web App"],description:"Entertainment discovery platform for anime and movies featuring smart discovery and immersive UI."},{id:"04",title:"SPENDSTRACK",year:"2026",tags:["Finance","TypeScript","Dashboard"],description:"Personal wealth tracking application with dynamic visualization and category analytics."},{id:"05",title:"CODE CHATBOT",year:"2025",tags:["AI","Python","LLM"],description:"Automated AI assistant built to review pull requests and provide constructive feedback on code structure."}];function l({project:a,index:d}){let[e,f]=(0,c.useState)(!1),[g,h]=(0,c.useState)(!1),i=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let a=i.current;if(!a)return;let b=new IntersectionObserver(([a])=>{a.isIntersecting&&(setTimeout(()=>h(!0),120*d),b.disconnect())},{threshold:.15});return b.observe(a),()=>b.disconnect()},[d]),(0,b.jsxs)("div",{ref:i,onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),style:{borderTop:"1px solid rgba(245,245,245,0.08)",padding:"2.5rem 0",cursor:"pointer",opacity:+!!g,transform:g?"translateY(0)":"translateY(40px)",transition:"opacity 0.7s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s cubic-bezier(0.65, 0, 0.35, 1)"},children:[(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"2rem"},children:[(0,b.jsxs)("div",{style:{display:"flex",alignItems:"baseline",gap:"2rem",flex:1},children:[(0,b.jsx)("span",{style:{fontFamily:"JetBrains Mono, monospace",fontSize:"0.7rem",letterSpacing:"0.15em",color:"rgba(245,245,245,0.3)",flexShrink:0},children:a.id}),(0,b.jsx)("span",{style:{fontFamily:"Bebas Neue, sans-serif",fontSize:"clamp(2rem, 4vw, 3.5rem)",lineHeight:1,color:e?"#ffb400":"#f5f5f5",transition:"color 0.4s cubic-bezier(0.65, 0, 0.35, 1)",letterSpacing:"0.02em"},children:a.title}),(0,b.jsx)("span",{style:{fontFamily:"Inter, sans-serif",fontWeight:300,fontSize:"0.85rem",color:"rgba(245,245,245,0.4)",display:"none"},className:"project-desc",children:a.description})]}),(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"1.5rem",flexShrink:0},children:[(0,b.jsx)("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",justifyContent:"flex-end"},children:a.tags.map(a=>(0,b.jsx)("span",{style:{fontFamily:"JetBrains Mono, monospace",fontSize:"0.6rem",letterSpacing:"0.15em",color:"rgba(245,245,245,0.4)",border:"1px solid rgba(245,245,245,0.12)",borderRadius:"999px",padding:"0.25rem 0.75rem",textTransform:"uppercase",whiteSpace:"nowrap"},children:a},a))}),(0,b.jsx)("span",{style:{fontFamily:"JetBrains Mono, monospace",fontSize:"0.7rem",letterSpacing:"0.1em",color:"rgba(245,245,245,0.3)",minWidth:"3rem",textAlign:"right"},children:a.year}),(0,b.jsx)("span",{"aria-hidden":"true",style:{fontFamily:"JetBrains Mono, monospace",fontSize:"1.2rem",color:"#ffb400",opacity:+!!e,transform:e?"translateX(0)":"translateX(-8px)",transition:"opacity 0.35s cubic-bezier(0.65, 0, 0.35, 1), transform 0.35s cubic-bezier(0.65, 0, 0.35, 1)",minWidth:"1.5rem",display:"inline-block"},children:"→"})]})]}),(0,b.jsx)("div",{style:{paddingLeft:"calc(2rem + 2ch + 2rem)",marginTop:"0.75rem"},children:(0,b.jsx)("span",{style:{fontFamily:"Inter, sans-serif",fontWeight:300,fontSize:"0.8rem",color:e?"rgba(245,245,245,0.55)":"rgba(245,245,245,0.3)",transition:"color 0.4s cubic-bezier(0.65, 0, 0.35, 1)",letterSpacing:"0.01em"},children:a.description})})]})}function m(){let a=(0,c.useRef)(null),[d,e]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let b=a.current;if(!b)return;let c=new IntersectionObserver(([a])=>{a.isIntersecting&&(e(!0),c.disconnect())},{threshold:.2});return c.observe(b),()=>c.disconnect()},[]),(0,b.jsx)("section",{id:"projects",style:{padding:"8rem 2rem",backgroundColor:"#0a0a0a"},children:(0,b.jsxs)("div",{style:{maxWidth:"1400px",margin:"0 auto"},children:[(0,b.jsx)("div",{ref:a,style:{fontFamily:"JetBrains Mono, monospace",fontSize:"0.7rem",letterSpacing:"0.3em",color:"#ffb400",marginBottom:"3rem",textTransform:"uppercase",opacity:+!!d,transform:d?"translateY(0)":"translateY(20px)",transition:"opacity 0.6s cubic-bezier(0.65, 0, 0.35, 1), transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)"},children:"02 / Work"}),(0,b.jsx)("h2",{style:{fontFamily:"Bebas Neue, sans-serif",fontSize:"clamp(3rem, 6vw, 6rem)",lineHeight:.9,color:"#f5f5f5",margin:"0 0 5rem 0",letterSpacing:"0.02em",opacity:+!!d,transform:d?"translateY(0)":"translateY(30px)",transition:"opacity 0.7s 0.1s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s 0.1s cubic-bezier(0.65, 0, 0.35, 1)"},children:"SELECTED WORK"}),(0,b.jsxs)("div",{children:[k.map((a,c)=>(0,b.jsx)(l,{project:a,index:c},a.id)),(0,b.jsx)("div",{style:{borderTop:"1px solid rgba(245,245,245,0.08)"}})]})]})})}let n=[{label:"GitHub",href:"https://github.com/Prathamesh-Jadhav04",icon:(0,b.jsx)(function(){return(0,b.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:(0,b.jsx)("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"})})},{})},{label:"LinkedIn",href:"https://linkedin.com/in/prathamesh-jadhav04",icon:(0,b.jsx)(function(){return(0,b.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:(0,b.jsx)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})},{})}];function o({link:a}){let[d,e]=(0,c.useState)(!1);return(0,b.jsxs)("a",{href:a.href,target:"_blank",rel:"noopener noreferrer","aria-label":a.label,onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),style:{display:"flex",alignItems:"center",gap:"0.5rem",color:d?"#ffb400":"rgba(245,245,245,0.4)",textDecoration:"none",fontFamily:"JetBrains Mono, monospace",fontSize:"0.65rem",letterSpacing:"0.15em",textTransform:"uppercase",transition:"color 0.3s cubic-bezier(0.65, 0, 0.35, 1)",padding:"0.5rem"},children:[a.icon,(0,b.jsx)("span",{children:a.label})]})}function p(){let a=(0,c.useRef)(null),[d,e]=(0,c.useState)(!1),[f,g]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let b=a.current;if(!b)return;let c=new IntersectionObserver(([a])=>{a.isIntersecting&&(e(!0),c.disconnect())},{threshold:.2});return c.observe(b),()=>c.disconnect()},[]),(0,b.jsx)("section",{id:"contact",style:{padding:"8rem 2rem",borderTop:"1px solid rgba(245,245,245,0.08)",backgroundColor:"#0a0a0a"},children:(0,b.jsxs)("div",{ref:a,style:{maxWidth:"1400px",margin:"0 auto",textAlign:"center"},children:[(0,b.jsx)("div",{style:{fontFamily:"JetBrains Mono, monospace",fontSize:"0.7rem",letterSpacing:"0.3em",color:"#ffb400",marginBottom:"2rem",textTransform:"uppercase",opacity:+!!d,transform:d?"translateY(0)":"translateY(20px)",transition:"opacity 0.6s cubic-bezier(0.65, 0, 0.35, 1), transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)"},children:"03 / Build"}),(0,b.jsx)("h2",{style:{fontFamily:"Bebas Neue, sans-serif",fontSize:"clamp(3.5rem, 8vw, 8rem)",lineHeight:.9,color:"#f5f5f5",margin:"0 0 2rem 0",letterSpacing:"0.02em",opacity:+!!d,transform:d?"translateY(0)":"translateY(30px)",transition:"opacity 0.7s 0.1s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s 0.1s cubic-bezier(0.65, 0, 0.35, 1)"},children:"LET'S BUILD SOMETHING."}),(0,b.jsx)("p",{style:{fontFamily:"Inter, sans-serif",fontWeight:300,fontSize:"clamp(0.9rem, 1.5vw, 1.1rem)",color:"rgba(245,245,245,0.5)",margin:"0",opacity:+!!d,transform:d?"translateY(0)":"translateY(20px)",transition:"opacity 0.7s 0.2s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s 0.2s cubic-bezier(0.65, 0, 0.35, 1)"},children:"Have an idea? Let's make it real."}),(0,b.jsx)("div",{style:{opacity:+!!d,transform:d?"translateY(0)":"translateY(20px)",transition:"opacity 0.7s 0.3s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s 0.3s cubic-bezier(0.65, 0, 0.35, 1)"},children:(0,b.jsx)("a",{href:"mailto:Prathamesh.Jadhav.Office@gmail.com",onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),style:{border:"1px solid #ffb400",color:f?"#0a0a0a":"#ffb400",backgroundColor:f?"#ffb400":"transparent",padding:"1rem 3rem",fontFamily:"JetBrains Mono, monospace",fontSize:"0.75rem",letterSpacing:"0.2em",textTransform:"uppercase",textDecoration:"none",display:"inline-block",marginTop:"3rem",transition:"all 0.3s cubic-bezier(0.65, 0, 0.35, 1)"},children:"GET IN TOUCH"})}),(0,b.jsx)("div",{style:{display:"flex",gap:"2rem",justifyContent:"center",marginTop:"4rem",flexWrap:"wrap",opacity:+!!d,transform:d?"translateY(0)":"translateY(20px)",transition:"opacity 0.7s 0.4s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s 0.4s cubic-bezier(0.65, 0, 0.35, 1)"},children:n.map(a=>(0,b.jsx)(o,{link:a},a.label))}),(0,b.jsx)("div",{style:{marginTop:"6rem",paddingTop:"2rem",borderTop:"1px solid rgba(245,245,245,0.08)",opacity:+!!d,transition:"opacity 0.7s 0.5s cubic-bezier(0.65, 0, 0.35, 1)"},children:(0,b.jsx)("span",{style:{fontFamily:"JetBrains Mono, monospace",fontSize:"0.65rem",letterSpacing:"0.2em",color:"rgba(245,245,245,0.3)",textTransform:"uppercase"},children:"© 2026 PRATHAMESH JADHAV. BUILT WITH PURPOSE."})})]})})}a.s(["default",0,function(){let[a,i]=(0,c.useState)(!1),[k,l]=(0,c.useState)(!1);return(0,b.jsxs)(b.Fragment,{children:[!a&&(0,b.jsx)(d,{onComplete:()=>i(!0),onStartTransition:()=>l(!0)}),(0,b.jsx)(f,{}),(0,b.jsx)(e,{}),k&&(0,b.jsxs)("main",{children:[(0,b.jsx)(g,{}),(0,b.jsx)(h,{}),(0,b.jsx)(j,{}),(0,b.jsx)(m,{}),(0,b.jsx)(p,{})]})]})}],40777)}];

//# sourceMappingURL=src_app_page_tsx_0ss2.w7._.js.map