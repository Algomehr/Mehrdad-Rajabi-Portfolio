import React from 'react';

const SVGWrapper: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <svg viewBox="0 0 400 267" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
            <radialGradient id="galaxy-grad">
                <stop offset="0%" stopColor="#a5b4fc" />
                <stop offset="100%" stopColor="#3b82f6" />
            </radialGradient>
        </defs>
        <rect width="400" height="267" fill="#111827" />
        {children}
    </svg>
);

const QkdSimulatorGraphic = () => (
    <SVGWrapper>
        <g opacity="0.4" filter="url(#glow)">
            <path d="M50,133.5 C150,50, 250,217, 350,133.5" stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="4 4" />
            <path d="M50,133.5 C150,217, 250,50, 350,133.5" stroke="#60a5fa" strokeWidth="2" fill="none" strokeDasharray="4 4" />
        </g>
        <text x="200" y="150" fontFamily="sans-serif" fontSize="60" fill="#e0e7ff" textAnchor="middle" fontWeight="bold" opacity="0.8">🔑</text>
    </SVGWrapper>
);

const CyberSimAiGraphic = () => (
    <SVGWrapper>
        <path d="M200,60 L300,100 L300,180 C300,220 200,260 200,260 C200,260 100,220 100,180 L100,100 Z" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" strokeWidth="3" filter="url(#glow)" />
        <text x="200" y="150" fill="#a5b4fc" fontSize="12" fontFamily="monospace" textAnchor="middle">
            <tspan x="200" dy="-1.2em">01101000 01100001</tspan>
            <tspan x="200" dy="1.2em">01100011 01101011</tspan>
        </text>
        <text x="200" y="200" fill="#e0e7ff" fontSize="30" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">AI</text>
    </SVGWrapper>
);

const NeuroArchitectGraphic = () => (
    <SVGWrapper>
         <g filter="url(#glow)">
            <circle cx="200" cy="133" r="30" fill="#3b82f6" />
            {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * 2 * Math.PI;
                const x2 = 200 + Math.cos(angle) * 120;
                const y2 = 133 + Math.sin(angle) * 120;
                return (
                    <g key={i}>
                        <line x1="200" y1="133" x2={x2} y2={y2} stroke="#60a5fa" strokeWidth="1.5" />
                        <circle cx={x2} cy={y2} r="10" fill="#a5b4fc" />
                    </g>
                );
            })}
        </g>
    </SVGWrapper>
);

const MlVisualizerGraphic = () => (
    <SVGWrapper>
        <path d="M50,227 C150,227, 200,40, 350,40" stroke="#a5b4fc" strokeWidth="3" fill="none" filter="url(#glow)" />
        <g>
            {[...Array(15)].map((_, i) => <circle key={i} cx={Math.random()*150 + 50} cy={Math.random()*100 + 150} r="3" fill="#3b82f6" opacity="0.8" />)}
            {[...Array(15)].map((_, i) => <circle key={i} cx={Math.random()*150 + 200} cy={Math.random()*100 + 20} r="3" fill="#60a5fa" opacity="0.8" />)}
        </g>
    </SVGWrapper>
);

const AiDataFinderGraphic = () => (
    <SVGWrapper>
        <g transform="translate(150 83) scale(1.5)" filter="url(#glow)">
            <circle cx="50" cy="50" r="30" stroke="#a5b4fc" strokeWidth="4" fill="none" />
            <line x1="71" y1="71" x2="90" y2="90" stroke="#a5b4fc" strokeWidth="4" />
        </g>
        <g opacity="0.3">
            {[...Array(5)].map((_, i) =>
                [...Array(8)].map((_, j) =>
                    <rect key={`${i}-${j}`} x={j*50+10} y={i*50+10} width="30" height="30" rx="5" fill={Math.random() > 0.5 ? "#3b82f6" : "#1d4ed8"} />
                )
            )}
        </g>
    </SVGWrapper>
);

const AiForgeGraphic = () => (
    <SVGWrapper>
        <g filter="url(#glow)">
            <path d="M100,150 L120,130 L280,130 L300,150 L300,180 L270,210 L130,210 L100,180 Z" fill="#374151" stroke="#6b7280" strokeWidth="2" />
            <rect x="150" y="110" width="100" height="20" fill="#9ca3af" rx="5" />
            <text x="200" y="175" fill="#e0e7ff" fontSize="30" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">AI</text>
        </g>
    </SVGWrapper>
);

