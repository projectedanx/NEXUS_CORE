/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';

/**
 * A component that renders a stylized data node for the monitor.
 *
 * @param {Object} props - The component props.
 * @param {string} props.label - The label for the data node.
 * @param {string | number} props.value - The value to display.
 * @returns {React.JSX.Element} The rendered data node component.
 */
const MonitorNode = ({ label, value }: { label: string; value: string | number }) => (
  <div className="flex flex-col border-l-2 border-orange-700 pl-4">
    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{label}</span>
    <span className="text-lg font-mono text-orange-400">{value}</span>
  </div>
);

/**
 * A component that visualizes "virtual pheromones" and "Symbolic Scars"
 * based on the Stigmergic Coordination strategy (PAT-008).
 * It acts as an epistemic escrow monitor across domain boundaries.
 *
 * @returns {React.JSX.Element} The rendered Stigmergic Trace Monitor component.
 */
export const StigmergicMonitor = () => {
  const [pheromoneGradient, setPheromoneGradient] = useState<number>(0);
  const [scarDensity, setScarDensity] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate fluctuation in pheromone gradient and scar density
      setPheromoneGradient(Math.random() * 100);
      setScarDensity(Math.random() * 0.8 + 0.1); // Values between 0.1 and 0.9
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <article
      aria-live="polite"
      className="relative z-20 mx-auto max-w-6xl mt-8 bg-zinc-900 border border-orange-900/50 p-8 shadow-[0_0_40px_rgba(194,65,12,0.15)] mb-12"
    >
      <header className="mb-8 flex justify-between items-end border-b border-zinc-800 pb-4">
        <h2 className="text-xl font-mono text-orange-500 uppercase tracking-widest flex items-center gap-2">
          <Activity className="w-5 h-5" />
          Stigmergic Trace Monitor (PAT-008)
        </h2>
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-zinc-500">Epistemic Escrow Active</span>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-zinc-800 p-4 relative overflow-hidden">
           <div className="absolute inset-0 bg-orange-900/10 pointer-events-none" style={{ opacity: pheromoneGradient / 100 }}></div>
          <h3 className="text-sm font-mono text-zinc-400 mb-4 relative z-10">Environmental Modification</h3>
          <div className="relative z-10">
             <MonitorNode label="Pheromone Gradient" value={`${pheromoneGradient.toFixed(1)}%`} />
          </div>
        </div>
        <div className="border border-zinc-800 p-4">
          <h3 className="text-sm font-mono text-zinc-400 mb-4">Symbolic Scar Archive (STA)</h3>
          <MonitorNode label="STA Density (ρ)" value={scarDensity.toFixed(3)} />
          {scarDensity > 0.8 && (
            <div className="mt-2 text-xs font-mono text-red-500 animate-pulse">
               WARNING: Epistemic Sclerosis threshold approached. Debridement recommended.
            </div>
          )}
        </div>
      </section>

      <div className="mt-8 text-xs font-mono text-zinc-500 border-l-2 border-orange-900 pl-4">
        <p>VULCAN Node ID: The Brutalist</p>
        <p>Constraint Enforcement: Draft Conditioned</p>
      </div>
    </article>
  );
};
