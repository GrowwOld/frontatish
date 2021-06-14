import React from 'react';
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  ImageSourcePropType,
  Image,
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
    clearIcon,
    containerStyle,
    editable,
    inputStyle,
    leftIcon,
    leftLogo,
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
    rightLogo,
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

    return renderIcon(clearIcon, onPressUtil, opacity);
  };

  const renderBackIcon = () => {
    if (!showBackIcon) {
      return null;
    }
    const opacity = 1;
    return renderIcon(backIcon, onBackIconPress, opacity);
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

  const renderIcon = (
    name: string | undefined,
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
        style={{ opacity, alignSelf: 'center' }}
      />
    );
  };

  const renderLogoOrIcon = (
    logo: ImageSourcePropType | undefined,
    onLogoPress: (() => void) | undefined,
    icon: string | undefined,
    onIconPress: (() => void) | undefined,
  ) => {
    if (logo) {
      return renderLogo(logo, onLogoPress);
    }
    if (icon) {
      const opacity = 1;
      return renderIcon(icon, onIconPress, opacity);
    }

    return null;
  };

  const renderLeft = () => {
    if (!editable) {
      return renderLogoOrIcon(
        leftLogo,
        onLeftLogoPress,
        leftIcon,
        onLeftIconPress,
      );
    }
    return renderBackIcon();
  };

  const renderRight = () => {
    if (!editable) {
      return renderLogoOrIcon(
        rightLogo,
        onRightLogoPress,
        rightIcon,
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
        <View style={{ flex: 4, minHeight: 30 }}>
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
          />
        </View>
        {renderRight()}
      </View>
    </TouchableWithoutFeedback>
  );
};

Searchbar.defaultProps = {
  autoFocus: true,
  backIcon: 'arrow-back',
  clearIcon: 'clear',
  onChangeText: () => {},
  placeholder: 'Search',
  // default for placeholderTextColor and selectionColor defined while destructuring props
  showClearIcon: true,
  showBackIcon: true,
  value: '',
};

export default Searchbar;
