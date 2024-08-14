import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../Buttons/CustomButton';
import RadioButton from '../Buttons/RadioButton';
import RadioButtonItem from '../Buttons/RadioButtonItem';
import CustomModal from './CustomModal';
import {ColorsCustom} from '../../utils/Colors';
import {FontCustom} from '../../utils/fonts';
import {Category} from '../../screens/useLegalScreen';

interface CategoryModalProps {
  visible: boolean;
  onClose: (val: boolean) => void;
  data: Category[];
}

const CategoryModal: React.FC<CategoryModalProps> = React.memo(
  ({visible, onClose, data}) => {
    const [selectCategory, setSelectCategory] = useState<number>(0);

    return (
      <CustomModal visible={visible} onClose={() => onClose(false)}>
        <View style={styles.container}>
          <View style={styles.categoryHeader}>
            <Text style={styles.title}>دسته بندی</Text>
          </View>
          {data.map((item, index) => (
            <RadioButtonItem
              key={index}
              title={item.title}
              icon={
                <RadioButton
                  selected={selectCategory === index}
                  onPress={() => setSelectCategory(index)}
                  color={ColorsCustom.red}
                />
              }
              onPress={() => setSelectCategory(index)}
            />
          ))}
          <CustomButton title="تایید و ادامه" onPress={() => onClose(true)} />
        </View>
      </CustomModal>
    );
  },
);

export default CategoryModal;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 30,
  },
  title: {
    fontFamily: FontCustom.bold,
    fontSize: 14,
  },
  categoryHeader: {
    elevation: 2,
    width: 96,
    height: 32,
    borderRadius: 10,
    backgroundColor: ColorsCustom.white,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },
});
