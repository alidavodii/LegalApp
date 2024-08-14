import React from 'react';
import {View, StyleSheet} from 'react-native';
import CustomButton from '../Buttons/CustomButton';
import CustomModal from './CustomModal';
import {ColorsCustom} from '../../utils/Colors';
import {FontCustom} from '../../utils/fonts';
import DatePicker, {getFormatedDate} from 'react-native-modern-datepicker';

interface CalendarModalProps {
  visible: boolean;
  onClose: (val: boolean) => void;
}

const CalendarModal: React.FC<CalendarModalProps> = React.memo(
  ({visible, onClose}) => {
    const handleDateChange = (date: string) => {
      // ...
    };

    return (
      <CustomModal
        visible={visible}
        onClose={() => onClose(false)}
        style={styles.modal}>
        <View style={styles.container}>
          <DatePicker
            isGregorian={false}
            options={{
              defaultFont: FontCustom.medium,
              headerFont: FontCustom.medium,
            }}
            selected={getFormatedDate(new Date(), 'jYYYY/jMM/jDD')}
            onDateChange={handleDateChange}
          />
          <CustomButton title="تایید" onPress={() => onClose(false)} />
        </View>
      </CustomModal>
    );
  },
);

export default CalendarModal;

const styles = StyleSheet.create({
  modal: {
    height: 400,
  },
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
