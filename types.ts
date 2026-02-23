export interface SectionProps {
  id?: string;
  className?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ChartDataPoint {
  year: string;
  value: number;
}
