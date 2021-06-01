import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import IonIcon from 'react-native-vector-icons/Ionicons';

// eslint-disable-next-line import/no-unresolved
import { ChipProps } from './types';

const Chip = (props: ChipProps) => {
  const {
    label,
    onPress,
    disabled,
    iconName,
    iconStyle,
    onClose,
    isSelected,
    labelStyle,
    containerStyle,
    selectedContainerStyle,
  } = props;

  return (
    <View
      style={[
        styles.container,
        containerStyle,
        isSelected ? [styles.selectedContainer, selectedContainerStyle] : {},
      ]}
    >
      <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
        <View style={styles.iconLabelContainer}>
          {iconName ? (
            <IonIcon name={iconName} style={[styles.icon, iconStyle]} />
          ) : null}

          <Text style={[styles.label, labelStyle]}>{label}</Text>
        </View>
      </TouchableWithoutFeedback>

      {onClose ? (
        <TouchableWithoutFeedback onPress={onClose}>
          <IonIcon name="ios-close-circle" style={styles.closeIcon} size={15} />
        </TouchableWithoutFeedback>
      ) : null}
    </View>
  );
};

Chip.defaultProps = {
  label: 'Chip',
  disabled: false,
  iconName: null,
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    paddingHorizontal: 8,
    paddingVertical: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ECEDEF',
  },
  selectedContainer: {
    backgroundColor: '#00D09C',
  },
  label: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 12,
    letterSpacing: 0.01,
    lineHeight: 19,
  },
  iconLabelContainer: { flexDirection: 'row', alignItems: 'center' },
  icon: {
    paddingRight: 4,
  },
  closeIcon: { paddingLeft: 4, paddingVertical: 3 },
});

export default Chip;
