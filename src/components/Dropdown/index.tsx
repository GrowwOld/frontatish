import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableNativeFeedback,
} from 'react-native';
import { useColors } from '../../themes';
import { ColorType } from '../../common/types';
import DropList from './DropList';
import Line from './Line';

interface DropdownProps {
  dropItems: Array<string>;
  active: number;
  onChange: (index: number) => void;
}

const Dropdown = (props: DropdownProps) => {
  const animateRotate = useRef(new Animated.Value(0)).current;
  const [open, setOpen] = useState(false);
  const { dropItems, active, onChange } = props;
  const Colors = useColors();
  const styles = getStyles(Colors);
  const handleList = () => {
    Animated.timing(animateRotate, {
      toValue: open ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setOpen(!open);
  };
  const onItemClick = (index: number) => {
    onChange(index);
    handleList();
  };
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={handleList}>
        <View style={styles.activeItem}>
          <Text>{dropItems[active]}</Text>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Animated.View
              style={[
                styles.caret,
                {
                  // flex: 1,
                  // alignItems: 'flex-end',
                  transform: [
                    {
                      rotate: animateRotate.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['180deg', '0deg'],
                      }),
                    },
                  ],
                },
              ]}
            />
          </View>
        </View>
      </TouchableNativeFeedback>
      {!open && <Line />}
      {open && (
        <DropList items={dropItems} active={active} onItemClick={onItemClick} />
      )}
    </View>
  );
};

const getStyles = (Colors: ColorType) => {
  return StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', margin: 20 },
    activeItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
    },
    itemContainer: {
      padding: 20,
      // padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.font_6,
    },
    caret: {
      width: 0,
      height: 0,
      borderLeftWidth: 6,
      borderRightWidth: 6,
      borderBottomWidth: 12,
      borderStyle: 'solid',
      backgroundColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: Colors.primary,
    },
  });
};

export default Dropdown;
