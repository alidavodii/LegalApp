import {useState} from 'react';

export interface Category {
  title: string;
}

interface SubscriptionCategory {
  title: string;
  price: string;
}

export default function useLegalScreen() {
  const [CategoryModalVisible, setCategoryModalVisible] =
    useState<boolean>(false);
  const [
    SubscriptionCategoryModalVisible,
    setSubscriptionCategoryModalVisible,
  ] = useState<boolean>(false);
  const [CalendarModalVisible, setCalendarModalVisible] =
    useState<boolean>(false);

  const categories: Category[] = [
    {title: 'موسسه داوری'},
    {title: 'موسسه حقوقی'},
  ];

  const subscriptionCategories: SubscriptionCategory[] = [
    {title: 'ویژه', price: '1,500,000'},
    {title: 'اساسی', price: '1,500,000'},
  ];

  return {
    CategoryModalVisible,
    setCategoryModalVisible,
    SubscriptionCategoryModalVisible,
    setSubscriptionCategoryModalVisible,
    CalendarModalVisible,
    setCalendarModalVisible,
    categories,
    subscriptionCategories,
  };
}
