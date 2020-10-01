import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Please enter your name below!</Text>
      <TextInput style={styles.input} value="Text Input" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'salmon',
    backgroundColor: 'cornsilk',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 120,
    padding: 20,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center'
  }
});