const MechanicsAnalyzerGraphic = () => (
    <SVGWrapper>
         <g filter="url(#glow)">
            <path d="M250 133 A 60 60 0 1 0 250 133.1" stroke="#60a5fa" strokeWidth="3" fill="none" />
            <circle cx="250" cy="73" r="10" fill="#a5b4fc" />
            <path d="M50 80 H 150 L 125 40 Z" fill="#60a5fa" />
            <rect x="50" y="80" width="100" height="120" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" strokeWidth="2" />
        </g>
    </SVGWrapper>
);

const GalacticPlaygroundGraphic = () => (
    <SVGWrapper>
        <circle cx="200" cy="133" r="100" fill="url(#galaxy-grad)" opacity="0.3" filter="url(#glow)" />
        {[...Array(100)].map((_, i) => {
            const angle = Math.random() * 2 * Math.PI;
            const radius = Math.random() * 150 * Math.sqrt(Math.random());
            const x = 200 + Math.cos(angle) * radius;
            const y = 133 + Math.sin(angle) * radius;
            return <circle key={i} cx={x} cy={y} r={Math.random() * 1.5} fill="white" opacity="0.7" />;
        })}
        <circle cx="80" cy="80" r="20" fill="#3b82f6" />
        <circle cx="320" cy="190" r="15" fill="#a5b4fc" />
    </SVGWrapper>
);

const MultiverseSimulatorGraphic = () => (
    <SVGWrapper>
        <g filter="url(#glow)">
            <circle cx="160" cy="133" r="90" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />
            <circle cx="240" cy="133" r="90" fill="rgba(96, 165, 250, 0.2)" stroke="#60a5fa" strokeWidth="2" />
        </g>
        <text x="160" y="145" fontSize="40" textAnchor="middle" fill="#e0e7ff">α</text>
        <text x="240" y="145" fontSize="40" textAnchor="middle" fill="#e0e7ff">β</text>
    </SVGWrapper>
);

const ThreeDWebappGraphic = () => {
    const p = (x:number, y:number) => ({ x: x, y: y });
    const c = { x: 200, y: 133 };
    const size = 80;
    const points = [
        p(c.x - size, c.y - size), p(c.x + size, c.y - size),
        p(c.x + size, c.y + size), p(c.x - size, c.y + size),
        p(c.x - size/2, c.y - size/2), p(c.x + size/2, c.y - size/2),
        p(c.x + size/2, c.y + size/2), p(c.x - size/2, c.y + size/2),
    ];
    const lines = [
        [points[0], points[1]], [points[1], points[2]], [points[2], points[3]], [points[3], points[0]],
        [points[4], points[5]], [points[5], points[6]], [points[6], points[7]], [points[7], points[4]],
        [points[0], points[4]], [points[1], points[5]], [points[2], points[6]], [points[3], points[7]],
    ];

    return (
        <SVGWrapper>
            <g stroke="#60a5fa" strokeWidth="2.5" filter="url(#glow)">
                {lines.map((line, i) =>
                    <line key={i} x1={line[0].x} y1={line[0].y} x2={line[1].x} y2={line[1].y} />
                )}
            </g>
        </SVGWrapper>
    );
};

const DefaultGraphic = () => (
    <SVGWrapper>
        <line x1="0" y1="0" x2="400" y2="267" stroke="#374151" strokeWidth="2" />
        <line x1="400" y1="0" x2="0" y2="267" stroke="#374151" strokeWidth="2" />
    </SVGWrapper>
)

export const ProjectGraphic: React.FC<{ graphicId: string }> = ({ graphicId }) => {
  switch (graphicId) {
    case 'qkd-simulator': return <QkdSimulatorGraphic />;
    case 'cybersim-ai': return <CyberSimAiGraphic />;
    case 'neuro-architect': return <NeuroArchitectGraphic />;
    case 'ml-visualizer': return <MlVisualizerGraphic />;
    case 'ai-data-finder': return <AiDataFinderGraphic />;
    case 'ai-forge': return <AiForgeGraphic />;
    case 'mechanics-analyzer': return <MechanicsAnalyzerGraphic />;
    case 'galactic-playground': return <GalacticPlaygroundGraphic />;
    case 'multiverse-simulator': return <MultiverseSimulatorGraphic />;
    case '3d-webapp': return <ThreeDWebappGraphic />;
    default: return <DefaultGraphic />;
  }
};