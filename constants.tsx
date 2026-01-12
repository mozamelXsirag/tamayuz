import React from 'react';
import { Binary, FlaskConical, Users, ShieldCheck, Mail, Target, Database, Globe, Zap, Cpu, Settings, Activity } from 'lucide-react';

// Exporting to window because Babel Standalone module scoping prevents global access between files
const ASSET_BOXES = [
  {
    id: '01',
    label: 'Foundation // 01',
    title: 'منطلقات \n التميّز.',
    description: 'تحليل فجوة المعايير وقيادة التحول نحو الذكاء الاصطناعي في خدمة الوحي.',
    sectionId: 'foundations',
    color: '#ff9b0b'
  },
  {
    id: '02',
    label: 'Execution // 02',
    title: 'مسارات \n الابتكار.',
    description: 'أربعة محاور تشغيلية تشمل البحث والتطوير، الابتكار، والتمكين المعرفي.',
    sectionId: 'tracks',
    color: '#0055ff'
  },
  {
    id: '03',
    label: 'Ecosystem // 03',
    title: 'الفئات \n المستهدفة.',
    description: 'بناء منظومة تخدم الجمعيات القرآنية، المطورين، والجهات التعليمية والداعمة.',
    sectionId: 'ecosystem',
    color: '#6a0dad'
  },
  {
    id: '04',
    label: 'Strategic Impact // 04',
    title: 'الأثر \n المستدام.',
    description: 'رفع الموثوقية الرقمية للمحتوى القرآني وتقليل هدر الجهود التقنية.',
    sectionId: 'impact',
    color: '#ffffff'
  }
];

const FOUNDATIONS = [
  {
    id: 'f1',
    logCode: 'LOG_FOUNDATION_01',
    title: 'فجوة المعايير',
    description: 'معالجة غياب المعايير في التطبيقات والمحتوى القرآني الرقمي لضمان الضبط الموثوق.'
  },
  {
    id: 'f2',
    logCode: 'LOG_FOUNDATION_02',
    title: 'تشتّت الجهود',
    description: 'توفير المرجعية التقنية المفقودة لتوحيد المبادرات المبعثرة تحت مظلة معيارية واحدة.'
  },
  {
    id: 'f3',
    logCode: 'LOG_FOUNDATION_03',
    title: 'التقييم والاعتماد',
    description: 'الحاجة الماسة لجهة فنية متخصصة تملك صلاحية التقييم والتطوير والاعتماد.'
  },
  {
    id: 'f4',
    logCode: 'LOG_FOUNDATION_04',
    title: 'التحول الوطني',
    description: 'قيادة الذكاء الاصطناعي في خدمة الوحي بما يواكب رؤية المملكة 2030.'
  }
];

const TRACK_MODULES = [
  {
    id: 't1',
    moduleCode: 'R&D_MODULE_01',
    title: 'البحث والتطوير',
    description: 'إنتاج المعرفة، بناء الحلول التقنية، وتطوير نماذج الذكاء الاصطناعي القرآني والتحليل الدلالي للنصوص.',
    icon: 'binary'
  },
  {
    id: 't2',
    moduleCode: 'LAB_MODULE_02',
    title: 'معمل الابتكار',
    description: 'البيئة التنفيذية لتحويل الأفكار إلى منتجات قابلة للاستخدام، واحتضان المشاريع الناشئة المتخصصة.',
    icon: 'flask'
  },
  {
    id: 't3',
    moduleCode: 'COMM_MODULE_03',
    title: 'التمكين والمجتمعات',
    description: 'بناء الإنسان قبل التقنية. تأهيل الكفاءات وبناء مجتمعات معرفية تربط المطورين بالباحثين.',
    icon: 'users'
  },
  {
    id: 't4',
    moduleCode: 'STD_MODULE_04',
    title: 'مشروع المعايير',
    description: 'المرجعية الوطنية لضبط الجودة. مقياس البرهان للجاهزية، الاعتماد القرآني، وحوكمة المحتوى.',
    icon: 'shield'
  }
];

const getIcon = (name, variant = 'animated') => {
  const iconClass = "w-12 h-12 md:w-16 md:h-16 transition-all duration-700";
  let IconComp = null;
  let wrapperClass = "relative flex items-center justify-center p-6 rounded-2xl bg-zinc-100/50 dark:bg-zinc-800/30 group-hover:bg-accent/10 transition-all duration-500 overflow-hidden hud-brackets";

  switch (name) {
    case 'binary': 
      IconComp = <Binary className={`${iconClass} text-accent ${variant === 'animated' ? 'animate-tech-pulse' : ''} group-hover:rotate-12`} />; 
      break;
    case 'flask': 
      IconComp = <FlaskConical className={`${iconClass} text-accent ${variant === 'animated' ? 'animate-float-y' : ''} group-hover:scale-110`} />; 
      break;
    case 'users': 
      IconComp = <Users className={`${iconClass} text-accent ${variant === 'animated' ? 'group-hover:translate-x-1 transition-transform' : ''}`} />; 
      break;
    case 'shield': 
      IconComp = <ShieldCheck className={`${iconClass} text-accent ${variant === 'animated' ? 'group-hover:scale-110 transition-transform' : ''}`} />; 
      break;
    case 'target': 
      IconComp = <Target className={`${iconClass} text-accent animate-tech-rotate`} />; 
      break;
    case 'database': 
      IconComp = <Database className={`${iconClass} text-accent animate-tech-pulse`} />; 
      break;
    case 'globe': 
      IconComp = <Globe className={`${iconClass} text-accent animate-tech-rotate`} />; 
      break;
    case 'zap': 
      IconComp = <Zap className={`${iconClass} text-accent animate-tech-pulse`} />; 
      break;
    case 'cpu': 
      IconComp = <Cpu className={`${iconClass} text-accent animate-tech-pulse`} />; 
      break;
    case 'settings': 
      IconComp = <Settings className={`${iconClass} text-accent animate-tech-rotate`} />; 
      break;
    case 'activity': 
      IconComp = <Activity className={`${iconClass} text-accent animate-tech-pulse`} />; 
      break;
    case 'mail': 
      IconComp = <Mail className={`${iconClass} text-accent`} />; 
      break;
    default: return null;
  }

  return (
    <div className={wrapperClass}>
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-accent/5 rounded-full blur-xl group-hover:bg-accent/20 transition-all"></div>
      <div className="relative z-10">
        {IconComp}
      </div>
    </div>
  );
};

// Expose to global scope for other files
(window as any).ASSET_BOXES = ASSET_BOXES;
(window as any).FOUNDATIONS = FOUNDATIONS;
(window as any).TRACK_MODULES = TRACK_MODULES;
(window as any).getIcon = getIcon;