'use client';

import { useState, useRef, useEffect } from 'react';

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  teaser: string;
  description: string;
  details?: string;
  technologies: string[];
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: '2022',
    title: 'ACADEMIC CONCEPTS & LOGICAL FOUNDATIONS',
    teaser: 'Initiated formal academic study in Computer Science, mastering core computational paradigms.',
    description: 'Acquired rigorous knowledge of data structures, classical algorithms, discrete mathematics, and computer architecture. Established fundamental habits in algorithm design, compiler constraints, and complexity analysis.',
    details: 'Acquired core logic and basic troubleshooting patterns early on.',
    technologies: ['C Language', 'CS Fundamentals', 'Boolean Logic']
  },
  {
    id: 2,
    year: '2022',
    title: 'FIRST PYTHON & C SYSTEM ENGINE CONSTRUCTS',
    teaser: 'Programmed core console logic, shell algorithms, and procedural scripting models.',
    description: 'Built command-line tools and custom memory buffers. Practiced memory layout debugging, manual pointer reference handling, and clean modular development principles.',
    details: 'Spent hours debugging pointer offsets and system syntax anomalies.',
    technologies: ['Python', 'C Language', 'Scripting']
  },
  {
    id: 3,
    year: '2023',
    title: 'SCALABLE WEB & DISTRIBUTED DATA FLOWS',
    teaser: 'Architected secure database pipelines, server-side handlers, and state management.',
    description: 'Designed relational schemas and high-throughput server backends. Addressed distributed application bottlenecks, database transaction constraints, and web browser rendering performance.',
    details: 'Optimized page load configurations and local caching schemas.',
    technologies: ['React', 'Node.js', 'Express', 'SQL Databases']
  },
  {
    id: 4,
    year: '2024',
    title: 'DATA SCIENCE INTERNSHIP — UPTRICKS SERVICES',
    teaser: 'Engineered data preprocessing engines and mathematical prediction pipelines.',
    description: 'Processed complex logistics datasets. Conducted feature engineering, multi-collinearity checks, and statistical modeling to generate production-ready predictive insights.',
    details: 'Wrote robust validation suites to filter noisy logistics dataset entries.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Statistical Modeling']
  },
  {
    id: 5,
    year: '2024',
    title: 'HIGH-VOLUME DATA INGESTION & ETL ENGINES',
    teaser: 'Streamlined data automation systems, reducing query processing latencies.',
    description: 'Optimized extract-transform-load data paths. Automated pipeline triggers using custom shell automation scripts, decreasing system load times and streamlining database ingest.',
    details: 'Gained hands-on exposure to CI/CD triggers and Linux deployment environments.',
    technologies: ['Python', 'Shell Scripting', 'ETL Pipelines', 'Database Optimization']
  },
  {
    id: 6,
    year: '2025',
    title: 'CONTEXTUAL AI ENGINES & RETRIEVAL-AUGMENTED GENERATION',
    teaser: 'Engineered LangChain agent pipelines and real-time semantic search layers.',
    description: 'Developed Retrieval-Augmented Generation (RAG) models using vector indexes. Designed low-latency contextual embeddings integration to feed LLM completions with enterprise security.',
    details: 'Engineered prompt templates with metadata filters to prevent context leaks.',
    technologies: ['FastAPI', 'LangChain', 'OpenAI APIs', 'Vector Embeddings']
  },
  {
    id: 7,
    year: '2026',
    title: 'BACHELOR OF COMPUTER SCIENCE — CGPA 7.8',
    teaser: 'Successfully graduated. Researched clinical decision networks for prediction.',
    description: 'Defended B.E. Thesis in Computer Science. Focused coursework on advanced machine learning, concurrent systems, and database engineering, maintaining a competitive cumulative CGPA of 7.8.',
    details: 'Maintained a strong cumulative CGPA of 7.8 across rigorous coursework semesters.',
    technologies: ['Predictive Modeling', 'Data Visualization', 'Capstone Project']
  },
  {
    id: 8,
    year: '2026',
    title: 'NUROSEARCH VECTOR STORAGE & HIGH-SPEED PACKET CAPTURE',
    teaser: 'Engineered custom graph-based vector storage indexing (HNSW) and C-based DPI listener.',
    description: 'Designed NuroSearch, a custom HNSW graph indexing vector database for semantic search. Built a high-performance network packet sniffer utilising multithreaded raw socket streams and C libraries.',
    details: 'Architected custom scalar quantization scripts to compress memory footprints.',
    technologies: ['Rust', 'Python', 'C Language', 'HNSW Graph', 'Multithreading', 'Scapy']
  }
];

