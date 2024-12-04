import React from 'react';
import { View } from 'react-native';
import ButtonComponent from './components/ButtonComponent'; // Button handling component
import Stateandprops from './components/Stateandprops';

const App = () => {
  return (
    <View>
      <Stateandprops/>
      <ButtonComponent />
    </View>
  );
};

export default App;
