import React, {useState, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontCustom} from '../../utils/fonts';
import CheckBox from './CheckBox';

interface Checkbox {
  id: number;
  title: string;
  checked: boolean;
}

export const CheckboxGroup: React.FC = () => {
  const [checkboxes, setCheckboxes] = useState<Checkbox[]>([
    {id: 1, title: 'تماس', checked: false},
    {id: 2, title: 'پیام', checked: false},
    {id: 3, title: 'چت', checked: false},
  ]);

  const toggleCheckbox = useCallback((index: number) => {
    setCheckboxes(prevCheckboxes => {
      const updatedCheckboxes = [...prevCheckboxes];
      updatedCheckboxes[index].checked = !updatedCheckboxes[index].checked;
      return updatedCheckboxes;
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>نوع ارتباط</Text>
      {checkboxes.map((cb, index) => (
        <View style={styles.item} key={cb.id}>
          <CheckBox
            selected={cb.checked}
            onPress={() => toggleCheckbox(index)}
          />
          <Text style={styles.text}>{cb.title}</Text>
        </View>
      ))}
    </View>
  );
};

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
    marginLeft: 10,
  },
  text: {
    fontFamily: FontCustom.bold,
    marginHorizontal: 5,
  },
  item: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
});
