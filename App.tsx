import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import AssetBox from './components/AssetBox.tsx';
import AIAdvisor from './components/AIAdvisor.tsx';
import Logo from './components/Logo.tsx';
import TechBackground from './components/TechBackground.tsx';
import MosaicHero from './components/MosaicHero.tsx';
import { ASSET_BOXES, FOUNDATIONS, TRACK_MODULES, getIcon } from './constants.tsx';
import { Send, Mail, Phone, ChevronDown, Zap, Shield, Target, Cpu, Database, Network, ArrowLeft, Activity, Layers, Terminal, Globe } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navigateTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-accent/30 selection:text-white">
      <div className="scan-line"></div>
      <TechBackground />
      <Header onNavigate={navigateTo} activeSection={activeSection} />

      <main className="relative z-10">
        {/* HERO SECTION */}
        <div id="hero">
          <MosaicHero onNavigate={navigateTo} />
        </div>

        {/* INTRODUCTION SECTION */}
        <section className="py-32 md:py-64 px-6 md:px-12 bg-white dark:bg-slate-950 text-slate-950 dark:text-white border-y border-zinc-200 dark:border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
            <svg width="100%" height="100%"><pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
          </div>

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="reveal flex flex-col items-end text-right">
              <div className="flex items-center gap-6 mb-16">
                <div className="h-[2px] w-12 bg-accent animate-draw-line"></div>
                <span className="text-accent text-[12px] font-mono font-bold tracking-[0.8em] uppercase">// CORE_MANIFESTO_V4.2</span>
              </div>
              
              <h2 className="text-6xl md:text-9xl font-black mb-32 italic leading-[0.85] tracking-tighter">
                AL BURHAN <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-accent via-accent-dark to-zinc-400 dark:to-zinc-800 drop-shadow-sm">TECH CORE_</span>
              </h2>

              <div className="grid lg:grid-cols-2 gap-32 items-start w-full">
                <div className="order-2 lg:order-1 pt-16 border-t border-zinc-200 dark:border-zinc-800 w-full group">
                  <div className="flex items-center gap-4 mb-10 justify-end">
                    <Activity size={14} className="text-accent animate-tech-pulse" />
                    <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">REALTIME_STATUS // OPERATIONAL</span>
                  </div>
                  <p className="text-2xl md:text-3xl text-zinc-500 dark:text-zinc-400 italic leading-relaxed font-light group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-500">
                    "نحن لا نبني برمجيات فقط؛ نحن نبني مرجعيات تضمن موثوقية النص الشريف في الفضاء الرقمي العالمي عبر هندسة دقيقة للمعايير."
                  </p>
                  <div className="mt-16 flex justify-end gap-16">
                    <div className="flex flex-col items-end">
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-black text-slate-950 dark:text-white">100</span>
                        <span className="text-accent font-mono text-xl">%</span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mt-3">تحليل الضبط التقني</span>
                    </div>
                    <div className="flex flex-col items-end border-r border-zinc-100 dark:border-zinc-900 pr-16">
                      <span className="text-5xl font-black text-slate-950 dark:text-white">2030</span>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mt-3">استراتيجية التحول</span>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <p className="text-4xl md:text-6xl font-medium leading-tight tracking-tight text-slate-900 dark:text-zinc-300">
                     مركز بحثي وتطبيقي تابع لجمعية <span className="text-accent underline decoration-accent/10 decoration-8 underline-offset-12">البرهان</span>، نضبط معايير التقنيات القرآنية ونحول الابتكار إلى لغة رقمية مستدامة.
                  </p>
                  <div className="mt-12 flex justify-end">
                    <div className="facet-card facet-clip px-8 py-3 bg-accent/5 border-accent/20 flex items-center gap-4 text-accent text-xs font-bold uppercase tracking-widest">
                       <Layers size={16} />
                       <span>بنية تحتية متطورة</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOUNDATIONS SECTION */}
        <section id="foundations" className="py-40 px-6 md:px-12 bg-zinc-50 dark:bg-transparent relative overflow-hidden">
           <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-[120px] -translate-x-1/2"></div>
           
           <div className="container mx-auto max-w-7xl">
              <div className="reveal mb-32 flex flex-col md:flex-row-reverse justify-between items-end gap-20 text-right">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-6 mb-10 justify-end">
                    <span className="text-accent text-[11px] font-mono tracking-[0.6em] font-bold uppercase">Structural_Architecture</span>
                    <div className="p-3 facet-card rounded-xl border-accent/20 bg-accent/5">
                      <Database size={20} className="text-accent animate-tech-pulse" />
                    </div>
                  </div>
                  <h2 className="text-7xl md:text-9xl font-black tracking-tighter text-slate-950 dark:text-white">المنطلقات <br/> الهيكلية.</h2>
                </div>
                <div className="max-w-sm border-r-2 border-accent/30 pr-10 mb-6">
                   <p className="text-zinc-500 text-lg font-light leading-relaxed">
                      نظام منضبط لتحليل الاحتياج التقني وتوفير المرجعية الوطنية لخدمة الوحي الشريف.
                   </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {FOUNDATIONS.map((f, i) => (
                  <div key={f.id} className="reveal facet-card facet-clip p-12 group hover:border-accent/40 hover:bg-white dark:hover:bg-zinc-900/50 transition-all duration-500 text-right h-full flex flex-col relative" style={{ transitionDelay: `${i * 150}ms` }}>
                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-10 transition-opacity">
                       <Terminal size={40} className="text-accent" />
                    </div>
                    <div className="flex justify-between items-start mb-16 relative z-10">
                      <span className="text-zinc-400 dark:text-zinc-700 font-mono text-[11px] tracking-[0.2em] uppercase">{f.logCode}</span>
                      <div className="w-8 h-8 rounded-full border border-zinc-100 dark:border-zinc-800 flex items-center justify-center text-zinc-300 dark:text-zinc-700 group-hover:border-accent/30 group-hover:text-accent transition-all">
                        <span className="text-[10px] font-mono">0{i+1}</span>
                      </div>
                    </div>
                    <h4 className="text-3xl font-black mb-8 text-slate-950 dark:text-white group-hover:text-accent transition-colors leading-none">{f.title}</h4>
                    <p className="text-zinc-500 dark:text-zinc-500 text-lg leading-relaxed font-light mb-12 flex-grow">{f.description}</p>
                    <div className="mt-auto flex justify-end relative z-10">
                      <div className="w-14 h-14 facet-card facet-clip flex items-center justify-center border-zinc-200 dark:border-zinc-800 text-zinc-300 dark:text-zinc-700 group-hover:border-accent group-hover:text-accent transition-all duration-700">
                        <Target size={24} className="group-hover:rotate-180 transition-transform duration-1000" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* TRACKS SECTION */}
        <section id="tracks" className="py-40 px-6 md:px-12 bg-white dark:bg-slate-950 border-y border-zinc-200 dark:border-white/5 relative">
           <div className="container mx-auto max-w-7xl">
              <div className="reveal mb-48 text-center">
                 <div className="inline-block relative">
                    <div className="flex items-center justify-center gap-6 mb-8">
                      <div className="h-px w-24 bg-accent/20"></div>
                      <Network size={24} className="text-accent animate-tech-rotate" />
                      <span className="text-accent font-mono tracking-[1.2em] uppercase text-[12px] font-bold">Execution_Matrix_Paths</span>
                      <div className="h-px w-24 bg-accent/20"></div>
                    </div>
                    <h2 className="text-7xl md:text-[10rem] font-black text-slate-950 dark:text-white relative z-10 leading-none">مسارات التنفيذ_</h2>
                    <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.06] text-[200px] font-black -translate-y-24 select-none pointer-events-none">OPERATIONS</div>
                 </div>
              </div>

              <div className="grid gap-16">
                 {TRACK_MODULES.map((track, idx) => (
                   <div key={track.id} className={`reveal facet-card ${idx % 2 === 0 ? 'facet-clip' : 'facet-clip-reverse'} p-12 md:p-28 flex flex-col md:flex-row items-center gap-20 group bg-zinc-50/50 dark:bg-black/30 hover:bg-white dark:hover:bg-zinc-900/40 transition-all duration-1000 border-zinc-100 dark:border-white/5`}>
                      <div className="shrink-0 scale-150 group-hover:scale-[1.8] transition-transform duration-1000">
                         {getIcon(track.icon, 'animated')}
                      </div>
                      <div className="text-right flex-grow relative">
                         <div className="flex items-center gap-10 mb-12 justify-end flex-row-reverse">
                           <div className="flex flex-col items-end">
                              <span className="text-accent font-mono text-[11px] font-bold tracking-widest uppercase mb-1">{track.moduleCode}</span>
                              <div className="h-[2px] w-24 bg-accent/20 group-hover:w-full transition-all duration-1000"></div>
                           </div>
                           <span className="text-[10px] font-mono text-zinc-300 dark:text-zinc-800 tracking-tighter">SEC_ADDR: 0x{idx+1}A4</span>
                         </div>
                         <h4 className="text-5xl md:text-7xl font-black mb-10 text-slate-950 dark:text-white group-hover:translate-x-[-10px] transition-transform duration-700">{track.title}</h4>
                         <p className="text-2xl md:text-4xl text-zinc-500 dark:text-zinc-500 leading-tight max-w-5xl font-light group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors">{track.description}</p>
                         
                         <div className="mt-16 flex justify-end">
                            <button className="flex items-center gap-4 text-accent text-sm font-bold uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all -translate-x-12 group-hover:translate-x-0 duration-700">
                               <span className="p-2 facet-card facet-clip border-accent/30"><ArrowLeft size={18} /></span>
                               <span>استعراض المبادرات التقنية</span>
                            </button>
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* IMPACT SECTION */}
        <section id="impact" className="py-40 px-6 md:px-12 bg-black text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,155,11,0.05),transparent_70%)] pointer-events-none"></div>
           
           <div className="container mx-auto max-w-7xl relative z-10">
              <div className="flex items-center gap-6 mb-32 opacity-40 font-mono text-xs tracking-[0.5em] uppercase">
                 <div className="h-px flex-grow bg-white/20"></div>
                 <Activity size={16} className="text-accent" />
                 <span>Strategic_Impact_Analysis</span>
                 <div className="h-px flex-grow bg-white/20"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-40">
                 <div className="space-y-40">
                    <div className="reveal border-r-4 border-accent pr-20 text-right group">
                       <div className="mb-12 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 flex justify-end">
                          <div className="p-4 facet-card facet-clip border-accent/20">{getIcon('globe', 'solid')}</div>
                       </div>
                       <h4 className="text-6xl md:text-8xl font-black mb-10 italic tracking-tighter transition-all group-hover:translate-x-[-15px] duration-700">موثوقية <br/> المحتوى.</h4>
                       <p className="text-zinc-400 text-3xl leading-snug font-light group-hover:text-zinc-100 transition-colors">رفع معايير سلامة وضبط المحتوى القرآني الرقمي عالمياً وضمان استدامته عبر بروتوكولات معيارية دقيقة وحوكمة تقنية.</p>
                    </div>
                    <div className="reveal border-r-4 border-zinc-800 pr-20 text-right group">
                       <div className="mb-12 opacity-30 group-hover:opacity-100 transition-all flex justify-end">
                          <div className="p-4 facet-card facet-clip border-white/10">{getIcon('settings', 'solid')}</div>
                       </div>
                       <h4 className="text-6xl md:text-8xl font-black mb-10 italic tracking-tighter transition-all group-hover:translate-x-[-15px] duration-700">كفاءة <br/> الجهود.</h4>
                       <p className="text-zinc-400 text-3xl leading-snug font-light group-hover:text-zinc-100 transition-colors">تقليل التكرار وهدر الموارد المادية والزمنية عبر التوحيد المعياري للمنصات والتطبيقات وتكامل الحلول البرمجية.</p>
                    </div>
                 </div>
                 <div className="space-y-40">
                    <div className="reveal border-r-4 border-zinc-800 pr-20 text-right group">
                       <div className="mb-12 opacity-30 group-hover:opacity-100 transition-all flex justify-end">
                          <div className="p-4 facet-card facet-clip border-white/10">{getIcon('cpu', 'solid')}</div>
                       </div>
                       <h4 className="text-6xl md:text-8xl font-black mb-10 italic tracking-tighter transition-all group-hover:translate-x-[-15px] duration-700">تسريع <br/> الابتكار.</h4>
                       <p className="text-zinc-400 text-3xl leading-snug font-light group-hover:text-zinc-100 transition-colors">تحفيز الابتكار المنضبط وفق احتياجات الميدان الحقيقية والتحول الآمن لنماذج الذكاء الاصطناعي لخدمة النص الشريف.</p>
                    </div>
                    <div className="reveal border-r-4 border-accent pr-20 text-right group">
                       <div className="mb-12 opacity-30 group-hover:opacity-100 transition-all flex justify-end">
                          <div className="p-4 facet-card facet-clip border-accent/20">{getIcon('activity', 'solid')}</div>
                       </div>
                       <h4 className="text-6xl md:text-8xl font-black mb-10 italic tracking-tighter transition-all group-hover:translate-x-[-15px] duration-700">الاستدامة <br/> الرقمية.</h4>
                       <p className="text-zinc-400 text-3xl leading-snug font-light group-hover:text-zinc-100 transition-colors">بناء منظومة مستدامة تخدم الوحي وتواكب المتغيرات التقنية المتسارعة بما يضمن بقاء وتطور الأثر المعرفي للأجيال.</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-40 px-6 md:px-12 bg-zinc-50 dark:bg-transparent relative overflow-hidden">
           <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-accent/[0.02] to-transparent pointer-events-none"></div>
           
           <div className="container mx-auto max-w-5xl relative z-10">
              <div className="reveal facet-card facet-clip p-12 md:p-32 bg-white dark:bg-black/50 border-zinc-200 dark:border-zinc-800 text-right overflow-hidden shadow-2xl">
                 <div className="absolute -top-32 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-tech-pulse"></div>
                 
                 <div className="flex flex-col items-center mb-32 text-center">
                    <div className="p-6 facet-card facet-clip border-accent/20 text-accent mb-12 shadow-[0_0_30px_rgba(255,155,11,0.2)]">
                       <Zap size={40} className="animate-tech-pulse" />
                    </div>
                    <span className="text-accent text-[12px] font-mono tracking-[0.8em] uppercase font-bold mb-6">UPLINK_PROTOCOL // CONTACT</span>
                    <h2 className="text-6xl md:text-[5.5rem] font-black text-slate-950 dark:text-white leading-none">لنتواصل تقنياً.</h2>
                    <p className="mt-10 text-zinc-500 max-w-2xl mx-auto text-2xl font-light leading-relaxed">قنوات مفتوحة للاستفسارات التقنية وبناء الشراكات الاستراتيجية التي تخدم هندسة الوحي.</p>
                 </div>

                 <form className="space-y-16 relative z-10" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-16">
                      <div className="space-y-6">
                         <label className="text-[11px] font-mono font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest block">Identity_Packet_ID</label>
                         <input type="text" className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 facet-clip px-10 py-7 focus:border-accent outline-none transition-all text-slate-950 dark:text-white text-xl placeholder:text-zinc-300 dark:placeholder:text-zinc-800" placeholder="الاسم الكامل..." />
                      </div>
                      <div className="space-y-6">
                         <label className="text-[11px] font-mono font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest block">Network_Gateway_Addr</label>
                         <input type="email" className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 facet-clip px-10 py-7 focus:border-accent outline-none transition-all text-slate-950 dark:text-white text-xl placeholder:text-zinc-300 dark:placeholder:text-zinc-800" placeholder="email@example.com" />
                      </div>
                    </div>
                    <div className="space-y-6">
                       <label className="text-[11px] font-mono font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest block">Payload_Message_Body</label>
                       <textarea rows={6} className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 facet-clip px-10 py-7 focus:border-accent outline-none transition-all resize-none text-slate-950 dark:text-white text-xl placeholder:text-zinc-300 dark:placeholder:text-zinc-800" placeholder="اكتب تفاصيل استفسارك التقني أو مبادرتك هنا..."></textarea>
                    </div>
                    <button className="w-full facet-card facet-clip bg-accent text-white py-10 font-black uppercase tracking-[0.6em] hover:bg-slate-950 dark:hover:bg-white dark:hover:text-accent transition-all text-sm flex items-center justify-center gap-8 border-none shadow-2xl shadow-accent/40 group">
                       <Send size={28} className="group-hover:-translate-x-4 transition-transform duration-500" />
                       <span>بث البيانات الهيكلية للمركز</span>
                    </button>
                 </form>
              </div>
           </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-40 bg-white dark:bg-black border-t border-zinc-100 dark:border-zinc-900 relative z-10 text-right overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-accent/[0.03] dark:bg-accent/[0.05] blur-[200px] translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none"></div>
          
          <div className="container mx-auto px-12 relative z-10">
             <div className="grid lg:grid-cols-4 gap-32 mb-40 items-start">
                 <div className="lg:col-span-2 flex flex-col items-end gap-12">
                    <Logo className="w-32 h-32" />
                    <p className="text-zinc-500 dark:text-zinc-600 max-w-xl text-right font-light text-2xl leading-relaxed italic">
                      مرجع وطني رائد يعمل على ضبط جودة الحلول الرقمية للوحيين الشريفين وتمكين الابتكار التقني المستدام وفق أعلى المعايير الهندسية.
                    </p>
                 </div>
                 <div className="flex flex-col gap-10 items-end border-r border-zinc-100 dark:border-zinc-900 pr-12">
                    <span className="text-accent font-black text-[12px] font-mono tracking-[0.6em] uppercase flex items-center gap-3">
                       <Layers size={14} /> System_Links
                    </span>
                    <button onClick={() => navigateTo('hero')} className="text-zinc-400 hover:text-accent transition-colors text-xl">البداية</button>
                    <button onClick={() => navigateTo('foundations')} className="text-zinc-400 hover:text-accent transition-colors text-xl">المنطلقات</button>
                    <button onClick={() => navigateTo('tracks')} className="text-zinc-400 hover:text-accent transition-colors text-xl">المسارات</button>
                 </div>
                 <div className="flex flex-col gap-10 items-end border-r border-zinc-100 dark:border-zinc-900 pr-12">
                    <span className="text-accent font-black text-[12px] font-mono tracking-[0.6em] uppercase flex items-center gap-3">
                       <Globe size={14} /> Connectivity
                    </span>
                    <a href="#" className="text-zinc-400 hover:text-accent transition-colors text-xl underline decoration-accent/5">LinkedIn_Portal</a>
                    <a href="#" className="text-zinc-400 hover:text-accent transition-colors text-xl underline decoration-accent/5">Twitter_Stream</a>
                    <a href="#" className="text-zinc-400 hover:text-accent transition-colors text-xl underline decoration-accent/5">GitHub_Repo</a>
                 </div>
             </div>
             
             <div className="pt-20 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row-reverse justify-between items-center gap-12">
                <div className="flex flex-col items-end gap-4">
                  <p className="text-[12px] font-mono text-zinc-400 dark:text-zinc-700 tracking-[0.3em] uppercase">
                     © 2024 AL-BURHAN CENTER FOR TECH EXCELLENCE. ALL SYSTEMS SECURED AND OPERATIONAL.
                  </p>
                  <p className="text-[10px] font-mono text-zinc-500 dark:text-zinc-800 tracking-tighter">ALBURHAN_GEOMETRIC_BLUEPRINT_STABLE_v6.0.4 // REGION: KSA_RIYADH // STATUS: ACTIVE</p>
                </div>
                <div className="flex gap-16 text-[11px] font-mono text-zinc-400 dark:text-zinc-800 uppercase tracking-widest">
                  <a href="#" className="hover:text-accent transition-colors underline decoration-accent/20">Security_Protocol</a>
                  <a href="#" className="hover:text-accent transition-colors underline decoration-accent/20">Data_Sovereignty</a>
                  <a href="#" className="hover:text-accent transition-colors underline decoration-accent/20">Legal_Notice</a>
                </div>
             </div>
          </div>
      </footer>

      <AIAdvisor />
    </div>
  );
};

export default App;