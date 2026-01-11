import React, { useState } from 'react';
import { ASSET_BOXES } from '../constants.tsx';

interface MosaicHeroProps {
  onNavigate: (id: string) => void;
}

const MosaicHero: React.FC<MosaicHeroProps> = ({ onNavigate }) => {
  const panes = ASSET_BOXES.slice(0, 4); 
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const images = [
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
  ];

  return (
    <section className="mosaic-container">
      {panes.map((pane, idx) => (
        <button 
          key={pane.id}
          onMouseEnter={() => setHoveredIdx(idx)}
          onMouseLeave={() => setHoveredIdx(null)}
          onClick={() => onNavigate(pane.sectionId)}
          className={`mosaic-item group transition-all duration-700 ease-out ${
            hoveredIdx !== null && hoveredIdx !== idx ? 'opacity-40 grayscale blur-[2px]' : 'opacity-100'
          }`}
        >
          <div 
            className="mosaic-bg transform transition-transform duration-1000 ease-out" 
            style={{ 
              backgroundImage: `url(${images[idx]})`,
              transform: hoveredIdx === idx ? 'scale(1.1) rotate(-1deg)' : 'scale(1) rotate(0deg)'
            }}
          ></div>
          <div className="mosaic-overlay"></div>
          
          <div className="item-content relative z-10 transition-transform duration-500 group-hover:translate-y-[-10px]">
            <div className="flex flex-col items-center gap-6">
              <span className="text-[11px] font-mono text-accent font-bold tracking-[0.6em] uppercase opacity-60 group-hover:opacity-100 transition-all">
                {pane.label}
              </span>
              <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter text-slate-900 dark:text-white transition-all duration-700 drop-shadow-2xl">
                {pane.title.replace('\n', ' ')}
              </h2>
              <div className="mt-8 h-1 w-0 bg-accent group-hover:w-full transition-all duration-1000 shadow-[0_0_15px_rgba(255,155,11,0.5)]"></div>
              <p className="mt-8 text-lg text-zinc-500 dark:text-zinc-300 opacity-0 group-hover:opacity-100 transition-all translate-y-8 group-hover:translate-y-0 duration-700 max-w-[280px] leading-relaxed font-light">
                {pane.description}
              </p>
            </div>
          </div>

          {/* HUD Tech Lines */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-700">
             <div className="absolute top-10 left-10 w-20 h-[1px] bg-accent"></div>
             <div className="absolute top-10 left-10 w-[1px] h-20 bg-accent"></div>
             <div className="absolute bottom-10 right-10 w-20 h-[1px] bg-accent"></div>
             <div className="absolute bottom-10 right-10 w-[1px] h-20 bg-accent"></div>
          </div>

          <div className="absolute bottom-12 right-12 text-[10px] font-mono text-zinc-600 dark:text-zinc-800 tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
            0x0{idx + 1}_ACCESS // READY_
          </div>
        </button>
      ))}
    </section>
  );
};

export default MosaicHero;