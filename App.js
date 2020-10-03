import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loading from './Loading';

function TextExpander() {
  const [text, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Enter text below to expand!</Text>
        <TextInput
          style={styles.inputText}
          onChangeText={text => onChangeText(text)}
          placeholder='Your Name'
          value={text}
        />
        <StatusBar style="auto" />
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.expandedText}>{text}</Text>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Loading"
          component={Loading}
        /> */}
        <Stack.Screen
          name="Text Expander"
          component={TextExpander}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cornsilk',
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingVertical: 40,
    backgroundColor: 'salmon',
  },
  resultContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    width: 120,
    marginTop: 10,
    padding: 5,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center'
  },
  expandedText: {
    fontSize: 50
  }
});
