export type keyStrokeType = {
  actionType: 'insert' | 'delete';
  actionId: number;
  value: string;
};

// NumPad component props type
export interface NumPadProps {
  // gives all the meta data from numpad key
  onItemKeyClick?: (keyStroke?: keyStrokeType) => void;
  // get the item value directly
  onItemClick?: (input: string) => void;
  // if you want to explicitly handle onDeleteItem
  onDeleteItem?: () => void;
  onSubmit: () => void;
}
