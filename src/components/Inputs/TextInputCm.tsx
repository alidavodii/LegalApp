import React from 'react';
import {View, TextInput, StyleSheet, TextInputProps} from 'react-native';
import {FontCustom} from '../../utils/fonts';
import {ColorsCustom} from '../../utils/Colors';

interface TextInputCmProps extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const TextInputCm: React.FC<TextInputCmProps> = React.memo(
  ({placeholder, value, onChangeText}) => {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>
    );
  },
);

export default TextInputCm;

const styles = StyleSheet.create({
  container: {
    height: 47,
    backgroundColor: ColorsCustom.gray,
    marginHorizontal: 30,
    borderRadius: 14,
    marginBottom: 15,
  },
  input: {
    fontFamily: FontCustom.bold,
    fontSize: 14,
    height: '100%',
    paddingHorizontal: 20,
    color: ColorsCustom.lightGray,
    textAlign: 'right',
  },
});
