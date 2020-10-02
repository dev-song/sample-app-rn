import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function App() {
  const [userName, onChangeName] = React.useState('Default');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Please enter your name below!</Text>
        <TextInput
          style={styles.inputName}
          onChangeText={text => onChangeName(text)}
          value={userName}
        />
        <StatusBar style="auto" />
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.expandedName}>{userName}</Text>
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
  inputName: {
    width: 120,
    marginTop: 10,
    padding: 5,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center'
  },
  expandedName: {
    fontSize: 40
  }
});
