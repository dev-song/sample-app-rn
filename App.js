import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loading from './Loading';
import TextExpanderScreen from './TextExpander';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Text Expander">
        <Stack.Screen
          name="Loading"
          component={Loading}
        />
        <Stack.Screen
          name="Text Expander"
          component={TextExpanderScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}