import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {ColorsCustom} from '../utils/Colors';
import {FontCustom} from '../utils/fonts';

interface HeaderProps {
  title?: string;
  onBackPress?: () => void;
}

const Header: React.FC<HeaderProps> = React.memo(
  ({title = 'فرم دریافت پنل', onBackPress}) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onBackPress}>
          <Icon name="arrow-left" size={24} color={ColorsCustom.blue} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  },
);

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: ColorsCustom.background,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
  title: {
    fontFamily: FontCustom.bold,
    fontSize: 14,
    color: ColorsCustom.textColor,
  },
});
