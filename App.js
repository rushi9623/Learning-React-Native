import React from 'react';
import { View, Text, Button } from 'react-native';
import Data from './components/Data'; // Importing Data component correctly

const App = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Welcome to My React Native App!</Text>
      <Text style={{ fontSize: 20 }}>Welcome to My React Native App!</Text>
      <Button title="Press Me" />
      <UserData />
      <Data /> {/* Rendering the Data component */}
    </View>
  );
};

// UserData Component
const UserData = () => {
  return (
    <View>
      <Text style={{ fontSize: 20 }}>Name: Rushikesh</Text>
      <Text style={{ fontSize: 20 }}>Age: 24</Text>
      <Text style={{ fontSize: 20 }}>Email: rushi@gmail.com</Text>
    </View>
  );
};

export default App;
