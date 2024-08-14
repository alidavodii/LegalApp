import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {ColorsCustom} from '../../utils/Colors';
import {BlurView} from '@react-native-community/blur';
import Icon from 'react-native-vector-icons/Feather';

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  children,
  style,
}) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <BlurView style={styles.absolute} blurType="light" blurAmount={10} />
          <View style={[styles.modalContainer, style]}>
            <View style={styles.circle}>
              <Image source={require('../../assets/images/icon-app.png')} />
            </View>
            <TouchableOpacity style={styles.close} onPress={onClose}>
              <Icon name="x" color={ColorsCustom.red} size={15} />
            </TouchableOpacity>
            {children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorsCustom.lightBlue,
    width: '100%',
  },
  modalContainer: {
    width: 300,
    height: 300,
    backgroundColor: ColorsCustom.white,
    borderRadius: 40,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: ColorsCustom.lightBlue,
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: ColorsCustom.white,
    elevation: 1,
    borderRadius: 100,
    position: 'absolute',
    top: -25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    position: 'absolute',
    top: 25,
    right: 25,
  },
});

export default CustomModal;
