export interface DropItem {
  label: string;
  value: string | number;
}

export interface DropdownProps {
  dropItems: Array<DropItem>;
  active: number;
  onChange: (index: number) => void;
}
export interface DropListProps {
  items: Array<DropItem>;
  active: number;
  onItemClick: (index: number) => void;
}
