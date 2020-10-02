import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function App() {
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
    paddingTop: 40,
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
