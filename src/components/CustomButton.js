/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, label}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#AD40AF',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 16,
          color: '#FFF',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
