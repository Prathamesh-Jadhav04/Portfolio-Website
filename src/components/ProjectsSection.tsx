'use client';

import { useEffect, useRef, useState } from 'react';
import { Magnetic } from './ui/Magnetic';

interface Project {
  id: string;
  title: string;
  year: string;
  tags: string[];
  description: string;
}

interface CaseStudyDetails {
  role: string;
  challenges: string[];
  solutions: string[];
  metrics: string[];
  technologies: string[];
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: '01',
    title: 'NUROSEARCH',
    year: '2026',
    tags: ['AI/ML', 'Vector DB', 'RAG'],
    description: 'Custom vector database from scratch implementing HNSW indexing and a full-stack RAG pipeline.',
  },
  {
    id: '02',
    title: 'DPI ENGINE',
    year: '2026',
    tags: ['Systems', 'Python', 'Networking'],
    description: 'Multi-threaded deep packet inspection engine analyzing 500+ packets/sec with TLS SNI extraction.',
  },
  {
    id: '03',
    title: 'KOZUMIHUB',
    year: '2026',
    tags: ['TypeScript', 'Next.js', 'Web App'],
    description: 'Entertainment discovery platform for anime and movies featuring smart discovery and immersive UI.',
  },
  {
    id: '04',
    title: 'SPENDSTRACK',
    year: '2026',
    tags: ['Finance', 'TypeScript', 'Dashboard'],
    description: 'Personal wealth tracking application with dynamic visualization and category analytics.',
  },
  {
    id: '05',
    title: 'CODE CHATBOT',
    year: '2025',
    tags: ['AI', 'Python', 'LLM'],
    description: 'Automated AI assistant built to review pull requests and provide constructive feedback on code structure.',
  },
];

const caseStudiesData: Record<string, CaseStudyDetails> = {
  '01': {
    role: 'Lead AI Systems Architect',
    challenges: [
      'Standard high-dimensional vector lookups scale at O(N) linear time, causing massive latency bottlenecks for production RAG systems.',
      'Ensuring thread safety and low latency during concurrent index builds and query phases.'
    ],
    solutions: [
      'Implemented a Hierarchical Navigable Small World (HNSW) vector index from scratch, bringing search complexity down to O(log N).',
      'Designed dynamic thread-safe insertion rules using custom locking nodes and pointer synchronization.',
      'Built a complete chunk-level semantic cache in FastAPI integrated with OpenAI embeddings.'
    ],
    metrics: [
      'Reduced average query retrieval latency to <15ms on 100,000+ vector nodes.',
      'Achieved a 35% memory footprint reduction through scalar quantization codecs.'
    ],
    technologies: ['Python', 'Rust', 'FastAPI', 'NumPy', 'OpenAI API', 'HNSW Indexing'],
    githubUrl: 'https://github.com/Prathamesh-Jadhav04/NuroSearch'
  },
  '02': {
    role: 'Backend & Networking Systems Engineer',
    challenges: [
      'Extracting TLS Server Name Indication (SNI) hostnames in real-time under high-throughput network loads without packets dropping.',
      'Developing thread-safe logging pipes to prevent memory leak build-ups during continuous stream capture.'
    ],
    solutions: [
      'Developed a multi-threaded C/Python ingestion listener wrapping libpcap for zero packet drop.',
      'Designed a synchronized circular queue isolating raw packet ingestion from header parsing buffers.',
      'Engineered an SNI extraction filter isolating client hello packets.'
    ],
    metrics: [
      'Successfully sustained analysis rates of 500+ packets/sec with 0% packet loss.',
      'Decrypted, mapped, and structured SNI metadata logs instantly into audit database indices.'
    ],
    technologies: ['Python', 'C Language', 'Scapy', 'Network Protocols', 'Multithreading', 'pcap'],
    githubUrl: 'https://github.com/Prathamesh-Jadhav04/DPI-Engine'
  },
  '03': {
    role: 'Full-Stack Developer',
    challenges: [
      'Managing API rate limit bottlenecks and aggregation delays across separate third-party catalogues (Jikan, TMDB).',
      'Minimizing frontend layout cumulative shifts while dynamically rendering card images.'
    ],
    solutions: [
      'Developed a unified Next.js API route acting as an orchestrator with internal redis cache mapping.',
      'Crafted custom fluid CSS grids layout utilizing relative skeleton placeholder layers.',
      'Configured static asset prefetching rules inside Next.js middleware layers.'
    ],
    metrics: [
      'Achieved dynamic gallery page rendering times of <200ms.',
      'Secured zero Cumulative Layout Shift (CLS) scores during rapid page-page jumps.'
    ],
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'REST APIs', 'Node.js'],
    githubUrl: 'https://github.com/Prathamesh-Jadhav04/KozumiHub'
  },
  '04': {
    role: 'Frontend & Analytics Developer',
    challenges: [
      'Creating responsive financial tracking graphs that render dynamically without crashing on mobile devices.',
      'Ensuring secure offline database capability with smooth transaction synchronization.'
    ],
    solutions: [
      'Implemented Chart.js layout wrappers optimized for aspect-ratio responsive scale changes.',
      'Designed transactional state engines syncing automatically to structured local storage stores.',
      'Engineered dynamic category filtering rules for instantaneous chart redraw triggers.'
    ],
    metrics: [
      'Instantly updates interactive graphs with zero animation lags.',
      'Supports complete offline capability with zero transaction sync conflicts.'
    ],
    technologies: ['Next.js', 'TypeScript', 'Chart.js', 'LocalStorage API', 'CSS Grid', 'TailwindCSS'],
    githubUrl: 'https://github.com/Prathamesh-Jadhav04/SpendsTrack'
  },
  '05': {
    role: 'DevOps & AI Integration Engineer',
    challenges: [
      'LLM context limits require chunking diffs while retaining context of pull request logic flow.',
      'Interfacing secure webhook servers that respond instantly and prevent PR review duplicate triggers.'
    ],
    solutions: [
      'Engineered an intelligent AST diff chunker feeding filtered context trees into LLM prompts.',
      'Constructed a reliable FastAPI hook server with internal checksum ID deduplication logic.',
      'Integrated LangChain prompt logic mapped dynamically to GitHub API comment lines.'
    ],
    metrics: [
      'Reviews and comments on pull requests in <8 seconds from commit push.',
      'Achieved 85% satisfaction rating from developers using the automated reviews.'
    ],
    technologies: ['Python', 'FastAPI', 'LangChain', 'LLM APIs', 'GitHub Webhooks', 'CI/CD Pipelines'],
    githubUrl: 'https://github.com/Prathamesh-Jadhav04/Code-Review-Chatbot'
  }
};

