import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { AssetBoxProps } from '../types.ts';

const AssetBox: React.FC<AssetBoxProps> = ({ 
  label, 
  title, 
  description, 
  sectionId, 
  onNavigate,
  id,
  gridClass = "col-span-12 md:col-span-6" 
}) => {
  const isEven = parseInt(id) % 2 === 0;
  const clipClass = isEven ? 'facet-clip' : 'facet-clip-reverse';

  return (
    <div className={`reveal ${gridClass}`}>
      <button 
        onClick={() => onNavigate?.(sectionId)}
        className={`facet-card ${clipClass} w-full p-10 md:p-14 flex flex-col items-start text-right group h-full min-h-[450px] overflow-hidden`}
      >
        {/* Geometric Background Element */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/[0.04] dark:bg-orange-500/[0.03] rotate-45 translate-x-12 -translate-y-12 group-hover:bg-orange-500/[0.1] transition-colors duration-700"></div>
        
        <div className="flex justify-between w-full items-start mb-12 relative z-10">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono tracking-[0.5em] uppercase text-orange-600 dark:text-orange-500 group-hover:tracking-[0.7em] transition-all">
              {label}
            </span>
            <div className="h-[2px] w-8 bg-orange-500/30 group-hover:w-full transition-all duration-700"></div>
          </div>
          <div className="text-[9px] font-mono text-zinc-500 dark:text-zinc-800 tracking-widest">ID:00{id} // ADDR_SEC</div>
        </div>
        
        <h3 className="text-4xl md:text-6xl font-extrabold mb-8 leading-[1.05] transition-all duration-700 dark:text-white text-slate-950 group-hover:translate-x-[-10px] origin-right relative z-10">
          {title.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h3>
        
        <p className="text-zinc-600 dark:text-zinc-500 group-hover:text-zinc-950 dark:group-hover:text-zinc-300 transition-colors mb-12 max-w-sm leading-relaxed text-lg font-light relative z-10 text-right">
          {description}
        </p>

        <div className="mt-auto w-full flex justify-between items-center relative z-10">
          <div className="flex items-center gap-4 text-orange-600 dark:text-orange-500 font-black text-xs uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all -translate-x-6 group-hover:translate-x-0 duration-500">
             <ArrowLeft size={18} strokeWidth={3} />
             <span>دخول النظام التقني</span>
          </div>
          <div className="w-10 h-10 border border-zinc-200 dark:border-zinc-900 group-hover:border-orange-500/40 rounded-full flex items-center justify-center transition-all">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default AssetBox;