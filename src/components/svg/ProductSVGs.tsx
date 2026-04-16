"use client";

import React from "react";

export function RouterSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Base */}
      <rect x="30" y="90" width="140" height="40" rx="8" fill="#0ea5e9" opacity="0.9" />
      <rect x="35" y="95" width="130" height="30" rx="5" fill="#0284c7" opacity="0.3" />
      {/* LED dots */}
      <circle cx="55" cy="110" r="3" fill="#fff" opacity="0.9" />
      <circle cx="70" cy="110" r="3" fill="#fff" opacity="0.6" />
      <circle cx="85" cy="110" r="3" fill="#fff" opacity="0.6" />
      <circle cx="100" cy="110" r="3" fill="#fff" opacity="0.4" />
      {/* Antennas */}
      <rect x="50" y="30" width="4" height="60" rx="2" fill="#0ea5e9" />
      <circle cx="52" cy="26" r="6" fill="#0ea5e9" opacity="0.8" />
      <rect x="98" y="20" width="4" height="70" rx="2" fill="#0ea5e9" />
      <circle cx="100" cy="16" r="6" fill="#0ea5e9" opacity="0.8" />
      <rect x="146" y="30" width="4" height="60" rx="2" fill="#0ea5e9" />
      <circle cx="148" cy="26" r="6" fill="#0ea5e9" opacity="0.8" />
      {/* Signal waves */}
      <path d="M85 45 Q100 30 115 45" stroke="#0ea5e9" strokeWidth="2" fill="none" opacity="0.4" />
      <path d="M78 38 Q100 18 122 38" stroke="#0ea5e9" strokeWidth="2" fill="none" opacity="0.3" />
    </svg>
  );
}

export function MeshSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Node 1 - center */}
      <circle cx="100" cy="60" r="24" fill="#7c3aed" opacity="0.9" />
      <circle cx="100" cy="60" r="12" fill="#fff" opacity="0.3" />
      {/* Node 2 - left */}
      <circle cx="45" cy="120" r="20" fill="#7c3aed" opacity="0.7" />
      <circle cx="45" cy="120" r="10" fill="#fff" opacity="0.3" />
      {/* Node 3 - right */}
      <circle cx="155" cy="120" r="20" fill="#7c3aed" opacity="0.7" />
      <circle cx="155" cy="120" r="10" fill="#fff" opacity="0.3" />
      {/* Connection lines */}
      <line x1="100" y1="84" x2="55" y2="105" stroke="#7c3aed" strokeWidth="2" opacity="0.5" strokeDasharray="4 4" />
      <line x1="100" y1="84" x2="145" y2="105" stroke="#7c3aed" strokeWidth="2" opacity="0.5" strokeDasharray="4 4" />
      <line x1="65" y1="120" x2="135" y2="120" stroke="#7c3aed" strokeWidth="2" opacity="0.3" strokeDasharray="4 4" />
      {/* Signal rings */}
      <circle cx="100" cy="60" r="34" stroke="#7c3aed" strokeWidth="1.5" opacity="0.2" />
      <circle cx="100" cy="60" r="44" stroke="#7c3aed" strokeWidth="1" opacity="0.1" />
    </svg>
  );
}

export function SwitchSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main body */}
      <rect x="20" y="55" width="160" height="50" rx="6" fill="#2563eb" opacity="0.9" />
      <rect x="25" y="60" width="150" height="40" rx="4" fill="#1d4ed8" opacity="0.3" />
      {/* Port row */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <React.Fragment key={i}>
          <rect x={35 + i * 18} y={70} width={12} height={16} rx={2} fill="#fff" opacity={0.8} />
          <circle cx={41 + i * 18} cy={94} r={2} fill="#4ade80" opacity={i < 5 ? 0.9 : 0.3} />
        </React.Fragment>
      ))}
      {/* Status LED */}
      <circle cx="165" cy="72" r="3" fill="#4ade80" />
    </svg>
  );
}

