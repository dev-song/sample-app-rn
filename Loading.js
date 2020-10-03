import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Loading({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.loadingText}>Loading...</Text>
      <Button
        title="Go to Text Expander"
        onPress={() => navigation.navigate('Text Expander')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cornsilk'
  },
  loadingText: {
    fontSize: 30,
    marginBottom: 20
  }
})