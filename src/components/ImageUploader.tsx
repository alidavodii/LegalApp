import React, {FC, memo} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {ColorsCustom} from '../utils/Colors';
import Icon from 'react-native-vector-icons/Feather';

interface ImageUploaderProps {}

const ImageUploader: FC<ImageUploaderProps> = memo(() => {
  const imageSources = [require('../assets/images/slider.png')];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Icon name="camera" size={40} />
      </View>
      {imageSources.map((source, index) => (
        <View style={styles.imageCard} key={index}>
          <Image source={source} style={styles.image} />
          <View style={styles.badge}>
            <Icon name="x-square" color={ColorsCustom.white} size={17.5} />
          </View>
        </View>
      ))}
    </View>
  );
});

export default ImageUploader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row-reverse',
    backgroundColor: ColorsCustom.background,
    marginHorizontal: 25,
    marginBottom: 20,
  },
  card: {
    width: 75,
    height: 92,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    borderRadius: 12,
    backgroundColor: ColorsCustom.white,
    marginHorizontal: 5,
  },
  imageCard: {
    width: 75,
    height: 92,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    borderRadius: 12,
    backgroundColor: ColorsCustom.lightBlue,
    marginHorizontal: 5,
  },
  image: {
    borderRadius: 12,
    width: 65,
    height: 80,
    resizeMode: 'cover',
  },
  badge: {
    backgroundColor: ColorsCustom.red,
    borderRadius: 5,
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -5,
    right: -5,
  },
});
