import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableNativeFeedback,
} from 'react-native';
// eslint-disable-next-line import/no-unresolved
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useColors } from '../../themes';
import { ColorType } from '../../common/types';
import { scaleDimension } from '../../common/utils';
import { DropdownProps } from './types';
import DropList from './DropList';
import Line from './Line';

const Dropdown = (props: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const { items, active, onChange, itemStyle, activeItemStyle, iconColor } =
    props;
  const animateRotate = useRef(new Animated.Value(0)).current;
  const Colors = useColors();
  const styles = getStyles(Colors);

  const handleList = () => {
    // axios.get();
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
  const itemLabel = items[active]?.label ?? items[active];
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        onPress={handleList}
        accessibilityTraits="button"
        accessibilityComponentType="button"
        accessibilityRole="button"
        accessibilityState={{ expanded: open }}
        accessibilityLabel={itemLabel}
      >
        <View style={styles.activeItem}>
          <Text style={{ color: Colors.font_2, ...activeItemStyle }}>
            {itemLabel}
          </Text>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Animated.View
              style={[
                {
                  transform: [
                    {
                      rotate: animateRotate.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '180deg'],
                      }),
                    },
                  ],
                },
              ]}
            >
              <Icon
                name="keyboard-arrow-down"
                size={scaleDimension(20)}
                color={iconColor ?? Colors.primary}
              />
            </Animated.View>
          </View>
        </View>
      </TouchableNativeFeedback>
      {!open && <Line />}
      {open && (
        <DropList
          items={items}
          active={active}
          onChange={onItemClick}
          itemStyle={itemStyle}
        />
      )}
    </View>
  );
};

const getStyles = (Colors: ColorType) => {
  return StyleSheet.create({
    container: { margin: 20 },
    activeItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
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
