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
    containerStyle = styles.searchbarEntryContainer,
    inputStyle = styles.textInput,
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
    return (
      <Icon name={name} size={30} onPress={onIconPress} color={Colors.font_1} />
    );
  };

  const renderLogo = (
    name: ImageSourcePropType,
    onLogoPress: (() => void) | undefined,
  ) => {
    const source = name;

    return (
      <TouchableWithoutFeedback onPress={onLogoPress}>
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

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={containerStyle}>
        {renderLogoOrIcon(leftLogo, onLeftLogoPress, leftIcon, onLeftIconPress)}
        <View style={{ flex: 4, minHeight: 30 }}>
          <TextInput
            style={inputStyle}
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
  onLeftIconPress: () => {},
  onRightIconPress: () => {},
  onLeftLogoPress: () => {},
  onRightLogoPress: () => {},
};

export default SearchbarEntry;
