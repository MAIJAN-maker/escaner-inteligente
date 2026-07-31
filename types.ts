export interface ProfileItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  keySigns: string[];
  focusArea: string;
  iconName: string;
}

export type ModalType = 'privacy' | 'terms' | 'contact' | 'disclaimer' | null;

export interface IdentifiedSymptom {
  id: string;
  text: string;
  icon: string;
  explanation: string;
}
