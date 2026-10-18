import React from 'react';
import { View, StyleSheet } from 'react-native';
import CoreComponents from '/workspaces/cs624-pe-worthington/PE02-CoreComponents/App.js';

export default function Index() {
  return (
    <View style={styles.container}>
      <CoreComponents />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});