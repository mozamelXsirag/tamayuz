
import React from 'react';

const TechBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Hexagonal Grid Dots */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] dark:opacity-[0.1]" xmlns="http://www.w3.org/2000/svg">
        <pattern id="hex-grid" width="100" height="173.2" patternUnits="userSpaceOnUse" patternTransform="scale(0.8) rotate(30)">
          <circle cx="0" cy="0" r="1" fill="currentColor" className="text-accent" />
          <circle cx="50" cy="86.6" r="1" fill="currentColor" className="text-accent" />
          <circle cx="100" cy="0" r="1" fill="currentColor" className="text-accent" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#hex-grid)" />
      </svg>

      {/* Floating shards with specific logo-inspired paths */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute shard-float opacity-[0.05] dark:opacity-[0.03]"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${25 + i * 5}s`
            }}
          >
            <svg width={300} height={300} viewBox="0 0 126 110">
               <path 
                d="M126.22,54.9 L95.17,.72 L32.25,0 L.21,54.57 L30.81,107.54 L92.67,107.79 Z" 
                fill="none" 
                stroke="currentColor" 
                className="text-accent"
                strokeWidth="0.5" 
                strokeDasharray="5,5"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Circuit board paths */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08] dark:opacity-[0.05]" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path d="M0,100 L200,100 L250,50 L500,50 L550,100 L1000,100" fill="none" stroke="currentColor" className="text-accent" strokeWidth="1" />
        <path d="M0,900 L300,900 L350,950 L700,950 L750,900 L1000,900" fill="none" stroke="currentColor" className="text-accent" strokeWidth="1" />
        <path d="M100,0 L100,200 L50,250 L50,500 L100,550 L100,1000" fill="none" stroke="currentColor" className="text-accent" strokeWidth="1" />
        
        {/* Connection points */}
        <circle cx="200" cy="100" r="3" fill="currentColor" className="text-accent" />
        <circle cx="500" cy="50" r="3" fill="currentColor" className="text-accent" />
        <circle cx="300" cy="900" r="3" fill="currentColor" className="text-accent" />
      </svg>

      {/* Global Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-accent/[0.03] dark:bg-accent/[0.05] blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-accent/[0.02] dark:bg-accent/[0.04] blur-[100px] rounded-full"></div>
    </div>
  );
};

export default TechBackground;
