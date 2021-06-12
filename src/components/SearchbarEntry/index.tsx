import React from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  ImageSourcePropType,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // eslint-disable-line import/no-unresolved
import { useColors } from '../../themes';
import { SearchbarEntryProps } from './types';
import getStyles from './helper';

const SearchbarEntry = (props: SearchbarEntryProps) => {
  const Colors = useColors();
  const styles = getStyles(Colors);

  const {
    containerStyle,
    inputStyle,
    leftIcon,
    rightIcon,
    leftLogo,
    rightLogo,
    onLeftIconPress,
    onRightIconPress,
    onLeftLogoPress,
    onRightLogoPress,
    onPress,
    value,
  } = props;

  const renderIcon = (name: string, onIconPress: (() => void) | undefined) => {
    const onPressUtil = onIconPress || onPress;

    return (
      <Icon name={name} size={30} onPress={onPressUtil} color={Colors.font_1} />
    );
  };

  const renderLogo = (
    name: ImageSourcePropType,
    onLogoPress: (() => void) | undefined,
  ) => {
    const source = name;

    const onPressUtil = onLogoPress || onPress;

    return (
      <TouchableWithoutFeedback onPress={onPressUtil}>
        <Image source={source} style={{ height: 30, width: 30 }} />
      </TouchableWithoutFeedback>
    );
  };

  const renderLogoOrIcon = (
    logo: ImageSourcePropType,
    onLogoPress: (() => void) | undefined,
    icon: string,
    onIconPress: (() => void) | undefined,
  ) => {
    if (logo) {
      return renderLogo(logo, onLogoPress);
    }
    if (icon) {
      return renderIcon(icon, onIconPress);
    }

    return null;
  };

  const searchbarEntryContainerStyle = containerStyle
    ? { ...styles.searchbarEntryContainer, ...(containerStyle as object) }
    : styles.searchbarEntryContainer;

  const searchbaerEntryTextInputStyle = inputStyle
    ? { ...styles.textInput, ...(inputStyle as object) }
    : styles.textInput;

  console.log(searchbarEntryContainerStyle);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={searchbarEntryContainerStyle}>
        {renderLogoOrIcon(leftLogo, onLeftLogoPress, leftIcon, onLeftIconPress)}
        <View style={{ flex: 4, minHeight: 30 }}>
          <TextInput
            // style={inputStyle}
            style={searchbaerEntryTextInputStyle}
            value={value}
            editable={false}
            numberOfLines={1}
          />
        </View>
        {renderLogoOrIcon(
          rightLogo,
          onRightLogoPress,
          rightIcon,
          onRightIconPress,
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

SearchbarEntry.defaultProps = {
  value: 'Search',
  onPress: () => {},
  leftIcon: null,
  rightIcon: null,
  leftLogo: null,
  rightLogo: null,
  onLeftIconPress: null,
  onRightIconPress: null,
  onLeftLogoPress: null,
  onRightLogoPress: null,
};

export default SearchbarEntry;
