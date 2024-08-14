import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ColorsCustom} from '../../utils/Colors';
import {FontCustom} from '../../utils/fonts';

interface DropDownButtonProps {
  title: string;
  icon: React.ReactNode;
  onPress: () => void;
}

const RadioButtonItem: React.FC<DropDownButtonProps> = React.memo(
  ({title, icon, onPress}) => {
    return (
      <View style={styles.collapse}>
        <TouchableOpacity
          onPress={onPress}
          style={styles.container}
          activeOpacity={0.7}>
          <Text style={styles.title}>{title}</Text>
          {icon}
        </TouchableOpacity>
      </View>
    );
  },
);

export default RadioButtonItem;

const styles = StyleSheet.create({
  collapse: {
    backgroundColor: ColorsCustom.white,
    borderRadius: 20,
    marginBottom: 10,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    backgroundColor: ColorsCustom.white,
    height: 47,
    elevation: 2,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: FontCustom.bold,
    fontSize: 14,
  },
});
