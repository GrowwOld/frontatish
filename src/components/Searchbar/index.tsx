import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // eslint-disable-line import/no-unresolved
import { useColors } from '../../themes';
import { SearchbarProps } from './types';
import getStyles from './helper';

const Searchbar = (props: SearchbarProps) => {
  const Colors = useColors();
  const styles = getStyles(Colors);

  const {
    containerStyle,
    inputStyle,
    placeholderTextColor = Colors.font_2, // cannot define in defaultProps as the styles depend on Colors
    placeholder,
    value,
    clearIcon,
    backIcon,
    showClearIcon,
    showBackIcon,
    autoFocus,
    onChangeText,
    onBackIconPress,
    onClearIconPress,
  } = props;

  const renderClearIcon = () => {
    if (!showClearIcon) {
      return null;
    }
    const opacity = value ? 1 : 0;
    // we have to show transparent clear icon when valu ein textinput is empty
    // otherwise the text will move left once the clear icon is rendered
    const onPress = () => {
      onClearIconPress ? onClearIconPress() : onChangeText('');
    };
    return (
      <Icon
        name={clearIcon}
        style={{ opacity, alignSelf: 'center' }}
        size={30}
        onPress={() => onPress()}
        color={Colors.font_1}
      />
    );
  };

  const renderBackIcon = () => {
    if (!showBackIcon) {
      return null;
    }
    return (
      <Icon
        name={backIcon}
        style={{ alignSelf: 'center' }}
        size={30}
        onPress={onBackIconPress}
        color={Colors.font_1}
      />
    );
  };

  const searchbarContainerStyle = containerStyle
    ? { ...styles.searchbarContainer, ...(containerStyle as object) }
    : styles.searchbarContainer;
  const searchbarTextInputStyle = inputStyle
    ? { ...styles.textInput, ...(inputStyle as object) }
    : styles.textInput;

  return (
    <>
      <View style={searchbarContainerStyle}>
        {renderBackIcon()}
        <View style={{ flex: 4, minHeight: 30 }}>
          {/* to maintain consistency with SearchbarEntry */}
          <TextInput
            // style={inputStyle}
            style={searchbarTextInputStyle}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            value={value}
            onChangeText={onChangeText}
            autoFocus={autoFocus}
            numberOfLines={1}
            selectionColor={Colors.primary}
          />
        </View>
        {renderClearIcon()}
      </View>
    </>
  );
};

Searchbar.defaultProps = {
  placeholder: 'Search',
  clearIcon: 'clear',
  backIcon: 'arrow-back',
  showClearIcon: true,
  showBackIcon: true,
  onChangeText: () => {},
  value: '',
  autoFocus: true,
  onBackIconPress: () => {},
};

export default Searchbar;
