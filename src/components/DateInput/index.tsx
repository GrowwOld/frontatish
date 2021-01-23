// base and lib imports
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { withColors } from '../../themes';

class DateInputExample extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onChange = (value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const { placeholder, Colors } = this.props;
    const styles = getStyles(Colors);
    return (
      <View style={{}}>
        <TextInput
          value={value}
          placeholder={placeholder}
          style={styles.dateInputContainer}
          onChangeText={this.onChange}
        />
      </View>
    );
  }
}

const getStyles = (Colors: any) => {
  return StyleSheet.create({
    dateInputContainer: {
      backgroundColor: Colors.font_4,
      padding: 15,
      fontSize: 18,
    },
  });
};
export default withColors(DateInputExample);
