import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {ColorsCustom} from '../../utils/Colors';

interface CheckBoxProps {
  selected: boolean;
  onPress: () => void;
}

const CheckBox: React.FC<CheckBoxProps> = React.memo(({selected, onPress}) => {
  const borderColor = selected ? ColorsCustom.red : ColorsCustom.black;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {borderColor}]}>
      {selected && <Icon name="check" color={ColorsCustom.red} />}
    </TouchableOpacity>
  );
});

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    height: 18,
    width: 18,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
