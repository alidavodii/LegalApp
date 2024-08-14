import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {ColorsCustom} from '../utils/Colors';
import {FontCustom} from '../utils/fonts';

interface DropDownButtonProps {
  title: string;
  icon: React.ReactNode;
  onPress: () => void;
  showCollapse: boolean;
  list?: {tel: string}[];
}

const DropDownButton: React.FC<DropDownButtonProps> = React.memo(
  ({title, icon, onPress, showCollapse, list = []}: DropDownButtonProps) => {
    return (
      <View style={styles.collapse}>
        <TouchableOpacity onPress={onPress} style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          {icon}
        </TouchableOpacity>

        {showCollapse &&
          list.map((item, index) => (
            <View key={index} style={styles.innerCollapse}>
              <Text style={styles.title}>{item.tel}</Text>
              <Image
                source={require('../assets/images/icons/edit.png')}
                style={styles.editIcon}
              />
            </View>
          ))}
      </View>
    );
  },
);

export default DropDownButton;

const styles = StyleSheet.create({
  collapse: {
    backgroundColor: ColorsCustom.white,
    marginHorizontal: 30,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  innerCollapse: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    padding: 20,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    backgroundColor: ColorsCustom.white,
    height: 47,
    elevation: 2,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: FontCustom.bold,
    fontSize: 14,
  },
  editIcon: {
    width: 15,
    height: 15,
  },
});
