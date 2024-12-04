// components/ButtonComponent.js
import React from 'react';
import { View, Button } from 'react-native';

const ButtonComponent = () => {
  const fruit = (val) => {
    console.warn(val);
  };

  return (
    <View>
      <Button
        title="Press Me"
        onPress={() => fruit("hello rushi")}
        color={'green'}
      />
    </View>
  );
};

export default ButtonComponent;