function ProjectSchematic({ id }: { id: number }) {
  if (id === 1) {
    return (
      <svg width="100%" height="130" viewBox="0 0 400 130" style={{ background: '#090909', border: '1px solid rgba(255,180,0,0.12)', borderRadius: '6px', margin: '1rem 0', overflow: 'hidden' }}>
        <style>{`
          @keyframes nodePulse { 0%, 100% { transform: scale(1); filter: drop-shadow(0 0 2px rgba(255,180,0,0.2)); } 50% { transform: scale(1.08); filter: drop-shadow(0 0 8px rgba(255,180,0,0.6)); } }
          @keyframes flowLine { 0% { stroke-dashoffset: 24; } 100% { stroke-dashoffset: 0; } }
          .tree-node { animation: nodePulse 3s infinite ease-in-out; transform-origin: 200px 30px; }
          .tree-node-delay1 { animation: nodePulse 3s infinite ease-in-out 1s; transform-origin: 120px 65px; }
          .tree-node-delay2 { animation: nodePulse 3s infinite ease-in-out 2s; transform-origin: 80px 100px; }
          .flow-link { stroke-dasharray: 6 3; animation: flowLine 1.5s linear infinite; }
        `}</style>
        {/* Grids */}
        <g stroke="rgba(255,180,0,0.02)" strokeWidth="0.5">
          <line x1="0" y1="20" x2="400" y2="20" />
          <line x1="0" y1="40" x2="400" y2="40" />
          <line x1="0" y1="60" x2="400" y2="60" />
          <line x1="0" y1="80" x2="400" y2="80" />
          <line x1="0" y1="100" x2="400" y2="100" />
          <line x1="50" y1="0" x2="50" y2="130" />
          <line x1="100" y1="0" x2="100" y2="130" />
          <line x1="150" y1="0" x2="150" y2="130" />
          <line x1="200" y1="0" x2="200" y2="130" />
          <line x1="250" y1="0" x2="250" y2="130" />
          <line x1="300" y1="0" x2="300" y2="130" />
          <line x1="350" y1="0" x2="350" y2="130" />
        </g>
        
        {/* Tree Nodes & Links */}
        <g stroke="rgba(255, 180, 0, 0.2)" strokeWidth="1.5">
          <line x1="200" y1="30" x2="120" y2="65" className="flow-link" stroke="#ffb400" />
          <line x1="200" y1="30" x2="280" y2="65" className="flow-link" />
          <line x1="120" y1="65" x2="80" y2="100" className="flow-link" stroke="#ffb400" />
          <line x1="120" y1="65" x2="160" y2="100" className="flow-link" />
        </g>
        
        {/* Root Node */}
        <circle cx="200" cy="30" r="10" fill="#090909" stroke="#ffb400" strokeWidth="1.5" className="tree-node" />
        <text x="200" y="33" fill="#ffb400" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" textAnchor="middle" fontWeight="bold">ROOT</text>

        {/* Level 1 Nodes */}
        <circle cx="120" cy="65" r="10" fill="#090909" stroke="#ffb400" strokeWidth="1.5" className="tree-node-delay1" />
        <text x="120" y="68" fill="#ffb400" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" textAnchor="middle">L_01</text>
        
        <circle cx="280" cy="65" r="10" fill="#090909" stroke="rgba(245,245,245,0.3)" strokeWidth="1" />
        <text x="280" y="68" fill="rgba(245,245,245,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" textAnchor="middle">R_01</text>

        {/* Level 2 Nodes */}
        <circle cx="80" cy="100" r="10" fill="#090909" stroke="#ffb400" strokeWidth="1.5" className="tree-node-delay2" />
        <text x="80" y="103" fill="#ffb400" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" textAnchor="middle">0x3A</text>

        <circle cx="160" cy="100" r="10" fill="#090909" stroke="rgba(245,245,245,0.2)" strokeWidth="1" />
        <text x="160" y="103" fill="rgba(245,245,245,0.3)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" textAnchor="middle">0x7B</text>

        <text x="15" y="18" fill="rgba(255,180,0,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7" letterSpacing="0.05em">DATA_STRUCTURE: HIERARCHICAL_INDEX</text>
        <text x="385" y="18" fill="rgba(245,245,245,0.25)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7" textAnchor="end">O(log N) SEARCH</text>
      </svg>
    );
  }
  if (id === 2) {
    return (
      <svg width="100%" height="130" viewBox="0 0 400 130" style={{ background: '#090909', border: '1px solid rgba(255,180,0,0.12)', borderRadius: '6px', margin: '1rem 0', overflow: 'hidden' }}>
        <style>{`
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
        `}</style>
        {/* Hex addresses list */}
        <g fill="rgba(245,245,245,0.15)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7">
          <text x="15" y="45">0x007FFF01: [ 0x3F ]  -- ptr</text>
          <text x="15" y="65">0x007FFF02: [ 0x4E ]</text>
          <text x="15" y="85">0x007FFF03: [ 0x00 ]</text>
        </g>
        
        {/* Pointer Link SVG */}
        <path d="M 120 42 L 180 42 L 180 65 L 210 65" fill="none" stroke="#ffb400" strokeWidth="1" strokeDasharray="3 3" />
        <polygon points="210,65 205,62 205,68" fill="#ffb400" />
        
        {/* Heap Representation */}
        <rect x="215" y="35" width="150" height="75" rx="4" fill="rgba(255,255,255,0.01)" stroke="rgba(245,245,245,0.1)" />
        <text x="225" y="48" fill="rgba(245,245,245,0.3)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6.5">HEAP MEMORY MAP</text>
        
        {/* Heap Blocks */}
        <rect x="225" y="58" width="30" height="20" rx="2" fill="rgba(255,180,0,0.05)" stroke="#ffb400" strokeWidth="1" className="memory-box" />
        <text x="240" y="70" fill="#ffb400" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" textAnchor="middle">16B</text>
        
        <rect x="260" y="58" width="45" height="20" rx="2" fill="none" stroke="rgba(245,245,245,0.15)" strokeWidth="1" className="memory-box" />
        <text x="282" y="70" fill="rgba(245,245,245,0.3)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" textAnchor="middle">32B</text>

        <rect x="310" y="58" width="45" height="20" rx="2" fill="rgba(245,245,245,0.02)" stroke="rgba(245,245,245,0.1)" strokeWidth="1" className="memory-box" />
        <text x="332" y="70" fill="rgba(245,245,245,0.3)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" textAnchor="middle">FREE</text>

        <text x="15" y="18" fill="rgba(255,180,0,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7" letterSpacing="0.05em">LOW-LEVEL REGISTER & MEMORY LEAK WATCH</text>
        <text x="15" y="112" fill="#ffb400" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" className="typewriter">guest@kernel:~$ </text>
        <rect x="180" y="104" width="4" height="8" fill="#ffb400" className="cursor" />
      </svg>
    );
  }
  if (id === 3) {
    return (
      <svg width="100%" height="130" viewBox="0 0 400 130" style={{ background: '#090909', border: '1px solid rgba(255,180,0,0.12)', borderRadius: '6px', margin: '1rem 0', overflow: 'hidden' }}>
        <style>{`
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
        `}</style>
        {/* Architecture Blocks */}
        <g stroke="rgba(245,245,245,0.1)" fill="rgba(245,245,245,0.01)" strokeWidth="1">
          <rect x="20" y="45" width="55" height="35" rx="3" />
          <rect x="110" y="45" width="65" height="35" rx="3" />
          <rect x="210" y="25" width="70" height="30" rx="3" className="redis-node" />
          <rect x="210" y="70" width="70" height="30" rx="3" />
          <rect x="315" y="45" width="65" height="35" rx="3" />
        </g>
        
        {/* Flow Lines */}
        <path d="M 75 62 L 110 62" stroke="#58c4dc" strokeWidth="1.5" className="stream-path" />
        
        {/* Split paths */}
        <path d="M 175 62 L 195 62 L 195 40 L 210 40" stroke="#ffb400" strokeWidth="1" strokeDasharray="4 2" />
        <path d="M 175 62 L 195 62 L 195 85 L 210 85" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 2" />
        
        <path d="M 280 40 L 295 40 L 295 62 L 315 62" stroke="#ffb400" strokeWidth="1" />
        <path d="M 280 85 L 295 85 L 295 62 L 315 62" stroke="#cbd5e1" strokeWidth="1" />

        {/* Node Labels */}
        <text x="47" y="66" fill="rgba(245,245,245,0.8)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" textAnchor="middle">CLIENT</text>
        <text x="142" y="66" fill="rgba(245,245,245,0.8)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" textAnchor="middle">GATEWAY</text>
        <text x="245" y="43" fill="#4ade80" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7" textAnchor="middle">REDIS</text>
        <text x="245" y="88" fill="rgba(245,245,245,0.6)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7" textAnchor="middle">NODE_API</text>
        <text x="347" y="66" fill="#58c4dc" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" textAnchor="middle">POSTGRES</text>

        <text x="15" y="18" fill="rgba(255,180,0,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7" letterSpacing="0.05em">DISTRIBUTED SYSTEMS AND CACHING LAYERS</text>
        <text x="245" y="52" fill="#4ade80" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="5.5" textAnchor="middle">CACHE_HIT (2ms)</text>
      </svg>
    );
  }
  if (id === 4) {
    return (
      <svg width="100%" height="130" viewBox="0 0 400 130" style={{ background: '#090909', border: '1px solid rgba(255,180,0,0.12)', borderRadius: '6px', margin: '1rem 0', overflow: 'hidden' }}>
        <style>{`
          @keyframes dropPoint {
            0% { transform: translateY(-5px); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateY(60px); opacity: 0; }
          }
          .data-drop { animation: dropPoint 2.5s infinite linear; }
          .data-drop-d1 { animation: dropPoint 2.5s infinite linear 0.8s; }
          .data-drop-d2 { animation: dropPoint 2.5s infinite linear 1.6s; }
        `}</style>
        {/* Column features */}
        <g stroke="rgba(245,245,245,0.06)" fill="rgba(245,245,245,0.02)">
          <rect x="20" y="30" width="80" height="85" rx="3" />
          <line x1="20" y1="50" x2="100" y2="50" />
          <line x1="20" y1="70" x2="100" y2="70" />
          <line x1="20" y1="90" x2="100" y2="90" />
        </g>
        <text x="60" y="42" fill="rgba(245,245,245,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7" textAnchor="middle">RAW_COLUMNS</text>
        <text x="60" y="62" fill="rgba(245,245,245,0.7)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7.5" textAnchor="middle">Logistics_Data</text>
        <text x="60" y="82" fill="rgba(245,245,245,0.7)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7.5" textAnchor="middle">Geo_Lat_Lon</text>
        <text x="60" y="102" fill="rgba(245,245,245,0.7)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7.5" textAnchor="middle">Transit_Time</text>
        
        {/* Connector */}
        <path d="M 100 72 L 150 72" stroke="rgba(255,180,0,0.4)" strokeWidth="1" strokeDasharray="3 3" />
        
        {/* Processing Node */}
        <rect x="150" y="45" width="80" height="50" rx="4" fill="rgba(255,180,0,0.03)" stroke="#ffb400" strokeWidth="1" />
        <text x="190" y="65" fill="#ffb400" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" textAnchor="middle" fontWeight="bold">COV_MATRIX</text>
        <text x="190" y="78" fill="rgba(245,245,245,0.5)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6" textAnchor="middle">VIF FILTERS &gt; 5.0</text>
        
        {/* Connector */}
        <path d="M 230 72 L 275 72" stroke="rgba(255,180,0,0.4)" strokeWidth="1" />
        
        {/* Plot Graph */}
        <g stroke="rgba(245,245,245,0.1)" strokeWidth="1">
          <line x1="285" y1="105" x2="375" y2="105" />
          <line x1="285" y1="35" x2="285" y2="105" />
        </g>
        <path d="M 285 95 L 365 45" stroke="#fb923c" strokeWidth="1.5" />
        <circle cx="305" cy="80" r="2" fill="#60a5fa" />
        <circle cx="325" cy="72" r="2" fill="#60a5fa" />
        <circle cx="340" cy="55" r="2" fill="#60a5fa" />
        <circle cx="310" cy="92" r="2" fill="#60a5fa" />
        
        <text x="15" y="18" fill="rgba(255,180,0,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7" letterSpacing="0.05em">FEATURE ENGINEERING & COLLINEARITY PREDICTION</text>
        <text x="375" y="42" fill="#fb923c" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6" textAnchor="end">MODEL FIT</text>
      </svg>
    );
  }
  if (id === 5) {
    return (
      <svg width="100%" height="130" viewBox="0 0 400 130" style={{ background: '#090909', border: '1px solid rgba(255,180,0,0.12)', borderRadius: '6px', margin: '1rem 0', overflow: 'hidden' }}>
        <style>{`
          @keyframes liquidFlow { 0% { stroke-dashoffset: 32; } 100% { stroke-dashoffset: 0; } }
          .flow-liquid { stroke-dasharray: 8 8; animation: liquidFlow 2s linear infinite; }
        `}</style>
        {/* Pipeline Pipes */}
        <path d="M 30 65 L 120 65" stroke="rgba(245,245,245,0.15)" strokeWidth="8" strokeLinecap="round" />
        <path d="M 30 65 L 120 65" stroke="#10b981" strokeWidth="2" className="flow-liquid" />

        {/* Cron trigger on the left */}
        <circle cx="30" cy="65" r="16" fill="#090909" stroke="rgba(245,245,245,0.15)" strokeWidth="1" />
        <text x="30" y="68" fill="rgba(245,245,245,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6" textAnchor="middle">CRON</text>

        {/* Transformer Block */}
        <rect x="150" y="35" width="100" height="60" rx="4" fill="rgba(16,185,129,0.02)" stroke="#10b981" strokeWidth="1" />
        <text x="200" y="52" fill="#10b981" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8.5" textAnchor="middle" fontWeight="bold">TRANSFORMER</text>
        <text x="200" y="66" fill="rgba(245,245,245,0.5)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6" textAnchor="middle">CSV --&gt; PARQUET</text>
        <text x="200" y="80" fill="rgba(245,245,245,0.3)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6.5" textAnchor="middle">GZIP COMPRESSION</text>

        {/* Pipe out */}
        <path d="M 250 65 L 340 65" stroke="rgba(245,245,245,0.15)" strokeWidth="8" strokeLinecap="round" />
        <path d="M 250 65 L 340 65" stroke="#10b981" strokeWidth="2" className="flow-liquid" />

        {/* Destination database */}
        <rect x="340" y="45" width="40" height="40" rx="3" fill="#090909" stroke="rgba(245,245,245,0.15)" strokeWidth="1" />
        <text x="360" y="62" fill="rgba(245,245,245,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7.5" textAnchor="middle">DB</text>
        <text x="360" y="74" fill="#10b981" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6" textAnchor="middle">LOAD</text>

        <text x="15" y="18" fill="rgba(255,180,0,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7" letterSpacing="0.05em">DATA INTEGRATION & BATCH ETL PIPELINING</text>
        <text x="200" y="112" fill="rgba(245,245,245,0.3)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7" textAnchor="middle">throughput: 25.4 MB/s</text>
      </svg>
    );
  }
  if (id === 6) {
    return (
      <svg width="100%" height="130" viewBox="0 0 400 130" style={{ background: '#090909', border: '1px solid rgba(255,180,0,0.12)', borderRadius: '6px', margin: '1rem 0', overflow: 'hidden' }}>
        <style>{`
          @keyframes pulseSonar {
            0% { r: 5px; opacity: 0.9; }
            100% { r: 60px; opacity: 0; }
          }
          .sonar { animation: pulseSonar 3s infinite cubic-bezier(0.1, 0.8, 0.3, 1); }
          .query-pt { filter: drop-shadow(0 0 4px var(--accent-amber, #ffb400)); }
        `}</style>
        {/* Radar Sweep lines */}
        <circle cx="200" cy="65" r="5" fill="#ffb400" className="query-pt" />
        <circle cx="200" cy="65" r="30" fill="none" stroke="rgba(255,180,0,0.2)" strokeWidth="0.75" />
        <circle cx="200" cy="65" r="55" fill="none" stroke="rgba(255,180,0,0.15)" strokeWidth="0.75" />
        <circle cx="200" cy="65" r="5" fill="none" stroke="#ffb400" strokeWidth="1" className="sonar" />
        
        {/* Semantic matching vectors */}
        <circle cx="160" cy="45" r="3" fill="#ffb400" />
        <line x1="200" y1="65" x2="160" y2="45" stroke="rgba(255,180,0,0.5)" strokeWidth="1" />
        <text x="153" y="42" fill="#ffb400" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6.5">chunk_09 (sim=0.88)</text>

        <circle cx="245" cy="50" r="3" fill="#ffb400" />
        <line x1="200" y1="65" x2="245" y2="50" stroke="rgba(255,180,0,0.5)" strokeWidth="1" />
        <text x="252" y="48" fill="#ffb400" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6.5">chunk_14 (sim=0.84)</text>

        {/* Other unmatching vectors */}
        <circle cx="140" cy="85" r="2" fill="rgba(245,245,245,0.2)" />
        <circle cx="260" cy="85" r="2" fill="rgba(245,245,245,0.2)" />
        <circle cx="190" cy="110" r="2" fill="rgba(245,245,245,0.2)" />
        <circle cx="215" cy="25" r="2" fill="rgba(245,245,245,0.2)" />

        <text x="15" y="18" fill="rgba(255,180,0,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7" letterSpacing="0.05em">SEMANTIC RAG VECTOR NEAREST-NEIGHBORS</text>
        <text x="385" y="18" fill="rgba(245,245,245,0.25)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7" textAnchor="end">API LATENCY: 28ms</text>
        <text x="200" y="112" fill="rgba(245,245,245,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6.5" textAnchor="middle">Query: "vector database optimization" --&gt; Embedding Ingest</text>
      </svg>
    );
  }
  if (id === 7) {
    return (
      <svg width="100%" height="130" viewBox="0 0 400 130" style={{ background: '#090909', border: '1px solid rgba(255,180,0,0.12)', borderRadius: '6px', margin: '1rem 0', overflow: 'hidden' }}>
        {/* Semester transcript graph */}
        <g stroke="rgba(245,245,245,0.05)" strokeWidth="1">
          <line x1="30" y1="100" x2="370" y2="100" />
          <line x1="30" y1="30" x2="370" y2="30" />
        </g>
        
        {/* Semester bars */}
        <rect x="50" y="55" width="20" height="45" fill="rgba(245,245,245,0.15)" rx="1" />
        <text x="60" y="112" fill="rgba(245,245,245,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6" textAnchor="middle">SEM_I</text>
        <text x="60" y="50" fill="rgba(245,245,245,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6.5" textAnchor="middle">7.2</text>
        
        <rect x="90" y="50" width="20" height="50" fill="rgba(245,245,245,0.15)" rx="1" />
        <text x="100" y="112" fill="rgba(245,245,245,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6" textAnchor="middle">SEM_II</text>
        <text x="100" y="45" fill="rgba(245,245,245,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6.5" textAnchor="middle">7.5</text>

        <rect x="130" y="47" width="20" height="53" fill="rgba(245,245,245,0.2)" rx="1" />
        <text x="140" y="112" fill="rgba(245,245,245,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6" textAnchor="middle">SEM_III</text>
        <text x="140" y="42" fill="rgba(245,245,245,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6.5" textAnchor="middle">7.7</text>

        <rect x="170" y="44" width="20" height="56" fill="rgba(245,245,245,0.2)" rx="1" />
        <text x="180" y="112" fill="rgba(245,245,245,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6" textAnchor="middle">SEM_IV</text>
        <text x="180" y="39" fill="rgba(245,245,245,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6.5" textAnchor="middle">7.8</text>

        <rect x="210" y="42" width="20" height="58" fill="rgba(255,180,0,0.15)" stroke="#ffb400" strokeWidth="0.5" rx="1" />
        <text x="220" y="112" fill="rgba(245,245,245,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6" textAnchor="middle">SEM_V</text>
        <text x="220" y="37" fill="#ffb400" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6.5" textAnchor="middle">8.0</text>

        {/* Capstone Box */}
        <rect x="260" y="35" width="110" height="65" rx="3" fill="rgba(245,245,245,0.01)" stroke="rgba(245,245,245,0.08)" />
        <text x="315" y="48" fill="rgba(245,245,245,0.7)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7.5" textAnchor="middle">CAPSTONE THESIS</text>
        <text x="315" y="62" fill="#ffb400" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="8" textAnchor="middle" fontWeight="bold">CLINICAL ML NET</text>
        <text x="315" y="78" fill="rgba(245,245,245,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6" textAnchor="middle">VERDICT: APPROVED // GRADE A</text>

        <text x="15" y="18" fill="rgba(255,180,0,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7" letterSpacing="0.05em">ACADEMIC TRACKING AND GRADE ENGINE</text>
        <text x="385" y="18" fill="rgba(245,245,245,0.25)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7" textAnchor="end">CGPA: 7.80</text>
      </svg>
    );
  }
  if (id === 8) {
    return (
      <svg width="100%" height="130" viewBox="0 0 400 130" style={{ background: '#090909', border: '1px solid rgba(255,180,0,0.12)', borderRadius: '6px', margin: '1rem 0', overflow: 'hidden' }}>
        <style>{`
          @keyframes oscil1 {
            0% { stroke-dashoffset: 200; }
            100% { stroke-dashoffset: 0; }
          }
          .oscilloscope-trace { stroke-dasharray: 200; stroke-dashoffset: 200; animation: oscil1 2.5s infinite linear; }
          .oscilloscope-trace-secondary { opacity: 0.15; }
        `}</style>
        
        {/* Oscilloscope Grid */}
        <g stroke="rgba(239,68,68,0.03)" strokeWidth="0.5">
          <line x1="20" y1="65" x2="380" y2="65" />
          <line x1="20" y1="35" x2="380" y2="35" />
          <line x1="20" y1="95" x2="380" y2="95" />
          <line x1="200" y1="10" x2="200" y2="120" />
          <line x1="100" y1="10" x2="100" y2="120" />
          <line x1="300" y1="10" x2="300" y2="120" />
        </g>
        
        {/* Oscilloscope border */}
        <rect x="15" y="10" width="370" height="110" fill="none" stroke="rgba(239,68,68,0.08)" strokeWidth="1" />
        
        {/* Oscilloscope background wave */}
        <path d="M 20 65 Q 65 15, 110 65 T 200 65 T 290 65 T 380 65" fill="none" stroke="rgba(239,68,68,0.2)" strokeWidth="1" className="oscilloscope-trace-secondary" />
        
        {/* Active scan wave */}
        <path d="M 20 65 Q 65 15, 110 65 T 200 65 T 290 65 T 380 65" fill="none" stroke="#ef4444" strokeWidth="1.5" className="oscilloscope-trace" />
        
        {/* HNSW Layer Graph Nodes */}
        <circle cx="50" cy="95" r="3" fill="#cbd5e1" />
        <circle cx="80" cy="105" r="3" fill="#cbd5e1" />
        <circle cx="65" cy="85" r="3" fill="#cbd5e1" />
        <line x1="50" y1="95" x2="80" y2="105" stroke="rgba(245,245,245,0.3)" strokeWidth="0.75" />
        <line x1="50" y1="95" x2="65" y2="85" stroke="rgba(245,245,245,0.3)" strokeWidth="0.75" />
        <line x1="80" y1="105" x2="65" y2="85" stroke="rgba(245,245,245,0.3)" strokeWidth="0.75" />
        <text x="80" y="82" fill="rgba(245,245,245,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="5.5">HNSW_L0_GRAPH</text>

        {/* Stats on top right */}
        <text x="375" y="22" fill="#ef4444" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6" textAnchor="end">DPI BUFFER: 99.8% INGEST</text>
        <text x="375" y="32" fill="#ef4444" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6" textAnchor="end">RAW CAPTURE STREAM: 10Gbps</text>

        <text x="25" y="22" fill="rgba(255,180,0,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="7" letterSpacing="0.05em">C RAW SOCKET CAPTURE & MULTITHREADED PACKET PARSING</text>
        <text x="200" y="115" fill="#ef4444" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6.5" textAnchor="middle">MT_INGEST_THREAD [ID: 0x7000B2A3] -- RUNNING</text>
      </svg>
    );
  }
  return null;
}

