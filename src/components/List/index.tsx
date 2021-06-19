import React, { useMemo } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Ripple from 'react-native-material-ripple';

// eslint-disable-next-line import/no-unresolved
import IonIcon from 'react-native-vector-icons/Ionicons';
// eslint-disable-next-line import/no-unresolved
import { Images, useColors, Chip } from 'frontatish';
import { ListProps } from './types';

const List = (props: ListProps) => {
  const Colors = useColors();
  const {
    leftLabel,
    leftSubtext,
    rightLabel,
    rightSubtext,
    leftChipLabel,
    rightChipLabel,
    sparkLine,
    disabled,
    onPress,
    labelStyle,
    subtextStyle,
    containerStyle,
  } = props;

  const getChip = (chipLabel: string | undefined) => {
    return (
      <>
        {chipLabel ? (
          <Chip label={chipLabel} containerStyle={styles.chip} />
        ) : null}
      </>
    );
  };
  const getLabelSubtextChip = (
    label: string,
    subtext: string | undefined,
    chipLabel: string | undefined,
  ) => {
    return (
      <>
        <Text style={[styles.label, { color: Colors.font_1 }, labelStyle]}>
          {label}
        </Text>
        {subtext ? (
          <Text
            style={[styles.subtext, { color: Colors.font_1 }, subtextStyle]}
          >
            {subtext}
          </Text>
        ) : null}
        {useMemo(() => getChip(chipLabel), [chipLabel])}
      </>
    );
  };

  const getLeftLabelSubtextView = (
    label: string,
    subtext: string | undefined,
    chipLabel: string | undefined,
  ) => {
    return (
      <View style={styles.leftView}>
        {getLabelSubtextChip(label, subtext, chipLabel)}
      </View>
    );
  };
  const getRightLabelSubtextView = (
    label: string,
    subtext: string | undefined,
    chipLabel: string | undefined,
  ) => {
    return (
      <View style={styles.rightView}>
        {getLabelSubtextChip(label, subtext, chipLabel)}
      </View>
    );
  };

  return (
    <View>
      <Ripple
        onPress={onPress}
        disabled={disabled}
        style={[
          styles.container,
          { backgroundColor: Colors.white },
          containerStyle,
        ]}
      >
        {getLeftLabelSubtextView(leftLabel, leftSubtext, leftChipLabel)}
        {sparkLine ? (
          <View>
            <Image
              source={Images.sparkLine}
              style={styles.sparkLine}
              resizeMethod="auto"
            />
          </View>
        ) : null}
        {rightLabel
          ? getRightLabelSubtextView(rightLabel, rightSubtext, rightChipLabel)
          : null}
        {!disabled ? (
          <IonIcon
            name="ios-arrow-forward"
            size={10}
            style={styles.arrowIcon}
          />
        ) : null}
      </Ripple>
    </View>
  );
};

List.defaultProps = {
  sparkLine: false,
  disabled: false,
};

const styles = StyleSheet.create({
  label: { fontSize: 16 },
  subtext: { fontSize: 12, marginTop: 6 },
  chip: { marginTop: 6 },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  leftView: {
    flex: 4,
    alignItems: 'flex-start',
  },
  rightView: {
    flex: 3,
    alignItems: 'flex-end',
  },
  sparkLine: { height: 54, width: 92 },
  arrowIcon: { paddingRight: 8, paddingLeft: 14 },
});

export default List;
