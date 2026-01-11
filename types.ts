
export interface AssetBoxProps {
  id: string;
  label: string;
  title: string;
  description: string;
  sectionId: string; // تم تغيير link إلى sectionId
  color?: string;
  gridClass?: string;
  // Made onNavigate optional because it's often injected by the component's parent
  onNavigate?: (sectionId: string) => void;
}

export interface TrackModule {
  id: string;
  moduleCode: string;
  title: string;
  description: string;
  icon: string;
}

export interface FoundationLog {
  id: string;
  logCode: string;
  title: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}
