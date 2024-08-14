import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Header from '../components/Header';
import Banner from '../components/Banner';
import PanelType from '../components/PanelType';
import Title from '../components/Title';
import DropDownButton from '../components/DropDownButton';
import {CheckboxGroup} from '../components/Buttons/CheckboxGroup';
import CalButton from '../components/Buttons/CalButton';
import Icon from 'react-native-vector-icons/Feather';
import {ColorsCustom} from '../utils/Colors';
import TextareaInputCm from '../components/Inputs/TextareaInputCm';
import ImageUploader from '../components/ImageUploader';
import TextInputCm from '../components/Inputs/TextInputCm';
import useLegalScreen from './useLegalScreen';
import CategoryModal from '../components/Modals/CategoryModal';
import SubscriptionCategoryModal from '../components/Modals/SubscriptionCategoryModal';
import CalendarModal from '../components/Modals/CalendarModal';
import {FontCustom} from '../utils/fonts';
import CustomButton from '../components/Buttons/CustomButton';

const {width} = Dimensions.get('window');

export default function LegalScreen() {
  const {
    CategoryModalVisible,
    setCategoryModalVisible,
    SubscriptionCategoryModalVisible,
    setSubscriptionCategoryModalVisible,
    CalendarModalVisible,
    setCalendarModalVisible,
    categories,
    subscriptionCategories,
  } = useLegalScreen();

  const handleCalendarModalOpen = () => setCalendarModalVisible(true);
  const handleCategoryModalOpen = () => setCategoryModalVisible(true);
  const handleSubscriptionCategoryModalOpen = () =>
    setSubscriptionCategoryModalVisible(true);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <Banner />
        <PanelType />

        <Title title="دسته بندی" />
        <DropDownButton
          title="انتخاب کنید"
          icon={<Icon name="chevron-down" size={30} />}
          onPress={handleCategoryModalOpen}
          showCollapse={false}
        />

        <Title title="دسته بندی اشتراک" />
        <DropDownButton
          title="انتخاب کنید"
          icon={<Icon name="chevron-down" size={30} />}
          onPress={handleSubscriptionCategoryModalOpen}
          showCollapse={false}
        />

        <CheckboxGroup />

        <TextInputCm placeholder="نام شرکت" onChangeText={() => {}} value="" />
        <TextInputCm
          placeholder="ارایه کننده آگهی"
          onChangeText={() => {}}
          value=""
        />

        <DropDownButton
          title="شماره تلفن"
          icon={<Icon name="chevron-down" size={30} />}
          onPress={() => {}}
          showCollapse
          list={[{tel: '09332221133'}]}
        />

        <TextInputCm
          placeholder="شناسه ملی شرکت"
          onChangeText={() => {}}
          value=""
        />

        <View style={styles.calendarButtons}>
          <CalButton
            title="تاریخ شروع روزنامه رسمی"
            onPress={handleCalendarModalOpen}
          />
          <CalButton
            title="تاریخ پایان روزنامه رسمی"
            onPress={handleCalendarModalOpen}
          />
        </View>

        <DropDownButton
          title="حوزه فعالیت"
          icon={<Icon name="chevron-down" size={30} />}
          onPress={() => {}}
          showCollapse={false}
        />

        <DropDownButton
          title="ثبت لوکیشن دفاتر"
          icon={<Icon name="chevron-down" size={30} />}
          onPress={() => {}}
          showCollapse={false}
        />

        <DropDownButton
          title="مهارت ها"
          icon={
            <Icon name="plus-square" size={20} color={ColorsCustom.green} />
          }
          onPress={() => {}}
          showCollapse={false}
        />

        <DropDownButton
          title="افتخارات و جوایز کسب شده"
          icon={
            <Icon name="plus-square" size={20} color={ColorsCustom.green} />
          }
          onPress={() => {}}
          showCollapse={false}
        />

        <TextareaInputCm
          placeholder="جزییات و نکات قابل توجه کاری خود را دقیق و کامل بنویسید."
          onChangeText={() => {}}
          value=""
        />

        <Text style={styles.imageDescription}>
          بارگذاری عکس پروفایل، کارت ملی پشت و رو، جواز کسب و کار و روزنامه رسمی
          به ترتیب بارگذاری نمایید.
        </Text>

        <ImageUploader />

        <CategoryModal
          visible={CategoryModalVisible}
          onClose={setCategoryModalVisible}
          data={categories}
        />

        <SubscriptionCategoryModal
          data={subscriptionCategories}
          onClose={setSubscriptionCategoryModalVisible}
          visible={SubscriptionCategoryModalVisible}
        />

        <CalendarModal
          visible={CalendarModalVisible}
          onClose={setCalendarModalVisible}
        />

        <CustomButton
          title={'تبث'}
          onPress={() => {}}
          style={styles.submitButton}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  submitButton: {
    position: 'static',
    width: width * 0.7,
    height: 54,
    marginHorizontal: width * 0.15,
    marginBottom: 100,
    marginTop: 20,
  },
  calendarButtons: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  imageDescription: {
    marginHorizontal: 30,
    fontFamily: FontCustom.bold,
    fontSize: 14,
    marginBottom: 20,
  },
});
