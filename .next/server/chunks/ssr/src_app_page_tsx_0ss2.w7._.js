module.exports=[40777,a=>{"use strict";var b=a.i(87924),c=a.i(72131);function d({onComplete:a,onStartTransition:e}){let f=(0,c.useRef)(null),g=(0,c.useRef)(null),h=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let b=f.current,c=g.current,d=h.current;if(!b||!c||!d)return;let i=setTimeout(()=>{c.classList.add("visible")},100),j=setTimeout(()=>{d.classList.add("loaded")},200),k=setTimeout(()=>{b.classList.add("hidden"),e&&e()},1800),l=setTimeout(()=>{a()},3600);return()=>{clearTimeout(i),clearTimeout(j),clearTimeout(k),clearTimeout(l)}},[a]),(0,b.jsx)("div",{ref:f,className:"loader",children:(0,b.jsxs)("div",{className:"loader-content",children:[(0,b.jsx)("span",{ref:g,className:"loader-text",children:"PRATHAMESH JADHAV"}),(0,b.jsx)("div",{ref:h,className:"loader-bar"})]})})}function e(){let a=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let b=a.current;if(!b)return;let c=0,d=0,e=!1,f=()=>{let a=e?"scale(2.5)":"scale(1)";b.style.transform=`translate(calc(${c}px - 50%), calc(${d}px - 50%)) ${a}`},g=a=>{c=a.clientX,d=a.clientY,f()},h=a=>{let b=a.target;b instanceof Element&&b.closest("[data-magnetic]")&&(e=!0,f())},i=a=>{let b=a.target;b instanceof Element&&b.closest("[data-magnetic]")&&(e=!1,f())};return document.addEventListener("mousemove",g),document.addEventListener("mouseover",h),document.addEventListener("mouseout",i),()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseover",h),document.removeEventListener("mouseout",i)}},[]),(0,b.jsx)("div",{ref:a,"aria-hidden":"true",style:{position:"fixed",top:0,left:0,width:"20px",height:"20px",borderRadius:"50%",background:"#f5f5f5",mixBlendMode:"difference",zIndex:1e4,pointerEvents:"none",transition:"transform 0.1s, scale 0.2s",willChange:"transform"}})}function f(){return(0,b.jsx)("div",{className:"noise","aria-hidden":"true"})}function g({children:a,range:b=60,strength:d=.35}){let e=(0,c.useRef)(null),[f,h]=(0,c.useState)({x:0,y:0});(0,c.useEffect)(()=>{let a=e.current;if(!a)return;let c=c=>{let{clientX:e,clientY:f}=c,g=a.getBoundingClientRect(),i=g.left+g.width/2,j=g.top+g.height/2,k=e-i,l=f-j;Math.hypot(k,l)<b?h({x:k*d,y:l*d}):h({x:0,y:0})},f=()=>{h({x:0,y:0})};return window.addEventListener("mousemove",c),a.addEventListener("mouseleave",f),()=>{window.removeEventListener("mousemove",c),a.removeEventListener("mouseleave",f)}},[b,d]);let i=c.default.Children.only(a);return c.default.cloneElement(i,{ref:e,style:{...i.props.style,transform:`translate(${f.x}px, ${f.y}px)`,transition:0===f.x&&0===f.y?"transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)":"transform 0.1s ease-out",willChange:"transform",display:i.props.style?.display||"inline-block"}})}function h(){let[a,d]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let a=()=>{d(window.scrollY>50)};return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]),(0,b.jsx)("nav",{className:`sticky-nav${a?" scrolled":""}`,children:(0,b.jsxs)("div",{className:"nav-content",children:[(0,b.jsx)("span",{className:"nav-logo",children:"P. JADHAV"}),(0,b.jsxs)("div",{className:"nav-links",children:[(0,b.jsx)(g,{children:(0,b.jsx)("a",{href:"#about",children:"Origin"})}),(0,b.jsx)(g,{children:(0,b.jsx)("a",{href:"#projects",children:"Work"})}),(0,b.jsx)(g,{children:(0,b.jsx)("a",{href:"#contact",children:"Build"})})]})]})})}function i(){return(0,b.jsxs)("section",{id:"hero",className:"full-screen",children:[(0,b.jsxs)("div",{className:"video-container",children:[(0,b.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:"bg-video",children:(0,b.jsx)("source",{src:"https://assets.mixkit.co/videos/preview/mixkit-abstract-dark-ink-swirling-in-water-4331-large.mp4",type:"video/mp4"})}),(0,b.jsx)("div",{className:"video-overlay"})]}),(0,b.jsxs)("div",{className:"hero-content container",children:[(0,b.jsxs)("div",{className:"hero-text-wrapper",children:[(0,b.jsx)("div",{className:"year-badge",children:"EST. 2022"}),(0,b.jsxs)("h1",{className:"hero-headline",children:[(0,b.jsx)("div",{className:"line",children:(0,b.jsx)("span",{children:"I BUILD."})}),(0,b.jsx)("div",{className:"line",children:(0,b.jsx)("span",{children:"I SHIP."})}),(0,b.jsx)("div",{className:"line",children:(0,b.jsx)("span",{children:"I OPTIMIZE."})})]}),(0,b.jsx)("p",{className:"hero-subtext",children:"AI/ML Developer. Data Scientist. GenAI Engineer."})]}),(0,b.jsxs)("div",{className:"scroll-explore",children:[(0,b.jsx)("span",{children:"SCROLL TO EXPLORE"}),(0,b.jsx)("div",{className:"scroll-line"})]})]}),(0,b.jsx)("style",{children:`
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
      `})]})}let j=[{id:1,year:"2022",title:"COMMENCEMENT OF ENGINEERING JOURNEY",description:"Began my Bachelor of Engineering in Computer Science. Stepped into the world of computational thinking, algorithms, and systems architecture.",details:"Immersed myself in foundational engineering mathematics, logical reasoning, and structured programming paradigms."},{id:2,year:"2022",title:"THE FIRST LINE OF CODE",description:'Wrote my very first "Hello World" program. This small print statement ignited a passion for building complex software systems.',details:"Started building command-line utilities and scripts, exploring data structures and debugging processes."},{id:3,year:"2023",title:"MASTERING CS FUNDAMENTALS",description:"Delved deep into Core Computer Science: Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), and Database Management Systems (DBMS).",details:"Designed custom relational database schemas and optimized algorithmic complexities for academic projects."},{id:4,year:"2024",title:"DATA SCIENCE INTERNSHIP",description:"Joined Uptricks Services Pvt. Ltd. as a Data Science Intern. Learned to handle, preprocess, and model complex datasets in Python.",details:"Utilized pandas, numpy, and scikit-learn to analyze and draw actionable patterns from multi-dimensional datasets."},{id:5,year:"2024",title:"SYSTEMS-LEVEL PIPELINES",description:"Architected automated preprocessing pipelines to streamline machine learning workflows and database ingestion.",details:"Significantly minimized data cleanup time and enhanced throughput, bridging raw data engineering with predictive modeling."},{id:6,year:"2025",title:"GENAI & INTELLIGENT APIs",description:"Engineered custom Retrieval-Augmented Generation (RAG) pipelines and automated AI-driven Code Review Chatbots.",details:"Designed highly secure, low-latency RESTful API architectures using FastAPI and Node.js to serve LLM inferences."},{id:7,year:"2026",title:"ENGINEERING GRADUATION",description:"Graduated with a Bachelor of Engineering in Computer Science, maintaining a strong CGPA of 7.8.",details:"Successfully built and defended a Clinical Decision Support System (CDSS) capstone project integrating multi-modal clinical data."},{id:8,year:"2026",title:"NUROSEARCH & DPI ENGINE",description:"Designed and implemented NuroSearch, a custom HNSW-indexed vector database, and DPI Engine, a multi-threaded network packet analysis tool.",details:"Focused on low-latency vector operations, high-concurrency systems, and custom memory management configurations."}];function k(){let[a,d]=(0,c.useState)("2022"),[e,f]=(0,c.useState)(1),g=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let a=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting&&a.target.classList.add("in-view")})},{threshold:.1,rootMargin:"-10% 0px"}),b=g.current?.querySelectorAll(".animate-on-scroll");b?.forEach(b=>a.observe(b));let c=new IntersectionObserver(a=>{a.forEach(a=>{if(a.isIntersecting){let b=a.target.getAttribute("data-year"),c=a.target.getAttribute("data-id");b&&d(b),c&&f(parseInt(c,10))}})},{root:null,rootMargin:"-25% 0px -45% 0px",threshold:.05}),e=g.current?.querySelectorAll(".timeline-card");return e?.forEach(a=>c.observe(a)),()=>{a.disconnect(),c.disconnect()}},[]),(0,b.jsxs)("section",{id:"about",ref:g,style:{padding:"8rem 2rem",maxWidth:"1400px",margin:"0 auto",minHeight:"100vh",display:"flex",alignItems:"center",position:"relative"},children:[(0,b.jsxs)("div",{style:{width:"100%"},children:[(0,b.jsx)("div",{className:"animate-on-scroll",style:{fontFamily:'var(--font-jetbrains-mono, "JetBrains Mono", monospace)',fontSize:"0.7rem",letterSpacing:"0.3em",textTransform:"uppercase",color:"var(--accent-amber, #ffb400)",marginBottom:"3rem",opacity:0,transform:"translateY(20px)",transition:"opacity 0.7s cubic-bezier(.65,0,.35,1), transform 0.7s cubic-bezier(.65,0,.35,1)"},children:"01 / Origin"}),(0,b.jsxs)("div",{className:"about-grid",children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{style:{marginBottom:"5rem"},children:[(0,b.jsxs)("h2",{className:"animate-on-scroll",style:{fontFamily:'var(--font-bebas-neue, "Bebas Neue", cursive)',fontSize:"clamp(3rem, 6vw, 6rem)",lineHeight:.9,color:"var(--text-color, #f5f5f5)",opacity:0,transform:"translateY(30px)",transition:"opacity 0.8s cubic-bezier(.65,0,.35,1) 0.1s, transform 0.8s cubic-bezier(.65,0,.35,1) 0.1s",marginBottom:"2rem"},children:["BUILDING",(0,b.jsx)("br",{}),(0,b.jsx)("span",{style:{color:"var(--accent-amber, #ffb400)"},children:"THINGS"}),(0,b.jsx)("br",{}),"THAT MATTER."]}),(0,b.jsxs)("div",{className:"animate-on-scroll",style:{opacity:0,transform:"translateY(20px)",transition:"opacity 0.8s cubic-bezier(.65,0,.35,1) 0.2s, transform 0.8s cubic-bezier(.65,0,.35,1) 0.2s"},children:[(0,b.jsx)("p",{style:{fontFamily:'var(--font-inter, "Inter", sans-serif)',fontWeight:300,fontSize:"1.1rem",lineHeight:1.8,color:"var(--text-dim, rgba(245,245,245,0.5))",marginBottom:"1.5rem"},children:"I'm Prathamesh Jadhav — an engineering-focused AI/ML developer specializing in building production-grade vector databases, RAG pipelines, and intelligent API systems."}),(0,b.jsx)("p",{style:{fontFamily:'var(--font-inter, "Inter", sans-serif)',fontWeight:300,fontSize:"1.1rem",lineHeight:1.8,color:"var(--text-dim, rgba(245,245,245,0.5))",marginBottom:"2rem"},children:"From custom HNSW indexing to systems-level multi-threaded network analysis, I focus on building scalable, low-latency architectures that bridge AI research and robust production systems."}),(0,b.jsx)("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",marginBottom:"3rem"},children:["Vector Search","RAG Pipelines","GenAI APIs","Network Systems","Performance Tuning"].map(a=>(0,b.jsx)("span",{style:{fontFamily:'var(--font-jetbrains-mono, "JetBrains Mono", monospace)',fontSize:"0.65rem",letterSpacing:"0.08em",color:"var(--accent-amber, #ffb400)",background:"rgba(255, 180, 0, 0.05)",border:"1px solid rgba(255, 180, 0, 0.12)",borderRadius:"4px",padding:"0.35rem 0.75rem",textTransform:"uppercase"},children:a},a))})]})]}),(0,b.jsx)("div",{className:"animate-on-scroll",style:{fontFamily:'var(--font-jetbrains-mono, "JetBrains Mono", monospace)',fontSize:"0.65rem",letterSpacing:"0.2em",color:"rgba(245, 245, 245, 0.3)",textTransform:"uppercase",marginBottom:"2.5rem",opacity:0,transform:"translateY(15px)",transition:"opacity 0.6s ease, transform 0.6s ease"},children:"// Interactive Journey & Milestones"}),(0,b.jsx)("div",{className:"timeline-container",children:j.map(a=>{let c=e===a.id;return(0,b.jsxs)("div",{"data-year":a.year,"data-id":a.id,className:`timeline-card ${c?"active":""}`,onClick:()=>{let b=document.querySelector(`[data-id="${a.id}"]`);b?.scrollIntoView({behavior:"smooth",block:"center"})},children:[(0,b.jsx)("div",{className:"mobile-year-badge",children:a.year}),(0,b.jsx)("div",{className:`timeline-dot ${c?"active":""}`}),(0,b.jsx)("h3",{className:"timeline-card-title",children:a.title}),(0,b.jsx)("p",{className:"timeline-card-desc",children:a.description}),a.details&&(0,b.jsx)("p",{className:"timeline-card-details",children:a.details})]},a.id)})})]}),(0,b.jsx)("div",{className:"sticky-year-container",children:(0,b.jsxs)("div",{className:"sticky-year-content",children:[(0,b.jsx)("span",{className:"sticky-year-label",children:"YEAR"}),(0,b.jsx)("div",{className:"timeline-year-display",children:a},a),(0,b.jsxs)("div",{className:"sticky-year-details",children:[(0,b.jsx)("span",{children:"// 19.0760° N, 72.8777° E"}),(0,b.jsx)("span",{children:"// CORE_SYSTEM_INDEXING: ACTIVE"}),(0,b.jsx)("span",{children:"// INDEX: HNSW_INDEX_FOUND"})]})]})})]})]}),(0,b.jsx)("style",{children:`
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
      `})]})}let l={"01":{role:"Lead AI Systems Architect",challenges:["Standard high-dimensional vector lookups scale at O(N) linear time, causing massive latency bottlenecks for production RAG systems.","Ensuring thread safety and low latency during concurrent index builds and query phases."],solutions:["Implemented a Hierarchical Navigable Small World (HNSW) vector index from scratch, bringing search complexity down to O(log N).","Designed dynamic thread-safe insertion rules using custom locking nodes and pointer synchronization.","Built a complete chunk-level semantic cache in FastAPI integrated with OpenAI embeddings."],metrics:["Reduced average query retrieval latency to <15ms on 100,000+ vector nodes.","Achieved a 35% memory footprint reduction through scalar quantization codecs."],technologies:["Python","Rust","FastAPI","NumPy","OpenAI API","HNSW Indexing"],githubUrl:"https://github.com/Prathamesh-Jadhav04/NuroSearch"},"02":{role:"Backend & Networking Systems Engineer",challenges:["Extracting TLS Server Name Indication (SNI) hostnames in real-time under high-throughput network loads without packets dropping.","Developing thread-safe logging pipes to prevent memory leak build-ups during continuous stream capture."],solutions:["Developed a multi-threaded C/Python ingestion listener wrapping libpcap for zero packet drop.","Designed a synchronized circular queue isolating raw packet ingestion from header parsing buffers.","Engineered an SNI extraction filter isolating client hello packets."],metrics:["Successfully sustained analysis rates of 500+ packets/sec with 0% packet loss.","Decrypted, mapped, and structured SNI metadata logs instantly into audit database indices."],technologies:["Python","C Language","Scapy","Network Protocols","Multithreading","pcap"],githubUrl:"https://github.com/Prathamesh-Jadhav04/DPI-Engine"},"03":{role:"Full-Stack Developer",challenges:["Managing API rate limit bottlenecks and aggregation delays across separate third-party catalogues (Jikan, TMDB).","Minimizing frontend layout cumulative shifts while dynamically rendering card images."],solutions:["Developed a unified Next.js API route acting as an orchestrator with internal redis cache mapping.","Crafted custom fluid CSS grids layout utilizing relative skeleton placeholder layers.","Configured static asset prefetching rules inside Next.js middleware layers."],metrics:["Achieved dynamic gallery page rendering times of <200ms.","Secured zero Cumulative Layout Shift (CLS) scores during rapid page-page jumps."],technologies:["Next.js","TypeScript","TailwindCSS","Framer Motion","REST APIs","Node.js"],githubUrl:"https://github.com/Prathamesh-Jadhav04/KozumiHub"},"04":{role:"Frontend & Analytics Developer",challenges:["Creating responsive financial tracking graphs that render dynamically without crashing on mobile devices.","Ensuring secure offline database capability with smooth transaction synchronization."],solutions:["Implemented Chart.js layout wrappers optimized for aspect-ratio responsive scale changes.","Designed transactional state engines syncing automatically to structured local storage stores.","Engineered dynamic category filtering rules for instantaneous chart redraw triggers."],metrics:["Instantly updates interactive graphs with zero animation lags.","Supports complete offline capability with zero transaction sync conflicts."],technologies:["Next.js","TypeScript","Chart.js","LocalStorage API","CSS Grid","TailwindCSS"],githubUrl:"https://github.com/Prathamesh-Jadhav04/SpendsTrack"},"05":{role:"DevOps & AI Integration Engineer",challenges:["LLM context limits require chunking diffs while retaining context of pull request logic flow.","Interfacing secure webhook servers that respond instantly and prevent PR review duplicate triggers."],solutions:["Engineered an intelligent AST diff chunker feeding filtered context trees into LLM prompts.","Constructed a reliable FastAPI hook server with internal checksum ID deduplication logic.","Integrated LangChain prompt logic mapped dynamically to GitHub API comment lines."],metrics:["Reviews and comments on pull requests in <8 seconds from commit push.","Achieved 85% satisfaction rating from developers using the automated reviews."],technologies:["Python","FastAPI","LangChain","LLM APIs","GitHub Webhooks","CI/CD Pipelines"],githubUrl:"https://github.com/Prathamesh-Jadhav04/Code-Review-Chatbot"}};function m({id:a}){return"01"===a?(0,b.jsxs)("svg",{width:"100%",height:"180",viewBox:"0 0 400 180",style:{background:"#121212",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1.5rem 0"},children:[(0,b.jsxs)("g",{stroke:"rgba(255,180,0,0.15)",strokeWidth:"1",children:[(0,b.jsx)("line",{x1:"100",y1:"40",x2:"300",y2:"40"}),(0,b.jsx)("line",{x1:"70",y1:"90",x2:"200",y2:"90"}),(0,b.jsx)("line",{x1:"200",y1:"90",x2:"330",y2:"90"}),(0,b.jsx)("line",{x1:"50",y1:"140",x2:"150",y2:"140"}),(0,b.jsx)("line",{x1:"150",y1:"140",x2:"250",y2:"140"}),(0,b.jsx)("line",{x1:"250",y1:"140",x2:"350",y2:"140"}),(0,b.jsx)("line",{x1:"100",y1:"40",x2:"70",y2:"90",strokeDasharray:"3"}),(0,b.jsx)("line",{x1:"300",y1:"40",x2:"330",y2:"90",strokeDasharray:"3"}),(0,b.jsx)("line",{x1:"200",y1:"90",x2:"150",y2:"140",strokeDasharray:"3"}),(0,b.jsx)("line",{x1:"200",y1:"90",x2:"250",y2:"140",strokeDasharray:"3"})]}),(0,b.jsx)("circle",{cx:"100",cy:"40",r:"5",fill:"#ffb400"}),(0,b.jsx)("circle",{cx:"300",cy:"40",r:"5",fill:"#ffb400"}),(0,b.jsx)("circle",{cx:"70",cy:"90",r:"4.5",fill:"#f5f5f5",opacity:"0.8"}),(0,b.jsx)("circle",{cx:"200",cy:"90",r:"4.5",fill:"#ffb400"}),(0,b.jsx)("circle",{cx:"330",cy:"90",r:"4.5",fill:"#f5f5f5",opacity:"0.8"}),(0,b.jsx)("circle",{cx:"50",cy:"140",r:"4",fill:"#f5f5f5",opacity:"0.4"}),(0,b.jsx)("circle",{cx:"150",cy:"140",r:"4",fill:"#f5f5f5",opacity:"0.4"}),(0,b.jsx)("circle",{cx:"250",cy:"140",r:"4",fill:"#ffb400"}),(0,b.jsx)("circle",{cx:"350",cy:"140",r:"4",fill:"#f5f5f5",opacity:"0.4"}),(0,b.jsx)("text",{x:"15",y:"20",fill:"rgba(255,180,0,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",children:"HNSW LAYERED SEARCH TOPOLOGY"}),(0,b.jsx)("text",{x:"105",y:"35",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"ENTRY LAYER"}),(0,b.jsx)("text",{x:"255",y:"152",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"NEAREST NEIGHBOR"})]}):"02"===a?(0,b.jsxs)("svg",{width:"100%",height:"180",viewBox:"0 0 400 180",style:{background:"#121212",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1.5rem 0"},children:[(0,b.jsxs)("g",{stroke:"rgba(255,180,0,0.15)",strokeWidth:"1",fill:"none",children:[(0,b.jsx)("rect",{x:"20",y:"60",width:"70",height:"35",rx:"3"}),(0,b.jsx)("rect",{x:"150",y:"60",width:"90",height:"35",rx:"3"}),(0,b.jsx)("rect",{x:"300",y:"60",width:"80",height:"35",rx:"3"}),(0,b.jsx)("path",{d:"M 90 77 L 150 77",stroke:"#ffb400"}),(0,b.jsx)("path",{d:"M 240 77 L 300 77",stroke:"#ffb400"})]}),(0,b.jsx)("text",{x:"55",y:"81",fill:"#f5f5f5",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"libpcap"}),(0,b.jsx)("text",{x:"195",y:"81",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"parser-queue"}),(0,b.jsx)("text",{x:"340",y:"81",fill:"#f5f5f5",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",textAnchor:"middle",children:"TLS SNI"}),(0,b.jsx)("circle",{cx:"110",cy:"77",r:"2.5",fill:"#ffb400"}),(0,b.jsx)("circle",{cx:"130",cy:"77",r:"2.5",fill:"#ffb400"}),(0,b.jsx)("circle",{cx:"260",cy:"77",r:"2.5",fill:"#ffb400"}),(0,b.jsx)("circle",{cx:"280",cy:"77",r:"2.5",fill:"#ffb400"}),(0,b.jsx)("text",{x:"15",y:"20",fill:"rgba(255,180,0,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",children:"DPI STREAM INGESTION FLOW"}),(0,b.jsx)("text",{x:"150",y:"130",fill:"rgba(245,245,245,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"// Multi-threaded circular packet buffer"})]}):"03"===a?(0,b.jsxs)("svg",{width:"100%",height:"180",viewBox:"0 0 400 180",style:{background:"#121212",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1.5rem 0"},children:[(0,b.jsxs)("g",{stroke:"rgba(255,180,0,0.15)",strokeWidth:"1",fill:"none",children:[(0,b.jsx)("rect",{x:"20",y:"30",width:"360",height:"18",rx:"2"}),(0,b.jsx)("rect",{x:"20",y:"60",width:"105",height:"100",rx:"3"}),(0,b.jsx)("rect",{x:"147",y:"60",width:"105",height:"100",rx:"3"}),(0,b.jsx)("rect",{x:"275",y:"60",width:"105",height:"100",rx:"3"})]}),(0,b.jsx)("rect",{x:"147",y:"60",width:"105",height:"100",rx:"3",fill:"rgba(255,180,0,0.02)",stroke:"#ffb400",strokeWidth:"1"}),(0,b.jsx)("circle",{cx:"200",cy:"110",r:"7",fill:"#ffb400",opacity:"0.6"}),(0,b.jsx)("text",{x:"15",y:"20",fill:"rgba(255,180,0,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",children:"IMMERSIVE MEDIA CATALOG GRID"}),(0,b.jsx)("text",{x:"30",y:"42",fill:"rgba(245,245,245,0.3)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6",children:"SEARCH ENTERTAINMENT TITLE..."})]}):"04"===a?(0,b.jsxs)("svg",{width:"100%",height:"180",viewBox:"0 0 400 180",style:{background:"#121212",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1.5rem 0"},children:[(0,b.jsxs)("g",{stroke:"rgba(245,245,245,0.03)",strokeWidth:"1",children:[(0,b.jsx)("line",{x1:"40",y1:"40",x2:"360",y2:"40"}),(0,b.jsx)("line",{x1:"40",y1:"80",x2:"360",y2:"80"}),(0,b.jsx)("line",{x1:"40",y1:"120",x2:"360",y2:"120"})]}),(0,b.jsx)("line",{x1:"40",y1:"20",x2:"40",y2:"150",stroke:"rgba(245,245,245,0.15)",strokeWidth:"1.5"}),(0,b.jsx)("line",{x1:"40",y1:"150",x2:"370",y2:"150",stroke:"rgba(245,245,245,0.15)",strokeWidth:"1.5"}),(0,b.jsx)("path",{d:"M 40 130 Q 90 110 140 90 T 240 60 T 340 30",fill:"none",stroke:"#ffb400",strokeWidth:"2"}),(0,b.jsx)("circle",{cx:"340",cy:"30",r:"3.5",fill:"#ffb400"}),(0,b.jsx)("text",{x:"15",y:"15",fill:"rgba(255,180,0,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",children:"WEALTH GROWTH RATE PREVIEW"}),(0,b.jsx)("text",{x:"345",y:"24",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"BALANCE"})]}):"05"===a?(0,b.jsxs)("svg",{width:"100%",height:"180",viewBox:"0 0 400 180",style:{background:"#121212",border:"1px solid rgba(255,180,0,0.1)",borderRadius:"6px",margin:"1.5rem 0"},children:[(0,b.jsxs)("g",{stroke:"rgba(245,245,245,0.1)",strokeWidth:"1.5",fill:"none",children:[(0,b.jsx)("path",{d:"M 30 90 L 370 90"}),(0,b.jsx)("path",{d:"M 100 90 C 140 90, 160 45, 200 45 L 300 45 C 330 45, 340 90, 360 90"})]}),(0,b.jsx)("circle",{cx:"50",cy:"90",r:"4.5",fill:"#f5f5f5",opacity:"0.3"}),(0,b.jsx)("circle",{cx:"100",cy:"90",r:"4.5",fill:"#f5f5f5",opacity:"0.3"}),(0,b.jsx)("circle",{cx:"160",cy:"45",r:"4.5",fill:"#ffb400"}),(0,b.jsx)("circle",{cx:"240",cy:"45",r:"4.5",fill:"#ffb400"}),(0,b.jsx)("circle",{cx:"360",cy:"90",r:"5.5",fill:"#ffb400"}),(0,b.jsx)("rect",{x:"180",y:"80",width:"130",height:"35",rx:"3",fill:"#181818",stroke:"#ffb400",strokeWidth:"1"}),(0,b.jsx)("path",{d:"M 240 45 L 240 80",stroke:"#ffb400",strokeDasharray:"3"}),(0,b.jsx)("text",{x:"190",y:"93",fill:"#ffb400",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"7",children:"LLM PR REVIEW: ACTIVE"}),(0,b.jsx)("text",{x:"190",y:"106",fill:"rgba(245,245,245,0.6)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"6.5",children:'"Optimize lines 12-25..."'}),(0,b.jsx)("text",{x:"15",y:"20",fill:"rgba(255,180,0,0.4)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"8",children:"GITHUB PR WEBHOOK PIPELINE"})]}):null}function n({project:a,isOpen:d,onClose:e}){if((0,c.useEffect)(()=>(d?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[d]),!a)return null;let f=l[a.id];return(0,b.jsxs)("div",{style:{position:"fixed",inset:0,zIndex:5e3,pointerEvents:d?"all":"none",display:"flex",justifyContent:"flex-end"},children:[(0,b.jsx)("div",{onClick:e,style:{position:"absolute",inset:0,background:"rgba(10, 10, 10, 0.75)",backdropFilter:"blur(10px)",opacity:+!!d,transition:"opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1)"}}),(0,b.jsxs)("div",{className:"drawer-panel","data-lenis-prevent":!0,style:{position:"relative",width:"clamp(350px, 45vw, 600px)",height:"100%",backgroundColor:"#0a0a0a",borderLeft:"1px solid rgba(245, 245, 245, 0.08)",boxShadow:"-10px 0px 40px rgba(0, 0, 0, 0.5)",transform:d?"translateX(0)":"translateX(100%)",transition:"transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",display:"flex",flexDirection:"column",zIndex:5001},children:[(0,b.jsxs)("div",{style:{padding:"2rem 2.5rem",borderBottom:"1px solid rgba(245, 245, 245, 0.06)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,b.jsxs)("span",{style:{fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"0.7rem",letterSpacing:"0.2em",color:"var(--accent-amber, #ffb400)"},children:["PROJECT // ",a.id]}),(0,b.jsx)(g,{range:40,strength:.35,children:(0,b.jsx)("button",{onClick:e,style:{background:"none",border:"none",color:"rgba(245, 245, 245, 0.5)",fontSize:"1rem",cursor:"pointer",fontFamily:"monospace",padding:"0.5rem",transition:"color 0.3s ease"},onMouseEnter:a=>a.currentTarget.style.color="#ffb400",onMouseLeave:a=>a.currentTarget.style.color="rgba(245, 245, 245, 0.5)",children:"✕"})})]}),(0,b.jsxs)("div",{style:{flex:1,overflowY:"auto",padding:"2.5rem"},children:[(0,b.jsx)("h3",{style:{fontFamily:"var(--font-bebas-neue, sans-serif)",fontSize:"clamp(2.5rem, 5vw, 4.5rem)",lineHeight:.9,color:"#f5f5f5",marginBottom:"1rem",letterSpacing:"0.02em"},children:a.title}),(0,b.jsx)("div",{style:{display:"flex",gap:"0.8rem",flexWrap:"wrap",marginBottom:"1.5rem"},children:a.tags.map(a=>(0,b.jsx)("span",{style:{fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"0.55rem",letterSpacing:"0.1em",color:"rgba(245, 245, 245, 0.5)",border:"1px solid rgba(245, 245, 245, 0.08)",padding:"0.2rem 0.6rem",borderRadius:"4px",textTransform:"uppercase"},children:a},a))}),(0,b.jsx)("p",{style:{fontFamily:"var(--font-inter, sans-serif)",fontWeight:300,fontSize:"1rem",lineHeight:1.6,color:"rgba(245, 245, 245, 0.6)",marginBottom:"1.5rem"},children:a.description}),(0,b.jsx)(m,{id:a.id}),f&&(0,b.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"2rem",marginTop:"2rem"},children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h4",{className:"detail-section-title",children:"ROLE"}),(0,b.jsx)("p",{className:"detail-section-text",style:{color:"#f5f5f5",fontWeight:400},children:f.role})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h4",{className:"detail-section-title",children:"KEY CHALLENGES"}),(0,b.jsx)("ul",{className:"detail-section-list",children:f.challenges.map((a,c)=>(0,b.jsx)("li",{children:a},c))})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h4",{className:"detail-section-title",children:"SOLUTIONS"}),(0,b.jsx)("ul",{className:"detail-section-list",children:f.solutions.map((a,c)=>(0,b.jsx)("li",{children:a},c))})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h4",{className:"detail-section-title",children:"OUTCOMES & METRICS"}),(0,b.jsx)("ul",{className:"detail-section-list",style:{color:"var(--accent-amber, #ffb400)"},children:f.metrics.map((a,c)=>(0,b.jsx)("li",{children:a},c))})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h4",{className:"detail-section-title",children:"SYSTEM SPECIFICATION"}),(0,b.jsx)("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",marginTop:"0.5rem"},children:f.technologies.map(a=>(0,b.jsx)("span",{style:{fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"0.6rem",letterSpacing:"0.08em",color:"var(--accent-amber, #ffb400)",background:"rgba(255, 180, 0, 0.04)",border:"1px solid rgba(255, 180, 0, 0.15)",borderRadius:"3px",padding:"0.3rem 0.6rem",textTransform:"uppercase"},children:a},a))})]}),(0,b.jsx)("div",{style:{marginTop:"1.5rem",marginBottom:"2rem"},children:(0,b.jsx)(g,{range:50,strength:.3,children:(0,b.jsx)("a",{href:f.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"drawer-cta",style:{display:"inline-flex",alignItems:"center",border:"1px solid var(--accent-amber, #ffb400)",background:"transparent",color:"var(--accent-amber, #ffb400)",fontFamily:"var(--font-jetbrains-mono, monospace)",fontSize:"0.7rem",letterSpacing:"0.15em",padding:"0.8rem 2rem",textTransform:"uppercase",textDecoration:"none",transition:"all 0.3s ease"},onMouseEnter:a=>{a.currentTarget.style.background="var(--accent-amber, #ffb400)",a.currentTarget.style.color="#0a0a0a"},onMouseLeave:a=>{a.currentTarget.style.background="transparent",a.currentTarget.style.color="var(--accent-amber, #ffb400)"},children:"EXPLORE CODEBASE   →"})})})]})]})]}),(0,b.jsx)("style",{children:`
        .detail-section-title {
          font-family: var(--font-jetbrains-mono, monospace);
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: rgba(245, 245, 245, 0.35);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }

        .detail-section-text {
          font-family: var(--font-inter, sans-serif);
          font-weight: 300;
          font-size: 0.95rem;
          line-height: 1.5;
          color: rgba(245, 245, 245, 0.7);
        }

        .detail-section-list {
          padding-left: 1.2rem;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .detail-section-list li {
          font-family: var(--font-inter, sans-serif);
          font-weight: 300;
          font-size: 0.9rem;
          line-height: 1.5;
          color: rgba(245, 245, 245, 0.7);
        }

        @media (max-width: 768px) {
          .drawer-panel {
            width: 100vw !important;
            border-left: none !important;
          }
        }
      `})]})}let o=[{id:"01",title:"NUROSEARCH",year:"2026",tags:["AI/ML","Vector DB","RAG"],description:"Custom vector database from scratch implementing HNSW indexing and a full-stack RAG pipeline."},{id:"02",title:"DPI ENGINE",year:"2026",tags:["Systems","Python","Networking"],description:"Multi-threaded deep packet inspection engine analyzing 500+ packets/sec with TLS SNI extraction."},{id:"03",title:"KOZUMIHUB",year:"2026",tags:["TypeScript","Next.js","Web App"],description:"Entertainment discovery platform for anime and movies featuring smart discovery and immersive UI."},{id:"04",title:"SPENDSTRACK",year:"2026",tags:["Finance","TypeScript","Dashboard"],description:"Personal wealth tracking application with dynamic visualization and category analytics."},{id:"05",title:"CODE CHATBOT",year:"2025",tags:["AI","Python","LLM"],description:"Automated AI assistant built to review pull requests and provide constructive feedback on code structure."}];function p({project:a,index:d,onOpen:e}){let[f,g]=(0,c.useState)(!1),[h,i]=(0,c.useState)(!1),j=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let a=j.current;if(!a)return;let b=new IntersectionObserver(([a])=>{a.isIntersecting&&(setTimeout(()=>i(!0),120*d),b.disconnect())},{threshold:.15});return b.observe(a),()=>b.disconnect()},[d]),(0,b.jsxs)("div",{ref:j,onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),onClick:()=>e(a),style:{borderTop:"1px solid rgba(245,245,245,0.08)",padding:"2.5rem 0",cursor:"pointer",opacity:+!!h,transform:h?"translateY(0)":"translateY(40px)",transition:"opacity 0.7s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s cubic-bezier(0.65, 0, 0.35, 1)"},children:[(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"2rem"},children:[(0,b.jsxs)("div",{style:{display:"flex",alignItems:"baseline",gap:"2rem",flex:1},children:[(0,b.jsx)("span",{style:{fontFamily:"JetBrains Mono, monospace",fontSize:"0.7rem",letterSpacing:"0.15em",color:"rgba(245,245,245,0.3)",flexShrink:0},children:a.id}),(0,b.jsx)("span",{style:{fontFamily:"Bebas Neue, sans-serif",fontSize:"clamp(2rem, 4vw, 3.5rem)",lineHeight:1,color:f?"#ffb400":"#f5f5f5",transition:"color 0.4s cubic-bezier(0.65, 0, 0.35, 1)",letterSpacing:"0.02em"},children:a.title}),(0,b.jsx)("span",{style:{fontFamily:"Inter, sans-serif",fontWeight:300,fontSize:"0.85rem",color:"rgba(245,245,245,0.4)",display:"none"},className:"project-desc",children:a.description})]}),(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"1.5rem",flexShrink:0},children:[(0,b.jsx)("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",justifyContent:"flex-end"},children:a.tags.map(a=>(0,b.jsx)("span",{style:{fontFamily:"JetBrains Mono, monospace",fontSize:"0.6rem",letterSpacing:"0.15em",color:"rgba(245,245,245,0.4)",border:"1px solid rgba(245,245,245,0.12)",borderRadius:"999px",padding:"0.25rem 0.75rem",textTransform:"uppercase",whiteSpace:"nowrap"},children:a},a))}),(0,b.jsx)("span",{style:{fontFamily:"JetBrains Mono, monospace",fontSize:"0.7rem",letterSpacing:"0.1em",color:"rgba(245,245,245,0.3)",minWidth:"3rem",textAlign:"right"},children:a.year}),(0,b.jsx)("span",{"aria-hidden":"true",style:{fontFamily:"JetBrains Mono, monospace",fontSize:"1.2rem",color:"#ffb400",opacity:+!!f,transform:f?"translateX(0)":"translateX(-8px)",transition:"opacity 0.35s cubic-bezier(0.65, 0, 0.35, 1), transform 0.35s cubic-bezier(0.65, 0, 0.35, 1)",minWidth:"1.5rem",display:"inline-block"},children:"→"})]})]}),(0,b.jsx)("div",{style:{paddingLeft:"calc(2rem + 2ch + 2rem)",marginTop:"0.75rem"},children:(0,b.jsx)("span",{style:{fontFamily:"Inter, sans-serif",fontWeight:300,fontSize:"0.8rem",color:f?"rgba(245,245,245,0.55)":"rgba(245,245,245,0.3)",transition:"color 0.4s cubic-bezier(0.65, 0, 0.35, 1)",letterSpacing:"0.01em"},children:a.description})})]})}function q(){let a=(0,c.useRef)(null),[d,e]=(0,c.useState)(!1),[f,g]=(0,c.useState)(null),[h,i]=(0,c.useState)(!1),j=a=>{g(a),i(!0)};return(0,c.useEffect)(()=>{let b=a.current;if(!b)return;let c=new IntersectionObserver(([a])=>{a.isIntersecting&&(e(!0),c.disconnect())},{threshold:.2});return c.observe(b),()=>c.disconnect()},[]),(0,b.jsxs)("section",{id:"projects",style:{padding:"8rem 2rem",backgroundColor:"#0a0a0a"},children:[(0,b.jsxs)("div",{style:{maxWidth:"1400px",margin:"0 auto"},children:[(0,b.jsx)("div",{ref:a,style:{fontFamily:"JetBrains Mono, monospace",fontSize:"0.7rem",letterSpacing:"0.3em",color:"#ffb400",marginBottom:"3rem",textTransform:"uppercase",opacity:+!!d,transform:d?"translateY(0)":"translateY(20px)",transition:"opacity 0.6s cubic-bezier(0.65, 0, 0.35, 1), transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)"},children:"02 / Work"}),(0,b.jsx)("h2",{style:{fontFamily:"Bebas Neue, sans-serif",fontSize:"clamp(3rem, 6vw, 6rem)",lineHeight:.9,color:"#f5f5f5",margin:"0 0 5rem 0",letterSpacing:"0.02em",opacity:+!!d,transform:d?"translateY(0)":"translateY(30px)",transition:"opacity 0.7s 0.1s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s 0.1s cubic-bezier(0.65, 0, 0.35, 1)"},children:"SELECTED WORK"}),(0,b.jsxs)("div",{children:[o.map((a,c)=>(0,b.jsx)(p,{project:a,index:c,onOpen:j},a.id)),(0,b.jsx)("div",{style:{borderTop:"1px solid rgba(245,245,245,0.08)"}})]})]}),(0,b.jsx)(n,{project:f,isOpen:h,onClose:()=>i(!1)})]})}let r=[{label:"GitHub",href:"https://github.com/Prathamesh-Jadhav04",icon:(0,b.jsx)(function(){return(0,b.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:(0,b.jsx)("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"})})},{})},{label:"LinkedIn",href:"https://linkedin.com/in/prathamesh-jadhav04",icon:(0,b.jsx)(function(){return(0,b.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:(0,b.jsx)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})},{})}];function s({link:a}){let[d,e]=(0,c.useState)(!1);return(0,b.jsx)(g,{children:(0,b.jsxs)("a",{href:a.href,target:"_blank",rel:"noopener noreferrer","aria-label":a.label,onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),style:{display:"flex",alignItems:"center",gap:"0.5rem",color:d?"#ffb400":"rgba(245,245,245,0.4)",textDecoration:"none",fontFamily:"JetBrains Mono, monospace",fontSize:"0.65rem",letterSpacing:"0.15em",textTransform:"uppercase",transition:"color 0.3s cubic-bezier(0.65, 0, 0.35, 1)",padding:"0.5rem"},children:[a.icon,(0,b.jsx)("span",{children:a.label})]})})}function t(){let a=(0,c.useRef)(null),[d,e]=(0,c.useState)(!1),[f,h]=(0,c.useState)({name:"",email:"",subject:"",message:""}),[i,j]=(0,c.useState)("idle"),[k,l]=(0,c.useState)("");(0,c.useEffect)(()=>{let b=a.current;if(!b)return;let c=new IntersectionObserver(([a])=>{a.isIntersecting&&(e(!0),c.disconnect())},{threshold:.1});return c.observe(b),()=>c.disconnect()},[]);let m=a=>{let{name:b,value:c}=a.target;h(a=>({...a,[b]:c}))},n=async a=>{if(a.preventDefault(),!f.name||!f.email||!f.subject||!f.message){l("All fields are required."),j("error");return}j("sending"),l("");try{let a=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f)}),b=await a.json();if(!a.ok)throw Error(b.error||"Failed to transmit message.");j("success"),h({name:"",email:"",subject:"",message:""})}catch(a){console.error(a),l(a.message||"Something went wrong. Please try again."),j("error")}};return(0,b.jsxs)("section",{id:"contact",style:{padding:"8rem 2rem",borderTop:"1px solid rgba(245,245,245,0.08)",backgroundColor:"#0a0a0a"},children:[(0,b.jsxs)("div",{ref:a,style:{maxWidth:"1400px",margin:"0 auto",textAlign:"center"},children:[(0,b.jsx)("div",{style:{fontFamily:"JetBrains Mono, monospace",fontSize:"0.7rem",letterSpacing:"0.3em",color:"#ffb400",marginBottom:"2rem",textTransform:"uppercase",opacity:+!!d,transform:d?"translateY(0)":"translateY(20px)",transition:"opacity 0.6s cubic-bezier(0.65, 0, 0.35, 1), transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)"},children:"03 / Build"}),(0,b.jsx)("h2",{style:{fontFamily:"Bebas Neue, sans-serif",fontSize:"clamp(3.5rem, 8vw, 8rem)",lineHeight:.9,color:"#f5f5f5",margin:"0 0 2rem 0",letterSpacing:"0.02em",opacity:+!!d,transform:d?"translateY(0)":"translateY(30px)",transition:"opacity 0.7s 0.1s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s 0.1s cubic-bezier(0.65, 0, 0.35, 1)"},children:"LET'S BUILD SOMETHING."}),(0,b.jsx)("p",{style:{fontFamily:"Inter, sans-serif",fontWeight:300,fontSize:"clamp(0.9rem, 1.5vw, 1.1rem)",color:"rgba(245,245,245,0.5)",margin:"0 0 4rem 0",opacity:+!!d,transform:d?"translateY(0)":"translateY(20px)",transition:"opacity 0.7s 0.2s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s 0.2s cubic-bezier(0.65, 0, 0.35, 1)"},children:"Have an idea? Let's make it real."}),(0,b.jsx)("div",{style:{maxWidth:"650px",margin:"0 auto",textAlign:"left",opacity:+!!d,transform:d?"translateY(0)":"translateY(30px)",transition:"opacity 0.8s 0.25s cubic-bezier(0.65, 0, 0.35, 1), transform 0.8s 0.25s cubic-bezier(0.65, 0, 0.35, 1)"},children:"success"===i?(0,b.jsxs)("div",{style:{background:"rgba(255, 180, 0, 0.02)",border:"1px solid rgba(255, 180, 0, 0.2)",borderRadius:"8px",padding:"3rem 2rem",textAlign:"center",boxShadow:"0 15px 40px -15px rgba(255, 180, 0, 0.05)"},children:[(0,b.jsx)("div",{style:{fontFamily:"JetBrains Mono, monospace",fontSize:"0.65rem",letterSpacing:"0.25em",color:"#ffb400",marginBottom:"1rem"},children:"[SUCCESS] TRANSMISSION ESTABLISHED"}),(0,b.jsx)("h3",{style:{fontFamily:"Bebas Neue, sans-serif",fontSize:"2.5rem",color:"#f5f5f5",marginBottom:"1rem",letterSpacing:"0.02em"},children:"MESSAGE LOGGED"}),(0,b.jsx)("p",{style:{fontFamily:"Inter, sans-serif",fontWeight:300,fontSize:"0.95rem",lineHeight:1.6,color:"rgba(245,245,245,0.6)",marginBottom:"2rem"},children:"Thank you. Your message has been ingested securely. Prathamesh will review your query and reply shortly."}),(0,b.jsx)(g,{strength:.2,range:60,children:(0,b.jsx)("button",{type:"button",onClick:()=>j("idle"),className:"submit-btn",children:"SEND ANOTHER MESSAGE"})})]}):(0,b.jsxs)("form",{onSubmit:n,children:[(0,b.jsxs)("div",{className:"contact-form-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2rem"},children:[(0,b.jsxs)("div",{className:"contact-form-group",children:[(0,b.jsx)("label",{htmlFor:"name",className:"contact-label",children:"Name"}),(0,b.jsx)("input",{type:"text",id:"name",name:"name",required:!0,value:f.name,onChange:m,className:"contact-input",placeholder:"Enter your name",disabled:"sending"===i})]}),(0,b.jsxs)("div",{className:"contact-form-group",children:[(0,b.jsx)("label",{htmlFor:"email",className:"contact-label",children:"Email"}),(0,b.jsx)("input",{type:"email",id:"email",name:"email",required:!0,value:f.email,onChange:m,className:"contact-input",placeholder:"Enter your email",disabled:"sending"===i})]})]}),(0,b.jsxs)("div",{className:"contact-form-group",children:[(0,b.jsx)("label",{htmlFor:"subject",className:"contact-label",children:"Subject"}),(0,b.jsx)("input",{type:"text",id:"subject",name:"subject",required:!0,value:f.subject,onChange:m,className:"contact-input",placeholder:"Enter message subject",disabled:"sending"===i})]}),(0,b.jsxs)("div",{className:"contact-form-group",children:[(0,b.jsx)("label",{htmlFor:"message",className:"contact-label",children:"Message"}),(0,b.jsx)("textarea",{id:"message",name:"message",required:!0,value:f.message,onChange:m,className:"contact-textarea",placeholder:"Enter details of your project or query...",disabled:"sending"===i})]}),"error"===i&&(0,b.jsxs)("div",{style:{fontFamily:"JetBrains Mono, monospace",fontSize:"0.7rem",color:"#ff4444",marginBottom:"1.5rem",letterSpacing:"0.05em"},children:["// [ERROR]: ",k]}),(0,b.jsx)("div",{style:{textAlign:"center",marginTop:"1rem"},children:(0,b.jsx)(g,{strength:.2,range:80,children:(0,b.jsx)("button",{type:"submit",disabled:"sending"===i,className:"submit-btn",children:"sending"===i?"TRANSMITTING...":"TRANSMIT MESSAGE"})})})]})}),(0,b.jsx)("div",{style:{display:"flex",gap:"2rem",justifyContent:"center",marginTop:"5rem",flexWrap:"wrap",opacity:+!!d,transform:d?"translateY(0)":"translateY(20px)",transition:"opacity 0.7s 0.4s cubic-bezier(0.65, 0, 0.35, 1), transform 0.7s 0.4s cubic-bezier(0.65, 0, 0.35, 1)"},children:r.map(a=>(0,b.jsx)(s,{link:a},a.label))}),(0,b.jsx)("div",{style:{marginTop:"6rem",paddingTop:"2rem",borderTop:"1px solid rgba(245,245,245,0.08)",opacity:+!!d,transition:"opacity 0.7s 0.5s cubic-bezier(0.65, 0, 0.35, 1)"},children:(0,b.jsx)("span",{style:{fontFamily:"JetBrains Mono, monospace",fontSize:"0.65rem",letterSpacing:"0.2em",color:"rgba(245,245,245,0.3)",textTransform:"uppercase"},children:"© 2026 PRATHAMESH JADHAV. BUILT WITH PURPOSE."})})]}),(0,b.jsx)("style",{children:`
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
      `})]})}a.s(["default",0,function(){let[a,g]=(0,c.useState)(!1),[j,l]=(0,c.useState)(!1);return(0,b.jsxs)(b.Fragment,{children:[!a&&(0,b.jsx)(d,{onComplete:()=>g(!0),onStartTransition:()=>l(!0)}),(0,b.jsx)(f,{}),(0,b.jsx)(e,{}),j&&(0,b.jsxs)("main",{children:[(0,b.jsx)(h,{}),(0,b.jsx)(i,{}),(0,b.jsx)(k,{}),(0,b.jsx)(q,{}),(0,b.jsx)(t,{})]})]})}],40777)}];

//# sourceMappingURL=src_app_page_tsx_0ss2.w7._.js.map