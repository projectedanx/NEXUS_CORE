/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Shield, Terminal } from 'lucide-react';
import DOMPurify from 'dompurify';

// Atoms
const DataNode = ({ label, value }: { label: string; value: string | number }) => (
  <div className="flex flex-col border-l-2 border-cyan-900 pl-4">
    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{label}</span>
    <span className="text-lg font-mono text-cyan-400">{value}</span>
  </div>
);

// Molecules
const NavRib = ({ title, active }: { title: string; active?: boolean }) => (
  <button 
    aria-pressed={active}
    className={`px-6 py-2 font-mono text-sm uppercase tracking-widest border-t-2 transition-colors ${
      active ? 'border-cyan-400 text-cyan-400 bg-cyan-950/20' : 'border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-600'
    }`}
  >
    {title}
  </button>
);

// Organisms
const NavigationMatrix = () => (
  <nav aria-label="Primary Matrix" className="relative z-10 w-full pt-12 pb-32 px-12 bg-zinc-950 border-b border-zinc-800">
    <div className="max-w-7xl mx-auto flex justify-between items-start">
      <div className="flex items-center gap-4">
        <Terminal className="w-8 h-8 text-emerald-500" aria-hidden="true" />
        <h1 className="text-2xl font-mono text-zinc-100 tracking-tighter">NEXUS<span className="text-zinc-600">_CORE</span></h1>
      </div>
      <div className="flex gap-2" role="group" aria-label="Matrix Controls">
        <NavRib title="Telemetry" active />
        <NavRib title="Topologies" />
        <NavRib title="Protocols" />
      </div>
    </div>
  </nav>
);

const HeroDataVis = () => {
  const [stream, setStream] = useState<number>(0);
  const [sanitizedLog, setSanitizedLog] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => setStream(prev => (prev + 142) % 9999), 150);
    // Demonstrating DOMPurify integration without violating AutonymicIsolate (no dangerouslySetInnerHTML)
    const rawData = `<span class="corrupt">Log_${Date.now()}</span>`;
    setSanitizedLog(DOMPurify.sanitize(rawData, { ALLOWED_TAGS: [] }));
    return () => clearInterval(interval);
  }, []);

  return (
    <article 
      aria-live="polite"
      className="relative z-20 -mt-20 mx-auto max-w-6xl bg-zinc-900 border border-zinc-700 p-8 shadow-[0_0_40px_rgba(0,0,0,0.8)]"
    >
      <header className="mb-8 flex justify-between items-end border-b border-zinc-800 pb-4">
        <h2 className="text-xl font-mono text-zinc-300 uppercase tracking-widest">Crystalline Data Stream</h2>
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-zinc-600">{sanitizedLog}</span>
          <Shield className="w-5 h-5 text-zinc-600" aria-hidden="true" />
        </div>
      </header>
      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <DataNode label="Flux Resonance" value={`${stream} Hz`} />
        <DataNode label="Structural Integrity" value="99.98%" />
        <DataNode label="Active Nodes" value="1,024" />
      </section>

      <div className="mt-12 h-48 w-full bg-zinc-950 border border-zinc-800 relative overflow-hidden flex items-end p-4" aria-label="Data Visualization Grid">
        {/* Simulated Data Vis */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(0deg,rgba(34,211,238,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" aria-hidden="true"></div>
        <div className="w-full h-full flex items-end gap-2 relative z-10">
          {[40, 70, 45, 90, 65, 85, 30, 55, 75, 50, 80, 60].map((h, i) => (
            <div 
              key={i} 
              className="flex-1 bg-cyan-900/50 border-t border-cyan-400/50 transition-all duration-500"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default function App() {
  return (
    <main className="min-h-screen bg-zinc-950 selection:bg-cyan-900 selection:text-cyan-50">
      <NavigationMatrix />
      <HeroDataVis />
    </main>
  );
}
