import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {ColorsCustom} from '../../utils/Colors';
import {FontCustom} from '../../utils/fonts';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = React.memo(
  ({title, onPress, style}) => {
    return (
      <TouchableOpacity
        style={[styles.container, style]}
        onPress={onPress}
        activeOpacity={0.7}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  },
);

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row-reverse',
    backgroundColor: ColorsCustom.blue,
    height: 47,
    elevation: 2,
    borderRadius: 15,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  title: {
    fontFamily: FontCustom.bold,
    fontSize: 14,
    color: ColorsCustom.white,
  },
});
