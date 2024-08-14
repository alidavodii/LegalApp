import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {ColorsCustom} from '../../utils/Colors';

interface RadioButtonProps {
  selected: boolean;
  onPress: () => void;
  color?: string;
  borderColor?: string;
}

const RadioButton: React.FC<RadioButtonProps> = React.memo(
  ({selected, onPress, color = ColorsCustom.red, borderColor = '#000'}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.container, {borderColor}]}
        activeOpacity={0.7}>
        {selected && <View style={[styles.check, {backgroundColor: color}]} />}
      </TouchableOpacity>
    );
  },
);

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    height: 17,
    width: 17,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  check: {
    height: 9,
    width: 9,
    borderRadius: 6,
  },
});
