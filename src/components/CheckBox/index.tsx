// base and lib imports
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, View } from 'react-native';

// types
import { CheckBoxProps } from './types';

// utils and helpers
import { getCheckDmnsn } from '../../common/utils';

// common components
import { Scale } from '../../animated';

// styles and themes
import { useColors } from '../../themes';

// This API is broken is terms of accessible because for now checkbox only shows a box element which in the end will be wrapped inside pressable,
// resulting into nested element which won't be covered by touches hence resulting into not accessible
// Refer CheckBox, the api should be similar where labels are passed as props
const CheckBox = (props: CheckBoxProps) => {
  const { checked, containerStyle, disabled, size, checkColor } = props;
  const [height, width, iconSize] = getCheckDmnsn(size!);
  const Colors = useColors();
  const getRequiredColor = () => {
    if (disabled) {
      if (!checked) {
        return [Colors.white, Colors.font_3, Colors.white];
      }
      return [Colors.font_3, Colors.font_3, Colors.white];
    }
    if (!disabled && checked) {
      return [Colors.primary, Colors.transparent, Colors.white];
    }
    return [Colors.white, Colors.primary];
  };

  const [backgroundColor, borderColor, iconColor] = getRequiredColor();
  // if check color exists use that only,else fallback to iconColor
  // returned from our main color fetch method.
  const finalIconColor = checkColor || iconColor;
  const mainContainerStyle = {
    ...styles.boxContainer,
    backgroundColor,
    borderColor,
    // giving preference to custom styles
    ...containerStyle,
    height,
    width,
  };
  return (
    <View
      style={mainContainerStyle}
      accessibilityRole="checkbox"
      accessibilityState={{ checked, disabled }}
    >
      {/* <Fade visible={checked!} containerStyle={{ flex: 1 }} duration={300}>
          <Icon name="check" size={iconSize} color={iconColor} />
        </Fade> */}

      <Scale scale={checked!!}>
        <Icon name="check" size={iconSize} color={finalIconColor} />
      </Scale>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    borderWidth: 2,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default CheckBox;