function ProjectSchematic({ id }: { id: string }) {
  // --- '01' NUROSEARCH: HNSW Traversal Simulation ---
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>({ x: 200, y: 140 });
  const handleMouseMove01 = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 400;
    const y = ((e.clientY - rect.top) / rect.height) * 180;
    setMousePos({ x, y });
  };

  // --- '02' DPI ENGINE: Packet Ingestor ---
  const [packets, setPackets] = useState<Array<{ id: number; progress: number; type: string; domain: string }>>([]);
  const [dpiLogs, setDpiLogs] = useState<string[]>([
    '// LISTENER ONLINE: READY ON ETH0',
    '// WAITING FOR WEB REQUESTS...'
  ]);

  useEffect(() => {
    if (packets.length === 0) return;
    const timer = setInterval(() => {
      setPackets((prev) => {
        const next = prev.map((p) => {
          const nextProgress = p.progress + 3;
          if (nextProgress >= 15 && p.progress < 15) {
            setDpiLogs((logs) => [`[INGEST] size: 1024B -> Queuing Frame`, logs[0]].slice(0, 2));
          } else if (nextProgress >= 55 && p.progress < 55) {
            setDpiLogs((logs) => [`[QUEUE] Parsing SNI Header (Proto: TLS)`, logs[0]].slice(0, 2));
          } else if (nextProgress >= 90 && p.progress < 90) {
            setDpiLogs((logs) => [`[DPI] HOST: ${p.domain || '192.168.1.100'} | Port: 443`, logs[0]].slice(0, 2));
          }
          return { ...p, progress: nextProgress };
        });
        return next.filter((p) => p.progress < 100);
      });
    }, 40);
    return () => clearInterval(timer);
  }, [packets.length]);

  const handleInjectPacket = (e: React.MouseEvent) => {
    e.stopPropagation();
    const mockDomains = ['github.com', 'google.com', 'openai.com', 'spotify.com'];
    const mockTypes = ['TLS', 'TCP', 'UDP'] as const;
    const type = mockTypes[Math.floor(Math.random() * mockTypes.length)];
    const domain = type === 'TLS' ? mockDomains[Math.floor(Math.random() * mockDomains.length)] : '';
    setPackets((prev) => [...prev, { id: Date.now(), progress: 0, type, domain }]);
  };

  // --- '03' KOZUMIHUB: Immersive Catalog Grid ---
  const [hoveredCard, setHoveredCard] = useState<'left' | 'middle' | 'right' | null>(null);

  // --- '04' SPENDSTRACK: Wealth Compounder Mode ---
  const [activeMode, setActiveMode] = useState<'SAVE' | 'BALANCE' | 'INVEST'>('BALANCE');

  // --- '05' CODE CHATBOT: PR reviewer trigger ---
  const [prTriggered, setPrTriggered] = useState(false);
  const [prProgress, setPrProgress] = useState(0);
  const [prLogs, setPrLogs] = useState<string[]>([
    '// GIT HOOK LISTENER ACTIVE',
    '// WAITING FOR COMMIT PUSH...'
  ]);

  useEffect(() => {
    if (!prTriggered) return;
    const timer = setInterval(() => {
      setPrProgress((prev) => {
        const next = prev + 5;
        if (next >= 20 && prev < 20) {
          setPrLogs((logs) => [`[GIT] Webhook captured. Extracting branch diffs...`, logs[0]].slice(0, 2));
        } else if (next >= 60 && prev < 60) {
          setPrLogs((logs) => [`[LLM] AST Code Analysis in progress...`, logs[0]].slice(0, 2));
        } else if (next >= 100) {
          setPrLogs((logs) => [`[BOT] Commented on PR: "Optimize mutex lock in DPI engine"`, logs[0]].slice(0, 2));
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, 80);
    return () => clearInterval(timer);
  }, [prTriggered]);

  const handleTriggerWebhook = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPrTriggered(true);
    setPrProgress(0);
    setPrLogs([
      '// CAPTURED: WEBHOOK PUSH EVENT ON main',
      '// INITIALIZING DOCKER WORKER...'
    ]);
  };

  if (id === '01') {
    const gNodes = [
      { id: 1, x: 60, y: 140, label: 'G1' },
      { id: 2, x: 150, y: 140, label: 'G2' },
      { id: 3, x: 250, y: 140, label: 'G3' },
      { id: 4, x: 340, y: 140, label: 'G4' },
    ];
    const hNodes = [
      { id: 1, x: 70, y: 90, label: 'H1' },
      { id: 2, x: 200, y: 90, label: 'H2' },
      { id: 3, x: 330, y: 90, label: 'H3' },
    ];
    const eNodes = [
      { id: 1, x: 100, y: 40, label: 'E1' },
      { id: 2, x: 300, y: 40, label: 'E2' },
    ];

    let activeGIdx = 0;
    if (mousePos) {
      let minGDist = Infinity;
      gNodes.forEach((node, idx) => {
        const dist = Math.abs(node.x - mousePos.x);
        if (dist < minGDist) {
          minGDist = dist;
          activeGIdx = idx;
        }
      });
    }

    let activeHIdx = 0;
    if (mousePos) {
      if (activeGIdx === 0) {
        activeHIdx = 0;
      } else if (activeGIdx === 1) {
        activeHIdx = Math.abs(hNodes[0].x - mousePos.x) < Math.abs(hNodes[1].x - mousePos.x) ? 0 : 1;
      } else if (activeGIdx === 2) {
        activeHIdx = Math.abs(hNodes[1].x - mousePos.x) < Math.abs(hNodes[2].x - mousePos.x) ? 1 : 2;
      } else {
        activeHIdx = 2;
      }
    }

    let activeEIdx = 0;
    if (mousePos) {
      if (activeHIdx === 0) {
        activeEIdx = 0;
      } else if (activeHIdx === 1) {
        activeEIdx = Math.abs(eNodes[0].x - mousePos.x) < Math.abs(eNodes[1].x - mousePos.x) ? 0 : 1;
      } else {
        activeEIdx = 1;
      }
    }

    const activeG = gNodes[activeGIdx];
    const activeH = hNodes[activeHIdx];
    const activeE = eNodes[activeEIdx];

    const distToG = mousePos ? Math.sqrt(Math.pow(activeG.x - mousePos.x, 2) + Math.pow(activeG.y - mousePos.y, 2)) : 0;
    const sim = mousePos ? Math.max(0.45, 0.999 - (distToG / 300) * 0.5) : 0.984;

    return (
      <svg 
        width="100%" 
        height="180" 
        viewBox="0 0 400 180" 
        onMouseMove={handleMouseMove01}
        onMouseLeave={() => setMousePos({ x: 200, y: 140 })}
        style={{ background: '#121212', border: '1px solid rgba(255,180,0,0.1)', borderRadius: '6px', margin: '1.5rem 0', cursor: 'crosshair' }}
      >
        {/* Background Grid Lines */}
        <g stroke="rgba(245,245,245,0.02)" strokeWidth="1">
          <line x1="0" y1="40" x2="400" y2="40" />
          <line x1="0" y1="90" x2="400" y2="90" />
          <line x1="0" y1="140" x2="400" y2="140" />
        </g>

        {/* Graph Connections */}
        <g stroke="rgba(245, 245, 245, 0.05)" strokeWidth="1">
          {/* Default Layer 0 to Layer 1 links */}
          <line x1="100" y1="40" x2="70" y2="90" />
          <line x1="100" y1="40" x2="200" y2="90" />
          <line x1="300" y1="40" x2="200" y2="90" />
          <line x1="300" y1="40" x2="330" y2="90" />

          {/* Default Layer 1 to Layer 2 links */}
          <line x1="70" y1="90" x2="50" y2="140" />
          <line x1="70" y1="90" x2="150" y2="140" />
          <line x1="200" y1="90" x2="150" y2="140" />
          <line x1="200" y1="90" x2="250" y2="140" />
          <line x1="330" y1="90" x2="250" y2="140" />
          <line x1="330" y1="90" x2="350" y2="140" />

          {/* Peer connection horizontal lines */}
          <line x1="100" y1="40" x2="300" y2="40" strokeDasharray="3" />
          <line x1="70" y1="90" x2="200" y2="90" strokeDasharray="3" />
          <line x1="200" y1="90" x2="330" y2="90" strokeDasharray="3" />
          <line x1="50" y1="140" x2="150" y2="140" strokeDasharray="2" />
          <line x1="150" y1="140" x2="250" y2="140" strokeDasharray="2" />
          <line x1="250" y1="140" x2="350" y2="140" strokeDasharray="2" />
        </g>

        {/* Dynamic Traversal Highlight Paths */}
        {mousePos && (
          <g stroke="var(--accent-amber, #ffb400)" strokeWidth="2" fill="none" style={{ filter: 'drop-shadow(0 0 3px rgba(255,180,0,0.4))' }}>
            {/* E to H highlight */}
            <line x1={activeE.x} y1={activeE.y} x2={activeH.x} y2={activeH.y} />
            {/* H to G highlight */}
            <line x1={activeH.x} y1={activeH.y} x2={activeG.x} y2={activeG.y} />
          </g>
        )}

        {/* Nodes */}
        {/* Layer 0 (Entry) */}
        <circle cx="100" cy="40" r="6" fill={activeE.label === 'E1' ? 'var(--accent-amber, #ffb400)' : '#333'} stroke="#121212" strokeWidth="1.5" />
        <circle cx="300" cy="40" r="6" fill={activeE.label === 'E2' ? 'var(--accent-amber, #ffb400)' : '#333'} stroke="#121212" strokeWidth="1.5" />

        {/* Layer 1 */}
        <circle cx="70" cy="90" r="5" fill={activeH.label === 'H1' ? 'var(--accent-amber, #ffb400)' : '#444'} stroke="#121212" strokeWidth="1.5" />
        <circle cx="200" cy="90" r="5" fill={activeH.label === 'H2' ? 'var(--accent-amber, #ffb400)' : '#444'} stroke="#121212" strokeWidth="1.5" />
        <circle cx="330" cy="90" r="5" fill={activeH.label === 'H3' ? 'var(--accent-amber, #ffb400)' : '#444'} stroke="#121212" strokeWidth="1.5" />

        {/* Layer 2 */}
        <circle cx="50" cy="140" r="4.5" fill={activeG.id === 1 ? 'var(--accent-amber, #ffb400)' : '#555'} stroke="#121212" strokeWidth="1" />
        <circle cx="150" cy="140" r="4.5" fill={activeG.id === 2 ? 'var(--accent-amber, #ffb400)' : '#555'} stroke="#121212" strokeWidth="1" />
        <circle cx="250" cy="140" r="4.5" fill={activeG.id === 3 ? 'var(--accent-amber, #ffb400)' : '#555'} stroke="#121212" strokeWidth="1" />
        <circle cx="350" cy="140" r="4.5" fill={activeG.id === 4 ? 'var(--accent-amber, #ffb400)' : '#555'} stroke="#121212" strokeWidth="1" />

        {/* Target Cursor Tracking Dot */}
        {mousePos && (
          <g>
            <line x1={mousePos.x} y1="0" x2={mousePos.x} y2="180" stroke="rgba(255,180,0,0.15)" strokeWidth="0.5" strokeDasharray="2" />
            <line x1="0" y1={mousePos.y} x2="400" y2={mousePos.y} stroke="rgba(255,180,0,0.15)" strokeWidth="0.5" strokeDasharray="2" />
            <circle cx={mousePos.x} cy={mousePos.y} r="3" fill="#ffffff" style={{ filter: 'drop-shadow(0 0 5px #fff)' }} />
          </g>
        )}

        {/* Titles / Legends */}
        <text x="15" y="20" fill="rgba(255,180,0,0.4)" fontFamily="monospace" fontSize="8">HNSW LAYERED SEARCH TOPOLOGY [MOVE CURSOR]</text>
        <text x="385" y="20" fill="rgba(245,245,245,0.2)" fontFamily="monospace" fontSize="7" textAnchor="end">NURO_INDEX: ACTIVE</text>
        
        {/* Dynamic Log Footer */}
        <rect x="0" y="160" width="400" height="20" fill="#0c0c0c" opacity="0.9" />
        <line x1="0" y1="160" x2="400" y2="160" stroke="rgba(255,255,255,0.03)" />
        {mousePos ? (
          <text x="15" y="172" fill="var(--accent-amber, #ffb400)" fontFamily="monospace" fontSize="6.8">
            SEARCH_VEC: [{Math.round(mousePos.x)}, {Math.round(mousePos.y)}] // PATH: {activeE.label}➔{activeH.label}➔{activeG.label} // COS_SIM: {sim.toFixed(4)}
          </text>
        ) : (
          <text x="15" y="172" fill="rgba(245,245,245,0.3)" fontFamily="monospace" fontSize="6.8">
            HOVER GRAPH TO INITIATE COARSE-TO-FINE VECTOR TRAVERSAL
          </text>
        )}
      </svg>
    );
  }
  if (id === '02') {
    return (
      <svg 
        width="100%" 
        height="180" 
        viewBox="0 0 400 180" 
        style={{ background: '#121212', border: '1px solid rgba(255,180,0,0.1)', borderRadius: '6px', margin: '1.5rem 0' }}
      >
        {/* Base UI boxes */}
        <g stroke="rgba(255,180,0,0.15)" strokeWidth="1" fill="none">
          <rect x="20" y="50" width="80" height="40" rx="4" fill="#151515" />
          <rect x="150" y="50" width="100" height="40" rx="4" fill="#151515" />
          <rect x="300" y="50" width="80" height="40" rx="4" fill="#151515" />
          <path d="M 100 70 L 150 70" stroke="#ffb400" strokeWidth="1" />
          <path d="M 250 70 L 300 70" stroke="#ffb400" strokeWidth="1" />
        </g>

        {/* Labels inside boxes */}
        <text x="60" y="74" fill="#f5f5f5" fontFamily="monospace" fontSize="8.5" fontWeight="bold" textAnchor="middle">libpcap</text>
        <text x="200" y="74" fill="var(--accent-amber, #ffb400)" fontFamily="monospace" fontSize="8.5" fontWeight="bold" textAnchor="middle">parser-queue</text>
        <text x="340" y="74" fill="#f5f5f5" fontFamily="monospace" fontSize="8.5" fontWeight="bold" textAnchor="middle">TLS SNI</text>

        {/* Render animated packet dots */}
        {packets.map((p) => {
          let px = 60;
          if (p.progress < 50) {
            px = 60 + (p.progress / 50) * 140;
          } else {
            px = 200 + ((p.progress - 50) / 50) * 140;
          }
          return (
            <circle
              key={p.id}
              cx={px}
              cy="70"
              r="4.5"
              fill={p.type === 'TLS' ? 'var(--accent-amber, #ffb400)' : '#f5f5f5'}
              style={{ filter: 'drop-shadow(0 0 3px var(--accent-amber, #ffb400))' }}
            />
          );
        })}

        {/* Interactive Ingestion Button */}
        <g 
          onClick={handleInjectPacket}
          style={{ cursor: 'pointer' }}
        >
          <rect x="140" y="105" width="120" height="22" rx="3" fill="#181818" stroke="var(--accent-amber, #ffb400)" strokeWidth="1" style={{ transition: 'all 0.2s ease' }} />
          <text x="200" y="119" fill="var(--accent-amber, #ffb400)" fontFamily="monospace" fontSize="8" fontWeight="bold" textAnchor="middle">[ INJECT PACKET ]</text>
        </g>

        {/* Console Log Feed */}
        <rect x="20" y="137" width="360" height="34" fill="#080808" stroke="rgba(245,245,245,0.03)" rx="2" />
        <text x="30" y="148" fill="rgba(245,245,245,0.3)" fontFamily="monospace" fontSize="6.5">
          {dpiLogs[1]}
        </text>
        <text x="30" y="160" fill="var(--accent-amber, #ffb400)" fontFamily="monospace" fontSize="6.5">
          {dpiLogs[0]}
        </text>

        <text x="15" y="20" fill="rgba(255,180,0,0.4)" fontFamily="monospace" fontSize="8">DPI STREAM INGESTION FLOW</text>
        <text x="385" y="20" fill="rgba(245,245,245,0.25)" fontFamily="monospace" fontSize="7" textAnchor="end">STATUS: CAPTURING</text>
      </svg>
    );
  }
  if (id === '03') {
    return (
      <svg 
        width="100%" 
        height="180" 
        viewBox="0 0 400 180" 
        style={{ background: '#121212', border: '1px solid rgba(255,180,0,0.1)', borderRadius: '6px', margin: '1.5rem 0' }}
      >
        {/* Search header container */}
        <rect x="20" y="35" width="360" height="18" rx="2" fill="#181818" stroke="rgba(245,245,245,0.05)" />
        <text x="32" y="46" fill={hoveredCard ? '#f5f5f5' : 'rgba(245,245,245,0.25)'} fontFamily="monospace" fontSize="7" style={{ transition: 'color 0.3s ease' }}>
          {hoveredCard === 'left' && 'SEARCH MATCH: "SPIDERMAN: INTO THE MULTIVERSE" (2018)'}
          {hoveredCard === 'middle' && 'SEARCH MATCH: "ATTACK ON TITAN: SEASON 4" (2020)'}
          {hoveredCard === 'right' && 'SEARCH MATCH: "THE DARK KNIGHT" (2008)'}
          {!hoveredCard && 'HOVER CARDS BELOW TO RUN DISCOVERY PIPELINE...'}
        </text>

        {/* 3 Grid Cards */}
        <g style={{ cursor: 'pointer' }}>
          {/* Card Left */}
          <g
            onMouseEnter={() => setHoveredCard('left')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <rect 
              x="20" y="62" width="105" height="85" rx="4" 
              fill={hoveredCard === 'left' ? 'rgba(255,180,0,0.03)' : '#151515'} 
              stroke={hoveredCard === 'left' ? 'var(--accent-amber, #ffb400)' : 'rgba(245,245,245,0.06)'} 
              strokeWidth="1"
              style={{ transition: 'all 0.3s ease' }}
            />
            {/* Play Button inside card */}
            <polygon 
              points="67,98 67,112 79,105" 
              fill={hoveredCard === 'left' ? 'var(--accent-amber, #ffb400)' : 'rgba(245,245,245,0.2)'} 
              style={{ transition: 'fill 0.3s ease' }}
            />
            <text x="72" y="80" fill={hoveredCard === 'left' ? 'var(--accent-amber, #ffb400)' : 'rgba(245,245,245,0.4)'} fontFamily="monospace" fontSize="7" textAnchor="middle" style={{ transition: 'color 0.3s ease' }}>01 / SCI-FI</text>
          </g>

          {/* Card Middle */}
          <g
            onMouseEnter={() => setHoveredCard('middle')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <rect 
              x="147" y="62" width="105" height="85" rx="4" 
              fill={hoveredCard === 'middle' ? 'rgba(255,180,0,0.03)' : '#151515'} 
              stroke={hoveredCard === 'middle' ? 'var(--accent-amber, #ffb400)' : 'rgba(245,245,245,0.06)'} 
              strokeWidth="1"
              style={{ transition: 'all 0.3s ease' }}
            />
            <polygon 
              points="194,98 194,112 206,105" 
              fill={hoveredCard === 'middle' ? 'var(--accent-amber, #ffb400)' : 'rgba(245,245,245,0.2)'} 
              style={{ transition: 'fill 0.3s ease' }}
            />
            <text x="200" y="80" fill={hoveredCard === 'middle' ? 'var(--accent-amber, #ffb400)' : 'rgba(245,245,245,0.4)'} fontFamily="monospace" fontSize="7" textAnchor="middle" style={{ transition: 'color 0.3s ease' }}>02 / ANIME</text>
          </g>

          {/* Card Right */}
          <g
            onMouseEnter={() => setHoveredCard('right')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <rect 
              x="275" y="62" width="105" height="85" rx="4" 
              fill={hoveredCard === 'right' ? 'rgba(255,180,0,0.03)' : '#151515'} 
              stroke={hoveredCard === 'right' ? 'var(--accent-amber, #ffb400)' : 'rgba(245,245,245,0.06)'} 
              strokeWidth="1"
              style={{ transition: 'all 0.3s ease' }}
            />
            <polygon 
              points="322,98 322,112 334,105" 
              fill={hoveredCard === 'right' ? 'var(--accent-amber, #ffb400)' : 'rgba(245,245,245,0.2)'} 
              style={{ transition: 'fill 0.3s ease' }}
            />
            <text x="327" y="80" fill={hoveredCard === 'right' ? 'var(--accent-amber, #ffb400)' : 'rgba(245,245,245,0.4)'} fontFamily="monospace" fontSize="7" textAnchor="middle" style={{ transition: 'color 0.3s ease' }}>03 / ACTION</text>
          </g>
        </g>

        {/* Footer log */}
        <rect x="0" y="160" width="400" height="20" fill="#0c0c0c" />
        <line x1="0" y1="160" x2="400" y2="160" stroke="rgba(255,255,255,0.03)" />
        <text x="15" y="172" fill={hoveredCard ? 'var(--accent-amber, #ffb400)' : 'rgba(245,245,245,0.3)'} fontFamily="monospace" fontSize="6.8">
          {hoveredCard === 'left' && 'API_DISCOVERY: JIKAN_V4 & TMDB_V3 FETCH // SCORE: 9.1 // RESP: 142ms'}
          {hoveredCard === 'middle' && 'API_DISCOVERY: JIKAN_V4 & TMDB_V3 FETCH // SCORE: 9.5 // RESP: 189ms'}
          {hoveredCard === 'right' && 'API_DISCOVERY: JIKAN_V4 & TMDB_V3 FETCH // SCORE: 9.0 // RESP: 110ms'}
          {!hoveredCard && 'DISCOVERY_ROUTING: LISTENER ONLINE // REDIS CACHE: INLINE'}
        </text>

        <text x="15" y="20" fill="rgba(255,180,0,0.4)" fontFamily="monospace" fontSize="8">IMMERSIVE MEDIA CATALOG GRID</text>
      </svg>
    );
  }
  if (id === '04') {
    return (
      <svg 
        width="100%" 
        height="180" 
        viewBox="0 0 400 180" 
        style={{ background: '#121212', border: '1px solid rgba(255,180,0,0.1)', borderRadius: '6px', margin: '1.5rem 0' }}
      >
        {/* Graph grids */}
        <g stroke="rgba(245,245,245,0.02)" strokeWidth="1">
          <line x1="40" y1="40" x2="360" y2="40" />
          <line x1="40" y1="80" x2="360" y2="80" />
          <line x1="40" y1="120" x2="360" y2="120" />
        </g>
        <line x1="40" y1="20" x2="40" y2="140" stroke="rgba(245,245,245,0.15)" strokeWidth="1" />
        <line x1="40" y1="140" x2="370" y2="140" stroke="rgba(245,245,245,0.15)" strokeWidth="1" />

        {/* Dynamic path curve */}
        {activeMode === 'SAVE' && (
          <path d="M 40 130 L 100 115 L 180 100 L 260 88 L 340 75" fill="none" stroke="var(--accent-amber, #ffb400)" strokeWidth="2.5" style={{ transition: 'all 0.5s ease' }} />
        )}
        {activeMode === 'BALANCE' && (
          <path d="M 40 130 Q 90 110 140 90 T 240 60 T 340 30" fill="none" stroke="var(--accent-amber, #ffb400)" strokeWidth="2.5" style={{ transition: 'all 0.5s ease' }} />
        )}
        {activeMode === 'INVEST' && (
          <path d="M 40 130 Q 90 125 140 120 T 240 70 T 340 15" fill="none" stroke="var(--accent-amber, #ffb400)" strokeWidth="2.5" style={{ transition: 'all 0.5s ease' }} />
        )}

        {/* Target end circle */}
        <circle 
          cx="340" 
          cy={activeMode === 'SAVE' ? 75 : activeMode === 'BALANCE' ? 30 : 15} 
          r="4.5" 
          fill="var(--accent-amber, #ffb400)" 
          style={{ filter: 'drop-shadow(0 0 4px var(--accent-amber, #ffb400))', transition: 'cy 0.5s ease' }} 
        />

        {/* Interactive Mode Switches */}
        <g style={{ cursor: 'pointer' }}>
          {/* SAVE */}
          <g onClick={(e) => { e.stopPropagation(); setActiveMode('SAVE'); }}>
            <rect x="75" y="148" width="65" height="18" rx="2" fill={activeMode === 'SAVE' ? 'var(--accent-amber, #ffb400)' : '#181818'} stroke="rgba(255,180,0,0.2)" strokeWidth="0.5" />
            <text x="107.5" y="160" fill={activeMode === 'SAVE' ? '#0a0a0a' : 'rgba(245,245,245,0.5)'} fontFamily="monospace" fontSize="7.5" fontWeight="bold" textAnchor="middle">SAVINGS</text>
          </g>

          {/* BALANCE */}
          <g onClick={(e) => { e.stopPropagation(); setActiveMode('BALANCE'); }}>
            <rect x="155" y="148" width="75" height="18" rx="2" fill={activeMode === 'BALANCE' ? 'var(--accent-amber, #ffb400)' : '#181818'} stroke="rgba(255,180,0,0.2)" strokeWidth="0.5" />
            <text x="192.5" y="160" fill={activeMode === 'BALANCE' ? '#0a0a0a' : 'rgba(245,245,245,0.5)'} fontFamily="monospace" fontSize="7.5" fontWeight="bold" textAnchor="middle">BALANCED</text>
          </g>

          {/* INVEST */}
          <g onClick={(e) => { e.stopPropagation(); setActiveMode('INVEST'); }}>
            <rect x="245" y="148" width="75" height="18" rx="2" fill={activeMode === 'INVEST' ? 'var(--accent-amber, #ffb400)' : '#181818'} stroke="rgba(255,180,0,0.2)" strokeWidth="0.5" />
            <text x="282.5" y="160" fill={activeMode === 'INVEST' ? '#0a0a0a' : 'rgba(245,245,245,0.5)'} fontFamily="monospace" fontSize="7.5" fontWeight="bold" textAnchor="middle">AGGRESSIVE</text>
          </g>
        </g>

        <text x="15" y="20" fill="rgba(255,180,0,0.4)" fontFamily="monospace" fontSize="8">WEALTH GROWTH RATE PREVIEW</text>
        <text x="345" y="25" fill="#ffb400" fontFamily="monospace" fontSize="7">GROWTH</text>

        {/* Dynamic parameters footer */}
        <text x="15" y="132" fill="rgba(245,245,245,0.25)" fontFamily="monospace" fontSize="6.5">
          {activeMode === 'SAVE' && 'PLAN: SAFE SAVINGS // GROWTH APY: +4.5% // STABILITY: 100%'}
          {activeMode === 'BALANCE' && 'PLAN: EQUITIES & SAVINGS // GROWTH APY: +8.2% // STABILITY: 70%'}
          {activeMode === 'INVEST' && 'PLAN: ALPHA STOCKS & VECTOR ASSETS // GROWTH APY: +22.4% // STABILITY: 30%'}
        </text>
      </svg>
    );
  }
  if (id === '05') {
    return (
      <svg 
        width="100%" 
        height="180" 
        viewBox="0 0 400 180" 
        style={{ background: '#121212', border: '1px solid rgba(255,180,0,0.1)', borderRadius: '6px', margin: '1.5rem 0' }}
      >
        {/* Pipeline drawing */}
        <g stroke="rgba(245,245,245,0.06)" strokeWidth="1.5" fill="none">
          <line x1="30" y1="90" x2="370" y2="90" />
          <path d="M 120 90 C 140 90, 160 45, 180 45 L 280 45 C 300 45, 320 90, 340 90" strokeDasharray="3" />
        </g>

        {/* Webhook Hub visual */}
        <circle cx="120" cy="90" r="4.5" fill="#555" />
        <circle cx="340" cy="90" r="4.5" fill="#555" />
        
        {/* LLM Engine Server Unit */}
        <rect x="180" y="27" width="100" height="35" rx="3" fill="#181818" stroke={prTriggered ? 'var(--accent-amber, #ffb400)' : 'rgba(245,245,245,0.08)'} strokeWidth="1.5" style={{ transition: 'border-color 0.3s ease' }} />
        <text x="230" y="47" fill={prTriggered ? 'var(--accent-amber, #ffb400)' : 'rgba(245,245,245,0.3)'} fontFamily="monospace" fontSize="8" fontWeight="bold" textAnchor="middle" style={{ transition: 'color 0.3s ease' }}>
          {prTriggered ? `LLM SCAN: ${prProgress}%` : 'LLM ANALYZER'}
        </text>

        {/* Ingested webhook pulse animation */}
        {prTriggered && prProgress > 0 && (
          <circle
            cx={
              prProgress < 40
                ? 30 + (prProgress / 40) * 90
                : prProgress < 85
                ? 120 + ((prProgress - 40) / 45) * 110
                : 230 + ((prProgress - 85) / 15) * 110
            }
            cy={
              prProgress < 40
                ? 90
                : prProgress < 85
                ? 90 - ((prProgress - 40) / 45) * 45
                : 45 + ((prProgress - 85) / 15) * 45
            }
            r="4.5"
            fill="var(--accent-amber, #ffb400)"
            style={{ filter: 'drop-shadow(0 0 4px var(--accent-amber, #ffb400))' }}
          />
        )}

        {/* Trigger Webhook Button */}
        <g 
          onClick={handleTriggerWebhook}
          style={{ cursor: prTriggered && prProgress < 100 ? 'not-allowed' : 'pointer' }}
        >
          <rect x="135" y="108" width="130" height="20" rx="3" fill="#181818" stroke="var(--accent-amber, #ffb400)" strokeWidth="1" />
          <text x="200" y="121" fill="var(--accent-amber, #ffb400)" fontFamily="monospace" fontSize="7.5" fontWeight="bold" textAnchor="middle">[ PUSH WEBHOOK EVENT ]</text>
        </g>

        {/* Logs terminal feed */}
        <rect x="20" y="137" width="360" height="34" fill="#080808" stroke="rgba(245,245,245,0.03)" rx="2" />
        <text x="30" y="148" fill="rgba(245,245,245,0.3)" fontFamily="monospace" fontSize="6.5">
          {prLogs[1]}
        </text>
        <text x="30" y="160" fill="var(--accent-amber, #ffb400)" fontFamily="monospace" fontSize="6.5">
          {prLogs[0]}
        </text>

        <text x="15" y="20" fill="rgba(255,180,0,0.4)" fontFamily="monospace" fontSize="8">GITHUB PR WEBHOOK PIPELINE</text>
      </svg>
    );
  }
  return null;
}

const getProjectCode = (id: string) => {
  switch (id) {
    case '01': return 'AI-26-01';
    case '02': return 'SYS-26-02';
    case '03': return 'WEB-26-03';
    case '04': return 'FIN-26-04';
    case '05': return 'LLM-25-05';
    default: return `PROJ-${id}`;
  }
};

const getProjectBgImage = (id: string) => {
  switch (id) {
    case '01': return '/nurosearch_bg.png';
    case '02': return '/dpi_bg.png';
    case '03': return '/kozumi_bg.png';
    case '04': return '/spendstrack_bg.png';
    case '05': return '/code_chatbot_bg.png';
    default: return '';
  }
};

export function ProjectsSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeProjectId, setActiveProjectId] = useState<string>('01');
  const [headerVisible, setHeaderVisible] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header reveal observer
    const headerEl = headerRef.current;
    if (headerEl) {
      const headerObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setHeaderVisible(true);
            headerObserver.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      headerObserver.observe(headerEl);
      return () => {
        headerObserver.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const track = sectionRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      const totalScrollableHeight = rect.height - viewHeight;
      if (totalScrollableHeight <= 0) return;

      let progress = -rect.top / totalScrollableHeight;
      progress = Math.max(0, Math.min(1, progress));
      
      setScrollProgress(progress);

      // Set active project index
      const idx = Math.min(
        projects.length - 1,
        Math.floor(progress * projects.length * 0.999)
      );
      setActiveProjectId(projects[idx].id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const activeIndex = Math.min(
    projects.length - 1,
    Math.floor(scrollProgress * projects.length * 0.999)
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="projects-scroll-section"
    >
      {/* Sticky Viewport Container */}
      <div className="projects-sticky-viewport">
        
        {/* Fixed Section Header HUD */}
        <div 
          ref={headerRef}
          className="projects-hud-header"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s cubic-bezier(0.65, 0, 0.35, 1), transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)',
          }}
        >
          <div className="projects-hud-label">// 02 / WORK</div>
          <h2 className="projects-hud-title">SELECTED WORK</h2>
        </div>

        {/* Horizontal Project Rail */}
        <div 
          className="projects-horizontal-rail" 
          style={{ transform: `translateX(-${scrollProgress * (projects.length - 1) * 100}vw)` }}
        >
          {projects.map((project) => {
            const details = caseStudiesData[project.id];
            return (
              <div key={project.id} className="project-slide-panel">
                <div 
                  className="project-panel-bg" 
                  style={{ backgroundImage: `url(${getProjectBgImage(project.id)})` }}
                />
                <div className="project-panel-bg-overlay" />
                <div className="project-panel-grid">
                  
                  {/* Left Column: ID, Title, Description, and Interactive Schematic */}
                  <div className="project-panel-left">
                    <div className="project-panel-header">
                      <span className="project-panel-code">{getProjectCode(project.id)}</span>
                      <h3 className="project-panel-title">{project.title}</h3>
                    </div>
                    
                    <p className="project-panel-teaser">{project.description}</p>
                    
                    <div className="project-panel-schematic-box">
                      <div className="schematic-label">// CORE DIAGRAM & SIMULATION</div>
                      <ProjectSchematic id={project.id} />
                    </div>
                  </div>

                  {/* Right Column: Detailed Specs (Challenges, Solutions, Outcomes, Tech, Github) */}
                  <div className="project-panel-right">
                    {details && (
                      <div className="project-panel-details">
                        
                        <div className="detail-row">
                          <span className="detail-meta-label">// ROLE:</span>
                          <span className="detail-meta-val">{details.role}</span>
                        </div>

                        <div className="details-scrollable-area">
                          <div className="detail-section">
                            <h4 className="detail-sec-title">KEY CHALLENGES</h4>
                            <ul className="detail-sec-list">
                              {details.challenges.map((c, i) => <li key={i}>{c}</li>)}
                            </ul>
                          </div>

                          <div className="detail-section">
                            <h4 className="detail-sec-title">SOLUTIONS</h4>
                            <ul className="detail-sec-list">
                              {details.solutions.map((s, i) => <li key={i}>{s}</li>)}
                            </ul>
                          </div>

                          <div className="detail-section">
                            <h4 className="detail-sec-title">OUTCOMES & METRICS</h4>
                            <ul className="detail-sec-list amber-text">
                              {details.metrics.map((m, i) => <li key={i}>{m}</li>)}
                            </ul>
                          </div>
                        </div>

                        <div className="detail-section specs-section">
                          <h4 className="detail-sec-title">SYSTEM SPECIFICATION</h4>
                          <div className="detail-badge-group">
                            {details.technologies.map((t) => (
                              <span key={t} className="detail-badge">{t}</span>
                            ))}
                          </div>
                        </div>

                        <div className="detail-github-wrapper" onClick={(e) => e.stopPropagation()}>
                          <Magnetic range={50} strength={0.3}>
                            <a
                              href={details.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="detail-github-btn"
                            >
                              EXPLORE CODEBASE &nbsp; →
                            </a>
                          </Magnetic>
                        </div>

                      </div>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Horizontal Progress HUD */}
        <div className="projects-progress-hud">
          <div className="hud-track-line">
            <div 
              className="hud-fill-line" 
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
          <div className="hud-ticks-container">
            {projects.map((p, idx) => {
              const isPassed = idx <= activeIndex;
              const isCurrent = idx === activeIndex;
              return (
                <div 
                  key={p.id} 
                  className={`hud-tick-item ${isPassed ? 'passed' : ''} ${isCurrent ? 'current' : ''}`}
                  style={{ left: `${(idx / (projects.length - 1)) * 100}%` }}
                >
                  <span className="tick-number">{p.id}</span>
                  <span className="tick-title">{p.title}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style>{`
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
      `}</style>
    </section>
  );
}