interface Tag {
  text: string;
  x: number;
  y: number;
  z: number;
}

function TechSphere({ onHoverChange }: { onHoverChange: (hovering: boolean) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tags, setTags] = useState<Tag[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const skillsList = [
    'React', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript', 
    'HTML', 'CSS', 'Python', 'Rust', 'C Language', 'C++', 'FastAPI', 
    'LangChain', 'OpenAI API', 'HNSW Graph', 'Vector DB', 'RAG Pipelines',
    'SQL Databases', 'NoSQL', 'MongoDB', 'Redis', 'Docker', 
    'Git', 'Linux', 'Shell Scripting', 'ETL Pipelines', 'Scikit-Learn', 
    'Pandas', 'NumPy', 'Multithreading', 'Scapy', 'Network Protocols'
  ];
  const skills = Array.from(new Set(skillsList));

  useEffect(() => {
    const radius = 130;
    const N = skills.length;
    const initialTags: Tag[] = skills.map((text, i) => {
      const k = -1 + (2 * (i + 1) - 1) / N;
      const phi = Math.acos(k);
      const theta = Math.sqrt(N * Math.PI) * phi;

      return {
        text,
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
      };
    });
    setTags(initialTags);
  }, []);

  useEffect(() => {
    let rafId: number;
    let angleX = 0.002;
    let angleY = 0.002;

    const update = () => {
      if (isDraggingRef.current) {
        rafId = requestAnimationFrame(update);
        return;
      }

      if (isHoveredRef.current) {
        angleX = -mouseRef.current.y * 0.00004;
        angleY = mouseRef.current.x * 0.00004;
      } else {
        angleX = angleX * 0.98 + 0.001 * 0.02;
        angleY = angleY * 0.98 + 0.0015 * 0.02;
      }

      setTags((prevTags) => {
        return prevTags.map((tag) => {
          const cosX = Math.cos(angleX);
          const sinX = Math.sin(angleX);
          const y1 = tag.y * cosX - tag.z * sinX;
          const z1 = tag.y * sinX + tag.z * cosX;

          const cosY = Math.cos(angleY);
          const sinY = Math.sin(angleY);
          const x2 = tag.x * cosY + z1 * sinY;
          const z2 = -tag.x * sinY + z1 * cosY;

          return { ...tag, x: x2, y: y1, z: z2 };
        });
      });

      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    isDraggingRef.current = true;
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY
    };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    isDraggingRef.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    if (e.touches.length > 0) {
      dragStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    
    const clientX = e.touches[0].clientX;
    const clientY = e.touches[0].clientY;

    mouseRef.current = {
      x: clientX - cx,
      y: clientY - cy,
    };

    if (isDraggingRef.current) {
      const deltaX = clientX - dragStartRef.current.x;
      const deltaY = clientY - dragStartRef.current.y;
      
      dragStartRef.current = {
        x: clientX,
        y: clientY
      };

      const dragFactor = 0.006;
      const angleXVal = -deltaY * dragFactor;
      const angleYVal = deltaX * dragFactor;

      setTags((prevTags) => {
        return prevTags.map((tag) => {
          const cosX = Math.cos(angleXVal);
          const sinX = Math.sin(angleXVal);
          const y1 = tag.y * cosX - tag.z * sinX;
          const z1 = tag.y * sinX + tag.z * cosX;

          const cosY = Math.cos(angleYVal);
          const sinY = Math.sin(angleYVal);
          const x2 = tag.x * cosY + z1 * sinY;
          const z2 = -tag.x * sinY + z1 * cosY;

          return { ...tag, x: x2, y: y1, z: z2 };
        });
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    
    mouseRef.current = {
      x: e.clientX - cx,
      y: e.clientY - cy,
    };

    if (isDraggingRef.current) {
      const deltaX = e.clientX - dragStartRef.current.x;
      const deltaY = e.clientY - dragStartRef.current.y;
      
      dragStartRef.current = {
        x: e.clientX,
        y: e.clientY
      };

      const dragFactor = 0.005;
      const angleXVal = -deltaY * dragFactor;
      const angleYVal = deltaX * dragFactor;

      setTags((prevTags) => {
        return prevTags.map((tag) => {
          const cosX = Math.cos(angleXVal);
          const sinX = Math.sin(angleXVal);
          const y1 = tag.y * cosX - tag.z * sinX;
          const z1 = tag.y * sinX + tag.z * cosX;

          const cosY = Math.cos(angleYVal);
          const sinY = Math.sin(angleYVal);
          const x2 = tag.x * cosY + z1 * sinY;
          const z2 = -tag.x * sinY + z1 * cosY;

          return { ...tag, x: x2, y: y1, z: z2 };
        });
      });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => {
        isHoveredRef.current = false;
        onHoverChange(false);
        handleMouseUp();
      }}
      onMouseEnter={() => {
        isHoveredRef.current = true;
        onHoverChange(true);
      }}
      onTouchStart={(e) => {
        onHoverChange(true);
        handleTouchStart(e);
      }}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => {
        onHoverChange(false);
        handleMouseUp();
      }}
      onDragStart={(e) => e.preventDefault()}
      style={{
        position: 'relative',
        width: '320px',
        height: '320px',
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
        touchAction: 'none',
      }}
    >
      {tags.map((tag, idx) => {
        const radius = 130;
        const depth = 280;
        const scale = (depth + tag.z) / depth;
        const left = 160 + tag.x * scale;
        const top = 160 + tag.y * scale;
        
        const opacity = (tag.z + radius) / (2 * radius) * 0.8 + 0.2;
        const zIndex = Math.round(tag.z + radius);

        // Classify tag for premium multi-tone theme
        const isBasicWeb = ['HTML', 'CSS', 'JavaScript'].includes(tag.text);
        const isFrontendWeb = ['React', 'Next.js', 'TypeScript'].includes(tag.text);
        const isBackendDB = ['Node.js', 'FastAPI', 'SQL Databases', 'NoSQL', 'MongoDB', 'Redis'].includes(tag.text);
        const isAIML = ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'LangChain', 'OpenAI API', 'HNSW Graph', 'Vector DB', 'RAG Pipelines', 'ETL Pipelines'].includes(tag.text);
        const isSystemsDevOps = ['Rust', 'C Language', 'C++', 'Docker', 'Git', 'Linux', 'Shell Scripting', 'Multithreading', 'Scapy', 'Network Protocols'].includes(tag.text);

        let activeColor = '#cbd5e1'; // Fallback Slate
        let activeBg = 'rgba(203, 213, 225, 0.05)';
        let activeBorder = '1px solid rgba(203, 213, 225, 0.25)';
        let activeGlow = 'none';

        if (isBasicWeb) {
          // Warm sunset/gold tones (HTML/CSS/JS matching but distinct)
          if (tag.text === 'HTML') {
            activeColor = '#ff6d3b'; // Coral/Orange HTML
          } else if (tag.text === 'CSS') {
            activeColor = '#ffb33b'; // Warm Yellow-Orange CSS
          } else {
            activeColor = '#f5e050'; // Bright Yellow JavaScript
          }
          activeBg = `rgba(${activeColor === '#ff6d3b' ? '255, 109, 59' : activeColor === '#ffb33b' ? '255, 179, 59' : '245, 224, 80'}, 0.05)`;
          activeBorder = `1px solid rgba(${activeColor === '#ff6d3b' ? '255, 109, 59' : activeColor === '#ffb33b' ? '255, 179, 59' : '245, 224, 80'}, 0.25)`;
          activeGlow = `0 0 15px rgba(${activeColor === '#ff6d3b' ? '255, 109, 59' : activeColor === '#ffb33b' ? '255, 179, 59' : '245, 224, 80'}, 0.15)`;
        } else if (isFrontendWeb) {
          // Cool tech cyan/blue tones (React/Next/TS)
          if (tag.text === 'React') {
            activeColor = '#58c4dc'; // React Cyan
          } else if (tag.text === 'Next.js') {
            activeColor = '#a5f3fc'; // Bright Cyan-white
          } else {
            activeColor = '#3178c6'; // TypeScript Royal Blue
          }
          activeBg = `rgba(${activeColor === '#58c4dc' ? '88, 196, 220' : activeColor === '#a5f3fc' ? '165, 243, 252' : '49, 120, 198'}, 0.05)`;
          activeBorder = `1px solid rgba(${activeColor === '#58c4dc' ? '88, 196, 220' : activeColor === '#a5f3fc' ? '165, 243, 252' : '49, 120, 198'}, 0.25)`;
          activeGlow = `0 0 15px rgba(${activeColor === '#58c4dc' ? '88, 196, 220' : activeColor === '#a5f3fc' ? '165, 243, 252' : '49, 120, 198'}, 0.15)`;
        } else if (isBackendDB) {
          // Backend/DB minty green tones
          if (tag.text === 'Redis') {
            activeColor = '#f87171'; // Redis Coral Red
          } else if (tag.text === 'MongoDB') {
            activeColor = '#10b981'; // Mongo Emerald Green
          } else if (tag.text === 'FastAPI') {
            activeColor = '#2dd4bf'; // Teal
          } else {
            activeColor = '#4ade80'; // Node/SQL Bright Green
          }
          activeBg = `rgba(${activeColor === '#f87171' ? '248, 113, 113' : activeColor === '#10b981' ? '16, 185, 129' : activeColor === '#2dd4bf' ? '45, 212, 191' : '74, 222, 128'}, 0.05)`;
          activeBorder = `1px solid rgba(${activeColor === '#f87171' ? '248, 113, 113' : activeColor === '#10b981' ? '16, 185, 129' : activeColor === '#2dd4bf' ? '45, 212, 191' : '74, 222, 128'}, 0.25)`;
          activeGlow = `0 0 15px rgba(${activeColor === '#f87171' ? '248, 113, 113' : activeColor === '#10b981' ? '16, 185, 129' : activeColor === '#2dd4bf' ? '45, 212, 191' : '74, 222, 128'}, 0.15)`;
        } else if (isAIML) {
          // AI/ML Warm Amber and Python Blue-Yellow
          if (tag.text === 'Python') {
            activeColor = '#60a5fa'; // Soft Sky Blue
          } else if (tag.text === 'RAG Pipelines' || tag.text === 'Vector DB') {
            activeColor = '#fb923c'; // Warm Orange
          } else {
            activeColor = 'var(--accent-amber, #ffb400)'; // Signature Amber
          }
          activeBg = `rgba(${activeColor === '#60a5fa' ? '96, 165, 250' : activeColor === '#fb923c' ? '251, 146, 60' : '255, 180, 0'}, 0.05)`;
          activeBorder = `1px solid rgba(${activeColor === '#60a5fa' ? '96, 165, 250' : activeColor === '#fb923c' ? '251, 146, 60' : '255, 180, 0'}, 0.25)`;
          activeGlow = `0 0 15px rgba(${activeColor === '#60a5fa' ? '96, 165, 250' : activeColor === '#fb923c' ? '251, 146, 60' : '255, 180, 0'}, 0.15)`;
        } else if (isSystemsDevOps) {
          // Systems/DevOps Indigo, Violet & Crimson Red
          if (tag.text === 'Rust') {
            activeColor = '#ef4444'; // Crimson Rust
          } else if (tag.text === 'Docker' || tag.text === 'Git') {
            activeColor = '#818cf8'; // Soft Indigo
          } else if (tag.text === 'Linux' || tag.text === 'Shell Scripting') {
            activeColor = '#c084fc'; // Purple
          } else {
            activeColor = '#a78bfa'; // Lavender/Violet
          }
          activeBg = `rgba(${activeColor === '#ef4444' ? '239, 68, 68' : activeColor === '#818cf8' ? '129, 140, 248' : activeColor === '#c084fc' ? '192, 132, 252' : '167, 139, 250'}, 0.05)`;
          activeBorder = `1px solid rgba(${activeColor === '#ef4444' ? '239, 68, 68' : activeColor === '#818cf8' ? '129, 140, 248' : activeColor === '#c084fc' ? '192, 132, 252' : '167, 139, 250'}, 0.25)`;
          activeGlow = `0 0 15px rgba(${activeColor === '#ef4444' ? '239, 68, 68' : activeColor === '#818cf8' ? '129, 140, 248' : activeColor === '#c084fc' ? '192, 132, 252' : '167, 139, 250'}, 0.15)`;
        }

        const isFront = tag.z > 0;
        
        // Depth of field blur calculation
        let blurAmount = 0;
        if (tag.z < -20) {
          blurAmount = Math.min(2.5, (Math.abs(tag.z) - 20) * 0.015);
        }

        return (
          <span
            key={idx}
            style={{
              position: 'absolute',
              left: `${left}px`,
              top: `${top}px`,
              transform: `translate(-50%, -50%) scale(${scale})`,
              fontSize: '0.72rem',
              fontFamily: 'var(--font-jetbrains-mono, monospace)',
              fontWeight: isFront ? 500 : 300,
              color: isFront ? activeColor : 'rgba(245, 245, 245, 0.25)',
              opacity: opacity,
              zIndex: zIndex,
              whiteSpace: 'nowrap',
              textTransform: 'uppercase',
              pointerEvents: isFront ? 'auto' : 'none',
              background: isFront ? activeBg : 'transparent',
              border: isFront ? activeBorder : '1px solid transparent',
              borderRadius: '4px',
              padding: '0.2rem 0.5rem',
              transition: 'color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, filter 0.3s ease',
              boxShadow: isFront ? activeGlow : 'none',
              filter: blurAmount > 0 ? `blur(${blurAmount}px)` : 'none',
            }}
          >
            {tag.text}
          </span>
        );
      })}
    </div>
  );
}

function DynamicHUDVisualizer({ activeId }: { activeId: number }) {
  const getTheme = () => {
    switch (activeId) {
      case 1: return { color: '#ffb400', rgb: '255, 180, 0', label: 'CS_FOUNDATION_INDEX' };
      case 2: return { color: '#ffb400', rgb: '255, 180, 0', label: 'COMPILER_SHELL_EXEC' };
      case 3: return { color: '#58c4dc', rgb: '88, 196, 220', label: 'RELATIONAL_DB_SCHEMA' };
      case 4: return { color: '#fb923c', rgb: '251, 146, 60', label: 'MODEL_REGRESSION_PLOT' };
      case 5: return { color: '#10b981', rgb: '16, 185, 129', label: 'ETL_DATA_PIPELINE' };
      case 6: return { color: '#ffb400', rgb: '255, 180, 0', label: 'VECTOR_SIMILARITY_RAG' };
      case 7: return { color: '#a78bfa', rgb: '167, 139, 250', label: 'NEURAL_NET_CAPSTONE' };
      case 8: return { color: '#ef4444', rgb: '239, 68, 68', label: 'RAW_PACKET_DPI_ENGINE' };
      default: return { color: '#ffb400', rgb: '255, 180, 0', label: 'SYSTEM_SCHEMATIC' };
    }
  };

  const theme = getTheme();

  const getVisualizer = () => {
    switch (activeId) {
      case 1: // CS Foundations: Binary Matrix
        return (
          <svg viewBox="0 0 200 100" className="hud-svg">
            <style>{`
              @keyframes scanline {
                0% { transform: translateY(-100px); }
                100% { transform: translateY(100px); }
              }
              .binary-text {
                font-family: var(--font-jetbrains-mono, monospace);
                font-size: 6px;
                fill: rgba(255, 180, 0, 0.45);
              }
            `}</style>
            <text x="10" y="20" className="binary-text">01010100 01000101</text>
            <text x="10" y="35" className="binary-text">01000011 01001000</text>
            <text x="10" y="50" className="binary-text">01001111 01010010</text>
            <text x="10" y="65" className="binary-text">01000111 01001001</text>
            <text x="10" y="80" className="binary-text">01001110 01010011</text>
            <rect x="0" y="0" width="200" height="100" fill="rgba(255,180,0,0.01)" />
            <line x1="0" y1="0" x2="200" y2="0" stroke="rgba(255,180,0,0.3)" strokeWidth="1" style={{ animation: 'scanline 3s linear infinite' }} />
          </svg>
        );
      case 2: // First Code: Terminal prompt
        return (
          <svg viewBox="0 0 200 100" className="hud-svg">
            <style>{`
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
            `}</style>
            <text x="10" y="25" className="shell-text"><tspan className="prompt-symbol">guest@system:~$</tspan> gcc engine.c -o out</text>
            <text x="10" y="42" className="shell-text"><tspan className="prompt-symbol">guest@system:~$</tspan> ./out</text>
            <text x="10" y="58" className="shell-text" fill="var(--accent-amber, #ffb400)">&gt;&gt; STACK CORE LOADED</text>
            <text x="10" y="75" className="shell-text"><tspan className="prompt-symbol">guest@system:~$</tspan> _</text>
            <rect x="73" y="69" width="3" height="6" fill="#ffb400" style={{ animation: 'blink-cursor 0.8s infinite' }} />
          </svg>
        );
      case 3: // Full Stack: Database connections
        return (
          <svg viewBox="0 0 200 100" className="hud-svg">
            <style>{`
              @keyframes pulse-node {
                0%, 100% { r: 3px; opacity: 0.4; }
                50% { r: 5px; opacity: 1; }
              }
              @keyframes dash {
                to { stroke-dashoffset: -20; }
              }
            `}</style>
            <circle cx="50" cy="50" r="4" fill="#58c4dc" style={{ animation: 'pulse-node 1.5s infinite' }} />
            <circle cx="100" cy="25" r="4" fill="#a5f3fc" />
            <circle cx="100" cy="75" r="4" fill="#a5f3fc" />
            <circle cx="150" cy="50" r="4" fill="#58c4dc" style={{ animation: 'pulse-node 1.5s infinite 0.75s' }} />
            <line x1="50" y1="50" x2="100" y2="25" stroke="rgba(88,196,220,0.3)" strokeWidth="1" strokeDasharray="4" style={{ animation: 'dash 1s linear infinite' }} />
            <line x1="50" y1="50" x2="100" y2="75" stroke="rgba(88,196,220,0.3)" strokeWidth="1" strokeDasharray="4" style={{ animation: 'dash 1s linear infinite' }} />
            <line x1="100" y1="25" x2="150" y2="50" stroke="rgba(245,245,245,0.2)" strokeWidth="1" />
            <line x1="100" y1="75" x2="150" y2="50" stroke="rgba(245,245,245,0.2)" strokeWidth="1" />
            <text x="100" y="16" fill="rgba(245,245,245,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="5.5" textAnchor="middle">CLIENT</text>
            <text x="100" y="90" fill="rgba(245,245,245,0.4)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="5.5" textAnchor="middle">DATABASE</text>
          </svg>
        );
      case 4: // Data Science: Regression plot
        return (
          <svg viewBox="0 0 200 100" className="hud-svg">
            <style>{`
              @keyframes draw-line {
                to { stroke-dashoffset: 0; }
              }
            `}</style>
            <line x1="20" y1="80" x2="180" y2="80" stroke="rgba(245,245,245,0.1)" strokeWidth="0.5" />
            <line x1="20" y1="20" x2="20" y2="80" stroke="rgba(245,245,245,0.1)" strokeWidth="0.5" />
            <circle cx="40" cy="70" r="2.5" fill="#fb923c" />
            <circle cx="60" cy="55" r="2.5" fill="#fb923c" />
            <circle cx="80" cy="62" r="2.5" fill="#fb923c" />
            <circle cx="100" cy="45" r="2.5" fill="#fb923c" />
            <circle cx="120" cy="38" r="2.5" fill="#fb923c" />
            <circle cx="140" cy="42" r="2.5" fill="#fb923c" />
            <circle cx="160" cy="25" r="2.5" fill="#fb923c" />
            <line x1="30" y1="75" x2="170" y2="22" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="200" strokeDashoffset="200" style={{ animation: 'draw-line 2s cubic-bezier(0.16, 1, 0.3, 1) forwards' }} />
            <text x="160" y="75" fill="rgba(245,245,245,0.3)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="5.5" textAnchor="end">R² = 0.942</text>
          </svg>
        );
      case 5: // ETL Pipelines: Ingestion streams
        return (
          <svg viewBox="0 0 200 100" className="hud-svg">
            <style>{`
              @keyframes etl-flow {
                0% { stroke-dashoffset: 20; }
                100% { stroke-dashoffset: 0; }
              }
            `}</style>
            <rect x="25" y="35" width="40" height="30" rx="3" fill="none" stroke="rgba(245,245,245,0.15)" />
            <rect x="135" y="35" width="40" height="30" rx="3" fill="none" stroke="rgba(245,245,245,0.15)" />
            <path d="M 65 50 L 135 50" stroke="#10b981" strokeWidth="1.5" strokeDasharray="6 4" style={{ animation: 'etl-flow 0.8s linear infinite' }} />
            <circle cx="100" cy="50" r="6" fill="#10b981" />
            <text x="45" y="52" fill="rgba(245,245,245,0.5)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6" textAnchor="middle">IN</text>
            <text x="155" y="52" fill="rgba(245,245,245,0.5)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6" textAnchor="middle">OUT</text>
            <text x="100" y="24" fill="#10b981" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="5.5" textAnchor="middle">FILTER NODE</text>
          </svg>
        );
      case 6: // GenAI: Vector Query search
        return (
          <svg viewBox="0 0 200 100" className="hud-svg">
            <style>{`
              @keyframes pulse-ring {
                0% { r: 5px; opacity: 1; }
                100% { r: 25px; opacity: 0; }
              }
            `}</style>
            <circle cx="100" cy="50" r="3" fill="#ffb400" />
            <circle cx="100" cy="50" r="5" fill="none" stroke="#ffb400" strokeWidth="0.75" style={{ animation: 'pulse-ring 2s cubic-bezier(0.16, 1, 0.3, 1) infinite' }} />
            <circle cx="85" cy="40" r="1.5" fill="rgba(245,245,245,0.4)" />
            <circle cx="118" cy="62" r="1.5" fill="rgba(245,245,245,0.4)" />
            <circle cx="112" cy="38" r="1.5" fill="rgba(245,245,245,0.4)" />
            <circle cx="92" cy="65" r="1.5" fill="rgba(245,245,245,0.4)" />
            <circle cx="70" cy="55" r="1.5" fill="rgba(245,245,245,0.15)" />
            <circle cx="130" cy="45" r="1.5" fill="rgba(245,245,245,0.15)" />
            <line x1="100" y1="50" x2="85" y2="40" stroke="rgba(255,180,0,0.3)" strokeWidth="0.5" />
            <line x1="100" y1="50" x2="118" y2="62" stroke="rgba(255,180,0,0.3)" strokeWidth="0.5" />
            <line x1="100" y1="50" x2="112" y2="38" stroke="rgba(255,180,0,0.3)" strokeWidth="0.5" />
            <line x1="100" y1="50" x2="92" y2="65" stroke="rgba(255,180,0,0.3)" strokeWidth="0.5" />
            <text x="100" y="85" fill="#ffb400" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="5.5" textAnchor="middle">COSINE SIMILARITY CORE</text>
          </svg>
        );
      case 7: // Academic: Capstone weights
        return (
          <svg viewBox="0 0 200 100" className="hud-svg">
            <style>{`
              @keyframes neuro-pulse {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 0.95; }
              }
            `}</style>
            <circle cx="40" cy="25" r="3.5" fill="#f5f5f5" />
            <circle cx="40" cy="50" r="3.5" fill="#f5f5f5" />
            <circle cx="40" cy="75" r="3.5" fill="#f5f5f5" />
            <circle cx="100" cy="20" r="3.5" fill="#c084fc" style={{ animation: 'neuro-pulse 2s infinite' }} />
            <circle cx="100" cy="40" r="3.5" fill="#c084fc" style={{ animation: 'neuro-pulse 2s infinite 0.5s' }} />
            <circle cx="100" cy="60" r="3.5" fill="#c084fc" style={{ animation: 'neuro-pulse 2s infinite 1s' }} />
            <circle cx="100" cy="80" r="3.5" fill="#c084fc" style={{ animation: 'neuro-pulse 2s infinite 1.5s' }} />
            <circle cx="160" cy="50" r="4.5" fill="#a78bfa" />
            <path d="M 40 25 L 100 20 M 40 25 L 100 40 M 40 50 L 100 40 M 40 50 L 100 60 M 40 75 L 100 60 M 40 75 L 100 80" stroke="rgba(245,245,245,0.08)" strokeWidth="0.75" />
            <path d="M 100 20 L 160 50 M 100 40 L 160 50 M 100 60 L 160 50 M 100 80 L 160 50" stroke="rgba(192,132,252,0.15)" strokeWidth="0.75" />
            <text x="160" y="38" fill="#a78bfa" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="5.5" textAnchor="middle">OUTPUT</text>
          </svg>
        );
      case 8: // Production: HNSW vector graph + DPI packet Sniffer
        return (
          <svg viewBox="0 0 200 100" className="hud-svg">
            <style>{`
              @keyframes sniffer-wave {
                0% { stroke-dashoffset: 40; }
                100% { stroke-dashoffset: 0; }
              }
            `}</style>
            <path d="M 20 50 Q 40 20, 60 50 T 100 50 T 140 50 T 180 50" fill="none" stroke="rgba(239,68,68,0.15)" strokeWidth="1" />
            <path d="M 20 50 Q 40 10, 60 50 T 100 50 T 140 50 T 180 50" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="8 6" style={{ animation: 'sniffer-wave 1.5s linear infinite' }} />
            <circle cx="100" cy="50" r="4.5" fill="#ef4444" />
            <circle cx="60" cy="50" r="3" fill="#cbd5e1" />
            <circle cx="140" cy="50" r="3" fill="#cbd5e1" />
            <text x="100" y="85" fill="#ef4444" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="5.5" textAnchor="middle">RAW PACKET STREAM / C INGEST</text>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      className="hud-visualizer-card animate-on-scroll"
      style={{
        borderColor: `rgba(${theme.rgb}, 0.12)`,
        boxShadow: `0 20px 50px rgba(0, 0, 0, 0.4), 0 0 20px rgba(${theme.rgb}, 0.03)`,
      }}
    >
      <div className="hud-visualizer-header" style={{ borderBottomColor: `rgba(${theme.rgb}, 0.08)` }}>
        <span className="hud-indicator" style={{ color: `rgba(${theme.rgb}, 0.5)` }}>// {theme.label}</span>
        <div className="hud-status-dot" style={{ backgroundColor: theme.color, boxShadow: `0 0 8px ${theme.color}` }} />
      </div>
      <div className="hud-visualizer-body" style={{ borderColor: `rgba(${theme.rgb}, 0.06)` }}>
        {getVisualizer()}
      </div>
    </div>
  );
}

export function AboutSection() {
  const [activeYear, setActiveYear] = useState<string>('2022');
  const [activeCardId, setActiveCardId] = useState<number>(1);
  const [expandedCardId, setExpandedCardId] = useState<number | null>(1);
  const [isSectionInView, setIsSectionInView] = useState(false);
  const [isHoveringSphere, setIsHoveringSphere] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Section visibility tracker to prevent scroll wars when section is offscreen
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsSectionInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.05
      }
    );
    sectionObserver.observe(sectionEl);

    // Reveal animation observer for main headers
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1, rootMargin: '-10% 0px' }
    );

    const animatables = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animatables?.forEach((el) => revealObserver.observe(el));

    // Timeline scroll tracker observer
    // Targets a horizontal strip in the middle-upper part of the screen
    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const year = entry.target.getAttribute('data-year');
            const id = entry.target.getAttribute('data-id');
            if (year) {
              setActiveYear(year);
            }
            if (id) {
              const parsedId = parseInt(id, 10);
              setActiveCardId(parsedId);
              setExpandedCardId(parsedId);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-10% 0px -20% 0px',
        threshold: 0.05
      }
    );

    const cards = sectionRef.current?.querySelectorAll('.timeline-card');
    cards?.forEach((card) => timelineObserver.observe(card));

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
      timelineObserver.disconnect();
    };
  }, []);

  // Auto-scroll snapping disabled to prevent scroll hijacking

  const toggleExpand = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const isCollapsing = expandedCardId === id;
    setExpandedCardId(isCollapsing ? null : id);
    
    // Smooth scroll the clicked card to line up with the year display (25vh offset)
    if (!isCollapsing) {
      setTimeout(() => {
        const cardEl = sectionRef.current?.querySelector(`[data-id="${id}"]`) as HTMLElement;
        if (cardEl) {
          const rect = cardEl.getBoundingClientRect();
          const targetOffset = window.innerHeight * 0.25;
          const targetTop = window.scrollY + rect.top - targetOffset;
          window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
          });
        }
      }, 120); // wait for layout height transition to begin
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: '8rem 2rem',
        maxWidth: '1400px',
        margin: '0 auto',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      <div style={{ width: '100%' }}>
        {/* Section label */}
        <div
          className="animate-on-scroll"
          style={{
            fontFamily: 'var(--font-jetbrains-mono, "JetBrains Mono", monospace)',
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--accent-amber, #ffb400)',
            marginBottom: '3rem',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.7s cubic-bezier(.65,0,.35,1), transform 0.7s cubic-bezier(.65,0,.35,1)',
          }}
        >
          01 / Origin
        </div>

        {/* 2-Column Split Layout */}
        <div className="about-grid">
          {/* Left Column: Intro + Timeline cards */}
          <div>
            {/* Intro Header & Description */}
            <div style={{ marginBottom: '5rem' }}>
              <h2
                className="animate-on-scroll"
                style={{
                  fontFamily: 'var(--font-bebas-neue, "Bebas Neue", cursive)',
                  fontSize: 'clamp(3rem, 6vw, 6rem)',
                  lineHeight: 0.9,
                  color: 'var(--text-color, #f5f5f5)',
                  opacity: 0,
                  transform: 'translateY(30px)',
                  transition: 'opacity 0.8s cubic-bezier(.65,0,.35,1) 0.1s, transform 0.8s cubic-bezier(.65,0,.35,1) 0.1s',
                  marginBottom: '2rem'
                }}
              >
                BUILDING
                <br />
                <span style={{ color: 'var(--accent-amber, #ffb400)' }}>THINGS</span>
                <br />
                THAT MATTER.
              </h2>

              <div
                className="animate-on-scroll"
                style={{
                  opacity: 0,
                  transform: 'translateY(20px)',
                  transition: 'opacity 0.8s cubic-bezier(.65,0,.35,1) 0.2s, transform 0.8s cubic-bezier(.65,0,.35,1) 0.2s',
                }}
              >
                <p
                  style={{
                    fontWeight: 300,
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: 'var(--text-dim, rgba(245,245,245,0.5))',
                    marginBottom: '1.5rem',
                  }}
                >
                  I'm Prathamesh Jadhav — an engineering-focused AI/ML developer specializing in building production-grade vector databases, RAG pipelines, and intelligent API systems.
                </p>
                <p
                  style={{
                    fontWeight: 300,
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: 'var(--text-dim, rgba(245,245,245,0.5))',
                    marginBottom: '2rem',
                  }}
                >
                  From custom HNSW indexing to systems-level multi-threaded network analysis, I focus on building scalable, low-latency architectures that bridge AI research and robust production systems.
                </p>

                {/* 3D Spinning Tech Stack Sphere */}
                <div className="about-tech-sphere-container">
                  <div className="sphere-hud-label">// DRAG & ORBIT TECHNICAL CORE</div>
                  <div className="sphere-holo-backdrop">
                    <svg viewBox="0 0 400 400" className="holo-svg">
                      <circle cx="200" cy="200" r="180" stroke="rgba(255, 180, 0, 0.02)" strokeWidth="1" fill="none" />
                      <circle cx="200" cy="200" r="150" stroke="rgba(255, 180, 0, 0.03)" strokeWidth="1" strokeDasharray="6 30" fill="none" className="rotate-clockwise" style={{ transformOrigin: '200px 200px' }} />
                      <circle cx="200" cy="200" r="130" stroke="rgba(245, 245, 245, 0.02)" strokeWidth="1" strokeDasharray="40 120" fill="none" className="rotate-counter-clockwise" style={{ transformOrigin: '200px 200px' }} />
                      <circle cx="200" cy="200" r="100" stroke="rgba(255, 180, 0, 0.04)" strokeWidth="0.5" strokeDasharray="2 6" fill="none" />
                      
                      <line x1="200" y1="10" x2="200" y2="390" stroke="rgba(245, 245, 245, 0.015)" strokeWidth="0.5" />
                      <line x1="10" y1="200" x2="390" y2="200" stroke="rgba(245, 245, 245, 0.015)" strokeWidth="0.5" />

                      <path d="M 180 200 A 20 20 0 0 1 220 200" fill="none" stroke="rgba(255, 180, 0, 0.15)" strokeWidth="0.75" />
                      <path d="M 200 180 A 20 20 0 0 1 200 220" fill="none" stroke="rgba(255, 180, 0, 0.15)" strokeWidth="0.75" />

                      {/* Small tick markers */}
                      <line x1="200" y1="20" x2="200" y2="28" stroke="rgba(255, 180, 0, 0.3)" strokeWidth="1" />
                      <line x1="200" y1="380" x2="200" y2="372" stroke="rgba(255, 180, 0, 0.3)" strokeWidth="1" />
                      <line x1="20" y1="200" x2="28" y2="200" stroke="rgba(255, 180, 0, 0.3)" strokeWidth="1" />
                      <line x1="380" y1="200" x2="372" y2="200" stroke="rgba(255, 180, 0, 0.3)" strokeWidth="1" />

                      {/* Floating status parameters */}
                      <text x="210" y="35" fill="rgba(255, 180, 0, 0.25)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6">ROTATION: ACTIVE</text>
                      <text x="210" y="375" fill="rgba(245, 245, 245, 0.15)" fontFamily="var(--font-jetbrains-mono, monospace)" fontSize="6">LOC: 19.0760° N</text>
                    </svg>
                  </div>
                  <TechSphere onHoverChange={setIsHoveringSphere} />
                </div>
              </div>
            </div>

            {/* Separator / Timeline Indicator */}
            <div
              className="animate-on-scroll"
              style={{
                fontFamily: 'var(--font-jetbrains-mono, "JetBrains Mono", monospace)',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                color: 'rgba(245, 245, 245, 0.3)',
                textTransform: 'uppercase',
                marginBottom: '2.5rem',
                opacity: 0,
                transform: 'translateY(15px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease'
              }}
            >
              // Interactive Journey & Milestones (Click Overview to Expand)
            </div>

            {/* Scrollable Milestones Timeline Cards */}
            <div className="timeline-container">
              {timelineEvents.map((event) => {
                const isActive = activeCardId === event.id;
                const isExpanded = expandedCardId === event.id;

                return (
                  <div
                    key={event.id}
                    data-year={event.year}
                    data-id={event.id}
                    className={`timeline-card ${isExpanded ? 'expanded' : ''} ${isActive ? 'active' : ''}`}
                    onClick={(e) => toggleExpand(event.id, e)}
                  >
                    {/* Header Row (Always Visible) */}
                    <div>
                      {/* Mobile Year Badge */}
                      <div className="mobile-year-badge">
                        {event.year}
                      </div>

                      {/* Timeline Dot */}
                      <div className={`timeline-dot ${isActive ? 'active' : ''}`} />

                      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem' }}>
                        <h3 className="timeline-card-title">
                          {event.title}
                        </h3>
                        <span className="card-index" style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)', fontSize: '0.6rem', color: isExpanded ? 'var(--accent-amber, #ffb400)' : 'rgba(245, 245, 245, 0.2)', transition: 'color 0.4s ease' }}>
                          0{event.id}
                        </span>
                      </div>
                      
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', marginTop: '0.2rem' }}>
                        <p className="timeline-card-teaser" style={{ fontFamily: 'var(--font-inter, sans-serif)', fontWeight: 300, fontSize: '0.9rem', color: isActive ? 'rgba(245, 245, 245, 0.75)' : 'rgba(245, 245, 245, 0.35)', transition: 'color 0.4s ease', margin: 0, flex: 1 }}>
                          {event.teaser}
                        </p>
                        
                        {/* Expand Trigger Button */}
                        <button
                          onClick={(e) => toggleExpand(event.id, e)}
                          className="expand-trigger-btn"
                          style={{
                            background: 'none',
                            color: isExpanded ? 'var(--accent-amber, #ffb400)' : 'rgba(245, 245, 245, 0.4)',
                            fontFamily: 'var(--font-jetbrains-mono, monospace)',
                            fontSize: '0.6rem',
                            letterSpacing: '0.1em',
                            cursor: 'pointer',
                            padding: '0.35rem 0.75rem',
                            border: isExpanded ? '1px solid rgba(255, 180, 0, 0.25)' : '1px solid rgba(245, 245, 245, 0.1)',
                            borderRadius: '4px',
                            textTransform: 'uppercase',
                            transition: 'all 0.3s ease',
                            flexShrink: 0,
                          }}
                        >
                          {isExpanded ? '[ - CLOSE ]' : '[ + OVERVIEW ]'}
                        </button>
                      </div>
                    </div>

                    {/* Expandable Content Panel */}
                    <div className="timeline-card-expandable-panel">
                      <div style={{ paddingTop: '1.2rem', borderTop: '1px solid rgba(245,245,245,0.04)', marginTop: '1.2rem' }}>
                        <p className="timeline-card-desc">
                          {event.description}
                        </p>

                        {/* Custom Embedded SVG Schematic */}
                        <ProjectSchematic id={event.id} />

                        {event.details && (
                          <p className="timeline-card-details">
                            {event.details}
                          </p>
                        )}

                        {/* Tech spec tags */}
                        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                          {event.technologies.map((t) => (
                            <span
                              key={t}
                              style={{
                                fontFamily: 'var(--font-jetbrains-mono, monospace)',
                                fontSize: '0.55rem',
                                color: 'rgba(245, 245, 245, 0.5)',
                                background: 'rgba(245, 245, 245, 0.03)',
                                border: '1px solid rgba(245, 245, 245, 0.08)',
                                padding: '0.2rem 0.5rem',
                                borderRadius: '3px',
                                textTransform: 'uppercase',
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Sticky dynamic Year display */}
          <div className="sticky-year-container">
            <div className="sticky-year-content">
              <span className="sticky-year-label">YEAR</span>
              <div key={activeYear} className="timeline-year-display">
                {activeYear}
              </div>

              {/* High-fidelity schematic HUD dashboard */}
              <DynamicHUDVisualizer activeId={activeCardId} />

              <div className="sticky-year-details">
                <span>// 19.0760° N, 72.8777° E</span>
                <span>// CORE_SYSTEM_INDEXING: ACTIVE</span>
                <span>// INDEX: HNSW_INDEX_FOUND</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
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
      `}</style>
    </section>
  );
}
