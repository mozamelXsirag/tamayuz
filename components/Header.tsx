import React, { useState, useEffect } from 'react';
import { Mail, Moon, Sun, Activity, Terminal } from 'lucide-react';
import Logo from './Logo.tsx';

interface HeaderProps {
  onNavigate: (id: string) => void;
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('ar-SA'));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('ar-SA'));
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  };

  const navItems = [
    { name: 'المسارات', id: 'tracks' },
    { name: 'المنطلقات', id: 'foundations' },
    { name: 'الأثر', id: 'impact' },
    { name: 'تواصل', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 border-b border-zinc-200 dark:border-white/5 bg-white/50 dark:bg-black/20 backdrop-blur-xl`}>
      {/* Top Status Bar */}
      <div className="hidden md:flex h-8 border-b border-zinc-200 dark:border-white/5 px-8 justify-between items-center text-[10px] font-mono tracking-widest text-zinc-500">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Activity size={12} className="text-accent animate-pulse" />
            <span>حالة النظام: تشغيل كامل</span>
          </div>
          <div className="flex items-center gap-2">
            <Terminal size={12} />
            <span>VER: 4.0.2-GEN</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span>الرياض // المملكة العربية السعودية</span>
          <span>{currentTime}</span>
        </div>
      </div>

      {/* Main Nav Area */}
      <div className="max-w-[1600px] mx-auto px-6 h-20 md:h-24 flex justify-between items-center">
        <button onClick={() => onNavigate('hero')} className="flex items-center gap-4 group">
          <Logo className="w-12 h-12 md:w-14 md:h-14 group-hover:scale-105 transition-transform" />
          <div className="flex flex-col text-right">
            <span className="font-bold text-lg md:text-xl tracking-tighter dark:text-white text-slate-950 uppercase leading-none">مركز التميّز</span>
            <span className="text-[10px] font-mono text-accent font-bold mt-1 tracking-widest leading-none">TECH_EXCELLENCE_HUB</span>
          </div>
        </button>
        
        <nav className="hidden lg:flex gap-12">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all relative py-2 ${
                activeSection === item.id 
                  ? 'text-accent' 
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-accent'
              }`}
            >
              {item.name}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent shadow-[0_0_10px_rgba(255,155,11,0.5)]"></span>
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Technical Toggle */}
          <div className="flex items-center gap-1 p-1 facet-card bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 facet-clip !py-1 px-1">
            <button 
              onClick={toggleTheme}
              className={`w-8 h-8 flex items-center justify-center rounded transition-all ${!isDarkMode ? 'bg-white text-accent shadow-sm' : 'text-zinc-500'}`}
            >
              <Sun size={14} />
            </button>
            <button 
              onClick={toggleTheme}
              className={`w-8 h-8 flex items-center justify-center rounded transition-all ${isDarkMode ? 'bg-accent/20 text-accent' : 'text-zinc-500'}`}
            >
              <Moon size={14} />
            </button>
          </div>

          <button 
            onClick={() => onNavigate('contact')}
            className="hidden md:flex facet-card facet-clip bg-accent hover:bg-accent-dark text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest border-none transition-all hover:scale-105 active:scale-95"
          >
            تواصل الآن
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;