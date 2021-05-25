export type keyStrokeType = {
  actionType: 'insert' | 'delete';
  actionId: number;
  value: string;
};

// NumPad component props type
export interface NumPadProps {
  onItemClick: (keyStroke?: keyStrokeType) => void;
  // will be removed
  onDeleteItem?: (keystroke?: keyStrokeType) => void;
  onSubmit: () => void;
}
