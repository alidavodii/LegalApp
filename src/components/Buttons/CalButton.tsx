import React from 'react';
import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {ColorsCustom} from '../../utils/Colors';
import {FontCustom} from '../../utils/fonts';

interface CalendarButtonProps {
  title: string;
  onPress: () => void;
}

const CalendarButton: React.FC<CalendarButtonProps> = React.memo(
  ({title, onPress}) => {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
        <Image
          source={require('../../assets/images/icons/calendar.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    );
  },
);

export default CalendarButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: ColorsCustom.background,
    height: 41,
    borderWidth: 1,
    borderRadius: 8,
    width: 167,
    padding: 5,
  },
  title: {
    fontFamily: FontCustom.bold,
    fontSize: 14,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 5,
  },
});
