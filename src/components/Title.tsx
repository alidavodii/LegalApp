import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontCustom} from '../utils/fonts';

interface TitleProps {
  title: string;
}

const Title: FC<TitleProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
  title: {
    fontFamily: FontCustom.bold,
    fontSize: 16,
  },
});
