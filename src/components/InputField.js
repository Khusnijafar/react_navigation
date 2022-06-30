/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';

const InputField = ({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}>
      {icon}
      {inputType === 'password' ? (
        <TextInput
          placeholder={label}
          style={{flex: 1, paddingVertical: 0}}
          keyboardType={keyboardType}
          secureTextEntry={true}
        />
      ) : (
        <TextInput
          placeholder={label}
          style={{flex: 1, paddingVertical: 0}}
          keyboardType={keyboardType}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{color: '#AD40AF', fontWeight: '700'}}>
          {fieldButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputField;
