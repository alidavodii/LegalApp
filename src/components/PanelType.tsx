import React, {FC, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontCustom} from '../utils/fonts';
import RadioButton from './Buttons/RadioButton';

const PanelType: FC = () => {
  const [selected, setSelected] = useState<number>(0);
  const list = ['حقیقی', 'حقوقی'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>نوع پنل</Text>
      {list.map((item, index) => (
        <View style={styles.item} key={index}>
          <Text style={styles.text}>{item}</Text>
          <RadioButton
            selected={selected === index}
            onPress={() => setSelected(index)}
          />
        </View>
      ))}
    </View>
  );
};

export default PanelType;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row-reverse',
    marginHorizontal: 30,
    marginBottom: 20,
  },
  title: {
    fontFamily: FontCustom.bold,
  },
  text: {
    fontFamily: FontCustom.bold,
    marginHorizontal: 5,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
});
