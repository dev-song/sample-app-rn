import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Loading() {
  return (
    <View styles={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple'
  }
})