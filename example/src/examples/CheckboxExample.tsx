import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { CheckBox, useColors } from 'frontatish';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CheckboxExample = () => {
  const [tick, setTick] = useState(false);
  const Colors = useColors();
  const onPress = () => {
    setTick(!tick);
  };
  const accessibleState = { checked: tick, disabled: false };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        onPress={onPress}
        style={styles.alignCheckBox}
        accessibilityRole="checkbox"
        accessibilityState={accessibleState}
      >
        <CheckBox checked={tick} containerStyle={styles.checkboxContainer} />
        <Text>Example Checkbox</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPress}
        style={styles.alignCheckBox}
        accessibilityRole="checkbox"
        accessibilityState={accessibleState}
      >
        <CheckBox
          checked={tick}
          containerStyle={styles.checkboxContainer}
          size="md"
        />
        <Text>Example Checkbox</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPress}
        style={styles.alignCheckBox}
        accessibilityRole="checkbox"
        accessibilityState={accessibleState}
      >
        <CheckBox
          checked={tick}
          containerStyle={styles.checkboxContainer}
          size="lg"
        />
        <Text>Example Checkbox</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPress}
        style={styles.alignCheckBox}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: true, disabled: true }}
      >
        <CheckBox
          checked
          disabled
          containerStyle={styles.checkboxContainer}
          size="lg"
        />
        <Text>Example Checkbox</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPress}
        style={styles.alignCheckBox}
        accessibilityRole="checkbox"
      >
        <CheckBox
          checked={false}
          disabled
          containerStyle={styles.checkboxContainer}
          size="lg"
        />
        <Text>Example Checkbox</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPress}
        style={styles.alignCheckBox}
        accessibilityRole="checkbox"
        accessibilityState={accessibleState}
      >
        <CheckBox
          checked={tick}
          checkColor={Colors.primary}
          containerStyle={{
            marginVertical: 20,
            backgroundColor: Colors.white,
            borderWidth: 2,
            borderColor: Colors.primary,
          }}
          size="lg"
        />
        <Text>Example Checkbox</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  alignCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: { marginVertical: 20, marginRight: 10 },
});
export default CheckboxExample;
