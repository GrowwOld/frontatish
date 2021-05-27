export interface ListProps {
  leftLabel: string;
  leftSubtext?: string;
  rightLabel?: string;
  rightSubtext?: string;
  leftChip: boolean;
  rightChip: boolean;
  sparkLine: boolean;
  clickable: boolean;
  onClick?: () => null;
}
