import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const Stateandprops = () => {
  const [name, setName] = useState('Bruce');

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>Props in React Native</Text>
      <Button title='Update Name' onPress={() => setName("Peter")} />
      <User name={name} />
    </View>
  );
};

const User = (props) => {
  return (
    <View style={{ backgroundColor: 'lightgreen', padding: 10, marginTop: 20 }}>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>{props.name}</Text>
    </View>
  );
};

export default Stateandprops;
