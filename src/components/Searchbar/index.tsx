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
import getStyles from './helper';

const Searchbar = (props: SearchbarProps) => {
  const Colors = useColors();
  const styles = getStyles(Colors);

  const {
    autoFocus,
    backIcon,
    backIconStyle,
    clearIcon,
    clearIconStyle,
    containerStyle,
    editable,
    inputStyle,
    leftIcon,
    leftIconStyle,
    leftLogo,
    leftLogoStyle,
    onBackIconPress,
    onChangeText,
    onClearIconPress,
    onLeftIconPress,
    onLeftLogoPress,
    onRightIconPress,
    onRightLogoPress,
    onPress,
    placeholder,
    placeholderTextColor = Colors.font_2,
    rightIcon,
    rightIconStyle,
    rightLogo,
    rightLogoStyle,
    selectionColor = Colors.primary,
    showClearIcon,
    showBackIcon,
    value,
  } = props;

  const renderClearIcon = () => {
    if (!showClearIcon) {
      return null;
    }

    // we have to show transparent clear icon when value in textinput is empty
    // otherwise the text will move left once the clear icon is rendered
    const opacity = value ? 1 : 0;

    const onPressUtil = () => {
      if (opacity) {
        onClearIconPress ? onClearIconPress() : onChangeText('');
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

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={searchbarContainerStyle}>
        {renderLeft()}
        <TextInput
          style={searchbarTextInputStyle}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={onChangeText}
          autoFocus={autoFocus}
          numberOfLines={1}
          selectionColor={selectionColor}
          editable={editable}
          onTouchStart={onPress}
          // we need onTouchStart because in ios, onPress of Touchable isn't wokring on TextInput
          // we still need touchable because onTouchStart isn't working in android..
          // ..and also because we need onPress for any whitespace & icons/logos in the container..
          // ..(onPress of touchable works on whitespace & icons/logos even in ios)
        />
        {renderRight()}
      </View>
    </TouchableWithoutFeedback>
  );
};

Searchbar.defaultProps = {
  autoFocus: true,
  backIcon: 'arrow-back',
  clearIcon: 'clear',
  editable: true,
  onChangeText: () => {},
  placeholder: 'Search',
  // default for placeholderTextColor and selectionColor defined while destructuring props
  showClearIcon: true,
  showBackIcon: true,
  value: '',
};

export default Searchbar;
