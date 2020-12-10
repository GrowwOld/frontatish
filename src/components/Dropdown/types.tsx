export interface DropItem {
  label: string;
  value: string | number;
}

export type DropItems = DropItem[] & string[];
export interface DropdownProps {
  dropItems: DropItems;
  active: number;
  onChange: (index: number) => void;
}
export interface DropListProps {
  items: DropItems;
  active: number;
  onItemClick: (index: number) => void;
}
