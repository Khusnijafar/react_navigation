/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {windowWidth} from '../utils/Dimensions';

const ListItem = ({photo, title, subTitle, isFree, price, onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
        <Image
          source={photo}
          style={{width: 50, height: 50, borderRadius: 10, marginRight: 8}}
        />
        <View style={{width: windowWidth - 220}}>
          <Text
            style={{
              color: '#333333',
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
            }}>
            {subTitle}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: '#333333',
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
              textTransform: 'uppercase',
            }}>
            {title}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: '#0AADA8',
          padding: 10,
          width: 100,
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: '#FFFFFF',
            textAlign: 'center',
            fontFamily: 'Roboto-Medium',
            fontSize: 14,
          }}>
          {isFree === 'Yes' && 'Play'}
          {isFree === 'No' && price}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