export function CameraSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Mount pole */}
      <rect x="95" y="10" width="10" height="40" rx="2" fill="#0d9488" opacity="0.6" />
      {/* Camera body */}
      <ellipse cx="100" cy="80" rx="40" ry="35" fill="#0d9488" opacity="0.9" />
      {/* Lens */}
      <circle cx="100" cy="78" r="20" fill="#134e4a" opacity="0.6" />
      <circle cx="100" cy="78" r="12" fill="#0d9488" opacity="0.4" />
      <circle cx="100" cy="78" r="6" fill="#fff" opacity="0.3" />
      {/* LED ring */}
      <circle cx="100" cy="78" r="25" stroke="#5eead4" strokeWidth="1.5" opacity="0.3" />
      {/* Base */}
      <rect x="75" y="115" width="50" height="10" rx="5" fill="#0d9488" opacity="0.7" />
      {/* IR indicator */}
      <circle cx="120" cy="60" r="3" fill="#ef4444" opacity="0.8" />
    </svg>
  );
}

export function LteSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Router body */}
      <rect x="40" y="70" width="120" height="55" rx="8" fill="#16a34a" opacity="0.9" />
      <rect x="45" y="75" width="110" height="45" rx="5" fill="#15803d" opacity="0.3" />
      {/* Antennas */}
      <rect x="60" y="25" width="3" height="45" rx="1.5" fill="#16a34a" />
      <rect x="137" y="25" width="3" height="45" rx="1.5" fill="#16a34a" />
      {/* SIM slot */}
      <rect x="80" y="90" width="40" height="20" rx="3" fill="#fff" opacity="0.2" />
      <text x="100" y="104" textAnchor="middle" fill="#fff" fontSize="8" opacity="0.6" fontFamily="sans-serif">SIM</text>
      {/* Signal bars */}
      <rect x="150" y="82" width="4" height="6" rx="1" fill="#4ade80" opacity="0.5" />
      <rect x="156" y="78" width="4" height="10" rx="1" fill="#4ade80" opacity="0.7" />
      <rect x="162" y="74" width="4" height="14" rx="1" fill="#4ade80" opacity="0.9" />
      {/* LEDs */}
      <circle cx="55" cy="83" r="2.5" fill="#4ade80" opacity="0.9" />
      <circle cx="65" cy="83" r="2.5" fill="#4ade80" opacity="0.6" />
    </svg>
  );
}

export function CplSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Powerline adapter 1 */}
      <rect x="30" y="30" width="50" height="100" rx="8" fill="#f59e0b" opacity="0.9" />
      <rect x="42" y="45" width="26" height="15" rx="3" fill="#fff" opacity="0.2" />
      <circle cx="55" cy="100" r="4" fill="#4ade80" opacity="0.8" />
      {/* Powerline adapter 2 */}
      <rect x="120" y="30" width="50" height="100" rx="8" fill="#f59e0b" opacity="0.9" />
      <rect x="132" y="45" width="26" height="15" rx="3" fill="#fff" opacity="0.2" />
      <circle cx="145" cy="100" r="4" fill="#4ade80" opacity="0.8" />
      {/* Connection line */}
      <path d="M80 80 Q100 60 120 80" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 3" opacity="0.5" />
      <path d="M80 90 Q100 70 120 90" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 3" opacity="0.3" />
    </svg>
  );
}

export function AccessPointSVG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ceiling mount disc */}
      <ellipse cx="100" cy="90" rx="55" ry="20" fill="#6366f1" opacity="0.3" />
      <ellipse cx="100" cy="80" rx="50" ry="35" fill="#6366f1" opacity="0.9" />
      <ellipse cx="100" cy="80" rx="40" ry="28" fill="#818cf8" opacity="0.3" />
      {/* Center LED ring */}
      <ellipse cx="100" cy="75" rx="15" ry="10" fill="#fff" opacity="0.15" />
      <circle cx="100" cy="73" r="4" fill="#4ade80" opacity="0.9" />
      {/* WiFi signal waves */}
      <path d="M85 50 Q100 35 115 50" stroke="#6366f1" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M78 42 Q100 22 122 42" stroke="#6366f1" strokeWidth="2" fill="none" opacity="0.35" />
      <path d="M71 34 Q100 10 129 34" stroke="#6366f1" strokeWidth="1.5" fill="none" opacity="0.2" />
      {/* Mounting plate */}
      <rect x="90" y="105" width="20" height="4" rx="2" fill="#6366f1" opacity="0.4" />
    </svg>
  );
}

export function getProductSVG(type: string): React.FC<{ className?: string }> {
  switch (type) {
    case "router": return RouterSVG;
    case "mesh": return MeshSVG;
    case "switch": return SwitchSVG;
    case "camera": return CameraSVG;
    case "ap": return AccessPointSVG;
    case "4g": return LteSVG;
    case "cpl": return CplSVG;
    default: return RouterSVG;
  }
}
