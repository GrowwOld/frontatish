/*
  Types related to popup component
*/

export interface PopupProps {
  isOpen: boolean;
}

export interface PopupState {
  isOpen: boolean;
  fake: boolean;
  pan: any;
}
