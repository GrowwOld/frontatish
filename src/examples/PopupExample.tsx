import React, { useState } from 'react';
import { Popup } from '../components';

const PopupExample = (props) => {
  const [visible, setVisible] = useState(true);
  return (
    <Popup />
  );
};
export default PopupExample;
