import React, {useState, memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../Buttons/CustomButton';
import RadioButton from '../Buttons/RadioButton';
import RadioButtonItem from '../Buttons/RadioButtonItem';
import CustomModal from './CustomModal';
import {ColorsCustom} from '../../utils/Colors';
import {FontCustom} from '../../utils/fonts';

interface Subscription {
  title: string;
  price: string;
}

interface SubscriptionCategoryModalProps {
  visible: boolean;
  onClose: (val: boolean) => void;
  data: Subscription[];
}

const SubscriptionCategoryModal = memo(
  ({visible, onClose, data}: SubscriptionCategoryModalProps) => {
    const [selectSubscriptionCategory, setSelectSubscriptionCategory] =
      useState<number>(0);

    const handleSubscriptionSelect = (index: number) => {
      setSelectSubscriptionCategory(index);
    };

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
                <View style={styles.iconContainer}>
                  <Text style={[styles.priceText, {color: ColorsCustom.blue}]}>
                    {item.price}
                  </Text>
                  <RadioButton
                    selected={selectSubscriptionCategory === index}
                    onPress={() => handleSubscriptionSelect(index)}
                    color={ColorsCustom.green}
                  />
                </View>
              }
              onPress={() => handleSubscriptionSelect(index)}
            />
          ))}
          <CustomButton title="تایید" onPress={() => onClose(false)} />
        </View>
      </CustomModal>
    );
  },
);

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
  iconContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  priceText: {
    fontFamily: FontCustom.bold,
    fontSize: 14,
    marginLeft: 10,
  },
});

export default SubscriptionCategoryModal;
