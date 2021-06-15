import React from 'react';
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  ImageSourcePropType,
  Image,
  StyleProp,
  ImageStyle,
  TextStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // eslint-disable-line import/no-unresolved
import { useColors } from '../../themes';
import { SearchbarProps } from './types';
import { getStyles, getCustomProps, getTextInputProps } from './helper';

const Searchbar = (props: SearchbarProps) => {
  const Colors = useColors();
  const styles = getStyles(Colors);

  // destructure custom props and TextInput props separately
  const customProps = getCustomProps(props);
  const textInputProps = getTextInputProps(customProps, props);

  const {
    backIcon,
    backIconStyle,
    clearIcon,
    clearIconStyle,
    containerStyle,
    inputStyle,
    leftIcon,
    leftIconStyle,
    leftLogo,
    leftLogoStyle,
    onBackIconPress,
    onClearIconPress,
    onLeftIconPress,
    onLeftLogoPress,
    onRightIconPress,
    onRightLogoPress,
    onPress,
    rightIcon,
    rightIconStyle,
    rightLogo,
    rightLogoStyle,
    showClearIcon,
    showBackIcon,
  } = customProps;

  const { onChangeText, editable, value } = textInputProps;

  const renderClearIcon = () => {
    if (!showClearIcon) {
      return null;
    }

    // we have to show transparent clear icon when value in textinput is empty
    // otherwise the text will move left once the clear icon is rendered
    const opacity = value ? 1 : 0;

    const onPressUtil = () => {
      if (opacity) {
        if (onClearIconPress) {
          onClearIconPress();
        } else if (onChangeText) {
          onChangeText('');
        }
      }
    };

    return renderIcon(clearIcon, clearIconStyle, onPressUtil, opacity);
  };

  const renderBackIcon = () => {
    if (!showBackIcon) {
      return null;
    }
    const opacity = 1;
    return renderIcon(backIcon, backIconStyle, onBackIconPress, opacity);
  };

  const renderLogo = (
    name: ImageSourcePropType,
    logoStyle: StyleProp<ImageStyle> | undefined,
    onLogoPress: (() => void) | undefined,
  ) => {
    const source = name;

    const onPressUtil = onLogoPress || onPress;

    return (
      <TouchableWithoutFeedback onPress={onPressUtil}>
        <Image
          source={source}
          style={{ height: 30, width: 30, ...(logoStyle as object) }}
        />
      </TouchableWithoutFeedback>
    );
  };

  const renderIcon = (
    name: string | undefined,
    iconStyle: StyleProp<TextStyle> | undefined,
    onIconPress: (() => void) | undefined,
    opacity: number,
  ) => {
    const onPressUtil = onIconPress || onPress;

    return (
      <Icon
        name={name}
        size={30}
        onPress={onPressUtil}
        color={Colors.font_1}
        style={{ opacity, alignSelf: 'center', ...(iconStyle as object) }}
      />
    );
  };

  const renderLogoOrIcon = (
    logo: ImageSourcePropType | undefined,
    logoStyle: StyleProp<ImageStyle> | undefined,
    onLogoPress: (() => void) | undefined,
    icon: string | undefined,
    iconStyle: StyleProp<TextStyle> | undefined,
    onIconPress: (() => void) | undefined,
  ) => {
    if (logo) {
      return renderLogo(logo, logoStyle, onLogoPress);
    }
    if (icon) {
      const opacity = 1;
      return renderIcon(icon, iconStyle, onIconPress, opacity);
    }

    return null;
  };

  const renderLeft = () => {
    if (!editable) {
      return renderLogoOrIcon(
        leftLogo,
        leftLogoStyle,
        onLeftLogoPress,
        leftIcon,
        leftIconStyle,
        onLeftIconPress,
      );
    }
    return renderBackIcon();
  };

  const renderRight = () => {
    if (!editable) {
      return renderLogoOrIcon(
        rightLogo,
        rightLogoStyle,
        onRightLogoPress,
        rightIcon,
        rightIconStyle,
        onRightIconPress,
      );
    }
    return renderClearIcon();
  };

  const searchbarContainerStyle = containerStyle
    ? { ...styles.searchbarContainer, ...(containerStyle as object) }
    : styles.searchbarContainer;

  const searchbarTextInputStyle = inputStyle
    ? { ...styles.textInput, ...(inputStyle as object) }
    : styles.textInput;

  textInputProps.onTouchStart = editable
    ? textInputProps.onTouchStart
    : onPress;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={searchbarContainerStyle}>
        {renderLeft()}
        <TextInput {...textInputProps} style={searchbarTextInputStyle} />
        {renderRight()}
      </View>
    </TouchableWithoutFeedback>
  );
};

Searchbar.defaultProps = {
  autoCapitalize: 'none',
  autoCorrect: true,
  autoFocus: true,
  backIcon: 'arrow-back',
  clearIcon: 'clear',
  editable: true,
  onChangeText: () => {},
  placeholder: 'Search',
  // default for placeholderTextColor and selectionColor defined while destructuring props
  showClearIcon: true,
  showBackIcon: true,
};

export default Searchbar;
