import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const Banner: React.FC = React.memo(() => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/slider.png')}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
});

export default Banner;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {
    width: width * 0.94,
    height: 146,
    borderRadius: 25,
  },
});
