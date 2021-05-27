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
    leftChip,
    rightChip,
    sparkLine,
    clickable,
    onClick,
  } = props;

  const getChip = (showChip: boolean) => {
    return <>{showChip ? <Chip style={styles.chipStyle} /> : null}</>;
  };
  const getLabelSubtextChip = (
    label: string,
    subtext: string | undefined,
    showChip: boolean,
  ) => {
    return (
      <>
        <Text style={[styles.label, { color: Colors.font_1 }]}>{label}</Text>
        {subtext ? (
          <Text style={[styles.subtext, { color: Colors.font_1 }]}>
            {subtext}
          </Text>
        ) : null}
        {useMemo(() => getChip(showChip), [showChip])}
      </>
    );
  };

  const getLeftLabelSubtextView = (
    label: string,
    subtext: string | undefined,
    showChip: boolean,
  ) => {
    return (
      <View
        style={{
          flex: 4,
          alignItems: 'flex-start',
        }}
      >
        {getLabelSubtextChip(label, subtext, showChip)}
      </View>
    );
  };
  const getRightLabelSubtextView = (
    label: string,
    subtext: string | undefined,
    showChip: boolean,
  ) => {
    return (
      <View
        style={{
          flex: 3,
          alignItems: 'flex-end',
        }}
      >
        {getLabelSubtextChip(label, subtext, showChip)}
      </View>
    );
  };

  return (
    <View>
      <Ripple
        onPress={onClick}
        disabled={!clickable}
        style={[styles.containerStyle, { backgroundColor: Colors.white }]}
      >
        {getLeftLabelSubtextView(leftLabel, leftSubtext, leftChip)}
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
          ? getRightLabelSubtextView(rightLabel, rightSubtext, rightChip)
          : null}
        {clickable ? (
          <IonIcon
            name="ios-arrow-forward"
            size={10}
            style={styles.paddingHorizontal10}
          />
        ) : null}
      </Ripple>
    </View>
  );
};

List.defaultProps = {
  leftChip: false,
  rightChip: false,
  sparkLine: false,
  clickable: true,
};

const styles = StyleSheet.create({
  label: { fontSize: 16 },
  subtext: { fontSize: 12, marginTop: 6 },
  chipStyle: { marginTop: 6 },
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  sparkLine: { height: 54, width: 92 },
  paddingHorizontal10: { paddingRight: 8, paddingLeft: 14 },
});

export default List;
